<template>
    <div class="fs-grid">
        <div class="col-start-5 col-span-5">
            <h2>Hier sind alle aktuellen Anmeldungen für die Ersti-Fahrt</h2>
            <ul>
                <li v-for="item in items" :key="item.id">
                    - {{ item.vorname }} {{ item.nachname }}
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
      vorname: '',
      nachname: ''
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      const snapshot = await db.collection('erstiFahrtAnmeldungen').get()
      const items = []
      snapshot.forEach(doc => {
        items.push({
          id: doc.id,
          vorname: doc.data().vorname,
          nachname: doc.data().nachname
        })
      })
      this.items = items
    },
  }
}
</script>