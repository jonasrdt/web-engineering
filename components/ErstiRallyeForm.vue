<template>
    <div class="fs-grid flex flex-col mb-8">
        <div class="col-start-5 col-span-5">
          <h1>TeilnehmerIn zur Ersti-Fahrt anmelden</h1>
          <p>Mit folgendem Formular kannst manuell jemanden zur Ersti-Fahrt anmelden</p>
        </div>
        <form @submit.prevent="saveData" class="article-form flex flex-col col-start-5 col-span-5">
              <label for="Vornamen">Vorname:</label>
              <input type="text" id="vorname" v-model="vorname">
              <label for="Nachname">Nachname:</label>
              <input type="text" id="nachname" v-model="nachname">
              <button class="w-1/3" type="submit">Speichern</button>
          </form>
      </div>
  </template>
  
  <script>
  import { db } from '~/plugins/firebase.js'
  export default {
  data() {
    return {
      vorname: '',
      nachname: ''
    } 
  },
  methods: {
    async saveData() {
      const data = {
        vorname: this.vorname,
        nachname: this.nachname
      }
      await db.collection('erstiFahrtAnmeldungen').add(data)
      this.vorname = ''
      this.nachname = ''
    }
  }
  }
  </script>