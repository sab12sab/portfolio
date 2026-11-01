const IMG = "assets/img/";
const byId = Object.fromEntries(PROJECTS.map(p => [p.id, p]));

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const c = v => Math.max(0, Math.min(255, v + amt));
  return "#" + [c(n >> 16), c((n >> 8) & 255), c(n & 255)].map(v => v.toString(16).padStart(2, "0")).join("");
}

function media(p, cls = "") {
  if (p.images && p.images.length) {
    return `<img src="${IMG}${p.images[0]}" alt="${esc(p.title)}" loading="lazy" class="${cls}">`;
  }
  const a = p.accent || "#3d6f99";
  const bg = `linear-gradient(145deg, ${shade(a, 18)}, ${shade(a, -46)})`;
  return `<div class="cover" style="background:${bg}">
    <span class="cover-org">${esc(p.org)}</span>
    <span class="cover-title">${esc(p.title)}</span>
    <span class="cover-stack">${p.stack.slice(0, 3).map(s => `<span>${esc(s)}</span>`).join("")}</span>
  </div>`;
}

const tags = (list, n) => `<div class="tags">${list.slice(0, n).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

let lang = "fr";
try { lang = localStorage.getItem("portfolio-lang") || "fr"; } catch (e) {}
if (!I18N[lang]) lang = "fr";
let booted = false;
let openId = null;

function t(key) {
  const pack = I18N[lang].ui;
  if (pack[key] != null) return pack[key];
  return I18N.fr.ui[key] != null ? I18N.fr.ui[key] : key;
}
function linkLabel(label) {
  const v = I18N[lang].ui["link." + label];
  return v != null ? v : label;
}
function viewProject(p) {
  const over = (I18N[lang].projects && I18N[lang].projects[p.id]) || {};
  const merged = Object.assign({}, p, over);
  merged.id = p.id;
  merged.context = p.context;
  merged.images = p.images;
  merged.cats = p.cats;
  merged.links = p.links;
  merged.accent = p.accent;
  merged.featured = p.featured;
  if (!over.stack) merged.stack = p.stack;
  if (!over.results) merged.results = p.results;
  if (!over.actions) merged.actions = p.actions;
  return merged;
}
function viewExp(e) {
  const over = (I18N[lang].experiences && I18N[lang].experiences[e.org]) || {};
  return Object.assign({}, e, over, { org: e.org, tags: e.tags, projects: e.projects });
}
function shown(root) {
  if (!booted || !root) return;
  root.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = EXPERIENCES.map(raw => {
    const e = viewExp(raw);
    return `
  <div class="tl-item reveal">
    <div class="tl-meta">
      <div class="tl-date">${esc(e.date)}</div>
      ${e.length ? `<span class="tl-length">${esc(e.length)}</span>` : ""}
    </div>
    <div class="tl-card">
      <h3 class="tl-org">${esc(e.org)}</h3>
      <div class="tl-sub">${esc(e.sub)} · ${esc(e.place)}</div>
      <div class="tl-role">${esc(e.role)}</div>
      <ul>${e.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      ${tags(e.tags, 12)}
      <div class="tl-projects">${raw.org === "Damane Cash"
        ? `<a class="chip-link" href="#damane">${esc(t("tl.damane"))}</a>`
        : `<span>${esc(t("tl.projects"))}</span>${e.projects.map(id => `<button class="chip-link" data-open="${id}">${esc(viewProject(byId[id]).title)}</button>`).join("")}`}
      </div>
    </div>
  </div>`;
  }).join("");
  shown(document.getElementById("timeline"));
}

function card(raw) {
  const p = viewProject(raw);
  return `<article class="card reveal" data-open="${p.id}">
    <div class="media">${media(p)}</div>
    <div class="body">
      <div class="ctx"><span class="badge ${raw.context}">${esc(t("ctx." + raw.context))}</span>${esc(p.org)}</div>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.tagline)}</p>
      ${tags(p.stack, 4)}
    </div>
  </article>`;
}

const PERSO = ["coran", "studio-photo", "golden-spark", "lumen", "pdf-translate", "win2lang"];
const ESSANET = ["gsmag", "gsmag-web", "essanet-academy"];
const STEP = 3;
const visible = {};

function paint(id, items) {
  const grid = document.getElementById(id);
  if (!grid) return;
  const total = items.length;
  let n = visible[id] == null ? STEP : visible[id];
  if (n > total) n = total;
  visible[id] = n;
  grid.innerHTML = items.slice(0, n).map(card).join("");
  let bar = grid.parentElement.querySelector(':scope > .more-bar[data-for="' + id + '"]');
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "more-bar";
    bar.dataset.for = id;
    grid.after(bar);
  }
  if (total <= STEP) {
    bar.hidden = true;
    bar.innerHTML = "";
    return;
  }
  const parts = [];
  if (n < total) parts.push(`<button type="button" class="btn btn-primary" data-more="${id}">${esc(t("more.plus"))}</button>`);
  if (n > STEP) parts.push(`<button type="button" class="btn btn-ghost" data-less="${id}">${esc(t("more.less"))}</button>`);
  if (n < total) parts.push(`<button type="button" class="btn btn-ghost" data-all="${id}">${esc(t("more.all"))}</button>`);
  bar.hidden = parts.length === 0;
  bar.innerHTML = parts.join("");
}

function renderGrids() {
  paint("gridDamane", PROJECTS.filter(p => p.org.startsWith("Damane Cash")));
  paint("gridEssanet", ESSANET.map(id => byId[id]));
  paint("gridMarsa", [byId["marsa-insight"]]);
  paint("gridWeb", [byId["devis-ai"]]);
  paint("gridUni", PROJECTS.filter(p => p.context === "Académique"));
  paint("gridPerso", PERSO.map(id => byId[id]));
  shown(document.getElementById("professionnel"));
  shown(document.getElementById("universitaire"));
  shown(document.getElementById("personnel"));
}

function renderSkills() {
  const groups = I18N[lang].skills || SKILLS;
  document.getElementById("skills").innerHTML = groups.map(s => `
  <div class="skill reveal"><h3>${esc(s.title)}</h3>${tags(s.items, 20)}</div>`).join("");
  shown(document.getElementById("skills"));
}

/* Modal */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

function openProject(id) {
  const raw = byId[id];
  if (!raw) return;
  openId = id;
  const p = viewProject(raw);
  const imgs = p.images || [];
  modalBody.innerHTML = `
    <div class="m-hero">${imgs.length ? `<img src="${IMG}${imgs[0]}" alt="${esc(p.title)}" data-zoom>` : media(p)}</div>
    <div class="m-content">
      <div class="ctx"><span class="badge ${raw.context}">${esc(t("ctx." + raw.context))}</span>${esc(p.org)} · ${esc(p.date)}</div>
      <h2>${esc(p.title)}</h2>
      <p class="m-tagline">${esc(p.tagline)}</p>
      ${p.team ? `<div class="m-team">${esc(p.team)}</div>` : ""}
      <h4>${esc(t("m.context"))}</h4><p>${esc(p.problem)}</p>
      <h4>${esc(t("m.done"))}</h4><ul>${p.actions.map(a => `<li>${esc(a)}</li>`).join("")}</ul>
      ${p.mine ? `<p style="margin-top:14px"><strong>${esc(p.mine)}</strong></p>` : ""}
      ${p.results.length ? `<h4>${esc(t("m.results"))}</h4><div class="m-metrics">${p.results.map(([v, l]) => `<div class="m-metric"><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join("")}</div>` : ""}
      <h4>${esc(t("m.tech"))}</h4>${tags(p.stack, 30)}
      ${imgs.length > 1 ? `<h4>${esc(t("m.shots"))}</h4><div class="m-gallery">${imgs.slice(1).map(i => `<img src="${IMG}${i}" alt="" loading="lazy" data-zoom>`).join("")}</div>` : ""}
      ${p.links ? `<div class="m-links">${p.links.map(([l, u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(linkLabel(l))}</a>`).join("")}</div>` : ""}
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-panel").scrollTop = 0;
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openId = null;
}

function applyStatic() {
  const d = I18N[lang].ui;
  document.documentElement.lang = lang === "ar" ? "ar" : lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = d.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", d.desc);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = d[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = d[el.dataset.i18nHtml];
    if (v != null) el.innerHTML = v;
  });
  const code = document.getElementById("heroCode");
  if (code && d["hero.code"]) code.innerHTML = d["hero.code"];
  const closeBtn = document.querySelector(".modal-close");
  if (closeBtn) closeBtn.setAttribute("aria-label", d.close);
  const burger = document.getElementById("burger");
  if (burger && d["nav.menu"]) burger.setAttribute("aria-label", d["nav.menu"]);
  document.querySelectorAll("#langs button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
}

