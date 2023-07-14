/** @format */

import axios from "axios";

const BaseUrl = "https://ankit-pandey-backend.vercel.app";

export const GetDashboardData = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/api/v1/profile/dashboard`);
    return response;
  } catch (e) {
    console.log("Dashborad Token Err", e);
  }
};

const data = [
    {
        name  : "nifty50" , 
            lp": "19439.95",
            "pc": "0.29",
            "e": "NSE",
            "tk": "26000",
            "ExchangeData": {
                "_id": "64af90a43edebcac21fb8b25",
                "exchange": "NSE",
                "token": "26000",
                "sheet": "INDICES",
                "Symbol": "NIFTY 50",
                "__v": 0
            }
        }
    }
];
