window.LR_PAGES = window.LR_PAGES || {};

    window.LR_PAGES.programIconSvg = function(type) {
      if (type === 'rainbow') {
        return `<svg class="w-7 h-7 text-[#39263E]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 23C5 14.7 10 9 16 9C22 9 27 14.7 27 23" stroke-linecap="round"/><path d="M9 23C9 17 12.1 13 16 13C19.9 13 23 17 23 23" stroke-linecap="round"/><path d="M13 23C13 19.5 14.3 17 16 17C17.7 17 19 19.5 19 23" stroke-linecap="round"/></svg>`;
      }
      if (type === 'book') {
        return `<svg class="w-7 h-7 text-[#39263E]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 9C13.5 7.5 9.5 7 5 8V24C9.5 23 13.5 23.5 16 25C18.5 23.5 22.5 23 27 24V8C22.5 7 18.5 7.5 16 9Z" stroke-linejoin="round"/><path d="M16 9V25" stroke-linecap="round"/></svg>`;
      }
      if (type === 'palette') {
        return `<svg class="w-7 h-7 text-[#39263E]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 5C9.9 5 5 9.9 5 16C5 22.1 9.9 27 16 27C17.9 27 19.2 25.6 19.2 23.9C19.2 23.1 18.9 22.4 18.4 21.8C17.9 21.3 17.6 20.6 17.6 19.8C17.6 18.1 19 16.8 20.8 16.8H22.5C25 16.8 27 14.8 27 12.3C27 8.1 22.1 5 16 5Z"/><circle cx="11.5" cy="12.5" r="1.4" fill="currentColor"/><circle cx="16.5" cy="10.5" r="1.4" fill="currentColor"/><circle cx="21" cy="12.5" r="1.4" fill="currentColor"/><circle cx="10.5" cy="17.5" r="1.4" fill="currentColor"/></svg>`;
      }
      return `<svg class="w-7 h-7 text-[#174F43]" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 24C8 14 16 7 25 7C25 16 18 24 8 24Z" stroke-linejoin="round"/><path d="M8 24C13 19 17 15 22 10" stroke-linecap="round"/></svg>`;
    };

    window.LR_PAGES.renderHome = function(state) {
      const activePillar = window.LR_DATA.approachPillars.find(p => p.id === state.homePillar) || window.LR_DATA.approachPillars[0];
      const activeDayStage = window.LR_DATA.dailyRoutine[state.homeDayStep] || window.LR_DATA.dailyRoutine[0];
      const filteredMoments = state.homeGalleryCat === 'All'
        ? window.LR_DATA.galleryItems.slice(0, 6)
        : window.LR_DATA.galleryItems.filter(g => g.category === state.homeGalleryCat).slice(0, 6);

      return `
        <!-- SECTION 01 — IMMERSIVE HERO -->
        <section class="relative overflow-hidden bg-gradient-to-b from-[#F4F0E9] via-[#FAFAF7] to-[#FAFAF7] pt-6 pb-14 lg:py-14 border-b border-[#39263E]/8">
          <svg class="hidden md:block absolute top-8 left-2 w-16 h-36 text-[#84A446]/35 pointer-events-none" viewBox="0 0 80 180" fill="currentColor" aria-hidden="true">
            <path d="M10 170 Q35 110 20 30" stroke="currentColor" stroke-width="2" fill="none"/>
            <ellipse cx="32" cy="120" rx="14" ry="7" transform="rotate(-25 32 120)"/>
            <ellipse cx="14" cy="95" rx="13" ry="6" transform="rotate(20 14 95)"/>
            <ellipse cx="30" cy="65" rx="14" ry="6" transform="rotate(-30 30 65)"/>
          </svg>

          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div class="lg:col-span-6 space-y-6 animate-fade-up">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF6D8] border border-[#84A446]/30">
                  ${window.LR_SVGS.sproutIcon('#174F43')}
                  <span class="text-[11px] sm:text-xs font-extrabold tracking-[0.16em] uppercase text-[#174F43]">
                    CURIOUS MINDS. KINDER HEARTS. BRIGHTER TOMORROWS.
                  </span>
                </div>

                <h1 class="hero-headline text-[34px] sm:text-[46px] md:text-[52px] lg:text-[44px] xl:text-[54px] 2xl:text-[58px] font-semibold text-[#174F43] leading-[1.08]">
                  <span class="block text-[#174F43]">A place to</span>
                  <span class="block whitespace-nowrap">
                    <span class="text-[#174F43] font-semibold">bloom</span> <span class="hero-italic font-medium text-[#39263E]">with wonder.</span>
                  </span>
                </h1>

                <p class="text-base sm:text-lg text-[#45534C] leading-relaxed max-w-xl">
                  At Little Roots, we nurture curious, confident and compassionate children through purposeful play, meaningful discovery and a deep connection with the world around them.
                </p>

                <div class="flex flex-wrap items-center gap-3.5 pt-1">
                  <button type="button" onclick="window.app.navigate('/book-a-tour')" class="px-7 py-3.5 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2.5">
                    <span>Book a School Tour</span>
                    <span aria-hidden="true">→</span>
                  </button>
                  <button type="button" onclick="window.app.navigate('/programs')" class="px-7 py-3.5 rounded-full bg-white/80 hover:bg-[#F4F0E9] text-[#39263E] font-semibold text-sm sm:text-base border border-[#39263E]/30 transition-all">
                    Explore Our Programs
                  </button>
                </div>

                <div class="pt-4 border-t border-[#39263E]/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div class="flex items-center gap-2.5">
                    <span class="w-9 h-9 rounded-full bg-[#ECF6D8] text-[#174F43] flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18C6 11 12 6 19 6C19 13 14 18 6 18Z"/><path d="M6 18L15 9"/></svg>
                    </span>
                    <span class="text-xs font-bold text-[#39263E] leading-tight">Play<br/>with purpose</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <span class="w-9 h-9 rounded-full bg-[#FDE8D8] text-[#39263E] flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>
                    </span>
                    <span class="text-xs font-bold text-[#39263E] leading-tight">Kindness<br/>in action</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <span class="w-9 h-9 rounded-full bg-[#FDF2D0] text-[#B88314] flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>
                    </span>
                    <span class="text-xs font-bold text-[#39263E] leading-tight">Curiosity<br/>every day</span>
                  </div>
                  <div class="flex items-center gap-2.5">
                    <span class="w-9 h-9 rounded-full bg-[#EAEBFF] text-[#174F43] flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21V11"/><path d="M12 14C8 14 5 11 5 7C9 7 12 10 12 14Z"/><path d="M12 12C16 12 19 9 19 5C15 5 12 8 12 12Z"/><path d="M7 21h10"/></svg>
                    </span>
                    <span class="text-xs font-bold text-[#39263E] leading-tight">A brighter<br/>tomorrow</span>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-6 relative">
                <div class="relative mx-auto max-w-2xl">
                  <div class="mask-organic-hero overflow-hidden shadow-editorial border-4 border-white bg-[#F4F0E9] relative">
                    <img src="${window.LR_DATA.images.hero}" alt="Three Bangladeshi kindergarten children exploring a botanical leaf with a magnifying glass in a sunlit Dhaka classroom" width="1200" height="675" loading="eager" fetchpriority="high" class="w-full h-[280px] sm:h-[380px] lg:h-[430px] object-cover editorial-photo" />
                    <div class="absolute top-3 right-4 bg-[#FAFAF7]/90 backdrop-blur-sm px-3.5 py-2 rounded-2xl shadow-sm border border-[#39263E]/10 transform rotate-2">
                      <p class="font-handwritten text-lg sm:text-xl leading-tight text-[#39263E] font-semibold">
                        Small explorers.<br/>Brighter tomorrows ♡
                      </p>
                    </div>
                  </div>

                  <div class="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-3 bg-[#D9EDB5] text-[#174F43] px-5 py-3.5 rounded-[28px_28px_8px_28px] shadow-editorial border-2 border-white flex items-center gap-3 max-w-xs">
                    ${window.LR_SVGS.sproutIcon('#174F43')}
                    <div>
                      <p class="font-handwritten text-xl font-bold leading-none text-[#174F43]">Kinder People. Brighter Planet ♡</p>
                      <p class="text-[11px] font-semibold text-[#174F43]/80 mt-0.5">Nature-connected early years in Dhaka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 02 — OUR LEARNING PROGRAMS -->
        <section class="py-14 lg:py-16 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div class="flex flex-wrap items-baseline gap-3">
                <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#39263E]">Our Programs</h2>
                <span class="text-xs font-extrabold uppercase tracking-[0.2em] text-[#45534C]">
                  NURTURING EVERY STEP OF THEIR JOURNEY.
                </span>
              </div>
              <button type="button" onclick="window.app.navigate('/programs')" class="inline-flex items-center gap-1.5 text-sm font-bold text-[#39263E] hover:text-[#174F43] transition-colors self-start sm:self-auto">
                <span>View All Programs</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              ${window.LR_DATA.programs.map(prog => `
                <article onclick="window.app.navigate('${prog.route}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.app.navigate('${prog.route}');}" aria-label="Explore ${prog.title} (${prog.ageRange})" class="group cursor-pointer rounded-3xl overflow-hidden ${prog.cardBg} border border-[#174F43]/12 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col">
                  <div class="w-full h-48 sm:h-44 xl:h-48 relative overflow-hidden bg-[#F4F0E9]">
                    <img src="${prog.image}" alt="${prog.title} — Bangladeshi children learning through play" width="720" height="540" loading="lazy" decoding="async" class="w-full h-full object-cover editorial-photo editorial-photo-zoom" />
                  </div>
                  <div class="w-full p-4 sm:p-5 flex-grow flex flex-col justify-between">
                    <div class="space-y-1.5">
                      <div class="opacity-85">
                        ${window.LR_PAGES.programIconSvg(prog.iconType)}
                      </div>
                      <h3 class="font-serif font-bold text-lg text-[#39263E] leading-snug">
                        ${prog.title}
                      </h3>
                      <p class="text-xs font-semibold text-[#45534C]">(${prog.ageRange})</p>
                      <p class="text-xs text-[#45534C] leading-relaxed pt-1">
                        ${prog.shortDesc}
                      </p>
                    </div>
                    <div class="pt-3 flex justify-end">
                      <span class="w-7 h-7 rounded-full ${prog.accentBg} text-white flex items-center justify-center text-xs font-bold transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- SECTION 03 — OUR APPROACH & SECTION 04 — A DAY AT LITTLE ROOTS -->
        <section class="py-12 lg:py-16 bg-[#F4F0E9] relative overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              <div class="lg:col-span-7 bg-[#39263E] text-[#FAFAF7] rounded-[36px] p-6 sm:p-10 shadow-editorial relative overflow-hidden flex flex-col justify-between">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div class="md:col-span-7 space-y-4">
                    <div class="inline-flex items-center gap-2">
                      <span class="font-handwritten text-2xl text-[#F8BD96]">Our Approach</span>
                      ${window.LR_SVGS.sproutIcon('#D9EDB5')}
                    </div>
                    <h2 class="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                      Rooted in wonder.<br/>Growing for good.
                    </h2>
                    <p class="text-sm text-white/85 leading-relaxed">
                      We believe childhood is a powerful beginning. Our Reggio-inspired approach nurtures the whole child — heart, mind, body and spirit — in a thoughtfully designed environment where every child belongs.
                    </p>

                    <div class="pt-2">
                      <p class="text-[11px] font-bold uppercase tracking-wider text-[#D9EDB5] mb-2">
                        Select a pillar to explore our philosophy:
                      </p>
                      <div class="flex flex-wrap gap-2" role="tablist" aria-label="Educational Philosophy Pillars">
                        ${window.LR_DATA.approachPillars.map(pillar => {
                          const isSelected = pillar.id === activePillar.id;
                          return `
                            <button type="button" role="tab" aria-selected="${isSelected}" onclick="window.app.setHomePillar('${pillar.id}')" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${isSelected ? 'bg-[#D9EDB5] text-[#174F43] shadow-sm scale-105' : 'bg-white/10 text-white/85 hover:bg-white/20'}">
                              ${pillar.number}. ${pillar.title}
                            </button>
                          `;
                        }).join('')}
                      </div>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="text-xs font-bold text-[#F6C866] uppercase tracking-wider">${activePillar.title} — ${activePillar.badge}</span>
                      </div>
                      <p class="font-serif font-semibold text-base text-white">${activePillar.headline}</p>
                      <p class="text-xs text-white/85 leading-relaxed">${activePillar.description}</p>
                      <p class="text-xs text-[#D9EDB5] italic pt-1">In practice: "${activePillar.classroomExample}"</p>
                    </div>

                    <div class="pt-2">
                      <button type="button" onclick="window.app.navigate('/our-story')" class="px-6 py-2.5 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors">
                        <span>Discover Our Philosophy</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-5 relative flex flex-col items-center">
                    <div class="w-56 h-56 sm:w-64 sm:h-64 mask-organic-blob overflow-hidden border-4 border-[#D9EDB5]/60 shadow-xl">
                      <img src="${activePillar.image}" alt="${activePillar.title} at Little Roots" class="w-full h-full object-cover editorial-photo" />
                    </div>
                    <div class="-mt-6 bg-[#D9EDB5] text-[#174F43] px-4 py-2.5 rounded-2xl shadow-lg transform -rotate-3 border border-white">
                      <p class="font-handwritten text-xl font-bold leading-tight text-center">
                        ${activePillar.handwritten}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-5 bg-[#FAFAF7] rounded-[36px] p-6 sm:p-8 border border-[#39263E]/10 shadow-soft flex flex-col justify-between">
                <div class="space-y-4">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">A Day at Little Roots</span>
                    <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E] mt-0.5">
                      Play. Explore. Create. Belong.
                    </h2>
                  </div>

                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    <div class="text-center space-y-1.5">
                      <div class="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#D9EDB5] shadow-sm">
                        <img src="${window.LR_DATA.images.dayNature}" alt="Hands holding a young green seedling in soil" loading="lazy" class="w-full h-full object-cover editorial-photo" />
                      </div>
                      <h3 class="font-serif font-bold text-xs text-[#39263E]">Nature Exploration</h3>
                      <p class="text-[11px] text-[#45534C] leading-tight">A deeper connection to our world.</p>
                    </div>
                    <div class="text-center space-y-1.5">
                      <div class="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#F8BD96] shadow-sm">
                        <img src="${window.LR_DATA.images.dayCreative}" alt="Paintbrushes and colorful palette" loading="lazy" class="w-full h-full object-cover editorial-photo" />
                      </div>
                      <h3 class="font-serif font-bold text-xs text-[#39263E]">Creative Expression</h3>
                      <p class="text-[11px] text-[#45534C] leading-tight">Ideas, art and self-discovery.</p>
                    </div>
                    <div class="text-center space-y-1.5">
                      <div class="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#D9EDB5] shadow-sm">
                        <img src="${window.LR_DATA.images.dayMovement}" alt="Children running joyfully outdoors" loading="lazy" class="w-full h-full object-cover editorial-photo" />
                      </div>
                      <h3 class="font-serif font-bold text-xs text-[#39263E]">Movement &amp; Wellbeing</h3>
                      <p class="text-[11px] text-[#45534C] leading-tight">Active bodies, happy minds.</p>
                    </div>
                    <div class="text-center space-y-1.5">
                      <div class="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#C6C9FF] shadow-sm">
                        <img src="${window.LR_DATA.images.dayKindness}" alt="Child's hands holding a pink heart" loading="lazy" class="w-full h-full object-cover editorial-photo" />
                      </div>
                      <h3 class="font-serif font-bold text-xs text-[#39263E]">Community &amp; Kindness</h3>
                      <p class="text-[11px] text-[#45534C] leading-tight">A kinder, more compassionate world.</p>
                    </div>
                  </div>

                  <div class="pt-3 border-t border-[#39263E]/10 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-[#39263E]">Interactive Daily Rhythm Preview:</span>
                      <span class="text-[11px] text-[#174F43] font-semibold">Click a time slot</span>
                    </div>
                    <div class="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                      ${window.LR_DATA.dailyRoutine.map((item, idx) => `
                        <button type="button" onclick="window.app.setHomeDayStep(${idx})" class="px-2.5 py-1 rounded-full text-[11px] font-bold flex-shrink-0 transition-all ${idx === state.homeDayStep ? 'bg-[#174F43] text-white' : 'bg-[#F4F0E9] text-[#39263E] hover:bg-[#D9EDB5]'}">
                          ${item.time}
                        </button>
                      `).join('')}
                    </div>
                    <div class="p-3.5 rounded-2xl bg-[#F4F0E9] border border-[#39263E]/10 flex items-center gap-3.5">
                      <img src="${activeDayStage.image}" alt="${activeDayStage.title}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0 editorial-photo" />
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="text-xs font-extrabold text-[#174F43]">${activeDayStage.time}</span>
                          <span class="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#39263E] font-semibold truncate">${activeDayStage.area}</span>
                        </div>
                        <h4 class="font-serif font-bold text-sm text-[#39263E] mt-0.5">${activeDayStage.title}</h4>
                        <p class="text-xs text-[#45534C] line-clamp-2">${activeDayStage.shortDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-4 flex justify-between items-center">
                  <span class="text-[11px] text-[#45534C] italic">Illustrative sample schedule</span>
                  <button type="button" onclick="window.app.navigate('/a-day-at-little-roots')" class="px-5 py-2.5 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white font-bold text-xs inline-flex items-center gap-2 transition-colors">
                    <span>Explore a Day at Little Roots</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- SECTION 05 — OUR LITTLE WORLD -->
        <section class="py-16 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span class="text-xs font-extrabold uppercase tracking-[0.2em] text-[#174F43]">OUR LITTLE WORLD</span>
                <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#174F43] mt-1">
                  Spaces made for <span class="italic font-normal">curious minds.</span>
                </h2>
                <p class="text-sm sm:text-base text-[#45534C] mt-2 max-w-2xl">
                  Every corner of our conceptual Dhaka campus is designed as a warm, sunlit studio for inquiry—blending natural birch wood, indoor plants, and open-ended materials.
                </p>
              </div>
              <button type="button" onclick="window.app.navigate('/our-campus')" class="px-6 py-3 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white font-bold text-sm inline-flex items-center gap-2 self-start md:self-auto transition-colors">
                <span>Explore Our Campus</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              ${window.LR_DATA.campusSpaces.map(space => `
                <div onclick="window.app.openCampusSpace('${space.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.app.openCampusSpace('${space.id}');}" class="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#39263E]/10 shadow-soft hover:shadow-card-hover transition-all flex flex-col">
                  <div class="relative h-52 overflow-hidden bg-[#F4F0E9]">
                    <img src="${space.heroImage}" alt="${space.name}" loading="lazy" class="w-full h-full object-cover editorial-photo editorial-photo-zoom" />
                    <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FAFAF7]/90 backdrop-blur-sm text-[#39263E] text-xs font-bold">
                      ${space.number} · ${space.name}
                    </span>
                  </div>
                  <div class="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <p class="text-xs font-semibold text-[#174F43]">${space.ageGroups}</p>
                      <h3 class="font-serif font-bold text-lg text-[#39263E] mt-0.5">${space.name}</h3>
                      <p class="text-xs text-[#45534C] mt-1 leading-relaxed">${space.tagline}</p>
                    </div>
                    <div class="pt-2 border-t border-[#39263E]/10 flex items-center justify-between text-xs font-bold text-[#174F43]">
                      <span>Step inside this space</span>
                      <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- SECTION 06 — THE LITTLE ROOTS DIFFERENCE -->
        <section class="py-16 bg-[#ECF6D8]/65 border-y border-[#174F43]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#174F43] text-xs font-bold shadow-sm">
                ${window.LR_SVGS.sproutIcon('#174F43')}
                <span>THE LITTLE ROOTS DIFFERENCE</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#174F43]">
                Thoughtful early education, <span class="italic font-normal">without the clichés.</span>
              </h2>
              <p class="text-sm sm:text-base text-[#45534C]">
                Instead of crowded walls, rote memorization, or high-pressure worksheets, our conceptual model focuses on six developmental priorities that honor how young children genuinely learn.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              ${[
                { title: "Purposeful Play", badge: "Priority 01", bg: "bg-white", desc: "Every block tower, water experiment, and dramatic story builds neural pathways for problem-solving, self-regulation, and early math." },
                { title: "Child-Centered Discovery", badge: "Priority 02", bg: "bg-white", desc: "Small-group inquiry follows children's real questions—turning everyday observations into sustained investigative projects." },
                { title: "Confidence & Independence", badge: "Priority 03", bg: "bg-white", desc: "Child-height shelves, real tools, and unhurried routines empower learners to care for themselves, their peers, and their classroom." },
                { title: "Creative Expression", badge: "Priority 04", bg: "bg-white", desc: "Our dedicated Atelier invites children to express ideas through clay, natural pigments, light, shadow, music, and movement." },
                { title: "Meaningful Family Involvement", badge: "Priority 05", bg: "bg-white", desc: "Transparent orientation, narrative progress conversations, and home play invitations keep parents and educators connected." },
                { title: "Nature-Connected Learning", badge: "Priority 06", bg: "bg-white", desc: "Daily time in our outdoor herb and sensory garden grounds urban children in seasonal cycles and environmental empathy." }
              ].map(item => `
                <div class="${item.bg} rounded-3xl p-6 border border-[#174F43]/12 shadow-soft hover:shadow-editorial transition-all space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D9EDB5] text-[#174F43]">${item.badge}</span>
                    ${window.LR_SVGS.sproutIcon('#174F43')}
                  </div>
                  <h3 class="font-serif font-bold text-xl text-[#39263E]">${item.title}</h3>
                  <p class="text-sm text-[#45534C] leading-relaxed">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- SECTION 07 — LITTLE MOMENTS -->
        <section class="py-16 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p class="font-handwritten text-2xl text-[#174F43] font-bold">Curiosity grows here</p>
                <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#174F43]">
                  Little moments. <span class="italic font-normal">Big discoveries.</span>
                </h2>
              </div>
              <div class="flex flex-wrap gap-1.5" role="tablist" aria-label="Gallery Preview Categories">
                ${['All', 'Learning Spaces', 'Creative Activities', 'Nature Exploration', 'Play & Movement', 'Little Moments'].map(cat => `
                  <button type="button" onclick="window.app.setHomeGalleryCat('${cat}')" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${state.homeGalleryCat === cat ? 'bg-[#39263E] text-white' : 'bg-[#F4F0E9] text-[#39263E] hover:bg-[#D9EDB5]'}">
                    ${cat}
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              ${filteredMoments.map((item) => `
                <div onclick="window.app.openLightboxById('${item.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.app.openLightboxById('${item.id}');}" class="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-[#39263E]/10 shadow-soft hover:shadow-card-hover transition-all">
                  <div class="relative h-56 overflow-hidden bg-[#F4F0E9]">
                    <img src="${item.img}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover editorial-photo editorial-photo-zoom" />
                    <span class="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#39263E]/85 text-white text-[11px] font-semibold">
                      ${item.category}
                    </span>
                  </div>
                  <div class="p-4 flex items-center justify-between gap-2">
                    <div>
                      <h3 class="font-serif font-bold text-base text-[#39263E]">${item.title}</h3>
                      <p class="text-xs text-[#45534C] line-clamp-1 mt-0.5">${item.caption}</p>
                    </div>
                    <span class="w-8 h-8 rounded-full bg-[#F4F0E9] group-hover:bg-[#F6C866] text-[#39263E] flex items-center justify-center text-xs font-bold flex-shrink-0">⤢</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="mt-8 text-center">
              <button type="button" onclick="window.app.navigate('/gallery')" class="px-6 py-3 rounded-full border border-[#39263E]/30 hover:bg-[#39263E] hover:text-white text-[#39263E] font-bold text-sm transition-colors inline-flex items-center gap-2">
                <span>Explore Full School Life Gallery</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>

        <!-- SECTION 08 — PARENT PARTNERSHIP -->
        <section class="py-16 bg-[#EAEBFF]/60 border-t border-[#39263E]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-5 space-y-4">
                <span class="inline-block px-3 py-1 rounded-full bg-[#C6C9FF] text-[#39263E] text-xs font-extrabold uppercase tracking-wider">
                  PARENT PARTNERSHIP
                </span>
                <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#174F43] leading-tight">
                  Growing together, <span class="italic font-normal">every step of the way.</span>
                </h2>
                <p class="text-sm sm:text-base text-[#45534C] leading-relaxed">
                  A child's early years thrive when home and school walk hand in hand. Rather than presenting fabricated parent reviews for a fictional concept school, here is how Little Roots is designed to partner with families every week:
                </p>
                <div class="p-4 rounded-2xl bg-white/90 border border-[#39263E]/10 space-y-1.5">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-[#174F43] bg-[#D9EDB5] px-2 py-0.5 rounded-full">Sample Concept Illustration</span>
                  <blockquote class="font-serif italic text-sm text-[#39263E] pt-1">
                    "During our gentle two-week settling-in rhythm, parents and educators co-create a comfort plan so every child steps into the classroom feeling deeply safe and known."
                  </blockquote>
                  <p class="text-[11px] text-[#45534C]">— Illustrative Orientation Touchpoint (Not a real parent quote)</p>
                </div>
                <div class="pt-2">
                  <button type="button" onclick="window.app.navigate('/parent-corner')" class="px-6 py-3 rounded-full bg-[#39263E] hover:bg-[#174F43] text-white font-bold text-sm inline-flex items-center gap-2 transition-colors">
                    <span>Visit the Parent Corner</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>

              <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${[
                  { title: "1. Gentle Parent Orientation", tag: "Before Day One", desc: "Small-group welcome visits and 1-on-1 conversations so educators learn your child's comfort routines, interests, and home languages." },
                  { title: "2. Narrative Progress Conversations", tag: "Ongoing Dialogue", desc: "Instead of rigid report cards, educators share visual learning stories, studio portfolios, and developmental reflections each term." },
                  { title: "3. Thoughtful School Communications", tag: "Weekly Rhythm", desc: "Calm weekly digest notes with photos of classroom provocations, songs we are singing, and questions to spark dinner-table chats." },
                  { title: "4. Family Learning & Garden Days", tag: "Community Belonging", desc: "Seasonal morning invitations where parents join children in the Creative Atelier or plant herbs together in the Nature Garden." }
                ].map(card => `
                  <div class="bg-white rounded-3xl p-5 border border-[#39263E]/10 shadow-soft space-y-2">
                    <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EAEBFF] text-[#39263E]">${card.tag}</span>
                    <h3 class="font-serif font-bold text-lg text-[#39263E]">${card.title}</h3>
                    <p class="text-xs text-[#45534C] leading-relaxed">${card.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 09 — ADMISSIONS MADE SIMPLE -->
        <section class="py-16 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span class="text-xs font-extrabold uppercase tracking-[0.2em] text-[#174F43]">ADMISSIONS MADE SIMPLE</span>
                <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#174F43] mt-1">
                  A calm, transparent journey for <span class="italic font-normal">curious families.</span>
                </h2>
              </div>
              <button type="button" onclick="window.app.navigate('/admissions')" class="px-6 py-2.5 rounded-full border border-[#39263E]/30 hover:bg-[#39263E] hover:text-white text-[#39263E] font-bold text-sm transition-colors self-start md:self-auto">
                Explore Admissions →
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              ${[
                { step: "Step 01", title: "Discover a program", desc: "Use our interactive Age Selector to explore Playgroup, Nursery, or Kindergarten.", route: "/programs", cta: "Find Program →", bg: "bg-[#ECF6D8]" },
                { step: "Step 02", title: "Explore the school", desc: "Walk through our 6 sunlit learning spaces and sample daily schedule online.", route: "/our-campus", cta: "Tour Spaces →", bg: "bg-[#F4F0E9]" },
                { step: "Step 03", title: "Request a tour", desc: "Try our 6-step guided tour scheduler to select a demonstration visit window.", route: "/book-a-tour", cta: "Book Demo Tour →", bg: "bg-[#FDE8D8]" },
                { step: "Step 04", title: "Submit an inquiry", desc: "Complete our 8-step Admission Inquiry Wizard using synthetic family data.", route: "/apply", cta: "Start Wizard →", bg: "bg-[#EAEBFF]" },
                { step: "Step 05", title: "Review next steps", desc: "Inspect your simulated submission inside our interactive Admin Dashboard.", route: "/admin", cta: "Open Dashboard →", bg: "bg-[#FDF2D0]" }
              ].map(s => `
                <div onclick="window.app.navigate('${s.route}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.app.navigate('${s.route}');}" class="group cursor-pointer ${s.bg} rounded-3xl p-5 border border-[#39263E]/10 shadow-soft hover:shadow-editorial transition-all flex flex-col justify-between space-y-4">
                  <div class="space-y-2">
                    <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">${s.step}</span>
                    <h3 class="font-serif font-bold text-lg text-[#39263E]">${s.title}</h3>
                    <p class="text-xs text-[#45534C] leading-relaxed">${s.desc}</p>
                  </div>
                  <span class="text-xs font-bold text-[#39263E] group-hover:text-[#174F43] inline-flex items-center gap-1">
                    ${s.cta}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- SECTION 10 — FINAL CONVERSION SECTION -->
        <section class="pb-16 pt-4 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-[#174F43] text-white rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-editorial relative overflow-hidden">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-7 space-y-5">
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#D9EDB5] text-xs font-bold uppercase tracking-wider">
                    <span>ADMISSIONS · SIMULATED CONCEPT EXPERIENCE</span>
                  </div>
                  <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Come see the<br/>magic <span class="italic font-normal text-[#D9EDB5]">for yourself.</span>
                  </h2>
                  <p class="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
                    Explore the learning spaces, discover our philosophy and experience the world of Little Roots through our interactive school concept.
                  </p>
                  <div class="flex flex-wrap items-center gap-3.5 pt-2">
                    <button type="button" onclick="window.app.navigate('/book-a-tour')" class="px-7 py-3.5 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] font-bold text-sm sm:text-base shadow-md transition-all inline-flex items-center gap-2">
                      <span>Book a School Tour</span>
                      <span aria-hidden="true">→</span>
                    </button>
                    <button type="button" onclick="window.app.navigate('/admissions')" class="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/25 transition-all">
                      Explore Admissions
                    </button>
                  </div>
                  <p class="text-xs text-[#D9EDB5]/85 italic">
                    Note: Tour requests and inquiries on this site are interactive portfolio demonstrations and do not book real school appointments.
                  </p>
                </div>

                <div class="lg:col-span-5 flex justify-center lg:justify-end">
                  <div class="relative w-full max-w-sm">
                    <div class="mask-arch overflow-hidden border-4 border-[#D9EDB5]/40 shadow-2xl bg-[#281A2C]">
                      <img src="${window.LR_DATA.images.campusDoorway}" alt="Arched wooden doorway with sunlit garden and 'Good Children Brighter Worlds' inscription" loading="lazy" class="w-full h-64 sm:h-72 object-cover editorial-photo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderOurStory = function() {
      return `
        <section class="bg-[#F4F0E9] py-14 border-b border-[#39263E]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div class="lg:col-span-7 space-y-5">
                <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
                  ${window.LR_SVGS.sproutIcon('#174F43')}
                  <span>OUR STORY &amp; PHILOSOPHY</span>
                </span>
                <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E] leading-tight">
                  Small beginnings.<br/><span class="italic font-normal">Extraordinary growth.</span>
                </h1>
                <p class="text-base sm:text-lg text-[#45534C] leading-relaxed">
                  Conceived for families in Dhaka, Bangladesh seeking a calm, nature-connected alternative to high-pressure early schooling, <strong>Little Roots Kindergarten</strong> is built around a simple metaphor: <em>The Growing Seed</em>.
                </p>
                <p class="text-sm sm:text-base text-[#45534C] leading-relaxed">
                  Just as a seedling cannot be rushed into bloom by pulling on its leaves, a young child flourishes when given rich soil, warm sunlight, gentle guidance, and unhurried time to explore.
                </p>
                <div class="flex flex-wrap gap-3 pt-2">
                  <button type="button" onclick="window.app.navigate('/our-educators')" class="px-6 py-3 rounded-full bg-[#39263E] text-white font-bold text-sm hover:bg-[#174F43] transition-colors">
                    Meet Our Teaching Philosophy →
                  </button>
                  <button type="button" onclick="window.app.navigate('/our-campus')" class="px-6 py-3 rounded-full bg-white text-[#39263E] font-bold text-sm border border-[#39263E]/25 hover:bg-[#ECF6D8] transition-colors">
                    Explore Our Learning Spaces
                  </button>
                </div>
              </div>
              <div class="lg:col-span-5">
                <div class="mask-petal overflow-hidden border-4 border-white shadow-editorial">
                  <img src="${window.LR_DATA.images.approachFlower}" alt="Child exploring a white flower in sunlight" class="w-full h-80 sm:h-96 object-cover editorial-photo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div class="max-w-3xl">
              <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">PEDAGOGOGICAL FOUNDATION</span>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-[#39263E] mt-1">
                Three roots that nourish every day at Little Roots.
              </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-[#ECF6D8] rounded-3xl p-7 border border-[#174F43]/15 space-y-3">
                <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">01 · The Environment as Third Teacher</span>
                <h3 class="font-serif font-bold text-2xl text-[#39263E]">Spaces that invite calm autonomy</h3>
                <p class="text-sm text-[#45534C] leading-relaxed">
                  Drawing inspiration from Reggio Emilia, our classrooms replace visual clutter and neon plastic with natural daylight, birch wood, woven textures, and indoor greenery—supporting focus and sensory calm.
                </p>
              </div>
              <div class="bg-[#FDE8D8] rounded-3xl p-7 border border-[#39263E]/10 space-y-3">
                <span class="text-xs font-extrabold uppercase tracking-wider text-[#39263E]">02 · A Hundred Languages of Play</span>
                <h3 class="font-serif font-bold text-2xl text-[#39263E]">Thinking with hands, heart, and voice</h3>
                <p class="text-sm text-[#45534C] leading-relaxed">
                  Whether measuring water in the garden, sculpting terracotta clay in the Atelier, or building block bridges, children construct deep conceptual understanding through joyful, tactile investigation.
                </p>
              </div>
              <div class="bg-[#EAEBFF] rounded-3xl p-7 border border-[#39263E]/10 space-y-3">
                <span class="text-xs font-extrabold uppercase tracking-wider text-[#39263E]">03 · Rooted in Dhaka, Connected to Nature</span>
                <h3 class="font-serif font-bold text-2xl text-[#39263E]">Urban childhood meets living ecology</h3>
                <p class="text-sm text-[#45534C] leading-relaxed">
                  In a bustling city, our Nature Garden gives children daily intimacy with soil, monsoon rain, herbs, and pollinators—nurturing environmental stewardship and cultural warmth.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-[36px] p-8 sm:p-10 border border-[#39263E]/12 shadow-soft">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-6 space-y-4">
                  <span class="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4F0E9] text-[#39263E]">
                    BRAND IDENTITY SYSTEM · REFERENCE 01
                  </span>
                  <h3 class="font-serif text-2xl sm:text-3xl font-bold text-[#39263E]">
                    The Growing Seed Visual Identity
                  </h3>
                  <p class="text-sm text-[#45534C] leading-relaxed">
                    Our visual identity combines a sprouting two-leaf seedling, a curved root ground arc, a soft apricot sun with four golden rays, and refined Deep Aubergine typography with a signature leaf sprouting from the second "l".
                  </p>
                  <div class="flex flex-wrap items-center gap-6 pt-3">
                    <div class="p-4 rounded-2xl bg-[#FAFAF7] border border-[#39263E]/10">
                      ${window.LR_SVGS.primaryLogo()}
                      <p class="text-[11px] text-[#45534C] mt-2">Primary Horizontal Mark</p>
                    </div>
                    <div class="text-center">
                      ${window.LR_SVGS.appIcon()}
                      <p class="text-[11px] text-[#45534C] mt-1.5">App Icon</p>
                    </div>
                    <div class="text-center">
                      ${window.LR_SVGS.circularEmblem()}
                      <p class="text-[11px] text-[#45534C] mt-1">Circular Emblem</p>
                    </div>
                  </div>
                </div>
                <div class="lg:col-span-6">
                  <div class="rounded-3xl overflow-hidden border border-[#39263E]/15 shadow-sm bg-[#FAFAF7]">
                    <img src="${window.LR_DATA.images.brandSheet}" alt="Little Roots Kindergarten official brand identity reference sheet" loading="lazy" class="w-full h-auto object-cover" />
                  </div>
                  <p class="text-xs text-[#45534C] mt-2 text-center">
                    Approved Reference 01 Brand Sheet — preserved faithfully in vector SVG and brand tokens across all 18 routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderPrograms = function(state) {
      const selectedBand = state.ageSelectorBand || 'all';
      const recommendedProgs = selectedBand === 'all'
        ? window.LR_DATA.programs
        : window.LR_DATA.programs.filter(p => p.ageBandKey === selectedBand || p.ageBandKey === 'enrichment');

      return `
        <section class="bg-[#F4F0E9] py-12 lg:py-16 border-b border-[#39263E]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div class="max-w-3xl space-y-3">
              <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9EDB5] text-[#174F43] text-xs font-extrabold uppercase tracking-wider">
                <span>PROGRAM EXPLORER</span>
              </span>
              <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E]">
                Nurturing every stage of <span class="italic font-normal">early wonder.</span>
              </h1>
              <p class="text-base text-[#45534C] leading-relaxed">
                Explore our demonstration learning pathways by age group, compare developmental priorities, and launch a simulated admission inquiry pre-filled with your selected program.
              </p>
            </div>

            <div class="bg-white rounded-[32px] p-6 sm:p-8 border border-[#39263E]/12 shadow-editorial space-y-5">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#174F43]">Interactive Age Band Finder</span>
                  <h2 class="font-serif text-2xl font-bold text-[#39263E]">Select your child's approximate age group:</h2>
                  <p class="text-xs text-[#45534C] mt-0.5">
                    No date of birth is collected. Where age bands overlap (e.g., 3 or 4 years), final placement in an operating school depends on admissions policy and family conversation.
                  </p>
                </div>
                <div class="flex flex-wrap gap-2" role="group" aria-label="Select Child Age Band">
                  ${[
                    { key: 'all', label: 'All Ages (2–6 yrs)' },
                    { key: '2-3', label: '2–3 Years (Playgroup)' },
                    { key: '3-4', label: '3–4 Years (Nursery)' },
                    { key: '4-6', label: '4–6 Years (Kindergarten)' },
                    { key: 'enrichment', label: 'Enrichment Studios' }
                  ].map(b => `
                    <button type="button" onclick="window.app.setAgeSelectorBand('${b.key}')" class="px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${selectedBand === b.key ? 'bg-[#174F43] text-white shadow-sm scale-105' : 'bg-[#F4F0E9] text-[#39263E] hover:bg-[#D9EDB5]'}">
                      ${b.label}
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                ${recommendedProgs.map(prog => `
                  <div class="rounded-3xl overflow-hidden ${prog.cardBg} border border-[#39263E]/12 shadow-soft flex flex-col justify-between">
                    <div>
                      <div class="relative h-48 overflow-hidden bg-[#F4F0E9]">
                        <img src="${prog.image}" alt="${prog.title}" class="w-full h-full object-cover editorial-photo" />
                        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-[#39263E] text-xs font-extrabold shadow-sm">
                          ${prog.ageRange}
                        </span>
                      </div>
                      <div class="p-6 space-y-3">
                        <div class="flex items-center justify-between">
                          <h3 class="font-serif font-bold text-2xl text-[#39263E]">${prog.title}</h3>
                          ${window.LR_PAGES.programIconSvg(prog.iconType)}
                        </div>
                        <p class="text-sm font-semibold text-[#174F43]">${prog.heroTagline}</p>
                        <p class="text-xs text-[#45534C] leading-relaxed">${prog.overview}</p>
                        <div class="pt-2 space-y-1.5">
                          <p class="text-[11px] font-bold uppercase tracking-wider text-[#45534C]">Key Developmental Focus:</p>
                          ${prog.developmentAreas.slice(0, 3).map(d => `
                            <div>
                              <div class="flex justify-between text-xs font-semibold text-[#39263E]">
                                <span>${d.area}</span>
                                <span>Illustrative Focus</span>
                              </div>
                              <div class="w-full h-1.5 bg-white/70 rounded-full overflow-hidden mt-0.5">
                                <div class="h-full bg-[#174F43] rounded-full" style="width:${d.focus}%"></div>
                              </div>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    </div>
                    <div class="p-6 pt-0 flex flex-wrap gap-2">
                      <button type="button" onclick="window.app.navigate('${prog.route}')" class="flex-1 py-2.5 px-4 rounded-full bg-[#39263E] hover:bg-[#174F43] text-white text-xs font-bold text-center transition-colors">
                        Explore ${prog.title} →
                      </button>
                      <button type="button" onclick="window.app.startInquiryWithProgram('${prog.title}')" class="py-2.5 px-4 rounded-full bg-white hover:bg-[#F6C866] text-[#39263E] text-xs font-bold border border-[#39263E]/20 transition-colors">
                        Prefill Inquiry
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span class="text-xs font-extrabold uppercase tracking-wider text-[#174F43]">SIDE-BY-SIDE OVERVIEW</span>
              <h2 class="font-serif text-3xl font-bold text-[#39263E] mt-1">Compare Our Core Learning Pathways</h2>
            </div>

            <div class="overflow-x-auto bg-white rounded-3xl border border-[#39263E]/12 shadow-soft">
              <table class="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr class="bg-[#39263E] text-white text-xs uppercase tracking-wider">
                    <th class="p-4 font-bold">Program Attribute</th>
                    <th class="p-4 font-bold bg-[#174F43]">Playgroup (2–3 yrs)</th>
                    <th class="p-4 font-bold">Nursery (3–4 yrs)</th>
                    <th class="p-4 font-bold bg-[#4E3555]">Kindergarten (4–6 yrs)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#39263E]/10 text-sm">
                  <tr>
                    <td class="p-4 font-bold text-[#39263E] bg-[#F4F0E9]/60">Primary Emotional Goal</td>
                    <td class="p-4">Secure settling-in, sensory trust &amp; gentle routines</td>
                    <td class="p-4">Cooperative friendships, turn-taking &amp; imaginative confidence</td>
                    <td class="p-4">Compassionate leadership, self-regulation &amp; primary readiness</td>
                  </tr>
                  <tr>
                    <td class="p-4 font-bold text-[#39263E] bg-[#F4F0E9]/60">Core Learning Mode</td>
                    <td class="p-4">Tactile exploration, song circles, water/clay &amp; parallel play</td>
                    <td class="p-4">Unit block construction, story theater &amp; small-group inquiry</td>
                    <td class="p-4">Multi-week project investigations, joyful phonics &amp; math manipulatives</td>
                  </tr>
                  <tr>
                    <td class="p-4 font-bold text-[#39263E] bg-[#F4F0E9]/60">Key Campus Spaces</td>
                    <td class="p-4">Sensory Corner, Discovery Classroom, Nature Garden</td>
                    <td class="p-4">Discovery Classroom, Creative Atelier, Little Library, Garden</td>
                    <td class="p-4">All 6 Campus Spaces including Movement Studio &amp; Atelier</td>
                  </tr>
                  <tr>
                    <td class="p-4 font-bold text-[#39263E] bg-[#F4F0E9]/60">Action</td>
                    <td class="p-4"><button type="button" onclick="window.app.navigate('/programs/playgroup')" class="text-xs font-bold text-[#174F43] underline">View Playgroup Details →</button></td>
                    <td class="p-4"><button type="button" onclick="window.app.navigate('/programs/nursery')" class="text-xs font-bold text-[#174F43] underline">View Nursery Details →</button></td>
                    <td class="p-4"><button type="button" onclick="window.app.navigate('/programs/kindergarten')" class="text-xs font-bold text-[#174F43] underline">View Kindergarten Details →</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      `;
    };

    window.LR_PAGES.renderProgramDetail = function(progId) {
      if (progId === 'enrichment') {
        const nature = window.LR_DATA.programs.find(p => p.id === 'nature-explorers');
        const atelier = window.LR_DATA.programs.find(p => p.id === 'creative-atelier');
        return `
          <section class="bg-[#ECF6D8] py-12 lg:py-16 border-b border-[#174F43]/15">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div class="flex items-center gap-2 text-xs font-bold text-[#174F43]">
                <button type="button" onclick="window.app.navigate('/programs')" class="hover:underline">← Back to All Programs</button>
                <span>/</span>
                <span>Enrichment Studios (Ages 2–6)</span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-7 space-y-4">
                  <span class="px-3 py-1 rounded-full bg-white text-[#174F43] text-xs font-extrabold uppercase tracking-wider">SIGNATURE ENRICHMENT TRACKS</span>
                  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E]">
                    Nature Explorers &amp; <span class="italic font-normal">Creative Atelier</span>
                  </h1>
                  <p class="text-base text-[#45534C] leading-relaxed">
                    Our two signature enrichment studios connect children deeply with the living natural world and the expressive visual arts—woven into both morning discovery and afternoon studio sessions.
                  </p>
                  <div class="flex flex-wrap gap-3 pt-2">
                    <button type="button" onclick="window.app.startInquiryWithProgram('Enrichment (Nature & Atelier)')" class="px-6 py-3 rounded-full bg-[#174F43] text-white font-bold text-sm hover:bg-[#39263E] transition-colors">
                      Begin Enrichment Inquiry →
                    </button>
                    <button type="button" onclick="window.app.navigate('/book-a-tour')" class="px-6 py-3 rounded-full bg-[#F6C866] text-[#39263E] font-bold text-sm hover:bg-[#F8BD96] transition-colors">
                      Book a Studio Tour
                    </button>
                  </div>
                </div>
                <div class="lg:col-span-5 grid grid-cols-2 gap-4">
                  <img src="${nature.image}" alt="Nature Explorers" class="rounded-3xl h-64 w-full object-cover shadow-editorial border-2 border-white editorial-photo" />
                  <img src="${atelier.image}" alt="Creative Atelier" class="rounded-3xl h-64 w-full object-cover shadow-editorial border-2 border-white editorial-photo mt-6" />
                </div>
              </div>
            </div>
          </section>

          <section class="py-14 bg-[#FAFAF7]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              ${[nature, atelier].map(track => `
                <div class="${track.cardBg} rounded-[32px] p-7 sm:p-8 border border-[#39263E]/12 shadow-soft space-y-5">
                  <div class="flex items-center justify-between">
                    <span class="px-3 py-1 rounded-full bg-white text-[#39263E] text-xs font-bold">${track.ageRange}</span>
                    ${window.LR_PAGES.programIconSvg(track.iconType)}
                  </div>
                  <h2 class="font-serif text-3xl font-bold text-[#39263E]">${track.title}</h2>
                  <p class="text-sm font-semibold text-[#174F43]">${track.heroTagline}</p>
                  <p class="text-sm text-[#45534C] leading-relaxed">${track.overview}</p>
                  <div class="bg-white/80 rounded-2xl p-5 space-y-2">
                    <h3 class="font-serif font-bold text-base text-[#39263E]">Learning Objectives</h3>
                    <ul class="space-y-1.5 text-xs text-[#45534C]">
                      ${track.objectives.map(o => `<li class="flex items-start gap-2"><span class="text-[#174F43] font-bold">✓</span><span>${o}</span></li>`).join('')}
                    </ul>
                  </div>
                  <div class="bg-white/80 rounded-2xl p-5 space-y-2">
                    <h3 class="font-serif font-bold text-base text-[#39263E]">Sample Studio Rhythm</h3>
                    <div class="space-y-2">
                      ${track.dailyActivities.map(act => `
                        <div class="flex items-start gap-3 text-xs border-b border-[#39263E]/10 pb-1.5 last:border-none">
                          <span class="font-bold text-[#174F43] w-16 flex-shrink-0">${act.time}</span>
                          <div><strong class="text-[#39263E]">${act.title}:</strong> ${act.detail}</div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        `;
      }

      const prog = window.LR_DATA.programs.find(p => p.id === progId) || window.LR_DATA.programs[0];
      return `
        <section class="${prog.cardBg} py-12 lg:py-16 border-b border-[#39263E]/10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#39263E]">
              <div class="flex items-center gap-2">
                <button type="button" onclick="window.app.navigate('/programs')" class="hover:underline">← All Programs</button>
                <span>/</span>
                <span>${prog.title} (${prog.ageRange})</span>
              </div>
              <div class="flex gap-1.5">
                <button type="button" onclick="window.app.navigate('/programs/playgroup')" class="px-3 py-1 rounded-full ${prog.id==='playgroup'?'bg-[#39263E] text-white':'bg-white/80 text-[#39263E]'}">Playgroup</button>
                <button type="button" onclick="window.app.navigate('/programs/nursery')" class="px-3 py-1 rounded-full ${prog.id==='nursery'?'bg-[#39263E] text-white':'bg-white/80 text-[#39263E]'}">Nursery</button>
                <button type="button" onclick="window.app.navigate('/programs/kindergarten')" class="px-3 py-1 rounded-full ${prog.id==='kindergarten'?'bg-[#39263E] text-white':'bg-white/80 text-[#39263E]'}">Kindergarten</button>
                <button type="button" onclick="window.app.navigate('/programs/enrichment')" class="px-3 py-1 rounded-full bg-white/80 text-[#39263E]">Enrichment</button>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-7 space-y-4">
                <span class="inline-block px-3.5 py-1 rounded-full bg-white text-[#39263E] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  ${prog.title} · Indicative Age Range: ${prog.ageRange}
                </span>
                <h1 class="font-serif text-4xl sm:text-5xl font-bold text-[#39263E] leading-tight">
                  ${prog.title}: <span class="italic font-normal">${prog.shortDesc}</span>
                </h1>
                <p class="text-base text-[#45534C] leading-relaxed">${prog.overview}</p>
                <div class="flex flex-wrap gap-3 pt-2">
                  <button type="button" onclick="window.app.startInquiryWithProgram('${prog.title}')" class="px-7 py-3.5 rounded-full bg-[#174F43] hover:bg-[#39263E] text-white font-bold text-sm transition-colors">
                    Begin ${prog.title} Admission Inquiry →
                  </button>
                  <button type="button" onclick="window.app.startTourWithProgram('${prog.title}')" class="px-6 py-3.5 rounded-full bg-[#F6C866] hover:bg-[#F8BD96] text-[#39263E] font-bold text-sm transition-colors">
                    Book a ${prog.title} Tour
                  </button>
                </div>
              </div>
              <div class="lg:col-span-5">
                <div class="mask-organic-hero overflow-hidden border-4 border-white shadow-editorial bg-white">
                  <img src="${prog.secondaryImage}" alt="${prog.title} classroom space" class="w-full h-72 sm:h-80 object-cover editorial-photo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-14 bg-[#FAFAF7]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7 space-y-8">
              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#39263E]/10 shadow-soft space-y-4">
                <h2 class="font-serif text-2xl font-bold text-[#39263E]">Learning Objectives</h2>
                <ul class="space-y-3 text-sm text-[#45534C]">
                  ${prog.objectives.map(obj => `
                    <li class="flex items-start gap-3">
                      <span class="w-6 h-6 rounded-full bg-[#ECF6D8] text-[#174F43] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                      <span>${obj}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#39263E]/10 shadow-soft space-y-4">
                <div class="flex items-center justify-between">
                  <h2 class="font-serif text-2xl font-bold text-[#39263E]">Sample ${prog.title} Daily Schedule</h2>
                  <span class="text-xs text-[#45534C] italic">Illustrative rhythm</span>
                </div>
                <div class="space-y-3">
                  ${prog.dailyActivities.map(item => `
                    <div class="p-4 rounded-2xl bg-[#F4F0E9]/75 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span class="px-3 py-1 rounded-full bg-[#174F43] text-white text-xs font-bold self-start">${item.time}</span>
                      <div>
                        <h3 class="font-serif font-bold text-base text-[#39263E]">${item.title}</h3>
                        <p class="text-xs text-[#45534C]">${item.detail}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 space-y-6">
              <div class="bg-white rounded-3xl p-6 border border-[#39263E]/10 shadow-soft space-y-4">
                <h2 class="font-serif text-xl font-bold text-[#39263E]">Areas of Development</h2>
                <div class="space-y-3">
                  ${prog.developmentAreas.map(d => `
                    <div class="p-3.5 rounded-2xl bg-[#FAFAF7] border border-[#39263E]/8">
                      <span class="font-serif font-bold text-sm text-[#174F43]">${d.area}</span>
                      <p class="text-xs text-[#45534C] mt-0.5">${d.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="bg-white rounded-3xl p-6 border border-[#39263E]/10 shadow-soft space-y-3">
                <h2 class="font-serif text-xl font-bold text-[#39263E]">Primary Learning Spaces</h2>
                <div class="flex flex-wrap gap-2">
                  ${prog.spaces.map(sp => `
                    <button type="button" onclick="window.app.navigate('/our-campus')" class="px-3.5 py-1.5 rounded-full bg-[#ECF6D8] text-[#174F43] text-xs font-bold hover:bg-[#174F43] hover:text-white transition-colors">
                      ${sp} →
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="bg-white rounded-3xl p-6 border border-[#39263E]/10 shadow-soft space-y-3">
                <h2 class="font-serif text-xl font-bold text-[#39263E]">${prog.title} FAQs</h2>
                <div class="space-y-3">
                  ${prog.faqs.map(f => `
                    <div class="p-4 rounded-2xl bg-[#F4F0E9]/70 space-y-1">
                      <h3 class="font-bold text-xs text-[#39263E]">Q: ${f.q}</h3>
                      <p class="text-xs text-[#45534C] leading-relaxed">${f.a}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    };