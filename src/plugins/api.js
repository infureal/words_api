import axios from 'axios'

console.log(import.meta.env.VITE_RAPID_API_TOKEN);

export default axios.create({
    baseURL: 'https://wordsapiv1.p.rapidapi.com',
    headers:  {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_TOKEN
      }
})