import axios from "axios"

const BaseUrl = "https://ankit-pandey-backend.vercel.app"

export const GetDashboardData = async () => {
    try{
        const response = await axios.get()
    }catch(e) {
        console.log('Dashborad Token Err' , e)
    }
}