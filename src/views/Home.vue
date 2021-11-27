<script>
import api from '../plugins/api'

export default {
  data: () => ({
    word: '',
    searchResults: null,
  }),
  computed: {
    wordPattern() {
      return '^' + this.word.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') 
    }
  },
  methods: {
    search() {
      api.get('words/', {
        params: {
          letterPattern: this.wordPattern,
          limit: 5,
        }
      }).then(response => {
        this.searchResults = response.data.results.data
      })
    }
  }
}
</script>

<template>

<div class="container py-3">
  <div class="mb-3">
    <input @change="search" v-model="word" type="text" class="form-control" placeholder="Search word...">
  </div>

  <div class="list-group">
    <router-link :to="{name: 'word', params: {word: item}}" v-for="(item, i) in searchResults" :key="i" class="list-group-item">
      {{ item }}
    </router-link>
  </div>

</div>

</template>
