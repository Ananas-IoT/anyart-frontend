import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller);

//https://www.npmjs.com/package/vue-multilanguage



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
        'Як користувач, ви зможете завантажувати запити і голосувати за скетчі',
        'Ви матимете всі можливості користувача плюс можливість завантажувати скетчі'
      ],
      'auth-register-artist-button': 'Я хочу бути художником!',
      // ===============AUTH=================

      // ===============LANDING=================
            // ===============MAIN=================
      'landing-main-subtitle': 'Розфарбуй свої будні!',
            // ===============HOW-TO=================
      'landing-how-to-title': 'Як це працює?',
      'landing-how-to-description': 'Правила дуже прості. Виконайте декілька нескладних кроків: ',
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
        ' Наша мета — зробити Львів краще для всіх нас',
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
      ' З нашою допомогою їх ставатиме ще більше!',
            // ===============CONTACT-US=================
      'landing-contact-us-message-title': 'Повідомлення!',
      'landing-contact-us-message-success': 'Дякуємо за відгук! :)',
      'landing-contact-us-message-error': "Здається, щось пішло не так. Спробуйте ще раз," +
        " або зв'яжіться з нами напряму: anyart-iot@gmail.com",
      'landing-contact-us-title': 'Напишіть нам!',
      'landing-contact-us-subtitle': 'Якщо у вас є пропозиції,' +
      'ідеї чи думки щодо покращення сервісу, напишіть нам. Це зробить наш проект кращим!',
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
        'basic': 'користувач',
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
      // ===============ERROR CODES=================
      'error-messages' : {
        '400': "Something is wrong with your request. Try again or inform the developer!",
        '401': "An error occured with your account. Please, try to relogin",
        '403': "An access error occured. Please, inform the developer!",
        '500': "Something is wrong with our server. Please, inform the developer.",
        'default': "An unknown error occured :("
      },
      // ===============ERROR CODES=================

      // ===============HEADER=================
      'header-nav-main': 'Main',
      'header-nav-how-to': 'How it works?',
      'header-nav-about-us': 'About us',
      'header-nav-gallery': 'Gallery',
      'header-nav-contacts': 'Contacts',
      'header-nav-map': 'Map',
      // ===============HEADER=================

      // ===============AUTH=================
      'required-field': "Field is required!",
      'auth-logout': 'Logout',
      'auth-register': 'Register',
      'auth-login': 'Login',
      'auth-logout-warning': 'Are you sure want to logout?',
      'auth-to-main': 'Back to main',
      'auth-username': 'username',
      'auth-password': 'password',
      'auth-register-stepper': [
        'General information', 'Personal', 'Social profile', 'Continue'
      ],
      'auth-register-title': 'Create an account: ',
      'auth-register-subtitle': 'To add requests and vote for sketches',
      'auth-email': 'email',
      'auth-confirm-password': 'Confirm password',
      'auth-first-name': "First Name",
      'auth-last-name': 'Last Name',
      'auth-register-role-description': [
        'As a user, you can upload requests and vote for sketches!',
        'The User functions, plus sketch upload'
      ],
      'auth-register-artist-button': 'I want to be artist!',
      // ===============AUTH=================

      // ===============LANDING=================
      // ===============MAIN=================
      'landing-main-subtitle': 'Colorize your routine!',
      // ===============HOW-TO=================
      'landing-how-to-title': 'How it works?',
      'landing-how-to-description': 'Rules are simple. Just complete some steps: ',
      'landing-how-to-workflow': [
        'Pick a place and upload a wall photo',
        'Government approves the place',
        'Artist suggests his sketches',
        'Government approves the sketch',
        'Vote for best sketches!',
        'Enjoy!',
      ],
      'landing-how-to-workflow-body': [
        'Find a place in search bar, upload a wall photo' +
        ' and add a comment to it!',
        'Then government should check, if this place is allowed to draw',
        'Artist may choose your request and attach his sketch to it',
        'Then government checks the sketch and licenses a drawing',
        'You vote for best solutions with other users!',
        'No comments :)',
      ],
      'landing-how-to-button': 'Go to map!',
      // ===============ABOUT-US=================
      'landing-about-us-title': 'About us:',
      'landing-about-us-subtitle': 'We are happy to see you on our site!' +
        ' Our purpose is to make Lviv a better place for all of us',
      'landing-about-us-name': [
        "Ann Man'ko",
        'Daniil Lohvinov',
        'Mike Gursky',
        'Vlad Boychev',
        'Oleh Gavrilyuk'
      ],
      'landing-about-us-position': [
        'Product Owner, Back-End developer',
        'UX-дизайнер, Front-End developer',
        'System Architect',
        'Marketing, Front-End developer',
        'Mentor'
      ],
      // ===============GALLERY=================
      'landing-gallery-title': 'Gallery:',
      'landing-gallery-subtitle': 'Some examples of great street art, which created before us.' +
        ' It will be more, with our help!',
      // ===============CONTACT-US=================
      'landing-contact-us-message-title': 'Information!',
      'landing-contact-us-message-success': 'Thanks for your feedback! :)',
      'landing-contact-us-message-error': "Something got wrong :(. Please try again," +
        " or contact us: anyart-iot@gmail.com",
      'landing-contact-us-title': 'Lets be in touch!',
      'landing-contact-us-subtitle': 'If you have some propositions or' +
        ' ideas which can improve our service, contact us. Your message will help us develop a better platform!',
      'landing-contact-us-form-contact': "How can we contact you?",
      'landing-contact-us-form-body': 'Your text..',
      'landing-contact-us-form-button': 'Send',
      'landing-contact-us-mail': 'Or write us here: ',
      // ===============PARTNERS=================
      'landing-partners-title': 'Our partners: ',
      // ===============FOOTER=================
      'landing-footer-follow': 'Follow us: ',
      // ===============LANDING=================

      // ===============MAP===================
      'map-search-input': 'Address..',
      'map-search-button': 'Add',
      // ===============UPLOAD-FORM===================
      'upload-form-title': {
        'request': 'Request form',
        'sketch': 'Sketch form'
      },
      'upload-form-select-image': 'Choose an image',
      'upload-form-description': 'Description..',
      'upload-form-button': 'Send',
      'upload-form-message-title': 'Information!',
      'upload-form-message-text': {
        'request': 'Your request was successfully send! We notify you, before appear on the map, your' +
          ' request should be approved',
        'sketch': 'Your sketch was successfully send! We notify you, attachment to request, your' +
          ' request should be approved',
        'end': 'If something goes wrong, we will inform you!',
      },
      'upload-form-message-button': 'Ok, got it!',

      // ===============UPLOAD-FORM===================
      'request-list-title': 'Request List: ',
      'request-list-owner': 'owner: ',
      'request-list-status': 'Status: ',
      'opened-request-upload-sketch': 'Upload sketch',
      'opened-request-sketch-artist': 'Artist: ',
      'opened-request-sketch-votes': [' vote', ' votes'],
      // ===============MAP===================

      // ===============USER-PROFILE===================
      'user-profile-title': 'My profile',
      'user-profile-user-rights': {
        'basic': 'User',
        'artist': 'Artist'
      },
      'user-profile-requests': 'My requests',
      'user-profile-sketches': 'My sketches',
      'user-profile-messages': 'My messages: ',
      'user-profile-delete-title': 'Warning!',
      'user-profile-delete-text': {
        'request': 'Are you sure you want to delete this request?',
        'sketch': 'Are you sure you want to delete this sketch?'
      },
      'user-profile-delete-button': 'Yes, delete it!',
      'user-profile-request-actions': ['To map', 'Delete']
      // ===============USER-PROFILE===================

    })
  ]
})
