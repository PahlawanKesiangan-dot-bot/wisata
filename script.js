/* ==========================================================================
   JELAJAH DELTA — VANILLA JS MODULAR ENGINE (60 FPS)
   Smart Hide-on-Scroll Navbar | Real Internet Satellite & Road Map | PNG Pass
   ========================================================================== */

(() => {
  'use strict';

  // --- 1. BASIS DATA 6 DESTINASI SIDOARJO DENGAN KOORDINAT GPS ASLI ---
  const DESTINATIONS = [
    {
      id: 'sarinah',
      code: 'SDA-01',
      name: 'Pulau Sarinah & Dermaga Tlocor',
      district: 'Kec. Jabon • Muara Kali Porong',
      category: 'Bahari',
      planGroup: 'bahari',
      lat: -7.5755,
      lon: 112.8555,
      coords: '7°34\'32" LS, 112°51\'20" BT',
      ticketRp: 10000,
      hours: '06.00 – 16.30 WIB (Saat Pasang Pagi)',
      route: '25 menit perahu motor nelayan menyusuri hilir Kali Porong dari Dermaga Tlocor.',
      wikiQuery: 'Mangrove forest river East Java',
      fallbackPalette: ['#064E3B', '#10B981', 'Ekowisata Mangrove Pulau Sarinah'],
      desc: 'Daratan aluvial seluas ~80 hektare yang terbentuk dari endapan lumpur di muara Kali Porong, kini rimbun oleh vegetasi bakau Avicennia dan menjadi habitat burung kuntul serta kepiting bakau.'
    },
    {
      id: 'candipari',
      code: 'SDA-02',
      name: 'Candi Pari',
      district: 'Kec. Porong • Desa Candipari',
      category: 'Sejarah',
      planGroup: 'candi',
      lat: -7.5239,
      lon: 112.6800,
      coords: '7°31\'26" LS, 112°40\'48" BT',
      ticketRp: 5000,
      hours: '07.30 – 16.00 WIB (Cahaya Sore Terbaik)',
      route: '3 km sebelah barat jalan arteri Porong; mudah diakses motor maupun mobil.',
      wikiQuery: 'Candi Pari Sidoarjo',
      fallbackPalette: ['#7C2D12', '#EA580C', 'Monumen Bata Merah Candi Pari 1371 M'],
      desc: 'Candi bata merah masif bertarikh 1293 Saka (1371 M) masa Prabu Hayam Wuruk. Menampilkan perpaduan arsitektur Jawa Timuran dengan struktur atap dan pintu lengkung khas Campa.'
    },
    {
      id: 'candidermo',
      code: 'SDA-03',
      name: 'Candi Dermo',
      district: 'Kec. Wonoayu • Desa Candinegoro',
      category: 'Sejarah',
      planGroup: 'candi',
      lat: -7.4386,
      lon: 112.6289,
      coords: '7°26\'19" LS, 112°37\'44" BT',
      ticketRp: 5000,
      hours: '07.30 – 16.00 WIB',
      route: 'Jalur darat barat Sidoarjo arah Krian–Wonoayu melalui jalan desa beraspal mulus.',
      wikiQuery: 'Candi Dermo Sidoarjo',
      fallbackPalette: ['#9A3412', '#F97316', 'Gapura Paduraksa Candi Dermo Abad ke-14'],
      desc: 'Gapura paduraksa bata merah setinggi 13,5 meter peninggalan abad ke-14 yang telah rampung dipugar, menyimpan pahatan relief manusia bersayap dan ornamen kepala kala.'
    },
    {
      id: 'kupang',
      code: 'SDA-04',
      name: 'Sentra Kupang Lontong',
      district: 'Gedangan & Taman Pinang • Koridor Kota',
      category: 'Kuliner',
      planGroup: 'kuliner',
      lat: -7.3920,
      lon: 112.7280,
      coords: '7°23\'31" LS, 112°43\'41" BT',
      ticketRp: 0,
      hours: '10.00 – 20.00 WIB',
      route: 'Terletak di jalur utama Surabaya–Sidoarjo (Gedangan) dan kawasan Taman Pinang Indah.',
      wikiQuery: 'Lontong kupang Sidoarjo',
      fallbackPalette: ['#78350F', '#F59E0B', 'Gastronomi Lontong Kupang & Sate Kerang'],
      desc: 'Hidangan ikonik kerang laut mikro (kupang beras) tangkapan nelayan Selat Madura yang disiram kuah bawang putih, jeruk nipis, dan petis udang Sidoarjo, disajikan bersama lento singkong.'
    },
    {
      id: 'kalanganyar',
      code: 'SDA-05',
      name: 'Kampung Bandeng Asap Kalanganyar',
      district: 'Kec. Sedati • Pesisir Utara Delta',
      category: 'Kuliner',
      planGroup: 'bahari',
      lat: -7.3685,
      lon: 112.8150,
      coords: '7°22\'07" LS, 112°48\'54" BT',
      ticketRp: 10000,
      hours: '07.00 – 17.00 WIB',
      route: '15 menit ke arah timur dari Bandara Internasional Juanda melintasi hamparan tambak.',
      wikiQuery: 'Milkfish smoked Indonesia bandeng',
      fallbackPalette: ['#1E3A8A', '#38BDF8', 'Tambak & Pengasapan Bandeng Kalanganyar'],
      desc: 'Sentra tambak air payau penghasil bandeng cabut duri segar tanpa bau tanah yang diasap secara tradisional menggunakan sabut kelapa hingga kulitnya kuning keemasan.'
    },
    {
      id: 'jetis',
      code: 'SDA-06',
      name: 'Kampoeng Batik Tulis Jetis',
      district: 'Kec. Sidoarjo Kota • Jl. Diponegoro',
      category: 'Kriya',
      planGroup: 'kuliner',
      lat: -7.4522,
      lon: 112.7153,
      coords: '7°27\'08" LS, 112°42\'55" BT',
      ticketRp: 0,
      hours: '08.00 – 17.00 WIB (Bisa Praktik Mencanting)',
      route: '5 menit jalan kaki dari Stasiun Sidoarjo atau kawasan Alun-Alun Kota.',
      wikiQuery: 'Batik Sidoarjo',
      fallbackPalette: ['#881337', '#F43F5E', 'Kampoeng Batik Tulis Jetis Sejak 1675'],
      desc: 'Kampung perajin batik tulis tertua di delta Brantas sejak 1675 dengan ciri khas warna pesisir berani serta motif klasik Merak Beras Utah, Kebon Tebu, dan Kembang Bayem.'
    }
  ];

  // --- 2. SMART HIDE-ON-SCROLL-DOWN & SHOW-ON-SCROLL-UP NAVBAR ---
  const smartHeader = document.getElementById('smart-header');
  let lastScrollY = window.scrollY;
  let scrollTicking = false;

  function updateHeaderVisibility() {
    const currentY = window.scrollY;
    const diff = currentY - lastScrollY;

    if (currentY <= 48) {
      smartHeader.classList.remove('header-hidden');
    } else if (diff > 7 && currentY > 88) {
      // Digulir ke bawah -> sembunyikan navbar kapsul
      smartHeader.classList.add('header-hidden');
    } else if (diff < -6) {
      // Digulir ke atas -> munculkan kembali navbar kapsul
      smartHeader.classList.remove('header-hidden');
    }

    lastScrollY = Math.max(0, currentY);
    scrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateHeaderVisibility);
      scrollTicking = true;
    }
  }, { passive: true });

  // --- 3. THEME TOGGLE (DARK / LIGHT) DENGAN IKON SVG TAJAM ---
  const THEME_KEY = 'jelajah_delta_theme_v2';
  const htmlRoot = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  let activeTheme = localStorage.getItem(THEME_KEY) || 'dark';

  function setTheme(mode, redraw = false) {
    activeTheme = mode;
    htmlRoot.setAttribute('data-theme', mode);
    iconSun.classList.toggle('hidden', mode !== 'dark');
    iconMoon.classList.toggle('hidden', mode === 'dark');
    try { localStorage.setItem(THEME_KEY, mode); } catch (_) {}
    if (redraw) {
      renderMapPins();
      drawBoardingPass();
    }
  }

  themeBtn.addEventListener('click', () => {
    setTheme(activeTheme === 'dark' ? 'light' : 'dark', true);
  });

  // Scroll Spy untuk Navigasi Aktif
  const sections = document.querySelectorAll('section[id], main[id]');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('[data-spy]').forEach((link) => {
          link.classList.toggle('active', link.dataset.spy === id);
        });
      }
    });
  }, { rootMargin: '-28% 0px -55% 0px' });

  sections.forEach((sec) => spyObserver.observe(sec));

  // --- 4. PROYEKSI WEB MERCATOR & PEMUAT FOTO PETA DARI INTERNET ---
  // Zoom 11 Tiles (x: 1664..1666, y: 1065..1067) mencakup seluruh Kab. Sidoarjo & Selat Madura
  const MAP_ZOOM = 11;
  const START_TILE_X = 1664;
  const START_TILE_Y = 1065;
  const CROP_OFFSET_Y = 135;

  function gpsToSvgXY(lat, lon) {
    const n = Math.pow(2, MAP_ZOOM);
    const latRad = (lat * Math.PI) / 180;
    const tileX = ((lon + 180) / 360) * n;
    const tileY = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;

    return {
      x: Math.round((tileX - START_TILE_X) * 256),
      y: Math.round((tileY - START_TILE_Y) * 256 - CROP_OFFSET_Y)
    };
  }

  // Hitung posisi piksel akurat dari koordinat GPS masing-masing destinasi
  DESTINATIONS.forEach((d) => {
    const pt = gpsToSvgXY(d.lat, d.lon);
    d.mapX = pt.x;
    d.mapY = pt.y;
  });

  const internetTilesGroup = document.getElementById('internet-map-tiles');
  const mapSourceStatus = document.getElementById('map-source-status');
  let activeMapLayer = 'satelit'; // 'satelit' atau 'jalan'

  function renderInternetMapTiles(layerType) {
    activeMapLayer = layerType;
    internetTilesGroup.innerHTML = '';
    internetTilesGroup.classList.toggle('road-mode', layerType === 'jalan');

    mapSourceStatus.textContent = layerType === 'satelit'
      ? 'Sumber Peta: Citra Satelit Esri World Imagery'
      : 'Sumber Peta: Peta Kartografi OpenStreetMap';

    for (let tx = 0; tx < 3; tx++) {
      for (let ty = 0; ty < 3; ty++) {
        const tileX = START_TILE_X + tx;
        const tileY = START_TILE_Y + ty;

        const tileUrl = layerType === 'satelit'
          ? `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${MAP_ZOOM}/${tileY}/${tileX}`
          : `https://tile.openstreetmap.org/${MAP_ZOOM}/${tileX}/${tileY}.png`;

        const svgImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        svgImg.setAttribute('href', tileUrl);
        svgImg.setAttribute('x', String(tx * 256));
        svgImg.setAttribute('y', String(ty * 256 - CROP_OFFSET_Y));
        svgImg.setAttribute('width', '256.5');
        svgImg.setAttribute('height', '256.5');
        svgImg.setAttribute('preserveAspectRatio', 'none');

        // Jika offline / gagal dimuat, sembunyikan tile sehingga peta vektor cadangan di bawahnya tampil bersih
        svgImg.addEventListener('error', () => {
          svgImg.remove();
          mapSourceStatus.textContent = 'Mode Offline: Peta Vektor Lokal Aktif';
        });

        internetTilesGroup.appendChild(svgImg);
      }
    }
  }

  document.querySelectorAll('.layer-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.layer-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderInternetMapTiles(btn.dataset.layer);
      renderMapPins();
    });
  });

  // --- 5. WIKIMEDIA COMMONS ASYNC FETCH + CACHE + FALLBACK VEKTOR ---
  const CACHE_KEY = 'jelajah_delta_wiki_cache_v2';
  let wikiCache = {};
  try { wikiCache = JSON.parse(sessionStorage.getItem(CACHE_KEY) || '{}'); } catch (_) {}

  function buildFallbackSvg([c1, c2, caption]) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#g)"/>
      <path d="M0 300 Q160 250 320 295 T640 280 L640 400 L0 400 Z" fill="rgba(2,6,23,0.42)"/>
      <polygon points="320,95 405,275 235,275" fill="rgba(255,255,255,0.18)"/>
      <text x="320" y="352" text-anchor="middle" fill="#F8FAFC" font-family="sans-serif" font-size="19" font-weight="bold">${caption}</text>
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  async function fetchWikiImage(cacheId, query, indexPick = 0) {
    if (wikiCache[cacheId]) return wikiCache[cacheId];
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query + ' filetype:bitmap')}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json&origin=*`;
    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (!data.query || !data.query.pages) return null;

      const pages = Object.values(data.query.pages)
        .filter((p) => p.imageinfo && p.imageinfo[0] && p.imageinfo[0].thumburl)
        .filter((p) => !/\.(svg|gif|pdf|tif|djvu)$/i.test(p.title));

      if (!pages.length) return null;
      const chosen = pages[indexPick % pages.length];
      const item = {
        url: chosen.imageinfo[0].thumburl,
        page: chosen.imageinfo[0].descriptionurl || 'https://commons.wikimedia.org',
        title: chosen.title.replace(/^File:/i, '').replace(/\.[^.]+$/, '').replace(/_/g, ' ')
      };
      wikiCache[cacheId] = item;
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(wikiCache)); } catch (_) {}
      return item;
    } catch (_) {
      return null;
    }
  }

  // --- 6. PIN PETA INTERAKTIF & SMOOTH PAN-TO-FOCUS ---
  const mapCamera = document.getElementById('map-camera');
  const mapPinsGroup = document.getElementById('map-pins');
  const mapFilterPills = document.getElementById('map-filter-pills');

  let selectedSpot = DESTINATIONS[0];
  let detailImgToken = 0;

  function renderMapPins() {
    mapPinsGroup.innerHTML = '';
    mapFilterPills.innerHTML = '';

    DESTINATIONS.forEach((spot) => {
      const isSelected = spot.id === selectedSpot.id;
      const pinColor = spot.category === 'Sejarah' ? '#F97316' : '#14B8A6';

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'map-pin');
      g.setAttribute('transform', `translate(${spot.mapX}, ${spot.mapY})`);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', `Pilih lokasi ${spot.name}`);

      const shortLabel = spot.name.split('&')[0].trim();
      g.innerHTML = `
        <circle class="pin-pulse" cx="0" cy="0" r="13" style="stroke:${pinColor}"></circle>
        <circle cx="0" cy="0" r="${isSelected ? 9 : 7}" fill="${isSelected ? '#EA580C' : pinColor}" stroke="#FFFFFF" stroke-width="2.4"></circle>
        <rect x="-58" y="12" width="116" height="19" rx="6" fill="rgba(15, 23, 42, 0.88)" stroke="${isSelected ? '#FFFFFF' : pinColor}" stroke-width="1"></rect>
        <text x="0" y="25" text-anchor="middle" fill="#F8FAFC" font-size="9.5" font-weight="700">${shortLabel}</text>
      `;

      g.addEventListener('click', () => focusDestination(spot.id, true));
      g.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          focusDestination(spot.id, true);
        }
      });
      mapPinsGroup.appendChild(g);

      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `spot-pill ${isSelected ? 'active' : ''}`;
      pill.textContent = `${spot.code} • ${shortLabel}`;
      pill.addEventListener('click', () => focusDestination(spot.id, true));
      mapFilterPills.appendChild(pill);
    });
  }

  async function focusDestination(spotId, panCamera = false) {
    const found = DESTINATIONS.find((d) => d.id === spotId);
    if (!found) return;
    selectedSpot = found;
    const token = ++detailImgToken;

    document.getElementById('hud-coords').textContent = `GPS: ${found.coords}`;
    const detBadge = document.getElementById('det-badge');
    detBadge.textContent = found.category;
    detBadge.className = `pill-badge ${found.category === 'Sejarah' ? 'badge-terracotta' : 'badge-teal'}`;

    document.getElementById('det-code').textContent = found.code;
    document.getElementById('det-title').textContent = found.name;
    document.getElementById('det-sub').textContent = found.district;
    document.getElementById('det-desc').textContent = found.desc;
    document.getElementById('det-route').textContent = found.route;
    document.getElementById('det-hours').textContent = found.hours;
    document.getElementById('det-price').textContent =
      found.ticketRp === 0 ? 'Gratis (Beli sesuai kuliner/kriya)' : `Rp ${found.ticketRp.toLocaleString('id-ID')} / orang`;

    renderMapPins();

    if (panCamera) {
      const scale = 1.32;
      const tx = Math.max(-245, Math.min(0, 384 - found.mapX * scale));
      const ty = Math.max(-150, Math.min(0, 240 - found.mapY * scale));
      mapCamera.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    }

    const imgEl = document.getElementById('det-img');
    const skelEl = document.getElementById('det-skel');
    const creditEl = document.getElementById('det-credit');
    const fallbackUri = buildFallbackSvg(found.fallbackPalette);

    skelEl.classList.remove('done');
    const wiki = await fetchWikiImage('spot_' + found.id, found.wikiQuery, 0);
    if (token !== detailImgToken) return;

    if (wiki && wiki.url) {
      imgEl.onload = () => { if (token === detailImgToken) skelEl.classList.add('done'); };
      imgEl.onerror = () => { imgEl.src = fallbackUri; skelEl.classList.add('done'); };
      imgEl.src = wiki.url;
      creditEl.href = wiki.page;
      creditEl.textContent = `📷 ${wiki.title.slice(0, 24)}`;
    } else {
      imgEl.src = fallbackUri;
      skelEl.classList.add('done');
    }
  }

  document.getElementById('btn-reset-map').addEventListener('click', () => {
    mapCamera.style.transform = 'translate(0px, 0px) scale(1)';
  });

  document.getElementById('btn-to-calc').addEventListener('click', () => {
    selectPlannerTheme(selectedSpot.planGroup, selectedSpot.name);
    if (selectedSpot.id === 'sarinah') {
      const boatRadio = document.querySelector('input[name="transport"][value="perahu"]');
      if (boatRadio) boatRadio.checked = true;
    }
    recalculateBudget();
    document.getElementById('kalkulator').scrollIntoView({ behavior: 'smooth' });
  });

  // --- 7. SPLIT SLIDER DULU VS SEKARANG CANDI PARI ---
  const splitRange = document.getElementById('split-range');
  const splitBeforeWrap = document.getElementById('split-before-wrap');
  const splitDivider = document.getElementById('split-divider');

  function updateSplitPosition(pct) {
    const val = Math.max(4, Math.min(96, Number(pct)));
    splitBeforeWrap.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
    splitDivider.style.left = `${val}%`;
  }

  splitRange.addEventListener('input', (e) => updateSplitPosition(e.target.value));

  async function initCandiPariSplitPhotos() {
    const beforeImg = document.getElementById('split-img-before');
    const afterImg = document.getElementById('split-img-after');

    const fallbackOld = buildFallbackSvg(['#334155', '#1E293B', 'Arsip Pendataan Kolonial Candi Pari']);
    const fallbackNew = buildFallbackSvg(['#9A3412', '#EA580C', 'Kemegahan Bata Terakota Candi Pari Masa Kini']);

    beforeImg.src = fallbackOld;
    afterImg.src = fallbackNew;

    const [oldPhoto, modernPhoto] = await Promise.all([
      fetchWikiImage('candipari_old', 'Tjandi Pari KITLV', 0),
      fetchWikiImage('candipari_modern', 'Candi Pari Sidoarjo', 0)
    ]);

    if (oldPhoto && oldPhoto.url) {
      beforeImg.onerror = () => { beforeImg.src = fallbackOld; };
      beforeImg.src = oldPhoto.url;
    }
    if (modernPhoto && modernPhoto.url) {
      afterImg.onerror = () => { afterImg.src = fallbackNew; };
      afterImg.src = modernPhoto.url;
    }
  }

  // --- 8. KALKULATOR ANGGARAN 1 HARI & BOARDING PASS (.PNG) ---
  const PLAN_PACKAGES = {
    bahari: {
      label: 'Ekowisata Pesisir Bahari',
      routeCode: 'TLOCOR -> P. SARINAH -> KALANGANYAR',
      ticketPerPax: 15000,
      culinaryPerPax: 32000
    },
    candi: {
      label: 'Jejak Candi Majapahit',
      routeCode: 'CANDI PARI -> CANDI DERMO -> PORONG',
      ticketPerPax: 10000,
      culinaryPerPax: 26000
    },
    kuliner: {
      label: 'Wisata Belanja & Kuliner',
      routeCode: 'BATIK JETIS -> KUPANG GEDANGAN -> SEDATI',
      ticketPerPax: 5000,
      culinaryPerPax: 42000
    }
  };

  let activePlanKey = 'bahari';
  const groupSlider = document.getElementById('group-slider');
  const passNameInput = document.getElementById('pass-name');
  const passCanvas = document.getElementById('pass-canvas');
  const pCtx = passCanvas.getContext('2d');

  function formatIDR(n) {
    return 'Rp ' + Math.round(n).toLocaleString('id-ID');
  }

  function selectPlannerTheme(planKey, customSpotTitle) {
    if (!PLAN_PACKAGES[planKey]) return;
    activePlanKey = planKey;
    document.querySelectorAll('.trip-theme-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.plan === planKey);
    });
    document.getElementById('calc-linked-spot').textContent =
      customSpotTitle || PLAN_PACKAGES[planKey].label;
  }

  function getTransportCost(mode, pax) {
    if (mode === 'perahu') return Math.ceil(pax / 10) * 200000;
    if (mode === 'mobil') return Math.ceil(pax / 7) * 400000;
    return Math.ceil(pax / 2) * 28000;
  }

  let latestCalcSummary = { pax: 4, total: 388000, perPax: 97000, modeLabel: 'Perahu Motor Tlocor' };

  function recalculateBudget() {
    const pax = parseInt(groupSlider.value, 10) || 1;
    document.getElementById('group-count').textContent = pax;

    const checkedRadio = document.querySelector('input[name="transport"]:checked');
    const mode = checkedRadio ? checkedRadio.value : 'perahu';
    const plan = PLAN_PACKAGES[activePlanKey];

    const ticketTotal = plan.ticketPerPax * pax;
    const transportTotal = getTransportCost(mode, pax);
    const foodTotal = plan.culinaryPerPax * pax;
    const grandTotal = ticketTotal + transportTotal + foodTotal;
    const perPerson = grandTotal / pax;

    document.getElementById('out-ticket').textContent = formatIDR(ticketTotal);
    document.getElementById('out-transport').textContent = formatIDR(transportTotal);
    document.getElementById('out-food').textContent = formatIDR(foodTotal);
    document.getElementById('out-per-pax').textContent = `${formatIDR(perPerson)} / org`;
    document.getElementById('out-total').textContent = formatIDR(grandTotal);

    const modeNames = {
      perahu: 'Perahu Motor Tlocor',
      mobil: 'Rental Mobil Harian',
      motor: 'Motor Pribadi'
    };

    latestCalcSummary = { pax, total: grandTotal, perPax: perPerson, modeLabel: modeNames[mode] };
    drawBoardingPass();
  }

  function roundRectPath(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function drawBoardingPass() {
    const w = passCanvas.width;
    const h = passCanvas.height;
    const isDark = activeTheme === 'dark';
    const plan = PLAN_PACKAGES[activePlanKey];
    const traveler = (passNameInput.value.trim() || 'Penjelajah Brantas').slice(0, 26);
    const dateStr = new Date().toLocaleDateString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric'
    });

    pCtx.clearRect(0, 0, w, h);

    pCtx.fillStyle = isDark ? '#020617' : '#F1F5F9';
    pCtx.fillRect(0, 0, w, h);

    pCtx.fillStyle = isDark ? '#1E293B' : '#FFFFFF';
    pCtx.strokeStyle = isDark ? '#334155' : '#CBD5E1';
    pCtx.lineWidth = 2;
    roundRectPath(pCtx, 18, 18, w - 36, h - 36, 16);
    pCtx.fill();
    pCtx.stroke();

    pCtx.save();
    roundRectPath(pCtx, 18, 18, w - 36, 62, 16);
    pCtx.clip();
    pCtx.fillStyle = '#0D9488';
    pCtx.fillRect(18, 18, w - 36, 62);
    pCtx.restore();

    pCtx.fillStyle = '#FFFFFF';
    pCtx.font = 'bold 18px -apple-system, Segoe UI, sans-serif';
    pCtx.fillText('JELAJAH DELTA — SIDOARJO BOARDING PASS', 38, 55);

    pCtx.font = '600 12px ui-monospace, monospace';
    pCtx.fillText('SDA-PASS-2026', w - 148, 54);

    const stubX = 485;
    pCtx.save();
    pCtx.setLineDash([6, 6]);
    pCtx.strokeStyle = isDark ? '#475569' : '#CBD5E1';
    pCtx.beginPath();
    pCtx.moveTo(stubX, 82);
    pCtx.lineTo(stubX, h - 20);
    pCtx.stroke();
    pCtx.restore();

    const fg = isDark ? '#F8FAFC' : '#0F172A';
    const muted = isDark ? '#94A3B8' : '#64748B';

    pCtx.fillStyle = muted;
    pCtx.font = '600 11px -apple-system, sans-serif';
    pCtx.fillText('KOORDINATOR ROMBONGAN', 38, 110);
    pCtx.fillText('KORIDOR PERJALANAN DELTA', 38, 172);
    pCtx.fillText('TANGGAL', 38, 236);
    pCtx.fillText('ROMBONGAN & MODA', 175, 236);

    pCtx.fillStyle = fg;
    pCtx.font = 'bold 22px -apple-system, sans-serif';
    pCtx.fillText(traveler, 38, 136);

    pCtx.fillStyle = '#14B8A6';
    pCtx.font = 'bold 14px ui-monospace, monospace';
    pCtx.fillText(plan.routeCode, 38, 195);

    pCtx.fillStyle = fg;
    pCtx.font = 'bold 15px -apple-system, sans-serif';
    pCtx.fillText(dateStr, 38, 258);
    pCtx.fillText(`${latestCalcSummary.pax} Org • ${latestCalcSummary.modeLabel}`, 175, 258);

    const qrX = 528;
    const qrY = 104;
    const cell = 7;
    pCtx.fillStyle = '#FFFFFF';
    pCtx.fillRect(qrX - 8, qrY - 8, cell * 15 + 16, cell * 15 + 16);

    pCtx.fillStyle = '#0F172A';
    const seed = traveler.length + latestCalcSummary.pax * 7;
    for (let r = 0; r < 15; r++) {
      for (let c = 0; c < 15; c++) {
        const isCorner = (r < 4 && c < 4) || (r < 4 && c > 10) || (r > 10 && c < 4);
        const bit = ((r * 17 + c * 31 + seed) % 3 === 0);
        if (isCorner || bit) {
          pCtx.fillRect(qrX + c * cell, qrY + r * cell, cell - 1, cell - 1);
        }
      }
    }

    pCtx.fillStyle = muted;
    pCtx.font = '600 11px -apple-system, sans-serif';
    pCtx.fillText('ESTIMASI ANGGARAN', 520, 242);
    pCtx.fillStyle = fg;
    pCtx.font = 'bold 18px -apple-system, sans-serif';
    pCtx.fillText(formatIDR(latestCalcSummary.total), 520, 265);
  }

  document.querySelectorAll('.trip-theme-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectPlannerTheme(btn.dataset.plan);
      recalculateBudget();
    });
  });

  groupSlider.addEventListener('input', recalculateBudget);
  document.querySelectorAll('input[name="transport"]').forEach((r) => {
    r.addEventListener('change', recalculateBudget);
  });
  passNameInput.addEventListener('input', () => {
    document.getElementById('pass-msg').textContent = '';
    drawBoardingPass();
  });

  document.getElementById('btn-download-pass').addEventListener('click', () => {
    drawBoardingPass();
    const rawName = (passNameInput.value.trim() || 'delta').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const link = document.createElement('a');
    link.download = `delta-boarding-pass-${rawName}.png`;
    link.href = passCanvas.toDataURL('image/png');
    link.click();
    document.getElementById('pass-msg').textContent = '✓ Tiket perjalanan Delta Boarding Pass (.PNG) berhasil diunduh.';
  });

  // --- 9. DIREKTORI LENGKAP 6 DESTINASI ---
  const catalogGrid = document.getElementById('catalog-grid');
  let activeCat = 'semua';

  function renderDirectory() {
    catalogGrid.innerHTML = '';
    const list = DESTINATIONS.filter((d) => activeCat === 'semua' || d.category === activeCat);

    list.forEach((spot) => {
      const card = document.createElement('article');
      card.className = 'card spot-card';
      const fallback = buildFallbackSvg(spot.fallbackPalette);
      const cached = wikiCache['spot_' + spot.id];

      card.innerHTML = `
        <div class="spot-card-media">
          <div id="cskel-${spot.id}" class="shimmer ${cached ? 'done' : ''}"></div>
          <img id="cimg-${spot.id}" src="${cached ? cached.url : fallback}" alt="${spot.name}" loading="lazy">
        </div>
        <div class="spot-card-body">
          <div>
            <span class="pill-badge ${spot.category === 'Sejarah' ? 'badge-terracotta' : 'badge-teal'}">${spot.category}</span>
          </div>
          <h3>${spot.name}</h3>
          <p>${spot.desc}</p>
          <div class="spot-card-foot">
            <span class="mono-label">${spot.district.split('•')[0]}</span>
            <button type="button" class="link-btn" data-goto="${spot.id}">Lihat di Peta &rarr;</button>
          </div>
        </div>
      `;

      card.querySelector('[data-goto]').addEventListener('click', () => {
        focusDestination(spot.id, true);
        document.getElementById('peta-delta').scrollIntoView({ behavior: 'smooth' });
      });

      catalogGrid.appendChild(card);

      if (!cached) {
        fetchWikiImage('spot_' + spot.id, spot.wikiQuery, 0).then((res) => {
          const sk = document.getElementById(`cskel-${spot.id}`);
          const im = document.getElementById(`cimg-${spot.id}`);
          if (sk) sk.classList.add('done');
          if (res && res.url && im) {
            im.onerror = () => { im.src = fallback; };
            im.src = res.url;
          }
        });
      }
    });
  }

  document.querySelectorAll('.cat-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.cat;
      renderDirectory();
    });
  });

  // --- INISIALISASI SAAT HALAMAN DIMUAT ---
  setTheme(activeTheme, false);
  renderInternetMapTiles('satelit');
  focusDestination('sarinah', false);
  initCandiPariSplitPhotos();
  updateSplitPosition(50);
  recalculateBudget();
  renderDirectory();
})();