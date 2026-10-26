(function () {
  "use strict";

  /* ================= Data & constants ================= */
  var DATA = window.QUIZ_DATA || {};
  var ES = window.QUIZ_ES || {};
  var UNIT_ORDER = ["u1", "u2", "u4"].filter(function (k) { return DATA[k]; });
  var STORE_KEY = "tech-english-quiz-v1";
  var LANG_KEY = "tech-english-quiz-lang";
  var NOTES_KEY = "tech-english-quiz-notes-v1";

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
      langLabel: "Change language to Spanish", showOriginal: "Original in English",
      docsTitle: "Documents", docsSub: "Read the unit text in English, in Spanish, or switch page by page.",
      docEn: "English document", docEnDesc: "The original document, complete.",
      docEs: "Spanish document", docEsDesc: "The complete translation into Spanish.",
      reader: "Interactive reader", readerDesc: "Same format as the PDF, in English. Highlight the text, send it to your notes and translate only the page you are reading.",
      pages: "pages", download: "Download PDF", pageOf: function (a, b) { return "Page " + a + " of " + b; },
      toEs: "Translate this page to Spanish", toEn: "Back to English", toEsShort: "Translate", toEnShort: "English",
      showingEn: "English", showingEs: "Spanish (this page only)",
      swipeHint: "Swipe or use ← → to change page. Pinch to zoom.",
      openFull: "Open full image", loading: "Loading…",
      notesTitle: "My notes", notesSub: "Two notes for this unit. Paste text from the documents or write your own — everything is saved on this device.",
      note: function (n) { return "Note " + n; }, noteEmpty: "Empty — tap to write.",
      notePh: "Write here, or paste text from the documents…", savedOk: "Saved ✓", chars: "characters",
      clearNote: "Empty this note", confirmClear: function (n) { return "Delete all the text of Note " + n + "?"; },
      openNotes: "My notes", close: "Close", expand: "Open in full screen",
      highlight: "Highlight", copy: "Copy", copied: "Copied", addTo: function (n) { return "+ Note " + n; },
      added: function (n) { return "Added to Note " + n; }, removeHl: "Remove highlight", hlRemoved: "Highlight removed",
      clearPageHl: "Remove highlights on this page", confirmPageHl: "Remove all the highlights on this page?",
      hlTitle: "My highlights", hlCount: function (n) { return n + " highlight" + (n === 1 ? "" : "s"); },
      hlNone: "No highlights yet. Select English text in the reader to highlight it.",
      selHint: "Select English text to highlight it, copy it or send it to your notes.",
      selHintEs: "Select text to copy it or send it to your notes.",
      esCopyHint: "This Spanish page is only an image. To copy text in Spanish, open the Spanish document.",
      goPage: "Go to page",
      exam: "Practice exam", examKicker: function (n) { return "Like the real exam · " + n + " questions"; },
      examDesc: "Same format and difficulty as the real exam: matching, word boxes, multiple choice and reading.",
      examReal: function (n) { return n + " question" + (n === 1 ? "" : "s") + " from the real exam"; },
      realQ: function (n) { return "Real exam · Q" + n; }, realBadge: "This question was on the real exam",
      realLegend: "= this question was on the real exam (Inglés III, 13/08/2026).",
      onlyReal: function (n) { return "Show only the " + n + " questions from the real exam"; },
      examIntro: "Answer everything, then tap \u201cGrade my exam\u201d at the end to see your score and the correct answers.",
      answeredOf: function (a, b) { return a + " of " + b + " answered"; },
      p1: "Part 1 · Matching", p2: "Part 2 · Word box", p3: "Part 3 · Multiple choice", p4: "Part 4 · Reading comprehension",
      grade: "Grade my exam", retry: "Try again", examScore: "Your score", correctIs: "Correct answer: ",
      gradeLeft: function (n) { return "You still have " + n + " unanswered question" + (n === 1 ? "" : "s") + ". Grade anyway?"; },
      confirmRetry: "Erase your answers and start this exam again?",
      backup: "Backup copy", backupDesc: "Your notes and highlights stay in this browser. Download a copy to keep them safe or to move them to another device.",
      exportB: "Download copy", importB: "Restore a copy", importOk: "Copy restored",
      importBad: "That file is not a valid copy.", confirmImport: "Replace your current notes and highlights with this copy?"
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
      langLabel: "Cambiar idioma a inglés", showOriginal: "Original en inglés",
      docsTitle: "Documentos", docsSub: "Lee el texto de la unidad en inglés, en español, o cambia página por página.",
      docEn: "Documento en inglés", docEnDesc: "El documento original, completo.",
      docEs: "Documento en español", docEsDesc: "La traducción completa al español.",
      reader: "Lector dinámico", readerDesc: "Mismo formato que el PDF, en inglés. Subraya el texto, envíalo a tus apuntes y traduce solo la página que estás leyendo.",
      pages: "páginas", download: "Descargar PDF", pageOf: function (a, b) { return "Página " + a + " de " + b; },
      toEs: "Cambiar esta página al español", toEn: "Volver al inglés", toEsShort: "Traducir", toEnShort: "Inglés",
      showingEn: "Inglés", showingEs: "Español (solo esta página)",
      swipeHint: "Desliza o usa ← → para cambiar de página. Pellizca para hacer zoom.",
      openFull: "Abrir imagen completa", loading: "Cargando…",
      notesTitle: "Mis apuntes", notesSub: "Dos apuntes para esta unidad. Pega texto de los documentos o escribe lo que quieras: todo se guarda en este dispositivo.",
      note: function (n) { return "Apunte " + n; }, noteEmpty: "Vacío — toca para escribir.",
      notePh: "Escribe aquí o pega texto de los documentos…", savedOk: "Guardado ✓", chars: "caracteres",
      clearNote: "Vaciar este apunte", confirmClear: function (n) { return "¿Borrar todo el texto del Apunte " + n + "?"; },
      openNotes: "Mis apuntes", close: "Cerrar", expand: "Abrir en pantalla completa",
      highlight: "Subrayar", copy: "Copiar", copied: "Copiado", addTo: function (n) { return "+ Apunte " + n; },
      added: function (n) { return "Añadido al Apunte " + n; }, removeHl: "Quitar subrayado", hlRemoved: "Subrayado quitado",
      clearPageHl: "Quitar subrayados de esta página", confirmPageHl: "¿Quitar todos los subrayados de esta página?",
      hlTitle: "Mis subrayados", hlCount: function (n) { return n + " subrayado" + (n === 1 ? "" : "s"); },
      hlNone: "Todavía no tienes subrayados. Selecciona texto en inglés en el lector para subrayarlo.",
      selHint: "Selecciona texto en inglés para subrayarlo, copiarlo o enviarlo a tus apuntes.",
      selHintEs: "Selecciona texto para copiarlo o enviarlo a tus apuntes.",
      esCopyHint: "Esta página en español es solo imagen. Para copiar texto en español, abre el Documento en español.",
      goPage: "Ir a la página",
      exam: "Examen de práctica", examKicker: function (n) { return "Como el examen real · " + n + " preguntas"; },
      examDesc: "Mismo formato y dificultad que el examen real: relacionar, cuadros de palabras, opción múltiple y lectura.",
      examReal: function (n) { return n + " pregunta" + (n === 1 ? "" : "s") + " del examen real"; },
      realQ: function (n) { return "Examen real · P" + n; }, realBadge: "Esta pregunta estuvo en el examen real",
      realLegend: "= esta pregunta estuvo en el examen real (Inglés III, 13/08/2026).",
      onlyReal: function (n) { return "Mostrar solo las " + n + " preguntas del examen real"; },
      examIntro: "Responde todo y al final toca \u201cCalificar mi examen\u201d para ver tu nota y las respuestas correctas.",
      answeredOf: function (a, b) { return a + " de " + b + " respondidas"; },
      p1: "Parte 1 · Relacionar", p2: "Parte 2 · Cuadro de palabras", p3: "Parte 3 · Opción múltiple", p4: "Parte 4 · Comprensión lectora",
      grade: "Calificar mi examen", retry: "Intentar de nuevo", examScore: "Tu nota", correctIs: "Respuesta correcta: ",
      gradeLeft: function (n) { return "Te falta" + (n === 1 ? "" : "n") + " " + n + " pregunta" + (n === 1 ? "" : "s") + " por responder. ¿Calificar de todos modos?"; },
      confirmRetry: "¿Borrar tus respuestas y empezar este examen de nuevo?",
      backup: "Copia de seguridad", backupDesc: "Tus apuntes y subrayados quedan guardados en este navegador. Descarga una copia para tenerlos seguros o pasarlos a otro dispositivo.",
      exportB: "Descargar copia", importB: "Restaurar una copia", importOk: "Copia restaurada",
      importBad: "Ese archivo no es una copia válida.", confirmImport: "¿Reemplazar tus apuntes y subrayados actuales por esta copia?"
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
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
    swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13l-3-3M20 16H7l3 3"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg>',
    exam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6"/></svg>',
    mark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16"/><path d="M7 16l2-6 7-7 3 3-7 7z"/></svg>'
  };

  /* ================= Storage (safe) ================= */
  var progress = {};
  try { progress = JSON.parse(localStorage.getItem(STORE_KEY) || "{}") || {}; } catch (e) { progress = {}; }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* storage unavailable */ } }

  // Notes & highlights: { notes: { u1: ["", ""] }, hl: { "u1-3": [{ id, s: [item, char], e: [item, char], c, t }] } }
  var notesDb = {};
  try { notesDb = JSON.parse(localStorage.getItem(NOTES_KEY) || "{}") || {}; } catch (e) { notesDb = {}; }
  function fixNotesDb() {
    if (!notesDb || typeof notesDb !== "object") notesDb = {};
    if (!notesDb.notes || typeof notesDb.notes !== "object") notesDb.notes = {};
    if (!notesDb.hl || typeof notesDb.hl !== "object") notesDb.hl = {};
  }
  fixNotesDb();
  function saveNotes() {
    try { localStorage.setItem(NOTES_KEY, JSON.stringify(notesDb)); return true; } catch (e) { toast("⚠ " + e.message); return false; }
  }
  // ask the browser not to evict this site's storage
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }
  function getNote(u, k) { var a = notesDb.notes[u]; return (a && a[k - 1]) || ""; }
  function setNote(u, k, v) {
    var a = notesDb.notes[u] = notesDb.notes[u] || ["", ""];
    a[k - 1] = v;
    return saveNotes();
  }
  function appendNote(u, k, text) {
    var cur = getNote(u, k);
    setNote(u, k, cur ? cur.replace(/\s+$/, "") + "\n\n" + text : text);
  }
  function hlOf(u, p) { return notesDb.hl[u + "-" + p] || []; }
  function setHl(u, p, list) {
    if (list.length) notesDb.hl[u + "-" + p] = list; else delete notesDb.hl[u + "-" + p];
    saveNotes();
  }
  function hlCountUnit(u) {
    var n = 0;
    for (var k in notesDb.hl) if (k.indexOf(u + "-") === 0) n += notesDb.hl[k].length;
    return n;
  }

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
    function add(c) {
      if (c === null || c === undefined || c === false) return;
      if (Array.isArray(c)) c.forEach(add); // nested lists are fine
      else el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    for (var i = 2; i < arguments.length; i++) add(arguments[i]);
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
        h("section", { class: "levels" }, cards, EXAMS[u] ? examCard(u) : null),
        notesSection(u),
        docsSection(u)));
  }

  /* ---------- Notes (2 per unit) ---------- */
  function notesSection(u) {
    var unit = DATA[u], nHl = hlCountUnit(u);
    function card(k) {
      var txt = getNote(u, k).trim();
      return h("a", { class: "level-card note-card", href: "#/" + u + "/notes/" + k, style: "--c:" + unit.color },
        h("div", { class: "level-card__icon", html: ICONS.note }),
        h("div", { class: "level-card__body" },
          h("small", { text: txt ? txt.length + " " + T("chars") : "" }),
          h("h3", { text: T("note")(k) }),
          h("div", { class: "muted note-card__prev", text: txt ? txt.slice(0, 160) : T("noteEmpty") })),
        h("span", { class: "chev", html: ICONS.chev }));
    }
    return h("section", { class: "docs-sec" },
      h("h2", { class: "sec-title", text: T("notesTitle") }),
      h("p", { class: "muted", style: "margin:4px 0 0", text: T("notesSub") }),
      h("div", { class: "levels notes-grid" }, card(1), card(2)),
      h("p", { style: "margin:10px 0 0" },
        h("a", { class: "hl-link", href: "#/" + u + "/notes/1#hl" },
          h("span", { class: "btn-ico", html: ICONS.mark }), T("hlTitle") + " · " + T("hlCount")(nHl))));
  }

  // Textarea that saves itself while you type
  function noteEditor(u, k, cls) {
    var status = h("span", { class: "note-status", "aria-live": "polite" });
    var ta = h("textarea", { class: "note-ta" + (cls ? " " + cls : ""), placeholder: T("notePh"), spellcheck: "true",
      "aria-label": T("note")(k) });
    ta.value = getNote(u, k);
    var t = null, dirty = false; // only text typed here is saved (never a stale copy)
    function flush() {
      clearTimeout(t); t = null;
      if (!dirty) return;
      dirty = false;
      if (setNote(u, k, ta.value)) status.textContent = T("savedOk");
    }
    ta.addEventListener("input", function () { dirty = true; status.textContent = ""; clearTimeout(t); t = setTimeout(flush, 350); });
    ta.addEventListener("blur", flush);
    editorFlushes.push(flush);
    ta.dataset.u = u; ta.dataset.k = k;
    return { ta: ta, status: status, flush: flush };
  }
  var editorFlushes = [];
  function flushEditors() { editorFlushes.forEach(function (f) { f(); }); }
  window.addEventListener("pagehide", flushEditors);
  function refreshOpenEditors(u, k) {
    Array.prototype.forEach.call(document.querySelectorAll(".note-ta"), function (ta) {
      if (ta.dataset.u === u && +ta.dataset.k === k) ta.value = getNote(u, k);
    });
  }
  function noteTabs(k, onPick) {
    return h("div", { class: "tabs", role: "tablist" }, [1, 2].map(function (i) {
      return h("button", { class: "tab" + (i === k ? " is-on" : ""), type: "button", role: "tab", "aria-selected": i === k ? "true" : "false",
        onclick: function () { onPick(i); } }, T("note")(i));
    }));
  }

  function viewNotes(u, k) {
    var unit = DATA[u], d = DOCS[u];
    if (k !== 1 && k !== 2) k = 1;
    var ed = noteEditor(u, k, "note-ta--big"), ta = ed.ta;

    var clearBtn = h("button", { class: "btn", type: "button", onclick: function () {
      if (!ta.value.trim() || !confirm(T("confirmClear")(k))) return;
      ta.value = ""; setNote(u, k, ""); ta.focus();
    } }, T("clearNote"));

    // highlights list
    var hlBox = h("div", { class: "hl-list" });
    function fillHl() {
      var rows = [];
      for (var p = 1; p <= (d ? d.reader : 0); p++) {
        hlOf(u, p).forEach(function (hl) {
          var pp = p;
          rows.push(h("div", { class: "hl-row hl--" + hl.c },
            h("div", { class: "hl-row__txt" },
              h("small", null, h("a", { href: "#/" + u + "/read/" + pp, text: T("goPage") + " " + pp })),
              h("span", { text: hl.t })),
            h("button", { class: "iconbtn", type: "button", "aria-label": T("removeHl"), title: T("removeHl"), html: ICONS.x,
              onclick: function () { removeHl(u, pp, hl.id); fillHl(); } })));
        });
      }
      hlBox.replaceChildren.apply(hlBox, rows.length ? rows : [h("p", { class: "muted", text: T("hlNone") })]);
    }
    fillHl();

    var fileIn = h("input", { type: "file", accept: "application/json,.json", hidden: true, onchange: function () {
      var f = fileIn.files && fileIn.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        var data = null;
        try { data = JSON.parse(rd.result); } catch (e) { data = null; }
        if (!data || typeof data !== "object" || (!data.notes && !data.hl)) { toast(T("importBad")); return; }
        if (!confirm(T("confirmImport"))) return;
        editorFlushes = [];
        notesDb = data; fixNotesDb(); saveNotes(); toast(T("importOk")); render(true);
      };
      rd.readAsText(f);
    } });

    app.replaceChildren(
      topbar({ back: "#/" + u, kicker: T("unit") + " " + unit.number + " · " + T("notesTitle"), title: T("note")(k), home: true }),
      h("main", { class: "wrap", style: "--c:" + unit.color },
        h("div", { class: "notes-top" },
          noteTabs(k, function (i) { ed.flush(); location.hash = "#/" + u + "/notes/" + i; }),
          d ? h("a", { class: "btn", href: "#/" + u + "/read/1", style: "display:inline-flex;align-items:center;gap:8px;text-decoration:none" },
            h("span", { class: "btn-ico", html: ICONS.swap }), T("reader")) : null),
        h("div", { class: "card note-card-ed" }, ta,
          h("div", { class: "note-foot" }, ed.status, clearBtn)),
        h("section", { class: "docs-sec", id: "hl" },
          h("h2", { class: "sec-title", text: T("hlTitle") }),
          hlBox),
        h("section", { class: "docs-sec" },
          h("h2", { class: "sec-title", text: T("backup") }),
          h("p", { class: "muted", style: "margin:4px 0 12px", text: T("backupDesc") }),
          h("div", { class: "doc-actions" },
            h("button", { class: "btn", type: "button", onclick: exportNotes },
              h("span", { class: "btn-ico", html: ICONS.dl }), " " + T("exportB")),
            h("button", { class: "btn", type: "button", onclick: function () { fileIn.click(); } }, T("importB")),
            fileIn))));
    if (location.hash.indexOf("#hl") > 0) {
      var sec = document.getElementById("hl"); if (sec) setTimeout(function () { sec.scrollIntoView(); }, 0);
    }
  }
  function exportNotes() {
    var blob = new Blob([JSON.stringify(notesDb, null, 2)], { type: "application/json" });
    var a = h("a", { href: URL.createObjectURL(blob), download: "apuntes-technical-english-" + new Date().toISOString().slice(0, 10) + ".json" });
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  // Side panel with the two notes, available while reading
  var drawer = { open: false, k: 1 };
  function mountDrawer(u) {
    document.body.classList.toggle("has-drawer", drawer.open);
    if (!drawer.open) return;
    var ed = noteEditor(u, drawer.k);
    var el = h("aside", { class: "drawer", "aria-label": T("notesTitle"), style: "--c:" + DATA[u].color },
      h("div", { class: "drawer__head" },
        noteTabs(drawer.k, function (i) { ed.flush(); drawer.k = i; el.remove(); mountDrawer(u); }),
        h("a", { class: "iconbtn", href: "#/" + u + "/notes/" + drawer.k, "aria-label": T("expand"), title: T("expand"), html: ICONS.expand }),
        h("button", { class: "iconbtn", type: "button", "aria-label": T("close"), title: T("close"), html: ICONS.x,
          onclick: function () { ed.flush(); toggleDrawer(u); } })),
      ed.ta,
      h("div", { class: "note-foot" }, ed.status));
    app.appendChild(el);
  }
  function toggleDrawer(u) {
    drawer.open = !drawer.open;
    var old = app.querySelector(".drawer"); if (old) old.remove();
    mountDrawer(u);
    var b = app.querySelector(".notes-btn"); if (b) b.classList.toggle("is-on", drawer.open);
  }
  function notesButton(u) {
    return h("button", { class: "btn notes-btn" + (drawer.open ? " is-on" : ""), type: "button", onclick: function () { toggleDrawer(u); } },
      h("span", { class: "btn-ico", html: ICONS.note }), T("openNotes"));
  }

  /* ---------- Documents ---------- */
  var DOCS = window.QUIZ_DOCS || {};
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function docsSection(u) {
    var d = DOCS[u], unit = DATA[u];
    if (!d) return null;
    function card(href, badge, title, desc, icon) {
      return h("a", { class: "level-card", href: href, style: "--c:" + unit.color },
        h("div", { class: "level-card__icon", html: icon }),
        h("div", { class: "level-card__body" },
          h("small", { text: badge }),
          h("h3", { text: title }),
          h("div", { class: "muted", style: "font-size:14px", text: desc })),
        h("span", { class: "chev", html: ICONS.chev }));
    }
    return h("section", { class: "docs-sec" },
      h("h2", { class: "sec-title", text: T("docsTitle") }),
      h("p", { class: "muted", style: "margin:4px 0 0", text: T("docsSub") }),
      h("div", { class: "levels" },
        card("#/" + u + "/read/1", "EN ⇄ ES", T("reader"), T("readerDesc"), ICONS.swap),
        card("#/" + u + "/doc/en", "EN · " + d.reader + " " + T("pages"), T("docEn"), T("docEnDesc"), ICONS.book),
        card("#/" + u + "/doc/es", "ES · " + d.fullEs + " " + T("pages"), T("docEs"), T("docEsDesc"), ICONS.book)));
  }

  /* ---------- Text layer over the page images (select, copy, highlight) ---------- */
  var TEXT = window.QUIZ_TEXT || {};
  var HL_COLORS = ["y", "g", "b", "p"];
  function pageData(u, l) { return TEXT[u] && TEXT[u][l]; }
  function pageImg(u, l, attrs) {
    var d = pageData(u, l);
    attrs.width = "1000"; attrs.height = String(Math.round(1000 * (d ? d.r : 1.294)));
    attrs.draggable = "false";
    return h("img", attrs);
  }

  // Page image with transparent, selectable text on top (same position as the words in the image).
  // canHl: only the English pages can be highlighted.
  function textPage(u, l, p, img, canHl) {
    var data = pageData(u, l), items = data && data.p[p - 1];
    var wrap = h("div", { class: "pg" }, img);
    if (!items || !items.length) return wrap;
    var layer = h("div", { class: "tl" + (canHl ? " tl--hl" : ""), lang: l });
    layer._tl = { u: u, l: l, p: p, items: items, r: data.r, canHl: canHl };
    var r = data.r;
    items.forEach(function (it, i) {
      layer.appendChild(h("span", { "data-i": String(i),
        style: "left:" + (it[0] * 100).toFixed(2) + "%;top:" + (it[1] * 100).toFixed(2) + "%;font-size:" + (it[2] * 100).toFixed(3) + "cqw" +
          ";padding-bottom:" + (gapBelow(items, i, r) * r * 100).toFixed(3) + "cqw" }, it[4]));
    });
    wrap.appendChild(layer);
    if (canHl) paintHl(layer);
    return wrap;
  }
  // Empty space (fraction of page height) between a text line and the line right below it.
  // The span is padded down to that line, so dragging between lines never falls on "nothing"
  // (which made the browser selection jump around).
  function gapBelow(items, i, r) {
    var it = items[i], hgt = it[2] / r, bottom = it[1] + hgt, best = hgt * 1.2;
    for (var j = 0; j < items.length; j++) {
      var o = items[j];
      if (o[1] <= it[1] + hgt * 0.5) continue;                       // not below
      if (o[0] >= it[0] + it[3] || o[0] + o[3] <= it[0]) continue;     // no horizontal overlap
      best = Math.min(best, o[1] - bottom);
    }
    return Math.max(0, best);
  }
  // stretch each word horizontally so it covers the same width as in the image
  function fitLayers() {
    Array.prototype.forEach.call(app.querySelectorAll(".tl"), function (layer) {
      var W = layer.clientWidth, spans = layer.children, widths = [], i;
      if (!W) return;
      for (i = 0; i < spans.length; i++) widths.push(spans[i].offsetWidth);
      for (i = 0; i < spans.length; i++) {
        var target = layer._tl.items[+spans[i].dataset.i][3] * W;
        if (widths[i] > 0 && target > 0) spans[i].style.transform = "scaleX(" + (target / widths[i]).toFixed(4) + ")";
      }
    });
  }
  var fitT = null;
  window.addEventListener("resize", function () { clearTimeout(fitT); fitT = setTimeout(fitLayers, 150); });

  function paintHl(layer) {
    var tl = layer._tl, list = hlOf(tl.u, tl.p);
    Array.prototype.forEach.call(layer.children, function (sp) {
      var i = +sp.dataset.i, s = tl.items[i][4], cuts = [];
      list.forEach(function (hl) {
        if (i < hl.s[0] || i > hl.e[0]) return;
        var a = i === hl.s[0] ? hl.s[1] : 0, b = i === hl.e[0] ? hl.e[1] : s.length;
        if (b > a) cuts.push([a, b, hl]);
      });
      if (!cuts.length) { if (sp.children.length) sp.textContent = s; return; }
      cuts.sort(function (x, y) { return x[0] - y[0]; });
      var out = [], pos = 0;
      cuts.forEach(function (c) {
        var a = Math.max(c[0], pos);
        if (c[1] <= a) return;
        if (a > pos) out.push(s.slice(pos, a));
        out.push(h("mark", { class: "hl hl--" + c[2].c, "data-id": c[2].id }, s.slice(a, c[1])));
        pos = c[1];
      });
      if (pos < s.length) out.push(s.slice(pos));
      sp.replaceChildren.apply(sp, out);
    });
  }

  // positions are [item index, character offset]
  function cmpPos(a, b) { return a[0] - b[0] || a[1] - b[1]; }
  function posIn(layer, node, off, isEnd) {
    var tl = layer._tl, el = node.nodeType === 3 ? node.parentNode : node;
    var sp = el && el.closest ? el.closest("span[data-i]") : null;
    if (sp && layer.contains(sp)) {
      var r = document.createRange();
      r.selectNodeContents(sp); r.setEnd(node, off);
      return [+sp.dataset.i, r.toString().length];
    }
    if (node === layer) {
      var kids = layer.children, k = isEnd ? kids[off - 1] : kids[off];
      if (k) return isEnd ? [+k.dataset.i, tl.items[+k.dataset.i][4].length] : [+k.dataset.i, 0];
      var last = tl.items.length - 1;
      return isEnd ? [0, 0] : [last, tl.items[last][4].length];
    }
    return null;
  }
  // rebuild readable text from the PDF items (spaces, joined lines, paragraphs)
  function textBetween(tl, a, b) {
    var out = "", prev = null;
    for (var i = a[0]; i <= b[0]; i++) {
      var it = tl.items[i], s = it[4];
      var piece = s.slice(i === a[0] ? a[1] : 0, i === b[0] ? b[1] : s.length);
      if (prev) out += joiner(prev, it, tl.r, out);
      out += piece; prev = it;
    }
    return out.replace(/[ \t]+\n/g, "\n").replace(/ {2,}/g, " ");
  }
  function joiner(a, b, r, sofar) {
    var lineH = a[2] / r, dy = b[1] - a[1];
    if (Math.abs(dy) > lineH * 0.5) {
      if (dy > lineH * 1.85 || dy < 0) return "\n";
      return /-$/.test(sofar) ? "" : " ";
    }
    if (/\s$/.test(sofar) || /^\s/.test(b[4])) return "";
    return b[0] - (a[0] + a[3]) > a[2] * 0.12 ? " " : "";
  }
  function selInfo() {
    var sel = window.getSelection && window.getSelection();
    if (!sel || !sel.rangeCount || sel.isCollapsed) return null;
    var r = sel.getRangeAt(0), layer = null;
    [r.startContainer, r.endContainer].some(function (n) {
      var el = n.nodeType === 3 ? n.parentNode : n;
      layer = el && el.closest ? el.closest(".tl") : null;
      return layer && layer._tl;
    });
    if (!layer || !layer._tl) return null;
    var tl = layer._tl, last = tl.items.length - 1;
    var a = layer.contains(r.startContainer) ? posIn(layer, r.startContainer, r.startOffset, false) : [0, 0];
    var b = layer.contains(r.endContainer) ? posIn(layer, r.endContainer, r.endOffset, true) : [last, tl.items[last][4].length];
    if (!a || !b || cmpPos(a, b) >= 0) return null;
    var text = textBetween(tl, a, b).trim();
    if (!text) return null;
    return { layer: layer, s: a, e: b, text: text, rect: r.getBoundingClientRect() };
  }

  /* Floating bar shown over selected text: highlight (English only), copy, send to a note */
  var selBar = null, selCur = null;
  function hideSelBar() { if (selBar) selBar.hidden = true; selCur = null; }
  function showSelBar(info, hl) {
    if (!selBar) {
      selBar = h("div", { class: "selbar", role: "toolbar", hidden: true });
      selBar.addEventListener("mousedown", function (e) { e.preventDefault(); }); // keep the selection
      document.body.appendChild(selBar);
    }
    selCur = info;
    var tl = info.layer._tl, kids = [];
    function btn(label, fn, cls) { return h("button", { type: "button", class: "selbar__btn" + (cls ? " " + cls : ""), onclick: fn }, label); }
    if (hl) {
      kids.push(btn(T("removeHl"), function () {
        removeHl(tl.u, tl.p, hl.id); paintHl(info.layer); hideSelBar(); toast(T("hlRemoved"));
      }, "selbar__rm"));
    } else if (tl.canHl) {
      kids.push(h("span", { class: "selbar__lbl", title: T("highlight") }, h("span", { class: "btn-ico", html: ICONS.mark }), T("highlight")));
      HL_COLORS.forEach(function (c) {
        kids.push(h("button", { class: "selbar__dot hl--" + c, type: "button", "aria-label": T("highlight"), title: T("highlight"),
          onclick: function () { addHl(info, c); } }));
      });
      kids.push(h("i", { class: "selbar__sep" }));
    }
    kids.push(btn(T("copy"), function () { copyText(info.text); hideSelBar(); }));
    kids.push(btn(T("addTo")(1), function () { sendToNote(tl.u, 1, info.text); }));
    kids.push(btn(T("addTo")(2), function () { sendToNote(tl.u, 2, info.text); }));
    selBar.replaceChildren.apply(selBar, kids);
    selBar.hidden = false;
    placeSelBar(info.rect);
  }
  function placeSelBar(rect) {
    var bw = selBar.offsetWidth, bh = selBar.offsetHeight;
    var vw = document.documentElement.clientWidth, vh = window.innerHeight;
    var gap = window.matchMedia && matchMedia("(pointer: coarse)").matches ? 30 : 10; // leave room for touch handles
    var top = rect.bottom + gap;
    if (top + bh > vh - 8) top = rect.top - bh - gap;
    top = Math.max(8, Math.min(top, vh - bh - 8));
    var left = Math.max(8, Math.min(rect.left + rect.width / 2 - bw / 2, vw - bw - 8));
    selBar.style.top = top + "px"; selBar.style.left = left + "px";
  }
  function addHl(info, c) {
    var tl = info.layer._tl;
    // the new highlight goes on top: the parts of older highlights outside it are kept
    var list = [];
    hlOf(tl.u, tl.p).forEach(function (x) {
      if (cmpPos(x.e, info.s) <= 0 || cmpPos(x.s, info.e) >= 0) { list.push(x); return; }
      if (cmpPos(x.s, info.s) < 0) keepPart(x, x.s, info.s, "a");
      if (cmpPos(x.e, info.e) > 0) keepPart(x, info.e, x.e, "b");
    });
    function keepPart(x, a, b, tag) {
      var t = textBetween(tl, a, b).trim();
      if (t) list.push({ id: x.id + tag, s: a, e: b, c: x.c, t: t });
    }
    list.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), s: info.s, e: info.e, c: c, t: info.text });
    list.sort(function (x, y) { return cmpPos(x.s, y.s); });
    setHl(tl.u, tl.p, list);
    paintHl(info.layer);
    window.getSelection().removeAllRanges();
    hideSelBar();
    refreshPageHlBtn();
  }
  function removeHl(u, p, id) {
    setHl(u, p, hlOf(u, p).filter(function (x) { return x.id !== id; }));
    refreshPageHlBtn();
  }
  function refreshPageHlBtn() {
    var b = app.querySelector(".clear-hl");
    if (b) b.hidden = !hlOf(b.dataset.u, +b.dataset.p).length;
  }
  function sendToNote(u, k, text) {
    flushEditors();
    appendNote(u, k, text);
    refreshOpenEditors(u, k);
    toast(T("added")(k));
    window.getSelection().removeAllRanges();
    hideSelBar();
  }
  function copyText(text) {
    function fallback() {
      var ta = h("textarea", { style: "position:fixed;top:-1000px;left:0;opacity:0" });
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast(T("copied")); } catch (e) { /* ignore */ }
      ta.remove();
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(function () { toast(T("copied")); }, fallback);
    else fallback();
  }

  var selT = null;
  document.addEventListener("selectionchange", function () {
    clearTimeout(selT);
    selT = setTimeout(function () {
      var info = selInfo();
      if (info) showSelBar(info);
      else if (selCur && !selCur.hl) hideSelBar();
    }, 180);
  });
  document.addEventListener("click", function (e) {
    if (selBar && selBar.contains(e.target)) return;
    var m = e.target.closest && e.target.closest(".tl mark.hl"), sel = window.getSelection();
    if (m && sel && sel.isCollapsed) {
      var layer = m.closest(".tl"), tl = layer._tl;
      var hl = hlOf(tl.u, tl.p).filter(function (x) { return x.id === m.dataset.id; })[0];
      if (hl) { showSelBar({ layer: layer, s: hl.s, e: hl.e, text: hl.t, rect: m.getBoundingClientRect(), hl: true }, hl); return; }
    }
    if (selCur && selCur.hl) hideSelBar();
  });
  // Ctrl+C / native "Copy" gives clean text (with spaces and paragraphs)
  document.addEventListener("copy", function (e) {
    var info = selInfo();
    if (!info || !e.clipboardData) return;
    e.clipboardData.setData("text/plain", info.text);
    e.preventDefault();
  });
  window.addEventListener("scroll", function () {
    if (!selCur || !selBar || selBar.hidden) return;
    if (selCur.hl) { hideSelBar(); return; }
    var sel = window.getSelection();
    if (sel && sel.rangeCount && !sel.isCollapsed) placeSelBar(sel.getRangeAt(0).getBoundingClientRect());
  }, { passive: true });

  function viewDoc(u, which) {
    var d = DOCS[u], unit = DATA[u];
    var isEs = which === "es";
    var n = isEs ? d.fullEs : d.reader;
    var folder = isEs ? "full-es" : "en";
    var pages = [];
    for (var i = 1; i <= n; i++) {
      var img = pageImg(u, isEs ? "es" : "en", { src: "docs/" + u + "/" + folder + "/p" + pad(i) + ".jpg", loading: i <= 2 ? "eager" : "lazy", decoding: "async",
        alt: (isEs ? T("docEs") : T("docEn")) + " — " + T("pageOf")(i, n) });
      pages.push(h("figure", { class: "page" },
        textPage(u, isEs ? "es" : "en", i, img, !isEs),
        h("figcaption", { text: T("pageOf")(i, n) })));
    }
    app.replaceChildren(
      topbar({ back: "#/" + u, kicker: T("unit") + " " + unit.number + " · " + T("docsTitle"), title: isEs ? T("docEs") : T("docEn"), home: true }),
      h("main", { class: "wrap wrap--doc", style: "--c:" + unit.color },
        h("div", { class: "doc-actions" },
          h("a", { class: "btn", href: isEs ? d.pdfEs : d.pdfEn, download: "", style: "display:inline-flex;align-items:center;gap:8px;text-decoration:none" },
            h("span", { class: "btn-ico", html: ICONS.dl }), T("download")),
          h("a", { class: "btn btn--primary", href: "#/" + u + "/read/1", style: "display:inline-flex;align-items:center;gap:8px;text-decoration:none" },
            h("span", { class: "btn-ico", html: ICONS.swap }), T("reader")),
          notesButton(u)),
        h("p", { class: "sel-hint", text: isEs ? T("selHintEs") : T("selHint") }),
        h("div", { class: "pages" }, pages)));
    mountDrawer(u);
    requestAnimationFrame(fitLayers);
  }

  var readerLang = {}; // "u1-3" -> "es" (per page, only for this session)
  function viewReader(u, p) {
    var d = DOCS[u], unit = DATA[u];
    var n = d.reader;
    if (p < 1 || p > n) { location.hash = "#/" + u + "/read/1"; return; }
    var keyP = u + "-" + p;
    var showEs = readerLang[keyP] === "es";
    function src(l, i) { return "docs/" + u + "/" + l + "/p" + pad(i) + ".jpg"; }

    var img = pageImg(u, "en", { class: "reader__img", src: src(showEs ? "es" : "en", p), alt: T("pageOf")(p, n) + " — " + (showEs ? T("showingEs") : T("showingEn")),
      decoding: "async" });
    // preload the other language of this page and the next page, so switching is instant
    [src(showEs ? "en" : "es", p), p < n ? src("en", p + 1) : null].forEach(function (s) { if (s) { var im = new Image(); im.src = s; } });

    // lives in the sticky top bar, so it is always at hand while scrolling the page
    var toggle = h("button", { class: "reader__toggle" + (showEs ? " is-es" : ""), type: "button",
      title: showEs ? T("toEn") : T("toEs"), "aria-label": showEs ? T("toEn") : T("toEs"), onclick: function () { flip(); } },
      h("span", { class: "btn-ico", html: ICONS.swap }),
      h("span", { class: "reader__toggle-long", text: showEs ? T("toEnShort") : T("toEsShort") }),
      h("span", { class: "reader__toggle-short", text: showEs ? "EN" : "ES" }));

    var strip = h("nav", { class: "nav-strip", "aria-label": T("pages") },
      Array.apply(null, Array(n)).map(function (_, i) {
        var cls = "dot" + (i + 1 === p ? " is-current" : "") + (readerLang[u + "-" + (i + 1)] === "es" ? " is-es" : "") +
          (hlOf(u, i + 1).length ? " has-hl" : "");
        return h("a", { class: cls, href: "#/" + u + "/read/" + (i + 1), text: String(i + 1), style: "display:grid;place-items:center;text-decoration:none" });
      }));

    // English: selectable text (highlight / copy / notes). Spanish: image only.
    var stage = h("div", { class: "reader__stage" + (showEs ? " is-es" : "") },
      h("span", { class: "reader__flag", text: showEs ? "ES · " + T("showingEs") : "EN · " + T("showingEn") }),
      showEs ? img : textPage(u, "en", p, img, true));

    var nav = h("div", { class: "q-actions reader__nav" },
      h("button", { class: "btn", type: "button", disabled: p === 1, onclick: function () { go(p - 1); } }, T("prev")),
      h("span", { class: "reader__count", text: T("pageOf")(p, n) }),
      h("button", { class: "btn", type: "button", disabled: p === n, onclick: function () { go(p + 1); } }, T("next")));

    var hint = showEs
      ? h("p", { class: "sel-hint" }, T("esCopyHint") + " ", h("a", { href: "#/" + u + "/doc/es", text: T("docEs") + " →" }))
      : h("p", { class: "sel-hint" }, T("selHint") + " ",
          h("button", { class: "linkbtn clear-hl", type: "button", "data-u": u, "data-p": String(p), hidden: !hlOf(u, p).length,
            onclick: function () { if (confirm(T("confirmPageHl"))) { setHl(u, p, []); render(true); } } }, T("clearPageHl")));

    app.replaceChildren(
      topbar({ back: "#/" + u, kicker: T("unit") + " " + unit.number + " · " + T("reader"), title: T("pageOf")(p, n), home: true, right: toggle }),
      h("main", { class: "wrap wrap--doc", style: "--c:" + unit.color },
        strip,
        h("div", { class: "reader__bar" },
          notesButton(u),
          h("a", { class: "btn", href: (showEs ? src("es", p) : src("en", p)), target: "_blank", rel: "noopener", text: T("openFull") })),
        hint,
        stage, nav,
        h("p", { class: "foot", text: T("swipeHint") })));
    mountDrawer(u);
    requestAnimationFrame(fitLayers);

    var cur = strip.querySelector(".is-current");
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest", inline: "center" });

    function flip() {
      if (showEs) delete readerLang[keyP]; else readerLang[keyP] = "es";
      render(true);
    }
    function go(i) { location.hash = "#/" + u + "/read/" + i; }

    // swipe to change page (ignored while pinch-zooming or selecting text)
    var sx = null, sy = null, multi = false;
    stage.addEventListener("touchstart", function (e) {
      multi = e.touches.length > 1;
      if (!multi) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }
    }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      var sel = window.getSelection();
      if (multi || sx === null || (window.visualViewport && window.visualViewport.scale > 1.05) || (sel && !sel.isCollapsed)) { sx = null; return; }
      var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
      sx = null;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0 && p < n) go(p + 1); else if (dx > 0 && p > 1) go(p - 1);
      }
    });

    keyHandler = function (e) {
      if (e.key === "ArrowRight" && p < n) go(p + 1);
      else if (e.key === "ArrowLeft" && p > 1) go(p - 1);
      else if (e.key.toLowerCase() === "t" || e.key === " ") { e.preventDefault(); flip(); }
    };
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

  /* ---------- Practice exam (same format as the real exam) ---------- */
  var EXAMS = window.QUIZ_EXAMS || {};
  var examOnlyReal = false;
  // flat list of every question: id, number (1-55), part (0-3), answer key, real-exam number
  function examItems(u) {
    var ex = EXAMS[u], out = [], n = 0;
    ex.match.a.forEach(function (it, i) { out.push({ id: "m" + i, n: ++n, sec: 0, k: it.k, real: it.real }); });
    ex.fill.forEach(function (bx, b) {
      bx.items.forEach(function (it, i) { out.push({ id: "f" + b + "_" + i, n: ++n, sec: 1, k: it.k, real: it.real }); });
    });
    ex.mc.forEach(function (it, i) { out.push({ id: "c" + i, n: ++n, sec: 2, k: it.k, real: it.real }); });
    ex.reading.tf.forEach(function (it, i) { out.push({ id: "t" + i, n: ++n, sec: 3, k: it.k }); });
    ex.reading.gaps.forEach(function (it, i) { out.push({ id: "g" + i, n: ++n, sec: 3, k: it.k }); });
    return out;
  }
  function examState(u) {
    progress[u] = progress[u] || {};
    if (!progress[u].exam) progress[u].exam = { a: {}, g: false };
    return progress[u].exam;
  }
  function examScore(u) {
    var st = examState(u), r = { c: 0, total: 0, answered: 0, by: [0, 0, 0, 0], tot: [0, 0, 0, 0] };
    examItems(u).forEach(function (it) {
      r.total++; r.tot[it.sec]++;
      if (st.a[it.id] !== undefined) r.answered++;
      if (st.a[it.id] === it.k) { r.c++; r.by[it.sec]++; }
    });
    return r;
  }
  function examCard(u) {
    var unit = DATA[u], s = examScore(u), st = examState(u);
    var nReal = examItems(u).filter(function (x) { return x.real; }).length;
    return h("a", { class: "level-card exam-card", href: "#/" + u + "/exam", style: "--c:" + unit.color },
      h("div", { class: "level-card__icon", html: ICONS.exam }),
      h("div", { class: "level-card__body" },
        h("small", { text: T("examKicker")(s.total) }),
        h("h3", { text: T("exam") }),
        h("div", { class: "muted", style: "font-size:14px", text: T("examDesc") }),
        nReal ? h("div", { class: "real-note", text: "📌 " + T("examReal")(nReal) }) : null,
        h("div", { class: "bar-row" }, bar(s.answered / s.total, unit.color),
          h("span", { text: st.g ? T("examScore") + ": " + s.c + "/" + s.total : s.answered + "/" + s.total }))),
      h("span", { class: "chev", html: ICONS.chev }));
  }

  function viewExam(u) {
    var unit = DATA[u], ex = EXAMS[u], st = examState(u), graded = st.g;
    var items = examItems(u), byId = {};
    items.forEach(function (it) { byId[it.id] = it; });
    var nReal = items.filter(function (x) { return x.real; }).length;
    var s = examScore(u);

    function setA(id, v) {
      if (graded) return;
      if (v === undefined || v === "") delete st.a[id]; else st.a[id] = v;
      save(); render(true);
    }
    // one numbered question; fix = correct answer, shown after grading when the answer was wrong
    function item(id, body, fix) {
      var it = byId[id], a = st.a[id], cls = "xq" + (it.real ? " is-real" : "");
      if (graded) cls += a === it.k ? " is-ok" : " is-bad";
      return h("div", { class: cls },
        h("div", { class: "xq__n", text: it.n + "." }),
        h("div", { class: "xq__body" },
          it.real ? h("span", { class: "real-badge", title: T("realBadge") }, "📌 " + T("realQ")(it.real)) : null,
          body,
          graded && a !== it.k ? h("div", { class: "xq__fix", text: T("correctIs") + fix }) : null));
    }
    function pick(id, map, short) {
      var a = st.a[id];
      return h("select", { class: "xsel", disabled: graded, "aria-label": T("question") + " " + byId[id].n,
        onchange: function (e) { setA(id, e.target.value); } },
        h("option", { value: "" }, "—"),
        Object.keys(map).map(function (L) {
          return h("option", { value: L, selected: a === L ? "selected" : null }, short ? L : L + " · " + map[L]);
        }));
    }
    // sentence whose gap "_____" is replaced by a dropdown
    function gapLine(q, sel) {
      var parts = q.split("_____");
      return h("p", { class: "xgap" }, parts[0], sel, parts.slice(1).join("_____"));
    }
    function wordBox(map) {
      return h("div", { class: "xbox" }, Object.keys(map).map(function (L) {
        return h("span", { class: "xbox__w" }, h("b", { text: L + "." }), " " + map[L]);
      }));
    }
    function section(title, instr, hasReal, kids) {
      return h("section", { class: "card xsec" + (hasReal ? " has-real" : "") },
        h("h2", { class: "xsec__t", text: title }),
        h("p", { class: "xsec__i", text: instr }),
        kids);
    }
    function anyReal(list) { return list.some(function (x) { return x.real; }); }

    // Part 1 · Matching
    var p1 = section(T("p1"), "Match the term in Column A with its correct definition in Column B.", anyReal(ex.match.a), [
      h("div", { class: "xmatch" },
        h("div", { class: "xmatch__col" },
          h("h4", { text: "Column A" }),
          ex.match.a.map(function (m, i) {
            return item("m" + i, h("div", { class: "xrow" }, h("span", { class: "xterm", text: m.t }), pick("m" + i, ex.match.b, true)),
              m.k + " · " + ex.match.b[m.k]);
          })),
        h("div", { class: "xmatch__col" },
          h("h4", { text: "Column B" }),
          Object.keys(ex.match.b).map(function (L) {
            return h("div", { class: "xdef" }, h("b", { text: L + "." }), " " + ex.match.b[L]);
          })))]);

    // Part 2 · Word boxes
    var p2 = section(T("p2"), "Complete each sentence with the correct option from the box.",
      ex.fill.some(function (bx) { return anyReal(bx.items); }),
      ex.fill.map(function (bx, b) {
        return h("div", { class: "xfill" + (anyReal(bx.items) ? " has-real" : "") },
          wordBox(bx.box),
          bx.items.map(function (it, i) {
            var id = "f" + b + "_" + i;
            return item(id, gapLine(it.q, pick(id, bx.box)), it.k + " · " + bx.box[it.k]);
          }));
      }));

    // Part 3 · Multiple choice
    var p3 = section(T("p3"), "Choose the best answer for each question.", anyReal(ex.mc),
      ex.mc.map(function (q, i) {
        var id = "c" + i, a = st.a[id];
        return item(id, h("div", null,
          h("p", { class: "xmc__q", text: q.q }),
          q.note ? h("p", { class: "xmc__note", text: q.note }) : null,
          h("div", { class: "xmc__o" }, q.o.map(function (o, oi) {
            var cls = "xopt" + (a === oi ? " is-sel" : "") + (graded && oi === q.k ? " is-key" : "");
            return h("button", { class: cls, type: "button", disabled: graded, onclick: function () { setA(id, a === oi ? undefined : oi); } },
              h("b", { text: "ABCD".charAt(oi) + ")" }), " " + o);
          }))), "ABCD".charAt(q.k) + ") " + q.o[q.k]);
      }));

    // Part 4 · Reading comprehension
    var R = ex.reading;
    var p4 = section(T("p4"), "Read the text, then answer the questions.", false, [
      h("article", { class: "xread" }, h("h3", { text: R.title }), R.text.map(function (t) { return h("p", { text: t }); })),
      h("h3", { class: "xsub", text: "Section 1: True or False" }),
      h("p", { class: "xsec__i", text: "Read the following statements and decide if they are True (T) or False (F) based on the text." }),
      R.tf.map(function (q, i) {
        var id = "t" + i, a = st.a[id];
        return item(id, h("div", { class: "xtf" },
          h("p", { class: "xtf__s", text: q.s }),
          h("div", { class: "xtf__b" }, [true, false].map(function (v) {
            return h("button", { class: "xopt xopt--tf" + (a === v ? " is-sel" : "") + (graded && v === q.k ? " is-key" : ""), type: "button", disabled: graded,
              onclick: function () { setA(id, a === v ? undefined : v); } }, v ? "T" : "F");
          }))), q.k ? "T (True)" : "F (False)");
      }),
      h("h3", { class: "xsub", text: "Section 2: Complete the sentences" }),
      h("p", { class: "xsec__i", text: "Choose the correct word from the box to complete each sentence." }),
      wordBox(R.words),
      R.gaps.map(function (q, i) {
        var id = "g" + i;
        return item(id, gapLine(q.q, pick(id, R.words)), q.k + " · " + R.words[q.k]);
      })]);

    var secNames = [T("p1"), T("p2"), T("p3"), T("p4")];
    var summary = h("section", { class: "card xsum" },
      graded
        ? h("div", null,
            h("div", { class: "muted", text: T("examScore") }),
            h("div", { class: "summary__big", text: s.c + " / " + s.total }),
            h("div", { class: "xsum__parts" }, secNames.map(function (nm, i) {
              return h("div", { class: "xsum__part" }, h("small", { text: nm }), h("strong", { text: s.by[i] + "/" + s.tot[i] }));
            })))
        : h("div", null,
            h("p", { style: "margin:0", text: T("examIntro") }),
            h("div", { class: "bar-row", style: "margin-top:10px" }, bar(s.answered / s.total, unit.color),
              h("span", { text: T("answeredOf")(s.answered, s.total) }))),
      nReal ? h("label", { class: "xfilter" },
        h("input", { type: "checkbox", checked: examOnlyReal ? "checked" : null, onchange: function (e) { examOnlyReal = e.target.checked; render(true); } }),
        " 📌 " + T("onlyReal")(nReal)) : null,
      h("p", { class: "xsum__legend", text: "📌 " + T("realLegend") }));

    var foot = graded
      ? h("button", { class: "btn btn--block", type: "button", onclick: function () {
          if (!confirm(T("confirmRetry"))) return;
          progress[u].exam = { a: {}, g: false }; save(); render();
        } }, T("retry"))
      : h("button", { class: "btn btn--primary btn--block", type: "button", onclick: function () {
          var left = s.total - s.answered;
          if (left && !confirm(T("gradeLeft")(left))) return;
          st.g = true; save(); render();
        } }, T("grade"));

    app.replaceChildren(
      topbar({ back: "#/" + u, kicker: T("unit") + " " + unit.number + " · " + uTitle(u), title: T("exam"), home: true,
        right: h("span", { class: "score-pill", text: graded ? "✓ " + s.c + "/" + s.total : s.answered + "/" + s.total }) }),
      h("main", { class: "wrap exam" + (examOnlyReal ? " only-real" : ""), style: "--c:" + unit.color },
        summary, p1, p2, p3, p4,
        h("div", { class: "xfoot" }, foot)));
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
    if (e.key === "Escape" && selCur) { hideSelBar(); return; }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    // never steal keys while typing in a note
    if (e.target && e.target.closest && e.target.closest("input, textarea, [contenteditable]")) return;
    if (e.key.toLowerCase() === "l" && sheet.hidden) { toggleLang(); return; }
    if (keyHandler) keyHandler(e);
  });

  function render(keepScroll) {
    keyHandler = null;
    flushEditors(); editorFlushes = [];
    hideSelBar();
    document.body.classList.remove("has-drawer");
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    var u = parts[0], key = parts[1], n = parts[2];
    var y = window.scrollY;

    if (!u || !DATA[u]) viewHome();
    else if (key === "doc" && DOCS[u]) viewDoc(u, n === "es" ? "es" : "en");
    else if (key === "read" && DOCS[u]) viewReader(u, parseInt(n, 10) || 1);
    else if (key === "notes") viewNotes(u, parseInt(n, 10) || 1);
    else if (key === "exam" && EXAMS[u]) viewExam(u);
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
