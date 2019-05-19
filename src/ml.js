import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller);

export default new MLCreate({
  initial: 'ukrainian',
  // initial: 'english',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('ukrainian').create({
      // ===============HEADER=================
      'header-nav-main': 'Головна',
      'header-nav-how-to': 'Як це працює?',
      'header-nav-about-us': 'Про нас',
      'header-nav-gallery': 'Галерея',
      'header-nav-contacts': 'Контакти',
      'header-nav-map': 'Карта',
      'header-auth-logout': 'Вийти',
      'header-auth-register': 'Реєстрація',
      'header-auth-login': 'Увійти',
      // ===============HEADER=================

      // ===============LANDING=================
            // ===============MAIN=================
      'landing-main-subtitle': 'Розфарбуй свої будні!',
            // ===============HOW-TO=================
      'landing-how-to-title': 'Як це працює?',
      'landing-how-to-description': 'Правила дуже прості. Просто виконайте декілька простих кроків: ',
      'landing-how-to-workflow': [
        'Виберіть місце та завантажте фото',
        'Місце затверджує влада',
        'Художник запропонує свій скетч',
        'Він отримає дозвіл від влади',
        'Голосуйте за найкращі зі скетчів',
        'Насолоджуйтесь!',
      ],
      'landing-how-to-workflow-body': [
        'У пошуковій стрічці на карті знайдіть місце, завантажте' +
          ' до нього фото та напишіть коментар',
        'Після цього представники влади мають перевірити, чи можна малювати' +
          ' на стіні, яку ви запропонували',
        'Художник може обрати вашу стіну і завантажити до неї свій скетч',
        'Після цього представники влади перевірять скетч та дадуть дозвіл на малювання',
        'Лише ви обираєте, який скетч є найкращим для цього місця!',
        'Без коментарів :)',
      ],
      'landing-how-to-button': 'Перейти до карти!',
            // ===============ABOUT-US=================
      'landing-about-us-title': 'А тепер трохи про нас:',
      'landing-about-us-subtitle': 'Ми раді вітати вас на нашому сайті!' +
        ' Наша мрія — зробити Львів краще для всіх нас',
      'landing-about-us-name': [
        'Анна Манько',
        'Данііл Логвінов',
        'Михайло Гурський',
        'Влад Бойчев',
        'Олег Гаврилюк'
      ],
      'landing-about-us-position': [
        'Product Owner, Back-End розробник',
        'UX-дизайнер, Front-End розробник',
        'Системний Архітектор',
        'Маркетолог, Front-End розробник',
        'Ментор'
      ],
            // ===============GALLERY=================
      'landing-gallery-title': 'Галерея:',
      'landing-gallery-subtitle': 'Це лише деякі приклади робіт, зроблених до нас.' +
      'З нашою допомогою їх ставатиме ще більше!',
            // ===============CONTACT-US=================
      'landing-contact-us-message-title': 'Повідомлення!',
      'landing-contact-us-message-success': 'Дякуємо за відгук! :)',
      'landing-contact-us-message-error': "Здається, щось пішло не так. Спробуйте ще раз," +
        " або зв'яжіться з нами напряму: anyart-iot@gmail.com",
      'landing-contact-us-title': 'Напишіть нам!',
      'landing-contact-us-subtitle': 'Якщо у вас є пропозиції,' +
      'ідеї чи думки щодо покращення сервісу, напишіть нам та допоможіть зробити наш проект кращим!',
      'landing-contact-us-form-contact': "Як нам з вами зв'язатися?",
      'landing-contact-us-form-body': 'Ваш текст..',
      'landing-contact-us-form-button': 'Відправити',
      'landing-contact-us-mail': 'Або напишіть нам напряму: ',
            // ===============PARTNERS=================
      'landing-partners-title': 'Наші партнери: ',
            // ===============FOOTER=================
      'landing-footer-follow': 'Слідкуйте за нами: ',

    }),

    new MLanguage('english').create({
      // ===============HEADER=================
      'header-nav-main': 'Main',
      'header-nav-how-to': 'How it works',
      'header-nav-about-us': 'About us',
      'header-nav-gallery': 'Gallery',
      'header-nav-contacts': 'Contacts',
      'header-nav-map': 'Map',
      'header-auth-logout': 'Log out',
      'header-auth-register': 'Register',
      'header-auth-login': 'Login',
      // ===============HEADER=================

      // ===============LANDING=================
      'landing-main-subtitle': 'Colorize your routine!',

      'landing-how-to-title': '',
      'landing-how-to-description': '',
      'landing-how-to-workflow-photo': '',
      'landing-how-to-workflow-govern1': '',
      'landing-how-to-workflow-sketch': '',
      'landing-how-to-workflow-govern2': '',
      'landing-how-to-workflow-voting': '',
      'landing-how-to-workflow-enjoy': '',
      'landing-how-to-button': '',
    })
  ]
})

//import {MLBuilder} from 'vue-multilanguage';

//v-text="$ml.with('VueJS').get('title')"

// computed: {
//   mlmyMessage () {
//     return new MLBuilder('msg').with('f', this.friends).with('l', 406)
//   }
// }
