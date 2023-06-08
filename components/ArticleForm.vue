<template>
  <div class="fs-grid flex flex-col">
      <div class="col-start-5 col-span-5">
        <h1>Newsfeed füllen</h1>
        <p>Mit folgendem Formular kannst du weitere Inhalte zum Newsfeed hinzufügen.</p>
      </div>
      <form @submit.prevent="saveData" class="article-form flex flex-col col-start-5 col-span-5">
            <label for="title">Titel:</label>
            <input type="text" id="title" v-model="title">
            <label for="content">Inhalt:</label>
            <textarea id="content" v-model="content"></textarea>
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
    await db.collection('meineArtikel').add(data)
    this.title = ''
    this.content = ''
  }
}
}
</script>