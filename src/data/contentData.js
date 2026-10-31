window.LR_SVGS = {
      primaryLogo: function(scaleClass) {
        return `
          <div class="inline-flex items-center gap-2.5 select-none ${scaleClass || ''}">
            <svg class="w-12 h-11 flex-shrink-0" viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="lrLeftLeaf" x1="15" y1="30" x2="55" y2="75" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#B7D36F"/>
                  <stop offset="55%" stop-color="#84A446"/>
                  <stop offset="100%" stop-color="#4A6B32"/>
                </linearGradient>
                <linearGradient id="lrGround" x1="10" y1="88" x2="95" y2="92" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#6E8A3C"/>
                  <stop offset="50%" stop-color="#7F9B48"/>
                  <stop offset="100%" stop-color="#9BB75A"/>
                </linearGradient>
              </defs>
              <line x1="36" y1="16" x2="41" y2="23" stroke="#F6C866" stroke-width="4" stroke-linecap="round"/>
              <line x1="53" y1="9" x2="53" y2="18" stroke="#F6C866" stroke-width="4" stroke-linecap="round"/>
              <line x1="70" y1="12" x2="66" y2="20" stroke="#F6C866" stroke-width="4" stroke-linecap="round"/>
              <line x1="81" y1="21" x2="74" y2="26" stroke="#F6C866" stroke-width="4" stroke-linecap="round"/>
              <circle cx="56" cy="33" r="10.5" fill="#F89D70"/>
              <path d="M53 76 C51 54, 38 36, 12 37 C13 59, 29 71, 51 76 Z" fill="url(#lrLeftLeaf)"/>
              <path d="M23 46 C35 52, 45 62, 52 77" stroke="#FAFAF7" stroke-width="2.4" stroke-linecap="round"/>
              <path d="M54 78 C56 52, 71 33, 98 34 C93 58, 76 71, 55 77 Z" fill="#174F43"/>
              <path d="M84 44 C72 52, 61 63, 54 79" stroke="#FAFAF7" stroke-width="2.4" stroke-linecap="round"/>
              <path d="M53 68 L53 84" stroke="#174F43" stroke-width="5.5" stroke-linecap="round"/>
              <path d="M12 92 C35 79, 71 79, 94 92 C71 86, 36 86, 12 92 Z" fill="url(#lrGround)"/>
            </svg>
            <div class="leading-none">
              <div class="relative inline-block">
                <span class="font-serif font-bold text-[23px] sm:text-[26px] tracking-tight text-[#39263E]">Littl</span><span class="font-serif font-bold text-[23px] sm:text-[26px] tracking-tight text-[#39263E] relative">e
                  <svg class="w-4 h-4 absolute -top-2.5 -left-1.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 20 C6 10, 14 4, 22 4 C20 12, 14 18, 4 20 Z" fill="#7E9946"/>
                    <path d="M4 20 C10 14, 15 10, 19 6" stroke="#FAFAF7" stroke-width="1.4" stroke-linecap="round"/>
                  </svg>
                </span>
                <span class="font-serif font-bold text-[23px] sm:text-[26px] tracking-tight text-[#39263E] ml-0.5">Roots</span>
              </div>
              <div class="flex items-center gap-1.5 mt-0.5">
                <span class="h-[1.5px] w-4 bg-[#5C7A29] inline-block"></span>
                <span class="text-[8.5px] sm:text-[9.5px] font-sans font-bold tracking-[0.28em] text-[#4E6737] uppercase">KINDERGARTEN</span>
                <span class="h-[1.5px] w-4 bg-[#5C7A29] inline-block"></span>
              </div>
            </div>
          </div>
        `;
      },

      appIcon: function() {
        return `
          <svg class="w-20 h-20 rounded-2xl shadow-editorial" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Little Roots App Icon">
            <rect width="120" height="120" rx="28" fill="#39263E"/>
            <line x1="43" y1="26" x2="47" y2="32" stroke="#F6C866" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="60" y1="20" x2="60" y2="28" stroke="#F6C866" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="77" y1="26" x2="73" y2="32" stroke="#F6C866" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="60" cy="41" r="9.5" fill="#F89D70"/>
            <path d="M59 84 C57 64, 44 49, 22 50 C24 69, 38 80, 58 84 Z" fill="#B7D36F"/>
            <path d="M61 84 C63 64, 76 49, 98 50 C96 69, 82 80, 62 84 Z" fill="#98C964"/>
            <path d="M60 74 L60 92" stroke="#D9EDB5" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M26 96 C46 86, 74 86, 94 96 C74 91, 46 91, 26 96 Z" fill="#D9EDB5"/>
          </svg>
        `;
      },

      circularEmblem: function() {
        return `
          <svg class="w-24 h-24" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Little Roots Circular Emblem">
            <circle cx="70" cy="70" r="66" fill="#FAFAF7" stroke="#5C7A29" stroke-width="2.5"/>
            <circle cx="70" cy="70" r="59" stroke="#39263E" stroke-opacity="0.15" stroke-width="1"/>
            <line x1="55" y1="39" x2="58" y2="44" stroke="#F6C866" stroke-width="3" stroke-linecap="round"/>
            <line x1="70" y1="34" x2="70" y2="40" stroke="#F6C866" stroke-width="3" stroke-linecap="round"/>
            <line x1="85" y1="39" x2="82" y2="44" stroke="#F6C866" stroke-width="3" stroke-linecap="round"/>
            <circle cx="70" cy="52" r="8" fill="#F89D70"/>
            <path d="M69 88 C67 72, 56 59, 38 60 C40 76, 52 85, 68 88 Z" fill="#84A446"/>
            <path d="M71 88 C73 72, 84 59, 102 60 C100 76, 88 85, 72 88 Z" fill="#174F43"/>
            <path d="M70 78 L70 94" stroke="#174F43" stroke-width="4" stroke-linecap="round"/>
            <path d="M42 98 C58 90, 82 90, 98 98 C82 94, 58 94, 42 98 Z" fill="#7E9946"/>
            <text x="70" y="25" text-anchor="middle" fill="#39263E" font-size="9.5" font-weight="700" letter-spacing="2.5">LITTLE ROOTS</text>
            <text x="70" y="121" text-anchor="middle" fill="#4E6737" font-size="8.5" font-weight="700" letter-spacing="2.2">KINDERGARTEN</text>
          </svg>
        `;
      },

      sproutIcon: function(color) {
        const c = color || '#174F43';
        return `
          <svg class="w-6 h-6 animate-seed inline-block" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 27V14" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M16 18C16 12 10 8 4 9C4 15 9 19 16 18Z" fill="#D9EDB5" stroke="${c}" stroke-width="1.8"/>
            <path d="M16 15C16 9 22 5 28 6C28 12 23 16 16 15Z" fill="#F8BD96" stroke="${c}" stroke-width="1.8"/>
            <path d="M8 27C13 25 19 25 24 27" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
      }
    };

    window.LR_DATA = {
      images: {
        hero: "/assets/images/ref_hero_children.webp",
        progPlaygroup: "/assets/images/ref_prog_playgroup.webp",
        progNursery: "/assets/images/ref_prog_nursery.webp",
        progKindergarten: "/assets/images/ref_prog_kindergarten.webp",
        progNature: "/assets/images/ref_prog_nature.webp",
        progAtelier: "/assets/images/ref_prog_atelier.webp",
        approachFlower: "/assets/images/ref_approach_flower.webp",
        dayNature: "/assets/images/ref_day_nature.webp",
        dayCreative: "/assets/images/ref_day_creative.webp",
        dayMovement: "/assets/images/ref_day_movement.webp",
        dayKindness: "/assets/images/ref_day_kindness.webp",
        campusDoorway: "/assets/images/ref_campus_doorway.webp",
        brandSheet: "/assets/images/ref_brand_sheet.webp",
        spaceClassroom: "/assets/images/space_classroom.webp",
        spaceGarden: "/assets/images/space_garden.webp",
        spaceAtelier: "/assets/images/space_atelier.webp",
        spaceLibrary: "/assets/images/space_library.webp",
        spaceMovement: "/assets/images/space_movement.webp",
        spaceSensory: "/assets/images/space_sensory.webp"
      },

      programs: [
        {
          id: "playgroup",
          route: "/programs/playgroup",
          title: "Playgroup",
          ageRange: "2–3 years",
          ageBandKey: "2-3",
          shortDesc: "Gentle beginnings in a safe, nurturing environment.",
          heroTagline: "First footsteps into a warm, sensory-rich community beyond home.",
          cardBg: "bg-[#ECF6D8]",
          accentBg: "bg-[#84A446]",
          badgeBg: "bg-[#D9EDB5] text-[#174F43]",
          borderClass: "border-[#D9EDB5]",
          image: "/assets/images/ref_prog_playgroup.webp",
          secondaryImage: "/assets/images/space_sensory.webp",
          iconType: "leaf",
          rhythmSummary: "Morning sensory circles, tactile discovery, outdoor garden strolls, and unhurried social snack time.",
          overview: "Playgroup at Little Roots is designed around emotional security, gentle separation support, and tactile wonder. Children explore natural materials—wood, clay, water, leaves, and fabric—at their own pace alongside attentive early-years guides.",
          objectives: [
            "Foster secure emotional attachment and comfort in a shared classroom community.",
            "Develop early expressive language through songs, fingerplays, and interactive picture stories.",
            "Support gross and fine motor coordination through pouring, stacking, clay kneading, and balance play.",
            "Encourage parallel play that naturally blossoms into early cooperative moments."
          ],
          dailyActivities: [
            { time: "8:45 AM", title: "Warm Welcome & Sensory Invitations", detail: "Unhurried arrival with parents and calm tabletop exploration." },
            { time: "9:20 AM", title: "Morning Song & Story Circle", detail: "Rhythm, movement, and bilingual welcome songs." },
            { time: "9:45 AM", title: "Tactile Atelier & Light Table", detail: "Finger painting with botanical pigments, clay, and natural textures." },
            { time: "10:30 AM", title: "Garden Herb & Leaf Walk", detail: "Watering classroom planters and observing butterflies." },
            { time: "11:15 AM", title: "Shared Snack & Goodbye Circle", detail: "Self-help habits, gratitude songs, and calm family handover." }
          ],
          spaces: ["The Sensory Corner", "The Discovery Classroom", "The Nature Garden"],
          developmentAreas: [
            { area: "Emotional Security & Belonging", focus: 95, desc: "Warm transitions and predictable rhythms build deep trust." },
            { area: "Sensory & Motor Discovery", focus: 92, desc: "Hands-on exploration with natural wooden and botanical materials." },
            { area: "Early Language & Listening", focus: 85, desc: "Songs, storytelling, and naming feelings and everyday wonders." },
            { area: "Social Curiosity", focus: 80, desc: "Notice peers, practice gentle touch, and share space joyfully." }
          ],
          faqs: [
            { q: "How do you support children experiencing their first time away from home?", a: "Our conceptual model uses a gradual settling-in rhythm where a parent or guardian stays nearby during the first days until the child feels ready and secure." },
            { q: "Does my two-year-old need to be fully toilet-independent for Playgroup?", a: "No. In our Playgroup concept, children are supported with gentle, respectful care routines in partnership with families." }
          ]
        },
        {
          id: "nursery",
          route: "/programs/nursery",
          title: "Nursery",
          ageRange: "3–4 years",
          ageBandKey: "3-4",
          shortDesc: "Building confidence through play, discovery and friendship.",
          heroTagline: "Where 'Why?' becomes a daily adventure in friendship, stories, and hands-on making.",
          cardBg: "bg-[#FDE8D8]",
          accentBg: "bg-[#D97F43]",
          badgeBg: "bg-[#F8BD96] text-[#39263E]",
          borderClass: "border-[#F8BD96]",
          image: "/assets/images/ref_prog_nursery.webp",
          secondaryImage: "/assets/images/space_classroom.webp",
          iconType: "rainbow",
          rhythmSummary: "Collaborative block architecture, dramatic storytelling, garden inquiry, and expressive studio work.",
          overview: "Between ages three and four, children's imaginations expand rapidly. Our Nursery program channels that curiosity into small-group inquiry projects, cooperative construction, rich oral storytelling, and outdoor botanical exploration.",
          objectives: [
            "Nurture collaborative play, turn-taking, empathy, and conflict resolution using gentle language.",
            "Introduce foundational numeracy and spatial reasoning through wooden unit blocks, sorting, and pattern play.",
            "Spark phonological awareness and love for books through daily dramatic storytelling.",
            "Build everyday independence in dressing, tidying materials, and caring for classroom plants."
          ],
          dailyActivities: [
            { time: "8:30 AM", title: "Free Inquiry & Block Studio", detail: "Open-ended wooden construction and investigative provocations." },
            { time: "9:15 AM", title: "Morning Circle & Wonder Question", detail: "Children share observations and shape the day's inquiry topic." },
            { time: "9:45 AM", title: "Creative Atelier & Clay Workshop", detail: "Mixed-media collage, brushwork, and botanical imprinting." },
            { time: "10:45 AM", title: "Nature Garden & Mud Kitchen", detail: "Digging, measuring water, and observing garden insects." },
            { time: "11:45 AM", title: "Story Theater & Reflection", detail: "Puppetry, shared reading in the Little Library, and farewell." }
          ],
          spaces: ["The Discovery Classroom", "The Creative Atelier", "The Little Library", "The Nature Garden"],
          developmentAreas: [
            { area: "Social Friendship & Empathy", focus: 94, desc: "Cooperative role-play and learning to listen to peers' ideas." },
            { area: "Imaginative & Symbolic Play", focus: 96, desc: "Turning blocks, fabrics, and loose parts into entire worlds." },
            { area: "Foundational Numeracy & Patterns", focus: 86, desc: "Sorting seeds, measuring plant growth, and spatial balance." },
            { area: "Language & Narrative Expression", focus: 90, desc: "Dictating original stories and acting out picture books." }
          ],
          faqs: [
            { q: "What if my child's age falls near the boundary between Playgroup and Nursery?", a: "Where age bands overlap, illustrative placement in a real school depends on the institution's admissions policy and readiness conversations with families." },
            { q: "How much structured worksheet work happens in Nursery?", a: "Rather than rote worksheets, Nursery builds pre-writing and math foundations through purposeful play—drawing observational sketches, counting seeds, and shaping clay." }
          ]
        },
        {
          id: "kindergarten",
          route: "/programs/kindergarten",
          title: "Kindergarten",
          ageRange: "4–6 years",
          ageBandKey: "4-6",
          shortDesc: "A strong foundation for curious, capable learners.",
          heroTagline: "Thoughtful inquiry, early literacy, mathematical wonder, and compassionate leadership.",
          cardBg: "bg-[#EAEBFF]",
          accentBg: "bg-[#7C82D8]",
          badgeBg: "bg-[#C6C9FF] text-[#39263E]",
          borderClass: "border-[#C6C9FF]",
          image: "/assets/images/ref_prog_kindergarten.webp",
          secondaryImage: "/assets/images/space_library.webp",
          iconType: "book",
          rhythmSummary: "Long-term project investigations, joyful literacy & mathematical discovery, studio art, and ecology stewardship.",
          overview: "Our Kindergarten program prepares 4-to-6-year-olds for primary school not through pressure, but through deep intellectual engagement. Children investigate real-world questions, document their hypotheses, read and write with purpose, and practice kindness as community leaders.",
          objectives: [
            "Develop confident emergent reading, phonics fluency, and expressive writing through project documentation.",
            "Build strong number sense, estimation, geometry, and logical problem-solving with concrete manipulatives.",
            "Lead multi-week Reggio-inspired research projects combining science, ecology, and visual arts.",
            "Cultivate self-regulation, perseverance, and kindness in group discussions and peer mentorship."
          ],
          dailyActivities: [
            { time: "8:30 AM", title: "Morning Provocations & Journaling", detail: "Sketching observations in personal nature & inquiry journals." },
            { time: "9:00 AM", title: "Community Meeting & Literacy Lab", detail: "Phonics games, shared reading, and collaborative story building." },
            { time: "9:50 AM", title: "Project Inquiry & Math Discovery", detail: "Hands-on mathematical investigations and scientific testing." },
            { time: "10:45 AM", title: "Outdoor Ecology & Movement Studio", detail: "Composting, garden measurements, and cooperative balance games." },
            { time: "12:15 PM", title: "Atelier Studio & Closing Reflection", detail: "Long-term sculpture/painting projects and daily gratitude circle." }
          ],
          spaces: ["The Discovery Classroom", "The Little Library", "The Creative Atelier", "The Nature Garden", "The Movement Studio"],
          developmentAreas: [
            { area: "Inquiry & Scientific Thinking", focus: 96, desc: "Asking testable questions, observing closely, and recording findings." },
            { area: "Emergent Literacy & Storytelling", focus: 94, desc: "Reading, phonetic writing, and articulate group communication." },
            { area: "Mathematical Reasoning", focus: 92, desc: "Concrete number operations, patterns, measurement, and logic." },
            { area: "Confidence & Compassionate Leadership", focus: 95, desc: "Taking initiative, helping younger peers, and caring for the environment." }
          ],
          faqs: [
            { q: "How does a play-based Kindergarten prepare children for primary school?", a: "Children who understand the 'why' behind numbers and words—and who can focus, collaborate, and solve problems—transition into primary environments with lasting confidence." },
            { q: "Are both English and Bangla cultural contexts celebrated?", a: "Yes! Designed for Dhaka families, the concept weaves rich English literacy with warm appreciation for local seasons, songs, flora, and Bangla storytelling traditions." }
          ]
        },
        {
          id: "nature-explorers",
          route: "/programs/enrichment",
          title: "Nature Explorers",
          ageRange: "Ages 2–6 (Enrichment)",
          ageBandKey: "enrichment",
          shortDesc: "Outdoor learning, real-world wonder and environmental discovery.",
          heroTagline: "Hands in the soil, eyes on the canopy—discovering ecology right in the heart of the city.",
          cardBg: "bg-[#ECF6D8]",
          accentBg: "bg-[#6E8E3E]",
          badgeBg: "bg-[#D9EDB5] text-[#174F43]",
          borderClass: "border-[#D9EDB5]",
          image: "/assets/images/ref_prog_nature.webp",
          secondaryImage: "/assets/images/space_garden.webp",
          iconType: "leaf",
          rhythmSummary: "Seed-to-table gardening, insect observation with magnifying glasses, monsoon weather study, and botanical sketching.",
          overview: "For children growing up in an urban setting like Dhaka, daily connection with living nature is transformative. Nature Explorers turns our outdoor discovery garden into an open-air laboratory where children plant herbs, observe pollinators, and learn stewardship.",
          objectives: [
            "Build sensory comfort and fascination with soil, plants, insects, and seasonal weather cycles.",
            "Understand life cycles by tending seeds from sprout to harvest in raised wooden planters.",
            "Practice scientific observation using magnifying glasses, nature journals, and leaf rubbings.",
            "Develop environmental empathy—understanding how small daily acts protect living things."
          ],
          dailyActivities: [
            { time: "9:30 AM", title: "Garden Tool & Safety Circle", detail: "Selecting watering cans, trowels, and magnifying lenses." },
            { time: "9:50 AM", title: "Seedling & Herb Care", detail: "Measuring sprout height and checking soil moisture." },
            { time: "10:20 AM", title: "Pollinator & Leaf Detective Walk", detail: "Observing leaf veins, beetles, and birds in the shaded pergola." },
            { time: "11:00 AM", title: "Botanical Field Sketching", detail: "Pressing fallen leaves and drawing findings in nature notebooks." }
          ],
          spaces: ["The Nature Garden", "The Sensory Corner"],
          developmentAreas: [
            { area: "Ecological Stewardship", focus: 98, desc: "Caring for living plants and understanding natural cycles." },
            { area: "Observational Science", focus: 94, desc: "Comparing leaf shapes, bark textures, and insect habitats." },
            { area: "Sensory Grounding & Calm", focus: 92, desc: "Sunlight, fresh air, and tactile earth work support emotional balance." }
          ],
          faqs: [
            { q: "Is Nature Explorers a separate afternoon track or integrated?", a: "In the Little Roots concept, Nature Explorers is both woven into morning rhythms and available as a dedicated enrichment studio session." }
          ]
        },
        {
          id: "creative-atelier",
          route: "/programs/enrichment",
          title: "Creative Atelier",
          ageRange: "Ages 2–6 (Enrichment)",
          ageBandKey: "enrichment",
          shortDesc: "Imagination, art, expression and playful creativity.",
          heroTagline: "A hundred languages of expression—clay, watercolor, light, shadow, sound, and natural collage.",
          cardBg: "bg-[#FDE8D8]",
          accentBg: "bg-[#D97F43]",
          badgeBg: "bg-[#F8BD96] text-[#39263E]",
          borderClass: "border-[#F8BD96]",
          image: "/assets/images/ref_prog_atelier.webp",
          secondaryImage: "/assets/images/space_atelier.webp",
          iconType: "palette",
          rhythmSummary: "Open-ended studio invitations with natural pigments, potter's clay, light projections, and loose parts.",
          overview: "Inspired by the Reggio Emilia atelier tradition, our Creative Atelier values process over pre-made templates. Children never color inside identical photocopies; instead, they mix their own botanical pigments, sculpt with natural clay, and build expressive installations.",
          objectives: [
            "Honor each child's original visual voice without rigid adult templates or cookie-cutter crafts.",
            "Explore diverse tactile media: terracotta clay, liquid watercolors, charcoal, weaving, and natural loose parts.",
            "Connect artistic expression with storytelling, music, movement, and light exploration.",
            "Build fine-motor precision, visual-spatial planning, and pride in sustained creative work."
          ],
          dailyActivities: [
            { time: "9:30 AM", title: "Material Dialogue", detail: "Exploring textures of clay, dried petals, twigs, and pigments." },
            { time: "10:00 AM", title: "Easel & Table Studio Work", detail: "Unhurried painting, sculpting, or collaborative mural making." },
            { time: "10:45 AM", title: "Light & Shadow Theater", detail: "Projecting translucent leaves and paper cutouts on the studio wall." },
            { time: "11:15 AM", title: "Gallery Walk & Artist Reflection", detail: "Children describe their creative choices to peers." }
          ],
          spaces: ["The Creative Atelier", "The Sensory Corner", "The Movement Studio"],
          developmentAreas: [
            { area: "Divergent & Creative Thinking", focus: 98, desc: "Inventing original solutions and visual stories." },
            { area: "Fine-Motor & Tool Mastery", focus: 93, desc: "Brush control, clay pinching, weaving, and scissor confidence." },
            { area: "Emotional Expression", focus: 95, desc: "Communicating feelings and wonder through color and form." }
          ],
          faqs: [
            { q: "What should children wear for Creative Atelier sessions?", a: "We encourage comfortable play clothes and provide breathable cotton studio smocks so children can dive into clay and paint freely." }
          ]
        }
      ],

      approachPillars: [
        {
          id: "curiosity",
          number: "01",
          title: "Curiosity",
          handwritten: "Curiosity leads to confidence.",
          headline: "Every question is the beginning of a meaningful journey.",
          description: "Rather than handing children ready-made answers, our educators listen closely to what fascinates them—a trail of ants in the garden, how shadows stretch across the floor, or why rain smells like earth—and turn those sparks into rich learning invitations.",
          classroomExample: "When a child notices veins on a fallen banyan leaf, our table transforms into a botanical investigation station with magnifying lenses, light tables, and field sketchbooks.",
          image: "/assets/images/ref_approach_flower.webp",
          badge: "Inquiry-Led Discovery"
        },
        {
          id: "creativity",
          number: "02",
          title: "Creativity",
          handwritten: "Imagination in every color.",
          headline: "A hundred expressive languages beyond worksheets.",
          description: "Children think with their hands, voices, and bodies. In our Creative Atelier and classrooms, we offer authentic artistic tools—natural clay, watercolors, wooden loose parts, and musical instruments—so imagination can take visible shape.",
          classroomExample: "Children mix turmeric, spinach, and hibiscus petals with water to discover how plants create natural paints before illustrating their own group storybook.",
          image: "/assets/images/space_atelier.webp",
          badge: "Reggio-Inspired Atelier"
        },
        {
          id: "kindness",
          number: "03",
          title: "Kindness",
          handwritten: "Kinder people. Brighter planet.",
          headline: "Empathy practiced in small, everyday moments.",
          description: "Kindness at Little Roots is not a poster on a wall—it is woven into how we greet friends at morning circle, how we listen when someone feels sad, how we share snacks, and how gently we handle living creatures in the garden.",
          classroomExample: "During daily reflection circles, children offer appreciation pebbles to classmates who helped a friend or cared for the classroom space.",
          image: "/assets/images/ref_day_kindness.webp",
          badge: "Compassionate Community"
        },
        {
          id: "confidence",
          number: "04",
          title: "Confidence",
          handwritten: "Small beginnings. Extraordinary growth.",
          headline: "Capable learners who trust their own voice and hands.",
          description: "Our environment is scaled for children's independence—low birch shelves, accessible water pitchers, and unhurried time to try, test, and try again. When children feel respected as capable individuals, genuine self-confidence takes root.",
          classroomExample: "From pouring their own water at snack time in Playgroup to presenting multi-week ecology projects in Kindergarten, every child experiences proud milestones.",
          image: "/assets/images/ref_hero_children.webp",
          badge: "Child-Centered Autonomy"
        }
      ],

      dailyRoutine: [
        {
          step: 1,
          time: "8:30 AM",
          title: "Welcome & Free Play",
          area: "Emotional Transition & Self-Directed Choice",
          shortDesc: "Unhurried arrival, warm greetings, and open tabletop invitations.",
          description: "Each morning begins calmly. Educators greet families at the door while children settle into familiar, sunlit spaces—choosing between wooden block construction, sensory baskets, or quiet book browsing with friends.",
          playgroupNote: "Parents may linger briefly for a gentle, reassuring transition.",
          nurseryNote: "Children hang their own bags and select a morning provocation.",
          kindergartenNote: "Learners record a morning observation or sketch in their discovery journal.",
          image: "/assets/images/space_classroom.webp",
          color: "bg-[#ECF6D8] text-[#174F43]"
        },
        {
          step: 2,
          time: "9:00 AM",
          title: "Circle Time & Stories",
          area: "Language, Belonging & Active Listening",
          shortDesc: "Morning songs, storytelling, and setting our shared wonder question.",
          description: "Seated together on woven cotton rugs, we welcome every voice. We sing morning songs, read an expressive picture book, observe the day's weather, and introduce the central question or provocation guiding our morning.",
          playgroupNote: "Short, joyful 10-minute circle with fingerplays and rhythm instruments.",
          nurseryNote: "Interactive puppetry and group conversation around a story theme.",
          kindergartenNote: "Collaborative dialogue where children propose hypotheses for the day's project.",
          image: "/assets/images/space_library.webp",
          color: "bg-[#EAEBFF] text-[#39263E]"
        },
        {
          step: 3,
          time: "9:30 AM",
          title: "Creative Discovery",
          area: "Fine Motor, Symbolic Expression & Divergent Thinking",
          shortDesc: "Studio work in the Creative Atelier with clay, pigment, and loose parts.",
          description: "Children move into small studio groups inside the Creative Atelier and Discovery Classroom. Guided by open-ended prompts, they sculpt with natural clay, paint at wooden easels, or investigate translucent leaves on the light table.",
          playgroupNote: "Tactile exploration with non-toxic botanical finger paints and soft clay.",
          nurseryNote: "Mixed-media collage combining natural twigs, leaves, and watercolor.",
          kindergartenNote: "Multi-day architectural modeling and observational botanical drawing.",
          image: "/assets/images/space_atelier.webp",
          color: "bg-[#FDE8D8] text-[#39263E]"
        },
        {
          step: 4,
          time: "10:30 AM",
          title: "Nature & Outdoor Play",
          area: "Gross Motor, Ecology & Sensory Grounding",
          shortDesc: "Hands-on gardening, insect observation, and movement under the trees.",
          description: "We step into the Nature Garden for fresh air and active discovery. Children water herb beds, walk along the bamboo sensory path, inspect leaves through magnifying glasses, and climb or balance in shaded play zones.",
          playgroupNote: "Watering low herb planters, sensory sand play, and chasing bubbles.",
          nurseryNote: "Digging in the garden beds, mud-kitchen measuring, and balance beams.",
          kindergartenNote: "Measuring plant growth, composting, and recording garden wildlife.",
          image: "/assets/images/space_garden.webp",
          color: "bg-[#ECF6D8] text-[#174F43]"
        },
        {
          step: 5,
          time: "11:30 AM",
          title: "Snack & Social Time",
          area: "Independence, Gratitude & Social Grace",
          shortDesc: "Washing hands, setting tables together, and unhurried conversation.",
          description: "Snack time at Little Roots is a warm community ritual. Children wash hands, help set small wooden tables, pour water from child-sized pitchers, and enjoy wholesome snacks while chatting with friends and educators.",
          playgroupNote: "Practicing self-feeding and pouring with spill-friendly pitchers.",
          nurseryNote: "Taking turns as table helpers and practicing polite table conversation.",
          kindergartenNote: "Serving peers, sorting compostable fruit peels, and independent tidy-up.",
          image: "/assets/images/ref_day_kindness.webp",
          color: "bg-[#FDF2D0] text-[#39263E]"
        },
        {
          step: 6,
          time: "12:00 PM",
          title: "Guided Learning",
          area: "Numeracy, Literacy & Focused Small-Group Inquiry",
          shortDesc: "Playful math manipulatives, phonics stories, and sensory problem-solving.",
          description: "After snack, calm energy returns for small-group guided explorations. Educators work closely with 4–6 children at a time using wooden counting frames, tactile sandpaper letters, pattern blocks, and science experiments.",
          playgroupNote: "Sorting natural shells, stacking wooden rings, and picture-word matching.",
          nurseryNote: "Counting seeds, rhyming games, and story sequencing cards.",
          kindergartenNote: "Phonetic word building, number stories, and project research documentation.",
          image: "/assets/images/space_sensory.webp",
          color: "bg-[#EAEBFF] text-[#39263E]"
        },
        {
          step: 7,
          time: "1:00 PM",
          title: "Storytelling & Reflection",
          area: "Metacognition, Calm Regulation & Gratitude",
          shortDesc: "Looking back on what we discovered, created, and shared today.",
          description: "We gather in the Little Library and Movement Studio for acoustic music, deep breathing, and daily reflection. Children share a favorite moment from the day—a tower they built, a bug they spotted, or a kindness they noticed.",
          playgroupNote: "Gentle lullabies, cozy picture books, and calm sensory rest.",
          nurseryNote: "Sharing one discovery from the morning with the circle.",
          kindergartenNote: "Reviewing project photos and planning tomorrow's next question.",
          image: "/assets/images/space_movement.webp",
          color: "bg-[#FDE8D8] text-[#39263E]"
        },
        {
          step: 8,
          time: "2:00 PM",
          title: "Farewell",
          area: "Family Connection & Joyful Continuity",
          shortDesc: "Warm family handover and daily learning highlights.",
          description: "Our day closes with our farewell song. Educators greet parents and guardians with a brief, thoughtful update on the day's discoveries so curiosity can continue around the family dinner table at home.",
          playgroupNote: "Individual daily care & discovery touchpoint with parents.",
          nurseryNote: "Children proudly show parents their studio creations on display.",
          kindergartenNote: "Weekly portfolio highlights and take-home wonder prompts.",
          image: "/assets/images/ref_campus_doorway.webp",
          color: "bg-[#ECF6D8] text-[#174F43]"
        }
      ],

      campusSpaces: [
        {
          id: "classroom",
          number: "01",
          name: "The Discovery Classroom",
          tagline: "Sunlit, calm, and intentionally scaled for independent young learners.",
          ageGroups: "Playgroup, Nursery & Kindergarten (2–6 yrs)",
          heroImage: "/assets/images/space_classroom.webp",
          gallery: [
            "/assets/images/space_classroom.webp",
            "/assets/images/ref_hero_children.webp",
            "/assets/images/ref_prog_nursery.webp"
          ],
          intro: "Flooded with soft natural daylight and furnished with sustainably crafted birch shelving, the Discovery Classroom treats the environment as the 'third teacher.' Materials are arranged in open woven baskets at child height so learners can independently initiate and tidy their work.",
          activities: [
            "Unit block architecture and spatial engineering",
            "Small-group literacy and mathematical manipulative trays",
            "Botanical observation tables with live indoor plants",
            "Cozy canopy circle area for morning meetings"
          ]
        },
        {
          id: "library",
          number: "02",
          name: "The Little Library",
          tagline: "An arched sanctuary of picture books, floor cushions, and oral storytelling.",
          ageGroups: "All Programs (2–6 yrs)",
          heroImage: "/assets/images/space_library.webp",
          gallery: [
            "/assets/images/space_library.webp",
            "/assets/images/ref_prog_kindergarten.webp"
          ],
          intro: "Framed by signature custom-crafted wooden arches, cotton teepees, and sage floor pillows, the Little Library invites children to slow down and fall in love with stories. Front-facing book displays let even our youngest toddlers choose books by their covers.",
          activities: [
            "Interactive read-alouds in English and Bangla",
            "Shadow puppetry and felt-board story retelling",
            "Quiet solo or buddy book browsing on woven jute rugs",
            "Child-authored class book making and binding"
          ]
        },
        {
          id: "atelier",
          number: "03",
          name: "The Creative Atelier",
          tagline: "Where clay, natural pigments, light, and imagination meet.",
          ageGroups: "All Programs & Enrichment (2–6 yrs)",
          heroImage: "/assets/images/space_atelier.webp",
          gallery: [
            "/assets/images/space_atelier.webp",
            "/assets/images/ref_prog_atelier.webp",
            "/assets/images/ref_day_creative.webp"
          ],
          intro: "The heart of our expressive arts program, the Creative Atelier features double-sided wooden easels, a central communal worktable, jars of natural earth and botanical pigments, terracotta clay, and curated collections of shells, seed pods, and twigs.",
          activities: [
            "Large-scale easel painting with natural bristle brushes",
            "Terracotta clay sculpture and botanical relief imprinting",
            "Natural loose-parts transient art and collage",
            "Collaborative mural making and documentation"
          ]
        },
        {
          id: "garden",
          number: "04",
          name: "The Nature Garden",
          tagline: "An outdoor living classroom with herb beds, bamboo sensory paths, and shaded pergolas.",
          ageGroups: "All Programs & Nature Explorers (2–6 yrs)",
          heroImage: "/assets/images/space_garden.webp",
          gallery: [
            "/assets/images/space_garden.webp",
            "/assets/images/ref_prog_nature.webp",
            "/assets/images/ref_approach_flower.webp"
          ],
          intro: "Designed as a green oasis for urban childhood, the Nature Garden features child-height cedar planter boxes, a tactile bamboo and river-stone pathway, an outdoor wooden mud kitchen, and a vine-draped pergola for outdoor circle time.",
          activities: [
            "Seed planting, watering, and harvesting culinary herbs",
            "Magnifying-glass insect, leaf vein, and soil observation",
            "Outdoor mud kitchen and water-flow experimentation",
            "Weather watching and botanical field sketching"
          ]
        },
        {
          id: "movement",
          number: "05",
          name: "The Movement Studio",
          tagline: "Airy timber-beamed studio for balance, gross-motor confidence, and music.",
          ageGroups: "All Programs (2–6 yrs)",
          heroImage: "/assets/images/space_movement.webp",
          gallery: [
            "/assets/images/space_movement.webp",
            "/assets/images/ref_day_movement.webp"
          ],
          intro: "Especially valuable during Dhaka's warm afternoons and monsoon days, the indoor Movement Studio offers a bright, climate-comfortable space equipped with Pikler climbing triangles, birch balance beams, rocking arches, and acoustic instruments.",
          activities: [
            "Pikler triangle climbing and wooden balance beam courses",
            "Creative movement, rhythm, and folk dance circles",
            "Cooperative parachute and group coordination games",
            "Mindful stretching, breathing, and body awareness"
          ]
        },
        {
          id: "sensory",
          number: "06",
          name: "The Sensory Corner",
          tagline: "Illuminated light tables, tactile botanicals, and calm emotional regulation.",
          ageGroups: "Playgroup, Nursery & Kindergarten (2–6 yrs)",
          heroImage: "/assets/images/space_sensory.webp",
          gallery: [
            "/assets/images/space_sensory.webp",
            "/assets/images/ref_prog_playgroup.webp"
          ],
          intro: "The Sensory Corner invites quiet wonder and focused investigation. A warm LED wooden light table illuminates translucent leaves and color paddles, surrounded by wooden bowls of pinecones, river pebbles, seashells, and brass magnifying lenses.",
          activities: [
            "Light-table exploration of leaf translucency and color mixing",
            "Tactile sorting of shells, smooth stones, and seed pods",
            "Acoustic sound cylinders and scent-matching herb jars",
            "Calm-down sensory baskets for emotional self-regulation"
          ]
        }
      ],

      educators: [
        {
          role: "Lead Early Years Guide",
          badge: "Illustrative Role Profile",
          focus: "Child-Centered Inquiry & Emotional Security",
          summary: "Guides the daily rhythm of the Discovery Classroom—observing children's emerging interests, facilitating circle dialogues, and partnering closely with parents.",
          responsibilities: [
            "Design daily learning provocations responsive to children's questions",
            "Maintain warm, unhurried emotional transitions and conflict guidance",
            "Document learning journeys through narrative notes and photography"
          ],
          color: "bg-[#ECF6D8]"
        },
        {
          role: "Atelierista (Creative Studio Guide)",
          badge: "Illustrative Role Profile",
          focus: "Visual Arts, Clay & Expressive Media",
          summary: "Stewards the Creative Atelier—introducing authentic artistic materials, natural pigments, and sculptural techniques that honor each child's original voice.",
          responsibilities: [
            "Curate natural loose parts, clay, and botanical pigment stations",
            "Collaborate with classroom guides to connect studio art with inquiry projects",
            "Build seasonal classroom exhibitions celebrating children's process work"
          ],
          color: "bg-[#FDE8D8]"
        },
        {
          role: "Outdoor & Botanical Learning Guide",
          badge: "Illustrative Role Profile",
          focus: "Nature Garden & Ecological Stewardship",
          summary: "Transforms the outdoor garden into a living laboratory—leading seed-to-table planting, pollinator walks, and sensory earth play.",
          responsibilities: [
            "Maintain child-safe organic herb, vegetable, and flower beds",
            "Lead Nature Explorers sessions on life cycles, soil, and weather",
            "Foster gentle respect for insects, birds, and living ecosystems"
          ],
          color: "bg-[#EAEBFF]"
        },
        {
          role: "Family Partnership & Wellbeing Coordinator",
          badge: "Illustrative Role Profile",
          focus: "Settling-In, Parent Orientation & Inclusion",
          summary: "Ensures every family feels welcomed, heard, and supported from their very first tour request through orientation and primary school transition.",
          responsibilities: [
            "Coordinate personalized settling-in plans for new Playgroup & Nursery children",
            "Host parent workshops on purposeful play and emotional regulation at home",
            "Facilitate regular two-way progress conversations with families"
          ],
          color: "bg-[#FDF2D0]"
        }
      ],

      galleryItems: [
        { id: "g1", title: "Magnifying Glass Botanical Study", category: "Nature Exploration", img: "/assets/images/ref_hero_children.webp", caption: "Three young explorers examining leaf veins and pinecones together in natural morning light." },
        { id: "g2", title: "The Sunlit Discovery Classroom", category: "Learning Spaces", img: "/assets/images/space_classroom.webp", caption: "Low birch shelving, woven baskets, and a canopy reading nook designed for child autonomy." },
        { id: "g3", title: "Color & Joy in Playgroup", category: "Creative Activities", img: "/assets/images/ref_prog_playgroup.webp", caption: "Sensory finger painting with vibrant, washable botanical colors." },
        { id: "g4", title: "Outdoor Discovery Garden & Pergola", category: "Nature Exploration", img: "/assets/images/space_garden.webp", caption: "Raised cedar herb beds, a bamboo sensory walkway, and an outdoor mud kitchen." },
        { id: "g5", title: "The Creative Atelier Studio", category: "Learning Spaces", img: "/assets/images/space_atelier.webp", caption: "Wooden easels, natural pigments, terracotta clay, and botanical specimens ready for studio work." },
        { id: "g6", title: "Wooden Block Architecture", category: "Play & Movement", img: "/assets/images/ref_prog_nursery.webp", caption: "Developing spatial reasoning, balance, and patience through open-ended wooden block construction." },
        { id: "g7", title: "The Little Library Reading Nook", category: "Learning Spaces", img: "/assets/images/space_library.webp", caption: "Arched wooden bookcases, sage floor cushions, and cozy canvas reading tents." },
        { id: "g8", title: "Meadow Wonder & Sensory Calm", category: "Little Moments", img: "/assets/images/ref_approach_flower.webp", caption: "Slowing down to notice the delicate petals and scent of a garden flower." },
        { id: "g9", title: "Indoor Movement & Balance Studio", category: "Play & Movement", img: "/assets/images/space_movement.webp", caption: "Pikler climbing triangle, balance beam, and arched rocker in a sunlit timber studio." },
        { id: "g10", title: "Illuminated Botanical Light Table", category: "Learning Spaces", img: "/assets/images/space_sensory.webp", caption: "Investigating leaf translucency, symmetry, and natural textures in the Sensory Corner." },
        { id: "g11", title: "Young Botanist in the Garden", category: "Nature Exploration", img: "/assets/images/ref_prog_nature.webp", caption: "Outdoor observation with a magnifying lens during Nature Explorers." },
        { id: "g12", title: "Expressive Brushwork", category: "Creative Activities", img: "/assets/images/ref_prog_atelier.webp", caption: "Exploring color blending and storytelling through watercolour in the Atelier." },
        { id: "g13", title: "Confident Kindergarten Learners", category: "Little Moments", img: "/assets/images/ref_prog_kindergarten.webp", caption: "Warm friendships and joyful focus during collaborative morning projects." },
        { id: "g14", title: "Welcome to Our Little World", category: "Little Moments", img: "/assets/images/ref_campus_doorway.webp", caption: "An arched wooden doorway welcoming families into a greener, kinder learning concept." }
      ]
    };

    window.LR_DEFAULT_DEMO_STATE = {
      inquiries: [
        {
          id: "LR-INQ-2026-101",
          parentLabel: "Demo Family — Rahman Household (Synthetic)",
          contactSynthetic: "demo.rahman@example.invalid",
          childAgeBand: "3–4 years (Nursery)",
          program: "Nursery",
          session: "Autumn Term (Concept Session)",
          interests: ["Nature Exploration", "Creative Atelier", "Storytelling"],
          orientationPref: "In-Person Morning Orientation (Simulated)",
          submittedDate: "2026-10-24",
          status: "Tour Completed",
          notes: "Synthetic sample inquiry interested in outdoor garden rhythm."
        },
        {
          id: "LR-INQ-2026-102",
          parentLabel: "Demo Family — Chowdhury Household (Synthetic)",
          contactSynthetic: "demo.chowdhury@example.invalid",
          childAgeBand: "2–3 years (Playgroup)",
          program: "Playgroup",
          session: "Autumn Term (Concept Session)",
          interests: ["Sensory Play", "Gentle Settling-In", "Music & Movement"],
          orientationPref: "1-on-1 Educator Welcome Call (Simulated)",
          submittedDate: "2026-10-26",
          status: "New Inquiry",
          notes: "Synthetic sample exploring gentle first-time separation routines."
        },
        {
          id: "LR-INQ-2026-103",
          parentLabel: "Demo Family — Kabir Household (Synthetic)",
          contactSynthetic: "demo.kabir@example.invalid",
          childAgeBand: "4–6 years (Kindergarten)",
          program: "Kindergarten",
          session: "Spring Term (Concept Session)",
          interests: ["Emergent Literacy", "Project Inquiry", "Ecology"],
          orientationPref: "Small-Group Family Workshop (Simulated)",
          submittedDate: "2026-10-27",
          status: "Application Started",
          notes: "Synthetic sample interested in Reggio-inspired project work."
        },
        {
          id: "LR-INQ-2026-104",
          parentLabel: "Demo Family — Ahmed Household (Synthetic)",
          contactSynthetic: "demo.ahmed@example.invalid",
          childAgeBand: "3–4 years (Nursery)",
          program: "Nursery",
          session: "Autumn Term (Concept Session)",
          interests: ["Block Architecture", "Nature Exploration"],
          orientationPref: "In-Person Morning Orientation (Simulated)",
          submittedDate: "2026-10-28",
          status: "Under Review",
          notes: "Synthetic sample reviewing Nursery daily schedule."
        },
        {
          id: "LR-INQ-2026-105",
          parentLabel: "Demo Family — Anwar Household (Synthetic)",
          contactSynthetic: "demo.anwar@example.invalid",
          childAgeBand: "4–6 years (Kindergarten)",
          program: "Kindergarten",
          session: "Autumn Term (Concept Session)",
          interests: ["Creative Atelier", "Mathematical Wonder"],
          orientationPref: "In-Person Morning Orientation (Simulated)",
          submittedDate: "2026-10-29",
          status: "Completed",
          notes: "Completed synthetic demonstration workflow record."
        }
      ],
      tours: [
        {
          id: "LR-TOUR-2026-201",
          visitorLabel: "Synthetic Visitor — Farhana & Tariq (Demo)",
          contactSynthetic: "tour.demo1@example.invalid",
          program: "Playgroup",
          visitDate: "2026-11-10",
          visitWindow: "9:30 AM – 10:30 AM (Morning Discovery Window)",
          status: "Tour Requested",
          notes: "Interested in seeing the Sensory Corner and Playgroup classroom."
        },
        {
          id: "LR-TOUR-2026-202",
          visitorLabel: "Synthetic Visitor — Nadia & Karim (Demo)",
          contactSynthetic: "tour.demo2@example.invalid",
          program: "Kindergarten",
          visitDate: "2026-11-12",
          visitWindow: "10:45 AM – 11:45 AM (Garden & Atelier Window)",
          status: "Tour Completed",
          notes: "Explored Creative Atelier and Nature Garden concept spaces."
        },
        {
          id: "LR-TOUR-2026-203",
          visitorLabel: "Synthetic Visitor — Samira Household (Demo)",
          contactSynthetic: "tour.demo3@example.invalid",
          program: "General Exploration",
          visitDate: "2026-11-15",
          visitWindow: "9:30 AM – 10:30 AM (Morning Discovery Window)",
          status: "New Inquiry",
          notes: "First-time concept walkthrough for 2027 planning."
        }
      ],
      tasks: [
        { id: "t1", text: "Send simulated Playgroup settling-in guide to Demo Family #102", done: false },
        { id: "t2", text: "Prepare Atelier & Nature Garden showcase notes for Nov 10 demo tour", done: false },
        { id: "t3", text: "Review Kindergarten inquiry portfolio sample for Demo Family #103", done: true },
        { id: "t4", text: "Update Parent Corner seasonal monsoon-to-autumn activity cards", done: true }
      ],
      contactMessages: []
    };