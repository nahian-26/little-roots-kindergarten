window.LR_PAGES.renderDailyRoutine = function(state) {
      const idx = state.routineStepIndex || 0;
      const current = window.LR_DATA.dailyRoutine[idx] || window.LR_DATA.dailyRoutine[0];
      const prevIdx = (idx - 1 + window.LR_DATA.dailyRoutine.length) % window.LR_DATA.dailyRoutine.length;
      const nextIdx = (idx + 1) % window.LR_DATA.dailyRoutine.length;

      return `
        <section class="bg-[#F4F0E9] py-12 lg:py-16 border-b border-[#39263E]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div class="max-w-2xl space-y-2">
                <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
                  <span>INTERACTIVE DAILY RHYTHM</span>
                </span>
                <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E]">
                  Play. Explore. <span class="italic font-normal">Create. Belong.</span>
                </h1>
                <p class="text-sm sm:text-base text-[#45534C]">
                  Our day follows a gentle, predictable breathing rhythm—balancing energetic outdoor exploration and collaborative studio making with quiet storytelling and reflection.
                </p>
              </div>
              <div class="p-3.5 rounded-2xl bg-white border border-[#39263E]/10 text-xs text-[#45534C] max-w-xs">
                <strong class="text-[#174F43] block">Illustrative Schedule Note:</strong>
                This timeline represents a sample conceptual morning-to-afternoon flow and may vary by age group and program.
              </div>
            </div>

            <div class="hidden md:block bg-white rounded-3xl p-5 border border-[#39263E]/12 shadow-soft">
              <div class="grid grid-cols-8 gap-2" role="tablist" aria-label="Daily Routine Stages">
                ${window.LR_DATA.dailyRoutine.map((stage, i) => {
                  const active = i === idx;
                  return `
                    <button type="button" role="tab" aria-selected="${active}" onclick="window.app.setRoutineStep(${i})" class="p-3 rounded-2xl text-left transition-all flex flex-col justify-between ${active ? 'bg-[#174F43] text-white shadow-md scale-[1.02]' : 'bg-[#FAFAF7] text-[#39263E] hover:bg-[#ECF6D8]'}">
                      <span class="text-[11px] font-extrabold ${active ? 'text-[#D9EDB5]' : 'text-[#174F43]'}">${stage.time}</span>
                      <span class="font-serif font-bold text-xs leading-snug mt-1">${stage.title}</span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="bg-white rounded-[36px] p-6 sm:p-10 border border-[#39263E]/12 shadow-editorial">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-6 space-y-5">
                  <div class="flex flex-wrap items-center gap-2.5">
                    <span class="px-3.5 py-1 rounded-full bg-[#174F43] text-white text-xs font-extrabold">
                      Stage ${current.step} of 8 · ${current.time}
                    </span>
                    <span class="px-3.5 py-1 rounded-full ${current.color} text-xs font-bold">
                      ${current.area}
                    </span>
                  </div>

                  <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#39263E]">
                    ${current.title}
                  </h2>

                  <p class="text-base text-[#45534C] leading-relaxed">
                    ${current.description}
                  </p>

                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div class="p-3.5 rounded-2xl bg-[#ECF6D8]/70 border border-[#174F43]/10">
                      <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#174F43]">Playgroup (2–3y)</span>
                      <p class="text-xs text-[#39263E] mt-1">${current.playgroupNote}</p>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-[#FDE8D8]/70 border border-[#39263E]/10">
                      <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#39263E]">Nursery (3–4y)</span>
                      <p class="text-xs text-[#39263E] mt-1">${current.nurseryNote}</p>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-[#EAEBFF]/70 border border-[#39263E]/10">
                      <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#39263E]">Kindergarten (4–6y)</span>
                      <p class="text-xs text-[#39263E] mt-1">${current.kindergartenNote}</p>
                    </div>
                  </div>

                  <div class="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#39263E]/10">
                    <div class="flex items-center gap-2">
                      <button type="button" onclick="window.app.setRoutineStep(${prevIdx})" class="px-4 py-2.5 rounded-full bg-[#F4F0E9] hover:bg-[#D9EDB5] text-[#39263E] text-xs font-bold transition-colors">
                        ← Previous (${window.LR_DATA.dailyRoutine[prevIdx].time})
                      </button>
                      <button type="button" onclick="window.app.setRoutineStep(${nextIdx})" class="px-5 py-2.5 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white text-xs font-bold transition-colors">
                        Next Stage (${window.LR_DATA.dailyRoutine[nextIdx].time}) →
                      </button>
                    </div>
                    <button type="button" onclick="window.app.navigate('/book-a-tour')" class="text-xs font-bold text-[#174F43] underline">
                      Experience this rhythm on a Demo Tour →
                    </button>
                  </div>
                </div>

                <div class="lg:col-span-6">
                  <div class="mask-organic-hero overflow-hidden border-4 border-[#F4F0E9] shadow-editorial bg-[#F4F0E9]">
                    <img src="${current.image}" alt="${current.title}" class="w-full h-72 sm:h-96 object-cover editorial-photo" />
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4 pt-4">
              <h3 class="font-serif text-2xl font-bold text-[#39263E]">Complete Daily Timeline Overview</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                ${window.LR_DATA.dailyRoutine.map((s, i) => `
                  <div onclick="window.app.setRoutineStep(${i})" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.app.setRoutineStep(${i});}" class="cursor-pointer rounded-3xl p-5 border transition-all ${i === idx ? 'bg-[#39263E] text-white border-[#39263E] shadow-editorial' : 'bg-white text-[#39263E] border-[#39263E]/10 hover:border-[#174F43]'}">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-extrabold ${i === idx ? 'text-[#F6C866]' : 'text-[#174F43]'}">${s.time}</span>
                      <span class="text-[11px] opacity-75">Stage 0${s.step}</span>
                    </div>
                    <h4 class="font-serif font-bold text-lg mt-1">${s.title}</h4>
                    <p class="text-xs mt-1 ${i === idx ? 'text-white/85' : 'text-[#45534C]'}">${s.shortDesc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderCampusExplorer = function(state) {
      const activeSpaceId = state.activeCampusSpace || 'classroom';
      const spaceIdx = window.LR_DATA.campusSpaces.findIndex(s => s.id === activeSpaceId);
      const space = window.LR_DATA.campusSpaces[spaceIdx >= 0 ? spaceIdx : 0];
      const nextSpace = window.LR_DATA.campusSpaces[(spaceIdx + 1) % window.LR_DATA.campusSpaces.length];
      const activePhoto = space.gallery[state.campusPhotoIdx || 0] || space.heroImage;

      return `
        <section class="bg-[#F4F0E9] py-12 lg:py-16 border-b border-[#39263E]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div class="max-w-2xl space-y-2">
                <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
                  <span>IMMERSIVE CAMPUS EXPLORER</span>
                </span>
                <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E]">
                  Spaces made for <span class="italic font-normal">curious minds.</span>
                </h1>
                <p class="text-sm sm:text-base text-[#45534C]">
                  Select any of our six conceptual learning studios below—or click a room on the illustrated campus map—to explore its architecture, materials, and learning activities.
                </p>
              </div>
              <div class="p-3.5 rounded-2xl bg-white border border-[#39263E]/10 text-xs text-[#45534C] max-w-xs">
                <strong class="text-[#39263E] block">Concept Imagery Disclosure:</strong>
                All photographs and architectural diagrams represent fictional concept spaces created for the Little Roots portfolio showcase.
              </div>
            </div>

            <div class="flex flex-wrap gap-2" role="tablist" aria-label="Campus Spaces">
              ${window.LR_DATA.campusSpaces.map(sp => {
                const isSelected = sp.id === space.id;
                return `
                  <button type="button" role="tab" aria-selected="${isSelected}" onclick="window.app.selectCampusSpace('${sp.id}')" class="px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${isSelected ? 'bg-[#174F43] text-white shadow-sm scale-105' : 'bg-white text-[#39263E] hover:bg-[#D9EDB5] border border-[#39263E]/10'}">
                    ${sp.number}. ${sp.name}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div class="lg:col-span-7 bg-white rounded-[36px] p-6 sm:p-8 border border-[#39263E]/12 shadow-editorial space-y-6">
                <div class="relative rounded-3xl overflow-hidden bg-[#281A2C] h-64 sm:h-80 lg:h-96">
                  <img src="${activePhoto}" alt="${space.name}" class="w-full h-full object-cover editorial-photo" />
                  <div class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#FAFAF7]/95 text-[#39263E] text-xs font-extrabold shadow">
                    Space ${space.number} of 06 · ${space.name}
                  </div>
                </div>

                <div class="flex items-center gap-3 overflow-x-auto pb-1">
                  ${space.gallery.map((imgUrl, gIdx) => `
                    <button type="button" onclick="window.app.setCampusPhotoIdx(${gIdx})" class="relative rounded-2xl overflow-hidden w-24 h-16 flex-shrink-0 border-2 transition-all ${(state.campusPhotoIdx || 0) === gIdx ? 'border-[#174F43] scale-105 shadow' : 'border-transparent opacity-70 hover:opacity-100'}">
                      <img src="${imgUrl}" alt="${space.name} view ${gIdx+1}" class="w-full h-full object-cover" />
                    </button>
                  `).join('')}
                  <span class="text-xs text-[#45534C] ml-auto hidden sm:inline">Click thumbnails to switch views</span>
                </div>

                <div class="space-y-3 pt-2 border-t border-[#39263E]/10">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">${space.name}</h2>
                    <span class="px-3 py-1 rounded-full bg-[#ECF6D8] text-[#174F43] text-xs font-bold">${space.ageGroups}</span>
                  </div>
                  <p class="text-sm font-semibold text-[#174F43]">${space.tagline}</p>
                  <p class="text-sm text-[#45534C] leading-relaxed">${space.intro}</p>
                </div>

                <div class="bg-[#FAFAF7] rounded-2xl p-5 border border-[#39263E]/10 space-y-2.5">
                  <h3 class="font-serif font-bold text-base text-[#39263E]">Key Learning Activities in This Space</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    ${space.activities.map(act => `
                      <div class="flex items-start gap-2 text-xs text-[#45534C]">
                        <span class="text-[#174F43] font-bold">✦</span>
                        <span>${act}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button type="button" onclick="window.app.navigate('/book-a-tour')" class="px-5 py-2.5 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] text-xs font-bold transition-colors">
                    Request a Simulated Tour of ${space.name} →
                  </button>
                  <button type="button" onclick="window.app.selectCampusSpace('${nextSpace.id}')" class="px-5 py-2.5 rounded-full bg-[#39263E] hover:bg-[#174F43] text-white text-xs font-bold transition-colors">
                    Next Space: ${nextSpace.name} →
                  </button>
                </div>
              </div>

              <div class="lg:col-span-5 bg-white rounded-[36px] p-6 sm:p-7 border border-[#39263E]/12 shadow-soft space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-[11px] font-extrabold uppercase tracking-wider text-[#174F43]">INTERACTIVE CONCEPT FLOORPLAN</span>
                    <h3 class="font-serif text-xl font-bold text-[#39263E]">Click any room on the map</h3>
                  </div>
                  ${window.LR_SVGS.sproutIcon('#174F43')}
                </div>

                <div class="rounded-3xl bg-[#FAFAF7] border border-[#39263E]/15 p-3 overflow-hidden">
                  <svg viewBox="0 0 800 440" class="w-full h-auto select-none" role="group" aria-label="Interactive Little Roots Campus Map">
                    <rect x="20" y="20" width="760" height="400" rx="36" fill="#F4F0E9" stroke="#39263E" stroke-opacity="0.15" stroke-width="2"/>
                    <circle cx="75" cy="95" r="28" fill="#D9EDB5" opacity="0.8"/>
                    <circle cx="75" cy="340" r="34" fill="#B7D36F" opacity="0.7"/>
                    <circle cx="745" cy="355" r="24" fill="#D9EDB5" opacity="0.8"/>
                    <text x="400" y="58" text-anchor="middle" fill="#39263E" font-size="13" font-weight="700" letter-spacing="2">LITTLE ROOTS CONCEPT CAMPUS — INTERACTIVE ARCHITECTURAL DIAGRAM</text>

                    <g onclick="window.app.selectCampusSpace('classroom')" class="cursor-pointer">
                      <rect x="120" y="85" width="200" height="135" rx="20" fill="${space.id==='classroom'?'#174F43':'#ECF6D8'}" stroke="#174F43" stroke-width="${space.id==='classroom'?'4':'2'}"/>
                      <text x="220" y="142" text-anchor="middle" fill="${space.id==='classroom'?'#FFFFFF':'#39263E'}" font-size="14" font-weight="800">01. Discovery</text>
                      <text x="220" y="162" text-anchor="middle" fill="${space.id==='classroom'?'#D9EDB5':'#174F43'}" font-size="13" font-weight="700">Classroom</text>
                    </g>

                    <g onclick="window.app.selectCampusSpace('library')" class="cursor-pointer">
                      <rect x="335" y="85" width="165" height="135" rx="20" fill="${space.id==='library'?'#174F43':'#EAEBFF'}" stroke="#39263E" stroke-width="${space.id==='library'?'4':'2'}"/>
                      <text x="417" y="142" text-anchor="middle" fill="${space.id==='library'?'#FFFFFF':'#39263E'}" font-size="14" font-weight="800">02. The Little</text>
                      <text x="417" y="162" text-anchor="middle" fill="${space.id==='library'?'#D9EDB5':'#39263E'}" font-size="13" font-weight="700">Library</text>
                    </g>

                    <g onclick="window.app.selectCampusSpace('atelier')" class="cursor-pointer">
                      <rect x="515" y="85" width="195" height="135" rx="20" fill="${space.id==='atelier'?'#174F43':'#FDE8D8'}" stroke="#39263E" stroke-width="${space.id==='atelier'?'4':'2'}"/>
                      <text x="612" y="142" text-anchor="middle" fill="${space.id==='atelier'?'#FFFFFF':'#39263E'}" font-size="14" font-weight="800">03. Creative</text>
                      <text x="612" y="162" text-anchor="middle" fill="${space.id==='atelier'?'#F6C866':'#39263E'}" font-size="13" font-weight="700">Atelier Studio</text>
                    </g>

                    <g onclick="window.app.selectCampusSpace('garden')" class="cursor-pointer">
                      <rect x="120" y="240" width="275" height="145" rx="24" fill="${space.id==='garden'?'#174F43':'#D9EDB5'}" stroke="#174F43" stroke-width="${space.id==='garden'?'4':'2'}"/>
                      <text x="257" y="305" text-anchor="middle" fill="${space.id==='garden'?'#FFFFFF':'#174F43'}" font-size="15" font-weight="800">04. Outdoor Nature Garden</text>
                      <text x="257" y="327" text-anchor="middle" fill="${space.id==='garden'?'#D9EDB5':'#39263E'}" font-size="12" font-weight="600">Herb Beds · Pergola · Bamboo Path</text>
                    </g>

                    <g onclick="window.app.selectCampusSpace('movement')" class="cursor-pointer">
                      <rect x="410" y="240" width="150" height="145" rx="20" fill="${space.id==='movement'?'#174F43':'#FDF2D0'}" stroke="#39263E" stroke-width="${space.id==='movement'?'4':'2'}"/>
                      <text x="485" y="305" text-anchor="middle" fill="${space.id==='movement'?'#FFFFFF':'#39263E'}" font-size="14" font-weight="800">05. Movement</text>
                      <text x="485" y="325" text-anchor="middle" fill="${space.id==='movement'?'#F6C866':'#39263E'}" font-size="13" font-weight="700">Studio</text>
                    </g>

                    <g onclick="window.app.selectCampusSpace('sensory')" class="cursor-pointer">
                      <rect x="575" y="240" width="135" height="145" rx="20" fill="${space.id==='sensory'?'#174F43':'#ECF6D8'}" stroke="#174F43" stroke-width="${space.id==='sensory'?'4':'2'}"/>
                      <text x="642" y="305" text-anchor="middle" fill="${space.id==='sensory'?'#FFFFFF':'#39263E'}" font-size="14" font-weight="800">06. Sensory</text>
                      <text x="642" y="325" text-anchor="middle" fill="${space.id==='sensory'?'#D9EDB5':'#174F43'}" font-size="13" font-weight="700">Corner</text>
                    </g>
                  </svg>
                </div>

                <div class="space-y-2">
                  ${window.LR_DATA.campusSpaces.map(sp => `
                    <button type="button" onclick="window.app.selectCampusSpace('${sp.id}')" class="w-full text-left p-3 rounded-2xl text-xs flex items-center justify-between transition-colors ${sp.id === space.id ? 'bg-[#39263E] text-white font-bold' : 'bg-[#F4F0E9] text-[#39263E] hover:bg-[#ECF6D8]'}">
                      <span>${sp.number}. ${sp.name}</span>
                      <span class="opacity-75">${sp.id === space.id ? 'Currently Viewing ●' : 'View Space →'}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderEducators = function() {
      return `
        <section class="bg-[#39263E] text-white py-14 lg:py-16">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-7 space-y-4">
              <span class="inline-block px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
                OUR EDUCATORS &amp; TEACHING PHILOSOPHY
              </span>
              <h1 class="font-serif text-4xl sm:text-5xl font-bold leading-tight">
                Co-learners, listeners, and <span class="italic font-normal text-[#F8BD96]">stewards of wonder.</span>
              </h1>
              <p class="text-base text-white/85 leading-relaxed">
                At Little Roots, educators do not stand at the front of a room lecturing. They kneel beside children—listening closely, asking open-ended questions, and preparing thoughtful studio and garden invitations.
              </p>
              <p class="text-xs text-[#D9EDB5] italic">
                Concept Integrity Note: Because Little Roots is a fictional portfolio concept, we present our pedagogical role structure rather than inventing real staff identities or fabricated teaching licenses.
              </p>
            </div>
            <div class="lg:col-span-5">
              <div class="mask-organic-blob overflow-hidden border-4 border-[#D9EDB5]/50 shadow-2xl">
                <img src="${window.LR_DATA.images.hero}" alt="Educator-guided discovery in the classroom" class="w-full h-72 sm:h-80 object-cover editorial-photo" />
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">ILLUSTRATIVE PEDAGOGICAL TEAM STRUCTURE</span>
              <h2 class="font-serif text-3xl font-bold text-[#39263E] mt-1">Four Collaborative Educator Roles</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${window.LR_DATA.educators.map(ed => `
                <div class="${ed.color} rounded-3xl p-7 border border-[#39263E]/12 shadow-soft space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="px-3 py-1 rounded-full bg-white text-[#39263E] text-xs font-extrabold">${ed.badge}</span>
                    ${window.LR_SVGS.sproutIcon('#174F43')}
                  </div>
                  <div>
                    <h3 class="font-serif font-bold text-2xl text-[#39263E]">${ed.role}</h3>
                    <p class="text-xs font-bold text-[#174F43] uppercase tracking-wider mt-0.5">${ed.focus}</p>
                  </div>
                  <p class="text-sm text-[#45534C] leading-relaxed">${ed.summary}</p>
                  <div class="bg-white/80 rounded-2xl p-4 space-y-1.5">
                    <p class="text-xs font-bold text-[#39263E]">Core Responsibilities:</p>
                    <ul class="space-y-1 text-xs text-[#45534C]">
                      ${ed.responsibilities.map(r => `<li class="flex items-start gap-2"><span class="text-[#174F43] font-bold">✓</span><span>${r}</span></li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderAdmissions = function(state) {
      const checklist = [
        { id: "doc1", label: "Child's birth date confirmation (for real schools; not collected in this demo)" },
        { id: "doc2", label: "Parent/Guardian contact information (synthetic test values used in our demo)" },
        { id: "doc3", label: "Child's comfort routines, interests & language background notes" },
        { id: "doc4", label: "Health, allergy & wellbeing care notes (discussed during orientation)" }
      ];

      return `
        <section class="bg-[#F4F0E9] py-12 lg:py-16 border-b border-[#39263E]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-7 space-y-4">
                <span class="inline-block px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
                  ADMISSIONS OVERVIEW · DEMONSTRATION EXPERIENCE
                </span>
                <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E]">
                  Warm, structured, and <span class="italic font-normal">family-centered.</span>
                </h1>
                <p class="text-base text-[#45534C] leading-relaxed">
                  Exploring a child's first school should feel reassuring and transparent. Experience our complete interactive tour-booking and admission inquiry flows below.
                </p>
                <div class="flex flex-wrap gap-3 pt-2">
                  <button type="button" onclick="window.app.navigate('/book-a-tour')" class="px-7 py-3.5 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] font-bold text-sm shadow-sm transition-colors">
                    Book a School Tour (Demo) →
                  </button>
                  <button type="button" onclick="window.app.navigate('/apply')" class="px-7 py-3.5 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white font-bold text-sm shadow-sm transition-colors">
                    Begin Admission Inquiry Wizard →
                  </button>
                </div>
              </div>
              <div class="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#39263E]/12 shadow-soft space-y-3">
                <span class="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FDE8D8] text-[#39263E]">
                  Demonstration Policy Notice
                </span>
                <h2 class="font-serif font-bold text-xl text-[#39263E]">Transparent Concept Guardrails</h2>
                <p class="text-xs text-[#45534C] leading-relaxed">
                  Little Roots is a fictional portfolio concept by Invenio. We do not publish fabricated tuition fee schedules, fake enrollment deadlines, or live seat availability counts. All submissions on this website use synthetic data stored only in your browser.
                </p>
                <button type="button" onclick="window.app.navigate('/admin')" class="text-xs font-bold text-[#174F43] underline">
                  Inspect Demo Submissions in Admin Dashboard →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="py-14 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#39263E]/10 shadow-soft space-y-5">
              <h2 class="font-serif text-2xl font-bold text-[#39263E]">Indicative Program Age Ranges</h2>
              <p class="text-xs text-[#45534C]">
                Where age bands overlap, placement in a real early-years setting is guided by developmental readiness and admissions policy conversations.
              </p>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr class="border-b border-[#39263E]/15 text-xs uppercase text-[#174F43]">
                      <th class="py-3 pr-4">Program</th>
                      <th class="py-3 px-4">Indicative Age</th>
                      <th class="py-3 pl-4">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[#39263E]/10">
                    <tr>
                      <td class="py-3.5 pr-4 font-bold text-[#39263E]">Playgroup</td>
                      <td class="py-3.5 px-4">2–3 years</td>
                      <td class="py-3.5 pl-4"><button type="button" onclick="window.app.startInquiryWithProgram('Playgroup')" class="text-xs font-bold text-[#174F43] underline">Inquire for Playgroup →</button></td>
                    </tr>
                    <tr>
                      <td class="py-3.5 pr-4 font-bold text-[#39263E]">Nursery</td>
                      <td class="py-3.5 px-4">3–4 years</td>
                      <td class="py-3.5 pl-4"><button type="button" onclick="window.app.startInquiryWithProgram('Nursery')" class="text-xs font-bold text-[#174F43] underline">Inquire for Nursery →</button></td>
                    </tr>
                    <tr>
                      <td class="py-3.5 pr-4 font-bold text-[#39263E]">Kindergarten</td>
                      <td class="py-3.5 px-4">4–6 years</td>
                      <td class="py-3.5 pl-4"><button type="button" onclick="window.app.startInquiryWithProgram('Kindergarten')" class="text-xs font-bold text-[#174F43] underline">Inquire for Kindergarten →</button></td>
                    </tr>
                    <tr>
                      <td class="py-3.5 pr-4 font-bold text-[#39263E]">Enrichment Studios</td>
                      <td class="py-3.5 px-4">2–6 years</td>
                      <td class="py-3.5 pl-4"><button type="button" onclick="window.app.startInquiryWithProgram('Enrichment (Nature & Atelier)')" class="text-xs font-bold text-[#174F43] underline">Inquire for Enrichment →</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#39263E]/10 shadow-soft space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Interactive Planning Tool</span>
              <h2 class="font-serif text-2xl font-bold text-[#39263E]">Sample Preparation Checklist</h2>
              <p class="text-xs text-[#45534C]">
                Check off items below to see how families typically prepare for an early-years orientation (no documents are uploaded on this demo site):
              </p>
              <div class="space-y-2.5 pt-1">
                ${checklist.map(item => {
                  const checked = !!(state.admissionsChecklist && state.admissionsChecklist[item.id]);
                  return `
                    <label class="flex items-start gap-3 p-3 rounded-2xl cursor-pointer transition-colors ${checked ? 'bg-[#ECF6D8]' : 'bg-[#F4F0E9]/70'}">
                      <input type="checkbox" ${checked ? 'checked' : ''} onchange="window.app.toggleAdmissionsCheck('${item.id}')" class="mt-0.5 rounded text-[#174F43]" />
                      <span class="text-xs font-medium text-[#39263E] ${checked ? 'line-through opacity-75' : ''}">${item.label}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </section>
      `;
    };