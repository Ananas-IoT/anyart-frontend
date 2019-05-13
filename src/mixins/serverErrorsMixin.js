export const serverErrorsMixin = {
  data() {
    return {
      error: null
    }
  },
  methods: {
    statusCodeHumanify(error) {
      console.log(error.response);
      switch (error.response.status) {
        case 400:
          this.error = "Здається, щось не так з вашим запитом. Спробуйте ще раз або зверніться до програміста";
          break;
        case 401:
          this.error =  "Трапилась помилка з вашим аккаунтом. Будь-ласка, спробуйте перезайти";
          break;
        case 403:
          this.error =  "Здається, трапилась помилка доступу. Будь-ласка, зверніться до програміста";
          break;
        case 500:
          this.error =  "Здається, щось не так з нашим сервером. Будь-ласка, зверніться до програміста";
          break;
        default:
          this.error =  "Виникла невідома помилка :("
      }
      setTimeout(() => {
        this.error = null
      }, 5000);
    }
  }
}
