<template>
  <div class="scroll-wrapper xl:flex xl:flex-nowrap overflow-x-hidden w-screen">
    <section
      id="home"
      class="scroll-section section-1 lg:h-screen h-auto w-screen flex items-center justify-center flex-shrink-0"
    >
      <HomeModule v-if="!appLoading" />
    </section>
    <section
      id="services"
      class="scroll-section section-2 md:h-screen h-auto min-h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <ServicesModule v-if="!appLoading && landingPageData" />
    </section>
    <section
      id="successes"
      class="scroll-section section-3 h-auto xl:h-screen min-h-screen xl:w-screen md:w-screen w-full flex xl:flex-row flex-col items-center justify-center flex-shrink-0"
    >
      <SuccessesModule v-if="!appLoading && landingPageData" />
    </section>
    <section
      id="coaching"
      class="scroll-section section-5 md:h-screen h-auto min-h-screen w-screen flex items-center justify-center flex-shrink-0"
    >
      <CoachingModule v-if="!appLoading && landingPageData" />
    </section>
    <section
      id="testimonials"
      class="scroll-section section-6 lg:h-screen h-auto w-screen flex items-center justify-center flex-shrink-0"
    >
      <TestimonialsModule v-if="!appLoading && landingPageData" />
    </section>
    <section
      id="learn-more"
      class="scroll-section section-7 lg:h-screen h-auto w-screen flex items-center justify-center flex-shrink-0"
    >
      <LearnMore v-if="!appLoading && landingPageData" />
    </section>
  </div>
  <div
    class="w-[max-content] max-w-[max-content] fixed bottom-[50px] left-[50%] translate-x-[-50%] rounded-full p-1 backdrop-blur-lg backdrop-opacity-80 shadow-md bg-[#80808073] sm:mx-0 mx-1"
  >
    <nav
      v-if="windowWidth > 1281"
      class="bottom-nav w-[max-content] rounded-full flex items-center overflow-x-auto"
    >
      <div
        v-for="url in landingPageData?.NavComponent"
        :key="url.id"
        :data-section="url.url"
        :class="[
          `sm:py-2 py-[5px] sm:px-4 px-2 rounded-full font-normal text-[16px] leading-[19.36px] !tracking-[0.6px] text-white cursor-pointer transition duration-300 delay-500 ease-in-out whitespace-nowrap`,
        ]"
      >
        {{ url.title }}
      </div>
    </nav>
    <nav
      v-else
      class="bottom-nav w-full md:max-w-[max-content] max-w-[calc(100vw-35px)] mx-auto rounded-full flex items-center overflow-x-auto"
    >
      <a
        v-for="url in landingPageData?.NavComponent"
        :key="url.id"
        :data-section="url.url"
        :href="`#${url.url}`"
        :class="[
          `sm:py-2 py-[5px] sm:px-4 px-2 rounded-full font-normal text-[16px] leading-[19.36px] text-white cursor-pointer transition duration-300 delay-50 ease-in-out whitespace-nowrap`,
        ]"
      >
        {{ url.title }}
      </a>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  onMounted,
  onBeforeMount,
  ref,
  onUnmounted,
  computed,
  watchEffect,
  onUpdated,
  // watchEffect,
} from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HomeModule from "@/components/modules/HomeModule.vue";
import ServicesModule from "@/components/modules/ServicesModule.vue";
import SuccessesModule from "@/components/modules/SuccessesModule.vue";
// import SuccessProofModule from "@/components/modules/SuccessProof.vue";
import CoachingModule from "@/components/modules/CoachingModule.vue";
import TestimonialsModule from "@/components/modules/TestimonialsModule.vue";
import LearnMore from "@/components/modules/LearnMore.vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {
    HomeModule,
    ServicesModule,
    SuccessesModule,
    // SuccessProofModule,
    CoachingModule,
    TestimonialsModule,
    LearnMore,
  },
  setup() {
    const store = useStore();
    const landingPageData = computed(() => store.state.app.landingPageData);
    const appLoading = computed(() => store.state.app.appLoading);
    const storedLocale = computed(() => store.state.app.locale);

    const urls = ref([
      { id: 1, name: "Home", href: "home", active: true },
      { id: 2, name: "Services", href: "services", active: false },
      { id: 3, name: "Successes", href: "successes", active: false },
      { id: 4, name: "Coaching", href: "coaching", active: false },
      { id: 5, name: "Testimonials", href: "testimonials", active: false },
      { id: 6, name: "Learn more", href: "learn-more", active: false },
    ]);
    const windowWidth = ref(window.innerWidth);
    const updateWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    onBeforeMount(async () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);
    });
    const localeKey = computed(() => `locale-${storedLocale.value}`);
    onMounted(async () => {
      let nav = gsap.utils.toArray("nav div");
      const sections = gsap.utils.toArray(".scroll-section");
      const setActiveNavLink = (sectionId) => {
        // Remove active class from all nav links
        nav.forEach((link) => link.classList.remove("nav-active"));

        // Add active class to the corresponding nav link
        const activeLink = document.querySelector(
          `nav div[data-section="${sectionId}"]`
        );

        if (activeLink) {
          activeLink.classList.add("nav-active");
        } else {
          activeLink.classList.remove("nav-active");
        }
      };

      const checkSectionsInViewport = () => {
        let observerOptions = {
          root: null, // Use the viewport as the root
          rootMargin: "0px", // No margin
          threshold: 0.46, // 0.5 to trigger when 50% of the section is visible or 0 to update dynamically
        };
        const getTotalWidth = () => {
          return sections.reduce(
            (total, section) => total + section.offsetWidth,
            0
          );
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const section = entry.target;
            const sectionWidth = section.offsetWidth;
            const totalWidth = getTotalWidth(); // Function to calculate the total width of all sections

            // Calculate a dynamic threshold based on the section's width
            let dynamicThreshold = Math.min(
              1,
              entry.intersectionRatio * (sectionWidth / totalWidth)
            );
            // console.log((dynamicThreshold /= 2), "threshold");

            // Update the threshold value in the options dynamically
            observerOptions.threshold = dynamicThreshold;

            const activeLink =
              windowWidth.value > 1281
                ? document.querySelector(
                    `nav div[data-section="${section.id}"]`
                  )
                : document.querySelector(`nav a[data-section="${section.id}"]`);
            if (entry.isIntersecting) {
              // console.log(`Section ${section.id} is in the viewport.`);
              // Perform actions for the section in the viewport
              activeLink.classList.add("nav-active");
            } else {
              // console.log(`Section ${section.id} is out of the viewport.`);
              // Perform actions when the section is out of the viewport
              activeLink.classList.remove("nav-active");
            }
          });
        }, observerOptions);
        sections.forEach((section) => {
          observer.observe(section);
        });
      };
      checkSectionsInViewport();

      if (windowWidth.value > 1281) {
        let nav = gsap.utils.toArray("nav div"),
          getMaxWidth = () =>
            sections.reduce(
              (totalWidth, section) =>
                totalWidth + section.getBoundingClientRect().width,
              0
            ),
          maxWidth = getMaxWidth(),
          scrollSpeed = 1,
          snapProgress,
          lastScrollTween = Date.now(),
          tl = gsap.timeline();

        const init = () => {
          console.log("Scroll refreshed!");
          gsap.set(sections, { x: 0 });
          maxWidth = getMaxWidth();
          let position = 0,
            distance = maxWidth - window.innerWidth;
          // add a label for each section to the timeline (for "labelsDirectional" functionality):
          tl.add("label0", 0);
          sections.forEach((section, i) => {
            let progress = position;
            position += section.offsetWidth / distance;
            tl.add("label" + (i + 1), position);
            nav[i].addEventListener("click", () => {
              // console.log(nav[i], "clicked");
              // link clicks should trigger a scroll tween to the appropriate spot
              snapProgress = progress; // save the current progress so that if we can return it in the directionalSnap() when called right after the scrollTo tween is done (because ScrollTrigger would normally look at the velocity and snap, causing it to overshoot to the next section)
              lastScrollTween = Date.now(); // for checking in the directionalSnap() if there was a recent scrollTo that finished, in which case we'd skip the snapping (well, return the current snapProgress)
              gsap.to(window, {
                scrollTo: (maxWidth / scrollSpeed) * progress,
                duration: 1,
                overwrite: "auto",
                onUpdate: () => setActiveNavLink(section.id),
              });
            });
          });
        };

        const directionalSnap = (timeline) => {
          return (value, st) => {
            if (Date.now() - lastScrollTween < 1650) {
              // recently finished doing a tweened scroll (clicked link), so don't do any snapping.
              return snapProgress;
            }
            let a = [],
              labels = timeline.labels,
              duration = timeline.duration(),
              p,
              i;
            for (p in labels) {
              a.push(labels[p] / duration);
            }
            a.sort((a, b) => a - b);
            if (st.direction > 0) {
              for (i = 0; i < a.length; i++) {
                if (a[i] >= value) {
                  return a[i];
                }
              }
              return a.pop();
            } else {
              i = a.length;
              while (i--) {
                if (a[i] <= value) {
                  return a[i];
                }
              }
            }
            return a[0];
          };
        };

        tl.to(sections, {
          x: () => window.innerWidth - maxWidth,
          duration: 1,
          ease: "none",
        });

        ScrollTrigger.create({
          animation: tl,
          trigger: ".scroll-wrapper",
          pin: true,
          scrub: 1,
          snap: { snapTo: directionalSnap(tl), duration: 4 },
          start: "center center",
          end: () => "+=" + maxWidth / scrollSpeed,
          invalidateOnRefresh: true,
          onUpdate: () => {
            checkSectionsInViewport();
          },
        });

        ScrollTrigger.addEventListener("refreshInit", init);
      }
    });

    onUpdated(() => {
      console.log("updated");
    });

    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        updateWidth();
      });
      ScrollTrigger.removeEventListener("refreshInit");

      // ScrollTrigger.refresh(true);
    });
    watchEffect(() => {});

    return { urls, windowWidth, landingPageData, appLoading, localeKey };
  },
};
</script>
<style>
section {
  overflow-y: hidden;
}
.section-active {
  background-color: aquamarine;
}
nav div.nav-active {
  background-color: #772a8b;
}
nav a.nav-active {
  background-color: #772a8b;
}
</style>
