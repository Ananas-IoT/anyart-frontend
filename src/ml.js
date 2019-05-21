import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller);

export default new MLCreate({
  initial: 'ukrainian',
  // initial: 'english',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('ukrainian').create({
      // ===============ERROR CODES=================
      'error-messages' : {
        '400': "Здається, щось не так з вашим запитом. Спробуйте ще раз або зверніться до програміста",
        '401': "Трапилась помилка з вашим аккаунтом. Будь-ласка, спробуйте перезайти",
        '403': "Здається, трапилась помилка доступу. Будь-ласка, зверніться до програміста",
        '500': "Здається, щось не так з нашим сервером. Будь-ласка, зверніться до програміста",
        'default': "Виникла невідома помилка :("
      },
      // ===============ERROR CODES=================

      // ===============HEADER=================
      'header-nav-main': 'Головна',
      'header-nav-how-to': 'Як це працює?',
      'header-nav-about-us': 'Про нас',
      'header-nav-gallery': 'Галерея',
      'header-nav-contacts': 'Контакти',
      'header-nav-map': 'Карта',
      // ===============HEADER=================

      // ===============AUTH=================
      'required-field': "Поле обов'язкове",
      'auth-logout': 'Вийти',
      'auth-register': 'Реєстрація',
      'auth-login': 'Увійти',
      'auth-logout-warning': 'Ви впевнені, що хочете вийти?',
      'auth-to-main': 'Повернутися на головну',
      'auth-username': 'Юзернейм',
      'auth-password': 'Пароль',
      'auth-register-stepper': [
        'Основна інформація', 'Персональна інформація', 'Соціальний профіль', 'Продовжити'
      ],
      'auth-register-title': 'Створити аккаунт: ',
      'auth-register-subtitle': 'Щоб додавати запити та голосувати за них',
      'auth-email': 'email',
      'auth-confirm-password': 'Підтвердити пароль',
      'auth-first-name': "Ім'я",
      'auth-last-name': 'Прізвище',
      'auth-register-role-description': [
        'Як звичайний користувач, ви зможете завантажувати запити і голосувати за скетчі',
        'Ви матимете всі можливості звичайного користувача плюс можливість завантажувати скетчі'
      ],
      'auth-register-artist-button': 'Я хочу бути художником!',
      // ===============AUTH=================

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
      // ===============LANDING=================

      // ===============MAP===================
      'map-search-input': 'Введіть адресу',
      'map-search-button': 'Додати',
            // ===============UPLOAD-FORM===================
      'upload-form-title': {
        'request': 'Запит форма',
        'sketch': 'Скетч форма'
      },
      'upload-form-select-image': 'Вибрати зображення',
      'upload-form-description': 'Опис..',
      'upload-form-button': 'Відправити',
      'upload-form-message-title': 'Інформуємо!',
      'upload-form-message-text': {
        'request': 'Ваш запит був успішно відправлений! Ми попереджаємо, що перед тим як опинитись на карті, ваш' +
          'запит переглянуть і дозволять',
        'sketch': 'Ваш скетч був успішно відправлений! Ми попереджаємо, що перед тим як опинитись на карті, ваш' +
          'скетч переглянуть і дозволять',
        'end': 'Якщо щось піде не так, ми вас проінформуємо!',
      },
      'upload-form-message-button': 'Добре, я зрозумів',

            // ===============UPLOAD-FORM===================
      'request-list-title': 'Список Запитів: ',
      'request-list-owner': 'власник: ',
      'request-list-status': 'Статус: ',
      'opened-request-upload-sketch': 'Завантажити скетч',
      'opened-request-sketch-artist': 'Художник: ',
      'opened-request-sketch-votes': [' Голос', ' Голосів'],
      // ===============MAP===================

      // ===============USER-PROFILE===================
      'user-profile-title': 'Мій профіль',
      'user-profile-user-rights': {
        'basic': 'Звичайний користувач',
        'artist': 'Художник'
      },
      'user-profile-requests': 'Мої Запити',
      'user-profile-sketches': 'Мої Скетчі',
      'user-profile-messages': 'Мої Повідомення: ',
      'user-profile-delete-title': 'Увага!',
      'user-profile-delete-text': {
        'request': 'Ви впевнені, що хочете видалити цей запит?',
        'sketch': 'Ви впевнені, що хочете видалити цей скетч?'
      },
      'user-profile-delete-button': 'Так, видаляйте!',
      'user-profile-request-actions': ['До карти', 'Видалити']
      // ===============USER-PROFILE===================

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
