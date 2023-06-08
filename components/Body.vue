<template>
    <div class="fs-grid">
      <div class="col-start-1 col-span-12">
        <h2>Hier sind alle aktuellen Artikel:</h2>
          <ul>
              <li v-for="item in items" :key="item.id">
                  <h3>{{ item.title }} <br/></h3>
                  {{ item.content }}
              </li>
          </ul>
      </div>
    </div>
</template>
  
  
  <script>
  import { db } from '~/plugins/firebase.js'
  export default {
  data() {
    return {
      items: [],
      title: '',
      content: ''
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      const snapshot = await db.collection('meineArtikel').get()
      const items = []
      snapshot.forEach(doc => {
        items.push({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content
        })
      })
      this.items = items
    },
  }
}
</script>