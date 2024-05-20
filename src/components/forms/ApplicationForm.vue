<template>
  <div
    v-show="!completed"
    class="lg:w-[50%] w-full max-h-[90vh] overflow-hidden overflow-y-auto flex flex-col items-start border border-gray-300 bg-[white] px-4 rounded-md"
  >
    <div class="head py-8 px-6 relative">
      <h2
        class="font-medium md:text-[28px] md:leading-[28px] text-[20px] leading-[20px] text-center mt-3"
      >
        Make an appointment for a one-on-one consultation
      </h2>
      <div class="absolute flex items-center justify-end right-0 top-4">
        <button
          type="button"
          @click="closeForm"
          class="bg-gray-300 text-white font-medium rounded-full w-8 h-8"
        >
          <img
            src="../../assets/svg/cancel.svg"
            alt="cancel"
            class="w-full h-full"
          />
        </button>
      </div>
    </div>
    <!-- {{ applicationModal }} -->
    <div class="flex flex-col items-center w-full">
      <form>
        <div class="name relative w-full mb-2">
          <label
            class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
            htmlFor="name"
          >
            Name <span class="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="name"
            autocomplete="name"
            class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-gray-400 focus:ring-0 rounded-md"
            placeholder=""
            style="transition: 'all .15s ease'"
            :class="[v$.name.$error ? 'border-red-400' : 'border-grey-300']"
            v-model="v$.name.$model"
            @blur="v$.name.$touch()"
          />
          <div v-if="v$.name.$error">
            <p
              v-if="v$.name.required.$invalid"
              class="text-red-400 text-[10px] font-light"
            >
              * Name is required
            </p>
            <p
              v-if="v$.name.$invalid"
              class="text-red-400 text-[10px] font-light"
            >
              * Name must not be less than 2 characters
            </p>
          </div>
        </div>
        <div
          class="relative w-full mb-2 grid grid-cols-2 gap-4 place-items-end"
        >
          <div class="telephone w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal flex"
              htmlFor="telephone"
            >
              Telephone <span class="text-red-500 md:block md:ml-1">*</span>
              <span class="text-xs italic md:block hidden mx-2"
                >(Please include your country code)</span
              >
            </label>
            <input
              id="telephone"
              name="telephone"
              type="telephone"
              autocomplete="telephone"
              :class="[
                v$.telephone.$error ? 'border-red-400' : 'border-grey-300',
              ]"
              class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-gray-400 focus:ring-0 rounded-md"
              placeholder=""
              style="transition: 'all .15s ease'"
              v-model="v$.telephone.$model"
              @blur="v$.telephone.$touch()"
            />
            <div v-if="v$.telephone.$error">
              <p
                v-if="v$.telephone.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * Telephone is required
              </p>
              <p
                v-if="v$.telephone.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * Please enter a correct telephone number
              </p>
            </div>
          </div>
          <div class="wechat w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="wechat"
            >
              WeChat Number <span class="text-red-500">*</span>
            </label>
            <input
              id="wechat"
              name="wechat"
              type="wechat"
              autocomplete="wechat"
              :class="[v$.wechat.$error ? 'border-red-400' : 'border-grey-300']"
              class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-gray-400 focus:ring-0 rounded-md"
              placeholder=""
              style="transition: 'all .15s ease'"
              v-model="v$.wechat.$model"
              @blur="v$.wechat.$touch()"
            />
            <div v-if="v$.wechat.$error">
              <p
                v-if="v$.wechat.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * WeChat is required
              </p>
              <p
                v-if="v$.wechat.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * The number you entered is invalid
              </p>
            </div>
          </div>
        </div>
        <div
          class="relative w-full mb-2 grid grid-cols-2 gap-4 place-items-end"
        >
          <div class="school w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="school"
            >
              School <span class="text-red-500">*</span>
            </label>
            <input
              id="school"
              name="school"
              type="school"
              autocomplete="school"
              :class="[v$.school.$error ? 'border-red-400' : 'border-grey-300']"
              class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-gray-400 focus:ring-0 rounded-md"
              placeholder=""
              style="transition: 'all .15s ease'"
              v-model="v$.school.$model"
              @blur="v$.school.$touch()"
            />
            <div v-if="v$.school.$error">
              <p
                v-if="v$.school.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * School is required
              </p>
            </div>
          </div>
          <div class="grade w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="grade"
            >
              Grade <span class="text-red-500">*</span>
            </label>
            <input
              id="grade"
              name="grade"
              type="grade"
              autocomplete="grade"
              :class="[v$.grade.$error ? 'border-red-400' : 'border-grey-300']"
              class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-gray-400 focus:ring-0 rounded-md"
              placeholder=""
              style="transition: 'all .15s ease'"
              v-model="v$.grade.$model"
              @blur="v$.grade.$touch()"
            />
            <div v-if="v$.grade.$error">
              <p
                v-if="v$.grade.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * Grade is required
              </p>
            </div>
          </div>
        </div>
        <div
          class="relative w-full mb-2 grid grid-cols-2 gap-4 place-items-end"
        >
          <div class="major w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="major"
            >
              Major <span class="text-red-500">*</span>
            </label>
            <input
              id="major"
              name="major"
              type="major"
              autocomplete="major"
              :class="[v$.major.$error ? 'border-red-400' : 'border-grey-300']"
              class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-gray-400 focus:ring-0 rounded-md"
              placeholder=""
              style="transition: 'all .15s ease'"
              v-model="v$.major.$model"
              @blur="v$.major.$touch()"
            />
            <div v-if="v$.major.$error">
              <p
                v-if="v$.major.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * Major is required
              </p>
            </div>
          </div>
          <div class="target_industry w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="target_industry"
            >
              Target Industry <span class="text-red-500">*</span>
            </label>
            <input
              id="target_industry"
              name="target_industry"
              type="target_industry"
              autocomplete="target_industry"
              :class="[
                v$.target_industry.$error
                  ? 'border-red-400'
                  : 'border-grey-300',
              ]"
              class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-gray-400 focus:ring-0 rounded-md"
              placeholder=""
              style="transition: 'all .15s ease'"
              v-model="v$.target_industry.$model"
              @blur="v$.target_industry.$touch()"
            />
            <div v-if="v$.target_industry.$error">
              <p
                v-if="v$.target_industry.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * Target Industry is required
              </p>
            </div>
          </div>
        </div>
        <div
          class="relative w-full mb-2 grid grid-cols-2 gap-4 place-items-end"
        >
          <div class="consulting w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="consulting"
            >
              Consulting Direction (Internship or Full-time)
            </label>

            <div class="w-full relative z-20">
              <Listbox v-model="applicationData.consulting_direction">
                <div class="relative mt-1">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm min-h-[36px] border border-gray-200"
                  >
                    <span class="block truncate">
                      {{ applicationData.consulting_direction }}
                    </span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <img
                        src="../../assets/png/back-50.png"
                        class="h-5 w-5 text-gray-400 -rotate-90"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>
                </div>
                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-20"
                  >
                    <ListboxOption
                      v-for="option in consultingOptions"
                      v-slot="{ active, selected }"
                      :key="option.id"
                      :value="option.name"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-[#781B8F] text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-4 pr-4 mx-2 rounded-md',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                          ]"
                          >{{ option.name }}</span
                        >
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                          <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </Listbox>
            </div>
          </div>
          <div class="paid_items w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="paid_items"
            >
              Would you accept paid items?
              <span class="text-red-500">*</span>
            </label>

            <div class="w-full relative z-20">
              <Listbox v-model="applicationData.paid_items">
                <div class="relative mt-1">
                  <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm min-h-[36px] border border-gray-200"
                  >
                    <span class="block truncate">
                      {{ applicationData.paid_items }}
                    </span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <img
                        src="../../assets/png/back-50.png"
                        class="h-5 w-5 text-gray-400 -rotate-90"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>
                </div>
                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-20"
                  >
                    <ListboxOption
                      v-for="option in paidOptions"
                      v-slot="{ active, selected }"
                      :key="option.id"
                      :value="option.name"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-[#781B8F] text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-4 pr-4 mx-2 rounded-md',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                          ]"
                          >{{ option.name }}</span
                        >
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                          <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </Listbox>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center z-10 mt-8">
          <button
            :disabled="loading || v$.$invalid"
            type="button"
            class="fill-btn overflow-hidden py-2 px-4 border border-gray-400 disabled:opacity-70 relative mb-6 tracking-wide rounded-md"
            id="submit_application"
            @click="createApplication"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  <TransitionRoot appear :show="completed" as="template">
    <Dialog as="div" @close="closeForm" class="relative z-[3001]">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 text-center"
              >
                Application sent!
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500 text-center">
                  Your application has been submitted successfully
                </p>
              </div>

              <div class="mt-4 flex items-center justify-center">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-gray-400 px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeForm"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import ApplicationService from "../../services/applications.service";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  setup() {
    const store = useStore();
    const loading = ref(false);
    const completed = ref(false);
    const closeForm = () => {
      store.commit("setApplicationModal", false);
      completed.value = false;
      applicationData.value = {
        name: "",
        telephone: "",
        wechat: "",
        school: "",
        grade: "",
        major: "",
        target_industry: "",
        consulting_direction: "",
        paid_items: "",
      };
    };
    const applicationData = reactive({
      name: "",
      telephone: "",
      wechat: "",
      school: "",
      grade: "",
      major: "",
      target_industry: "",
      consulting_direction: "",
      paid_items: "",
    });
    const rules = computed(() => ({
      name: {
        required,
        $autoDirty: true,
        $lazy: true,
        minLength: minLength(2),
      },
      telephone: {
        required,
        $autoDirty: true,
        $lazy: true,
        minLength: minLength(10),
        maxLength: maxLength(15),
      },
      wechat: {
        required,
        $autoDirty: true,
        $lazy: true,
      },
      school: { required, $autoDirty: true, $lazy: true },
      grade: { required, $autoDirty: true, $lazy: true },
      major: { required, $autoDirty: true, $lazy: true },
      target_industry: { required, $autoDirty: true, $lazy: true },
      consulting_direction: "",
      paid_items: "",
    }));
    const v$ = useVuelidate(rules, applicationData);

    const consultingOptions = [
      { id: 1, name: "Internship", unavailable: false },
      { id: 2, name: "Full-time", unavailable: false },
    ];
    const paidOptions = [
      { id: 1, name: "Yes", unavailable: false },
      { id: 2, name: "No", unavailable: false },
    ];

    const createApplication = async () => {
      loading.value = true;
      const data = applicationData;

      try {
        const response = await ApplicationService.createApplication(data);
        // Handle response
        if (response.status === 201) {
          completed.value = true;
          // closeForm();
          loading.value = false;
          // console.log(response.data);
        }
      } catch (error) {
        // Handle error
        console.error({ error: "Error fetching the resource" });
      }
    };

    onMounted(() => {
      const fillBtn = document.getElementById("submit_application");

      // Update the CSS variable dynamically
      fillBtn.addEventListener("mouseover", () => {
        fillBtn.style.setProperty("--dynamic-content", '"Submit"');
      });

      fillBtn.addEventListener("mouseout", () => {
        fillBtn.style.setProperty("--dynamic-content", "");
      });
    });

    return {
      closeForm,
      applicationData,
      v$,
      consultingOptions,
      paidOptions,
      createApplication,
      loading,
      completed,
    };
  },
};
</script>

<style lang="scss" scoped></style>
