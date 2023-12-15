import axios from "axios"


export const GetAllCharacters = async()=>{
    const response = await axios.get("https://thronesapi.com/api/v2/Characters")
    return response.data 
}


