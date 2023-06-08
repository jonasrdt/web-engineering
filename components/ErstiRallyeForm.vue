<template>
    <div class="fs-grid flex flex-col">
        <div class="col-start-5 col-span-5">
          <h1>TeilnehmerIn zur Ersti-Fahrt anmelden</h1>
          <p>Mit folgendem Formular kannst manuell jemanden zur Ersti-Fahrt anmelden</p>
        </div>
        <form @submit.prevent="saveData" class="article-form flex flex-col col-start-5 col-span-5">
              <label for="Vornamen">Vorname:</label>
              <input type="text" id="vorname" v-model="vorname">
              <label for="content">Nachname:</label>
              <textarea id="nachname" v-model="nachname"></textarea>
              <button class="w-1/3" type="submit">Speichern</button>
          </form>
      </div>
  </template>
  
  <script>
  import { db } from '~/plugins/firebase.js'
  export default {
  data() {
    return {
      title: '',
      content: ''
    } 
  },
  methods: {
    async saveData() {
      const data = {
        title: this.title,
        content: this.content
      }
      await db.collection('erstiFahrtAnmeldungen').add(data)
      this.title = ''
      this.content = ''
    }
  }
  }
  </script>