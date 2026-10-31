window.LR_PAGES.renderBookTour = function(state) {
      const t = state.tourDraft;
      const step = t.step || 1;
      const stepsLabels = [
        "1. Program",
        "2. Visit Date",
        "3. Time Window",
        "4. Visitor Info",
        "5. Review",
        "6. Confirmation"
      ];

      let stepBody = "";
      if (step === 1) {
        stepBody = `
          <div class="space-y-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Step 1 of 5 · Program Interest</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E] mt-1">Which learning pathway would you like to explore?</h2>
              <p class="text-xs text-[#45534C] mt-1">Select a demonstration program focus for your simulated campus walkthrough.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              ${[
                { name: "Playgroup", sub: "Indicative Ages 2–3 · Gentle sensory beginnings", bg: "bg-[#ECF6D8]" },
                { name: "Nursery", sub: "Indicative Ages 3–4 · Play, discovery & friendship", bg: "bg-[#FDE8D8]" },
                { name: "Kindergarten", sub: "Indicative Ages 4–6 · Inquiry, literacy & math wonder", bg: "bg-[#EAEBFF]" },
                { name: "General Exploration", sub: "Explore all spaces, Atelier & Nature Garden", bg: "bg-[#FDF2D0]" }
              ].map(opt => `
                <button type="button" onclick="window.app.updateTourDraft('program', '${opt.name}')" class="p-5 rounded-3xl text-left border-2 transition-all ${t.program === opt.name ? 'border-[#174F43] ' + opt.bg + ' shadow-md' : 'border-[#39263E]/12 bg-white hover:bg-[#F4F0E9]'}">
                  <div class="flex items-center justify-between">
                    <span class="font-serif font-bold text-lg text-[#39263E]">${opt.name}</span>
                    <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${t.program === opt.name ? 'bg-[#174F43] text-white' : 'bg-[#F4F0E9] text-[#39263E]'}">${t.program === opt.name ? '✓' : ''}</span>
                  </div>
                  <p class="text-xs text-[#45534C] mt-1">${opt.sub}</p>
                </button>
              `).join('')}
            </div>
          </div>
        `;
      } else if (step === 2) {
        stepBody = `
          <div class="space-y-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Step 2 of 5 · Preferred Visit Date</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E] mt-1">Choose a preferred demonstration date</h2>
              <p class="text-xs text-[#45534C] mt-1">Past dates are disallowed. Select one of the quick future dates or pick any upcoming date.</p>
            </div>
            <div class="flex flex-wrap gap-2">
              ${['2026-11-08', '2026-11-12', '2026-11-18', '2026-11-25'].map(d => `
                <button type="button" onclick="window.app.updateTourDraft('visitDate', '${d}')" class="px-4 py-2 rounded-full text-xs font-bold transition-colors ${t.visitDate === d ? 'bg-[#174F43] text-white' : 'bg-[#F4F0E9] text-[#39263E] hover:bg-[#D9EDB5]'}">
                  Quick Date: ${d}
                </button>
              `).join('')}
            </div>
            <div class="max-w-sm">
              <label for="tour-date-input" class="block text-xs font-bold text-[#39263E] mb-1.5">Preferred Future Date (YYYY-MM-DD):</label>
              <input id="tour-date-input" type="date" min="2026-11-01" value="${t.visitDate}" onchange="window.app.updateTourDraft('visitDate', this.value)" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/25 bg-white text-sm font-semibold text-[#39263E]" />
              <p id="tour-date-error" class="text-xs text-red-700 font-semibold mt-1 hidden">Please choose a valid upcoming date (2026-11-01 or later).</p>
            </div>
          </div>
        `;
      } else if (step === 3) {
        stepBody = `
          <div class="space-y-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Step 3 of 5 · Preferred Time Window</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E] mt-1">Select a demonstration visit window</h2>
              <p class="text-xs text-[#45534C] mt-1">Note: These windows are illustrative for our concept prototype and do not represent live calendar availability.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              ${[
                { win: "9:30 AM – 10:30 AM (Morning Discovery Window)", desc: "See morning circle & Discovery Classroom rhythm" },
                { win: "10:45 AM – 11:45 AM (Garden & Atelier Window)", desc: "Explore the Nature Garden & Creative Atelier studio" },
                { win: "1:15 PM – 2:00 PM (Quiet Afternoon Walkthrough)", desc: "Calm afternoon conversation with a Lead Guide" }
              ].map(w => `
                <button type="button" onclick="window.app.updateTourDraft('visitWindow', '${w.win}')" class="p-4 rounded-3xl text-left border-2 transition-all ${t.visitWindow === w.win ? 'border-[#174F43] bg-[#ECF6D8] shadow-sm' : 'border-[#39263E]/12 bg-white hover:bg-[#F4F0E9]'}">
                  <p class="font-serif font-bold text-sm text-[#39263E]">${w.win}</p>
                  <p class="text-xs text-[#45534C] mt-1">${w.desc}</p>
                </button>
              `).join('')}
            </div>
          </div>
        `;
      } else if (step === 4) {
        stepBody = `
          <div class="space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Step 4 of 5 · Synthetic Visitor Information</span>
                <h2 class="font-serif text-2xl font-bold text-[#39263E] mt-1">Demonstration Visitor Profile</h2>
                <p class="text-xs text-[#45534C]">For privacy safety, please use synthetic or prefilled test details rather than actual family personal data.</p>
              </div>
              <button type="button" onclick="window.app.prefillSyntheticTour()" class="px-4 py-2 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold hover:bg-[#174F43] hover:text-white transition-colors self-start">
                ✨ Prefill Synthetic Visitor
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="tour-visitor-label" class="block text-xs font-bold text-[#39263E] mb-1">Synthetic Visitor Label</label>
                <input id="tour-visitor-label" type="text" value="${t.visitorLabel}" oninput="window.app.updateTourDraftSilent('visitorLabel', this.value)" placeholder="e.g., Synthetic Visitor — Zafar Household (Demo)" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/20 bg-white text-sm" />
              </div>
              <div>
                <label for="tour-visitor-contact" class="block text-xs font-bold text-[#39263E] mb-1">Synthetic Demo Contact (.invalid)</label>
                <input id="tour-visitor-contact" type="text" value="${t.contactSynthetic}" oninput="window.app.updateTourDraftSilent('contactSynthetic', this.value)" placeholder="e.g., demo.visitor@example.invalid" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/20 bg-white text-sm" />
              </div>
              <div class="sm:col-span-2">
                <label for="tour-visitor-notes" class="block text-xs font-bold text-[#39263E] mb-1">Questions or Spaces of Interest (Optional)</label>
                <textarea id="tour-visitor-notes" rows="2" oninput="window.app.updateTourDraftSilent('notes', this.value)" class="w-full px-4 py-2.5 rounded-2xl border border-[#39263E]/20 bg-white text-sm">${t.notes}</textarea>
              </div>
            </div>
          </div>
        `;
      } else if (step === 5) {
        stepBody = `
          <div class="space-y-5">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Step 5 of 5 · Review Summary</span>
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E] mt-1">Review Your Simulated Tour Request</h2>
              <p class="text-xs text-[#45534C] mt-1">Confirm the demonstration details below to save this tour request to your browser's local dashboard.</p>
            </div>
            <div class="bg-[#F4F0E9] rounded-3xl p-6 space-y-3 text-sm border border-[#39263E]/10">
              <div class="flex justify-between py-1.5 border-b border-[#39263E]/10"><span class="text-[#45534C]">Program Interest:</span><strong class="text-[#39263E]">${t.program}</strong></div>
              <div class="flex justify-between py-1.5 border-b border-[#39263E]/10"><span class="text-[#45534C]">Preferred Date:</span><strong class="text-[#39263E]">${t.visitDate}</strong></div>
              <div class="flex justify-between py-1.5 border-b border-[#39263E]/10"><span class="text-[#45534C]">Time Window:</span><strong class="text-[#39263E]">${t.visitWindow}</strong></div>
              <div class="flex justify-between py-1.5 border-b border-[#39263E]/10"><span class="text-[#45534C]">Synthetic Visitor:</span><strong class="text-[#39263E]">${t.visitorLabel}</strong></div>
              <div class="flex justify-between py-1.5"><span class="text-[#45534C]">Notes:</span><strong class="text-[#39263E]">${t.notes || 'None'}</strong></div>
            </div>
          </div>
        `;
      } else {
        stepBody = `
          <div class="text-center space-y-5 py-4">
            <div class="w-16 h-16 rounded-full bg-[#D9EDB5] text-[#174F43] flex items-center justify-center mx-auto text-2xl font-bold shadow-sm">✓</div>
            <span class="px-3.5 py-1 rounded-full bg-[#FDE8D8] text-[#39263E] text-xs font-extrabold uppercase tracking-wider">
              SIMULATED TOUR REQUEST SAVED · NOT A REAL SCHOOL APPOINTMENT
            </span>
            <h2 class="font-serif text-3xl font-bold text-[#39263E]">Demonstration Tour Request Complete!</h2>
            <p class="text-sm text-[#45534C] max-w-lg mx-auto">
              Reference ID: <strong class="text-[#174F43]">${t.lastSubmittedId || 'LR-TOUR-DEMO'}</strong>. Your simulated visit request for <strong>${t.program}</strong> on <strong>${t.visitDate}</strong> has been stored in your browser's local demo database.
            </p>
            <div class="flex flex-wrap justify-center gap-3 pt-2">
              <button type="button" onclick="window.app.copyTourSummary()" class="px-5 py-2.5 rounded-full bg-[#F4F0E9] hover:bg-[#D9EDB5] text-[#39263E] text-xs font-bold border border-[#39263E]/20 transition-colors">
                📋 Copy Summary to Clipboard
              </button>
              <button type="button" onclick="window.app.navigate('/admin')" class="px-5 py-2.5 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white text-xs font-bold transition-colors">
                ★ View Request in Local Admin Dashboard →
              </button>
              <button type="button" onclick="window.app.navigate('/admissions')" class="px-5 py-2.5 rounded-full bg-white text-[#39263E] text-xs font-bold border border-[#39263E]/20">
                Explore Admissions
              </button>
              <button type="button" onclick="window.app.navigate('/')" class="px-5 py-2.5 rounded-full bg-white text-[#39263E] text-xs font-bold border border-[#39263E]/20">
                Return to Homepage
              </button>
            </div>
          </div>
        `;
      }

      return `
        <section class="py-12 lg:py-16 bg-[#F4F0E9] min-h-[75vh]">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">GUIDED SCHOOL TOUR REQUEST (SIMULATED)</span>
                <h1 class="font-serif text-3xl sm:text-4xl font-bold text-[#39263E]">Experience Little Roots</h1>
              </div>
              <span class="px-3 py-1 rounded-full bg-white text-xs font-bold text-[#39263E] border border-[#39263E]/15">
                Demo Mode · Local Storage Persistence
              </span>
            </div>

            <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
              ${stepsLabels.map((lbl, idx) => {
                const sNum = idx + 1;
                const active = sNum === step;
                const done = sNum < step;
                return `
                  <div class="px-3 py-2 rounded-2xl text-[11px] font-bold text-center border ${active ? 'bg-[#39263E] text-white border-[#39263E]' : done ? 'bg-[#D9EDB5] text-[#174F43] border-[#84A446]/30' : 'bg-white/70 text-[#45534C] border-[#39263E]/10'}">
                    ${lbl}
                  </div>
                `;
              }).join('')}
            </div>

            <div class="bg-white rounded-[36px] p-6 sm:p-10 border border-[#39263E]/12 shadow-editorial space-y-6">
              ${stepBody}

              ${step < 6 ? `
                <div class="pt-6 border-t border-[#39263E]/10 flex items-center justify-between">
                  <button type="button" onclick="window.app.stepTourWizard(-1)" ${step === 1 ? 'disabled' : ''} class="px-5 py-2.5 rounded-full text-xs font-bold ${step === 1 ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#F4F0E9] hover:bg-[#D9EDB5] text-[#39263E]'}">
                    ← Back
                  </button>
                  ${step < 5 ? `
                    <button type="button" onclick="window.app.stepTourWizard(1)" class="px-7 py-3 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors">
                      Continue to Step ${step + 1} →
                    </button>
                  ` : `
                    <button type="button" onclick="window.app.submitTourRequest()" class="px-7 py-3 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] text-xs sm:text-sm font-extrabold shadow-sm transition-colors">
                      Submit Simulated Tour Request ✓
                    </button>
                  `}
                </div>
              ` : ''}
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderApplyWizard = function(state) {
      const d = state.inquiryDraft;
      const step = d.step || 1;
      const allInterests = [
        "Nature Exploration", "Creative Atelier", "Storytelling & Books",
        "Music & Movement", "Wooden Block Architecture", "Sensory Discovery",
        "Social Friendship & Kindness", "Emergent Literacy & Math"
      ];

      let body = "";
      if (step === 1) {
        body = `
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Stage 1 of 7 · Welcome &amp; Program Interest</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">Begin a Demonstration Admission Inquiry</h2>
            <p class="text-xs text-[#45534C]">Your progress is automatically saved as a draft in your browser. Select a learning program below:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              ${['Playgroup', 'Nursery', 'Kindergarten', 'Enrichment (Nature & Atelier)'].map(p => `
                <button type="button" onclick="window.app.updateInquiryDraft('program', '${p}')" class="p-4 rounded-2xl text-left border-2 transition-all ${d.program === p ? 'border-[#174F43] bg-[#ECF6D8] font-bold' : 'border-[#39263E]/12 bg-white hover:bg-[#F4F0E9]'}">
                  <div class="flex items-center justify-between">
                    <span class="font-serif text-lg text-[#39263E]">${p}</span>
                    <span>${d.program === p ? '✓' : '→'}</span>
                  </div>
                </button>
              `).join('')}
            </div>
          </div>
        `;
      } else if (step === 2) {
        body = `
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Stage 2 of 7 · Child Age Band</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">Select an indicative age band</h2>
            <p class="text-xs text-[#45534C]">To protect privacy in this public demonstration, we never collect a child's exact date of birth or full legal name.</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              ${['2–3 years (Playgroup)', '3–4 years (Nursery)', '4–6 years (Kindergarten)'].map(band => `
                <button type="button" onclick="window.app.updateInquiryDraft('childAgeBand', '${band}')" class="p-4 rounded-2xl text-left border-2 transition-all ${d.childAgeBand === band ? 'border-[#174F43] bg-[#ECF6D8] font-bold' : 'border-[#39263E]/12 bg-white hover:bg-[#F4F0E9]'}">
                  <span class="font-serif text-base text-[#39263E]">${band}</span>
                </button>
              `).join('')}
            </div>
          </div>
        `;
      } else if (step === 3) {
        body = `
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Stage 3 of 7 · Preferred Academic Session</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">When are you exploring enrollment for?</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              ${['Autumn Term (Concept Session)', 'Spring Term (Concept Session)', 'Future Year Exploration'].map(sess => `
                <button type="button" onclick="window.app.updateInquiryDraft('session', '${sess}')" class="p-4 rounded-2xl text-left border-2 transition-all ${d.session === sess ? 'border-[#174F43] bg-[#EAEBFF] font-bold' : 'border-[#39263E]/12 bg-white hover:bg-[#F4F0E9]'}">
                  <span class="font-serif text-base text-[#39263E]">${sess}</span>
                </button>
              `).join('')}
            </div>
          </div>
        `;
      } else if (step === 4) {
        body = `
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Stage 4 of 7 · Child's Learning Interests</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">What sparks curiosity in your child?</h2>
            <p class="text-xs text-[#45534C]">Select one or more play and discovery areas:</p>
            <div class="flex flex-wrap gap-2.5 pt-2">
              ${allInterests.map(item => {
                const active = (d.interests || []).includes(item);
                return `
                  <button type="button" onclick="window.app.toggleInquiryInterest('${item}')" class="px-4 py-2.5 rounded-full text-xs font-bold border transition-all ${active ? 'bg-[#174F43] text-white border-[#174F43]' : 'bg-[#F4F0E9] text-[#39263E] border-[#39263E]/15 hover:bg-[#D9EDB5]'}">
                    ${active ? '✓ ' : '+ '}${item}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        `;
      } else if (step === 5) {
        body = `
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Stage 5 of 7 · Parent Orientation Preferences</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">How would you prefer to connect?</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              ${[
                'In-Person Morning Orientation (Simulated)',
                '1-on-1 Educator Welcome Call (Simulated)',
                'Small-Group Family Workshop (Simulated)'
              ].map(pref => `
                <button type="button" onclick="window.app.updateInquiryDraft('orientationPref', '${pref}')" class="p-4 rounded-2xl text-left border-2 transition-all ${d.orientationPref === pref ? 'border-[#174F43] bg-[#FDE8D8] font-bold' : 'border-[#39263E]/12 bg-white hover:bg-[#F4F0E9]'}">
                  <span class="font-serif text-sm text-[#39263E]">${pref}</span>
                </button>
              `).join('')}
            </div>
          </div>
        `;
      } else if (step === 6) {
        body = `
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Stage 6 of 7 · Optional Synthetic Contact Details</span>
                <h2 class="font-serif text-2xl font-bold text-[#39263E]">Synthetic Demonstration Family Profile</h2>
                <p class="text-xs text-[#45534C]">Do not enter real family addresses, phone numbers, or sensitive child information.</p>
              </div>
              <button type="button" onclick="window.app.prefillSyntheticInquiry()" class="px-4 py-2 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold hover:bg-[#174F43] hover:text-white transition-colors self-start">
                ✨ Prefill Synthetic Family
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label for="inq-parent-label" class="block text-xs font-bold text-[#39263E] mb-1">Synthetic Family Identifier</label>
                <input id="inq-parent-label" type="text" value="${d.parentLabel}" oninput="window.app.updateInquiryDraftSilent('parentLabel', this.value)" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/20 bg-white text-sm" />
              </div>
              <div>
                <label for="inq-contact-email" class="block text-xs font-bold text-[#39263E] mb-1">Synthetic Email (.invalid)</label>
                <input id="inq-contact-email" type="text" value="${d.contactSynthetic}" oninput="window.app.updateInquiryDraftSilent('contactSynthetic', this.value)" class="w-full px-4 py-3 rounded-2xl border border-[#39263E]/20 bg-white text-sm" />
              </div>
              <div class="sm:col-span-2">
                <label for="inq-notes" class="block text-xs font-bold text-[#39263E] mb-1">Optional Demonstration Notes</label>
                <textarea id="inq-notes" rows="2" oninput="window.app.updateInquiryDraftSilent('notes', this.value)" class="w-full px-4 py-2.5 rounded-2xl border border-[#39263E]/20 bg-white text-sm">${d.notes}</textarea>
              </div>
            </div>
          </div>
        `;
      } else if (step === 7) {
        body = `
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Stage 7 of 7 · Review Your Inquiry</span>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">Review Demonstration Answers</h2>
            <div class="bg-[#F4F0E9] rounded-3xl p-6 space-y-2.5 text-sm border border-[#39263E]/10">
              <div class="flex justify-between items-center py-1 border-b border-[#39263E]/10">
                <span>1. Program Interest: <strong>${d.program}</strong></span>
                <button type="button" onclick="window.app.jumpInquiryStep(1)" class="text-xs font-bold text-[#174F43] underline">Edit</button>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#39263E]/10">
                <span>2. Child Age Band: <strong>${d.childAgeBand}</strong></span>
                <button type="button" onclick="window.app.jumpInquiryStep(2)" class="text-xs font-bold text-[#174F43] underline">Edit</button>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#39263E]/10">
                <span>3. Preferred Session: <strong>${d.session}</strong></span>
                <button type="button" onclick="window.app.jumpInquiryStep(3)" class="text-xs font-bold text-[#174F43] underline">Edit</button>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#39263E]/10">
                <span>4. Learning Interests: <strong>${(d.interests || []).join(', ') || 'None selected'}</strong></span>
                <button type="button" onclick="window.app.jumpInquiryStep(4)" class="text-xs font-bold text-[#174F43] underline">Edit</button>
              </div>
              <div class="flex justify-between items-center py-1 border-b border-[#39263E]/10">
                <span>5. Orientation Preference: <strong>${d.orientationPref}</strong></span>
                <button type="button" onclick="window.app.jumpInquiryStep(5)" class="text-xs font-bold text-[#174F43] underline">Edit</button>
              </div>
              <div class="flex justify-between items-center py-1">
                <span>6. Synthetic Family Profile: <strong>${d.parentLabel} (${d.contactSynthetic})</strong></span>
                <button type="button" onclick="window.app.jumpInquiryStep(6)" class="text-xs font-bold text-[#174F43] underline">Edit</button>
              </div>
            </div>
          </div>
        `;
      } else {
        body = `
          <div class="text-center space-y-5 py-4">
            <div class="w-16 h-16 rounded-full bg-[#D9EDB5] text-[#174F43] flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
            <span class="px-3.5 py-1 rounded-full bg-[#ECF6D8] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
              DEMONSTRATION SUBMISSION COMPLETE
            </span>
            <h2 class="font-serif text-3xl font-bold text-[#39263E]">Simulated Admission Inquiry Recorded</h2>
            <p class="text-sm text-[#45534C] max-w-lg mx-auto">
              Demo Reference Number: <strong class="text-[#174F43]">${d.lastSubmittedId || 'LR-INQ-DEMO'}</strong>. Because Little Roots is a fictional concept showcase, no real school application has been filed—your synthetic inquiry is now live inside the browser-local Admin Dashboard!
            </p>
            <div class="flex flex-wrap justify-center gap-3 pt-2">
              <button type="button" onclick="window.app.navigate('/admin')" class="px-6 py-3 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white text-xs sm:text-sm font-bold transition-colors">
                ★ Inspect in Demonstration Admin Dashboard →
              </button>
              <button type="button" onclick="window.app.resetInquiryWizard()" class="px-5 py-3 rounded-full bg-[#F4F0E9] hover:bg-[#D9EDB5] text-[#39263E] text-xs font-bold">
                Start Another Demo Inquiry
              </button>
            </div>
          </div>
        `;
      }

      return `
        <section class="py-12 lg:py-16 bg-[#FAFAF7] min-h-[75vh]">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">8-STAGE ADMISSION INQUIRY WIZARD</span>
                <h1 class="font-serif text-3xl sm:text-4xl font-bold text-[#39263E]">Little Roots Admission Inquiry</h1>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full bg-[#ECF6D8] text-[#174F43] text-xs font-bold">✓ Draft Autosaved Locally</span>
                <button type="button" onclick="window.app.resetInquiryWizard()" class="text-xs text-[#45534C] underline hover:text-[#39263E]">Reset Draft</button>
              </div>
            </div>

            <div class="w-full bg-[#F4F0E9] h-2.5 rounded-full overflow-hidden">
              <div class="bg-[#174F43] h-full transition-all duration-300" style="width: ${Math.min(100, Math.round((step / 8) * 100))}%"></div>
            </div>

            <div class="bg-white rounded-[36px] p-6 sm:p-10 border border-[#39263E]/12 shadow-editorial space-y-6">
              ${body}

              ${step < 8 ? `
                <div class="pt-6 border-t border-[#39263E]/10 flex items-center justify-between">
                  <button type="button" onclick="window.app.stepInquiryWizard(-1)" ${step === 1 ? 'disabled' : ''} class="px-5 py-2.5 rounded-full text-xs font-bold ${step === 1 ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400' : 'bg-[#F4F0E9] hover:bg-[#D9EDB5] text-[#39263E]'}">
                    ← Previous Step
                  </button>
                  ${step < 7 ? `
                    <button type="button" onclick="window.app.stepInquiryWizard(1)" class="px-7 py-3 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors">
                      Save &amp; Continue (Step ${step + 1} of 7) →
                    </button>
                  ` : `
                    <button type="button" onclick="window.app.submitInquiryWizard()" class="px-7 py-3 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] text-xs sm:text-sm font-extrabold shadow-sm transition-colors">
                      Submit Demonstration Inquiry ✓
                    </button>
                  `}
                </div>
              ` : ''}
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderAdminDashboard = function(state) {
      const db = state.demoDb;
      const search = (state.adminSearch || '').toLowerCase();
      const progFilter = state.adminProgramFilter || 'All';
      const statusFilter = state.adminStatusFilter || 'All';

      const allStatuses = [
        "New Inquiry", "Tour Requested", "Tour Completed",
        "Application Started", "Under Review", "Completed"
      ];

      const filteredInquiries = db.inquiries.filter(item => {
        const matchesSearch = !search ||
          item.id.toLowerCase().includes(search) ||
          item.parentLabel.toLowerCase().includes(search) ||
          item.program.toLowerCase().includes(search);
        const matchesProg = progFilter === 'All' || item.program === progFilter;
        const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
        return matchesSearch && matchesProg && matchesStatus;
      });

      const newCount = db.inquiries.filter(i => i.status === 'New Inquiry').length;
      const tourCount = db.tours.length;
      const inProgressCount = db.inquiries.filter(i => ['Application Started', 'Under Review', 'Tour Completed'].includes(i.status)).length;
      const openTasksCount = db.tasks.filter(t => !t.done).length;

      const progCounts = { Playgroup: 0, Nursery: 0, Kindergarten: 0, Enrichment: 0 };
      db.inquiries.forEach(i => {
        if (i.program.includes('Playgroup')) progCounts.Playgroup++;
        else if (i.program.includes('Nursery')) progCounts.Nursery++;
        else if (i.program.includes('Kindergarten')) progCounts.Kindergarten++;
        else progCounts.Enrichment++;
      });
      const maxProg = Math.max(1, ...Object.values(progCounts));

      return `
        <section class="py-10 bg-[#F4F0E9] min-h-screen">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div class="bg-[#39263E] text-white rounded-3xl p-6 sm:p-8 shadow-editorial flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div class="space-y-2 max-w-2xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
                  <span>★ DEMONSTRATION ADMISSIONS OPERATIONS DASHBOARD</span>
                </div>
                <h1 class="font-serif text-3xl sm:text-4xl font-bold">Little Roots Admissions Studio (Demo)</h1>
                <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
                  <strong>Browser-Local Persistence Disclosure:</strong> All records below are synthetic demonstration records stored in your browser's <code>localStorage</code>. They do not synchronize across devices and do not represent real students.
                </p>
              </div>
              <div class="flex flex-wrap gap-2.5">
                <button type="button" onclick="window.app.addSyntheticDemoRecord()" class="px-4 py-2.5 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] text-xs font-extrabold transition-colors">
                  + Add Synthetic Inquiry
                </button>
                <button type="button" onclick="window.app.restoreSampleRecords()" class="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-colors">
                  Restore Sample Records
                </button>
                <button type="button" onclick="window.app.clearLocalTestSubmissions()" class="px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-colors">
                  Clear Local Test Submissions
                </button>
                <button type="button" onclick="window.app.resetDemoData()" class="px-4 py-2.5 rounded-full bg-[#F8BD96] hover:bg-white text-[#39263E] text-xs font-extrabold transition-colors">
                  Reset Demo Data
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-3xl p-5 border border-[#39263E]/10 shadow-soft">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-[#45534C]">New Inquiries</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ECF6D8] text-[#174F43]">DEMO METRIC</span>
                </div>
                <p class="font-serif text-4xl font-bold text-[#39263E] mt-2">${newCount}</p>
                <p class="text-xs text-[#174F43] mt-1">Out of ${db.inquiries.length} total demo inquiries</p>
              </div>

              <div class="bg-white rounded-3xl p-5 border border-[#39263E]/10 shadow-soft">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-[#45534C]">Tour Requests</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FDE8D8] text-[#39263E]">DEMO METRIC</span>
                </div>
                <p class="font-serif text-4xl font-bold text-[#39263E] mt-2">${tourCount}</p>
                <p class="text-xs text-[#45534C] mt-1">Simulated campus visit requests</p>
              </div>

              <div class="bg-white rounded-3xl p-5 border border-[#39263E]/10 shadow-soft">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-[#45534C]">In-Progress Applications</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAEBFF] text-[#39263E]">DEMO METRIC</span>
                </div>
                <p class="font-serif text-4xl font-bold text-[#39263E] mt-2">${inProgressCount}</p>
                <p class="text-xs text-[#45534C] mt-1">Active in admissions pipeline</p>
              </div>

              <div class="bg-white rounded-3xl p-5 border border-[#39263E]/10 shadow-soft">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-[#45534C]">Follow-Up Tasks</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FDF2D0] text-[#39263E]">DEMO METRIC</span>
                </div>
                <p class="font-serif text-4xl font-bold text-[#39263E] mt-2">${openTasksCount}</p>
                <p class="text-xs text-[#45534C] mt-1">Pending sample coordinator tasks</p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#39263E]/12 shadow-soft space-y-5">
              <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">INQUIRY MANAGEMENT &amp; PIPELINE</span>
                  <h2 class="font-serif text-2xl font-bold text-[#39263E]">Synthetic Admission Inquiries (${filteredInquiries.length})</h2>
                </div>
                <div class="flex flex-wrap items-center gap-2.5">
                  <input type="search" aria-label="Search demo inquiries" placeholder="Search ref #, family, program..." value="${state.adminSearch || ''}" oninput="window.app.setAdminSearch(this.value)" class="px-4 py-2 rounded-full border border-[#39263E]/20 text-xs bg-[#FAFAF7] w-56" />
                  <select aria-label="Filter by program" onchange="window.app.setAdminProgramFilter(this.value)" class="px-3.5 py-2 rounded-full border border-[#39263E]/20 text-xs bg-[#FAFAF7] font-semibold">
                    ${['All', 'Playgroup', 'Nursery', 'Kindergarten', 'Enrichment (Nature & Atelier)'].map(p => `<option value="${p}" ${progFilter===p?'selected':''}>Program: ${p}</option>`).join('')}
                  </select>
                  <select aria-label="Filter by status" onchange="window.app.setAdminStatusFilter(this.value)" class="px-3.5 py-2 rounded-full border border-[#39263E]/20 text-xs bg-[#FAFAF7] font-semibold">
                    <option value="All" ${statusFilter==='All'?'selected':''}>All Pipeline Statuses</option>
                    ${allStatuses.map(st => `<option value="${st}" ${statusFilter===st?'selected':''}>Status: ${st}</option>`).join('')}
                  </select>
                </div>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse min-w-[780px] text-xs sm:text-sm">
                  <thead>
                    <tr class="bg-[#F4F0E9] text-[#39263E] text-xs uppercase tracking-wider">
                      <th class="p-3.5 rounded-l-2xl">Demo Ref #</th>
                      <th class="p-3.5">Synthetic Family</th>
                      <th class="p-3.5">Program</th>
                      <th class="p-3.5">Inquiry Date</th>
                      <th class="p-3.5">Preferred Session</th>
                      <th class="p-3.5">Pipeline Status Control</th>
                      <th class="p-3.5 rounded-r-2xl text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#39263E]/10">
                    ${filteredInquiries.length === 0 ? `
                      <tr><td colspan="7" class="p-8 text-center text-[#45534C]">No matching synthetic records found. Try clearing filters or clicking "Restore Sample Records".</td></tr>
                    ` : filteredInquiries.map(item => `
                      <tr class="hover:bg-[#FAFAF7] transition-colors">
                        <td class="p-3.5 font-mono font-bold text-xs text-[#174F43]">${item.id}</td>
                        <td class="p-3.5">
                          <div class="font-bold text-[#39263E]">${item.parentLabel}</div>
                          <div class="text-[11px] text-[#45534C]">${item.childAgeBand}</div>
                        </td>
                        <td class="p-3.5"><span class="px-2.5 py-1 rounded-full bg-[#ECF6D8] text-[#174F43] text-xs font-bold">${item.program}</span></td>
                        <td class="p-3.5 text-xs">${item.submittedDate}</td>
                        <td class="p-3.5 text-xs">${item.session}</td>
                        <td class="p-3.5">
                          <select aria-label="Update status for ${item.id}" onchange="window.app.updateInquiryStatus('${item.id}', this.value)" class="px-3 py-1.5 rounded-full text-xs font-bold border border-[#39263E]/20 bg-white text-[#39263E]">
                            ${allStatuses.map(st => `<option value="${st}" ${item.status === st ? 'selected' : ''}>${st}</option>`).join('')}
                          </select>
                        </td>
                        <td class="p-3.5 text-right">
                          <button type="button" onclick="window.app.inspectInquiry('${item.id}')" class="px-3 py-1.5 rounded-full bg-[#F4F0E9] hover:bg-[#D9EDB5] text-[#39263E] text-xs font-bold">
                            View
                          </button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div class="lg:col-span-7 bg-white rounded-3xl p-6 border border-[#39263E]/12 shadow-soft space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">SIMULATED SCHOOL VISITS</span>
                    <h3 class="font-serif text-xl font-bold text-[#39263E]">Demonstration Tour Requests (${db.tours.length})</h3>
                  </div>
                  <button type="button" onclick="window.app.navigate('/book-a-tour')" class="text-xs font-bold text-[#174F43] underline">+ New Tour Request</button>
                </div>
                <div class="space-y-3">
                  ${db.tours.length === 0 ? `<p class="text-xs text-[#45534C] py-4">No simulated tour requests stored.</p>` : db.tours.map(tr => `
                    <div class="p-4 rounded-2xl bg-[#FAFAF7] border border-[#39263E]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div class="space-y-0.5">
                        <div class="flex items-center gap-2">
                          <span class="font-mono text-xs font-bold text-[#174F43]">${tr.id}</span>
                          <span class="px-2 py-0.5 rounded-full bg-[#FDE8D8] text-[#39263E] text-[11px] font-bold">${tr.program}</span>
                          <span class="px-2 py-0.5 rounded-full bg-[#ECF6D8] text-[#174F43] text-[11px] font-bold">${tr.status}</span>
                        </div>
                        <p class="font-bold text-sm text-[#39263E]">${tr.visitorLabel}</p>
                        <p class="text-xs text-[#45534C]">${tr.visitDate} · ${tr.visitWindow}</p>
                      </div>
                      <div class="flex items-center gap-2 self-start sm:self-center">
                        <button type="button" onclick="window.app.cycleTourStatus('${tr.id}')" class="px-3 py-1.5 rounded-full bg-[#174F43] text-white text-xs font-bold hover:bg-[#39263E]">
                          Advance Status
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="lg:col-span-5 space-y-6">
                <div class="bg-white rounded-3xl p-6 border border-[#39263E]/12 shadow-soft space-y-4">
                  <div class="flex items-center justify-between">
                    <h3 class="font-serif text-xl font-bold text-[#39263E]">Sample Program Interest</h3>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F4F0E9] text-[#39263E]">DEMO CHART</span>
                  </div>
                  <div class="space-y-3">
                    ${Object.entries(progCounts).map(([name, count]) => `
                      <div class="space-y-1">
                        <div class="flex justify-between text-xs font-bold text-[#39263E]">
                          <span>${name}</span>
                          <span>${count} demo record(s)</span>
                        </div>
                        <div class="w-full h-2.5 bg-[#F4F0E9] rounded-full overflow-hidden">
                          <div class="h-full bg-[#174F43] rounded-full transition-all duration-300" style="width: ${Math.round((count / maxProg) * 100)}%"></div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div class="bg-white rounded-3xl p-6 border border-[#39263E]/12 shadow-soft space-y-3">
                  <h3 class="font-serif text-xl font-bold text-[#39263E]">Sample Follow-Up Checklist</h3>
                  <div class="space-y-2">
                    ${db.tasks.map(task => `
                      <label class="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAFAF7] cursor-pointer text-xs">
                        <input type="checkbox" ${task.done ? 'checked' : ''} onchange="window.app.toggleAdminTask('${task.id}')" class="mt-0.5 rounded text-[#174F43]" />
                        <span class="${task.done ? 'line-through opacity-60' : 'font-medium text-[#39263E]'}">${task.text}</span>
                      </label>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    };