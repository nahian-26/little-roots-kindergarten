window.app = {
  STORAGE_KEY: 'little_roots_demo_v1',
  DRAFT_KEY: 'little_roots_inquiry_draft_v1',

  state: {
    currentRoute: '/',
    homePillar: 'curiosity',
    homeDayStep: 0,
    homeGalleryCat: 'All',
    ageSelectorBand: 'all',
    routineStepIndex: 0,
    activeCampusSpace: 'classroom',
    campusPhotoIdx: 0,
    galleryCategory: 'All',
    lightboxIndex: 0,
    parentActivityAge: 'All',
    admissionsChecklist: { doc1: true, doc2: false, doc3: false, doc4: false },
    adminSearch: '',
    adminProgramFilter: 'All',
    adminStatusFilter: 'All',
    tourDraft: {
      step: 1,
      program: 'Playgroup',
      visitDate: '2026-11-12',
      visitWindow: '9:30 AM – 10:30 AM (Morning Discovery Window)',
      visitorLabel: 'Synthetic Visitor — Karim & Nadia (Demo)',
      contactSynthetic: 'demo.visitor@example.invalid',
      notes: 'Exploring Playgroup settling-in rhythm and Sensory Corner.',
      lastSubmittedId: ''
    },
    inquiryDraft: {
      step: 1,
      program: 'Nursery',
      childAgeBand: '3–4 years (Nursery)',
      session: 'Autumn Term (Concept Session)',
      interests: ['Nature Exploration', 'Creative Atelier', 'Storytelling & Books'],
      orientationPref: 'In-Person Morning Orientation (Simulated)',
      parentLabel: 'Demo Family — Sen Household (Synthetic)',
      contactSynthetic: 'demo.sen@example.invalid',
      notes: 'Interested in Reggio-inspired studio projects and outdoor garden time.',
      lastSubmittedId: ''
    },
    contactDraft: {
      sender: 'Synthetic Parent — Farhana (Demo)',
      topic: 'General Program Question',
      message: 'Hello! We love the Growing Seed philosophy and would like to explore the Nursery morning schedule.'
    },
    demoDb: null
  },

  init: function() {
    this.loadDemoDb();
    this.loadInquiryDraft();

    const hLogo = document.getElementById('header-logo-slot');
    if (hLogo) hLogo.innerHTML = window.LR_SVGS.primaryLogo();
    const fLogo = document.getElementById('footer-logo-slot');
    if (fLogo) fLogo.innerHTML = window.LR_SVGS.primaryLogo();

    // Browser back/forward navigation support
    window.addEventListener('popstate', (e) => {
      const route = (e.state && e.state.route) || window.location.pathname || '/';
      this.navigate(route, false);
    });

    // Hash change support (fallback when opened directly as file)
    window.addEventListener('hashchange', () => {
      const hashRoute = window.location.hash.replace(/^#/, '');
      if (hashRoute && hashRoute !== this.state.currentRoute) {
        this.navigate(hashRoute, false);
      }
    });

    // Client-side link interception for smooth SPA navigation
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) {
        const href = a.getAttribute('href');
        const target = a.getAttribute('target');
        if (href && href.startsWith('/') && !href.startsWith('//') && (!target || target === '_self')) {
          e.preventDefault();
          this.navigate(href);
        }
      }
    });

    // Keyboard navigation: Escape key dismisses modals & drawers; Left/Right navigates lightbox
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lb = document.getElementById('lightbox-modal');
        if (lb && !lb.classList.contains('hidden')) this.closeLightbox();
        const adm = document.getElementById('admin-detail-modal');
        if (adm && !adm.classList.contains('hidden')) this.closeAdminModal();
        const drw = document.getElementById('demo-routes-drawer');
        if (drw && !drw.classList.contains('hidden')) this.closeDemoDrawer();
        const mob = document.getElementById('mobile-menu-drawer');
        if (mob && !mob.classList.contains('hidden')) this.closeMobileMenu();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const lb = document.getElementById('lightbox-modal');
        if (lb && !lb.classList.contains('hidden')) {
          this.stepLightbox(e.key === 'ArrowLeft' ? -1 : 1);
        }
      }
    });

    // Determine initial route on page load (support clean pathname or hash fallback)
    let initialRoute = '/';
    if (window.location.hash && window.location.hash.length > 1) {
      initialRoute = window.location.hash.replace(/^#/, '');
    } else if (window.location.pathname && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      initialRoute = window.location.pathname;
    }
    this.navigate(initialRoute, false);
  },

  cloneDefaultDb: function() {
    return JSON.parse(JSON.stringify(window.LR_DEFAULT_DEMO_STATE));
  },

  loadDemoDb: function() {
    try {
      const raw = window.localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.inquiries) && Array.isArray(parsed.tours)) {
          this.state.demoDb = parsed;
          this.updateAdminBadge();
          return;
        }
      }
    } catch (err) {}
    this.state.demoDb = this.cloneDefaultDb();
    this.updateAdminBadge();
  },

  saveDemoDb: function() {
    try {
      window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.demoDb));
    } catch (err) {}
    this.updateAdminBadge();
  },

  loadInquiryDraft: function() {
    try {
      const raw = window.localStorage.getItem(this.DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.program) {
          this.state.inquiryDraft = Object.assign({}, this.state.inquiryDraft, parsed);
        }
      }
    } catch (err) {}
  },

  saveInquiryDraft: function() {
    try {
      window.localStorage.setItem(this.DRAFT_KEY, JSON.stringify(this.state.inquiryDraft));
    } catch (err) {}
  },

  updateAdminBadge: function() {
    const badge = document.getElementById('header-admin-badge');
    if (badge && this.state.demoDb) {
      badge.textContent = String(this.state.demoDb.inquiries.length + this.state.demoDb.tours.length);
    }
  },

  showToast: function(msg) {
    const el = document.getElementById('toast-container');
    const txt = document.getElementById('toast-message');
    if (!el || !txt) return;
    txt.textContent = msg;
    el.classList.remove('hidden');
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      el.classList.add('hidden');
    }, 3600);
  },

  focusMain: function(e) {
    if (e) e.preventDefault();
    const m = document.getElementById('main-content');
    if (m) m.focus();
  },

  toggleMobileMenu: function() {
    const drawer = document.getElementById('mobile-menu-drawer');
    const btn = document.getElementById('mobile-menu-btn');
    const openIcon = document.getElementById('mobile-menu-icon-open');
    const closeIcon = document.getElementById('mobile-menu-icon-close');
    if (!drawer) return;
    const isHidden = drawer.classList.contains('hidden');
    if (isHidden) {
      drawer.classList.remove('hidden');
      if (btn) btn.setAttribute('aria-expanded', 'true');
      if (openIcon) openIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      this.closeMobileMenu();
    }
  },

  closeMobileMenu: function() {
    const drawer = document.getElementById('mobile-menu-drawer');
    const btn = document.getElementById('mobile-menu-btn');
    const openIcon = document.getElementById('mobile-menu-icon-open');
    const closeIcon = document.getElementById('mobile-menu-icon-close');
    if (drawer) drawer.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (openIcon) openIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  },

  toggleDemoDrawer: function() {
    const d = document.getElementById('demo-routes-drawer');
    if (!d) return;
    if (d.classList.contains('hidden')) {
      this.openDemoDrawer();
    } else {
      this.closeDemoDrawer();
    }
  },

  openDemoDrawer: function() {
    const d = document.getElementById('demo-routes-drawer');
    if (d) d.classList.remove('hidden');
  },

  closeDemoDrawer: function() {
    const d = document.getElementById('demo-routes-drawer');
    if (d) d.classList.add('hidden');
  },

  navigate: function(route, updateHistory = true) {
    const cleanRoute = (route || '/').trim();
    this.state.currentRoute = cleanRoute;
    this.closeMobileMenu();
    this.closeDemoDrawer();

    if (updateHistory) {
      try {
        if (window.location.protocol !== 'file:') {
          window.history.pushState({ route: cleanRoute }, '', cleanRoute);
        } else {
          window.location.hash = cleanRoute;
        }
      } catch (err) {
        window.location.hash = cleanRoute;
      }
    }

    this.renderCurrentRoute();
    this.updatePageMetadata(cleanRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  updatePageMetadata: function(route) {
    const titles = {
      '/': 'Little Roots Kindergarten | A Place to Bloom with Wonder — Invenio Concept',
      '/our-story': 'Our Story & Growing Seed Philosophy | Little Roots Kindergarten',
      '/programs': 'Early Learning Programs & Age Finder | Little Roots Kindergarten',
      '/programs/playgroup': 'Playgroup (2–3 Years) | Little Roots Kindergarten',
      '/programs/nursery': 'Nursery (3–4 Years) | Little Roots Kindergarten',
      '/programs/kindergarten': 'Kindergarten (4–6 Years) | Little Roots Kindergarten',
      '/programs/enrichment': 'Nature & Creative Enrichment Studio | Little Roots Kindergarten',
      '/a-day-at-little-roots': 'A Day at Little Roots · Daily Rhythm & Routine | Little Roots Kindergarten',
      '/our-campus': 'Campus Explorer & Learning Spaces | Little Roots Kindergarten',
      '/our-educators': 'Our Educators & Teaching Guides | Little Roots Kindergarten',
      '/admissions': 'Admissions Guide, Timeline & Checklist | Little Roots Kindergarten',
      '/book-a-tour': 'Book a School Tour (Interactive Demo) | Little Roots Kindergarten',
      '/apply': 'Admission Inquiry Wizard (Interactive Demo) | Little Roots Kindergarten',
      '/parent-corner': 'Parent Corner · At-Home Activities & Calendar | Little Roots Kindergarten',
      '/gallery': 'School Life Gallery & Lightbox | Little Roots Kindergarten',
      '/contact': 'Contact & Demonstration Inquiries | Little Roots Kindergarten',
      '/privacy': 'Concept Disclosure & Privacy Safeguards | Little Roots Kindergarten',
      '/admin': 'Demonstration Admissions Dashboard | Little Roots Kindergarten'
    };
    document.title = titles[route] || 'Little Roots Kindergarten — Invenio Concept';
  },

  renderCurrentRoute: function() {
    const main = document.getElementById('main-content');
    if (!main) return;
    const r = this.state.currentRoute;
    let html = '';

    if (r === '/' || r === '') {
      html = window.LR_PAGES.renderHome(this.state);
    } else if (r === '/our-story') {
      html = window.LR_PAGES.renderOurStory(this.state);
    } else if (r === '/programs') {
      html = window.LR_PAGES.renderPrograms(this.state);
    } else if (r === '/programs/playgroup') {
      html = window.LR_PAGES.renderProgramDetail('playgroup');
    } else if (r === '/programs/nursery') {
      html = window.LR_PAGES.renderProgramDetail('nursery');
    } else if (r === '/programs/kindergarten') {
      html = window.LR_PAGES.renderProgramDetail('kindergarten');
    } else if (r === '/programs/enrichment') {
      html = window.LR_PAGES.renderProgramDetail('enrichment');
    } else if (r === '/a-day-at-little-roots') {
      html = window.LR_PAGES.renderDailyRoutine(this.state);
    } else if (r === '/our-campus') {
      html = window.LR_PAGES.renderCampusExplorer(this.state);
    } else if (r === '/our-educators') {
      html = window.LR_PAGES.renderEducators(this.state);
    } else if (r === '/admissions') {
      html = window.LR_PAGES.renderAdmissions(this.state);
    } else if (r === '/book-a-tour') {
      html = window.LR_PAGES.renderBookTour(this.state);
    } else if (r === '/apply') {
      html = window.LR_PAGES.renderApplyWizard(this.state);
    } else if (r === '/parent-corner') {
      html = window.LR_PAGES.renderParentCorner(this.state);
    } else if (r === '/gallery') {
      html = window.LR_PAGES.renderGallery(this.state);
    } else if (r === '/contact') {
      html = window.LR_PAGES.renderContact(this.state);
    } else if (r === '/privacy') {
      html = window.LR_PAGES.renderPrivacy(this.state);
    } else if (r === '/admin') {
      html = window.LR_PAGES.renderAdminDashboard(this.state);
    } else {
      html = window.LR_PAGES.render404(r);
    }

    main.innerHTML = html;
  },

  setHomePillar: function(pillarId) {
    this.state.homePillar = pillarId;
    this.renderCurrentRoute();
  },
  setHomeDayStep: function(idx) {
    this.state.homeDayStep = idx;
    this.renderCurrentRoute();
  },
  setHomeGalleryCat: function(cat) {
    this.state.homeGalleryCat = cat;
    this.renderCurrentRoute();
  },

  setAgeSelectorBand: function(bandKey) {
    this.state.ageSelectorBand = bandKey;
    this.renderCurrentRoute();
  },
  setRoutineStep: function(idx) {
    this.state.routineStepIndex = idx;
    this.renderCurrentRoute();
  },

  openCampusSpace: function(spaceId) {
    this.state.activeCampusSpace = spaceId;
    this.state.campusPhotoIdx = 0;
    this.navigate('/our-campus');
  },
  selectCampusSpace: function(spaceId) {
    this.state.activeCampusSpace = spaceId;
    this.state.campusPhotoIdx = 0;
    this.renderCurrentRoute();
  },
  setCampusPhotoIdx: function(idx) {
    this.state.campusPhotoIdx = idx;
    this.renderCurrentRoute();
  },

  toggleAdmissionsCheck: function(id) {
    this.state.admissionsChecklist[id] = !this.state.admissionsChecklist[id];
    this.renderCurrentRoute();
  },

  updateTourDraft: function(field, val) {
    this.state.tourDraft[field] = val;
    this.renderCurrentRoute();
  },
  setTourDraftField: function(field, val) {
    this.updateTourDraft(field, val);
  },
  prefillSyntheticTour: function() {
    this.state.tourDraft = {
      step: 3,
      program: 'Nursery',
      visitDate: '2026-11-18',
      visitWindow: '10:45 AM – 11:45 AM (Outdoor Garden & Atelier Window)',
      visitorLabel: 'Demo Visitor — Rahman Household (Synthetic)',
      contactSynthetic: 'synthetic.rahman@example.invalid',
      notes: 'Interested in Reggio-inspired studio projects and settling-in for our 3-year-old.',
      lastSubmittedId: ''
    };
    this.renderCurrentRoute();
    this.showToast('Prefilled synthetic demonstration visitor profile');
  },
  stepTourWizard: function(delta) {
    let next = this.state.tourDraft.step + delta;
    if (next < 1) next = 1;
    if (next > 5) next = 5;
    this.state.tourDraft.step = next;
    this.renderCurrentRoute();
  },
  submitTourRequest: function() {
    const id = 'LR-TOUR-' + Math.floor(1000 + Math.random() * 9000);
    this.state.demoDb.tours.unshift({
      id: id,
      visitorLabel: this.state.tourDraft.visitorLabel,
      contactSynthetic: this.state.tourDraft.contactSynthetic,
      program: this.state.tourDraft.program,
      visitDate: this.state.tourDraft.visitDate,
      timeWindow: this.state.tourDraft.visitWindow,
      notes: this.state.tourDraft.notes,
      requestedDate: '2026-10-31',
      status: 'Tour Requested'
    });
    this.state.tourDraft.lastSubmittedId = id;
    this.state.tourDraft.step = 6;
    this.saveDemoDb();
    this.renderCurrentRoute();
    this.showToast('Demonstration tour request submitted! (Simulated)');
  },
  copyTourSummary: function() {
    const summary = `Little Roots Tour Request (${this.state.tourDraft.lastSubmittedId || 'Demo'})\nProgram: ${this.state.tourDraft.program}\nDate: ${this.state.tourDraft.visitDate}\nWindow: ${this.state.tourDraft.visitWindow}\nVisitor: ${this.state.tourDraft.visitorLabel}\nSynthetic Contact: ${this.state.tourDraft.contactSynthetic}\n(Notice: Fictional concept demonstration. No real visit scheduled.)`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary).then(() => {
        this.showToast('Summary copied to clipboard!');
      }).catch(() => {
        this.showToast('Copied summary!');
      });
    } else {
      this.showToast('Demo summary ready!');
    }
  },

  updateInquiryDraft: function(field, val) {
    this.state.inquiryDraft[field] = val;
    this.saveInquiryDraft();
    this.renderCurrentRoute();
  },
  setInquiryDraftField: function(field, val) {
    this.updateInquiryDraft(field, val);
  },
  toggleInquiryInterest: function(item) {
    let list = this.state.inquiryDraft.interests || [];
    if (list.includes(item)) {
      list = list.filter(x => x !== item);
    } else {
      list = list.concat([item]);
    }
    this.state.inquiryDraft.interests = list;
    this.saveInquiryDraft();
    this.renderCurrentRoute();
  },
  prefillSyntheticInquiry: function() {
    this.state.inquiryDraft = {
      step: 6,
      program: 'Kindergarten',
      childAgeBand: '4–6 years (Kindergarten)',
      session: 'Full Academic Year Concept (2026–27)',
      interests: ['Nature Exploration', 'Creative Atelier', 'Early Numeracy & Block Play'],
      orientationPref: 'In-Person Morning Orientation (Simulated)',
      parentLabel: 'Demo Family — Kabir Family (Synthetic)',
      contactSynthetic: 'synthetic.kabir@example.invalid',
      notes: 'Looking for a joyful, unhurried kindergarten year before primary school transition.',
      lastSubmittedId: ''
    };
    this.saveInquiryDraft();
    this.renderCurrentRoute();
    this.showToast('Prefilled synthetic demonstration inquiry');
  },
  stepInquiryWizard: function(delta) {
    let next = this.state.inquiryDraft.step + delta;
    if (next < 1) next = 1;
    if (next > 7) next = 7;
    this.state.inquiryDraft.step = next;
    this.saveInquiryDraft();
    this.renderCurrentRoute();
  },
  jumpInquiryStep: function(st) {
    this.state.inquiryDraft.step = st;
    this.saveInquiryDraft();
    this.renderCurrentRoute();
  },
  resetInquiryWizard: function() {
    this.state.inquiryDraft = {
      step: 1,
      program: 'Nursery',
      childAgeBand: '3–4 years (Nursery)',
      session: 'Autumn Term (Concept Session)',
      interests: ['Nature Exploration', 'Creative Atelier'],
      orientationPref: 'In-Person Morning Orientation (Simulated)',
      parentLabel: 'Demo Family — Sample Profile',
      contactSynthetic: 'demo.parent@example.invalid',
      notes: '',
      lastSubmittedId: ''
    };
    this.saveInquiryDraft();
    this.renderCurrentRoute();
    this.showToast('Inquiry wizard draft reset');
  },
  submitInquiryWizard: function() {
    const id = 'LR-INQ-' + Math.floor(1000 + Math.random() * 9000);
    this.state.demoDb.inquiries.unshift({
      id: id,
      parentLabel: this.state.inquiryDraft.parentLabel,
      contactSynthetic: this.state.inquiryDraft.contactSynthetic,
      childAgeBand: this.state.inquiryDraft.childAgeBand,
      program: this.state.inquiryDraft.program,
      session: this.state.inquiryDraft.session,
      interests: this.state.inquiryDraft.interests,
      orientationPref: this.state.inquiryDraft.orientationPref,
      submittedDate: '2026-10-31',
      status: 'New Inquiry',
      notes: this.state.inquiryDraft.notes || 'Inquiry wizard submission.'
    });
    this.state.inquiryDraft.lastSubmittedId = id;
    this.state.inquiryDraft.step = 8;
    this.saveDemoDb();
    this.saveInquiryDraft();
    this.renderCurrentRoute();
    this.showToast('Demonstration inquiry submitted to Admin Dashboard!');
  },

  setParentActivityAge: function(age) {
    this.state.parentActivityAge = age;
    this.renderCurrentRoute();
  },

  setGalleryCategory: function(cat) {
    this.state.galleryCategory = cat;
    this.renderCurrentRoute();
  },
  openLightboxById: function(id) {
    const items = window.LR_DATA.galleryItems;
    const idx = items.findIndex(g => g.id === id);
    if (idx !== -1) {
      this.state.lightboxIndex = idx;
      this.syncLightboxDom();
      const modal = document.getElementById('lightbox-modal');
      if (modal) modal.classList.remove('hidden');
    }
  },
  syncLightboxDom: function() {
    const items = window.LR_DATA.galleryItems;
    const item = items[this.state.lightboxIndex];
    if (!item) return;
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const cat = document.getElementById('lightbox-cat');
    const cap = document.getElementById('lightbox-caption');
    const cnt = document.getElementById('lightbox-counter');
    if (img) {
      img.src = item.img;
      img.alt = item.title;
    }
    if (title) title.textContent = item.title;
    if (cat) cat.textContent = item.category;
    if (cap) cap.textContent = item.caption;
    if (cnt) cnt.textContent = (this.state.lightboxIndex + 1) + ' / ' + items.length;
  },
  stepLightbox: function(delta) {
    const len = window.LR_DATA.galleryItems.length;
    this.state.lightboxIndex = (this.state.lightboxIndex + delta + len) % len;
    this.syncLightboxDom();
  },
  closeLightbox: function() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.add('hidden');
  },
  closeLightboxOnBackdrop: function(e) {
    if (e && e.target && e.target.id === 'lightbox-modal') {
      this.closeLightbox();
    }
  },

  updateContactDraft: function(field, val) {
    this.state.contactDraft[field] = val;
  },
  prefillContactForm: function() {
    this.state.contactDraft = {
      sender: 'Synthetic Parent — Nusrat & Tanvir (Demo)',
      topic: 'Playgroup & Settling-In',
      message: 'We would love to learn more about the gradual Playgroup settling-in rhythm and outdoor garden time.'
    };
    this.renderCurrentRoute();
    this.showToast('Prefilled synthetic contact message');
  },
  submitContactForm: function(e) {
    if (e) e.preventDefault();
    this.state.demoDb.contactMessages.unshift({
      sender: this.state.contactDraft.sender,
      topic: this.state.contactDraft.topic,
      message: this.state.contactDraft.message,
      date: '2026-10-31'
    });
    this.saveDemoDb();
    this.showToast('Demonstration contact message saved locally!');
  },

  setAdminSearch: function(val) {
    this.state.adminSearch = val;
    this.renderCurrentRoute();
  },
  setAdminProgramFilter: function(val) {
    this.state.adminProgramFilter = val;
    this.renderCurrentRoute();
  },
  setAdminStatusFilter: function(val) {
    this.state.adminStatusFilter = val;
    this.renderCurrentRoute();
  },
  updateInquiryStatus: function(id, newStatus) {
    const rec = this.state.demoDb.inquiries.find(i => i.id === id);
    if (rec) {
      rec.status = newStatus;
      this.saveDemoDb();
      this.renderCurrentRoute();
      this.showToast('Updated ' + id + ' status to "' + newStatus + '"');
    }
  },
  inspectInquiry: function(id) {
    const rec = this.state.demoDb.inquiries.find(i => i.id === id);
    if (!rec) return;
    const modal = document.getElementById('admin-detail-modal');
    const title = document.getElementById('admin-modal-title');
    const body = document.getElementById('admin-modal-body');
    if (title) title.textContent = rec.id + ' — ' + rec.parentLabel;
    if (body) {
      body.innerHTML = `
        <div class="grid grid-cols-2 gap-3 bg-[#F4F0E9] p-4 rounded-2xl text-xs">
          <div><span class="text-[#45534C] block font-medium">Program</span><strong class="text-sm font-serif text-[#39263E]">${rec.program}</strong></div>
          <div><span class="text-[#45534C] block font-medium">Child Age Band</span><strong class="text-sm font-serif text-[#39263E]">${rec.childAgeBand}</strong></div>
          <div><span class="text-[#45534C] block font-medium">Preferred Session</span><strong>${rec.session}</strong></div>
          <div><span class="text-[#45534C] block font-medium">Pipeline Status</span><strong class="text-[#174F43]">${rec.status}</strong></div>
          <div class="col-span-2"><span class="text-[#45534C] block font-medium">Synthetic Contact</span><strong>${rec.contactSynthetic}</strong></div>
          <div class="col-span-2"><span class="text-[#45534C] block font-medium">Orientation Preference</span><strong>${rec.orientationPref}</strong></div>
          <div class="col-span-2"><span class="text-[#45534C] block font-medium">Learning Interests</span><strong>${(rec.interests || []).join(', ')}</strong></div>
          <div class="col-span-2"><span class="text-[#45534C] block font-medium">Demo Notes</span><p class="mt-0.5">${rec.notes}</p></div>
        </div>
      `;
    }
    if (modal) modal.classList.remove('hidden');
  },
  closeAdminModal: function() {
    const modal = document.getElementById('admin-detail-modal');
    if (modal) modal.classList.add('hidden');
  },
  cycleTourStatus: function(id) {
    const order = ['New Inquiry', 'Tour Requested', 'Tour Completed', 'Application Started'];
    const tr = this.state.demoDb.tours.find(t => t.id === id);
    if (tr) {
      const idx = order.indexOf(tr.status);
      tr.status = order[(idx + 1) % order.length];
      this.saveDemoDb();
      this.renderCurrentRoute();
      this.showToast('Tour ' + id + ' advanced to "' + tr.status + '"');
    }
  },
  toggleAdminTask: function(id) {
    const task = this.state.demoDb.tasks.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      this.saveDemoDb();
      this.renderCurrentRoute();
    }
  },
  addSyntheticDemoRecord: function() {
    const progs = ['Playgroup', 'Nursery', 'Kindergarten'];
    const pick = progs[Math.floor(Math.random() * progs.length)];
    const newId = 'LR-INQ-2026-' + Math.floor(300 + Math.random() * 699);
    this.state.demoDb.inquiries.unshift({
      id: newId,
      parentLabel: 'Demo Family — Synthetic Test #' + newId.slice(-3),
      contactSynthetic: 'synthetic.' + newId.slice(-3) + '@example.invalid',
      childAgeBand: pick === 'Playgroup' ? '2–3 years (Playgroup)' : pick === 'Nursery' ? '3–4 years (Nursery)' : '4–6 years (Kindergarten)',
      program: pick,
      session: 'Autumn Term (Concept Session)',
      interests: ['Nature Exploration', 'Creative Atelier'],
      orientationPref: 'In-Person Morning Orientation (Simulated)',
      submittedDate: '2026-10-31',
      status: 'New Inquiry',
      notes: 'One-click synthetic record created inside Admin Dashboard.'
    });
    this.saveDemoDb();
    this.renderCurrentRoute();
    this.showToast('Added synthetic inquiry ' + newId);
  },
  resetDemoData: function() {
    this.state.demoDb = this.cloneDefaultDb();
    this.saveDemoDb();
    this.renderCurrentRoute();
    this.showToast('Demo data reset to clean initial sample records!');
  },
  restoreSampleRecords: function() {
    this.state.demoDb = this.cloneDefaultDb();
    this.saveDemoDb();
    this.renderCurrentRoute();
    this.showToast('Default sample records restored!');
  },
  clearLocalTestSubmissions: function() {
    const defaultIds = new Set(window.LR_DEFAULT_DEMO_STATE.inquiries.map(i => i.id));
    const defaultTourIds = new Set(window.LR_DEFAULT_DEMO_STATE.tours.map(t => t.id));
    this.state.demoDb.inquiries = this.state.demoDb.inquiries.filter(i => defaultIds.has(i.id));
    this.state.demoDb.tours = this.state.demoDb.tours.filter(t => defaultTourIds.has(t.id));
    this.saveDemoDb();
    this.renderCurrentRoute();
    this.showToast('Cleared custom test submissions; kept baseline sample records.');
  }
};