function setLang(next) {
  if (!I18N[next]) return;
  lang = next;
  try { localStorage.setItem("portfolio-lang", next); } catch (e) {}
  applyStatic();
  renderTimeline();
  renderGrids();
  renderSkills();
  if (openId && modal.classList.contains("open")) openProject(openId);
}

document.addEventListener("click", e => {
  const zoom = e.target.closest("[data-zoom]");
  if (zoom) {
    const lb = document.getElementById("lightbox");
    lb.querySelector("img").src = zoom.src;
    lb.classList.add("open");
    return;
  }
  if (e.target.closest("#lightbox")) { document.getElementById("lightbox").classList.remove("open"); return; }
  if (e.target.closest("[data-close]")) { closeModal(); return; }
  const more = e.target.closest("[data-more]");
  if (more) {
    visible[more.dataset.more] = (visible[more.dataset.more] || STEP) + STEP;
    renderGrids();
    return;
  }
  const less = e.target.closest("[data-less]");
  if (less) {
    const id = less.dataset.less;
    visible[id] = Math.max(STEP, (visible[id] || STEP) - STEP);
    renderGrids();
    return;
  }
  const all = e.target.closest("[data-all]");
  if (all) {
    visible[all.dataset.all] = Infinity;
    renderGrids();
    return;
  }
  const opener = e.target.closest("[data-open]");
  if (opener) openProject(opener.dataset.open);
});

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  const lb = document.getElementById("lightbox");
  if (lb.classList.contains("open")) lb.classList.remove("open"); else closeModal();
});

