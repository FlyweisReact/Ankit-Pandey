/** @format */

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { MobileBar } from "../../Modal/MobileBar";
import { LoginModal, UserProfileModal } from "../../Modal/GetOrder";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const GraphSearchData = [
  {
    Symbol: "011NSETEST",
    Token: 14747,
  },
  {
    Symbol: "011NSETEST",
    Token: 14751,
  },
  {
    Symbol: "011NSETEST",
    Token: 14753,
  },
  {
    Symbol: "011NSETEST",
    Token: 14755,
  },
  {
    Symbol: "011NSETEST",
    Token: 14758,
  },
  {
    Symbol: "011NSETEST",
    Token: 14762,
  },
  {
    Symbol: "011NSETEST",
    Token: 14764,
  },
  {
    Symbol: "011NSETEST",
    Token: 14767,
  },
  {
    Symbol: "011NSETEST",
    Token: 14769,
  },
  {
    Symbol: "011NSETEST",
    Token: 6833,
  },
  {
    Symbol: "011NSETEST",
    Token: 14772,
  },
  {
    Symbol: "011NSETEST",
    Token: 14774,
  },
  {
    Symbol: "011NSETEST",
    Token: 12841,
  },
  {
    Symbol: "011NSETEST",
    Token: 14777,
  },
  {
    Symbol: "011NSETEST",
    Token: 14778,
  },
  {
    Symbol: "011NSETEST",
    Token: 14781,
  },
  {
    Symbol: "011NSETEST",
    Token: 14782,
  },
  {
    Symbol: "011NSETEST",
    Token: 14784,
  },
  {
    Symbol: "011NSETEST",
    Token: 12732,
  },
  {
    Symbol: "011NSETEST",
    Token: 15338,
  },
  {
    Symbol: "011NSETEST",
    Token: 14000,
  },
  {
    Symbol: "011NSETEST",
    Token: 14968,
  },
  {
    Symbol: "011NSETEST",
    Token: 13629,
  },
  {
    Symbol: "011NSETEST",
    Token: 14457,
  },
  {
    Symbol: "011NSETEST",
    Token: 13053,
  },
  {
    Symbol: "011NSETEST",
    Token: 14135,
  },
  {
    Symbol: "011NSETEST",
    Token: 11890,
  },
  {
    Symbol: "011NSETEST",
    Token: 15024,
  },
  {
    Symbol: "011NSETEST",
    Token: 13726,
  },
  {
    Symbol: "011NSETEST",
    Token: 14569,
  },
  {
    Symbol: "011NSETEST",
    Token: 13137,
  },
  {
    Symbol: "011NSETEST",
    Token: 14170,
  },
  {
    Symbol: "011NSETEST",
    Token: 11989,
  },
  {
    Symbol: "011NSETEST",
    Token: 15116,
  },
  {
    Symbol: "011NSETEST",
    Token: 13790,
  },
  {
    Symbol: "011NSETEST",
    Token: 13259,
  },
  {
    Symbol: "011NSETEST",
    Token: 14668,
  },
  {
    Symbol: "011NSETEST",
    Token: 14284,
  },
  {
    Symbol: "011NSETEST",
    Token: 12360,
  },
  {
    Symbol: "011NSETEST",
    Token: 15272,
  },
  {
    Symbol: "011NSETEST",
    Token: 13933,
  },
  {
    Symbol: "011NSETEST",
    Token: 13405,
  },
  {
    Symbol: "011NSETEST",
    Token: 14885,
  },
  {
    Symbol: "011NSETEST",
    Token: 14383,
  },
  {
    Symbol: "011NSETEST",
    Token: 16921,
  },
  {
    Symbol: "011NSETEST",
    Token: 4,
  },
  {
    Symbol: "011NSETEST",
    Token: 13061,
  },
  {
    Symbol: "011NSETEST",
    Token: 14004,
  },
  {
    Symbol: "011NSETEST",
    Token: 9809,
  },
  {
    Symbol: "011NSETEST",
    Token: 15339,
  },
  {
    Symbol: "011NSETEST",
    Token: 11776,
  },
  {
    Symbol: "011NSETEST",
    Token: 10567,
  },
  {
    Symbol: "011NSETEST",
    Token: 13630,
  },
  {
    Symbol: "011NSETEST",
    Token: 14969,
  },
  {
    Symbol: "011NSETEST",
    Token: 11429,
  },
  {
    Symbol: "011NSETEST",
    Token: 10274,
  },
  {
    Symbol: "011NSETEST",
    Token: 14458,
  },
  {
    Symbol: "011NSETEST",
    Token: 10927,
  },
  {
    Symbol: "011NSETEST",
    Token: 13056,
  },
  {
    Symbol: "011NSETEST",
    Token: 14136,
  },
  {
    Symbol: "011NSETEST",
    Token: 9841,
  },
  {
    Symbol: "011NSETEST",
    Token: 11894,
  },
  {
    Symbol: "011NSETEST",
    Token: 10667,
  },
  {
    Symbol: "011NSETEST",
    Token: 13728,
  },
  {
    Symbol: "011NSETEST",
    Token: 15035,
  },
  {
    Symbol: "011NSETEST",
    Token: 9457,
  },
  {
    Symbol: "011NSETEST",
    Token: 11519,
  },
  {
    Symbol: "011NSETEST",
    Token: 10342,
  },
  {
    Symbol: "011NSETEST",
    Token: 14573,
  },
  {
    Symbol: "011NSETEST",
    Token: 10954,
  },
  {
    Symbol: "011NSETEST",
    Token: 13138,
  },
  {
    Symbol: "011NSETEST",
    Token: 14171,
  },
  {
    Symbol: "011NSETEST",
    Token: 9877,
  },
  {
    Symbol: "011NSETEST",
    Token: 11991,
  },
  {
    Symbol: "011NSETEST",
    Token: 10687,
  },
  {
    Symbol: "011NSETEST",
    Token: 13792,
  },
  {
    Symbol: "011NSETEST",
    Token: 15120,
  },
  {
    Symbol: "011NSETEST",
    Token: 9535,
  },
  {
    Symbol: "011NSETEST",
    Token: 11611,
  },
  {
    Symbol: "011NSETEST",
    Token: 10402,
  },
  {
    Symbol: "011NSETEST",
    Token: 11059,
  },
  {
    Symbol: "011NSETEST",
    Token: 13262,
  },
  {
    Symbol: "011NSETEST",
    Token: 14285,
  },
  {
    Symbol: "011NSETEST",
    Token: 14669,
  },
  {
    Symbol: "011NSETEST",
    Token: 9956,
  },
  {
    Symbol: "011NSETEST",
    Token: 12370,
  },
  {
    Symbol: "011NSETEST",
    Token: 10792,
  },
  {
    Symbol: "011NSETEST",
    Token: 15273,
  },
  {
    Symbol: "011NSETEST",
    Token: 9734,
  },
  {
    Symbol: "011NSETEST",
    Token: 13935,
  },
  {
    Symbol: "011NSETEST",
    Token: 10484,
  },
  {
    Symbol: "011NSETEST",
    Token: 11711,
  },
  {
    Symbol: "011NSETEST",
    Token: 11303,
  },
  {
    Symbol: "011NSETEST",
    Token: 13407,
  },
  {
    Symbol: "011NSETEST",
    Token: 14384,
  },
  {
    Symbol: "011NSETEST",
    Token: 14886,
  },
  {
    Symbol: "011NSETEST",
    Token: 10226,
  },
  {
    Symbol: "011NSETEST",
    Token: 12738,
  },
  {
    Symbol: "011NSETEST",
    Token: 10858,
  },
  {
    Symbol: "011NSETEST",
    Token: 6232,
  },
  {
    Symbol: "011NSETEST",
    Token: 474,
  },
  {
    Symbol: "011NSETEST",
    Token: 2595,
  },
  {
    Symbol: "011NSETEST",
    Token: 5621,
  },
  {
    Symbol: "011NSETEST",
    Token: 3529,
  },
  {
    Symbol: "011NSETEST",
    Token: 21931,
  },
  {
    Symbol: "011NSETEST",
    Token: 947,
  },
  {
    Symbol: "011NSETEST",
    Token: 22021,
  },
  {
    Symbol: "011NSETEST",
    Token: 21045,
  },
  {
    Symbol: "011NSETEST",
    Token: 21215,
  },
  {
    Symbol: "011NSETEST",
    Token: 22268,
  },
  {
    Symbol: "011NSETEST",
    Token: 22271,
  },
  {
    Symbol: "011NSETEST",
    Token: 22101,
  },
  {
    Symbol: "011NSETEST",
    Token: 6962,
  },
  {
    Symbol: "011NSETEST",
    Token: 1069,
  },
  {
    Symbol: "011NSETEST",
    Token: 21945,
  },
  {
    Symbol: "011NSETEST",
    Token: 22133,
  },
  {
    Symbol: "011NSETEST",
    Token: 5876,
  },
  {
    Symbol: "011NSETEST",
    Token: 6986,
  },
  {
    Symbol: "011NSETEST",
    Token: 6736,
  },
  {
    Symbol: "011NSETEST",
    Token: 21943,
  },
  {
    Symbol: "011NSETEST",
    Token: 6882,
  },
  {
    Symbol: "011NSETEST",
    Token: 22058,
  },
  {
    Symbol: "011NSETEST",
    Token: 22376,
  },
  {
    Symbol: "011NSETEST",
    Token: 5554,
  },
  {
    Symbol: "011NSETEST",
    Token: 5523,
  },
  {
    Symbol: "011NSETEST",
    Token: 22106,
  },
  {
    Symbol: "011NSETEST",
    Token: 10866,
  },
  {
    Symbol: "011NSETEST",
    Token: 21918,
  },
  {
    Symbol: "011NSETEST",
    Token: 22409,
  },
  {
    Symbol: "011NSETEST",
    Token: 22270,
  },
  {
    Symbol: "011NSETEST",
    Token: 8,
  },
  {
    Symbol: "011NSETEST",
    Token: 11,
  },
  {
    Symbol: "011NSETEST",
    Token: 22408,
  },
  {
    Symbol: "011NSETEST",
    Token: 1071,
  },
  {
    Symbol: "011NSETEST",
    Token: 1054,
  },
  {
    Symbol: "011NSETEST",
    Token: 2063,
  },
  {
    Symbol: "011NSETEST",
    Token: 22407,
  },
  {
    Symbol: "011NSETEST",
    Token: 18976,
  },
  {
    Symbol: "011NSETEST",
    Token: 752,
  },
  {
    Symbol: "011NSETEST",
    Token: 6555,
  },
  {
    Symbol: "011NSETEST",
    Token: 755,
  },
  {
    Symbol: "011NSETEST",
    Token: 7864,
  },
  {
    Symbol: "011NSETEST",
    Token: 152,
  },
  {
    Symbol: "011NSETEST",
    Token: 1210,
  },
  {
    Symbol: "011NSETEST",
    Token: 1821,
  },
  {
    Symbol: "011NSETEST",
    Token: 1209,
  },
  {
    Symbol: "011NSETEST",
    Token: 1700,
  },
  {
    Symbol: "011NSETEST",
    Token: 971,
  },
  {
    Symbol: "011NSETEST",
    Token: 1513,
  },
  {
    Symbol: "011NSETEST",
    Token: 835,
  },
  {
    Symbol: "011NSETEST",
    Token: 22045,
  },
  {
    Symbol: "011NSETEST",
    Token: 3043,
  },
  {
    Symbol: "011NSETEST",
    Token: 22339,
  },
  {
    Symbol: "011NSETEST",
    Token: 2011,
  },
  {
    Symbol: "011NSETEST",
    Token: 1207,
  },
  {
    Symbol: "011NSETEST",
    Token: 283,
  },
  {
    Symbol: "011NSETEST",
    Token: 22331,
  },
  {
    Symbol: "011NSETEST",
    Token: 22334,
  },
  {
    Symbol: "011NSETEST",
    Token: 1697,
  },
  {
    Symbol: "011NSETEST",
    Token: 2662,
  },
  {
    Symbol: "011NSETEST",
    Token: 3046,
  },
  {
    Symbol: "011NSETEST",
    Token: 20736,
  },
  {
    Symbol: "011NSETEST",
    Token: 21900,
  },
  {
    Symbol: "011NSETEST",
    Token: 20281,
  },
  {
    Symbol: "011NSETEST",
    Token: 22022,
  },
  {
    Symbol: "011NSETEST",
    Token: 2012,
  },
  {
    Symbol: "011NSETEST",
    Token: 22109,
  },
  {
    Symbol: "011NSETEST",
    Token: 2533,
  },
  {
    Symbol: "011NSETEST",
    Token: 22051,
  },
  {
    Symbol: "011NSETEST",
    Token: 22300,
  },
  {
    Symbol: "011NSETEST",
    Token: 587,
  },
  {
    Symbol: "011NSETEST",
    Token: 2722,
  },
  {
    Symbol: "011NSETEST",
    Token: 22446,
  },
  {
    Symbol: "011NSETEST",
    Token: 2536,
  },
  {
    Symbol: "011NSETEST",
    Token: 21917,
  },
  {
    Symbol: "011NSETEST",
    Token: 3202,
  },
  {
    Symbol: "011NSETEST",
    Token: 21907,
  },
  {
    Symbol: "011NSETEST",
    Token: 22052,
  },
  {
    Symbol: "011NSETEST",
    Token: 4562,
  },
  {
    Symbol: "011NSETEST",
    Token: 155,
  },
  {
    Symbol: "011NSETEST",
    Token: 21649,
  },
  {
    Symbol: "011NSETEST",
    Token: 12,
  },
  {
    Symbol: "011NSETEST",
    Token: 416,
  },
  {
    Symbol: "011NSETEST",
    Token: 1886,
  },
  {
    Symbol: "011NSETEST",
    Token: 6695,
  },
  {
    Symbol: "011NSETEST",
    Token: 285,
  },
  {
    Symbol: "011NSETEST",
    Token: 21928,
  },
  {
    Symbol: "011NSETEST",
    Token: 836,
  },
  {
    Symbol: "011NSETEST",
    Token: 22055,
  },
  {
    Symbol: "011NSETEST",
    Token: 22105,
  },
  {
    Symbol: "011NSETEST",
    Token: 22117,
  },
  {
    Symbol: "011NSETEST",
    Token: 7809,
  },
  {
    Symbol: "011NSETEST",
    Token: 8008,
  },
  {
    Symbol: "011NSETEST",
    Token: 22292,
  },
  {
    Symbol: "011NSETEST",
    Token: 21902,
  },
  {
    Symbol: "011NSETEST",
    Token: 18857,
  },
  {
    Symbol: "011NSETEST",
    Token: 288,
  },
  {
    Symbol: "011NSETEST",
    Token: 63,
  },
  {
    Symbol: "011NSETEST",
    Token: 21927,
  },
  {
    Symbol: "011NSETEST",
    Token: 80,
  },
  {
    Symbol: "011NSETEST",
    Token: 1936,
  },
  {
    Symbol: "011NSETEST",
    Token: 1824,
  },
  {
    Symbol: "011NSETEST",
    Token: 22193,
  },
  {
    Symbol: "011NSETEST",
    Token: 1341,
  },
  {
    Symbol: "011NSETEST",
    Token: 1703,
  },
  {
    Symbol: "011NSETEST",
    Token: 3049,
  },
  {
    Symbol: "011NSETEST",
    Token: 20697,
  },
  {
    Symbol: "011NSETEST",
    Token: 22404,
  },
  {
    Symbol: "011NSETEST",
    Token: 8009,
  },
  {
    Symbol: "011NSETEST",
    Token: 22046,
  },
  {
    Symbol: "011NSETEST",
    Token: 21911,
  },
  {
    Symbol: "011NSETEST",
    Token: 1449,
  },
  {
    Symbol: "011NSETEST",
    Token: 2665,
  },
  {
    Symbol: "011NSETEST",
    Token: 423,
  },
  {
    Symbol: "011NSETEST",
    Token: 3194,
  },
  {
    Symbol: "011NSETEST",
    Token: 22121,
  },
  {
    Symbol: "011NSETEST",
    Token: 5880,
  },
  {
    Symbol: "011NSETEST",
    Token: 1887,
  },
  {
    Symbol: "011NSETEST",
    Token: 6871,
  },
  {
    Symbol: "011NSETEST",
    Token: 5525,
  },
  {
    Symbol: "011NSETEST",
    Token: 22184,
  },
  {
    Symbol: "011NSETEST",
    Token: 445,
  },
  {
    Symbol: "011NSETEST",
    Token: 6866,
  },
  {
    Symbol: "011NSETEST",
    Token: 5994,
  },
  {
    Symbol: "011NSETEST",
    Token: 22069,
  },
  {
    Symbol: "011NSETEST",
    Token: 418,
  },
  {
    Symbol: "011NSETEST",
    Token: 7038,
  },
  {
    Symbol: "011NSETEST",
    Token: 6209,
  },
  {
    Symbol: "011NSETEST",
    Token: 22403,
  },
  {
    Symbol: "011NSETEST",
    Token: 62,
  },
  {
    Symbol: "011NSETEST",
    Token: 4570,
  },
  {
    Symbol: "011NSETEST",
    Token: 6987,
  },
  {
    Symbol: "011NSETEST",
    Token: 6304,
  },
  {
    Symbol: "011NSETEST",
    Token: 21930,
  },
  {
    Symbol: "011NSETEST",
    Token: 2125,
  },
  {
    Symbol: "011NSETEST",
    Token: 5012,
  },
  {
    Symbol: "011NSETEST",
    Token: 21929,
  },
  {
    Symbol: "011NSETEST",
    Token: 6868,
  },
  {
    Symbol: "011NSETEST",
    Token: 3516,
  },
  {
    Symbol: "011NSETEST",
    Token: 22047,
  },
  {
    Symbol: "011NSETEST",
    Token: 6870,
  },
  {
    Symbol: "011NSETEST",
    Token: 1709,
  },
  {
    Symbol: "011NSETEST",
    Token: 22194,
  },
  {
    Symbol: "011NSETEST",
    Token: 3058,
  },
  {
    Symbol: "011NSETEST",
    Token: 7892,
  },
  {
    Symbol: "011NSETEST",
    Token: 14251,
  },
  {
    Symbol: "011NSETEST",
    Token: 2123,
  },
  {
    Symbol: "011NSETEST",
    Token: 18973,
  },
  {
    Symbol: "011NSETEST",
    Token: 2013,
  },
  {
    Symbol: "011NSETEST",
    Token: 3638,
  },
  {
    Symbol: "011NSETEST",
    Token: 837,
  },
  {
    Symbol: "011NSETEST",
    Token: 2224,
  },
  {
    Symbol: "011NSETEST",
    Token: 953,
  },
  {
    Symbol: "011NSETEST",
    Token: 1361,
  },
  {
    Symbol: "011NSETEST",
    Token: 5877,
  },
  {
    Symbol: "011NSETEST",
    Token: 21640,
  },
  {
    Symbol: "011NSETEST",
    Token: 5330,
  },
  {
    Symbol: "011NSETEST",
    Token: 21947,
  },
  {
    Symbol: "011NSETEST",
    Token: 4863,
  },
  {
    Symbol: "011NSETEST",
    Token: 22187,
  },
  {
    Symbol: "011NSETEST",
    Token: 5226,
  },
  {
    Symbol: "011NSETEST",
    Token: 5078,
  },
  {
    Symbol: "011NSETEST",
    Token: 5524,
  },
  {
    Symbol: "011NSETEST",
    Token: 21140,
  },
  {
    Symbol: "011NSETEST",
    Token: 5025,
  },
  {
    Symbol: "011NSETEST",
    Token: 7500,
  },
  {
    Symbol: "011NSETEST",
    Token: 8010,
  },
  {
    Symbol: "011NSETEST",
    Token: 22272,
  },
  {
    Symbol: "011NSETEST",
    Token: 22302,
  },
  {
    Symbol: "011NSETEST",
    Token: 4982,
  },
  {
    Symbol: "011NSETEST",
    Token: 7495,
  },
  {
    Symbol: "011NSETEST",
    Token: 22135,
  },
  {
    Symbol: "011NSETEST",
    Token: 6307,
  },
  {
    Symbol: "011NSETEST",
    Token: 20572,
  },
  {
    Symbol: "011NSETEST",
    Token: 1212,
  },
  {
    Symbol: "011NSETEST",
    Token: 22267,
  },
  {
    Symbol: "011NSETEST",
    Token: 5467,
  },
  {
    Symbol: "011NSETEST",
    Token: 21647,
  },
  {
    Symbol: "011NSETEST",
    Token: 3650,
  },
  {
    Symbol: "011NSETEST",
    Token: 11868,
  },
  {
    Symbol: "011NSETEST",
    Token: 2372,
  },
  {
    Symbol: "011NSETEST",
    Token: 7153,
  },
  {
    Symbol: "011NSETEST",
    Token: 21040,
  },
  {
    Symbol: "011NSETEST",
    Token: 22103,
  },
  {
    Symbol: "011NSETEST",
    Token: 852,
  },
  {
    Symbol: "011NSETEST",
    Token: 21919,
  },
  {
    Symbol: "011NSETEST",
    Token: 22298,
  },
  {
    Symbol: "011NSETEST",
    Token: 849,
  },
  {
    Symbol: "011NSETEST",
    Token: 976,
  },
  {
    Symbol: "011NSETEST",
    Token: 2733,
  },
  {
    Symbol: "011NSETEST",
    Token: 5414,
  },
  {
    Symbol: "011NSETEST",
    Token: 7867,
  },
  {
    Symbol: "011NSETEST",
    Token: 22451,
  },
  {
    Symbol: "011NSETEST",
    Token: 20601,
  },
  {
    Symbol: "011NSETEST",
    Token: 22337,
  },
  {
    Symbol: "011NSETEST",
    Token: 22342,
  },
  {
    Symbol: "011NSETEST",
    Token: 853,
  },
  {
    Symbol: "011NSETEST",
    Token: 22262,
  },
  {
    Symbol: "011NSETEST",
    Token: 3695,
  },
  {
    Symbol: "011NSETEST",
    Token: 22448,
  },
  {
    Symbol: "011NSETEST",
    Token: 1827,
  },
  {
    Symbol: "011NSETEST",
    Token: 13472,
  },
  {
    Symbol: "011NSETEST",
    Token: 838,
  },
  {
    Symbol: "011NSETEST",
    Token: 599,
  },
  {
    Symbol: "011NSETEST",
    Token: 22449,
  },
  {
    Symbol: "011NSETEST",
    Token: 22301,
  },
  {
    Symbol: "011NSETEST",
    Token: 2071,
  },
  {
    Symbol: "011NSETEST",
    Token: 7894,
  },
  {
    Symbol: "011NSETEST",
    Token: 855,
  },
  {
    Symbol: "011NSETEST",
    Token: 982,
  },
  {
    Symbol: "011NSETEST",
    Token: 22303,
  },
  {
    Symbol: "011NSETEST",
    Token: 22340,
  },
  {
    Symbol: "011NSETEST",
    Token: 22450,
  },
  {
    Symbol: "011NSETEST",
    Token: 22269,
  },
  {
    Symbol: "011NSETEST",
    Token: 21422,
  },
  {
    Symbol: "011NSETEST",
    Token: 1080,
  },
  {
    Symbol: "011NSETEST",
    Token: 773,
  },
  {
    Symbol: "011NSETEST",
    Token: 20922,
  },
  {
    Symbol: "011NSETEST",
    Token: 21039,
  },
  {
    Symbol: "011NSETEST",
    Token: 985,
  },
  {
    Symbol: "011NSETEST",
    Token: 22299,
  },
  {
    Symbol: "011NSETEST",
    Token: 22335,
  },
  {
    Symbol: "011NSETEST",
    Token: 861,
  },
  {
    Symbol: "011NSETEST",
    Token: 988,
  },
  {
    Symbol: "011NSETEST",
    Token: 8319,
  },
  {
    Symbol: "011NSETEST",
    Token: 22264,
  },
  {
    Symbol: "011NSETEST",
    Token: 1364,
  },
  {
    Symbol: "011NSETEST",
    Token: 21390,
  },
  {
    Symbol: "011NSETEST",
    Token: 1158,
  },
  {
    Symbol: "011NSETEST",
    Token: 22336,
  },
  {
    Symbol: "011NSETEST",
    Token: 22343,
  },
  {
    Symbol: "011NSETEST",
    Token: 21990,
  },
  {
    Symbol: "011NSETEST",
    Token: 22043,
  },
  {
    Symbol: "011NSETEST",
    Token: 22136,
  },
  {
    Symbol: "011NSETEST",
    Token: 22263,
  },
  {
    Symbol: "011NSETEST",
    Token: 1362,
  },
  {
    Symbol: "011NSETEST",
    Token: 22296,
  },
  {
    Symbol: "011NSETEST",
    Token: 846,
  },
  {
    Symbol: "011NSETEST",
    Token: 22265,
  },
  {
    Symbol: "011NSETEST",
    Token: 22452,
  },
  {
    Symbol: "011NSETEST",
    Token: 843,
  },
  {
    Symbol: "011NSETEST",
    Token: 972,
  },
  {
    Symbol: "011NSETEST",
    Token: 22266,
  },
  {
    Symbol: "011NSETEST",
    Token: 973,
  },
  {
    Symbol: "011NSETEST",
    Token: 840,
  },
  {
    Symbol: "011NSETEST",
    Token: 758,
  },
  {
    Symbol: "011NSETEST",
    Token: 1650,
  },
  {
    Symbol: "011NSETEST",
    Token: 1727,
  },
  {
    Symbol: "011NSETEST",
    Token: 21419,
  },
  {
    Symbol: "011NSETEST",
    Token: 1522,
  },
  {
    Symbol: "011NSETEST",
    Token: 1236,
  },
  {
    Symbol: "011NSETEST",
    Token: 22009,
  },
  {
    Symbol: "011NSETEST",
    Token: 21949,
  },
  {
    Symbol: "011NSETEST",
    Token: 21993,
  },
  {
    Symbol: "011NSETEST",
    Token: 994,
  },
  {
    Symbol: "011NSETEST",
    Token: 22304,
  },
  {
    Symbol: "011NSETEST",
    Token: 5671,
  },
  {
    Symbol: "011NSETEST",
    Token: 1215,
  },
  {
    Symbol: "011NSETEST",
    Token: 1365,
  },
  {
    Symbol: "011NSETEST",
    Token: 1839,
  },
  {
    Symbol: "011NSETEST",
    Token: 20923,
  },
  {
    Symbol: "011NSETEST",
    Token: 1157,
  },
  {
    Symbol: "011NSETEST",
    Token: 20921,
  },
  {
    Symbol: "011NSETEST",
    Token: 1516,
  },
  {
    Symbol: "011NSETEST",
    Token: 21216,
  },
  {
    Symbol: "011NSETEST",
    Token: 7843,
  },
  {
    Symbol: "011NSETEST",
    Token: 1453,
  },
  {
    Symbol: "011NSETEST",
    Token: 8126,
  },
  {
    Symbol: "011NSETEST",
    Token: 21932,
  },
  {
    Symbol: "011NSETEST",
    Token: 22297,
  },
  {
    Symbol: "011NSETEST",
    Token: 22059,
  },
  {
    Symbol: "011NSETEST",
    Token: 1160,
  },
  {
    Symbol: "011NSETEST",
    Token: 779,
  },
  {
    Symbol: "011NSETEST",
    Token: 22173,
  },
  {
    Symbol: "011NSETEST",
    Token: 21549,
  },
  {
    Symbol: "011NSETEST",
    Token: 864,
  },
  {
    Symbol: "011NSETEST",
    Token: 22294,
  },
  {
    Symbol: "011NSETEST",
    Token: 20653,
  },
  {
    Symbol: "011NSETEST",
    Token: 22447,
  },
  {
    Symbol: "011NSETEST",
    Token: 1074,
  },
  {
    Symbol: "011NSETEST",
    Token: 1454,
  },
  {
    Symbol: "011NSETEST",
    Token: 21901,
  },
  {
    Symbol: "011NSETEST",
    Token: 605,
  },
  {
    Symbol: "011NSETEST",
    Token: 22079,
  },
  {
    Symbol: "011NSETEST",
    Token: 22023,
  },
  {
    Symbol: "011NSETEST",
    Token: 22033,
  },
  {
    Symbol: "011NSETEST",
    Token: 22114,
  },
  {
    Symbol: "011NSETEST",
    Token: 858,
  },
  {
    Symbol: "011NSETEST",
    Token: 22178,
  },
  {
    Symbol: "011NSETEST",
    Token: 20666,
  },
  {
    Symbol: "011NSETEST",
    Token: 754,
  },
  {
    Symbol: "011NSETEST",
    Token: 14,
  },
  {
    Symbol: "011NSETEST",
    Token: 776,
  },
  {
    Symbol: "011NSETEST",
    Token: 1000,
  },
  {
    Symbol: "011NSETEST",
    Token: 21921,
  },
  {
    Symbol: "011NSETEST",
    Token: 1525,
  },
  {
    Symbol: "011NSETEST",
    Token: 21235,
  },
  {
    Symbol: "011NSETEST",
    Token: 1237,
  },
  {
    Symbol: "011NSETEST",
    Token: 20279,
  },
  {
    Symbol: "011NSETEST",
    Token: 2014,
  },
  {
    Symbol: "011NSETEST",
    Token: 7194,
  },
  {
    Symbol: "011NSETEST",
    Token: 1644,
  },
  {
    Symbol: "011NSETEST",
    Token: 1647,
  },
  {
    Symbol: "011NSETEST",
    Token: 21936,
  },
  {
    Symbol: "011NSETEST",
    Token: 21975,
  },
  {
    Symbol: "011NSETEST",
    Token: 22014,
  },
  {
    Symbol: "011NSETEST",
    Token: 22056,
  },
  {
    Symbol: "011NSETEST",
    Token: 1890,
  },
  {
    Symbol: "011NSETEST",
    Token: 20280,
  },
  {
    Symbol: "011NSETEST",
    Token: 20598,
  },
  {
    Symbol: "011NSETEST",
    Token: 1646,
  },
  {
    Symbol: "011NSETEST",
    Token: 1830,
  },
  {
    Symbol: "011NSETEST",
    Token: 3061,
  },
  {
    Symbol: "011NSETEST",
    Token: 22179,
  },
  {
    Symbol: "011NSETEST",
    Token: 20288,
  },
  {
    Symbol: "011NSETEST",
    Token: 21948,
  },
  {
    Symbol: "011NSETEST",
    Token: 22050,
  },
  {
    Symbol: "011NSETEST",
    Token: 1239,
  },
  {
    Symbol: "011NSETEST",
    Token: 5971,
  },
  {
    Symbol: "011NSETEST",
    Token: 1077,
  },
  {
    Symbol: "011NSETEST",
    Token: 22073,
  },
  {
    Symbol: "011NSETEST",
    Token: 1241,
  },
  {
    Symbol: "011NSETEST",
    Token: 1836,
  },
  {
    Symbol: "011NSETEST",
    Token: 997,
  },
  {
    Symbol: "011NSETEST",
    Token: 20654,
  },
  {
    Symbol: "011NSETEST",
    Token: 22295,
  },
  {
    Symbol: "011NSETEST",
    Token: 22261,
  },
  {
    Symbol: "011NSETEST",
    Token: 22369,
  },
  {
    Symbol: "011NSETEST",
    Token: 1075,
  },
  {
    Symbol: "011NSETEST",
    Token: 1233,
  },
  {
    Symbol: "011NSETEST",
    Token: 22368,
  },
  {
    Symbol: "011NSETEST",
    Token: 1227,
  },
  {
    Symbol: "011NSETEST",
    Token: 21909,
  },
  {
    Symbol: "011NSETEST",
    Token: 991,
  },
  {
    Symbol: "011NSETEST",
    Token: 22005,
  },
  {
    Symbol: "011NSETEST",
    Token: 22372,
  },
  {
    Symbol: "011NSETEST",
    Token: 22293,
  },
  {
    Symbol: "011NSETEST",
    Token: 22374,
  },
  {
    Symbol: "011NSETEST",
    Token: 22081,
  },
  {
    Symbol: "011NSETEST",
    Token: 22174,
  },
  {
    Symbol: "011NSETEST",
    Token: 22332,
  },
  {
    Symbol: "011NSETEST",
    Token: 22333,
  },
  {
    Symbol: "011NSETEST",
    Token: 22195,
  },
  {
    Symbol: "011NSETEST",
    Token: 593,
  },
  {
    Symbol: "011NSETEST",
    Token: 1944,
  },
  {
    Symbol: "011NSETEST",
    Token: 22454,
  },
  {
    Symbol: "011NSETEST",
    Token: 22338,
  },
  {
    Symbol: "011NSETEST",
    Token: 1953,
  },
  {
    Symbol: "011NSETEST",
    Token: 1083,
  },
  {
    Symbol: "011NSETEST",
    Token: 1896,
  },
  {
    Symbol: "011NSETEST",
    Token: 2016,
  },
  {
    Symbol: "011NSETEST",
    Token: 2017,
  },
  {
    Symbol: "011NSETEST",
    Token: 1891,
  },
  {
    Symbol: "011NSETEST",
    Token: 1947,
  },
  {
    Symbol: "011NSETEST",
    Token: 1425,
  },
  {
    Symbol: "011NSETEST",
    Token: 6315,
  },
  {
    Symbol: "011NSETEST",
    Token: 1939,
  },
  {
    Symbol: "011NSETEST",
    Token: 7193,
  },
  {
    Symbol: "011NSETEST",
    Token: 2019,
  },
  {
    Symbol: "011NSETEST",
    Token: 761,
  },
  {
    Symbol: "011NSETEST",
    Token: 22180,
  },
  {
    Symbol: "011NSETEST",
    Token: 782,
  },
  {
    Symbol: "011NSETEST",
    Token: 1733,
  },
  {
    Symbol: "011NSETEST",
    Token: 1428,
  },
  {
    Symbol: "011NSETEST",
    Token: 6895,
  },
  {
    Symbol: "011NSETEST",
    Token: 1369,
  },
  {
    Symbol: "011NSETEST",
    Token: 2020,
  },
  {
    Symbol: "011NSETEST",
    Token: 1959,
  },
  {
    Symbol: "011NSETEST",
    Token: 617,
  },
  {
    Symbol: "011NSETEST",
    Token: 1695,
  },
  {
    Symbol: "011NSETEST",
    Token: 1938,
  },
  {
    Symbol: "011NSETEST",
    Token: 22341,
  },
  {
    Symbol: "011NSETEST",
    Token: 1905,
  },
  {
    Symbol: "011NSETEST",
    Token: 65,
  },
  {
    Symbol: "011NSETEST",
    Token: 2021,
  },
  {
    Symbol: "011NSETEST",
    Token: 2023,
  },
  {
    Symbol: "011NSETEST",
    Token: 6317,
  },
  {
    Symbol: "011NSETEST",
    Token: 22410,
  },
  {
    Symbol: "011NSETEST",
    Token: 1651,
  },
  {
    Symbol: "011NSETEST",
    Token: 21910,
  },
  {
    Symbol: "011NSETEST",
    Token: 596,
  },
  {
    Symbol: "011NSETEST",
    Token: 1940,
  },
  {
    Symbol: "011NSETEST",
    Token: 1833,
  },
  {
    Symbol: "011NSETEST",
    Token: 1910,
  },
  {
    Symbol: "011NSETEST",
    Token: 1652,
  },
  {
    Symbol: "011NSETEST",
    Token: 22102,
  },
  {
    Symbol: "011NSETEST",
    Token: 614,
  },
  {
    Symbol: "011NSETEST",
    Token: 2022,
  },
  {
    Symbol: "011NSETEST",
    Token: 1902,
  },
  {
    Symbol: "011NSETEST",
    Token: 1866,
  },
  {
    Symbol: "011NSETEST",
    Token: 1246,
  },
  {
    Symbol: "011NSETEST",
    Token: 2724,
  },
  {
    Symbol: "011NSETEST",
    Token: 3204,
  },
  {
    Symbol: "011NSETEST",
    Token: 1863,
  },
  {
    Symbol: "011NSETEST",
    Token: 22370,
  },
  {
    Symbol: "011NSETEST",
    Token: 21971,
  },
  {
    Symbol: "011NSETEST",
    Token: 1899,
  },
  {
    Symbol: "011NSETEST",
    Token: 1730,
  },
  {
    Symbol: "011NSETEST",
    Token: 22075,
  },
  {
    Symbol: "011NSETEST",
    Token: 22412,
  },
  {
    Symbol: "011NSETEST",
    Token: 1888,
  },
  {
    Symbol: "011NSETEST",
    Token: 22130,
  },
  {
    Symbol: "011NSETEST",
    Token: 22183,
  },
  {
    Symbol: "011NSETEST",
    Token: 1872,
  },
  {
    Symbol: "011NSETEST",
    Token: 21,
  },
  {
    Symbol: "011NSETEST",
    Token: 2024,
  },
  {
    Symbol: "011NSETEST",
    Token: 1739,
  },
  {
    Symbol: "011NSETEST",
    Token: 1745,
  },
  {
    Symbol: "011NSETEST",
    Token: 1871,
  },
  {
    Symbol: "011NSETEST",
    Token: 22406,
  },
  {
    Symbol: "011NSETEST",
    Token: 1373,
  },
  {
    Symbol: "011NSETEST",
    Token: 72,
  },
  {
    Symbol: "011NSETEST",
    Token: 1531,
  },
  {
    Symbol: "011NSETEST",
    Token: 609,
  },
  {
    Symbol: "011NSETEST",
    Token: 21716,
  },
  {
    Symbol: "011NSETEST",
    Token: 1757,
  },
  {
    Symbol: "011NSETEST",
    Token: 1738,
  },
  {
    Symbol: "011NSETEST",
    Token: 1742,
  },
  {
    Symbol: "011NSETEST",
    Token: 3726,
  },
  {
    Symbol: "011NSETEST",
    Token: 22176,
  },
  {
    Symbol: "011NSETEST",
    Token: 1860,
  },
  {
    Symbol: "011NSETEST",
    Token: 1248,
  },
  {
    Symbol: "011NSETEST",
    Token: 7050,
  },
  {
    Symbol: "011NSETEST",
    Token: 22413,
  },
  {
    Symbol: "011NSETEST",
    Token: 5577,
  },
  {
    Symbol: "011NSETEST",
    Token: 956,
  },
  {
    Symbol: "011NSETEST",
    Token: 29,
  },
  {
    Symbol: "011NSETEST",
    Token: 1251,
  },
  {
    Symbol: "011NSETEST",
    Token: 87,
  },
  {
    Symbol: "011NSETEST",
    Token: 22080,
  },
  {
    Symbol: "011NSETEST",
    Token: 22375,
  },
  {
    Symbol: "011NSETEST",
    Token: 1535,
  },
  {
    Symbol: "011NSETEST",
    Token: 76,
  },
  {
    Symbol: "011NSETEST",
    Token: 22414,
  },
  {
    Symbol: "011NSETEST",
    Token: 20569,
  },
  {
    Symbol: "011NSETEST",
    Token: 1378,
  },
  {
    Symbol: "011NSETEST",
    Token: 22453,
  },
  {
    Symbol: "011NSETEST",
    Token: 1432,
  },
  {
    Symbol: "011NSETEST",
    Token: 22455,
  },
  {
    Symbol: "011NSETEST",
    Token: 22405,
  },
  {
    Symbol: "011NSETEST",
    Token: 7205,
  },
  {
    Symbol: "011NSETEST",
    Token: 22373,
  },
  {
    Symbol: "011NSETEST",
    Token: 1376,
  },
  {
    Symbol: "011NSETEST",
    Token: 1437,
  },
  {
    Symbol: "011NSETEST",
    Token: 1430,
  },
  {
    Symbol: "011NSETEST",
    Token: 22134,
  },
  {
    Symbol: "011NSETEST",
    Token: 92,
  },
  {
    Symbol: "011NSETEST",
    Token: 22411,
  },
  {
    Symbol: "011NSETEST",
    Token: 1532,
  },
  {
    Symbol: "011NSETEST",
    Token: 9962,
  },
  {
    Symbol: "011NSETEST",
    Token: 1379,
  },
  {
    Symbol: "011NSETEST",
    Token: 2730,
  },
  {
    Symbol: "011NSETEST",
    Token: 21992,
  },
  {
    Symbol: "011NSETEST",
    Token: 590,
  },
  {
    Symbol: "011NSETEST",
    Token: 179,
  },
  {
    Symbol: "011NSETEST",
    Token: 22113,
  },
  {
    Symbol: "011NSETEST",
    Token: 1655,
  },
  {
    Symbol: "011NSETEST",
    Token: 22371,
  },
  {
    Symbol: "011NSETEST",
    Token: 22097,
  },
  {
    Symbol: "011NSETEST",
    Token: 1163,
  },
  {
    Symbol: "011NSETEST",
    Token: 1645,
  },
  {
    Symbol: "011NSETEST",
    Token: 21389,
  },
  {
    Symbol: "011NSETEST",
    Token: 20,
  },
  {
    Symbol: "011NSETEST",
    Token: 21650,
  },
  {
    Symbol: "011NSETEST",
    Token: 1221,
  },
  {
    Symbol: "011NSETEST",
    Token: 1950,
  },
  {
    Symbol: "011NSETEST",
    Token: 21937,
  },
  {
    Symbol: "011NSETEST",
    Token: 1528,
  },
  {
    Symbol: "011NSETEST",
    Token: 1712,
  },
  {
    Symbol: "011NSETEST",
    Token: 1368,
  },
  {
    Symbol: "011NSETEST",
    Token: 22017,
  },
  {
    Symbol: "011NSETEST",
    Token: 1165,
  },
  {
    Symbol: "011NSETEST",
    Token: 18,
  },
  {
    Symbol: "011NSETEST",
    Token: 611,
  },
  {
    Symbol: "011NSETEST",
    Token: 1422,
  },
  {
    Symbol: "011NSETEST",
    Token: 1715,
  },
  {
    Symbol: "011NSETEST",
    Token: 1084,
  },
  {
    Symbol: "011NSETEST",
    Token: 22129,
  },
  {
    Symbol: "011NSETEST",
    Token: 22111,
  },
  {
    Symbol: "011NSETEST",
    Token: 1854,
  },
  {
    Symbol: "011NSETEST",
    Token: 1086,
  },
  {
    Symbol: "011NSETEST",
    Token: 1649,
  },
  {
    Symbol: "011NSETEST",
    Token: 1842,
  },
  {
    Symbol: "011NSETEST",
    Token: 1721,
  },
  {
    Symbol: "011NSETEST",
    Token: 20600,
  },
  {
    Symbol: "011NSETEST",
    Token: 22002,
  },
  {
    Symbol: "011NSETEST",
    Token: 22070,
  },
  {
    Symbol: "011NSETEST",
    Token: 22128,
  },
  {
    Symbol: "011NSETEST",
    Token: 22077,
  },
  {
    Symbol: "011NSETEST",
    Token: 6741,
  },
  {
    Symbol: "011NSETEST",
    Token: 1446,
  },
  {
    Symbol: "011NSETEST",
    Token: 22457,
  },
  {
    Symbol: "011NSETEST",
    Token: 1443,
  },
  {
    Symbol: "672AP28",
    Token: 20914,
  },
  {
    Symbol: "672GA30",
    Token: 20913,
  },
  {
    Symbol: "672GJ30",
    Token: 3750,
  },
  {
    Symbol: "672HR35",
    Token: 867,
  },
  {
    Symbol: "672KA33",
    Token: 1166,
  },
  {
    Symbol: "672KL27",
    Token: 2901,
  },
  {
    Symbol: "672PN30",
    Token: 21786,
  },
  {
    Symbol: "672RJ30",
    Token: 171,
  },
  {
    Symbol: "672TN27",
    Token: 420,
  },
  {
    Symbol: "672TS26",
    Token: 22192,
  },
  {
    Symbol: "673KL28",
    Token: 21903,
  },
  {
    Symbol: "673MP30",
    Token: 21981,
  },
  {
    Symbol: "673PN40",
    Token: 1382,
  },
  {
    Symbol: "673SK30",
    Token: 173,
  },
  {
    Symbol: "673TN30",
    Token: 22122,
  },
  {
    Symbol: "673TN40",
    Token: 1254,
  },
  {
    Symbol: "673TS50",
    Token: 1256,
  },
  {
    Symbol: "674GA30",
    Token: 165,
  },
  {
    Symbol: "674PN24",
    Token: 21788,
  },
  {
    Symbol: "674TN50",
    Token: 22112,
  },
  {
    Symbol: "674TS50",
    Token: 1386,
  },
  {
    Symbol: "674UP30",
    Token: 161,
  },
  {
    Symbol: "675BR27",
    Token: 4980,
  },
  {
    Symbol: "675GJ29",
    Token: 6093,
  },
  {
    Symbol: "675GJ31",
    Token: 4575,
  },
  {
    Symbol: "675KA33",
    Token: 74,
  },
  {
    Symbol: "675KA33A",
    Token: 618,
  },
  {
    Symbol: "675KA34",
    Token: 1092,
  },
  {
    Symbol: "675KA35",
    Token: 1006,
  },
  {
    Symbol: "675RJ30",
    Token: 969,
  },
  {
    Symbol: "675RJ31",
    Token: 3195,
  },
  {
    Symbol: "676GS2061",
    Token: 2317,
  },
  {
    Symbol: "676MP33",
    Token: 95,
  },
  {
    Symbol: "676MP40",
    Token: 1012,
  },
  {
    Symbol: "676PN24",
    Token: 21718,
  },
  {
    Symbol: "676PN40",
    Token: 877,
  },
  {
    Symbol: "676RJ31",
    Token: 3641,
  },
  {
    Symbol: "676TN31",
    Token: 5742,
  },
  {
    Symbol: "677AP38",
    Token: 876,
  },
  {
    Symbol: "677AP40",
    Token: 22422,
  },
  {
    Symbol: "677BR28",
    Token: 5227,
  },
  {
    Symbol: "677KA33",
    Token: 22421,
  },
  {
    Symbol: "677KA34",
    Token: 35,
  },
  {
    Symbol: "677RJ31",
    Token: 3511,
  },
  {
    Symbol: "677RJ31A",
    Token: 5743,
  },
  {
    Symbol: "677TN24",
    Token: 22131,
  },
  {
    Symbol: "677TN31",
    Token: 3364,
  },
  {
    Symbol: "677WB40",
    Token: 42,
  },
  {
    Symbol: "678AP38",
    Token: 3196,
  },
  {
    Symbol: "678AP39",
    Token: 3200,
  },
  {
    Symbol: "678GA31",
    Token: 4578,
  },
  {
    Symbol: "678JK33",
    Token: 3244,
  },
  {
    Symbol: "678KA32",
    Token: 182,
  },
  {
    Symbol: "678KL31",
    Token: 3655,
  },
  {
    Symbol: "678MH31",
    Token: 3659,
  },
  {
    Symbol: "678MH32",
    Token: 185,
  },
  {
    Symbol: "678MN31",
    Token: 3304,
  },
  {
    Symbol: "678RJ23",
    Token: 21897,
  },
  {
    Symbol: "678RJ30",
    Token: 22063,
  },
  {
    Symbol: "678RJ31",
    Token: 3241,
  },
  {
    Symbol: "678RJ31A",
    Token: 3373,
  },
  {
    Symbol: "678SK31",
    Token: 3643,
  },
  {
    Symbol: "678TS50",
    Token: 878,
  },
  {
    Symbol: "678WB35",
    Token: 1169,
  },
  {
    Symbol: "679AP34",
    Token: 1004,
  },
  {
    Symbol: "679GS2027",
    Token: 7202,
  },
  {
    Symbol: "679GS2029",
    Token: 7195,
  },
  {
    Symbol: "679HR31",
    Token: 3517,
  },
  {
    Symbol: "679JK30",
    Token: 22182,
  },
  {
    Symbol: "679MP33",
    Token: 32,
  },
  {
    Symbol: "679MP40",
    Token: 1095,
  },
  {
    Symbol: "679PN35",
    Token: 1007,
  },
  {
    Symbol: "679WB28",
    Token: 4877,
  },
  {
    Symbol: "679WB28A",
    Token: 5344,
  },
  {
    Symbol: "67AS27",
    Token: 2374,
  },
  {
    Symbol: "67GJ30",
    Token: 167,
  },
  {
    Symbol: "67HR30",
    Token: 26,
  },
  {
    Symbol: "67JK30",
    Token: 23,
  },
  {
    Symbol: "67JK32",
    Token: 1253,
  },
  {
    Symbol: "67KA30",
    Token: 170,
  },
  {
    Symbol: "67KL27",
    Token: 21916,
  },
  {
    Symbol: "67MH28",
    Token: 158,
  },
  {
    Symbol: "67ML30",
    Token: 83,
  },
  {
    Symbol: "67NL30",
    Token: 86,
  },
  {
    Symbol: "67PN30",
    Token: 21719,
  },
  {
    Symbol: "67PN40",
    Token: 22456,
  },
  {
    Symbol: "67RJ24",
    Token: 22071,
  },
  {
    Symbol: "67TR30",
    Token: 89,
  },
  {
    Symbol: "681KL31",
    Token: 4581,
  },
  {
    Symbol: "681MH28",
    Token: 427,
  },
  {
    Symbol: "681MH31",
    Token: 3704,
  },
  {
    Symbol: "681PN31",
    Token: 3755,
  },
  {
    Symbol: "681TR35",
    Token: 1172,
  },
  {
    Symbol: "682BR28",
    Token: 5026,
  },
  {
    Symbol: "682CG28",
    Token: 4984,
  },
  {
    Symbol: "682JH34",
    Token: 3082,
  },
  {
    Symbol: "682KL32",
    Token: 3077,
  },
  {
    Symbol: "682KL35",
    Token: 3083,
  },
  {
    Symbol: "682MH32",
    Token: 3376,
  },
  {
    Symbol: "682ML31",
    Token: 3238,
  },
  {
    Symbol: "682PN36",
    Token: 3085,
  },
  {
    Symbol: "682RJ31",
    Token: 3259,
  },
  {
    Symbol: "683BR30",
    Token: 7043,
  },
  {
    Symbol: "683GA31",
    Token: 5882,
  },
  {
    Symbol: "683GJ30",
    Token: 297,
  },
  {
    Symbol: "683GS2039",
    Token: 6935,
  },
  {
    Symbol: "683KA31",
    Token: 6988,
  },
  {
    Symbol: "683KA31A",
    Token: 7045,
  },
  {
    Symbol: "683KA31B",
    Token: 7155,
  },
  {
    Symbol: "683MH31",
    Token: 4752,
  },
  {
    Symbol: "683MH32",
    Token: 3567,
  },
  {
    Symbol: "683MH32A",
    Token: 3665,
  },
  {
    Symbol: "683MH32B",
    Token: 4580,
  },
  {
    Symbol: "683TN31",
    Token: 4755,
  },
  {
    Symbol: "683TN31A",
    Token: 7156,
  },
  {
    Symbol: "683WB28",
    Token: 4989,
  },
  {
    Symbol: "683WB31",
    Token: 2925,
  },
  {
    Symbol: "683WB31A",
    Token: 3519,
  },
  {
    Symbol: "684AR31",
    Token: 3257,
  },
  {
    Symbol: "684BR30",
    Token: 7152,
  },
  {
    Symbol: "684GA31",
    Token: 3076,
  },
  {
    Symbol: "684GJ30",
    Token: 454,
  },
  {
    Symbol: "684GJ31",
    Token: 2928,
  },
  {
    Symbol: "684GJ31A",
    Token: 5558,
  },
  {
    Symbol: "684HR32",
    Token: 3571,
  },
  {
    Symbol: "684JK31",
    Token: 3073,
  },
  {
    Symbol: "684KL30",
    Token: 21913,
  },
  {
    Symbol: "684KL33",
    Token: 3656,
  },
  {
    Symbol: "684MH32",
    Token: 3520,
  },
  {
    Symbol: "684MZ34",
    Token: 1090,
  },
  {
    Symbol: "684PN31",
    Token: 5883,
  },
  {
    Symbol: "684RJ24",
    Token: 22078,
  },
  {
    Symbol: "684RJ30",
    Token: 22068,
  },
  {
    Symbol: "684RJ31",
    Token: 3713,
  },
  {
    Symbol: "684RJ31A",
    Token: 4571,
  },
  {
    Symbol: "684RJ31B",
    Token: 6990,
  },
  {
    Symbol: "684TS40",
    Token: 68,
  },
  {
    Symbol: "684UK31",
    Token: 2919,
  },
  {
    Symbol: "684UP31",
    Token: 5887,
  },
  {
    Symbol: "685AP36",
    Token: 38,
  },
  {
    Symbol: "685AR31",
    Token: 2922,
  },
  {
    Symbol: "685AS29",
    Token: 8186,
  },
  {
    Symbol: "685AS31",
    Token: 2930,
  },
  {
    Symbol: "685AS31A",
    Token: 5881,
  },
  {
    Symbol: "685BR30",
    Token: 5556,
  },
  {
    Symbol: "685GA31",
    Token: 2077,
  },
  {
    Symbol: "685GA31A",
    Token: 2910,
  },
  {
    Symbol: "685GA31B",
    Token: 5674,
  },
  {
    Symbol: "685GA31C",
    Token: 7154,
  },
  {
    Symbol: "685KA30",
    Token: 300,
  },
  {
    Symbol: "685ML31",
    Token: 2937,
  },
  {
    Symbol: "685MP31",
    Token: 5677,
  },
  {
    Symbol: "685NL31",
    Token: 3265,
  },
  {
    Symbol: "685NL31A",
    Token: 3710,
  },
  {
    Symbol: "685RJ30",
    Token: 302,
  },
  {
    Symbol: "685RJ31",
    Token: 2079,
  },
  {
    Symbol: "685TN51",
    Token: 2097,
  },
  {
    Symbol: "685WB30",
    Token: 22219,
  },
  {
    Symbol: "685WB30A",
    Token: 22226,
  },
  {
    Symbol: "685WB31",
    Token: 5566,
  },
  {
    Symbol: "686AP35",
    Token: 5736,
  },
  {
    Symbol: "686HP30",
    Token: 6878,
  },
  {
    Symbol: "686JH36",
    Token: 2916,
  },
  {
    Symbol: "686KA30",
    Token: 449,
  },
  {
    Symbol: "686KL35",
    Token: 5737,
  },
  {
    Symbol: "686MH32",
    Token: 3707,
  },
  {
    Symbol: "686PN33",
    Token: 2940,
  },
  {
    Symbol: "686PY34",
    Token: 2943,
  },
  {
    Symbol: "686RJ36",
    Token: 5740,
  },
  {
    Symbol: "686TS41",
    Token: 2095,
  },
  {
    Symbol: "686UP30",
    Token: 22094,
  },
  {
    Symbol: "687AP35",
    Token: 746,
  },
  {
    Symbol: "687AP37",
    Token: 2096,
  },
  {
    Symbol: "687AP38",
    Token: 41,
  },
  {
    Symbol: "687AP40",
    Token: 5741,
  },
  {
    Symbol: "687AS31",
    Token: 5670,
  },
  {
    Symbol: "687AS31A",
    Token: 7041,
  },
  {
    Symbol: "687BR30",
    Token: 5970,
  },
  {
    Symbol: "687BR30A",
    Token: 6877,
  },
  {
    Symbol: "687HR31",
    Token: 5536,
  },
  {
    Symbol: "687JH31",
    Token: 5676,
  },
  {
    Symbol: "687KA31",
    Token: 6887,
  },
  {
    Symbol: "687MH30",
    Token: 448,
  },
  {
    Symbol: "687MH33",
    Token: 3379,
  },
  {
    Symbol: "687MH33A",
    Token: 3574,
  },
  {
    Symbol: "687MN31",
    Token: 5691,
  },
  {
    Symbol: "687RJ25",
    Token: 22067,
  },
  {
    Symbol: "687RJ31",
    Token: 5561,
  },
  {
    Symbol: "687SK31",
    Token: 6991,
  },
  {
    Symbol: "687UP31",
    Token: 5695,
  },
  {
    Symbol: "688AP34",
    Token: 21138,
  },
  {
    Symbol: "688AP35",
    Token: 21054,
  },
  {
    Symbol: "688GA31",
    Token: 5557,
  },
  {
    Symbol: "688GJ31",
    Token: 4893,
  },
  {
    Symbol: "688KA31",
    Token: 5986,
  },
  {
    Symbol: "688KA32",
    Token: 7047,
  },
  {
    Symbol: "688MH33",
    Token: 3522,
  },
  {
    Symbol: "688MN31",
    Token: 2078,
  },
  {
    Symbol: "688PY31",
    Token: 22026,
  },
  {
    Symbol: "688RJ46",
    Token: 2089,
  },
  {
    Symbol: "688TS25",
    Token: 22209,
  },
  {
    Symbol: "688UK30",
    Token: 22168,
  },
  {
    Symbol: "688UP31",
    Token: 2080,
  },
  {
    Symbol: "688UP31A",
    Token: 4757,
  },
  {
    Symbol: "688WB40",
    Token: 1015,
  },
  {
    Symbol: "689AP35",
    Token: 2086,
  },
  {
    Symbol: "689BR28",
    Token: 2065,
  },
  {
    Symbol: "689GA30",
    Token: 303,
  },
  {
    Symbol: "689GA31",
    Token: 4750,
  },
  {
    Symbol: "689GA31A",
    Token: 5972,
  },
  {
    Symbol: "689GJ31",
    Token: 5977,
  },
  {
    Symbol: "689GS2025",
    Token: 13742,
  },
  {
    Symbol: "689KA33",
    Token: 7159,
  },
  {
    Symbol: "689MH31",
    Token: 4881,
  },
  {
    Symbol: "689MH32",
    Token: 4760,
  },
  {
    Symbol: "689MP35",
    Token: 21983,
  },
  {
    Symbol: "689MP40",
    Token: 767,
  },
  {
    Symbol: "689PN31",
    Token: 5560,
  },
  {
    Symbol: "689TN25",
    Token: 22118,
  },
  {
    Symbol: "689TS51",
    Token: 3266,
  },
  {
    Symbol: "689UP31",
    Token: 5565,
  },
  {
    Symbol: "689WB41",
    Token: 2092,
  },
  {
    Symbol: "68AS30",
    Token: 164,
  },
  {
    Symbol: "68GS2060",
    Token: 22438,
  },
  {
    Symbol: "68JK35",
    Token: 1009,
  },
  {
    Symbol: "68KL31",
    Token: 3070,
  },
  {
    Symbol: "68MH31",
    Token: 4579,
  },
  {
    Symbol: "68MN30",
    Token: 21924,
  },
  {
    Symbol: "68NL31",
    Token: 5744,
  },
  {
    Symbol: "68OR25",
    Token: 22006,
  },
  {
    Symbol: "68PN26",
    Token: 21711,
  },
  {
    Symbol: "68RJ24",
    Token: 22053,
  },
  {
    Symbol: "68RJ31",
    Token: 3752,
  },
  {
    Symbol: "68SK31",
    Token: 5745,
  },
  {
    Symbol: "68TS50",
    Token: 1018,
  },
  {
    Symbol: "68TS50A",
    Token: 1098,
  },
  {
    Symbol: "68UK31",
    Token: 3067,
  },
  {
    Symbol: "690AP27",
    Token: 20599,
  },
  {
    Symbol: "690UP30",
    Token: 22093,
  },
  {
    Symbol: "691AP39",
    Token: 626,
  },
  {
    Symbol: "691AP40",
    Token: 3388,
  },
  {
    Symbol: "691AS30",
    Token: 431,
  },
  {
    Symbol: "691AS31",
    Token: 5969,
  },
  {
    Symbol: "691GJ30",
    Token: 4991,
  },
  {
    Symbol: "691HP31",
    Token: 6879,
  },
  {
    Symbol: "691MH33",
    Token: 5678,
  },
  {
    Symbol: "691MH34",
    Token: 5679,
  },
  {
    Symbol: "691MP40",
    Token: 629,
  },
  {
    Symbol: "691NL30",
    Token: 437,
  },
  {
    Symbol: "691RJ31",
    Token: 4866,
  },
  {
    Symbol: "691RJ31A",
    Token: 5541,
  },
  {
    Symbol: "691RJ31B",
    Token: 5995,
  },
  {
    Symbol: "691UP30",
    Token: 22100,
  },
  {
    Symbol: "691UP30A",
    Token: 439,
  },
  {
    Symbol: "691WB31",
    Token: 6897,
  },
  {
    Symbol: "692AP41",
    Token: 6992,
  },
  {
    Symbol: "692AS24",
    Token: 20568,
  },
  {
    Symbol: "692BR32",
    Token: 21161,
  },
  {
    Symbol: "692HP33",
    Token: 6881,
  },
  {
    Symbol: "692HR30",
    Token: 5415,
  },
  {
    Symbol: "692HR36",
    Token: 3382,
  },
  {
    Symbol: "692HR36A",
    Token: 4612,
  },
  {
    Symbol: "692PN35",
    Token: 21895,
  },
  {
    Symbol: "692RJ30",
    Token: 430,
  },
  {
    Symbol: "692RJ31",
    Token: 6557,
  },
  {
    Symbol: "692TN46",
    Token: 6993,
  },
  {
    Symbol: "692UP31",
    Token: 6000,
  },
  {
    Symbol: "693AP38",
    Token: 5889,
  },
  {
    Symbol: "693GJ31",
    Token: 2230,
  },
  {
    Symbol: "693GJ31A",
    Token: 6320,
  },
  {
    Symbol: "693HP31",
    Token: 5537,
  },
  {
    Symbol: "693HP32",
    Token: 6880,
  },
  {
    Symbol: "693JH30",
    Token: 428,
  },
  {
    Symbol: "693KA32",
    Token: 5987,
  },
  {
    Symbol: "693SK31",
    Token: 2913,
  },
  {
    Symbol: "693TS37",
    Token: 5896,
  },
  {
    Symbol: "693UP31",
    Token: 6558,
  },
  {
    Symbol: "693UP31A",
    Token: 6744,
  },
  {
    Symbol: "694AP37",
    Token: 3513,
  },
  {
    Symbol: "694AP38",
    Token: 3514,
  },
  {
    Symbol: "694AP41",
    Token: 5897,
  },
  {
    Symbol: "694AS31",
    Token: 6556,
  },
  {
    Symbol: "694CG29",
    Token: 2907,
  },
  {
    Symbol: "694GA30",
    Token: 21139,
  },
  {
    Symbol: "694JK36",
    Token: 7044,
  },
  {
    Symbol: "694MH31",
    Token: 4993,
  },
  {
    Symbol: "694ML25",
    Token: 10524,
  },
  {
    Symbol: "694MP35",
    Token: 21979,
  },
  {
    Symbol: "694RJ33",
    Token: 5886,
  },
  {
    Symbol: "694TN25",
    Token: 22132,
  },
  {
    Symbol: "694TN50",
    Token: 22126,
  },
  {
    Symbol: "694TS50",
    Token: 322,
  },
  {
    Symbol: "694TS50A",
    Token: 630,
  },
  {
    Symbol: "694TS60",
    Token: 22207,
  },
  {
    Symbol: "694UK31",
    Token: 4891,
  },
  {
    Symbol: "694UP31",
    Token: 2140,
  },
  {
    Symbol: "694UP31A",
    Token: 4889,
  },
  {
    Symbol: "694WB36",
    Token: 7160,
  },
  {
    Symbol: "695AS30",
    Token: 21162,
  },
  {
    Symbol: "695BR30",
    Token: 6318,
  },
  {
    Symbol: "695GJ31",
    Token: 5033,
  },
  {
    Symbol: "695GS2061",
    Token: 6817,
  },
  {
    Symbol: "695HP29",
    Token: 21141,
  },
  {
    Symbol: "695HP33",
    Token: 20859,
  },
  {
    Symbol: "695HP34",
    Token: 20858,
  },
  {
    Symbol: "695HR33",
    Token: 3696,
  },
  {
    Symbol: "695KA31",
    Token: 6210,
  },
  {
    Symbol: "695MH31",
    Token: 5035,
  },
  {
    Symbol: "695MH32",
    Token: 4883,
  },
  {
    Symbol: "695MN30",
    Token: 21925,
  },
  {
    Symbol: "695PN25",
    Token: 21787,
  },
  {
    Symbol: "695PN31",
    Token: 4887,
  },
  {
    Symbol: "695PN40",
    Token: 319,
  },
  {
    Symbol: "695RJ31",
    Token: 2137,
  },
  {
    Symbol: "695SK30",
    Token: 22156,
  },
  {
    Symbol: "695TN31",
    Token: 2260,
  },
  {
    Symbol: "695TN31A",
    Token: 4994,
  },
  {
    Symbol: "695TN31B",
    Token: 5471,
  },
  {
    Symbol: "695WB35",
    Token: 22145,
  },
  {
    Symbol: "696AP35",
    Token: 3575,
  },
  {
    Symbol: "696AP36",
    Token: 3576,
  },
  {
    Symbol: "696GA31",
    Token: 4880,
  },
  {
    Symbol: "696HR29",
    Token: 8011,
  },
  {
    Symbol: "696HR40",
    Token: 20860,
  },
  {
    Symbol: "696JK35",
    Token: 314,
  },
  {
    Symbol: "696KA31",
    Token: 6095,
  },
  {
    Symbol: "696KA31A",
    Token: 7304,
  },
  {
    Symbol: "696KL34",
    Token: 3701,
  },
  {
    Symbol: "696PY30",
    Token: 7511,
  },
  {
    Symbol: "696RJ31",
    Token: 6327,
  },
  {
    Symbol: "696RJ41",
    Token: 2147,
  },
  {
    Symbol: "696TN31",
    Token: 6481,
  },
  {
    Symbol: "696TN51",
    Token: 3578,
  },
  {
    Symbol: "696TN56",
    Token: 3580,
  },
  {
    Symbol: "696TS45",
    Token: 7055,
  },
  {
    Symbol: "696TS51",
    Token: 3391,
  },
  {
    Symbol: "696UP31",
    Token: 7314,
  },
  {
    Symbol: "697AS31",
    Token: 5416,
  },
  {
    Symbol: "697AS31A",
    Token: 7295,
  },
  {
    Symbol: "697GA31",
    Token: 5469,
  },
  {
    Symbol: "697GS2026",
    Token: 7158,
  },
  {
    Symbol: "697KA28",
    Token: 20864,
  },
  {
    Symbol: "697KA30",
    Token: 20912,
  },
  {
    Symbol: "697KA31",
    Token: 311,
  },
  {
    Symbol: "697KL31",
    Token: 5474,
  },
  {
    Symbol: "697MH28",
    Token: 21946,
  },
  {
    Symbol: "697NL31",
    Token: 5418,
  },
  {
    Symbol: "697PN31",
    Token: 5419,
  },
  {
    Symbol: "697PN40",
    Token: 21789,
  },
  {
    Symbol: "697RJ30",
    Token: 22057,
  },
  {
    Symbol: "697RJ31",
    Token: 4997,
  },
  {
    Symbol: "697RJ51",
    Token: 2150,
  },
  {
    Symbol: "697RJ51A",
    Token: 2257,
  },
  {
    Symbol: "697TN31",
    Token: 5086,
  },
  {
    Symbol: "697TN31A",
    Token: 5173,
  },
  {
    Symbol: "697TN31B",
    Token: 5417,
  },
  {
    Symbol: "697TN31C",
    Token: 6096,
  },
  {
    Symbol: "697TN46",
    Token: 3647,
  },
  {
    Symbol: "697UP31",
    Token: 5421,
  },
  {
    Symbol: "697UP31A",
    Token: 6099,
  },
  {
    Symbol: "697WB36",
    Token: 2149,
  },
  {
    Symbol: "698AP36",
    Token: 5668,
  },
  {
    Symbol: "698AS31",
    Token: 2134,
  },
  {
    Symbol: "698AS31A",
    Token: 5468,
  },
  {
    Symbol: "698BR30",
    Token: 6478,
  },
  {
    Symbol: "698GA31",
    Token: 7296,
  },
  {
    Symbol: "698GJ31",
    Token: 5334,
  },
  {
    Symbol: "698HP32",
    Token: 5538,
  },
  {
    Symbol: "698HR31",
    Token: 5229,
  },
  {
    Symbol: "698HR41",
    Token: 2146,
  },
  {
    Symbol: "698JK36",
    Token: 5890,
  },
  {
    Symbol: "698MH28",
    Token: 21939,
  },
  {
    Symbol: "698MP30",
    Token: 21978,
  },
  {
    Symbol: "698PN33",
    Token: 5885,
  },
  {
    Symbol: "698PY33",
    Token: 3079,
  },
  {
    Symbol: "698RJ31",
    Token: 6100,
  },
  {
    Symbol: "698RJ31A",
    Token: 6480,
  },
  {
    Symbol: "698TN31",
    Token: 5037,
  },
  {
    Symbol: "698TN31A",
    Token: 5230,
  },
  {
    Symbol: "698TR30",
    Token: 22138,
  },
  {
    Symbol: "698TS28",
    Token: 22191,
  },
  {
    Symbol: "698TS41",
    Token: 3577,
  },
  {
    Symbol: "698UP31",
    Token: 5473,
  },
  {
    Symbol: "698WB35",
    Token: 22149,
  },
  {
    Symbol: "698WB36",
    Token: 5697,
  },
  {
    Symbol: "698WB37",
    Token: 6749,
  },
  {
    Symbol: "699AR30",
    Token: 20861,
  },
  {
    Symbol: "699AS31",
    Token: 6330,
  },
  {
    Symbol: "699GA30",
    Token: 20862,
  },
  {
    Symbol: "699GA31",
    Token: 4998,
  },
  {
    Symbol: "699GA31A",
    Token: 5027,
  },
  {
    Symbol: "699GA31B",
    Token: 5333,
  },
  {
    Symbol: "699GJ26",
    Token: 21053,
  },
  {
    Symbol: "699GS2026",
    Token: 15046,
  },
  {
    Symbol: "699GS2051",
    Token: 6696,
  },
  {
    Symbol: "699HR31",
    Token: 6211,
  },
  {
    Symbol: "699JH30",
    Token: 22200,
  },
  {
    Symbol: "699JK31",
    Token: 2074,
  },
  {
    Symbol: "699KA28",
    Token: 2735,
  },
  {
    Symbol: "699KL36",
    Token: 5891,
  },
  {
    Symbol: "699MH29",
    Token: 8128,
  },
  {
    Symbol: "699MN30",
    Token: 21922,
  },
  {
    Symbol: "699MP24",
    Token: 21964,
  },
  {
    Symbol: "699MP41",
    Token: 6750,
  },
  {
    Symbol: "699PY29",
    Token: 8284,
  },
  {
    Symbol: "699RJ41",
    Token: 2251,
  },
  {
    Symbol: "699TN41",
    Token: 3645,
  },
  {
    Symbol: "699TR36",
    Token: 5892,
  },
  {
    Symbol: "699TS28",
    Token: 22190,
  },
  {
    Symbol: "699TS43",
    Token: 6752,
  },
  {
    Symbol: "699UP31",
    Token: 5038,
  },
  {
    Symbol: "699UP31A",
    Token: 5174,
  },
  {
    Symbol: "699UP31B",
    Token: 6350,
  },
  {
    Symbol: "699WB30",
    Token: 5172,
  },
  {
    Symbol: "699WB31",
    Token: 5470,
  },
  {
    Symbol: "699WB35",
    Token: 620,
  },
  {
    Symbol: "699WB36",
    Token: 3089,
  },
  {
    Symbol: "699WB36A",
    Token: 5895,
  },
  {
    Symbol: "69AP32",
    Token: 2081,
  },
  {
    Symbol: "69AP39",
    Token: 3385,
  },
  {
    Symbol: "69AS30",
    Token: 20155,
  },
  {
    Symbol: "69AS30A",
    Token: 294,
  },
  {
    Symbol: "69GA30",
    Token: 20148,
  },
  {
    Symbol: "69GA30A",
    Token: 440,
  },
  {
    Symbol: "69GJ30",
    Token: 3064,
  },
  {
    Symbol: "69HP30",
    Token: 446,
  },
  {
    Symbol: "69JK33",
    Token: 3392,
  },
  {
    Symbol: "69KA30",
    Token: 20154,
  },
  {
    Symbol: "69KA31",
    Token: 6743,
  },
  {
    Symbol: "69ML30",
    Token: 306,
  },
  {
    Symbol: "69MN30",
    Token: 21926,
  },
  {
    Symbol: "69MZ33",
    Token: 3523,
  },
  {
    Symbol: "69PY28",
    Token: 7893,
  },
  {
    Symbol: "69PY29",
    Token: 291,
  },
  {
    Symbol: "69RJ32",
    Token: 4764,
  },
  {
    Symbol: "69TN31",
    Token: 5997,
  },
  {
    Symbol: "69UK30",
    Token: 22172,
  },
  {
    Symbol: "69UK30A",
    Token: 309,
  },
  {
    Symbol: "69UP30",
    Token: 307,
  },
  {
    Symbol: "6AP25",
    Token: 20920,
  },
  {
    Symbol: "701AP39",
    Token: 3762,
  },
  {
    Symbol: "701MH32",
    Token: 5002,
  },
  {
    Symbol: "701MN31",
    Token: 5087,
  },
  {
    Symbol: "701PY26",
    Token: 22027,
  },
  {
    Symbol: "701UP31",
    Token: 5089,
  },
  {
    Symbol: "702AP30",
    Token: 20863,
  },
  {
    Symbol: "702AP36",
    Token: 6351,
  },
  {
    Symbol: "702AP37",
    Token: 6352,
  },
  {
    Symbol: "702AP41",
    Token: 5569,
  },
  {
    Symbol: "702AS30",
    Token: 20851,
  },
  {
    Symbol: "702BR30",
    Token: 21375,
  },
  {
    Symbol: "702HP36",
    Token: 2236,
  },
  {
    Symbol: "702HR29",
    Token: 2539,
  },
  {
    Symbol: "702KA31",
    Token: 7524,
  },
  {
    Symbol: "702KA33",
    Token: 7305,
  },
  {
    Symbol: "702KL28",
    Token: 2537,
  },
  {
    Symbol: "702MH29",
    Token: 2670,
  },
  {
    Symbol: "702ML41",
    Token: 5570,
  },
  {
    Symbol: "702PN28",
    Token: 2668,
  },
  {
    Symbol: "702TN30",
    Token: 8287,
  },
  {
    Symbol: "702TN31",
    Token: 7533,
  },
  {
    Symbol: "702UP31",
    Token: 5335,
  },
  {
    Symbol: "702WB31",
    Token: 5039,
  },
  {
    Symbol: "703AP40",
    Token: 475,
  },
  {
    Symbol: "703AS31",
    Token: 7512,
  },
  {
    Symbol: "703HP31",
    Token: 7519,
  },
  {
    Symbol: "703HR40",
    Token: 21236,
  },
  {
    Symbol: "703KA32",
    Token: 6104,
  },
  {
    Symbol: "703KL30",
    Token: 21915,
  },
  {
    Symbol: "703MN31",
    Token: 6479,
  },
  {
    Symbol: "703MP31",
    Token: 2239,
  },
  {
    Symbol: "703NL30",
    Token: 21997,
  },
  {
    Symbol: "703PY28",
    Token: 22029,
  },
  {
    Symbol: "703RJ30",
    Token: 22076,
  },
  {
    Symbol: "703RJ31",
    Token: 7531,
  },
  {
    Symbol: "703RJ36",
    Token: 2248,
  },
  {
    Symbol: "703TN30",
    Token: 8321,
  },
  {
    Symbol: "703TN46",
    Token: 3719,
  },
  {
    Symbol: "703TN51",
    Token: 3722,
  },
  {
    Symbol: "703TS51",
    Token: 4556,
  },
  {
    Symbol: "703UP30",
    Token: 22087,
  },
  {
    Symbol: "704AP34",
    Token: 5967,
  },
  {
    Symbol: "704AP40",
    Token: 3689,
  },
  {
    Symbol: "704AP41",
    Token: 3692,
  },
  {
    Symbol: "704GJ30",
    Token: 20359,
  },
  {
    Symbol: "704JK36",
    Token: 3697,
  },
  {
    Symbol: "704KL34",
    Token: 5539,
  },
  {
    Symbol: "704MH29",
    Token: 2542,
  },
  {
    Symbol: "704ML30",
    Token: 22012,
  },
  {
    Symbol: "704MP30",
    Token: 21965,
  },
  {
    Symbol: "704MZ30",
    Token: 22019,
  },
  {
    Symbol: "704MZ33",
    Token: 2143,
  },
  {
    Symbol: "704RJ30",
    Token: 22048,
  },
  {
    Symbol: "704RJ36",
    Token: 4780,
  },
  {
    Symbol: "704TN30",
    Token: 7812,
  },
  {
    Symbol: "704TN30A",
    Token: 8134,
  },
  {
    Symbol: "704TS32",
    Token: 7315,
  },
  {
    Symbol: "704TS51",
    Token: 3767,
  },
  {
    Symbol: "704UK30",
    Token: 22170,
  },
  {
    Symbol: "704UP30",
    Token: 22085,
  },
  {
    Symbol: "704UP31",
    Token: 7534,
  },
  {
    Symbol: "704WB35",
    Token: 315,
  },
  {
    Symbol: "705AP31",
    Token: 21237,
  },
  {
    Symbol: "705AP35",
    Token: 5527,
  },
  {
    Symbol: "705AS30",
    Token: 20774,
  },
  {
    Symbol: "705HP35",
    Token: 2233,
  },
  {
    Symbol: "705HR40",
    Token: 321,
  },
  {
    Symbol: "705JH30",
    Token: 22198,
  },
  {
    Symbol: "705KL30",
    Token: 21899,
  },
  {
    Symbol: "705KL36",
    Token: 5991,
  },
  {
    Symbol: "705MH32",
    Token: 466,
  },
  {
    Symbol: "705MN30",
    Token: 21920,
  },
  {
    Symbol: "705MZ29",
    Token: 8130,
  },
  {
    Symbol: "705MZ35",
    Token: 316,
  },
  {
    Symbol: "705NL30",
    Token: 21994,
  },
  {
    Symbol: "705NL31",
    Token: 2242,
  },
  {
    Symbol: "705PN31",
    Token: 2135,
  },
  {
    Symbol: "705RJ31",
    Token: 2245,
  },
  {
    Symbol: "705RJ41",
    Token: 3716,
  },
  {
    Symbol: "705TN26",
    Token: 22119,
  },
  {
    Symbol: "705TS35",
    Token: 5526,
  },
  {
    Symbol: "705TS41",
    Token: 3725,
  },
  {
    Symbol: "705UK31",
    Token: 7535,
  },
  {
    Symbol: "705WB30",
    Token: 22143,
  },
  {
    Symbol: "705WB31",
    Token: 2265,
  },
  {
    Symbol: "705WB36",
    Token: 6001,
  },
  {
    Symbol: "705WB36A",
    Token: 7319,
  },
  {
    Symbol: "706AP30",
    Token: 20737,
  },
  {
    Symbol: "706CG29",
    Token: 2740,
  },
  {
    Symbol: "706GJ32",
    Token: 8189,
  },
  {
    Symbol: "706GS2028",
    Token: 14970,
  },
  {
    Symbol: "706GS2046",
    Token: 7184,
  },
  {
    Symbol: "706JK33",
    Token: 6484,
  },
  {
    Symbol: "706KL38",
    Token: 4790,
  },
  {
    Symbol: "706KL39",
    Token: 5545,
  },
  {
    Symbol: "706KL41",
    Token: 4793,
  },
  {
    Symbol: "706MZ34",
    Token: 5992,
  },
  {
    Symbol: "706TS41",
    Token: 4792,
  },
  {
    Symbol: "706UK30",
    Token: 22166,
  },
  {
    Symbol: "706WB36",
    Token: 4782,
  },
  {
    Symbol: "707AS31",
    Token: 2266,
  },
  {
    Symbol: "707GJ31",
    Token: 2381,
  },
  {
    Symbol: "707HR37",
    Token: 4784,
  },
  {
    Symbol: "707JK30",
    Token: 20796,
  },
  {
    Symbol: "707MP32",
    Token: 460,
  },
  {
    Symbol: "707RJ46",
    Token: 3763,
  },
  {
    Symbol: "707TN38",
    Token: 7318,
  },
  {
    Symbol: "708AP35",
    Token: 6485,
  },
  {
    Symbol: "708AP40",
    Token: 6487,
  },
  {
    Symbol: "708CG29",
    Token: 2380,
  },
  {
    Symbol: "708CG30",
    Token: 22159,
  },
  {
    Symbol: "708GJ31",
    Token: 2671,
  },
  {
    Symbol: "708JK36",
    Token: 5544,
  },
  {
    Symbol: "708KA31",
    Token: 20797,
  },
  {
    Symbol: "708KA34",
    Token: 468,
  },
  {
    Symbol: "708KA34A",
    Token: 6212,
  },
  {
    Symbol: "708MH31",
    Token: 2383,
  },
  {
    Symbol: "708MP29",
    Token: 8351,
  },
  {
    Symbol: "708PY26",
    Token: 22025,
  },
  {
    Symbol: "708RJ30",
    Token: 22035,
  },
  {
    Symbol: "708TS42",
    Token: 6488,
  },
  {
    Symbol: "708UP31",
    Token: 2264,
  },
  {
    Symbol: "708WB41",
    Token: 6361,
  },
  {
    Symbol: "709AP39",
    Token: 5968,
  },
  {
    Symbol: "709AS32",
    Token: 8187,
  },
  {
    Symbol: "709GJ32",
    Token: 8289,
  },
  {
    Symbol: "709HR29",
    Token: 8569,
  },
  {
    Symbol: "709KA30",
    Token: 20313,
  },
  {
    Symbol: "709KL36",
    Token: 4748,
  },
  {
    Symbol: "709MP30",
    Token: 21991,
  },
  {
    Symbol: "709RJ32",
    Token: 8191,
  },
  {
    Symbol: "709TN30",
    Token: 8489,
  },
  {
    Symbol: "709TS34",
    Token: 5343,
  },
  {
    Symbol: "709TS40",
    Token: 5998,
  },
  {
    Symbol: "709UP30",
    Token: 22096,
  },
  {
    Symbol: "709WB40",
    Token: 472,
  },
  {
    Symbol: "70AP38",
    Token: 3758,
  },
  {
    Symbol: "70AP38A",
    Token: 6563,
  },
  {
    Symbol: "70AP39",
    Token: 318,
  },
  {
    Symbol: "70AP39A",
    Token: 5567,
  },
  {
    Symbol: "70AP39B",
    Token: 6564,
  },
  {
    Symbol: "70GA31",
    Token: 6483,
  },
  {
    Symbol: "70GA31A",
    Token: 7513,
  },
  {
    Symbol: "70JH33",
    Token: 5983,
  },
  {
    Symbol: "70JK33",
    Token: 7307,
  },
  {
    Symbol: "70MH28",
    Token: 21944,
  },
  {
    Symbol: "70MN31",
    Token: 4885,
  },
  {
    Symbol: "70MN31A",
    Token: 6101,
  },
  {
    Symbol: "70MN31B",
    Token: 7530,
  },
  {
    Symbol: "70MP31",
    Token: 5034,
  },
  {
    Symbol: "70MZ34",
    Token: 5559,
  },
  {
    Symbol: "70NL31",
    Token: 6103,
  },
  {
    Symbol: "70NL31A",
    Token: 7316,
  },
  {
    Symbol: "70RJ31",
    Token: 5036,
  },
  {
    Symbol: "70TN31",
    Token: 5336,
  },
  {
    Symbol: "70TS36",
    Token: 5568,
  },
  {
    Symbol: "70TS51",
    Token: 2227,
  },
  {
    Symbol: "70UK31",
    Token: 5040,
  },
  {
    Symbol: "70UP30",
    Token: 22088,
  },
  {
    Symbol: "70WB31",
    Token: 5231,
  },
  {
    Symbol: "70WB31A",
    Token: 6482,
  },
  {
    Symbol: "710GJ30",
    Token: 20099,
  },
  {
    Symbol: "710GR2028",
    Token: 14971,
  },
  {
    Symbol: "710GS2029",
    Token: 9047,
  },
  {
    Symbol: "710UK30",
    Token: 22164,
  },
  {
    Symbol: "710UP30",
    Token: 22083,
  },
  {
    Symbol: "711AS30",
    Token: 20100,
  },
  {
    Symbol: "711CG30",
    Token: 22157,
  },
  {
    Symbol: "711GJ31",
    Token: 2721,
  },
  {
    Symbol: "711HP28",
    Token: 20041,
  },
  {
    Symbol: "711HP30",
    Token: 20040,
  },
  {
    Symbol: "711MH29",
    Token: 8935,
  },
  {
    Symbol: "711MP30",
    Token: 21963,
  },
  {
    Symbol: "711MZ30",
    Token: 22020,
  },
  {
    Symbol: "711UK30",
    Token: 22169,
  },
  {
    Symbol: "712AP35",
    Token: 5041,
  },
  {
    Symbol: "712AP37",
    Token: 4789,
  },
  {
    Symbol: "712AS32",
    Token: 7691,
  },
  {
    Symbol: "712AS32A",
    Token: 8295,
  },
  {
    Symbol: "712GJ32",
    Token: 8324,
  },
  {
    Symbol: "712HR40",
    Token: 20775,
  },
  {
    Symbol: "712JK37",
    Token: 8334,
  },
  {
    Symbol: "712KA34",
    Token: 7539,
  },
  {
    Symbol: "712KA37",
    Token: 8196,
  },
  {
    Symbol: "712MP35",
    Token: 21966,
  },
  {
    Symbol: "712MZ34",
    Token: 5003,
  },
  {
    Symbol: "712PN37",
    Token: 8197,
  },
  {
    Symbol: "712TN30",
    Token: 8352,
  },
  {
    Symbol: "712UP32",
    Token: 7709,
  },
  {
    Symbol: "712WB36",
    Token: 7548,
  },
  {
    Symbol: "712WB51",
    Token: 5542,
  },
  {
    Symbol: "713AP36",
    Token: 4766,
  },
  {
    Symbol: "713AP36A",
    Token: 6112,
  },
  {
    Symbol: "713AP39",
    Token: 8335,
  },
  {
    Symbol: "713AP40",
    Token: 8193,
  },
  {
    Symbol: "713AP41",
    Token: 8194,
  },
  {
    Symbol: "713BR32",
    Token: 8298,
  },
  {
    Symbol: "713HR32",
    Token: 7692,
  },
  {
    Symbol: "713HR42",
    Token: 8336,
  },
  {
    Symbol: "713JK34",
    Token: 8192,
  },
  {
    Symbol: "713KA38",
    Token: 8301,
  },
  {
    Symbol: "713KA39",
    Token: 8302,
  },
  {
    Symbol: "713KL46",
    Token: 4897,
  },
  {
    Symbol: "713RJ29",
    Token: 8680,
  },
  {
    Symbol: "713RJ31",
    Token: 2673,
  },
  {
    Symbol: "713RJ41",
    Token: 4869,
  },
  {
    Symbol: "713TN30",
    Token: 8570,
  },
  {
    Symbol: "713TN47",
    Token: 8198,
  },
  {
    Symbol: "713TS34",
    Token: 8333,
  },
  {
    Symbol: "713TS37",
    Token: 8299,
  },
  {
    Symbol: "714AP34",
    Token: 20019,
  },
  {
    Symbol: "714AP35",
    Token: 7540,
  },
  {
    Symbol: "714AP36",
    Token: 5044,
  },
  {
    Symbol: "714AP37",
    Token: 5234,
  },
  {
    Symbol: "714AP40",
    Token: 7549,
  },
  {
    Symbol: "714AP41",
    Token: 5236,
  },
  {
    Symbol: "714AP41A",
    Token: 6115,
  },
  {
    Symbol: "714AP41B",
    Token: 7550,
  },
  {
    Symbol: "714BR30",
    Token: 20016,
  },
  {
    Symbol: "714GA30",
    Token: 20667,
  },
  {
    Symbol: "714HP33",
    Token: 7536,
  },
  {
    Symbol: "714HR31",
    Token: 2743,
  },
  {
    Symbol: "714JK36",
    Token: 7543,
  },
  {
    Symbol: "714KA29",
    Token: 22218,
  },
  {
    Symbol: "714KA29A",
    Token: 22225,
  },
  {
    Symbol: "714KA32",
    Token: 7813,
  },
  {
    Symbol: "714KL35",
    Token: 7541,
  },
  {
    Symbol: "714MH29",
    Token: 21941,
  },
  {
    Symbol: "714PN32",
    Token: 7708,
  },
  {
    Symbol: "714PN36",
    Token: 7544,
  },
  {
    Symbol: "714RJ30",
    Token: 22074,
  },
  {
    Symbol: "714RJ32",
    Token: 7819,
  },
  {
    Symbol: "714SK30",
    Token: 22154,
  },
  {
    Symbol: "714TN32",
    Token: 8325,
  },
  {
    Symbol: "714TS33",
    Token: 7538,
  },
  {
    Symbol: "714TS41",
    Token: 5237,
  },
  {
    Symbol: "714UP30",
    Token: 22095,
  },
  {
    Symbol: "714WB32",
    Token: 7710,
  },
  {
    Symbol: "715AP31",
    Token: 20772,
  },
  {
    Symbol: "715AP32",
    Token: 20773,
  },
  {
    Symbol: "715AP36",
    Token: 20919,
  },
  {
    Symbol: "715AP37",
    Token: 5004,
  },
  {
    Symbol: "715GA30",
    Token: 20546,
  },
  {
    Symbol: "715GA32",
    Token: 8326,
  },
  {
    Symbol: "715HR28",
    Token: 9333,
  },
  {
    Symbol: "715JK32",
    Token: 457,
  },
  {
    Symbol: "715RJ30",
    Token: 22054,
  },
  {
    Symbol: "715RJ31",
    Token: 2545,
  },
  {
    Symbol: "715RJ31A",
    Token: 2744,
  },
  {
    Symbol: "715TN27",
    Token: 22120,
  },
  {
    Symbol: "715UP32",
    Token: 7821,
  },
  {
    Symbol: "715WB35",
    Token: 22150,
  },
  {
    Symbol: "716GA31",
    Token: 2746,
  },
  {
    Symbol: "716GS2023",
    Token: 7035,
  },
  {
    Symbol: "716GS2050",
    Token: 18561,
  },
  {
    Symbol: "716KA30",
    Token: 20845,
  },
  {
    Symbol: "716KA36",
    Token: 8190,
  },
  {
    Symbol: "716KL30",
    Token: 21914,
  },
  {
    Symbol: "716ML31",
    Token: 2756,
  },
  {
    Symbol: "716UP29",
    Token: 22090,
  },
  {
    Symbol: "716UP31",
    Token: 2759,
  },
  {
    Symbol: "717AS31",
    Token: 2548,
  },
  {
    Symbol: "717BR30",
    Token: 22216,
  },
  {
    Symbol: "717BR30A",
    Token: 22223,
  },
  {
    Symbol: "717BR32",
    Token: 8327,
  },
  {
    Symbol: "717CG30",
    Token: 22160,
  },
  {
    Symbol: "717GJ30",
    Token: 22214,
  },
  {
    Symbol: "717GJ30A",
    Token: 22222,
  },
  {
    Symbol: "717GS2028",
    Token: 7208,
  },
  {
    Symbol: "717GS2030",
    Token: 15050,
  },
  {
    Symbol: "717HP30",
    Token: 20846,
  },
  {
    Symbol: "717HR29",
    Token: 20310,
  },
  {
    Symbol: "717HR30",
    Token: 20849,
  },
  {
    Symbol: "717KA29",
    Token: 20573,
  },
  {
    Symbol: "717KA30",
    Token: 20918,
  },
  {
    Symbol: "717KL32",
    Token: 8329,
  },
  {
    Symbol: "717ML31",
    Token: 2551,
  },
  {
    Symbol: "717MP29",
    Token: 21976,
  },
  {
    Symbol: "717MP35",
    Token: 21973,
  },
  {
    Symbol: "717PN30",
    Token: 22212,
  },
  {
    Symbol: "717PN30A",
    Token: 22220,
  },
  {
    Symbol: "717RJ30",
    Token: 22044,
  },
  {
    Symbol: "717RJ32",
    Token: 8331,
  },
  {
    Symbol: "717TN29",
    Token: 22123,
  },
  {
    Symbol: "717TN30",
    Token: 8681,
  },
  {
    Symbol: "717TR30",
    Token: 22140,
  },
  {
    Symbol: "717TS41",
    Token: 5090,
  },
  {
    Symbol: "717UK29",
    Token: 22167,
  },
  {
    Symbol: "717UP31",
    Token: 2676,
  },
  {
    Symbol: "717WB32",
    Token: 8332,
  },
  {
    Symbol: "718AP28",
    Token: 20309,
  },
  {
    Symbol: "718AP33",
    Token: 20020,
  },
  {
    Symbol: "718AP40",
    Token: 7713,
  },
  {
    Symbol: "718AS29",
    Token: 20311,
  },
  {
    Symbol: "718AS30",
    Token: 20146,
  },
  {
    Symbol: "718BR30",
    Token: 20109,
  },
  {
    Symbol: "718CG27",
    Token: 22161,
  },
  {
    Symbol: "718CG30",
    Token: 22163,
  },
  {
    Symbol: "718GJ30",
    Token: 20696,
  },
  {
    Symbol: "718HP32",
    Token: 20108,
  },
  {
    Symbol: "718HR41",
    Token: 2407,
  },
  {
    Symbol: "718KA33",
    Token: 7694,
  },
  {
    Symbol: "718KL29",
    Token: 21912,
  },
  {
    Symbol: "718MH30",
    Token: 8934,
  },
  {
    Symbol: "718MN31",
    Token: 2679,
  },
  {
    Symbol: "718MP30",
    Token: 21972,
  },
  {
    Symbol: "718RJ29",
    Token: 22060,
  },
  {
    Symbol: "718RJ30",
    Token: 22072,
  },
  {
    Symbol: "718SK31",
    Token: 2681,
  },
  {
    Symbol: "718TS33",
    Token: 7690,
  },
  {
    Symbol: "718TS51",
    Token: 4900,
  },
  {
    Symbol: "718UP30",
    Token: 22213,
  },
  {
    Symbol: "718UP30A",
    Token: 22221,
  },
  {
    Symbol: "718WB35",
    Token: 22144,
  },
  {
    Symbol: "719AP34",
    Token: 20147,
  },
  {
    Symbol: "719AP38",
    Token: 5005,
  },
  {
    Symbol: "719GS2060",
    Token: 18474,
  },
  {
    Symbol: "719JK29",
    Token: 20959,
  },
  {
    Symbol: "719KA39",
    Token: 2768,
  },
  {
    Symbol: "719KA40",
    Token: 2771,
  },
  {
    Symbol: "719KL51",
    Token: 5479,
  },
  {
    Symbol: "719ML41",
    Token: 4895,
  },
  {
    Symbol: "719MP40",
    Token: 21967,
  },
  {
    Symbol: "719PN37",
    Token: 7714,
  },
  {
    Symbol: "719SK31",
    Token: 2384,
  },
  {
    Symbol: "719TN30",
    Token: 22125,
  },
  {
    Symbol: "719TN32",
    Token: 8491,
  },
  {
    Symbol: "719TN35",
    Token: 22110,
  },
  {
    Symbol: "719TN42",
    Token: 8337,
  },
  {
    Symbol: "719UP29",
    Token: 22092,
  },
  {
    Symbol: "719UP31",
    Token: 2552,
  },
  {
    Symbol: "719WB29",
    Token: 22148,
  },
  {
    Symbol: "719WB36",
    Token: 2762,
  },
  {
    Symbol: "71AP37",
    Token: 469,
  },
  {
    Symbol: "71JK30",
    Token: 20018,
  },
  {
    Symbol: "71JK33",
    Token: 4894,
  },
  {
    Symbol: "71JK33A",
    Token: 5342,
  },
  {
    Symbol: "71KA32",
    Token: 7693,
  },
  {
    Symbol: "71MH32",
    Token: 313,
  },
  {
    Symbol: "71MH36",
    Token: 5232,
  },
  {
    Symbol: "71TN32",
    Token: 8292,
  },
  {
    Symbol: "71WB30",
    Token: 22151,
  },
  {
    Symbol: "720AR30",
    Token: 20518,
  },
  {
    Symbol: "720AS30",
    Token: 20358,
  },
  {
    Symbol: "720ML30",
    Token: 22010,
  },
  {
    Symbol: "720MZ30",
    Token: 22015,
  },
  {
    Symbol: "721AP31",
    Token: 20575,
  },
  {
    Symbol: "721KA32",
    Token: 8012,
  },
  {
    Symbol: "721MP34",
    Token: 21977,
  },
  {
    Symbol: "721PY28",
    Token: 22024,
  },
  {
    Symbol: "721RJ32",
    Token: 8013,
  },
  {
    Symbol: "721TR29",
    Token: 22139,
  },
  {
    Symbol: "722AP28",
    Token: 22031,
  },
  {
    Symbol: "722AP30",
    Token: 22030,
  },
  {
    Symbol: "722AP31",
    Token: 22215,
  },
  {
    Symbol: "722AP31A",
    Token: 22032,
  },
  {
    Symbol: "722AP37",
    Token: 2395,
  },
  {
    Symbol: "722AP42",
    Token: 7715,
  },
  {
    Symbol: "722AS29",
    Token: 20915,
  },
  {
    Symbol: "722AS30",
    Token: 20850,
  },
  {
    Symbol: "722GA29",
    Token: 20916,
  },
  {
    Symbol: "722KA35",
    Token: 7707,
  },
  {
    Symbol: "722KA38",
    Token: 2398,
  },
  {
    Symbol: "722KA38A",
    Token: 2578,
  },
  {
    Symbol: "722PN32",
    Token: 21893,
  },
  {
    Symbol: "722RJ32",
    Token: 8492,
  },
  {
    Symbol: "722RJ41",
    Token: 2413,
  },
  {
    Symbol: "722UP30",
    Token: 22089,
  },
  {
    Symbol: "723GA32",
    Token: 7871,
  },
  {
    Symbol: "723KA28",
    Token: 21710,
  },
  {
    Symbol: "723MN32",
    Token: 7855,
  },
  {
    Symbol: "723PN31",
    Token: 2557,
  },
  {
    Symbol: "723TN32",
    Token: 8573,
  },
  {
    Symbol: "723WB30",
    Token: 22147,
  },
  {
    Symbol: "723WB32",
    Token: 7857,
  },
  {
    Symbol: "723WB41",
    Token: 2414,
  },
  {
    Symbol: "724AP33",
    Token: 21644,
  },
  {
    Symbol: "724AP35",
    Token: 21645,
  },
  {
    Symbol: "724AP38",
    Token: 7711,
  },
  {
    Symbol: "724AS30",
    Token: 20917,
  },
  {
    Symbol: "724AS31",
    Token: 2389,
  },
  {
    Symbol: "724BR32",
    Token: 7870,
  },
  {
    Symbol: "724GJ29",
    Token: 21169,
  },
  {
    Symbol: "724HR29",
    Token: 20519,
  },
  {
    Symbol: "724JK36",
    Token: 2563,
  },
  {
    Symbol: "724KA37",
    Token: 2691,
  },
  {
    Symbol: "724KA38",
    Token: 2693,
  },
  {
    Symbol: "724RJ32",
    Token: 7899,
  },
  {
    Symbol: "724RJ32A",
    Token: 8136,
  },
  {
    Symbol: "724RJ32B",
    Token: 8574,
  },
  {
    Symbol: "724RJ36",
    Token: 2560,
  },
  {
    Symbol: "724SK32",
    Token: 8493,
  },
  {
    Symbol: "724TN32",
    Token: 7904,
  },
  {
    Symbol: "724TN51",
    Token: 5091,
  },
  {
    Symbol: "724TS51",
    Token: 5045,
  },
  {
    Symbol: "724UP32",
    Token: 7856,
  },
  {
    Symbol: "725GJ32",
    Token: 8354,
  },
  {
    Symbol: "725HR32",
    Token: 8355,
  },
  {
    Symbol: "725MZ34",
    Token: 8359,
  },
  {
    Symbol: "725PN25",
    Token: 21721,
  },
  {
    Symbol: "725TN27",
    Token: 22127,
  },
  {
    Symbol: "725TN32",
    Token: 8357,
  },
  {
    Symbol: "725TS28",
    Token: 22210,
  },
  {
    Symbol: "725TS41",
    Token: 2581,
  },
  {
    Symbol: "725UK32",
    Token: 7907,
  },
  {
    Symbol: "725WB41",
    Token: 2657,
  },
  {
    Symbol: "726AS29",
    Token: 21034,
  },
  {
    Symbol: "726GJ29",
    Token: 21032,
  },
  {
    Symbol: "726GS2029",
    Token: 8027,
  },
  {
    Symbol: "726GS2032",
    Token: 10722,
  },
  {
    Symbol: "726GS2033",
    Token: 14051,
  },
  {
    Symbol: "726HR32",
    Token: 8575,
  },
  {
    Symbol: "726JH27",
    Token: 22196,
  },
  {
    Symbol: "726KA25",
    Token: 13593,
  },
  {
    Symbol: "726UP29",
    Token: 22082,
  },
  {
    Symbol: "726WB34",
    Token: 22146,
  },
  {
    Symbol: "727AR32",
    Token: 7897,
  },
  {
    Symbol: "727AS29",
    Token: 21550,
  },
  {
    Symbol: "727GS2026",
    Token: 9537,
  },
  {
    Symbol: "727HR30",
    Token: 9344,
  },
  {
    Symbol: "727MH30",
    Token: 21942,
  },
  {
    Symbol: "727ML32",
    Token: 8576,
  },
  {
    Symbol: "727MZ33",
    Token: 2683,
  },
  {
    Symbol: "727RJ29",
    Token: 22034,
  },
  {
    Symbol: "727RJ30",
    Token: 22064,
  },
  {
    Symbol: "727SK32",
    Token: 7900,
  },
  {
    Symbol: "728GJ29",
    Token: 21214,
  },
  {
    Symbol: "728JH36",
    Token: 2688,
  },
  {
    Symbol: "728JH37",
    Token: 8360,
  },
  {
    Symbol: "728JK30",
    Token: 21646,
  },
  {
    Symbol: "728KL30",
    Token: 21908,
  },
  {
    Symbol: "728SK30",
    Token: 22155,
  },
  {
    Symbol: "728TS35",
    Token: 7815,
  },
  {
    Symbol: "728UP29",
    Token: 22098,
  },
  {
    Symbol: "728UP32",
    Token: 7905,
  },
  {
    Symbol: "729AP30",
    Token: 21643,
  },
  {
    Symbol: "729AP34",
    Token: 8930,
  },
  {
    Symbol: "729BR30",
    Token: 21642,
  },
  {
    Symbol: "729GA29",
    Token: 22217,
  },
  {
    Symbol: "729GA29A",
    Token: 22224,
  },
  {
    Symbol: "729GJ32",
    Token: 8683,
  },
  {
    Symbol: "729GR2033",
    Token: 14973,
  },
  {
    Symbol: "729KA34",
    Token: 7823,
  },
  {
    Symbol: "729KA36",
    Token: 2566,
  },
  {
    Symbol: "729KA37",
    Token: 2575,
  },
  {
    Symbol: "729KA39",
    Token: 2656,
  },
  {
    Symbol: "729ML29",
    Token: 22013,
  },
  {
    Symbol: "729MP30",
    Token: 21980,
  },
  {
    Symbol: "729MP35",
    Token: 21950,
  },
  {
    Symbol: "729MZ33",
    Token: 7898,
  },
  {
    Symbol: "729NL29",
    Token: 21998,
  },
  {
    Symbol: "729RJ32",
    Token: 8684,
  },
  {
    Symbol: "729TR36",
    Token: 2690,
  },
  {
    Symbol: "729UK29",
    Token: 22171,
  },
  {
    Symbol: "729UP29",
    Token: 22099,
  },
  {
    Symbol: "729WB29",
    Token: 22153,
  },
  {
    Symbol: "72AP30",
    Token: 20574,
  },
  {
    Symbol: "72AS29",
    Token: 20960,
  },
  {
    Symbol: "72GA31",
    Token: 2386,
  },
  {
    Symbol: "72HP35",
    Token: 20844,
  },
  {
    Symbol: "72JH35",
    Token: 2391,
  },
  {
    Symbol: "72JK29",
    Token: 20312,
  },
  {
    Symbol: "72KA31",
    Token: 20017,
  },
  {
    Symbol: "72KL56",
    Token: 4899,
  },
  {
    Symbol: "72ML29",
    Token: 22011,
  },
  {
    Symbol: "72MZ29",
    Token: 22018,
  },
  {
    Symbol: "72NL29",
    Token: 21996,
  },
  {
    Symbol: "72RJ46",
    Token: 2584,
  },
  {
    Symbol: "72TN31",
    Token: 22124,
  },
  {
    Symbol: "72TS51",
    Token: 2659,
  },
  {
    Symbol: "72UP31",
    Token: 2387,
  },
  {
    Symbol: "72WB30",
    Token: 22142,
  },
  {
    Symbol: "730AS29",
    Token: 21213,
  },
  {
    Symbol: "730JK29",
    Token: 21651,
  },
  {
    Symbol: "730KA32",
    Token: 8137,
  },
  {
    Symbol: "730PN31",
    Token: 21894,
  },
  {
    Symbol: "730WB29",
    Token: 22152,
  },
  {
    Symbol: "731AP42",
    Token: 8366,
  },
  {
    Symbol: "731KA35",
    Token: 7816,
  },
  {
    Symbol: "731KL32",
    Token: 8686,
  },
  {
    Symbol: "731PY35",
    Token: 7822,
  },
  {
    Symbol: "731TS60",
    Token: 22206,
  },
  {
    Symbol: "731WB34",
    Token: 22141,
  },
  {
    Symbol: "732AS32",
    Token: 8138,
  },
  {
    Symbol: "732GS2024",
    Token: 8274,
  },
  {
    Symbol: "732KA34",
    Token: 8006,
  },
  {
    Symbol: "733AS32",
    Token: 8688,
  },
  {
    Symbol: "733KA37",
    Token: 7858,
  },
  {
    Symbol: "733KA40",
    Token: 7859,
  },
  {
    Symbol: "733MP42",
    Token: 7861,
  },
  {
    Symbol: "733TN52",
    Token: 8007,
  },
  {
    Symbol: "733TN52A",
    Token: 8371,
  },
  {
    Symbol: "733TN54",
    Token: 22115,
  },
  {
    Symbol: "733TN57",
    Token: 8372,
  },
  {
    Symbol: "734AP40",
    Token: 8932,
  },
  {
    Symbol: "734GA32",
    Token: 8692,
  },
  {
    Symbol: "734MN32",
    Token: 8140,
  },
  {
    Symbol: "734MN32A",
    Token: 8695,
  },
  {
    Symbol: "734NL32",
    Token: 8698,
  },
  {
    Symbol: "734TR36",
    Token: 2394,
  },
  {
    Symbol: "734TS34",
    Token: 7874,
  },
  {
    Symbol: "734TS35",
    Token: 8495,
  },
  {
    Symbol: "734UK32",
    Token: 8689,
  },
  {
    Symbol: "734UP32",
    Token: 8693,
  },
  {
    Symbol: "735CG30",
    Token: 22162,
  },
  {
    Symbol: "735GJ26",
    Token: 14634,
  },
  {
    Symbol: "735GS2024",
    Token: 6936,
  },
  {
    Symbol: "735JH38",
    Token: 8498,
  },
  {
    Symbol: "735KA36",
    Token: 7872,
  },
  {
    Symbol: "735KA39",
    Token: 2400,
  },
  {
    Symbol: "735KA40",
    Token: 2404,
  },
  {
    Symbol: "735MP29",
    Token: 21982,
  },
  {
    Symbol: "735PY30",
    Token: 22028,
  },
  {
    Symbol: "735PY33",
    Token: 8358,
  },
  {
    Symbol: "735SK32",
    Token: 8699,
  },
  {
    Symbol: "735TS30",
    Token: 22208,
  },
  {
    Symbol: "735UK30",
    Token: 22202,
  },
  {
    Symbol: "735UP34",
    Token: 8702,
  },
  {
    Symbol: "735WB30",
    Token: 22177,
  },
  {
    Symbol: "736GS2052",
    Token: 10931,
  },
  {
    Symbol: "736KA39",
    Token: 7910,
  },
  {
    Symbol: "736MH28",
    Token: 15009,
  },
  {
    Symbol: "736TS36",
    Token: 8703,
  },
  {
    Symbol: "736WB32",
    Token: 8701,
  },
  {
    Symbol: "737AP38",
    Token: 8122,
  },
  {
    Symbol: "737AP42",
    Token: 8123,
  },
  {
    Symbol: "737JH31",
    Token: 22197,
  },
  {
    Symbol: "737KA38",
    Token: 7908,
  },
  {
    Symbol: "737PN42",
    Token: 8718,
  },
  {
    Symbol: "737RJ34",
    Token: 8578,
  },
  {
    Symbol: "737TS36",
    Token: 8121,
  },
  {
    Symbol: "738GJ30",
    Token: 15260,
  },
  {
    Symbol: "738GS2027",
    Token: 9913,
  },
  {
    Symbol: "738MP25",
    Token: 14526,
  },
  {
    Symbol: "739HR29",
    Token: 15256,
  },
  {
    Symbol: "739JK37",
    Token: 8496,
  },
  {
    Symbol: "739ML26",
    Token: 12289,
  },
  {
    Symbol: "739TN42",
    Token: 8719,
  },
  {
    Symbol: "739TN52",
    Token: 8502,
  },
  {
    Symbol: "739TS59",
    Token: 22203,
  },
  {
    Symbol: "739UP37",
    Token: 8705,
  },
  {
    Symbol: "73HP30",
    Token: 21051,
  },
  {
    Symbol: "73PN34",
    Token: 21717,
  },
  {
    Symbol: "73RJ30",
    Token: 22066,
  },
  {
    Symbol: "73TN32",
    Token: 8685,
  },
  {
    Symbol: "73UP30",
    Token: 22091,
  },
  {
    Symbol: "741AP30",
    Token: 15262,
  },
  {
    Symbol: "741GJ26",
    Token: 11588,
  },
  {
    Symbol: "741GS2036",
    Token: 13194,
  },
  {
    Symbol: "741PN42",
    Token: 8501,
  },
  {
    Symbol: "742KL34",
    Token: 8579,
  },
  {
    Symbol: "743AP31",
    Token: 15264,
  },
  {
    Symbol: "743HP28",
    Token: 10559,
  },
  {
    Symbol: "743HR41",
    Token: 8364,
  },
  {
    Symbol: "743TN47",
    Token: 8587,
  },
  {
    Symbol: "743TS33",
    Token: 15265,
  },
  {
    Symbol: "743TS54",
    Token: 22211,
  },
  {
    Symbol: "744AP42",
    Token: 8721,
  },
  {
    Symbol: "744HR27",
    Token: 12657,
  },
  {
    Symbol: "744KA35",
    Token: 8120,
  },
  {
    Symbol: "744TN33",
    Token: 15310,
  },
  {
    Symbol: "745AP37",
    Token: 9345,
  },
  {
    Symbol: "745AP40",
    Token: 10962,
  },
  {
    Symbol: "745AP42",
    Token: 10963,
  },
  {
    Symbol: "745BR32",
    Token: 10956,
  },
  {
    Symbol: "745GJ30",
    Token: 20277,
  },
  {
    Symbol: "745HR32",
    Token: 10955,
  },
  {
    Symbol: "745RJ30",
    Token: 22036,
  },
  {
    Symbol: "745RJ33",
    Token: 15309,
  },
  {
    Symbol: "745SK32",
    Token: 10966,
  },
  {
    Symbol: "745TS30",
    Token: 10902,
  },
  {
    Symbol: "745UK30",
    Token: 22165,
  },
  {
    Symbol: "745UP33",
    Token: 15314,
  },
  {
    Symbol: "746AP27",
    Token: 9530,
  },
  {
    Symbol: "746KL48",
    Token: 15324,
  },
  {
    Symbol: "746MP32",
    Token: 10957,
  },
  {
    Symbol: "746TS48",
    Token: 10964,
  },
  {
    Symbol: "746TS48A",
    Token: 15333,
  },
  {
    Symbol: "746TS49",
    Token: 10965,
  },
  {
    Symbol: "746WB40",
    Token: 8499,
  },
  {
    Symbol: "746WB46",
    Token: 15323,
  },
  {
    Symbol: "747AP37",
    Token: 15267,
  },
  {
    Symbol: "747GJ25",
    Token: 11674,
  },
  {
    Symbol: "747PN43",
    Token: 15319,
  },
  {
    Symbol: "747TS31",
    Token: 10904,
  },
  {
    Symbol: "747WB43",
    Token: 15320,
  },
  {
    Symbol: "748AP38",
    Token: 8363,
  },
  {
    Symbol: "748HP33",
    Token: 10958,
  },
  {
    Symbol: "748PN42",
    Token: 9099,
  },
  {
    Symbol: "748WB37",
    Token: 7911,
  },
  {
    Symbol: "749GJ26",
    Token: 11273,
  },
  {
    Symbol: "749GJ28",
    Token: 14812,
  },
  {
    Symbol: "749HP34",
    Token: 10959,
  },
  {
    Symbol: "749MH30",
    Token: 15015,
  },
  {
    Symbol: "749ML27",
    Token: 13239,
  },
  {
    Symbol: "749MN35",
    Token: 15315,
  },
  {
    Symbol: "74GS2035",
    Token: 6874,
  },
  {
    Symbol: "74GS2062",
    Token: 10981,
  },
  {
    Symbol: "74HR37",
    Token: 8580,
  },
  {
    Symbol: "74KL37",
    Token: 8713,
  },
  {
    Symbol: "74ML27",
    Token: 13118,
  },
  {
    Symbol: "74TN42",
    Token: 8590,
  },
  {
    Symbol: "74WB38",
    Token: 8584,
  },
  {
    Symbol: "750AS30",
    Token: 20278,
  },
  {
    Symbol: "750GA30",
    Token: 20218,
  },
  {
    Symbol: "750MZ30",
    Token: 22016,
  },
  {
    Symbol: "750TN29",
    Token: 22107,
  },
  {
    Symbol: "750TS28",
    Token: 22189,
  },
  {
    Symbol: "751HR29",
    Token: 13122,
  },
  {
    Symbol: "752AP38",
    Token: 8974,
  },
  {
    Symbol: "752AP42",
    Token: 8977,
  },
  {
    Symbol: "752GJ25",
    Token: 14419,
  },
  {
    Symbol: "753AS27",
    Token: 10195,
  },
  {
    Symbol: "753AS32",
    Token: 10906,
  },
  {
    Symbol: "753BR32",
    Token: 10923,
  },
  {
    Symbol: "753HR30",
    Token: 10855,
  },
  {
    Symbol: "753TN53",
    Token: 14280,
  },
  {
    Symbol: "753TS47",
    Token: 13051,
  },
  {
    Symbol: "754AP29",
    Token: 13712,
  },
  {
    Symbol: "754AS28",
    Token: 10646,
  },
  {
    Symbol: "754GS2036",
    Token: 9585,
  },
  {
    Symbol: "754KA41",
    Token: 13050,
  },
  {
    Symbol: "755AP29",
    Token: 12661,
  },
  {
    Symbol: "755AS32",
    Token: 11095,
  },
  {
    Symbol: "755BR32",
    Token: 11094,
  },
  {
    Symbol: "755BR32A",
    Token: 13038,
  },
  {
    Symbol: "755GA32",
    Token: 13124,
  },
  {
    Symbol: "755GJ30",
    Token: 13366,
  },
  {
    Symbol: "755JK38",
    Token: 13779,
  },
  {
    Symbol: "755TN53",
    Token: 14117,
  },
  {
    Symbol: "755TS30",
    Token: 13770,
  },
  {
    Symbol: "756RJ33",
    Token: 15095,
  },
  {
    Symbol: "756RJ48",
    Token: 14113,
  },
  {
    Symbol: "756TN53",
    Token: 14357,
  },
  {
    Symbol: "756TS40",
    Token: 11160,
  },
  {
    Symbol: "756TS48",
    Token: 14112,
  },
  {
    Symbol: "756WB39",
    Token: 11159,
  },
  {
    Symbol: "756WB42",
    Token: 11161,
  },
  {
    Symbol: "757AS32",
    Token: 13112,
  },
  {
    Symbol: "757GJ26",
    Token: 11866,
  },
  {
    Symbol: "757GJ31",
    Token: 13369,
  },
  {
    Symbol: "757GJ32",
    Token: 13773,
  },
  {
    Symbol: "757GS2033",
    Token: 10046,
  },
  {
    Symbol: "757HP31",
    Token: 10526,
  },
  {
    Symbol: "757HP32",
    Token: 13117,
  },
  {
    Symbol: "757HR30",
    Token: 12664,
  },
  {
    Symbol: "757JK34",
    Token: 11096,
  },
  {
    Symbol: "757MH31",
    Token: 13913,
  },
  {
    Symbol: "757TN33",
    Token: 13715,
  },
  {
    Symbol: "757TN53",
    Token: 14455,
  },
  {
    Symbol: "757TS31",
    Token: 13772,
  },
  {
    Symbol: "758AP40",
    Token: 10911,
  },
  {
    Symbol: "758AP42",
    Token: 10913,
  },
  {
    Symbol: "758AS33",
    Token: 15016,
  },
  {
    Symbol: "758BR32",
    Token: 13113,
  },
  {
    Symbol: "758GA37",
    Token: 10912,
  },
  {
    Symbol: "758GA37A",
    Token: 11097,
  },
  {
    Symbol: "758HR30",
    Token: 13241,
  },
  {
    Symbol: "758JH31",
    Token: 13368,
  },
  {
    Symbol: "758KL49",
    Token: 14355,
  },
  {
    Symbol: "758NL33",
    Token: 15021,
  },
  {
    Symbol: "758PN42",
    Token: 10907,
  },
  {
    Symbol: "758RJ48",
    Token: 14354,
  },
  {
    Symbol: "758TS45",
    Token: 14353,
  },
  {
    Symbol: "759AP33",
    Token: 13717,
  },
  {
    Symbol: "759CG30",
    Token: 22158,
  },
  {
    Symbol: "759GS2026",
    Token: 7139,
  },
  {
    Symbol: "759GS2029",
    Token: 7130,
  },
  {
    Symbol: "759HP38",
    Token: 14276,
  },
  {
    Symbol: "759KA38",
    Token: 13049,
  },
  {
    Symbol: "759MP38",
    Token: 14277,
  },
  {
    Symbol: "759PN33",
    Token: 15019,
  },
  {
    Symbol: "759PN39",
    Token: 14279,
  },
  {
    Symbol: "759PY41",
    Token: 14168,
  },
  {
    Symbol: "759RJ48",
    Token: 15109,
  },
  {
    Symbol: "759TS37",
    Token: 13719,
  },
  {
    Symbol: "759TS40",
    Token: 13721,
  },
  {
    Symbol: "759TS40A",
    Token: 14167,
  },
  {
    Symbol: "75AP28",
    Token: 12660,
  },
  {
    Symbol: "75GS2034",
    Token: 6873,
  },
  {
    Symbol: "75HP36",
    Token: 10960,
  },
  {
    Symbol: "75HP37",
    Token: 10961,
  },
  {
    Symbol: "75HR29",
    Token: 13594,
  },
  {
    Symbol: "75HR30",
    Token: 15098,
  },
  {
    Symbol: "75TR30",
    Token: 22137,
  },
  {
    Symbol: "761GJ32",
    Token: 10531,
  },
  {
    Symbol: "761GS2030",
    Token: 7142,
  },
  {
    Symbol: "761HR32",
    Token: 10853,
  },
  {
    Symbol: "761JK42",
    Token: 13135,
  },
  {
    Symbol: "761MH29",
    Token: 9435,
  },
  {
    Symbol: "761RJ32",
    Token: 13377,
  },
  {
    Symbol: "761RJ43",
    Token: 15105,
  },
  {
    Symbol: "761TN32",
    Token: 10852,
  },
  {
    Symbol: "761TN32A",
    Token: 13379,
  },
  {
    Symbol: "761TS32",
    Token: 14088,
  },
  {
    Symbol: "761TS44",
    Token: 15106,
  },
  {
    Symbol: "762AR32",
    Token: 13372,
  },
  {
    Symbol: "762AS32",
    Token: 12666,
  },
  {
    Symbol: "762BR32",
    Token: 10854,
  },
  {
    Symbol: "762GA32",
    Token: 12678,
  },
  {
    Symbol: "762GA32A",
    Token: 13373,
  },
  {
    Symbol: "762GJ29",
    Token: 11589,
  },
  {
    Symbol: "762GS2039",
    Token: 9538,
  },
  {
    Symbol: "762HR31",
    Token: 13600,
  },
  {
    Symbol: "762KL53",
    Token: 13624,
  },
  {
    Symbol: "762MH30",
    Token: 9695,
  },
  {
    Symbol: "762MH30A",
    Token: 11277,
  },
  {
    Symbol: "762MN35",
    Token: 14165,
  },
  {
    Symbol: "762MP34",
    Token: 14163,
  },
  {
    Symbol: "762MZ36",
    Token: 14166,
  },
  {
    Symbol: "762PN32",
    Token: 12673,
  },
  {
    Symbol: "762PN38",
    Token: 15100,
  },
  {
    Symbol: "762PY35",
    Token: 14164,
  },
  {
    Symbol: "762TN33",
    Token: 13602,
  },
  {
    Symbol: "762TN43",
    Token: 13908,
  },
  {
    Symbol: "762UK33",
    Token: 13716,
  },
  {
    Symbol: "762UP35",
    Token: 13778,
  },
  {
    Symbol: "763AP30",
    Token: 9531,
  },
  {
    Symbol: "763GJ32",
    Token: 13916,
  },
  {
    Symbol: "763GS2059",
    Token: 9907,
  },
  {
    Symbol: "763HP37",
    Token: 13127,
  },
  {
    Symbol: "763HR28",
    Token: 9770,
  },
  {
    Symbol: "763HR29",
    Token: 9433,
  },
  {
    Symbol: "763HR32",
    Token: 13244,
  },
  {
    Symbol: "763HR33",
    Token: 13627,
  },
  {
    Symbol: "763JH30",
    Token: 14087,
  },
  {
    Symbol: "763KA37",
    Token: 12692,
  },
  {
    Symbol: "763KA39",
    Token: 13128,
  },
  {
    Symbol: "763KA40",
    Token: 13134,
  },
  {
    Symbol: "763KA42",
    Token: 12710,
  },
  {
    Symbol: "763KL32",
    Token: 13375,
  },
  {
    Symbol: "763KL43",
    Token: 12726,
  },
  {
    Symbol: "763MH30",
    Token: 9437,
  },
  {
    Symbol: "763ML25",
    Token: 11675,
  },
  {
    Symbol: "763PN39",
    Token: 12706,
  },
  {
    Symbol: "763PY32",
    Token: 13382,
  },
  {
    Symbol: "763TN47",
    Token: 12345,
  },
  {
    Symbol: "763TS36",
    Token: 13718,
  },
  {
    Symbol: "763TS43",
    Token: 12321,
  },
  {
    Symbol: "763TS44",
    Token: 12328,
  },
  {
    Symbol: "764AP33",
    Token: 12689,
  },
  {
    Symbol: "764AR30",
    Token: 20570,
  },
  {
    Symbol: "764BR32",
    Token: 13242,
  },
  {
    Symbol: "764GA30",
    Token: 20571,
  },
  {
    Symbol: "764GA33",
    Token: 13887,
  },
  {
    Symbol: "764GA38",
    Token: 13619,
  },
  {
    Symbol: "764HR31",
    Token: 13915,
  },
  {
    Symbol: "764KL34",
    Token: 13606,
  },
  {
    Symbol: "764MH32",
    Token: 11285,
  },
  {
    Symbol: "764MH33",
    Token: 13886,
  },
  {
    Symbol: "764MP33",
    Token: 14093,
  },
  {
    Symbol: "764RJ38",
    Token: 13902,
  },
  {
    Symbol: "764TN29",
    Token: 10452,
  },
  {
    Symbol: "764TN32",
    Token: 10544,
  },
  {
    Symbol: "764TS33",
    Token: 14097,
  },
  {
    Symbol: "764UP36",
    Token: 14109,
  },
  {
    Symbol: "764WB32",
    Token: 13248,
  },
  {
    Symbol: "764WB42",
    Token: 13621,
  },
  {
    Symbol: "765AS32",
    Token: 10765,
  },
  {
    Symbol: "765BR32",
    Token: 10529,
  },
  {
    Symbol: "765BR32A",
    Token: 10721,
  },
  {
    Symbol: "765GA32",
    Token: 13243,
  },
  {
    Symbol: "765GJ29",
    Token: 10233,
  },
  {
    Symbol: "765GJ33",
    Token: 13964,
  },
  {
    Symbol: "765HR30",
    Token: 13957,
  },
  {
    Symbol: "765HR33",
    Token: 13882,
  },
  {
    Symbol: "765HR33A",
    Token: 14272,
  },
  {
    Symbol: "765KA34",
    Token: 13384,
  },
  {
    Symbol: "765KL48",
    Token: 13996,
  },
  {
    Symbol: "765NL32",
    Token: 13247,
  },
  {
    Symbol: "765PN42",
    Token: 11981,
  },
  {
    Symbol: "765RJ32",
    Token: 10543,
  },
  {
    Symbol: "765RJ32A",
    Token: 11288,
  },
  {
    Symbol: "765RJ33",
    Token: 13881,
  },
  {
    Symbol: "765TN29",
    Token: 10234,
  },
  {
    Symbol: "765TN33",
    Token: 13874,
  },
  {
    Symbol: "765TN53",
    Token: 13997,
  },
  {
    Symbol: "765TS30",
    Token: 22188,
  },
  {
    Symbol: "765UP30",
    Token: 22086,
  },
  {
    Symbol: "766AP32",
    Token: 13958,
  },
  {
    Symbol: "766BR33",
    Token: 14098,
  },
  {
    Symbol: "766GJ30",
    Token: 14269,
  },
  {
    Symbol: "766HR29",
    Token: 14635,
  },
  {
    Symbol: "766KA42",
    Token: 12313,
  },
  {
    Symbol: "766KL50",
    Token: 14563,
  },
  {
    Symbol: "766MH33",
    Token: 14549,
  },
  {
    Symbol: "766MP48",
    Token: 14559,
  },
  {
    Symbol: "766RJ33",
    Token: 13960,
  },
  {
    Symbol: "766RJ43",
    Token: 13994,
  },
  {
    Symbol: "766SK33",
    Token: 14274,
  },
  {
    Symbol: "766TS34",
    Token: 13387,
  },
  {
    Symbol: "766TS44",
    Token: 13995,
  },
  {
    Symbol: "766UP32",
    Token: 10771,
  },
  {
    Symbol: "766UP33",
    Token: 14162,
  },
  {
    Symbol: "766UP33A",
    Token: 14273,
  },
  {
    Symbol: "766WB39",
    Token: 13906,
  },
  {
    Symbol: "767AP31",
    Token: 9696,
  },
  {
    Symbol: "767AS32",
    Token: 11980,
  },
  {
    Symbol: "767AS33",
    Token: 13877,
  },
  {
    Symbol: "767AS33A",
    Token: 14092,
  },
  {
    Symbol: "767HR32",
    Token: 11284,
  },
  {
    Symbol: "767JH37",
    Token: 13257,
  },
  {
    Symbol: "767KA32",
    Token: 11984,
  },
  {
    Symbol: "767KL34",
    Token: 10851,
  },
  {
    Symbol: "767MP33",
    Token: 13965,
  },
  {
    Symbol: "767NL32",
    Token: 10541,
  },
  {
    Symbol: "767NL33",
    Token: 13626,
  },
  {
    Symbol: "767NL33A",
    Token: 13967,
  },
  {
    Symbol: "767TN53",
    Token: 14564,
  },
  {
    Symbol: "767TS35",
    Token: 13389,
  },
  {
    Symbol: "767UK33",
    Token: 14102,
  },
  {
    Symbol: "767WB37",
    Token: 13237,
  },
  {
    Symbol: "767WB39",
    Token: 13399,
  },
  {
    Symbol: "767WB41",
    Token: 13401,
  },
  {
    Symbol: "768AS32",
    Token: 10528,
  },
  {
    Symbol: "768BR32",
    Token: 11985,
  },
  {
    Symbol: "768BR33",
    Token: 14271,
  },
  {
    Symbol: "768GJ30",
    Token: 14156,
  },
  {
    Symbol: "768GJ33",
    Token: 14548,
  },
  {
    Symbol: "768GS2023",
    Token: 7121,
  },
  {
    Symbol: "768HR31",
    Token: 12295,
  },
  {
    Symbol: "768HR33",
    Token: 13968,
  },
  {
    Symbol: "768JK37",
    Token: 12701,
  },
  {
    Symbol: "768KA31",
    Token: 11978,
  },
  {
    Symbol: "768KA34",
    Token: 13254,
  },
  {
    Symbol: "768PN39",
    Token: 13398,
  },
  {
    Symbol: "768PN42",
    Token: 11276,
  },
  {
    Symbol: "768TS42",
    Token: 13993,
  },
  {
    Symbol: "768UP32",
    Token: 11289,
  },
  {
    Symbol: "768WB32",
    Token: 11291,
  },
  {
    Symbol: "769AP35",
    Token: 13878,
  },
  {
    Symbol: "769AP43",
    Token: 14351,
  },
  {
    Symbol: "769AS33",
    Token: 13959,
  },
  {
    Symbol: "769BR32",
    Token: 11282,
  },
  {
    Symbol: "769GA32",
    Token: 11283,
  },
  {
    Symbol: "769GA32A",
    Token: 12301,
  },
  {
    Symbol: "769GS2043",
    Token: 9888,
  },
  {
    Symbol: "769HR27",
    Token: 9873,
  },
  {
    Symbol: "769KL40",
    Token: 11292,
  },
  {
    Symbol: "769MH31",
    Token: 14531,
  },
  {
    Symbol: "769MN34",
    Token: 13252,
  },
  {
    Symbol: "769MP43",
    Token: 14352,
  },
  {
    Symbol: "769MZ31",
    Token: 9708,
  },
  {
    Symbol: "769MZ37",
    Token: 13897,
  },
  {
    Symbol: "769PN39",
    Token: 14381,
  },
  {
    Symbol: "769PY37",
    Token: 13397,
  },
  {
    Symbol: "769RJ39",
    Token: 14380,
  },
  {
    Symbol: "769TN37",
    Token: 13393,
  },
  {
    Symbol: "769TN43",
    Token: 14349,
  },
  {
    Symbol: "769TS32",
    Token: 14533,
  },
  {
    Symbol: "769UP35",
    Token: 13891,
  },
  {
    Symbol: "769WB39",
    Token: 14340,
  },
  {
    Symbol: "769WB42",
    Token: 14347,
  },
  {
    Symbol: "76AP28",
    Token: 11299,
  },
  {
    Symbol: "76AP29",
    Token: 14954,
  },
  {
    Symbol: "76GJ32",
    Token: 12667,
  },
  {
    Symbol: "76GJ35",
    Token: 14107,
  },
  {
    Symbol: "76JK35",
    Token: 14103,
  },
  {
    Symbol: "76KA32",
    Token: 13245,
  },
  {
    Symbol: "76KA32A",
    Token: 13374,
  },
  {
    Symbol: "76KA33",
    Token: 13601,
  },
  {
    Symbol: "76KL45",
    Token: 13911,
  },
  {
    Symbol: "76MH30",
    Token: 21934,
  },
  {
    Symbol: "76TN32",
    Token: 10720,
  },
  {
    Symbol: "770MH32",
    Token: 9722,
  },
  {
    Symbol: "771AP32",
    Token: 9711,
  },
  {
    Symbol: "771AP33",
    Token: 14270,
  },
  {
    Symbol: "771AP33A",
    Token: 14959,
  },
  {
    Symbol: "771AP34",
    Token: 11281,
  },
  {
    Symbol: "771AP36",
    Token: 13972,
  },
  {
    Symbol: "771AP37",
    Token: 10848,
  },
  {
    Symbol: "771AP39",
    Token: 10847,
  },
  {
    Symbol: "771AP42",
    Token: 10846,
  },
  {
    Symbol: "771AS33",
    Token: 14160,
  },
  {
    Symbol: "771BR33",
    Token: 14431,
  },
  {
    Symbol: "771GJ33",
    Token: 14374,
  },
  {
    Symbol: "771GJ34",
    Token: 14432,
  },
  {
    Symbol: "771KL42",
    Token: 10845,
  },
  {
    Symbol: "771MN32",
    Token: 11286,
  },
  {
    Symbol: "771WB39",
    Token: 13991,
  },
  {
    Symbol: "772AP34",
    Token: 10527,
  },
  {
    Symbol: "772AP35",
    Token: 10718,
  },
  {
    Symbol: "772AS33",
    Token: 14539,
  },
  {
    Symbol: "772BR33",
    Token: 14161,
  },
  {
    Symbol: "772BR33A",
    Token: 14375,
  },
  {
    Symbol: "772GJ34",
    Token: 14643,
  },
  {
    Symbol: "772GJ35",
    Token: 14553,
  },
  {
    Symbol: "772GS2025",
    Token: 7123,
  },
  {
    Symbol: "772GS2049",
    Token: 9604,
  },
  {
    Symbol: "772GS2055",
    Token: 7136,
  },
  {
    Symbol: "772HP31",
    Token: 14637,
  },
  {
    Symbol: "772HR32",
    Token: 14638,
  },
  {
    Symbol: "772JK32",
    Token: 9717,
  },
  {
    Symbol: "772MH31",
    Token: 14367,
  },
  {
    Symbol: "772MH32",
    Token: 14639,
  },
  {
    Symbol: "772MH34",
    Token: 9724,
  },
  {
    Symbol: "772MN32",
    Token: 9718,
  },
  {
    Symbol: "772MP38",
    Token: 13977,
  },
  {
    Symbol: "772RJ35",
    Token: 9725,
  },
  {
    Symbol: "772TS46",
    Token: 14452,
  },
  {
    Symbol: "772UP36",
    Token: 13973,
  },
  {
    Symbol: "772WB38",
    Token: 11295,
  },
  {
    Symbol: "773AP32",
    Token: 14640,
  },
  {
    Symbol: "773BR32",
    Token: 11598,
  },
  {
    Symbol: "773BR33",
    Token: 14534,
  },
  {
    Symbol: "773GJ29",
    Token: 21049,
  },
  {
    Symbol: "773GJ32",
    Token: 10648,
  },
  {
    Symbol: "773GJ36",
    Token: 14652,
  },
  {
    Symbol: "773GS2034",
    Token: 7127,
  },
  {
    Symbol: "773HR32",
    Token: 14369,
  },
  {
    Symbol: "773HR33",
    Token: 9441,
  },
  {
    Symbol: "773MH32",
    Token: 14819,
  },
  {
    Symbol: "773MH34",
    Token: 14645,
  },
  {
    Symbol: "773RJ38",
    Token: 13979,
  },
  {
    Symbol: "773TS34",
    Token: 14436,
  },
  {
    Symbol: "773UP33",
    Token: 14538,
  },
  {
    Symbol: "773WB32",
    Token: 9719,
  },
  {
    Symbol: "774AP31",
    Token: 10647,
  },
  {
    Symbol: "774AP32",
    Token: 14373,
  },
  {
    Symbol: "774AP38",
    Token: 10719,
  },
  {
    Symbol: "774AP42",
    Token: 11417,
  },
  {
    Symbol: "774GA32",
    Token: 11597,
  },
  {
    Symbol: "774HR29",
    Token: 11676,
  },
  {
    Symbol: "774HR31",
    Token: 14814,
  },
  {
    Symbol: "774HR35",
    Token: 9444,
  },
  {
    Symbol: "774KA37",
    Token: 12311,
  },
  {
    Symbol: "774MH33",
    Token: 14378,
  },
  {
    Symbol: "774MP43",
    Token: 14656,
  },
  {
    Symbol: "774MZ33",
    Token: 10540,
  },
  {
    Symbol: "774MZ38",
    Token: 14558,
  },
  {
    Symbol: "774PN39",
    Token: 14653,
  },
  {
    Symbol: "774RJ40",
    Token: 14654,
  },
  {
    Symbol: "774RJ42",
    Token: 11418,
  },
  {
    Symbol: "774RJ49",
    Token: 14663,
  },
  {
    Symbol: "774TS45",
    Token: 10783,
  },
  {
    Symbol: "774TS46",
    Token: 10784,
  },
  {
    Symbol: "774TS48",
    Token: 14660,
  },
  {
    Symbol: "774UK33",
    Token: 14376,
  },
  {
    Symbol: "774UP37",
    Token: 14554,
  },
  {
    Symbol: "774WB39",
    Token: 11607,
  },
  {
    Symbol: "774WB41",
    Token: 14655,
  },
  {
    Symbol: "774WB43",
    Token: 14658,
  },
  {
    Symbol: "775AP29",
    Token: 11760,
  },
  {
    Symbol: "775CG31",
    Token: 14816,
  },
  {
    Symbol: "775GJ32",
    Token: 11400,
  },
  {
    Symbol: "775HP32",
    Token: 14818,
  },
  {
    Symbol: "775NL33",
    Token: 14821,
  },
  {
    Symbol: "775PN42",
    Token: 10782,
  },
  {
    Symbol: "775SK33",
    Token: 14822,
  },
  {
    Symbol: "775TN30",
    Token: 22104,
  },
  {
    Symbol: "775TN32",
    Token: 10651,
  },
  {
    Symbol: "775UP35",
    Token: 14441,
  },
  {
    Symbol: "775UP38",
    Token: 14442,
  },
  {
    Symbol: "775WB39",
    Token: 14446,
  },
  {
    Symbol: "776AP32",
    Token: 9438,
  },
  {
    Symbol: "776HP30",
    Token: 10235,
  },
  {
    Symbol: "776HP33",
    Token: 14641,
  },
  {
    Symbol: "776HR30",
    Token: 11867,
  },
  {
    Symbol: "776KL38",
    Token: 10773,
  },
  {
    Symbol: "776KL51",
    Token: 14855,
  },
  {
    Symbol: "776KL58",
    Token: 14861,
  },
  {
    Symbol: "776MH30",
    Token: 11390,
  },
  {
    Symbol: "776MN35",
    Token: 14379,
  },
  {
    Symbol: "776PN37",
    Token: 9449,
  },
  {
    Symbol: "776TN53",
    Token: 14860,
  },
  {
    Symbol: "776UK33",
    Token: 14820,
  },
  {
    Symbol: "777AP40",
    Token: 14341,
  },
  {
    Symbol: "777GJ31",
    Token: 9771,
  },
  {
    Symbol: "777GJ32",
    Token: 10459,
  },
  {
    Symbol: "777HR32",
    Token: 10652,
  },
  {
    Symbol: "777HR33",
    Token: 14825,
  },
  {
    Symbol: "777JK35",
    Token: 14437,
  },
  {
    Symbol: "777JK37",
    Token: 11604,
  },
  {
    Symbol: "777MP43",
    Token: 14451,
  },
  {
    Symbol: "777MP47",
    Token: 14850,
  },
  {
    Symbol: "777RJ32",
    Token: 10638,
  },
  {
    Symbol: "777RJ33",
    Token: 14642,
  },
  {
    Symbol: "778AP41",
    Token: 9450,
  },
  {
    Symbol: "778AP42",
    Token: 9451,
  },
  {
    Symbol: "778MH29",
    Token: 21933,
  },
  {
    Symbol: "778MH30",
    Token: 11678,
  },
  {
    Symbol: "778ML31",
    Token: 10330,
  },
  {
    Symbol: "778MZ32",
    Token: 11401,
  },
  {
    Symbol: "778MZ37",
    Token: 11294,
  },
  {
    Symbol: "778RJ33",
    Token: 14824,
  },
  {
    Symbol: "778TS34",
    Token: 14647,
  },
  {
    Symbol: "778UP35",
    Token: 14649,
  },
  {
    Symbol: "778UP36",
    Token: 14651,
  },
  {
    Symbol: "779AP31",
    Token: 10458,
  },
  {
    Symbol: "779HP38",
    Token: 14839,
  },
  {
    Symbol: "779JK35",
    Token: 14650,
  },
  {
    Symbol: "779RJ32",
    Token: 11404,
  },
  {
    Symbol: "779TN32",
    Token: 11405,
  },
  {
    Symbol: "779UP33",
    Token: 14829,
  },
  {
    Symbol: "779WB42",
    Token: 14447,
  },
  {
    Symbol: "77AP28",
    Token: 14359,
  },
  {
    Symbol: "77AP29",
    Token: 14421,
  },
  {
    Symbol: "77AP30",
    Token: 14268,
  },
  {
    Symbol: "77AP30A",
    Token: 14636,
  },
  {
    Symbol: "77AP32",
    Token: 14958,
  },
  {
    Symbol: "77BR32",
    Token: 12300,
  },
  {
    Symbol: "77HP36",
    Token: 13896,
  },
  {
    Symbol: "77HP38",
    Token: 13901,
  },
  {
    Symbol: "77HR31",
    Token: 14159,
  },
  {
    Symbol: "77HR32",
    Token: 14532,
  },
  {
    Symbol: "77HR34",
    Token: 12303,
  },
  {
    Symbol: "77JK37",
    Token: 13392,
  },
  {
    Symbol: "77KL47",
    Token: 11424,
  },
  {
    Symbol: "77MH30",
    Token: 11590,
  },
  {
    Symbol: "77MH31",
    Token: 14424,
  },
  {
    Symbol: "77MH33",
    Token: 14425,
  },
  {
    Symbol: "77MN35",
    Token: 13892,
  },
  {
    Symbol: "77MZ35",
    Token: 13256,
  },
  {
    Symbol: "77PN40",
    Token: 13992,
  },
  {
    Symbol: "77PN42",
    Token: 11416,
  },
  {
    Symbol: "77RJ32",
    Token: 9532,
  },
  {
    Symbol: "77TN42",
    Token: 10844,
  },
  {
    Symbol: "780AP33",
    Token: 21050,
  },
  {
    Symbol: "780HR30",
    Token: 20219,
  },
  {
    Symbol: "780KA30",
    Token: 20964,
  },
  {
    Symbol: "781GA32",
    Token: 9779,
  },
  {
    Symbol: "781GJ32",
    Token: 11506,
  },
  {
    Symbol: "781HR32",
    Token: 9780,
  },
  {
    Symbol: "781HR32A",
    Token: 10331,
  },
  {
    Symbol: "781HR32B",
    Token: 10461,
  },
  {
    Symbol: "781HR32C",
    Token: 11690,
  },
  {
    Symbol: "781KL44",
    Token: 11706,
  },
  {
    Symbol: "781RJ32",
    Token: 10462,
  },
  {
    Symbol: "781RJ47",
    Token: 10219,
  },
  {
    Symbol: "781TN52",
    Token: 10190,
  },
  {
    Symbol: "781UP32",
    Token: 11408,
  },
  {
    Symbol: "781UP34",
    Token: 11603,
  },
  {
    Symbol: "781UP34A",
    Token: 14830,
  },
  {
    Symbol: "782AP35",
    Token: 11412,
  },
  {
    Symbol: "782AP42",
    Token: 10555,
  },
  {
    Symbol: "782AS32",
    Token: 10246,
  },
  {
    Symbol: "782AS32A",
    Token: 11764,
  },
  {
    Symbol: "782GJ32",
    Token: 10196,
  },
  {
    Symbol: "782HP32",
    Token: 10247,
  },
  {
    Symbol: "782MN32",
    Token: 9781,
  },
  {
    Symbol: "782NL32",
    Token: 10463,
  },
  {
    Symbol: "782NL32A",
    Token: 11881,
  },
  {
    Symbol: "782PN42",
    Token: 10558,
  },
  {
    Symbol: "782RJ32",
    Token: 11765,
  },
  {
    Symbol: "782RJ44",
    Token: 10525,
  },
  {
    Symbol: "782SK32",
    Token: 10470,
  },
  {
    Symbol: "782SK32A",
    Token: 11878,
  },
  {
    Symbol: "782TN32",
    Token: 11693,
  },
  {
    Symbol: "782WB32",
    Token: 10252,
  },
  {
    Symbol: "783AS32",
    Token: 10357,
  },
  {
    Symbol: "783BR32",
    Token: 11882,
  },
  {
    Symbol: "783GA32",
    Token: 11683,
  },
  {
    Symbol: "783HR32",
    Token: 11507,
  },
  {
    Symbol: "783KL39",
    Token: 14840,
  },
  {
    Symbol: "783MH30",
    Token: 21940,
  },
  {
    Symbol: "783MN32",
    Token: 10368,
  },
  {
    Symbol: "783PN42",
    Token: 11769,
  },
  {
    Symbol: "783RJ32",
    Token: 9915,
  },
  {
    Symbol: "783RJ50",
    Token: 14854,
  },
  {
    Symbol: "783TN42",
    Token: 11704,
  },
  {
    Symbol: "783TS35",
    Token: 11413,
  },
  {
    Symbol: "783TS36",
    Token: 11415,
  },
  {
    Symbol: "783WB32",
    Token: 9782,
  },
  {
    Symbol: "784AS32",
    Token: 11679,
  },
  {
    Symbol: "784HP37",
    Token: 11874,
  },
  {
    Symbol: "784RJ32",
    Token: 11691,
  },
  {
    Symbol: "784RJ41",
    Token: 14845,
  },
  {
    Symbol: "784TN52",
    Token: 9953,
  },
  {
    Symbol: "784TS34",
    Token: 11409,
  },
  {
    Symbol: "784TS36",
    Token: 10545,
  },
  {
    Symbol: "784TS39",
    Token: 11767,
  },
  {
    Symbol: "784TS40",
    Token: 11768,
  },
  {
    Symbol: "785AP37",
    Token: 9928,
  },
  {
    Symbol: "785AP40",
    Token: 11514,
  },
  {
    Symbol: "785AS32",
    Token: 10197,
  },
  {
    Symbol: "785AS32A",
    Token: 11505,
  },
  {
    Symbol: "785BR32",
    Token: 11513,
  },
  {
    Symbol: "785BR32A",
    Token: 11682,
  },
  {
    Symbol: "785HP36",
    Token: 11870,
  },
  {
    Symbol: "785KL34",
    Token: 9788,
  },
  {
    Symbol: "785KL35",
    Token: 10532,
  },
  {
    Symbol: "785MP32",
    Token: 10198,
  },
  {
    Symbol: "785PN32",
    Token: 10394,
  },
  {
    Symbol: "785PN42",
    Token: 11515,
  },
  {
    Symbol: "785RJ37",
    Token: 9943,
  },
  {
    Symbol: "785RJ39",
    Token: 9952,
  },
  {
    Symbol: "785SK32",
    Token: 11509,
  },
  {
    Symbol: "785UK30",
    Token: 22201,
  },
  {
    Symbol: "785UK32",
    Token: 11510,
  },
  {
    Symbol: "785WB42",
    Token: 14849,
  },
  {
    Symbol: "786AP33",
    Token: 11759,
  },
  {
    Symbol: "786AS32",
    Token: 9916,
  },
  {
    Symbol: "786HR32",
    Token: 10202,
  },
  {
    Symbol: "786JH34",
    Token: 11885,
  },
  {
    Symbol: "786MH30",
    Token: 9821,
  },
  {
    Symbol: "786MZ32",
    Token: 9922,
  },
  {
    Symbol: "787HP34",
    Token: 11886,
  },
  {
    Symbol: "787HP35",
    Token: 11869,
  },
  {
    Symbol: "787MZ36",
    Token: 11873,
  },
  {
    Symbol: "787RJ40",
    Token: 11701,
  },
  {
    Symbol: "787TN33",
    Token: 10338,
  },
  {
    Symbol: "788GA30",
    Token: 21047,
  },
  {
    Symbol: "788GS2030",
    Token: 7122,
  },
  {
    Symbol: "788MP33",
    Token: 11695,
  },
  {
    Symbol: "788NL32",
    Token: 9923,
  },
  {
    Symbol: "788RJ32",
    Token: 22065,
  },
  {
    Symbol: "789HP37",
    Token: 10551,
  },
  {
    Symbol: "789MH32",
    Token: 9822,
  },
  {
    Symbol: "789TS34",
    Token: 10334,
  },
  {
    Symbol: "789TS36",
    Token: 11696,
  },
  {
    Symbol: "789WB37",
    Token: 10553,
  },
  {
    Symbol: "789WB40",
    Token: 14844,
  },
  {
    Symbol: "78AP31",
    Token: 9773,
  },
  {
    Symbol: "78AP31A",
    Token: 9914,
  },
  {
    Symbol: "78GJ32",
    Token: 9777,
  },
  {
    Symbol: "78GJ32A",
    Token: 10367,
  },
  {
    Symbol: "78JK35",
    Token: 14834,
  },
  {
    Symbol: "78KL45",
    Token: 11770,
  },
  {
    Symbol: "78ML31",
    Token: 9774,
  },
  {
    Symbol: "78TN32",
    Token: 9776,
  },
  {
    Symbol: "78TN32A",
    Token: 10460,
  },
  {
    Symbol: "78TN42",
    Token: 11877,
  },
  {
    Symbol: "790RJ26",
    Token: 22061,
  },
  {
    Symbol: "791KL30",
    Token: 21904,
  },
  {
    Symbol: "791TS43",
    Token: 10269,
  },
  {
    Symbol: "791UP37",
    Token: 11697,
  },
  {
    Symbol: "792AP41",
    Token: 10337,
  },
  {
    Symbol: "792AP42",
    Token: 10218,
  },
  {
    Symbol: "792AP42A",
    Token: 10257,
  },
  {
    Symbol: "792TS45",
    Token: 10272,
  },
  {
    Symbol: "793AP33",
    Token: 10203,
  },
  {
    Symbol: "793KA31",
    Token: 20965,
  },
  {
    Symbol: "793RJ45",
    Token: 10645,
  },
  {
    Symbol: "793TN42",
    Token: 10644,
  },
  {
    Symbol: "793TS34",
    Token: 10204,
  },
  {
    Symbol: "793TS35",
    Token: 10207,
  },
  {
    Symbol: "793UP30",
    Token: 22084,
  },
  {
    Symbol: "793WB37",
    Token: 11698,
  },
  {
    Symbol: "794AP34",
    Token: 10206,
  },
  {
    Symbol: "794HR34",
    Token: 10205,
  },
  {
    Symbol: "794PN42",
    Token: 10333,
  },
  {
    Symbol: "794TN32",
    Token: 9869,
  },
  {
    Symbol: "794TS36",
    Token: 10212,
  },
  {
    Symbol: "795AP38",
    Token: 10214,
  },
  {
    Symbol: "795AP39",
    Token: 10215,
  },
  {
    Symbol: "795AP40",
    Token: 10216,
  },
  {
    Symbol: "795AP40A",
    Token: 10255,
  },
  {
    Symbol: "795GS2032",
    Token: 6835,
  },
  {
    Symbol: "795HR32",
    Token: 9870,
  },
  {
    Symbol: "795HR37",
    Token: 10640,
  },
  {
    Symbol: "795JK30",
    Token: 21046,
  },
  {
    Symbol: "795TS35",
    Token: 10382,
  },
  {
    Symbol: "795TS37",
    Token: 10642,
  },
  {
    Symbol: "795WB39",
    Token: 11700,
  },
  {
    Symbol: "796AP40",
    Token: 10643,
  },
  {
    Symbol: "796WB37",
    Token: 10213,
  },
  {
    Symbol: "797AP36",
    Token: 10639,
  },
  {
    Symbol: "797AP39",
    Token: 10336,
  },
  {
    Symbol: "797HR42",
    Token: 10479,
  },
  {
    Symbol: "797PN38",
    Token: 14836,
  },
  {
    Symbol: "797RJ42",
    Token: 10480,
  },
  {
    Symbol: "797WB42",
    Token: 10454,
  },
  {
    Symbol: "798AP31",
    Token: 20961,
  },
  {
    Symbol: "798RJ42",
    Token: 10381,
  },
  {
    Symbol: "799TN42",
    Token: 9834,
  },
  {
    Symbol: "799TS30",
    Token: 22205,
  },
  {
    Symbol: "799TS35",
    Token: 22204,
  },
  {
    Symbol: "799WB35",
    Token: 22175,
  },
  {
    Symbol: "79AP33",
    Token: 9785,
  },
  {
    Symbol: "79AP34",
    Token: 9797,
  },
  {
    Symbol: "79HR34",
    Token: 10332,
  },
  {
    Symbol: "79RJ42",
    Token: 9800,
  },
  {
    Symbol: "79TS44",
    Token: 10271,
  },
  {
    Symbol: "801WB41",
    Token: 10393,
  },
  {
    Symbol: "802AP38",
    Token: 10383,
  },
  {
    Symbol: "802MZ36",
    Token: 10374,
  },
  {
    Symbol: "802TS35",
    Token: 9824,
  },
  {
    Symbol: "802WB37",
    Token: 10384,
  },
  {
    Symbol: "803AP35",
    Token: 9826,
  },
  {
    Symbol: "803AP36",
    Token: 10355,
  },
  {
    Symbol: "804AP37",
    Token: 10471,
  },
  {
    Symbol: "804AP41",
    Token: 9871,
  },
  {
    Symbol: "804AP42",
    Token: 9872,
  },
  {
    Symbol: "804PN42",
    Token: 10268,
  },
  {
    Symbol: "805RJ37",
    Token: 10474,
  },
  {
    Symbol: "806JK37",
    Token: 10477,
  },
  {
    Symbol: "807AP36",
    Token: 9830,
  },
  {
    Symbol: "807WB38",
    Token: 10478,
  },
  {
    Symbol: "80NL30",
    Token: 21995,
  },
  {
    Symbol: "810JH32",
    Token: 22199,
  },
  {
    Symbol: "810KL32",
    Token: 21905,
  },
  {
    Symbol: "813GS2045",
    Token: 7124,
  },
  {
    Symbol: "815GS2026",
    Token: 7114,
  },
  {
    Symbol: "815JK30",
    Token: 22181,
  },
  {
    Symbol: "817GS2044",
    Token: 7115,
  },
  {
    Symbol: "824GS2027",
    Token: 6884,
  },
  {
    Symbol: "824GS2033",
    Token: 7106,
  },
  {
    Symbol: "826GS2027",
    Token: 6898,
  },
  {
    Symbol: "828GS2027",
    Token: 6921,
  },
  {
    Symbol: "828GS2032",
    Token: 6885,
  },
  {
    Symbol: "82GS2025",
    Token: 7024,
  },
  {
    Symbol: "831RJ27",
    Token: 22062,
  },
  {
    Symbol: "832GS2032",
    Token: 6899,
  },
  {
    Symbol: "833GS2026",
    Token: 7019,
  },
  {
    Symbol: "833GS2032",
    Token: 6922,
  },
  {
    Symbol: "833GS2036",
    Token: 6883,
  },
  {
    Symbol: "83GS2040",
    Token: 6981,
  },
  {
    Symbol: "83GS2042",
    Token: 7034,
  },
  {
    Symbol: "84GS2024",
    Token: 7097,
  },
  {
    Symbol: "86GS2028",
    Token: 7088,
  },
  {
    Symbol: "883GS2023",
    Token: 7042,
  },
  {
    Symbol: "883GS2041",
    Token: 7013,
  },
  {
    Symbol: "896KL35",
    Token: 21906,
  },
  {
    Symbol: "897GS2030",
    Token: 7011,
  },
  {
    Symbol: "8AR30",
    Token: 20963,
  },
  {
    Symbol: "8AS30",
    Token: 21048,
  },
  {
    Symbol: "8HR30",
    Token: 21031,
  },
  {
    Symbol: "8MN30",
    Token: 21923,
  },
  {
    Symbol: "915GS2024",
    Token: 7010,
  },
  {
    Symbol: "91D010623",
    Token: 14382,
  },
  {
    Symbol: "91D030823",
    Token: 15334,
  },
  {
    Symbol: "91D060723",
    Token: 14967,
  },
  {
    Symbol: "91D080623",
    Token: 14456,
  },
  {
    Symbol: "91D110523",
    Token: 14118,
  },
  {
    Symbol: "91D130723",
    Token: 15023,
  },
  {
    Symbol: "91D150623",
    Token: 14568,
  },
  {
    Symbol: "91D180523",
    Token: 14169,
  },
  {
    Symbol: "91D200723",
    Token: 15115,
  },
  {
    Symbol: "91D230623",
    Token: 14664,
  },
  {
    Symbol: "91D250523",
    Token: 14283,
  },
  {
    Symbol: "91D270723",
    Token: 15268,
  },
  {
    Symbol: "923GS2043",
    Token: 7087,
  },
  {
    Symbol: "92GS2030",
    Token: 7039,
  },
  {
    Symbol: "A2ZINFRA",
    Token: 20906,
  },
  {
    Symbol: "AAATECH",
    Token: 12533,
  },
  {
    Symbol: "AAKASH",
    Token: 235,
  },
  {
    Symbol: "AAREYDRUGS",
    Token: 5245,
  },
  {
    Symbol: "AARON",
    Token: 1030,
  },
  {
    Symbol: "AARTIDRUGS",
    Token: 4481,
  },
  {
    Symbol: "AARTIIND",
    Token: 7,
  },
  {
    Symbol: "AARTIPHARM",
    Token: 13868,
  },
  {
    Symbol: "AARTIPP",
    Token: 14256,
  },
  {
    Symbol: "AARTISURF",
    Token: 19233,
  },
  {
    Symbol: "AARVEEDEN",
    Token: 13771,
  },
  {
    Symbol: "AARVI",
    Token: 19073,
  },
  {
    Symbol: "AAVAS",
    Token: 5385,
  },
  {
    Symbol: "ABAN",
    Token: 10,
  },
  {
    Symbol: "ABB",
    Token: 13,
  },
  {
    Symbol: "ABBOTINDIA",
    Token: 17903,
  },
  {
    Symbol: "ABCAPITAL",
    Token: 21614,
  },
  {
    Symbol: "ABCOTS",
    Token: 7787,
  },
  {
    Symbol: "ABFRL",
    Token: 30108,
  },
  {
    Symbol: "ABFRL",
    Token: 11498,
  },
  {
    Symbol: "ABINFRA",
    Token: 11022,
  },
  {
    Symbol: "ABMINTLLTD",
    Token: 5551,
  },
  {
    Symbol: "ABNINT",
    Token: 8588,
  },
  {
    Symbol: "ABSLAMC",
    Token: 6018,
  },
  {
    Symbol: "ABSLBANETF",
    Token: 13987,
  },
  {
    Symbol: "ABSLLIQUID",
    Token: 14518,
  },
  {
    Symbol: "ABSLNN50ET",
    Token: 7339,
  },
  {
    Symbol: "ACC",
    Token: 22,
  },
  {
    Symbol: "ACCELYA",
    Token: 7053,
  },
  {
    Symbol: "ACCORD",
    Token: 21217,
  },
  {
    Symbol: "ACCURACY",
    Token: 1465,
  },
  {
    Symbol: "ACE",
    Token: 13587,
  },
  {
    Symbol: "ACEINTEG",
    Token: 11784,
  },
  {
    Symbol: "ACI",
    Token: 12024,
  },
  {
    Symbol: "ADANIENT",
    Token: 25,
  },
  {
    Symbol: "ADANIGREEN",
    Token: 3563,
  },
  {
    Symbol: "ADANIPORTS",
    Token: 15083,
  },
  {
    Symbol: "ADANIPOWER",
    Token: 17388,
  },
  {
    Symbol: "ADANITRANS",
    Token: 10217,
  },
  {
    Symbol: "ADFFOODS",
    Token: 19761,
  },
  {
    Symbol: "ADL",
    Token: 248,
  },
  {
    Symbol: "ADORWELD",
    Token: 34,
  },
  {
    Symbol: "ADROITINFO",
    Token: 4953,
  },
  {
    Symbol: "ADSL",
    Token: 14813,
  },
  {
    Symbol: "ADVANIHOTR",
    Token: 14745,
  },
  {
    Symbol: "ADVENZYMES",
    Token: 18039,
  },
  {
    Symbol: "AEGISCHEM",
    Token: 40,
  },
  {
    Symbol: "AETHER",
    Token: 9810,
  },
  {
    Symbol: "AFFLE",
    Token: 11343,
  },
  {
    Symbol: "AGARIND",
    Token: 3389,
  },
  {
    Symbol: "AGARWALFT",
    Token: 14263,
  },
  {
    Symbol: "AGI",
    Token: 1412,
  },
  {
    Symbol: "AGNI",
    Token: 10491,
  },
  {
    Symbol: "AGRITECH",
    Token: 11072,
  },
  {
    Symbol: "AGROPHOS",
    Token: 9046,
  },
  {
    Symbol: "AGSTRA",
    Token: 7927,
  },
  {
    Symbol: "AGUL",
    Token: 15147,
  },
  {
    Symbol: "AHIMSA",
    Token: 10769,
  },
  {
    Symbol: "AHL",
    Token: 13288,
  },
  {
    Symbol: "AHLADA",
    Token: 2004,
  },
  {
    Symbol: "AHLEAST",
    Token: 19438,
  },
  {
    Symbol: "AHLUCONT",
    Token: 17833,
  },
  {
    Symbol: "AIAENG",
    Token: 13086,
  },
  {
    Symbol: "AILIMITED",
    Token: 4626,
  },
  {
    Symbol: "AIRAN",
    Token: 9897,
  },
  {
    Symbol: "AIROLAM",
    Token: 6068,
  },
  {
    Symbol: "AIRTELPP",
    Token: 6435,
  },
  {
    Symbol: "AISL",
    Token: 482,
  },
  {
    Symbol: "AJANTPHARM",
    Token: 8124,
  },
  {
    Symbol: "AJMERA",
    Token: 17307,
  },
  {
    Symbol: "AJOONI",
    Token: 3403,
  },
  {
    Symbol: "AKASH",
    Token: 13510,
  },
  {
    Symbol: "AKG",
    Token: 2176,
  },
  {
    Symbol: "AKI",
    Token: 14890,
  },
  {
    Symbol: "AKSHAR",
    Token: 9560,
  },
  {
    Symbol: "AKSHARCHEM",
    Token: 20178,
  },
  {
    Symbol: "AKSHOPTFBR",
    Token: 8591,
  },
  {
    Symbol: "AKZOINDIA",
    Token: 1467,
  },
  {
    Symbol: "ALANKIT",
    Token: 9921,
  },
  {
    Symbol: "ALBERTDAVD",
    Token: 17256,
  },
  {
    Symbol: "ALEMBICLTD",
    Token: 79,
  },
  {
    Symbol: "ALICON",
    Token: 13656,
  },
  {
    Symbol: "ALKALI",
    Token: 16959,
  },
  {
    Symbol: "ALKEM",
    Token: 11703,
  },
  {
    Symbol: "ALKYLAMINE",
    Token: 4487,
  },
  {
    Symbol: "ALLCARGO",
    Token: 13501,
  },
  {
    Symbol: "ALLETEC",
    Token: 13203,
  },
  {
    Symbol: "ALLSEC",
    Token: 11798,
  },
  {
    Symbol: "ALMONDZ",
    Token: 16719,
  },
  {
    Symbol: "ALOKINDS",
    Token: 17675,
  },
  {
    Symbol: "ALPA",
    Token: 14848,
  },
  {
    Symbol: "ALPHAGEO",
    Token: 14597,
  },
  {
    Symbol: "AMARAJABAT",
    Token: 100,
  },
  {
    Symbol: "AMBANIORG",
    Token: 4083,
  },
  {
    Symbol: "AMBER",
    Token: 1185,
  },
  {
    Symbol: "AMBICAAGAR",
    Token: 11496,
  },
  {
    Symbol: "AMBIKCO",
    Token: 15234,
  },
  {
    Symbol: "AMBUJACEM",
    Token: 1270,
  },
  {
    Symbol: "AMDIND",
    Token: 14398,
  },
  {
    Symbol: "AMEYA",
    Token: 10898,
  },
  {
    Symbol: "AMIABLE",
    Token: 11939,
  },
  {
    Symbol: "AMIORG",
    Token: 5578,
  },
  {
    Symbol: "AMJLAND",
    Token: 2598,
  },
  {
    Symbol: "AMRUTANJAN",
    Token: 17547,
  },
  {
    Symbol: "ANANDRATHI",
    Token: 7145,
  },
  {
    Symbol: "ANANTRAJ",
    Token: 13620,
  },
  {
    Symbol: "ANDHRAPAP",
    Token: 166,
  },
  {
    Symbol: "ANDHRSUGAR",
    Token: 136,
  },
  {
    Symbol: "ANDREWYU",
    Token: 5206,
  },
  {
    Symbol: "ANGELONE",
    Token: 324,
  },
  {
    Symbol: "ANIKINDS",
    Token: 16657,
  },
  {
    Symbol: "ANKITMETAL",
    Token: 29430,
  },
  {
    Symbol: "ANLON",
    Token: 13657,
  },
  {
    Symbol: "ANMOL",
    Token: 3727,
  },
  {
    Symbol: "ANNAPURNA",
    Token: 11198,
  },
  {
    Symbol: "ANSALAPI",
    Token: 8760,
  },
  {
    Symbol: "ANTGRAPHIC",
    Token: 8285,
  },
  {
    Symbol: "ANUP",
    Token: 9014,
  },
  {
    Symbol: "ANURAS",
    Token: 2829,
  },
  {
    Symbol: "ANZEN",
    Token: 11945,
  },
  {
    Symbol: "APARINDS",
    Token: 11491,
  },
  {
    Symbol: "APCL",
    Token: 20453,
  },
  {
    Symbol: "APCOTEXIND",
    Token: 154,
  },
  {
    Symbol: "APEX",
    Token: 21623,
  },
  {
    Symbol: "APLAPOLLO",
    Token: 25780,
  },
  {
    Symbol: "APLLTD",
    Token: 25328,
  },
  {
    Symbol: "APOLLO",
    Token: 1134,
  },
  {
    Symbol: "APOLLOHOSP",
    Token: 157,
  },
  {
    Symbol: "APOLLOPIPE",
    Token: 14361,
  },
  {
    Symbol: "APOLLOTYRE",
    Token: 163,
  },
  {
    Symbol: "APOLSINHOT",
    Token: 6302,
  },
  {
    Symbol: "APTECHT",
    Token: 10755,
  },
  {
    Symbol: "APTUS",
    Token: 5435,
  },
  {
    Symbol: "ARCHIDPLY",
    Token: 16795,
  },
  {
    Symbol: "ARCHIES",
    Token: 5688,
  },
  {
    Symbol: "ARENTERP",
    Token: 181,
  },
  {
    Symbol: "ARHAM",
    Token: 13092,
  },
  {
    Symbol: "ARIES",
    Token: 15204,
  },
  {
    Symbol: "ARIHANTACA",
    Token: 13340,
  },
  {
    Symbol: "ARIHANTCAP",
    Token: 3813,
  },
  {
    Symbol: "ARIHANTSUP",
    Token: 20159,
  },
  {
    Symbol: "ARISTO",
    Token: 13926,
  },
  {
    Symbol: "ARMANFIN",
    Token: 17263,
  },
  {
    Symbol: "AROGRANITE",
    Token: 14557,
  },
  {
    Symbol: "ARROWGREEN",
    Token: 9260,
  },
  {
    Symbol: "ARSHIYA",
    Token: 17821,
  },
  {
    Symbol: "ARTEMISMED",
    Token: 16913,
  },
  {
    Symbol: "ARTNIRMAN",
    Token: 6156,
  },
  {
    Symbol: "ARVEE",
    Token: 2814,
  },
  {
    Symbol: "ARVIND",
    Token: 193,
  },
  {
    Symbol: "ARVINDFASN",
    Token: 9111,
  },
  {
    Symbol: "ARVSMART",
    Token: 10457,
  },
  {
    Symbol: "ASAHIINDIA",
    Token: 5378,
  },
  {
    Symbol: "ASAHISONG",
    Token: 25088,
  },
  {
    Symbol: "ASAL",
    Token: 10634,
  },
  {
    Symbol: "ASALCBR",
    Token: 17598,
  },
  {
    Symbol: "ASCOM",
    Token: 15001,
  },
  {
    Symbol: "ASHAPURMIN",
    Token: 203,
  },
  {
    Symbol: "ASHIANA",
    Token: 24403,
  },
  {
    Symbol: "ASHIMASYN",
    Token: 206,
  },
  {
    Symbol: "ASHOKA",
    Token: 20182,
  },
  {
    Symbol: "ASHOKLEY",
    Token: 212,
  },
  {
    Symbol: "ASIANENE",
    Token: 7033,
  },
  {
    Symbol: "ASIANHOTNR",
    Token: 18425,
  },
  {
    Symbol: "ASIANPAINT",
    Token: 236,
  },
  {
    Symbol: "ASIANTILES",
    Token: 14889,
  },
  {
    Symbol: "ASLIND",
    Token: 20502,
  },
  {
    Symbol: "ASMS",
    Token: 14867,
  },
  {
    Symbol: "ASPINWALL",
    Token: 17270,
  },
  {
    Symbol: "ASTEC",
    Token: 17728,
  },
  {
    Symbol: "ASTERDM",
    Token: 1508,
  },
  {
    Symbol: "ASTRAL",
    Token: 14418,
  },
  {
    Symbol: "ASTRAMICRO",
    Token: 11618,
  },
  {
    Symbol: "ASTRAZEN",
    Token: 5610,
  },
  {
    Symbol: "ASTRON",
    Token: 874,
  },
  {
    Symbol: "ATALREAL",
    Token: 566,
  },
  {
    Symbol: "ATFL",
    Token: 1663,
  },
  {
    Symbol: "ATGL",
    Token: 6066,
  },
  {
    Symbol: "ATLANTA",
    Token: 13585,
  },
  {
    Symbol: "ATUL",
    Token: 263,
  },
  {
    Symbol: "ATULAUTO",
    Token: 30023,
  },
  {
    Symbol: "AUBANK",
    Token: 21238,
  },
  {
    Symbol: "AURDIS",
    Token: 18762,
  },
  {
    Symbol: "AURIONPRO",
    Token: 12022,
  },
  {
    Symbol: "AUROPHARMA",
    Token: 275,
  },
  {
    Symbol: "AURUM",
    Token: 10310,
  },
  {
    Symbol: "AURUMPP",
    Token: 9643,
  },
  {
    Symbol: "AUSOMENT",
    Token: 4037,
  },
  {
    Symbol: "AUTOAXLES",
    Token: 278,
  },
  {
    Symbol: "AUTOBEES",
    Token: 7880,
  },
  {
    Symbol: "AUTOIND",
    Token: 14106,
  },
  {
    Symbol: "AVADHSUGAR",
    Token: 21406,
  },
  {
    Symbol: "AVALON",
    Token: 15058,
  },
  {
    Symbol: "AVANTIFEED",
    Token: 7936,
  },
  {
    Symbol: "AVG",
    Token: 2621,
  },
  {
    Symbol: "AVONMORE",
    Token: 13557,
  },
  {
    Symbol: "AVROIND",
    Token: 8827,
  },
  {
    Symbol: "AVSL",
    Token: 18692,
  },
  {
    Symbol: "AVTNPL",
    Token: 14008,
  },
  {
    Symbol: "AWHCL",
    Token: 1797,
  },
  {
    Symbol: "AWL",
    Token: 8110,
  },
  {
    Symbol: "AXISBANK",
    Token: 5900,
  },
  {
    Symbol: "AXISBNKETF",
    Token: 1044,
  },
  {
    Symbol: "AXISBPSETF",
    Token: 3530,
  },
  {
    Symbol: "AXISCADES",
    Token: 9436,
  },
  {
    Symbol: "AXISCETF",
    Token: 5732,
  },
  {
    Symbol: "AXISGOLD",
    Token: 20532,
  },
  {
    Symbol: "AXISHCETF",
    Token: 3608,
  },
  {
    Symbol: "AXISILVER",
    Token: 11193,
  },
  {
    Symbol: "AXISNIFTY",
    Token: 21252,
  },
  {
    Symbol: "AXISTECETF",
    Token: 3010,
  },
  {
    Symbol: "AXITA",
    Token: 9902,
  },
  {
    Symbol: "AXSENSEX",
    Token: 14742,
  },
  {
    Symbol: "AYMSYNTEX",
    Token: 10285,
  },
  {
    Symbol: "BAFNAPH",
    Token: 17735,
  },
  {
    Symbol: "BAGFILMS",
    Token: 11226,
  },
  {
    Symbol: "BAHETI",
    Token: 12989,
  },
  {
    Symbol: "BAIDFIN",
    Token: 13794,
  },
  {
    Symbol: "BAJAJ-AUTO",
    Token: 16669,
  },
  {
    Symbol: "BAJAJCON",
    Token: 19531,
  },
  {
    Symbol: "BAJAJELEC",
    Token: 15034,
  },
  {
    Symbol: "BAJAJFINSV",
    Token: 16675,
  },
  {
    Symbol: "BAJAJHCARE",
    Token: 6863,
  },
  {
    Symbol: "BAJAJHIND",
    Token: 308,
  },
  {
    Symbol: "BAJAJHLDNG",
    Token: 305,
  },
  {
    Symbol: "BAJFINANCE",
    Token: 317,
  },
  {
    Symbol: "BALAJITELE",
    Token: 9158,
  },
  {
    Symbol: "BALAMINES",
    Token: 14501,
  },
  {
    Symbol: "BALAXI",
    Token: 11309,
  },
  {
    Symbol: "BALKRISHNA",
    Token: 10181,
  },
  {
    Symbol: "BALKRISIND",
    Token: 335,
  },
  {
    Symbol: "BALLARPUR",
    Token: 1299,
  },
  {
    Symbol: "BALMLAWRIE",
    Token: 338,
  },
  {
    Symbol: "BALPHARMA",
    Token: 13441,
  },
  {
    Symbol: "BALRAMCHIN",
    Token: 341,
  },
  {
    Symbol: "BANARBEADS",
    Token: 347,
  },
  {
    Symbol: "BANARISUG",
    Token: 350,
  },
  {
    Symbol: "BANCOINDIA",
    Token: 13880,
  },
  {
    Symbol: "BANDHANBNK",
    Token: 2263,
  },
  {
    Symbol: "BANG",
    Token: 15303,
  },
  {
    Symbol: "BANKA",
    Token: 822,
  },
  {
    Symbol: "BANKBARODA",
    Token: 4668,
  },
  {
    Symbol: "BANKBEES",
    Token: 11439,
  },
  {
    Symbol: "BANKINDIA",
    Token: 4745,
  },
  {
    Symbol: "BANSWRAS",
    Token: 14511,
  },
  {
    Symbol: "BARBEQUE",
    Token: 3127,
  },
  {
    Symbol: "BASF",
    Token: 368,
  },
  {
    Symbol: "BASML",
    Token: 12034,
  },
  {
    Symbol: "BATAINDIA",
    Token: 371,
  },
  {
    Symbol: "BAYERCROP",
    Token: 17927,
  },
  {
    Symbol: "BBETF0432",
    Token: 7196,
  },
  {
    Symbol: "BBL",
    Token: 13761,
  },
  {
    Symbol: "BBOX",
    Token: 3435,
  },
  {
    Symbol: "BBTC",
    Token: 380,
  },
  {
    Symbol: "BBTCL",
    Token: 12153,
  },
  {
    Symbol: "BCG",
    Token: 8833,
  },
  {
    Symbol: "BCLIND",
    Token: 2513,
  },
  {
    Symbol: "BCONCEPTS",
    Token: 7780,
  },
  {
    Symbol: "BDL",
    Token: 2144,
  },
  {
    Symbol: "BDR",
    Token: 4294,
  },
  {
    Symbol: "BEARDSELL",
    Token: 17933,
  },
  {
    Symbol: "BECTORFOOD",
    Token: 1628,
  },
  {
    Symbol: "BEDMUTHA",
    Token: 20196,
  },
  {
    Symbol: "BEL",
    Token: 383,
  },
  {
    Symbol: "BEML",
    Token: 395,
  },
  {
    Symbol: "BEPL",
    Token: 419,
  },
  {
    Symbol: "BERGEPAINT",
    Token: 404,
  },
  {
    Symbol: "BESTAGRO",
    Token: 2306,
  },
  {
    Symbol: "BETA",
    Token: 81,
  },
  {
    Symbol: "BEWLTD",
    Token: 5662,
  },
  {
    Symbol: "BFINVEST",
    Token: 21113,
  },
  {
    Symbol: "BFUTILITIE",
    Token: 14567,
  },
  {
    Symbol: "BGRENERGY",
    Token: 15189,
  },
  {
    Symbol: "BHAGCHEM",
    Token: 6164,
  },
  {
    Symbol: "BHAGERIA",
    Token: 13400,
  },
  {
    Symbol: "BHAGYANGR",
    Token: 20776,
  },
  {
    Symbol: "BHALCHANDR",
    Token: 9985,
  },
  {
    Symbol: "BHANDARI",
    Token: 19556,
  },
  {
    Symbol: "BHARATFORG",
    Token: 422,
  },
  {
    Symbol: "BHARATGEAR",
    Token: 426,
  },
  {
    Symbol: "BHARATRAS",
    Token: 3834,
  },
  {
    Symbol: "BHARATWIRE",
    Token: 16123,
  },
  {
    Symbol: "BHARTIARTL",
    Token: 10604,
  },
  {
    Symbol: "BHEL",
    Token: 438,
  },
  {
    Symbol: "BIGBLOC",
    Token: 18431,
  },
  {
    Symbol: "BIKAJI",
    Token: 11966,
  },
  {
    Symbol: "BIL",
    Token: 7848,
  },
  {
    Symbol: "BINANIIND",
    Token: 13625,
  },
  {
    Symbol: "BINDALAGRO",
    Token: 471,
  },
  {
    Symbol: "BIOCON",
    Token: 11373,
  },
  {
    Symbol: "BIOFILCHEM",
    Token: 4136,
  },
  {
    Symbol: "BIRET",
    Token: 2203,
  },
  {
    Symbol: "BIRLACABLE",
    Token: 477,
  },
  {
    Symbol: "BIRLACORPN",
    Token: 480,
  },
  {
    Symbol: "BIRLAMONEY",
    Token: 15239,
  },
  {
    Symbol: "BIRLATYRE",
    Token: 17588,
  },
  {
    Symbol: "BLAL",
    Token: 15067,
  },
  {
    Symbol: "BLBLIMITED",
    Token: 8132,
  },
  {
    Symbol: "BLISSGVS",
    Token: 19265,
  },
  {
    Symbol: "BLKASHYAP",
    Token: 13290,
  },
  {
    Symbol: "BLS",
    Token: 17279,
  },
  {
    Symbol: "BLUECOAST",
    Token: 8552,
  },
  {
    Symbol: "BLUEDART",
    Token: 495,
  },
  {
    Symbol: "BLUESTARCO",
    Token: 8311,
  },
  {
    Symbol: "BMETRICS",
    Token: 6052,
  },
  {
    Symbol: "BODALCHEM",
    Token: 25017,
  },
  {
    Symbol: "BOHRAIND",
    Token: 11640,
  },
  {
    Symbol: "BOMDYEING",
    Token: 513,
  },
  {
    Symbol: "BOROLTD",
    Token: 19401,
  },
  {
    Symbol: "BORORENEW",
    Token: 3149,
  },
  {
    Symbol: "BOSCHLTD",
    Token: 2181,
  },
  {
    Symbol: "BPCL",
    Token: 526,
  },
  {
    Symbol: "BPL",
    Token: 530,
  },
  {
    Symbol: "BRIGADE",
    Token: 15184,
  },
  {
    Symbol: "BRIGHT",
    Token: 3901,
  },
  {
    Symbol: "BRITANNIA",
    Token: 547,
  },
  {
    Symbol: "BRITANNIA",
    Token: 5066,
  },
  {
    Symbol: "BRNL",
    Token: 21683,
  },
  {
    Symbol: "BROOKS",
    Token: 25136,
  },
  {
    Symbol: "BSE",
    Token: 19585,
  },
  {
    Symbol: "BSHSL",
    Token: 812,
  },
  {
    Symbol: "BSL",
    Token: 559,
  },
  {
    Symbol: "BSLGOLDETF",
    Token: 23804,
  },
  {
    Symbol: "BSLNIFTY",
    Token: 24781,
  },
  {
    Symbol: "BSLSENETFG",
    Token: 5957,
  },
  {
    Symbol: "BSOFT",
    Token: 6994,
  },
  {
    Symbol: "BTML",
    Token: 14150,
  },
  {
    Symbol: "BURNPUR",
    Token: 15194,
  },
  {
    Symbol: "BUTTERFLY",
    Token: 2716,
  },
  {
    Symbol: "BVCL",
    Token: 15073,
  },
  {
    Symbol: "BYKE",
    Token: 7919,
  },
  {
    Symbol: "CADSYS",
    Token: 21823,
  },
  {
    Symbol: "CALSOFT",
    Token: 8400,
  },
  {
    Symbol: "CAMLINFINE",
    Token: 6216,
  },
  {
    Symbol: "CAMPUS",
    Token: 9362,
  },
  {
    Symbol: "CAMS",
    Token: 342,
  },
  {
    Symbol: "CANBK",
    Token: 10794,
  },
  {
    Symbol: "CANFINHOME",
    Token: 583,
  },
  {
    Symbol: "CANTABIL",
    Token: 20160,
  },
  {
    Symbol: "CAPACITE",
    Token: 21749,
  },
  {
    Symbol: "CAPLIPOINT",
    Token: 3906,
  },
  {
    Symbol: "CAPTRUST",
    Token: 19447,
  },
  {
    Symbol: "CARBORUNIV",
    Token: 595,
  },
  {
    Symbol: "CAREERP",
    Token: 20086,
  },
  {
    Symbol: "CARERATING",
    Token: 29113,
  },
  {
    Symbol: "CARTRADE",
    Token: 5407,
  },
  {
    Symbol: "CARYSIL",
    Token: 1879,
  },
  {
    Symbol: "CASTROLIND",
    Token: 1250,
  },
  {
    Symbol: "CCCL",
    Token: 14996,
  },
  {
    Symbol: "CCHHL",
    Token: 6403,
  },
  {
    Symbol: "CCL",
    Token: 11452,
  },
  {
    Symbol: "CDSL",
    Token: 21174,
  },
  {
    Symbol: "CEATLTD",
    Token: 15254,
  },
  {
    Symbol: "CELEBRITY",
    Token: 13162,
  },
  {
    Symbol: "CENTENKA",
    Token: 619,
  },
  {
    Symbol: "CENTEXT",
    Token: 11511,
  },
  {
    Symbol: "CENTRALBK",
    Token: 14894,
  },
  {
    Symbol: "CENTRUM",
    Token: 2454,
  },
  {
    Symbol: "CENTUM",
    Token: 14982,
  },
  {
    Symbol: "CENTURYPLY",
    Token: 13305,
  },
  {
    Symbol: "CENTURYTEX",
    Token: 625,
  },
  {
    Symbol: "CERA",
    Token: 15039,
  },
  {
    Symbol: "CEREBRAINT",
    Token: 30012,
  },
  {
    Symbol: "CESC",
    Token: 628,
  },
  {
    Symbol: "CGCL",
    Token: 20329,
  },
  {
    Symbol: "CGPOWER",
    Token: 760,
  },
  {
    Symbol: "CHALET",
    Token: 8546,
  },
  {
    Symbol: "CHAMBLFERT",
    Token: 637,
  },
  {
    Symbol: "CHEMBOND",
    Token: 14618,
  },
  {
    Symbol: "CHEMCON",
    Token: 270,
  },
  {
    Symbol: "CHEMFAB",
    Token: 2799,
  },
  {
    Symbol: "CHEMPLASTS",
    Token: 5449,
  },
  {
    Symbol: "CHENNPETRO",
    Token: 2049,
  },
  {
    Symbol: "CHEVIOT",
    Token: 9879,
  },
  {
    Symbol: "CHOICEIN",
    Token: 8866,
  },
  {
    Symbol: "CHOLAFIN",
    Token: 685,
  },
  {
    Symbol: "CHOLAFIN",
    Token: 15364,
  },
  {
    Symbol: "CHOLAFIN",
    Token: 15368,
  },
  {
    Symbol: "CHOLAFIN",
    Token: 15370,
  },
  {
    Symbol: "CHOLAFIN",
    Token: 15372,
  },
  {
    Symbol: "CHOLAFIN",
    Token: 15374,
  },
  {
    Symbol: "CHOLAFIN",
    Token: 15376,
  },
  {
    Symbol: "CHOLAHLDNG",
    Token: 21740,
  },
  {
    Symbol: "CIGNITITEC",
    Token: 5142,
  },
  {
    Symbol: "CINELINE",
    Token: 27161,
  },
  {
    Symbol: "CINEVISTA",
    Token: 8024,
  },
  {
    Symbol: "CIPLA",
    Token: 694,
  },
  {
    Symbol: "CLEAN",
    Token: 5049,
  },
  {
    Symbol: "CLEDUCATE",
    Token: 20223,
  },
  {
    Symbol: "CLOUD",
    Token: 11179,
  },
  {
    Symbol: "CLSEL",
    Token: 3482,
  },
  {
    Symbol: "CMICABLES",
    Token: 19149,
  },
  {
    Symbol: "CMMIPL",
    Token: 99,
  },
  {
    Symbol: "CMNL",
    Token: 13731,
  },
  {
    Symbol: "CMRSL",
    Token: 11447,
  },
  {
    Symbol: "CMSINFO",
    Token: 7603,
  },
  {
    Symbol: "COALINDIA",
    Token: 20374,
  },
  {
    Symbol: "COASTCORP",
    Token: 6006,
  },
  {
    Symbol: "COASTPP1",
    Token: 14476,
  },
  {
    Symbol: "COCHINSHIP",
    Token: 21508,
  },
  {
    Symbol: "COFFEEDAY",
    Token: 11165,
  },
  {
    Symbol: "COFORGE",
    Token: 11543,
  },
  {
    Symbol: "COLPAL",
    Token: 15141,
  },
  {
    Symbol: "COMPINFO",
    Token: 17632,
  },
  {
    Symbol: "COMPUSOFT",
    Token: 31138,
  },
  {
    Symbol: "CONCOR",
    Token: 4749,
  },
  {
    Symbol: "CONFIPET",
    Token: 10238,
  },
  {
    Symbol: "CONSOFINVT",
    Token: 11731,
  },
  {
    Symbol: "CONSUMBEES",
    Token: 2435,
  },
  {
    Symbol: "CONTI",
    Token: 2531,
  },
  {
    Symbol: "CONTROLPR",
    Token: 17477,
  },
  {
    Symbol: "COOLCAPS",
    Token: 8560,
  },
  {
    Symbol: "CORALFINAC",
    Token: 4007,
  },
  {
    Symbol: "CORDSCABLE",
    Token: 15271,
  },
  {
    Symbol: "COROMANDEL",
    Token: 739,
  },
  {
    Symbol: "COSMOFIRST",
    Token: 742,
  },
  {
    Symbol: "COUNCODOS",
    Token: 16986,
  },
  {
    Symbol: "CPSEETF",
    Token: 2328,
  },
  {
    Symbol: "CRAFTSMAN",
    Token: 2854,
  },
  {
    Symbol: "CREATIVE",
    Token: 11155,
  },
  {
    Symbol: "CREDITACC",
    Token: 4421,
  },
  {
    Symbol: "CREDITACC",
    Token: 12427,
  },
  {
    Symbol: "CREDITACC",
    Token: 12434,
  },
  {
    Symbol: "CREDITACC",
    Token: 12444,
  },
  {
    Symbol: "CREDITACC",
    Token: 12456,
  },
  {
    Symbol: "CREDITACC",
    Token: 12465,
  },
  {
    Symbol: "CREDITACC",
    Token: 12471,
  },
  {
    Symbol: "CREST",
    Token: 13900,
  },
  {
    Symbol: "CRISIL",
    Token: 757,
  },
  {
    Symbol: "CROMPTON",
    Token: 17094,
  },
  {
    Symbol: "CROWN",
    Token: 8083,
  },
  {
    Symbol: "CSBBANK",
    Token: 14966,
  },
  {
    Symbol: "CSLFINANCE",
    Token: 10350,
  },
  {
    Symbol: "CTE",
    Token: 14218,
  },
  {
    Symbol: "CUB",
    Token: 5701,
  },
  {
    Symbol: "CUBEINVIT",
    Token: 15078,
  },
  {
    Symbol: "CUBEXTUB",
    Token: 4064,
  },
  {
    Symbol: "CUMMINSIND",
    Token: 1901,
  },
  {
    Symbol: "CUPID",
    Token: 18520,
  },
  {
    Symbol: "CYBERMEDIA",
    Token: 11842,
  },
  {
    Symbol: "CYBERTECH",
    Token: 6051,
  },
  {
    Symbol: "CYIENT",
    Token: 5748,
  },
  {
    Symbol: "DAAWAT",
    Token: 13816,
  },
  {
    Symbol: "DABUR",
    Token: 772,
  },
  {
    Symbol: "DALBHARAT",
    Token: 8075,
  },
  {
    Symbol: "DALMIASUG",
    Token: 781,
  },
  {
    Symbol: "DAMODARIND",
    Token: 17541,
  },
  {
    Symbol: "DANGEE",
    Token: 1110,
  },
  {
    Symbol: "DATAMATICS",
    Token: 11423,
  },
  {
    Symbol: "DATAPATTNS",
    Token: 7358,
  },
  {
    Symbol: "DBCORP",
    Token: 17881,
  },
  {
    Symbol: "DBL",
    Token: 18086,
  },
  {
    Symbol: "DBOL",
    Token: 10893,
  },
  {
    Symbol: "DBREALTY",
    Token: 18124,
  },
  {
    Symbol: "DBSTOCKBRO",
    Token: 31107,
  },
  {
    Symbol: "DCAL",
    Token: 21704,
  },
  {
    Symbol: "DCBBANK",
    Token: 13725,
  },
  {
    Symbol: "DCI",
    Token: 11566,
  },
  {
    Symbol: "DCM",
    Token: 805,
  },
  {
    Symbol: "DCMFINSERV",
    Token: 8704,
  },
  {
    Symbol: "DCMNVL",
    Token: 11039,
  },
  {
    Symbol: "DCMSHRIRAM",
    Token: 811,
  },
  {
    Symbol: "DCMSRIND",
    Token: 7325,
  },
  {
    Symbol: "DCW",
    Token: 817,
  },
  {
    Symbol: "DCXINDIA",
    Token: 11895,
  },
  {
    Symbol: "DECCANCE",
    Token: 14838,
  },
  {
    Symbol: "DEEPAKFERT",
    Token: 827,
  },
  {
    Symbol: "DEEPAKNTR",
    Token: 19943,
  },
  {
    Symbol: "DEEPENR",
    Token: 18244,
  },
  {
    Symbol: "DEEPINDS",
    Token: 3292,
  },
  {
    Symbol: "DELHIVERY",
    Token: 9599,
  },
  {
    Symbol: "DELPHIFX",
    Token: 24391,
  },
  {
    Symbol: "DELTACORP",
    Token: 15044,
  },
  {
    Symbol: "DELTAMAGNT",
    Token: 1214,
  },
  {
    Symbol: "DEN",
    Token: 17722,
  },
  {
    Symbol: "DENORA",
    Token: 4279,
  },
  {
    Symbol: "DESTINY",
    Token: 6087,
  },
  {
    Symbol: "DEVIT",
    Token: 8146,
  },
  {
    Symbol: "DEVYANI",
    Token: 5373,
  },
  {
    Symbol: "DGCONTENT",
    Token: 10346,
  },
  {
    Symbol: "DHAMPURSUG",
    Token: 857,
  },
  {
    Symbol: "DHANBANK",
    Token: 11359,
  },
  {
    Symbol: "DHANI",
    Token: 15384,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9157,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9161,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9165,
  },
  {
    Symbol: "DHANILOANS",
    Token: 10628,
  },
  {
    Symbol: "DHANILOANS",
    Token: 10630,
  },
  {
    Symbol: "DHANILOANS",
    Token: 10659,
  },
  {
    Symbol: "DHANILOANS",
    Token: 13017,
  },
  {
    Symbol: "DHANILOANS",
    Token: 13021,
  },
  {
    Symbol: "DHANILOANS",
    Token: 13023,
  },
  {
    Symbol: "DHANILOANS",
    Token: 8029,
  },
  {
    Symbol: "DHANILOANS",
    Token: 8049,
  },
  {
    Symbol: "DHANILOANS",
    Token: 8055,
  },
  {
    Symbol: "DHANILOANS",
    Token: 8059,
  },
  {
    Symbol: "DHANILOANS",
    Token: 8062,
  },
  {
    Symbol: "DHANILOANS",
    Token: 8067,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9491,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9496,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9500,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9518,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9520,
  },
  {
    Symbol: "DHANILOANS",
    Token: 9528,
  },
  {
    Symbol: "DHANUKA",
    Token: 24409,
  },
  {
    Symbol: "DHARMAJ",
    Token: 13001,
  },
  {
    Symbol: "DHARSUGAR",
    Token: 11617,
  },
  {
    Symbol: "DHRUV",
    Token: 6858,
  },
  {
    Symbol: "DHUNINV",
    Token: 22233,
  },
  {
    Symbol: "DIAMONDYD",
    Token: 21840,
  },
  {
    Symbol: "DICIND",
    Token: 703,
  },
  {
    Symbol: "DIGISPICE",
    Token: 16683,
  },
  {
    Symbol: "DIGJAMLMTD",
    Token: 6136,
  },
  {
    Symbol: "DIL",
    Token: 8657,
  },
  {
    Symbol: "DISHTV",
    Token: 14537,
  },
  {
    Symbol: "DIVGIITTS",
    Token: 14479,
  },
  {
    Symbol: "DIVISLAB",
    Token: 10940,
  },
  {
    Symbol: "DIVOPPBEES",
    Token: 2636,
  },
  {
    Symbol: "DIXON",
    Token: 21690,
  },
  {
    Symbol: "DJML",
    Token: 12749,
  },
  {
    Symbol: "DKEGL",
    Token: 6249,
  },
  {
    Symbol: "DLF",
    Token: 14732,
  },
  {
    Symbol: "DLINKINDIA",
    Token: 17851,
  },
  {
    Symbol: "DMART",
    Token: 19913,
  },
  {
    Symbol: "DMCC",
    Token: 6973,
  },
  {
    Symbol: "DNAMEDIA",
    Token: 641,
  },
  {
    Symbol: "DODLA",
    Token: 4822,
  },
  {
    Symbol: "DOLATALGO",
    Token: 12124,
  },
  {
    Symbol: "DOLLAR",
    Token: 20560,
  },
  {
    Symbol: "DOLLEX",
    Token: 13323,
  },
  {
    Symbol: "DONEAR",
    Token: 13839,
  },
  {
    Symbol: "DPABHUSHAN",
    Token: 936,
  },
  {
    Symbol: "DPSCLTD",
    Token: 15419,
  },
  {
    Symbol: "DPWIRES",
    Token: 16900,
  },
  {
    Symbol: "DRCSYSTEMS",
    Token: 2645,
  },
  {
    Symbol: "DREAMFOLKS",
    Token: 10859,
  },
  {
    Symbol: "DREDGECORP",
    Token: 11271,
  },
  {
    Symbol: "DRL",
    Token: 18769,
  },
  {
    Symbol: "DRREDDY",
    Token: 881,
  },
  {
    Symbol: "DRSDILIP",
    Token: 6686,
  },
  {
    Symbol: "DSPBANKETF",
    Token: 13644,
  },
  {
    Symbol: "DSPGOLDETF",
    Token: 15356,
  },
  {
    Symbol: "DSPN50ETF",
    Token: 7451,
  },
  {
    Symbol: "DSPNEWETF",
    Token: 6606,
  },
  {
    Symbol: "DSPQ50ETF",
    Token: 7456,
  },
  {
    Symbol: "DSPSILVETF",
    Token: 10761,
  },
  {
    Symbol: "DSSL",
    Token: 25690,
  },
  {
    Symbol: "DTIL",
    Token: 6227,
  },
  {
    Symbol: "DUCOL",
    Token: 13766,
  },
  {
    Symbol: "DUCON",
    Token: 28956,
  },
  {
    Symbol: "DUGLOBAL",
    Token: 5457,
  },
  {
    Symbol: "DVL",
    Token: 15214,
  },
  {
    Symbol: "DWARKESH",
    Token: 11667,
  },
  {
    Symbol: "DYCL",
    Token: 10417,
  },
  {
    Symbol: "DYNAMATECH",
    Token: 4525,
  },
  {
    Symbol: "DYNAMIC",
    Token: 6079,
  },
  {
    Symbol: "DYNPRO",
    Token: 21314,
  },
  {
    Symbol: "E2E",
    Token: 8937,
  },
  {
    Symbol: "EASEMYTRIP",
    Token: 2792,
  },
  {
    Symbol: "EBANK",
    Token: 11625,
  },
  {
    Symbol: "EBBETF0425",
    Token: 22243,
  },
  {
    Symbol: "EBBETF0430",
    Token: 16253,
  },
  {
    Symbol: "EBBETF0431",
    Token: 22239,
  },
  {
    Symbol: "EBBETF0433",
    Token: 13139,
  },
  {
    Symbol: "ECLERX",
    Token: 15179,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 4276,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 4280,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 4284,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 4288,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 4292,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 7968,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 7970,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 7972,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 7975,
  },
  {
    Symbol: "ECLFINANCE",
    Token: 7986,
  },
  {
    Symbol: "EDELWEISS",
    Token: 15119,
  },
  {
    Symbol: "EHFLNCD",
    Token: 17864,
  },
  {
    Symbol: "EHFLNCD",
    Token: 17866,
  },
  {
    Symbol: "EHFLNCD",
    Token: 17868,
  },
  {
    Symbol: "EICHERMOT",
    Token: 910,
  },
  {
    Symbol: "EIDPARRY",
    Token: 916,
  },
  {
    Symbol: "EIFFL",
    Token: 6040,
  },
  {
    Symbol: "EIHAHOTELS",
    Token: 15399,
  },
  {
    Symbol: "EIHOTEL",
    Token: 919,
  },
  {
    Symbol: "EIMCOELECO",
    Token: 4040,
  },
  {
    Symbol: "EKC",
    Token: 13091,
  },
  {
    Symbol: "ELDEHSG",
    Token: 8953,
  },
  {
    Symbol: "ELECON",
    Token: 13643,
  },
  {
    Symbol: "ELECTCAST",
    Token: 928,
  },
  {
    Symbol: "ELECTCAST",
    Token: 18116,
  },
  {
    Symbol: "ELECTHERM",
    Token: 4469,
  },
  {
    Symbol: "ELGIEQUIP",
    Token: 937,
  },
  {
    Symbol: "ELGIRUBCO",
    Token: 24924,
  },
  {
    Symbol: "ELIN",
    Token: 13423,
  },
  {
    Symbol: "EMAMILTD",
    Token: 15008,
  },
  {
    Symbol: "EMAMILTD",
    Token: 13517,
  },
  {
    Symbol: "EMAMIPAP",
    Token: 10074,
  },
  {
    Symbol: "EMAMIREAL",
    Token: 19277,
  },
  {
    Symbol: "EMBASSY",
    Token: 9383,
  },
  {
    Symbol: "EMIL",
    Token: 11530,
  },
  {
    Symbol: "EMKAY",
    Token: 13421,
  },
  {
    Symbol: "EMKAYTOOLS",
    Token: 10253,
  },
  {
    Symbol: "EMMBI",
    Token: 18142,
  },
  {
    Symbol: "EMUDHRA",
    Token: 9756,
  },
  {
    Symbol: "ENDURANCE",
    Token: 18822,
  },
  {
    Symbol: "ENERGYDEV",
    Token: 15049,
  },
  {
    Symbol: "ENGINERSIN",
    Token: 4907,
  },
  {
    Symbol: "ENIL",
    Token: 13192,
  },
  {
    Symbol: "EPL",
    Token: 981,
  },
  {
    Symbol: "EQUITASBNK",
    Token: 913,
  },
  {
    Symbol: "ERFLNCDI",
    Token: 2252,
  },
  {
    Symbol: "ERFLNCDI",
    Token: 2254,
  },
  {
    Symbol: "ERIS",
    Token: 21154,
  },
  {
    Symbol: "EROSMEDIA",
    Token: 20080,
  },
  {
    Symbol: "ESABINDIA",
    Token: 955,
  },
  {
    Symbol: "ESCORTS",
    Token: 958,
  },
  {
    Symbol: "ESSARSHPNG",
    Token: 25634,
  },
  {
    Symbol: "ESSENTIA",
    Token: 30323,
  },
  {
    Symbol: "ESTER",
    Token: 24265,
  },
  {
    Symbol: "ETHOSLTD",
    Token: 9750,
  },
  {
    Symbol: "EUROBOND",
    Token: 7331,
  },
  {
    Symbol: "EUROTEXIND",
    Token: 999,
  },
  {
    Symbol: "EVEREADY",
    Token: 11782,
  },
  {
    Symbol: "EVERESTIND",
    Token: 993,
  },
  {
    Symbol: "EXCEL",
    Token: 17376,
  },
  {
    Symbol: "EXCELINDUS",
    Token: 11471,
  },
  {
    Symbol: "EXIDEIND",
    Token: 676,
  },
  {
    Symbol: "EXPLEOSOL",
    Token: 17486,
  },
  {
    Symbol: "EXXARO",
    Token: 5352,
  },
  {
    Symbol: "FACT",
    Token: 1008,
  },
  {
    Symbol: "FAIRCHEMOR",
    Token: 1614,
  },
  {
    Symbol: "FAZE3Q",
    Token: 12000,
  },
  {
    Symbol: "FCL",
    Token: 6198,
  },
  {
    Symbol: "FCONSUMER",
    Token: 30041,
  },
  {
    Symbol: "FCSSOFT",
    Token: 11999,
  },
  {
    Symbol: "FDC",
    Token: 4898,
  },
  {
    Symbol: "FEDERALBNK",
    Token: 1023,
  },
  {
    Symbol: "FELIX",
    Token: 573,
  },
  {
    Symbol: "FIBERWEB",
    Token: 8159,
  },
  {
    Symbol: "FIDEL",
    Token: 9858,
  },
  {
    Symbol: "FIEMIND",
    Token: 13710,
  },
  {
    Symbol: "FILATEX",
    Token: 24532,
  },
  {
    Symbol: "FINCABLES",
    Token: 1038,
  },
  {
    Symbol: "FINEORG",
    Token: 3744,
  },
  {
    Symbol: "FINOPB",
    Token: 6579,
  },
  {
    Symbol: "FINPIPE",
    Token: 1041,
  },
  {
    Symbol: "FIVESTAR",
    Token: 12032,
  },
  {
    Symbol: "FLEXITUFF",
    Token: 25512,
  },
  {
    Symbol: "FLFL",
    Token: 14868,
  },
  {
    Symbol: "FLUOROCHEM",
    Token: 13750,
  },
  {
    Symbol: "FMGOETZE",
    Token: 1190,
  },
  {
    Symbol: "FMNL",
    Token: 21021,
  },
  {
    Symbol: "FOCE",
    Token: 7385,
  },
  {
    Symbol: "FOCUS",
    Token: 6836,
  },
  {
    Symbol: "FOODSIN",
    Token: 6673,
  },
  {
    Symbol: "FORCEMOT",
    Token: 11573,
  },
  {
    Symbol: "FORTIS",
    Token: 14592,
  },
  {
    Symbol: "FOSECOIND",
    Token: 1073,
  },
  {
    Symbol: "FROG",
    Token: 11501,
  },
  {
    Symbol: "FSL",
    Token: 14304,
  },
  {
    Symbol: "FUSION",
    Token: 11932,
  },
  {
    Symbol: "G1NSETEST",
    Token: 12842,
  },
  {
    Symbol: "GABRIEL",
    Token: 1085,
  },
  {
    Symbol: "GAEL",
    Token: 8828,
  },
  {
    Symbol: "GAIL",
    Token: 4717,
  },
  {
    Symbol: "GAL",
    Token: 20296,
  },
  {
    Symbol: "GALAXYSURF",
    Token: 1315,
  },
  {
    Symbol: "GALLANTT",
    Token: 13337,
  },
  {
    Symbol: "GANDHITUBE",
    Token: 14116,
  },
  {
    Symbol: "GANECOS",
    Token: 6944,
  },
  {
    Symbol: "GANESHBE",
    Token: 5614,
  },
  {
    Symbol: "GANESHHOUC",
    Token: 14339,
  },
  {
    Symbol: "GANGAFORGE",
    Token: 4957,
  },
  {
    Symbol: "GANGESSECU",
    Token: 21399,
  },
  {
    Symbol: "GARFIBRES",
    Token: 1100,
  },
  {
    Symbol: "GATEWAY",
    Token: 8510,
  },
  {
    Symbol: "GATI",
    Token: 13688,
  },
  {
    Symbol: "GAYAHWS",
    Token: 3699,
  },
  {
    Symbol: "GEECEE",
    Token: 13658,
  },
  {
    Symbol: "GEEKAYWIRE",
    Token: 17922,
  },
  {
    Symbol: "GENCON",
    Token: 2188,
  },
  {
    Symbol: "GENESYS",
    Token: 10905,
  },
  {
    Symbol: "GENUSPAPER",
    Token: 6600,
  },
  {
    Symbol: "GENUSPOWER",
    Token: 11905,
  },
  {
    Symbol: "GEOJITFSL",
    Token: 11896,
  },
  {
    Symbol: "GEPIL",
    Token: 7862,
  },
  {
    Symbol: "GESHIP",
    Token: 13776,
  },
  {
    Symbol: "GET&D",
    Token: 16783,
  },
  {
    Symbol: "GFLLIMITED",
    Token: 1289,
  },
  {
    Symbol: "GHCL",
    Token: 1127,
  },
  {
    Symbol: "GICHSGFIN",
    Token: 1139,
  },
  {
    Symbol: "GICL",
    Token: 18815,
  },
  {
    Symbol: "GICRE",
    Token: 277,
  },
  {
    Symbol: "GILLANDERS",
    Token: 17839,
  },
  {
    Symbol: "GILLETTE",
    Token: 1576,
  },
  {
    Symbol: "GILT5YBEES",
    Token: 3172,
  },
  {
    Symbol: "GINNIFILA",
    Token: 9294,
  },
  {
    Symbol: "GIPCL",
    Token: 1145,
  },
  {
    Symbol: "GIRIRAJ",
    Token: 2365,
  },
  {
    Symbol: "GIRRESORTS",
    Token: 9935,
  },
  {
    Symbol: "GISOLUTION",
    Token: 17000,
  },
  {
    Symbol: "GKWLIMITED",
    Token: 17357,
  },
  {
    Symbol: "GLAND",
    Token: 1186,
  },
  {
    Symbol: "GLAXO",
    Token: 1153,
  },
  {
    Symbol: "GLENMARK",
    Token: 7406,
  },
  {
    Symbol: "GLOBAL",
    Token: 1415,
  },
  {
    Symbol: "GLOBALVECT",
    Token: 13735,
  },
  {
    Symbol: "GLOBE",
    Token: 393,
  },
  {
    Symbol: "GLOBUSSPR",
    Token: 17424,
  },
  {
    Symbol: "GLS",
    Token: 5265,
  },
  {
    Symbol: "GMBREW",
    Token: 1168,
  },
  {
    Symbol: "GMDCLTD",
    Token: 5204,
  },
  {
    Symbol: "GMMPFAUDLR",
    Token: 1570,
  },
  {
    Symbol: "GMRINFRA",
    Token: 13528,
  },
  {
    Symbol: "GMRP&UI",
    Token: 8529,
  },
  {
    Symbol: "GNA",
    Token: 18571,
  },
  {
    Symbol: "GNFC",
    Token: 1174,
  },
  {
    Symbol: "GOACARBON",
    Token: 14687,
  },
  {
    Symbol: "GOCLCORP",
    Token: 3963,
  },
  {
    Symbol: "GOCOLORS",
    Token: 6964,
  },
  {
    Symbol: "GODFRYPHLP",
    Token: 1181,
  },
  {
    Symbol: "GODHA",
    Token: 1607,
  },
  {
    Symbol: "GODREJAGRO",
    Token: 144,
  },
  {
    Symbol: "GODREJCP",
    Token: 10099,
  },
  {
    Symbol: "GODREJIND",
    Token: 10925,
  },
  {
    Symbol: "GODREJPROP",
    Token: 17875,
  },
  {
    Symbol: "GOKEX",
    Token: 11778,
  },
  {
    Symbol: "GOKUL",
    Token: 16705,
  },
  {
    Symbol: "GOKULAGRO",
    Token: 14480,
  },
  {
    Symbol: "GOLDBEES",
    Token: 14428,
  },
  {
    Symbol: "GOLDIAM",
    Token: 11971,
  },
  {
    Symbol: "GOLDSHARE",
    Token: 14535,
  },
  {
    Symbol: "GOLDSTAR",
    Token: 1,
  },
  {
    Symbol: "GOLDTECH",
    Token: 9878,
  },
  {
    Symbol: "GOODLUCK",
    Token: 6125,
  },
  {
    Symbol: "GOODYEAR",
    Token: 1205,
  },
  {
    Symbol: "GOYALALUM",
    Token: 11789,
  },
  {
    Symbol: "GPIL",
    Token: 13409,
  },
  {
    Symbol: "GPPL",
    Token: 19731,
  },
  {
    Symbol: "GPTINFRA",
    Token: 17685,
  },
  {
    Symbol: "GRANULES",
    Token: 11872,
  },
  {
    Symbol: "GRAPHITE",
    Token: 592,
  },
  {
    Symbol: "GRASIM",
    Token: 1232,
  },
  {
    Symbol: "GRAUWEIL",
    Token: 5200,
  },
  {
    Symbol: "GRAVITA",
    Token: 20534,
  },
  {
    Symbol: "GRCL",
    Token: 14052,
  },
  {
    Symbol: "GREAVESCOT",
    Token: 1235,
  },
  {
    Symbol: "GREENLAM",
    Token: 6848,
  },
  {
    Symbol: "GREENPANEL",
    Token: 13810,
  },
  {
    Symbol: "GREENPLY",
    Token: 3987,
  },
  {
    Symbol: "GREENPOWER",
    Token: 20110,
  },
  {
    Symbol: "GRETEX",
    Token: 18741,
  },
  {
    Symbol: "GRINDWELL",
    Token: 13560,
  },
  {
    Symbol: "GRINFRA",
    Token: 5054,
  },
  {
    Symbol: "GRMOVER",
    Token: 10871,
  },
  {
    Symbol: "GROBTEA",
    Token: 17770,
  },
  {
    Symbol: "GRPLTD",
    Token: 6549,
  },
  {
    Symbol: "GRSE",
    Token: 5475,
  },
  {
    Symbol: "GRWRHITECH",
    Token: 7982,
  },
  {
    Symbol: "GS020124C",
    Token: 3982,
  },
  {
    Symbol: "GS020125C",
    Token: 4108,
  },
  {
    Symbol: "GS020126C",
    Token: 4332,
  },
  {
    Symbol: "GS020723C",
    Token: 3913,
  },
  {
    Symbol: "GS020724C",
    Token: 4039,
  },
  {
    Symbol: "GS020725C",
    Token: 4175,
  },
  {
    Symbol: "GS070623C",
    Token: 3894,
  },
  {
    Symbol: "GS070624C",
    Token: 4016,
  },
  {
    Symbol: "GS070625C",
    Token: 4138,
  },
  {
    Symbol: "GS070626C",
    Token: 4387,
  },
  {
    Symbol: "GS071223C",
    Token: 3951,
  },
  {
    Symbol: "GS071224C",
    Token: 4085,
  },
  {
    Symbol: "GS071225C",
    Token: 4250,
  },
  {
    Symbol: "GS090324C",
    Token: 3995,
  },
  {
    Symbol: "GS090325C",
    Token: 4125,
  },
  {
    Symbol: "GS090326C",
    Token: 4364,
  },
  {
    Symbol: "GS090923C",
    Token: 3921,
  },
  {
    Symbol: "GS090924C",
    Token: 4054,
  },
  {
    Symbol: "GS090925C",
    Token: 4183,
  },
  {
    Symbol: "GS100224C",
    Token: 3988,
  },
  {
    Symbol: "GS100225C",
    Token: 4117,
  },
  {
    Symbol: "GS100226C",
    Token: 4341,
  },
  {
    Symbol: "GS100424C",
    Token: 4006,
  },
  {
    Symbol: "GS100425C",
    Token: 4134,
  },
  {
    Symbol: "GS100426C",
    Token: 4381,
  },
  {
    Symbol: "GS100524C",
    Token: 4011,
  },
  {
    Symbol: "GS100525C",
    Token: 4137,
  },
  {
    Symbol: "GS100526C",
    Token: 4384,
  },
  {
    Symbol: "GS100823C",
    Token: 3916,
  },
  {
    Symbol: "GS100824C",
    Token: 4042,
  },
  {
    Symbol: "GS100825C",
    Token: 4178,
  },
  {
    Symbol: "GS101023C",
    Token: 3939,
  },
  {
    Symbol: "GS101024C",
    Token: 4065,
  },
  {
    Symbol: "GS101025C",
    Token: 4215,
  },
  {
    Symbol: "GS101123C",
    Token: 3946,
  },
  {
    Symbol: "GS101124C",
    Token: 4072,
  },
  {
    Symbol: "GS101125C",
    Token: 4246,
  },
  {
    Symbol: "GS120623C",
    Token: 3903,
  },
  {
    Symbol: "GS120624C",
    Token: 4021,
  },
  {
    Symbol: "GS120625C",
    Token: 4149,
  },
  {
    Symbol: "GS120626C",
    Token: 4389,
  },
  {
    Symbol: "GS121223C",
    Token: 3957,
  },
  {
    Symbol: "GS121224C",
    Token: 4093,
  },
  {
    Symbol: "GS121225C",
    Token: 4254,
  },
  {
    Symbol: "GS150324C",
    Token: 3996,
  },
  {
    Symbol: "GS150325C",
    Token: 4128,
  },
  {
    Symbol: "GS150326C",
    Token: 4366,
  },
  {
    Symbol: "GS150623C",
    Token: 3905,
  },
  {
    Symbol: "GS150624C",
    Token: 4022,
  },
  {
    Symbol: "GS150625C",
    Token: 4154,
  },
  {
    Symbol: "GS150626C",
    Token: 4393,
  },
  {
    Symbol: "GS150923C",
    Token: 3922,
  },
  {
    Symbol: "GS150924C",
    Token: 4057,
  },
  {
    Symbol: "GS150925C",
    Token: 4202,
  },
  {
    Symbol: "GS151223C",
    Token: 3964,
  },
  {
    Symbol: "GS151224C",
    Token: 4094,
  },
  {
    Symbol: "GS151225C",
    Token: 4314,
  },
  {
    Symbol: "GS151226C",
    Token: 4409,
  },
  {
    Symbol: "GS170623C",
    Token: 3907,
  },
  {
    Symbol: "GS170624C",
    Token: 4025,
  },
  {
    Symbol: "GS170625C",
    Token: 4158,
  },
  {
    Symbol: "GS171223C",
    Token: 3966,
  },
  {
    Symbol: "GS171224C",
    Token: 4095,
  },
  {
    Symbol: "GS171225C",
    Token: 4323,
  },
  {
    Symbol: "GS200324C",
    Token: 4005,
  },
  {
    Symbol: "GS200325C",
    Token: 4131,
  },
  {
    Symbol: "GS200326C",
    Token: 4368,
  },
  {
    Symbol: "GS200923C",
    Token: 3928,
  },
  {
    Symbol: "GS200924C",
    Token: 4062,
  },
  {
    Symbol: "GS200925C",
    Token: 4205,
  },
  {
    Symbol: "GS220224C",
    Token: 3989,
  },
  {
    Symbol: "GS220225C",
    Token: 4124,
  },
  {
    Symbol: "GS220226C",
    Token: 4343,
  },
  {
    Symbol: "GS220230C",
    Token: 4423,
  },
  {
    Symbol: "GS220231C",
    Token: 4429,
  },
  {
    Symbol: "GS220236C",
    Token: 4432,
  },
  {
    Symbol: "GS220240C",
    Token: 4520,
  },
  {
    Symbol: "GS220250C",
    Token: 4552,
  },
  {
    Symbol: "GS220261C",
    Token: 4555,
  },
  {
    Symbol: "GS220261P",
    Token: 4395,
  },
  {
    Symbol: "GS220823C",
    Token: 3919,
  },
  {
    Symbol: "GS220824C",
    Token: 4044,
  },
  {
    Symbol: "GS220825C",
    Token: 4180,
  },
  {
    Symbol: "GS220830C",
    Token: 4427,
  },
  {
    Symbol: "GS220831C",
    Token: 4431,
  },
  {
    Symbol: "GS220836C",
    Token: 4494,
  },
  {
    Symbol: "GS220840C",
    Token: 4546,
  },
  {
    Symbol: "GS220850C",
    Token: 4553,
  },
  {
    Symbol: "GS230623C",
    Token: 3909,
  },
  {
    Symbol: "GS230624C",
    Token: 4027,
  },
  {
    Symbol: "GS230625C",
    Token: 4161,
  },
  {
    Symbol: "GS231223C",
    Token: 3967,
  },
  {
    Symbol: "GS231224C",
    Token: 4098,
  },
  {
    Symbol: "GS231225C",
    Token: 4325,
  },
  {
    Symbol: "GS260424C",
    Token: 4009,
  },
  {
    Symbol: "GS260425C",
    Token: 4135,
  },
  {
    Symbol: "GS260426C",
    Token: 4382,
  },
  {
    Symbol: "GS261023C",
    Token: 3944,
  },
  {
    Symbol: "GS261024C",
    Token: 4068,
  },
  {
    Symbol: "GS261025C",
    Token: 4222,
  },
  {
    Symbol: "GS300623C",
    Token: 3910,
  },
  {
    Symbol: "GS300624C",
    Token: 4029,
  },
  {
    Symbol: "GS300625C",
    Token: 4174,
  },
  {
    Symbol: "GS311223C",
    Token: 3976,
  },
  {
    Symbol: "GS311224C",
    Token: 4099,
  },
  {
    Symbol: "GS311225C",
    Token: 4330,
  },
  {
    Symbol: "GSFC",
    Token: 1247,
  },
  {
    Symbol: "GSLSU",
    Token: 14599,
  },
  {
    Symbol: "GSPL",
    Token: 13197,
  },
  {
    Symbol: "GSS",
    Token: 15347,
  },
  {
    Symbol: "GSTL",
    Token: 9764,
  },
  {
    Symbol: "GTL",
    Token: 1162,
  },
  {
    Symbol: "GTLINFRA",
    Token: 13745,
  },
  {
    Symbol: "GTPL",
    Token: 21195,
  },
  {
    Symbol: "GUFICBIO",
    Token: 11606,
  },
  {
    Symbol: "GUJALKALI",
    Token: 1267,
  },
  {
    Symbol: "GUJAPOLLO",
    Token: 14677,
  },
  {
    Symbol: "GUJGASLTD",
    Token: 10599,
  },
  {
    Symbol: "GUJRAFFIA",
    Token: 10097,
  },
  {
    Symbol: "GULFOILLUB",
    Token: 4391,
  },
  {
    Symbol: "GULFPETRO",
    Token: 11581,
  },
  {
    Symbol: "GULPOLY",
    Token: 6286,
  },
  {
    Symbol: "GVKPIL",
    Token: 13226,
  },
  {
    Symbol: "HAL",
    Token: 2303,
  },
  {
    Symbol: "HAPPSTMNDS",
    Token: 48,
  },
  {
    Symbol: "HARDWYN",
    Token: 8962,
  },
  {
    Symbol: "HARIOMPIPE",
    Token: 8968,
  },
  {
    Symbol: "HARRMALAYA",
    Token: 1313,
  },
  {
    Symbol: "HARSHA",
    Token: 11162,
  },
  {
    Symbol: "HATHWAY",
    Token: 18154,
  },
  {
    Symbol: "HATSUN",
    Token: 3892,
  },
  {
    Symbol: "HAVELLS",
    Token: 9819,
  },
  {
    Symbol: "HAVISHA",
    Token: 8417,
  },
  {
    Symbol: "HBANKETF",
    Token: 22433,
  },
  {
    Symbol: "HBLPOWER",
    Token: 13966,
  },
  {
    Symbol: "HBSL",
    Token: 4116,
  },
  {
    Symbol: "HCC",
    Token: 1375,
  },
  {
    Symbol: "HCG",
    Token: 15555,
  },
  {
    Symbol: "HCL-INSYS",
    Token: 1327,
  },
  {
    Symbol: "HCLTECH",
    Token: 7229,
  },
  {
    Symbol: "HDFC",
    Token: 1330,
  },
  {
    Symbol: "HDFC",
    Token: 22326,
  },
  {
    Symbol: "HDFCAMC",
    Token: 4244,
  },
  {
    Symbol: "HDFCBANK",
    Token: 1333,
  },
  {
    Symbol: "HDFCBSE500",
    Token: 14230,
  },
  {
    Symbol: "HDFCGROWTH",
    Token: 11241,
  },
  {
    Symbol: "HDFCLIFE",
    Token: 467,
  },
  {
    Symbol: "HDFCLOWVOL",
    Token: 11547,
  },
  {
    Symbol: "HDFCMFGETF",
    Token: 19543,
  },
  {
    Symbol: "HDFCMID150",
    Token: 14236,
  },
  {
    Symbol: "HDFCMOMENT",
    Token: 11538,
  },
  {
    Symbol: "HDFCNEXT50",
    Token: 10619,
  },
  {
    Symbol: "HDFCNIF100",
    Token: 10633,
  },
  {
    Symbol: "HDFCNIFETF",
    Token: 11591,
  },
  {
    Symbol: "HDFCNIFIT",
    Token: 12101,
  },
  {
    Symbol: "HDFCPVTBAN",
    Token: 12108,
  },
  {
    Symbol: "HDFCQUAL",
    Token: 11255,
  },
  {
    Symbol: "HDFCSENETF",
    Token: 11593,
  },
  {
    Symbol: "HDFCSILVER",
    Token: 10876,
  },
  {
    Symbol: "HDFCSML250",
    Token: 14233,
  },
  {
    Symbol: "HDFCVALUE",
    Token: 11260,
  },
  {
    Symbol: "HEADSUP",
    Token: 19205,
  },
  {
    Symbol: "HEALTHY",
    Token: 6297,
  },
  {
    Symbol: "HECPROJECT",
    Token: 7425,
  },
  {
    Symbol: "HEG",
    Token: 1336,
  },
  {
    Symbol: "HEIDELBERG",
    Token: 2316,
  },
  {
    Symbol: "HEMIPROP",
    Token: 701,
  },
  {
    Symbol: "HERANBA",
    Token: 2614,
  },
  {
    Symbol: "HERCULES",
    Token: 15288,
  },
  {
    Symbol: "HERITGFOOD",
    Token: 4598,
  },
  {
    Symbol: "HEROMOTOCO",
    Token: 1348,
  },
  {
    Symbol: "HESTERBIO",
    Token: 7048,
  },
  {
    Symbol: "HEUBACHIND",
    Token: 715,
  },
  {
    Symbol: "HEXATRADEX",
    Token: 27008,
  },
  {
    Symbol: "HFCL",
    Token: 21951,
  },
  {
    Symbol: "HGINFRA",
    Token: 1672,
  },
  {
    Symbol: "HGS",
    Token: 14712,
  },
  {
    Symbol: "HIGHWAYS",
    Token: 10757,
  },
  {
    Symbol: "HIKAL",
    Token: 9668,
  },
  {
    Symbol: "HIL",
    Token: 1455,
  },
  {
    Symbol: "HILTON",
    Token: 14631,
  },
  {
    Symbol: "HIMATSEIDE",
    Token: 1360,
  },
  {
    Symbol: "HINDALCO",
    Token: 1363,
  },
  {
    Symbol: "HINDCOMPOS",
    Token: 1372,
  },
  {
    Symbol: "HINDCON",
    Token: 4920,
  },
  {
    Symbol: "HINDCOPPER",
    Token: 17939,
  },
  {
    Symbol: "HINDMOTORS",
    Token: 21676,
  },
  {
    Symbol: "HINDOILEXP",
    Token: 1403,
  },
  {
    Symbol: "HINDPETRO",
    Token: 1406,
  },
  {
    Symbol: "HINDUNILVR",
    Token: 1394,
  },
  {
    Symbol: "HINDWAREAP",
    Token: 15883,
  },
  {
    Symbol: "HINDZINC",
    Token: 1424,
  },
  {
    Symbol: "HIRECT",
    Token: 13890,
  },
  {
    Symbol: "HISARMETAL",
    Token: 19322,
  },
  {
    Symbol: "HITECH",
    Token: 2868,
  },
  {
    Symbol: "HITECHCORP",
    Token: 15161,
  },
  {
    Symbol: "HITECHGEAR",
    Token: 4433,
  },
  {
    Symbol: "HLEGLAS",
    Token: 2289,
  },
  {
    Symbol: "HLVLTD",
    Token: 1448,
  },
  {
    Symbol: "HMT",
    Token: 19698,
  },
  {
    Symbol: "HMVL",
    Token: 19211,
  },
  {
    Symbol: "HNDFDS",
    Token: 12173,
  },
  {
    Symbol: "HNGSNGBEES",
    Token: 18284,
  },
  {
    Symbol: "HOMEFIRST",
    Token: 2056,
  },
  {
    Symbol: "HOMESFY",
    Token: 13526,
  },
  {
    Symbol: "HONAUT",
    Token: 3417,
  },
  {
    Symbol: "HONDAPOWER",
    Token: 3138,
  },
  {
    Symbol: "HOVS",
    Token: 13592,
  },
  {
    Symbol: "HPAL",
    Token: 7376,
  },
  {
    Symbol: "HPIL",
    Token: 11800,
  },
  {
    Symbol: "HPL",
    Token: 18679,
  },
  {
    Symbol: "HSCL",
    Token: 14334,
  },
  {
    Symbol: "HTMEDIA",
    Token: 11979,
  },
  {
    Symbol: "HUBTOWN",
    Token: 14203,
  },
  {
    Symbol: "HUDCO",
    Token: 20825,
  },
  {
    Symbol: "HUDCO",
    Token: 31240,
  },
  {
    Symbol: "HUDCO",
    Token: 29312,
  },
  {
    Symbol: "HUDCO",
    Token: 29650,
  },
  {
    Symbol: "HUDCO",
    Token: 19928,
  },
  {
    Symbol: "HUDCO",
    Token: 19930,
  },
  {
    Symbol: "HUDCO",
    Token: 19962,
  },
  {
    Symbol: "HUDCO",
    Token: 19964,
  },
  {
    Symbol: "HUDCO",
    Token: 19966,
  },
  {
    Symbol: "HUDCO",
    Token: 19968,
  },
  {
    Symbol: "HUDCO",
    Token: 19970,
  },
  {
    Symbol: "HUHTAMAKI",
    Token: 2562,
  },
  {
    Symbol: "HYBRIDFIN",
    Token: 12814,
  },
  {
    Symbol: "IBMFNIFTY",
    Token: 9937,
  },
  {
    Symbol: "IBREALEST",
    Token: 14450,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 4909,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 4912,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 4914,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 4926,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 4930,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 4936,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 4942,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14005,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14010,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14017,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14021,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14026,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14028,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14030,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14032,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14034,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14036,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 14038,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15205,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15210,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15215,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15220,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15231,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15235,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15240,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15245,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15249,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15251,
  },
  {
    Symbol: "IBUCCREDIT",
    Token: 15253,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14673,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14678,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14683,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14688,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14692,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14720,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14721,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14696,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14704,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14710,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14714,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 14718,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 30125,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13497,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18624,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18626,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18628,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18630,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18632,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18634,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18636,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 18638,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5815,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5817,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5819,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5821,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5823,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5825,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5827,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5829,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5842,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5844,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5846,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5850,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5855,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5857,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5859,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5861,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 5863,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7729,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7731,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7734,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7740,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7744,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7749,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7752,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7755,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7757,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7761,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7763,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7765,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7769,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7772,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 7777,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9123,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9150,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9153,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9163,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9184,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9191,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9195,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9209,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9211,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9218,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9221,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9255,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9262,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9273,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 9277,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11310,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11316,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11322,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11324,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11328,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11333,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11335,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11337,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11339,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11342,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11352,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11356,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11361,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11365,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11368,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11814,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11818,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11823,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11825,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11827,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11830,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11833,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11835,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11837,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11843,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11846,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11854,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11857,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 11861,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13435,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13438,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13443,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13448,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13453,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13460,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13465,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13477,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13482,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13484,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13487,
  },
  {
    Symbol: "IBULHSGFIN",
    Token: 13492,
  },
  {
    Symbol: "ICDSLTD",
    Token: 9610,
  },
  {
    Symbol: "ICEMAKE",
    Token: 489,
  },
  {
    Symbol: "ICICI",
    Token: 10201,
  },
  {
    Symbol: "ICICI0199",
    Token: 6050,
  },
  {
    Symbol: "ICICI0402",
    Token: 10716,
  },
  {
    Symbol: "ICICI10GS",
    Token: 13143,
  },
  {
    Symbol: "ICICI500",
    Token: 3001,
  },
  {
    Symbol: "ICICI5GSEC",
    Token: 8342,
  },
  {
    Symbol: "ICICIALPLV",
    Token: 22344,
  },
  {
    Symbol: "ICICIAUTO",
    Token: 7844,
  },
  {
    Symbol: "ICICIB22",
    Token: 522,
  },
  {
    Symbol: "ICICIBANK",
    Token: 4963,
  },
  {
    Symbol: "ICICIBANKN",
    Token: 11037,
  },
  {
    Symbol: "ICICIBANKP",
    Token: 11386,
  },
  {
    Symbol: "ICICICOMMO",
    Token: 13198,
  },
  {
    Symbol: "ICICICONSU",
    Token: 6446,
  },
  {
    Symbol: "ICICIFIN",
    Token: 12578,
  },
  {
    Symbol: "ICICIFMCG",
    Token: 5306,
  },
  {
    Symbol: "ICICIGI",
    Token: 21770,
  },
  {
    Symbol: "ICICIGOLD",
    Token: 19679,
  },
  {
    Symbol: "ICICIINFRA",
    Token: 10723,
  },
  {
    Symbol: "ICICILIQ",
    Token: 4838,
  },
  {
    Symbol: "ICICILOVOL",
    Token: 21254,
  },
  {
    Symbol: "ICICIM150",
    Token: 17152,
  },
  {
    Symbol: "ICICIMCAP",
    Token: 17702,
  },
  {
    Symbol: "ICICIMOM30",
    Token: 10585,
  },
  {
    Symbol: "ICICINF100",
    Token: 30392,
  },
  {
    Symbol: "ICICINIFTY",
    Token: 29553,
  },
  {
    Symbol: "ICICINV20",
    Token: 17475,
  },
  {
    Symbol: "ICICINXT50",
    Token: 4529,
  },
  {
    Symbol: "ICICIPHARM",
    Token: 3626,
  },
  {
    Symbol: "ICICIPRULI",
    Token: 18652,
  },
  {
    Symbol: "ICICISENSX",
    Token: 4378,
  },
  {
    Symbol: "ICICISILVE",
    Token: 7942,
  },
  {
    Symbol: "ICICITECH",
    Token: 22365,
  },
  {
    Symbol: "ICIL",
    Token: 11987,
  },
  {
    Symbol: "ICRA",
    Token: 14523,
  },
  {
    Symbol: "IDBI",
    Token: 1476,
  },
  {
    Symbol: "IDBIGOLD",
    Token: 25640,
  },
  {
    Symbol: "IDEA",
    Token: 14366,
  },
  {
    Symbol: "IDFC",
    Token: 11957,
  },
  {
    Symbol: "IDFCFIRSTB",
    Token: 11184,
  },
  {
    Symbol: "IDFNIFTYET",
    Token: 18783,
  },
  {
    Symbol: "IEL",
    Token: 13303,
  },
  {
    Symbol: "IEX",
    Token: 220,
  },
  {
    Symbol: "IFBAGRO",
    Token: 1482,
  },
  {
    Symbol: "IFBIND",
    Token: 1485,
  },
  {
    Symbol: "IFCI",
    Token: 1491,
  },
  {
    Symbol: "IFCI",
    Token: 5759,
  },
  {
    Symbol: "IFCI",
    Token: 5761,
  },
  {
    Symbol: "IFCI",
    Token: 6646,
  },
  {
    Symbol: "IFCI",
    Token: 6652,
  },
  {
    Symbol: "IFGLEXPOR",
    Token: 436,
  },
  {
    Symbol: "IGARASHI",
    Token: 634,
  },
  {
    Symbol: "IGL",
    Token: 11262,
  },
  {
    Symbol: "IGPL",
    Token: 14086,
  },
  {
    Symbol: "IIFCL",
    Token: 20052,
  },
  {
    Symbol: "IIFCL",
    Token: 20054,
  },
  {
    Symbol: "IIFCL",
    Token: 20056,
  },
  {
    Symbol: "IIFCL",
    Token: 20058,
  },
  {
    Symbol: "IIFL",
    Token: 11809,
  },
  {
    Symbol: "IIFL",
    Token: 19045,
  },
  {
    Symbol: "IIFL",
    Token: 19047,
  },
  {
    Symbol: "IIFL",
    Token: 19067,
  },
  {
    Symbol: "IIFL",
    Token: 19069,
  },
  {
    Symbol: "IIFL",
    Token: 2871,
  },
  {
    Symbol: "IIFL",
    Token: 2877,
  },
  {
    Symbol: "IIFL",
    Token: 2883,
  },
  {
    Symbol: "IIFL",
    Token: 6176,
  },
  {
    Symbol: "IIFL",
    Token: 6178,
  },
  {
    Symbol: "IIFL",
    Token: 6189,
  },
  {
    Symbol: "IIFL",
    Token: 6195,
  },
  {
    Symbol: "IIFL",
    Token: 6197,
  },
  {
    Symbol: "IIFL",
    Token: 6200,
  },
  {
    Symbol: "IIFL",
    Token: 6207,
  },
  {
    Symbol: "IIFL",
    Token: 13833,
  },
  {
    Symbol: "IIFL",
    Token: 13840,
  },
  {
    Symbol: "IIFL",
    Token: 13845,
  },
  {
    Symbol: "IIFL",
    Token: 13850,
  },
  {
    Symbol: "IIFL",
    Token: 13852,
  },
  {
    Symbol: "IIFL",
    Token: 13854,
  },
  {
    Symbol: "IIFL",
    Token: 13858,
  },
  {
    Symbol: "IIFLSEC",
    Token: 13072,
  },
  {
    Symbol: "IIHFL",
    Token: 5212,
  },
  {
    Symbol: "IIHFL",
    Token: 5214,
  },
  {
    Symbol: "IIHFL",
    Token: 5217,
  },
  {
    Symbol: "IIHFL",
    Token: 7640,
  },
  {
    Symbol: "IIHFL",
    Token: 7645,
  },
  {
    Symbol: "IIHFL",
    Token: 7648,
  },
  {
    Symbol: "IIHFL",
    Token: 7662,
  },
  {
    Symbol: "IIHFL",
    Token: 7666,
  },
  {
    Symbol: "IIHFL",
    Token: 7668,
  },
  {
    Symbol: "IIHFL",
    Token: 7671,
  },
  {
    Symbol: "IIHFL",
    Token: 7674,
  },
  {
    Symbol: "IITL",
    Token: 19525,
  },
  {
    Symbol: "IL&FSENGG",
    Token: 9380,
  },
  {
    Symbol: "IL&FSTRANS",
    Token: 9381,
  },
  {
    Symbol: "IMAGICAA",
    Token: 7672,
  },
  {
    Symbol: "IMC1",
    Token: 14214,
  },
  {
    Symbol: "IMC1",
    Token: 14219,
  },
  {
    Symbol: "IMC1",
    Token: 14224,
  },
  {
    Symbol: "IMC1",
    Token: 14228,
  },
  {
    Symbol: "IMFA",
    Token: 19235,
  },
  {
    Symbol: "IMPAL",
    Token: 12009,
  },
  {
    Symbol: "IMPEXFERRO",
    Token: 11684,
  },
  {
    Symbol: "INCREDFIN",
    Token: 11481,
  },
  {
    Symbol: "INCREDFIN",
    Token: 11485,
  },
  {
    Symbol: "INCREDFIN",
    Token: 14040,
  },
  {
    Symbol: "INCREDFIN",
    Token: 14042,
  },
  {
    Symbol: "INCREDFIN",
    Token: 14045,
  },
  {
    Symbol: "INCREDFIN",
    Token: 14049,
  },
  {
    Symbol: "INCREDIBLE",
    Token: 17507,
  },
  {
    Symbol: "INDBANK",
    Token: 16933,
  },
  {
    Symbol: "INDHOTEL",
    Token: 1512,
  },
  {
    Symbol: "INDIACEM",
    Token: 1515,
  },
  {
    Symbol: "INDIAGLYCO",
    Token: 1521,
  },
  {
    Symbol: "INDIAMART",
    Token: 10726,
  },
  {
    Symbol: "INDIANB",
    Token: 14309,
  },
  {
    Symbol: "INDIANCARD",
    Token: 4422,
  },
  {
    Symbol: "INDIANHUME",
    Token: 1530,
  },
  {
    Symbol: "INDIGO",
    Token: 11195,
  },
  {
    Symbol: "INDIGOPNTS",
    Token: 2048,
  },
  {
    Symbol: "INDIGRID",
    Token: 20988,
  },
  {
    Symbol: "INDIGRID",
    Token: 3418,
  },
  {
    Symbol: "INDIGRID",
    Token: 3420,
  },
  {
    Symbol: "INDIGRID",
    Token: 3422,
  },
  {
    Symbol: "INDIGRID",
    Token: 3425,
  },
  {
    Symbol: "INDIGRID",
    Token: 3428,
  },
  {
    Symbol: "INDIGRID",
    Token: 3433,
  },
  {
    Symbol: "INDIGRID",
    Token: 3442,
  },
  {
    Symbol: "INDIGRID",
    Token: 3451,
  },
  {
    Symbol: "INDIGRID",
    Token: 3457,
  },
  {
    Symbol: "INDIGRID",
    Token: 3464,
  },
  {
    Symbol: "INDIGRID",
    Token: 3470,
  },
  {
    Symbol: "INDIGRID",
    Token: 3476,
  },
  {
    Symbol: "INDINFR",
    Token: 2892,
  },
  {
    Symbol: "INDNIPPON",
    Token: 4747,
  },
  {
    Symbol: "INDOAMIN",
    Token: 9116,
  },
  {
    Symbol: "INDOBORAX",
    Token: 8614,
  },
  {
    Symbol: "INDOCO",
    Token: 11677,
  },
  {
    Symbol: "INDORAMA",
    Token: 10993,
  },
  {
    Symbol: "INDOSTAR",
    Token: 3098,
  },
  {
    Symbol: "INDOTECH",
    Token: 13275,
  },
  {
    Symbol: "INDOTHAI",
    Token: 25612,
  },
  {
    Symbol: "INDOWIND",
    Token: 14952,
  },
  {
    Symbol: "INDRAMEDCO",
    Token: 8852,
  },
  {
    Symbol: "INDSWFTLAB",
    Token: 4870,
  },
  {
    Symbol: "INDSWFTLTD",
    Token: 11602,
  },
  {
    Symbol: "INDTERRAIN",
    Token: 21957,
  },
  {
    Symbol: "INDUSINDBK",
    Token: 5258,
  },
  {
    Symbol: "INDUSTOWER",
    Token: 29135,
  },
  {
    Symbol: "INFIBEAM",
    Token: 16249,
  },
  {
    Symbol: "INFINIUM",
    Token: 15036,
  },
  {
    Symbol: "INFOBEAN",
    Token: 11027,
  },
  {
    Symbol: "INFOMEDIA",
    Token: 13694,
  },
  {
    Symbol: "INFRABEES",
    Token: 20072,
  },
  {
    Symbol: "INFY",
    Token: 1594,
  },
  {
    Symbol: "INGERRAND",
    Token: 1597,
  },
  {
    Symbol: "INNOVANA",
    Token: 666,
  },
  {
    Symbol: "INNOVATIVE",
    Token: 21862,
  },
  {
    Symbol: "INOXGREEN",
    Token: 12188,
  },
  {
    Symbol: "INOXWIND",
    Token: 7852,
  },
  {
    Symbol: "INSECTICID",
    Token: 14657,
  },
  {
    Symbol: "INSPIRISYS",
    Token: 13734,
  },
  {
    Symbol: "INTELLECT",
    Token: 5926,
  },
  {
    Symbol: "INTENTECH",
    Token: 20071,
  },
  {
    Symbol: "INTLCONV",
    Token: 5606,
  },
  {
    Symbol: "INVENTURE",
    Token: 24870,
  },
  {
    Symbol: "IOB",
    Token: 9348,
  },
  {
    Symbol: "IOC",
    Token: 1624,
  },
  {
    Symbol: "IOLCP",
    Token: 20413,
  },
  {
    Symbol: "IONEXCHANG",
    Token: 1630,
  },
  {
    Symbol: "IPCALAB",
    Token: 1633,
  },
  {
    Symbol: "IPL",
    Token: 4934,
  },
  {
    Symbol: "IPSL",
    Token: 11903,
  },
  {
    Symbol: "IRB",
    Token: 15313,
  },
  {
    Symbol: "IRBINVIT",
    Token: 20817,
  },
  {
    Symbol: "IRBIT",
    Token: 14806,
  },
  {
    Symbol: "IRCON",
    Token: 4986,
  },
  {
    Symbol: "IRCTC",
    Token: 13611,
  },
  {
    Symbol: "IREDA",
    Token: 1374,
  },
  {
    Symbol: "IREDA",
    Token: 1380,
  },
  {
    Symbol: "IREDA",
    Token: 1383,
  },
  {
    Symbol: "IREDA",
    Token: 1387,
  },
  {
    Symbol: "IREDA",
    Token: 1391,
  },
  {
    Symbol: "IREDA",
    Token: 1393,
  },
  {
    Symbol: "IREDA",
    Token: 20030,
  },
  {
    Symbol: "IRFC",
    Token: 2029,
  },
  {
    Symbol: "IRFC",
    Token: 31128,
  },
  {
    Symbol: "IRFC",
    Token: 29323,
  },
  {
    Symbol: "IRFC",
    Token: 29607,
  },
  {
    Symbol: "IRFC",
    Token: 586,
  },
  {
    Symbol: "IRFC",
    Token: 591,
  },
  {
    Symbol: "IRFC",
    Token: 597,
  },
  {
    Symbol: "IRFC",
    Token: 603,
  },
  {
    Symbol: "IRFC",
    Token: 1987,
  },
  {
    Symbol: "IRFC",
    Token: 1991,
  },
  {
    Symbol: "IRFC",
    Token: 1993,
  },
  {
    Symbol: "IRFC",
    Token: 1999,
  },
  {
    Symbol: "IRFC",
    Token: 11722,
  },
  {
    Symbol: "IRFC",
    Token: 11730,
  },
  {
    Symbol: "IRFC",
    Token: 11748,
  },
  {
    Symbol: "IRFC",
    Token: 11751,
  },
  {
    Symbol: "IRFC",
    Token: 11754,
  },
  {
    Symbol: "IRFC",
    Token: 11757,
  },
  {
    Symbol: "IRFC",
    Token: 15110,
  },
  {
    Symbol: "IRFC",
    Token: 15112,
  },
  {
    Symbol: "IRFC",
    Token: 15134,
  },
  {
    Symbol: "IRFC",
    Token: 15168,
  },
  {
    Symbol: "IRIS",
    Token: 6489,
  },
  {
    Symbol: "IRISDOREME",
    Token: 2275,
  },
  {
    Symbol: "ISEC",
    Token: 2489,
  },
  {
    Symbol: "ISFT",
    Token: 18479,
  },
  {
    Symbol: "ISGEC",
    Token: 3329,
  },
  {
    Symbol: "ISHAN",
    Token: 10995,
  },
  {
    Symbol: "ISMTLTD",
    Token: 14932,
  },
  {
    Symbol: "ITBEES",
    Token: 19084,
  },
  {
    Symbol: "ITC",
    Token: 1660,
  },
  {
    Symbol: "ITDC",
    Token: 19299,
  },
  {
    Symbol: "ITDCEM",
    Token: 5622,
  },
  {
    Symbol: "ITI",
    Token: 1675,
  },
  {
    Symbol: "IVC",
    Token: 6711,
  },
  {
    Symbol: "IVP",
    Token: 1681,
  },
  {
    Symbol: "IVZINGOLD",
    Token: 18292,
  },
  {
    Symbol: "IVZINNIFTY",
    Token: 24217,
  },
  {
    Symbol: "IWEL",
    Token: 3776,
  },
  {
    Symbol: "IZMO",
    Token: 14174,
  },
  {
    Symbol: "J&KBANK",
    Token: 5633,
  },
  {
    Symbol: "JAGRAN",
    Token: 13211,
  },
  {
    Symbol: "JAGSNPHARM",
    Token: 4410,
  },
  {
    Symbol: "JAIBALAJI",
    Token: 11256,
  },
  {
    Symbol: "JAICORPLTD",
    Token: 5143,
  },
  {
    Symbol: "JAINAM",
    Token: 6012,
  },
  {
    Symbol: "JAIPURKURT",
    Token: 5516,
  },
  {
    Symbol: "JAKHARIA",
    Token: 3949,
  },
  {
    Symbol: "JALAN",
    Token: 20929,
  },
  {
    Symbol: "JAMNAAUTO",
    Token: 20778,
  },
  {
    Symbol: "JASH",
    Token: 13982,
  },
  {
    Symbol: "JAYAGROGN",
    Token: 4041,
  },
  {
    Symbol: "JAYBARMARU",
    Token: 1708,
  },
  {
    Symbol: "JAYNECOIND",
    Token: 2331,
  },
  {
    Symbol: "JAYSREETEA",
    Token: 1720,
  },
  {
    Symbol: "JBCHEPHARM",
    Token: 1726,
  },
  {
    Symbol: "JBMA",
    Token: 11655,
  },
  {
    Symbol: "JCHAC",
    Token: 4491,
  },
  {
    Symbol: "JETAIRWAYS",
    Token: 13420,
  },
  {
    Symbol: "JETFREIGHT",
    Token: 7211,
  },
  {
    Symbol: "JETKNIT",
    Token: 18699,
  },
  {
    Symbol: "JFLLIFE",
    Token: 10885,
  },
  {
    Symbol: "JHS",
    Token: 13720,
  },
  {
    Symbol: "JINDALPHOT",
    Token: 11743,
  },
  {
    Symbol: "JINDALPOLY",
    Token: 1756,
  },
  {
    Symbol: "JINDALSAW",
    Token: 3024,
  },
  {
    Symbol: "JINDALSTEL",
    Token: 6733,
  },
  {
    Symbol: "JINDRILL",
    Token: 13875,
  },
  {
    Symbol: "JINDWORLD",
    Token: 20642,
  },
  {
    Symbol: "JISLDVREQS",
    Token: 25684,
  },
  {
    Symbol: "JISLJALEQS",
    Token: 10397,
  },
  {
    Symbol: "JITFINFRA",
    Token: 19695,
  },
  {
    Symbol: "JKCEMENT",
    Token: 13270,
  },
  {
    Symbol: "JKIL",
    Token: 15266,
  },
  {
    Symbol: "JKLAKSHMI",
    Token: 13491,
  },
  {
    Symbol: "JKPAPER",
    Token: 11860,
  },
  {
    Symbol: "JKTYRE",
    Token: 14435,
  },
  {
    Symbol: "JMA",
    Token: 7109,
  },
  {
    Symbol: "JMFINANCIL",
    Token: 13637,
  },
  {
    Symbol: "JOCIL",
    Token: 16927,
  },
  {
    Symbol: "JPASSOCIAT",
    Token: 11460,
  },
  {
    Symbol: "JPOLYINVST",
    Token: 31507,
  },
  {
    Symbol: "JPPOWER",
    Token: 11763,
  },
  {
    Symbol: "JSL",
    Token: 11236,
  },
  {
    Symbol: "JSLL",
    Token: 9038,
  },
  {
    Symbol: "JSWENERGY",
    Token: 17869,
  },
  {
    Symbol: "JSWHL",
    Token: 11880,
  },
  {
    Symbol: "JSWISPL",
    Token: 4671,
  },
  {
    Symbol: "JSWSTEEL",
    Token: 11723,
  },
  {
    Symbol: "JTEKTINDIA",
    Token: 3237,
  },
  {
    Symbol: "JTLIND",
    Token: 7287,
  },
  {
    Symbol: "JUBLFOOD",
    Token: 18096,
  },
  {
    Symbol: "JUBLINDS",
    Token: 21541,
  },
  {
    Symbol: "JUBLINGREA",
    Token: 2783,
  },
  {
    Symbol: "JUBLPHARMA",
    Token: 3637,
  },
  {
    Symbol: "JUNIORBEES",
    Token: 10939,
  },
  {
    Symbol: "JUSTDIAL",
    Token: 29962,
  },
  {
    Symbol: "JWL",
    Token: 20224,
  },
  {
    Symbol: "JYOTHYLAB",
    Token: 15146,
  },
  {
    Symbol: "JYOTISTRUC",
    Token: 2411,
  },
  {
    Symbol: "KABRAEXTRU",
    Token: 1805,
  },
  {
    Symbol: "KAJARIACER",
    Token: 1808,
  },
  {
    Symbol: "KAKATCEM",
    Token: 1811,
  },
  {
    Symbol: "KALPATPOWR",
    Token: 1814,
  },
  {
    Symbol: "KALYANI",
    Token: 19653,
  },
  {
    Symbol: "KALYANIFRG",
    Token: 15160,
  },
  {
    Symbol: "KALYANKJIL",
    Token: 2955,
  },
  {
    Symbol: "KAMATHOTEL",
    Token: 1826,
  },
  {
    Symbol: "KAMDHENU",
    Token: 13457,
  },
  {
    Symbol: "KAMOPAINTS",
    Token: 13814,
  },
  {
    Symbol: "KANANIIND",
    Token: 25786,
  },
  {
    Symbol: "KANDARP",
    Token: 11208,
  },
  {
    Symbol: "KANORICHEM",
    Token: 1835,
  },
  {
    Symbol: "KANPRPLA",
    Token: 1782,
  },
  {
    Symbol: "KANSAINER",
    Token: 1196,
  },
  {
    Symbol: "KAPSTON",
    Token: 18967,
  },
  {
    Symbol: "KARMAENG",
    Token: 24389,
  },
  {
    Symbol: "KARURVYSYA",
    Token: 1838,
  },
  {
    Symbol: "KAUSHALYA",
    Token: 15136,
  },
  {
    Symbol: "KAVVERITEL",
    Token: 15244,
  },
  {
    Symbol: "KAYA",
    Token: 10276,
  },
  {
    Symbol: "KAYNES",
    Token: 12092,
  },
  {
    Symbol: "KBCGLOBAL",
    Token: 2360,
  },
  {
    Symbol: "KCK",
    Token: 10293,
  },
  {
    Symbol: "KCP",
    Token: 1841,
  },
  {
    Symbol: "KCPSUGIND",
    Token: 4809,
  },
  {
    Symbol: "KDDL",
    Token: 14908,
  },
  {
    Symbol: "KEC",
    Token: 13260,
  },
  {
    Symbol: "KECL",
    Token: 18220,
  },
  {
    Symbol: "KEEPLEARN",
    Token: 8880,
  },
  {
    Symbol: "KEI",
    Token: 13310,
  },
  {
    Symbol: "KELLTONTEC",
    Token: 13430,
  },
  {
    Symbol: "KENNAMET",
    Token: 11841,
  },
  {
    Symbol: "KERNEX",
    Token: 13125,
  },
  {
    Symbol: "KESORAMIND",
    Token: 1859,
  },
  {
    Symbol: "KEYFINSERV",
    Token: 4157,
  },
  {
    Symbol: "KFINTECH",
    Token: 13359,
  },
  {
    Symbol: "KHADIM",
    Token: 425,
  },
  {
    Symbol: "KHAICHEM",
    Token: 896,
  },
  {
    Symbol: "KHAITANLTD",
    Token: 3912,
  },
  {
    Symbol: "KHANDSE",
    Token: 9641,
  },
  {
    Symbol: "KHFM",
    Token: 9570,
  },
  {
    Symbol: "KICL",
    Token: 21119,
  },
  {
    Symbol: "KILITCH",
    Token: 19937,
  },
  {
    Symbol: "KIMS",
    Token: 4847,
  },
  {
    Symbol: "KINGFA",
    Token: 18944,
  },
  {
    Symbol: "KIOCL",
    Token: 19126,
  },
  {
    Symbol: "KIRIINDUS",
    Token: 16639,
  },
  {
    Symbol: "KIRLFER",
    Token: 14466,
  },
  {
    Symbol: "KIRLOSBROS",
    Token: 18581,
  },
  {
    Symbol: "KIRLOSENG",
    Token: 20936,
  },
  {
    Symbol: "KIRLOSIND",
    Token: 19025,
  },
  {
    Symbol: "KIRLPNU",
    Token: 15180,
  },
  {
    Symbol: "KITEX",
    Token: 28899,
  },
  {
    Symbol: "KKCL",
    Token: 13381,
  },
  {
    Symbol: "KKVAPOW",
    Token: 17781,
  },
  {
    Symbol: "KMSUGAR",
    Token: 14667,
  },
  {
    Symbol: "KNAGRI",
    Token: 8602,
  },
  {
    Symbol: "KNRCON",
    Token: 15283,
  },
  {
    Symbol: "KOHINOOR",
    Token: 7675,
  },
  {
    Symbol: "KOKUYOCMLN",
    Token: 16827,
  },
  {
    Symbol: "KOLTEPATIL",
    Token: 15124,
  },
  {
    Symbol: "KOPRAN",
    Token: 1919,
  },
  {
    Symbol: "KORE",
    Token: 10889,
  },
  {
    Symbol: "KOTAKALPHA",
    Token: 7412,
  },
  {
    Symbol: "KOTAKBANK",
    Token: 1922,
  },
  {
    Symbol: "KOTAKBKETF",
    Token: 5851,
  },
  {
    Symbol: "KOTAKCONS",
    Token: 10512,
  },
  {
    Symbol: "KOTAKGOLD",
    Token: 14858,
  },
  {
    Symbol: "KOTAKIT",
    Token: 2627,
  },
  {
    Symbol: "KOTAKLIQ",
    Token: 13950,
  },
  {
    Symbol: "KOTAKLOVOL",
    Token: 8632,
  },
  {
    Symbol: "KOTAKMID50",
    Token: 8077,
  },
  {
    Symbol: "KOTAKMNC",
    Token: 10676,
  },
  {
    Symbol: "KOTAKNIFTY",
    Token: 18102,
  },
  {
    Symbol: "KOTAKNV20",
    Token: 11457,
  },
  {
    Symbol: "KOTAKPSUBK",
    Token: 15061,
  },
  {
    Symbol: "KOTAKSILVE",
    Token: 13082,
  },
  {
    Symbol: "KOTARISUG",
    Token: 11647,
  },
  {
    Symbol: "KOTHARIPET",
    Token: 4594,
  },
  {
    Symbol: "KOTHARIPRO",
    Token: 5528,
  },
  {
    Symbol: "KOTYARK",
    Token: 6441,
  },
  {
    Symbol: "KOVAI",
    Token: 5192,
  },
  {
    Symbol: "KPIGREEN",
    Token: 5108,
  },
  {
    Symbol: "KPITTECH",
    Token: 9683,
  },
  {
    Symbol: "KPRMILL",
    Token: 14912,
  },
  {
    Symbol: "KRBL",
    Token: 10577,
  },
  {
    Symbol: "KRIDHANINF",
    Token: 11488,
  },
  {
    Symbol: "KRISHANA",
    Token: 12847,
  },
  {
    Symbol: "KRISHIVAL",
    Token: 8671,
  },
  {
    Symbol: "KRISHNADEF",
    Token: 8782,
  },
  {
    Symbol: "KRITI",
    Token: 6417,
  },
  {
    Symbol: "KRITIKA",
    Token: 9288,
  },
  {
    Symbol: "KRITINUT",
    Token: 11432,
  },
  {
    Symbol: "KRSNAA",
    Token: 5359,
  },
  {
    Symbol: "KSB",
    Token: 1949,
  },
  {
    Symbol: "KSCL",
    Token: 14972,
  },
  {
    Symbol: "KSHITIJPOL",
    Token: 10407,
  },
  {
    Symbol: "KSL",
    Token: 18889,
  },
  {
    Symbol: "KSOLVES",
    Token: 11060,
  },
  {
    Symbol: "KTKBANK",
    Token: 8054,
  },
  {
    Symbol: "KUANTUM",
    Token: 13870,
  },
  {
    Symbol: "L&TFH",
    Token: 24948,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9212,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9214,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9216,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9227,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9229,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9231,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9233,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9235,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9622,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9624,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9630,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9644,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9650,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9656,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9662,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9669,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9674,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 9676,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 15641,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 15656,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 15684,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 15733,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 15763,
  },
  {
    Symbol: "L&TFINANCE",
    Token: 15802,
  },
  {
    Symbol: "LAGNAM",
    Token: 5865,
  },
  {
    Symbol: "LAKPRE",
    Token: 4774,
  },
  {
    Symbol: "LAL",
    Token: 14924,
  },
  {
    Symbol: "LALPATHLAB",
    Token: 11654,
  },
  {
    Symbol: "LAMBODHARA",
    Token: 6407,
  },
  {
    Symbol: "LANDMARK",
    Token: 13276,
  },
  {
    Symbol: "LAOPALA",
    Token: 14423,
  },
  {
    Symbol: "LASA",
    Token: 21713,
  },
  {
    Symbol: "LATENTVIEW",
    Token: 6818,
  },
  {
    Symbol: "LATTEYS",
    Token: 3307,
  },
  {
    Symbol: "LAURUSLABS",
    Token: 19234,
  },
  {
    Symbol: "LAXMICOT",
    Token: 6568,
  },
  {
    Symbol: "LAXMIMACH",
    Token: 1979,
  },
  {
    Symbol: "LCCINFOTEC",
    Token: 7529,
  },
  {
    Symbol: "LEMERITE",
    Token: 9372,
  },
  {
    Symbol: "LEMONTREE",
    Token: 2606,
  },
  {
    Symbol: "LEXUS",
    Token: 14459,
  },
  {
    Symbol: "LFIC",
    Token: 7902,
  },
  {
    Symbol: "LGBBROSLTD",
    Token: 18321,
  },
  {
    Symbol: "LGBFORGE",
    Token: 16845,
  },
  {
    Symbol: "LGHL",
    Token: 18475,
  },
  {
    Symbol: "LIBAS",
    Token: 11082,
  },
  {
    Symbol: "LIBERTSHOE",
    Token: 1994,
  },
  {
    Symbol: "LICHSGFIN",
    Token: 1997,
  },
  {
    Symbol: "LICI",
    Token: 9480,
  },
  {
    Symbol: "LICNETFGSC",
    Token: 6062,
  },
  {
    Symbol: "LICNETFN50",
    Token: 11319,
  },
  {
    Symbol: "LICNETFSEN",
    Token: 11441,
  },
  {
    Symbol: "LICNFNHGP",
    Token: 15229,
  },
  {
    Symbol: "LIKHITHA",
    Token: 578,
  },
  {
    Symbol: "LINC",
    Token: 6951,
  },
  {
    Symbol: "LINCOLN",
    Token: 11596,
  },
  {
    Symbol: "LINDEINDIA",
    Token: 1627,
  },
  {
    Symbol: "LIQUIDBEES",
    Token: 11006,
  },
  {
    Symbol: "LIQUIDETF",
    Token: 1927,
  },
  {
    Symbol: "LLOYDS",
    Token: 11472,
  },
  {
    Symbol: "LODHA",
    Token: 3220,
  },
  {
    Symbol: "LOKESHMACH",
    Token: 13436,
  },
  {
    Symbol: "LOTUSEYE",
    Token: 16807,
  },
  {
    Symbol: "LOVABLE",
    Token: 22415,
  },
  {
    Symbol: "LOYALTEX",
    Token: 10590,
  },
  {
    Symbol: "LPDC",
    Token: 16863,
  },
  {
    Symbol: "LRRPL",
    Token: 14204,
  },
  {
    Symbol: "LSIL",
    Token: 17801,
  },
  {
    Symbol: "LT",
    Token: 11483,
  },
  {
    Symbol: "LTGILTBEES",
    Token: 17700,
  },
  {
    Symbol: "LTIM",
    Token: 17818,
  },
  {
    Symbol: "LTTS",
    Token: 18564,
  },
  {
    Symbol: "LUMAXIND",
    Token: 2018,
  },
  {
    Symbol: "LUMAXTECH",
    Token: 14014,
  },
  {
    Symbol: "LUPIN",
    Token: 10440,
  },
  {
    Symbol: "LUXIND",
    Token: 11301,
  },
  {
    Symbol: "LXCHEM",
    Token: 2841,
  },
  {
    Symbol: "LYKALABS",
    Token: 2028,
  },
  {
    Symbol: "LYPSAGEMS",
    Token: 31468,
  },
  {
    Symbol: "M&M",
    Token: 2031,
  },
  {
    Symbol: "M&MFIN",
    Token: 13285,
  },
  {
    Symbol: "M&MFIN",
    Token: 20046,
  },
  {
    Symbol: "M&MFIN",
    Token: 20048,
  },
  {
    Symbol: "M&MFIN",
    Token: 20050,
  },
  {
    Symbol: "MAANALU",
    Token: 15017,
  },
  {
    Symbol: "MACPOWER",
    Token: 22347,
  },
  {
    Symbol: "MADHAV",
    Token: 15151,
  },
  {
    Symbol: "MADHAVBAUG",
    Token: 8259,
  },
  {
    Symbol: "MADHUCON",
    Token: 13668,
  },
  {
    Symbol: "MADRASFERT",
    Token: 4911,
  },
  {
    Symbol: "MAESGETF",
    Token: 1200,
  },
  {
    Symbol: "MAFANG",
    Token: 3507,
  },
  {
    Symbol: "MAFSETF",
    Token: 5220,
  },
  {
    Symbol: "MAGADSUGAR",
    Token: 21392,
  },
  {
    Symbol: "MAGNUM",
    Token: 14957,
  },
  {
    Symbol: "MAGOLDETF",
    Token: 14286,
  },
  {
    Symbol: "MAGS813ETF",
    Token: 14938,
  },
  {
    Symbol: "MAHABANK",
    Token: 11377,
  },
  {
    Symbol: "MAHAPEXLTD",
    Token: 5239,
  },
  {
    Symbol: "MAHASTEEL",
    Token: 17527,
  },
  {
    Symbol: "MAHEPC",
    Token: 17603,
  },
  {
    Symbol: "MAHESHWARI",
    Token: 9576,
  },
  {
    Symbol: "MAHICKRA",
    Token: 2839,
  },
  {
    Symbol: "MAHINDCIE",
    Token: 14937,
  },
  {
    Symbol: "MAHKTECH",
    Token: 7074,
  },
  {
    Symbol: "MAHLIFE",
    Token: 8050,
  },
  {
    Symbol: "MAHLOG",
    Token: 385,
  },
  {
    Symbol: "MAHSCOOTER",
    Token: 2085,
  },
  {
    Symbol: "MAHSEAMLES",
    Token: 2088,
  },
  {
    Symbol: "MAITHANALL",
    Token: 24538,
  },
  {
    Symbol: "MAKS",
    Token: 11218,
  },
  {
    Symbol: "MALLCOM",
    Token: 7965,
  },
  {
    Symbol: "MALUPAPER",
    Token: 13352,
  },
  {
    Symbol: "MAM150ETF",
    Token: 8413,
  },
  {
    Symbol: "MAMFGETF",
    Token: 7979,
  },
  {
    Symbol: "MAN50ETF",
    Token: 6353,
  },
  {
    Symbol: "MANAKALUCO",
    Token: 7420,
  },
  {
    Symbol: "MANAKCOAT",
    Token: 7413,
  },
  {
    Symbol: "MANAKSIA",
    Token: 15199,
  },
  {
    Symbol: "MANAKSTEEL",
    Token: 7463,
  },
  {
    Symbol: "MANALIPETC",
    Token: 13796,
  },
  {
    Symbol: "MANAPPURAM",
    Token: 19061,
  },
  {
    Symbol: "MANAV",
    Token: 21697,
  },
  {
    Symbol: "MANGALAM",
    Token: 11817,
  },
  {
    Symbol: "MANGCHEFER",
    Token: 15007,
  },
  {
    Symbol: "MANGLMCEM",
    Token: 2106,
  },
  {
    Symbol: "MANINDS",
    Token: 11884,
  },
  {
    Symbol: "MANINFRA",
    Token: 18226,
  },
  {
    Symbol: "MANOMAY",
    Token: 13753,
  },
  {
    Symbol: "MANORAMA",
    Token: 10227,
  },
  {
    Symbol: "MANORG",
    Token: 6428,
  },
  {
    Symbol: "MANUGRAPH",
    Token: 13572,
  },
  {
    Symbol: "MANV30F",
    Token: 14786,
  },
  {
    Symbol: "MANXT50",
    Token: 17181,
  },
  {
    Symbol: "MANYAVAR",
    Token: 8167,
  },
  {
    Symbol: "MAPMYINDIA",
    Token: 7227,
  },
  {
    Symbol: "MARALOVER",
    Token: 2112,
  },
  {
    Symbol: "MARATHON",
    Token: 18659,
  },
  {
    Symbol: "MARICO",
    Token: 4067,
  },
  {
    Symbol: "MARINE",
    Token: 1328,
  },
  {
    Symbol: "MARKSANS",
    Token: 10579,
  },
  {
    Symbol: "MARSHALL",
    Token: 6764,
  },
  {
    Symbol: "MARUTI",
    Token: 10999,
  },
  {
    Symbol: "MASFIN",
    Token: 199,
  },
  {
    Symbol: "MASKINVEST",
    Token: 18731,
  },
  {
    Symbol: "MASPTOP50",
    Token: 5782,
  },
  {
    Symbol: "MASTEK",
    Token: 2124,
  },
  {
    Symbol: "MATRIMONY",
    Token: 21726,
  },
  {
    Symbol: "MAWANASUG",
    Token: 17022,
  },
  {
    Symbol: "MAXHEALTH",
    Token: 22377,
  },
  {
    Symbol: "MAXIND",
    Token: 22428,
  },
  {
    Symbol: "MAXVIL",
    Token: 17468,
  },
  {
    Symbol: "MAYURUNIQ",
    Token: 28906,
  },
  {
    Symbol: "MAZDA",
    Token: 18866,
  },
  {
    Symbol: "MAZDOCK",
    Token: 509,
  },
  {
    Symbol: "MBAPL",
    Token: 12686,
  },
  {
    Symbol: "MBLINFRA",
    Token: 18029,
  },
  {
    Symbol: "MCDOWELL-N",
    Token: 10447,
  },
  {
    Symbol: "MCL",
    Token: 22362,
  },
  {
    Symbol: "MCLEODRUSS",
    Token: 11944,
  },
  {
    Symbol: "MCON",
    Token: 14574,
  },
  {
    Symbol: "MCX",
    Token: 31181,
  },
  {
    Symbol: "MDL",
    Token: 2132,
  },
  {
    Symbol: "MEDANTA",
    Token: 11956,
  },
  {
    Symbol: "MEDICAMEQ",
    Token: 6278,
  },
  {
    Symbol: "MEDICO",
    Token: 9667,
  },
  {
    Symbol: "MEDPLUS",
    Token: 7254,
  },
  {
    Symbol: "MEGAFLEX",
    Token: 10971,
  },
  {
    Symbol: "MEGASOFT",
    Token: 14793,
  },
  {
    Symbol: "MEGASTAR",
    Token: 8153,
  },
  {
    Symbol: "MELSTAR",
    Token: 17950,
  },
  {
    Symbol: "MENONBE",
    Token: 6961,
  },
  {
    Symbol: "MEP",
    Token: 8771,
  },
  {
    Symbol: "METROBRAND",
    Token: 7242,
  },
  {
    Symbol: "METROPOLIS",
    Token: 9581,
  },
  {
    Symbol: "MFL",
    Token: 5382,
  },
  {
    Symbol: "MFSL",
    Token: 2142,
  },
  {
    Symbol: "MGEL",
    Token: 1598,
  },
  {
    Symbol: "MGL",
    Token: 17534,
  },
  {
    Symbol: "MHHL",
    Token: 1426,
  },
  {
    Symbol: "MHLXMIRU",
    Token: 7886,
  },
  {
    Symbol: "MHRIL",
    Token: 17333,
  },
  {
    Symbol: "MICEL",
    Token: 7169,
  },
  {
    Symbol: "MID150BEES",
    Token: 8506,
  },
  {
    Symbol: "MIDHANI",
    Token: 2463,
  },
  {
    Symbol: "MILTON",
    Token: 159,
  },
  {
    Symbol: "MINDACORP",
    Token: 25897,
  },
  {
    Symbol: "MINDPOOL",
    Token: 8900,
  },
  {
    Symbol: "MINDSPACE",
    Token: 22308,
  },
  {
    Symbol: "MINDTECK",
    Token: 18049,
  },
  {
    Symbol: "MIRCELECTR",
    Token: 2202,
  },
  {
    Symbol: "MIRZAINT",
    Token: 4394,
  },
  {
    Symbol: "MITCON",
    Token: 8469,
  },
  {
    Symbol: "MITTAL",
    Token: 18666,
  },
  {
    Symbol: "MKPL",
    Token: 20509,
  },
  {
    Symbol: "MMFL",
    Token: 13844,
  },
  {
    Symbol: "MMP",
    Token: 16395,
  },
  {
    Symbol: "MMTC",
    Token: 17957,
  },
  {
    Symbol: "MODIRUBBER",
    Token: 6934,
  },
  {
    Symbol: "MODISONLTD",
    Token: 3316,
  },
  {
    Symbol: "MOGSEC",
    Token: 1507,
  },
  {
    Symbol: "MOHEALTH",
    Token: 10508,
  },
  {
    Symbol: "MOHITIND",
    Token: 29423,
  },
  {
    Symbol: "MOIL",
    Token: 20830,
  },
  {
    Symbol: "MOKSH",
    Token: 3586,
  },
  {
    Symbol: "MOL",
    Token: 5394,
  },
  {
    Symbol: "MOLDTECH",
    Token: 17625,
  },
  {
    Symbol: "MOLDTKPAC",
    Token: 6713,
  },
  {
    Symbol: "MOLOWVOL",
    Token: 8654,
  },
  {
    Symbol: "MOM100",
    Token: 21423,
  },
  {
    Symbol: "MOM50",
    Token: 19289,
  },
  {
    Symbol: "MOMENTUM",
    Token: 10693,
  },
  {
    Symbol: "MOMOMENTUM",
    Token: 8182,
  },
  {
    Symbol: "MON100",
    Token: 22739,
  },
  {
    Symbol: "MONARCH",
    Token: 7679,
  },
  {
    Symbol: "MONQ50",
    Token: 7422,
  },
  {
    Symbol: "MONTECARLO",
    Token: 5938,
  },
  {
    Symbol: "MOQUALITY",
    Token: 10822,
  },
  {
    Symbol: "MORARJEE",
    Token: 28877,
  },
  {
    Symbol: "MOREPENLAB",
    Token: 2259,
  },
  {
    Symbol: "MOS",
    Token: 15051,
  },
  {
    Symbol: "MOTHERSON",
    Token: 4204,
  },
  {
    Symbol: "MOTILALOFS",
    Token: 14947,
  },
  {
    Symbol: "MOTOGENFIN",
    Token: 8793,
  },
  {
    Symbol: "MOVALUE",
    Token: 10825,
  },
  {
    Symbol: "MOXSH",
    Token: 13502,
  },
  {
    Symbol: "MPHASIS",
    Token: 4503,
  },
  {
    Symbol: "MPSLTD",
    Token: 10578,
  },
  {
    Symbol: "MPTODAY",
    Token: 21792,
  },
  {
    Symbol: "MRF",
    Token: 2277,
  },
  {
    Symbol: "MRO",
    Token: 5130,
  },
  {
    Symbol: "MRO-TEK",
    Token: 8998,
  },
  {
    Symbol: "MRPL",
    Token: 2283,
  },
  {
    Symbol: "MSPL",
    Token: 11919,
  },
  {
    Symbol: "MSTCLTD",
    Token: 9356,
  },
  {
    Symbol: "MSUMI",
    Token: 8596,
  },
  {
    Symbol: "MTARTECH",
    Token: 2709,
  },
  {
    Symbol: "MTEDUCARE",
    Token: 31413,
  },
  {
    Symbol: "MTNL",
    Token: 2294,
  },
  {
    Symbol: "MUKANDLTD",
    Token: 11325,
  },
  {
    Symbol: "MUKTAARTS",
    Token: 8687,
  },
  {
    Symbol: "MUNJALAU",
    Token: 13511,
  },
  {
    Symbol: "MUNJALSHOW",
    Token: 2307,
  },
  {
    Symbol: "MURUDCERA",
    Token: 2313,
  },
  {
    Symbol: "MUTHOOTCAP",
    Token: 10415,
  },
  {
    Symbol: "MUTHOOTFIN",
    Token: 23650,
  },
  {
    Symbol: "MWL",
    Token: 10311,
  },
  {
    Symbol: "N1NSETEST",
    Token: 12848,
  },
  {
    Symbol: "NABARD",
    Token: 20032,
  },
  {
    Symbol: "NABARD",
    Token: 20034,
  },
  {
    Symbol: "NACLIND",
    Token: 20425,
  },
  {
    Symbol: "NAGAFERT",
    Token: 17295,
  },
  {
    Symbol: "NAGREEKCAP",
    Token: 14942,
  },
  {
    Symbol: "NAGREEKEXP",
    Token: 14702,
  },
  {
    Symbol: "NAHARCAP",
    Token: 15360,
  },
  {
    Symbol: "NAHARINDUS",
    Token: 13106,
  },
  {
    Symbol: "NAHARPOLY",
    Token: 14445,
  },
  {
    Symbol: "NAHARSPING",
    Token: 14440,
  },
  {
    Symbol: "NAM-INDIA",
    Token: 357,
  },
  {
    Symbol: "NARMADA",
    Token: 11627,
  },
  {
    Symbol: "NATCOPHARM",
    Token: 3918,
  },
  {
    Symbol: "NATHBIOGEN",
    Token: 11065,
  },
  {
    Symbol: "NATIONALUM",
    Token: 6364,
  },
  {
    Symbol: "NATNLSTEEL",
    Token: 8682,
  },
  {
    Symbol: "NAUKRI",
    Token: 13751,
  },
  {
    Symbol: "NAVA",
    Token: 4014,
  },
  {
    Symbol: "NAVIFIN",
    Token: 9842,
  },
  {
    Symbol: "NAVIFIN",
    Token: 9844,
  },
  {
    Symbol: "NAVIFIN",
    Token: 9849,
  },
  {
    Symbol: "NAVIFIN",
    Token: 9852,
  },
  {
    Symbol: "NAVINFLUOR",
    Token: 14672,
  },
  {
    Symbol: "NAVKARCORP",
    Token: 10557,
  },
  {
    Symbol: "NAVNETEDUL",
    Token: 2385,
  },
  {
    Symbol: "NAZARA",
    Token: 2987,
  },
  {
    Symbol: "NBCC",
    Token: 31415,
  },
  {
    Symbol: "NBIFIN",
    Token: 19111,
  },
  {
    Symbol: "NCC",
    Token: 2319,
  },
  {
    Symbol: "NCLIND",
    Token: 14490,
  },
  {
    Symbol: "NDGL",
    Token: 18371,
  },
  {
    Symbol: "NDL",
    Token: 31258,
  },
  {
    Symbol: "NDLVENTURE",
    Token: 14547,
  },
  {
    Symbol: "NDRAUTO",
    Token: 22255,
  },
  {
    Symbol: "NDTV",
    Token: 11427,
  },
  {
    Symbol: "NECCLTD",
    Token: 13522,
  },
  {
    Symbol: "NECLIFE",
    Token: 11927,
  },
  {
    Symbol: "NELCAST",
    Token: 14761,
  },
  {
    Symbol: "NELCO",
    Token: 2388,
  },
  {
    Symbol: "NEOGEN",
    Token: 9917,
  },
  {
    Symbol: "NESCO",
    Token: 15409,
  },
  {
    Symbol: "NESTLEIND",
    Token: 17963,
  },
  {
    Symbol: "NETF",
    Token: 7838,
  },
  {
    Symbol: "NETWORK18",
    Token: 14111,
  },
  {
    Symbol: "NEULANDLAB",
    Token: 2406,
  },
  {
    Symbol: "NEWGEN",
    Token: 1164,
  },
  {
    Symbol: "NEXTMEDIA",
    Token: 9867,
  },
  {
    Symbol: "NFL",
    Token: 13925,
  },
  {
    Symbol: "NGIL",
    Token: 5404,
  },
  {
    Symbol: "NGLFINE",
    Token: 10277,
  },
  {
    Symbol: "NH",
    Token: 11840,
  },
  {
    Symbol: "NHAI",
    Token: 31040,
  },
  {
    Symbol: "NHAI",
    Token: 176,
  },
  {
    Symbol: "NHAI",
    Token: 180,
  },
  {
    Symbol: "NHAI",
    Token: 186,
  },
  {
    Symbol: "NHAI",
    Token: 192,
  },
  {
    Symbol: "NHAI",
    Token: 11949,
  },
  {
    Symbol: "NHAI",
    Token: 11952,
  },
  {
    Symbol: "NHAI",
    Token: 11954,
  },
  {
    Symbol: "NHAI",
    Token: 12003,
  },
  {
    Symbol: "NHAI",
    Token: 14497,
  },
  {
    Symbol: "NHAI",
    Token: 14499,
  },
  {
    Symbol: "NHAI",
    Token: 14522,
  },
  {
    Symbol: "NHAI",
    Token: 14529,
  },
  {
    Symbol: "NHBTF2014",
    Token: 31965,
  },
  {
    Symbol: "NHBTF2014",
    Token: 31966,
  },
  {
    Symbol: "NHBTF2014",
    Token: 31967,
  },
  {
    Symbol: "NHBTF2014",
    Token: 31968,
  },
  {
    Symbol: "NHBTF2014",
    Token: 31969,
  },
  {
    Symbol: "NHBTF2014",
    Token: 31970,
  },
  {
    Symbol: "NHBTF2023",
    Token: 1754,
  },
  {
    Symbol: "NHBTF2023",
    Token: 1758,
  },
  {
    Symbol: "NHBTF2023",
    Token: 1761,
  },
  {
    Symbol: "NHBTF2023",
    Token: 1763,
  },
  {
    Symbol: "NHBTF2023",
    Token: 1765,
  },
  {
    Symbol: "NHBTF2023",
    Token: 1767,
  },
  {
    Symbol: "NHIT",
    Token: 6531,
  },
  {
    Symbol: "NHIT",
    Token: 11658,
  },
  {
    Symbol: "NHIT",
    Token: 11665,
  },
  {
    Symbol: "NHIT",
    Token: 11669,
  },
  {
    Symbol: "NHPC",
    Token: 17400,
  },
  {
    Symbol: "NHPC",
    Token: 31482,
  },
  {
    Symbol: "NHPC",
    Token: 31483,
  },
  {
    Symbol: "NHPC",
    Token: 31484,
  },
  {
    Symbol: "NHPC",
    Token: 31485,
  },
  {
    Symbol: "NHPC",
    Token: 31486,
  },
  {
    Symbol: "NHPC",
    Token: 31487,
  },
  {
    Symbol: "NIACL",
    Token: 399,
  },
  {
    Symbol: "NIBL",
    Token: 29737,
  },
  {
    Symbol: "NIDAN",
    Token: 6592,
  },
  {
    Symbol: "NIF100BEES",
    Token: 29577,
  },
  {
    Symbol: "NIFTYBEES",
    Token: 10576,
  },
  {
    Symbol: "NIFTYQLITY",
    Token: 10690,
  },
  {
    Symbol: "NIITLTD",
    Token: 11522,
  },
  {
    Symbol: "NILAINFRA",
    Token: 9253,
  },
  {
    Symbol: "NILASPACES",
    Token: 7411,
  },
  {
    Symbol: "NILKAMAL",
    Token: 2421,
  },
  {
    Symbol: "NINSYS",
    Token: 14197,
  },
  {
    Symbol: "NIPPOBATRY",
    Token: 6782,
  },
  {
    Symbol: "NIRAJ",
    Token: 255,
  },
  {
    Symbol: "NIRMAN",
    Token: 14722,
  },
  {
    Symbol: "NITCO",
    Token: 13300,
  },
  {
    Symbol: "NITINSPIN",
    Token: 13175,
  },
  {
    Symbol: "NITIRAJ",
    Token: 3247,
  },
  {
    Symbol: "NKIND",
    Token: 2439,
  },
  {
    Symbol: "NLCINDIA",
    Token: 8585,
  },
  {
    Symbol: "NMDC",
    Token: 15332,
  },
  {
    Symbol: "NOCIL",
    Token: 2442,
  },
  {
    Symbol: "NOIDATOLL",
    Token: 10786,
  },
  {
    Symbol: "NOVARTIND",
    Token: 9007,
  },
  {
    Symbol: "NPBET",
    Token: 12978,
  },
  {
    Symbol: "NPST",
    Token: 5299,
  },
  {
    Symbol: "NRAIL",
    Token: 20314,
  },
  {
    Symbol: "NRBBEARING",
    Token: 7553,
  },
  {
    Symbol: "NRL",
    Token: 13675,
  },
  {
    Symbol: "NSIL",
    Token: 11239,
  },
  {
    Symbol: "NSLNISP",
    Token: 14180,
  },
  {
    Symbol: "NTPC",
    Token: 11630,
  },
  {
    Symbol: "NTPC",
    Token: 31758,
  },
  {
    Symbol: "NTPC",
    Token: 31760,
  },
  {
    Symbol: "NTPC",
    Token: 31762,
  },
  {
    Symbol: "NTPC",
    Token: 31764,
  },
  {
    Symbol: "NTPC",
    Token: 31766,
  },
  {
    Symbol: "NTPC",
    Token: 31768,
  },
  {
    Symbol: "NTPC",
    Token: 7377,
  },
  {
    Symbol: "NTPC",
    Token: 10737,
  },
  {
    Symbol: "NTPC",
    Token: 10741,
  },
  {
    Symbol: "NTPC",
    Token: 10744,
  },
  {
    Symbol: "NTPC",
    Token: 10746,
  },
  {
    Symbol: "NTPC",
    Token: 10749,
  },
  {
    Symbol: "NTPC",
    Token: 10751,
  },
  {
    Symbol: "NUCLEUS",
    Token: 10791,
  },
  {
    Symbol: "NURECA",
    Token: 2350,
  },
  {
    Symbol: "NUVOCO",
    Token: 5426,
  },
  {
    Symbol: "NV20BEES",
    Token: 9847,
  },
  {
    Symbol: "NYKAA",
    Token: 6545,
  },
  {
    Symbol: "OAL",
    Token: 10768,
  },
  {
    Symbol: "OBCL",
    Token: 8797,
  },
  {
    Symbol: "OBEROIRLTY",
    Token: 20242,
  },
  {
    Symbol: "OCCL",
    Token: 12231,
  },
  {
    Symbol: "OFSS",
    Token: 10738,
  },
  {
    Symbol: "OIL",
    Token: 17438,
  },
  {
    Symbol: "OILCOUNTUB",
    Token: 2472,
  },
  {
    Symbol: "OLECTRA",
    Token: 10637,
  },
  {
    Symbol: "OMAXAUTO",
    Token: 10922,
  },
  {
    Symbol: "OMAXE",
    Token: 14853,
  },
  {
    Symbol: "OMFURN",
    Token: 117,
  },
  {
    Symbol: "OMINFRAL",
    Token: 24231,
  },
  {
    Symbol: "OMKARCHEM",
    Token: 13515,
  },
  {
    Symbol: "ONELIFECAP",
    Token: 25492,
  },
  {
    Symbol: "ONEPOINT",
    Token: 9939,
  },
  {
    Symbol: "ONGC",
    Token: 2475,
  },
  {
    Symbol: "ONMOBILE",
    Token: 15278,
  },
  {
    Symbol: "ONWARDTEC",
    Token: 2481,
  },
  {
    Symbol: "OPTIEMUS",
    Token: 21469,
  },
  {
    Symbol: "ORBTEXP",
    Token: 31475,
  },
  {
    Symbol: "ORCHPHARMA",
    Token: 929,
  },
  {
    Symbol: "ORICONENT",
    Token: 10159,
  },
  {
    Symbol: "ORIENTABRA",
    Token: 13111,
  },
  {
    Symbol: "ORIENTALTL",
    Token: 14346,
  },
  {
    Symbol: "ORIENTBELL",
    Token: 14278,
  },
  {
    Symbol: "ORIENTCEM",
    Token: 30089,
  },
  {
    Symbol: "ORIENTELEC",
    Token: 2972,
  },
  {
    Symbol: "ORIENTHOT",
    Token: 2493,
  },
  {
    Symbol: "ORIENTLTD",
    Token: 18208,
  },
  {
    Symbol: "ORIENTPPR",
    Token: 2496,
  },
  {
    Symbol: "ORISSAMINE",
    Token: 19931,
  },
  {
    Symbol: "ORTEL",
    Token: 13321,
  },
  {
    Symbol: "ORTINLAB",
    Token: 2979,
  },
  {
    Symbol: "OSEINTRUST",
    Token: 10435,
  },
  {
    Symbol: "OSIAHYPER",
    Token: 12635,
  },
  {
    Symbol: "OSWALAGRO",
    Token: 2514,
  },
  {
    Symbol: "OSWALSEEDS",
    Token: 14305,
  },
  {
    Symbol: "PAGEIND",
    Token: 14413,
  },
  {
    Symbol: "PAISALO",
    Token: 25468,
  },
  {
    Symbol: "PALASHSECU",
    Token: 21383,
  },
  {
    Symbol: "PALREDTEC",
    Token: 17062,
  },
  {
    Symbol: "PANACEABIO",
    Token: 4055,
  },
  {
    Symbol: "PANACHE",
    Token: 16355,
  },
  {
    Symbol: "PANAMAPET",
    Token: 25392,
  },
  {
    Symbol: "PANSARI",
    Token: 6141,
  },
  {
    Symbol: "PAR",
    Token: 5631,
  },
  {
    Symbol: "PARACABLES",
    Token: 13951,
  },
  {
    Symbol: "PARADEEP",
    Token: 9741,
  },
  {
    Symbol: "PARAGMILK",
    Token: 17130,
  },
  {
    Symbol: "PARAS",
    Token: 5911,
  },
  {
    Symbol: "PARASPETRO",
    Token: 8975,
  },
  {
    Symbol: "PARIN",
    Token: 5460,
  },
  {
    Symbol: "PARSVNATH",
    Token: 13791,
  },
  {
    Symbol: "PARTYCRUS",
    Token: 2599,
  },
  {
    Symbol: "PASHUPATI",
    Token: 21657,
  },
  {
    Symbol: "PASUPTAC",
    Token: 6045,
  },
  {
    Symbol: "PATANJALI",
    Token: 17030,
  },
  {
    Symbol: "PATELENG",
    Token: 11699,
  },
  {
    Symbol: "PATINTLOG",
    Token: 15219,
  },
  {
    Symbol: "PATTECH",
    Token: 15137,
  },
  {
    Symbol: "PAVNAIND",
    Token: 2633,
  },
  {
    Symbol: "PAYTM",
    Token: 6705,
  },
  {
    Symbol: "PCBL",
    Token: 2649,
  },
  {
    Symbol: "PCHFL",
    Token: 5120,
  },
  {
    Symbol: "PCHFL",
    Token: 5123,
  },
  {
    Symbol: "PCHFL",
    Token: 5126,
  },
  {
    Symbol: "PCHFL",
    Token: 5129,
  },
  {
    Symbol: "PCHFL",
    Token: 5132,
  },
  {
    Symbol: "PCHFL",
    Token: 5134,
  },
  {
    Symbol: "PCHFL",
    Token: 5145,
  },
  {
    Symbol: "PCHFL",
    Token: 5151,
  },
  {
    Symbol: "PCHFL",
    Token: 5155,
  },
  {
    Symbol: "PCHFL",
    Token: 5160,
  },
  {
    Symbol: "PCJEWELLER",
    Token: 29124,
  },
  {
    Symbol: "PDMJEPAPER",
    Token: 15377,
  },
  {
    Symbol: "PDSL",
    Token: 5264,
  },
  {
    Symbol: "PEARLPOLY",
    Token: 2610,
  },
  {
    Symbol: "PEL",
    Token: 2412,
  },
  {
    Symbol: "PENIND",
    Token: 20621,
  },
  {
    Symbol: "PENINLAND",
    Token: 2256,
  },
  {
    Symbol: "PENTAGOLD",
    Token: 13513,
  },
  {
    Symbol: "PERFECT",
    Token: 11250,
  },
  {
    Symbol: "PERSISTENT",
    Token: 18365,
  },
  {
    Symbol: "PETRONET",
    Token: 11351,
  },
  {
    Symbol: "PFC",
    Token: 14299,
  },
  {
    Symbol: "PFC",
    Token: 19972,
  },
  {
    Symbol: "PFC",
    Token: 19974,
  },
  {
    Symbol: "PFC",
    Token: 19976,
  },
  {
    Symbol: "PFC",
    Token: 20022,
  },
  {
    Symbol: "PFC",
    Token: 20024,
  },
  {
    Symbol: "PFC",
    Token: 20026,
  },
  {
    Symbol: "PFC",
    Token: 20028,
  },
  {
    Symbol: "PFIZER",
    Token: 2643,
  },
  {
    Symbol: "PFOCUS",
    Token: 13496,
  },
  {
    Symbol: "PFS",
    Token: 22602,
  },
  {
    Symbol: "PGEL",
    Token: 25358,
  },
  {
    Symbol: "PGHH",
    Token: 2535,
  },
  {
    Symbol: "PGHL",
    Token: 940,
  },
  {
    Symbol: "PGIL",
    Token: 14260,
  },
  {
    Symbol: "PGINVIT",
    Token: 3494,
  },
  {
    Symbol: "PHANTOMFX",
    Token: 11612,
  },
  {
    Symbol: "PHARMABEES",
    Token: 4973,
  },
  {
    Symbol: "PHOENIXLTD",
    Token: 14552,
  },
  {
    Symbol: "PIDILITIND",
    Token: 2664,
  },
  {
    Symbol: "PIGL",
    Token: 2738,
  },
  {
    Symbol: "PIIND",
    Token: 24184,
  },
  {
    Symbol: "PILANIINVS",
    Token: 11445,
  },
  {
    Symbol: "PILITA",
    Token: 30835,
  },
  {
    Symbol: "PIONEEREMB",
    Token: 13463,
  },
  {
    Symbol: "PITTIENG",
    Token: 14134,
  },
  {
    Symbol: "PIXTRANS",
    Token: 9087,
  },
  {
    Symbol: "PKTEA",
    Token: 10318,
  },
  {
    Symbol: "PLASTIBLEN",
    Token: 13920,
  },
  {
    Symbol: "PNB",
    Token: 10666,
  },
  {
    Symbol: "PNBGILTS",
    Token: 8736,
  },
  {
    Symbol: "PNBHOUSING",
    Token: 18908,
  },
  {
    Symbol: "PNC",
    Token: 9342,
  },
  {
    Symbol: "PNCINFRA",
    Token: 9385,
  },
  {
    Symbol: "POCL",
    Token: 14385,
  },
  {
    Symbol: "PODDARHOUS",
    Token: 20450,
  },
  {
    Symbol: "PODDARMENT",
    Token: 19036,
  },
  {
    Symbol: "POKARNA",
    Token: 17651,
  },
  {
    Symbol: "POLICYBZR",
    Token: 6656,
  },
  {
    Symbol: "POLYCAB",
    Token: 9590,
  },
  {
    Symbol: "POLYMED",
    Token: 25718,
  },
  {
    Symbol: "POLYPLEX",
    Token: 2687,
  },
  {
    Symbol: "PONNIERODE",
    Token: 10661,
  },
  {
    Symbol: "POONAWALLA",
    Token: 11403,
  },
  {
    Symbol: "POONAWALLA",
    Token: 9950,
  },
  {
    Symbol: "POONAWALLA",
    Token: 9966,
  },
  {
    Symbol: "POONAWALLA",
    Token: 9969,
  },
  {
    Symbol: "POONAWALLA",
    Token: 9975,
  },
  {
    Symbol: "POONAWALLA",
    Token: 9982,
  },
  {
    Symbol: "POWERGRID",
    Token: 14977,
  },
  {
    Symbol: "POWERINDIA",
    Token: 18457,
  },
  {
    Symbol: "POWERMECH",
    Token: 10473,
  },
  {
    Symbol: "PPAP",
    Token: 15209,
  },
  {
    Symbol: "PPL",
    Token: 10297,
  },
  {
    Symbol: "PPLPHARMA",
    Token: 11571,
  },
  {
    Symbol: "PRAENG",
    Token: 13941,
  },
  {
    Symbol: "PRAJIND",
    Token: 2705,
  },
  {
    Symbol: "PRAKASH",
    Token: 2708,
  },
  {
    Symbol: "PRAKASHSTL",
    Token: 19599,
  },
  {
    Symbol: "PRAXIS",
    Token: 1204,
  },
  {
    Symbol: "PRECAM",
    Token: 12603,
  },
  {
    Symbol: "PRECISION",
    Token: 7950,
  },
  {
    Symbol: "PRECOT",
    Token: 2711,
  },
  {
    Symbol: "PRECWIRE",
    Token: 2717,
  },
  {
    Symbol: "PREMEXPLN",
    Token: 17397,
  },
  {
    Symbol: "PREMIERPOL",
    Token: 3908,
  },
  {
    Symbol: "PRESSMN",
    Token: 11671,
  },
  {
    Symbol: "PRESTIGE",
    Token: 20302,
  },
  {
    Symbol: "PRICOLLTD",
    Token: 19631,
  },
  {
    Symbol: "PRIMESECU",
    Token: 11864,
  },
  {
    Symbol: "PRINCEPIPE",
    Token: 16045,
  },
  {
    Symbol: "PRITI",
    Token: 8304,
  },
  {
    Symbol: "PRITIKA",
    Token: 12971,
  },
  {
    Symbol: "PRITIKAUTO",
    Token: 5292,
  },
  {
    Symbol: "PRIVISCL",
    Token: 8825,
  },
  {
    Symbol: "PROLIFE",
    Token: 19352,
  },
  {
    Symbol: "PROPEQUITY",
    Token: 8735,
  },
  {
    Symbol: "PROZONINTU",
    Token: 28859,
  },
  {
    Symbol: "PRSMJOHNSN",
    Token: 2739,
  },
  {
    Symbol: "PRUDENT",
    Token: 9553,
  },
  {
    Symbol: "PSB",
    Token: 21001,
  },
  {
    Symbol: "PSPPROJECT",
    Token: 20877,
  },
  {
    Symbol: "PSUBANKICI",
    Token: 14584,
  },
  {
    Symbol: "PSUBNKBEES",
    Token: 15032,
  },
  {
    Symbol: "PTC",
    Token: 11355,
  },
  {
    Symbol: "PTL",
    Token: 14101,
  },
  {
    Symbol: "PULZ",
    Token: 507,
  },
  {
    Symbol: "PUNJABCHEM",
    Token: 4344,
  },
  {
    Symbol: "PURVA",
    Token: 14922,
  },
  {
    Symbol: "PVP",
    Token: 4010,
  },
  {
    Symbol: "PVR",
    Token: 13147,
  },
  {
    Symbol: "QFIL",
    Token: 14613,
  },
  {
    Symbol: "QGOLDHALF",
    Token: 15330,
  },
  {
    Symbol: "QMSMEDI",
    Token: 11467,
  },
  {
    Symbol: "QNIFTY",
    Token: 16819,
  },
  {
    Symbol: "QUADPRO",
    Token: 5870,
  },
  {
    Symbol: "QUESS",
    Token: 17704,
  },
  {
    Symbol: "QUICKHEAL",
    Token: 13116,
  },
  {
    Symbol: "QUICKTOUCH",
    Token: 15294,
  },
  {
    Symbol: "RACE",
    Token: 15391,
  },
  {
    Symbol: "RADAAN",
    Token: 11268,
  },
  {
    Symbol: "RADHIKAJWE",
    Token: 10343,
  },
  {
    Symbol: "RADIANTCMS",
    Token: 13580,
  },
  {
    Symbol: "RADICO",
    Token: 10990,
  },
  {
    Symbol: "RADIOCITY",
    Token: 19877,
  },
  {
    Symbol: "RAILTEL",
    Token: 2431,
  },
  {
    Symbol: "RAIN",
    Token: 15337,
  },
  {
    Symbol: "RAINBOW",
    Token: 9408,
  },
  {
    Symbol: "RAJESHEXPO",
    Token: 7401,
  },
  {
    Symbol: "RAJMET",
    Token: 2168,
  },
  {
    Symbol: "RAJRATAN",
    Token: 18962,
  },
  {
    Symbol: "RAJRILTD",
    Token: 8428,
  },
  {
    Symbol: "RAJSREESUG",
    Token: 2809,
  },
  {
    Symbol: "RAJTV",
    Token: 14403,
  },
  {
    Symbol: "RALLIS",
    Token: 2816,
  },
  {
    Symbol: "RAMANEWS",
    Token: 13565,
  },
  {
    Symbol: "RAMAPHO",
    Token: 10568,
  },
  {
    Symbol: "RAMASTEEL",
    Token: 10300,
  },
  {
    Symbol: "RAMCOCEM",
    Token: 2043,
  },
  {
    Symbol: "RAMCOIND",
    Token: 4587,
  },
  {
    Symbol: "RAMCOSYS",
    Token: 7851,
  },
  {
    Symbol: "RAMKY",
    Token: 20134,
  },
  {
    Symbol: "RAMRAT",
    Token: 10485,
  },
  {
    Symbol: "RANASUG",
    Token: 2837,
  },
  {
    Symbol: "RANEENGINE",
    Token: 16751,
  },
  {
    Symbol: "RANEHOLDIN",
    Token: 2844,
  },
  {
    Symbol: "RATEGAIN",
    Token: 7177,
  },
  {
    Symbol: "RATNAMANI",
    Token: 13451,
  },
  {
    Symbol: "RAYMOND",
    Token: 2859,
  },
  {
    Symbol: "RBA",
    Token: 1494,
  },
  {
    Symbol: "RBL",
    Token: 16745,
  },
  {
    Symbol: "RBLBANK",
    Token: 18391,
  },
  {
    Symbol: "RBMINFRA",
    Token: 13570,
  },
  {
    Symbol: "RCF",
    Token: 2866,
  },
  {
    Symbol: "RECLTD",
    Token: 15355,
  },
  {
    Symbol: "RECLTD",
    Token: 29111,
  },
  {
    Symbol: "RECLTD",
    Token: 29614,
  },
  {
    Symbol: "RECLTD",
    Token: 30982,
  },
  {
    Symbol: "RECLTD",
    Token: 30984,
  },
  {
    Symbol: "RECLTD",
    Token: 30986,
  },
  {
    Symbol: "RECLTD",
    Token: 30988,
  },
  {
    Symbol: "RECLTD",
    Token: 30990,
  },
  {
    Symbol: "RECLTD",
    Token: 30992,
  },
  {
    Symbol: "RECLTD",
    Token: 2931,
  },
  {
    Symbol: "RECLTD",
    Token: 2933,
  },
  {
    Symbol: "RECLTD",
    Token: 2935,
  },
  {
    Symbol: "RECLTD",
    Token: 2941,
  },
  {
    Symbol: "RECLTD",
    Token: 2947,
  },
  {
    Symbol: "RECLTD",
    Token: 2953,
  },
  {
    Symbol: "RECLTD",
    Token: 19926,
  },
  {
    Symbol: "RECLTD",
    Token: 19924,
  },
  {
    Symbol: "REDINGTON",
    Token: 14255,
  },
  {
    Symbol: "REFEX",
    Token: 17764,
  },
  {
    Symbol: "REGENCERAM",
    Token: 9051,
  },
  {
    Symbol: "RELAXO",
    Token: 24225,
  },
  {
    Symbol: "RELCAPITAL",
    Token: 4692,
  },
  {
    Symbol: "RELCHEMQ",
    Token: 9652,
  },
  {
    Symbol: "RELIABLE",
    Token: 51,
  },
  {
    Symbol: "RELIANCE",
    Token: 2885,
  },
  {
    Symbol: "RELIGARE",
    Token: 15068,
  },
  {
    Symbol: "RELINFRA",
    Token: 553,
  },
  {
    Symbol: "REMSONSIND",
    Token: 3965,
  },
  {
    Symbol: "RENUKA",
    Token: 12026,
  },
  {
    Symbol: "REPCOHOME",
    Token: 29598,
  },
  {
    Symbol: "REPL",
    Token: 1480,
  },
  {
    Symbol: "REPRO",
    Token: 13126,
  },
  {
    Symbol: "RESPONIND",
    Token: 20323,
  },
  {
    Symbol: "REVATHI",
    Token: 11961,
  },
  {
    Symbol: "REXPIPES",
    Token: 5309,
  },
  {
    Symbol: "RGL",
    Token: 15129,
  },
  {
    Symbol: "RHFL",
    Token: 21737,
  },
  {
    Symbol: "RHIM",
    Token: 31163,
  },
  {
    Symbol: "RHL",
    Token: 15162,
  },
  {
    Symbol: "RICHA",
    Token: 8208,
  },
  {
    Symbol: "RICOAUTO",
    Token: 2909,
  },
  {
    Symbol: "RIIL",
    Token: 2912,
  },
  {
    Symbol: "RILINFRA",
    Token: 9854,
  },
  {
    Symbol: "RITCO",
    Token: 8944,
  },
  {
    Symbol: "RITES",
    Token: 3761,
  },
  {
    Symbol: "RITEZONE",
    Token: 11910,
  },
  {
    Symbol: "RKDL",
    Token: 20954,
  },
  {
    Symbol: "RKEC",
    Token: 1547,
  },
  {
    Symbol: "RKFORGE",
    Token: 11411,
  },
  {
    Symbol: "RMCL",
    Token: 4820,
  },
  {
    Symbol: "RMDRIP",
    Token: 21816,
  },
  {
    Symbol: "RML",
    Token: 11975,
  },
  {
    Symbol: "RNAVAL",
    Token: 1986,
  },
  {
    Symbol: "ROHLTD",
    Token: 13182,
  },
  {
    Symbol: "ROLEXRINGS",
    Token: 5279,
  },
  {
    Symbol: "ROLLT",
    Token: 19104,
  },
  {
    Symbol: "ROML",
    Token: 359,
  },
  {
    Symbol: "ROSSARI",
    Token: 19410,
  },
  {
    Symbol: "ROSSELLIND",
    Token: 28913,
  },
  {
    Symbol: "ROTO",
    Token: 9049,
  },
  {
    Symbol: "ROUTE",
    Token: 128,
  },
  {
    Symbol: "RPGLIFE",
    Token: 16725,
  },
  {
    Symbol: "RPOWER",
    Token: 15259,
  },
  {
    Symbol: "RPPINFRA",
    Token: 20760,
  },
  {
    Symbol: "RPPL",
    Token: 6913,
  },
  {
    Symbol: "RPSGVENT",
    Token: 8119,
  },
  {
    Symbol: "RSSOFTWARE",
    Token: 8426,
  },
  {
    Symbol: "RSWM",
    Token: 2794,
  },
  {
    Symbol: "RSYSTEMS",
    Token: 13414,
  },
  {
    Symbol: "RTNINDIA",
    Token: 27297,
  },
  {
    Symbol: "RTNPOWER",
    Token: 17520,
  },
  {
    Symbol: "RUBYMILLS",
    Token: 2939,
  },
  {
    Symbol: "RUCHINFRA",
    Token: 8423,
  },
  {
    Symbol: "RUCHIRA",
    Token: 13821,
  },
  {
    Symbol: "RUPA",
    Token: 25724,
  },
  {
    Symbol: "RUSHIL",
    Token: 24595,
  },
  {
    Symbol: "RUSTOMJEE",
    Token: 12219,
  },
  {
    Symbol: "RVHL",
    Token: 1565,
  },
  {
    Symbol: "RVNL",
    Token: 9552,
  },
  {
    Symbol: "S&SPOWER",
    Token: 8733,
  },
  {
    Symbol: "SABAR",
    Token: 10982,
  },
  {
    Symbol: "SABTN",
    Token: 15060,
  },
  {
    Symbol: "SADBHAV",
    Token: 13236,
  },
  {
    Symbol: "SADBHIN",
    Token: 10618,
  },
  {
    Symbol: "SADHNANIQ",
    Token: 15343,
  },
  {
    Symbol: "SAFARI",
    Token: 13035,
  },
  {
    Symbol: "SAGARDEEP",
    Token: 8175,
  },
  {
    Symbol: "SAGCEM",
    Token: 14068,
  },
  {
    Symbol: "SAH",
    Token: 13689,
  },
  {
    Symbol: "SAHYADRI",
    Token: 14900,
  },
  {
    Symbol: "SAIL",
    Token: 2963,
  },
  {
    Symbol: "SAKAR",
    Token: 9539,
  },
  {
    Symbol: "SAKHTISUG",
    Token: 2969,
  },
  {
    Symbol: "SAKSOFT",
    Token: 11794,
  },
  {
    Symbol: "SAKUMA",
    Token: 13251,
  },
  {
    Symbol: "SALASAR",
    Token: 21362,
  },
  {
    Symbol: "SALONA",
    Token: 17351,
  },
  {
    Symbol: "SALSTEEL",
    Token: 11634,
  },
  {
    Symbol: "SALZERELEC",
    Token: 11399,
  },
  {
    Symbol: "SAMBHAAV",
    Token: 4127,
  },
  {
    Symbol: "SANCO",
    Token: 14630,
  },
  {
    Symbol: "SANDESH",
    Token: 2988,
  },
  {
    Symbol: "SANDHAR",
    Token: 2397,
  },
  {
    Symbol: "SANGAMIND",
    Token: 4184,
  },
  {
    Symbol: "SANGHIIND",
    Token: 2997,
  },
  {
    Symbol: "SANGHVIMOV",
    Token: 14058,
  },
  {
    Symbol: "SANGINITA",
    Token: 11032,
  },
  {
    Symbol: "SANOFI",
    Token: 1442,
  },
  {
    Symbol: "SANSERA",
    Token: 5751,
  },
  {
    Symbol: "SAPPHIRE",
    Token: 6718,
  },
  {
    Symbol: "SARDAEN",
    Token: 17758,
  },
  {
    Symbol: "SAREGAMA",
    Token: 4892,
  },
  {
    Symbol: "SARLAPOLY",
    Token: 14043,
  },
  {
    Symbol: "SARVESHWAR",
    Token: 12913,
  },
  {
    Symbol: "SASKEN",
    Token: 11983,
  },
  {
    Symbol: "SASTASUNDR",
    Token: 20063,
  },
  {
    Symbol: "SATIA",
    Token: 11045,
  },
  {
    Symbol: "SATIN",
    Token: 10453,
  },
  {
    Symbol: "SATINDLTD",
    Token: 12015,
  },
  {
    Symbol: "SBC",
    Token: 6792,
  },
  {
    Symbol: "SBCL",
    Token: 4656,
  },
  {
    Symbol: "SBGLP",
    Token: 14139,
  },
  {
    Symbol: "SBICARD",
    Token: 17971,
  },
  {
    Symbol: "SBIETFCON",
    Token: 5168,
  },
  {
    Symbol: "SBIETFIT",
    Token: 740,
  },
  {
    Symbol: "SBIETFPB",
    Token: 722,
  },
  {
    Symbol: "SBIETFQLTY",
    Token: 7218,
  },
  {
    Symbol: "SBILIFE",
    Token: 21808,
  },
  {
    Symbol: "SBIN",
    Token: 3045,
  },
  {
    Symbol: "SCAPDVR",
    Token: 17,
  },
  {
    Symbol: "SCHAEFFLER",
    Token: 1011,
  },
  {
    Symbol: "SCHAND",
    Token: 20698,
  },
  {
    Symbol: "SCHNEIDER",
    Token: 31234,
  },
  {
    Symbol: "SCI",
    Token: 3048,
  },
  {
    Symbol: "SCPL",
    Token: 12072,
  },
  {
    Symbol: "SDBL",
    Token: 1338,
  },
  {
    Symbol: "SDL24BEES",
    Token: 1143,
  },
  {
    Symbol: "SDL26BEES",
    Token: 3022,
  },
  {
    Symbol: "SEAMECLTD",
    Token: 2616,
  },
  {
    Symbol: "SECL",
    Token: 13025,
  },
  {
    Symbol: "SECURCRED",
    Token: 11520,
  },
  {
    Symbol: "SECURKLOUD",
    Token: 11058,
  },
  {
    Symbol: "SEJALLTD",
    Token: 7094,
  },
  {
    Symbol: "SELAN",
    Token: 13598,
  },
  {
    Symbol: "SELMC",
    Token: 6274,
  },
  {
    Symbol: "SEPC",
    Token: 15308,
  },
  {
    Symbol: "SEPOWER",
    Token: 27303,
  },
  {
    Symbol: "SEQUENT",
    Token: 14296,
  },
  {
    Symbol: "SERVOTECH",
    Token: 5511,
  },
  {
    Symbol: "SESHAPAPER",
    Token: 3066,
  },
  {
    Symbol: "SETCO",
    Token: 17518,
  },
  {
    Symbol: "SETF10GILT",
    Token: 17395,
  },
  {
    Symbol: "SETFGOLD",
    Token: 17272,
  },
  {
    Symbol: "SETFNIF50",
    Token: 10176,
  },
  {
    Symbol: "SETFNIFBK",
    Token: 7361,
  },
  {
    Symbol: "SETFNN50",
    Token: 7353,
  },
  {
    Symbol: "SEYAIND",
    Token: 10828,
  },
  {
    Symbol: "SFL",
    Token: 19184,
  },
  {
    Symbol: "SGBAPR28I",
    Token: 18862,
  },
  {
    Symbol: "SGBAUG24",
    Token: 18429,
  },
  {
    Symbol: "SGBAUG27",
    Token: 12904,
  },
  {
    Symbol: "SGBAUG28V",
    Token: 22385,
  },
  {
    Symbol: "SGBAUG29V",
    Token: 5455,
  },
  {
    Symbol: "SGBAUG30",
    Token: 11192,
  },
  {
    Symbol: "SGBD29VIII",
    Token: 7098,
  },
  {
    Symbol: "SGBDC27VII",
    Token: 15432,
  },
  {
    Symbol: "SGBDE30III",
    Token: 13642,
  },
  {
    Symbol: "SGBDEC25",
    Token: 623,
  },
  {
    Symbol: "SGBDEC2512",
    Token: 795,
  },
  {
    Symbol: "SGBDEC2513",
    Token: 862,
  },
  {
    Symbol: "SGBDEC25XI",
    Token: 729,
  },
  {
    Symbol: "SGBDEC26",
    Token: 7654,
  },
  {
    Symbol: "SGBFEB24",
    Token: 18385,
  },
  {
    Symbol: "SGBFEB27",
    Token: 8766,
  },
  {
    Symbol: "SGBFEB28IX",
    Token: 17664,
  },
  {
    Symbol: "SGBFEB29XI",
    Token: 2200,
  },
  {
    Symbol: "SGBJ28VIII",
    Token: 17110,
  },
  {
    Symbol: "SGBJAN26",
    Token: 945,
  },
  {
    Symbol: "SGBJAN27",
    Token: 8308,
  },
  {
    Symbol: "SGBJAN29IX",
    Token: 1920,
  },
  {
    Symbol: "SGBJAN29X",
    Token: 2003,
  },
  {
    Symbol: "SGBJAN30IX",
    Token: 7879,
  },
  {
    Symbol: "SGBJU29III",
    Token: 3800,
  },
  {
    Symbol: "SGBJUL25",
    Token: 21477,
  },
  {
    Symbol: "SGBJUL27",
    Token: 11154,
  },
  {
    Symbol: "SGBJUL28IV",
    Token: 22242,
  },
  {
    Symbol: "SGBJUL29IV",
    Token: 5113,
  },
  {
    Symbol: "SGBJUN27",
    Token: 10261,
  },
  {
    Symbol: "SGBJUN28",
    Token: 19078,
  },
  {
    Symbol: "SGBJUN29II",
    Token: 3743,
  },
  {
    Symbol: "SGBJUN30",
    Token: 10232,
  },
  {
    Symbol: "SGBMAR24",
    Token: 18386,
  },
  {
    Symbol: "SGBMAR25",
    Token: 20467,
  },
  {
    Symbol: "SGBMAR28X",
    Token: 18451,
  },
  {
    Symbol: "SGBMAR30X",
    Token: 8401,
  },
  {
    Symbol: "SGBMAR31IV",
    Token: 14598,
  },
  {
    Symbol: "SGBMAY25",
    Token: 20980,
  },
  {
    Symbol: "SGBMAY26",
    Token: 2891,
  },
  {
    Symbol: "SGBMAY28",
    Token: 18972,
  },
  {
    Symbol: "SGBMAY29I",
    Token: 3742,
  },
  {
    Symbol: "SGBMR29XII",
    Token: 2810,
  },
  {
    Symbol: "SGBN28VIII",
    Token: 1342,
  },
  {
    Symbol: "SGBNOV23",
    Token: 17248,
  },
  {
    Symbol: "SGBNOV24",
    Token: 19203,
  },
  {
    Symbol: "SGBNOV25",
    Token: 458,
  },
  {
    Symbol: "SGBNOV258",
    Token: 497,
  },
  {
    Symbol: "SGBNOV25IX",
    Token: 540,
  },
  {
    Symbol: "SGBNOV25VI",
    Token: 398,
  },
  {
    Symbol: "SGBNOV26",
    Token: 6355,
  },
  {
    Symbol: "SGBNV29VII",
    Token: 6518,
  },
  {
    Symbol: "SGBOC28VII",
    Token: 834,
  },
  {
    Symbol: "SGBOCT25",
    Token: 250,
  },
  {
    Symbol: "SGBOCT25IV",
    Token: 304,
  },
  {
    Symbol: "SGBOCT25V",
    Token: 355,
  },
  {
    Symbol: "SGBOCT26",
    Token: 5960,
  },
  {
    Symbol: "SGBOCT27",
    Token: 13981,
  },
  {
    Symbol: "SGBOCT27VI",
    Token: 14252,
  },
  {
    Symbol: "SGBSEP24",
    Token: 18795,
  },
  {
    Symbol: "SGBSEP27",
    Token: 13209,
  },
  {
    Symbol: "SGBSEP28VI",
    Token: 149,
  },
  {
    Symbol: "SGBSEP29VI",
    Token: 5575,
  },
  {
    Symbol: "SGIL",
    Token: 5114,
  },
  {
    Symbol: "SGL",
    Token: 13367,
  },
  {
    Symbol: "SHAHALLOYS",
    Token: 11856,
  },
  {
    Symbol: "SHAILY",
    Token: 8727,
  },
  {
    Symbol: "SHAIVAL",
    Token: 10683,
  },
  {
    Symbol: "SHAKTIPUMP",
    Token: 25574,
  },
  {
    Symbol: "SHALBY",
    Token: 714,
  },
  {
    Symbol: "SHALPAINTS",
    Token: 15342,
  },
  {
    Symbol: "SHANKARA",
    Token: 20321,
  },
  {
    Symbol: "SHANTI",
    Token: 5650,
  },
  {
    Symbol: "SHANTIGEAR",
    Token: 3078,
  },
  {
    Symbol: "SHARDACROP",
    Token: 4992,
  },
  {
    Symbol: "SHARDAMOTR",
    Token: 10530,
  },
  {
    Symbol: "SHAREINDIA",
    Token: 104,
  },
  {
    Symbol: "SHAREINDIA",
    Token: 14869,
  },
  {
    Symbol: "SHARIABEES",
    Token: 17044,
  },
  {
    Symbol: "SHEMAROO",
    Token: 5068,
  },
  {
    Symbol: "SHERA",
    Token: 14172,
  },
  {
    Symbol: "SHIGAN",
    Token: 8394,
  },
  {
    Symbol: "SHILPAMED",
    Token: 17752,
  },
  {
    Symbol: "SHIVALIK",
    Token: 7016,
  },
  {
    Symbol: "SHIVAMAUTO",
    Token: 13756,
  },
  {
    Symbol: "SHIVAMILLS",
    Token: 1503,
  },
  {
    Symbol: "SHIVATEX",
    Token: 804,
  },
  {
    Symbol: "SHIVAUM",
    Token: 13446,
  },
  {
    Symbol: "SHK",
    Token: 11212,
  },
  {
    Symbol: "SHOPERSTOP",
    Token: 11813,
  },
  {
    Symbol: "SHRADHA",
    Token: 708,
  },
  {
    Symbol: "SHREDIGCEM",
    Token: 3099,
  },
  {
    Symbol: "SHREECEM",
    Token: 3103,
  },
  {
    Symbol: "SHREEPUSHK",
    Token: 10588,
  },
  {
    Symbol: "SHREERAMA",
    Token: 7627,
  },
  {
    Symbol: "SHREMINVIT",
    Token: 5718,
  },
  {
    Symbol: "SHRENIK",
    Token: 11149,
  },
  {
    Symbol: "SHREYANIND",
    Token: 3126,
  },
  {
    Symbol: "SHREYAS",
    Token: 3129,
  },
  {
    Symbol: "SHRIPISTON",
    Token: 17190,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 4306,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 298,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 498,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 696,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 1001,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 1897,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 6140,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 6149,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 6166,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 6168,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 6172,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 8621,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 8625,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 8633,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 8642,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 8663,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 12916,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 12919,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 12931,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 12933,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 12937,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 12941,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 17157,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 17159,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 17163,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 17172,
  },
  {
    Symbol: "SHRIRAMFIN",
    Token: 17179,
  },
  {
    Symbol: "SHRIRAMPPS",
    Token: 7200,
  },
  {
    Symbol: "SHUBHLAXMI",
    Token: 6451,
  },
  {
    Symbol: "SHYAMCENT",
    Token: 10188,
  },
  {
    Symbol: "SHYAMMETL",
    Token: 4693,
  },
  {
    Symbol: "SIDDHIKA",
    Token: 3148,
  },
  {
    Symbol: "SIEMENS",
    Token: 3150,
  },
  {
    Symbol: "SIGACHI",
    Token: 6663,
  },
  {
    Symbol: "SIGIND",
    Token: 4522,
  },
  {
    Symbol: "SIGMA",
    Token: 662,
  },
  {
    Symbol: "SIKKO",
    Token: 6218,
  },
  {
    Symbol: "SIL",
    Token: 11298,
  },
  {
    Symbol: "SILGO",
    Token: 2492,
  },
  {
    Symbol: "SILINV",
    Token: 4105,
  },
  {
    Symbol: "SILLYMONKS",
    Token: 19097,
  },
  {
    Symbol: "SILVER",
    Token: 8003,
  },
  {
    Symbol: "SILVERBEES",
    Token: 8080,
  },
  {
    Symbol: "SILVERETF",
    Token: 15085,
  },
  {
    Symbol: "SILVERTUC",
    Token: 9422,
  },
  {
    Symbol: "SIMBHALS",
    Token: 14612,
  },
  {
    Symbol: "SIMPLEXINF",
    Token: 3162,
  },
  {
    Symbol: "SINTERCOM",
    Token: 381,
  },
  {
    Symbol: "SIRCA",
    Token: 11050,
  },
  {
    Symbol: "SIS",
    Token: 21501,
  },
  {
    Symbol: "SITINET",
    Token: 13998,
  },
  {
    Symbol: "SIYSIL",
    Token: 14096,
  },
  {
    Symbol: "SJS",
    Token: 6643,
  },
  {
    Symbol: "SJVN",
    Token: 18883,
  },
  {
    Symbol: "SKFINDIA",
    Token: 3186,
  },
  {
    Symbol: "SKIPPER",
    Token: 9428,
  },
  {
    Symbol: "SKMEGGPROD",
    Token: 4732,
  },
  {
    Symbol: "SKP",
    Token: 10325,
  },
  {
    Symbol: "SKSTEXTILE",
    Token: 1124,
  },
  {
    Symbol: "SKYGOLD",
    Token: 13631,
  },
  {
    Symbol: "SMARTLINK",
    Token: 9889,
  },
  {
    Symbol: "SMCGLOBAL",
    Token: 2320,
  },
  {
    Symbol: "SMLISUZU",
    Token: 3387,
  },
  {
    Symbol: "SMLT",
    Token: 6843,
  },
  {
    Symbol: "SMSLIFE",
    Token: 21551,
  },
  {
    Symbol: "SMSPHARMA",
    Token: 14329,
  },
  {
    Symbol: "SMVD",
    Token: 847,
  },
  {
    Symbol: "SNOWMAN",
    Token: 4843,
  },
  {
    Symbol: "SOBHA",
    Token: 13826,
  },
  {
    Symbol: "SOFTTECH",
    Token: 8266,
  },
  {
    Symbol: "SOLARA",
    Token: 3672,
  },
  {
    Symbol: "SOLARINDS",
    Token: 13332,
  },
  {
    Symbol: "SOLEX",
    Token: 1231,
  },
  {
    Symbol: "SOMANYCERA",
    Token: 3880,
  },
  {
    Symbol: "SOMATEX",
    Token: 9104,
  },
  {
    Symbol: "SOMICONVEY",
    Token: 17794,
  },
  {
    Symbol: "SONACOMS",
    Token: 4684,
  },
  {
    Symbol: "SONAHISONA",
    Token: 13616,
  },
  {
    Symbol: "SONAMCLOCK",
    Token: 8806,
  },
  {
    Symbol: "SONATSOFTW",
    Token: 6596,
  },
  {
    Symbol: "SONUINFRA",
    Token: 9458,
  },
  {
    Symbol: "SOTAC",
    Token: 14993,
  },
  {
    Symbol: "SOTL",
    Token: 3021,
  },
  {
    Symbol: "SOUTHBANK",
    Token: 5948,
  },
  {
    Symbol: "SOUTHWEST",
    Token: 9678,
  },
  {
    Symbol: "SPAL",
    Token: 18252,
  },
  {
    Symbol: "SPANDANA",
    Token: 11435,
  },
  {
    Symbol: "SPARC",
    Token: 14788,
  },
  {
    Symbol: "SPCENET",
    Token: 19372,
  },
  {
    Symbol: "SPECIALITY",
    Token: 27107,
  },
  {
    Symbol: "SPECTRUM",
    Token: 5060,
  },
  {
    Symbol: "SPENCERS",
    Token: 8163,
  },
  {
    Symbol: "SPIC",
    Token: 3252,
  },
  {
    Symbol: "SPLIL",
    Token: 11935,
  },
  {
    Symbol: "SPLPETRO",
    Token: 9617,
  },
  {
    Symbol: "SPMLINFRA",
    Token: 7166,
  },
  {
    Symbol: "SPORTKING",
    Token: 10733,
  },
  {
    Symbol: "SPRL",
    Token: 8521,
  },
  {
    Symbol: "SREEL",
    Token: 31837,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 21527,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 21529,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 21531,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 21533,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 21535,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 21537,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 17892,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 17894,
  },
  {
    Symbol: "SREIBNPNCD",
    Token: 17896,
  },
  {
    Symbol: "SRF",
    Token: 3273,
  },
  {
    Symbol: "SRHHYPOLTD",
    Token: 14582,
  },
  {
    Symbol: "SRIRAM",
    Token: 20994,
  },
  {
    Symbol: "SRIVASAVI",
    Token: 14411,
  },
  {
    Symbol: "SRPL",
    Token: 140,
  },
  {
    Symbol: "SSINFRA",
    Token: 2689,
  },
  {
    Symbol: "SSWL",
    Token: 11829,
  },
  {
    Symbol: "STAR",
    Token: 7374,
  },
  {
    Symbol: "STARCEMENT",
    Token: 21091,
  },
  {
    Symbol: "STARHEALTH",
    Token: 7083,
  },
  {
    Symbol: "STARPAPER",
    Token: 3291,
  },
  {
    Symbol: "STARTECK",
    Token: 9305,
  },
  {
    Symbol: "STCINDIA",
    Token: 10948,
  },
  {
    Symbol: "STEELCAS",
    Token: 6803,
  },
  {
    Symbol: "STEELCITY",
    Token: 10406,
  },
  {
    Symbol: "STEELXIND",
    Token: 21339,
  },
  {
    Symbol: "STEL",
    Token: 21484,
  },
  {
    Symbol: "STERTOOLS",
    Token: 4299,
  },
  {
    Symbol: "STLTECH",
    Token: 9309,
  },
  {
    Symbol: "STOVEKRAFT",
    Token: 2107,
  },
  {
    Symbol: "STYLAMIND",
    Token: 5186,
  },
  {
    Symbol: "STYRENIX",
    Token: 19,
  },
  {
    Symbol: "SUBEXLTD",
    Token: 967,
  },
  {
    Symbol: "SUBROS",
    Token: 3324,
  },
  {
    Symbol: "SUDARSCHEM",
    Token: 3327,
  },
  {
    Symbol: "SUKHJITS",
    Token: 11804,
  },
  {
    Symbol: "SULA",
    Token: 13218,
  },
  {
    Symbol: "SUMICHEM",
    Token: 17105,
  },
  {
    Symbol: "SUMIT",
    Token: 11141,
  },
  {
    Symbol: "SUMMITSEC",
    Token: 21275,
  },
  {
    Symbol: "SUNCLAYLTD",
    Token: 29008,
  },
  {
    Symbol: "SUNDARAM",
    Token: 18931,
  },
  {
    Symbol: "SUNDARMFIN",
    Token: 3339,
  },
  {
    Symbol: "SUNDARMHLD",
    Token: 2183,
  },
  {
    Symbol: "SUNDRMBRAK",
    Token: 4179,
  },
  {
    Symbol: "SUNDRMFAST",
    Token: 3345,
  },
  {
    Symbol: "SUNFLAG",
    Token: 3348,
  },
  {
    Symbol: "SUNPHARMA",
    Token: 3351,
  },
  {
    Symbol: "SUNTECK",
    Token: 17641,
  },
  {
    Symbol: "SUNTV",
    Token: 13404,
  },
  {
    Symbol: "SUPERHOUSE",
    Token: 20616,
  },
  {
    Symbol: "SUPERSPIN",
    Token: 3357,
  },
  {
    Symbol: "SUPRAJIT",
    Token: 11689,
  },
  {
    Symbol: "SUPREMEENG",
    Token: 1401,
  },
  {
    Symbol: "SUPREMEIND",
    Token: 3363,
  },
  {
    Symbol: "SUPREMEINF",
    Token: 15002,
  },
  {
    Symbol: "SUPRIYA",
    Token: 7390,
  },
  {
    Symbol: "SURANASOL",
    Token: 21077,
  },
  {
    Symbol: "SURANAT&P",
    Token: 10700,
  },
  {
    Symbol: "SURANI",
    Token: 8513,
  },
  {
    Symbol: "SURYALAXMI",
    Token: 11852,
  },
  {
    Symbol: "SURYAROSNI",
    Token: 3375,
  },
  {
    Symbol: "SURYODAY",
    Token: 2970,
  },
  {
    Symbol: "SUTLEJTEX",
    Token: 13801,
  },
  {
    Symbol: "SUULD",
    Token: 638,
  },
  {
    Symbol: "SUVEN",
    Token: 11233,
  },
  {
    Symbol: "SUVENPHAR",
    Token: 17945,
  },
  {
    Symbol: "SUVIDHAA",
    Token: 3005,
  },
  {
    Symbol: "SUZLON",
    Token: 12018,
  },
  {
    Symbol: "SVLL",
    Token: 15121,
  },
  {
    Symbol: "SVPGLOB",
    Token: 5023,
  },
  {
    Symbol: "SWANENERGY",
    Token: 27095,
  },
  {
    Symbol: "SWARAJ",
    Token: 8608,
  },
  {
    Symbol: "SWARAJENG",
    Token: 3384,
  },
  {
    Symbol: "SWASTIK",
    Token: 11492,
  },
  {
    Symbol: "SWELECTES",
    Token: 11909,
  },
  {
    Symbol: "SWSOLAR",
    Token: 12489,
  },
  {
    Symbol: "SYMPHONY",
    Token: 24190,
  },
  {
    Symbol: "SYNCOMF",
    Token: 11992,
  },
  {
    Symbol: "SYNGENE",
    Token: 10243,
  },
  {
    Symbol: "SYRMA",
    Token: 10793,
  },
  {
    Symbol: "SYSTANGO",
    Token: 14506,
  },
  {
    Symbol: "TAINWALCHM",
    Token: 3396,
  },
  {
    Symbol: "TAJGVK",
    Token: 9354,
  },
  {
    Symbol: "TAKE",
    Token: 14917,
  },
  {
    Symbol: "TALBROAUTO",
    Token: 13648,
  },
  {
    Symbol: "TANLA",
    Token: 13976,
  },
  {
    Symbol: "TANTIACONS",
    Token: 1314,
  },
  {
    Symbol: "TAPIFRUIT",
    Token: 10986,
  },
  {
    Symbol: "TARACHAND",
    Token: 2117,
  },
  {
    Symbol: "TARC",
    Token: 1581,
  },
  {
    Symbol: "TARMAT",
    Token: 14771,
  },
  {
    Symbol: "TARSONS",
    Token: 6943,
  },
  {
    Symbol: "TASTYBITE",
    Token: 20092,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16789,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16791,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16834,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16836,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16838,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16870,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16872,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16874,
  },
  {
    Symbol: "TATACAPHSG",
    Token: 16894,
  },
  {
    Symbol: "TATACHEM",
    Token: 3405,
  },
  {
    Symbol: "TATACOFFEE",
    Token: 724,
  },
  {
    Symbol: "TATACOMM",
    Token: 3721,
  },
  {
    Symbol: "TATACONSUM",
    Token: 3432,
  },
  {
    Symbol: "TATAELXSI",
    Token: 3411,
  },
  {
    Symbol: "TATAINVEST",
    Token: 1621,
  },
  {
    Symbol: "TATAMETALI",
    Token: 3423,
  },
  {
    Symbol: "TATAMOTORS",
    Token: 3456,
  },
  {
    Symbol: "TATAMTRDVR",
    Token: 16965,
  },
  {
    Symbol: "TATAPOWER",
    Token: 3426,
  },
  {
    Symbol: "TATASTEEL",
    Token: 3499,
  },
  {
    Symbol: "TATASTLLP",
    Token: 1639,
  },
  {
    Symbol: "TATVA",
    Token: 5162,
  },
  {
    Symbol: "TBZ",
    Token: 27037,
  },
  {
    Symbol: "TCFSL",
    Token: 5031,
  },
  {
    Symbol: "TCFSL",
    Token: 5042,
  },
  {
    Symbol: "TCFSL",
    Token: 5056,
  },
  {
    Symbol: "TCFSL",
    Token: 5058,
  },
  {
    Symbol: "TCFSL",
    Token: 12951,
  },
  {
    Symbol: "TCFSL",
    Token: 12953,
  },
  {
    Symbol: "TCFSL",
    Token: 12956,
  },
  {
    Symbol: "TCFSL",
    Token: 12958,
  },
  {
    Symbol: "TCFSL",
    Token: 12961,
  },
  {
    Symbol: "TCFSL",
    Token: 12963,
  },
  {
    Symbol: "TCI",
    Token: 10580,
  },
  {
    Symbol: "TCIEXP",
    Token: 19223,
  },
  {
    Symbol: "TCNSBRANDS",
    Token: 4172,
  },
  {
    Symbol: "TCPLPACK",
    Token: 184,
  },
  {
    Symbol: "TCS",
    Token: 11536,
  },
  {
    Symbol: "TDPOWERSYS",
    Token: 25178,
  },
  {
    Symbol: "TEAMLEASE",
    Token: 12716,
  },
  {
    Symbol: "TECH",
    Token: 6462,
  },
  {
    Symbol: "TECHIN",
    Token: 25194,
  },
  {
    Symbol: "TECHM",
    Token: 13538,
  },
  {
    Symbol: "TECHNOE",
    Token: 6445,
  },
  {
    Symbol: "TECILCHEM",
    Token: 14739,
  },
  {
    Symbol: "TEGA",
    Token: 7105,
  },
  {
    Symbol: "TEJASNET",
    Token: 21131,
  },
  {
    Symbol: "TEMBO",
    Token: 3275,
  },
  {
    Symbol: "TERASOFT",
    Token: 19292,
  },
  {
    Symbol: "TEXINFRA",
    Token: 11549,
  },
  {
    Symbol: "TEXMOPIPES",
    Token: 18214,
  },
  {
    Symbol: "TEXRAIL",
    Token: 21828,
  },
  {
    Symbol: "TFCILTD",
    Token: 3466,
  },
  {
    Symbol: "TFL",
    Token: 14319,
  },
  {
    Symbol: "TGBHOTELS",
    Token: 14607,
  },
  {
    Symbol: "THANGAMAYL",
    Token: 18118,
  },
  {
    Symbol: "THEINVEST",
    Token: 21427,
  },
  {
    Symbol: "THEJO",
    Token: 28842,
  },
  {
    Symbol: "THEMISMED",
    Token: 14485,
  },
  {
    Symbol: "THERMAX",
    Token: 3475,
  },
  {
    Symbol: "THOMASCOOK",
    Token: 3481,
  },
  {
    Symbol: "THOMASCOTT",
    Token: 31021,
  },
  {
    Symbol: "THYROCARE",
    Token: 17032,
  },
  {
    Symbol: "TI",
    Token: 19196,
  },
  {
    Symbol: "TIDEWATER",
    Token: 14019,
  },
  {
    Symbol: "TIIL",
    Token: 14223,
  },
  {
    Symbol: "TIINDIA",
    Token: 312,
  },
  {
    Symbol: "TIJARIA",
    Token: 25482,
  },
  {
    Symbol: "TIL",
    Token: 11624,
  },
  {
    Symbol: "TIMESCAN",
    Token: 7800,
  },
  {
    Symbol: "TIMESGTY",
    Token: 10717,
  },
  {
    Symbol: "TIMETECHNO",
    Token: 14707,
  },
  {
    Symbol: "TIMKEN",
    Token: 14198,
  },
  {
    Symbol: "TINPLATE",
    Token: 3493,
  },
  {
    Symbol: "TIPSFILMS",
    Token: 11374,
  },
  {
    Symbol: "TIPSINDLTD",
    Token: 9117,
  },
  {
    Symbol: "TIRUMALCHM",
    Token: 3496,
  },
  {
    Symbol: "TIRUPATI",
    Token: 21868,
  },
  {
    Symbol: "TIRUPATIFL",
    Token: 22282,
  },
  {
    Symbol: "TITAN",
    Token: 3506,
  },
  {
    Symbol: "TMB",
    Token: 10945,
  },
  {
    Symbol: "TNIDETF",
    Token: 8882,
  },
  {
    Symbol: "TNPETRO",
    Token: 3509,
  },
  {
    Symbol: "TNPL",
    Token: 3980,
  },
  {
    Symbol: "TNTELE",
    Token: 9884,
  },
  {
    Symbol: "TOKYOPLAST",
    Token: 3837,
  },
  {
    Symbol: "TORNTPHARM",
    Token: 3518,
  },
  {
    Symbol: "TORNTPOWER",
    Token: 13786,
  },
  {
    Symbol: "TOTAL",
    Token: 22423,
  },
  {
    Symbol: "TOUCHWOOD",
    Token: 16910,
  },
  {
    Symbol: "TPLPLASTEH",
    Token: 9219,
  },
  {
    Symbol: "TRACXN",
    Token: 11582,
  },
  {
    Symbol: "TRANSWIND",
    Token: 21260,
  },
  {
    Symbol: "TREEHOUSE",
    Token: 25082,
  },
  {
    Symbol: "TREJHARA",
    Token: 7518,
  },
  {
    Symbol: "TRENT",
    Token: 1964,
  },
  {
    Symbol: "TRF",
    Token: 17987,
  },
  {
    Symbol: "TRIDENT",
    Token: 9685,
  },
  {
    Symbol: "TRIGYN",
    Token: 5428,
  },
  {
    Symbol: "TRIL",
    Token: 15174,
  },
  {
    Symbol: "TRITURBINE",
    Token: 25584,
  },
  {
    Symbol: "TRIVENI",
    Token: 13081,
  },
  {
    Symbol: "TTKHLTCARE",
    Token: 11369,
  },
  {
    Symbol: "TTKPRESTIG",
    Token: 3546,
  },
  {
    Symbol: "TTL",
    Token: 14314,
  },
  {
    Symbol: "TTML",
    Token: 8954,
  },
  {
    Symbol: "TV18BRDCST",
    Token: 14208,
  },
  {
    Symbol: "TVSELECT",
    Token: 11265,
  },
  {
    Symbol: "TVSMOTOR",
    Token: 8479,
  },
  {
    Symbol: "TVSSRICHAK",
    Token: 14245,
  },
  {
    Symbol: "TVTODAY",
    Token: 11275,
  },
  {
    Symbol: "TWL",
    Token: 15414,
  },
  {
    Symbol: "UBL",
    Token: 16713,
  },
  {
    Symbol: "UCALFUEL",
    Token: 3570,
  },
  {
    Symbol: "UCL",
    Token: 4212,
  },
  {
    Symbol: "UCOBANK",
    Token: 11223,
  },
  {
    Symbol: "UDAICEMENT",
    Token: 7276,
  },
  {
    Symbol: "UFLEX",
    Token: 1053,
  },
  {
    Symbol: "UFO",
    Token: 9039,
  },
  {
    Symbol: "UGARSUGAR",
    Token: 19578,
  },
  {
    Symbol: "UGROCAP",
    Token: 5313,
  },
  {
    Symbol: "UGROCAP",
    Token: 6697,
  },
  {
    Symbol: "UGROCAP",
    Token: 9347,
  },
  {
    Symbol: "UGROCAP",
    Token: 9352,
  },
  {
    Symbol: "UGROCAP",
    Token: 9360,
  },
  {
    Symbol: "UGROCAP",
    Token: 11224,
  },
  {
    Symbol: "UGROCAP",
    Token: 11227,
  },
  {
    Symbol: "UGROCAP",
    Token: 11230,
  },
  {
    Symbol: "UJAAS",
    Token: 25540,
  },
  {
    Symbol: "UJJIVAN",
    Token: 17069,
  },
  {
    Symbol: "UJJIVANSFB",
    Token: 15228,
  },
  {
    Symbol: "ULTRACEMCO",
    Token: 11532,
  },
  {
    Symbol: "UMA",
    Token: 13349,
  },
  {
    Symbol: "UMAEXPORTS",
    Token: 8842,
  },
  {
    Symbol: "UMANGDAIRY",
    Token: 11387,
  },
  {
    Symbol: "UMESLTD",
    Token: 19145,
  },
  {
    Symbol: "UNICHEMLAB",
    Token: 3579,
  },
  {
    Symbol: "UNIDT",
    Token: 201,
  },
  {
    Symbol: "UNIENTER",
    Token: 11293,
  },
  {
    Symbol: "UNIINFO",
    Token: 7791,
  },
  {
    Symbol: "UNIONBANK",
    Token: 10753,
  },
  {
    Symbol: "UNIPARTS",
    Token: 13057,
  },
  {
    Symbol: "UNITECH",
    Token: 8893,
  },
  {
    Symbol: "UNITEDPOLY",
    Token: 7564,
  },
  {
    Symbol: "UNITEDTEA",
    Token: 17999,
  },
  {
    Symbol: "UNIVASTU",
    Token: 18977,
  },
  {
    Symbol: "UNIVCABLES",
    Token: 3607,
  },
  {
    Symbol: "UNIVPHOTO",
    Token: 17659,
  },
  {
    Symbol: "UNOMINDA",
    Token: 14154,
  },
  {
    Symbol: "UPL",
    Token: 11287,
  },
  {
    Symbol: "URAVI",
    Token: 2322,
  },
  {
    Symbol: "URJA",
    Token: 20203,
  },
  {
    Symbol: "USASEEDS",
    Token: 10610,
  },
  {
    Symbol: "USHAMART",
    Token: 8840,
  },
  {
    Symbol: "USK",
    Token: 14871,
  },
  {
    Symbol: "UTIAMC",
    Token: 527,
  },
  {
    Symbol: "UTIBANKETF",
    Token: 22440,
  },
  {
    Symbol: "UTINEXT50",
    Token: 21478,
  },
  {
    Symbol: "UTINIFTETF",
    Token: 10511,
  },
  {
    Symbol: "UTISENSETF",
    Token: 10515,
  },
  {
    Symbol: "UTISXN50",
    Token: 9168,
  },
  {
    Symbol: "UTTAMSUGAR",
    Token: 13376,
  },
  {
    Symbol: "UWCSL",
    Token: 5945,
  },
  {
    Symbol: "V1NSETEST",
    Token: 12863,
  },
  {
    Symbol: "V2RETAIL",
    Token: 14766,
  },
  {
    Symbol: "VADILALIND",
    Token: 24196,
  },
  {
    Symbol: "VAIBHAVGBL",
    Token: 11364,
  },
  {
    Symbol: "VAISHALI",
    Token: 16589,
  },
  {
    Symbol: "VAKRANGEE",
    Token: 13342,
  },
  {
    Symbol: "VALIANTORG",
    Token: 330,
  },
  {
    Symbol: "VARDHACRLC",
    Token: 11220,
  },
  {
    Symbol: "VARDMNPOLY",
    Token: 6893,
  },
  {
    Symbol: "VARROC",
    Token: 3857,
  },
  {
    Symbol: "VASA",
    Token: 1274,
  },
  {
    Symbol: "VASCONEQ",
    Token: 18110,
  },
  {
    Symbol: "VASWANI",
    Token: 25340,
  },
  {
    Symbol: "VBL",
    Token: 18921,
  },
  {
    Symbol: "VCL",
    Token: 9020,
  },
  {
    Symbol: "VEDL",
    Token: 3063,
  },
  {
    Symbol: "VEEKAYEM",
    Token: 10710,
  },
  {
    Symbol: "VELS",
    Token: 14590,
  },
  {
    Symbol: "VENKEYS",
    Token: 3757,
  },
  {
    Symbol: "VENUSPIPES",
    Token: 9592,
  },
  {
    Symbol: "VENUSREM",
    Token: 13859,
  },
  {
    Symbol: "VERA",
    Token: 2666,
  },
  {
    Symbol: "VERANDA",
    Token: 8890,
  },
  {
    Symbol: "VERTEXPLUS",
    Token: 14491,
  },
  {
    Symbol: "VERTOZ",
    Token: 18863,
  },
  {
    Symbol: "VESUVIUS",
    Token: 3676,
  },
  {
    Symbol: "VETO",
    Token: 8652,
  },
  {
    Symbol: "VGUARD",
    Token: 15362,
  },
  {
    Symbol: "VHL",
    Token: 11892,
  },
  {
    Symbol: "VIAZ",
    Token: 14316,
  },
  {
    Symbol: "VICEROY",
    Token: 4818,
  },
  {
    Symbol: "VIDHIING",
    Token: 13536,
  },
  {
    Symbol: "VIJAYA",
    Token: 5585,
  },
  {
    Symbol: "VIJIFIN",
    Token: 17691,
  },
  {
    Symbol: "VIKASECO",
    Token: 25756,
  },
  {
    Symbol: "VIKASLIFE",
    Token: 9931,
  },
  {
    Symbol: "VIMTALABS",
    Token: 13101,
  },
  {
    Symbol: "VINATIORGA",
    Token: 17364,
  },
  {
    Symbol: "VINDHYATEL",
    Token: 3694,
  },
  {
    Symbol: "VINEETLAB",
    Token: 3807,
  },
  {
    Symbol: "VINNY",
    Token: 12506,
  },
  {
    Symbol: "VINYLINDIA",
    Token: 16821,
  },
  {
    Symbol: "VIPCLOTHNG",
    Token: 14843,
  },
  {
    Symbol: "VIPIND",
    Token: 3703,
  },
  {
    Symbol: "VIPULLTD",
    Token: 8424,
  },
  {
    Symbol: "VIRESCENT",
    Token: 5920,
  },
  {
    Symbol: "VIRINCHI",
    Token: 15295,
  },
  {
    Symbol: "VISAKAIND",
    Token: 4221,
  },
  {
    Symbol: "VISASTEEL",
    Token: 13298,
  },
  {
    Symbol: "VISESHINFO",
    Token: 7303,
  },
  {
    Symbol: "VISHAL",
    Token: 11773,
  },
  {
    Symbol: "VISHNU",
    Token: 6908,
  },
  {
    Symbol: "VISHWARAJ",
    Token: 13702,
  },
  {
    Symbol: "VITAL",
    Token: 11920,
  },
  {
    Symbol: "VIVIANA",
    Token: 10967,
  },
  {
    Symbol: "VIVIDHA",
    Token: 29881,
  },
  {
    Symbol: "VIVO",
    Token: 7610,
  },
  {
    Symbol: "VLSFINANCE",
    Token: 3715,
  },
  {
    Symbol: "VMARCIND",
    Token: 3188,
  },
  {
    Symbol: "VMART",
    Token: 29284,
  },
  {
    Symbol: "VOLTAMP",
    Token: 13577,
  },
  {
    Symbol: "VOLTAS",
    Token: 3718,
  },
  {
    Symbol: "VRLLOG",
    Token: 8696,
  },
  {
    Symbol: "VSCL",
    Token: 20973,
  },
  {
    Symbol: "VSSL",
    Token: 27067,
  },
  {
    Symbol: "VSTIND",
    Token: 3724,
  },
  {
    Symbol: "VSTTILLERS",
    Token: 24292,
  },
  {
    Symbol: "VTL",
    Token: 2073,
  },
  {
    Symbol: "WABAG",
    Token: 20188,
  },
  {
    Symbol: "WALCHANNAG",
    Token: 3736,
  },
  {
    Symbol: "WALPAR",
    Token: 5013,
  },
  {
    Symbol: "WANBURY",
    Token: 14067,
  },
  {
    Symbol: "WATERBASE",
    Token: 3745,
  },
  {
    Symbol: "WEALTH",
    Token: 1923,
  },
  {
    Symbol: "WEBELSOLAR",
    Token: 14602,
  },
  {
    Symbol: "WEIZMANIND",
    Token: 3748,
  },
  {
    Symbol: "WEL",
    Token: 7835,
  },
  {
    Symbol: "WELCORP",
    Token: 11821,
  },
  {
    Symbol: "WELENT",
    Token: 11626,
  },
  {
    Symbol: "WELINV",
    Token: 19800,
  },
  {
    Symbol: "WELSPUNIND",
    Token: 11253,
  },
  {
    Symbol: "WENDT",
    Token: 4235,
  },
  {
    Symbol: "WESTLIFE",
    Token: 11580,
  },
  {
    Symbol: "WEWIN",
    Token: 9862,
  },
  {
    Symbol: "WHEELS",
    Token: 3766,
  },
  {
    Symbol: "WHIRLPOOL",
    Token: 18011,
  },
  {
    Symbol: "WILLAMAGOR",
    Token: 3772,
  },
  {
    Symbol: "WINDLAS",
    Token: 5366,
  },
  {
    Symbol: "WINDMACHIN",
    Token: 24969,
  },
  {
    Symbol: "WIPL",
    Token: 20491,
  },
  {
    Symbol: "WIPRO",
    Token: 3787,
  },
  {
    Symbol: "WOCKPHARMA",
    Token: 7506,
  },
  {
    Symbol: "WONDERLA",
    Token: 3002,
  },
  {
    Symbol: "WORTH",
    Token: 22277,
  },
  {
    Symbol: "WSI",
    Token: 14832,
  },
  {
    Symbol: "WSTCSTPAPR",
    Token: 3799,
  },
  {
    Symbol: "XCHANGING",
    Token: 11705,
  },
  {
    Symbol: "XELPMOC",
    Token: 8478,
  },
  {
    Symbol: "XPROINDIA",
    Token: 11407,
  },
  {
    Symbol: "YAARI",
    Token: 24999,
  },
  {
    Symbol: "YESBANK",
    Token: 11915,
  },
  {
    Symbol: "YUKEN",
    Token: 5501,
  },
  {
    Symbol: "ZEEL",
    Token: 3812,
  },
  {
    Symbol: "ZEELEARN",
    Token: 20852,
  },
  {
    Symbol: "ZEEMEDIA",
    Token: 14003,
  },
  {
    Symbol: "ZENITHEXPO",
    Token: 8802,
  },
  {
    Symbol: "ZENITHSTL",
    Token: 14566,
  },
  {
    Symbol: "ZENSARTECH",
    Token: 1076,
  },
  {
    Symbol: "ZENTEC",
    Token: 7508,
  },
  {
    Symbol: "ZFCVINDIA",
    Token: 16915,
  },
  {
    Symbol: "ZIMLAB",
    Token: 12384,
  },
  {
    Symbol: "ZODIAC",
    Token: 7138,
  },
  {
    Symbol: "ZODIACLOTH",
    Token: 3821,
  },
  {
    Symbol: "ZOMATO",
    Token: 5097,
  },
  {
    Symbol: "ZOTA",
    Token: 11394,
  },
  {
    Symbol: "ZUARI",
    Token: 29050,
  },
  {
    Symbol: "ZUARIIND",
    Token: 3827,
  },
  {
    Symbol: "ZYDUSLIFE",
    Token: 7929,
  },
  {
    Symbol: "ZYDUSWELL",
    Token: 17635,
  },
];

const Navbar = ({ setHamb, hamb }) => {
  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");
  const [userProfile, setUserProfile] = useState(false);
  const { darkTheme } = useContext(MyContext);
  const [searchConst, setSearchConst] = useState(
    localStorage.getItem("Symbol")
  );
  const [appConst, setAppConst] = useState(localStorage.getItem("Exchange"));

  const filterData = GraphSearchData.filter((i) =>
    i.Symbol?.toLowerCase().includes(searchConst?.toLowerCase())
  );

  const Appendix = [
    {
      name: "NSE",
    },

    {
      name: "BSE",
    },

    {
      name: "NFO",
    },

    {
      name: "MCX",
    },

    {
      name: "CDS",
    },

    {
      name: "BFO",
    },

    {
      name: "BCD",
    },

    {
      name: "NCO",
    },

    {
      name: "BCO",
    },
  ];

  const filterAppendix = Appendix.filter((i) =>
    i.name?.toLowerCase().includes(appConst?.toLowerCase())
  );

  console.log("appen", Appendix, filterAppendix);

  return (
    <>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />

      <UserProfileModal
        show={userProfile}
        onHide={() => setUserProfile(false)}
      />

      <div className={darkTheme ? "darkNavbar" : ""}>
        <p className="nav-logo-text"> Logo fx</p>

        <div className="false-navbar">
          <div>
            <div className="mobileSide">
              <MobileBar />
            </div>
            <div className="hamber">
              {hamb ? (
                <IoMdArrowDropright
                  className="text-4xl"
                  onClick={() => setHamb(false)}
                />
              ) : (
                <IoMdArrowDropleft
                  className="text-4xl"
                  onClick={() => setHamb(true)}
                />
              )}
            </div>
          </div>

          <div className="right">
            <div></div>

            {SessionId ? (
              ""
            ) : (
              <button className="loginbtn" onClick={() => setModalShow(true)}>
                Login
              </button>
            )}

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="dropdown-button-search-1"
              >
                <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
                <input
                  type="search"
                  placeholder="Select Exchange"
                  className="Search"
                  value={appConst}
                  onChange={(e) => setAppConst(e.target.value)}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterAppendix?.map((i) => (
                  <Dropdown.Item
                    onClick={() => {
                      localStorage.setItem("Exchange", i.name);
                      window.location.reload();
                      setAppConst(i.name);
                    }}
                  >
                    {" "}
                    {i.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-button-search-1"
                id="dropdown-basic"
              >
                <AiOutlineSearch style={{ width: "25px", height: "25px" }} />
                <input
                  type="search"
                  placeholder="Graph Symbol"
                  className="Search"
                  value={searchConst}
                  onChange={(e) => setSearchConst(e.target.value)}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ maxHeight: "500px", overflowY: "scroll" }}
              >
                {filterData?.length === 0
                  ? GraphSearchData?.map((i) => (
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("Symbol", i.Symbol);
                          localStorage.setItem("token", i.Token);
                          window.location.reload();
                          setSearchConst(i.name);
                        }}
                      >
                        {" "}
                        {i.Symbol} length 0
                      </Dropdown.Item>
                    ))
                  : filterData?.map((i) => (
                      <Dropdown.Item
                        onClick={() => {
                          localStorage.setItem("Symbol", i.Symbol);
                          localStorage.setItem("token", i.Token);
                          window.location.reload();
                          setSearchConst(i.name);
                        }}
                      >
                        {" "}
                        {i.Symbol}{" "}
                      </Dropdown.Item>
                    ))}
              </Dropdown.Menu>
            </Dropdown>

            {SessionId ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
                className="profileImage"
                onClick={() => setUserProfile(true)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
