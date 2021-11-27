import Home from '../views/Home.vue'
import Word from '../views/Word.vue'
import Random from '../views/Random.vue'

export default [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/word/:word',
        component: Word,
        name: 'word',
    },
    {
        path: '/random',
        component: Random,
        name: 'random',
    },
];