/* Nav */
const nav = document.getElementById("nav");
const spy = [...document.querySelectorAll("#apropos, #parcours, #professionnel, #universitaire, #personnel, #competences, #formation, #contact")];
const navLinksAll = [...document.querySelectorAll(".site-nav a")];
const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
  const h = document.documentElement.scrollHeight - innerHeight;
  const pct = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
  document.querySelectorAll(".progress").forEach(el => el.style.setProperty("--p", pct));
  let current = "";
  spy.forEach(s => { if (s.getBoundingClientRect().top < 160) current = s.id; });
  navLinksAll.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
const navLinks = document.getElementById("navLinks");
document.getElementById("burger").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", e => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });

/* Reveal + counters */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  en.target.querySelectorAll("[data-count]").forEach(animateCount);
  io.unobserve(en.target);
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

function animateCount(el) {
  const end = +el.dataset.count, suffix = el.dataset.suffix || "", t0 = performance.now();
  const step = t => {
    const k = Math.min(1, (t - t0) / 1200);
    el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suffix;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

document.getElementById("year").textContent = new Date().getFullYear();

applyStatic();
renderTimeline();
renderGrids();
renderSkills();
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
booted = true;
document.getElementById("langs").addEventListener("click", e => {
  const btn = e.target.closest("[data-lang]");
  if (btn) setLang(btn.dataset.lang);
});
