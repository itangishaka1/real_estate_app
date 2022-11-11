import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a7343668d6msh5d3e244a7741db3p1fcaaajsnfa677ad0bae7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}