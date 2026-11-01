/**
 * ESSANET Academy — Chat tuteur ancré sur le contenu des cours
 * RAG + LLM (clé configurée dans le code / admin uniquement)
 */
(function () {
  /**
   * === CONFIG LLM — ADMIN / DEV UNIQUEMENT ===
   * Collez la clé API ici. Les apprenants ne voient jamais ce panneau.
   * provider: "groq" | "openai" | "local"
   */
  var CHAT_LLM_CONFIG = {
    provider: "groq",
    apiKey: "",
    model: "",
  };

  const SETTINGS_KEY = "gsmag-academy-chat-settings";
  const HISTORY_KEY = "gsmag-academy-chat-history";

  const STOP = new Set(
    "a à au aux avec ce ces dans de des du elle en et eux il je la le les leur lui ma mais me même mes moi mon ne nos notre nous on ou par pas pour qu que qui sa se ses son sur ta te tes toi ton tu un une vos votre vous y the a an and or of to in on for is are was were be been being this that it as at by from with not your you we they he she how what when where why who which can could should would do does did have has had".split(
      /\s+/
    )
  );

  function t(key) {
    return window.Academy && Academy.t ? Academy.t(key) : key;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokens(s) {
    return normalize(s)
      .split(" ")
      .filter(function (w) {
        return w.length > 2 && !STOP.has(w);
      });
  }

  function isAdminUser() {
    var u = window.Academy && Academy.getSession && Academy.getSession();
    return !!(u && u.role === "admin");
  }

  /** Config code + override admin (localStorage) si présent */
  function getEffectiveSettings() {
    var base = {
      provider: CHAT_LLM_CONFIG.provider || "local",
      apiKey: String(CHAT_LLM_CONFIG.apiKey || "").trim(),
      model: String(CHAT_LLM_CONFIG.model || "").trim(),
    };
    try {
      var raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) {
        var over = JSON.parse(raw) || {};
        if (over.provider) base.provider = over.provider;
        if (over.apiKey) base.apiKey = String(over.apiKey).trim();
        if (over.model) base.model = String(over.model).trim();
      }
    } catch (e) {}
    return base;
  }

  function saveAdminSettings(s) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  }

  function historyKey() {
    var u = window.Academy && Academy.getSession && Academy.getSession();
    return HISTORY_KEY + ":" + ((u && u.email) || "guest");
  }

  function loadHistory() {
    try {
      var raw = localStorage.getItem(historyKey());
      if (raw) return JSON.parse(raw) || [];
    } catch (e) {}
    return [];
  }

  function saveHistory(msgs) {
    try {
      localStorage.setItem(historyKey(), JSON.stringify(msgs.slice(-40)));
    } catch (e) {}
  }

  function clearHistory() {
    try {
      localStorage.removeItem(historyKey());
    } catch (e) {}
  }

  function buildCorpus() {
    var chunks = [];
    if (!window.Academy || !Academy.getCoursesSorted) return chunks;
    Academy.getCoursesSorted().forEach(function (course) {
      (course.chapters || []).forEach(function (ch) {
        if (ch.comingSoon) return;
        Academy.ensureChapterSections(ch);
        var baseMeta = {
          courseId: course.id,
          courseTitle: course.title || "",
          chapterId: ch.id,
          chapterTitle: ch.title || "",
          duration: ch.duration || "",
        };
        if (ch.purpose) {
          chunks.push({
            id: ch.id + ":purpose",
            kind: "purpose",
            title: ch.title,
            text: ch.purpose,
            href: "chapitre.html?id=" + encodeURIComponent(ch.id),
            label: course.title + " · " + ch.id + " · " + ch.title,
            meta: baseMeta,
          });
        }
        (ch.sections || []).forEach(function (sec, si) {
          var parts = [];
          if (sec.title) parts.push(sec.title);
          if (sec.note) parts.push(sec.note);
          if (sec.example) parts.push("Exemple : " + sec.example);
          (sec.steps || []).forEach(function (st, ti) {
            if (st && st.text) parts.push(ti + 1 + ". " + st.text);
          });
          var body = parts.join("\n");
          if (!body.trim()) return;
          chunks.push({
            id: ch.id + ":s" + si,
            kind: "section",
            title: sec.title || "Sous-chapitre",
            text: body,
            href: "chapitre.html?id=" + encodeURIComponent(ch.id) + "#sec-" + si,
            label:
              course.title +
              " · " +
              ch.id +
              " · " +
              ch.title +
              " · " +
              (sec.title || "Sous-chapitre " + (si + 1)),
            meta: Object.assign({}, baseMeta, { sectionIndex: si, sectionTitle: sec.title || "" }),
          });
        });
        (ch.quiz || []).forEach(function (q, qi) {
          if (!q || !q.q) return;
          var opts = (q.options || []).join(" · ");
          var ans =
            q.answer != null && q.options && q.options[q.answer] != null
              ? q.options[q.answer]
              : "";
          chunks.push({
            id: ch.id + ":quiz" + qi,
            kind: "quiz",
            title: "Quiz — " + ch.title,
            text: "Question : " + q.q + "\nOptions : " + opts + (ans ? "\nRéponse : " + ans : ""),
            href: "chapitre.html?id=" + encodeURIComponent(ch.id),
            label: course.title + " · " + ch.id + " · Quiz",
            meta: baseMeta,
          });
        });
      });
    });
    return chunks;
  }

  function scoreChunk(queryTokens, chunk) {
    if (!queryTokens.length) return 0;
    var hay = normalize(chunk.label + " " + chunk.title + " " + chunk.text);
    var score = 0;
    var titleN = normalize(chunk.title + " " + chunk.label);
    queryTokens.forEach(function (tok) {
      if (hay.indexOf(tok) !== -1) score += 2;
      if (titleN.indexOf(tok) !== -1) score += 3;
      var re = new RegExp("\\b" + tok.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
      var m = hay.match(re);
      if (m) score += m.length;
    });
    if (chunk.kind === "section") score *= 1.15;
    if (chunk.kind === "purpose") score *= 1.05;
    return score;
  }

  function retrieve(question, limit) {
    var corpus = buildCorpus();
    var qToks = tokens(question);
    var scored = corpus
      .map(function (c) {
        return { chunk: c, score: scoreChunk(qToks, c) };
      })
      .filter(function (x) {
        return x.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      });
    return scored.slice(0, limit || 4);
  }

  function formatLocalAnswer(question, hits) {
    if (!hits.length) {
      return {
        text: t("chatNoMatch"),
        sources: [],
      };
    }
    var lines = [];
    lines.push(t("chatAnswerIntro"));
    lines.push("");
    hits.forEach(function (h, i) {
      var c = h.chunk;
      var excerpt = c.text.replace(/\s+/g, " ").trim();
      if (excerpt.length > 420) excerpt = excerpt.slice(0, 417) + "…";
      lines.push((i + 1) + ". **" + c.label + "**");
      lines.push(excerpt);
      lines.push("");
    });
    lines.push(t("chatAnswerOutro"));
    return {
      text: lines.join("\n").trim(),
      sources: hits.map(function (h) {
        return { label: h.chunk.label, href: h.chunk.href };
      }),
    };
  }

  function contextBlock(hits) {
    return hits
      .map(function (h, i) {
        return (
          "[Source " +
          (i + 1) +
          "] " +
          h.chunk.label +
          "\n" +
          h.chunk.text
        );
      })
      .join("\n\n---\n\n");
  }

  async function answerWithLLM(question, hits, settings) {
    var provider = settings.provider;
    var key = (settings.apiKey || "").trim();
    if (!key || provider === "local") {
      return formatLocalAnswer(question, hits);
    }
    var endpoint =
      provider === "openai"
        ? "https://api.openai.com/v1/chat/completions"
        : "https://api.groq.com/openai/v1/chat/completions";
    var model =
      settings.model ||
      (provider === "openai" ? "gpt-4o-mini" : "llama-3.3-70b-versatile");
    var sys =
      "Tu es le tuteur IA d'ESSANET Academy pour la formation GSMAG. " +
      "Réponds de façon claire, précise et pédagogique, UNIQUEMENT à partir du CONTEXTE COURS. " +
      "Structure la réponse : réponse directe, puis étapes si besoin, puis sources (module / chapitre / sous-chapitre). " +
      "N'invente rien hors contexte. Si l'info manque, dis-le et oriente vers le chapitre le plus proche. " +
      "Réponds dans la langue de la question.";
    var userMsg =
      "CONTEXTE COURS :\n" +
      (hits.length ? contextBlock(hits) : "(aucun extrait pertinent trouvé)") +
      "\n\nQUESTION DE L'APPRENANT :\n" +
      question;
    var res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + key,
      },
      body: JSON.stringify({
        model: model,
        temperature: 0.15,
        messages: [
          { role: "system", content: sys },
          { role: "user", content: userMsg },
        ],
      }),
    });
    if (!res.ok) {
      var errText = await res.text().catch(function () {
        return "";
      });
      throw new Error(t("chatLlmError") + " (" + res.status + ") " + String(errText).slice(0, 120));
    }
    var data = await res.json();
    var content =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content;
    if (!content) throw new Error(t("chatLlmError"));
    return {
      text: String(content).trim(),
      sources: hits.map(function (h) {
        return { label: h.chunk.label, href: h.chunk.href };
      }),
    };
  }

  function renderMarkdownLite(text) {
    return esc(text)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br />");
  }

  function sourcesHtml(sources) {
    if (!sources || !sources.length) return "";
    var seen = {};
    var items = sources
      .filter(function (s) {
        if (seen[s.label]) return false;
        seen[s.label] = true;
        return true;
      })
      .map(function (s) {
        return (
          '<a class="lms-chat-source" href="' +
          esc(s.href) +
          '">' +
          esc(s.label) +
          "</a>"
        );
      })
      .join("");
    return (
      '<div class="lms-chat-sources"><span>' +
      esc(t("chatSources")) +
      "</span>" +
      items +
      "</div>"
    );
  }

  function mount(root) {
    if (!root || root.getAttribute("data-mounted") === "1") return;
    root.setAttribute("data-mounted", "1");

    var admin = isAdminUser();
    var messages = loadHistory();
    var adminSettingsHtml = admin
      ? '<button type="button" class="lms-chat-ico-btn" id="chatSettingsBtn" title="' +
        esc(t("chatSettings")) +
        '" aria-label="' +
        esc(t("chatSettings")) +
        '">⚙</button>' +
        '<div class="lms-chat-settings" id="chatSettings" hidden>' +
        '<p class="muted lms-chat-hint">' +
        esc(t("chatAdminHint")) +
        "</p>" +
        "<label>" +
        esc(t("chatProvider")) +
        '<select id="chatProvider">' +
        '<option value="local">' +
        esc(t("chatProviderLocal")) +
        "</option>" +
        '<option value="groq">Groq</option>' +
        '<option value="openai">OpenAI</option>' +
        "</select></label>" +
        "<label>" +
        esc(t("chatApiKey")) +
        '<input type="password" id="chatApiKey" autocomplete="off" placeholder="gsk_… / sk-…" /></label>' +
        '<button type="button" class="btn btn-primary btn-sm" id="chatSaveSettings">' +
        esc(t("save")) +
        "</button>" +
        "</div>"
      : "";

    root.innerHTML =
      '<div class="lms-chat">' +
      '<div class="lms-chat-toolbar">' +
      '<button type="button" class="btn btn-ghost btn-sm" id="chatNewBtn">' +
      esc(t("chatNew")) +
      "</button>" +
      '<div class="lms-chat-toolbar-right">' +
      adminSettingsHtml +
      "</div>" +
      "</div>" +
      '<div class="lms-chat-messages" id="chatMessages" role="log" aria-live="polite"></div>' +
      '<form class="lms-chat-form" id="chatForm">' +
      '<div class="lms-chat-input-wrap">' +
      '<input type="text" id="chatInput" data-ac-i18n-placeholder="chatPlaceholder" placeholder="' +
      esc(t("chatPlaceholder")) +
      '" autocomplete="off" maxlength="800" />' +
      '<button type="button" class="lms-chat-mic" id="chatMicBtn" title="' +
      esc(t("chatMic")) +
      '" aria-label="' +
      esc(t("chatMic")) +
      '">🎤</button>' +
      "</div>" +
      '<button type="submit" class="btn btn-primary" id="chatSend">' +
      esc(t("chatSend")) +
      "</button>" +
      "</form>" +
      "</div>";

    var messagesEl = root.querySelector("#chatMessages");
    var form = root.querySelector("#chatForm");
    var input = root.querySelector("#chatInput");
    var micBtn = root.querySelector("#chatMicBtn");
    var settingsBox = root.querySelector("#chatSettings");
    var providerSel = root.querySelector("#chatProvider");
    var apiKeyInp = root.querySelector("#chatApiKey");

    if (admin && providerSel && apiKeyInp) {
      var cur = getEffectiveSettings();
      providerSel.value = cur.provider || "groq";
      apiKeyInp.value = cur.apiKey || "";
    }

    function speechLang() {
      var lang = (window.Academy && Academy.getLang && Academy.getLang()) || "fr";
      if (lang === "ar") return "ar-MA";
      if (lang === "en") return "en-US";
      return "fr-FR";
    }

    var recognition = null;
    var listening = false;
    var SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

    function setMicUi(on) {
      listening = on;
      micBtn.classList.toggle("is-listening", on);
      micBtn.setAttribute("aria-pressed", on ? "true" : "false");
      micBtn.title = on ? t("chatMicListening") : t("chatMic");
      micBtn.setAttribute("aria-label", micBtn.title);
    }

    function stopMic() {
      if (recognition) {
        try {
          recognition.stop();
        } catch (e) {}
      }
      setMicUi(false);
    }

    function startMic() {
      if (!SpeechRec) {
        appendMsg("assistant", t("chatMicUnsupported"), []);
        return;
      }
      if (listening) {
        stopMic();
        return;
      }
      recognition = new SpeechRec();
      recognition.lang = speechLang();
      recognition.interimResults = true;
      recognition.continuous = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = function () {
        setMicUi(true);
      };
      recognition.onend = function () {
        setMicUi(false);
      };
      recognition.onerror = function (ev) {
        setMicUi(false);
        if (ev && (ev.error === "not-allowed" || ev.error === "service-not-allowed")) {
          appendMsg("assistant", t("chatMicError"), []);
        }
      };
      recognition.onresult = function (event) {
        var transcript = "";
        for (var i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        transcript = String(transcript || "").trim();
        if (!transcript) return;
        input.value = transcript;
        var isFinal = event.results[event.results.length - 1].isFinal;
        if (isFinal) {
          stopMic();
          form.requestSubmit();
        }
      };

      try {
        recognition.start();
      } catch (e) {
        setMicUi(false);
        appendMsg("assistant", t("chatMicError"), []);
      }
    }

    micBtn.addEventListener("click", function () {
      startMic();
    });

    function appendMsg(role, text, sources, pending) {
      var div = document.createElement("div");
      div.className = "lms-chat-msg lms-chat-msg--" + role + (pending ? " is-pending" : "");
      var who = role === "user" ? t("chatYou") : t("chatBot");
      div.innerHTML =
        '<div class="lms-chat-msg-meta">' +
        esc(who) +
        "</div>" +
        '<div class="lms-chat-msg-body">' +
        (pending ? esc(t("chatThinking")) : renderMarkdownLite(text)) +
        "</div>" +
        (sources && !pending ? sourcesHtml(sources) : "");
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return div;
    }

    function renderAll() {
      messagesEl.innerHTML = "";
      if (!messages.length) {
        appendMsg("assistant", t("chatWelcome"), []);
      } else {
        messages.forEach(function (m) {
          appendMsg(m.role, m.text, m.sources || []);
        });
      }
    }

    root.querySelector("#chatNewBtn").onclick = function () {
      clearHistory();
      messages = [];
      renderAll();
      input.focus();
    };

    if (admin) {
      var settingsBtn = root.querySelector("#chatSettingsBtn");
      if (settingsBtn) {
        settingsBtn.onclick = function () {
          settingsBox.hidden = !settingsBox.hidden;
        };
      }
      var saveBtn = root.querySelector("#chatSaveSettings");
      if (saveBtn) {
        saveBtn.onclick = function () {
          saveAdminSettings({
            provider: providerSel.value || "groq",
            apiKey: apiKeyInp.value.trim(),
            model: "",
          });
          settingsBox.hidden = true;
          appendMsg("assistant", t("chatModeLlm"), []);
        };
      }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = (input.value || "").trim();
      if (!q) return;
      input.value = "";
      messages.push({ role: "user", text: q, sources: [] });
      appendMsg("user", q, []);
      saveHistory(messages);

      var pending = appendMsg("assistant", "", [], true);
      var hits = retrieve(q, 6);
      var settings = getEffectiveSettings();

      Promise.resolve()
        .then(function () {
          return answerWithLLM(q, hits, settings);
        })
        .then(function (ans) {
          pending.remove();
          messages.push({ role: "assistant", text: ans.text, sources: ans.sources || [] });
          saveHistory(messages);
          appendMsg("assistant", ans.text, ans.sources || []);
        })
        .catch(function (err) {
          pending.remove();
          var fallback = formatLocalAnswer(q, hits);
          var note =
            t("chatFallback") +
            "\n\n" +
            fallback.text +
            (err && err.message ? "\n\n(" + err.message + ")" : "");
          messages.push({ role: "assistant", text: note, sources: fallback.sources || [] });
          saveHistory(messages);
          appendMsg("assistant", note, fallback.sources || []);
        });
    });

    renderAll();
  }

  function remount(root) {
    if (!root) return;
    root.removeAttribute("data-mounted");
    root.innerHTML = "";
    mount(root);
  }

  window.AcademyChat = {
    mount: mount,
    remount: remount,
    buildCorpus: buildCorpus,
    retrieve: retrieve,
  };
})();
