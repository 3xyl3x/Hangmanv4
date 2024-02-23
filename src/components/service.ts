import axios from "axios"

const API_URL = "https://random-word-api.herokuapp.com/word"

export const getWord = async () => {
    return await axios.get(API_URL)
}