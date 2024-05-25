import axios from "axios";
// import { useStore } from "vuex";
// const store = useStore();

// const storedLocale = store.state.app.locale;
const baseurl = `${process.env.VUE_APP_CMS_BASEURL}`;
const url = `${baseurl}`;
// const token = process.env.VUE_APP_BACKEND_JWT_SECRET; // Or retrieve from your state management

// const headers = {
//   Authorization: `Bearer ${token}`,
// };
class CMSService {
  static getAllDataByLocale(locale) {
    console.log(locale);
    return axios.get(
      `${url}main-page?locale=${locale}&populate[0]=mainHeading.mainHeroImage&populate[1]=mainHeading.mainHeroCTA&populate[2]=ServicesComponent&populate[3]=ServicesComponent.servicesAccordion&populate[4]=ServicesComponent.servicesImage&populate[5]=CoachingComponent.coachActivity&populate[6]=CoachingComponent.coachesCTA&populate[7]=CoachingComponent.coachingImage&populate[8]=SuccessComponent.coachActivity&populate[9]=SuccessComponent.successesCTA&populate[10]=TestimonialComponent&populate[11]=TestimonialComponent.testimonialsCTA&populate[12]=LearnMoreComponent.officeAddress&populate[13]=LearnMoreComponent.privacy&populate[14]=LearnMoreComponent.copyright`
    );
  }
}

export default CMSService;
