window.LR_PAGES = window.LR_PAGES || {};

window.LR_PAGES.renderParentCorner = function(state) {
  const homeActivities = [
    { age: "2–3 yrs", title: "Kitchen Herb Sensory Tray", desc: "Offer fresh mint, coriander leaves, and lemon peel in small bowls for scent and texture exploration." },
    { age: "2–3 yrs", title: "Water Pouring Station", desc: "Two small cups, a sponge, and a shallow tray on the balcony build wrist control and calm focus." },
    { age: "3–4 yrs", title: "Shadow Tracing in Morning Sun", desc: "Place toy animals or leaves on paper by a sunny window and trace their cast shadows together." },
    { age: "3–4 yrs", title: "Seed Sorting & Patterning", desc: "Sort dried chickpeas, lentils, and tamarind seeds into rhythmic patterns on a woven mat." },
    { age: "4–6 yrs", title: "Monsoon Rain Gauge Journal", desc: "Set out a clear jar during a Dhaka rain shower, measure millimeters with a ruler, and sketch the clouds." },
    { age: "4–6 yrs", title: "Family Recipe Storyboard", desc: "Invite your child to draw and phonetically label the steps of making a favorite family snack." }
  ];
  const filterAge = state.parentActivityAge || 'All';
  const shownActivities = filterAge === 'All' ? homeActivities : homeActivities.filter(a => a.age === filterAge);

  return `
    <section class="bg-[#EAEBFF]/60 py-12 lg:py-16 border-b border-[#39263E]/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <span class="inline-block px-3.5 py-1 rounded-full bg-white text-[#39263E] text-xs font-extrabold uppercase tracking-wider">
          PARENT CORNER · SAMPLE RESOURCE CENTER
        </span>
        <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E]">
          Nurturing curiosity <span class="italic font-normal">from school to home.</span>
        </h1>
        <p class="text-base text-[#45534C] max-w-2xl">
          Explore illustrative parent orientation guidance, a sample seasonal rhythm calendar, learning-at-home activity cards, and first-day preparation tips.
        </p>
      </div>
    </section>

    <section class="py-14 bg-[#FAFAF7]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#39263E]/10 shadow-soft space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="font-serif text-2xl font-bold text-[#39263E]">Sample Conceptual School Calendar</h2>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-[#ECF6D8] text-[#174F43] font-bold">Illustrative Rhythm</span>
            </div>
            <div class="space-y-3 text-sm">
              ${[
                { season: "Early Autumn (Sept–Oct)", event: "Gentle Settling-In Weeks & Parent Welcome Tea", detail: "Staggered small-group arrivals and 1-on-1 educator family conversations." },
                { season: "Late Autumn / Hemonto (Nov)", event: "Botanical Harvest & Atelier Exhibition", detail: "Children share clay sculptures, pressed leaf journals, and herb planters." },
                { season: "Winter Sun (Dec–Jan)", event: "Outdoor Storytelling & Movement Morning", detail: "Acoustic folk stories and balance games under the garden pergola." },
                { season: "Spring / Boshonto (Feb–Mar)", event: "Blossoms, Color & Community Kindness Week", detail: "Natural floral pigment painting and family garden planting." }
              ].map(cal => `
                <div class="p-4 rounded-2xl bg-[#F4F0E9]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">${cal.season}</span>
                    <h3 class="font-serif font-bold text-base text-[#39263E]">${cal.event}</h3>
                    <p class="text-xs text-[#45534C]">${cal.detail}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="lg:col-span-5 space-y-6">
            <div class="bg-[#ECF6D8] rounded-3xl p-6 border border-[#174F43]/15 space-y-3">
              <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">Sample School Announcements</span>
              <div class="bg-white/90 rounded-2xl p-4 space-y-1">
                <span class="text-[11px] font-bold text-[#174F43]">Sample Notice · Nature Garden</span>
                <h3 class="font-serif font-bold text-base text-[#39263E]">Winter Herb Seedlings Have Sprouted!</h3>
                <p class="text-xs text-[#45534C]">Our Nursery learners measured 4cm tulsi and marigold sprouts this morning using wooden unit blocks.</p>
              </div>
              <div class="bg-white/90 rounded-2xl p-4 space-y-1">
                <span class="text-[11px] font-bold text-[#39263E]">Sample Notice · Creative Atelier</span>
                <h3 class="font-serif font-bold text-base text-[#39263E]">Natural Clay &amp; Loose Parts Week</h3>
                <p class="text-xs text-[#45534C]">Please pack an extra comfortable cotton play shirt for terracotta sculpting invitations.</p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-[#39263E]/10 shadow-soft space-y-3">
              <h3 class="font-serif text-xl font-bold text-[#39263E]">Preparing for the First School Day</h3>
              <ul class="space-y-2 text-xs text-[#45534C]">
                <li class="flex items-start gap-2"><span class="text-[#174F43] font-bold">1.</span><span>Walk through the Daily Routine timeline together so your child can picture Circle Time and Garden Play.</span></li>
                <li class="flex items-start gap-2"><span class="text-[#174F43] font-bold">2.</span><span>Pack breathable cotton clothes with elastic waistbands that support independent dressing.</span></li>
                <li class="flex items-start gap-2"><span class="text-[#174F43] font-bold">3.</span><span>Always offer a warm, confident goodbye ritual rather than slipping away unnoticed—building lasting trust.</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">PLAY AT HOME</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">Age-Appropriate Home Discovery Ideas</h2>
            </div>
            <div class="flex flex-wrap gap-2">
              ${['All', '2–3 yrs', '3–4 yrs', '4–6 yrs'].map(age => `
                <button type="button" onclick="window.app.setParentActivityAge('${age}')" class="px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${filterAge === age ? 'bg-[#174F43] text-white' : 'bg-[#F4F0E9] text-[#39263E] hover:bg-[#D9EDB5]'}">
                  ${age}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            ${shownActivities.map(act => `
              <div class="bg-white rounded-3xl p-6 border border-[#39263E]/10 shadow-soft space-y-2">
                <span class="px-2.5 py-0.5 rounded-full bg-[#FDE8D8] text-[#39263E] text-xs font-bold">${act.age}</span>
                <h3 class="font-serif font-bold text-lg text-[#39263E]">${act.title}</h3>
                <p class="text-xs text-[#45534C] leading-relaxed">${act.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
};

window.LR_PAGES.renderGallery = function(state) {
  const cat = state.galleryCategory || 'All';
  const categories = ['All', 'Learning Spaces', 'Creative Activities', 'Nature Exploration', 'Play & Movement', 'Little Moments'];
  const items = cat === 'All'
    ? window.LR_DATA.galleryItems
    : window.LR_DATA.galleryItems.filter(g => g.category === cat);

  return `
    <section class="bg-[#F4F0E9] py-12 lg:py-16 border-b border-[#39263E]/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-2 max-w-2xl">
            <span class="inline-block px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
              SCHOOL LIFE GALLERY · CONCEPT IMAGERY
            </span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#174F43]">
              Little moments. <span class="italic font-normal">Big discoveries.</span>
            </h1>
            <p class="text-sm sm:text-base text-[#45534C]">
              Filter by category and click any photograph to open our high-resolution lightbox with keyboard arrow navigation and Escape-to-close support.
            </p>
          </div>
          <span class="text-xs text-[#45534C] italic">All photographs represent fictional concept spaces &amp; scenes.</span>
        </div>

        <div class="flex flex-wrap gap-2" role="tablist" aria-label="Gallery Categories">
          ${categories.map(c => `
            <button type="button" role="tab" aria-selected="${cat === c}" onclick="window.app.setGalleryCategory('${c}')" class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${cat === c ? 'bg-[#39263E] text-white shadow-sm' : 'bg-white text-[#39263E] hover:bg-[#D9EDB5] border border-[#39263E]/10'}">
              ${c}
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="py-12 bg-[#FAFAF7]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${items.map(item => `
            <figure onclick="window.app.openLightboxById('${item.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.app.openLightboxById('${item.id}');}" class="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#39263E]/10 shadow-soft hover:shadow-card-hover transition-all flex flex-col">
              <div class="relative h-60 overflow-hidden bg-[#F4F0E9]">
                <img src="${item.img}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover editorial-photo editorial-photo-zoom" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#39263E]/85 text-white text-[11px] font-bold">
                  ${item.category}
                </span>
                <span class="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 text-[#39263E] flex items-center justify-center font-bold text-sm shadow">
                  ⤢
                </span>
              </div>
              <figcaption class="p-5 space-y-1">
                <h2 class="font-serif font-bold text-lg text-[#39263E]">${item.title}</h2>
                <p class="text-xs text-[#45534C] leading-relaxed">${item.caption}</p>
              </figcaption>
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
};

window.LR_PAGES.renderContact = function(state) {
  const c = state.contactDraft;
  return `
    <section class="py-12 lg:py-16 bg-[#F4F0E9] border-b border-[#39263E]/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-5 space-y-6">
          <div class="space-y-3">
            <span class="inline-block px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
              CONTACT &amp; DEMONSTRATION INQUIRIES
            </span>
            <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E]">
              Let's start a <span class="italic font-normal">conversation.</span>
            </h1>
            <p class="text-sm sm:text-base text-[#45534C] leading-relaxed">
              Designed for families in <strong>Dhaka, Bangladesh</strong> researching thoughtful early-years education.
            </p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-[#39263E]/10 shadow-soft space-y-3">
            <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">Location &amp; Concept Notice</span>
            <h2 class="font-serif text-xl font-bold text-[#39263E]">Dhaka, Bangladesh (Concept Setting)</h2>
            <p class="text-xs text-[#45534C] leading-relaxed">
              Because Little Roots is a fictional portfolio showcase created by Invenio, we do not list a fabricated street address, operational phone number, or map pin. Use the interactive form or guided wizards to test our digital admissions experience!
            </p>
            <div class="pt-2 flex flex-wrap gap-2">
              <button type="button" onclick="window.app.navigate('/book-a-tour')" class="px-4 py-2 rounded-full bg-[#F6C866] text-[#39263E] text-xs font-bold">
                Book a School Tour →
              </button>
              <button type="button" onclick="window.app.navigate('/apply')" class="px-4 py-2 rounded-full bg-[#174F43] text-white text-xs font-bold">
                Admission Inquiry Wizard →
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 bg-white rounded-[36px] p-6 sm:p-10 border border-[#39263E]/12 shadow-editorial space-y-5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Interactive Demonstration Form</span>
              <h2 class="font-serif text-2xl font-bold text-[#39263E]">Send a Sample Message</h2>
            </div>
            <button type="button" onclick="window.app.prefillContactForm()" class="px-4 py-2 rounded-full bg-[#ECF6D8] text-[#174F43] text-xs font-extrabold hover:bg-[#174F43] hover:text-white transition-colors self-start">
              ✨ Prefill Demo Message
            </button>
          </div>

          <form onsubmit="window.app.submitContactForm(event)" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="contact-name" class="block text-xs font-bold text-[#39263E] mb-1">Synthetic Sender Label</label>
                <input id="contact-name" type="text" required value="${c.sender}" oninput="window.app.updateContactDraft('sender', this.value)" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/20 bg-[#FAFAF7] text-sm" />
              </div>
              <div>
                <label for="contact-topic" class="block text-xs font-bold text-[#39263E] mb-1">Inquiry Topic</label>
                <select id="contact-topic" onchange="window.app.updateContactDraft('topic', this.value)" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/20 bg-[#FAFAF7] text-sm font-semibold">
                  ${['General Program Question', 'Playgroup & Settling-In', 'Campus & Garden Inquiry', 'Invenio Portfolio Concept Feedback'].map(tp => `<option value="${tp}" ${c.topic===tp?'selected':''}>${tp}</option>`).join('')}
                </select>
              </div>
            </div>
            <div>
              <label for="contact-message" class="block text-xs font-bold text-[#39263E] mb-1">Demonstration Message</label>
              <textarea id="contact-message" rows="3" required oninput="window.app.updateContactDraft('message', this.value)" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/20 bg-[#FAFAF7] text-sm">${c.message}</textarea>
            </div>
            <div class="flex items-center justify-between pt-2">
              <span class="text-xs text-[#45534C]">Saved locally in browser demo storage</span>
              <button type="submit" class="px-7 py-3 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white text-xs sm:text-sm font-bold transition-colors">
                Send Demonstration Message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
};

window.LR_PAGES.renderPrivacy = function() {
  return `
    <section class="py-12 lg:py-16 bg-[#FAFAF7]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="bg-[#39263E] text-white rounded-[36px] p-8 sm:p-10 shadow-editorial space-y-4">
          <span class="px-3 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
            TRANSPARENT CONCEPT DISCLOSURE &amp; PRIVACY SAFEGUARDS
          </span>
          <h1 class="font-serif text-3xl sm:text-4xl font-bold">About This Portfolio Concept Experience</h1>
          <p class="text-sm sm:text-base text-white/85 leading-relaxed">
            <strong>Little Roots Kindergarten</strong> is a fictional, self-initiated digital product and brand concept created for the portfolio of <a href="https://invenio-website.pages.dev/" target="_blank" rel="noopener noreferrer" class="underline text-[#F6C866]">Invenio</a>. It is not an operating school and does not accept real student enrollments or schedule real campus visits.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white rounded-3xl p-6 border border-[#39263E]/12 shadow-soft space-y-3">
            <h2 class="font-serif text-xl font-bold text-[#39263E]">1. Zero Personal Data Collection</h2>
            <p class="text-xs text-[#45534C] leading-relaxed">
              All interactive wizards (Book a School Tour, Admission Inquiry Wizard, Contact Form, and Admin Dashboard) are pre-configured with synthetic demonstration profiles. Visitors are explicitly advised not to enter real children's names, dates of birth, medical info, or residential addresses.
            </p>
          </div>
          <div class="bg-white rounded-3xl p-6 border border-[#39263E]/12 shadow-soft space-y-3">
            <h2 class="font-serif text-xl font-bold text-[#39263E]">2. Browser-Local Persistence Only</h2>
            <p class="text-xs text-[#45534C] leading-relaxed">
              Any test submission or status change you perform is saved strictly in your own browser's <code>localStorage</code> under key <code>little_roots_demo_v1</code>. No data is transmitted to any external database or third-party server.
            </p>
            <button type="button" onclick="window.app.resetDemoData()" class="px-4 py-2 rounded-full bg-[#F8BD96] text-[#39263E] text-xs font-bold">
              Reset All Local Browser Data Now
            </button>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#39263E]/12 shadow-soft space-y-4">
          <h2 class="font-serif text-2xl font-bold text-[#39263E]">Official Brand Color System</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <div class="p-4 rounded-2xl bg-[#39263E] text-white">Deep Aubergine<br/>#39263E</div>
            <div class="p-4 rounded-2xl bg-[#174F43] text-white">Forest Emerald<br/>#174F43</div>
            <div class="p-4 rounded-2xl bg-[#D9EDB5] text-[#174F43]">Pistachio<br/>#D9EDB5</div>
            <div class="p-4 rounded-2xl bg-[#F8BD96] text-[#39263E]">Apricot<br/>#F8BD96</div>
            <div class="p-4 rounded-2xl bg-[#C6C9FF] text-[#39263E]">Soft Lavender<br/>#C6C9FF</div>
            <div class="p-4 rounded-2xl bg-[#FAFAF7] text-[#39263E] border border-[#39263E]/15">Soft Surface White<br/>#FAFAF7</div>
            <div class="p-4 rounded-2xl bg-[#F4F0E9] text-[#39263E] border border-[#39263E]/15">Warm Light Surface<br/>#F4F0E9</div>
            <div class="p-4 rounded-2xl bg-[#F6C866] text-[#39263E]">Golden Sunshine<br/>#F6C866</div>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.LR_PAGES.render404 = function(attemptedRoute) {
  return `
    <section class="py-20 bg-[#F4F0E9] text-center">
      <div class="max-w-xl mx-auto px-4 space-y-5">
        <div class="mx-auto w-20 h-20 rounded-full bg-[#D9EDB5] flex items-center justify-center">
          ${window.LR_SVGS.sproutIcon('#174F43')}
        </div>
        <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">404 · Page Not Found</span>
        <h1 class="font-serif text-4xl font-bold text-[#39263E]">This little path hasn't sprouted yet.</h1>
        <p class="text-sm text-[#45534C]">
          We couldn't find the route <code>${attemptedRoute || ''}</code>. Choose a destination below to continue exploring Little Roots Kindergarten:
        </p>
        <div class="flex flex-wrap justify-center gap-3 pt-2">
          <button type="button" onclick="window.app.navigate('/')" class="px-6 py-3 rounded-full bg-[#174F43] text-white text-xs font-bold hover:bg-[#39263E] transition-colors">Return to Homepage →</button>
          <button type="button" onclick="window.app.navigate('/programs')" class="px-6 py-3 rounded-full bg-white text-[#39263E] text-xs font-bold border border-[#39263E]/20 hover:bg-[#ECF6D8] transition-colors">Explore Programs</button>
          <button type="button" onclick="window.app.navigate('/book-a-tour')" class="px-6 py-3 rounded-full bg-[#F6C866] text-[#39263E] text-xs font-bold hover:bg-[#F8BD96] transition-colors">Book a School Tour</button>
        </div>
      </div>
    </section>
  `;
};
