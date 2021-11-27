<script>
import api from '../plugins/api'

export default {
    data: () => ({
        info: {},
    }),
    computed: {
        word() {
            return this.$route.params.word;
        },
    },
    mounted() {
        this.load();
    },
    methods: {
        async loadInfo(name, key, handler) {
            await api.get(`words/${this.word}/${name}/`)
                .then(response => {
                    return handler(response.data[key]); 
                })
                .catch(err => [])
        },
        async load() {
            await this.loadInfo('definitions', 'definitions', defs => {
                this.info.definitions = defs;
            })

            await this.loadInfo('synonyms', 'synonyms', data => {
                this.info.synonyms = data;
            })
            
            await this.loadInfo('rhymes', 'rhymes', data => {
                this.info.rhymes = data;
            })
        }
    }
}
</script>

<template>
    <div class="container py-3">
        <h1>{{ word }}</h1>

        <div
            class="card my-3"
            v-if="'definitions' in this.info && this.info.definitions.length > 0"
        >
            <div class="card-header">Definitions</div>
            <div class="list-group list-group-flush">
                <div
                    class="list-group-item"
                    v-for="(def, i) in info.definitions"
                    :key="i"
                >{{ def.definition }}</div>
            </div>
        </div>

        <div
            class="card my-3"
            v-if="'synonyms' in this.info && this.info.synonyms.length > 0"
        >
            <div class="card-header">synonyms</div>
            <div class="list-group list-group-flush">
                <div
                    class="list-group-item"
                    v-for="(s, i) in info.synonyms"
                    :key="i"
                >{{ s }}</div>
            </div>
        </div>

        <div
            class="card my-3"
            v-if="'rhymes' in this.info && this.info.rhymes.all.length > 0"
        >
            <div class="card-header">rhymes</div>
            <div class="list-group list-group-flush">
                <div
                    class="list-group-item"
                    v-for="(r, i) in info.rhymes.all"
                    :key="i"
                >{{ r }}</div>
            </div>
        </div>
    </div>
</template>