import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // we init with resources
    resources: {
      vn: {
        translations: {
          "Tryit": "Dùng thử",
          "WhatIsWordsmine": "Wordsmine! là gì",
          "banner1stline" : "Vốn từ vựng phong phú hướng ta đến tương lai không giới hạn",
          "banner2ndline" : "Cách nhanh nhất để học từ vựng bất kì đâu, bất kì lúc nào",
          "bannerbutton" : "Cài đặt Extension",
          "bannerlastline" : "Tham gia hôm nay để nhận 6 tháng sử dụng miễn phí",
          "underbannertext" : "Wordsmine! là ứng dụng giúp thu thập các từ vựng bạn thấy xung quanh qua các hoạt động lướt Internet hàng ngày và ghi nhớ chúng nhanh hơn. WordsMine! là viết tắt của Words Mine! - mọi từ vựng bạn muốn sẽ trở thành của bạn!",
          "underbannerEmailSubcribe" : "Đăng kí đi mà anh bạn",
          "underbannerEmailBox" : "Địa chỉ email",
          "underbannerEmailBtn" : "Đăng kí",
          "ver1.3" : "Tháng 8, 2021 (Phiên bản 1.3)",
          "ver1.2" : "Tháng 4, 2021 (Phiên bản 1.2)",
          "ver1.1" : "Tháng 3, 2021 (Phiên bản 1.1)",
          "newFeatures" : "Tính năng mới",
          "improvements" : "Nâng cấp",
          "nf_1stline" : "Bạn có thể dùng tính năng tuỳ chỉnh để tối ưu trải nghiệm học tập được cá nhân hoá cho riêng bạn.",
          "nf_2ndline" : "Bạn có thể gửi lại góp ý cho team WordsMine để team nỗ lực hỗ trợ các bạn học tập tốt hơn.",
          "nf_3rdline" : "Bạn có thể đổi avatar yêu thích của riêng mình.",
          "nf_4thline" : "Những từ vựng mà bạn đã thêm, giờ đây bạn có thể xem nguồn website mà bạn đã lưu từ vựng đó.",
          "nf_5thline" : "Những tính năng mới của nền tảng WordsMine sẽ được thể hiện trong thông báo để bạn tiện theo dõi.",
          "nf_6thline" : "Ngoài ra, team WordsMine còn thêm chức năng giới thiệu nền tảng dành cho những người dùng mới nhằm để giúp quen với nền tảng WordsMine hơn!",
          "im_line" : "Tối ưu hiệu suất",
        }
      },
      en: {
        translations: {
          "Tryit": "Try it",
          "WhatIsWordsmine": "What is Wordsmine!",
          "banner1stline" : "Learn any words, be unstoppable!",
          "banner2ndline" : "The fastest way to learn vocabulary from everywhere and everytime",
          "bannerbutton" : "Install Extension Now",
          "bannerlastline" : "Install now and get 6 months for free.",
          "underbannertext" : "Wordsmine is the first second language learning app that helps you collect vocabulary you see in daily Internet-surfing activities, and learn them faster by giving you scientific approaches and contextualized examples taken from reliable sources.",
          "underbannerEmailSubcribe" : "Subscribe to our newsletter",
          "underbannerEmailBox" : "Email address",
          "underbannerEmailBtn" : "Subcribe",
          "ver1.3" : "August, 2021 (Version 1.3)",
          "ver1.2" : "April, 2021 (Version 1.2)",
          "ver1.1" : "Match, 2021 (Version 1.1)",
          "newFeatures" : "New feature",
          "improvements" : "Improvements",
          "nf_1stline" : "You can tailor your learning experience in Preference Mode.",
          "nf_2ndline" : "You can use Feedback Feature to let us know what you want, we will do it for ya.",
          "nf_3rdline" : "You can put on your favorite avatar.",
          "nf_4thline" : "You can see the original website where you add your vocabulary from.",
          "nf_5thline" : "New features are now introduced in a What's new popup.",
          "nf_6thline" : "We added user onboarding feature to help you become more familiar with our platform.",
          "im_line" : "Optimizing performance.",
        }
      }
    },
    fallbackLng: 'vn',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      bindI18n: 'languageChanged',
      wait: true,
      useSuspense : true
    }
    
  });


export default i18n;