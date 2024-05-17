<template>
  <SplashScreen v-if="loading" />
  <main class="relative w-screen transition-all tracking-wide">
    <TopNavbar />
    <router-view />
    <BaseModal :modalActive="applicationModal">
      <div
        class="lg:w-[80%] w-full h-[400px] overflow-hidden overflow-y-auto flex flex-col items-start border border-gray-700 bg-[white] px-4"
      >
        <h2
          class="font-medium md:text-[28px] md:leading-[38px] text-[20px] leading-[30px] md:text-left text-center"
        >
          Make an appointment for a one-on-one consultation
        </h2>
        <!-- {{ applicationModal }} -->
        <div class="flex flex-col items-center">
          <form>
            <div class="name relative w-full mb-3">
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
                class="px-2 py-2 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
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
                  Name is required
                </p>
                <p
                  v-if="v$.name.$invalid"
                  class="text-red-400 text-[10px] font-light"
                >
                  Name must not be less than 2 characters
                </p>
              </div>
            </div>
            <div class="relative w-full mb-3 grid grid-cols-2 gap-4">
              <div class="telephone w-full mb-3">
                <label
                  class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
                  htmlFor="telephone"
                >
                  Telephone <span class="text-red-500">*</span>
                  <span class="text-xs italic"
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
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
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
                    Telephone is required
                  </p>
                  <p
                    v-if="v$.telephone.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Please enter a correct telephone number
                  </p>
                </div>
              </div>
              <div class="wechat w-full mb-3">
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
                  :class="[
                    v$.wechat.$error ? 'border-red-400' : 'border-grey-300',
                  ]"
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
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
                    WeChat is required
                  </p>
                  <p
                    v-if="v$.wechat.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    The number you entered is invalid
                  </p>
                </div>
              </div>
            </div>
            <div class="relative w-full mb-3 grid grid-cols-2 gap-4">
              <div class="school w-full mb-3">
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
                  :class="[
                    v$.school.$error ? 'border-red-400' : 'border-grey-300',
                  ]"
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
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
                    School is required
                  </p>
                  <p
                    v-if="v$.school.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    School is invalid
                  </p>
                </div>
              </div>
              <div class="grade w-full mb-3">
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
                  :class="[
                    v$.grade.$error ? 'border-red-400' : 'border-grey-300',
                  ]"
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
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
                    Grade is required
                  </p>
                  <p
                    v-if="v$.grade.grade.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Grade is invalid
                  </p>
                </div>
              </div>
            </div>
            <div class="relative w-full mb-3 grid grid-cols-2 gap-4">
              <div class="major w-full mb-3">
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
                  :class="[
                    v$.major.$error ? 'border-red-400' : 'border-grey-300',
                  ]"
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
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
                    Major is required
                  </p>
                  <!-- <p
                    v-if="v$.major.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Major is invalid
                  </p> -->
                </div>
              </div>
              <div class="target_industry w-full mb-3">
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
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
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
                    Target Industry is required
                  </p>
                  <!-- <p
                    v-if="v$.target_industry.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Please enter a valid target industry
                  </p> -->
                </div>
              </div>
            </div>
            <!-- <div class="relative w-full mb-3 flex items-center">
              <div class="consulting w-full mb-3">
                <label
                  class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
                  htmlFor="consulting"
                >
                  Consulting Direction (Internship or Full-time)
                </label>
                <input
                  id="consulting"
                  name="consulting"
                  type="consulting"
                  autocomplete="consulting"
                  :class="[
                    v$.consulting.$error ? 'border-red-400' : 'border-grey-300',
                  ]"
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
                  placeholder=""
                  style="transition: 'all .15s ease'"
                  v-model="v$.consulting.$model"
                  @blur="v$.consulting.$touch()"
                />
                <div v-if="v$.consulting.$error">
                  <p
                    v-if="v$.consulting.required.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Consulting Direction is required (Select Internship or
                    Full-time)
                  </p>
                  <p
                    v-if="v$.consulting.consulting.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Consulting Direction is invalid
                  </p>
                </div>
              </div>
              <div class="paid_items w-full mb-3">
                <label
                  class="font-Rubik text-greyText text-[14px] leading-[16.59px] font-normal"
                  htmlFor="paid_items"
                >
                  Would you accept paid items?
                </label>
                <input
                  id="paid_items"
                  name="paid_items"
                  type="paid_items"
                  autocomplete="username"
                  :class="[
                    v$.paid_items.$error ? 'border-red-400' : 'border-grey-300',
                  ]"
                  class="px-4 py-3 mt-2 text-[15px] leading-[17.78px] font-Rubik placeholder-gray-400 text-black text-sm border border-gray-200 w-full focus:outline-none focus:border-black hover:border-black focus:ring-0 rounded-md"
                  placeholder=""
                  style="transition: 'all .15s ease'"
                  v-model="v$.paid_items.$model"
                  @blur="v$.paid_items.$touch()"
                />
                <div v-if="v$.paid_items.$error">
                  <p
                    v-if="v$.paid_items.required.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Paid items is a required field
                  </p>
                  <p
                    v-if="v$.email.paid_items.$invalid"
                    class="text-red-400 text-[10px] font-light"
                  >
                    Paid items is invalid
                  </p>
                </div>
              </div>
            </div> -->

            <!-- {{ v$.telephone }} -->

            <button
              :disabled="v$.$invalid"
              type="button"
              class="submit w-full py-4 text-white font-medium text-[16px] text-center leading-[19px] bg-black my-[30px] disabled:opacity-50"
              @click="createApplication"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </BaseModal>
  </main>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import SplashScreen from "@/components/SplashScreen.vue";
