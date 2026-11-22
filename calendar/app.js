(() => {
  "use strict";

  const CATEGORIES = [
    { key: "all", label: "All" },
    { key: "lecture", label: "Lectures" },
    { key: "index", label: "Index NYC" },
    { key: "henry_st", label: "Henry St" },
    { key: "chelsea", label: "Chelsea" },
    { key: "design", label: "Furniture / Design" },
    { key: "jewelry", label: "Jewelry" },
  ];

  const CAT_SHORT = {
    lecture: "LECTURE",
    index: "INDEX",
    henry_st: "HENRY ST",
    chelsea: "CHELSEA",
    design: "DESIGN",
    jewelry: "JEWELRY",
  };

  const KIND_BADGE = {
    opening: "OPENING",
    closing: "CLOSING",
    pop_up: "POP-UP",
    trunk_show: "TRUNK SHOW",
  };

  const DOW_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const DOW_LETTER = ["M", "T", "W", "T", "F", "S", "S"];
  const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const state = {
    payload: null,
    events: [],
    weekMonday: null,
    category: "all",
    onViewOpen: true,
    activeEvent: null,
  };

  function nyTodayISO() {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date());
    const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
    return `${map.year}-${map.month}-${map.day}`;
  }

  function parseISODate(ymd) {
    const [y, m, d] = ymd.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  }

  function toISODate(dateObj) {
    const y = dateObj.getUTCFullYear();
    const m = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
    const d = String(dateObj.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function addDays(ymd, delta) {
    const dt = parseISODate(ymd);
    dt.setUTCDate(dt.getUTCDate() + delta);
    return toISODate(dt);
  }

  function mondayOf(ymd) {
    const dt = parseISODate(ymd);
    const day = dt.getUTCDay(); // 0=Sun..6=Sat
    const diff = day === 0 ? -6 : 1 - day;
    dt.setUTCDate(dt.getUTCDate() + diff);
    return toISODate(dt);
  }

  function formatRangeLabel(monISO) {
    const sunISO = addDays(monISO, 6);
    const mDt = parseISODate(monISO);
    const sDt = parseISODate(sunISO);
    const mMon = MONTHS_SHORT[mDt.getUTCMonth()];
    const sMon = MONTHS_SHORT[sDt.getUTCMonth()];
    const mDay = mDt.getUTCDate();
    const sDay = sDt.getUTCDate();
    const yr = sDt.getUTCFullYear();
    if (mMon === sMon) {
      return `${mMon} ${mDay} – ${sDay}, ${yr}`;
    }
    return `${mMon} ${mDay} – ${sMon} ${sDay}, ${yr}`;
  }

  function formatShortDate(ymd) {
    const dt = parseISODate(ymd);
    return `${MONTHS_SHORT[dt.getUTCMonth()]} ${dt.getUTCDate()}`;
  }

  function readHashState() {
    const raw = window.location.hash.replace(/^#/, "");
    if (!raw) return;
    const params = new URLSearchParams(raw);
    const cat = params.get("cat");
    if (cat && CATEGORIES.some((c) => c.key === cat)) {
      state.category = cat;
    }
    const wk = params.get("week");
    if (wk && /^\d{4}-\d{2}-\d{2}$/.test(wk)) {
      state.weekMonday = mondayOf(wk);
    }
  }

  function writeHashState() {
    const params = new URLSearchParams();
    if (state.category !== "all") params.set("cat", state.category);
    const currentMon = mondayOf(nyTodayISO());
    if (state.weekMonday && state.weekMonday !== currentMon) {
      params.set("week", state.weekMonday);
    }
    const str = params.toString();
    const nextUrl = str ? `#${str}` : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", nextUrl);
  }

  function isTimedEvent(ev) {
    return ev.kind !== "on_view";
  }

  function eventInWeekTimed(ev, monISO, sunISO) {
    if (!isTimedEvent(ev)) return false;
    const d = ev.date || (ev.start_date || "");
    return d >= monISO && d <= sunISO;
  }

  function eventInWeekOnView(ev, monISO, sunISO) {
    if (ev.kind !== "on_view") return false;
    const start = ev.start_date || ev.date || "0000-01-01";
    const end = ev.end_date || ev.date || "9999-12-31";
    return start <= sunISO && end >= monISO;
  }

  function filterByCategory(list, cat) {
    if (cat === "all") return list;
    return list.filter((ev) => ev.category === cat);
  }

  function escapeHTML(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function buildGCalLink(ev) {
    const title = encodeURIComponent(`${ev.title} — ${ev.venue}`);
    const details = encodeURIComponent(`${ev.blurb || ""}\n\nSource: ${ev.url || ""}`.trim());
    const location = encodeURIComponent(ev.address ? `${ev.venue}, ${ev.address}` : ev.venue || "New York, NY");
    const dayStr = (ev.date || ev.start_date || nyTodayISO()).replace(/-/g, "");
    let dates = `${dayStr}/${dayStr}`;
    if (ev.start_time && /^\d{2}:\d{2}$/.test(ev.start_time)) {
      const st = ev.start_time.replace(":", "") + "00";
      const etRaw = ev.end_time && /^\d{2}:\d{2}$/.test(ev.end_time) ? ev.end_time : ev.start_time;
      let et = etRaw.replace(":", "") + "00";
      if (et === st) {
        const h = String(Math.min(23, Number(ev.start_time.slice(0, 2)) + 2)).padStart(2, "0");
        et = `${h}${ev.start_time.slice(3, 5)}00`;
      }
      dates = `${dayStr}T${st}/${dayStr}T${et}`;
    }
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&ctz=America/New_York&details=${details}&location=${location}`;
  }

  function downloadSingleICS(ev) {
    const uid = `${ev.id || "event"}@mitchellcraft.net`;
    const dayStr = (ev.date || ev.start_date || nyTodayISO()).replace(/-/g, "");
    let dtStartLine = `DTSTART;VALUE=DATE:${dayStr}`;
    let dtEndLine = `DTEND;VALUE=DATE:${dayStr}`;
    if (ev.start_time && /^\d{2}:\d{2}$/.test(ev.start_time)) {
      const st = ev.start_time.replace(":", "") + "00";
      let et = st;
      if (ev.end_time && /^\d{2}:\d{2}$/.test(ev.end_time)) {
        et = ev.end_time.replace(":", "") + "00";
      } else {
        const h = String(Math.min(23, Number(ev.start_time.slice(0, 2)) + 2)).padStart(2, "0");
        et = `${h}${ev.start_time.slice(3, 5)}00`;
      }
      dtStartLine = `DTSTART;TZID=America/New_York:${dayStr}T${st}`;
      dtEndLine = `DTEND;TZID=America/New_York:${dayStr}T${et}`;
    }
    const clean = (s) => String(s || "").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mitchell Craft//NYC Curated Calendar//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z")}`,
      dtStartLine,
      dtEndLine,
      `SUMMARY:${clean(`${ev.title} (${ev.venue})`)}`,
      `LOCATION:${clean(ev.address ? `${ev.venue}, ${ev.address}` : ev.venue)}`,
      `DESCRIPTION:${clean(`${ev.blurb || ""}\n${ev.url || ""}`)}`,
      ev.url ? `URL:${ev.url}` : "",
      "END:VEVENT",
      "END:VCALENDAR",
    ]
      .filter(Boolean)
      .join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(ev.id || "nyc-event").slice(0, 48)}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function openModal(ev) {
    state.activeEvent = ev;
    const backdrop = document.getElementById("detail-backdrop");
    const kicker = document.getElementById("modal-kicker");
    const title = document.getElementById("modal-title");
    const venue = document.getElementById("modal-venue");
    const dtBox = document.getElementById("modal-datetime");
    const blurb = document.getElementById("modal-blurb");
    const addrRow = document.getElementById("modal-address-row");
    const actions = document.getElementById("modal-actions");

    const catTag = CAT_SHORT[ev.category] || ev.category;
    const kindLabel = KIND_BADGE[ev.kind] || (ev.kind === "on_view" ? "ON VIEW" : "EVENT");
    kicker.innerHTML = `${ KIND_BADGE[ev.kind] ? `<span class="badge-kind">${escapeHTML(kindLabel)}</span>` : `<span>${escapeHTML(kindLabel)}</span>` }<span>·</span><span>${escapeHTML(catTag)}</span>`;

    title.textContent = ev.title;
    venue.textContent = ev.neighborhood ? `${ev.venue} — ${ev.neighborhood}` : ev.venue;

    if (ev.kind === "on_view") {
      const range = ev.start_date && ev.end_date
        ? `${formatShortDate(ev.start_date)} – ${formatShortDate(ev.end_date)}`
        : ev.end_date
          ? `Through ${formatShortDate(ev.end_date)}`
          : "Current Exhibition";
      dtBox.textContent = ev.hours ? `${range}  ·  ${ev.hours}` : range;
    } else {
      const dtLabel = ev.date ? formatShortDate(ev.date) : "";
      const timeLabel = ev.time_label || ev.start_time || "See source for hours";
      const priceLabel = ev.admission ? `  ·  ${ev.admission}` : "";
      dtBox.textContent = `${dtLabel}  ·  ${timeLabel}${priceLabel}`;
    }

    blurb.textContent = ev.blurb || "";

    if (ev.address) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ev.venue}, ${ev.address}`)}`;
      addrRow.innerHTML = `<a href="${escapeHTML(mapsUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(ev.address)} ↗</a>`;
    } else {
      addrRow.textContent = "";
    }

    actions.innerHTML = "";
    if (ev.url) {
      const srcLink = document.createElement("a");
      srcLink.href = ev.url;
      srcLink.target = "_blank";
      srcLink.rel = "noopener noreferrer";
      srcLink.className = "action-btn action-btn-primary";
      srcLink.textContent = "Source / Details ↗";
      actions.appendChild(srcLink);
    }

    const gcal = document.createElement("a");
    gcal.href = buildGCalLink(ev);
    gcal.target = "_blank";
    gcal.rel = "noopener noreferrer";
    gcal.className = "action-btn";
    gcal.textContent = "+ Google Cal";
    actions.appendChild(gcal);

    const icsBtn = document.createElement("button");
    icsBtn.type = "button";
    icsBtn.className = "action-btn";
    icsBtn.textContent = "+ .ics";
    icsBtn.addEventListener("click", () => downloadSingleICS(ev));
    actions.appendChild(icsBtn);

    backdrop.hidden = false;
    document.getElementById("modal-close").focus();
  }

  function closeModal() {
    state.activeEvent = null;
    document.getElementById("detail-backdrop").hidden = true;
  }

  function render() {
    const todayISO = nyTodayISO();
    const monISO = state.weekMonday;
    const sunISO = addDays(monISO, 6);

    document.getElementById("week-range-label").textContent = formatRangeLabel(monISO);

    const allWeekTimed = state.events.filter((ev) => eventInWeekTimed(ev, monISO, sunISO));
    const allWeekOnView = state.events.filter((ev) => eventInWeekOnView(ev, monISO, sunISO));
    const allWeekCombined = [...allWeekTimed, ...allWeekOnView];

    // Render category chips with counts in active week
    const filterEl = document.getElementById("category-filters");
    filterEl.innerHTML = "";
    for (const cat of CATEGORIES) {
      const count = cat.key === "all"
        ? allWeekCombined.length
        : allWeekCombined.filter((e) => e.category === cat.key).length;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `filter-chip${state.category === cat.key ? " is-active" : ""}`;
      btn.innerHTML = `<span>${escapeHTML(cat.label)}</span><span class="filter-chip-count">${count}</span>`;
      btn.addEventListener("click", () => {
        state.category = cat.key;
        writeHashState();
        render();
      });
      filterEl.appendChild(btn);
    }

    const timedFiltered = filterByCategory(allWeekTimed, state.category).sort((a, b) => {
      const ta = a.start_time || "99:99";
      const tb = b.start_time || "99:99";
      return ta.localeCompare(tb) || a.title.localeCompare(b.title);
    });
    const onViewFiltered = filterByCategory(allWeekOnView, state.category).sort((a, b) => {
      const ea = a.end_date || "9999-12-31";
      const eb = b.end_date || "9999-12-31";
      return ea.localeCompare(eb) || a.venue.localeCompare(b.venue);
    });

    document.getElementById("timed-count").textContent = `${timedFiltered.length} ${timedFiltered.length === 1 ? "block" : "blocks"}`;
    document.getElementById("onview-count").textContent = `${onViewFiltered.length} ${onViewFiltered.length === 1 ? "block" : "blocks"}`;

    // Render 7-day grid + mobile strip
    const gridEl = document.getElementById("week-grid");
    const stripEl = document.getElementById("mobile-day-strip");
    gridEl.innerHTML = "";
    stripEl.innerHTML = "";

    for (let i = 0; i < 7; i++) {
      const dayISO = addDays(monISO, i);
      const dt = parseISODate(dayISO);
      const dayNum = dt.getUTCDate();
      const monShort = MONTHS_SHORT[dt.getUTCMonth()];
      const isToday = dayISO === todayISO;
      const dayEvents = timedFiltered.filter((ev) => (ev.date || ev.start_date) === dayISO);

      // Mobile day quick-jump pill
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = `day-pill${isToday ? " is-today" : ""}${dayEvents.length > 0 ? " has-events" : ""}`;
      pill.innerHTML = `<span>${DOW_LETTER[i]}</span><span>${dayNum}</span>`;
      pill.addEventListener("click", () => {
        const target = document.getElementById(`day-${dayISO}`);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      stripEl.appendChild(pill);

      // Day column
      const col = document.createElement("div");
      col.className = `day-col${isToday ? " is-today" : ""}`;
      col.id = `day-${dayISO}`;

      const hdr = document.createElement("div");
      hdr.className = "day-header";
      hdr.innerHTML = `<span class="day-dow">${DOW_SHORT[i]}${isToday ? " · Today" : ""}</span><span class="day-num">${monShort} ${dayNum}</span>`;
      col.appendChild(hdr);

      const list = document.createElement("div");
      list.className = "day-events";

      if (dayEvents.length === 0) {
        const empty = document.createElement("div");
        empty.className = "day-empty";
        empty.textContent = "—";
        list.appendChild(empty);
      } else {
        for (const ev of dayEvents) {
          const card = document.createElement("button");
          card.type = "button";
          card.className = "event-block";
          const badge = KIND_BADGE[ev.kind]
            ? `<span class="badge-kind">${escapeHTML(KIND_BADGE[ev.kind])}</span>`
            : "";
          const catShort = CAT_SHORT[ev.category] || ev.category;
          const timeText = ev.time_label || ev.start_time || "All day";
          card.innerHTML = `
            <div class="block-meta">
              <span class="block-time">${escapeHTML(timeText)}</span>
              <span class="block-badges">${badge}<span class="badge-cat">${escapeHTML(catShort)}</span></span>
            </div>
            <div class="block-title">${escapeHTML(ev.title)}</div>
            <div class="block-venue">${escapeHTML(ev.venue)}${ev.neighborhood ? ` · ${escapeHTML(ev.neighborhood)}` : ""}</div>
          `;
          card.addEventListener("click", () => openModal(ev));
          list.appendChild(card);
        }
      }

      col.appendChild(list);
      gridEl.appendChild(col);
    }

    // Render On-View Exhibitions block grid
    const onViewGrid = document.getElementById("onview-grid");
    onViewGrid.hidden = !state.onViewOpen;
    document.getElementById("onview-chevron").textContent = state.onViewOpen ? "−" : "+";
    document.getElementById("toggle-onview").setAttribute("aria-expanded", String(state.onViewOpen));
    onViewGrid.innerHTML = "";

    if (onViewFiltered.length === 0) {
      const emptyBox = document.createElement("div");
      emptyBox.className = "day-empty";
      emptyBox.textContent = "No exhibitions matching this filter for the selected week.";
      onViewGrid.appendChild(emptyBox);
    } else {
      for (const ev of onViewFiltered) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "onview-card";
        const catShort = CAT_SHORT[ev.category] || ev.category;
        const thruText = ev.end_date ? `Thru ${formatShortDate(ev.end_date)}` : "Ongoing";
        card.innerHTML = `
          <div class="onview-top">
            <div class="block-meta">
              <span class="block-time">${escapeHTML(ev.venue)}</span>
              <span class="badge-cat">${escapeHTML(catShort)}</span>
            </div>
            <div class="block-title">${escapeHTML(ev.title)}</div>
            <p class="onview-blurb">${escapeHTML(ev.blurb || "")}</p>
          </div>
          <div class="onview-bottom">
            <span>${escapeHTML(ev.neighborhood || "NYC")}</span>
            <span>${escapeHTML(thruText)}</span>
          </div>
        `;
        card.addEventListener("click", () => openModal(ev));
        onViewGrid.appendChild(card);
      }
    }
  }

  async function init() {
    state.weekMonday = mondayOf(nyTodayISO());
    readHashState();

    document.getElementById("prev-week").addEventListener("click", () => {
      state.weekMonday = addDays(state.weekMonday, -7);
      writeHashState();
      render();
    });

    document.getElementById("next-week").addEventListener("click", () => {
      state.weekMonday = addDays(state.weekMonday, 7);
      writeHashState();
      render();
    });

    document.getElementById("today-btn").addEventListener("click", () => {
      state.weekMonday = mondayOf(nyTodayISO());
      writeHashState();
      render();
    });

    document.getElementById("toggle-onview").addEventListener("click", () => {
      state.onViewOpen = !state.onViewOpen;
      render();
    });

    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("detail-backdrop").addEventListener("click", (e) => {
      if (e.target.id === "detail-backdrop") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && state.activeEvent) closeModal();
    });

    try {
      const res = await fetch(`./data/events.json?t=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const payload = await res.json();
      state.payload = payload;
      state.events = Array.isArray(payload.events) ? payload.events : [];
      const updated = payload.updated_at_ny || payload.generated_at || "";
      document.getElementById("updated-stamp").textContent = updated
        ? `Updated ${updated}`
        : `${state.events.length} curated blocks`;
      if (payload.window_label) {
        document.getElementById("window-note").textContent = `${payload.window_label} · ET`;
      }
      render();
    } catch (err) {
      document.getElementById("updated-stamp").textContent = "Unable to load events feed";
      console.error("Calendar load error:", err);
    }
  }

  init();
})();
