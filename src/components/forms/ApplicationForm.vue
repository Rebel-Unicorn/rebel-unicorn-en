<template>
  <div
    v-show="!completed"
    class="lg:w-[50%] w-full max-h-[90vh] overflow-hidden overflow-y-auto flex flex-col items-start border border-gray-300 bg-[white] px-4 rounded-md"
  >
    <div
      class="head py-8 px-6 relative flex items-center justify-between w-full"
    >
      <h2
        class="font-medium md:text-[28px] md:leading-[28px] text-[20px] leading-[20px] text-center mt-3"
      >
        {{ landingPageData?.ApplicationsForm?.title }}
      </h2>
      <p class="text-sm text-center">
        {{ landingPageData?.ApplicationsForm?.subtitle }}
      </p>
      <div class="absolute flex items-center justify-end right-0 top-4">
        <button
          type="button"
          @click="closeForm"
          class="bg-gray-300 text-white font-medium rounded-full w-8 h-8"
        >
          <!-- <img
            src="../../assets/svg/cancel.svg"
            alt="cancel"
            class="w-full h-full"
          /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100px"
            height="100px"
            baseProfile="basic"
          >
            <path
              fill="#772A8A"
              d="M73.771,20.2c-8.015-8.106-18.327-10.62-28.665-9.063C33.721,11.544,23.077,17.646,17.03,27.51	c-6.745,11.003-6.653,26.632-0.376,37.86c6.57,11.752,21.886,18.441,35.099,16.927c13.927-1.596,25.252-11.19,29.664-24.392	C85.537,45.575,83.104,29.638,73.771,20.2z"
            />
            <path
              d="M31.363,18.026c0,0-0.626,0.392-1.811,1.132c-0.298,0.187-0.63,0.396-0.997,0.626c-0.367,0.231-0.72,0.549-1.13,0.859	c-0.793,0.65-1.786,1.322-2.709,2.294c-0.481,0.467-0.989,0.96-1.523,1.478c-0.506,0.544-0.991,1.157-1.524,1.778	c-0.264,0.313-0.533,0.633-0.808,0.959c-0.262,0.336-0.495,0.704-0.752,1.066c-0.491,0.739-1.058,1.474-1.541,2.299	c-2.003,3.261-3.741,7.34-4.764,12.087c-1.007,4.738-1.243,10.188-0.066,15.845c0.184,0.697,0.37,1.4,0.557,2.109	c0.204,0.704,0.337,1.439,0.635,2.126c0.266,0.698,0.533,1.402,0.803,2.111c0.143,0.351,0.256,0.718,0.425,1.061l0.52,1.027	c1.269,2.798,3.122,5.51,5.362,7.896c4.497,4.791,10.581,8.429,17.41,10.402c3.417,0.982,7.034,1.545,10.736,1.546	c3.719-0.001,7.433-0.601,11.058-1.681c7.26-2.148,13.69-6.464,18.192-12.044c2.256-2.784,4.03-5.874,5.278-9.079	c1.253-3.205,1.994-6.493,2.347-9.727C87.757,47.721,86.9,41.46,84.9,36.059c-1.001-2.699-2.226-5.217-3.724-7.436	c-1.494-2.214-3.179-4.18-4.935-5.846c-1.772-1.661-3.605-3.078-5.427-4.275c-1.825-1.198-3.672-2.115-5.424-2.887	c-3.545-1.473-6.795-2.171-9.459-2.435c-2.671-0.266-4.749-0.117-6.144-0.006c-1.385,0.187-2.117,0.285-2.117,0.285	s0.736-0.048,2.127-0.139c1.394-0.018,3.46-0.031,6.065,0.388c2.599,0.416,5.729,1.283,9.082,2.889	c1.656,0.839,3.39,1.812,5.088,3.05c1.696,1.237,3.387,2.678,5.01,4.341c1.617,1.681,3.104,3.581,4.427,5.719	c1.322,2.139,2.379,4.55,3.228,7.114c1.697,5.131,2.31,11.03,1.508,17.03c-0.785,5.995-3.095,12.09-7.292,17.08	c-4.149,4.999-10.007,8.883-16.656,10.851c-3.316,0.989-6.744,1.552-10.083,1.573c-3.357,0.023-6.683-0.455-9.842-1.316	c-6.319-1.729-12.004-4.984-16.214-9.25c-2.107-2.141-3.828-4.495-5.1-7.085l-0.516-0.94c-0.168-0.314-0.281-0.652-0.425-0.974	c-0.273-0.652-0.544-1.3-0.813-1.942c-0.303-0.631-0.444-1.313-0.659-1.965c-0.199-0.657-0.397-1.309-0.594-1.956	c-1.292-5.26-1.29-10.43-0.53-15.004c0.773-4.581,2.248-8.602,4.026-11.869c0.426-0.827,0.939-1.567,1.377-2.314	c0.231-0.366,0.438-0.74,0.675-1.082c0.25-0.333,0.495-0.659,0.735-0.978c0.486-0.634,0.926-1.264,1.391-1.827	c0.493-0.539,0.962-1.052,1.407-1.538c0.852-1.015,1.785-1.732,2.531-2.427c0.386-0.332,0.717-0.672,1.065-0.924	c0.348-0.252,0.664-0.48,0.947-0.685C30.766,18.459,31.363,18.026,31.363,18.026z"
            />
            <path
              fill="#f2f2f2"
              d="M67.149,58.049c-2.323-3.995-5.326-7.24-8.645-10.306c3.043-3.328,5.659-7.007,6.782-11.296	c0.821-3.137-1.565-5.097-4.087-5.243c-1.323-1.034-3.163-1.378-5.007-0.242c-3.191,1.966-5.796,4.625-8.2,7.511	c-2.389-2.049-4.825-4.037-7.377-5.843c-1.875-1.327-3.969-1.042-5.5-0.01c-0.813,0.133-1.623,0.484-2.363,1.122	c-5.884,5.079,2.367,12.042,6.756,15.366c-0.476,0.536-0.959,1.064-1.457,1.573c-3.282,3.353-11.167,12.386-2.408,14.991	c3.156,0.939,5.916-0.483,8.071-2.713c1.889-1.954,3.605-3.966,5.436-5.925c4.028,3.377,8.235,6.476,13.289,7.869	C66.419,65.999,68.987,61.21,67.149,58.049z"
            />
          </svg>
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
            {{ landingPageData?.ApplicationsForm?.nameField?.title }}
            <span class="text-red-500">*</span>
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
            <!-- <p
              v-if="v$.name.required.$invalid"
              class="text-red-400 text-[10px] font-light"
            >
              * {{ landingPageData?.ApplicationsForm?.nameField?.title }} is
              required
            </p> -->
            <p
              v-if="v$.name.$invalid"
              class="text-red-400 text-[10px] font-light"
            >
              *
              {{ landingPageData?.ApplicationsForm?.nameField?.error_message }}
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
              {{ landingPageData?.ApplicationsForm?.telephoneField?.title }}
              <span class="text-red-500 md:block md:ml-1">*</span>
              <span class="text-xs italic md:block hidden mx-2"
                >({{
                  landingPageData?.ApplicationsForm?.telephoneField
                    ?.instruction
                }})</span
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
              <!-- <p
                v-if="v$.telephone.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * Telephone is required
              </p> -->
              <p
                v-if="v$.telephone.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                *
                {{
                  landingPageData?.ApplicationsForm?.telephoneField
                    ?.error_message
                }}
              </p>
            </div>
          </div>
          <div class="wechat w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="wechat"
            >
              {{ landingPageData?.ApplicationsForm?.wechatField.title }}
              <span class="text-red-500">*</span>
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
              <!-- <p
                v-if="v$.wechat.required.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                * WeChat is required
              </p> -->
              <p
                v-if="v$.wechat.$invalid"
                class="text-red-400 text-[10px] font-light"
              >
                *
                {{
                  landingPageData?.ApplicationsForm?.wechatField?.error_message
                }}
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
              {{ landingPageData?.ApplicationsForm?.schoolField?.title }}
              <span class="text-red-500">*</span>
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
                *
                {{
                  landingPageData?.ApplicationsForm?.schoolField?.error_message
                }}
              </p>
            </div>
          </div>
          <div class="grade w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="grade"
            >
              {{ landingPageData?.ApplicationsForm?.gradeField?.title }}
              <span class="text-red-500">*</span>
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
                *
                {{
                  landingPageData?.ApplicationsForm?.gradeField?.error_message
                }}
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
              {{ landingPageData?.ApplicationsForm?.majorField?.title }}
              <span class="text-red-500">*</span>
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
                *
                {{
                  landingPageData?.ApplicationsForm?.majorField?.error_message
                }}
              </p>
            </div>
          </div>
          <div class="target_industry w-full mb-2">
            <label
              class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
              htmlFor="target_industry"
            >
              {{
                landingPageData?.ApplicationsForm?.targetIndustryField?.title
              }}
              <span class="text-red-500">*</span>
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
                *
                {{
                  landingPageData?.ApplicationsForm?.targetIndustryField
                    ?.error_message
                }}
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
              {{ landingPageData?.ApplicationsForm?.consultingDirectionTitle }}
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
                      v-for="option in landingPageData?.ApplicationsForm
                        ?.consulting_direction"
                      v-slot="{ active, selected }"
                      :key="option.id"
                      :value="option.title"
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
                          >{{ option.title }}</span
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
              {{ landingPageData?.ApplicationsForm?.paidItemsTitle }}
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
                      v-for="option in landingPageData?.ApplicationsForm
                        ?.paid_items"
                      v-slot="{ active, selected }"
                      :key="option.id"
                      :value="option.title"
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
                          >{{ option.title }}</span
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
            {{ landingPageData?.ApplicationsForm?.submitCTA }}
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
import { computed, onMounted, reactive, ref, watchEffect } from "vue";
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
    const landingPageData = computed(() => store.getters.landingPageData);
    const storedLocale = computed(() => store.state.app.locale);

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
      consulting_direction: { $autoDirty: true, $lazy: true },
      paid_items: { $autoDirty: true },
    }));
    const v$ = useVuelidate(rules, applicationData);

    const consultingOptions =
      landingPageData.value?.ApplicationsForm?.consulting_direction;
    const paidOptions = landingPageData.value?.ApplicationsForm?.paid_items;

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
    const getApplications = async () => {
      try {
        const response = await ApplicationService.getAllApplications();
        console.log(response, "applications response");
      } catch (error) {
        console.error(error);
      }
    };
    getApplications();

    onMounted(() => {
      const fillBtn = document.getElementById("submit_application");

      // Update the CSS variable dynamically
      fillBtn.addEventListener("mouseover", () => {
        fillBtn.style.setProperty(
          "--dynamic-content",
          `'${landingPageData.value?.ApplicationsForm?.submitCTA}'`
        );
      });

      fillBtn.addEventListener("mouseout", () => {
        fillBtn.style.setProperty("--dynamic-content", "");
      });
    });

    watchEffect(storedLocale, () => {
      consultingOptions.value =
        landingPageData.value?.ApplicationsForm?.consulting_direction;
      console.log(consultingOptions.value);
      paidOptions.value = landingPageData.value?.ApplicationsForm?.paid_items;
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
      landingPageData,
      storedLocale,
    };
  },
};
</script>

<style lang="scss" scoped></style>