import BaseModal from "./components/modal/BaseModal.vue";
import ApplicationService from "./services/applications.service";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  components: {
    TopNavbar,
    SplashScreen,
    BaseModal,
  },
  setup() {
    const store = useStore();
    const baseUrl = process.env.VUE_APP_CMS_BASEURL;
    const successesUrl = process.env.VUE_APP_CMS_RECENTSUCCESSES_ENDPOINT;
    const coachesUrl = process.env.VUE_APP_CMS_COACHES_ENDPOINT;
    const testimonialsUrl = process.env.VUE_APP_CMS_TESTIMONIALS_ENDPOINT;

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
    const reorderResponse = (res) => {
      return res.sort((a, b) => a.id - b.id);
    };
    const loading = ref(true);
    const getData = async () => {
      loading.value = true;
      try {
        const coachesResponse = await axios.get(`${baseUrl}${coachesUrl}`);
        const successesResponse = await axios.get(`${baseUrl}${successesUrl}`);
        const testimonialsResponse = await axios.get(
          `${baseUrl}${testimonialsUrl}`
        );

        if (
          coachesResponse.status === 200 &&
          successesResponse.status === 200 &&
          testimonialsResponse.status === 200
        ) {
          loading.value = false;
          console.log(loading.value);
        }
        // console.log(res, "resss");
        store.commit(
          "setAvailableCoaches",
          reorderResponse(coachesResponse.data.data)
        );
        store.commit(
          "setAvailableSuccesses",
          reorderResponse(successesResponse.data.data)
        );
        store.commit(
          "setAvailableTestimonials",
          reorderResponse(testimonialsResponse.data.data)
        );
        store.commit("setAppLoading", false);
      } catch (error) {
        console.error(error);
      }
    };
    const createApplication = async () => {
      const data = applicationData.value;
      try {
        const response = await ApplicationService.createApplication(data);
        // Handle response
        if (response.status === 201) {
          console.log(response.data);
        }
      } catch (error) {
        // Handle error
        console.error({ error: "Error fetching the resource" });
      }
    };
    onMounted(() => {
      window.addEventListener("load", (event) => {
        console.log(event, "page is fully loaded");
      });
      store.commit("setModalActive", {
        status: false,
        message: null,
      });
      store.commit("setApplicationModal", false);
      getData();
    });

    return {
      appLoading: computed(() => store.state.app.appLoading),
      loading,
      applicationModal: computed(() => store.state.app.applicationModal),
      v$,
      createApplication,
      applicationData,
    };
  },
};
</script>

<style>
/* main {
  isolation: isolate;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
