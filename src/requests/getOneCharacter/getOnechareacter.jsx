import axios from "axios"



export const GetOneCharacters = async(id)=>{
    const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
    return response.data
}