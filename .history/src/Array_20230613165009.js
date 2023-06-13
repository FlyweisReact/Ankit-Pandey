import React from 'react'

const Array = () => {
    const data  = [
        {
          Exch: "NSE",
          Symbol: "011NSETEST",
          Token: "14747",
          Trading Symbol: "011NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "021NSETEST",
          Token: "14751",
          Trading Symbol: "021NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "031NSETEST",
          Token: "14753",
          Trading Symbol: "031NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "041NSETEST",
          Token: "14755",
          Trading Symbol: "041NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "051NSETEST",
          Token: "14758",
          Trading Symbol: "051NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "061NSETEST",
          Token: "14762",
          Trading Symbol: "061NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "071NSETEST",
          Token: "14764",
          Trading Symbol: "071NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "081NSETEST",
          Token: "14767",
          Trading Symbol: "081NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "091NSETEST",
          Token: "14769",
          Trading Symbol: "091NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "1018GS2026",
          Token: "6833",
          Trading Symbol: "1018GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "101NSETEST",
          Token: "14772",
          Trading Symbol: "101NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "111NSETEST",
          Token: "14774",
          Trading Symbol: "111NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "11NSETEST",
          Token: "12841",
          Trading Symbol: "11NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "121NSETEST",
          Token: "14777",
          Trading Symbol: "121NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "131NSETEST",
          Token: "14778",
          Trading Symbol: "131NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "141NSETEST",
          Token: "14781",
          Trading Symbol: "141NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "151NSETEST",
          Token: "14782",
          Trading Symbol: "151NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "161NSETEST",
          Token: "14784",
          Trading Symbol: "161NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "182D021123",
          Token: "15338",
          Trading Symbol: "182D021123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D030823",
          Token: "14000",
          Trading Symbol: "182D030823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D051023",
          Token: "14968",
          Trading Symbol: "182D051023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D060723",
          Token: "13629",
          Trading Symbol: "182D060723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D070923",
          Token: "14457",
          Trading Symbol: "182D070923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D071223",
          Token: "16677",
          Trading Symbol: "182D071223-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D091123",
          Token: "15701",
          Trading Symbol: "182D091123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D100823",
          Token: "14135",
          Trading Symbol: "182D100823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D121023",
          Token: "15024",
          Trading Symbol: "182D121023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D130723",
          Token: "13726",
          Trading Symbol: "182D130723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D140923",
          Token: "14569",
          Trading Symbol: "182D140923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D150623",
          Token: "13137",
          Trading Symbol: "182D150623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D161123",
          Token: "15798",
          Trading Symbol: "182D161123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D170823",
          Token: "14170",
          Trading Symbol: "182D170823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D191023",
          Token: "15116",
          Trading Symbol: "182D191023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D200723",
          Token: "13790",
          Trading Symbol: "182D200723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D220623",
          Token: "13259",
          Trading Symbol: "182D220623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D220923",
          Token: "14668",
          Trading Symbol: "182D220923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D231123",
          Token: "16109",
          Trading Symbol: "182D231123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D240823",
          Token: "14284",
          Trading Symbol: "182D240823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D261023",
          Token: "15272",
          Trading Symbol: "182D261023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D280723",
          Token: "13933",
          Trading Symbol: "182D280723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D290623",
          Token: "13405",
          Trading Symbol: "182D290623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D290923",
          Token: "14885",
          Trading Symbol: "182D290923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D301123",
          Token: "16404",
          Trading Symbol: "182D301123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "182D310823",
          Token: "14383",
          Trading Symbol: "182D310823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "20MICRONS",
          Token: "16921",
          Trading Symbol: "20MICRONS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "21STCENMGM",
          Token: "4",
          Trading Symbol: "21STCENMGM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "360ONE",
          Token: "13061",
          Trading Symbol: "360ONE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "364D010224",
          Token: "14004",
          Trading Symbol: "364D010224-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D020524",
          Token: "15339",
          Trading Symbol: "364D020524-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D021123",
          Token: "11776",
          Trading Symbol: "364D021123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D030823",
          Token: "10567",
          Trading Symbol: "364D030823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D040124",
          Token: "13630",
          Trading Symbol: "364D040124-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D040424",
          Token: "14969",
          Trading Symbol: "364D040424-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D051023",
          Token: "11429",
          Trading Symbol: "364D051023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D060624",
          Token: "16681",
          Trading Symbol: "364D060624-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D060723",
          Token: "10274",
          Trading Symbol: "364D060723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D070324",
          Token: "14458",
          Trading Symbol: "364D070324-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D070923",
          Token: "10927",
          Trading Symbol: "364D070923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D071223",
          Token: "13056",
          Trading Symbol: "364D071223-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D080224",
          Token: "14136",
          Trading Symbol: "364D080224-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D090524",
          Token: "15705",
          Trading Symbol: "364D090524-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D091123",
          Token: "11894",
          Trading Symbol: "364D091123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D100823",
          Token: "10667",
          Trading Symbol: "364D100823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D110124",
          Token: "13728",
          Trading Symbol: "364D110124-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D110424",
          Token: "15035",
          Trading Symbol: "364D110424-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D121023",
          Token: "11519",
          Trading Symbol: "364D121023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D130723",
          Token: "10342",
          Trading Symbol: "364D130723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D140324",
          Token: "14573",
          Trading Symbol: "364D140324-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D140923",
          Token: "10954",
          Trading Symbol: "364D140923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D141223",
          Token: "13138",
          Trading Symbol: "364D141223-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D150224",
          Token: "14171",
          Trading Symbol: "364D150224-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D150623",
          Token: "9877",
          Trading Symbol: "364D150623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D160524",
          Token: "15799",
          Trading Symbol: "364D160524-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D161123",
          Token: "11991",
          Trading Symbol: "364D161123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D170823",
          Token: "10687",
          Trading Symbol: "364D170823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D180124",
          Token: "13792",
          Trading Symbol: "364D180124-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D180424",
          Token: "15120",
          Trading Symbol: "364D180424-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D191023",
          Token: "11611",
          Trading Symbol: "364D191023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D200723",
          Token: "10402",
          Trading Symbol: "364D200723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D210923",
          Token: "11059",
          Trading Symbol: "364D210923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D211223",
          Token: "13262",
          Trading Symbol: "364D211223-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D220224",
          Token: "14285",
          Trading Symbol: "364D220224-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D220324",
          Token: "14669",
          Trading Symbol: "364D220324-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D220623",
          Token: "9956",
          Trading Symbol: "364D220623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D230524",
          Token: "16124",
          Trading Symbol: "364D230524-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D231123",
          Token: "12370",
          Trading Symbol: "364D231123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D240823",
          Token: "10792",
          Trading Symbol: "364D240823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D250424",
          Token: "15273",
          Trading Symbol: "364D250424-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D260124",
          Token: "13935",
          Trading Symbol: "364D260124-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D270723",
          Token: "10484",
          Trading Symbol: "364D270723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D271023",
          Token: "11711",
          Trading Symbol: "364D271023-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D280923",
          Token: "11303",
          Trading Symbol: "364D280923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D281223",
          Token: "13407",
          Trading Symbol: "364D281223-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D290224",
          Token: "14384",
          Trading Symbol: "364D290224-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D290324",
          Token: "14886",
          Trading Symbol: "364D290324-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D290623",
          Token: "10226",
          Trading Symbol: "364D290623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D300524",
          Token: "16412",
          Trading Symbol: "364D300524-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D301123",
          Token: "12738",
          Trading Symbol: "364D301123-TB"
        },
        {
          Exch: "NSE",
          Symbol: "364D310823",
          Token: "10858",
          Trading Symbol: "364D310823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "3IINFOLTD",
          Token: "6232",
          Trading Symbol: "3IINFOLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "3MINDIA",
          Token: "474",
          Trading Symbol: "3MINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "3PLAND",
          Token: "9048",
          Trading Symbol: "3PLAND-BE"
        },
        {
          Exch: "NSE",
          Symbol: "3RDROCK",
          Token: "5621",
          Trading Symbol: "3RDROCK-IT"
        },
        {
          Exch: "NSE",
          Symbol: "439MH23",
          Token: "21931",
          Trading Symbol: "439MH23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "448GS2023",
          Token: "947",
          Trading Symbol: "448GS2023-GS"
        },
        {
          Exch: "NSE",
          Symbol: "449RJ23",
          Token: "22021",
          Trading Symbol: "449RJ23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "44HR23",
          Token: "21045",
          Trading Symbol: "44HR23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "452BR23",
          Token: "21215",
          Trading Symbol: "452BR23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "454BR23",
          Token: "22268",
          Trading Symbol: "454BR23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "454RJ23",
          Token: "22271",
          Trading Symbol: "454RJ23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "454TN23",
          Token: "22101",
          Trading Symbol: "454TN23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "456GS2023",
          Token: "6962",
          Trading Symbol: "456GS2023-GS"
        },
        {
          Exch: "NSE",
          Symbol: "45AS23",
          Token: "1069",
          Trading Symbol: "45AS23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "463MH23",
          Token: "21945",
          Trading Symbol: "463MH23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "463TN23",
          Token: "22133",
          Trading Symbol: "463TN23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "469ML23",
          Token: "5876",
          Trading Symbol: "469ML23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "473KA23",
          Token: "6986",
          Trading Symbol: "473KA23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "474KA23",
          Token: "6736",
          Trading Symbol: "474KA23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "476MH23",
          Token: "21943",
          Trading Symbol: "476MH23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "47KA23",
          Token: "6882",
          Trading Symbol: "47KA23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "489RJ23",
          Token: "22058",
          Trading Symbol: "489RJ23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "493BR23",
          Token: "22376",
          Trading Symbol: "493BR23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "495ML24",
          Token: "5554",
          Trading Symbol: "495ML24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "497AS24",
          Token: "5523",
          Trading Symbol: "497AS24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "4THDIM",
          Token: "10866",
          Trading Symbol: "4THDIM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "503KL24",
          Token: "21918",
          Trading Symbol: "503KL24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "505KL23",
          Token: "22409",
          Trading Symbol: "505KL23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "505RJ24",
          Token: "22270",
          Trading Symbol: "505RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "507PY23",
          Token: "8",
          Trading Symbol: "507PY23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "509CG23",
          Token: "11",
          Trading Symbol: "509CG23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "509TN23",
          Token: "22408",
          Trading Symbol: "509TN23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "512BR24",
          Token: "1071",
          Trading Symbol: "512BR24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "515GS2025",
          Token: "1054",
          Trading Symbol: "515GS2025-GS"
        },
        {
          Exch: "NSE",
          Symbol: "518KL24",
          Token: "2063",
          Trading Symbol: "518KL24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "51BR23",
          Token: "22407",
          Trading Symbol: "51BR23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "522GS2025",
          Token: "18976",
          Trading Symbol: "522GS2025-GS"
        },
        {
          Exch: "NSE",
          Symbol: "524AS24",
          Token: "752",
          Trading Symbol: "524AS24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "525AS24",
          Token: "6555",
          Trading Symbol: "525AS24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "527BR24",
          Token: "755",
          Trading Symbol: "527BR24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "527GJ24",
          Token: "7864",
          Trading Symbol: "527GJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "528BR23",
          Token: "152",
          Trading Symbol: "528BR23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "532AS25",
          Token: "1210",
          Trading Symbol: "532AS25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "532AS26",
          Token: "1821",
          Trading Symbol: "532AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "532CG25",
          Token: "1209",
          Trading Symbol: "532CG25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "532RJ25",
          Token: "1700",
          Trading Symbol: "532RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "535CG25",
          Token: "971",
          Trading Symbol: "535CG25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "535RJ25",
          Token: "1513",
          Trading Symbol: "535RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "538CG25",
          Token: "835",
          Trading Symbol: "538CG25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "538RJ24",
          Token: "22045",
          Trading Symbol: "538RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "539GJ24",
          Token: "3043",
          Trading Symbol: "539GJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "539RJ24",
          Token: "22339",
          Trading Symbol: "539RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "539RJ25",
          Token: "2011",
          Trading Symbol: "539RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "53BR25",
          Token: "1207",
          Trading Symbol: "53BR25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "53RJ23",
          Token: "283",
          Trading Symbol: "53RJ23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "540CG24",
          Token: "22331",
          Trading Symbol: "540CG24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "541AP24",
          Token: "22334",
          Trading Symbol: "541AP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "541GA25",
          Token: "1697",
          Trading Symbol: "541GA25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "542RJ24",
          Token: "2662",
          Trading Symbol: "542RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "543BR24",
          Token: "3046",
          Trading Symbol: "543BR24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "544AP24",
          Token: "20736",
          Trading Symbol: "544AP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "544KL24",
          Token: "21900",
          Trading Symbol: "544KL24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "545AP24",
          Token: "20281",
          Trading Symbol: "545AP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "545RJ25",
          Token: "22022",
          Trading Symbol: "545RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "546PY25",
          Token: "2012",
          Trading Symbol: "546PY25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "546TN24",
          Token: "22109",
          Trading Symbol: "546TN24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "547AS24",
          Token: "2533",
          Trading Symbol: "547AS24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "547RJ24",
          Token: "22051",
          Trading Symbol: "547RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "549RJ25",
          Token: "22300",
          Trading Symbol: "549RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "54BR24",
          Token: "587",
          Trading Symbol: "54BR24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "54KL24",
          Token: "2722",
          Trading Symbol: "54KL24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "552AP24",
          Token: "22446",
          Trading Symbol: "552AP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "552MP24",
          Token: "2536",
          Trading Symbol: "552MP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "553KL25",
          Token: "21917",
          Trading Symbol: "553KL25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "563GS2026",
          Token: "3202",
          Trading Symbol: "563GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "565KL24",
          Token: "21907",
          Trading Symbol: "565KL24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "565RJ25",
          Token: "22052",
          Trading Symbol: "565RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "565TN25",
          Token: "4562",
          Trading Symbol: "565TN25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "568MH24",
          Token: "155",
          Trading Symbol: "568MH24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "56HR24",
          Token: "21649",
          Trading Symbol: "56HR24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "56MH24",
          Token: "12",
          Trading Symbol: "56MH24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "56RJ24",
          Token: "416",
          Trading Symbol: "56RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "572BR26",
          Token: "1886",
          Trading Symbol: "572BR26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "574GS2026",
          Token: "6695",
          Trading Symbol: "574GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "575AP24",
          Token: "285",
          Trading Symbol: "575AP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "575KA25",
          Token: "21928",
          Trading Symbol: "575KA25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "575PY26",
          Token: "836",
          Trading Symbol: "575PY26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "575RJ25",
          Token: "22055",
          Trading Symbol: "575RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "575TN25",
          Token: "22105",
          Trading Symbol: "575TN25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "576TN24",
          Token: "22117",
          Trading Symbol: "576TN24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "577GJ25",
          Token: "7809",
          Trading Symbol: "577GJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "577GJ25A",
          Token: "8008",
          Trading Symbol: "577GJ25A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "577GS2030",
          Token: "22292",
          Trading Symbol: "577GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "577KL25",
          Token: "21902",
          Trading Symbol: "577KL25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "579GS2030",
          Token: "18857",
          Trading Symbol: "579GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "579KL24",
          Token: "288",
          Trading Symbol: "579KL24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "57BR24",
          Token: "63",
          Trading Symbol: "57BR24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "57KA26",
          Token: "21927",
          Trading Symbol: "57KA26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "57MH24",
          Token: "80",
          Trading Symbol: "57MH24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "582BR26",
          Token: "1936",
          Trading Symbol: "582BR26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "582RJ27",
          Token: "1824",
          Trading Symbol: "582RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "582TS24",
          Token: "22193",
          Trading Symbol: "582TS24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "585GS2030",
          Token: "1341",
          Trading Symbol: "585GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "588CG26",
          Token: "1703",
          Trading Symbol: "588CG26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "588GJ25",
          Token: "3049",
          Trading Symbol: "588GJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "589AP25",
          Token: "20697",
          Trading Symbol: "589AP25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "589RJ25",
          Token: "22404",
          Trading Symbol: "589RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "58MH25",
          Token: "8009",
          Trading Symbol: "58MH25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "58RJ25",
          Token: "22046",
          Trading Symbol: "58RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "591KL25",
          Token: "21911",
          Trading Symbol: "591KL25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "593CG26",
          Token: "1449",
          Trading Symbol: "593CG26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "593RJ25",
          Token: "2665",
          Trading Symbol: "593RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "594CG25",
          Token: "423",
          Trading Symbol: "594CG25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "594RJ25",
          Token: "3194",
          Trading Symbol: "594RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "595TN25",
          Token: "22121",
          Trading Symbol: "595TN25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "596PY26",
          Token: "5880",
          Trading Symbol: "596PY26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "597CG27",
          Token: "1887",
          Trading Symbol: "597CG27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "597GS2025",
          Token: "6871",
          Trading Symbol: "597GS2025-GS"
        },
        {
          Exch: "NSE",
          Symbol: "599MP26",
          Token: "5525",
          Trading Symbol: "599MP26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "59TS25",
          Token: "22184",
          Trading Symbol: "59TS25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "5PAISA",
          Token: "445",
          Trading Symbol: "5PAISA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "601GS2028",
          Token: "6866",
          Trading Symbol: "601GS2028-GS"
        },
        {
          Exch: "NSE",
          Symbol: "601RJ26",
          Token: "5994",
          Trading Symbol: "601RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "603RJ25",
          Token: "22069",
          Trading Symbol: "603RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "604AS25",
          Token: "418",
          Trading Symbol: "604AS25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "604AS26",
          Token: "7038",
          Trading Symbol: "604AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "604GJ26",
          Token: "6209",
          Trading Symbol: "604GJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "604KL25",
          Token: "22403",
          Trading Symbol: "604KL25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "605AS25",
          Token: "62",
          Trading Symbol: "605AS25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "605RJ26",
          Token: "4570",
          Trading Symbol: "605RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "607RJ26",
          Token: "6987",
          Trading Symbol: "607RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "609AS26",
          Token: "6304",
          Trading Symbol: "609AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "609KA28",
          Token: "21930",
          Trading Symbol: "609KA28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "609RJ26",
          Token: "2125",
          Trading Symbol: "609RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "610GS2031",
          Token: "5012",
          Trading Symbol: "610GS2031-GS"
        },
        {
          Exch: "NSE",
          Symbol: "612KA27",
          Token: "21929",
          Trading Symbol: "612KA27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "613GS2028",
          Token: "6868",
          Trading Symbol: "613GS2028-GS"
        },
        {
          Exch: "NSE",
          Symbol: "613RJ26",
          Token: "3516",
          Trading Symbol: "613RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "616RJ24",
          Token: "22047",
          Trading Symbol: "616RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "617KL27",
          Token: "1709",
          Trading Symbol: "617KL27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "617TS25",
          Token: "22194",
          Trading Symbol: "617TS25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "618GJ26",
          Token: "3058",
          Trading Symbol: "618GJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "618GJ26A",
          Token: "7892",
          Trading Symbol: "618GJ26A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "618GS2024",
          Token: "14251",
          Trading Symbol: "618GS2024-GS"
        },
        {
          Exch: "NSE",
          Symbol: "619AS26",
          Token: "2123",
          Trading Symbol: "619AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "619GS2034",
          Token: "18973",
          Trading Symbol: "619GS2034-GS"
        },
        {
          Exch: "NSE",
          Symbol: "61CG27",
          Token: "2013",
          Trading Symbol: "61CG27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "61RJ26",
          Token: "3638",
          Trading Symbol: "61RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "61RJ27",
          Token: "837",
          Trading Symbol: "61RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "621AS26",
          Token: "2224",
          Trading Symbol: "621AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "622GS2035",
          Token: "953",
          Trading Symbol: "622GS2035-GS"
        },
        {
          Exch: "NSE",
          Symbol: "622KL27",
          Token: "1361",
          Trading Symbol: "622KL27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "623RJ27",
          Token: "5877",
          Trading Symbol: "623RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "624HR26",
          Token: "21640",
          Trading Symbol: "624HR26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "624MH26",
          Token: "5330",
          Trading Symbol: "624MH26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "624MH28",
          Token: "21947",
          Trading Symbol: "624MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "624RJ26",
          Token: "4863",
          Trading Symbol: "624RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "624TS26",
          Token: "22187",
          Trading Symbol: "624TS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "625AS26",
          Token: "5226",
          Trading Symbol: "625AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "627RJ26",
          Token: "5078",
          Trading Symbol: "627RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "628GJ27",
          Token: "5524",
          Trading Symbol: "628GJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "629HP26",
          Token: "21140",
          Trading Symbol: "629HP26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "629RJ26",
          Token: "5025",
          Trading Symbol: "629RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "629RJ26A",
          Token: "7500",
          Trading Symbol: "629RJ26A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "62RJ26",
          Token: "8010",
          Trading Symbol: "62RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "62RJ27",
          Token: "22272",
          Trading Symbol: "62RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "632KA28",
          Token: "22302",
          Trading Symbol: "632KA28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "633AS26",
          Token: "4982",
          Trading Symbol: "633AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "633AS26A",
          Token: "7495",
          Trading Symbol: "633AS26A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "633TN30",
          Token: "22135",
          Trading Symbol: "633TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "634RJ27",
          Token: "6307",
          Trading Symbol: "634RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "635AP27",
          Token: "20572",
          Trading Symbol: "635AP27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "635MH28",
          Token: "1212",
          Trading Symbol: "635MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "636HP28",
          Token: "22267",
          Trading Symbol: "636HP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "638MH27",
          Token: "5467",
          Trading Symbol: "638MH27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "639AP26",
          Token: "21647",
          Trading Symbol: "639AP26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "639BR27",
          Token: "3650",
          Trading Symbol: "639BR27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "63MOONS",
          Token: "11868",
          Trading Symbol: "63MOONS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "63PY26",
          Token: "2372",
          Trading Symbol: "63PY26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "63PY27",
          Token: "7153",
          Trading Symbol: "63PY27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "641GA30",
          Token: "21040",
          Trading Symbol: "641GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "641TN30",
          Token: "22103",
          Trading Symbol: "641TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "642GA30",
          Token: "852",
          Trading Symbol: "642GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "642MN30",
          Token: "21919",
          Trading Symbol: "642MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "642PN30",
          Token: "22298",
          Trading Symbol: "642PN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "642UP30",
          Token: "849",
          Trading Symbol: "642UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "643AP30",
          Token: "976",
          Trading Symbol: "643AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "643AS26",
          Token: "2733",
          Trading Symbol: "643AS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "643MH27",
          Token: "5414",
          Trading Symbol: "643MH27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "643RJ27",
          Token: "7867",
          Trading Symbol: "643RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "643UK30",
          Token: "22451",
          Trading Symbol: "643UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "644GJ29",
          Token: "20601",
          Trading Symbol: "644GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "644GJ29A",
          Token: "22337",
          Trading Symbol: "644GJ29A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "644MH28",
          Token: "22342",
          Trading Symbol: "644MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "644UK30",
          Token: "853",
          Trading Symbol: "644UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "644UP30",
          Token: "22262",
          Trading Symbol: "644UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645BR27",
          Token: "3695",
          Trading Symbol: "645BR27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645GJ30",
          Token: "22448",
          Trading Symbol: "645GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645GJ30A",
          Token: "1827",
          Trading Symbol: "645GJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645GS2029",
          Token: "13472",
          Trading Symbol: "645GS2029-GS"
        },
        {
          Exch: "NSE",
          Symbol: "645HP29",
          Token: "838",
          Trading Symbol: "645HP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645MH27",
          Token: "599",
          Trading Symbol: "645MH27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645ML30",
          Token: "22449",
          Trading Symbol: "645ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645MN30",
          Token: "22301",
          Trading Symbol: "645MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645RJ27",
          Token: "2071",
          Trading Symbol: "645RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645RJ27A",
          Token: "7894",
          Trading Symbol: "645RJ27A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "645RJ30",
          Token: "855",
          Trading Symbol: "645RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "646GJ30",
          Token: "982",
          Trading Symbol: "646GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "646JK30",
          Token: "22303",
          Trading Symbol: "646JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "646RJ30",
          Token: "22340",
          Trading Symbol: "646RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "646RJ30A",
          Token: "22450",
          Trading Symbol: "646RJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "646WB30",
          Token: "22269",
          Trading Symbol: "646WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "647GJ30",
          Token: "21422",
          Trading Symbol: "647GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "647KA30",
          Token: "1080",
          Trading Symbol: "647KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "647MH28",
          Token: "773",
          Trading Symbol: "647MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648AP27",
          Token: "20922",
          Trading Symbol: "648AP27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648AP32",
          Token: "21039",
          Trading Symbol: "648AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648AS30",
          Token: "985",
          Trading Symbol: "648AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648HR40",
          Token: "22299",
          Trading Symbol: "648HR40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648KA30",
          Token: "22335",
          Trading Symbol: "648KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648KA31",
          Token: "861",
          Trading Symbol: "648KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648MZ30",
          Token: "988",
          Trading Symbol: "648MZ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "648RJ27",
          Token: "8319",
          Trading Symbol: "648RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649AP33",
          Token: "22264",
          Trading Symbol: "649AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649GJ29",
          Token: "1364",
          Trading Symbol: "649GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649KA30",
          Token: "21390",
          Trading Symbol: "649KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649KA30A",
          Token: "1158",
          Trading Symbol: "649KA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649KA31",
          Token: "22336",
          Trading Symbol: "649KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649MH31",
          Token: "22343",
          Trading Symbol: "649MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649MP24",
          Token: "21990",
          Trading Symbol: "649MP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649RJ30",
          Token: "22043",
          Trading Symbol: "649RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649TN50",
          Token: "22136",
          Trading Symbol: "649TN50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "649TS50",
          Token: "22263",
          Trading Symbol: "649TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64AP28",
          Token: "1362",
          Trading Symbol: "64AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64GJ30",
          Token: "22296",
          Trading Symbol: "64GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64GJ30A",
          Token: "846",
          Trading Symbol: "64GJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64KA30",
          Token: "22265",
          Trading Symbol: "64KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64KA30A",
          Token: "22452",
          Trading Symbol: "64KA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64KA30B",
          Token: "843",
          Trading Symbol: "64KA30B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64KA30C",
          Token: "972",
          Trading Symbol: "64KA30C-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64KA31",
          Token: "22266",
          Trading Symbol: "64KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "64MH30",
          Token: "973",
          Trading Symbol: "64MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "651HP30",
          Token: "840",
          Trading Symbol: "651HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "651KA30",
          Token: "758",
          Trading Symbol: "651KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "651KA30B",
          Token: "1650",
          Trading Symbol: "651KA30B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "651KA30C",
          Token: "1727",
          Trading Symbol: "651KA30C-SG"
        },
        {
          Exch: "NSE",
          Symbol: "651KA31",
          Token: "21419",
          Trading Symbol: "651KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "652KA30",
          Token: "1522",
          Trading Symbol: "652KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "652MH30",
          Token: "1236",
          Trading Symbol: "652MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "652ML30",
          Token: "22009",
          Trading Symbol: "652ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "652MP35",
          Token: "21949",
          Trading Symbol: "652MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "652NL30",
          Token: "21993",
          Trading Symbol: "652NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "652PY30",
          Token: "994",
          Trading Symbol: "652PY30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "652TS50",
          Token: "22304",
          Trading Symbol: "652TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "653CG28",
          Token: "5671",
          Trading Symbol: "653CG28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "653HP29",
          Token: "1215",
          Trading Symbol: "653HP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "653KA30",
          Token: "1365",
          Trading Symbol: "653KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "653TN31",
          Token: "1839",
          Trading Symbol: "653TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654AP30",
          Token: "20923",
          Trading Symbol: "654AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654AR30",
          Token: "1157",
          Trading Symbol: "654AR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654GA30",
          Token: "20921",
          Trading Symbol: "654GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654GA30A",
          Token: "1516",
          Trading Symbol: "654GA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654GJ30",
          Token: "21216",
          Trading Symbol: "654GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654GS2032",
          Token: "7843",
          Trading Symbol: "654GS2032-GS"
        },
        {
          Exch: "NSE",
          Symbol: "654KA30",
          Token: "1453",
          Trading Symbol: "654KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654MH27",
          Token: "8126",
          Trading Symbol: "654MH27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654MH30",
          Token: "21932",
          Trading Symbol: "654MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654MP35",
          Token: "22297",
          Trading Symbol: "654MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654RJ30",
          Token: "22059",
          Trading Symbol: "654RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654RJ30A",
          Token: "1160",
          Trading Symbol: "654RJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654UP30",
          Token: "779",
          Trading Symbol: "654UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "654WB35",
          Token: "22173",
          Trading Symbol: "654WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655AP28",
          Token: "21549",
          Trading Symbol: "655AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655AP33",
          Token: "864",
          Trading Symbol: "655AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655AP35",
          Token: "22294",
          Trading Symbol: "655AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655AS30",
          Token: "20653",
          Trading Symbol: "655AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655AS30A",
          Token: "22447",
          Trading Symbol: "655AS30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655GA30",
          Token: "1074",
          Trading Symbol: "655GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655GA30A",
          Token: "1454",
          Trading Symbol: "655GA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655KL30",
          Token: "21901",
          Trading Symbol: "655KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655MH28",
          Token: "605",
          Trading Symbol: "655MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655RJ30",
          Token: "22079",
          Trading Symbol: "655RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655RJ50",
          Token: "22023",
          Trading Symbol: "655RJ50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655RJ55",
          Token: "22033",
          Trading Symbol: "655RJ55-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655TN30",
          Token: "22114",
          Trading Symbol: "655TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655TR30",
          Token: "858",
          Trading Symbol: "655TR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "655WB30",
          Token: "22178",
          Trading Symbol: "655WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "656AP31",
          Token: "20666",
          Trading Symbol: "656AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "656AS30",
          Token: "754",
          Trading Symbol: "656AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "656KA30",
          Token: "14",
          Trading Symbol: "656KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "656MH30",
          Token: "776",
          Trading Symbol: "656MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "656MH32",
          Token: "1000",
          Trading Symbol: "656MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "656MN30",
          Token: "21921",
          Trading Symbol: "656MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "656UP30",
          Token: "1525",
          Trading Symbol: "656UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657AP30",
          Token: "21235",
          Trading Symbol: "657AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657GA30",
          Token: "1237",
          Trading Symbol: "657GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657GJ29",
          Token: "20279",
          Trading Symbol: "657GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657GJ31",
          Token: "2014",
          Trading Symbol: "657GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657GS2033",
          Token: "7194",
          Trading Symbol: "657GS2033-GS"
        },
        {
          Exch: "NSE",
          Symbol: "657HP30",
          Token: "1644",
          Trading Symbol: "657HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657HP30A",
          Token: "1647",
          Trading Symbol: "657HP30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657MH31",
          Token: "21936",
          Trading Symbol: "657MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657MP30",
          Token: "21975",
          Trading Symbol: "657MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657MZ35",
          Token: "22014",
          Trading Symbol: "657MZ35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657RJ30",
          Token: "22056",
          Trading Symbol: "657RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "657TN31",
          Token: "1890",
          Trading Symbol: "657TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658AP30",
          Token: "20280",
          Trading Symbol: "658AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658GA30",
          Token: "20598",
          Trading Symbol: "658GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658GA30A",
          Token: "1646",
          Trading Symbol: "658GA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658GA31",
          Token: "1830",
          Trading Symbol: "658GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658GJ27",
          Token: "3061",
          Trading Symbol: "658GJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658JK30",
          Token: "22179",
          Trading Symbol: "658JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658KA30",
          Token: "20288",
          Trading Symbol: "658KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658MP35",
          Token: "21948",
          Trading Symbol: "658MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658RJ30",
          Token: "22050",
          Trading Symbol: "658RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "658UP30",
          Token: "1239",
          Trading Symbol: "658UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "659CG28",
          Token: "5971",
          Trading Symbol: "659CG28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "659HR30",
          Token: "1077",
          Trading Symbol: "659HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "659RJ30",
          Token: "22073",
          Trading Symbol: "659RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "659RJ30A",
          Token: "1241",
          Trading Symbol: "659RJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "659RJ31",
          Token: "1836",
          Trading Symbol: "659RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "659UP30",
          Token: "997",
          Trading Symbol: "659UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65AP30",
          Token: "20654",
          Trading Symbol: "65AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65AP38",
          Token: "22295",
          Trading Symbol: "65AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65GA30",
          Token: "22261",
          Trading Symbol: "65GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65GA30A",
          Token: "22369",
          Trading Symbol: "65GA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65GJ30",
          Token: "1075",
          Trading Symbol: "65GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65GJ30A",
          Token: "1233",
          Trading Symbol: "65GJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65KA30",
          Token: "22368",
          Trading Symbol: "65KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65KA30A",
          Token: "1227",
          Trading Symbol: "65KA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65KL27",
          Token: "21909",
          Trading Symbol: "65KL27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65NL30",
          Token: "991",
          Trading Symbol: "65NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65OR23",
          Token: "22005",
          Trading Symbol: "65OR23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65RJ30",
          Token: "22372",
          Trading Symbol: "65RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65RJ50",
          Token: "22293",
          Trading Symbol: "65RJ50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65TN30",
          Token: "22374",
          Trading Symbol: "65TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65UP30",
          Token: "22081",
          Trading Symbol: "65UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "65WB30",
          Token: "22174",
          Trading Symbol: "65WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "660AP39",
          Token: "22332",
          Trading Symbol: "660AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "660AP40",
          Token: "22333",
          Trading Symbol: "660AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "660TS30",
          Token: "22195",
          Trading Symbol: "660TS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661KA30",
          Token: "593",
          Trading Symbol: "661KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661KA33",
          Token: "1944",
          Trading Symbol: "661KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661KA35",
          Token: "22454",
          Trading Symbol: "661KA35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661MP35",
          Token: "22338",
          Trading Symbol: "661MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661MP37",
          Token: "1953",
          Trading Symbol: "661MP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661RJ30",
          Token: "1083",
          Trading Symbol: "661RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661RJ31",
          Token: "1896",
          Trading Symbol: "661RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661RJ31A",
          Token: "2016",
          Trading Symbol: "661RJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661TS51",
          Token: "2017",
          Trading Symbol: "661TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661UP31",
          Token: "1891",
          Trading Symbol: "661UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "661WB36",
          Token: "1947",
          Trading Symbol: "661WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662AS30",
          Token: "1425",
          Trading Symbol: "662AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662CG28",
          Token: "6315",
          Trading Symbol: "662CG28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662GA31",
          Token: "1939",
          Trading Symbol: "662GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662GS2051",
          Token: "7193",
          Trading Symbol: "662GS2051-GS"
        },
        {
          Exch: "NSE",
          Symbol: "662HR41",
          Token: "2019",
          Trading Symbol: "662HR41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662JH30",
          Token: "761",
          Trading Symbol: "662JH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662JK30",
          Token: "22180",
          Trading Symbol: "662JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662KA32",
          Token: "782",
          Trading Symbol: "662KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662KA32A",
          Token: "1733",
          Trading Symbol: "662KA32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662NL30",
          Token: "1428",
          Trading Symbol: "662NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662PY28",
          Token: "6895",
          Trading Symbol: "662PY28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662RJ30",
          Token: "1369",
          Trading Symbol: "662RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662RJ41",
          Token: "2020",
          Trading Symbol: "662RJ41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662TS41",
          Token: "1959",
          Trading Symbol: "662TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662UK30",
          Token: "617",
          Trading Symbol: "662UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662UP30",
          Token: "1695",
          Trading Symbol: "662UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662UP31",
          Token: "1938",
          Trading Symbol: "662UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "662WB35",
          Token: "22341",
          Trading Symbol: "662WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663AP37",
          Token: "1905",
          Trading Symbol: "663AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663GJ29",
          Token: "65",
          Trading Symbol: "663GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663HP31",
          Token: "2021",
          Trading Symbol: "663HP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663HP33",
          Token: "2023",
          Trading Symbol: "663HP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663HR28",
          Token: "6317",
          Trading Symbol: "663HR28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663KA30",
          Token: "22410",
          Trading Symbol: "663KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663KA34",
          Token: "1651",
          Trading Symbol: "663KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663KL30",
          Token: "21910",
          Trading Symbol: "663KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663MH30",
          Token: "596",
          Trading Symbol: "663MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663ML31",
          Token: "1940",
          Trading Symbol: "663ML31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663MN31",
          Token: "1833",
          Trading Symbol: "663MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663PN51",
          Token: "1910",
          Trading Symbol: "663PN51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663TN35",
          Token: "1652",
          Trading Symbol: "663TN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663TN55",
          Token: "22102",
          Trading Symbol: "663TN55-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663UP30",
          Token: "614",
          Trading Symbol: "663UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663WB31",
          Token: "2022",
          Trading Symbol: "663WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "663WB41",
          Token: "1902",
          Trading Symbol: "663WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664AP39",
          Token: "1866",
          Trading Symbol: "664AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664AS30",
          Token: "1246",
          Trading Symbol: "664AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664BR25",
          Token: "2724",
          Trading Symbol: "664BR25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664GS2035",
          Token: "3204",
          Trading Symbol: "664GS2035-GS"
        },
        {
          Exch: "NSE",
          Symbol: "664JK36",
          Token: "1863",
          Trading Symbol: "664JK36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664KA32",
          Token: "22370",
          Trading Symbol: "664KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664MP30",
          Token: "21971",
          Trading Symbol: "664MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664MZ32",
          Token: "1899",
          Trading Symbol: "664MZ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664PY32",
          Token: "1730",
          Trading Symbol: "664PY32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664RJ24",
          Token: "22075",
          Trading Symbol: "664RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664RJ30",
          Token: "22412",
          Trading Symbol: "664RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664SK31",
          Token: "1888",
          Trading Symbol: "664SK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664TN23",
          Token: "22130",
          Trading Symbol: "664TN23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664TS50",
          Token: "22183",
          Trading Symbol: "664TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664TS51",
          Token: "1872",
          Trading Symbol: "664TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664UP30",
          Token: "21",
          Trading Symbol: "664UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "664UP31",
          Token: "2024",
          Trading Symbol: "664UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665AP36",
          Token: "1739",
          Trading Symbol: "665AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665AP40",
          Token: "1745",
          Trading Symbol: "665AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665AP41",
          Token: "1871",
          Trading Symbol: "665AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665GJ30",
          Token: "22406",
          Trading Symbol: "665GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665JK30",
          Token: "1373",
          Trading Symbol: "665JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665KA30",
          Token: "72",
          Trading Symbol: "665KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665KA35",
          Token: "1531",
          Trading Symbol: "665KA35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665ML30",
          Token: "609",
          Trading Symbol: "665ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665PN50",
          Token: "21716",
          Trading Symbol: "665PN50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665PN50A",
          Token: "1757",
          Trading Symbol: "665PN50A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665TR35",
          Token: "1738",
          Trading Symbol: "665TR35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665TS40",
          Token: "1742",
          Trading Symbol: "665TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665WB28",
          Token: "3726",
          Trading Symbol: "665WB28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "665WB30",
          Token: "22176",
          Trading Symbol: "665WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "666JH34",
          Token: "1860",
          Trading Symbol: "666JH34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "666KA32",
          Token: "1248",
          Trading Symbol: "666KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "666TN29",
          Token: "7050",
          Trading Symbol: "666TN29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "666TN30",
          Token: "22413",
          Trading Symbol: "666TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667GS2035",
          Token: "5577",
          Trading Symbol: "667GS2035-GS"
        },
        {
          Exch: "NSE",
          Symbol: "667GS2050",
          Token: "956",
          Trading Symbol: "667GS2050-GS"
        },
        {
          Exch: "NSE",
          Symbol: "667MH31",
          Token: "29",
          Trading Symbol: "667MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667MH32",
          Token: "1251",
          Trading Symbol: "667MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667RJ30",
          Token: "87",
          Trading Symbol: "667RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667RJ50",
          Token: "22080",
          Trading Symbol: "667RJ50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667TN50",
          Token: "22375",
          Trading Symbol: "667TN50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667TS50",
          Token: "1535",
          Trading Symbol: "667TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667UK30",
          Token: "76",
          Trading Symbol: "667UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "667UP30",
          Token: "22414",
          Trading Symbol: "667UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668AP24",
          Token: "20569",
          Trading Symbol: "668AP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668AP33",
          Token: "1378",
          Trading Symbol: "668AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668AP35",
          Token: "22453",
          Trading Symbol: "668AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668AP35A",
          Token: "1432",
          Trading Symbol: "668AP35A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668AP39",
          Token: "22455",
          Trading Symbol: "668AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668GA30",
          Token: "22405",
          Trading Symbol: "668GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668GS2031",
          Token: "7205",
          Trading Symbol: "668GS2031-GS"
        },
        {
          Exch: "NSE",
          Symbol: "668HR39",
          Token: "22373",
          Trading Symbol: "668HR39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668JH32",
          Token: "1376",
          Trading Symbol: "668JH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668KA36",
          Token: "1437",
          Trading Symbol: "668KA36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668MZ31",
          Token: "1430",
          Trading Symbol: "668MZ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668TN55",
          Token: "22134",
          Trading Symbol: "668TN55-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668UP30",
          Token: "92",
          Trading Symbol: "668UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668WB30",
          Token: "22411",
          Trading Symbol: "668WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "668WB35",
          Token: "1532",
          Trading Symbol: "668WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669GS2024",
          Token: "9962",
          Trading Symbol: "669GS2024-GS"
        },
        {
          Exch: "NSE",
          Symbol: "669KA37",
          Token: "1379",
          Trading Symbol: "669KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669MP25",
          Token: "2730",
          Trading Symbol: "669MP25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669MP30",
          Token: "21992",
          Trading Symbol: "669MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669PN30",
          Token: "590",
          Trading Symbol: "669PN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669TN30",
          Token: "179",
          Trading Symbol: "669TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669TN50",
          Token: "22113",
          Trading Symbol: "669TN50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669TS40",
          Token: "1655",
          Trading Symbol: "669TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669TS50",
          Token: "22371",
          Trading Symbol: "669TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "669UP30",
          Token: "22097",
          Trading Symbol: "669UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66AS30",
          Token: "1163",
          Trading Symbol: "66AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66AS30A",
          Token: "1645",
          Trading Symbol: "66AS30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66GA30",
          Token: "21389",
          Trading Symbol: "66GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66GA30A",
          Token: "20",
          Trading Symbol: "66GA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66GJ29",
          Token: "21650",
          Trading Symbol: "66GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66HP30",
          Token: "1221",
          Trading Symbol: "66HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66KA37",
          Token: "1950",
          Trading Symbol: "66KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66MH31",
          Token: "21937",
          Trading Symbol: "66MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66ML30",
          Token: "1528",
          Trading Symbol: "66ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66ML30A",
          Token: "1712",
          Trading Symbol: "66ML30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66MN30",
          Token: "1368",
          Trading Symbol: "66MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66MZ30",
          Token: "22017",
          Trading Symbol: "66MZ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66PN30",
          Token: "1165",
          Trading Symbol: "66PN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66RJ30",
          Token: "18",
          Trading Symbol: "66RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66RJ30A",
          Token: "611",
          Trading Symbol: "66RJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66RJ30B",
          Token: "1422",
          Trading Symbol: "66RJ30B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66RJ30C",
          Token: "1715",
          Trading Symbol: "66RJ30C-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66SK30",
          Token: "1084",
          Trading Symbol: "66SK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66TN29",
          Token: "22129",
          Trading Symbol: "66TN29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66TN30",
          Token: "22111",
          Trading Symbol: "66TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66UK31",
          Token: "1854",
          Trading Symbol: "66UK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66UP30",
          Token: "1086",
          Trading Symbol: "66UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66UP30A",
          Token: "1649",
          Trading Symbol: "66UP30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66UP31",
          Token: "1842",
          Trading Symbol: "66UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "66WB30",
          Token: "1721",
          Trading Symbol: "66WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "670AP26",
          Token: "20600",
          Trading Symbol: "670AP26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "670OR24",
          Token: "22002",
          Trading Symbol: "670OR24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "670RJ50",
          Token: "22070",
          Trading Symbol: "670RJ50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "670TN50",
          Token: "22128",
          Trading Symbol: "670TN50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "671RJ30",
          Token: "22077",
          Trading Symbol: "671RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "671TN29",
          Token: "6741",
          Trading Symbol: "671TN29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "671TS40",
          Token: "1446",
          Trading Symbol: "671TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "671TS50",
          Token: "22457",
          Trading Symbol: "671TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "671WB40",
          Token: "1443",
          Trading Symbol: "671WB40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672AP28",
          Token: "20914",
          Trading Symbol: "672AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672GA30",
          Token: "20913",
          Trading Symbol: "672GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672GJ30",
          Token: "3750",
          Trading Symbol: "672GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672HR35",
          Token: "867",
          Trading Symbol: "672HR35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672KA33",
          Token: "1166",
          Trading Symbol: "672KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672KL27",
          Token: "2901",
          Trading Symbol: "672KL27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672PN30",
          Token: "21786",
          Trading Symbol: "672PN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672RJ30",
          Token: "171",
          Trading Symbol: "672RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672TN27",
          Token: "420",
          Trading Symbol: "672TN27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "672TS26",
          Token: "22192",
          Trading Symbol: "672TS26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "673KL28",
          Token: "21903",
          Trading Symbol: "673KL28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "673MP30",
          Token: "21981",
          Trading Symbol: "673MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "673PN40",
          Token: "1382",
          Trading Symbol: "673PN40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "673SK30",
          Token: "173",
          Trading Symbol: "673SK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "673TN30",
          Token: "22122",
          Trading Symbol: "673TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "673TN40",
          Token: "1254",
          Trading Symbol: "673TN40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "673TS50",
          Token: "1256",
          Trading Symbol: "673TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "674GA30",
          Token: "165",
          Trading Symbol: "674GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "674PN24",
          Token: "21788",
          Trading Symbol: "674PN24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "674TN50",
          Token: "22112",
          Trading Symbol: "674TN50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "674TS50",
          Token: "1386",
          Trading Symbol: "674TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "674UP30",
          Token: "161",
          Trading Symbol: "674UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675BR27",
          Token: "4980",
          Trading Symbol: "675BR27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675GJ29",
          Token: "6093",
          Trading Symbol: "675GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675GJ31",
          Token: "4575",
          Trading Symbol: "675GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675KA33",
          Token: "74",
          Trading Symbol: "675KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675KA33A",
          Token: "618",
          Trading Symbol: "675KA33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675KA34",
          Token: "1092",
          Trading Symbol: "675KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675KA35",
          Token: "1006",
          Trading Symbol: "675KA35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675RJ30",
          Token: "969",
          Trading Symbol: "675RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "675RJ31",
          Token: "3195",
          Trading Symbol: "675RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "676GS2061",
          Token: "2317",
          Trading Symbol: "676GS2061-GS"
        },
        {
          Exch: "NSE",
          Symbol: "676MP33",
          Token: "95",
          Trading Symbol: "676MP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "676MP40",
          Token: "1012",
          Trading Symbol: "676MP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "676PN24",
          Token: "21718",
          Trading Symbol: "676PN24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "676PN40",
          Token: "877",
          Trading Symbol: "676PN40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "676RJ31",
          Token: "3641",
          Trading Symbol: "676RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "676TN31",
          Token: "5742",
          Trading Symbol: "676TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677AP38",
          Token: "876",
          Trading Symbol: "677AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677AP40",
          Token: "22422",
          Trading Symbol: "677AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677BR28",
          Token: "5227",
          Trading Symbol: "677BR28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677KA33",
          Token: "22421",
          Trading Symbol: "677KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677KA34",
          Token: "35",
          Trading Symbol: "677KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677RJ31",
          Token: "3511",
          Trading Symbol: "677RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677RJ31A",
          Token: "5743",
          Trading Symbol: "677RJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677TN24",
          Token: "22131",
          Trading Symbol: "677TN24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677TN31",
          Token: "3364",
          Trading Symbol: "677TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "677WB40",
          Token: "42",
          Trading Symbol: "677WB40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678AP38",
          Token: "3196",
          Trading Symbol: "678AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678AP39",
          Token: "3200",
          Trading Symbol: "678AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678GA31",
          Token: "4578",
          Trading Symbol: "678GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678JK33",
          Token: "3244",
          Trading Symbol: "678JK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678KA32",
          Token: "182",
          Trading Symbol: "678KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678KL31",
          Token: "3655",
          Trading Symbol: "678KL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678MH31",
          Token: "3659",
          Trading Symbol: "678MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678MH32",
          Token: "185",
          Trading Symbol: "678MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678MN31",
          Token: "3304",
          Trading Symbol: "678MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678RJ23",
          Token: "21897",
          Trading Symbol: "678RJ23-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678RJ30",
          Token: "22063",
          Trading Symbol: "678RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678RJ31",
          Token: "3241",
          Trading Symbol: "678RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678RJ31A",
          Token: "3373",
          Trading Symbol: "678RJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678SK31",
          Token: "3643",
          Trading Symbol: "678SK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678TS50",
          Token: "878",
          Trading Symbol: "678TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "678WB35",
          Token: "1169",
          Trading Symbol: "678WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679AP34",
          Token: "1004",
          Trading Symbol: "679AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679GS2027",
          Token: "7202",
          Trading Symbol: "679GS2027-GS"
        },
        {
          Exch: "NSE",
          Symbol: "679GS2029",
          Token: "7195",
          Trading Symbol: "679GS2029-GS"
        },
        {
          Exch: "NSE",
          Symbol: "679HR31",
          Token: "3517",
          Trading Symbol: "679HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679JK30",
          Token: "22182",
          Trading Symbol: "679JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679MP33",
          Token: "32",
          Trading Symbol: "679MP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679MP40",
          Token: "1095",
          Trading Symbol: "679MP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679PN35",
          Token: "1007",
          Trading Symbol: "679PN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679WB28",
          Token: "4877",
          Trading Symbol: "679WB28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "679WB28A",
          Token: "5344",
          Trading Symbol: "679WB28A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67AS27",
          Token: "2374",
          Trading Symbol: "67AS27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67GJ30",
          Token: "167",
          Trading Symbol: "67GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67HR30",
          Token: "26",
          Trading Symbol: "67HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67JK30",
          Token: "23",
          Trading Symbol: "67JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67JK32",
          Token: "1253",
          Trading Symbol: "67JK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67KA30",
          Token: "170",
          Trading Symbol: "67KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67KL27",
          Token: "21916",
          Trading Symbol: "67KL27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67MH28",
          Token: "158",
          Trading Symbol: "67MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67ML30",
          Token: "83",
          Trading Symbol: "67ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67NL30",
          Token: "86",
          Trading Symbol: "67NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67PN30",
          Token: "21719",
          Trading Symbol: "67PN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67PN40",
          Token: "22456",
          Trading Symbol: "67PN40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67RJ24",
          Token: "22071",
          Trading Symbol: "67RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "67TR30",
          Token: "89",
          Trading Symbol: "67TR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "681KL31",
          Token: "4581",
          Trading Symbol: "681KL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "681MH28",
          Token: "427",
          Trading Symbol: "681MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "681MH31",
          Token: "3704",
          Trading Symbol: "681MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "681PN31",
          Token: "3755",
          Trading Symbol: "681PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "681TR35",
          Token: "1172",
          Trading Symbol: "681TR35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682BR28",
          Token: "5026",
          Trading Symbol: "682BR28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682CG28",
          Token: "4984",
          Trading Symbol: "682CG28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682JH34",
          Token: "3082",
          Trading Symbol: "682JH34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682KL32",
          Token: "3077",
          Trading Symbol: "682KL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682KL35",
          Token: "3083",
          Trading Symbol: "682KL35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682MH32",
          Token: "3376",
          Trading Symbol: "682MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682ML31",
          Token: "3238",
          Trading Symbol: "682ML31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682PN36",
          Token: "3085",
          Trading Symbol: "682PN36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "682RJ31",
          Token: "3259",
          Trading Symbol: "682RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683BR30",
          Token: "7043",
          Trading Symbol: "683BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683GA31",
          Token: "5882",
          Trading Symbol: "683GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683GJ30",
          Token: "297",
          Trading Symbol: "683GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683GS2039",
          Token: "6935",
          Trading Symbol: "683GS2039-GS"
        },
        {
          Exch: "NSE",
          Symbol: "683KA31",
          Token: "6988",
          Trading Symbol: "683KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683KA31A",
          Token: "7045",
          Trading Symbol: "683KA31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683KA31B",
          Token: "7155",
          Trading Symbol: "683KA31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683MH31",
          Token: "4752",
          Trading Symbol: "683MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683MH32",
          Token: "3567",
          Trading Symbol: "683MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683MH32A",
          Token: "3665",
          Trading Symbol: "683MH32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683MH32B",
          Token: "4580",
          Trading Symbol: "683MH32B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683TN31",
          Token: "4755",
          Trading Symbol: "683TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683TN31A",
          Token: "7156",
          Trading Symbol: "683TN31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683WB28",
          Token: "4989",
          Trading Symbol: "683WB28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683WB31",
          Token: "2925",
          Trading Symbol: "683WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "683WB31A",
          Token: "3519",
          Trading Symbol: "683WB31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684AR31",
          Token: "3257",
          Trading Symbol: "684AR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684BR30",
          Token: "7152",
          Trading Symbol: "684BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684GA31",
          Token: "3076",
          Trading Symbol: "684GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684GJ30",
          Token: "454",
          Trading Symbol: "684GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684GJ31",
          Token: "2928",
          Trading Symbol: "684GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684GJ31A",
          Token: "5558",
          Trading Symbol: "684GJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684HR32",
          Token: "3571",
          Trading Symbol: "684HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684JK31",
          Token: "3073",
          Trading Symbol: "684JK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684KL30",
          Token: "21913",
          Trading Symbol: "684KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684KL33",
          Token: "3656",
          Trading Symbol: "684KL33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684MH32",
          Token: "3520",
          Trading Symbol: "684MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684MZ34",
          Token: "1090",
          Trading Symbol: "684MZ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684PN31",
          Token: "5883",
          Trading Symbol: "684PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684RJ24",
          Token: "22078",
          Trading Symbol: "684RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684RJ30",
          Token: "22068",
          Trading Symbol: "684RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684RJ31",
          Token: "3713",
          Trading Symbol: "684RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684RJ31A",
          Token: "4571",
          Trading Symbol: "684RJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684RJ31B",
          Token: "6990",
          Trading Symbol: "684RJ31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684TS40",
          Token: "68",
          Trading Symbol: "684TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684UK31",
          Token: "2919",
          Trading Symbol: "684UK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "684UP31",
          Token: "5887",
          Trading Symbol: "684UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685AP36",
          Token: "38",
          Trading Symbol: "685AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685AR31",
          Token: "2922",
          Trading Symbol: "685AR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685AS29",
          Token: "8186",
          Trading Symbol: "685AS29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685AS31",
          Token: "2930",
          Trading Symbol: "685AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685AS31A",
          Token: "5881",
          Trading Symbol: "685AS31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685BR30",
          Token: "5556",
          Trading Symbol: "685BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685GA31",
          Token: "2077",
          Trading Symbol: "685GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685GA31A",
          Token: "2910",
          Trading Symbol: "685GA31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685GA31B",
          Token: "5674",
          Trading Symbol: "685GA31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685GA31C",
          Token: "7154",
          Trading Symbol: "685GA31C-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685KA30",
          Token: "300",
          Trading Symbol: "685KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685ML31",
          Token: "2937",
          Trading Symbol: "685ML31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685MP31",
          Token: "5677",
          Trading Symbol: "685MP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685NL31",
          Token: "3265",
          Trading Symbol: "685NL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685NL31A",
          Token: "3710",
          Trading Symbol: "685NL31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685RJ30",
          Token: "302",
          Trading Symbol: "685RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685RJ31",
          Token: "2079",
          Trading Symbol: "685RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685TN51",
          Token: "2097",
          Trading Symbol: "685TN51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685WB30",
          Token: "22219",
          Trading Symbol: "685WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685WB30A",
          Token: "22226",
          Trading Symbol: "685WB30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "685WB31",
          Token: "5566",
          Trading Symbol: "685WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686AP35",
          Token: "5736",
          Trading Symbol: "686AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686HP30",
          Token: "6878",
          Trading Symbol: "686HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686JH36",
          Token: "2916",
          Trading Symbol: "686JH36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686KA30",
          Token: "449",
          Trading Symbol: "686KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686KL35",
          Token: "5737",
          Trading Symbol: "686KL35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686MH32",
          Token: "3707",
          Trading Symbol: "686MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686PN33",
          Token: "2940",
          Trading Symbol: "686PN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686PY34",
          Token: "2943",
          Trading Symbol: "686PY34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686RJ36",
          Token: "5740",
          Trading Symbol: "686RJ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686TS41",
          Token: "2095",
          Trading Symbol: "686TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "686UP30",
          Token: "22094",
          Trading Symbol: "686UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687AP35",
          Token: "746",
          Trading Symbol: "687AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687AP37",
          Token: "2096",
          Trading Symbol: "687AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687AP38",
          Token: "41",
          Trading Symbol: "687AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687AP40",
          Token: "5741",
          Trading Symbol: "687AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687AS31",
          Token: "5670",
          Trading Symbol: "687AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687AS31A",
          Token: "7041",
          Trading Symbol: "687AS31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687BR30",
          Token: "5970",
          Trading Symbol: "687BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687BR30A",
          Token: "6877",
          Trading Symbol: "687BR30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687HR31",
          Token: "5536",
          Trading Symbol: "687HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687JH31",
          Token: "5676",
          Trading Symbol: "687JH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687KA31",
          Token: "6887",
          Trading Symbol: "687KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687MH30",
          Token: "448",
          Trading Symbol: "687MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687MH33",
          Token: "3379",
          Trading Symbol: "687MH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687MH33A",
          Token: "3574",
          Trading Symbol: "687MH33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687MN31",
          Token: "5691",
          Trading Symbol: "687MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687RJ25",
          Token: "22067",
          Trading Symbol: "687RJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687RJ31",
          Token: "5561",
          Trading Symbol: "687RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687SK31",
          Token: "6991",
          Trading Symbol: "687SK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "687UP31",
          Token: "5695",
          Trading Symbol: "687UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688AP34",
          Token: "21138",
          Trading Symbol: "688AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688AP35",
          Token: "21054",
          Trading Symbol: "688AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688GA31",
          Token: "5557",
          Trading Symbol: "688GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688GJ31",
          Token: "4893",
          Trading Symbol: "688GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688KA31",
          Token: "5986",
          Trading Symbol: "688KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688KA32",
          Token: "7047",
          Trading Symbol: "688KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688MH33",
          Token: "3522",
          Trading Symbol: "688MH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688MN31",
          Token: "2078",
          Trading Symbol: "688MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688PY31",
          Token: "22026",
          Trading Symbol: "688PY31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688RJ46",
          Token: "2089",
          Trading Symbol: "688RJ46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688TS25",
          Token: "22209",
          Trading Symbol: "688TS25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688UK30",
          Token: "22168",
          Trading Symbol: "688UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688UP31",
          Token: "2080",
          Trading Symbol: "688UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688UP31A",
          Token: "4757",
          Trading Symbol: "688UP31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "688WB40",
          Token: "1015",
          Trading Symbol: "688WB40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689AP35",
          Token: "2086",
          Trading Symbol: "689AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689BR28",
          Token: "2065",
          Trading Symbol: "689BR28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689GA30",
          Token: "303",
          Trading Symbol: "689GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689GA31",
          Token: "4750",
          Trading Symbol: "689GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689GA31A",
          Token: "5972",
          Trading Symbol: "689GA31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689GJ31",
          Token: "5977",
          Trading Symbol: "689GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689GS2025",
          Token: "13742",
          Trading Symbol: "689GS2025-GS"
        },
        {
          Exch: "NSE",
          Symbol: "689KA33",
          Token: "7159",
          Trading Symbol: "689KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689MH31",
          Token: "4881",
          Trading Symbol: "689MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689MH32",
          Token: "4760",
          Trading Symbol: "689MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689MP35",
          Token: "21983",
          Trading Symbol: "689MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689MP40",
          Token: "767",
          Trading Symbol: "689MP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689PN31",
          Token: "5560",
          Trading Symbol: "689PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689TN25",
          Token: "22118",
          Trading Symbol: "689TN25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689TS51",
          Token: "3266",
          Trading Symbol: "689TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689UP31",
          Token: "5565",
          Trading Symbol: "689UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "689WB41",
          Token: "2092",
          Trading Symbol: "689WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68AS30",
          Token: "164",
          Trading Symbol: "68AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68GS2060",
          Token: "22438",
          Trading Symbol: "68GS2060-GS"
        },
        {
          Exch: "NSE",
          Symbol: "68JK35",
          Token: "1009",
          Trading Symbol: "68JK35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68KL31",
          Token: "3070",
          Trading Symbol: "68KL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68MH31",
          Token: "4579",
          Trading Symbol: "68MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68MN30",
          Token: "21924",
          Trading Symbol: "68MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68NL31",
          Token: "5744",
          Trading Symbol: "68NL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68OR25",
          Token: "22006",
          Trading Symbol: "68OR25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68PN26",
          Token: "21711",
          Trading Symbol: "68PN26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68RJ24",
          Token: "22053",
          Trading Symbol: "68RJ24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68RJ31",
          Token: "3752",
          Trading Symbol: "68RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68SK31",
          Token: "5745",
          Trading Symbol: "68SK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68TS50",
          Token: "1018",
          Trading Symbol: "68TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68TS50A",
          Token: "1098",
          Trading Symbol: "68TS50A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "68UK31",
          Token: "3067",
          Trading Symbol: "68UK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "690AP27",
          Token: "20599",
          Trading Symbol: "690AP27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "690UP30",
          Token: "22093",
          Trading Symbol: "690UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691AP39",
          Token: "626",
          Trading Symbol: "691AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691AP40",
          Token: "3388",
          Trading Symbol: "691AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691AS30",
          Token: "431",
          Trading Symbol: "691AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691AS31",
          Token: "5969",
          Trading Symbol: "691AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691GJ30",
          Token: "4991",
          Trading Symbol: "691GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691HP31",
          Token: "6879",
          Trading Symbol: "691HP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691MH33",
          Token: "5678",
          Trading Symbol: "691MH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691MH34",
          Token: "5679",
          Trading Symbol: "691MH34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691MP40",
          Token: "629",
          Trading Symbol: "691MP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691NL30",
          Token: "437",
          Trading Symbol: "691NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691RJ31",
          Token: "4866",
          Trading Symbol: "691RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691RJ31A",
          Token: "5541",
          Trading Symbol: "691RJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691RJ31B",
          Token: "5995",
          Trading Symbol: "691RJ31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691UP30",
          Token: "22100",
          Trading Symbol: "691UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691UP30A",
          Token: "439",
          Trading Symbol: "691UP30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "691WB31",
          Token: "6897",
          Trading Symbol: "691WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692AP41",
          Token: "6992",
          Trading Symbol: "692AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692AS24",
          Token: "20568",
          Trading Symbol: "692AS24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692BR32",
          Token: "21161",
          Trading Symbol: "692BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692HP33",
          Token: "6881",
          Trading Symbol: "692HP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692HR30",
          Token: "5415",
          Trading Symbol: "692HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692HR36",
          Token: "3382",
          Trading Symbol: "692HR36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692HR36A",
          Token: "4612",
          Trading Symbol: "692HR36A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692PN35",
          Token: "21895",
          Trading Symbol: "692PN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692RJ30",
          Token: "430",
          Trading Symbol: "692RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692RJ31",
          Token: "6557",
          Trading Symbol: "692RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692TN46",
          Token: "6993",
          Trading Symbol: "692TN46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "692UP31",
          Token: "6000",
          Trading Symbol: "692UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693AP38",
          Token: "5889",
          Trading Symbol: "693AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693GJ31",
          Token: "2230",
          Trading Symbol: "693GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693GJ31A",
          Token: "6320",
          Trading Symbol: "693GJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693HP31",
          Token: "5537",
          Trading Symbol: "693HP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693HP32",
          Token: "6880",
          Trading Symbol: "693HP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693JH30",
          Token: "428",
          Trading Symbol: "693JH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693KA32",
          Token: "5987",
          Trading Symbol: "693KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693SK31",
          Token: "2913",
          Trading Symbol: "693SK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693TS37",
          Token: "5896",
          Trading Symbol: "693TS37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693UP31",
          Token: "6558",
          Trading Symbol: "693UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "693UP31A",
          Token: "6744",
          Trading Symbol: "693UP31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694AP37",
          Token: "3513",
          Trading Symbol: "694AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694AP38",
          Token: "3514",
          Trading Symbol: "694AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694AP41",
          Token: "5897",
          Trading Symbol: "694AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694AS31",
          Token: "6556",
          Trading Symbol: "694AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694CG29",
          Token: "2907",
          Trading Symbol: "694CG29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694GA30",
          Token: "21139",
          Trading Symbol: "694GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694JK36",
          Token: "7044",
          Trading Symbol: "694JK36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694MH31",
          Token: "4993",
          Trading Symbol: "694MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694ML25",
          Token: "10524",
          Trading Symbol: "694ML25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694MP35",
          Token: "21979",
          Trading Symbol: "694MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694RJ33",
          Token: "5886",
          Trading Symbol: "694RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694TN25",
          Token: "22132",
          Trading Symbol: "694TN25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694TN50",
          Token: "22126",
          Trading Symbol: "694TN50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694TS50",
          Token: "322",
          Trading Symbol: "694TS50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694TS50A",
          Token: "630",
          Trading Symbol: "694TS50A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694TS60",
          Token: "22207",
          Trading Symbol: "694TS60-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694UK31",
          Token: "4891",
          Trading Symbol: "694UK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694UP31",
          Token: "2140",
          Trading Symbol: "694UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694UP31A",
          Token: "4889",
          Trading Symbol: "694UP31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "694WB36",
          Token: "7160",
          Trading Symbol: "694WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695AS30",
          Token: "21162",
          Trading Symbol: "695AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695BR30",
          Token: "6318",
          Trading Symbol: "695BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695GJ31",
          Token: "5033",
          Trading Symbol: "695GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695GS2061",
          Token: "6817",
          Trading Symbol: "695GS2061-GS"
        },
        {
          Exch: "NSE",
          Symbol: "695HP29",
          Token: "21141",
          Trading Symbol: "695HP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695HP33",
          Token: "20859",
          Trading Symbol: "695HP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695HP34",
          Token: "20858",
          Trading Symbol: "695HP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695HR33",
          Token: "3696",
          Trading Symbol: "695HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695KA31",
          Token: "6210",
          Trading Symbol: "695KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695MH31",
          Token: "5035",
          Trading Symbol: "695MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695MH32",
          Token: "4883",
          Trading Symbol: "695MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695MN30",
          Token: "21925",
          Trading Symbol: "695MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695PN25",
          Token: "21787",
          Trading Symbol: "695PN25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695PN31",
          Token: "4887",
          Trading Symbol: "695PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695PN40",
          Token: "319",
          Trading Symbol: "695PN40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695RJ31",
          Token: "2137",
          Trading Symbol: "695RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695SK30",
          Token: "22156",
          Trading Symbol: "695SK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695TN31",
          Token: "2260",
          Trading Symbol: "695TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695TN31A",
          Token: "4994",
          Trading Symbol: "695TN31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695TN31B",
          Token: "5471",
          Trading Symbol: "695TN31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "695WB35",
          Token: "22145",
          Trading Symbol: "695WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696AP35",
          Token: "3575",
          Trading Symbol: "696AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696AP36",
          Token: "3576",
          Trading Symbol: "696AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696GA31",
          Token: "4880",
          Trading Symbol: "696GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696HR29",
          Token: "8011",
          Trading Symbol: "696HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696HR40",
          Token: "20860",
          Trading Symbol: "696HR40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696JK35",
          Token: "314",
          Trading Symbol: "696JK35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696KA31",
          Token: "6095",
          Trading Symbol: "696KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696KA31A",
          Token: "7304",
          Trading Symbol: "696KA31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696KL34",
          Token: "3701",
          Trading Symbol: "696KL34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696PY30",
          Token: "7511",
          Trading Symbol: "696PY30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696RJ31",
          Token: "6327",
          Trading Symbol: "696RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696RJ41",
          Token: "2147",
          Trading Symbol: "696RJ41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696TN31",
          Token: "6481",
          Trading Symbol: "696TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696TN51",
          Token: "3578",
          Trading Symbol: "696TN51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696TN56",
          Token: "3580",
          Trading Symbol: "696TN56-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696TS45",
          Token: "7055",
          Trading Symbol: "696TS45-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696TS51",
          Token: "3391",
          Trading Symbol: "696TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "696UP31",
          Token: "7314",
          Trading Symbol: "696UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697AS31",
          Token: "5416",
          Trading Symbol: "697AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697AS31A",
          Token: "7295",
          Trading Symbol: "697AS31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697GA31",
          Token: "5469",
          Trading Symbol: "697GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697GS2026",
          Token: "7158",
          Trading Symbol: "697GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "697KA28",
          Token: "20864",
          Trading Symbol: "697KA28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697KA30",
          Token: "20912",
          Trading Symbol: "697KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697KA31",
          Token: "311",
          Trading Symbol: "697KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697KL31",
          Token: "5474",
          Trading Symbol: "697KL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697MH28",
          Token: "21946",
          Trading Symbol: "697MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697NL31",
          Token: "5418",
          Trading Symbol: "697NL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697PN31",
          Token: "5419",
          Trading Symbol: "697PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697PN40",
          Token: "21789",
          Trading Symbol: "697PN40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697RJ30",
          Token: "22057",
          Trading Symbol: "697RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697RJ31",
          Token: "4997",
          Trading Symbol: "697RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697RJ51",
          Token: "2150",
          Trading Symbol: "697RJ51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697RJ51A",
          Token: "2257",
          Trading Symbol: "697RJ51A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697TN31",
          Token: "5086",
          Trading Symbol: "697TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697TN31A",
          Token: "5173",
          Trading Symbol: "697TN31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697TN31B",
          Token: "5417",
          Trading Symbol: "697TN31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697TN31C",
          Token: "6096",
          Trading Symbol: "697TN31C-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697TN46",
          Token: "3647",
          Trading Symbol: "697TN46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697UP31",
          Token: "5421",
          Trading Symbol: "697UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697UP31A",
          Token: "6099",
          Trading Symbol: "697UP31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "697WB36",
          Token: "2149",
          Trading Symbol: "697WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698AP36",
          Token: "5668",
          Trading Symbol: "698AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698AS31",
          Token: "2134",
          Trading Symbol: "698AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698AS31A",
          Token: "5468",
          Trading Symbol: "698AS31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698BR30",
          Token: "6478",
          Trading Symbol: "698BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698GA31",
          Token: "7296",
          Trading Symbol: "698GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698GJ31",
          Token: "5334",
          Trading Symbol: "698GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698HP32",
          Token: "5538",
          Trading Symbol: "698HP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698HR31",
          Token: "5229",
          Trading Symbol: "698HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698HR41",
          Token: "2146",
          Trading Symbol: "698HR41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698JK36",
          Token: "5890",
          Trading Symbol: "698JK36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698MH28",
          Token: "21939",
          Trading Symbol: "698MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698MP30",
          Token: "21978",
          Trading Symbol: "698MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698PN33",
          Token: "5885",
          Trading Symbol: "698PN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698PY33",
          Token: "3079",
          Trading Symbol: "698PY33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698RJ31",
          Token: "6100",
          Trading Symbol: "698RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698RJ31A",
          Token: "6480",
          Trading Symbol: "698RJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698TN31",
          Token: "5037",
          Trading Symbol: "698TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698TN31A",
          Token: "5230",
          Trading Symbol: "698TN31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698TR30",
          Token: "22138",
          Trading Symbol: "698TR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698TS28",
          Token: "22191",
          Trading Symbol: "698TS28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698TS41",
          Token: "3577",
          Trading Symbol: "698TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698UP31",
          Token: "5473",
          Trading Symbol: "698UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698WB35",
          Token: "22149",
          Trading Symbol: "698WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698WB36",
          Token: "5697",
          Trading Symbol: "698WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "698WB37",
          Token: "6749",
          Trading Symbol: "698WB37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699AR30",
          Token: "20861",
          Trading Symbol: "699AR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699AS31",
          Token: "6330",
          Trading Symbol: "699AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699GA30",
          Token: "20862",
          Trading Symbol: "699GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699GA31",
          Token: "4998",
          Trading Symbol: "699GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699GA31A",
          Token: "5027",
          Trading Symbol: "699GA31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699GA31B",
          Token: "5333",
          Trading Symbol: "699GA31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699GJ26",
          Token: "21053",
          Trading Symbol: "699GJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699GS2026",
          Token: "15046",
          Trading Symbol: "699GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "699GS2051",
          Token: "6696",
          Trading Symbol: "699GS2051-GS"
        },
        {
          Exch: "NSE",
          Symbol: "699HR31",
          Token: "6211",
          Trading Symbol: "699HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699JH30",
          Token: "22200",
          Trading Symbol: "699JH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699JK31",
          Token: "2074",
          Trading Symbol: "699JK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699KA28",
          Token: "2735",
          Trading Symbol: "699KA28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699KL36",
          Token: "5891",
          Trading Symbol: "699KL36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699MH29",
          Token: "8128",
          Trading Symbol: "699MH29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699MN30",
          Token: "21922",
          Trading Symbol: "699MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699MP24",
          Token: "21964",
          Trading Symbol: "699MP24-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699MP41",
          Token: "6750",
          Trading Symbol: "699MP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699PY29",
          Token: "8284",
          Trading Symbol: "699PY29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699RJ41",
          Token: "2251",
          Trading Symbol: "699RJ41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699TN41",
          Token: "3645",
          Trading Symbol: "699TN41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699TR36",
          Token: "5892",
          Trading Symbol: "699TR36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699TS28",
          Token: "22190",
          Trading Symbol: "699TS28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699TS43",
          Token: "6752",
          Trading Symbol: "699TS43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699UP31",
          Token: "5038",
          Trading Symbol: "699UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699UP31A",
          Token: "5174",
          Trading Symbol: "699UP31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699UP31B",
          Token: "6350",
          Trading Symbol: "699UP31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699WB30",
          Token: "5172",
          Trading Symbol: "699WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699WB31",
          Token: "5470",
          Trading Symbol: "699WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699WB35",
          Token: "620",
          Trading Symbol: "699WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699WB36",
          Token: "3089",
          Trading Symbol: "699WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "699WB36A",
          Token: "5895",
          Trading Symbol: "699WB36A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69AP32",
          Token: "2081",
          Trading Symbol: "69AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69AP39",
          Token: "3385",
          Trading Symbol: "69AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69AS30",
          Token: "20155",
          Trading Symbol: "69AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69AS30A",
          Token: "294",
          Trading Symbol: "69AS30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69GA30",
          Token: "20148",
          Trading Symbol: "69GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69GA30A",
          Token: "440",
          Trading Symbol: "69GA30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69GJ30",
          Token: "3064",
          Trading Symbol: "69GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69HP30",
          Token: "446",
          Trading Symbol: "69HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69JK33",
          Token: "3392",
          Trading Symbol: "69JK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69KA30",
          Token: "20154",
          Trading Symbol: "69KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69KA31",
          Token: "6743",
          Trading Symbol: "69KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69ML30",
          Token: "306",
          Trading Symbol: "69ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69MN30",
          Token: "21926",
          Trading Symbol: "69MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69MZ33",
          Token: "3523",
          Trading Symbol: "69MZ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69PY28",
          Token: "7893",
          Trading Symbol: "69PY28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69PY29",
          Token: "291",
          Trading Symbol: "69PY29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69RJ32",
          Token: "4764",
          Trading Symbol: "69RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69TN31",
          Token: "5997",
          Trading Symbol: "69TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69UK30",
          Token: "22172",
          Trading Symbol: "69UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69UK30A",
          Token: "309",
          Trading Symbol: "69UK30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "69UP30",
          Token: "307",
          Trading Symbol: "69UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "6AP25",
          Token: "20920",
          Trading Symbol: "6AP25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "701AP39",
          Token: "3762",
          Trading Symbol: "701AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "701MH32",
          Token: "5002",
          Trading Symbol: "701MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "701MN31",
          Token: "5087",
          Trading Symbol: "701MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "701PY26",
          Token: "22027",
          Trading Symbol: "701PY26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "701UP31",
          Token: "5089",
          Trading Symbol: "701UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702AP30",
          Token: "20863",
          Trading Symbol: "702AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702AP36",
          Token: "6351",
          Trading Symbol: "702AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702AP37",
          Token: "6352",
          Trading Symbol: "702AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702AP41",
          Token: "5569",
          Trading Symbol: "702AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702AS30",
          Token: "20851",
          Trading Symbol: "702AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702BR30",
          Token: "21375",
          Trading Symbol: "702BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702HP36",
          Token: "2236",
          Trading Symbol: "702HP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702HR29",
          Token: "2539",
          Trading Symbol: "702HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702KA31",
          Token: "7524",
          Trading Symbol: "702KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702KA33",
          Token: "7305",
          Trading Symbol: "702KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702KL28",
          Token: "2537",
          Trading Symbol: "702KL28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702MH29",
          Token: "2670",
          Trading Symbol: "702MH29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702ML41",
          Token: "5570",
          Trading Symbol: "702ML41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702PN28",
          Token: "2668",
          Trading Symbol: "702PN28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702TN30",
          Token: "8287",
          Trading Symbol: "702TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702TN31",
          Token: "7533",
          Trading Symbol: "702TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702UP31",
          Token: "5335",
          Trading Symbol: "702UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "702WB31",
          Token: "5039",
          Trading Symbol: "702WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703AP40",
          Token: "475",
          Trading Symbol: "703AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703AS31",
          Token: "7512",
          Trading Symbol: "703AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703HP31",
          Token: "7519",
          Trading Symbol: "703HP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703HR40",
          Token: "21236",
          Trading Symbol: "703HR40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703KA32",
          Token: "6104",
          Trading Symbol: "703KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703KL30",
          Token: "21915",
          Trading Symbol: "703KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703MN31",
          Token: "6479",
          Trading Symbol: "703MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703MP31",
          Token: "2239",
          Trading Symbol: "703MP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703NL30",
          Token: "21997",
          Trading Symbol: "703NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703PY28",
          Token: "22029",
          Trading Symbol: "703PY28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703RJ30",
          Token: "22076",
          Trading Symbol: "703RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703RJ31",
          Token: "7531",
          Trading Symbol: "703RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703RJ36",
          Token: "2248",
          Trading Symbol: "703RJ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703TN30",
          Token: "8321",
          Trading Symbol: "703TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703TN46",
          Token: "3719",
          Trading Symbol: "703TN46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703TN51",
          Token: "3722",
          Trading Symbol: "703TN51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703TS51",
          Token: "4556",
          Trading Symbol: "703TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "703UP30",
          Token: "22087",
          Trading Symbol: "703UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704AP34",
          Token: "5967",
          Trading Symbol: "704AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704AP40",
          Token: "3689",
          Trading Symbol: "704AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704AP41",
          Token: "3692",
          Trading Symbol: "704AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704GJ30",
          Token: "20359",
          Trading Symbol: "704GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704JK36",
          Token: "3697",
          Trading Symbol: "704JK36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704KL34",
          Token: "5539",
          Trading Symbol: "704KL34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704MH29",
          Token: "2542",
          Trading Symbol: "704MH29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704ML30",
          Token: "22012",
          Trading Symbol: "704ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704MP30",
          Token: "21965",
          Trading Symbol: "704MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704MZ30",
          Token: "22019",
          Trading Symbol: "704MZ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704MZ33",
          Token: "2143",
          Trading Symbol: "704MZ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704RJ30",
          Token: "22048",
          Trading Symbol: "704RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704RJ36",
          Token: "4780",
          Trading Symbol: "704RJ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704TN30",
          Token: "7812",
          Trading Symbol: "704TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704TN30A",
          Token: "8134",
          Trading Symbol: "704TN30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704TS32",
          Token: "7315",
          Trading Symbol: "704TS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704TS51",
          Token: "3767",
          Trading Symbol: "704TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704UK30",
          Token: "22170",
          Trading Symbol: "704UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704UP30",
          Token: "22085",
          Trading Symbol: "704UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704UP31",
          Token: "7534",
          Trading Symbol: "704UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "704WB35",
          Token: "315",
          Trading Symbol: "704WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705AP31",
          Token: "21237",
          Trading Symbol: "705AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705AP35",
          Token: "5527",
          Trading Symbol: "705AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705AS30",
          Token: "20774",
          Trading Symbol: "705AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705HP35",
          Token: "2233",
          Trading Symbol: "705HP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705HR40",
          Token: "321",
          Trading Symbol: "705HR40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705JH30",
          Token: "22198",
          Trading Symbol: "705JH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705KL30",
          Token: "21899",
          Trading Symbol: "705KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705KL36",
          Token: "5991",
          Trading Symbol: "705KL36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705MH32",
          Token: "466",
          Trading Symbol: "705MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705MN30",
          Token: "21920",
          Trading Symbol: "705MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705MZ29",
          Token: "8130",
          Trading Symbol: "705MZ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705MZ35",
          Token: "316",
          Trading Symbol: "705MZ35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705NL30",
          Token: "21994",
          Trading Symbol: "705NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705NL31",
          Token: "2242",
          Trading Symbol: "705NL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705PN31",
          Token: "2135",
          Trading Symbol: "705PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705RJ31",
          Token: "2245",
          Trading Symbol: "705RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705RJ41",
          Token: "3716",
          Trading Symbol: "705RJ41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705TN26",
          Token: "22119",
          Trading Symbol: "705TN26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705TS35",
          Token: "5526",
          Trading Symbol: "705TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705TS41",
          Token: "3725",
          Trading Symbol: "705TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705UK31",
          Token: "7535",
          Trading Symbol: "705UK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705WB30",
          Token: "22143",
          Trading Symbol: "705WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705WB31",
          Token: "2265",
          Trading Symbol: "705WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705WB36",
          Token: "6001",
          Trading Symbol: "705WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "705WB36A",
          Token: "7319",
          Trading Symbol: "705WB36A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706AP30",
          Token: "20737",
          Trading Symbol: "706AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706CG29",
          Token: "2740",
          Trading Symbol: "706CG29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706GJ32",
          Token: "8189",
          Trading Symbol: "706GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706GS2028",
          Token: "14970",
          Trading Symbol: "706GS2028-GS"
        },
        {
          Exch: "NSE",
          Symbol: "706GS2046",
          Token: "7184",
          Trading Symbol: "706GS2046-GS"
        },
        {
          Exch: "NSE",
          Symbol: "706JK33",
          Token: "6484",
          Trading Symbol: "706JK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706KL38",
          Token: "4790",
          Trading Symbol: "706KL38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706KL39",
          Token: "5545",
          Trading Symbol: "706KL39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706KL41",
          Token: "4793",
          Trading Symbol: "706KL41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706MZ34",
          Token: "5992",
          Trading Symbol: "706MZ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706TS41",
          Token: "4792",
          Trading Symbol: "706TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706UK30",
          Token: "22166",
          Trading Symbol: "706UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "706WB36",
          Token: "4782",
          Trading Symbol: "706WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "707AS31",
          Token: "2266",
          Trading Symbol: "707AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "707GJ31",
          Token: "2381",
          Trading Symbol: "707GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "707HR37",
          Token: "4784",
          Trading Symbol: "707HR37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "707JK30",
          Token: "20796",
          Trading Symbol: "707JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "707MP32",
          Token: "460",
          Trading Symbol: "707MP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "707RJ46",
          Token: "3763",
          Trading Symbol: "707RJ46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "707TN38",
          Token: "7318",
          Trading Symbol: "707TN38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708AP35",
          Token: "6485",
          Trading Symbol: "708AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708AP40",
          Token: "6487",
          Trading Symbol: "708AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708CG29",
          Token: "2380",
          Trading Symbol: "708CG29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708CG30",
          Token: "22159",
          Trading Symbol: "708CG30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708GJ31",
          Token: "2671",
          Trading Symbol: "708GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708JK36",
          Token: "5544",
          Trading Symbol: "708JK36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708KA31",
          Token: "20797",
          Trading Symbol: "708KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708KA34",
          Token: "468",
          Trading Symbol: "708KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708KA34A",
          Token: "6212",
          Trading Symbol: "708KA34A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708MH31",
          Token: "2383",
          Trading Symbol: "708MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708MP29",
          Token: "8351",
          Trading Symbol: "708MP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708PY26",
          Token: "22025",
          Trading Symbol: "708PY26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708RJ30",
          Token: "22035",
          Trading Symbol: "708RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708TS42",
          Token: "6488",
          Trading Symbol: "708TS42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708UP31",
          Token: "2264",
          Trading Symbol: "708UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "708WB41",
          Token: "6361",
          Trading Symbol: "708WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709AP39",
          Token: "5968",
          Trading Symbol: "709AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709AS32",
          Token: "8187",
          Trading Symbol: "709AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709GJ32",
          Token: "8289",
          Trading Symbol: "709GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709HR29",
          Token: "8569",
          Trading Symbol: "709HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709KA30",
          Token: "20313",
          Trading Symbol: "709KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709KL36",
          Token: "4748",
          Trading Symbol: "709KL36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709MP30",
          Token: "21991",
          Trading Symbol: "709MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709RJ32",
          Token: "8191",
          Trading Symbol: "709RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709TN30",
          Token: "8489",
          Trading Symbol: "709TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709TS34",
          Token: "5343",
          Trading Symbol: "709TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709TS40",
          Token: "5998",
          Trading Symbol: "709TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709UP30",
          Token: "22096",
          Trading Symbol: "709UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "709WB40",
          Token: "472",
          Trading Symbol: "709WB40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70AP38",
          Token: "3758",
          Trading Symbol: "70AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70AP38A",
          Token: "6563",
          Trading Symbol: "70AP38A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70AP39",
          Token: "318",
          Trading Symbol: "70AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70AP39A",
          Token: "5567",
          Trading Symbol: "70AP39A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70AP39B",
          Token: "6564",
          Trading Symbol: "70AP39B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70GA31",
          Token: "6483",
          Trading Symbol: "70GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70GA31A",
          Token: "7513",
          Trading Symbol: "70GA31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70JH33",
          Token: "5983",
          Trading Symbol: "70JH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70JK33",
          Token: "7307",
          Trading Symbol: "70JK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70MH28",
          Token: "21944",
          Trading Symbol: "70MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70MN31",
          Token: "4885",
          Trading Symbol: "70MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70MN31A",
          Token: "6101",
          Trading Symbol: "70MN31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70MN31B",
          Token: "7530",
          Trading Symbol: "70MN31B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70MP31",
          Token: "5034",
          Trading Symbol: "70MP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70MZ34",
          Token: "5559",
          Trading Symbol: "70MZ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70NL31",
          Token: "6103",
          Trading Symbol: "70NL31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70NL31A",
          Token: "7316",
          Trading Symbol: "70NL31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70RJ31",
          Token: "5036",
          Trading Symbol: "70RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70TN31",
          Token: "5336",
          Trading Symbol: "70TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70TS36",
          Token: "5568",
          Trading Symbol: "70TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70TS51",
          Token: "2227",
          Trading Symbol: "70TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70UK31",
          Token: "5040",
          Trading Symbol: "70UK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70UP30",
          Token: "22088",
          Trading Symbol: "70UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70WB31",
          Token: "5231",
          Trading Symbol: "70WB31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "70WB31A",
          Token: "6482",
          Trading Symbol: "70WB31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "710GJ30",
          Token: "20099",
          Trading Symbol: "710GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "710GR2028",
          Token: "14971",
          Trading Symbol: "710GR2028-GS"
        },
        {
          Exch: "NSE",
          Symbol: "710GS2029",
          Token: "9047",
          Trading Symbol: "710GS2029-GS"
        },
        {
          Exch: "NSE",
          Symbol: "710UK30",
          Token: "22164",
          Trading Symbol: "710UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "710UP30",
          Token: "22083",
          Trading Symbol: "710UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711AS30",
          Token: "20100",
          Trading Symbol: "711AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711CG30",
          Token: "22157",
          Trading Symbol: "711CG30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711GJ31",
          Token: "2721",
          Trading Symbol: "711GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711HP28",
          Token: "20041",
          Trading Symbol: "711HP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711HP30",
          Token: "20040",
          Trading Symbol: "711HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711MH29",
          Token: "8935",
          Trading Symbol: "711MH29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711MP30",
          Token: "21963",
          Trading Symbol: "711MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711MZ30",
          Token: "22020",
          Trading Symbol: "711MZ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "711UK30",
          Token: "22169",
          Trading Symbol: "711UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712AP35",
          Token: "5041",
          Trading Symbol: "712AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712AP37",
          Token: "4789",
          Trading Symbol: "712AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712AS32",
          Token: "7691",
          Trading Symbol: "712AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712AS32A",
          Token: "8295",
          Trading Symbol: "712AS32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712GJ32",
          Token: "8324",
          Trading Symbol: "712GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712HR40",
          Token: "20775",
          Trading Symbol: "712HR40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712JK37",
          Token: "8334",
          Trading Symbol: "712JK37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712KA34",
          Token: "7539",
          Trading Symbol: "712KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712KA37",
          Token: "8196",
          Trading Symbol: "712KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712MP35",
          Token: "21966",
          Trading Symbol: "712MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712MZ34",
          Token: "5003",
          Trading Symbol: "712MZ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712PN37",
          Token: "8197",
          Trading Symbol: "712PN37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712TN30",
          Token: "8352",
          Trading Symbol: "712TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712UP32",
          Token: "7709",
          Trading Symbol: "712UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712WB36",
          Token: "7548",
          Trading Symbol: "712WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "712WB51",
          Token: "5542",
          Trading Symbol: "712WB51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713AP36",
          Token: "4766",
          Trading Symbol: "713AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713AP36A",
          Token: "6112",
          Trading Symbol: "713AP36A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713AP39",
          Token: "8335",
          Trading Symbol: "713AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713AP40",
          Token: "8193",
          Trading Symbol: "713AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713AP41",
          Token: "8194",
          Trading Symbol: "713AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713BR32",
          Token: "8298",
          Trading Symbol: "713BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713HR32",
          Token: "7692",
          Trading Symbol: "713HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713HR42",
          Token: "8336",
          Trading Symbol: "713HR42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713JK34",
          Token: "8192",
          Trading Symbol: "713JK34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713KA38",
          Token: "8301",
          Trading Symbol: "713KA38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713KA39",
          Token: "8302",
          Trading Symbol: "713KA39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713KL46",
          Token: "4897",
          Trading Symbol: "713KL46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713RJ29",
          Token: "8680",
          Trading Symbol: "713RJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713RJ31",
          Token: "2673",
          Trading Symbol: "713RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713RJ41",
          Token: "4869",
          Trading Symbol: "713RJ41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713TN30",
          Token: "8570",
          Trading Symbol: "713TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713TN47",
          Token: "8198",
          Trading Symbol: "713TN47-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713TS34",
          Token: "8333",
          Trading Symbol: "713TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "713TS37",
          Token: "8299",
          Trading Symbol: "713TS37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP34",
          Token: "20019",
          Trading Symbol: "714AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP35",
          Token: "7540",
          Trading Symbol: "714AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP36",
          Token: "5044",
          Trading Symbol: "714AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP37",
          Token: "5234",
          Trading Symbol: "714AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP40",
          Token: "7549",
          Trading Symbol: "714AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP41",
          Token: "5236",
          Trading Symbol: "714AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP41A",
          Token: "6115",
          Trading Symbol: "714AP41A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714AP41B",
          Token: "7550",
          Trading Symbol: "714AP41B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714BR30",
          Token: "20016",
          Trading Symbol: "714BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714GA30",
          Token: "20667",
          Trading Symbol: "714GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714HP33",
          Token: "7536",
          Trading Symbol: "714HP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714HR31",
          Token: "2743",
          Trading Symbol: "714HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714JK36",
          Token: "7543",
          Trading Symbol: "714JK36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714KA29",
          Token: "22218",
          Trading Symbol: "714KA29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714KA29A",
          Token: "22225",
          Trading Symbol: "714KA29A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714KA32",
          Token: "7813",
          Trading Symbol: "714KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714KL35",
          Token: "7541",
          Trading Symbol: "714KL35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714MH29",
          Token: "21941",
          Trading Symbol: "714MH29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714PN32",
          Token: "7708",
          Trading Symbol: "714PN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714PN36",
          Token: "7544",
          Trading Symbol: "714PN36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714RJ30",
          Token: "22074",
          Trading Symbol: "714RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714RJ32",
          Token: "7819",
          Trading Symbol: "714RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714SK30",
          Token: "22154",
          Trading Symbol: "714SK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714TN32",
          Token: "8325",
          Trading Symbol: "714TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714TS33",
          Token: "7538",
          Trading Symbol: "714TS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714TS41",
          Token: "5237",
          Trading Symbol: "714TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714UP30",
          Token: "22095",
          Trading Symbol: "714UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "714WB32",
          Token: "7710",
          Trading Symbol: "714WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715AP31",
          Token: "20772",
          Trading Symbol: "715AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715AP32",
          Token: "20773",
          Trading Symbol: "715AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715AP36",
          Token: "20919",
          Trading Symbol: "715AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715AP37",
          Token: "5004",
          Trading Symbol: "715AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715GA30",
          Token: "20546",
          Trading Symbol: "715GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715GA32",
          Token: "8326",
          Trading Symbol: "715GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715HR28",
          Token: "9333",
          Trading Symbol: "715HR28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715JK32",
          Token: "457",
          Trading Symbol: "715JK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715RJ30",
          Token: "22054",
          Trading Symbol: "715RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715RJ31",
          Token: "2545",
          Trading Symbol: "715RJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715RJ31A",
          Token: "2744",
          Trading Symbol: "715RJ31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715TN27",
          Token: "22120",
          Trading Symbol: "715TN27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715UP32",
          Token: "7821",
          Trading Symbol: "715UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "715WB35",
          Token: "22150",
          Trading Symbol: "715WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716GA31",
          Token: "2746",
          Trading Symbol: "716GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716GS2050",
          Token: "18561",
          Trading Symbol: "716GS2050-GS"
        },
        {
          Exch: "NSE",
          Symbol: "716HR27",
          Token: "15966",
          Trading Symbol: "716HR27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716KA30",
          Token: "20845",
          Trading Symbol: "716KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716KA36",
          Token: "8190",
          Trading Symbol: "716KA36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716KL30",
          Token: "21914",
          Trading Symbol: "716KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716ML31",
          Token: "2756",
          Trading Symbol: "716ML31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716UP29",
          Token: "22090",
          Trading Symbol: "716UP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "716UP31",
          Token: "2759",
          Trading Symbol: "716UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717AS31",
          Token: "2548",
          Trading Symbol: "717AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717BR30",
          Token: "22216",
          Trading Symbol: "717BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717BR30A",
          Token: "22223",
          Trading Symbol: "717BR30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717BR32",
          Token: "8327",
          Trading Symbol: "717BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717CG30",
          Token: "22160",
          Trading Symbol: "717CG30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717GJ30",
          Token: "22214",
          Trading Symbol: "717GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717GJ30A",
          Token: "22222",
          Trading Symbol: "717GJ30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717GS2028",
          Token: "7208",
          Trading Symbol: "717GS2028-GS"
        },
        {
          Exch: "NSE",
          Symbol: "717GS2030",
          Token: "15050",
          Trading Symbol: "717GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "717HP30",
          Token: "20846",
          Trading Symbol: "717HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717HR29",
          Token: "20310",
          Trading Symbol: "717HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717HR30",
          Token: "20849",
          Trading Symbol: "717HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717KA29",
          Token: "20573",
          Trading Symbol: "717KA29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717KA30",
          Token: "20918",
          Trading Symbol: "717KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717KL32",
          Token: "8329",
          Trading Symbol: "717KL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717ML31",
          Token: "2551",
          Trading Symbol: "717ML31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717MP29",
          Token: "21976",
          Trading Symbol: "717MP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717MP35",
          Token: "21973",
          Trading Symbol: "717MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717PN30",
          Token: "22212",
          Trading Symbol: "717PN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717PN30A",
          Token: "22220",
          Trading Symbol: "717PN30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717RJ30",
          Token: "22044",
          Trading Symbol: "717RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717RJ32",
          Token: "8331",
          Trading Symbol: "717RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717TN29",
          Token: "22123",
          Trading Symbol: "717TN29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717TN30",
          Token: "8681",
          Trading Symbol: "717TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717TR30",
          Token: "22140",
          Trading Symbol: "717TR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717TS41",
          Token: "5090",
          Trading Symbol: "717TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717UK29",
          Token: "22167",
          Trading Symbol: "717UK29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717UP31",
          Token: "2676",
          Trading Symbol: "717UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "717WB32",
          Token: "8332",
          Trading Symbol: "717WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718AP28",
          Token: "20309",
          Trading Symbol: "718AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718AP33",
          Token: "20020",
          Trading Symbol: "718AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718AP40",
          Token: "7713",
          Trading Symbol: "718AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718AS29",
          Token: "20311",
          Trading Symbol: "718AS29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718AS30",
          Token: "20146",
          Trading Symbol: "718AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718BR30",
          Token: "20109",
          Trading Symbol: "718BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718CG27",
          Token: "22161",
          Trading Symbol: "718CG27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718CG30",
          Token: "22163",
          Trading Symbol: "718CG30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718GJ28",
          Token: "16651",
          Trading Symbol: "718GJ28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718GJ30",
          Token: "20696",
          Trading Symbol: "718GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718HP32",
          Token: "20108",
          Trading Symbol: "718HP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718HR41",
          Token: "2407",
          Trading Symbol: "718HR41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718KA33",
          Token: "7694",
          Trading Symbol: "718KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718KL29",
          Token: "21912",
          Trading Symbol: "718KL29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718MH30",
          Token: "8934",
          Trading Symbol: "718MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718MN31",
          Token: "2679",
          Trading Symbol: "718MN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718MP30",
          Token: "21972",
          Trading Symbol: "718MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718RJ29",
          Token: "22060",
          Trading Symbol: "718RJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718RJ30",
          Token: "22072",
          Trading Symbol: "718RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718SK31",
          Token: "2681",
          Trading Symbol: "718SK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718TS33",
          Token: "7690",
          Trading Symbol: "718TS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718TS51",
          Token: "4900",
          Trading Symbol: "718TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718UP30",
          Token: "22213",
          Trading Symbol: "718UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718UP30A",
          Token: "22221",
          Trading Symbol: "718UP30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "718WB35",
          Token: "22144",
          Trading Symbol: "718WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719AP34",
          Token: "20147",
          Trading Symbol: "719AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719AP38",
          Token: "5005",
          Trading Symbol: "719AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719GS2060",
          Token: "18474",
          Trading Symbol: "719GS2060-GS"
        },
        {
          Exch: "NSE",
          Symbol: "719JK29",
          Token: "20959",
          Trading Symbol: "719JK29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719KA39",
          Token: "2768",
          Trading Symbol: "719KA39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719KA40",
          Token: "2771",
          Trading Symbol: "719KA40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719KL51",
          Token: "5479",
          Trading Symbol: "719KL51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719ML41",
          Token: "4895",
          Trading Symbol: "719ML41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719MP40",
          Token: "21967",
          Trading Symbol: "719MP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719PN37",
          Token: "7714",
          Trading Symbol: "719PN37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719SK31",
          Token: "2384",
          Trading Symbol: "719SK31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719TN30",
          Token: "22125",
          Trading Symbol: "719TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719TN32",
          Token: "8491",
          Trading Symbol: "719TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719TN35",
          Token: "22110",
          Trading Symbol: "719TN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719TN42",
          Token: "8337",
          Trading Symbol: "719TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719UP29",
          Token: "22092",
          Trading Symbol: "719UP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719UP31",
          Token: "2552",
          Trading Symbol: "719UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719WB29",
          Token: "22148",
          Trading Symbol: "719WB29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "719WB36",
          Token: "2762",
          Trading Symbol: "719WB36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71AP37",
          Token: "469",
          Trading Symbol: "71AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71JK30",
          Token: "20018",
          Trading Symbol: "71JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71JK33",
          Token: "4894",
          Trading Symbol: "71JK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71JK33A",
          Token: "5342",
          Trading Symbol: "71JK33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71KA32",
          Token: "7693",
          Trading Symbol: "71KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71MH32",
          Token: "313",
          Trading Symbol: "71MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71MH36",
          Token: "5232",
          Trading Symbol: "71MH36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71TN32",
          Token: "8292",
          Trading Symbol: "71TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "71WB30",
          Token: "22151",
          Trading Symbol: "71WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "720AR30",
          Token: "20518",
          Trading Symbol: "720AR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "720AS30",
          Token: "20358",
          Trading Symbol: "720AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "720ML30",
          Token: "22010",
          Trading Symbol: "720ML30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "720MZ30",
          Token: "22015",
          Trading Symbol: "720MZ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "721AP31",
          Token: "20575",
          Trading Symbol: "721AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "721KA32",
          Token: "8012",
          Trading Symbol: "721KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "721MP34",
          Token: "21977",
          Trading Symbol: "721MP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "721PY28",
          Token: "22024",
          Trading Symbol: "721PY28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "721RJ32",
          Token: "8013",
          Trading Symbol: "721RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "721TR29",
          Token: "22139",
          Trading Symbol: "721TR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AP28",
          Token: "22031",
          Trading Symbol: "722AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AP30",
          Token: "22030",
          Trading Symbol: "722AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AP31",
          Token: "22215",
          Trading Symbol: "722AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AP31A",
          Token: "22032",
          Trading Symbol: "722AP31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AP37",
          Token: "2395",
          Trading Symbol: "722AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AP42",
          Token: "7715",
          Trading Symbol: "722AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AS29",
          Token: "20915",
          Trading Symbol: "722AS29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722AS30",
          Token: "20850",
          Trading Symbol: "722AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722GA29",
          Token: "20916",
          Trading Symbol: "722GA29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722KA35",
          Token: "7707",
          Trading Symbol: "722KA35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722KA38",
          Token: "2398",
          Trading Symbol: "722KA38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722KA38A",
          Token: "2578",
          Trading Symbol: "722KA38A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722PN32",
          Token: "21893",
          Trading Symbol: "722PN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722RJ32",
          Token: "8492",
          Trading Symbol: "722RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722RJ41",
          Token: "2413",
          Trading Symbol: "722RJ41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "722UP30",
          Token: "22089",
          Trading Symbol: "722UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723GA32",
          Token: "7871",
          Trading Symbol: "723GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723KA28",
          Token: "21710",
          Trading Symbol: "723KA28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723MN32",
          Token: "7855",
          Trading Symbol: "723MN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723PN31",
          Token: "2557",
          Trading Symbol: "723PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723TN32",
          Token: "8573",
          Trading Symbol: "723TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723WB30",
          Token: "22147",
          Trading Symbol: "723WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723WB32",
          Token: "7857",
          Trading Symbol: "723WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "723WB41",
          Token: "2414",
          Trading Symbol: "723WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724AP33",
          Token: "21644",
          Trading Symbol: "724AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724AP35",
          Token: "21645",
          Trading Symbol: "724AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724AP38",
          Token: "7711",
          Trading Symbol: "724AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724AS30",
          Token: "20917",
          Trading Symbol: "724AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724AS31",
          Token: "2389",
          Trading Symbol: "724AS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724BR32",
          Token: "7870",
          Trading Symbol: "724BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724GJ29",
          Token: "21169",
          Trading Symbol: "724GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724HR29",
          Token: "20519",
          Trading Symbol: "724HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724JK36",
          Token: "2563",
          Trading Symbol: "724JK36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724KA37",
          Token: "2691",
          Trading Symbol: "724KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724KA38",
          Token: "2693",
          Trading Symbol: "724KA38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724RJ32",
          Token: "7899",
          Trading Symbol: "724RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724RJ32A",
          Token: "8136",
          Trading Symbol: "724RJ32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724RJ32B",
          Token: "8574",
          Trading Symbol: "724RJ32B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724RJ36",
          Token: "2560",
          Trading Symbol: "724RJ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724SK32",
          Token: "8493",
          Trading Symbol: "724SK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724TN32",
          Token: "7904",
          Trading Symbol: "724TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724TN51",
          Token: "5091",
          Trading Symbol: "724TN51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724TS51",
          Token: "5045",
          Trading Symbol: "724TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "724UP32",
          Token: "7856",
          Trading Symbol: "724UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725GJ32",
          Token: "8354",
          Trading Symbol: "725GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725GS2063",
          Token: "16733",
          Trading Symbol: "725GS2063-GS"
        },
        {
          Exch: "NSE",
          Symbol: "725HR32",
          Token: "8355",
          Trading Symbol: "725HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725MZ34",
          Token: "8359",
          Trading Symbol: "725MZ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725PN25",
          Token: "21721",
          Trading Symbol: "725PN25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725TN27",
          Token: "22127",
          Trading Symbol: "725TN27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725TN32",
          Token: "8357",
          Trading Symbol: "725TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725TS28",
          Token: "22210",
          Trading Symbol: "725TS28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725TS41",
          Token: "2581",
          Trading Symbol: "725TS41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725UK32",
          Token: "7907",
          Trading Symbol: "725UK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "725WB41",
          Token: "2657",
          Trading Symbol: "725WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726AS29",
          Token: "21034",
          Trading Symbol: "726AS29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726GJ29",
          Token: "21032",
          Trading Symbol: "726GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726GS2029",
          Token: "8027",
          Trading Symbol: "726GS2029-GS"
        },
        {
          Exch: "NSE",
          Symbol: "726GS2032",
          Token: "10722",
          Trading Symbol: "726GS2032-GS"
        },
        {
          Exch: "NSE",
          Symbol: "726GS2033",
          Token: "14051",
          Trading Symbol: "726GS2033-GS"
        },
        {
          Exch: "NSE",
          Symbol: "726HP29",
          Token: "16638",
          Trading Symbol: "726HP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726HR32",
          Token: "8575",
          Trading Symbol: "726HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726JH27",
          Token: "22196",
          Trading Symbol: "726JH27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726KA25",
          Token: "13593",
          Trading Symbol: "726KA25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726MH30",
          Token: "15973",
          Trading Symbol: "726MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726UP29",
          Token: "22082",
          Trading Symbol: "726UP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "726WB34",
          Token: "22146",
          Trading Symbol: "726WB34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727AR32",
          Token: "7897",
          Trading Symbol: "727AR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727AS29",
          Token: "21550",
          Trading Symbol: "727AS29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727GJ31",
          Token: "15744",
          Trading Symbol: "727GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727GS2026",
          Token: "9537",
          Trading Symbol: "727GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "727HR30",
          Token: "9344",
          Trading Symbol: "727HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727MH30",
          Token: "21942",
          Trading Symbol: "727MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727ML32",
          Token: "8576",
          Trading Symbol: "727ML32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727MZ33",
          Token: "2683",
          Trading Symbol: "727MZ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727RJ29",
          Token: "22034",
          Trading Symbol: "727RJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727RJ30",
          Token: "22064",
          Trading Symbol: "727RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "727SK32",
          Token: "7900",
          Trading Symbol: "727SK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728GJ29",
          Token: "21214",
          Trading Symbol: "728GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728JH36",
          Token: "2688",
          Trading Symbol: "728JH36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728JH37",
          Token: "8360",
          Trading Symbol: "728JH37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728JK30",
          Token: "21646",
          Trading Symbol: "728JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728KL30",
          Token: "21908",
          Trading Symbol: "728KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728SK30",
          Token: "22155",
          Trading Symbol: "728SK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728TS35",
          Token: "7815",
          Trading Symbol: "728TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728UP29",
          Token: "22098",
          Trading Symbol: "728UP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "728UP32",
          Token: "7905",
          Trading Symbol: "728UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729AP30",
          Token: "21643",
          Trading Symbol: "729AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729AP34",
          Token: "8930",
          Trading Symbol: "729AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729BR30",
          Token: "21642",
          Trading Symbol: "729BR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729CG30",
          Token: "16640",
          Trading Symbol: "729CG30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729GA29",
          Token: "22217",
          Trading Symbol: "729GA29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729GA29A",
          Token: "22224",
          Trading Symbol: "729GA29A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729GJ32",
          Token: "8683",
          Trading Symbol: "729GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729GR2033",
          Token: "14973",
          Trading Symbol: "729GR2033-GS"
        },
        {
          Exch: "NSE",
          Symbol: "729HP31",
          Token: "16641",
          Trading Symbol: "729HP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729HR29",
          Token: "16220",
          Trading Symbol: "729HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729KA34",
          Token: "7823",
          Trading Symbol: "729KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729KA36",
          Token: "2566",
          Trading Symbol: "729KA36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729KA37",
          Token: "2575",
          Trading Symbol: "729KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729KA39",
          Token: "2656",
          Trading Symbol: "729KA39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729KL49",
          Token: "16092",
          Trading Symbol: "729KL49-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729KL51",
          Token: "16655",
          Trading Symbol: "729KL51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729ML29",
          Token: "22013",
          Trading Symbol: "729ML29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729MP30",
          Token: "21980",
          Trading Symbol: "729MP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729MP35",
          Token: "21950",
          Trading Symbol: "729MP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729MZ33",
          Token: "7898",
          Trading Symbol: "729MZ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729NL29",
          Token: "21998",
          Trading Symbol: "729NL29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729RJ32",
          Token: "8684",
          Trading Symbol: "729RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729TN53",
          Token: "16656",
          Trading Symbol: "729TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729TR36",
          Token: "2690",
          Trading Symbol: "729TR36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729UK29",
          Token: "22171",
          Trading Symbol: "729UK29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729UP29",
          Token: "22099",
          Trading Symbol: "729UP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "729WB29",
          Token: "22153",
          Trading Symbol: "729WB29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72AP30",
          Token: "20574",
          Trading Symbol: "72AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72AS29",
          Token: "20960",
          Trading Symbol: "72AS29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72GA31",
          Token: "2386",
          Trading Symbol: "72GA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72HP35",
          Token: "20844",
          Trading Symbol: "72HP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72JH35",
          Token: "2391",
          Trading Symbol: "72JH35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72JK29",
          Token: "20312",
          Trading Symbol: "72JK29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72KA31",
          Token: "20017",
          Trading Symbol: "72KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72KL56",
          Token: "4899",
          Trading Symbol: "72KL56-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72MH28",
          Token: "15971",
          Trading Symbol: "72MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72ML29",
          Token: "22011",
          Trading Symbol: "72ML29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72MZ29",
          Token: "22018",
          Trading Symbol: "72MZ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72NL29",
          Token: "21996",
          Trading Symbol: "72NL29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72RJ46",
          Token: "2584",
          Trading Symbol: "72RJ46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72TN31",
          Token: "22124",
          Trading Symbol: "72TN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72TS51",
          Token: "2659",
          Trading Symbol: "72TS51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72UP31",
          Token: "2387",
          Trading Symbol: "72UP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "72WB30",
          Token: "22142",
          Trading Symbol: "72WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "730AS29",
          Token: "21213",
          Trading Symbol: "730AS29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "730JK29",
          Token: "21651",
          Trading Symbol: "730JK29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "730KA32",
          Token: "8137",
          Trading Symbol: "730KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "730PN31",
          Token: "21894",
          Trading Symbol: "730PN31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "730WB29",
          Token: "22152",
          Trading Symbol: "730WB29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "731AP42",
          Token: "8366",
          Trading Symbol: "731AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "731KA35",
          Token: "7816",
          Trading Symbol: "731KA35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "731KL32",
          Token: "8686",
          Trading Symbol: "731KL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "731PY35",
          Token: "7822",
          Trading Symbol: "731PY35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "731TS60",
          Token: "22206",
          Trading Symbol: "731TS60-SG"
        },
        {
          Exch: "NSE",
          Symbol: "731WB34",
          Token: "22141",
          Trading Symbol: "731WB34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732AP43",
          Token: "15780",
          Trading Symbol: "732AP43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732AS32",
          Token: "8138",
          Trading Symbol: "732AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732GS2024",
          Token: "8274",
          Trading Symbol: "732GS2024-GS"
        },
        {
          Exch: "NSE",
          Symbol: "732HR33",
          Token: "16648",
          Trading Symbol: "732HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732KA34",
          Token: "8006",
          Trading Symbol: "732KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732KL53",
          Token: "16398",
          Trading Symbol: "732KL53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732MH32",
          Token: "16227",
          Trading Symbol: "732MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732TN33",
          Token: "16029",
          Trading Symbol: "732TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732TN53",
          Token: "16274",
          Trading Symbol: "732TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732TS48",
          Token: "15783",
          Trading Symbol: "732TS48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "732TS49",
          Token: "16397",
          Trading Symbol: "732TS49-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733AP33",
          Token: "16647",
          Trading Symbol: "733AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733AP42",
          Token: "16653",
          Trading Symbol: "733AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733AP43",
          Token: "16654",
          Trading Symbol: "733AP43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733AS32",
          Token: "8688",
          Trading Symbol: "733AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733KA37",
          Token: "7858",
          Trading Symbol: "733KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733KA40",
          Token: "7859",
          Trading Symbol: "733KA40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733MH31",
          Token: "16224",
          Trading Symbol: "733MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733MP42",
          Token: "7861",
          Trading Symbol: "733MP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733NL33",
          Token: "16035",
          Trading Symbol: "733NL33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733TN33",
          Token: "15749",
          Trading Symbol: "733TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733TN52",
          Token: "8007",
          Trading Symbol: "733TN52-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733TN52A",
          Token: "8371",
          Trading Symbol: "733TN52A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733TN54",
          Token: "22115",
          Trading Symbol: "733TN54-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733TN57",
          Token: "8372",
          Trading Symbol: "733TN57-SG"
        },
        {
          Exch: "NSE",
          Symbol: "733UP33",
          Token: "16049",
          Trading Symbol: "733UP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734AP29",
          Token: "15475",
          Trading Symbol: "734AP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734AP40",
          Token: "8932",
          Trading Symbol: "734AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734AS33",
          Token: "16019",
          Trading Symbol: "734AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734AS33A",
          Token: "16645",
          Trading Symbol: "734AS33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734GA32",
          Token: "8692",
          Trading Symbol: "734GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734MN32",
          Token: "8140",
          Trading Symbol: "734MN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734MN32A",
          Token: "8695",
          Trading Symbol: "734MN32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734NL32",
          Token: "8698",
          Trading Symbol: "734NL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734RJ33",
          Token: "16062",
          Trading Symbol: "734RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734RJ33A",
          Token: "16646",
          Trading Symbol: "734RJ33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734TR36",
          Token: "2394",
          Trading Symbol: "734TR36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734TS34",
          Token: "7874",
          Trading Symbol: "734TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734TS35",
          Token: "8495",
          Trading Symbol: "734TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734UK32",
          Token: "8689",
          Trading Symbol: "734UK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "734UP32",
          Token: "8693",
          Trading Symbol: "734UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735AP39",
          Token: "15759",
          Trading Symbol: "735AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735CG30",
          Token: "22162",
          Trading Symbol: "735CG30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735GJ26",
          Token: "14634",
          Trading Symbol: "735GJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735GS2024",
          Token: "6936",
          Trading Symbol: "735GS2024-GS"
        },
        {
          Exch: "NSE",
          Symbol: "735HR33",
          Token: "16064",
          Trading Symbol: "735HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735JH38",
          Token: "8498",
          Trading Symbol: "735JH38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735KA36",
          Token: "7872",
          Trading Symbol: "735KA36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735KA39",
          Token: "2400",
          Trading Symbol: "735KA39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735KA40",
          Token: "2404",
          Trading Symbol: "735KA40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735MP29",
          Token: "21982",
          Trading Symbol: "735MP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735PY30",
          Token: "22028",
          Trading Symbol: "735PY30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735PY33",
          Token: "8358",
          Trading Symbol: "735PY33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735RJ43",
          Token: "16374",
          Trading Symbol: "735RJ43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735SK32",
          Token: "8699",
          Trading Symbol: "735SK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735TS30",
          Token: "22208",
          Trading Symbol: "735TS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735UK30",
          Token: "22202",
          Trading Symbol: "735UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735UP34",
          Token: "8702",
          Trading Symbol: "735UP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "735WB30",
          Token: "22177",
          Trading Symbol: "735WB30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736AP34",
          Token: "16066",
          Trading Symbol: "736AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736AP37",
          Token: "16649",
          Trading Symbol: "736AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736GS2052",
          Token: "10931",
          Trading Symbol: "736GS2052-GS"
        },
        {
          Exch: "NSE",
          Symbol: "736HR33",
          Token: "16364",
          Trading Symbol: "736HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736KA39",
          Token: "7910",
          Trading Symbol: "736KA39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736MH28",
          Token: "15009",
          Trading Symbol: "736MH28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736ML32",
          Token: "16289",
          Trading Symbol: "736ML32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736MP33",
          Token: "16229",
          Trading Symbol: "736MP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736RJ33",
          Token: "16346",
          Trading Symbol: "736RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736TS36",
          Token: "8703",
          Trading Symbol: "736TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736WB32",
          Token: "8701",
          Trading Symbol: "736WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "736WB43",
          Token: "16379",
          Trading Symbol: "736WB43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737AP33",
          Token: "16290",
          Trading Symbol: "737AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737AP38",
          Token: "8122",
          Trading Symbol: "737AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737AP42",
          Token: "8123",
          Trading Symbol: "737AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737AP43",
          Token: "15578",
          Trading Symbol: "737AP43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737AS33",
          Token: "15750",
          Trading Symbol: "737AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737JH31",
          Token: "22197",
          Trading Symbol: "737JH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737JK35",
          Token: "16069",
          Trading Symbol: "737JK35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737JK38",
          Token: "16650",
          Trading Symbol: "737JK38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737KA38",
          Token: "7908",
          Trading Symbol: "737KA38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737NL33",
          Token: "16235",
          Trading Symbol: "737NL33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737PN38",
          Token: "16367",
          Trading Symbol: "737PN38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737PN42",
          Token: "8718",
          Trading Symbol: "737PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737RJ34",
          Token: "8578",
          Trading Symbol: "737RJ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737SK33",
          Token: "16239",
          Trading Symbol: "737SK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "737TS36",
          Token: "8121",
          Trading Symbol: "737TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "738AP35",
          Token: "16244",
          Trading Symbol: "738AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "738AP40",
          Token: "15572",
          Trading Symbol: "738AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "738GJ30",
          Token: "15260",
          Trading Symbol: "738GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "738GS2027",
          Token: "9913",
          Trading Symbol: "738GS2027-GS"
        },
        {
          Exch: "NSE",
          Symbol: "738MP25",
          Token: "14526",
          Trading Symbol: "738MP25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739AP33",
          Token: "15526",
          Trading Symbol: "739AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739HR29",
          Token: "15256",
          Trading Symbol: "739HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739HR31",
          Token: "15500",
          Trading Symbol: "739HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739JK37",
          Token: "8496",
          Trading Symbol: "739JK37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739ML26",
          Token: "12289",
          Trading Symbol: "739ML26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739MN35",
          Token: "16250",
          Trading Symbol: "739MN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739TN33",
          Token: "15503",
          Trading Symbol: "739TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739TN42",
          Token: "8719",
          Trading Symbol: "739TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739TN52",
          Token: "8502",
          Trading Symbol: "739TN52-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739TS39",
          Token: "16652",
          Trading Symbol: "739TS39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739TS59",
          Token: "22203",
          Trading Symbol: "739TS59-SG"
        },
        {
          Exch: "NSE",
          Symbol: "739UP37",
          Token: "8705",
          Trading Symbol: "739UP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "73AP38",
          Token: "16071",
          Trading Symbol: "73AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "73HP30",
          Token: "21051",
          Trading Symbol: "73HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "73PN34",
          Token: "21717",
          Trading Symbol: "73PN34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "73RJ30",
          Token: "22066",
          Trading Symbol: "73RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "73TN32",
          Token: "8685",
          Trading Symbol: "73TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "73UP30",
          Token: "22091",
          Trading Symbol: "73UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "741AP30",
          Token: "15262",
          Trading Symbol: "741AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "741GJ26",
          Token: "11588",
          Trading Symbol: "741GJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "741GS2036",
          Token: "13194",
          Trading Symbol: "741GS2036-GS"
        },
        {
          Exch: "NSE",
          Symbol: "741PN42",
          Token: "8501",
          Trading Symbol: "741PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "742KL34",
          Token: "8579",
          Trading Symbol: "742KL34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743AP31",
          Token: "15264",
          Trading Symbol: "743AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743HP28",
          Token: "10559",
          Trading Symbol: "743HP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743HR41",
          Token: "8364",
          Trading Symbol: "743HR41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743MZ36",
          Token: "16261",
          Trading Symbol: "743MZ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743MZ37",
          Token: "16268",
          Trading Symbol: "743MZ37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743TN47",
          Token: "8587",
          Trading Symbol: "743TN47-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743TS33",
          Token: "15265",
          Trading Symbol: "743TS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "743TS54",
          Token: "22211",
          Trading Symbol: "743TS54-SG"
        },
        {
          Exch: "NSE",
          Symbol: "744AP42",
          Token: "8721",
          Trading Symbol: "744AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "744HR27",
          Token: "12657",
          Trading Symbol: "744HR27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "744KA35",
          Token: "8120",
          Trading Symbol: "744KA35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "744TN33",
          Token: "15310",
          Trading Symbol: "744TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745AP37",
          Token: "9345",
          Trading Symbol: "745AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745AP40",
          Token: "10962",
          Trading Symbol: "745AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745AP42",
          Token: "10963",
          Trading Symbol: "745AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745BR32",
          Token: "10956",
          Trading Symbol: "745BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745GJ30",
          Token: "20277",
          Trading Symbol: "745GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745HR32",
          Token: "10955",
          Trading Symbol: "745HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745RJ30",
          Token: "22036",
          Trading Symbol: "745RJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745RJ33",
          Token: "15309",
          Trading Symbol: "745RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745SK32",
          Token: "10966",
          Trading Symbol: "745SK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745TS30",
          Token: "10902",
          Trading Symbol: "745TS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745UK30",
          Token: "22165",
          Trading Symbol: "745UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "745UP33",
          Token: "15314",
          Trading Symbol: "745UP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746AP27",
          Token: "9530",
          Trading Symbol: "746AP27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746KL48",
          Token: "15324",
          Trading Symbol: "746KL48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746MP32",
          Token: "10957",
          Trading Symbol: "746MP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746TS48",
          Token: "10964",
          Trading Symbol: "746TS48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746TS48A",
          Token: "15333",
          Trading Symbol: "746TS48A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746TS49",
          Token: "10965",
          Trading Symbol: "746TS49-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746WB40",
          Token: "8499",
          Trading Symbol: "746WB40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "746WB46",
          Token: "15323",
          Trading Symbol: "746WB46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "747AP37",
          Token: "15267",
          Trading Symbol: "747AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "747GJ25",
          Token: "11674",
          Trading Symbol: "747GJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "747PN43",
          Token: "15319",
          Trading Symbol: "747PN43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "747TS31",
          Token: "10904",
          Trading Symbol: "747TS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "747WB43",
          Token: "15320",
          Trading Symbol: "747WB43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "748AP38",
          Token: "8363",
          Trading Symbol: "748AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "748HP33",
          Token: "10958",
          Trading Symbol: "748HP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "748PN42",
          Token: "9099",
          Trading Symbol: "748PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "748WB37",
          Token: "7911",
          Trading Symbol: "748WB37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "749GJ26",
          Token: "11273",
          Trading Symbol: "749GJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "749GJ28",
          Token: "14812",
          Trading Symbol: "749GJ28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "749HP34",
          Token: "10959",
          Trading Symbol: "749HP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "749MH30",
          Token: "15015",
          Trading Symbol: "749MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "749ML27",
          Token: "13239",
          Trading Symbol: "749ML27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "749MN35",
          Token: "15315",
          Trading Symbol: "749MN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "74AP31",
          Token: "15477",
          Trading Symbol: "74AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "74AS33",
          Token: "15508",
          Trading Symbol: "74AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "74GS2035",
          Token: "6874",
          Trading Symbol: "74GS2035-GS"
        },
        {
          Exch: "NSE",
          Symbol: "74GS2062",
          Token: "10981",
          Trading Symbol: "74GS2062-GS"
        },
        {
          Exch: "NSE",
          Symbol: "74HR37",
          Token: "8580",
          Trading Symbol: "74HR37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "74KL37",
          Token: "8713",
          Trading Symbol: "74KL37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "74ML27",
          Token: "13118",
          Trading Symbol: "74ML27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "74TN42",
          Token: "8590",
          Trading Symbol: "74TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "74WB38",
          Token: "8584",
          Trading Symbol: "74WB38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "750AS30",
          Token: "20278",
          Trading Symbol: "750AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "750GA30",
          Token: "20218",
          Trading Symbol: "750GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "750MZ30",
          Token: "22016",
          Trading Symbol: "750MZ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "750TN29",
          Token: "22107",
          Trading Symbol: "750TN29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "750TS28",
          Token: "22189",
          Trading Symbol: "750TS28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "751HR29",
          Token: "13122",
          Trading Symbol: "751HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "752AP38",
          Token: "8974",
          Trading Symbol: "752AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "752AP42",
          Token: "8977",
          Trading Symbol: "752AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "752GJ25",
          Token: "14419",
          Trading Symbol: "752GJ25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "753AS27",
          Token: "10195",
          Trading Symbol: "753AS27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "753AS32",
          Token: "10906",
          Trading Symbol: "753AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "753BR32",
          Token: "10923",
          Trading Symbol: "753BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "753HR30",
          Token: "10855",
          Trading Symbol: "753HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "753TN53",
          Token: "14280",
          Trading Symbol: "753TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "753TS47",
          Token: "13051",
          Trading Symbol: "753TS47-SG"
        },
        {
          Exch: "NSE",
          Symbol: "754AP29",
          Token: "13712",
          Trading Symbol: "754AP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "754AS28",
          Token: "10646",
          Trading Symbol: "754AS28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "754GS2036",
          Token: "9585",
          Trading Symbol: "754GS2036-GS"
        },
        {
          Exch: "NSE",
          Symbol: "754KA41",
          Token: "13050",
          Trading Symbol: "754KA41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755AP29",
          Token: "12661",
          Trading Symbol: "755AP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755AS32",
          Token: "11095",
          Trading Symbol: "755AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755BR32",
          Token: "11094",
          Trading Symbol: "755BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755BR32A",
          Token: "13038",
          Trading Symbol: "755BR32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755GA32",
          Token: "13124",
          Trading Symbol: "755GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755GJ30",
          Token: "13366",
          Trading Symbol: "755GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755JK38",
          Token: "13779",
          Trading Symbol: "755JK38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755TN53",
          Token: "14117",
          Trading Symbol: "755TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "755TS30",
          Token: "13770",
          Trading Symbol: "755TS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "756RJ33",
          Token: "15095",
          Trading Symbol: "756RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "756RJ48",
          Token: "14113",
          Trading Symbol: "756RJ48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "756TN53",
          Token: "14357",
          Trading Symbol: "756TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "756TS40",
          Token: "11160",
          Trading Symbol: "756TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "756TS48",
          Token: "14112",
          Trading Symbol: "756TS48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "756WB39",
          Token: "11159",
          Trading Symbol: "756WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "756WB42",
          Token: "11161",
          Trading Symbol: "756WB42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757AS32",
          Token: "13112",
          Trading Symbol: "757AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757GJ26",
          Token: "11866",
          Trading Symbol: "757GJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757GJ31",
          Token: "13369",
          Trading Symbol: "757GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757GJ32",
          Token: "13773",
          Trading Symbol: "757GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757GS2033",
          Token: "10046",
          Trading Symbol: "757GS2033-GS"
        },
        {
          Exch: "NSE",
          Symbol: "757HP31",
          Token: "10526",
          Trading Symbol: "757HP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757HP32",
          Token: "13117",
          Trading Symbol: "757HP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757HR30",
          Token: "12664",
          Trading Symbol: "757HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757JK34",
          Token: "11096",
          Trading Symbol: "757JK34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757MH31",
          Token: "13913",
          Trading Symbol: "757MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757TN33",
          Token: "13715",
          Trading Symbol: "757TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757TN53",
          Token: "14455",
          Trading Symbol: "757TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "757TS31",
          Token: "13772",
          Trading Symbol: "757TS31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758AP40",
          Token: "10911",
          Trading Symbol: "758AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758AP42",
          Token: "10913",
          Trading Symbol: "758AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758AS33",
          Token: "15016",
          Trading Symbol: "758AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758BR32",
          Token: "13113",
          Trading Symbol: "758BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758GA37",
          Token: "10912",
          Trading Symbol: "758GA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758GA37A",
          Token: "11097",
          Trading Symbol: "758GA37A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758HR30",
          Token: "13241",
          Trading Symbol: "758HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758JH31",
          Token: "13368",
          Trading Symbol: "758JH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758KL49",
          Token: "14355",
          Trading Symbol: "758KL49-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758NL33",
          Token: "15021",
          Trading Symbol: "758NL33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758PN42",
          Token: "10907",
          Trading Symbol: "758PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758RJ48",
          Token: "14354",
          Trading Symbol: "758RJ48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "758TS45",
          Token: "14353",
          Trading Symbol: "758TS45-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759AP33",
          Token: "13717",
          Trading Symbol: "759AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759CG30",
          Token: "22158",
          Trading Symbol: "759CG30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759GS2026",
          Token: "7139",
          Trading Symbol: "759GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "759GS2029",
          Token: "7130",
          Trading Symbol: "759GS2029-GS"
        },
        {
          Exch: "NSE",
          Symbol: "759HP38",
          Token: "14276",
          Trading Symbol: "759HP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759KA38",
          Token: "13049",
          Trading Symbol: "759KA38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759MP38",
          Token: "14277",
          Trading Symbol: "759MP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759PN33",
          Token: "15019",
          Trading Symbol: "759PN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759PN39",
          Token: "14279",
          Trading Symbol: "759PN39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759PY41",
          Token: "14168",
          Trading Symbol: "759PY41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759RJ48",
          Token: "15109",
          Trading Symbol: "759RJ48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759TS37",
          Token: "13719",
          Trading Symbol: "759TS37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759TS40",
          Token: "13721",
          Trading Symbol: "759TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "759TS40A",
          Token: "14167",
          Trading Symbol: "759TS40A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "75AP28",
          Token: "12660",
          Trading Symbol: "75AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "75GS2034",
          Token: "6873",
          Trading Symbol: "75GS2034-GS"
        },
        {
          Exch: "NSE",
          Symbol: "75HP36",
          Token: "10960",
          Trading Symbol: "75HP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "75HP37",
          Token: "10961",
          Trading Symbol: "75HP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "75HR29",
          Token: "13594",
          Trading Symbol: "75HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "75HR30",
          Token: "15098",
          Trading Symbol: "75HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "75TR30",
          Token: "22137",
          Trading Symbol: "75TR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761GJ32",
          Token: "10531",
          Trading Symbol: "761GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761GS2030",
          Token: "7142",
          Trading Symbol: "761GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "761HR32",
          Token: "10853",
          Trading Symbol: "761HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761JK42",
          Token: "13135",
          Trading Symbol: "761JK42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761MH29",
          Token: "9435",
          Trading Symbol: "761MH29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761RJ32",
          Token: "13377",
          Trading Symbol: "761RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761RJ43",
          Token: "15105",
          Trading Symbol: "761RJ43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761TN32",
          Token: "10852",
          Trading Symbol: "761TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761TN32A",
          Token: "13379",
          Trading Symbol: "761TN32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761TS32",
          Token: "14088",
          Trading Symbol: "761TS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "761TS44",
          Token: "15106",
          Trading Symbol: "761TS44-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762AR32",
          Token: "13372",
          Trading Symbol: "762AR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762AS32",
          Token: "12666",
          Trading Symbol: "762AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762BR32",
          Token: "10854",
          Trading Symbol: "762BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762GA32",
          Token: "12678",
          Trading Symbol: "762GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762GA32A",
          Token: "13373",
          Trading Symbol: "762GA32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762GJ29",
          Token: "11589",
          Trading Symbol: "762GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762GS2039",
          Token: "9538",
          Trading Symbol: "762GS2039-GS"
        },
        {
          Exch: "NSE",
          Symbol: "762HR31",
          Token: "13600",
          Trading Symbol: "762HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762KL53",
          Token: "13624",
          Trading Symbol: "762KL53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762MH30",
          Token: "9695",
          Trading Symbol: "762MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762MH30A",
          Token: "11277",
          Trading Symbol: "762MH30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762MN35",
          Token: "14165",
          Trading Symbol: "762MN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762MP34",
          Token: "14163",
          Trading Symbol: "762MP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762MZ36",
          Token: "14166",
          Trading Symbol: "762MZ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762PN32",
          Token: "12673",
          Trading Symbol: "762PN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762PN38",
          Token: "15100",
          Trading Symbol: "762PN38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762PY35",
          Token: "14164",
          Trading Symbol: "762PY35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762TN33",
          Token: "13602",
          Trading Symbol: "762TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762TN43",
          Token: "13908",
          Trading Symbol: "762TN43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762UK33",
          Token: "13716",
          Trading Symbol: "762UK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "762UP35",
          Token: "13778",
          Trading Symbol: "762UP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763AP30",
          Token: "9531",
          Trading Symbol: "763AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763GJ32",
          Token: "13916",
          Trading Symbol: "763GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763GS2059",
          Token: "9907",
          Trading Symbol: "763GS2059-GS"
        },
        {
          Exch: "NSE",
          Symbol: "763HP37",
          Token: "13127",
          Trading Symbol: "763HP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763HR28",
          Token: "9770",
          Trading Symbol: "763HR28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763HR29",
          Token: "9433",
          Trading Symbol: "763HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763HR32",
          Token: "13244",
          Trading Symbol: "763HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763HR33",
          Token: "13627",
          Trading Symbol: "763HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763JH30",
          Token: "14087",
          Trading Symbol: "763JH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763KA37",
          Token: "12692",
          Trading Symbol: "763KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763KA39",
          Token: "13128",
          Trading Symbol: "763KA39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763KA40",
          Token: "13134",
          Trading Symbol: "763KA40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763KA42",
          Token: "12710",
          Trading Symbol: "763KA42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763KL32",
          Token: "13375",
          Trading Symbol: "763KL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763KL43",
          Token: "12726",
          Trading Symbol: "763KL43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763MH30",
          Token: "9437",
          Trading Symbol: "763MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763ML25",
          Token: "11675",
          Trading Symbol: "763ML25-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763PN39",
          Token: "12706",
          Trading Symbol: "763PN39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763PY32",
          Token: "13382",
          Trading Symbol: "763PY32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763TN47",
          Token: "12345",
          Trading Symbol: "763TN47-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763TS36",
          Token: "13718",
          Trading Symbol: "763TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763TS43",
          Token: "12321",
          Trading Symbol: "763TS43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "763TS44",
          Token: "12328",
          Trading Symbol: "763TS44-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764AP33",
          Token: "12689",
          Trading Symbol: "764AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764AR30",
          Token: "20570",
          Trading Symbol: "764AR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764BR32",
          Token: "13242",
          Trading Symbol: "764BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764GA30",
          Token: "20571",
          Trading Symbol: "764GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764GA33",
          Token: "13887",
          Trading Symbol: "764GA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764GA38",
          Token: "13619",
          Trading Symbol: "764GA38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764HR31",
          Token: "13915",
          Trading Symbol: "764HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764KL34",
          Token: "13606",
          Trading Symbol: "764KL34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764MH32",
          Token: "11285",
          Trading Symbol: "764MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764MH33",
          Token: "13886",
          Trading Symbol: "764MH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764MP33",
          Token: "14093",
          Trading Symbol: "764MP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764RJ38",
          Token: "13902",
          Trading Symbol: "764RJ38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764TN29",
          Token: "10452",
          Trading Symbol: "764TN29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764TN32",
          Token: "10544",
          Trading Symbol: "764TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764TS33",
          Token: "14097",
          Trading Symbol: "764TS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764UP36",
          Token: "14109",
          Trading Symbol: "764UP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764WB32",
          Token: "13248",
          Trading Symbol: "764WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "764WB42",
          Token: "13621",
          Trading Symbol: "764WB42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765AS32",
          Token: "10765",
          Trading Symbol: "765AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765BR32",
          Token: "10529",
          Trading Symbol: "765BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765BR32A",
          Token: "10721",
          Trading Symbol: "765BR32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765GA32",
          Token: "13243",
          Trading Symbol: "765GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765GJ29",
          Token: "10233",
          Trading Symbol: "765GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765GJ33",
          Token: "13964",
          Trading Symbol: "765GJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765HR30",
          Token: "13957",
          Trading Symbol: "765HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765HR33",
          Token: "13882",
          Trading Symbol: "765HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765HR33A",
          Token: "14272",
          Trading Symbol: "765HR33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765KA34",
          Token: "13384",
          Trading Symbol: "765KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765KL48",
          Token: "13996",
          Trading Symbol: "765KL48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765NL32",
          Token: "13247",
          Trading Symbol: "765NL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765PN42",
          Token: "11981",
          Trading Symbol: "765PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765RJ32",
          Token: "10543",
          Trading Symbol: "765RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765RJ32A",
          Token: "11288",
          Trading Symbol: "765RJ32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765RJ33",
          Token: "13881",
          Trading Symbol: "765RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765TN29",
          Token: "10234",
          Trading Symbol: "765TN29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765TN33",
          Token: "13874",
          Trading Symbol: "765TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765TN53",
          Token: "13997",
          Trading Symbol: "765TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765TS30",
          Token: "22188",
          Trading Symbol: "765TS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "765UP30",
          Token: "22086",
          Trading Symbol: "765UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766AP32",
          Token: "13958",
          Trading Symbol: "766AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766BR33",
          Token: "14098",
          Trading Symbol: "766BR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766GJ30",
          Token: "14269",
          Trading Symbol: "766GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766HR29",
          Token: "14635",
          Trading Symbol: "766HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766KA42",
          Token: "12313",
          Trading Symbol: "766KA42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766KL50",
          Token: "14563",
          Trading Symbol: "766KL50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766MH33",
          Token: "14549",
          Trading Symbol: "766MH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766MP48",
          Token: "14559",
          Trading Symbol: "766MP48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766RJ33",
          Token: "13960",
          Trading Symbol: "766RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766RJ43",
          Token: "13994",
          Trading Symbol: "766RJ43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766SK33",
          Token: "14274",
          Trading Symbol: "766SK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766TS34",
          Token: "13387",
          Trading Symbol: "766TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766TS44",
          Token: "13995",
          Trading Symbol: "766TS44-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766UP32",
          Token: "10771",
          Trading Symbol: "766UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766UP33",
          Token: "14162",
          Trading Symbol: "766UP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766UP33A",
          Token: "14273",
          Trading Symbol: "766UP33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "766WB39",
          Token: "13906",
          Trading Symbol: "766WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767AP31",
          Token: "9696",
          Trading Symbol: "767AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767AS32",
          Token: "11980",
          Trading Symbol: "767AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767AS33",
          Token: "13877",
          Trading Symbol: "767AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767AS33A",
          Token: "14092",
          Trading Symbol: "767AS33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767HR32",
          Token: "11284",
          Trading Symbol: "767HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767JH37",
          Token: "13257",
          Trading Symbol: "767JH37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767KA32",
          Token: "11984",
          Trading Symbol: "767KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767KL34",
          Token: "10851",
          Trading Symbol: "767KL34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767MP33",
          Token: "13965",
          Trading Symbol: "767MP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767NL32",
          Token: "10541",
          Trading Symbol: "767NL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767NL33",
          Token: "13626",
          Trading Symbol: "767NL33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767NL33A",
          Token: "13967",
          Trading Symbol: "767NL33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767TN53",
          Token: "14564",
          Trading Symbol: "767TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767TS35",
          Token: "13389",
          Trading Symbol: "767TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767UK33",
          Token: "14102",
          Trading Symbol: "767UK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767WB37",
          Token: "13237",
          Trading Symbol: "767WB37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767WB39",
          Token: "13399",
          Trading Symbol: "767WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "767WB41",
          Token: "13401",
          Trading Symbol: "767WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768AS32",
          Token: "10528",
          Trading Symbol: "768AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768BR32",
          Token: "11985",
          Trading Symbol: "768BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768BR33",
          Token: "14271",
          Trading Symbol: "768BR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768GJ30",
          Token: "14156",
          Trading Symbol: "768GJ30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768GJ33",
          Token: "14548",
          Trading Symbol: "768GJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768GS2023",
          Token: "7121",
          Trading Symbol: "768GS2023-GS"
        },
        {
          Exch: "NSE",
          Symbol: "768HR31",
          Token: "12295",
          Trading Symbol: "768HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768HR33",
          Token: "13968",
          Trading Symbol: "768HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768JK37",
          Token: "12701",
          Trading Symbol: "768JK37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768KA31",
          Token: "11978",
          Trading Symbol: "768KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768KA34",
          Token: "13254",
          Trading Symbol: "768KA34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768PN39",
          Token: "13398",
          Trading Symbol: "768PN39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768PN42",
          Token: "11276",
          Trading Symbol: "768PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768TS42",
          Token: "13993",
          Trading Symbol: "768TS42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768UP32",
          Token: "11289",
          Trading Symbol: "768UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "768WB32",
          Token: "11291",
          Trading Symbol: "768WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769AP35",
          Token: "13878",
          Trading Symbol: "769AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769AP43",
          Token: "14351",
          Trading Symbol: "769AP43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769AS33",
          Token: "13959",
          Trading Symbol: "769AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769BR32",
          Token: "11282",
          Trading Symbol: "769BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769GA32",
          Token: "11283",
          Trading Symbol: "769GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769GA32A",
          Token: "12301",
          Trading Symbol: "769GA32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769GS2043",
          Token: "9888",
          Trading Symbol: "769GS2043-GS"
        },
        {
          Exch: "NSE",
          Symbol: "769HR27",
          Token: "9873",
          Trading Symbol: "769HR27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769KL40",
          Token: "11292",
          Trading Symbol: "769KL40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769MH31",
          Token: "14531",
          Trading Symbol: "769MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769MN34",
          Token: "13252",
          Trading Symbol: "769MN34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769MP43",
          Token: "14352",
          Trading Symbol: "769MP43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769MZ31",
          Token: "9708",
          Trading Symbol: "769MZ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769MZ37",
          Token: "13897",
          Trading Symbol: "769MZ37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769PN39",
          Token: "14381",
          Trading Symbol: "769PN39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769PY37",
          Token: "13397",
          Trading Symbol: "769PY37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769RJ39",
          Token: "14380",
          Trading Symbol: "769RJ39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769TN37",
          Token: "13393",
          Trading Symbol: "769TN37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769TN43",
          Token: "14349",
          Trading Symbol: "769TN43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769TS32",
          Token: "14533",
          Trading Symbol: "769TS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769UP35",
          Token: "13891",
          Trading Symbol: "769UP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769WB39",
          Token: "14340",
          Trading Symbol: "769WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "769WB42",
          Token: "14347",
          Trading Symbol: "769WB42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76AP28",
          Token: "11299",
          Trading Symbol: "76AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76AP29",
          Token: "14954",
          Trading Symbol: "76AP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76GJ32",
          Token: "12667",
          Trading Symbol: "76GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76GJ35",
          Token: "14107",
          Trading Symbol: "76GJ35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76JK35",
          Token: "14103",
          Trading Symbol: "76JK35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76KA32",
          Token: "13245",
          Trading Symbol: "76KA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76KA32A",
          Token: "13374",
          Trading Symbol: "76KA32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76KA33",
          Token: "13601",
          Trading Symbol: "76KA33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76KL45",
          Token: "13911",
          Trading Symbol: "76KL45-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76MH30",
          Token: "21934",
          Trading Symbol: "76MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "76TN32",
          Token: "10720",
          Trading Symbol: "76TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "770MH32",
          Token: "9722",
          Trading Symbol: "770MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP32",
          Token: "9711",
          Trading Symbol: "771AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP33",
          Token: "14270",
          Trading Symbol: "771AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP33A",
          Token: "14959",
          Trading Symbol: "771AP33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP34",
          Token: "11281",
          Trading Symbol: "771AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP36",
          Token: "13972",
          Trading Symbol: "771AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP37",
          Token: "10848",
          Trading Symbol: "771AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP39",
          Token: "10847",
          Trading Symbol: "771AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AP42",
          Token: "10846",
          Trading Symbol: "771AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771AS33",
          Token: "14160",
          Trading Symbol: "771AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771BR33",
          Token: "14431",
          Trading Symbol: "771BR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771GJ33",
          Token: "14374",
          Trading Symbol: "771GJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771GJ34",
          Token: "14432",
          Trading Symbol: "771GJ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771KL42",
          Token: "10845",
          Trading Symbol: "771KL42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771MN32",
          Token: "11286",
          Trading Symbol: "771MN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "771WB39",
          Token: "13991",
          Trading Symbol: "771WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772AP34",
          Token: "10527",
          Trading Symbol: "772AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772AP35",
          Token: "10718",
          Trading Symbol: "772AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772AS33",
          Token: "14539",
          Trading Symbol: "772AS33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772BR33",
          Token: "14161",
          Trading Symbol: "772BR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772BR33A",
          Token: "14375",
          Trading Symbol: "772BR33A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772GJ34",
          Token: "14643",
          Trading Symbol: "772GJ34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772GJ35",
          Token: "14553",
          Trading Symbol: "772GJ35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772GS2025",
          Token: "7123",
          Trading Symbol: "772GS2025-GS"
        },
        {
          Exch: "NSE",
          Symbol: "772GS2049",
          Token: "9604",
          Trading Symbol: "772GS2049-GS"
        },
        {
          Exch: "NSE",
          Symbol: "772GS2055",
          Token: "7136",
          Trading Symbol: "772GS2055-GS"
        },
        {
          Exch: "NSE",
          Symbol: "772HP31",
          Token: "14637",
          Trading Symbol: "772HP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772HR32",
          Token: "14638",
          Trading Symbol: "772HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772JK32",
          Token: "9717",
          Trading Symbol: "772JK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772MH31",
          Token: "14367",
          Trading Symbol: "772MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772MH32",
          Token: "14639",
          Trading Symbol: "772MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772MH34",
          Token: "9724",
          Trading Symbol: "772MH34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772MN32",
          Token: "9718",
          Trading Symbol: "772MN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772MP38",
          Token: "13977",
          Trading Symbol: "772MP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772RJ35",
          Token: "9725",
          Trading Symbol: "772RJ35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772TS46",
          Token: "14452",
          Trading Symbol: "772TS46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772UP36",
          Token: "13973",
          Trading Symbol: "772UP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "772WB38",
          Token: "11295",
          Trading Symbol: "772WB38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773AP32",
          Token: "14640",
          Trading Symbol: "773AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773BR32",
          Token: "11598",
          Trading Symbol: "773BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773BR33",
          Token: "14534",
          Trading Symbol: "773BR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773GJ29",
          Token: "21049",
          Trading Symbol: "773GJ29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773GJ32",
          Token: "10648",
          Trading Symbol: "773GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773GJ36",
          Token: "14652",
          Trading Symbol: "773GJ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773GS2034",
          Token: "7127",
          Trading Symbol: "773GS2034-GS"
        },
        {
          Exch: "NSE",
          Symbol: "773HR32",
          Token: "14369",
          Trading Symbol: "773HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773HR33",
          Token: "9441",
          Trading Symbol: "773HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773MH32",
          Token: "14819",
          Trading Symbol: "773MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773MH34",
          Token: "14645",
          Trading Symbol: "773MH34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773RJ38",
          Token: "13979",
          Trading Symbol: "773RJ38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773TS34",
          Token: "14436",
          Trading Symbol: "773TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773UP33",
          Token: "14538",
          Trading Symbol: "773UP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "773WB32",
          Token: "9719",
          Trading Symbol: "773WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774AP31",
          Token: "10647",
          Trading Symbol: "774AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774AP32",
          Token: "14373",
          Trading Symbol: "774AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774AP38",
          Token: "10719",
          Trading Symbol: "774AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774AP42",
          Token: "11417",
          Trading Symbol: "774AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774GA32",
          Token: "11597",
          Trading Symbol: "774GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774HR29",
          Token: "11676",
          Trading Symbol: "774HR29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774HR31",
          Token: "14814",
          Trading Symbol: "774HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774HR35",
          Token: "9444",
          Trading Symbol: "774HR35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774KA37",
          Token: "12311",
          Trading Symbol: "774KA37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774MH33",
          Token: "14378",
          Trading Symbol: "774MH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774MP43",
          Token: "14656",
          Trading Symbol: "774MP43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774MZ33",
          Token: "10540",
          Trading Symbol: "774MZ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774MZ38",
          Token: "14558",
          Trading Symbol: "774MZ38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774PN39",
          Token: "14653",
          Trading Symbol: "774PN39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774RJ40",
          Token: "14654",
          Trading Symbol: "774RJ40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774RJ42",
          Token: "11418",
          Trading Symbol: "774RJ42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774RJ49",
          Token: "14663",
          Trading Symbol: "774RJ49-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774TS45",
          Token: "10783",
          Trading Symbol: "774TS45-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774TS46",
          Token: "10784",
          Trading Symbol: "774TS46-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774TS48",
          Token: "14660",
          Trading Symbol: "774TS48-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774UK33",
          Token: "14376",
          Trading Symbol: "774UK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774UP37",
          Token: "14554",
          Trading Symbol: "774UP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774WB39",
          Token: "11607",
          Trading Symbol: "774WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774WB41",
          Token: "14655",
          Trading Symbol: "774WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "774WB43",
          Token: "14658",
          Trading Symbol: "774WB43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775AP29",
          Token: "11760",
          Trading Symbol: "775AP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775CG31",
          Token: "14816",
          Trading Symbol: "775CG31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775GJ32",
          Token: "11400",
          Trading Symbol: "775GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775HP32",
          Token: "14818",
          Trading Symbol: "775HP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775NL33",
          Token: "14821",
          Trading Symbol: "775NL33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775PN42",
          Token: "10782",
          Trading Symbol: "775PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775SK33",
          Token: "14822",
          Trading Symbol: "775SK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775TN30",
          Token: "22104",
          Trading Symbol: "775TN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775TN32",
          Token: "10651",
          Trading Symbol: "775TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775UP35",
          Token: "14441",
          Trading Symbol: "775UP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775UP38",
          Token: "14442",
          Trading Symbol: "775UP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "775WB39",
          Token: "14446",
          Trading Symbol: "775WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776AP32",
          Token: "9438",
          Trading Symbol: "776AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776HP30",
          Token: "10235",
          Trading Symbol: "776HP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776HP33",
          Token: "14641",
          Trading Symbol: "776HP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776HR30",
          Token: "11867",
          Trading Symbol: "776HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776KL38",
          Token: "10773",
          Trading Symbol: "776KL38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776KL51",
          Token: "14855",
          Trading Symbol: "776KL51-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776KL58",
          Token: "14861",
          Trading Symbol: "776KL58-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776MH30",
          Token: "11390",
          Trading Symbol: "776MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776MN35",
          Token: "14379",
          Trading Symbol: "776MN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776PN37",
          Token: "9449",
          Trading Symbol: "776PN37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776TN53",
          Token: "14860",
          Trading Symbol: "776TN53-SG"
        },
        {
          Exch: "NSE",
          Symbol: "776UK33",
          Token: "14820",
          Trading Symbol: "776UK33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777AP40",
          Token: "14341",
          Trading Symbol: "777AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777GJ31",
          Token: "9771",
          Trading Symbol: "777GJ31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777GJ32",
          Token: "10459",
          Trading Symbol: "777GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777HR32",
          Token: "10652",
          Trading Symbol: "777HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777HR33",
          Token: "14825",
          Trading Symbol: "777HR33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777JK35",
          Token: "14437",
          Trading Symbol: "777JK35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777JK37",
          Token: "11604",
          Trading Symbol: "777JK37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777MP43",
          Token: "14451",
          Trading Symbol: "777MP43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777MP47",
          Token: "14850",
          Trading Symbol: "777MP47-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777RJ32",
          Token: "10638",
          Trading Symbol: "777RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "777RJ33",
          Token: "14642",
          Trading Symbol: "777RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778AP41",
          Token: "9450",
          Trading Symbol: "778AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778AP42",
          Token: "9451",
          Trading Symbol: "778AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778MH29",
          Token: "21933",
          Trading Symbol: "778MH29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778MH30",
          Token: "11678",
          Trading Symbol: "778MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778ML31",
          Token: "10330",
          Trading Symbol: "778ML31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778MZ32",
          Token: "11401",
          Trading Symbol: "778MZ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778MZ37",
          Token: "11294",
          Trading Symbol: "778MZ37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778RJ33",
          Token: "14824",
          Trading Symbol: "778RJ33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778TS34",
          Token: "14647",
          Trading Symbol: "778TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778UP35",
          Token: "14649",
          Trading Symbol: "778UP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "778UP36",
          Token: "14651",
          Trading Symbol: "778UP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "779AP31",
          Token: "10458",
          Trading Symbol: "779AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "779HP38",
          Token: "14839",
          Trading Symbol: "779HP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "779JK35",
          Token: "14650",
          Trading Symbol: "779JK35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "779RJ32",
          Token: "11404",
          Trading Symbol: "779RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "779TN32",
          Token: "11405",
          Trading Symbol: "779TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "779UP33",
          Token: "14829",
          Trading Symbol: "779UP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "779WB42",
          Token: "14447",
          Trading Symbol: "779WB42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77AP28",
          Token: "14359",
          Trading Symbol: "77AP28-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77AP29",
          Token: "14421",
          Trading Symbol: "77AP29-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77AP30",
          Token: "14268",
          Trading Symbol: "77AP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77AP30A",
          Token: "14636",
          Trading Symbol: "77AP30A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77AP32",
          Token: "14958",
          Trading Symbol: "77AP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77BR32",
          Token: "12300",
          Trading Symbol: "77BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77HP36",
          Token: "13896",
          Trading Symbol: "77HP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77HP38",
          Token: "13901",
          Trading Symbol: "77HP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77HR31",
          Token: "14159",
          Trading Symbol: "77HR31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77HR32",
          Token: "14532",
          Trading Symbol: "77HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77HR34",
          Token: "12303",
          Trading Symbol: "77HR34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77JK37",
          Token: "13392",
          Trading Symbol: "77JK37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77KL47",
          Token: "11424",
          Trading Symbol: "77KL47-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77MH30",
          Token: "11590",
          Trading Symbol: "77MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77MH31",
          Token: "14424",
          Trading Symbol: "77MH31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77MH33",
          Token: "14425",
          Trading Symbol: "77MH33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77MN35",
          Token: "13892",
          Trading Symbol: "77MN35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77MZ35",
          Token: "13256",
          Trading Symbol: "77MZ35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77PN40",
          Token: "13992",
          Trading Symbol: "77PN40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77PN42",
          Token: "11416",
          Trading Symbol: "77PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77RJ32",
          Token: "9532",
          Trading Symbol: "77RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "77TN42",
          Token: "10844",
          Trading Symbol: "77TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "780AP33",
          Token: "21050",
          Trading Symbol: "780AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "780HR30",
          Token: "20219",
          Trading Symbol: "780HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "780KA30",
          Token: "20964",
          Trading Symbol: "780KA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781GA32",
          Token: "9779",
          Trading Symbol: "781GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781GJ32",
          Token: "11506",
          Trading Symbol: "781GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781HR32",
          Token: "9780",
          Trading Symbol: "781HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781HR32A",
          Token: "10331",
          Trading Symbol: "781HR32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781HR32B",
          Token: "10461",
          Trading Symbol: "781HR32B-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781HR32C",
          Token: "11690",
          Trading Symbol: "781HR32C-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781KL44",
          Token: "11706",
          Trading Symbol: "781KL44-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781RJ32",
          Token: "10462",
          Trading Symbol: "781RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781RJ47",
          Token: "10219",
          Trading Symbol: "781RJ47-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781TN52",
          Token: "10190",
          Trading Symbol: "781TN52-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781UP32",
          Token: "11408",
          Trading Symbol: "781UP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781UP34",
          Token: "11603",
          Trading Symbol: "781UP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "781UP34A",
          Token: "14830",
          Trading Symbol: "781UP34A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782AP35",
          Token: "11412",
          Trading Symbol: "782AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782AP42",
          Token: "10555",
          Trading Symbol: "782AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782AS32",
          Token: "10246",
          Trading Symbol: "782AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782AS32A",
          Token: "11764",
          Trading Symbol: "782AS32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782GJ32",
          Token: "10196",
          Trading Symbol: "782GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782HP32",
          Token: "10247",
          Trading Symbol: "782HP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782MN32",
          Token: "9781",
          Trading Symbol: "782MN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782NL32",
          Token: "10463",
          Trading Symbol: "782NL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782NL32A",
          Token: "11881",
          Trading Symbol: "782NL32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782PN42",
          Token: "10558",
          Trading Symbol: "782PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782RJ32",
          Token: "11765",
          Trading Symbol: "782RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782RJ44",
          Token: "10525",
          Trading Symbol: "782RJ44-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782SK32",
          Token: "10470",
          Trading Symbol: "782SK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782SK32A",
          Token: "11878",
          Trading Symbol: "782SK32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782TN32",
          Token: "11693",
          Trading Symbol: "782TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "782WB32",
          Token: "10252",
          Trading Symbol: "782WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783AS32",
          Token: "10357",
          Trading Symbol: "783AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783BR32",
          Token: "11882",
          Trading Symbol: "783BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783GA32",
          Token: "11683",
          Trading Symbol: "783GA32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783HR32",
          Token: "11507",
          Trading Symbol: "783HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783KL39",
          Token: "14840",
          Trading Symbol: "783KL39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783MH30",
          Token: "21940",
          Trading Symbol: "783MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783MN32",
          Token: "10368",
          Trading Symbol: "783MN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783PN42",
          Token: "11769",
          Trading Symbol: "783PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783RJ32",
          Token: "9915",
          Trading Symbol: "783RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783RJ50",
          Token: "14854",
          Trading Symbol: "783RJ50-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783TN42",
          Token: "11704",
          Trading Symbol: "783TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783TS35",
          Token: "11413",
          Trading Symbol: "783TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783TS36",
          Token: "11415",
          Trading Symbol: "783TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "783WB32",
          Token: "9782",
          Trading Symbol: "783WB32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784AS32",
          Token: "11679",
          Trading Symbol: "784AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784HP37",
          Token: "11874",
          Trading Symbol: "784HP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784RJ32",
          Token: "11691",
          Trading Symbol: "784RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784RJ41",
          Token: "14845",
          Trading Symbol: "784RJ41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784TN52",
          Token: "9953",
          Trading Symbol: "784TN52-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784TS34",
          Token: "11409",
          Trading Symbol: "784TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784TS36",
          Token: "10545",
          Trading Symbol: "784TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784TS39",
          Token: "11767",
          Trading Symbol: "784TS39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "784TS40",
          Token: "11768",
          Trading Symbol: "784TS40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785AP37",
          Token: "9928",
          Trading Symbol: "785AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785AP40",
          Token: "11514",
          Trading Symbol: "785AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785AS32",
          Token: "10197",
          Trading Symbol: "785AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785AS32A",
          Token: "11505",
          Trading Symbol: "785AS32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785BR32",
          Token: "11513",
          Trading Symbol: "785BR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785BR32A",
          Token: "11682",
          Trading Symbol: "785BR32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785HP36",
          Token: "11870",
          Trading Symbol: "785HP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785KL34",
          Token: "9788",
          Trading Symbol: "785KL34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785KL35",
          Token: "10532",
          Trading Symbol: "785KL35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785MP32",
          Token: "10198",
          Trading Symbol: "785MP32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785PN32",
          Token: "10394",
          Trading Symbol: "785PN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785PN42",
          Token: "11515",
          Trading Symbol: "785PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785RJ37",
          Token: "9943",
          Trading Symbol: "785RJ37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785RJ39",
          Token: "9952",
          Trading Symbol: "785RJ39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785SK32",
          Token: "11509",
          Trading Symbol: "785SK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785UK30",
          Token: "22201",
          Trading Symbol: "785UK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785UK32",
          Token: "11510",
          Trading Symbol: "785UK32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "785WB42",
          Token: "14849",
          Trading Symbol: "785WB42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "786AP33",
          Token: "11759",
          Trading Symbol: "786AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "786AS32",
          Token: "9916",
          Trading Symbol: "786AS32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "786HR32",
          Token: "10202",
          Trading Symbol: "786HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "786JH34",
          Token: "11885",
          Trading Symbol: "786JH34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "786MH30",
          Token: "9821",
          Trading Symbol: "786MH30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "786MZ32",
          Token: "9922",
          Trading Symbol: "786MZ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "787HP34",
          Token: "11886",
          Trading Symbol: "787HP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "787HP35",
          Token: "11869",
          Trading Symbol: "787HP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "787MZ36",
          Token: "11873",
          Trading Symbol: "787MZ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "787RJ40",
          Token: "11701",
          Trading Symbol: "787RJ40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "787TN33",
          Token: "10338",
          Trading Symbol: "787TN33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "788GA30",
          Token: "21047",
          Trading Symbol: "788GA30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "788GS2030",
          Token: "7122",
          Trading Symbol: "788GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "788MP33",
          Token: "11695",
          Trading Symbol: "788MP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "788NL32",
          Token: "9923",
          Trading Symbol: "788NL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "788RJ32",
          Token: "22065",
          Trading Symbol: "788RJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "789HP37",
          Token: "10551",
          Trading Symbol: "789HP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "789MH32",
          Token: "9822",
          Trading Symbol: "789MH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "789TS34",
          Token: "10334",
          Trading Symbol: "789TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "789TS36",
          Token: "11696",
          Trading Symbol: "789TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "789WB37",
          Token: "10553",
          Trading Symbol: "789WB37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "789WB40",
          Token: "14844",
          Trading Symbol: "789WB40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78AP31",
          Token: "9773",
          Trading Symbol: "78AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78AP31A",
          Token: "9914",
          Trading Symbol: "78AP31A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78GJ32",
          Token: "9777",
          Trading Symbol: "78GJ32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78GJ32A",
          Token: "10367",
          Trading Symbol: "78GJ32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78JK35",
          Token: "14834",
          Trading Symbol: "78JK35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78KL45",
          Token: "11770",
          Trading Symbol: "78KL45-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78ML31",
          Token: "9774",
          Trading Symbol: "78ML31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78TN32",
          Token: "9776",
          Trading Symbol: "78TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78TN32A",
          Token: "10460",
          Trading Symbol: "78TN32A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "78TN42",
          Token: "11877",
          Trading Symbol: "78TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "790RJ26",
          Token: "22061",
          Trading Symbol: "790RJ26-SG"
        },
        {
          Exch: "NSE",
          Symbol: "791KL30",
          Token: "21904",
          Trading Symbol: "791KL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "791TS43",
          Token: "10269",
          Trading Symbol: "791TS43-SG"
        },
        {
          Exch: "NSE",
          Symbol: "791UP37",
          Token: "11697",
          Trading Symbol: "791UP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "792AP41",
          Token: "10337",
          Trading Symbol: "792AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "792AP42",
          Token: "10218",
          Trading Symbol: "792AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "792AP42A",
          Token: "10257",
          Trading Symbol: "792AP42A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "792TS45",
          Token: "10272",
          Trading Symbol: "792TS45-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793AP33",
          Token: "10203",
          Trading Symbol: "793AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793KA31",
          Token: "20965",
          Trading Symbol: "793KA31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793RJ45",
          Token: "10645",
          Trading Symbol: "793RJ45-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793TN42",
          Token: "10644",
          Trading Symbol: "793TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793TS34",
          Token: "10204",
          Trading Symbol: "793TS34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793TS35",
          Token: "10207",
          Trading Symbol: "793TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793UP30",
          Token: "22084",
          Trading Symbol: "793UP30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "793WB37",
          Token: "11698",
          Trading Symbol: "793WB37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "794AP34",
          Token: "10206",
          Trading Symbol: "794AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "794HR34",
          Token: "10205",
          Trading Symbol: "794HR34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "794PN42",
          Token: "10333",
          Trading Symbol: "794PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "794TN32",
          Token: "9869",
          Trading Symbol: "794TN32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "794TS36",
          Token: "10212",
          Trading Symbol: "794TS36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795AP38",
          Token: "10214",
          Trading Symbol: "795AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795AP39",
          Token: "10215",
          Trading Symbol: "795AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795AP40",
          Token: "10216",
          Trading Symbol: "795AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795AP40A",
          Token: "10255",
          Trading Symbol: "795AP40A-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795GS2032",
          Token: "6835",
          Trading Symbol: "795GS2032-GS"
        },
        {
          Exch: "NSE",
          Symbol: "795HR32",
          Token: "9870",
          Trading Symbol: "795HR32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795HR37",
          Token: "10640",
          Trading Symbol: "795HR37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795JK30",
          Token: "21046",
          Trading Symbol: "795JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795TS35",
          Token: "10382",
          Trading Symbol: "795TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795TS37",
          Token: "10642",
          Trading Symbol: "795TS37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "795WB39",
          Token: "11700",
          Trading Symbol: "795WB39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "796AP40",
          Token: "10643",
          Trading Symbol: "796AP40-SG"
        },
        {
          Exch: "NSE",
          Symbol: "796WB37",
          Token: "10213",
          Trading Symbol: "796WB37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "797AP36",
          Token: "10639",
          Trading Symbol: "797AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "797AP39",
          Token: "10336",
          Trading Symbol: "797AP39-SG"
        },
        {
          Exch: "NSE",
          Symbol: "797HR42",
          Token: "10479",
          Trading Symbol: "797HR42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "797PN38",
          Token: "14836",
          Trading Symbol: "797PN38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "797RJ42",
          Token: "10480",
          Trading Symbol: "797RJ42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "797WB42",
          Token: "10454",
          Trading Symbol: "797WB42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "798AP31",
          Token: "20961",
          Trading Symbol: "798AP31-SG"
        },
        {
          Exch: "NSE",
          Symbol: "798RJ42",
          Token: "10381",
          Trading Symbol: "798RJ42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "799TN42",
          Token: "9834",
          Trading Symbol: "799TN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "799TS30",
          Token: "22205",
          Trading Symbol: "799TS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "799TS35",
          Token: "22204",
          Trading Symbol: "799TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "799WB35",
          Token: "22175",
          Trading Symbol: "799WB35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "79AP33",
          Token: "9785",
          Trading Symbol: "79AP33-SG"
        },
        {
          Exch: "NSE",
          Symbol: "79AP34",
          Token: "9797",
          Trading Symbol: "79AP34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "79HR34",
          Token: "10332",
          Trading Symbol: "79HR34-SG"
        },
        {
          Exch: "NSE",
          Symbol: "79RJ42",
          Token: "9800",
          Trading Symbol: "79RJ42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "79TS44",
          Token: "10271",
          Trading Symbol: "79TS44-SG"
        },
        {
          Exch: "NSE",
          Symbol: "801WB41",
          Token: "10393",
          Trading Symbol: "801WB41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "802AP38",
          Token: "10383",
          Trading Symbol: "802AP38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "802MZ36",
          Token: "10374",
          Trading Symbol: "802MZ36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "802TS35",
          Token: "9824",
          Trading Symbol: "802TS35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "802WB37",
          Token: "10384",
          Trading Symbol: "802WB37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "803AP35",
          Token: "9826",
          Trading Symbol: "803AP35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "803AP36",
          Token: "10355",
          Trading Symbol: "803AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "804AP37",
          Token: "10471",
          Trading Symbol: "804AP37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "804AP41",
          Token: "9871",
          Trading Symbol: "804AP41-SG"
        },
        {
          Exch: "NSE",
          Symbol: "804AP42",
          Token: "9872",
          Trading Symbol: "804AP42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "804PN42",
          Token: "10268",
          Trading Symbol: "804PN42-SG"
        },
        {
          Exch: "NSE",
          Symbol: "805RJ37",
          Token: "10474",
          Trading Symbol: "805RJ37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "806JK37",
          Token: "10477",
          Trading Symbol: "806JK37-SG"
        },
        {
          Exch: "NSE",
          Symbol: "807AP36",
          Token: "9830",
          Trading Symbol: "807AP36-SG"
        },
        {
          Exch: "NSE",
          Symbol: "807WB38",
          Token: "10478",
          Trading Symbol: "807WB38-SG"
        },
        {
          Exch: "NSE",
          Symbol: "80NL30",
          Token: "21995",
          Trading Symbol: "80NL30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "810JH32",
          Token: "22199",
          Trading Symbol: "810JH32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "810KL32",
          Token: "21905",
          Trading Symbol: "810KL32-SG"
        },
        {
          Exch: "NSE",
          Symbol: "813GS2045",
          Token: "7124",
          Trading Symbol: "813GS2045-GS"
        },
        {
          Exch: "NSE",
          Symbol: "815GS2026",
          Token: "7114",
          Trading Symbol: "815GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "815JK30",
          Token: "22181",
          Trading Symbol: "815JK30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "817GS2044",
          Token: "7115",
          Trading Symbol: "817GS2044-GS"
        },
        {
          Exch: "NSE",
          Symbol: "824GS2027",
          Token: "6884",
          Trading Symbol: "824GS2027-GS"
        },
        {
          Exch: "NSE",
          Symbol: "824GS2033",
          Token: "7106",
          Trading Symbol: "824GS2033-GS"
        },
        {
          Exch: "NSE",
          Symbol: "826GS2027",
          Token: "6898",
          Trading Symbol: "826GS2027-GS"
        },
        {
          Exch: "NSE",
          Symbol: "828GS2027",
          Token: "6921",
          Trading Symbol: "828GS2027-GS"
        },
        {
          Exch: "NSE",
          Symbol: "828GS2032",
          Token: "6885",
          Trading Symbol: "828GS2032-GS"
        },
        {
          Exch: "NSE",
          Symbol: "82GS2025",
          Token: "7024",
          Trading Symbol: "82GS2025-GS"
        },
        {
          Exch: "NSE",
          Symbol: "831RJ27",
          Token: "22062",
          Trading Symbol: "831RJ27-SG"
        },
        {
          Exch: "NSE",
          Symbol: "832GS2032",
          Token: "6899",
          Trading Symbol: "832GS2032-GS"
        },
        {
          Exch: "NSE",
          Symbol: "833GS2026",
          Token: "7019",
          Trading Symbol: "833GS2026-GS"
        },
        {
          Exch: "NSE",
          Symbol: "833GS2032",
          Token: "6922",
          Trading Symbol: "833GS2032-GS"
        },
        {
          Exch: "NSE",
          Symbol: "833GS2036",
          Token: "6883",
          Trading Symbol: "833GS2036-GS"
        },
        {
          Exch: "NSE",
          Symbol: "83GS2040",
          Token: "6981",
          Trading Symbol: "83GS2040-GS"
        },
        {
          Exch: "NSE",
          Symbol: "83GS2042",
          Token: "7034",
          Trading Symbol: "83GS2042-GS"
        },
        {
          Exch: "NSE",
          Symbol: "84GS2024",
          Token: "7097",
          Trading Symbol: "84GS2024-GS"
        },
        {
          Exch: "NSE",
          Symbol: "86GS2028",
          Token: "7088",
          Trading Symbol: "86GS2028-GS"
        },
        {
          Exch: "NSE",
          Symbol: "883GS2023",
          Token: "7042",
          Trading Symbol: "883GS2023-GS"
        },
        {
          Exch: "NSE",
          Symbol: "883GS2041",
          Token: "7013",
          Trading Symbol: "883GS2041-GS"
        },
        {
          Exch: "NSE",
          Symbol: "896KL35",
          Token: "21906",
          Trading Symbol: "896KL35-SG"
        },
        {
          Exch: "NSE",
          Symbol: "897GS2030",
          Token: "7011",
          Trading Symbol: "897GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "8AR30",
          Token: "20963",
          Trading Symbol: "8AR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "8AS30",
          Token: "21048",
          Trading Symbol: "8AS30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "8HR30",
          Token: "21031",
          Trading Symbol: "8HR30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "8MN30",
          Token: "21923",
          Trading Symbol: "8MN30-SG"
        },
        {
          Exch: "NSE",
          Symbol: "915GS2024",
          Token: "7010",
          Trading Symbol: "915GS2024-GS"
        },
        {
          Exch: "NSE",
          Symbol: "91D030823",
          Token: "15334",
          Trading Symbol: "91D030823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D060723",
          Token: "14967",
          Trading Symbol: "91D060723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D070923",
          Token: "16676",
          Trading Symbol: "91D070923-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D100823",
          Token: "15679",
          Trading Symbol: "91D100823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D130723",
          Token: "15023",
          Trading Symbol: "91D130723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D150623",
          Token: "14568",
          Trading Symbol: "91D150623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D170823",
          Token: "15793",
          Trading Symbol: "91D170823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D200723",
          Token: "15115",
          Trading Symbol: "91D200723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D230623",
          Token: "14664",
          Trading Symbol: "91D230623-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D240823",
          Token: "16094",
          Trading Symbol: "91D240823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D270723",
          Token: "15268",
          Trading Symbol: "91D270723-TB"
        },
        {
          Exch: "NSE",
          Symbol: "91D310823",
          Token: "16401",
          Trading Symbol: "91D310823-TB"
        },
        {
          Exch: "NSE",
          Symbol: "923GS2043",
          Token: "7087",
          Trading Symbol: "923GS2043-GS"
        },
        {
          Exch: "NSE",
          Symbol: "92GS2030",
          Token: "7039",
          Trading Symbol: "92GS2030-GS"
        },
        {
          Exch: "NSE",
          Symbol: "A2ZINFRA",
          Token: "20906",
          Trading Symbol: "A2ZINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AAATECH",
          Token: "12533",
          Trading Symbol: "AAATECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AAKASH",
          Token: "240",
          Trading Symbol: "AAKASH-BE"
        },
        {
          Exch: "NSE",
          Symbol: "AAREYDRUGS",
          Token: "5245",
          Trading Symbol: "AAREYDRUGS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AARON",
          Token: "1030",
          Trading Symbol: "AARON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AARTIDRUGS",
          Token: "4481",
          Trading Symbol: "AARTIDRUGS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AARTIIND",
          Token: "7",
          Trading Symbol: "AARTIIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AARTIPHARM",
          Token: "13868",
          Trading Symbol: "AARTIPHARM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AARTIPP",
          Token: "14256",
          Trading Symbol: "AARTIPP-E1"
        },
        {
          Exch: "NSE",
          Symbol: "AARTISURF",
          Token: "19233",
          Trading Symbol: "AARTISURF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AARVEEDEN",
          Token: "13771",
          Trading Symbol: "AARVEEDEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AARVI",
          Token: "19073",
          Trading Symbol: "AARVI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AAVAS",
          Token: "5385",
          Trading Symbol: "AAVAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABAN",
          Token: "10",
          Trading Symbol: "ABAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABB",
          Token: "13",
          Trading Symbol: "ABB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABBOTINDIA",
          Token: "17903",
          Trading Symbol: "ABBOTINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABCAPITAL",
          Token: "21614",
          Trading Symbol: "ABCAPITAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABCOTS",
          Token: "7787",
          Trading Symbol: "ABCOTS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ABFRL",
          Token: "30108",
          Trading Symbol: "ABFRL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABFRL",
          Token: "11498",
          Trading Symbol: "ABFRL-W1"
        },
        {
          Exch: "NSE",
          Symbol: "ABINFRA",
          Token: "11022",
          Trading Symbol: "ABINFRA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ABMINTLLTD",
          Token: "5551",
          Trading Symbol: "ABMINTLLTD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ABNINT",
          Token: "8588",
          Trading Symbol: "ABNINT-IT"
        },
        {
          Exch: "NSE",
          Symbol: "ABSLAMC",
          Token: "6018",
          Trading Symbol: "ABSLAMC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABSLBANETF",
          Token: "13987",
          Trading Symbol: "ABSLBANETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABSLLIQUID",
          Token: "14518",
          Trading Symbol: "ABSLLIQUID-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ABSLNN50ET",
          Token: "7339",
          Trading Symbol: "ABSLNN50ET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ACC",
          Token: "22",
          Trading Symbol: "ACC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ACCELYA",
          Token: "7053",
          Trading Symbol: "ACCELYA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ACCORD",
          Token: "21217",
          Trading Symbol: "ACCORD-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ACCURACY",
          Token: "1465",
          Trading Symbol: "ACCURACY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ACE",
          Token: "13587",
          Trading Symbol: "ACE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ACEINTEG",
          Token: "11784",
          Trading Symbol: "ACEINTEG-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ACI",
          Token: "12024",
          Trading Symbol: "ACI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ACL",
          Token: "15420",
          Trading Symbol: "ACL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADANIENT",
          Token: "25",
          Trading Symbol: "ADANIENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADANIGREEN",
          Token: "3563",
          Trading Symbol: "ADANIGREEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADANIPORTS",
          Token: "15083",
          Trading Symbol: "ADANIPORTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADANIPOWER",
          Token: "17388",
          Trading Symbol: "ADANIPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADANITRANS",
          Token: "10217",
          Trading Symbol: "ADANITRANS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADFFOODS",
          Token: "19761",
          Trading Symbol: "ADFFOODS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADL",
          Token: "248",
          Trading Symbol: "ADL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ADORWELD",
          Token: "34",
          Trading Symbol: "ADORWELD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADROITINFO",
          Token: "8644",
          Trading Symbol: "ADROITINFO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ADSL",
          Token: "14813",
          Trading Symbol: "ADSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADVANIHOTR",
          Token: "14745",
          Trading Symbol: "ADVANIHOTR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ADVENZYMES",
          Token: "18039",
          Trading Symbol: "ADVENZYMES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AEGISCHEM",
          Token: "40",
          Trading Symbol: "AEGISCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AETHER",
          Token: "9810",
          Trading Symbol: "AETHER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AFFLE",
          Token: "11343",
          Trading Symbol: "AFFLE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AGARIND",
          Token: "3389",
          Trading Symbol: "AGARIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AGARWALFT",
          Token: "14263",
          Trading Symbol: "AGARWALFT-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AGI",
          Token: "1412",
          Trading Symbol: "AGI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AGNI",
          Token: "10491",
          Trading Symbol: "AGNI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AGRITECH",
          Token: "11072",
          Trading Symbol: "AGRITECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AGROPHOS",
          Token: "9046",
          Trading Symbol: "AGROPHOS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AGSTRA",
          Token: "7927",
          Trading Symbol: "AGSTRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AGUL",
          Token: "15147",
          Trading Symbol: "AGUL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AHIMSA",
          Token: "10769",
          Trading Symbol: "AHIMSA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AHL",
          Token: "13288",
          Trading Symbol: "AHL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AHLADA",
          Token: "2004",
          Trading Symbol: "AHLADA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AHLEAST",
          Token: "19438",
          Trading Symbol: "AHLEAST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AHLUCONT",
          Token: "17833",
          Trading Symbol: "AHLUCONT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AIAENG",
          Token: "13086",
          Trading Symbol: "AIAENG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AILIMITED",
          Token: "4626",
          Trading Symbol: "AILIMITED-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AIRAN",
          Token: "9897",
          Trading Symbol: "AIRAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AIROLAM",
          Token: "6068",
          Trading Symbol: "AIROLAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AIRTELPP",
          Token: "6435",
          Trading Symbol: "AIRTELPP-E1"
        },
        {
          Exch: "NSE",
          Symbol: "AISL",
          Token: "482",
          Trading Symbol: "AISL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AJANTPHARM",
          Token: "8124",
          Trading Symbol: "AJANTPHARM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AJMERA",
          Token: "17307",
          Trading Symbol: "AJMERA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AJOONI",
          Token: "3409",
          Trading Symbol: "AJOONI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "AKASH",
          Token: "13510",
          Trading Symbol: "AKASH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AKG",
          Token: "2182",
          Trading Symbol: "AKG-BE"
        },
        {
          Exch: "NSE",
          Symbol: "AKI",
          Token: "14895",
          Trading Symbol: "AKI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "AKSHAR",
          Token: "9560",
          Trading Symbol: "AKSHAR-BE"
        },
        {
          Exch: "NSE",
          Symbol: "AKSHARCHEM",
          Token: "20178",
          Trading Symbol: "AKSHARCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AKSHOPTFBR",
          Token: "8591",
          Trading Symbol: "AKSHOPTFBR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AKZOINDIA",
          Token: "1467",
          Trading Symbol: "AKZOINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALANKIT",
          Token: "9921",
          Trading Symbol: "ALANKIT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALBERTDAVD",
          Token: "17256",
          Trading Symbol: "ALBERTDAVD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALEMBICLTD",
          Token: "79",
          Trading Symbol: "ALEMBICLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALICON",
          Token: "13656",
          Trading Symbol: "ALICON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALKALI",
          Token: "16959",
          Trading Symbol: "ALKALI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALKEM",
          Token: "11703",
          Trading Symbol: "ALKEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALKYLAMINE",
          Token: "4487",
          Trading Symbol: "ALKYLAMINE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALLCARGO",
          Token: "13501",
          Trading Symbol: "ALLCARGO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALLETEC",
          Token: "13203",
          Trading Symbol: "ALLETEC-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ALLSEC",
          Token: "11798",
          Trading Symbol: "ALLSEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALMONDZ",
          Token: "16719",
          Trading Symbol: "ALMONDZ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALOKINDS",
          Token: "17675",
          Trading Symbol: "ALOKINDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALPA",
          Token: "14848",
          Trading Symbol: "ALPA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ALPHAGEO",
          Token: "14597",
          Trading Symbol: "ALPHAGEO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMARAJABAT",
          Token: "100",
          Trading Symbol: "AMARAJABAT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMBANIORG",
          Token: "4083",
          Trading Symbol: "AMBANIORG-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AMBER",
          Token: "1185",
          Trading Symbol: "AMBER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMBICAAGAR",
          Token: "11496",
          Trading Symbol: "AMBICAAGAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMBIKCO",
          Token: "15234",
          Trading Symbol: "AMBIKCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMBUJACEM",
          Token: "1270",
          Trading Symbol: "AMBUJACEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMDIND",
          Token: "14398",
          Trading Symbol: "AMDIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMEYA",
          Token: "10898",
          Trading Symbol: "AMEYA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AMIABLE",
          Token: "11939",
          Trading Symbol: "AMIABLE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AMIORG",
          Token: "5578",
          Trading Symbol: "AMIORG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMJLAND",
          Token: "2598",
          Trading Symbol: "AMJLAND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AMRUTANJAN",
          Token: "17547",
          Trading Symbol: "AMRUTANJAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANANDRATHI",
          Token: "7145",
          Trading Symbol: "ANANDRATHI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANANTRAJ",
          Token: "13620",
          Trading Symbol: "ANANTRAJ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANDHRAPAP",
          Token: "166",
          Trading Symbol: "ANDHRAPAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANDHRSUGAR",
          Token: "136",
          Trading Symbol: "ANDHRSUGAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANDREWYU",
          Token: "5206",
          Trading Symbol: "ANDREWYU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANGELONE",
          Token: "324",
          Trading Symbol: "ANGELONE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANIKINDS",
          Token: "16657",
          Trading Symbol: "ANIKINDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANLON",
          Token: "13657",
          Trading Symbol: "ANLON-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ANMOL",
          Token: "3727",
          Trading Symbol: "ANMOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANNAPURNA",
          Token: "11198",
          Trading Symbol: "ANNAPURNA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ANSALAPI",
          Token: "8760",
          Trading Symbol: "ANSALAPI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ANTGRAPHIC",
          Token: "5194",
          Trading Symbol: "ANTGRAPHIC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANUP",
          Token: "9014",
          Trading Symbol: "ANUP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANURAS",
          Token: "2829",
          Trading Symbol: "ANURAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ANZEN",
          Token: "11945",
          Trading Symbol: "ANZEN-IV"
        },
        {
          Exch: "NSE",
          Symbol: "APARINDS",
          Token: "11491",
          Trading Symbol: "APARINDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APCL",
          Token: "20453",
          Trading Symbol: "APCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APCOTEXIND",
          Token: "154",
          Trading Symbol: "APCOTEXIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APEX",
          Token: "21623",
          Trading Symbol: "APEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APLAPOLLO",
          Token: "25780",
          Trading Symbol: "APLAPOLLO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APLLTD",
          Token: "25328",
          Trading Symbol: "APLLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APOLLO",
          Token: "1134",
          Trading Symbol: "APOLLO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APOLLOHOSP",
          Token: "157",
          Trading Symbol: "APOLLOHOSP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APOLLOPIPE",
          Token: "14361",
          Trading Symbol: "APOLLOPIPE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APOLLOTYRE",
          Token: "163",
          Trading Symbol: "APOLLOTYRE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APOLSINHOT",
          Token: "6302",
          Trading Symbol: "APOLSINHOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APTECHT",
          Token: "10755",
          Trading Symbol: "APTECHT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "APTUS",
          Token: "5435",
          Trading Symbol: "APTUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARCHIDPLY",
          Token: "16795",
          Trading Symbol: "ARCHIDPLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARCHIES",
          Token: "5688",
          Trading Symbol: "ARCHIES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARENTERP",
          Token: "9499",
          Trading Symbol: "ARENTERP-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ARHAM",
          Token: "13092",
          Trading Symbol: "ARHAM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ARIES",
          Token: "15204",
          Trading Symbol: "ARIES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARIHANTACA",
          Token: "13340",
          Trading Symbol: "ARIHANTACA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ARIHANTCAP",
          Token: "3813",
          Trading Symbol: "ARIHANTCAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARIHANTSUP",
          Token: "20159",
          Trading Symbol: "ARIHANTSUP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARISTO",
          Token: "13926",
          Trading Symbol: "ARISTO-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ARMANFIN",
          Token: "17263",
          Trading Symbol: "ARMANFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AROGRANITE",
          Token: "14557",
          Trading Symbol: "AROGRANITE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARROWGREEN",
          Token: "9260",
          Trading Symbol: "ARROWGREEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARSHIYA",
          Token: "17825",
          Trading Symbol: "ARSHIYA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ARSSINFRA",
          Token: "18206",
          Trading Symbol: "ARSSINFRA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ARTEMISMED",
          Token: "16913",
          Trading Symbol: "ARTEMISMED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARTNIRMAN",
          Token: "6156",
          Trading Symbol: "ARTNIRMAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARVEE",
          Token: "2814",
          Trading Symbol: "ARVEE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARVIND",
          Token: "193",
          Trading Symbol: "ARVIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARVINDFASN",
          Token: "9111",
          Trading Symbol: "ARVINDFASN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ARVSMART",
          Token: "10457",
          Trading Symbol: "ARVSMART-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASAHIINDIA",
          Token: "5378",
          Trading Symbol: "ASAHIINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASAHISONG",
          Token: "25088",
          Trading Symbol: "ASAHISONG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASAL",
          Token: "10634",
          Trading Symbol: "ASAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASALCBR",
          Token: "17598",
          Trading Symbol: "ASALCBR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASCOM",
          Token: "15001",
          Trading Symbol: "ASCOM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ASHAPURMIN",
          Token: "203",
          Trading Symbol: "ASHAPURMIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASHIANA",
          Token: "24403",
          Trading Symbol: "ASHIANA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASHIMASYN",
          Token: "206",
          Trading Symbol: "ASHIMASYN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASHOKA",
          Token: "20182",
          Trading Symbol: "ASHOKA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASHOKLEY",
          Token: "212",
          Trading Symbol: "ASHOKLEY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASIANENE",
          Token: "7033",
          Trading Symbol: "ASIANENE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ASIANHOTNR",
          Token: "18425",
          Trading Symbol: "ASIANHOTNR-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ASIANPAINT",
          Token: "236",
          Trading Symbol: "ASIANPAINT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASIANTILES",
          Token: "14889",
          Trading Symbol: "ASIANTILES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASLIND",
          Token: "20502",
          Trading Symbol: "ASLIND-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ASMS",
          Token: "14867",
          Trading Symbol: "ASMS-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "ASPINWALL",
          Token: "17270",
          Trading Symbol: "ASPINWALL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASTEC",
          Token: "17728",
          Trading Symbol: "ASTEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASTERDM",
          Token: "1508",
          Trading Symbol: "ASTERDM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASTRAL",
          Token: "14418",
          Trading Symbol: "ASTRAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASTRAMICRO",
          Token: "11618",
          Trading Symbol: "ASTRAMICRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASTRAZEN",
          Token: "5610",
          Trading Symbol: "ASTRAZEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ASTRON",
          Token: "874",
          Trading Symbol: "ASTRON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ATALREAL",
          Token: "15649",
          Trading Symbol: "ATALREAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ATAM",
          Token: "15411",
          Trading Symbol: "ATAM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ATFL",
          Token: "1663",
          Trading Symbol: "ATFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ATGL",
          Token: "6066",
          Trading Symbol: "ATGL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ATLANTA",
          Token: "13585",
          Trading Symbol: "ATLANTA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ATUL",
          Token: "263",
          Trading Symbol: "ATUL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ATULAUTO",
          Token: "30023",
          Trading Symbol: "ATULAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AUBANK",
          Token: "21238",
          Trading Symbol: "AUBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AURDIS",
          Token: "18762",
          Trading Symbol: "AURDIS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AURIONPRO",
          Token: "12025",
          Trading Symbol: "AURIONPRO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "AUROIMPEX",
          Token: "15869",
          Trading Symbol: "AUROIMPEX-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AUROPHARMA",
          Token: "275",
          Trading Symbol: "AUROPHARMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AURUM",
          Token: "10310",
          Trading Symbol: "AURUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AURUMPP",
          Token: "9643",
          Trading Symbol: "AURUMPP-E1"
        },
        {
          Exch: "NSE",
          Symbol: "AUSOMENT",
          Token: "4037",
          Trading Symbol: "AUSOMENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AUTOAXLES",
          Token: "278",
          Trading Symbol: "AUTOAXLES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AUTOBEES",
          Token: "7880",
          Trading Symbol: "AUTOBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AUTOIND",
          Token: "14106",
          Trading Symbol: "AUTOIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AVADHSUGAR",
          Token: "21406",
          Trading Symbol: "AVADHSUGAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AVALON",
          Token: "15058",
          Trading Symbol: "AVALON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AVANTIFEED",
          Token: "7936",
          Trading Symbol: "AVANTIFEED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AVG",
          Token: "15589",
          Trading Symbol: "AVG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AVONMORE",
          Token: "13557",
          Trading Symbol: "AVONMORE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AVROIND",
          Token: "8827",
          Trading Symbol: "AVROIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AVSL",
          Token: "18692",
          Trading Symbol: "AVSL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "AVTNPL",
          Token: "14008",
          Trading Symbol: "AVTNPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AWHCL",
          Token: "1797",
          Trading Symbol: "AWHCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AWL",
          Token: "8110",
          Trading Symbol: "AWL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISBANK",
          Token: "5900",
          Trading Symbol: "AXISBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISBNKETF",
          Token: "1044",
          Trading Symbol: "AXISBNKETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISBPSETF",
          Token: "3530",
          Trading Symbol: "AXISBPSETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISCADES",
          Token: "9436",
          Trading Symbol: "AXISCADES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISCETF",
          Token: "5732",
          Trading Symbol: "AXISCETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISGOLD",
          Token: "20532",
          Trading Symbol: "AXISGOLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISHCETF",
          Token: "3608",
          Trading Symbol: "AXISHCETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISILVER",
          Token: "11193",
          Trading Symbol: "AXISILVER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISNIFTY",
          Token: "21252",
          Trading Symbol: "AXISNIFTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXISTECETF",
          Token: "3010",
          Trading Symbol: "AXISTECETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXITA",
          Token: "9902",
          Trading Symbol: "AXITA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AXSENSEX",
          Token: "14742",
          Trading Symbol: "AXSENSEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "AYMSYNTEX",
          Token: "10285",
          Trading Symbol: "AYMSYNTEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAGFILMS",
          Token: "11226",
          Trading Symbol: "BAGFILMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAHETI",
          Token: "12989",
          Trading Symbol: "BAHETI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "BAIDFIN",
          Token: "13794",
          Trading Symbol: "BAIDFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJAJ-AUTO",
          Token: "16669",
          Trading Symbol: "BAJAJ-AUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJAJCON",
          Token: "19531",
          Trading Symbol: "BAJAJCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJAJELEC",
          Token: "15034",
          Trading Symbol: "BAJAJELEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJAJFINSV",
          Token: "16675",
          Trading Symbol: "BAJAJFINSV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJAJHCARE",
          Token: "6863",
          Trading Symbol: "BAJAJHCARE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJAJHIND",
          Token: "308",
          Trading Symbol: "BAJAJHIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJAJHLDNG",
          Token: "305",
          Trading Symbol: "BAJAJHLDNG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAJFINANCE",
          Token: "317",
          Trading Symbol: "BAJFINANCE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALAJITELE",
          Token: "9158",
          Trading Symbol: "BALAJITELE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALAMINES",
          Token: "14501",
          Trading Symbol: "BALAMINES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALAXI",
          Token: "11309",
          Trading Symbol: "BALAXI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALKRISHNA",
          Token: "10181",
          Trading Symbol: "BALKRISHNA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALKRISIND",
          Token: "335",
          Trading Symbol: "BALKRISIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALLARPUR",
          Token: "1299",
          Trading Symbol: "BALLARPUR-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "BALMLAWRIE",
          Token: "338",
          Trading Symbol: "BALMLAWRIE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALPHARMA",
          Token: "13441",
          Trading Symbol: "BALPHARMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BALRAMCHIN",
          Token: "341",
          Trading Symbol: "BALRAMCHIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANARBEADS",
          Token: "347",
          Trading Symbol: "BANARBEADS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANARISUG",
          Token: "350",
          Trading Symbol: "BANARISUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANCOINDIA",
          Token: "13880",
          Trading Symbol: "BANCOINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANDHANBNK",
          Token: "2263",
          Trading Symbol: "BANDHANBNK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANG",
          Token: "15303",
          Trading Symbol: "BANG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANKA",
          Token: "822",
          Trading Symbol: "BANKA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANKBARODA",
          Token: "4668",
          Trading Symbol: "BANKBARODA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANKBEES",
          Token: "11439",
          Trading Symbol: "BANKBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANKINDIA",
          Token: "4745",
          Trading Symbol: "BANKINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BANSWRAS",
          Token: "14511",
          Trading Symbol: "BANSWRAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BARBEQUE",
          Token: "3127",
          Trading Symbol: "BARBEQUE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BASF",
          Token: "368",
          Trading Symbol: "BASF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BASML",
          Token: "12034",
          Trading Symbol: "BASML-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BATAINDIA",
          Token: "371",
          Trading Symbol: "BATAINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BAYERCROP",
          Token: "17927",
          Trading Symbol: "BAYERCROP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BBETF0432",
          Token: "7196",
          Trading Symbol: "BBETF0432-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BBL",
          Token: "13761",
          Trading Symbol: "BBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BBOX",
          Token: "3435",
          Trading Symbol: "BBOX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BBTC",
          Token: "380",
          Trading Symbol: "BBTC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BBTCL",
          Token: "12153",
          Trading Symbol: "BBTCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BCG",
          Token: "8833",
          Trading Symbol: "BCG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BCLIND",
          Token: "2513",
          Trading Symbol: "BCLIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BCONCEPTS",
          Token: "7783",
          Trading Symbol: "BCONCEPTS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "BDL",
          Token: "2144",
          Trading Symbol: "BDL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BDR",
          Token: "4294",
          Trading Symbol: "BDR-IT"
        },
        {
          Exch: "NSE",
          Symbol: "BEARDSELL",
          Token: "17937",
          Trading Symbol: "BEARDSELL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "BECTORFOOD",
          Token: "1628",
          Trading Symbol: "BECTORFOOD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BEDMUTHA",
          Token: "20196",
          Trading Symbol: "BEDMUTHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BEL",
          Token: "383",
          Trading Symbol: "BEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BEML",
          Token: "395",
          Trading Symbol: "BEML-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BEPL",
          Token: "419",
          Trading Symbol: "BEPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BERGEPAINT",
          Token: "404",
          Trading Symbol: "BERGEPAINT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BESTAGRO",
          Token: "2306",
          Trading Symbol: "BESTAGRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BETA",
          Token: "81",
          Trading Symbol: "BETA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "BEWLTD",
          Token: "5662",
          Trading Symbol: "BEWLTD-SM"
        },
        {
          Exch: "NSE",
          Symbol: "BFINVEST",
          Token: "21113",
          Trading Symbol: "BFINVEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BFUTILITIE",
          Token: "14567",
          Trading Symbol: "BFUTILITIE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BGRENERGY",
          Token: "15189",
          Trading Symbol: "BGRENERGY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHAGCHEM",
          Token: "6164",
          Trading Symbol: "BHAGCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHAGERIA",
          Token: "13400",
          Trading Symbol: "BHAGERIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHAGYANGR",
          Token: "20776",
          Trading Symbol: "BHAGYANGR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHALCHANDR",
          Token: "9985",
          Trading Symbol: "BHALCHANDR-IT"
        },
        {
          Exch: "NSE",
          Symbol: "BHANDARI",
          Token: "19556",
          Trading Symbol: "BHANDARI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHARATFORG",
          Token: "422",
          Trading Symbol: "BHARATFORG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHARATGEAR",
          Token: "426",
          Trading Symbol: "BHARATGEAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHARATRAS",
          Token: "3834",
          Trading Symbol: "BHARATRAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHARATWIRE",
          Token: "16123",
          Trading Symbol: "BHARATWIRE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHARTIARTL",
          Token: "10604",
          Trading Symbol: "BHARTIARTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BHEL",
          Token: "438",
          Trading Symbol: "BHEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIGBLOC",
          Token: "18431",
          Trading Symbol: "BIGBLOC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIKAJI",
          Token: "11966",
          Trading Symbol: "BIKAJI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIL",
          Token: "7848",
          Trading Symbol: "BIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BINANIIND",
          Token: "13622",
          Trading Symbol: "BINANIIND-BE"
        },
        {
          Exch: "NSE",
          Symbol: "BIOCON",
          Token: "11373",
          Trading Symbol: "BIOCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIOFILCHEM",
          Token: "4136",
          Trading Symbol: "BIOFILCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIRET",
          Token: "2203",
          Trading Symbol: "BIRET-RR"
        },
        {
          Exch: "NSE",
          Symbol: "BIRLACABLE",
          Token: "477",
          Trading Symbol: "BIRLACABLE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIRLACORPN",
          Token: "480",
          Trading Symbol: "BIRLACORPN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIRLAMONEY",
          Token: "15239",
          Trading Symbol: "BIRLAMONEY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BIRLATYRE",
          Token: "17588",
          Trading Symbol: "BIRLATYRE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "BKMINDST",
          Token: "5789",
          Trading Symbol: "BKMINDST-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "BLAL",
          Token: "15067",
          Trading Symbol: "BLAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BLBLIMITED",
          Token: "8132",
          Trading Symbol: "BLBLIMITED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BLISSGVS",
          Token: "19265",
          Trading Symbol: "BLISSGVS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BLKASHYAP",
          Token: "13290",
          Trading Symbol: "BLKASHYAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BLS",
          Token: "17279",
          Trading Symbol: "BLS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BLUECOAST",
          Token: "7480",
          Trading Symbol: "BLUECOAST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BLUEDART",
          Token: "495",
          Trading Symbol: "BLUEDART-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BLUESTARCO",
          Token: "8311",
          Trading Symbol: "BLUESTARCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BMETRICS",
          Token: "6052",
          Trading Symbol: "BMETRICS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "BODALCHEM",
          Token: "25017",
          Trading Symbol: "BODALCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BOHRAIND",
          Token: "11640",
          Trading Symbol: "BOHRAIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BOMDYEING",
          Token: "513",
          Trading Symbol: "BOMDYEING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BOROLTD",
          Token: "19401",
          Trading Symbol: "BOROLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BORORENEW",
          Token: "3149",
          Trading Symbol: "BORORENEW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BOSCHLTD",
          Token: "2181",
          Trading Symbol: "BOSCHLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BPCL",
          Token: "526",
          Trading Symbol: "BPCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BPL",
          Token: "530",
          Trading Symbol: "BPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BRIGADE",
          Token: "15184",
          Trading Symbol: "BRIGADE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BRIGHT",
          Token: "3901",
          Trading Symbol: "BRIGHT-SM"
        },
        {
          Exch: "NSE",
          Symbol: "BRITANNIA",
          Token: "547",
          Trading Symbol: "BRITANNIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BRITANNIA",
          Token: "5066",
          Trading Symbol: "BRITANNIA-N3"
        },
        {
          Exch: "NSE",
          Symbol: "BRNL",
          Token: "21683",
          Trading Symbol: "BRNL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BROOKS",
          Token: "25136",
          Trading Symbol: "BROOKS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BSE",
          Token: "19585",
          Trading Symbol: "BSE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BSHSL",
          Token: "812",
          Trading Symbol: "BSHSL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "BSL",
          Token: "559",
          Trading Symbol: "BSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BSLGOLDETF",
          Token: "23804",
          Trading Symbol: "BSLGOLDETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BSLNIFTY",
          Token: "24781",
          Trading Symbol: "BSLNIFTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BSLSENETFG",
          Token: "5957",
          Trading Symbol: "BSLSENETFG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BSOFT",
          Token: "6994",
          Trading Symbol: "BSOFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BTML",
          Token: "14152",
          Trading Symbol: "BTML-BE"
        },
        {
          Exch: "NSE",
          Symbol: "BURNPUR",
          Token: "15194",
          Trading Symbol: "BURNPUR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BUTTERFLY",
          Token: "2716",
          Trading Symbol: "BUTTERFLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "BVCL",
          Token: "15077",
          Trading Symbol: "BVCL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "BYKE",
          Token: "7919",
          Trading Symbol: "BYKE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CADSYS",
          Token: "21823",
          Trading Symbol: "CADSYS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "CALSOFT",
          Token: "8400",
          Trading Symbol: "CALSOFT-BE"
        },
        {
          Exch: "NSE",
          Symbol: "CAMLINFINE",
          Token: "6216",
          Trading Symbol: "CAMLINFINE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CAMPUS",
          Token: "9362",
          Trading Symbol: "CAMPUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CAMS",
          Token: "342",
          Trading Symbol: "CAMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CANBK",
          Token: "10794",
          Trading Symbol: "CANBK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CANFINHOME",
          Token: "583",
          Trading Symbol: "CANFINHOME-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CANTABIL",
          Token: "20160",
          Trading Symbol: "CANTABIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CAPACITE",
          Token: "21749",
          Trading Symbol: "CAPACITE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CAPLIPOINT",
          Token: "3906",
          Trading Symbol: "CAPLIPOINT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CAPTRUST",
          Token: "19447",
          Trading Symbol: "CAPTRUST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CARBORUNIV",
          Token: "595",
          Trading Symbol: "CARBORUNIV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CAREERP",
          Token: "20086",
          Trading Symbol: "CAREERP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CARERATING",
          Token: "29113",
          Trading Symbol: "CARERATING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CARTRADE",
          Token: "5407",
          Trading Symbol: "CARTRADE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CARYSIL",
          Token: "1879",
          Trading Symbol: "CARYSIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CASTROLIND",
          Token: "1250",
          Trading Symbol: "CASTROLIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CCHHL",
          Token: "6385",
          Trading Symbol: "CCHHL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CCL",
          Token: "11452",
          Trading Symbol: "CCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CDSL",
          Token: "21174",
          Trading Symbol: "CDSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CEATLTD",
          Token: "15254",
          Trading Symbol: "CEATLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CELEBRITY",
          Token: "13162",
          Trading Symbol: "CELEBRITY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CENTENKA",
          Token: "619",
          Trading Symbol: "CENTENKA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CENTEXT",
          Token: "11511",
          Trading Symbol: "CENTEXT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CENTRALBK",
          Token: "14894",
          Trading Symbol: "CENTRALBK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CENTRUM",
          Token: "2454",
          Trading Symbol: "CENTRUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CENTUM",
          Token: "14982",
          Trading Symbol: "CENTUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CENTURYPLY",
          Token: "13305",
          Trading Symbol: "CENTURYPLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CENTURYTEX",
          Token: "625",
          Trading Symbol: "CENTURYTEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CERA",
          Token: "15039",
          Trading Symbol: "CERA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CEREBRAINT",
          Token: "30016",
          Trading Symbol: "CEREBRAINT-BE"
        },
        {
          Exch: "NSE",
          Symbol: "CESC",
          Token: "628",
          Trading Symbol: "CESC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CGCL",
          Token: "20329",
          Trading Symbol: "CGCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CGPOWER",
          Token: "760",
          Trading Symbol: "CGPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHALET",
          Token: "8546",
          Trading Symbol: "CHALET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHAMBLFERT",
          Token: "637",
          Trading Symbol: "CHAMBLFERT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHEMBOND",
          Token: "14618",
          Trading Symbol: "CHEMBOND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHEMCON",
          Token: "270",
          Trading Symbol: "CHEMCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHEMFAB",
          Token: "2799",
          Trading Symbol: "CHEMFAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHEMPLASTS",
          Token: "5449",
          Trading Symbol: "CHEMPLASTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHENNPETRO",
          Token: "2049",
          Trading Symbol: "CHENNPETRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHEVIOT",
          Token: "9879",
          Trading Symbol: "CHEVIOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHOICEIN",
          Token: "8866",
          Trading Symbol: "CHOICEIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAFIN",
          Token: "685",
          Trading Symbol: "CHOLAFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAFIN",
          Token: "15364",
          Trading Symbol: "CHOLAFIN-N0"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAFIN",
          Token: "15368",
          Trading Symbol: "CHOLAFIN-N1"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAFIN",
          Token: "15370",
          Trading Symbol: "CHOLAFIN-N2"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAFIN",
          Token: "15372",
          Trading Symbol: "CHOLAFIN-N3"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAFIN",
          Token: "15374",
          Trading Symbol: "CHOLAFIN-N4"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAFIN",
          Token: "15376",
          Trading Symbol: "CHOLAFIN-N5"
        },
        {
          Exch: "NSE",
          Symbol: "CHOLAHLDNG",
          Token: "21740",
          Trading Symbol: "CHOLAHLDNG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CIGNITITEC",
          Token: "5142",
          Trading Symbol: "CIGNITITEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CINELINE",
          Token: "27161",
          Trading Symbol: "CINELINE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CINEVISTA",
          Token: "8024",
          Trading Symbol: "CINEVISTA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CIPLA",
          Token: "694",
          Trading Symbol: "CIPLA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CLEAN",
          Token: "5049",
          Trading Symbol: "CLEAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CLEDUCATE",
          Token: "20223",
          Trading Symbol: "CLEDUCATE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CLOUD",
          Token: "11179",
          Trading Symbol: "CLOUD-SM"
        },
        {
          Exch: "NSE",
          Symbol: "CLSEL",
          Token: "3482",
          Trading Symbol: "CLSEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CMNL",
          Token: "13731",
          Trading Symbol: "CMNL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "CMRSL",
          Token: "11447",
          Trading Symbol: "CMRSL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "CMSINFO",
          Token: "7603",
          Trading Symbol: "CMSINFO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COALINDIA",
          Token: "20374",
          Trading Symbol: "COALINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COASTCORP",
          Token: "6006",
          Trading Symbol: "COASTCORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COASTPP1",
          Token: "14476",
          Trading Symbol: "COASTPP1-E1"
        },
        {
          Exch: "NSE",
          Symbol: "COCHINSHIP",
          Token: "21508",
          Trading Symbol: "COCHINSHIP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COFFEEDAY",
          Token: "11165",
          Trading Symbol: "COFFEEDAY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COFORGE",
          Token: "11543",
          Trading Symbol: "COFORGE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COLPAL",
          Token: "15141",
          Trading Symbol: "COLPAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COMPINFO",
          Token: "17632",
          Trading Symbol: "COMPINFO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COMPUSOFT",
          Token: "31138",
          Trading Symbol: "COMPUSOFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CONCOR",
          Token: "4749",
          Trading Symbol: "CONCOR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CONFIPET",
          Token: "10238",
          Trading Symbol: "CONFIPET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CONSOFINVT",
          Token: "11731",
          Trading Symbol: "CONSOFINVT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CONSUMBEES",
          Token: "2435",
          Trading Symbol: "CONSUMBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CONTI",
          Token: "2531",
          Trading Symbol: "CONTI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "CONTROLPR",
          Token: "17477",
          Trading Symbol: "CONTROLPR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COOLCAPS",
          Token: "8560",
          Trading Symbol: "COOLCAPS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "CORALFINAC",
          Token: "4007",
          Trading Symbol: "CORALFINAC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CORDSCABLE",
          Token: "15271",
          Trading Symbol: "CORDSCABLE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COROMANDEL",
          Token: "739",
          Trading Symbol: "COROMANDEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COSMOFIRST",
          Token: "742",
          Trading Symbol: "COSMOFIRST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "COUNCODOS",
          Token: "16986",
          Trading Symbol: "COUNCODOS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CPSEETF",
          Token: "2328",
          Trading Symbol: "CPSEETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CRAFTSMAN",
          Token: "2854",
          Trading Symbol: "CRAFTSMAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CRAYONS",
          Token: "16442",
          Trading Symbol: "CRAYONS-ST"
        },
        {
          Exch: "NSE",
          Symbol: "CREATIVE",
          Token: "11155",
          Trading Symbol: "CREATIVE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CREDITACC",
          Token: "4421",
          Trading Symbol: "CREDITACC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CREDITACC",
          Token: "12427",
          Trading Symbol: "CREDITACC-N1"
        },
        {
          Exch: "NSE",
          Symbol: "CREDITACC",
          Token: "12434",
          Trading Symbol: "CREDITACC-N2"
        },
        {
          Exch: "NSE",
          Symbol: "CREDITACC",
          Token: "12444",
          Trading Symbol: "CREDITACC-N3"
        },
        {
          Exch: "NSE",
          Symbol: "CREDITACC",
          Token: "12456",
          Trading Symbol: "CREDITACC-N4"
        },
        {
          Exch: "NSE",
          Symbol: "CREDITACC",
          Token: "12465",
          Trading Symbol: "CREDITACC-N5"
        },
        {
          Exch: "NSE",
          Symbol: "CREDITACC",
          Token: "12471",
          Trading Symbol: "CREDITACC-N6"
        },
        {
          Exch: "NSE",
          Symbol: "CREST",
          Token: "13900",
          Trading Symbol: "CREST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CRISIL",
          Token: "757",
          Trading Symbol: "CRISIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CROMPTON",
          Token: "17094",
          Trading Symbol: "CROMPTON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CROWN",
          Token: "8083",
          Trading Symbol: "CROWN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CSBBANK",
          Token: "14966",
          Trading Symbol: "CSBBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CSLFINANCE",
          Token: "10350",
          Trading Symbol: "CSLFINANCE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CTE",
          Token: "14218",
          Trading Symbol: "CTE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CUB",
          Token: "5701",
          Trading Symbol: "CUB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CUBEINVIT",
          Token: "15078",
          Trading Symbol: "CUBEINVIT-IV"
        },
        {
          Exch: "NSE",
          Symbol: "CUBEXTUB",
          Token: "9881",
          Trading Symbol: "CUBEXTUB-BE"
        },
        {
          Exch: "NSE",
          Symbol: "CUMMINSIND",
          Token: "1901",
          Trading Symbol: "CUMMINSIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CUPID",
          Token: "18520",
          Trading Symbol: "CUPID-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CYBERMEDIA",
          Token: "11842",
          Trading Symbol: "CYBERMEDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CYBERTECH",
          Token: "6051",
          Trading Symbol: "CYBERTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "CYIENT",
          Token: "5748",
          Trading Symbol: "CYIENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DAAWAT",
          Token: "13816",
          Trading Symbol: "DAAWAT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DABUR",
          Token: "772",
          Trading Symbol: "DABUR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DALBHARAT",
          Token: "8075",
          Trading Symbol: "DALBHARAT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DALMIASUG",
          Token: "781",
          Trading Symbol: "DALMIASUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DAMODARIND",
          Token: "17541",
          Trading Symbol: "DAMODARIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DANGEE",
          Token: "1110",
          Trading Symbol: "DANGEE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DATAMATICS",
          Token: "11423",
          Trading Symbol: "DATAMATICS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DATAPATTNS",
          Token: "7358",
          Trading Symbol: "DATAPATTNS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DBCORP",
          Token: "17881",
          Trading Symbol: "DBCORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DBL",
          Token: "18086",
          Trading Symbol: "DBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DBOL",
          Token: "10893",
          Trading Symbol: "DBOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DBREALTY",
          Token: "18124",
          Trading Symbol: "DBREALTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DBSTOCKBRO",
          Token: "31107",
          Trading Symbol: "DBSTOCKBRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCAL",
          Token: "21704",
          Trading Symbol: "DCAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCBBANK",
          Token: "13725",
          Trading Symbol: "DCBBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCI",
          Token: "11568",
          Trading Symbol: "DCI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "DCM",
          Token: "805",
          Trading Symbol: "DCM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCMFINSERV",
          Token: "8704",
          Trading Symbol: "DCMFINSERV-BE"
        },
        {
          Exch: "NSE",
          Symbol: "DCMNVL",
          Token: "11039",
          Trading Symbol: "DCMNVL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCMSHRIRAM",
          Token: "811",
          Trading Symbol: "DCMSHRIRAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCMSRIND",
          Token: "7325",
          Trading Symbol: "DCMSRIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCW",
          Token: "817",
          Trading Symbol: "DCW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DCXINDIA",
          Token: "11895",
          Trading Symbol: "DCXINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DECCANCE",
          Token: "14838",
          Trading Symbol: "DECCANCE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DEEPAKFERT",
          Token: "827",
          Trading Symbol: "DEEPAKFERT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DEEPAKNTR",
          Token: "19943",
          Trading Symbol: "DEEPAKNTR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DEEPENR",
          Token: "18244",
          Trading Symbol: "DEEPENR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DEEPINDS",
          Token: "3292",
          Trading Symbol: "DEEPINDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DELHIVERY",
          Token: "9599",
          Trading Symbol: "DELHIVERY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DELPHIFX",
          Token: "24391",
          Trading Symbol: "DELPHIFX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DELTACORP",
          Token: "15044",
          Trading Symbol: "DELTACORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DELTAMAGNT",
          Token: "1214",
          Trading Symbol: "DELTAMAGNT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DEN",
          Token: "17722",
          Trading Symbol: "DEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DENEERS",
          Token: "15449",
          Trading Symbol: "DENEERS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DENORA",
          Token: "4279",
          Trading Symbol: "DENORA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DENTALKART",
          Token: "16479",
          Trading Symbol: "DENTALKART-ST"
        },
        {
          Exch: "NSE",
          Symbol: "DESTINY",
          Token: "6087",
          Trading Symbol: "DESTINY-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DEVIT",
          Token: "8146",
          Trading Symbol: "DEVIT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DEVYANI",
          Token: "5373",
          Trading Symbol: "DEVYANI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DGCONTENT",
          Token: "10346",
          Trading Symbol: "DGCONTENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHAMPURSUG",
          Token: "857",
          Trading Symbol: "DHAMPURSUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHANBANK",
          Token: "11359",
          Trading Symbol: "DHANBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHANI",
          Token: "15384",
          Trading Symbol: "DHANI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9157",
          Trading Symbol: "DHANILOANS-N6"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9161",
          Trading Symbol: "DHANILOANS-N7"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9165",
          Trading Symbol: "DHANILOANS-N8"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "10628",
          Trading Symbol: "DHANILOANS-NF"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "10630",
          Trading Symbol: "DHANILOANS-NG"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "10659",
          Trading Symbol: "DHANILOANS-NH"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "13017",
          Trading Symbol: "DHANILOANS-NO"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "13021",
          Trading Symbol: "DHANILOANS-NP"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "13023",
          Trading Symbol: "DHANILOANS-NQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "8029",
          Trading Symbol: "DHANILOANS-NS"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "8049",
          Trading Symbol: "DHANILOANS-NT"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "8055",
          Trading Symbol: "DHANILOANS-NU"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "8059",
          Trading Symbol: "DHANILOANS-NV"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "8062",
          Trading Symbol: "DHANILOANS-NW"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "8067",
          Trading Symbol: "DHANILOANS-NX"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9491",
          Trading Symbol: "DHANILOANS-NZ"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9496",
          Trading Symbol: "DHANILOANS-Y1"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9500",
          Trading Symbol: "DHANILOANS-Y2"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9518",
          Trading Symbol: "DHANILOANS-Y3"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9520",
          Trading Symbol: "DHANILOANS-Y4"
        },
        {
          Exch: "NSE",
          Symbol: "DHANILOANS",
          Token: "9528",
          Trading Symbol: "DHANILOANS-Y5"
        },
        {
          Exch: "NSE",
          Symbol: "DHANUKA",
          Token: "24409",
          Trading Symbol: "DHANUKA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHARMAJ",
          Token: "13001",
          Trading Symbol: "DHARMAJ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHARSUGAR",
          Token: "11617",
          Trading Symbol: "DHARSUGAR-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "DHRUV",
          Token: "6858",
          Trading Symbol: "DHRUV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DHUNINV",
          Token: "22233",
          Trading Symbol: "DHUNINV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIAMONDYD",
          Token: "21840",
          Trading Symbol: "DIAMONDYD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DICIND",
          Token: "703",
          Trading Symbol: "DICIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIGISPICE",
          Token: "16683",
          Trading Symbol: "DIGISPICE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIGJAMLMTD",
          Token: "6136",
          Trading Symbol: "DIGJAMLMTD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "DIL",
          Token: "8657",
          Trading Symbol: "DIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIL-RE",
          Token: "16721",
          Trading Symbol: "DIL-RE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "DISHTV",
          Token: "14537",
          Trading Symbol: "DISHTV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIVGIITTS",
          Token: "14479",
          Trading Symbol: "DIVGIITTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIVISLAB",
          Token: "10940",
          Trading Symbol: "DIVISLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIVOPPBEES",
          Token: "2636",
          Trading Symbol: "DIVOPPBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DIXON",
          Token: "21690",
          Trading Symbol: "DIXON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DJML",
          Token: "12749",
          Trading Symbol: "DJML-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DKEGL",
          Token: "6249",
          Trading Symbol: "DKEGL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DLF",
          Token: "14732",
          Trading Symbol: "DLF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DLINKINDIA",
          Token: "17851",
          Trading Symbol: "DLINKINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DMART",
          Token: "19913",
          Trading Symbol: "DMART-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DMCC",
          Token: "6973",
          Trading Symbol: "DMCC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DNAMEDIA",
          Token: "641",
          Trading Symbol: "DNAMEDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DODLA",
          Token: "4822",
          Trading Symbol: "DODLA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DOLATALGO",
          Token: "12124",
          Trading Symbol: "DOLATALGO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DOLLAR",
          Token: "20560",
          Trading Symbol: "DOLLAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DOLLEX",
          Token: "13323",
          Trading Symbol: "DOLLEX-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DONEAR",
          Token: "13839",
          Trading Symbol: "DONEAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DPABHUSHAN",
          Token: "936",
          Trading Symbol: "DPABHUSHAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DPSCLTD",
          Token: "15419",
          Trading Symbol: "DPSCLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DPWIRES",
          Token: "16900",
          Trading Symbol: "DPWIRES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DRCSYSTEMS",
          Token: "2645",
          Trading Symbol: "DRCSYSTEMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DREAMFOLKS",
          Token: "10859",
          Trading Symbol: "DREAMFOLKS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DREDGECORP",
          Token: "11271",
          Trading Symbol: "DREDGECORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DRL",
          Token: "18769",
          Trading Symbol: "DRL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DRREDDY",
          Token: "881",
          Trading Symbol: "DRREDDY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DRSDILIP",
          Token: "6686",
          Trading Symbol: "DRSDILIP-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DSPBANKETF",
          Token: "13644",
          Trading Symbol: "DSPBANKETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DSPGOLDETF",
          Token: "15356",
          Trading Symbol: "DSPGOLDETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DSPN50ETF",
          Token: "7451",
          Trading Symbol: "DSPN50ETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DSPNEWETF",
          Token: "6606",
          Trading Symbol: "DSPNEWETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DSPQ50ETF",
          Token: "7456",
          Trading Symbol: "DSPQ50ETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DSPSILVETF",
          Token: "10761",
          Trading Symbol: "DSPSILVETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DSSL",
          Token: "25690",
          Trading Symbol: "DSSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DTIL",
          Token: "6227",
          Trading Symbol: "DTIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DUCOL",
          Token: "13766",
          Trading Symbol: "DUCOL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DUCON",
          Token: "28956",
          Trading Symbol: "DUCON-BE"
        },
        {
          Exch: "NSE",
          Symbol: "DUGLOBAL",
          Token: "5457",
          Trading Symbol: "DUGLOBAL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DVL",
          Token: "15214",
          Trading Symbol: "DVL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DWARKESH",
          Token: "11667",
          Trading Symbol: "DWARKESH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DYCL",
          Token: "10417",
          Trading Symbol: "DYCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DYNAMATECH",
          Token: "4525",
          Trading Symbol: "DYNAMATECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "DYNAMIC",
          Token: "6079",
          Trading Symbol: "DYNAMIC-SM"
        },
        {
          Exch: "NSE",
          Symbol: "DYNPRO",
          Token: "21314",
          Trading Symbol: "DYNPRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "E2E",
          Token: "8937",
          Trading Symbol: "E2E-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EASEMYTRIP",
          Token: "2792",
          Trading Symbol: "EASEMYTRIP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EBANK",
          Token: "11625",
          Trading Symbol: "EBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EBBETF0425",
          Token: "22243",
          Trading Symbol: "EBBETF0425-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EBBETF0430",
          Token: "16253",
          Trading Symbol: "EBBETF0430-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EBBETF0431",
          Token: "22239",
          Trading Symbol: "EBBETF0431-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EBBETF0433",
          Token: "13139",
          Trading Symbol: "EBBETF0433-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ECLERX",
          Token: "15179",
          Trading Symbol: "ECLERX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "4276",
          Trading Symbol: "ECLFINANCE-NG"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "4280",
          Trading Symbol: "ECLFINANCE-NH"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "4284",
          Trading Symbol: "ECLFINANCE-NI"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "4288",
          Trading Symbol: "ECLFINANCE-NJ"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "4292",
          Trading Symbol: "ECLFINANCE-NK"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "7968",
          Trading Symbol: "ECLFINANCE-NO"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "7970",
          Trading Symbol: "ECLFINANCE-NP"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "7972",
          Trading Symbol: "ECLFINANCE-NQ"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "7975",
          Trading Symbol: "ECLFINANCE-NR"
        },
        {
          Exch: "NSE",
          Symbol: "ECLFINANCE",
          Token: "7986",
          Trading Symbol: "ECLFINANCE-NS"
        },
        {
          Exch: "NSE",
          Symbol: "EDELWEISS",
          Token: "15123",
          Trading Symbol: "EDELWEISS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "EDUCOMP",
          Token: "21747",
          Trading Symbol: "EDUCOMP-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "EHFLNCD",
          Token: "17864",
          Trading Symbol: "EHFLNCD-N5"
        },
        {
          Exch: "NSE",
          Symbol: "EHFLNCD",
          Token: "17866",
          Trading Symbol: "EHFLNCD-N6"
        },
        {
          Exch: "NSE",
          Symbol: "EHFLNCD",
          Token: "17868",
          Trading Symbol: "EHFLNCD-N7"
        },
        {
          Exch: "NSE",
          Symbol: "EICHERMOT",
          Token: "910",
          Trading Symbol: "EICHERMOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EIDPARRY",
          Token: "916",
          Trading Symbol: "EIDPARRY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EIFFL",
          Token: "6040",
          Trading Symbol: "EIFFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EIHAHOTELS",
          Token: "15399",
          Trading Symbol: "EIHAHOTELS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EIHOTEL",
          Token: "919",
          Trading Symbol: "EIHOTEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EIMCOELECO",
          Token: "7915",
          Trading Symbol: "EIMCOELECO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "EKC",
          Token: "13091",
          Trading Symbol: "EKC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ELDEHSG",
          Token: "8953",
          Trading Symbol: "ELDEHSG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ELECON",
          Token: "13643",
          Trading Symbol: "ELECON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ELECTCAST",
          Token: "928",
          Trading Symbol: "ELECTCAST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ELECTCAST",
          Token: "18116",
          Trading Symbol: "ELECTCAST-W1"
        },
        {
          Exch: "NSE",
          Symbol: "ELECTHERM",
          Token: "14902",
          Trading Symbol: "ELECTHERM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ELGIEQUIP",
          Token: "937",
          Trading Symbol: "ELGIEQUIP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ELGIRUBCO",
          Token: "24924",
          Trading Symbol: "ELGIRUBCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ELIN",
          Token: "13423",
          Trading Symbol: "ELIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EMAMILTD",
          Token: "15008",
          Trading Symbol: "EMAMILTD-BO"
        },
        {
          Exch: "NSE",
          Symbol: "EMAMILTD",
          Token: "13517",
          Trading Symbol: "EMAMILTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EMAMIPAP",
          Token: "10074",
          Trading Symbol: "EMAMIPAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EMAMIREAL",
          Token: "19277",
          Trading Symbol: "EMAMIREAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EMBASSY",
          Token: "9383",
          Trading Symbol: "EMBASSY-RR"
        },
        {
          Exch: "NSE",
          Symbol: "EMIL",
          Token: "11530",
          Trading Symbol: "EMIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EMKAY",
          Token: "13421",
          Trading Symbol: "EMKAY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EMKAYTOOLS",
          Token: "10253",
          Trading Symbol: "EMKAYTOOLS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "EMMBI",
          Token: "18142",
          Trading Symbol: "EMMBI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EMUDHRA",
          Token: "9756",
          Trading Symbol: "EMUDHRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ENDURANCE",
          Token: "18822",
          Trading Symbol: "ENDURANCE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ENERGYDEV",
          Token: "15049",
          Trading Symbol: "ENERGYDEV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ENGINERSIN",
          Token: "4907",
          Trading Symbol: "ENGINERSIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ENIL",
          Token: "13192",
          Trading Symbol: "ENIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EPL",
          Token: "981",
          Trading Symbol: "EPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EQUIPPP",
          Token: "3553",
          Trading Symbol: "EQUIPPP-BE"
        },
        {
          Exch: "NSE",
          Symbol: "EQUITASBNK",
          Token: "913",
          Trading Symbol: "EQUITASBNK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ERFLNCDI",
          Token: "2252",
          Trading Symbol: "ERFLNCDI-N5"
        },
        {
          Exch: "NSE",
          Symbol: "ERFLNCDI",
          Token: "2254",
          Trading Symbol: "ERFLNCDI-N6"
        },
        {
          Exch: "NSE",
          Symbol: "ERIS",
          Token: "21154",
          Trading Symbol: "ERIS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EROSMEDIA",
          Token: "20080",
          Trading Symbol: "EROSMEDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ESABINDIA",
          Token: "955",
          Trading Symbol: "ESABINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ESCORTS",
          Token: "958",
          Trading Symbol: "ESCORTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ESSARSHPNG",
          Token: "25634",
          Trading Symbol: "ESSARSHPNG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ESSENTIA",
          Token: "30327",
          Trading Symbol: "ESSENTIA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ESTER",
          Token: "24265",
          Trading Symbol: "ESTER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ETHOSLTD",
          Token: "9750",
          Trading Symbol: "ETHOSLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EUROBOND",
          Token: "7331",
          Trading Symbol: "EUROBOND-SM"
        },
        {
          Exch: "NSE",
          Symbol: "EUROTEXIND",
          Token: "8886",
          Trading Symbol: "EUROTEXIND-BE"
        },
        {
          Exch: "NSE",
          Symbol: "EVEREADY",
          Token: "11782",
          Trading Symbol: "EVEREADY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EVERESTIND",
          Token: "993",
          Trading Symbol: "EVERESTIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EXCEL",
          Token: "17376",
          Trading Symbol: "EXCEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EXCELINDUS",
          Token: "11471",
          Trading Symbol: "EXCELINDUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EXIDEIND",
          Token: "676",
          Trading Symbol: "EXIDEIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EXPLEOSOL",
          Token: "17486",
          Trading Symbol: "EXPLEOSOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "EXXARO",
          Token: "5352",
          Trading Symbol: "EXXARO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FACT",
          Token: "1008",
          Trading Symbol: "FACT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FAIRCHEMOR",
          Token: "1614",
          Trading Symbol: "FAIRCHEMOR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FAZE3Q",
          Token: "12000",
          Trading Symbol: "FAZE3Q-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FCL",
          Token: "6198",
          Trading Symbol: "FCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FCONSUMER",
          Token: "30041",
          Trading Symbol: "FCONSUMER-BE"
        },
        {
          Exch: "NSE",
          Symbol: "FCSSOFT",
          Token: "11999",
          Trading Symbol: "FCSSOFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FDC",
          Token: "4898",
          Trading Symbol: "FDC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FEDERALBNK",
          Token: "1023",
          Trading Symbol: "FEDERALBNK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FEL",
          Token: "13812",
          Trading Symbol: "FEL-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "FELDVR",
          Token: "17006",
          Trading Symbol: "FELDVR-BE"
        },
        {
          Exch: "NSE",
          Symbol: "FELIX",
          Token: "573",
          Trading Symbol: "FELIX-SM"
        },
        {
          Exch: "NSE",
          Symbol: "FIBERWEB",
          Token: "8159",
          Trading Symbol: "FIBERWEB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FIDEL",
          Token: "9858",
          Trading Symbol: "FIDEL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "FIEMIND",
          Token: "13710",
          Trading Symbol: "FIEMIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FILATEX",
          Token: "24532",
          Trading Symbol: "FILATEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FINCABLES",
          Token: "1038",
          Trading Symbol: "FINCABLES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FINEORG",
          Token: "3744",
          Trading Symbol: "FINEORG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FINOPB",
          Token: "6579",
          Trading Symbol: "FINOPB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FINPIPE",
          Token: "1041",
          Trading Symbol: "FINPIPE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FIVESTAR",
          Token: "12032",
          Trading Symbol: "FIVESTAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FLEXITUFF",
          Token: "25512",
          Trading Symbol: "FLEXITUFF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FLFL",
          Token: "14868",
          Trading Symbol: "FLFL-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "FLUOROCHEM",
          Token: "13750",
          Trading Symbol: "FLUOROCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FMGOETZE",
          Token: "1190",
          Trading Symbol: "FMGOETZE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FMNL",
          Token: "21017",
          Trading Symbol: "FMNL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FOCE",
          Token: "7385",
          Trading Symbol: "FOCE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "FOCUS",
          Token: "6836",
          Trading Symbol: "FOCUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FOODSIN",
          Token: "6673",
          Trading Symbol: "FOODSIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FORCEMOT",
          Token: "11573",
          Trading Symbol: "FORCEMOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FORTIS",
          Token: "14592",
          Trading Symbol: "FORTIS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FOSECOIND",
          Token: "1073",
          Trading Symbol: "FOSECOIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FRETAIL",
          Token: "11736",
          Trading Symbol: "FRETAIL-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "FROG",
          Token: "11501",
          Trading Symbol: "FROG-SM"
        },
        {
          Exch: "NSE",
          Symbol: "FSC",
          Token: "14628",
          Trading Symbol: "FSC-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "FSL",
          Token: "14304",
          Trading Symbol: "FSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "FUSION",
          Token: "11932",
          Trading Symbol: "FUSION-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "G1NSETEST",
          Token: "12842",
          Trading Symbol: "G1NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GABRIEL",
          Token: "1085",
          Trading Symbol: "GABRIEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GAEL",
          Token: "8828",
          Trading Symbol: "GAEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GAIL",
          Token: "4717",
          Trading Symbol: "GAIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GAL",
          Token: "20296",
          Trading Symbol: "GAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GALAXYSURF",
          Token: "1315",
          Trading Symbol: "GALAXYSURF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GALLANTT",
          Token: "13337",
          Trading Symbol: "GALLANTT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GANDHITUBE",
          Token: "14116",
          Trading Symbol: "GANDHITUBE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GANECOS",
          Token: "6944",
          Trading Symbol: "GANECOS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GANESHBE",
          Token: "5614",
          Trading Symbol: "GANESHBE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GANESHHOUC",
          Token: "14339",
          Trading Symbol: "GANESHHOUC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GANGAFORGE",
          Token: "4959",
          Trading Symbol: "GANGAFORGE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GANGESSECU",
          Token: "21399",
          Trading Symbol: "GANGESSECU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GARFIBRES",
          Token: "1100",
          Trading Symbol: "GARFIBRES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GATEWAY",
          Token: "8510",
          Trading Symbol: "GATEWAY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GATI",
          Token: "13688",
          Trading Symbol: "GATI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GAYAHWS",
          Token: "3693",
          Trading Symbol: "GAYAHWS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GAYAPROJ",
          Token: "25027",
          Trading Symbol: "GAYAPROJ-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GEECEE",
          Token: "13658",
          Trading Symbol: "GEECEE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GEEKAYWIRE",
          Token: "17924",
          Trading Symbol: "GEEKAYWIRE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GENCON",
          Token: "2188",
          Trading Symbol: "GENCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GENESYS",
          Token: "10905",
          Trading Symbol: "GENESYS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GENUSPAPER",
          Token: "6600",
          Trading Symbol: "GENUSPAPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GENUSPOWER",
          Token: "11905",
          Trading Symbol: "GENUSPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GEOJITFSL",
          Token: "11896",
          Trading Symbol: "GEOJITFSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GEPIL",
          Token: "7862",
          Trading Symbol: "GEPIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GESHIP",
          Token: "13776",
          Trading Symbol: "GESHIP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GET&D",
          Token: "16787",
          Trading Symbol: "GET&D-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GFLLIMITED",
          Token: "1289",
          Trading Symbol: "GFLLIMITED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GHCL",
          Token: "1127",
          Trading Symbol: "GHCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GHCLTEXTIL",
          Token: "16698",
          Trading Symbol: "GHCLTEXTIL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GICHSGFIN",
          Token: "1139",
          Trading Symbol: "GICHSGFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GICL",
          Token: "18815",
          Trading Symbol: "GICL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "GICRE",
          Token: "277",
          Trading Symbol: "GICRE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GILLANDERS",
          Token: "17839",
          Trading Symbol: "GILLANDERS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GILLETTE",
          Token: "1576",
          Trading Symbol: "GILLETTE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GILT5YBEES",
          Token: "3172",
          Trading Symbol: "GILT5YBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GINNIFILA",
          Token: "1142",
          Trading Symbol: "GINNIFILA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GIPCL",
          Token: "1145",
          Trading Symbol: "GIPCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GIRIRAJ",
          Token: "2365",
          Trading Symbol: "GIRIRAJ-SM"
        },
        {
          Exch: "NSE",
          Symbol: "GIRRESORTS",
          Token: "9935",
          Trading Symbol: "GIRRESORTS-IT"
        },
        {
          Exch: "NSE",
          Symbol: "GISOLUTION",
          Token: "17000",
          Trading Symbol: "GISOLUTION-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GKWLIMITED",
          Token: "17357",
          Trading Symbol: "GKWLIMITED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GLAND",
          Token: "1186",
          Trading Symbol: "GLAND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GLAXO",
          Token: "1153",
          Trading Symbol: "GLAXO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GLENMARK",
          Token: "7406",
          Trading Symbol: "GLENMARK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GLOBAL",
          Token: "1417",
          Trading Symbol: "GLOBAL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GLOBALVECT",
          Token: "13735",
          Trading Symbol: "GLOBALVECT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GLOBE",
          Token: "400",
          Trading Symbol: "GLOBE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GLOBUSSPR",
          Token: "17424",
          Trading Symbol: "GLOBUSSPR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GLS",
          Token: "5265",
          Trading Symbol: "GLS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GMBREW",
          Token: "1168",
          Trading Symbol: "GMBREW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GMDCLTD",
          Token: "5204",
          Trading Symbol: "GMDCLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GMMPFAUDLR",
          Token: "1570",
          Trading Symbol: "GMMPFAUDLR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GMRINFRA",
          Token: "13528",
          Trading Symbol: "GMRINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GMRP&UI",
          Token: "8529",
          Trading Symbol: "GMRP&UI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GNA",
          Token: "18571",
          Trading Symbol: "GNA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GNFC",
          Token: "1174",
          Trading Symbol: "GNFC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOACARBON",
          Token: "14687",
          Trading Symbol: "GOACARBON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOCLCORP",
          Token: "3963",
          Trading Symbol: "GOCLCORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOCOLORS",
          Token: "6964",
          Trading Symbol: "GOCOLORS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GODFRYPHLP",
          Token: "1181",
          Trading Symbol: "GODFRYPHLP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GODHA",
          Token: "1610",
          Trading Symbol: "GODHA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GODREJAGRO",
          Token: "144",
          Trading Symbol: "GODREJAGRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GODREJCP",
          Token: "10099",
          Trading Symbol: "GODREJCP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GODREJIND",
          Token: "10925",
          Trading Symbol: "GODREJIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GODREJPROP",
          Token: "17875",
          Trading Symbol: "GODREJPROP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOENKA",
          Token: "5010",
          Trading Symbol: "GOENKA-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "GOKEX",
          Token: "11778",
          Trading Symbol: "GOKEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOKUL",
          Token: "16705",
          Trading Symbol: "GOKUL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOKULAGRO",
          Token: "14480",
          Trading Symbol: "GOKULAGRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOLDBEES",
          Token: "14428",
          Trading Symbol: "GOLDBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOLDENTOBC",
          Token: "11619",
          Trading Symbol: "GOLDENTOBC-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "GOLDIAM",
          Token: "11971",
          Trading Symbol: "GOLDIAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOLDSHARE",
          Token: "14535",
          Trading Symbol: "GOLDSHARE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOLDSTAR",
          Token: "1",
          Trading Symbol: "GOLDSTAR-SM"
        },
        {
          Exch: "NSE",
          Symbol: "GOLDTECH",
          Token: "9874",
          Trading Symbol: "GOLDTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOODLUCK",
          Token: "6125",
          Trading Symbol: "GOODLUCK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOODYEAR",
          Token: "1205",
          Trading Symbol: "GOODYEAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GOYALALUM",
          Token: "11789",
          Trading Symbol: "GOYALALUM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GPIL",
          Token: "13409",
          Trading Symbol: "GPIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GPPL",
          Token: "19731",
          Trading Symbol: "GPPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GPTINFRA",
          Token: "17685",
          Trading Symbol: "GPTINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRANULES",
          Token: "11872",
          Trading Symbol: "GRANULES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRAPHITE",
          Token: "592",
          Trading Symbol: "GRAPHITE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRASIM",
          Token: "1232",
          Trading Symbol: "GRASIM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRAUWEIL",
          Token: "5200",
          Trading Symbol: "GRAUWEIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRAVITA",
          Token: "20534",
          Trading Symbol: "GRAVITA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRCL",
          Token: "14052",
          Trading Symbol: "GRCL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "GREAVESCOT",
          Token: "1235",
          Trading Symbol: "GREAVESCOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GREENLAM",
          Token: "6848",
          Trading Symbol: "GREENLAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GREENPANEL",
          Token: "13810",
          Trading Symbol: "GREENPANEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GREENPLY",
          Token: "3987",
          Trading Symbol: "GREENPLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GREENPOWER",
          Token: "20110",
          Trading Symbol: "GREENPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRETEX",
          Token: "18741",
          Trading Symbol: "GRETEX-SM"
        },
        {
          Exch: "NSE",
          Symbol: "GRINDWELL",
          Token: "13560",
          Trading Symbol: "GRINDWELL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRINFRA",
          Token: "5054",
          Trading Symbol: "GRINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRMOVER",
          Token: "10871",
          Trading Symbol: "GRMOVER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GROBTEA",
          Token: "17770",
          Trading Symbol: "GROBTEA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRPLTD",
          Token: "6549",
          Trading Symbol: "GRPLTD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GRSE",
          Token: "5475",
          Trading Symbol: "GRSE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GRWRHITECH",
          Token: "7982",
          Trading Symbol: "GRWRHITECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GS020124C",
          Token: "3982",
          Trading Symbol: "GS020124C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS020125C",
          Token: "4108",
          Trading Symbol: "GS020125C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS020126C",
          Token: "4332",
          Trading Symbol: "GS020126C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS020723C",
          Token: "3913",
          Trading Symbol: "GS020723C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS020724C",
          Token: "4039",
          Trading Symbol: "GS020724C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS020725C",
          Token: "4175",
          Trading Symbol: "GS020725C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS070624C",
          Token: "4016",
          Trading Symbol: "GS070624C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS070625C",
          Token: "4138",
          Trading Symbol: "GS070625C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS070626C",
          Token: "4387",
          Trading Symbol: "GS070626C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS071223C",
          Token: "3951",
          Trading Symbol: "GS071223C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS071224C",
          Token: "4085",
          Trading Symbol: "GS071224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS071225C",
          Token: "4250",
          Trading Symbol: "GS071225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS090324C",
          Token: "3995",
          Trading Symbol: "GS090324C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS090325C",
          Token: "4125",
          Trading Symbol: "GS090325C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS090326C",
          Token: "4364",
          Trading Symbol: "GS090326C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS090923C",
          Token: "3921",
          Trading Symbol: "GS090923C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS090924C",
          Token: "4054",
          Trading Symbol: "GS090924C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS090925C",
          Token: "4183",
          Trading Symbol: "GS090925C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100224C",
          Token: "3988",
          Trading Symbol: "GS100224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100225C",
          Token: "4117",
          Trading Symbol: "GS100225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100226C",
          Token: "4341",
          Trading Symbol: "GS100226C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100424C",
          Token: "4006",
          Trading Symbol: "GS100424C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100425C",
          Token: "4134",
          Trading Symbol: "GS100425C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100426C",
          Token: "4381",
          Trading Symbol: "GS100426C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100524C",
          Token: "4011",
          Trading Symbol: "GS100524C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100525C",
          Token: "4137",
          Trading Symbol: "GS100525C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100526C",
          Token: "4384",
          Trading Symbol: "GS100526C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100823C",
          Token: "3916",
          Trading Symbol: "GS100823C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100824C",
          Token: "4042",
          Trading Symbol: "GS100824C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS100825C",
          Token: "4178",
          Trading Symbol: "GS100825C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS101023C",
          Token: "3939",
          Trading Symbol: "GS101023C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS101024C",
          Token: "4065",
          Trading Symbol: "GS101024C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS101025C",
          Token: "4215",
          Trading Symbol: "GS101025C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS101123C",
          Token: "3946",
          Trading Symbol: "GS101123C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS101124C",
          Token: "4072",
          Trading Symbol: "GS101124C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS101125C",
          Token: "4246",
          Trading Symbol: "GS101125C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS120624C",
          Token: "4021",
          Trading Symbol: "GS120624C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS120625C",
          Token: "4149",
          Trading Symbol: "GS120625C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS120626C",
          Token: "4389",
          Trading Symbol: "GS120626C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS121223C",
          Token: "3957",
          Trading Symbol: "GS121223C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS121224C",
          Token: "4093",
          Trading Symbol: "GS121224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS121225C",
          Token: "4254",
          Trading Symbol: "GS121225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150324C",
          Token: "3996",
          Trading Symbol: "GS150324C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150325C",
          Token: "4128",
          Trading Symbol: "GS150325C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150326C",
          Token: "4366",
          Trading Symbol: "GS150326C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150623C",
          Token: "3905",
          Trading Symbol: "GS150623C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150624C",
          Token: "4022",
          Trading Symbol: "GS150624C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150625C",
          Token: "4154",
          Trading Symbol: "GS150625C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150626C",
          Token: "4393",
          Trading Symbol: "GS150626C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150923C",
          Token: "3922",
          Trading Symbol: "GS150923C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150924C",
          Token: "4057",
          Trading Symbol: "GS150924C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS150925C",
          Token: "4202",
          Trading Symbol: "GS150925C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS151223C",
          Token: "3964",
          Trading Symbol: "GS151223C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS151224C",
          Token: "4094",
          Trading Symbol: "GS151224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS151225C",
          Token: "4314",
          Trading Symbol: "GS151225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS151226C",
          Token: "4409",
          Trading Symbol: "GS151226C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS170623C",
          Token: "3907",
          Trading Symbol: "GS170623C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS170624C",
          Token: "4025",
          Trading Symbol: "GS170624C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS170625C",
          Token: "4158",
          Trading Symbol: "GS170625C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS171223C",
          Token: "3966",
          Trading Symbol: "GS171223C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS171224C",
          Token: "4095",
          Trading Symbol: "GS171224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS171225C",
          Token: "4323",
          Trading Symbol: "GS171225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS200324C",
          Token: "4005",
          Trading Symbol: "GS200324C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS200325C",
          Token: "4131",
          Trading Symbol: "GS200325C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS200326C",
          Token: "4368",
          Trading Symbol: "GS200326C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS200923C",
          Token: "3928",
          Trading Symbol: "GS200923C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS200924C",
          Token: "4062",
          Trading Symbol: "GS200924C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS200925C",
          Token: "4205",
          Trading Symbol: "GS200925C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220224C",
          Token: "3989",
          Trading Symbol: "GS220224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220225C",
          Token: "4124",
          Trading Symbol: "GS220225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220226C",
          Token: "4343",
          Trading Symbol: "GS220226C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220230C",
          Token: "4423",
          Trading Symbol: "GS220230C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220231C",
          Token: "4429",
          Trading Symbol: "GS220231C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220236C",
          Token: "4432",
          Trading Symbol: "GS220236C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220240C",
          Token: "4520",
          Trading Symbol: "GS220240C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220250C",
          Token: "4552",
          Trading Symbol: "GS220250C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220261C",
          Token: "4555",
          Trading Symbol: "GS220261C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220261P",
          Token: "4395",
          Trading Symbol: "GS220261P-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220823C",
          Token: "3919",
          Trading Symbol: "GS220823C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220824C",
          Token: "4044",
          Trading Symbol: "GS220824C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220825C",
          Token: "4180",
          Trading Symbol: "GS220825C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220830C",
          Token: "4427",
          Trading Symbol: "GS220830C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220831C",
          Token: "4431",
          Trading Symbol: "GS220831C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220836C",
          Token: "4494",
          Trading Symbol: "GS220836C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220840C",
          Token: "4546",
          Trading Symbol: "GS220840C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS220850C",
          Token: "4553",
          Trading Symbol: "GS220850C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS230623C",
          Token: "3909",
          Trading Symbol: "GS230623C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS230624C",
          Token: "4027",
          Trading Symbol: "GS230624C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS230625C",
          Token: "4161",
          Trading Symbol: "GS230625C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS231223C",
          Token: "3967",
          Trading Symbol: "GS231223C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS231224C",
          Token: "4098",
          Trading Symbol: "GS231224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS231225C",
          Token: "4325",
          Trading Symbol: "GS231225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS260424C",
          Token: "4009",
          Trading Symbol: "GS260424C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS260425C",
          Token: "4135",
          Trading Symbol: "GS260425C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS260426C",
          Token: "4382",
          Trading Symbol: "GS260426C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS261023C",
          Token: "3944",
          Trading Symbol: "GS261023C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS261024C",
          Token: "4068",
          Trading Symbol: "GS261024C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS261025C",
          Token: "4222",
          Trading Symbol: "GS261025C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS300623C",
          Token: "3910",
          Trading Symbol: "GS300623C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS300624C",
          Token: "4029",
          Trading Symbol: "GS300624C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS300625C",
          Token: "4174",
          Trading Symbol: "GS300625C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS311223C",
          Token: "3976",
          Trading Symbol: "GS311223C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS311224C",
          Token: "4099",
          Trading Symbol: "GS311224C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GS311225C",
          Token: "4330",
          Trading Symbol: "GS311225C-GS"
        },
        {
          Exch: "NSE",
          Symbol: "GSFC",
          Token: "1247",
          Trading Symbol: "GSFC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GSLSU",
          Token: "14599",
          Trading Symbol: "GSLSU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GSPL",
          Token: "13197",
          Trading Symbol: "GSPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GSS",
          Token: "15347",
          Trading Symbol: "GSS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GSTL",
          Token: "9764",
          Trading Symbol: "GSTL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "GTL",
          Token: "1162",
          Trading Symbol: "GTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GTLINFRA",
          Token: "13745",
          Trading Symbol: "GTLINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GTPL",
          Token: "21195",
          Trading Symbol: "GTPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GUFICBIO",
          Token: "11606",
          Trading Symbol: "GUFICBIO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GUJALKALI",
          Token: "1267",
          Trading Symbol: "GUJALKALI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GUJAPOLLO",
          Token: "14677",
          Trading Symbol: "GUJAPOLLO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GUJGASLTD",
          Token: "10599",
          Trading Symbol: "GUJGASLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GUJRAFFIA",
          Token: "10097",
          Trading Symbol: "GUJRAFFIA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "GULFOILLUB",
          Token: "4391",
          Trading Symbol: "GULFOILLUB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GULFPETRO",
          Token: "11581",
          Trading Symbol: "GULFPETRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GULPOLY",
          Token: "6286",
          Trading Symbol: "GULPOLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "GVKPIL",
          Token: "13226",
          Trading Symbol: "GVKPIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HAL",
          Token: "2303",
          Trading Symbol: "HAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HAPPSTMNDS",
          Token: "48",
          Trading Symbol: "HAPPSTMNDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HARDWYN",
          Token: "8962",
          Trading Symbol: "HARDWYN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HARIOMPIPE",
          Token: "8968",
          Trading Symbol: "HARIOMPIPE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HARRMALAYA",
          Token: "1313",
          Trading Symbol: "HARRMALAYA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HARSHA",
          Token: "11162",
          Trading Symbol: "HARSHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HATHWAY",
          Token: "18154",
          Trading Symbol: "HATHWAY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HATSUN",
          Token: "3892",
          Trading Symbol: "HATSUN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HAVELLS",
          Token: "9819",
          Trading Symbol: "HAVELLS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HAVISHA",
          Token: "8417",
          Trading Symbol: "HAVISHA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "HBANKETF",
          Token: "22433",
          Trading Symbol: "HBANKETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HBLPOWER",
          Token: "13966",
          Trading Symbol: "HBLPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HBSL",
          Token: "4116",
          Trading Symbol: "HBSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HCC",
          Token: "1375",
          Trading Symbol: "HCC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HCG",
          Token: "15555",
          Trading Symbol: "HCG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HCL-INSYS",
          Token: "1327",
          Trading Symbol: "HCL-INSYS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HCLTECH",
          Token: "7229",
          Trading Symbol: "HCLTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFC",
          Token: "1330",
          Trading Symbol: "HDFC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFC",
          Token: "22326",
          Trading Symbol: "HDFC-W3"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCAMC",
          Token: "4244",
          Trading Symbol: "HDFCAMC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCBANK",
          Token: "1333",
          Trading Symbol: "HDFCBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCBSE500",
          Token: "14230",
          Trading Symbol: "HDFCBSE500-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCGROWTH",
          Token: "11241",
          Trading Symbol: "HDFCGROWTH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCLIFE",
          Token: "467",
          Trading Symbol: "HDFCLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCLOWVOL",
          Token: "11547",
          Trading Symbol: "HDFCLOWVOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCMFGETF",
          Token: "19543",
          Trading Symbol: "HDFCMFGETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCMID150",
          Token: "14236",
          Trading Symbol: "HDFCMID150-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCMOMENT",
          Token: "11538",
          Trading Symbol: "HDFCMOMENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCNEXT50",
          Token: "10619",
          Trading Symbol: "HDFCNEXT50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCNIF100",
          Token: "10633",
          Trading Symbol: "HDFCNIF100-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCNIFETF",
          Token: "11591",
          Trading Symbol: "HDFCNIFETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCNIFIT",
          Token: "12101",
          Trading Symbol: "HDFCNIFIT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCPVTBAN",
          Token: "12108",
          Trading Symbol: "HDFCPVTBAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCQUAL",
          Token: "11255",
          Trading Symbol: "HDFCQUAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCSENETF",
          Token: "11593",
          Trading Symbol: "HDFCSENETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCSILVER",
          Token: "10876",
          Trading Symbol: "HDFCSILVER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCSML250",
          Token: "14233",
          Trading Symbol: "HDFCSML250-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HDFCVALUE",
          Token: "11260",
          Trading Symbol: "HDFCVALUE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEADSUP",
          Token: "19205",
          Trading Symbol: "HEADSUP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEALTHY",
          Token: "6297",
          Trading Symbol: "HEALTHY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HECPROJECT",
          Token: "7425",
          Trading Symbol: "HECPROJECT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEG",
          Token: "1336",
          Trading Symbol: "HEG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEIDELBERG",
          Token: "2316",
          Trading Symbol: "HEIDELBERG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEMIPROP",
          Token: "701",
          Trading Symbol: "HEMIPROP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HERANBA",
          Token: "2614",
          Trading Symbol: "HERANBA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HERCULES",
          Token: "15288",
          Trading Symbol: "HERCULES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HERITGFOOD",
          Token: "4598",
          Trading Symbol: "HERITGFOOD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEROMOTOCO",
          Token: "1348",
          Trading Symbol: "HEROMOTOCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HESTERBIO",
          Token: "7048",
          Trading Symbol: "HESTERBIO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEUBACHIND",
          Token: "715",
          Trading Symbol: "HEUBACHIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HEXATRADEX",
          Token: "27008",
          Trading Symbol: "HEXATRADEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HFCL",
          Token: "21951",
          Trading Symbol: "HFCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HGINFRA",
          Token: "1672",
          Trading Symbol: "HGINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HGS",
          Token: "14712",
          Trading Symbol: "HGS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HIGHWAYS",
          Token: "10757",
          Trading Symbol: "HIGHWAYS-IV"
        },
        {
          Exch: "NSE",
          Symbol: "HIKAL",
          Token: "9668",
          Trading Symbol: "HIKAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HIL",
          Token: "1455",
          Trading Symbol: "HIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HILTON",
          Token: "14631",
          Trading Symbol: "HILTON-BE"
        },
        {
          Exch: "NSE",
          Symbol: "HIMATSEIDE",
          Token: "1360",
          Trading Symbol: "HIMATSEIDE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDALCO",
          Token: "1363",
          Trading Symbol: "HINDALCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDCOMPOS",
          Token: "1372",
          Trading Symbol: "HINDCOMPOS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDCON",
          Token: "4920",
          Trading Symbol: "HINDCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDCOPPER",
          Token: "17939",
          Trading Symbol: "HINDCOPPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDMOTORS",
          Token: "21676",
          Trading Symbol: "HINDMOTORS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDNATGLS",
          Token: "17050",
          Trading Symbol: "HINDNATGLS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "HINDOILEXP",
          Token: "1403",
          Trading Symbol: "HINDOILEXP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDPETRO",
          Token: "1406",
          Trading Symbol: "HINDPETRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDUNILVR",
          Token: "1394",
          Trading Symbol: "HINDUNILVR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDWAREAP",
          Token: "15883",
          Trading Symbol: "HINDWAREAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HINDZINC",
          Token: "1424",
          Trading Symbol: "HINDZINC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HIRECT",
          Token: "13894",
          Trading Symbol: "HIRECT-BE"
        },
        {
          Exch: "NSE",
          Symbol: "HISARMETAL",
          Token: "19322",
          Trading Symbol: "HISARMETAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HITECH",
          Token: "2868",
          Trading Symbol: "HITECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HITECHCORP",
          Token: "15161",
          Trading Symbol: "HITECHCORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HITECHGEAR",
          Token: "4433",
          Trading Symbol: "HITECHGEAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HLEGLAS",
          Token: "2289",
          Trading Symbol: "HLEGLAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HLVLTD",
          Token: "1448",
          Trading Symbol: "HLVLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HMT",
          Token: "19698",
          Trading Symbol: "HMT-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "HMVL",
          Token: "19211",
          Trading Symbol: "HMVL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HNDFDS",
          Token: "12173",
          Trading Symbol: "HNDFDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HNGSNGBEES",
          Token: "18284",
          Trading Symbol: "HNGSNGBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HOMEFIRST",
          Token: "2056",
          Trading Symbol: "HOMEFIRST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HOMESFY",
          Token: "13526",
          Trading Symbol: "HOMESFY-SM"
        },
        {
          Exch: "NSE",
          Symbol: "HONAUT",
          Token: "3417",
          Trading Symbol: "HONAUT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HONDAPOWER",
          Token: "3138",
          Trading Symbol: "HONDAPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HOVS",
          Token: "13592",
          Trading Symbol: "HOVS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HPAL",
          Token: "7376",
          Trading Symbol: "HPAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HPIL",
          Token: "11796",
          Trading Symbol: "HPIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HPL",
          Token: "18679",
          Trading Symbol: "HPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HSCL",
          Token: "14334",
          Trading Symbol: "HSCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HTMEDIA",
          Token: "11979",
          Trading Symbol: "HTMEDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HUBTOWN",
          Token: "14207",
          Trading Symbol: "HUBTOWN-BE"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "20825",
          Trading Symbol: "HUDCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "31240",
          Trading Symbol: "HUDCO-N2"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "29312",
          Trading Symbol: "HUDCO-N5"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "29650",
          Trading Symbol: "HUDCO-N7"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "19928",
          Trading Symbol: "HUDCO-N8"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "19930",
          Trading Symbol: "HUDCO-N9"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "19962",
          Trading Symbol: "HUDCO-NA"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "19964",
          Trading Symbol: "HUDCO-NB"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "19966",
          Trading Symbol: "HUDCO-NC"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "19968",
          Trading Symbol: "HUDCO-ND"
        },
        {
          Exch: "NSE",
          Symbol: "HUDCO",
          Token: "19970",
          Trading Symbol: "HUDCO-NE"
        },
        {
          Exch: "NSE",
          Symbol: "HUHTAMAKI",
          Token: "2562",
          Trading Symbol: "HUHTAMAKI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "HYBRIDFIN",
          Token: "12814",
          Trading Symbol: "HYBRIDFIN-BE"
        },
        {
          Exch: "NSE",
          Symbol: "IBMFNIFTY",
          Token: "9937",
          Trading Symbol: "IBMFNIFTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IBREALEST",
          Token: "14450",
          Trading Symbol: "IBREALEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "4909",
          Trading Symbol: "IBUCCREDIT-N7"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "4912",
          Trading Symbol: "IBUCCREDIT-N8"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "4914",
          Trading Symbol: "IBUCCREDIT-N9"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "4926",
          Trading Symbol: "IBUCCREDIT-NA"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "4930",
          Trading Symbol: "IBUCCREDIT-NB"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "4936",
          Trading Symbol: "IBUCCREDIT-NC"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "4942",
          Trading Symbol: "IBUCCREDIT-ND"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14005",
          Trading Symbol: "IBUCCREDIT-NE"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14010",
          Trading Symbol: "IBUCCREDIT-NF"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14017",
          Trading Symbol: "IBUCCREDIT-NG"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14021",
          Trading Symbol: "IBUCCREDIT-NH"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14026",
          Trading Symbol: "IBUCCREDIT-NI"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14028",
          Trading Symbol: "IBUCCREDIT-NJ"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14030",
          Trading Symbol: "IBUCCREDIT-NK"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14032",
          Trading Symbol: "IBUCCREDIT-NL"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14034",
          Trading Symbol: "IBUCCREDIT-NM"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14036",
          Trading Symbol: "IBUCCREDIT-NN"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "14038",
          Trading Symbol: "IBUCCREDIT-NO"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15205",
          Trading Symbol: "IBUCCREDIT-NP"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15210",
          Trading Symbol: "IBUCCREDIT-NQ"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15215",
          Trading Symbol: "IBUCCREDIT-NR"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15220",
          Trading Symbol: "IBUCCREDIT-NS"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15231",
          Trading Symbol: "IBUCCREDIT-NT"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15235",
          Trading Symbol: "IBUCCREDIT-NU"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15240",
          Trading Symbol: "IBUCCREDIT-NV"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15245",
          Trading Symbol: "IBUCCREDIT-NW"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15249",
          Trading Symbol: "IBUCCREDIT-NX"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15251",
          Trading Symbol: "IBUCCREDIT-NY"
        },
        {
          Exch: "NSE",
          Symbol: "IBUCCREDIT",
          Token: "15253",
          Trading Symbol: "IBUCCREDIT-NZ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14673",
          Trading Symbol: "IBULHSGFIN-AA"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14678",
          Trading Symbol: "IBULHSGFIN-AB"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14683",
          Trading Symbol: "IBULHSGFIN-AC"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14688",
          Trading Symbol: "IBULHSGFIN-AD"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14692",
          Trading Symbol: "IBULHSGFIN-AG"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14720",
          Trading Symbol: "IBULHSGFIN-AH"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14721",
          Trading Symbol: "IBULHSGFIN-AI"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14696",
          Trading Symbol: "IBULHSGFIN-AJ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14704",
          Trading Symbol: "IBULHSGFIN-AK"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14710",
          Trading Symbol: "IBULHSGFIN-AL"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14714",
          Trading Symbol: "IBULHSGFIN-AM"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "14718",
          Trading Symbol: "IBULHSGFIN-AN"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "30125",
          Trading Symbol: "IBULHSGFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13497",
          Trading Symbol: "IBULHSGFIN-N0"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18624",
          Trading Symbol: "IBULHSGFIN-N8"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18626",
          Trading Symbol: "IBULHSGFIN-N9"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18628",
          Trading Symbol: "IBULHSGFIN-NA"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18630",
          Trading Symbol: "IBULHSGFIN-NB"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18632",
          Trading Symbol: "IBULHSGFIN-NC"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18634",
          Trading Symbol: "IBULHSGFIN-ND"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18636",
          Trading Symbol: "IBULHSGFIN-NE"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "18638",
          Trading Symbol: "IBULHSGFIN-NF"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5815",
          Trading Symbol: "IBULHSGFIN-NG"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5817",
          Trading Symbol: "IBULHSGFIN-NH"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5819",
          Trading Symbol: "IBULHSGFIN-NI"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5821",
          Trading Symbol: "IBULHSGFIN-NJ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5823",
          Trading Symbol: "IBULHSGFIN-NK"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5825",
          Trading Symbol: "IBULHSGFIN-NL"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5827",
          Trading Symbol: "IBULHSGFIN-NM"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5829",
          Trading Symbol: "IBULHSGFIN-NN"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5842",
          Trading Symbol: "IBULHSGFIN-NO"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5844",
          Trading Symbol: "IBULHSGFIN-NP"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5846",
          Trading Symbol: "IBULHSGFIN-NQ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5850",
          Trading Symbol: "IBULHSGFIN-NR"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5855",
          Trading Symbol: "IBULHSGFIN-NS"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5857",
          Trading Symbol: "IBULHSGFIN-NT"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5859",
          Trading Symbol: "IBULHSGFIN-NU"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5861",
          Trading Symbol: "IBULHSGFIN-NV"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "5863",
          Trading Symbol: "IBULHSGFIN-NW"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7729",
          Trading Symbol: "IBULHSGFIN-NX"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7731",
          Trading Symbol: "IBULHSGFIN-NY"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7734",
          Trading Symbol: "IBULHSGFIN-NZ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7740",
          Trading Symbol: "IBULHSGFIN-Y1"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7744",
          Trading Symbol: "IBULHSGFIN-Y2"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7749",
          Trading Symbol: "IBULHSGFIN-Y3"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7752",
          Trading Symbol: "IBULHSGFIN-Y4"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7755",
          Trading Symbol: "IBULHSGFIN-Y5"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7757",
          Trading Symbol: "IBULHSGFIN-Y6"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7761",
          Trading Symbol: "IBULHSGFIN-Y7"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7763",
          Trading Symbol: "IBULHSGFIN-Y8"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7765",
          Trading Symbol: "IBULHSGFIN-Y9"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7769",
          Trading Symbol: "IBULHSGFIN-YA"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7772",
          Trading Symbol: "IBULHSGFIN-YB"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "7777",
          Trading Symbol: "IBULHSGFIN-YC"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9123",
          Trading Symbol: "IBULHSGFIN-YD"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9150",
          Trading Symbol: "IBULHSGFIN-YG"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9153",
          Trading Symbol: "IBULHSGFIN-YH"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9163",
          Trading Symbol: "IBULHSGFIN-YI"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9184",
          Trading Symbol: "IBULHSGFIN-YJ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9191",
          Trading Symbol: "IBULHSGFIN-YK"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9195",
          Trading Symbol: "IBULHSGFIN-YL"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9209",
          Trading Symbol: "IBULHSGFIN-YM"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9211",
          Trading Symbol: "IBULHSGFIN-YN"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9218",
          Trading Symbol: "IBULHSGFIN-YO"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9221",
          Trading Symbol: "IBULHSGFIN-YP"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9255",
          Trading Symbol: "IBULHSGFIN-YQ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9262",
          Trading Symbol: "IBULHSGFIN-YR"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9273",
          Trading Symbol: "IBULHSGFIN-YS"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "9277",
          Trading Symbol: "IBULHSGFIN-YT"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11310",
          Trading Symbol: "IBULHSGFIN-YU"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11316",
          Trading Symbol: "IBULHSGFIN-YV"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11322",
          Trading Symbol: "IBULHSGFIN-YW"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11324",
          Trading Symbol: "IBULHSGFIN-YX"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11328",
          Trading Symbol: "IBULHSGFIN-YY"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11333",
          Trading Symbol: "IBULHSGFIN-YZ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11335",
          Trading Symbol: "IBULHSGFIN-Z1"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11337",
          Trading Symbol: "IBULHSGFIN-Z2"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11339",
          Trading Symbol: "IBULHSGFIN-Z3"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11342",
          Trading Symbol: "IBULHSGFIN-Z4"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11352",
          Trading Symbol: "IBULHSGFIN-Z5"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11356",
          Trading Symbol: "IBULHSGFIN-Z6"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11361",
          Trading Symbol: "IBULHSGFIN-Z7"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11365",
          Trading Symbol: "IBULHSGFIN-Z8"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11368",
          Trading Symbol: "IBULHSGFIN-Z9"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11814",
          Trading Symbol: "IBULHSGFIN-ZA"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11818",
          Trading Symbol: "IBULHSGFIN-ZB"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11823",
          Trading Symbol: "IBULHSGFIN-ZC"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11825",
          Trading Symbol: "IBULHSGFIN-ZD"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11827",
          Trading Symbol: "IBULHSGFIN-ZE"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11830",
          Trading Symbol: "IBULHSGFIN-ZF"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11833",
          Trading Symbol: "IBULHSGFIN-ZG"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11835",
          Trading Symbol: "IBULHSGFIN-ZH"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11837",
          Trading Symbol: "IBULHSGFIN-ZI"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11843",
          Trading Symbol: "IBULHSGFIN-ZJ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11846",
          Trading Symbol: "IBULHSGFIN-ZK"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11854",
          Trading Symbol: "IBULHSGFIN-ZL"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11857",
          Trading Symbol: "IBULHSGFIN-ZM"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "11861",
          Trading Symbol: "IBULHSGFIN-ZN"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13435",
          Trading Symbol: "IBULHSGFIN-ZO"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13438",
          Trading Symbol: "IBULHSGFIN-ZP"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13443",
          Trading Symbol: "IBULHSGFIN-ZQ"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13448",
          Trading Symbol: "IBULHSGFIN-ZR"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13453",
          Trading Symbol: "IBULHSGFIN-ZS"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13460",
          Trading Symbol: "IBULHSGFIN-ZT"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13465",
          Trading Symbol: "IBULHSGFIN-ZU"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13477",
          Trading Symbol: "IBULHSGFIN-ZV"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13482",
          Trading Symbol: "IBULHSGFIN-ZW"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13484",
          Trading Symbol: "IBULHSGFIN-ZX"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13487",
          Trading Symbol: "IBULHSGFIN-ZY"
        },
        {
          Exch: "NSE",
          Symbol: "IBULHSGFIN",
          Token: "13492",
          Trading Symbol: "IBULHSGFIN-ZZ"
        },
        {
          Exch: "NSE",
          Symbol: "ICDSLTD",
          Token: "9610",
          Trading Symbol: "ICDSLTD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ICEMAKE",
          Token: "489",
          Trading Symbol: "ICEMAKE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICI",
          Token: "10201",
          Trading Symbol: "ICICI-M1"
        },
        {
          Exch: "NSE",
          Symbol: "ICICI0402",
          Token: "10716",
          Trading Symbol: "ICICI0402-NC"
        },
        {
          Exch: "NSE",
          Symbol: "ICICI10GS",
          Token: "13143",
          Trading Symbol: "ICICI10GS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICI500",
          Token: "3001",
          Trading Symbol: "ICICI500-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICI5GSEC",
          Token: "8342",
          Trading Symbol: "ICICI5GSEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIALPLV",
          Token: "22344",
          Trading Symbol: "ICICIALPLV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIAUTO",
          Token: "7844",
          Trading Symbol: "ICICIAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIB22",
          Token: "522",
          Trading Symbol: "ICICIB22-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIBANK",
          Token: "4963",
          Trading Symbol: "ICICIBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIBANKN",
          Token: "11037",
          Trading Symbol: "ICICIBANKN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIBANKP",
          Token: "11386",
          Trading Symbol: "ICICIBANKP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICICOMMO",
          Token: "13198",
          Trading Symbol: "ICICICOMMO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICICONSU",
          Token: "6446",
          Trading Symbol: "ICICICONSU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIFIN",
          Token: "12578",
          Trading Symbol: "ICICIFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIFMCG",
          Token: "5306",
          Trading Symbol: "ICICIFMCG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIGI",
          Token: "21770",
          Trading Symbol: "ICICIGI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIGOLD",
          Token: "19679",
          Trading Symbol: "ICICIGOLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIINFRA",
          Token: "10723",
          Trading Symbol: "ICICIINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICILIQ",
          Token: "4838",
          Trading Symbol: "ICICILIQ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICILOVOL",
          Token: "21254",
          Trading Symbol: "ICICILOVOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIM150",
          Token: "17152",
          Trading Symbol: "ICICIM150-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIMCAP",
          Token: "17702",
          Trading Symbol: "ICICIMCAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIMOM30",
          Token: "10585",
          Trading Symbol: "ICICIMOM30-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICINF100",
          Token: "30392",
          Trading Symbol: "ICICINF100-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICINIFTY",
          Token: "29553",
          Trading Symbol: "ICICINIFTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICINV20",
          Token: "17475",
          Trading Symbol: "ICICINV20-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICINXT50",
          Token: "4529",
          Trading Symbol: "ICICINXT50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIPHARM",
          Token: "3626",
          Trading Symbol: "ICICIPHARM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICIPRULI",
          Token: "18652",
          Trading Symbol: "ICICIPRULI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICISENSX",
          Token: "4378",
          Trading Symbol: "ICICISENSX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICISILVE",
          Token: "7942",
          Trading Symbol: "ICICISILVE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICICITECH",
          Token: "22365",
          Trading Symbol: "ICICITECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICIL",
          Token: "11987",
          Trading Symbol: "ICIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ICRA",
          Token: "14523",
          Trading Symbol: "ICRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IDBI",
          Token: "1476",
          Trading Symbol: "IDBI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IDBIGOLD",
          Token: "25640",
          Trading Symbol: "IDBIGOLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IDEA",
          Token: "14366",
          Trading Symbol: "IDEA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IDFC",
          Token: "11957",
          Trading Symbol: "IDFC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IDFCFIRSTB",
          Token: "11184",
          Trading Symbol: "IDFCFIRSTB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IDFNIFTYET",
          Token: "18783",
          Trading Symbol: "IDFNIFTYET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IEL",
          Token: "13307",
          Trading Symbol: "IEL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "IEX",
          Token: "220",
          Trading Symbol: "IEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IFBAGRO",
          Token: "1482",
          Trading Symbol: "IFBAGRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IFBIND",
          Token: "1485",
          Trading Symbol: "IFBIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IFCI",
          Token: "1491",
          Trading Symbol: "IFCI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IFCI",
          Token: "5759",
          Trading Symbol: "IFCI-NH"
        },
        {
          Exch: "NSE",
          Symbol: "IFCI",
          Token: "5761",
          Trading Symbol: "IFCI-NI"
        },
        {
          Exch: "NSE",
          Symbol: "IFCI",
          Token: "6646",
          Trading Symbol: "IFCI-NL"
        },
        {
          Exch: "NSE",
          Symbol: "IFCI",
          Token: "6652",
          Trading Symbol: "IFCI-NM"
        },
        {
          Exch: "NSE",
          Symbol: "IFGLEXPOR",
          Token: "436",
          Trading Symbol: "IFGLEXPOR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IGARASHI",
          Token: "634",
          Trading Symbol: "IGARASHI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IGL",
          Token: "11262",
          Trading Symbol: "IGL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IGPL",
          Token: "14086",
          Trading Symbol: "IGPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IIFCL",
          Token: "20052",
          Trading Symbol: "IIFCL-N1"
        },
        {
          Exch: "NSE",
          Symbol: "IIFCL",
          Token: "20054",
          Trading Symbol: "IIFCL-N2"
        },
        {
          Exch: "NSE",
          Symbol: "IIFCL",
          Token: "20056",
          Trading Symbol: "IIFCL-N3"
        },
        {
          Exch: "NSE",
          Symbol: "IIFCL",
          Token: "20058",
          Trading Symbol: "IIFCL-N4"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "11809",
          Trading Symbol: "IIFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "19045",
          Trading Symbol: "IIFL-N6"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "19047",
          Trading Symbol: "IIFL-N7"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "19067",
          Trading Symbol: "IIFL-NC"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "19069",
          Trading Symbol: "IIFL-ND"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "2871",
          Trading Symbol: "IIFL-NE"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "2877",
          Trading Symbol: "IIFL-NF"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "2883",
          Trading Symbol: "IIFL-NG"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "6176",
          Trading Symbol: "IIFL-NH"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "6178",
          Trading Symbol: "IIFL-NI"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "6189",
          Trading Symbol: "IIFL-NJ"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "6195",
          Trading Symbol: "IIFL-NK"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "6197",
          Trading Symbol: "IIFL-NL"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "6200",
          Trading Symbol: "IIFL-NM"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "6207",
          Trading Symbol: "IIFL-NN"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "13833",
          Trading Symbol: "IIFL-NO"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "13840",
          Trading Symbol: "IIFL-NP"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "13845",
          Trading Symbol: "IIFL-NQ"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "13850",
          Trading Symbol: "IIFL-NR"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "13852",
          Trading Symbol: "IIFL-NS"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "13854",
          Trading Symbol: "IIFL-NT"
        },
        {
          Exch: "NSE",
          Symbol: "IIFL",
          Token: "13858",
          Trading Symbol: "IIFL-NU"
        },
        {
          Exch: "NSE",
          Symbol: "IIFLSEC",
          Token: "13072",
          Trading Symbol: "IIFLSEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "5212",
          Trading Symbol: "IIHFL-N4"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "5214",
          Trading Symbol: "IIHFL-N5"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "5217",
          Trading Symbol: "IIHFL-N6"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7640",
          Trading Symbol: "IIHFL-N7"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7645",
          Trading Symbol: "IIHFL-N8"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7648",
          Trading Symbol: "IIHFL-N9"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7662",
          Trading Symbol: "IIHFL-NA"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7666",
          Trading Symbol: "IIHFL-NB"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7668",
          Trading Symbol: "IIHFL-NC"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7671",
          Trading Symbol: "IIHFL-ND"
        },
        {
          Exch: "NSE",
          Symbol: "IIHFL",
          Token: "7674",
          Trading Symbol: "IIHFL-NE"
        },
        {
          Exch: "NSE",
          Symbol: "IITL",
          Token: "19525",
          Trading Symbol: "IITL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IL&FSENGG",
          Token: "9380",
          Trading Symbol: "IL&FSENGG-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "IL&FSTRANS",
          Token: "9381",
          Trading Symbol: "IL&FSTRANS-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "IMAGICAA",
          Token: "7672",
          Trading Symbol: "IMAGICAA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IMC1",
          Token: "14214",
          Trading Symbol: "IMC1-N0"
        },
        {
          Exch: "NSE",
          Symbol: "IMC1",
          Token: "14219",
          Trading Symbol: "IMC1-N1"
        },
        {
          Exch: "NSE",
          Symbol: "IMC1",
          Token: "14224",
          Trading Symbol: "IMC1-N2"
        },
        {
          Exch: "NSE",
          Symbol: "IMC1",
          Token: "14228",
          Trading Symbol: "IMC1-N3"
        },
        {
          Exch: "NSE",
          Symbol: "IMFA",
          Token: "19235",
          Trading Symbol: "IMFA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IMPAL",
          Token: "12009",
          Trading Symbol: "IMPAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IMPEXFERRO",
          Token: "11684",
          Trading Symbol: "IMPEXFERRO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "INCREDFIN",
          Token: "11481",
          Trading Symbol: "INCREDFIN-N2"
        },
        {
          Exch: "NSE",
          Symbol: "INCREDFIN",
          Token: "11485",
          Trading Symbol: "INCREDFIN-N3"
        },
        {
          Exch: "NSE",
          Symbol: "INCREDFIN",
          Token: "14040",
          Trading Symbol: "INCREDFIN-N4"
        },
        {
          Exch: "NSE",
          Symbol: "INCREDFIN",
          Token: "14042",
          Trading Symbol: "INCREDFIN-N5"
        },
        {
          Exch: "NSE",
          Symbol: "INCREDFIN",
          Token: "14045",
          Trading Symbol: "INCREDFIN-N6"
        },
        {
          Exch: "NSE",
          Symbol: "INCREDFIN",
          Token: "14049",
          Trading Symbol: "INCREDFIN-N7"
        },
        {
          Exch: "NSE",
          Symbol: "INCREDIBLE",
          Token: "17507",
          Trading Symbol: "INCREDIBLE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDBANK",
          Token: "16933",
          Trading Symbol: "INDBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDHOTEL",
          Token: "1512",
          Trading Symbol: "INDHOTEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIACEM",
          Token: "1515",
          Trading Symbol: "INDIACEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIAGLYCO",
          Token: "1521",
          Trading Symbol: "INDIAGLYCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIAMART",
          Token: "10726",
          Trading Symbol: "INDIAMART-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIANB",
          Token: "14309",
          Trading Symbol: "INDIANB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIANCARD",
          Token: "4422",
          Trading Symbol: "INDIANCARD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIANHUME",
          Token: "1530",
          Trading Symbol: "INDIANHUME-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGO",
          Token: "11195",
          Trading Symbol: "INDIGO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGOPNTS",
          Token: "2048",
          Trading Symbol: "INDIGOPNTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "20988",
          Trading Symbol: "INDIGRID-IV"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3418",
          Trading Symbol: "INDIGRID-NA"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3420",
          Trading Symbol: "INDIGRID-NB"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3422",
          Trading Symbol: "INDIGRID-NC"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3425",
          Trading Symbol: "INDIGRID-ND"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3428",
          Trading Symbol: "INDIGRID-NE"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3433",
          Trading Symbol: "INDIGRID-NF"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3442",
          Trading Symbol: "INDIGRID-NG"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3451",
          Trading Symbol: "INDIGRID-NH"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3457",
          Trading Symbol: "INDIGRID-NI"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3464",
          Trading Symbol: "INDIGRID-NJ"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3470",
          Trading Symbol: "INDIGRID-NK"
        },
        {
          Exch: "NSE",
          Symbol: "INDIGRID",
          Token: "3476",
          Trading Symbol: "INDIGRID-NL"
        },
        {
          Exch: "NSE",
          Symbol: "INDINFR",
          Token: "2892",
          Trading Symbol: "INDINFR-IV"
        },
        {
          Exch: "NSE",
          Symbol: "INDLMETER",
          Token: "11620",
          Trading Symbol: "INDLMETER-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "INDNIPPON",
          Token: "4747",
          Trading Symbol: "INDNIPPON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDOAMIN",
          Token: "9116",
          Trading Symbol: "INDOAMIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDOBORAX",
          Token: "8614",
          Trading Symbol: "INDOBORAX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDOCO",
          Token: "11677",
          Trading Symbol: "INDOCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDORAMA",
          Token: "10993",
          Trading Symbol: "INDORAMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDOSTAR",
          Token: "3098",
          Trading Symbol: "INDOSTAR-BE"
        },
        {
          Exch: "NSE",
          Symbol: "INDOTECH",
          Token: "13278",
          Trading Symbol: "INDOTECH-BE"
        },
        {
          Exch: "NSE",
          Symbol: "INDOTHAI",
          Token: "25608",
          Trading Symbol: "INDOTHAI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDOWIND",
          Token: "14952",
          Trading Symbol: "INDOWIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDRAMEDCO",
          Token: "8852",
          Trading Symbol: "INDRAMEDCO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "INDSWFTLAB",
          Token: "4870",
          Trading Symbol: "INDSWFTLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDSWFTLTD",
          Token: "11602",
          Trading Symbol: "INDSWFTLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDTERRAIN",
          Token: "21957",
          Trading Symbol: "INDTERRAIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDUSINDBK",
          Token: "5258",
          Trading Symbol: "INDUSINDBK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INDUSTOWER",
          Token: "29135",
          Trading Symbol: "INDUSTOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INFIBEAM",
          Token: "16249",
          Trading Symbol: "INFIBEAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INFINIUM",
          Token: "15036",
          Trading Symbol: "INFINIUM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "INFOBEAN",
          Token: "11027",
          Trading Symbol: "INFOBEAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INFOLLION",
          Token: "16625",
          Trading Symbol: "INFOLLION-ST"
        },
        {
          Exch: "NSE",
          Symbol: "INFOMEDIA",
          Token: "13693",
          Trading Symbol: "INFOMEDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INFRABEES",
          Token: "20072",
          Trading Symbol: "INFRABEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INFY",
          Token: "1594",
          Trading Symbol: "INFY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INGERRAND",
          Token: "1597",
          Trading Symbol: "INGERRAND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INNOVANA",
          Token: "666",
          Trading Symbol: "INNOVANA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "INNOVATIVE",
          Token: "21862",
          Trading Symbol: "INNOVATIVE-ST"
        },
        {
          Exch: "NSE",
          Symbol: "INOXGREEN",
          Token: "12188",
          Trading Symbol: "INOXGREEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INOXWIND",
          Token: "7852",
          Trading Symbol: "INOXWIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INSECTICID",
          Token: "14657",
          Trading Symbol: "INSECTICID-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INSPIRISYS",
          Token: "13734",
          Trading Symbol: "INSPIRISYS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "INTELLECT",
          Token: "5926",
          Trading Symbol: "INTELLECT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INTENTECH",
          Token: "20071",
          Trading Symbol: "INTENTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INTLCONV",
          Token: "5606",
          Trading Symbol: "INTLCONV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "INVENTURE",
          Token: "24870",
          Trading Symbol: "INVENTURE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IOB",
          Token: "9348",
          Trading Symbol: "IOB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IOC",
          Token: "1624",
          Trading Symbol: "IOC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IOLCP",
          Token: "20413",
          Trading Symbol: "IOLCP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IONEXCHANG",
          Token: "1630",
          Trading Symbol: "IONEXCHANG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IPCALAB",
          Token: "1633",
          Trading Symbol: "IPCALAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IPL",
          Token: "4934",
          Trading Symbol: "IPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IPSL",
          Token: "11903",
          Trading Symbol: "IPSL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "IRB",
          Token: "15313",
          Trading Symbol: "IRB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IRBINVIT",
          Token: "20817",
          Trading Symbol: "IRBINVIT-IV"
        },
        {
          Exch: "NSE",
          Symbol: "IRBIT",
          Token: "14806",
          Trading Symbol: "IRBIT-IV"
        },
        {
          Exch: "NSE",
          Symbol: "IRCON",
          Token: "4986",
          Trading Symbol: "IRCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IRCTC",
          Token: "13611",
          Trading Symbol: "IRCTC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IREDA",
          Token: "1374",
          Trading Symbol: "IREDA-N1"
        },
        {
          Exch: "NSE",
          Symbol: "IREDA",
          Token: "1380",
          Trading Symbol: "IREDA-N2"
        },
        {
          Exch: "NSE",
          Symbol: "IREDA",
          Token: "1383",
          Trading Symbol: "IREDA-N3"
        },
        {
          Exch: "NSE",
          Symbol: "IREDA",
          Token: "1387",
          Trading Symbol: "IREDA-N4"
        },
        {
          Exch: "NSE",
          Symbol: "IREDA",
          Token: "1391",
          Trading Symbol: "IREDA-N5"
        },
        {
          Exch: "NSE",
          Symbol: "IREDA",
          Token: "1393",
          Trading Symbol: "IREDA-N6"
        },
        {
          Exch: "NSE",
          Symbol: "IREDA",
          Token: "20030",
          Trading Symbol: "IREDA-N7"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "2029",
          Trading Symbol: "IRFC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "31128",
          Trading Symbol: "IRFC-N2"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "29323",
          Trading Symbol: "IRFC-N4"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "29607",
          Trading Symbol: "IRFC-N6"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "586",
          Trading Symbol: "IRFC-N7"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "591",
          Trading Symbol: "IRFC-N8"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "597",
          Trading Symbol: "IRFC-N9"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "603",
          Trading Symbol: "IRFC-NA"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "1987",
          Trading Symbol: "IRFC-NB"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "1991",
          Trading Symbol: "IRFC-NC"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "1993",
          Trading Symbol: "IRFC-ND"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "1999",
          Trading Symbol: "IRFC-NE"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "11722",
          Trading Symbol: "IRFC-NF"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "11730",
          Trading Symbol: "IRFC-NG"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "11748",
          Trading Symbol: "IRFC-NH"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "11751",
          Trading Symbol: "IRFC-NI"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "11754",
          Trading Symbol: "IRFC-NJ"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "11757",
          Trading Symbol: "IRFC-NK"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "15110",
          Trading Symbol: "IRFC-NL"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "15112",
          Trading Symbol: "IRFC-NM"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "15134",
          Trading Symbol: "IRFC-NN"
        },
        {
          Exch: "NSE",
          Symbol: "IRFC",
          Token: "15168",
          Trading Symbol: "IRFC-NO"
        },
        {
          Exch: "NSE",
          Symbol: "IRIS",
          Token: "6489",
          Trading Symbol: "IRIS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IRISDOREME",
          Token: "2275",
          Trading Symbol: "IRISDOREME-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ISEC",
          Token: "2489",
          Trading Symbol: "ISEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ISFT",
          Token: "18479",
          Trading Symbol: "ISFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ISGEC",
          Token: "3329",
          Trading Symbol: "ISGEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ISHAN",
          Token: "10995",
          Trading Symbol: "ISHAN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "ISMTLTD",
          Token: "14932",
          Trading Symbol: "ISMTLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ITBEES",
          Token: "19084",
          Trading Symbol: "ITBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ITC",
          Token: "1660",
          Trading Symbol: "ITC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ITDC",
          Token: "19299",
          Trading Symbol: "ITDC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ITDCEM",
          Token: "5622",
          Trading Symbol: "ITDCEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ITI",
          Token: "1675",
          Trading Symbol: "ITI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IVC",
          Token: "6711",
          Trading Symbol: "IVC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IVP",
          Token: "8857",
          Trading Symbol: "IVP-BE"
        },
        {
          Exch: "NSE",
          Symbol: "IVZINGOLD",
          Token: "18292",
          Trading Symbol: "IVZINGOLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IVZINNIFTY",
          Token: "24217",
          Trading Symbol: "IVZINNIFTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IWEL",
          Token: "3776",
          Trading Symbol: "IWEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "IZMO",
          Token: "14178",
          Trading Symbol: "IZMO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "J&KBANK",
          Token: "5633",
          Trading Symbol: "J&KBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAGRAN",
          Token: "13211",
          Trading Symbol: "JAGRAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAGSNPHARM",
          Token: "4410",
          Trading Symbol: "JAGSNPHARM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAIBALAJI",
          Token: "14076",
          Trading Symbol: "JAIBALAJI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "JAICORPLTD",
          Token: "5143",
          Trading Symbol: "JAICORPLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAINAM",
          Token: "6012",
          Trading Symbol: "JAINAM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "JAIPURKURT",
          Token: "5516",
          Trading Symbol: "JAIPURKURT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAKHARIA",
          Token: "3949",
          Trading Symbol: "JAKHARIA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "JALAN",
          Token: "20929",
          Trading Symbol: "JALAN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "JAMNAAUTO",
          Token: "20778",
          Trading Symbol: "JAMNAAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JASH",
          Token: "13982",
          Trading Symbol: "JASH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAYAGROGN",
          Token: "4041",
          Trading Symbol: "JAYAGROGN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAYBARMARU",
          Token: "1708",
          Trading Symbol: "JAYBARMARU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAYNECOIND",
          Token: "2331",
          Trading Symbol: "JAYNECOIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JAYSREETEA",
          Token: "1720",
          Trading Symbol: "JAYSREETEA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JBCHEPHARM",
          Token: "1726",
          Trading Symbol: "JBCHEPHARM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JBMA",
          Token: "11655",
          Trading Symbol: "JBMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JCHAC",
          Token: "4491",
          Trading Symbol: "JCHAC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JETAIRWAYS",
          Token: "13420",
          Trading Symbol: "JETAIRWAYS-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "JETFREIGHT",
          Token: "7211",
          Trading Symbol: "JETFREIGHT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JETKNIT",
          Token: "18699",
          Trading Symbol: "JETKNIT-SM"
        },
        {
          Exch: "NSE",
          Symbol: "JFLLIFE",
          Token: "10885",
          Trading Symbol: "JFLLIFE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "JHS",
          Token: "13720",
          Trading Symbol: "JHS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JINDALPHOT",
          Token: "11743",
          Trading Symbol: "JINDALPHOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JINDALPOLY",
          Token: "1756",
          Trading Symbol: "JINDALPOLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JINDALSAW",
          Token: "3024",
          Trading Symbol: "JINDALSAW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JINDALSTEL",
          Token: "6733",
          Trading Symbol: "JINDALSTEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JINDRILL",
          Token: "13875",
          Trading Symbol: "JINDRILL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JINDWORLD",
          Token: "20642",
          Trading Symbol: "JINDWORLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JISLDVREQS",
          Token: "25684",
          Trading Symbol: "JISLDVREQS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JISLJALEQS",
          Token: "10397",
          Trading Symbol: "JISLJALEQS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JITFINFRA",
          Token: "19695",
          Trading Symbol: "JITFINFRA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "JKCEMENT",
          Token: "13270",
          Trading Symbol: "JKCEMENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JKIL",
          Token: "15266",
          Trading Symbol: "JKIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JKLAKSHMI",
          Token: "13491",
          Trading Symbol: "JKLAKSHMI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JKPAPER",
          Token: "11860",
          Trading Symbol: "JKPAPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JKTYRE",
          Token: "14435",
          Trading Symbol: "JKTYRE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JMA",
          Token: "7109",
          Trading Symbol: "JMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JMFINANCIL",
          Token: "13637",
          Trading Symbol: "JMFINANCIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JOCIL",
          Token: "16927",
          Trading Symbol: "JOCIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JPASSOCIAT",
          Token: "11460",
          Trading Symbol: "JPASSOCIAT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JPOLYINVST",
          Token: "31507",
          Trading Symbol: "JPOLYINVST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JPPOWER",
          Token: "11763",
          Trading Symbol: "JPPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JSL",
          Token: "11236",
          Trading Symbol: "JSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JSLL",
          Token: "9038",
          Trading Symbol: "JSLL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "JSWENERGY",
          Token: "17869",
          Trading Symbol: "JSWENERGY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JSWHL",
          Token: "11880",
          Trading Symbol: "JSWHL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JSWISPL",
          Token: "4671",
          Trading Symbol: "JSWISPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JSWSTEEL",
          Token: "11723",
          Trading Symbol: "JSWSTEEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JTEKTINDIA",
          Token: "3237",
          Trading Symbol: "JTEKTINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JTLIND",
          Token: "7287",
          Trading Symbol: "JTLIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JUBLFOOD",
          Token: "18096",
          Trading Symbol: "JUBLFOOD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JUBLINDS",
          Token: "21541",
          Trading Symbol: "JUBLINDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JUBLINGREA",
          Token: "2783",
          Trading Symbol: "JUBLINGREA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JUBLPHARMA",
          Token: "3637",
          Trading Symbol: "JUBLPHARMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JUNIORBEES",
          Token: "10939",
          Trading Symbol: "JUNIORBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JUSTDIAL",
          Token: "29962",
          Trading Symbol: "JUSTDIAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JWL",
          Token: "20224",
          Trading Symbol: "JWL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JYOTHYLAB",
          Token: "15146",
          Trading Symbol: "JYOTHYLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "JYOTISTRUC",
          Token: "5481",
          Trading Symbol: "JYOTISTRUC-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KABRAEXTRU",
          Token: "1805",
          Trading Symbol: "KABRAEXTRU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAJARIACER",
          Token: "1808",
          Trading Symbol: "KAJARIACER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAKATCEM",
          Token: "1811",
          Trading Symbol: "KAKATCEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KALYANI",
          Token: "19653",
          Trading Symbol: "KALYANI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KALYANIFRG",
          Token: "15160",
          Trading Symbol: "KALYANIFRG-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KALYANKJIL",
          Token: "2955",
          Trading Symbol: "KALYANKJIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAMATHOTEL",
          Token: "9784",
          Trading Symbol: "KAMATHOTEL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KAMDHENU",
          Token: "13457",
          Trading Symbol: "KAMDHENU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAMOPAINTS",
          Token: "13814",
          Trading Symbol: "KAMOPAINTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KANANIIND",
          Token: "25790",
          Trading Symbol: "KANANIIND-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KANDARP",
          Token: "11208",
          Trading Symbol: "KANDARP-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KANORICHEM",
          Token: "1835",
          Trading Symbol: "KANORICHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KANPRPLA",
          Token: "1782",
          Trading Symbol: "KANPRPLA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KANSAINER",
          Token: "1196",
          Trading Symbol: "KANSAINER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAPSTON",
          Token: "18967",
          Trading Symbol: "KAPSTON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KARMAENG",
          Token: "24385",
          Trading Symbol: "KARMAENG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KARURVYSYA",
          Token: "1838",
          Trading Symbol: "KARURVYSYA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAUSHALYA",
          Token: "15140",
          Trading Symbol: "KAUSHALYA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KAVVERITEL",
          Token: "15244",
          Trading Symbol: "KAVVERITEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAYA",
          Token: "10276",
          Trading Symbol: "KAYA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KAYNES",
          Token: "12092",
          Trading Symbol: "KAYNES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KBCGLOBAL",
          Token: "2354",
          Trading Symbol: "KBCGLOBAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KCK",
          Token: "10293",
          Trading Symbol: "KCK-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KCP",
          Token: "1841",
          Trading Symbol: "KCP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KCPSUGIND",
          Token: "4809",
          Trading Symbol: "KCPSUGIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KDDL",
          Token: "14908",
          Trading Symbol: "KDDL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KEC",
          Token: "13260",
          Trading Symbol: "KEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KECL",
          Token: "18224",
          Trading Symbol: "KECL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KEEPLEARN",
          Token: "8880",
          Trading Symbol: "KEEPLEARN-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KEI",
          Token: "13310",
          Trading Symbol: "KEI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KELLTONTEC",
          Token: "13430",
          Trading Symbol: "KELLTONTEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KENNAMET",
          Token: "11841",
          Trading Symbol: "KENNAMET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KERNEX",
          Token: "13125",
          Trading Symbol: "KERNEX-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KESORAMIND",
          Token: "1859",
          Trading Symbol: "KESORAMIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KEYFINSERV",
          Token: "4157",
          Trading Symbol: "KEYFINSERV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KFINTECH",
          Token: "13359",
          Trading Symbol: "KFINTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KHADIM",
          Token: "425",
          Trading Symbol: "KHADIM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KHAICHEM",
          Token: "896",
          Trading Symbol: "KHAICHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KHAITANLTD",
          Token: "3912",
          Trading Symbol: "KHAITANLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KHANDSE",
          Token: "9645",
          Trading Symbol: "KHANDSE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KHFM",
          Token: "9570",
          Trading Symbol: "KHFM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KICL",
          Token: "21119",
          Trading Symbol: "KICL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KILITCH",
          Token: "19941",
          Trading Symbol: "KILITCH-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KIMS",
          Token: "4847",
          Trading Symbol: "KIMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KINGFA",
          Token: "18944",
          Trading Symbol: "KINGFA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KIOCL",
          Token: "19126",
          Trading Symbol: "KIOCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KIRIINDUS",
          Token: "16639",
          Trading Symbol: "KIRIINDUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KIRLFER",
          Token: "14466",
          Trading Symbol: "KIRLFER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KIRLOSBROS",
          Token: "18581",
          Trading Symbol: "KIRLOSBROS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KIRLOSENG",
          Token: "20936",
          Trading Symbol: "KIRLOSENG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KIRLOSIND",
          Token: "19025",
          Trading Symbol: "KIRLOSIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KIRLPNU",
          Token: "15180",
          Trading Symbol: "KIRLPNU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KITEX",
          Token: "28899",
          Trading Symbol: "KITEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KKCL",
          Token: "13381",
          Trading Symbol: "KKCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KKVAPOW",
          Token: "17781",
          Trading Symbol: "KKVAPOW-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KMSUGAR",
          Token: "14667",
          Trading Symbol: "KMSUGAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KNAGRI",
          Token: "8602",
          Trading Symbol: "KNAGRI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KNRCON",
          Token: "15283",
          Trading Symbol: "KNRCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOHINOOR",
          Token: "7675",
          Trading Symbol: "KOHINOOR-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KOKUYOCMLN",
          Token: "16827",
          Trading Symbol: "KOKUYOCMLN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOLTEPATIL",
          Token: "15124",
          Trading Symbol: "KOLTEPATIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOPRAN",
          Token: "1919",
          Trading Symbol: "KOPRAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KORE",
          Token: "10889",
          Trading Symbol: "KORE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKALPHA",
          Token: "7412",
          Trading Symbol: "KOTAKALPHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKBANK",
          Token: "1922",
          Trading Symbol: "KOTAKBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKBKETF",
          Token: "5851",
          Trading Symbol: "KOTAKBKETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKCONS",
          Token: "10512",
          Trading Symbol: "KOTAKCONS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKGOLD",
          Token: "14858",
          Trading Symbol: "KOTAKGOLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKIT",
          Token: "2627",
          Trading Symbol: "KOTAKIT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKLIQ",
          Token: "13950",
          Trading Symbol: "KOTAKLIQ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKLOVOL",
          Token: "8632",
          Trading Symbol: "KOTAKLOVOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKMID50",
          Token: "8077",
          Trading Symbol: "KOTAKMID50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKMNC",
          Token: "10676",
          Trading Symbol: "KOTAKMNC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKNIFTY",
          Token: "18102",
          Trading Symbol: "KOTAKNIFTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKNV20",
          Token: "11457",
          Trading Symbol: "KOTAKNV20-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKPSUBK",
          Token: "15061",
          Trading Symbol: "KOTAKPSUBK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTAKSILVE",
          Token: "13082",
          Trading Symbol: "KOTAKSILVE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTARISUG",
          Token: "11647",
          Trading Symbol: "KOTARISUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTHARIPET",
          Token: "4594",
          Trading Symbol: "KOTHARIPET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTHARIPRO",
          Token: "5528",
          Trading Symbol: "KOTHARIPRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KOTYARK",
          Token: "6441",
          Trading Symbol: "KOTYARK-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KOVAI",
          Token: "5192",
          Trading Symbol: "KOVAI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KPIGREEN",
          Token: "5108",
          Trading Symbol: "KPIGREEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KPIL",
          Token: "1814",
          Trading Symbol: "KPIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KPITTECH",
          Token: "9683",
          Trading Symbol: "KPITTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KPRMILL",
          Token: "14912",
          Trading Symbol: "KPRMILL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KRBL",
          Token: "10577",
          Trading Symbol: "KRBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KREBSBIO",
          Token: "1937",
          Trading Symbol: "KREBSBIO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KRIDHANINF",
          Token: "11488",
          Trading Symbol: "KRIDHANINF-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KRISHANA",
          Token: "12847",
          Trading Symbol: "KRISHANA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KRISHCA",
          Token: "16133",
          Trading Symbol: "KRISHCA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KRISHIVAL",
          Token: "8671",
          Trading Symbol: "KRISHIVAL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KRISHNADEF",
          Token: "8782",
          Trading Symbol: "KRISHNADEF-SM"
        },
        {
          Exch: "NSE",
          Symbol: "KRITI",
          Token: "6417",
          Trading Symbol: "KRITI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KRITIKA",
          Token: "9296",
          Trading Symbol: "KRITIKA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KRITINUT",
          Token: "11432",
          Trading Symbol: "KRITINUT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KRSNAA",
          Token: "5359",
          Trading Symbol: "KRSNAA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KSB",
          Token: "1949",
          Trading Symbol: "KSB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KSCL",
          Token: "14972",
          Trading Symbol: "KSCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KSHITIJPOL",
          Token: "10412",
          Trading Symbol: "KSHITIJPOL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "KSL",
          Token: "18889",
          Trading Symbol: "KSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KSOLVES",
          Token: "11060",
          Trading Symbol: "KSOLVES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KTKBANK",
          Token: "8054",
          Trading Symbol: "KTKBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "KUANTUM",
          Token: "13870",
          Trading Symbol: "KUANTUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFH",
          Token: "24948",
          Trading Symbol: "L&TFH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9212",
          Trading Symbol: "L&TFINANCE-NB"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9214",
          Trading Symbol: "L&TFINANCE-NC"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9216",
          Trading Symbol: "L&TFINANCE-ND"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9227",
          Trading Symbol: "L&TFINANCE-NE"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9229",
          Trading Symbol: "L&TFINANCE-NF"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9231",
          Trading Symbol: "L&TFINANCE-NG"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9233",
          Trading Symbol: "L&TFINANCE-NH"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9235",
          Trading Symbol: "L&TFINANCE-NI"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9622",
          Trading Symbol: "L&TFINANCE-NN"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9624",
          Trading Symbol: "L&TFINANCE-NO"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9630",
          Trading Symbol: "L&TFINANCE-NP"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9644",
          Trading Symbol: "L&TFINANCE-NQ"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9650",
          Trading Symbol: "L&TFINANCE-NR"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9656",
          Trading Symbol: "L&TFINANCE-NS"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9662",
          Trading Symbol: "L&TFINANCE-NT"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9669",
          Trading Symbol: "L&TFINANCE-NU"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9674",
          Trading Symbol: "L&TFINANCE-NV"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "9676",
          Trading Symbol: "L&TFINANCE-NW"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "15641",
          Trading Symbol: "L&TFINANCE-Y4"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "15656",
          Trading Symbol: "L&TFINANCE-Y5"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "15684",
          Trading Symbol: "L&TFINANCE-Y6"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "15733",
          Trading Symbol: "L&TFINANCE-Y7"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "15763",
          Trading Symbol: "L&TFINANCE-Y8"
        },
        {
          Exch: "NSE",
          Symbol: "L&TFINANCE",
          Token: "15802",
          Trading Symbol: "L&TFINANCE-Y9"
        },
        {
          Exch: "NSE",
          Symbol: "LAGNAM",
          Token: "5865",
          Trading Symbol: "LAGNAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LAKPRE",
          Token: "4774",
          Trading Symbol: "LAKPRE-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "LAL",
          Token: "14929",
          Trading Symbol: "LAL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "LALPATHLAB",
          Token: "11654",
          Trading Symbol: "LALPATHLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LAMBODHARA",
          Token: "6412",
          Trading Symbol: "LAMBODHARA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "LANDMARK",
          Token: "13276",
          Trading Symbol: "LANDMARK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LAOPALA",
          Token: "14423",
          Trading Symbol: "LAOPALA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LASA",
          Token: "21713",
          Trading Symbol: "LASA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LATENTVIEW",
          Token: "6818",
          Trading Symbol: "LATENTVIEW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LATTEYS",
          Token: "15848",
          Trading Symbol: "LATTEYS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "LAURUSLABS",
          Token: "19234",
          Trading Symbol: "LAURUSLABS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LAXMICOT",
          Token: "6568",
          Trading Symbol: "LAXMICOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LAXMIMACH",
          Token: "1979",
          Trading Symbol: "LAXMIMACH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LCCINFOTEC",
          Token: "7529",
          Trading Symbol: "LCCINFOTEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LEMERITE",
          Token: "9372",
          Trading Symbol: "LEMERITE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "LEMONTREE",
          Token: "2606",
          Trading Symbol: "LEMONTREE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LEXUS",
          Token: "14459",
          Trading Symbol: "LEXUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LFIC",
          Token: "7902",
          Trading Symbol: "LFIC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LGBBROSLTD",
          Token: "18321",
          Trading Symbol: "LGBBROSLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LGBFORGE",
          Token: "16845",
          Trading Symbol: "LGBFORGE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LGHL",
          Token: "18475",
          Trading Symbol: "LGHL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "LIBAS",
          Token: "11082",
          Trading Symbol: "LIBAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LIBERTSHOE",
          Token: "1994",
          Trading Symbol: "LIBERTSHOE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LICHSGFIN",
          Token: "1997",
          Trading Symbol: "LICHSGFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LICI",
          Token: "9480",
          Trading Symbol: "LICI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LICNETFGSC",
          Token: "6062",
          Trading Symbol: "LICNETFGSC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LICNETFN50",
          Token: "11319",
          Trading Symbol: "LICNETFN50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LICNETFSEN",
          Token: "11441",
          Trading Symbol: "LICNETFSEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LICNFNHGP",
          Token: "15229",
          Trading Symbol: "LICNFNHGP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LIKHITHA",
          Token: "578",
          Trading Symbol: "LIKHITHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LINC",
          Token: "6951",
          Trading Symbol: "LINC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LINCOLN",
          Token: "11596",
          Trading Symbol: "LINCOLN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LINDEINDIA",
          Token: "1627",
          Trading Symbol: "LINDEINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LIQUIDBEES",
          Token: "11006",
          Trading Symbol: "LIQUIDBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LIQUIDETF",
          Token: "1927",
          Trading Symbol: "LIQUIDETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LLOYDS",
          Token: "11472",
          Trading Symbol: "LLOYDS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "LODHA",
          Token: "3220",
          Trading Symbol: "LODHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LOKESHMACH",
          Token: "13436",
          Trading Symbol: "LOKESHMACH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LOTUSEYE",
          Token: "16807",
          Trading Symbol: "LOTUSEYE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LOVABLE",
          Token: "22415",
          Trading Symbol: "LOVABLE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LOYALTEX",
          Token: "10590",
          Trading Symbol: "LOYALTEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LPDC",
          Token: "16863",
          Trading Symbol: "LPDC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LRRPL",
          Token: "14204",
          Trading Symbol: "LRRPL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "LSIL",
          Token: "17801",
          Trading Symbol: "LSIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LT",
          Token: "11483",
          Trading Symbol: "LT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LTGILTBEES",
          Token: "17700",
          Trading Symbol: "LTGILTBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LTIM",
          Token: "17818",
          Trading Symbol: "LTIM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LTTS",
          Token: "18564",
          Trading Symbol: "LTTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LUMAXIND",
          Token: "2018",
          Trading Symbol: "LUMAXIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LUMAXTECH",
          Token: "14014",
          Trading Symbol: "LUMAXTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LUPIN",
          Token: "10440",
          Trading Symbol: "LUPIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LUXIND",
          Token: "11301",
          Trading Symbol: "LUXIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LXCHEM",
          Token: "2841",
          Trading Symbol: "LXCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LYKALABS",
          Token: "2028",
          Trading Symbol: "LYKALABS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "LYPSAGEMS",
          Token: "31468",
          Trading Symbol: "LYPSAGEMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "M&M",
          Token: "2031",
          Trading Symbol: "M&M-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "M&MFIN",
          Token: "13285",
          Trading Symbol: "M&MFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "M&MFIN",
          Token: "20046",
          Trading Symbol: "M&MFIN-N1"
        },
        {
          Exch: "NSE",
          Symbol: "M&MFIN",
          Token: "20048",
          Trading Symbol: "M&MFIN-N2"
        },
        {
          Exch: "NSE",
          Symbol: "M&MFIN",
          Token: "20050",
          Trading Symbol: "M&MFIN-N3"
        },
        {
          Exch: "NSE",
          Symbol: "MAANALU",
          Token: "15018",
          Trading Symbol: "MAANALU-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MACPOWER",
          Token: "22347",
          Trading Symbol: "MACPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MADHAV",
          Token: "15151",
          Trading Symbol: "MADHAV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MADHAVBAUG",
          Token: "8259",
          Trading Symbol: "MADHAVBAUG-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MADHUCON",
          Token: "13671",
          Trading Symbol: "MADHUCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MADRASFERT",
          Token: "4911",
          Trading Symbol: "MADRASFERT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAESGETF",
          Token: "1200",
          Trading Symbol: "MAESGETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAFANG",
          Token: "3507",
          Trading Symbol: "MAFANG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAFSETF",
          Token: "5220",
          Trading Symbol: "MAFSETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAGADSUGAR",
          Token: "21392",
          Trading Symbol: "MAGADSUGAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAGNUM",
          Token: "14961",
          Trading Symbol: "MAGNUM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MAGOLDETF",
          Token: "14286",
          Trading Symbol: "MAGOLDETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAGS813ETF",
          Token: "14938",
          Trading Symbol: "MAGS813ETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHABANK",
          Token: "11377",
          Trading Symbol: "MAHABANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHAPEXLTD",
          Token: "5239",
          Trading Symbol: "MAHAPEXLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHASTEEL",
          Token: "17527",
          Trading Symbol: "MAHASTEEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHEPC",
          Token: "17603",
          Trading Symbol: "MAHEPC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHESHWARI",
          Token: "9576",
          Trading Symbol: "MAHESHWARI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHICKRA",
          Token: "2839",
          Trading Symbol: "MAHICKRA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MAHINDCIE",
          Token: "14937",
          Trading Symbol: "MAHINDCIE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHKTECH",
          Token: "7074",
          Trading Symbol: "MAHKTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHLIFE",
          Token: "8050",
          Trading Symbol: "MAHLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHLOG",
          Token: "385",
          Trading Symbol: "MAHLOG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHSCOOTER",
          Token: "2085",
          Trading Symbol: "MAHSCOOTER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAHSEAMLES",
          Token: "2088",
          Trading Symbol: "MAHSEAMLES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAITHANALL",
          Token: "24538",
          Trading Symbol: "MAITHANALL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAKS",
          Token: "11218",
          Trading Symbol: "MAKS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MALLCOM",
          Token: "7965",
          Trading Symbol: "MALLCOM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MALUPAPER",
          Token: "13352",
          Trading Symbol: "MALUPAPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAM150ETF",
          Token: "8413",
          Trading Symbol: "MAM150ETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAMFGETF",
          Token: "7979",
          Trading Symbol: "MAMFGETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAN50ETF",
          Token: "6353",
          Trading Symbol: "MAN50ETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANAKALUCO",
          Token: "7420",
          Trading Symbol: "MANAKALUCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANAKCOAT",
          Token: "7413",
          Trading Symbol: "MANAKCOAT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANAKSIA",
          Token: "15199",
          Trading Symbol: "MANAKSIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANAKSTEEL",
          Token: "7463",
          Trading Symbol: "MANAKSTEEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANALIPETC",
          Token: "13796",
          Trading Symbol: "MANALIPETC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANAPPURAM",
          Token: "19061",
          Trading Symbol: "MANAPPURAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANAV",
          Token: "21697",
          Trading Symbol: "MANAV-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MANGALAM",
          Token: "11817",
          Trading Symbol: "MANGALAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANGCHEFER",
          Token: "15007",
          Trading Symbol: "MANGCHEFER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANGLMCEM",
          Token: "2106",
          Trading Symbol: "MANGLMCEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANINDS",
          Token: "11884",
          Trading Symbol: "MANINDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANINFRA",
          Token: "18226",
          Trading Symbol: "MANINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANKIND",
          Token: "15380",
          Trading Symbol: "MANKIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANOMAY",
          Token: "13760",
          Trading Symbol: "MANOMAY-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MANORAMA",
          Token: "10230",
          Trading Symbol: "MANORAMA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MANORG",
          Token: "6422",
          Trading Symbol: "MANORG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANUGRAPH",
          Token: "13572",
          Trading Symbol: "MANUGRAPH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANV30F",
          Token: "14786",
          Trading Symbol: "MANV30F-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANXT50",
          Token: "17181",
          Trading Symbol: "MANXT50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MANYAVAR",
          Token: "8167",
          Trading Symbol: "MANYAVAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAPMYINDIA",
          Token: "7227",
          Trading Symbol: "MAPMYINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MARALOVER",
          Token: "2112",
          Trading Symbol: "MARALOVER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MARATHON",
          Token: "18659",
          Trading Symbol: "MARATHON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MARICO",
          Token: "4067",
          Trading Symbol: "MARICO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MARINE",
          Token: "1328",
          Trading Symbol: "MARINE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MARKSANS",
          Token: "10579",
          Trading Symbol: "MARKSANS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MARSHALL",
          Token: "6764",
          Trading Symbol: "MARSHALL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MARUTI",
          Token: "10999",
          Trading Symbol: "MARUTI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MASFIN",
          Token: "199",
          Trading Symbol: "MASFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MASKINVEST",
          Token: "18731",
          Trading Symbol: "MASKINVEST-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MASPTOP50",
          Token: "5782",
          Trading Symbol: "MASPTOP50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MASTEK",
          Token: "2124",
          Trading Symbol: "MASTEK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MATRIMONY",
          Token: "21726",
          Trading Symbol: "MATRIMONY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAWANASUG",
          Token: "17022",
          Trading Symbol: "MAWANASUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAXHEALTH",
          Token: "22377",
          Trading Symbol: "MAXHEALTH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAXIND",
          Token: "22428",
          Trading Symbol: "MAXIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAXVIL",
          Token: "17468",
          Trading Symbol: "MAXVIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAYURUNIQ",
          Token: "28906",
          Trading Symbol: "MAYURUNIQ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MAZDA",
          Token: "18870",
          Trading Symbol: "MAZDA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MAZDOCK",
          Token: "509",
          Trading Symbol: "MAZDOCK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MBAPL",
          Token: "12686",
          Trading Symbol: "MBAPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MBLINFRA",
          Token: "18033",
          Trading Symbol: "MBLINFRA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MCDOWELL-N",
          Token: "10447",
          Trading Symbol: "MCDOWELL-N-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MCL",
          Token: "22360",
          Trading Symbol: "MCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MCLEODRUSS",
          Token: "11943",
          Trading Symbol: "MCLEODRUSS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MCON",
          Token: "14574",
          Trading Symbol: "MCON-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MCX",
          Token: "31181",
          Trading Symbol: "MCX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MDL",
          Token: "2132",
          Trading Symbol: "MDL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MEDANTA",
          Token: "11956",
          Trading Symbol: "MEDANTA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MEDICAMEQ",
          Token: "6278",
          Trading Symbol: "MEDICAMEQ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MEDICO",
          Token: "9667",
          Trading Symbol: "MEDICO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MEDPLUS",
          Token: "7254",
          Trading Symbol: "MEDPLUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MEGAFLEX",
          Token: "10971",
          Trading Symbol: "MEGAFLEX-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MEGASOFT",
          Token: "14793",
          Trading Symbol: "MEGASOFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MEGASTAR",
          Token: "8153",
          Trading Symbol: "MEGASTAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MELSTAR",
          Token: "17950",
          Trading Symbol: "MELSTAR-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "MENONBE",
          Token: "6961",
          Trading Symbol: "MENONBE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MEP",
          Token: "8771",
          Trading Symbol: "MEP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "METALFORGE",
          Token: "3289",
          Trading Symbol: "METALFORGE-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "METROBRAND",
          Token: "7242",
          Trading Symbol: "METROBRAND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "METROPOLIS",
          Token: "9581",
          Trading Symbol: "METROPOLIS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MFL",
          Token: "5382",
          Trading Symbol: "MFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MFSL",
          Token: "2142",
          Trading Symbol: "MFSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MGEL",
          Token: "1598",
          Trading Symbol: "MGEL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MGL",
          Token: "17534",
          Trading Symbol: "MGL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MHHL",
          Token: "1426",
          Trading Symbol: "MHHL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MHLXMIRU",
          Token: "7886",
          Trading Symbol: "MHLXMIRU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MHRIL",
          Token: "17333",
          Trading Symbol: "MHRIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MICEL",
          Token: "7165",
          Trading Symbol: "MICEL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MID150BEES",
          Token: "8506",
          Trading Symbol: "MID150BEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MIDHANI",
          Token: "2463",
          Trading Symbol: "MIDHANI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MILTON",
          Token: "159",
          Trading Symbol: "MILTON-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MINDACORP",
          Token: "25897",
          Trading Symbol: "MINDACORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MINDPOOL",
          Token: "8900",
          Trading Symbol: "MINDPOOL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MINDSPACE",
          Token: "22308",
          Trading Symbol: "MINDSPACE-RR"
        },
        {
          Exch: "NSE",
          Symbol: "MINDTECK",
          Token: "18049",
          Trading Symbol: "MINDTECK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MIRCELECTR",
          Token: "2202",
          Trading Symbol: "MIRCELECTR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MIRZAINT",
          Token: "6665",
          Trading Symbol: "MIRZAINT-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MITCON",
          Token: "8469",
          Trading Symbol: "MITCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MITTAL",
          Token: "18666",
          Trading Symbol: "MITTAL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MKPL",
          Token: "16736",
          Trading Symbol: "MKPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MMFL",
          Token: "13844",
          Trading Symbol: "MMFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MMP",
          Token: "16426",
          Trading Symbol: "MMP-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MMTC",
          Token: "17957",
          Trading Symbol: "MMTC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MODIRUBBER",
          Token: "6934",
          Trading Symbol: "MODIRUBBER-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MODISONLTD",
          Token: "3316",
          Trading Symbol: "MODISONLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOGSEC",
          Token: "1507",
          Trading Symbol: "MOGSEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOHEALTH",
          Token: "10508",
          Trading Symbol: "MOHEALTH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOHITIND",
          Token: "29423",
          Trading Symbol: "MOHITIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOIL",
          Token: "20830",
          Trading Symbol: "MOIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOKSH",
          Token: "3586",
          Trading Symbol: "MOKSH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOL",
          Token: "5394",
          Trading Symbol: "MOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOLDTECH",
          Token: "17625",
          Trading Symbol: "MOLDTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOLDTKPAC",
          Token: "6713",
          Trading Symbol: "MOLDTKPAC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOLOWVOL",
          Token: "8654",
          Trading Symbol: "MOLOWVOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOM100",
          Token: "21423",
          Trading Symbol: "MOM100-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOM50",
          Token: "19289",
          Trading Symbol: "MOM50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOMENTUM",
          Token: "10693",
          Trading Symbol: "MOMENTUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOMOMENTUM",
          Token: "8182",
          Trading Symbol: "MOMOMENTUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MON100",
          Token: "22739",
          Trading Symbol: "MON100-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MONARCH",
          Token: "7679",
          Trading Symbol: "MONARCH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MONQ50",
          Token: "7422",
          Trading Symbol: "MONQ50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MONTECARLO",
          Token: "5938",
          Trading Symbol: "MONTECARLO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOQUALITY",
          Token: "10822",
          Trading Symbol: "MOQUALITY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MORARJEE",
          Token: "28877",
          Trading Symbol: "MORARJEE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOREPENLAB",
          Token: "2259",
          Trading Symbol: "MOREPENLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOS",
          Token: "15051",
          Trading Symbol: "MOS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MOTHERSON",
          Token: "4204",
          Trading Symbol: "MOTHERSON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOTILALOFS",
          Token: "14947",
          Trading Symbol: "MOTILALOFS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOTOGENFIN",
          Token: "2268",
          Trading Symbol: "MOTOGENFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOVALUE",
          Token: "10825",
          Trading Symbol: "MOVALUE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MOXSH",
          Token: "13502",
          Trading Symbol: "MOXSH-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MPHASIS",
          Token: "4503",
          Trading Symbol: "MPHASIS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MPSLTD",
          Token: "10578",
          Trading Symbol: "MPSLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MPTODAY",
          Token: "21792",
          Trading Symbol: "MPTODAY-SM"
        },
        {
          Exch: "NSE",
          Symbol: "MRF",
          Token: "2277",
          Trading Symbol: "MRF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MRO",
          Token: "5130",
          Trading Symbol: "MRO-IT"
        },
        {
          Exch: "NSE",
          Symbol: "MRO-TEK",
          Token: "8998",
          Trading Symbol: "MRO-TEK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MRPL",
          Token: "2283",
          Trading Symbol: "MRPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MSPL",
          Token: "11919",
          Trading Symbol: "MSPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MSTCLTD",
          Token: "9356",
          Trading Symbol: "MSTCLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MSUMI",
          Token: "8596",
          Trading Symbol: "MSUMI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MTARTECH",
          Token: "2709",
          Trading Symbol: "MTARTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MTEDUCARE",
          Token: "31413",
          Trading Symbol: "MTEDUCARE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "MTNL",
          Token: "2294",
          Trading Symbol: "MTNL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MUKANDLTD",
          Token: "11325",
          Trading Symbol: "MUKANDLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MUKTAARTS",
          Token: "8687",
          Trading Symbol: "MUKTAARTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MUNJALAU",
          Token: "13511",
          Trading Symbol: "MUNJALAU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MUNJALSHOW",
          Token: "2307",
          Trading Symbol: "MUNJALSHOW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MURUDCERA",
          Token: "2313",
          Trading Symbol: "MURUDCERA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MUTHOOTCAP",
          Token: "10415",
          Trading Symbol: "MUTHOOTCAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MUTHOOTFIN",
          Token: "23650",
          Trading Symbol: "MUTHOOTFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "MWL",
          Token: "10311",
          Trading Symbol: "MWL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "N1NSETEST",
          Token: "12848",
          Trading Symbol: "N1NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NABARD",
          Token: "20032",
          Trading Symbol: "NABARD-N1"
        },
        {
          Exch: "NSE",
          Symbol: "NABARD",
          Token: "20034",
          Trading Symbol: "NABARD-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NACLIND",
          Token: "20425",
          Trading Symbol: "NACLIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAGAFERT",
          Token: "17295",
          Trading Symbol: "NAGAFERT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAGREEKCAP",
          Token: "14942",
          Trading Symbol: "NAGREEKCAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAGREEKEXP",
          Token: "14702",
          Trading Symbol: "NAGREEKEXP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAHARCAP",
          Token: "15360",
          Trading Symbol: "NAHARCAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAHARINDUS",
          Token: "13106",
          Trading Symbol: "NAHARINDUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAHARPOLY",
          Token: "14445",
          Trading Symbol: "NAHARPOLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAHARSPING",
          Token: "14440",
          Trading Symbol: "NAHARSPING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAM-INDIA",
          Token: "357",
          Trading Symbol: "NAM-INDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NARMADA",
          Token: "11627",
          Trading Symbol: "NARMADA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NATCOPHARM",
          Token: "3918",
          Trading Symbol: "NATCOPHARM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NATHBIOGEN",
          Token: "11065",
          Trading Symbol: "NATHBIOGEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NATIONALUM",
          Token: "6364",
          Trading Symbol: "NATIONALUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAUKRI",
          Token: "13751",
          Trading Symbol: "NAUKRI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAVA",
          Token: "4014",
          Trading Symbol: "NAVA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAVIFIN",
          Token: "9842",
          Trading Symbol: "NAVIFIN-N1"
        },
        {
          Exch: "NSE",
          Symbol: "NAVIFIN",
          Token: "9844",
          Trading Symbol: "NAVIFIN-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NAVIFIN",
          Token: "9849",
          Trading Symbol: "NAVIFIN-N3"
        },
        {
          Exch: "NSE",
          Symbol: "NAVIFIN",
          Token: "9852",
          Trading Symbol: "NAVIFIN-N4"
        },
        {
          Exch: "NSE",
          Symbol: "NAVINFLUOR",
          Token: "14672",
          Trading Symbol: "NAVINFLUOR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAVKARCORP",
          Token: "10557",
          Trading Symbol: "NAVKARCORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAVNETEDUL",
          Token: "2385",
          Trading Symbol: "NAVNETEDUL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NAZARA",
          Token: "2987",
          Trading Symbol: "NAZARA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NBCC",
          Token: "31415",
          Trading Symbol: "NBCC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NBIFIN",
          Token: "19111",
          Trading Symbol: "NBIFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NCC",
          Token: "2319",
          Trading Symbol: "NCC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NCLIND",
          Token: "14490",
          Trading Symbol: "NCLIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NDGL",
          Token: "18375",
          Trading Symbol: "NDGL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "NDL",
          Token: "31258",
          Trading Symbol: "NDL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NDLVENTURE",
          Token: "14550",
          Trading Symbol: "NDLVENTURE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "NDRAUTO",
          Token: "22255",
          Trading Symbol: "NDRAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NDTV",
          Token: "11427",
          Trading Symbol: "NDTV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NECCLTD",
          Token: "13522",
          Trading Symbol: "NECCLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NECLIFE",
          Token: "11927",
          Trading Symbol: "NECLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NELCAST",
          Token: "14761",
          Trading Symbol: "NELCAST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NELCO",
          Token: "2388",
          Trading Symbol: "NELCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NEOGEN",
          Token: "9917",
          Trading Symbol: "NEOGEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NESCO",
          Token: "15409",
          Trading Symbol: "NESCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NESTLEIND",
          Token: "17963",
          Trading Symbol: "NESTLEIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NETF",
          Token: "7838",
          Trading Symbol: "NETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NETWORK18",
          Token: "14111",
          Trading Symbol: "NETWORK18-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NEULANDLAB",
          Token: "2406",
          Trading Symbol: "NEULANDLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NEWGEN",
          Token: "1164",
          Trading Symbol: "NEWGEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NEXTMEDIA",
          Token: "9867",
          Trading Symbol: "NEXTMEDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NFL",
          Token: "13925",
          Trading Symbol: "NFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NGIL",
          Token: "5404",
          Trading Symbol: "NGIL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "NGLFINE",
          Token: "10277",
          Trading Symbol: "NGLFINE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NH",
          Token: "11840",
          Trading Symbol: "NH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "31040",
          Trading Symbol: "NHAI-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "176",
          Trading Symbol: "NHAI-N3"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "180",
          Trading Symbol: "NHAI-N4"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "186",
          Trading Symbol: "NHAI-N5"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "192",
          Trading Symbol: "NHAI-N6"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "11949",
          Trading Symbol: "NHAI-N7"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "11952",
          Trading Symbol: "NHAI-N8"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "11954",
          Trading Symbol: "NHAI-N9"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "12003",
          Trading Symbol: "NHAI-NA"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "14497",
          Trading Symbol: "NHAI-NB"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "14499",
          Trading Symbol: "NHAI-NC"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "14522",
          Trading Symbol: "NHAI-ND"
        },
        {
          Exch: "NSE",
          Symbol: "NHAI",
          Token: "14529",
          Trading Symbol: "NHAI-NE"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2014",
          Token: "31965",
          Trading Symbol: "NHBTF2014-N1"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2014",
          Token: "31966",
          Trading Symbol: "NHBTF2014-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2014",
          Token: "31967",
          Trading Symbol: "NHBTF2014-N3"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2014",
          Token: "31968",
          Trading Symbol: "NHBTF2014-N4"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2014",
          Token: "31969",
          Trading Symbol: "NHBTF2014-N5"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2014",
          Token: "31970",
          Trading Symbol: "NHBTF2014-N6"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2023",
          Token: "1754",
          Trading Symbol: "NHBTF2023-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2023",
          Token: "1758",
          Trading Symbol: "NHBTF2023-N3"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2023",
          Token: "1761",
          Trading Symbol: "NHBTF2023-N4"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2023",
          Token: "1763",
          Trading Symbol: "NHBTF2023-N5"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2023",
          Token: "1765",
          Trading Symbol: "NHBTF2023-N6"
        },
        {
          Exch: "NSE",
          Symbol: "NHBTF2023",
          Token: "1767",
          Trading Symbol: "NHBTF2023-N7"
        },
        {
          Exch: "NSE",
          Symbol: "NHIT",
          Token: "6531",
          Trading Symbol: "NHIT-IV"
        },
        {
          Exch: "NSE",
          Symbol: "NHIT",
          Token: "11658",
          Trading Symbol: "NHIT-N1"
        },
        {
          Exch: "NSE",
          Symbol: "NHIT",
          Token: "11665",
          Trading Symbol: "NHIT-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NHIT",
          Token: "11669",
          Trading Symbol: "NHIT-N3"
        },
        {
          Exch: "NSE",
          Symbol: "NHPC",
          Token: "17400",
          Trading Symbol: "NHPC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NHPC",
          Token: "31482",
          Trading Symbol: "NHPC-N1"
        },
        {
          Exch: "NSE",
          Symbol: "NHPC",
          Token: "31483",
          Trading Symbol: "NHPC-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NHPC",
          Token: "31484",
          Trading Symbol: "NHPC-N3"
        },
        {
          Exch: "NSE",
          Symbol: "NHPC",
          Token: "31485",
          Trading Symbol: "NHPC-N4"
        },
        {
          Exch: "NSE",
          Symbol: "NHPC",
          Token: "31486",
          Trading Symbol: "NHPC-N5"
        },
        {
          Exch: "NSE",
          Symbol: "NHPC",
          Token: "31487",
          Trading Symbol: "NHPC-N6"
        },
        {
          Exch: "NSE",
          Symbol: "NIACL",
          Token: "399",
          Trading Symbol: "NIACL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NIBL",
          Token: "29733",
          Trading Symbol: "NIBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NIDAN",
          Token: "6592",
          Trading Symbol: "NIDAN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "NIF100BEES",
          Token: "29577",
          Trading Symbol: "NIF100BEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NIFTYBEES",
          Token: "10576",
          Trading Symbol: "NIFTYBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NIFTYQLITY",
          Token: "10690",
          Trading Symbol: "NIFTYQLITY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NIITLTD",
          Token: "11525",
          Trading Symbol: "NIITLTD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "NILAINFRA",
          Token: "9253",
          Trading Symbol: "NILAINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NILASPACES",
          Token: "7411",
          Trading Symbol: "NILASPACES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NILKAMAL",
          Token: "2421",
          Trading Symbol: "NILKAMAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NINSYS",
          Token: "14197",
          Trading Symbol: "NINSYS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "NIPPOBATRY",
          Token: "6782",
          Trading Symbol: "NIPPOBATRY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NIRAJ",
          Token: "255",
          Trading Symbol: "NIRAJ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NIRMAN",
          Token: "14722",
          Trading Symbol: "NIRMAN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "NITCO",
          Token: "13300",
          Trading Symbol: "NITCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NITINSPIN",
          Token: "13175",
          Trading Symbol: "NITINSPIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NITIRAJ",
          Token: "3247",
          Trading Symbol: "NITIRAJ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NKIND",
          Token: "2439",
          Trading Symbol: "NKIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NLCINDIA",
          Token: "8585",
          Trading Symbol: "NLCINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NMDC",
          Token: "15332",
          Trading Symbol: "NMDC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NOCIL",
          Token: "2442",
          Trading Symbol: "NOCIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NOIDATOLL",
          Token: "10786",
          Trading Symbol: "NOIDATOLL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NOVARTIND",
          Token: "9007",
          Trading Symbol: "NOVARTIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NPBET",
          Token: "12978",
          Trading Symbol: "NPBET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NPST",
          Token: "5299",
          Trading Symbol: "NPST-SM"
        },
        {
          Exch: "NSE",
          Symbol: "NRAIL",
          Token: "20314",
          Trading Symbol: "NRAIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NRBBEARING",
          Token: "7553",
          Trading Symbol: "NRBBEARING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NRL",
          Token: "13675",
          Trading Symbol: "NRL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NSIL",
          Token: "11239",
          Trading Symbol: "NSIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NSLNISP",
          Token: "14180",
          Trading Symbol: "NSLNISP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "11630",
          Trading Symbol: "NTPC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "31758",
          Trading Symbol: "NTPC-N1"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "31760",
          Trading Symbol: "NTPC-N2"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "31762",
          Trading Symbol: "NTPC-N3"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "31764",
          Trading Symbol: "NTPC-N4"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "31766",
          Trading Symbol: "NTPC-N5"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "31768",
          Trading Symbol: "NTPC-N6"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "7377",
          Trading Symbol: "NTPC-N7"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "10737",
          Trading Symbol: "NTPC-N8"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "10741",
          Trading Symbol: "NTPC-N9"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "10744",
          Trading Symbol: "NTPC-NA"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "10746",
          Trading Symbol: "NTPC-NB"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "10749",
          Trading Symbol: "NTPC-NC"
        },
        {
          Exch: "NSE",
          Symbol: "NTPC",
          Token: "10751",
          Trading Symbol: "NTPC-ND"
        },
        {
          Exch: "NSE",
          Symbol: "NUCLEUS",
          Token: "10791",
          Trading Symbol: "NUCLEUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NURECA",
          Token: "2353",
          Trading Symbol: "NURECA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "NUVOCO",
          Token: "5426",
          Trading Symbol: "NUVOCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NV20BEES",
          Token: "9847",
          Trading Symbol: "NV20BEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "NXST",
          Token: "15815",
          Trading Symbol: "NXST-RR"
        },
        {
          Exch: "NSE",
          Symbol: "NYKAA",
          Token: "6545",
          Trading Symbol: "NYKAA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OAL",
          Token: "10768",
          Trading Symbol: "OAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OBCL",
          Token: "8797",
          Trading Symbol: "OBCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OBEROIRLTY",
          Token: "20242",
          Trading Symbol: "OBEROIRLTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OCCL",
          Token: "12231",
          Trading Symbol: "OCCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OFSS",
          Token: "10738",
          Trading Symbol: "OFSS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OIL",
          Token: "17438",
          Trading Symbol: "OIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OILCOUNTUB",
          Token: "2472",
          Trading Symbol: "OILCOUNTUB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OLECTRA",
          Token: "10637",
          Trading Symbol: "OLECTRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OMAXAUTO",
          Token: "14125",
          Trading Symbol: "OMAXAUTO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "OMAXE",
          Token: "14853",
          Trading Symbol: "OMAXE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OMFURN",
          Token: "117",
          Trading Symbol: "OMFURN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "OMINFRAL",
          Token: "24231",
          Trading Symbol: "OMINFRAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OMKARCHEM",
          Token: "13515",
          Trading Symbol: "OMKARCHEM-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "ONELIFECAP",
          Token: "25492",
          Trading Symbol: "ONELIFECAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ONEPOINT",
          Token: "9939",
          Trading Symbol: "ONEPOINT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ONGC",
          Token: "2475",
          Trading Symbol: "ONGC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ONMOBILE",
          Token: "15278",
          Trading Symbol: "ONMOBILE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ONWARDTEC",
          Token: "2481",
          Trading Symbol: "ONWARDTEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OPTIEMUS",
          Token: "21469",
          Trading Symbol: "OPTIEMUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORBTEXP",
          Token: "31475",
          Trading Symbol: "ORBTEXP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORCHPHARMA",
          Token: "929",
          Trading Symbol: "ORCHPHARMA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ORICONENT",
          Token: "10159",
          Trading Symbol: "ORICONENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTABRA",
          Token: "13111",
          Trading Symbol: "ORIENTABRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTALTL",
          Token: "14346",
          Trading Symbol: "ORIENTALTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTBELL",
          Token: "14278",
          Trading Symbol: "ORIENTBELL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTCEM",
          Token: "30089",
          Trading Symbol: "ORIENTCEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTELEC",
          Token: "2972",
          Trading Symbol: "ORIENTELEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTHOT",
          Token: "2493",
          Trading Symbol: "ORIENTHOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTLTD",
          Token: "18208",
          Trading Symbol: "ORIENTLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORIENTPPR",
          Token: "2496",
          Trading Symbol: "ORIENTPPR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORISSAMINE",
          Token: "19931",
          Trading Symbol: "ORISSAMINE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ORTEL",
          Token: "13321",
          Trading Symbol: "ORTEL-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "ORTINLAB",
          Token: "2979",
          Trading Symbol: "ORTINLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OSEINTRUST",
          Token: "10435",
          Trading Symbol: "OSEINTRUST-IV"
        },
        {
          Exch: "NSE",
          Symbol: "OSIAHYPER",
          Token: "12643",
          Trading Symbol: "OSIAHYPER-BE"
        },
        {
          Exch: "NSE",
          Symbol: "OSWALAGRO",
          Token: "2514",
          Trading Symbol: "OSWALAGRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OSWALGREEN",
          Token: "471",
          Trading Symbol: "OSWALGREEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "OSWALSEEDS",
          Token: "14305",
          Trading Symbol: "OSWALSEEDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PAGEIND",
          Token: "14413",
          Trading Symbol: "PAGEIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PAISALO",
          Token: "25468",
          Trading Symbol: "PAISALO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PALASHSECU",
          Token: "21383",
          Trading Symbol: "PALASHSECU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PALREDTEC",
          Token: "17062",
          Trading Symbol: "PALREDTEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PANACEABIO",
          Token: "4055",
          Trading Symbol: "PANACEABIO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PANACHE",
          Token: "16292",
          Trading Symbol: "PANACHE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PANAMAPET",
          Token: "25392",
          Trading Symbol: "PANAMAPET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PANSARI",
          Token: "6141",
          Trading Symbol: "PANSARI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PAR",
          Token: "5631",
          Trading Symbol: "PAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PARACABLES",
          Token: "13951",
          Trading Symbol: "PARACABLES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PARADEEP",
          Token: "9741",
          Trading Symbol: "PARADEEP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PARAGMILK",
          Token: "17130",
          Trading Symbol: "PARAGMILK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PARAS",
          Token: "5911",
          Trading Symbol: "PARAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PARASPETRO",
          Token: "8975",
          Trading Symbol: "PARASPETRO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PARIN",
          Token: "5460",
          Trading Symbol: "PARIN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PARSVNATH",
          Token: "13791",
          Trading Symbol: "PARSVNATH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PARTYCRUS",
          Token: "2599",
          Trading Symbol: "PARTYCRUS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PASHUPATI",
          Token: "21657",
          Trading Symbol: "PASHUPATI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PASUPTAC",
          Token: "6045",
          Trading Symbol: "PASUPTAC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PATANJALI",
          Token: "17030",
          Trading Symbol: "PATANJALI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PATELENG",
          Token: "11702",
          Trading Symbol: "PATELENG-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PATINTLOG",
          Token: "15219",
          Trading Symbol: "PATINTLOG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PATTECH",
          Token: "15137",
          Trading Symbol: "PATTECH-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PAVNAIND",
          Token: "16192",
          Trading Symbol: "PAVNAIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PAYTM",
          Token: "6705",
          Trading Symbol: "PAYTM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PCBL",
          Token: "2649",
          Trading Symbol: "PCBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5120",
          Trading Symbol: "PCHFL-N1"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5123",
          Trading Symbol: "PCHFL-N2"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5126",
          Trading Symbol: "PCHFL-N3"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5129",
          Trading Symbol: "PCHFL-N4"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5132",
          Trading Symbol: "PCHFL-N5"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5134",
          Trading Symbol: "PCHFL-N6"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5145",
          Trading Symbol: "PCHFL-N7"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5151",
          Trading Symbol: "PCHFL-N8"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5155",
          Trading Symbol: "PCHFL-N9"
        },
        {
          Exch: "NSE",
          Symbol: "PCHFL",
          Token: "5160",
          Trading Symbol: "PCHFL-NA"
        },
        {
          Exch: "NSE",
          Symbol: "PCJEWELLER",
          Token: "29124",
          Trading Symbol: "PCJEWELLER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PDMJEPAPER",
          Token: "15377",
          Trading Symbol: "PDMJEPAPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PDSL",
          Token: "5264",
          Trading Symbol: "PDSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PEARLPOLY",
          Token: "2610",
          Trading Symbol: "PEARLPOLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PEL",
          Token: "2412",
          Trading Symbol: "PEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PENIND",
          Token: "20621",
          Trading Symbol: "PENIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PENINLAND",
          Token: "2256",
          Trading Symbol: "PENINLAND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PENTAGOLD",
          Token: "13513",
          Trading Symbol: "PENTAGOLD-SZ"
        },
        {
          Exch: "NSE",
          Symbol: "PERFECT",
          Token: "11250",
          Trading Symbol: "PERFECT-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PERSISTENT",
          Token: "18365",
          Trading Symbol: "PERSISTENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PETRONET",
          Token: "11351",
          Trading Symbol: "PETRONET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "14299",
          Trading Symbol: "PFC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "19972",
          Trading Symbol: "PFC-N1"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "19974",
          Trading Symbol: "PFC-N2"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "19976",
          Trading Symbol: "PFC-N3"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "20022",
          Trading Symbol: "PFC-N5"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "20024",
          Trading Symbol: "PFC-N6"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "20026",
          Trading Symbol: "PFC-N7"
        },
        {
          Exch: "NSE",
          Symbol: "PFC",
          Token: "20028",
          Trading Symbol: "PFC-N8"
        },
        {
          Exch: "NSE",
          Symbol: "PFIZER",
          Token: "2643",
          Trading Symbol: "PFIZER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PFOCUS",
          Token: "13496",
          Trading Symbol: "PFOCUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PFS",
          Token: "22602",
          Trading Symbol: "PFS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PGEL",
          Token: "25358",
          Trading Symbol: "PGEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PGHH",
          Token: "2535",
          Trading Symbol: "PGHH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PGHL",
          Token: "940",
          Trading Symbol: "PGHL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PGIL",
          Token: "14260",
          Trading Symbol: "PGIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PGINVIT",
          Token: "3494",
          Trading Symbol: "PGINVIT-IV"
        },
        {
          Exch: "NSE",
          Symbol: "PHANTOMFX",
          Token: "11612",
          Trading Symbol: "PHANTOMFX-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PHARMABEES",
          Token: "4973",
          Trading Symbol: "PHARMABEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PHOENIXLTD",
          Token: "14552",
          Trading Symbol: "PHOENIXLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PIDILITIND",
          Token: "2664",
          Trading Symbol: "PIDILITIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PIGL",
          Token: "15716",
          Trading Symbol: "PIGL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PIIND",
          Token: "24184",
          Trading Symbol: "PIIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PILANIINVS",
          Token: "11445",
          Trading Symbol: "PILANIINVS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PILITA",
          Token: "30835",
          Trading Symbol: "PILITA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PIONEEREMB",
          Token: "13463",
          Trading Symbol: "PIONEEREMB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PITTIENG",
          Token: "14134",
          Trading Symbol: "PITTIENG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PIXTRANS",
          Token: "9087",
          Trading Symbol: "PIXTRANS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PKTEA",
          Token: "10318",
          Trading Symbol: "PKTEA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PLASTIBLEN",
          Token: "13920",
          Trading Symbol: "PLASTIBLEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PNB",
          Token: "10666",
          Trading Symbol: "PNB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PNBGILTS",
          Token: "8736",
          Trading Symbol: "PNBGILTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PNBHOUSING",
          Token: "18908",
          Trading Symbol: "PNBHOUSING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PNC",
          Token: "9342",
          Trading Symbol: "PNC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PNCINFRA",
          Token: "9385",
          Trading Symbol: "PNCINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POCL",
          Token: "14385",
          Trading Symbol: "POCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PODDARHOUS",
          Token: "20450",
          Trading Symbol: "PODDARHOUS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PODDARMENT",
          Token: "19036",
          Trading Symbol: "PODDARMENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POKARNA",
          Token: "17651",
          Trading Symbol: "POKARNA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POLICYBZR",
          Token: "6656",
          Trading Symbol: "POLICYBZR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POLYCAB",
          Token: "9590",
          Trading Symbol: "POLYCAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POLYMED",
          Token: "25718",
          Trading Symbol: "POLYMED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POLYPLEX",
          Token: "2687",
          Trading Symbol: "POLYPLEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PONNIERODE",
          Token: "10661",
          Trading Symbol: "PONNIERODE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POONAWALLA",
          Token: "11403",
          Trading Symbol: "POONAWALLA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POONAWALLA",
          Token: "9950",
          Trading Symbol: "POONAWALLA-N3"
        },
        {
          Exch: "NSE",
          Symbol: "POONAWALLA",
          Token: "9966",
          Trading Symbol: "POONAWALLA-N4"
        },
        {
          Exch: "NSE",
          Symbol: "POONAWALLA",
          Token: "9969",
          Trading Symbol: "POONAWALLA-N5"
        },
        {
          Exch: "NSE",
          Symbol: "POONAWALLA",
          Token: "9975",
          Trading Symbol: "POONAWALLA-N6"
        },
        {
          Exch: "NSE",
          Symbol: "POONAWALLA",
          Token: "9982",
          Trading Symbol: "POONAWALLA-N7"
        },
        {
          Exch: "NSE",
          Symbol: "POWERGRID",
          Token: "14977",
          Trading Symbol: "POWERGRID-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POWERINDIA",
          Token: "18457",
          Trading Symbol: "POWERINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "POWERMECH",
          Token: "10473",
          Trading Symbol: "POWERMECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PPAP",
          Token: "15209",
          Trading Symbol: "PPAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PPL",
          Token: "10297",
          Trading Symbol: "PPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PPLPHARMA",
          Token: "11571",
          Trading Symbol: "PPLPHARMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRAENG",
          Token: "13941",
          Trading Symbol: "PRAENG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRAJIND",
          Token: "2705",
          Trading Symbol: "PRAJIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRAKASH",
          Token: "2708",
          Trading Symbol: "PRAKASH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRAKASHSTL",
          Token: "19599",
          Trading Symbol: "PRAKASHSTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRAXIS",
          Token: "1216",
          Trading Symbol: "PRAXIS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PRECAM",
          Token: "12603",
          Trading Symbol: "PRECAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRECISION",
          Token: "7950",
          Trading Symbol: "PRECISION-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PRECOT",
          Token: "2711",
          Trading Symbol: "PRECOT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRECWIRE",
          Token: "2717",
          Trading Symbol: "PRECWIRE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PREMEXPLN",
          Token: "17397",
          Trading Symbol: "PREMEXPLN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PREMIER",
          Token: "6248",
          Trading Symbol: "PREMIER-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PREMIERPOL",
          Token: "3908",
          Trading Symbol: "PREMIERPOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRESSMN",
          Token: "11672",
          Trading Symbol: "PRESSMN-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PRESTIGE",
          Token: "20302",
          Trading Symbol: "PRESTIGE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRICOLLTD",
          Token: "19631",
          Trading Symbol: "PRICOLLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRIMESECU",
          Token: "11864",
          Trading Symbol: "PRIMESECU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRINCEPIPE",
          Token: "16045",
          Trading Symbol: "PRINCEPIPE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRITI",
          Token: "8304",
          Trading Symbol: "PRITI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRITIKA",
          Token: "12971",
          Trading Symbol: "PRITIKA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PRITIKAUTO",
          Token: "5292",
          Trading Symbol: "PRITIKAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRIVISCL",
          Token: "8825",
          Trading Symbol: "PRIVISCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PROLIFE",
          Token: "19352",
          Trading Symbol: "PROLIFE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PROPEQUITY",
          Token: "8735",
          Trading Symbol: "PROPEQUITY-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PROV",
          Token: "16534",
          Trading Symbol: "PROV-ST"
        },
        {
          Exch: "NSE",
          Symbol: "PROZONINTU",
          Token: "28859",
          Trading Symbol: "PROZONINTU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRSMJOHNSN",
          Token: "2739",
          Trading Symbol: "PRSMJOHNSN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PRUDENT",
          Token: "9553",
          Trading Symbol: "PRUDENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PSB",
          Token: "21001",
          Trading Symbol: "PSB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PSPPROJECT",
          Token: "20877",
          Trading Symbol: "PSPPROJECT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PSUBANKICI",
          Token: "14584",
          Trading Symbol: "PSUBANKICI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PSUBNKBEES",
          Token: "15032",
          Trading Symbol: "PSUBNKBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PTC",
          Token: "11355",
          Trading Symbol: "PTC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PTCIL",
          Token: "16682",
          Trading Symbol: "PTCIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PTL",
          Token: "14101",
          Trading Symbol: "PTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PULZ",
          Token: "507",
          Trading Symbol: "PULZ-SM"
        },
        {
          Exch: "NSE",
          Symbol: "PUNJABCHEM",
          Token: "4344",
          Trading Symbol: "PUNJABCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PURVA",
          Token: "14922",
          Trading Symbol: "PURVA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "PVP",
          Token: "6273",
          Trading Symbol: "PVP-BE"
        },
        {
          Exch: "NSE",
          Symbol: "PVRINOX",
          Token: "13147",
          Trading Symbol: "PVRINOX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "QFIL",
          Token: "14613",
          Trading Symbol: "QFIL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "QGOLDHALF",
          Token: "15330",
          Trading Symbol: "QGOLDHALF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "QMSMEDI",
          Token: "11467",
          Trading Symbol: "QMSMEDI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "QNIFTY",
          Token: "16819",
          Trading Symbol: "QNIFTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "QUADPRO",
          Token: "5870",
          Trading Symbol: "QUADPRO-SM"
        },
        {
          Exch: "NSE",
          Symbol: "QUESS",
          Token: "17704",
          Trading Symbol: "QUESS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "QUICKHEAL",
          Token: "13116",
          Trading Symbol: "QUICKHEAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "QUICKTOUCH",
          Token: "15285",
          Trading Symbol: "QUICKTOUCH-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RACE",
          Token: "15391",
          Trading Symbol: "RACE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RADAAN",
          Token: "10932",
          Trading Symbol: "RADAAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RADHIKAJWE",
          Token: "10343",
          Trading Symbol: "RADHIKAJWE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RADIANTCMS",
          Token: "13580",
          Trading Symbol: "RADIANTCMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RADICO",
          Token: "10990",
          Trading Symbol: "RADICO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RADIOCITY",
          Token: "19881",
          Trading Symbol: "RADIOCITY-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RAILTEL",
          Token: "2431",
          Trading Symbol: "RAILTEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAIN",
          Token: "15337",
          Trading Symbol: "RAIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAINBOW",
          Token: "9408",
          Trading Symbol: "RAINBOW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAJESHEXPO",
          Token: "7401",
          Trading Symbol: "RAJESHEXPO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAJMET",
          Token: "2171",
          Trading Symbol: "RAJMET-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RAJRATAN",
          Token: "18962",
          Trading Symbol: "RAJRATAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAJRILTD",
          Token: "8428",
          Trading Symbol: "RAJRILTD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RAJSREESUG",
          Token: "2809",
          Trading Symbol: "RAJSREESUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAJTV",
          Token: "14403",
          Trading Symbol: "RAJTV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RALLIS",
          Token: "2816",
          Trading Symbol: "RALLIS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMANEWS",
          Token: "13565",
          Trading Symbol: "RAMANEWS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMAPHO",
          Token: "10568",
          Trading Symbol: "RAMAPHO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMASTEEL",
          Token: "10300",
          Trading Symbol: "RAMASTEEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMCOCEM",
          Token: "2043",
          Trading Symbol: "RAMCOCEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMCOIND",
          Token: "4587",
          Trading Symbol: "RAMCOIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMCOSYS",
          Token: "7851",
          Trading Symbol: "RAMCOSYS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMKY",
          Token: "20134",
          Trading Symbol: "RAMKY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAMRAT",
          Token: "10485",
          Trading Symbol: "RAMRAT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RANASUG",
          Token: "2837",
          Trading Symbol: "RANASUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RANEENGINE",
          Token: "16755",
          Trading Symbol: "RANEENGINE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RANEHOLDIN",
          Token: "2844",
          Trading Symbol: "RANEHOLDIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RATEGAIN",
          Token: "7177",
          Trading Symbol: "RATEGAIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RATNAMANI",
          Token: "13451",
          Trading Symbol: "RATNAMANI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RAYMOND",
          Token: "2859",
          Trading Symbol: "RAYMOND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RBA",
          Token: "1494",
          Trading Symbol: "RBA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RBL",
          Token: "16745",
          Trading Symbol: "RBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RBLBANK",
          Token: "18391",
          Trading Symbol: "RBLBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RBMINFRA",
          Token: "13570",
          Trading Symbol: "RBMINFRA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RCF",
          Token: "2866",
          Trading Symbol: "RCF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RCOM",
          Token: "13188",
          Trading Symbol: "RCOM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "15355",
          Trading Symbol: "RECLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "29111",
          Trading Symbol: "RECLTD-N2"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "29614",
          Trading Symbol: "RECLTD-N4"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "30982",
          Trading Symbol: "RECLTD-N5"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "30984",
          Trading Symbol: "RECLTD-N6"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "30986",
          Trading Symbol: "RECLTD-N7"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "30988",
          Trading Symbol: "RECLTD-N8"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "30990",
          Trading Symbol: "RECLTD-N9"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "30992",
          Trading Symbol: "RECLTD-NA"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "2931",
          Trading Symbol: "RECLTD-NB"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "2933",
          Trading Symbol: "RECLTD-NC"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "2935",
          Trading Symbol: "RECLTD-ND"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "2941",
          Trading Symbol: "RECLTD-NE"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "2947",
          Trading Symbol: "RECLTD-NF"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "2953",
          Trading Symbol: "RECLTD-NG"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "19926",
          Trading Symbol: "RECLTD-NH"
        },
        {
          Exch: "NSE",
          Symbol: "RECLTD",
          Token: "19924",
          Trading Symbol: "RECLTD-NI"
        },
        {
          Exch: "NSE",
          Symbol: "REDINGTON",
          Token: "14255",
          Trading Symbol: "REDINGTON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REFEX",
          Token: "17764",
          Trading Symbol: "REFEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REGENCERAM",
          Token: "9051",
          Trading Symbol: "REGENCERAM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RELAXO",
          Token: "24225",
          Trading Symbol: "RELAXO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RELCAPITAL",
          Token: "4692",
          Trading Symbol: "RELCAPITAL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RELCHEMQ",
          Token: "9652",
          Trading Symbol: "RELCHEMQ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RELIABLE",
          Token: "51",
          Trading Symbol: "RELIABLE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RELIANCE",
          Token: "2885",
          Trading Symbol: "RELIANCE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RELIGARE",
          Token: "15068",
          Trading Symbol: "RELIGARE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RELINFRA",
          Token: "553",
          Trading Symbol: "RELINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REMSONSIND",
          Token: "3965",
          Trading Symbol: "REMSONSIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REMUS",
          Token: "16154",
          Trading Symbol: "REMUS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RENUKA",
          Token: "12026",
          Trading Symbol: "RENUKA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REPCOHOME",
          Token: "29598",
          Trading Symbol: "REPCOHOME-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REPL",
          Token: "1480",
          Trading Symbol: "REPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REPRO",
          Token: "13126",
          Trading Symbol: "REPRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RESPONIND",
          Token: "20323",
          Trading Symbol: "RESPONIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REVATHI",
          Token: "11961",
          Trading Symbol: "REVATHI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "REXPIPES",
          Token: "5309",
          Trading Symbol: "REXPIPES-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RGL",
          Token: "15129",
          Trading Symbol: "RGL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RHFL",
          Token: "21733",
          Trading Symbol: "RHFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RHIM",
          Token: "31163",
          Trading Symbol: "RHIM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RHL",
          Token: "15157",
          Trading Symbol: "RHL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RICHA",
          Token: "8208",
          Trading Symbol: "RICHA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RICOAUTO",
          Token: "2909",
          Trading Symbol: "RICOAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RIIL",
          Token: "2912",
          Trading Symbol: "RIIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RILINFRA",
          Token: "9854",
          Trading Symbol: "RILINFRA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RITCO",
          Token: "8944",
          Trading Symbol: "RITCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RITES",
          Token: "3761",
          Trading Symbol: "RITES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RITEZONE",
          Token: "11910",
          Trading Symbol: "RITEZONE-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RKEC",
          Token: "1547",
          Trading Symbol: "RKEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RKFORGE",
          Token: "11411",
          Trading Symbol: "RKFORGE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RMDRIP",
          Token: "21816",
          Trading Symbol: "RMDRIP-SM"
        },
        {
          Exch: "NSE",
          Symbol: "RML",
          Token: "11975",
          Trading Symbol: "RML-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RNAVAL",
          Token: "1986",
          Trading Symbol: "RNAVAL-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "ROHLTD",
          Token: "13182",
          Trading Symbol: "ROHLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ROLEXRINGS",
          Token: "5279",
          Trading Symbol: "ROLEXRINGS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ROLLT",
          Token: "19104",
          Trading Symbol: "ROLLT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ROML",
          Token: "359",
          Trading Symbol: "ROML-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ROSSARI",
          Token: "19410",
          Trading Symbol: "ROSSARI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ROSSELLIND",
          Token: "28913",
          Trading Symbol: "ROSSELLIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ROTO",
          Token: "9049",
          Trading Symbol: "ROTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ROUTE",
          Token: "128",
          Trading Symbol: "ROUTE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RPGLIFE",
          Token: "16725",
          Trading Symbol: "RPGLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RPOWER",
          Token: "15259",
          Trading Symbol: "RPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RPPINFRA",
          Token: "20760",
          Trading Symbol: "RPPINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RPPL",
          Token: "6913",
          Trading Symbol: "RPPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RPSGVENT",
          Token: "8119",
          Trading Symbol: "RPSGVENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RSSOFTWARE",
          Token: "8426",
          Trading Symbol: "RSSOFTWARE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RSWM",
          Token: "2794",
          Trading Symbol: "RSWM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RSYSTEMS",
          Token: "13414",
          Trading Symbol: "RSYSTEMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RTNINDIA",
          Token: "27297",
          Trading Symbol: "RTNINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RTNPOWER",
          Token: "17520",
          Trading Symbol: "RTNPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RUBYMILLS",
          Token: "2939",
          Trading Symbol: "RUBYMILLS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RUCHINFRA",
          Token: "8423",
          Trading Symbol: "RUCHINFRA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "RUCHIRA",
          Token: "13821",
          Trading Symbol: "RUCHIRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RUPA",
          Token: "25724",
          Trading Symbol: "RUPA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RUSHIL",
          Token: "24595",
          Trading Symbol: "RUSHIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RUSTOMJEE",
          Token: "12219",
          Trading Symbol: "RUSTOMJEE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RVHL",
          Token: "1565",
          Trading Symbol: "RVHL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "RVNL",
          Token: "9552",
          Trading Symbol: "RVNL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "S&SPOWER",
          Token: "8733",
          Trading Symbol: "S&SPOWER-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SABAR",
          Token: "10982",
          Trading Symbol: "SABAR-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SABTN",
          Token: "15060",
          Trading Symbol: "SABTN-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SADBHAV",
          Token: "13240",
          Trading Symbol: "SADBHAV-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SADBHIN",
          Token: "10622",
          Trading Symbol: "SADBHIN-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SADHNANIQ",
          Token: "15343",
          Trading Symbol: "SADHNANIQ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAFARI",
          Token: "13035",
          Trading Symbol: "SAFARI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAGARDEEP",
          Token: "8175",
          Trading Symbol: "SAGARDEEP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAGCEM",
          Token: "14068",
          Trading Symbol: "SAGCEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAH",
          Token: "13689",
          Trading Symbol: "SAH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAHANA",
          Token: "16715",
          Trading Symbol: "SAHANA-ST"
        },
        {
          Exch: "NSE",
          Symbol: "SAHYADRI",
          Token: "14900",
          Trading Symbol: "SAHYADRI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAIL",
          Token: "2963",
          Trading Symbol: "SAIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAKAR",
          Token: "9539",
          Trading Symbol: "SAKAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAKHTISUG",
          Token: "2969",
          Trading Symbol: "SAKHTISUG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAKSOFT",
          Token: "11794",
          Trading Symbol: "SAKSOFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAKUMA",
          Token: "13251",
          Trading Symbol: "SAKUMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SALASAR",
          Token: "21362",
          Trading Symbol: "SALASAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SALONA",
          Token: "17351",
          Trading Symbol: "SALONA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SALSTEEL",
          Token: "11634",
          Trading Symbol: "SALSTEEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SALZERELEC",
          Token: "11399",
          Trading Symbol: "SALZERELEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAMBHAAV",
          Token: "4127",
          Trading Symbol: "SAMBHAAV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANDESH",
          Token: "2988",
          Trading Symbol: "SANDESH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANDHAR",
          Token: "2397",
          Trading Symbol: "SANDHAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANGAMIND",
          Token: "4184",
          Trading Symbol: "SANGAMIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANGHIIND",
          Token: "2997",
          Trading Symbol: "SANGHIIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANGHVIMOV",
          Token: "14058",
          Trading Symbol: "SANGHVIMOV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANGINITA",
          Token: "11032",
          Trading Symbol: "SANGINITA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANOFI",
          Token: "1442",
          Trading Symbol: "SANOFI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SANSERA",
          Token: "5751",
          Trading Symbol: "SANSERA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAPPHIRE",
          Token: "6718",
          Trading Symbol: "SAPPHIRE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SARDAEN",
          Token: "17758",
          Trading Symbol: "SARDAEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SAREGAMA",
          Token: "4892",
          Trading Symbol: "SAREGAMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SARLAPOLY",
          Token: "14043",
          Trading Symbol: "SARLAPOLY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SARVESHWAR",
          Token: "12913",
          Trading Symbol: "SARVESHWAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SASKEN",
          Token: "11983",
          Trading Symbol: "SASKEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SASTASUNDR",
          Token: "20063",
          Trading Symbol: "SASTASUNDR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SATIA",
          Token: "11045",
          Trading Symbol: "SATIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SATIN",
          Token: "10453",
          Trading Symbol: "SATIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SATINDLTD",
          Token: "12015",
          Trading Symbol: "SATINDLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBC",
          Token: "6794",
          Trading Symbol: "SBC-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SBCL",
          Token: "4656",
          Trading Symbol: "SBCL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBGLP",
          Token: "14139",
          Trading Symbol: "SBGLP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBICARD",
          Token: "17971",
          Trading Symbol: "SBICARD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBIETFCON",
          Token: "5168",
          Trading Symbol: "SBIETFCON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBIETFIT",
          Token: "740",
          Trading Symbol: "SBIETFIT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBIETFPB",
          Token: "722",
          Trading Symbol: "SBIETFPB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBIETFQLTY",
          Token: "7218",
          Trading Symbol: "SBIETFQLTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBILIFE",
          Token: "21808",
          Trading Symbol: "SBILIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SBIN",
          Token: "3045",
          Trading Symbol: "SBIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SCAPDVR",
          Token: "27",
          Trading Symbol: "SCAPDVR-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SCHAEFFLER",
          Token: "1011",
          Trading Symbol: "SCHAEFFLER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SCHAND",
          Token: "20698",
          Trading Symbol: "SCHAND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SCHNEIDER",
          Token: "31234",
          Trading Symbol: "SCHNEIDER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SCI",
          Token: "3048",
          Trading Symbol: "SCI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SCPL",
          Token: "12072",
          Trading Symbol: "SCPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SDBL",
          Token: "1338",
          Trading Symbol: "SDBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SDL24BEES",
          Token: "1143",
          Trading Symbol: "SDL24BEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SDL26BEES",
          Token: "3022",
          Trading Symbol: "SDL26BEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SEAMECLTD",
          Token: "2616",
          Trading Symbol: "SEAMECLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SECL",
          Token: "13025",
          Trading Symbol: "SECL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SECURCRED",
          Token: "11520",
          Trading Symbol: "SECURCRED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SECURKLOUD",
          Token: "11058",
          Trading Symbol: "SECURKLOUD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SEJALLTD",
          Token: "7094",
          Trading Symbol: "SEJALLTD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SELAN",
          Token: "13598",
          Trading Symbol: "SELAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SELMC",
          Token: "6274",
          Trading Symbol: "SELMC-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SEPC",
          Token: "15308",
          Trading Symbol: "SEPC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SEPOWER",
          Token: "27303",
          Trading Symbol: "SEPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SEQUENT",
          Token: "14296",
          Trading Symbol: "SEQUENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SERVOTECH",
          Token: "5511",
          Trading Symbol: "SERVOTECH-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SESHAPAPER",
          Token: "3066",
          Trading Symbol: "SESHAPAPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SETCO",
          Token: "17518",
          Trading Symbol: "SETCO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SETF10GILT",
          Token: "17395",
          Trading Symbol: "SETF10GILT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SETFGOLD",
          Token: "17272",
          Trading Symbol: "SETFGOLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SETFNIF50",
          Token: "10176",
          Trading Symbol: "SETFNIF50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SETFNIFBK",
          Token: "7361",
          Trading Symbol: "SETFNIFBK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SETFNN50",
          Token: "7353",
          Trading Symbol: "SETFNN50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SEYAIND",
          Token: "10836",
          Trading Symbol: "SEYAIND-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SFL",
          Token: "19184",
          Trading Symbol: "SFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SGBAPR28I",
          Token: "18862",
          Trading Symbol: "SGBAPR28I-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBAUG24",
          Token: "18429",
          Trading Symbol: "SGBAUG24-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBAUG27",
          Token: "12904",
          Trading Symbol: "SGBAUG27-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBAUG28V",
          Token: "22385",
          Trading Symbol: "SGBAUG28V-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBAUG29V",
          Token: "5455",
          Trading Symbol: "SGBAUG29V-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBAUG30",
          Token: "11192",
          Trading Symbol: "SGBAUG30-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBD29VIII",
          Token: "7098",
          Trading Symbol: "SGBD29VIII-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBDC27VII",
          Token: "15432",
          Trading Symbol: "SGBDC27VII-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBDE30III",
          Token: "13642",
          Trading Symbol: "SGBDE30III-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBDEC25",
          Token: "623",
          Trading Symbol: "SGBDEC25-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBDEC2512",
          Token: "795",
          Trading Symbol: "SGBDEC2512-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBDEC2513",
          Token: "862",
          Trading Symbol: "SGBDEC2513-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBDEC25XI",
          Token: "729",
          Trading Symbol: "SGBDEC25XI-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBDEC26",
          Token: "7654",
          Trading Symbol: "SGBDEC26-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBFEB24",
          Token: "18385",
          Trading Symbol: "SGBFEB24-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBFEB27",
          Token: "8766",
          Trading Symbol: "SGBFEB27-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBFEB28IX",
          Token: "17664",
          Trading Symbol: "SGBFEB28IX-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBFEB29XI",
          Token: "2200",
          Trading Symbol: "SGBFEB29XI-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJ28VIII",
          Token: "17110",
          Trading Symbol: "SGBJ28VIII-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJAN26",
          Token: "945",
          Trading Symbol: "SGBJAN26-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJAN27",
          Token: "8308",
          Trading Symbol: "SGBJAN27-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJAN29IX",
          Token: "1920",
          Trading Symbol: "SGBJAN29IX-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJAN29X",
          Token: "2003",
          Trading Symbol: "SGBJAN29X-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJAN30IX",
          Token: "7879",
          Trading Symbol: "SGBJAN30IX-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJU29III",
          Token: "3800",
          Trading Symbol: "SGBJU29III-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUL25",
          Token: "21477",
          Trading Symbol: "SGBJUL25-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUL27",
          Token: "11154",
          Trading Symbol: "SGBJUL27-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUL28IV",
          Token: "22242",
          Trading Symbol: "SGBJUL28IV-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUL29IV",
          Token: "5113",
          Trading Symbol: "SGBJUL29IV-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUN27",
          Token: "10261",
          Trading Symbol: "SGBJUN27-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUN28",
          Token: "19078",
          Trading Symbol: "SGBJUN28-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUN29II",
          Token: "3743",
          Trading Symbol: "SGBJUN29II-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBJUN30",
          Token: "10232",
          Trading Symbol: "SGBJUN30-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAR24",
          Token: "18386",
          Trading Symbol: "SGBMAR24-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAR25",
          Token: "20467",
          Trading Symbol: "SGBMAR25-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAR28X",
          Token: "18451",
          Trading Symbol: "SGBMAR28X-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAR30X",
          Token: "8401",
          Trading Symbol: "SGBMAR30X-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAR31IV",
          Token: "14598",
          Trading Symbol: "SGBMAR31IV-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAY25",
          Token: "20980",
          Trading Symbol: "SGBMAY25-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAY26",
          Token: "2891",
          Trading Symbol: "SGBMAY26-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAY28",
          Token: "18972",
          Trading Symbol: "SGBMAY28-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMAY29I",
          Token: "3742",
          Trading Symbol: "SGBMAY29I-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBMR29XII",
          Token: "2810",
          Trading Symbol: "SGBMR29XII-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBN28VIII",
          Token: "1342",
          Trading Symbol: "SGBN28VIII-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNOV23",
          Token: "17248",
          Trading Symbol: "SGBNOV23-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNOV24",
          Token: "19203",
          Trading Symbol: "SGBNOV24-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNOV25",
          Token: "458",
          Trading Symbol: "SGBNOV25-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNOV258",
          Token: "497",
          Trading Symbol: "SGBNOV258-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNOV25IX",
          Token: "540",
          Trading Symbol: "SGBNOV25IX-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNOV25VI",
          Token: "398",
          Trading Symbol: "SGBNOV25VI-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNOV26",
          Token: "6355",
          Trading Symbol: "SGBNOV26-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBNV29VII",
          Token: "6518",
          Trading Symbol: "SGBNV29VII-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBOC28VII",
          Token: "834",
          Trading Symbol: "SGBOC28VII-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBOCT25",
          Token: "250",
          Trading Symbol: "SGBOCT25-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBOCT25IV",
          Token: "304",
          Trading Symbol: "SGBOCT25IV-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBOCT25V",
          Token: "355",
          Trading Symbol: "SGBOCT25V-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBOCT26",
          Token: "5960",
          Trading Symbol: "SGBOCT26-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBOCT27",
          Token: "13981",
          Trading Symbol: "SGBOCT27-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBOCT27VI",
          Token: "14252",
          Trading Symbol: "SGBOCT27VI-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBSEP24",
          Token: "18795",
          Trading Symbol: "SGBSEP24-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBSEP27",
          Token: "13209",
          Trading Symbol: "SGBSEP27-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBSEP28VI",
          Token: "149",
          Trading Symbol: "SGBSEP28VI-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGBSEP29VI",
          Token: "5575",
          Trading Symbol: "SGBSEP29VI-GB"
        },
        {
          Exch: "NSE",
          Symbol: "SGIL",
          Token: "5114",
          Trading Symbol: "SGIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SGL",
          Token: "13367",
          Trading Symbol: "SGL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHAHALLOYS",
          Token: "11856",
          Trading Symbol: "SHAHALLOYS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHAILY",
          Token: "8727",
          Trading Symbol: "SHAILY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHAIVAL",
          Token: "10683",
          Trading Symbol: "SHAIVAL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SHAKTIPUMP",
          Token: "25574",
          Trading Symbol: "SHAKTIPUMP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHALBY",
          Token: "714",
          Trading Symbol: "SHALBY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHALPAINTS",
          Token: "15342",
          Trading Symbol: "SHALPAINTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHANKARA",
          Token: "20321",
          Trading Symbol: "SHANKARA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHANTI",
          Token: "5650",
          Trading Symbol: "SHANTI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHANTIGEAR",
          Token: "3078",
          Trading Symbol: "SHANTIGEAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHARDACROP",
          Token: "4992",
          Trading Symbol: "SHARDACROP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHARDAMOTR",
          Token: "10530",
          Trading Symbol: "SHARDAMOTR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHAREINDIA",
          Token: "104",
          Trading Symbol: "SHAREINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHAREINDIA",
          Token: "14869",
          Trading Symbol: "SHAREINDIA-W1"
        },
        {
          Exch: "NSE",
          Symbol: "SHARIABEES",
          Token: "17044",
          Trading Symbol: "SHARIABEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHEMAROO",
          Token: "5068",
          Trading Symbol: "SHEMAROO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHERA",
          Token: "14172",
          Trading Symbol: "SHERA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SHIGAN",
          Token: "8394",
          Trading Symbol: "SHIGAN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SHILPAMED",
          Token: "17752",
          Trading Symbol: "SHILPAMED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHIVALIK",
          Token: "7016",
          Trading Symbol: "SHIVALIK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHIVAMAUTO",
          Token: "13756",
          Trading Symbol: "SHIVAMAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHIVAMILLS",
          Token: "1503",
          Trading Symbol: "SHIVAMILLS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SHIVATEX",
          Token: "804",
          Trading Symbol: "SHIVATEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHIVAUM",
          Token: "13446",
          Trading Symbol: "SHIVAUM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SHK",
          Token: "11212",
          Trading Symbol: "SHK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHOPERSTOP",
          Token: "11813",
          Trading Symbol: "SHOPERSTOP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHRADHA",
          Token: "708",
          Trading Symbol: "SHRADHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHREDIGCEM",
          Token: "3099",
          Trading Symbol: "SHREDIGCEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHREECEM",
          Token: "3103",
          Trading Symbol: "SHREECEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHREEPUSHK",
          Token: "10588",
          Trading Symbol: "SHREEPUSHK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHREERAMA",
          Token: "7627",
          Trading Symbol: "SHREERAMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHREMINVIT",
          Token: "5718",
          Trading Symbol: "SHREMINVIT-IV"
        },
        {
          Exch: "NSE",
          Symbol: "SHRENIK",
          Token: "11149",
          Trading Symbol: "SHRENIK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHRERA-RE",
          Token: "16702",
          Trading Symbol: "SHRERA-RE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SHREYANIND",
          Token: "3126",
          Trading Symbol: "SHREYANIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHREYAS",
          Token: "3129",
          Trading Symbol: "SHREYAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIPISTON",
          Token: "17186",
          Trading Symbol: "SHRIPISTON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "4306",
          Trading Symbol: "SHRIRAMFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "298",
          Trading Symbol: "SHRIRAMFIN-YH"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "498",
          Trading Symbol: "SHRIRAMFIN-YI"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "696",
          Trading Symbol: "SHRIRAMFIN-YK"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "1001",
          Trading Symbol: "SHRIRAMFIN-YL"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "1897",
          Trading Symbol: "SHRIRAMFIN-YN"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "6140",
          Trading Symbol: "SHRIRAMFIN-YO"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "6149",
          Trading Symbol: "SHRIRAMFIN-YP"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "6166",
          Trading Symbol: "SHRIRAMFIN-YR"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "6168",
          Trading Symbol: "SHRIRAMFIN-YS"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "6172",
          Trading Symbol: "SHRIRAMFIN-YU"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "8621",
          Trading Symbol: "SHRIRAMFIN-YV"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "8625",
          Trading Symbol: "SHRIRAMFIN-YW"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "8633",
          Trading Symbol: "SHRIRAMFIN-YY"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "8642",
          Trading Symbol: "SHRIRAMFIN-YZ"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "8663",
          Trading Symbol: "SHRIRAMFIN-Z2"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "12916",
          Trading Symbol: "SHRIRAMFIN-Z4"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "12919",
          Trading Symbol: "SHRIRAMFIN-Z5"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "12931",
          Trading Symbol: "SHRIRAMFIN-Z8"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "12933",
          Trading Symbol: "SHRIRAMFIN-Z9"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "12937",
          Trading Symbol: "SHRIRAMFIN-ZB"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "12941",
          Trading Symbol: "SHRIRAMFIN-ZC"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "17157",
          Trading Symbol: "SHRIRAMFIN-ZE"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "17159",
          Trading Symbol: "SHRIRAMFIN-ZF"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "17163",
          Trading Symbol: "SHRIRAMFIN-ZH"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "17172",
          Trading Symbol: "SHRIRAMFIN-ZI"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMFIN",
          Token: "17179",
          Trading Symbol: "SHRIRAMFIN-ZK"
        },
        {
          Exch: "NSE",
          Symbol: "SHRIRAMPPS",
          Token: "7200",
          Trading Symbol: "SHRIRAMPPS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHUBHLAXMI",
          Token: "6451",
          Trading Symbol: "SHUBHLAXMI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SHYAMCENT",
          Token: "10188",
          Trading Symbol: "SHYAMCENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SHYAMMETL",
          Token: "4693",
          Trading Symbol: "SHYAMMETL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIDDHIKA",
          Token: "3148",
          Trading Symbol: "SIDDHIKA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SIEMENS",
          Token: "3150",
          Trading Symbol: "SIEMENS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIGACHI",
          Token: "6663",
          Trading Symbol: "SIGACHI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIGIND",
          Token: "4522",
          Trading Symbol: "SIGIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIGMA",
          Token: "16658",
          Trading Symbol: "SIGMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIKKO",
          Token: "6226",
          Trading Symbol: "SIKKO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SIL",
          Token: "11298",
          Trading Symbol: "SIL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SILGO",
          Token: "2492",
          Trading Symbol: "SILGO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SILINV",
          Token: "4105",
          Trading Symbol: "SILINV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SILLYMONKS",
          Token: "19097",
          Trading Symbol: "SILLYMONKS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SILVER",
          Token: "8003",
          Trading Symbol: "SILVER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SILVERBEES",
          Token: "8080",
          Trading Symbol: "SILVERBEES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SILVERETF",
          Token: "15085",
          Trading Symbol: "SILVERETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SILVERTUC",
          Token: "9422",
          Trading Symbol: "SILVERTUC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIMBHALS",
          Token: "14612",
          Trading Symbol: "SIMBHALS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIMPLEXINF",
          Token: "3162",
          Trading Symbol: "SIMPLEXINF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SINTERCOM",
          Token: "381",
          Trading Symbol: "SINTERCOM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIRCA",
          Token: "11050",
          Trading Symbol: "SIRCA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SIS",
          Token: "21501",
          Trading Symbol: "SIS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SITINET",
          Token: "14001",
          Trading Symbol: "SITINET-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SIYSIL",
          Token: "14096",
          Trading Symbol: "SIYSIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SJS",
          Token: "6643",
          Trading Symbol: "SJS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SJVN",
          Token: "18883",
          Trading Symbol: "SJVN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SKFINDIA",
          Token: "3186",
          Trading Symbol: "SKFINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SKIPPER",
          Token: "9428",
          Trading Symbol: "SKIPPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SKMEGGPROD",
          Token: "4732",
          Trading Symbol: "SKMEGGPROD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SKP",
          Token: "10325",
          Trading Symbol: "SKP-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SKSTEXTILE",
          Token: "1124",
          Trading Symbol: "SKSTEXTILE-ST"
        },
        {
          Exch: "NSE",
          Symbol: "SKYGOLD",
          Token: "13634",
          Trading Symbol: "SKYGOLD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SMARTLINK",
          Token: "9889",
          Trading Symbol: "SMARTLINK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SMCGLOBAL",
          Token: "2320",
          Trading Symbol: "SMCGLOBAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SMLISUZU",
          Token: "3387",
          Trading Symbol: "SMLISUZU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SMLT",
          Token: "6843",
          Trading Symbol: "SMLT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SMSLIFE",
          Token: "21551",
          Trading Symbol: "SMSLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SMSPHARMA",
          Token: "14329",
          Trading Symbol: "SMSPHARMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SMVD",
          Token: "847",
          Trading Symbol: "SMVD-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SNOWMAN",
          Token: "4843",
          Trading Symbol: "SNOWMAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOBHA",
          Token: "13826",
          Trading Symbol: "SOBHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOFTTECH",
          Token: "8266",
          Trading Symbol: "SOFTTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOLARA",
          Token: "3672",
          Trading Symbol: "SOLARA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOLARINDS",
          Token: "13332",
          Trading Symbol: "SOLARINDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOLEX",
          Token: "1231",
          Trading Symbol: "SOLEX-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SOMANYCERA",
          Token: "3880",
          Trading Symbol: "SOMANYCERA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOMATEX",
          Token: "9104",
          Trading Symbol: "SOMATEX-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SOMICONVEY",
          Token: "17798",
          Trading Symbol: "SOMICONVEY-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SONACOMS",
          Token: "4684",
          Trading Symbol: "SONACOMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SONAHISONA",
          Token: "13616",
          Trading Symbol: "SONAHISONA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SONAMCLOCK",
          Token: "8806",
          Trading Symbol: "SONAMCLOCK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SONATSOFTW",
          Token: "6596",
          Trading Symbol: "SONATSOFTW-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SONUINFRA",
          Token: "9458",
          Trading Symbol: "SONUINFRA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SOTAC",
          Token: "14993",
          Trading Symbol: "SOTAC-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SOTL",
          Token: "3021",
          Trading Symbol: "SOTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOUTHBANK",
          Token: "5948",
          Trading Symbol: "SOUTHBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SOUTHWEST",
          Token: "9678",
          Trading Symbol: "SOUTHWEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPAL",
          Token: "18252",
          Trading Symbol: "SPAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPANDANA",
          Token: "11435",
          Trading Symbol: "SPANDANA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPARC",
          Token: "14788",
          Trading Symbol: "SPARC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPCENET",
          Token: "19372",
          Trading Symbol: "SPCENET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPECIALITY",
          Token: "27107",
          Trading Symbol: "SPECIALITY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPECTRUM",
          Token: "5060",
          Trading Symbol: "SPECTRUM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SPENCERS",
          Token: "8163",
          Trading Symbol: "SPENCERS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPIC",
          Token: "3252",
          Trading Symbol: "SPIC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPLIL",
          Token: "11935",
          Trading Symbol: "SPLIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPLPETRO",
          Token: "9617",
          Trading Symbol: "SPLPETRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPMLINFRA",
          Token: "7166",
          Trading Symbol: "SPMLINFRA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SPORTKING",
          Token: "10733",
          Trading Symbol: "SPORTKING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SPRL",
          Token: "8521",
          Trading Symbol: "SPRL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SPTL",
          Token: "21466",
          Trading Symbol: "SPTL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SPYL",
          Token: "21099",
          Trading Symbol: "SPYL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SREEL",
          Token: "31837",
          Trading Symbol: "SREEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "21527",
          Trading Symbol: "SREIBNPNCD-NR"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "21529",
          Trading Symbol: "SREIBNPNCD-NS"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "21531",
          Trading Symbol: "SREIBNPNCD-NT"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "21533",
          Trading Symbol: "SREIBNPNCD-NU"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "21535",
          Trading Symbol: "SREIBNPNCD-NV"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "21537",
          Trading Symbol: "SREIBNPNCD-NW"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "17892",
          Trading Symbol: "SREIBNPNCD-YA"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "17894",
          Trading Symbol: "SREIBNPNCD-YB"
        },
        {
          Exch: "NSE",
          Symbol: "SREIBNPNCD",
          Token: "17896",
          Trading Symbol: "SREIBNPNCD-YC"
        },
        {
          Exch: "NSE",
          Symbol: "SREINFRA",
          Token: "7206",
          Trading Symbol: "SREINFRA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SRF",
          Token: "3273",
          Trading Symbol: "SRF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SRHHYPOLTD",
          Token: "14582",
          Trading Symbol: "SRHHYPOLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SRIRAM",
          Token: "20994",
          Trading Symbol: "SRIRAM-ST"
        },
        {
          Exch: "NSE",
          Symbol: "SRIVASAVI",
          Token: "14411",
          Trading Symbol: "SRIVASAVI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SRPL",
          Token: "140",
          Trading Symbol: "SRPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SSINFRA",
          Token: "2689",
          Trading Symbol: "SSINFRA-ST"
        },
        {
          Exch: "NSE",
          Symbol: "SSWL",
          Token: "11829",
          Trading Symbol: "SSWL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STAR",
          Token: "7374",
          Trading Symbol: "STAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STARCEMENT",
          Token: "21091",
          Trading Symbol: "STARCEMENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STARHEALTH",
          Token: "7083",
          Trading Symbol: "STARHEALTH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STARPAPER",
          Token: "3291",
          Trading Symbol: "STARPAPER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STARTECK",
          Token: "9305",
          Trading Symbol: "STARTECK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STCINDIA",
          Token: "10948",
          Trading Symbol: "STCINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STEELCAS",
          Token: "6803",
          Trading Symbol: "STEELCAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STEELCITY",
          Token: "10406",
          Trading Symbol: "STEELCITY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STEELXIND",
          Token: "21339",
          Trading Symbol: "STEELXIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STEL",
          Token: "21484",
          Trading Symbol: "STEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STERTOOLS",
          Token: "4299",
          Trading Symbol: "STERTOOLS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STLTECH",
          Token: "9309",
          Trading Symbol: "STLTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STOVEKRAFT",
          Token: "2107",
          Trading Symbol: "STOVEKRAFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STYLAMIND",
          Token: "5186",
          Trading Symbol: "STYLAMIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "STYRENIX",
          Token: "19",
          Trading Symbol: "STYRENIX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUBEXLTD",
          Token: "967",
          Trading Symbol: "SUBEXLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUBROS",
          Token: "3324",
          Trading Symbol: "SUBROS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUDARSCHEM",
          Token: "3327",
          Trading Symbol: "SUDARSCHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUKHJITS",
          Token: "11804",
          Trading Symbol: "SUKHJITS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SULA",
          Token: "13218",
          Trading Symbol: "SULA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUMICHEM",
          Token: "17105",
          Trading Symbol: "SUMICHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUMIT",
          Token: "11141",
          Trading Symbol: "SUMIT-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SUMMITSEC",
          Token: "21275",
          Trading Symbol: "SUMMITSEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNCLAYLTD",
          Token: "29008",
          Trading Symbol: "SUNCLAYLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNDARAM",
          Token: "18931",
          Trading Symbol: "SUNDARAM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNDARMFIN",
          Token: "3339",
          Trading Symbol: "SUNDARMFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNDARMHLD",
          Token: "2183",
          Trading Symbol: "SUNDARMHLD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNDRMBRAK",
          Token: "4179",
          Trading Symbol: "SUNDRMBRAK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNDRMFAST",
          Token: "3345",
          Trading Symbol: "SUNDRMFAST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNFLAG",
          Token: "3348",
          Trading Symbol: "SUNFLAG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNPHARMA",
          Token: "3351",
          Trading Symbol: "SUNPHARMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNTECK",
          Token: "17641",
          Trading Symbol: "SUNTECK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUNTV",
          Token: "13404",
          Trading Symbol: "SUNTV-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUPERHOUSE",
          Token: "20616",
          Trading Symbol: "SUPERHOUSE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUPERSPIN",
          Token: "3357",
          Trading Symbol: "SUPERSPIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUPRAJIT",
          Token: "11689",
          Trading Symbol: "SUPRAJIT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUPREMEIND",
          Token: "3363",
          Trading Symbol: "SUPREMEIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUPREMEINF",
          Token: "15006",
          Trading Symbol: "SUPREMEINF-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SUPRIYA",
          Token: "7390",
          Trading Symbol: "SUPRIYA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SURANASOL",
          Token: "21077",
          Trading Symbol: "SURANASOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SURANAT&P",
          Token: "10700",
          Trading Symbol: "SURANAT&P-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SURANI",
          Token: "8513",
          Trading Symbol: "SURANI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SURYALAXMI",
          Token: "11852",
          Trading Symbol: "SURYALAXMI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SURYAROSNI",
          Token: "3375",
          Trading Symbol: "SURYAROSNI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SURYODAY",
          Token: "2970",
          Trading Symbol: "SURYODAY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUTLEJTEX",
          Token: "13801",
          Trading Symbol: "SUTLEJTEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUULD",
          Token: "643",
          Trading Symbol: "SUULD-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SUVEN",
          Token: "11233",
          Trading Symbol: "SUVEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUVENPHAR",
          Token: "17945",
          Trading Symbol: "SUVENPHAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUVIDHAA",
          Token: "2998",
          Trading Symbol: "SUVIDHAA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SUZLON",
          Token: "12018",
          Trading Symbol: "SUZLON-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SVLL",
          Token: "15121",
          Trading Symbol: "SVLL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SVPGLOB",
          Token: "5023",
          Trading Symbol: "SVPGLOB-BE"
        },
        {
          Exch: "NSE",
          Symbol: "SWANENERGY",
          Token: "27095",
          Trading Symbol: "SWANENERGY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SWARAJ",
          Token: "8608",
          Trading Symbol: "SWARAJ-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SWARAJENG",
          Token: "3384",
          Trading Symbol: "SWARAJENG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SWASTIK",
          Token: "11492",
          Trading Symbol: "SWASTIK-SM"
        },
        {
          Exch: "NSE",
          Symbol: "SWELECTES",
          Token: "11909",
          Trading Symbol: "SWELECTES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SWSOLAR",
          Token: "12489",
          Trading Symbol: "SWSOLAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SYMPHONY",
          Token: "24190",
          Trading Symbol: "SYMPHONY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SYNCOMF",
          Token: "11992",
          Trading Symbol: "SYNCOMF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SYNGENE",
          Token: "10243",
          Trading Symbol: "SYNGENE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SYRMA",
          Token: "10793",
          Trading Symbol: "SYRMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "SYSTANGO",
          Token: "14506",
          Trading Symbol: "SYSTANGO-SM"
        },
        {
          Exch: "NSE",
          Symbol: "TAINWALCHM",
          Token: "3396",
          Trading Symbol: "TAINWALCHM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TAJGVK",
          Token: "9354",
          Trading Symbol: "TAJGVK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TAKE",
          Token: "14917",
          Trading Symbol: "TAKE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TALBROAUTO",
          Token: "13648",
          Trading Symbol: "TALBROAUTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TANLA",
          Token: "13976",
          Trading Symbol: "TANLA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TANTIACONS",
          Token: "1314",
          Trading Symbol: "TANTIACONS-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "TAPIFRUIT",
          Token: "10986",
          Trading Symbol: "TAPIFRUIT-SM"
        },
        {
          Exch: "NSE",
          Symbol: "TARACHAND",
          Token: "2117",
          Trading Symbol: "TARACHAND-SM"
        },
        {
          Exch: "NSE",
          Symbol: "TARC",
          Token: "1581",
          Trading Symbol: "TARC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TARMAT",
          Token: "14771",
          Trading Symbol: "TARMAT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TARSONS",
          Token: "6943",
          Trading Symbol: "TARSONS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TASTYBITE",
          Token: "20092",
          Trading Symbol: "TASTYBITE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16789",
          Trading Symbol: "TATACAPHSG-N3"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16791",
          Trading Symbol: "TATACAPHSG-N4"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16834",
          Trading Symbol: "TATACAPHSG-N5"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16836",
          Trading Symbol: "TATACAPHSG-N6"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16838",
          Trading Symbol: "TATACAPHSG-N7"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16870",
          Trading Symbol: "TATACAPHSG-N8"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16872",
          Trading Symbol: "TATACAPHSG-N9"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16874",
          Trading Symbol: "TATACAPHSG-NA"
        },
        {
          Exch: "NSE",
          Symbol: "TATACAPHSG",
          Token: "16894",
          Trading Symbol: "TATACAPHSG-NB"
        },
        {
          Exch: "NSE",
          Symbol: "TATACHEM",
          Token: "3405",
          Trading Symbol: "TATACHEM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATACOFFEE",
          Token: "724",
          Trading Symbol: "TATACOFFEE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATACOMM",
          Token: "3721",
          Trading Symbol: "TATACOMM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATACONSUM",
          Token: "3432",
          Trading Symbol: "TATACONSUM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATAELXSI",
          Token: "3411",
          Trading Symbol: "TATAELXSI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATAINVEST",
          Token: "1621",
          Trading Symbol: "TATAINVEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATAMETALI",
          Token: "3423",
          Trading Symbol: "TATAMETALI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATAMOTORS",
          Token: "3456",
          Trading Symbol: "TATAMOTORS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATAMTRDVR",
          Token: "16965",
          Trading Symbol: "TATAMTRDVR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATAPOWER",
          Token: "3426",
          Trading Symbol: "TATAPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATASTEEL",
          Token: "3499",
          Trading Symbol: "TATASTEEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATASTLLP",
          Token: "1639",
          Trading Symbol: "TATASTLLP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TATVA",
          Token: "5162",
          Trading Symbol: "TATVA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TBZ",
          Token: "27037",
          Trading Symbol: "TBZ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "5031",
          Trading Symbol: "TCFSL-NC"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "5042",
          Trading Symbol: "TCFSL-ND"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "5056",
          Trading Symbol: "TCFSL-NE"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "5058",
          Trading Symbol: "TCFSL-NF"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "12951",
          Trading Symbol: "TCFSL-NI"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "12953",
          Trading Symbol: "TCFSL-NJ"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "12956",
          Trading Symbol: "TCFSL-NK"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "12958",
          Trading Symbol: "TCFSL-NL"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "12961",
          Trading Symbol: "TCFSL-NM"
        },
        {
          Exch: "NSE",
          Symbol: "TCFSL",
          Token: "12963",
          Trading Symbol: "TCFSL-NN"
        },
        {
          Exch: "NSE",
          Symbol: "TCI",
          Token: "10580",
          Trading Symbol: "TCI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TCIEXP",
          Token: "19223",
          Trading Symbol: "TCIEXP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TCNSBRANDS",
          Token: "4172",
          Trading Symbol: "TCNSBRANDS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TCPLPACK",
          Token: "184",
          Trading Symbol: "TCPLPACK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TCS",
          Token: "11536",
          Trading Symbol: "TCS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TDPOWERSYS",
          Token: "25178",
          Trading Symbol: "TDPOWERSYS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TEAMLEASE",
          Token: "12716",
          Trading Symbol: "TEAMLEASE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TECH",
          Token: "6462",
          Trading Symbol: "TECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TECHIN",
          Token: "25190",
          Trading Symbol: "TECHIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TECHM",
          Token: "13538",
          Trading Symbol: "TECHM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TECHNOE",
          Token: "6445",
          Trading Symbol: "TECHNOE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TECILCHEM",
          Token: "14739",
          Trading Symbol: "TECILCHEM-BE"
        },
        {
          Exch: "NSE",
          Symbol: "TEGA",
          Token: "7105",
          Trading Symbol: "TEGA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TEJASNET",
          Token: "21131",
          Trading Symbol: "TEJASNET-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TEMBO",
          Token: "3280",
          Trading Symbol: "TEMBO-BE"
        },
        {
          Exch: "NSE",
          Symbol: "TERASOFT",
          Token: "19292",
          Trading Symbol: "TERASOFT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TEXINFRA",
          Token: "11549",
          Trading Symbol: "TEXINFRA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TEXMOPIPES",
          Token: "18214",
          Trading Symbol: "TEXMOPIPES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TEXRAIL",
          Token: "21828",
          Trading Symbol: "TEXRAIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TFCILTD",
          Token: "3466",
          Trading Symbol: "TFCILTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TFL",
          Token: "14319",
          Trading Symbol: "TFL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TGBHOTELS",
          Token: "14611",
          Trading Symbol: "TGBHOTELS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "THANGAMAYL",
          Token: "18118",
          Trading Symbol: "THANGAMAYL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "THEINVEST",
          Token: "21431",
          Trading Symbol: "THEINVEST-BE"
        },
        {
          Exch: "NSE",
          Symbol: "THEJO",
          Token: "28842",
          Trading Symbol: "THEJO-SM"
        },
        {
          Exch: "NSE",
          Symbol: "THEMISMED",
          Token: "14485",
          Trading Symbol: "THEMISMED-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "THERMAX",
          Token: "3475",
          Trading Symbol: "THERMAX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "THOMASCOOK",
          Token: "3481",
          Trading Symbol: "THOMASCOOK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "THYROCARE",
          Token: "17032",
          Trading Symbol: "THYROCARE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TI",
          Token: "19196",
          Trading Symbol: "TI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIDEWATER",
          Token: "14019",
          Trading Symbol: "TIDEWATER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIIL",
          Token: "14223",
          Trading Symbol: "TIIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIINDIA",
          Token: "312",
          Trading Symbol: "TIINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIJARIA",
          Token: "25482",
          Trading Symbol: "TIJARIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIL",
          Token: "11624",
          Trading Symbol: "TIL-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "TIMESCAN",
          Token: "7800",
          Trading Symbol: "TIMESCAN-SM"
        },
        {
          Exch: "NSE",
          Symbol: "TIMESGTY",
          Token: "10717",
          Trading Symbol: "TIMESGTY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIMETECHNO",
          Token: "14707",
          Trading Symbol: "TIMETECHNO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIMKEN",
          Token: "14198",
          Trading Symbol: "TIMKEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TINPLATE",
          Token: "3493",
          Trading Symbol: "TINPLATE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIPSFILMS",
          Token: "11374",
          Trading Symbol: "TIPSFILMS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIPSINDLTD",
          Token: "9117",
          Trading Symbol: "TIPSINDLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIRUMALCHM",
          Token: "3496",
          Trading Symbol: "TIRUMALCHM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TIRUPATI",
          Token: "21868",
          Trading Symbol: "TIRUPATI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "TIRUPATIFL",
          Token: "22284",
          Trading Symbol: "TIRUPATIFL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "TITAN",
          Token: "3506",
          Trading Symbol: "TITAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TMB",
          Token: "10945",
          Trading Symbol: "TMB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TNIDETF",
          Token: "8882",
          Trading Symbol: "TNIDETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TNPETRO",
          Token: "3509",
          Trading Symbol: "TNPETRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TNPL",
          Token: "3980",
          Trading Symbol: "TNPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TNTELE",
          Token: "9884",
          Trading Symbol: "TNTELE-BE"
        },
        {
          Exch: "NSE",
          Symbol: "TOKYOPLAST",
          Token: "3837",
          Trading Symbol: "TOKYOPLAST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TORNTPHARM",
          Token: "3518",
          Trading Symbol: "TORNTPHARM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TORNTPOWER",
          Token: "13786",
          Trading Symbol: "TORNTPOWER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TOTAL",
          Token: "22423",
          Trading Symbol: "TOTAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TOUCHWOOD",
          Token: "16908",
          Trading Symbol: "TOUCHWOOD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TPLPLASTEH",
          Token: "9219",
          Trading Symbol: "TPLPLASTEH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRACXN",
          Token: "11582",
          Trading Symbol: "TRACXN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRANSWIND",
          Token: "21260",
          Trading Symbol: "TRANSWIND-SM"
        },
        {
          Exch: "NSE",
          Symbol: "TREEHOUSE",
          Token: "25082",
          Trading Symbol: "TREEHOUSE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TREJHARA",
          Token: "7605",
          Trading Symbol: "TREJHARA-BE"
        },
        {
          Exch: "NSE",
          Symbol: "TRENT",
          Token: "1964",
          Trading Symbol: "TRENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRF",
          Token: "17987",
          Trading Symbol: "TRF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRIDENT",
          Token: "9685",
          Trading Symbol: "TRIDENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRIGYN",
          Token: "5428",
          Trading Symbol: "TRIGYN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRIL",
          Token: "15174",
          Trading Symbol: "TRIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRITURBINE",
          Token: "25584",
          Trading Symbol: "TRITURBINE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TRIVENI",
          Token: "13081",
          Trading Symbol: "TRIVENI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TTKHLTCARE",
          Token: "11369",
          Trading Symbol: "TTKHLTCARE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TTKPRESTIG",
          Token: "3546",
          Trading Symbol: "TTKPRESTIG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TTL",
          Token: "14314",
          Trading Symbol: "TTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TTML",
          Token: "8954",
          Trading Symbol: "TTML-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TV18BRDCST",
          Token: "14208",
          Trading Symbol: "TV18BRDCST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TVSELECT",
          Token: "11265",
          Trading Symbol: "TVSELECT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TVSMOTOR",
          Token: "8479",
          Trading Symbol: "TVSMOTOR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TVSSRICHAK",
          Token: "14245",
          Trading Symbol: "TVSSRICHAK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TVTODAY",
          Token: "11275",
          Trading Symbol: "TVTODAY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "TWL",
          Token: "15414",
          Trading Symbol: "TWL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UBL",
          Token: "16713",
          Trading Symbol: "UBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UCALFUEL",
          Token: "3570",
          Trading Symbol: "UCALFUEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UCL",
          Token: "4212",
          Trading Symbol: "UCL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "UCOBANK",
          Token: "11223",
          Trading Symbol: "UCOBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UDAICEMENT",
          Token: "7276",
          Trading Symbol: "UDAICEMENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UFLEX",
          Token: "1053",
          Trading Symbol: "UFLEX-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UFO",
          Token: "9039",
          Trading Symbol: "UFO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UGARSUGAR",
          Token: "19578",
          Trading Symbol: "UGARSUGAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "5313",
          Trading Symbol: "UGROCAP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "6697",
          Trading Symbol: "UGROCAP-N1"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "9347",
          Trading Symbol: "UGROCAP-N2"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "9352",
          Trading Symbol: "UGROCAP-N3"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "9360",
          Trading Symbol: "UGROCAP-N4"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "11224",
          Trading Symbol: "UGROCAP-N5"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "11227",
          Trading Symbol: "UGROCAP-N6"
        },
        {
          Exch: "NSE",
          Symbol: "UGROCAP",
          Token: "11230",
          Trading Symbol: "UGROCAP-N7"
        },
        {
          Exch: "NSE",
          Symbol: "UJAAS",
          Token: "25540",
          Trading Symbol: "UJAAS-BE"
        },
        {
          Exch: "NSE",
          Symbol: "UJJIVAN",
          Token: "17069",
          Trading Symbol: "UJJIVAN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UJJIVANSFB",
          Token: "15228",
          Trading Symbol: "UJJIVANSFB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ULTRACEMCO",
          Token: "11532",
          Trading Symbol: "ULTRACEMCO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UMA",
          Token: "13349",
          Trading Symbol: "UMA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "UMAEXPORTS",
          Token: "8842",
          Trading Symbol: "UMAEXPORTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UMANGDAIRY",
          Token: "11387",
          Trading Symbol: "UMANGDAIRY-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UMESLTD",
          Token: "19142",
          Trading Symbol: "UMESLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNICHEMLAB",
          Token: "3579",
          Trading Symbol: "UNICHEMLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIDT",
          Token: "201",
          Trading Symbol: "UNIDT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIENTER",
          Token: "11293",
          Trading Symbol: "UNIENTER-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIINFO",
          Token: "7791",
          Trading Symbol: "UNIINFO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIONBANK",
          Token: "10753",
          Trading Symbol: "UNIONBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIPARTS",
          Token: "13057",
          Trading Symbol: "UNIPARTS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNITECH",
          Token: "8893",
          Trading Symbol: "UNITECH-BZ"
        },
        {
          Exch: "NSE",
          Symbol: "UNITEDPOLY",
          Token: "7564",
          Trading Symbol: "UNITEDPOLY-BE"
        },
        {
          Exch: "NSE",
          Symbol: "UNITEDTEA",
          Token: "17999",
          Trading Symbol: "UNITEDTEA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIVASTU",
          Token: "18977",
          Trading Symbol: "UNIVASTU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIVCABLES",
          Token: "3607",
          Trading Symbol: "UNIVCABLES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNIVPHOTO",
          Token: "17659",
          Trading Symbol: "UNIVPHOTO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UNOMINDA",
          Token: "14154",
          Trading Symbol: "UNOMINDA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UPL",
          Token: "11287",
          Trading Symbol: "UPL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "URAVI",
          Token: "2322",
          Trading Symbol: "URAVI-SM"
        },
        {
          Exch: "NSE",
          Symbol: "URJA",
          Token: "20203",
          Trading Symbol: "URJA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "USASEEDS",
          Token: "10610",
          Trading Symbol: "USASEEDS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "USHAMART",
          Token: "8840",
          Trading Symbol: "USHAMART-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "USK",
          Token: "14871",
          Trading Symbol: "USK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UTIAMC",
          Token: "527",
          Trading Symbol: "UTIAMC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UTIBANKETF",
          Token: "22440",
          Trading Symbol: "UTIBANKETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UTINEXT50",
          Token: "21478",
          Trading Symbol: "UTINEXT50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UTINIFTETF",
          Token: "10511",
          Trading Symbol: "UTINIFTETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UTISENSETF",
          Token: "10515",
          Trading Symbol: "UTISENSETF-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UTISXN50",
          Token: "9168",
          Trading Symbol: "UTISXN50-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UTTAMSUGAR",
          Token: "13376",
          Trading Symbol: "UTTAMSUGAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "UWCSL",
          Token: "5945",
          Trading Symbol: "UWCSL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "V1NSETEST",
          Token: "12863",
          Trading Symbol: "V1NSETEST-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "V2RETAIL",
          Token: "14766",
          Trading Symbol: "V2RETAIL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VADILALIND",
          Token: "24196",
          Trading Symbol: "VADILALIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VAIBHAVGBL",
          Token: "11364",
          Trading Symbol: "VAIBHAVGBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VAISHALI",
          Token: "16589",
          Trading Symbol: "VAISHALI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VAKRANGEE",
          Token: "13342",
          Trading Symbol: "VAKRANGEE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VALIANTORG",
          Token: "330",
          Trading Symbol: "VALIANTORG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VARDHACRLC",
          Token: "11220",
          Trading Symbol: "VARDHACRLC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VARDMNPOLY",
          Token: "6893",
          Trading Symbol: "VARDMNPOLY-BE"
        },
        {
          Exch: "NSE",
          Symbol: "VARROC",
          Token: "3857",
          Trading Symbol: "VARROC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VASA",
          Token: "1274",
          Trading Symbol: "VASA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VASCONEQ",
          Token: "18110",
          Trading Symbol: "VASCONEQ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VASWANI",
          Token: "25340",
          Trading Symbol: "VASWANI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VBL",
          Token: "18921",
          Trading Symbol: "VBL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VCL",
          Token: "9027",
          Trading Symbol: "VCL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "VEDL",
          Token: "3063",
          Trading Symbol: "VEDL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VEEKAYEM",
          Token: "10710",
          Trading Symbol: "VEEKAYEM-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VELS",
          Token: "14590",
          Trading Symbol: "VELS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VENKEYS",
          Token: "3757",
          Trading Symbol: "VENKEYS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VENUSPIPES",
          Token: "9592",
          Trading Symbol: "VENUSPIPES-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VENUSREM",
          Token: "13859",
          Trading Symbol: "VENUSREM-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VERA",
          Token: "2666",
          Trading Symbol: "VERA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VERANDA",
          Token: "8890",
          Trading Symbol: "VERANDA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VERTEXPLUS",
          Token: "14491",
          Trading Symbol: "VERTEXPLUS-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VERTOZ",
          Token: "18865",
          Trading Symbol: "VERTOZ-BE"
        },
        {
          Exch: "NSE",
          Symbol: "VESUVIUS",
          Token: "3676",
          Trading Symbol: "VESUVIUS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VETO",
          Token: "8652",
          Trading Symbol: "VETO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VGUARD",
          Token: "15362",
          Trading Symbol: "VGUARD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VHL",
          Token: "11892",
          Trading Symbol: "VHL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIAZ",
          Token: "14316",
          Trading Symbol: "VIAZ-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VIDHIING",
          Token: "13536",
          Trading Symbol: "VIDHIING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIJAYA",
          Token: "5585",
          Trading Symbol: "VIJAYA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIJIFIN",
          Token: "17691",
          Trading Symbol: "VIJIFIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIKASECO",
          Token: "25756",
          Trading Symbol: "VIKASECO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIKASLIFE",
          Token: "9931",
          Trading Symbol: "VIKASLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIMTALABS",
          Token: "13101",
          Trading Symbol: "VIMTALABS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VINATIORGA",
          Token: "17364",
          Trading Symbol: "VINATIORGA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VINDHYATEL",
          Token: "3694",
          Trading Symbol: "VINDHYATEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VINEETLAB",
          Token: "3807",
          Trading Symbol: "VINEETLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VINNY",
          Token: "12506",
          Trading Symbol: "VINNY-BE"
        },
        {
          Exch: "NSE",
          Symbol: "VINYLINDIA",
          Token: "16821",
          Trading Symbol: "VINYLINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIPCLOTHNG",
          Token: "14843",
          Trading Symbol: "VIPCLOTHNG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIPIND",
          Token: "3703",
          Trading Symbol: "VIPIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIPULLTD",
          Token: "8424",
          Trading Symbol: "VIPULLTD-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIRESCENT",
          Token: "5920",
          Trading Symbol: "VIRESCENT-IV"
        },
        {
          Exch: "NSE",
          Symbol: "VIRINCHI",
          Token: "15295",
          Trading Symbol: "VIRINCHI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VISAKAIND",
          Token: "4221",
          Trading Symbol: "VISAKAIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VISASTEEL",
          Token: "13298",
          Trading Symbol: "VISASTEEL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "VISESHINFO",
          Token: "7303",
          Trading Symbol: "VISESHINFO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VISHAL",
          Token: "11773",
          Trading Symbol: "VISHAL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VISHNU",
          Token: "6908",
          Trading Symbol: "VISHNU-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VISHWARAJ",
          Token: "13702",
          Trading Symbol: "VISHWARAJ-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VITAL",
          Token: "11920",
          Trading Symbol: "VITAL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VIVIANA",
          Token: "10967",
          Trading Symbol: "VIVIANA-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VIVIDHA",
          Token: "29877",
          Trading Symbol: "VIVIDHA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VIVO",
          Token: "7610",
          Trading Symbol: "VIVO-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VLSFINANCE",
          Token: "3715",
          Trading Symbol: "VLSFINANCE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VMARCIND",
          Token: "3188",
          Trading Symbol: "VMARCIND-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VMART",
          Token: "29284",
          Trading Symbol: "VMART-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VOLTAMP",
          Token: "13577",
          Trading Symbol: "VOLTAMP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VOLTAS",
          Token: "3718",
          Trading Symbol: "VOLTAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VRLLOG",
          Token: "8696",
          Trading Symbol: "VRLLOG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VSCL",
          Token: "20973",
          Trading Symbol: "VSCL-SM"
        },
        {
          Exch: "NSE",
          Symbol: "VSSL",
          Token: "27067",
          Trading Symbol: "VSSL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VSTIND",
          Token: "3724",
          Trading Symbol: "VSTIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VSTTILLERS",
          Token: "24292",
          Trading Symbol: "VSTTILLERS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "VTL",
          Token: "2073",
          Trading Symbol: "VTL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WABAG",
          Token: "20188",
          Trading Symbol: "WABAG-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WALCHANNAG",
          Token: "9079",
          Trading Symbol: "WALCHANNAG-BE"
        },
        {
          Exch: "NSE",
          Symbol: "WALPAR",
          Token: "5013",
          Trading Symbol: "WALPAR-SM"
        },
        {
          Exch: "NSE",
          Symbol: "WANBURY",
          Token: "14067",
          Trading Symbol: "WANBURY-BE"
        },
        {
          Exch: "NSE",
          Symbol: "WATERBASE",
          Token: "3745",
          Trading Symbol: "WATERBASE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WEALTH",
          Token: "1923",
          Trading Symbol: "WEALTH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WEBELSOLAR",
          Token: "14602",
          Trading Symbol: "WEBELSOLAR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WEIZMANIND",
          Token: "3748",
          Trading Symbol: "WEIZMANIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WEL",
          Token: "7835",
          Trading Symbol: "WEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WELCORP",
          Token: "11821",
          Trading Symbol: "WELCORP-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WELENT",
          Token: "11626",
          Trading Symbol: "WELENT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WELINV",
          Token: "19804",
          Trading Symbol: "WELINV-BE"
        },
        {
          Exch: "NSE",
          Symbol: "WELSPUNIND",
          Token: "11253",
          Trading Symbol: "WELSPUNIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WENDT",
          Token: "4235",
          Trading Symbol: "WENDT-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WESTLIFE",
          Token: "11580",
          Trading Symbol: "WESTLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WEWIN",
          Token: "9862",
          Trading Symbol: "WEWIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WHEELS",
          Token: "3766",
          Trading Symbol: "WHEELS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WHIRLPOOL",
          Token: "18011",
          Trading Symbol: "WHIRLPOOL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WILLAMAGOR",
          Token: "3772",
          Trading Symbol: "WILLAMAGOR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WINDLAS",
          Token: "5366",
          Trading Symbol: "WINDLAS-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WINDMACHIN",
          Token: "24969",
          Trading Symbol: "WINDMACHIN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WIPL",
          Token: "20491",
          Trading Symbol: "WIPL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "WIPRO",
          Token: "3787",
          Trading Symbol: "WIPRO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WOCKPHARMA",
          Token: "7506",
          Trading Symbol: "WOCKPHARMA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WONDERLA",
          Token: "3002",
          Trading Symbol: "WONDERLA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WORTH",
          Token: "22277",
          Trading Symbol: "WORTH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "WSI",
          Token: "14832",
          Trading Symbol: "WSI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "WSTCSTPAPR",
          Token: "3799",
          Trading Symbol: "WSTCSTPAPR-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "XCHANGING",
          Token: "11705",
          Trading Symbol: "XCHANGING-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "XELPMOC",
          Token: "8477",
          Trading Symbol: "XELPMOC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "XPROINDIA",
          Token: "11407",
          Trading Symbol: "XPROINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "YAARI",
          Token: "25003",
          Trading Symbol: "YAARI-BE"
        },
        {
          Exch: "NSE",
          Symbol: "YESBANK",
          Token: "11915",
          Trading Symbol: "YESBANK-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "YUKEN",
          Token: "5501",
          Trading Symbol: "YUKEN-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZEEL",
          Token: "3812",
          Trading Symbol: "ZEEL-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZEELEARN",
          Token: "20856",
          Trading Symbol: "ZEELEARN-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ZEEMEDIA",
          Token: "14003",
          Trading Symbol: "ZEEMEDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZENITHEXPO",
          Token: "4176",
          Trading Symbol: "ZENITHEXPO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZENITHSTL",
          Token: "14566",
          Trading Symbol: "ZENITHSTL-BE"
        },
        {
          Exch: "NSE",
          Symbol: "ZENSARTECH",
          Token: "1076",
          Trading Symbol: "ZENSARTECH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZENTEC",
          Token: "7508",
          Trading Symbol: "ZENTEC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZFCVINDIA",
          Token: "16915",
          Trading Symbol: "ZFCVINDIA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZIMLAB",
          Token: "12384",
          Trading Symbol: "ZIMLAB-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZODIAC",
          Token: "7129",
          Trading Symbol: "ZODIAC-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZODIACLOTH",
          Token: "3821",
          Trading Symbol: "ZODIACLOTH-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZOMATO",
          Token: "5097",
          Trading Symbol: "ZOMATO-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZOTA",
          Token: "11394",
          Trading Symbol: "ZOTA-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZUARI",
          Token: "29050",
          Trading Symbol: "ZUARI-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZUARIIND",
          Token: "3827",
          Trading Symbol: "ZUARIIND-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZYDUSLIFE",
          Token: "7929",
          Trading Symbol: "ZYDUSLIFE-EQ"
        },
        {
          Exch: "NSE",
          Symbol: "ZYDUSWELL",
          Token: "17635",
          Trading Symbol: "ZYDUSWELL-EQ"
        }
      ]
  return data
}

export default Array