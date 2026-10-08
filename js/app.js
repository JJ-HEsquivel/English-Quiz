(function () {
  "use strict";

  /* ================= Data & constants ================= */
  var DATA = window.QUIZ_DATA || {};
  var ES = window.QUIZ_ES || {};
  var UNIT_ORDER = ["u1", "u2", "u4"].filter(function (k) { return DATA[k]; });
  var STORE_KEY = "tech-english-quiz-v1";
  var LANG_KEY = "tech-english-quiz-lang";

  /* ================= Language ================= */
  var lang = "en";
  try { lang = localStorage.getItem(LANG_KEY) === "es" ? "es" : "en"; } catch (e) { lang = "en"; }

  var UI = {
    en: {
      appTitle: "Technical English Practice",
      hero: "Pick a unit and jump into any level — you can switch at any time. Stuck on a question? Tap the ⓘ icon to see the subtitle and page where the answer is. Tap EN / ES to read everything in Spanish.",
      unit: "Unit", level: "Level", levels3: "3 levels", correctSoFar: "correct so far",
      saved: "Your progress is saved on this device. ", resetAll: "Reset all progress",
      confirmAll: "Reset the progress of ALL units and levels?",
      chooseLevel: "Choose a level. You don't have to finish one before opening another.",
      lv_mc: "Multiple Choice", lv_tf: "True or False", lv_match: "Matching",
      ds_mc: "Read the question and choose the correct answer from 4 options.",
      ds_tf: "Decide if each statement is true or false according to the text.",
      ds_match: "Match each term with the description it belongs to.",
      question: "Question", of: "of", correct: "Correct!", notQuite: "Not quite.",
      correctAnswer: "Correct answer: ", source: "Source: ", page: "page", pages: "pages",
      prev: "← Previous", next: "Next →", skip: "Skip →", finish: "Finish", seeResults: "See results",
      restart: "Restart this level", confirmRestart: "Restart this level? Your answers for this level will be erased.",
      tTrue: "True", tFalse: "False",
      set: "Set", items: "items", terms: "Terms", descriptions: "Descriptions",
      matchHelp: "Tap a term, then tap the description it belongs to. Tap ⓘ to see where it is in the document.",
      matchNow: function (t) { return "Now tap the description that belongs to \"" + t + "\"."; },
      pickFirst: "First tap a term, then its description.", tryAnother: "Not quite — try another description.",
      nextSet: "Next set →", firstTry: "A match counts as correct if you get it on the first try. ",
      termLabel: "Term: ",
      results: "Results", yourScore: "Your score",
      unanswered: function (n) { return "You still have " + n + " unanswered item" + (n === 1 ? "" : "s") + "."; },
      excellent: "Excellent work!", good: "Good job! Review the ones you missed.",
      keep: "Keep practicing — use the ⓘ icon to find the answers in the text.",
      answerMissing: "Answer the missing ones", reviewMistakes: "Review my mistakes", tryAgain: "Try again",
      goLevel: "Go to Level", backUnit: "Back to Unit",
      whereTitle: "Where to find the answer", gotIt: "Got it", document: "Document",
      section: "Subtitle / section", inDoc: "As written in the document (English)",
      tip: "Tip: read that part of the document again, then come back and answer.",
      whereQ: "Where can I find this answer?", back: "Back", home: "Home",
      langLabel: "Change language to Spanish", showOriginal: "Original in English"
    },
    es: {
      appTitle: "Práctica de Inglés Técnico",
      hero: "Elige una unidad y entra a cualquier nivel; puedes cambiar cuando quieras. ¿No sabes una pregunta? Toca el ícono ⓘ para ver el subtítulo y la página donde está la respuesta. Toca EN / ES para volver a verlo en inglés.",
      unit: "Unidad", level: "Nivel", levels3: "3 niveles", correctSoFar: "correctas hasta ahora",
      saved: "Tu progreso se guarda en este dispositivo. ", resetAll: "Borrar todo el progreso",
      confirmAll: "¿Borrar el progreso de TODAS las unidades y niveles?",
      chooseLevel: "Elige un nivel. No necesitas terminar uno para abrir otro.",
      lv_mc: "Opción múltiple", lv_tf: "Verdadero o falso", lv_match: "Relacionar",
      ds_mc: "Lee la pregunta y elige la respuesta correcta entre 4 opciones.",
      ds_tf: "Decide si cada afirmación es verdadera o falsa según el texto.",
      ds_match: "Relaciona cada término con la descripción que le corresponde.",
      question: "Pregunta", of: "de", correct: "¡Correcto!", notQuite: "Incorrecto.",
      correctAnswer: "Respuesta correcta: ", source: "Fuente: ", page: "página", pages: "páginas",
      prev: "← Anterior", next: "Siguiente →", skip: "Saltar →", finish: "Terminar", seeResults: "Ver resultados",
      restart: "Reiniciar este nivel", confirmRestart: "¿Reiniciar este nivel? Se borrarán tus respuestas de este nivel.",
      tTrue: "Verdadero", tFalse: "Falso",
      set: "Grupo", items: "ítems", terms: "Términos", descriptions: "Descripciones",
      matchHelp: "Toca un término y luego la descripción que le corresponde. Toca ⓘ para ver dónde está en el documento.",
      matchNow: function (t) { return "Ahora toca la descripción que corresponde a \"" + t + "\"."; },
      pickFirst: "Primero toca un término y luego su descripción.", tryAnother: "Incorrecto — prueba otra descripción.",
      nextSet: "Siguiente grupo →", firstTry: "Una relación cuenta como correcta si la aciertas al primer intento. ",
      termLabel: "Término: ",
      results: "Resultados", yourScore: "Tu puntaje",
      unanswered: function (n) { return "Todavía te falta" + (n === 1 ? "" : "n") + " " + n + " pregunta" + (n === 1 ? "" : "s") + " por responder."; },
      excellent: "¡Excelente trabajo!", good: "¡Buen trabajo! Repasa las que fallaste.",
      keep: "Sigue practicando: usa el ícono ⓘ para encontrar las respuestas en el texto.",
      answerMissing: "Responder las que faltan", reviewMistakes: "Revisar mis errores", tryAgain: "Intentar de nuevo",
      goLevel: "Ir al Nivel", backUnit: "Volver a la Unidad",
      whereTitle: "Dónde encontrar la respuesta", gotIt: "Entendido", document: "Documento",
      section: "Subtítulo / sección", inDoc: "Como aparece en el documento (en inglés)",
      tip: "Consejo: vuelve a leer esa parte del documento y luego regresa a responder.",
      whereQ: "¿Dónde encuentro esta respuesta?", back: "Atrás", home: "Inicio",
      langLabel: "Cambiar idioma a inglés", showOriginal: "Original en inglés"
    }
  };
  function T(k) { return UI[lang][k]; }
  function setLang(l) {
    lang = l === "es" ? "es" : "en";
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
    render(true);
  }
  function toggleLang() { setLang(lang === "es" ? "en" : "es"); }

  /* Content accessors: Spanish when available, English otherwise */
  function es(u) { return lang === "es" ? ES[u] : null; }
  function uTitle(u) { var e = es(u); return (e && e.title) || DATA[u].title; }
  function mcQ(u, i) { var e = es(u); return (e && e.mc[i] && e.mc[i].q) || DATA[u].mc[i].q; }
  function mcO(u, i, oi) { var e = es(u); return (e && e.mc[i] && e.mc[i].o[oi]) || DATA[u].mc[i].o[oi]; }
  function tfS(u, i) { var e = es(u); return (e && e.tf[i] && e.tf[i].s) || DATA[u].tf[i].s; }
  function secOf(u, key, i, li) {
    var e = es(u), x = null;
    if (e) x = key === "match" ? e.match[i] && e.match[i].pairs[li] : e[key][i];
    return x && x.r ? x.r : null;
  }
  function setTitle(u, si) { var e = es(u); return (e && e.match[si] && e.match[si].title) || DATA[u].match[si].title; }
  function pairL(u, si, li) { var e = es(u); return (e && e.match[si].pairs[li].l) || DATA[u].match[si].pairs[li].l; }
  function pairR(u, si, li) { var e = es(u); return (e && e.match[si].pairs[li].rt) || DATA[u].match[si].pairs[li].rt; }

  var LEVELS = [
    { key: "mc", n: 1 },
    { key: "tf", n: 2 },
    { key: "match", n: 3 }
  ];
  function lvName(k) { return T("lv_" + k); }

  var ICONS = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r=".6" fill="currentColor"/></svg>',
    chev: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    mc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="4" rx="2"/><rect x="3" y="10" width="18" height="4" rx="2"/><rect x="3" y="16" width="18" height="4" rx="2"/></svg>',
    tf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l4 4 7-8"/><path d="M15 9l6 6M21 9l-6 6"/></svg>',
    match: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6.5l10 11M7 17.5l10-11"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
    section: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h10M4 18h13"/></svg>',
    page: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5z"/><path d="M8 7h6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/></svg>'
  };

  /* ================= Storage (safe) ================= */
  var progress = {};
  try { progress = JSON.parse(localStorage.getItem(STORE_KEY) || "{}") || {}; } catch (e) { progress = {}; }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* storage unavailable */ } }

  function lvl(u, key) {
    progress[u] = progress[u] || {};
    if (!progress[u][key]) {
      progress[u][key] = key === "match" ? { ord: {}, done: {}, miss: {} } : { ans: {}, ord: {} };
    }
    return progress[u][key];
  }

  function shuffle(n) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var j = n - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; }
    return a;
  }

  /* ================= Stats ================= */
  function stats(u, key) {
    var unit = DATA[u], st = lvl(u, key), total = 0, answered = 0, correct = 0;
    if (key === "mc" || key === "tf") {
      var list = unit[key]; total = list.length;
      list.forEach(function (q, i) {
        if (st.ans[i] !== undefined) { answered++; if (st.ans[i] === q.a) correct++; }
      });
    } else {
      unit.match.forEach(function (set, si) {
        set.pairs.forEach(function (p, li) {
          total++;
          var d = st.done[si] && st.done[si][li];
          var m = st.miss[si] && st.miss[si][li];
          if (d) { answered++; if (!m) correct++; }
        });
      });
    }
    return { total: total, answered: answered, correct: correct };
  }
  function unitStats(u) {
    var t = { total: 0, answered: 0, correct: 0 };
    LEVELS.forEach(function (L) { var s = stats(u, L.key); t.total += s.total; t.answered += s.answered; t.correct += s.correct; });
    return t;
  }

  /* ================= DOM helper ================= */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "text") el.textContent = v;
      else if (k === "style") el.setAttribute("style", v);
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c === null || c === undefined || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) el.appendChild(typeof x === "string" ? document.createTextNode(x) : x); });
      else el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  }
  function bar(pct, color) {
    var b = h("div", { class: "bar", style: color ? "--c:" + color : null });
    b.appendChild(h("i", { style: "width:" + Math.round(pct * 100) + "%" }));
    return b;
  }
  function linkBtn(cls, href, text) {
    return h("a", { class: cls, href: href, style: "display:grid;place-items:center;text-decoration:none" }, text);
  }

  var app = document.getElementById("app");

  function langToggle() {
    return h("button", { class: "lang", type: "button", "aria-label": T("langLabel"), title: T("langLabel"), onclick: toggleLang },
      h("span", { class: "lang__icon", html: ICONS.globe }),
      h("span", { class: lang === "en" ? "is-on" : "" }, "EN"),
      h("span", { class: lang === "es" ? "is-on" : "" }, "ES"));
  }

  function topbar(opts) {
    var left = opts.back
      ? h("a", { class: "iconbtn", href: opts.back, "aria-label": T("back"), html: ICONS.back })
      : null;
    return h("header", { class: "topbar" },
      h("div", { class: "topbar__in" },
        left,
        h("div", { class: "topbar__title" },
          opts.kicker ? h("small", { text: opts.kicker }) : null,
          h("strong", { text: opts.title })),
        opts.right || null,
        langToggle(),
        opts.home ? h("a", { class: "iconbtn hide-xs", href: "#/", "aria-label": T("home"), html: ICONS.home }) : null));
  }

  /* ================= Info sheet ================= */
  var sheet = document.getElementById("sheet");
  var sheetBody = document.getElementById("sheet-body");
  var lastFocus = null;

  // ref = [pages, englishSection]; secEs = Spanish section (or null)
  function openInfo(unit, ref, about, secEs) {
    lastFocus = document.activeElement;
    document.getElementById("sheet-title").textContent = T("whereTitle");
    document.getElementById("sheet-ok").textContent = T("gotIt");
    sheetBody.innerHTML = "";
    sheet.style.setProperty("--c", unit.color);
    var pages = String(ref[0]);
    var multi = /[–-]/.test(pages);
    var pageWord = multi ? T("pages") : T("page");
    var secRow;
    if (secEs) {
      secRow = h("div", { class: "where__row" },
        h("span", { html: ICONS.section }),
        h("div", null,
          h("small", { text: T("section") }),
          h("strong", { text: secEs }),
          h("small", { style: "margin-top:8px", text: T("inDoc") }),
          h("div", { style: "font-weight:600", text: ref[1] })));
    } else {
      secRow = row(ICONS.section, T("section"), ref[1]);
    }
    sheetBody.appendChild(h("div", { class: "where" },
      row(ICONS.doc, T("document"), unit.doc),
      secRow,
      row(ICONS.page, pageWord.charAt(0).toUpperCase() + pageWord.slice(1), pageWord.charAt(0).toUpperCase() + pageWord.slice(1) + " " + pages)));
    if (about) sheetBody.appendChild(h("p", { class: "where__note", text: about }));
    sheetBody.appendChild(h("p", { class: "where__note", text: T("tip") }));
    sheet.hidden = false;
    var btn = document.getElementById("sheet-ok"); if (btn) btn.focus();

    function row(icon, label, value) {
      return h("div", { class: "where__row" },
        h("span", { html: icon }),
        h("div", null, h("small", { text: label }), h("strong", { text: value })));
    }
  }
  function closeInfo() {
    sheet.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  sheet.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeInfo(); });
  function infoButton(unit, ref, about, secEs, small) {
    return h("button", {
      class: "info-btn" + (small ? " info-btn--sm" : ""), type: "button",
      "aria-label": T("whereQ"), title: T("whereQ"),
      html: ICONS.info,
      onclick: function (e) { e.stopPropagation(); openInfo(unit, ref, about, secEs); }
    });
  }

  /* ================= Views ================= */
  function viewHome() {
    var cards = UNIT_ORDER.map(function (u) {
      var unit = DATA[u], s = unitStats(u);
      return h("a", { class: "unit-card", href: "#/" + u, style: "--c:" + unit.color, "aria-label": T("unit") + " " + unit.number + ": " + uTitle(u) },
        h("div", { class: "unit-card__num", text: String(unit.number) }),
        h("div", null,
          h("div", { class: "muted", text: T("unit") + " " + unit.number }),
          h("h2", { text: uTitle(u) })),
        h("div", { class: "bar-row" }, bar(s.answered / s.total, unit.color), h("span", { text: s.answered + "/" + s.total })),
        h("div", { class: "muted", text: T("levels3") + " · " + s.correct + " " + T("correctSoFar") }));
    });
    app.replaceChildren(
      h("main", { class: "wrap" },
        h("div", { class: "home-top" }, langToggle()),
        h("section", { class: "hero" },
          h("h1", { text: T("appTitle") }),
          h("p", { text: T("hero") })),
        h("section", { class: "units" }, cards),
        h("p", { class: "foot" },
          T("saved"),
          h("button", { class: "linkbtn", type: "button", text: T("resetAll"), onclick: function () {
            if (confirm(T("confirmAll"))) { progress = {}; save(); render(); }
          } }))));
  }

  function viewUnit(u) {
    var unit = DATA[u];
    var cards = LEVELS.map(function (L) {
      var s = stats(u, L.key);
      return h("a", { class: "level-card", href: "#/" + u + "/" + L.key + "/1", style: "--c:" + unit.color },
        h("div", { class: "level-card__icon", html: ICONS[L.key] }),
        h("div", { class: "level-card__body" },
          h("small", { text: T("level") + " " + L.n }),
          h("h3", { text: lvName(L.key) }),
          h("div", { class: "muted", style: "font-size:14px", text: T("ds_" + L.key) }),
          h("div", { class: "bar-row" }, bar(s.answered / s.total, unit.color),
            h("span", { text: s.answered + "/" + s.total + " · ✓ " + s.correct }))),
        h("span", { class: "chev", html: ICONS.chev }));
    });
    app.replaceChildren(
      topbar({ back: "#/", kicker: T("unit") + " " + unit.number, title: uTitle(u) }),
      h("main", { class: "wrap", style: "--c:" + unit.color },
        h("section", { class: "unit-head" },
          h("h1", { text: T("unit") + " " + unit.number + " — " + uTitle(u) }),
          h("p", { class: "muted", text: T("chooseLevel") })),
        h("section", { class: "levels" }, cards)));
  }

  /* ---------- MC & TF ---------- */
  function viewQuestion(u, key, idx) {
    var unit = DATA[u], list = unit[key], L = LEVELS.filter(function (x) { return x.key === key; })[0];
    var st = lvl(u, key);
    if (idx < 0 || idx >= list.length) { location.hash = "#/" + u + "/" + key + "/1"; return; }
    var q = list[idx];
    var s = stats(u, key);

    var strip = h("nav", { class: "nav-strip", "aria-label": T("question") },
      list.map(function (qq, i) {
        var a = st.ans[i], cls = "dot";
        if (a !== undefined) cls += a === qq.a ? " is-ok" : " is-bad";
        if (i === idx) cls += " is-current";
        return h("a", { class: cls, href: "#/" + u + "/" + key + "/" + (i + 1), text: String(i + 1), "aria-label": T("question") + " " + (i + 1), style: "display:grid;place-items:center;text-decoration:none" });
      }));

    var answered = st.ans[idx] !== undefined;
    var body;

    if (key === "mc") {
      if (!st.ord[idx]) { st.ord[idx] = shuffle(q.o.length); save(); }
      var ord = st.ord[idx];
      body = h("div", { class: "options", role: "group" },
        ord.map(function (oi, pos) {
          var cls = "opt";
          if (answered) {
            if (oi === q.a) cls += " is-ok";
            else if (oi === st.ans[idx]) cls += " is-bad";
            else cls += " is-dim";
          }
          return h("button", { class: cls, type: "button", disabled: answered,
            onclick: function () { answer(oi); } },
            h("span", { class: "opt__key", text: "ABCD".charAt(pos) }),
            h("span", { text: mcO(u, idx, oi) }));
        }));
    } else {
      body = h("div", { class: "tf", role: "group" },
        [true, false].map(function (val) {
          var cls = "opt";
          if (answered) {
            if (val === q.a) cls += " is-ok";
            else if (val === st.ans[idx]) cls += " is-bad";
            else cls += " is-dim";
          }
          return h("button", { class: cls, type: "button", disabled: answered, onclick: function () { answer(val); } },
            val ? T("tTrue") : T("tFalse"));
        }));
    }

    var secEs = secOf(u, key, idx);
    var fb = null;
    if (answered) {
      var ok = st.ans[idx] === q.a;
      var correctText = key === "mc" ? mcO(u, idx, q.a) : (q.a ? T("tTrue") : T("tFalse"));
      fb = h("div", { class: "feedback " + (ok ? "ok" : "bad") },
        h("div", null,
          h("b", { text: ok ? T("correct") : T("notQuite") }),
          ok ? null : h("span", { text: T("correctAnswer") + correctText }),
          h("span", { class: "ref", text: T("source") + (secEs || q.r[1]) + " — " + T("page") + " " + q.r[0] })));
    }

    var isLast = idx === list.length - 1;
    var allDone = s.answered === s.total;
    var actions = h("div", { class: "q-actions" },
      h("button", { class: "btn", type: "button", disabled: idx === 0, onclick: function () { go(idx - 1); } }, T("prev")),
      isLast
        ? h("button", { class: "btn btn--primary", type: "button", onclick: function () { location.hash = "#/" + u + "/" + key + "/results"; } }, allDone ? T("seeResults") : T("finish"))
        : h("button", { class: "btn btn--primary", type: "button", onclick: function () { go(idx + 1); } }, answered ? T("next") : T("skip")));

    var mainText = key === "mc" ? mcQ(u, idx) : tfS(u, idx);
    var original = key === "mc" ? q.q : q.s;
    var card = h("article", { class: "card" },
      h("div", { class: "q-head" },
        h("div", { class: "grow" },
          h("div", { class: "q-num", text: T("question") + " " + (idx + 1) + " " + T("of") + " " + list.length }),
          h("div", { class: "q-text", text: mainText }),
          lang === "es" ? h("div", { class: "q-orig" }, h("small", { text: T("showOriginal") }), original) : null),
        infoButton(unit, q.r, null, secEs)),
      body, fb, actions);

    app.replaceChildren(
      topbar({ back: "#/" + u, kicker: T("unit") + " " + unit.number + " · " + T("level") + " " + L.n, title: lvName(key), home: true,
        right: h("span", { class: "score-pill", text: "✓ " + s.correct + "/" + s.total }) }),
      h("main", { class: "wrap", style: "--c:" + unit.color },
        strip, card,
        h("p", { class: "foot" },
          h("button", { class: "linkbtn", type: "button", text: T("restart"), onclick: function () { resetLevel(u, key); } }))));

    var cur = strip.querySelector(".is-current");
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest", inline: "center" });

    function answer(val) {
      st.ans[idx] = val; save();
      render(true);
    }
    function go(i) { location.hash = "#/" + u + "/" + key + "/" + (i + 1); }

    keyHandler = function (e) {
      if (!sheet.hidden) return;
      var k = e.key.toLowerCase();
      if (k === "arrowright" && !isLast) go(idx + 1);
      else if (k === "arrowleft" && idx > 0) go(idx - 1);
      else if (!answered && key === "mc" && "abcd1234".indexOf(k) >= 0) {
        var pos = "abcd".indexOf(k); if (pos < 0) pos = "1234".indexOf(k);
        answer(st.ord[idx][pos]);
      } else if (!answered && key === "tf" && (k === "t" || k === "f" || k === "v")) answer(k !== "f");
      else if (k === "i") openInfo(unit, q.r, null, secEs);
    };
  }

  /* ---------- Matching ---------- */
  var matchSel = null; // { u, si, li }

  function viewMatch(u, si) {
    var unit = DATA[u], sets = unit.match, st = lvl(u, "match");
    if (si < 0 || si >= sets.length) { location.hash = "#/" + u + "/match/1"; return; }
    var set = sets[si];
    if (!st.ord[si]) { st.ord[si] = shuffle(set.pairs.length); save(); }
    st.done[si] = st.done[si] || {}; st.miss[si] = st.miss[si] || {};
    var done = st.done[si], miss = st.miss[si];
    if (!matchSel || matchSel.u !== u || matchSel.si !== si || done[matchSel.li]) matchSel = null;
    var s = stats(u, "match");
    var base = 0; for (var b = 0; b < si; b++) base += sets[b].pairs.length;

    var strip = h("nav", { class: "nav-strip", "aria-label": T("set") },
      sets.map(function (ss, i) {
        var d = st.done[i] || {}, m = st.miss[i] || {}, n = 0, mm = 0;
        ss.pairs.forEach(function (p, li) { if (d[li]) n++; if (m[li]) mm++; });
        var cls = "dot";
        if (n === ss.pairs.length) cls += mm ? " is-bad" : " is-ok";
        if (i === si) cls += " is-current";
        return h("a", { class: cls, href: "#/" + u + "/match/" + (i + 1), style: "display:grid;place-items:center;text-decoration:none;padding:0 12px",
          text: T("set") + " " + (i + 1) + " · " + n + "/" + ss.pairs.length });
      }));

    var terms = h("div", { class: "terms" },
      set.pairs.map(function (p, li) {
        var cls = "term";
        if (done[li]) cls += " is-ok";
        if (miss[li]) cls += " is-missed";
        if (matchSel && matchSel.li === li) cls += " is-sel";
        var label = pairL(u, si, li);
        return h("div", { class: cls },
          done[li] ? h("span", { class: "badge", text: String(base + li + 1) }) : null,
          h("button", { class: "term__pick", type: "button", disabled: !!done[li], "aria-pressed": matchSel && matchSel.li === li ? "true" : "false",
            onclick: function () {
              matchSel = (matchSel && matchSel.li === li) ? null : { u: u, si: si, li: li };
              render(true);
            } },
            (done[li] ? "" : (base + li + 1) + ". ") + label,
            lang === "es" && label !== p.l ? h("small", { class: "term__orig", text: p.l }) : null),
          infoButton(unit, p.r, T("termLabel") + label, secOf(u, "match", si, li), true));
      }));

    var defs = h("div", { class: "match__col" },
      h("h4", { text: T("descriptions") }),
      st.ord[si].map(function (pi) {
        var isDone = !!done[pi];
        return h("button", { class: "def" + (isDone ? " is-ok" : ""), type: "button", disabled: isDone,
          onclick: function (e) { pick(pi, e.currentTarget); } },
          h("span", { class: "badge", text: String(base + pi + 1) }),
          h("span", { text: pairR(u, si, pi) }));
      }));

    var setDone = set.pairs.every(function (p, li) { return done[li]; });
    var isLast = si === sets.length - 1;
    var nextBtn = isLast
      ? h("button", { class: "btn btn--primary", type: "button", onclick: function () { location.hash = "#/" + u + "/match/results"; } }, T("seeResults"))
      : h("button", { class: "btn btn--primary", type: "button", onclick: function () { location.hash = "#/" + u + "/match/" + (si + 2); } }, setDone ? T("nextSet") : T("skip"));

    var card = h("article", { class: "card" },
      h("div", { class: "q-num", text: T("set") + " " + (si + 1) + " " + T("of") + " " + sets.length + " · " + T("items") + " " + (base + 1) + "–" + (base + set.pairs.length) + " " + T("of") + " " + s.total }),
      h("div", { class: "q-text", text: setTitle(u, si) }),
      h("p", { class: "match-help", text: matchSel ? T("matchNow")(pairL(u, si, matchSel.li)) : T("matchHelp") }),
      h("div", { class: "match" },
        h("div", { class: "match__col" }, h("h4", { text: T("terms") }), terms),
        defs),
      h("div", { class: "q-actions" },
        h("button", { class: "btn", type: "button", disabled: si === 0, onclick: function () { location.hash = "#/" + u + "/match/" + si; } }, T("prev")),
        nextBtn));

    app.replaceChildren(
      topbar({ back: "#/" + u, kicker: T("unit") + " " + unit.number + " · " + T("level") + " 3", title: lvName("match"), home: true,
        right: h("span", { class: "score-pill", text: "✓ " + s.correct + "/" + s.total }) }),
      h("main", { class: "wrap", style: "--c:" + unit.color },
        strip, card,
        h("p", { class: "foot" }, T("firstTry"),
          h("button", { class: "linkbtn", type: "button", text: T("restart"), onclick: function () { resetLevel(u, "match"); } }))));

    var cur = strip.querySelector(".is-current");
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest", inline: "center" });

    function pick(pi, el) {
      if (!matchSel) { toast(T("pickFirst")); return; }
      var li = matchSel.li;
      if (pi === li) {
        done[li] = true; matchSel = null; save(); render(true);
      } else {
        miss[li] = true; save();
        el.classList.remove("is-bad"); void el.offsetWidth; el.classList.add("is-bad");
        setTimeout(function () { el.classList.remove("is-bad"); }, 600);
        toast(T("tryAnother"));
        var pill = app.querySelector(".score-pill");
        if (pill) { var ns = stats(u, "match"); pill.textContent = "✓ " + ns.correct + "/" + ns.total; }
      }
    }
    keyHandler = function (e) {
      if (!sheet.hidden) return;
      if (e.key === "ArrowRight" && !isLast) location.hash = "#/" + u + "/match/" + (si + 2);
      else if (e.key === "ArrowLeft" && si > 0) location.hash = "#/" + u + "/match/" + si;
    };
  }

  /* ---------- Results ---------- */
  function viewResults(u, key) {
    var unit = DATA[u], L = LEVELS.filter(function (x) { return x.key === key; })[0];
    var s = stats(u, key), st = lvl(u, key);
    var pct = s.total ? s.correct / s.total : 0;
    var msg = s.answered < s.total ? T("unanswered")(s.total - s.answered)
      : pct >= .9 ? T("excellent") : pct >= .7 ? T("good") : T("keep");

    var firstOpen = null, firstWrong = null;
    if (key === "match") {
      unit.match.forEach(function (set, si) {
        set.pairs.forEach(function (p, li) {
          var d = st.done[si] && st.done[si][li];
          if (!d && firstOpen === null) firstOpen = si;
          if (d && st.miss[si] && st.miss[si][li] && firstWrong === null) firstWrong = si;
        });
      });
    } else {
      unit[key].forEach(function (q, i) {
        if (st.ans[i] === undefined && firstOpen === null) firstOpen = i;
        if (st.ans[i] !== undefined && st.ans[i] !== q.a && firstWrong === null) firstWrong = i;
      });
    }
    var target = firstOpen !== null ? firstOpen : firstWrong;
    var nextL = LEVELS[(LEVELS.indexOf(L) + 1) % LEVELS.length];

    app.replaceChildren(
      topbar({ back: "#/" + u, kicker: T("unit") + " " + unit.number + " · " + T("level") + " " + L.n, title: lvName(key) + " — " + T("results"), home: true }),
      h("main", { class: "wrap", style: "--c:" + unit.color },
        h("article", { class: "card summary", style: "margin-top:16px" },
          h("div", { class: "muted", text: T("yourScore") }),
          h("div", { class: "summary__big", text: s.correct + " / " + s.total }),
          h("div", { style: "max-width:320px;margin:10px auto 0" }, bar(pct, unit.color)),
          h("p", { text: msg }),
          h("div", { class: "summary__actions" },
            target !== null ? linkBtn("btn", "#/" + u + "/" + key + "/" + (target + 1), firstOpen !== null ? T("answerMissing") : T("reviewMistakes")) : null,
            h("button", { class: "btn", type: "button", onclick: function () { resetLevel(u, key, true); } }, T("tryAgain")),
            linkBtn("btn btn--primary", "#/" + u + "/" + nextL.key + "/1", T("goLevel") + " " + nextL.n + ": " + lvName(nextL.key)),
            linkBtn("btn btn--ghost", "#/" + u, T("backUnit") + " " + unit.number)))));
  }

  function resetLevel(u, key, silent) {
    if (!silent && !confirm(T("confirmRestart"))) return;
    progress[u] = progress[u] || {};
    delete progress[u][key];
    save();
    matchSel = null;
    location.hash = "#/" + u + "/" + key + "/1";
    render();
  }

  /* ---------- Toast ---------- */
  var toastEl = null, toastT = null;
  function toast(text) {
    if (!toastEl) {
      toastEl = h("div", { role: "status", style: "position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:12px;font-size:14px;font-weight:600;max-width:calc(100% - 32px);box-shadow:var(--shadow);transition:opacity .2s" });
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = text; toastEl.style.opacity = "1";
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.style.opacity = "0"; }, 1800);
  }

  /* ================= Router ================= */
  var keyHandler = null;
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !sheet.hidden) { closeInfo(); return; }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key.toLowerCase() === "l" && sheet.hidden) { toggleLang(); return; }
    if (keyHandler) keyHandler(e);
  });

  function render(keepScroll) {
    keyHandler = null;
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    var u = parts[0], key = parts[1], n = parts[2];
    var y = window.scrollY;

    if (!u || !DATA[u]) viewHome();
    else if (!key || !LEVELS.some(function (L) { return L.key === key; })) viewUnit(u);
    else if (n === "results") viewResults(u, key);
    else {
      var i = Math.max(0, (parseInt(n, 10) || 1) - 1);
      if (key === "match") viewMatch(u, i); else viewQuestion(u, key, i);
    }
    document.title = T("appTitle");
    document.documentElement.lang = lang;
    if (keepScroll) window.scrollTo(0, y); else window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", function () { render(false); });
  render();
})();
