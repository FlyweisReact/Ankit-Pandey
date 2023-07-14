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



{
    "message": "ok",
    "data": {
        "nifty50": {
            "lp": "19439.95",
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
        },
        "niftyFinService": {
            "lp": "20045.60",
            "pc": "0.61",
            "e": "NSE",
            "tk": "26037",
            "ExchangeData": {
                "_id": "64af90b23edebcac21fb8db8",
                "exchange": "NSE",
                "token": "26037",
                "sheet": "INDICES",
                "Symbol": "NIFTY FIN SERVICE",
                "__v": 0
            }
        },
        "niftyBank": {
            "lp": "19439.30",
            "pc": "0.28",
            "e": "NSE",
            "tk": "26009",
            "ExchangeData": {
                "_id": "64af90a63edebcac21fb8b9b",
                "exchange": "NSE",
                "token": "26009",
                "sheet": "INDICES",
                "Symbol": "NIFTY BANK",
                "__v": 0
            }
        },
        "sensex": {
            "lp": "65651.78",
            "pc": "0.39",
            "e": "BSE",
            "tk": "1",
            "ExchangeData": {
                "_id": "64af90c13edebcac21fb904a",
                "exchange": "BSE",
                "token": "1",
                "sheet": "INDICES",
                "Symbol": "SENSEX",
                "__v": 0
            }
        },
        "indiaFix": {
            "lp": "10.81",
            "pc": "-1.19",
            "e": "NSE",
            "tk": "26017",
            "ExchangeData": {
                "_id": "64af90a93edebcac21fb8c13",
                "exchange": "NSE",
                "token": "26017",
                "sheet": "INDICES",
                "Symbol": "INDIA VIX",
                "__v": 0
            }
        }
    }
}