<template>
  <div class="body">
    <h3>Please, complete the {{type}} form</h3>
    <form>
      <input type="file"/>
      <textarea v-model="request.description" placeholder="description" required></textarea>
      <div v-if="requestAddress">{{requestAddress.name}}</div>
      <button @click="processRequest" type="button">Submit and Send</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "RequestTemplate",
    props: {
      requestAddress: {
        default: {name: ''},
        type: Object
      }
    },
    data() {
      return {
        request: {
          photo: null,
          description: '',
          address: {},
          position: {},
          author: '',
          date: ''
        },
        type: "Request"
      }
    },
    methods: {
      processRequest: function () {
        this.request.date = this.getCurDate();
        this.request.address = this.requestAddress;

        this.request.position = {
          lat: this.requestAddress.geometry.location.lat(),
          lng: this.requestAddress.geometry.location.lng()
        };

        this.request.author = this.$store.getters.getUser.surname;
        // console.log(this.request);

        this.$store.dispatch('addRequest', this.request);
        this.$emit('addMarker', this.request);
      },
      getCurDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        if(dd<10) {dd = '0'+dd}
        if(mm<10) {mm = '0'+mm}
        today = mm + '.' + dd + '.' + yyyy;
        return today;
      }
    }
  }
</script>

<style scoped>
  .body {
    text-align: center;
    width: 330px;
    padding: 30px 20px;
    margin: 40px auto;
    background: #eee;
    border-radius: 10px;
  }

  form input[type='file'] {
    color: transparent;
  }

  form div {
    display: block;
    width: 80%;
    padding: 5px 10px;
    margin: 20px auto;
  }

  form textarea {
    display: block;
    width: 80%;
    padding: 5px 10px;
    margin: 20px auto;
  }

  form button {
    display: block;
    width: 320px;
    padding: 10px 15px;
    margin: auto;
  }
</style>
