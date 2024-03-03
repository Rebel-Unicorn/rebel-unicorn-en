<template>
  <div class="scroll-wrapper md:flex md:flex-nowrap overflow-x-hidden w-screen">
    <section
      id="home"
      class="scroll-section section-1 md:h-screen h-[max-content] w-screen flex items-center justify-center flex-shrink-0"
    >
      <HomeModule />
    </section>
    <section
      id="services"
      class="scroll-section section-2 md:h-screen h-[max-content] w-screen flex items-center justify-center flex-shrink-0"
    >
      <ServicesModule />
    </section>
    <section
      id="successes"
      class="scroll-section section-3 md:h-screen h-[max-content] w-[200vw] flex items-center justify-center flex-shrink-0"
    >
      <SuccessesModule />
      <SuccessProofModule />
    </section>
    <!-- <section
      id="success-proof"
      class="section-4 md:h-screen h-[max-content] w-screen block flex-shrink-0"
    >
      <SuccessProofModule />
    </section> -->
    <section
      id="coaching"
      class="scroll-section section-5 md:h-screen h-[max-content] w-screen flex items-center justify-center flex-shrink-0"
    >
      <CoachingModule />
    </section>
    <section
      id="testimonials"
      class="scroll-section section-6 md:h-screen h-[max-content] w-screen flex items-center justify-center flex-shrink-0"
    >
      <TestimonialsModule />
    </section>
    <section
      id="learn-more"
      class="scroll-section section-7 md:h-screen h-[max-content] w-screen flex items-center justify-center flex-shrink-0"
    >
      <LearnMore />
    </section>
  </div>
  <div
    class="w-full max-w-[max-content] fixed bottom-[50px] left-[50%] translate-x-[-50%] rounded-full p-1 backdrop-blur-lg backdrop-opacity-80 shadow-md bg-[#80808073]"
  >
    <nav class="bottom-nav w-full rounded-full flex items-center">
      <div
        v-for="url in urls"
        :key="url.id"
        :data-section="url.href"
        :class="[
          `py-2 px-4 rounded-full font-normal text-[16px] leading-[19.36px] text-white cursor-pointer`,
          `${url.id === 1 && 'nav-active'}`,
        ]"
      >
        {{ url.name }}
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import { onMounted, onBeforeMount, ref, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HomeModule from "@/components/modules/HomeModule.vue";
import ServicesModule from "@/components/modules/ServicesModule.vue";
import SuccessesModule from "@/components/modules/SuccessesModule.vue";
import SuccessProofModule from "@/components/modules/SuccessProof.vue";
import CoachingModule from "@/components/modules/CoachingModule.vue";
import TestimonialsModule from "@/components/modules/TestimonialsModule.vue";
import LearnMore from "@/components/modules/LearnMore.vue";

export default {
  name: "HomeView",
  components: {
    HomeModule,
    ServicesModule,
    SuccessesModule,
    SuccessProofModule,
    CoachingModule,
    TestimonialsModule,
    LearnMore,
  },
  setup() {
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
    onBeforeMount(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);
    });
    onMounted(() => {
      // const activeSection = ref();
      document.addEventListener("resize", updateWidth());
      const nav = gsap.utils.toArray("nav div");
      const setActiveNavLink = (sectionId) => {
        // Remove active class from all nav links
        // if (sectionId === section.id) {
        //   console.log(
        //     document.querySelector(`nav div[data-section="${sectionId}"]`)
        //   );
        // }
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

      const sections = gsap.utils.toArray(".scroll-section");
      // const navbarLinks = document.querySelectorAll(".navbar div");

      if (windowWidth.value > 767) {
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
            // let relatedLink = document.querySelector(
            //   `[data-section="${section.id}"]`
            // );
            // console.log(
            //   relatedLink,
            //   section,
            //   `[data-section="${section.id}"]`,
            //   "this is the info we need"
            // );
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

              const activeLink = document.querySelector(
                `nav div[data-section="${section.id}"]`
              );
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

    onUnmounted(() => {
      document.removeEventListener("resize", updateWidth());
    });

    return { urls };
  },
};

// Old scrollTrigger
// const updatedWindowWidth = computed(() => windowWidth.value);

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".scroll-wrapper",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     start: "center center",
//     end: () => "+=" + updatedWindowWidth.value,
//     // onToggle: (self) => console.log(self.isActive),
//   },
// });
</script>
<style>
section {
  overflow-y: hidden;
}
.section-active {
  background-color: aquamarine;
}
nav div.nav-active {
  background-color: rgba(242, 232, 254, 1);
  color: rgba(151, 71, 255, 1) !important;
}
</style>
