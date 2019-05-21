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
          this.error = this.$ml.get('error-messages')['400'];
          break;
        case 401:
          this.error = this.$ml.get('error-messages')['401'];
          break;
        case 403:
          this.error = this.$ml.get('error-messages')['403'];
          break;
        case 500:
          this.error = this.$ml.get('error-messages')['500'];
          break;
        default:
          this.error = this.$ml.get('error-messages')['default'];
      }
      setTimeout(() => {
        this.error = null
      }, 5000);
    }
  }
}
