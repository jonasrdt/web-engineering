<template>
    <div class="fs-grid">
      <div class="col-start-1 md:col-start-5 col-span-4 md:col-span-5">
        <h1 class="mb-8">Bitte Login Daten eingeben</h1>
        <form @submit.prevent="login" class="flex flex-col login">
          <input class="mb-8" v-model="email" type="email" placeholder="Email" required>
          <input v-model="password" type="password" placeholder="Password" required>
          <button class="mt-8" type="submit">Anmelden</button>
        </form>
      </div>
    </div>
</template>
  
  <script>
  import firebase from '~/plugins/firebase.js';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // Erfolgreich angemeldet, umleiten zu einer geschützten Seite
            // this.$router.push('/geschutzte-seite');
            alert("Erfolgreich!")
          })
          .catch((error) => {
            // Fehlerbehandlung
            alert("Invalid user or password.")
          });
      },
    },
  };
  </script>
  