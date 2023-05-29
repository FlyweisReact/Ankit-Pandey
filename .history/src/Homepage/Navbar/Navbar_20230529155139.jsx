/** @format */

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { MyContext } from "../MyContext";
import { MobileBar } from "../../Modal/MobileBar";
import { LoginModal, UserProfileModal } from "../../Modal/GetOrder";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";


const Navbar = ({ setHamb, hamb }) => {
  const [modalShow, setModalShow] = useState(false);
  const SessionId = localStorage.getItem("sessionId");
  const [userProfile, setUserProfile] = useState(false);
  const { darkTheme } = useContext(MyContext);
  const [searchConst, setSearchConst] = useState(localStorage.getItem('Symbol'));
  const [appConst, setAppConst] = useState(localStorage.getItem('Exchange'));

  const GraphSearchData = [
    {
      Symbol	Token: "011NSETEST\t14747
    },
    {
      Symbol	Token: "021NSETEST\t14751
    },
    {
      Symbol	Token: "031NSETEST\t14753
    },
    {
      Symbol	Token: "041NSETEST\t14755
    },
    {
      Symbol	Token: "051NSETEST\t14758
    },
    {
      Symbol	Token: "061NSETEST\t14762
    },
    {
      Symbol	Token: "071NSETEST\t14764
    },
    {
      Symbol	Token: "081NSETEST\t14767
    },
    {
      Symbol	Token: "091NSETEST\t14769
    },
    {
      Symbol	Token: "1018GS2026\t6833
    },
    {
      Symbol	Token: "101NSETEST\t14772
    },
    {
      Symbol	Token: "111NSETEST\t14774
    },
    {
      Symbol	Token: "11NSETEST\t12841
    },
    {
      Symbol	Token: "121NSETEST\t14777
    },
    {
      Symbol	Token: "131NSETEST\t14778
    },
    {
      Symbol	Token: "141NSETEST\t14781
    },
    {
      Symbol	Token: "151NSETEST\t14782
    },
    {
      Symbol	Token: "161NSETEST\t14784
    },
    {
      Symbol	Token: "182D010623\t12732
    },
    {
      Symbol	Token: "182D021123\t15338
    },
    {
      Symbol	Token: "182D030823\t14000
    },
    {
      Symbol	Token: "182D051023\t14968
    },
    {
      Symbol	Token: "182D060723\t13629
    },
    {
      Symbol	Token: "182D070923\t14457
    },
    {
      Symbol	Token: "182D080623\t13053
    },
    {
      Symbol	Token: "182D100823\t14135
    },
    {
      Symbol	Token: "182D110523\t11890
    },
    {
      Symbol	Token: "182D121023\t15024
    },
    {
      Symbol	Token: "182D130723\t13726
    },
    {
      Symbol	Token: "182D140923\t14569
    },
    {
      Symbol	Token: "182D150623\t13137
    },
    {
      Symbol	Token: "182D170823\t14170
    },
    {
      Symbol	Token: "182D180523\t11989
    },
    {
      Symbol	Token: "182D191023\t15116
    },
    {
      Symbol	Token: "182D200723\t13790
    },
    {
      Symbol	Token: "182D220623\t13259
    },
    {
      Symbol	Token: "182D220923\t14668
    },
    {
      Symbol	Token: "182D240823\t14284
    },
    {
      Symbol	Token: "182D250523\t12360
    },
    {
      Symbol	Token: "182D261023\t15272
    },
    {
      Symbol	Token: "182D280723\t13933
    },
    {
      Symbol	Token: "182D290623\t13405
    },
    {
      Symbol	Token: "182D290923\t14885
    },
    {
      Symbol	Token: "182D310823\t14383
    },
    {
      Symbol	Token: "20MICRONS\t16921
    },
    {
      Symbol	Token: "21STCENMGM\t4
    },
    {
      Symbol	Token: "360ONE\t13061
    },
    {
      Symbol	Token: "364D010224\t14004
    },
    {
      Symbol	Token: "364D010623\t9809
    },
    {
      Symbol	Token: "364D020524\t15339
    },
    {
      Symbol	Token: "364D021123\t11776
    },
    {
      Symbol	Token: "364D030823\t10567
    },
    {
      Symbol	Token: "364D040124\t13630
    },
    {
      Symbol	Token: "364D040424\t14969
    },
    {
      Symbol	Token: "364D051023\t11429
    },
    {
      Symbol	Token: "364D060723\t10274
    },
    {
      Symbol	Token: "364D070324\t14458
    },
    {
      Symbol	Token: "364D070923\t10927
    },
    {
      Symbol	Token: "364D071223\t13056
    },
    {
      Symbol	Token: "364D080224\t14136
    },
    {
      Symbol	Token: "364D080623\t9841
    },
    {
      Symbol	Token: "364D091123\t11894
    },
    {
      Symbol	Token: "364D100823\t10667
    },
    {
      Symbol	Token: "364D110124\t13728
    },
    {
      Symbol	Token: "364D110424\t15035
    },
    {
      Symbol	Token: "364D110523\t9457
    },
    {
      Symbol	Token: "364D121023\t11519
    },
    {
      Symbol	Token: "364D130723\t10342
    },
    {
      Symbol	Token: "364D140324\t14573
    },
    {
      Symbol	Token: "364D140923\t10954
    },
    {
      Symbol	Token: "364D141223\t13138
    },
    {
      Symbol	Token: "364D150224\t14171
    },
    {
      Symbol	Token: "364D150623\t9877
    },
    {
      Symbol	Token: "364D161123\t11991
    },
    {
      Symbol	Token: "364D170823\t10687
    },
    {
      Symbol	Token: "364D180124\t13792
    },
    {
      Symbol	Token: "364D180424\t15120
    },
    {
      Symbol	Token: "364D180523\t9535
    },
    {
      Symbol	Token: "364D191023\t11611
    },
    {
      Symbol	Token: "364D200723\t10402
    },
    {
      Symbol	Token: "364D210923\t11059
    },
    {
      Symbol	Token: "364D211223\t13262
    },
    {
      Symbol	Token: "364D220224\t14285
    },
    {
      Symbol	Token: "364D220324\t14669
    },
    {
      Symbol	Token: "364D220623\t9956
    },
    {
      Symbol	Token: "364D231123\t12370
    },
    {
      Symbol	Token: "364D240823\t10792
    },
    {
      Symbol	Token: "364D250424\t15273
    },
    {
      Symbol	Token: "364D250523\t9734
    },
    {
      Symbol	Token: "364D260124\t13935
    },
    {
      Symbol	Token: "364D270723\t10484
    },
    {
      Symbol	Token: "364D271023\t11711
    },
    {
      Symbol	Token: "364D280923\t11303
    },
    {
      Symbol	Token: "364D281223\t13407
    },
    {
      Symbol	Token: "364D290224\t14384
    },
    {
      Symbol	Token: "364D290324\t14886
    },
    {
      Symbol	Token: "364D290623\t10226
    },
    {
      Symbol	Token: "364D301123\t12738
    },
    {
      Symbol	Token: "364D310823\t10858
    },
    {
      Symbol	Token: "3IINFOLTD\t6232
    },
    {
      Symbol	Token: "3MINDIA\t474
    },
    {
      Symbol	Token: "3PLAND\t2595
    },
    {
      Symbol	Token: "3RDROCK\t5621
    },
    {
      Symbol	Token: "426GS2023\t3529
    },
    {
      Symbol	Token: "439MH23\t21931
    },
    {
      Symbol	Token: "448GS2023\t947
    },
    {
      Symbol	Token: "449RJ23\t22021
    },
    {
      Symbol	Token: "44HR23\t21045
    },
    {
      Symbol	Token: "452BR23\t21215
    },
    {
      Symbol	Token: "454BR23\t22268
    },
    {
      Symbol	Token: "454RJ23\t22271
    },
    {
      Symbol	Token: "454TN23\t22101
    },
    {
      Symbol	Token: "456GS2023\t6962
    },
    {
      Symbol	Token: "45AS23\t1069
    },
    {
      Symbol	Token: "463MH23\t21945
    },
    {
      Symbol	Token: "463TN23\t22133
    },
    {
      Symbol	Token: "469ML23\t5876
    },
    {
      Symbol	Token: "473KA23\t6986
    },
    {
      Symbol	Token: "474KA23\t6736
    },
    {
      Symbol	Token: "476MH23\t21943
    },
    {
      Symbol	Token: "47KA23\t6882
    },
    {
      Symbol	Token: "489RJ23\t22058
    },
    {
      Symbol	Token: "493BR23\t22376
    },
    {
      Symbol	Token: "495ML24\t5554
    },
    {
      Symbol	Token: "497AS24\t5523
    },
    {
      Symbol	Token: "499TN23\t22106
    },
    {
      Symbol	Token: "4THDIM\t10866
    },
    {
      Symbol	Token: "503KL24\t21918
    },
    {
      Symbol	Token: "505KL23\t22409
    },
    {
      Symbol	Token: "505RJ24\t22270
    },
    {
      Symbol	Token: "507PY23\t8
    },
    {
      Symbol	Token: "509CG23\t11
    },
    {
      Symbol	Token: "509TN23\t22408
    },
    {
      Symbol	Token: "512BR24\t1071
    },
    {
      Symbol	Token: "515GS2025\t1054
    },
    {
      Symbol	Token: "518KL24\t2063
    },
    {
      Symbol	Token: "51BR23\t22407
    },
    {
      Symbol	Token: "522GS2025\t18976
    },
    {
      Symbol	Token: "524AS24\t752
    },
    {
      Symbol	Token: "525AS24\t6555
    },
    {
      Symbol	Token: "527BR24\t755
    },
    {
      Symbol	Token: "527GJ24\t7864
    },
    {
      Symbol	Token: "528BR23\t152
    },
    {
      Symbol	Token: "532AS25\t1210
    },
    {
      Symbol	Token: "532AS26\t1821
    },
    {
      Symbol	Token: "532CG25\t1209
    },
    {
      Symbol	Token: "532RJ25\t1700
    },
    {
      Symbol	Token: "535CG25\t971
    },
    {
      Symbol	Token: "535RJ25\t1513
    },
    {
      Symbol	Token: "538CG25\t835
    },
    {
      Symbol	Token: "538RJ24\t22045
    },
    {
      Symbol	Token: "539GJ24\t3043
    },
    {
      Symbol	Token: "539RJ24\t22339
    },
    {
      Symbol	Token: "539RJ25\t2011
    },
    {
      Symbol	Token: "53BR25\t1207
    },
    {
      Symbol	Token: "53RJ23\t283
    },
    {
      Symbol	Token: "540CG24\t22331
    },
    {
      Symbol	Token: "541AP24\t22334
    },
    {
      Symbol	Token: "541GA25\t1697
    },
    {
      Symbol	Token: "542RJ24\t2662
    },
    {
      Symbol	Token: "543BR24\t3046
    },
    {
      Symbol	Token: "544AP24\t20736
    },
    {
      Symbol	Token: "544KL24\t21900
    },
    {
      Symbol	Token: "545AP24\t20281
    },
    {
      Symbol	Token: "545RJ25\t22022
    },
    {
      Symbol	Token: "546PY25\t2012
    },
    {
      Symbol	Token: "546TN24\t22109
    },
    {
      Symbol	Token: "547AS24\t2533
    },
    {
      Symbol	Token: "547RJ24\t22051
    },
    {
      Symbol	Token: "549RJ25\t22300
    },
    {
      Symbol	Token: "54BR24\t587
    },
    {
      Symbol	Token: "54KL24\t2722
    },
    {
      Symbol	Token: "552AP24\t22446
    },
    {
      Symbol	Token: "552MP24\t2536
    },
    {
      Symbol	Token: "553KL25\t21917
    },
    {
      Symbol	Token: "563GS2026\t3202
    },
    {
      Symbol	Token: "565KL24\t21907
    },
    {
      Symbol	Token: "565RJ25\t22052
    },
    {
      Symbol	Token: "565TN25\t4562
    },
    {
      Symbol	Token: "568MH24\t155
    },
    {
      Symbol	Token: "56HR24\t21649
    },
    {
      Symbol	Token: "56MH24\t12
    },
    {
      Symbol	Token: "56RJ24\t416
    },
    {
      Symbol	Token: "572BR26\t1886
    },
    {
      Symbol	Token: "574GS2026\t6695
    },
    {
      Symbol	Token: "575AP24\t285
    },
    {
      Symbol	Token: "575KA25\t21928
    },
    {
      Symbol	Token: "575PY26\t836
    },
    {
      Symbol	Token: "575RJ25\t22055
    },
    {
      Symbol	Token: "575TN25\t22105
    },
    {
      Symbol	Token: "576TN24\t22117
    },
    {
      Symbol	Token: "577GJ25\t7809
    },
    {
      Symbol	Token: "577GJ25A\t8008
    },
    {
      Symbol	Token: "577GS2030\t22292
    },
    {
      Symbol	Token: "577KL25\t21902
    },
    {
      Symbol	Token: "579GS2030\t18857
    },
    {
      Symbol	Token: "579KL24\t288
    },
    {
      Symbol	Token: "57BR24\t63
    },
    {
      Symbol	Token: "57KA26\t21927
    },
    {
      Symbol	Token: "57MH24\t80
    },
    {
      Symbol	Token: "582BR26\t1936
    },
    {
      Symbol	Token: "582RJ27\t1824
    },
    {
      Symbol	Token: "582TS24\t22193
    },
    {
      Symbol	Token: "585GS2030\t1341
    },
    {
      Symbol	Token: "588CG26\t1703
    },
    {
      Symbol	Token: "588GJ25\t3049
    },
    {
      Symbol	Token: "589AP25\t20697
    },
    {
      Symbol	Token: "589RJ25\t22404
    },
    {
      Symbol	Token: "58MH25\t8009
    },
    {
      Symbol	Token: "58RJ25\t22046
    },
    {
      Symbol	Token: "591KL25\t21911
    },
    {
      Symbol	Token: "593CG26\t1449
    },
    {
      Symbol	Token: "593RJ25\t2665
    },
    {
      Symbol	Token: "594CG25\t423
    },
    {
      Symbol	Token: "594RJ25\t3194
    },
    {
      Symbol	Token: "595TN25\t22121
    },
    {
      Symbol	Token: "596PY26\t5880
    },
    {
      Symbol	Token: "597CG27\t1887
    },
    {
      Symbol	Token: "597GS2025\t6871
    },
    {
      Symbol	Token: "599MP26\t5525
    },
    {
      Symbol	Token: "59TS25\t22184
    },
    {
      Symbol	Token: "5PAISA\t445
    },
    {
      Symbol	Token: "601GS2028\t6866
    },
    {
      Symbol	Token: "601RJ26\t5994
    },
    {
      Symbol	Token: "603RJ25\t22069
    },
    {
      Symbol	Token: "604AS25\t418
    },
    {
      Symbol	Token: "604AS26\t7038
    },
    {
      Symbol	Token: "604GJ26\t6209
    },
    {
      Symbol	Token: "604KL25\t22403
    },
    {
      Symbol	Token: "605AS25\t62
    },
    {
      Symbol	Token: "605RJ26\t4570
    },
    {
      Symbol	Token: "607RJ26\t6987
    },
    {
      Symbol	Token: "609AS26\t6304
    },
    {
      Symbol	Token: "609KA28\t21930
    },
    {
      Symbol	Token: "609RJ26\t2125
    },
    {
      Symbol	Token: "610GS2031\t5012
    },
    {
      Symbol	Token: "612KA27\t21929
    },
    {
      Symbol	Token: "613GS2028\t6868
    },
    {
      Symbol	Token: "613RJ26\t3516
    },
    {
      Symbol	Token: "616RJ24\t22047
    },
    {
      Symbol	Token: "617GS2023\t6870
    },
    {
      Symbol	Token: "617KL27\t1709
    },
    {
      Symbol	Token: "617TS25\t22194
    },
    {
      Symbol	Token: "618GJ26\t3058
    },
    {
      Symbol	Token: "618GJ26A\t7892
    },
    {
      Symbol	Token: "618GS2024\t14251
    },
    {
      Symbol	Token: "619AS26\t2123
    },
    {
      Symbol	Token: "619GS2034\t18973
    },
    {
      Symbol	Token: "61CG27\t2013
    },
    {
      Symbol	Token: "61RJ26\t3638
    },
    {
      Symbol	Token: "61RJ27\t837
    },
    {
      Symbol	Token: "621AS26\t2224
    },
    {
      Symbol	Token: "622GS2035\t953
    },
    {
      Symbol	Token: "622KL27\t1361
    },
    {
      Symbol	Token: "623RJ27\t5877
    },
    {
      Symbol	Token: "624HR26\t21640
    },
    {
      Symbol	Token: "624MH26\t5330
    },
    {
      Symbol	Token: "624MH28\t21947
    },
    {
      Symbol	Token: "624RJ26\t4863
    },
    {
      Symbol	Token: "624TS26\t22187
    },
    {
      Symbol	Token: "625AS26\t5226
    },
    {
      Symbol	Token: "627RJ26\t5078
    },
    {
      Symbol	Token: "628GJ27\t5524
    },
    {
      Symbol	Token: "629HP26\t21140
    },
    {
      Symbol	Token: "629RJ26\t5025
    },
    {
      Symbol	Token: "629RJ26A\t7500
    },
    {
      Symbol	Token: "62RJ26\t8010
    },
    {
      Symbol	Token: "62RJ27\t22272
    },
    {
      Symbol	Token: "632KA28\t22302
    },
    {
      Symbol	Token: "633AS26\t4982
    },
    {
      Symbol	Token: "633AS26A\t7495
    },
    {
      Symbol	Token: "633TN30\t22135
    },
    {
      Symbol	Token: "634RJ27\t6307
    },
    {
      Symbol	Token: "635AP27\t20572
    },
    {
      Symbol	Token: "635MH28\t1212
    },
    {
      Symbol	Token: "636HP28\t22267
    },
    {
      Symbol	Token: "638MH27\t5467
    },
    {
      Symbol	Token: "639AP26\t21647
    },
    {
      Symbol	Token: "639BR27\t3650
    },
    {
      Symbol	Token: "63MOONS\t11868
    },
    {
      Symbol	Token: "63PY26\t2372
    },
    {
      Symbol	Token: "63PY27\t7153
    },
    {
      Symbol	Token: "641GA30\t21040
    },
    {
      Symbol	Token: "641TN30\t22103
    },
    {
      Symbol	Token: "642GA30\t852
    },
    {
      Symbol	Token: "642MN30\t21919
    },
    {
      Symbol	Token: "642PN30\t22298
    },
    {
      Symbol	Token: "642UP30\t849
    },
    {
      Symbol	Token: "643AP30\t976
    },
    {
      Symbol	Token: "643AS26\t2733
    },
    {
      Symbol	Token: "643MH27\t5414
    },
    {
      Symbol	Token: "643RJ27\t7867
    },
    {
      Symbol	Token: "643UK30\t22451
    },
    {
      Symbol	Token: "644GJ29\t20601
    },
    {
      Symbol	Token: "644GJ29A\t22337
    },
    {
      Symbol	Token: "644MH28\t22342
    },
    {
      Symbol	Token: "644UK30\t853
    },
    {
      Symbol	Token: "644UP30\t22262
    },
    {
      Symbol	Token: "645BR27\t3695
    },
    {
      Symbol	Token: "645GJ30\t22448
    },
    {
      Symbol	Token: "645GJ30A\t1827
    },
    {
      Symbol	Token: "645GS2029\t13472
    },
    {
      Symbol	Token: "645HP29\t838
    },
    {
      Symbol	Token: "645MH27\t599
    },
    {
      Symbol	Token: "645ML30\t22449
    },
    {
      Symbol	Token: "645MN30\t22301
    },
    {
      Symbol	Token: "645RJ27\t2071
    },
    {
      Symbol	Token: "645RJ27A\t7894
    },
    {
      Symbol	Token: "645RJ30\t855
    },
    {
      Symbol	Token: "646GJ30\t982
    },
    {
      Symbol	Token: "646JK30\t22303
    },
    {
      Symbol	Token: "646RJ30\t22340
    },
    {
      Symbol	Token: "646RJ30A\t22450
    },
    {
      Symbol	Token: "646WB30\t22269
    },
    {
      Symbol	Token: "647GJ30\t21422
    },
    {
      Symbol	Token: "647KA30\t1080
    },
    {
      Symbol	Token: "647MH28\t773
    },
    {
      Symbol	Token: "648AP27\t20922
    },
    {
      Symbol	Token: "648AP32\t21039
    },
    {
      Symbol	Token: "648AS30\t985
    },
    {
      Symbol	Token: "648HR40\t22299
    },
    {
      Symbol	Token: "648KA30\t22335
    },
    {
      Symbol	Token: "648KA31\t861
    },
    {
      Symbol	Token: "648MZ30\t988
    },
    {
      Symbol	Token: "648RJ27\t8319
    },
    {
      Symbol	Token: "649AP33\t22264
    },
    {
      Symbol	Token: "649GJ29\t1364
    },
    {
      Symbol	Token: "649KA30\t21390
    },
    {
      Symbol	Token: "649KA30A\t1158
    },
    {
      Symbol	Token: "649KA31\t22336
    },
    {
      Symbol	Token: "649MH31\t22343
    },
    {
      Symbol	Token: "649MP24\t21990
    },
    {
      Symbol	Token: "649RJ30\t22043
    },
    {
      Symbol	Token: "649TN50\t22136
    },
    {
      Symbol	Token: "649TS50\t22263
    },
    {
      Symbol	Token: "64AP28\t1362
    },
    {
      Symbol	Token: "64GJ30\t22296
    },
    {
      Symbol	Token: "64GJ30A\t846
    },
    {
      Symbol	Token: "64KA30\t22265
    },
    {
      Symbol	Token: "64KA30A\t22452
    },
    {
      Symbol	Token: "64KA30B\t843
    },
    {
      Symbol	Token: "64KA30C\t972
    },
    {
      Symbol	Token: "64KA31\t22266
    },
    {
      Symbol	Token: "64MH30\t973
    },
    {
      Symbol	Token: "651HP30\t840
    },
    {
      Symbol	Token: "651KA30\t758
    },
    {
      Symbol	Token: "651KA30B\t1650
    },
    {
      Symbol	Token: "651KA30C\t1727
    },
    {
      Symbol	Token: "651KA31\t21419
    },
    {
      Symbol	Token: "652KA30\t1522
    },
    {
      Symbol	Token: "652MH30\t1236
    },
    {
      Symbol	Token: "652ML30\t22009
    },
    {
      Symbol	Token: "652MP35\t21949
    },
    {
      Symbol	Token: "652NL30\t21993
    },
    {
      Symbol	Token: "652PY30\t994
    },
    {
      Symbol	Token: "652TS50\t22304
    },
    {
      Symbol	Token: "653CG28\t5671
    },
    {
      Symbol	Token: "653HP29\t1215
    },
    {
      Symbol	Token: "653KA30\t1365
    },
    {
      Symbol	Token: "653TN31\t1839
    },
    {
      Symbol	Token: "654AP30\t20923
    },
    {
      Symbol	Token: "654AR30\t1157
    },
    {
      Symbol	Token: "654GA30\t20921
    },
    {
      Symbol	Token: "654GA30A\t1516
    },
    {
      Symbol	Token: "654GJ30\t21216
    },
    {
      Symbol	Token: "654GS2032\t7843
    },
    {
      Symbol	Token: "654KA30\t1453
    },
    {
      Symbol	Token: "654MH27\t8126
    },
    {
      Symbol	Token: "654MH30\t21932
    },
    {
      Symbol	Token: "654MP35\t22297
    },
    {
      Symbol	Token: "654RJ30\t22059
    },
    {
      Symbol	Token: "654RJ30A\t1160
    },
    {
      Symbol	Token: "654UP30\t779
    },
    {
      Symbol	Token: "654WB35\t22173
    },
    {
      Symbol	Token: "655AP28\t21549
    },
    {
      Symbol	Token: "655AP33\t864
    },
    {
      Symbol	Token: "655AP35\t22294
    },
    {
      Symbol	Token: "655AS30\t20653
    },
    {
      Symbol	Token: "655AS30A\t22447
    },
    {
      Symbol	Token: "655GA30\t1074
    },
    {
      Symbol	Token: "655GA30A\t1454
    },
    {
      Symbol	Token: "655KL30\t21901
    },
    {
      Symbol	Token: "655MH28\t605
    },
    {
      Symbol	Token: "655RJ30\t22079
    },
    {
      Symbol	Token: "655RJ50\t22023
    },
    {
      Symbol	Token: "655RJ55\t22033
    },
    {
      Symbol	Token: "655TN30\t22114
    },
    {
      Symbol	Token: "655TR30\t858
    },
    {
      Symbol	Token: "655WB30\t22178
    },
    {
      Symbol	Token: "656AP31\t20666
    },
    {
      Symbol	Token: "656AS30\t754
    },
    {
      Symbol	Token: "656KA30\t14
    },
    {
      Symbol	Token: "656MH30\t776
    },
    {
      Symbol	Token: "656MH32\t1000
    },
    {
      Symbol	Token: "656MN30\t21921
    },
    {
      Symbol	Token: "656UP30\t1525
    },
    {
      Symbol	Token: "657AP30\t21235
    },
    {
      Symbol	Token: "657GA30\t1237
    },
    {
      Symbol	Token: "657GJ29\t20279
    },
    {
      Symbol	Token: "657GJ31\t2014
    },
    {
      Symbol	Token: "657GS2033\t7194
    },
    {
      Symbol	Token: "657HP30\t1644
    },
    {
      Symbol	Token: "657HP30A\t1647
    },
    {
      Symbol	Token: "657MH31\t21936
    },
    {
      Symbol	Token: "657MP30\t21975
    },
    {
      Symbol	Token: "657MZ35\t22014
    },
    {
      Symbol	Token: "657RJ30\t22056
    },
    {
      Symbol	Token: "657TN31\t1890
    },
    {
      Symbol	Token: "658AP30\t20280
    },
    {
      Symbol	Token: "658GA30\t20598
    },
    {
      Symbol	Token: "658GA30A\t1646
    },
    {
      Symbol	Token: "658GA31\t1830
    },
    {
      Symbol	Token: "658GJ27\t3061
    },
    {
      Symbol	Token: "658JK30\t22179
    },
    {
      Symbol	Token: "658KA30\t20288
    },
    {
      Symbol	Token: "658MP35\t21948
    },
    {
      Symbol	Token: "658RJ30\t22050
    },
    {
      Symbol	Token: "658UP30\t1239
    },
    {
      Symbol	Token: "659CG28\t5971
    },
    {
      Symbol	Token: "659HR30\t1077
    },
    {
      Symbol	Token: "659RJ30\t22073
    },
    {
      Symbol	Token: "659RJ30A\t1241
    },
    {
      Symbol	Token: "659RJ31\t1836
    },
    {
      Symbol	Token: "659UP30\t997
    },
    {
      Symbol	Token: "65AP30\t20654
    },
    {
      Symbol	Token: "65AP38\t22295
    },
    {
      Symbol	Token: "65GA30\t22261
    },
    {
      Symbol	Token: "65GA30A\t22369
    },
    {
      Symbol	Token: "65GJ30\t1075
    },
    {
      Symbol	Token: "65GJ30A\t1233
    },
    {
      Symbol	Token: "65KA30\t22368
    },
    {
      Symbol	Token: "65KA30A\t1227
    },
    {
      Symbol	Token: "65KL27\t21909
    },
    {
      Symbol	Token: "65NL30\t991
    },
    {
      Symbol	Token: "65OR23\t22005
    },
    {
      Symbol	Token: "65RJ30\t22372
    },
    {
      Symbol	Token: "65RJ50\t22293
    },
    {
      Symbol	Token: "65TN30\t22374
    },
    {
      Symbol	Token: "65UP30\t22081
    },
    {
      Symbol	Token: "65WB30\t22174
    },
    {
      Symbol	Token: "660AP39\t22332
    },
    {
      Symbol	Token: "660AP40\t22333
    },
    {
      Symbol	Token: "660TS30\t22195
    },
    {
      Symbol	Token: "661KA30\t593
    },
    {
      Symbol	Token: "661KA33\t1944
    },
    {
      Symbol	Token: "661KA35\t22454
    },
    {
      Symbol	Token: "661MP35\t22338
    },
    {
      Symbol	Token: "661MP37\t1953
    },
    {
      Symbol	Token: "661RJ30\t1083
    },
    {
      Symbol	Token: "661RJ31\t1896
    },
    {
      Symbol	Token: "661RJ31A\t2016
    },
    {
      Symbol	Token: "661TS51\t2017
    },
    {
      Symbol	Token: "661UP31\t1891
    },
    {
      Symbol	Token: "661WB36\t1947
    },
    {
      Symbol	Token: "662AS30\t1425
    },
    {
      Symbol	Token: "662CG28\t6315
    },
    {
      Symbol	Token: "662GA31\t1939
    },
    {
      Symbol	Token: "662GS2051\t7193
    },
    {
      Symbol	Token: "662HR41\t2019
    },
    {
      Symbol	Token: "662JH30\t761
    },
    {
      Symbol	Token: "662JK30\t22180
    },
    {
      Symbol	Token: "662KA32\t782
    },
    {
      Symbol	Token: "662KA32A\t1733
    },
    {
      Symbol	Token: "662NL30\t1428
    },
    {
      Symbol	Token: "662PY28\t6895
    },
    {
      Symbol	Token: "662RJ30\t1369
    },
    {
      Symbol	Token: "662RJ41\t2020
    },
    {
      Symbol	Token: "662TS41\t1959
    },
    {
      Symbol	Token: "662UK30\t617
    },
    {
      Symbol	Token: "662UP30\t1695
    },
    {
      Symbol	Token: "662UP31\t1938
    },
    {
      Symbol	Token: "662WB35\t22341
    },
    {
      Symbol	Token: "663AP37\t1905
    },
    {
      Symbol	Token: "663GJ29\t65
    },
    {
      Symbol	Token: "663HP31\t2021
    },
    {
      Symbol	Token: "663HP33\t2023
    },
    {
      Symbol	Token: "663HR28\t6317
    },
    {
      Symbol	Token: "663KA30\t22410
    },
    {
      Symbol	Token: "663KA34\t1651
    },
    {
      Symbol	Token: "663KL30\t21910
    },
    {
      Symbol	Token: "663MH30\t596
    },
    {
      Symbol	Token: "663ML31\t1940
    },
    {
      Symbol	Token: "663MN31\t1833
    },
    {
      Symbol	Token: "663PN51\t1910
    },
    {
      Symbol	Token: "663TN35\t1652
    },
    {
      Symbol	Token: "663TN55\t22102
    },
    {
      Symbol	Token: "663UP30\t614
    },
    {
      Symbol	Token: "663WB31\t2022
    },
    {
      Symbol	Token: "663WB41\t1902
    },
    {
      Symbol	Token: "664AP39\t1866
    },
    {
      Symbol	Token: "664AS30\t1246
    },
    {
      Symbol	Token: "664BR25\t2724
    },
    {
      Symbol	Token: "664GS2035\t3204
    },
    {
      Symbol	Token: "664JK36\t1863
    },
    {
      Symbol	Token: "664KA32\t22370
    },
    {
      Symbol	Token: "664MP30\t21971
    },
    {
      Symbol	Token: "664MZ32\t1899
    },
    {
      Symbol	Token: "664PY32\t1730
    },
    {
      Symbol	Token: "664RJ24\t22075
    },
    {
      Symbol	Token: "664RJ30\t22412
    },
    {
      Symbol	Token: "664SK31\t1888
    },
    {
      Symbol	Token: "664TN23\t22130
    },
    {
      Symbol	Token: "664TS50\t22183
    },
    {
      Symbol	Token: "664TS51\t1872
    },
    {
      Symbol	Token: "664UP30\t21
    },
    {
      Symbol	Token: "664UP31\t2024
    },
    {
      Symbol	Token: "665AP36\t1739
    },
    {
      Symbol	Token: "665AP40\t1745
    },
    {
      Symbol	Token: "665AP41\t1871
    },
    {
      Symbol	Token: "665GJ30\t22406
    },
    {
      Symbol	Token: "665JK30\t1373
    },
    {
      Symbol	Token: "665KA30\t72
    },
    {
      Symbol	Token: "665KA35\t1531
    },
    {
      Symbol	Token: "665ML30\t609
    },
    {
      Symbol	Token: "665PN50\t21716
    },
    {
      Symbol	Token: "665PN50A\t1757
    },
    {
      Symbol	Token: "665TR35\t1738
    },
    {
      Symbol	Token: "665TS40\t1742
    },
    {
      Symbol	Token: "665WB28\t3726
    },
    {
      Symbol	Token: "665WB30\t22176
    },
    {
      Symbol	Token: "666JH34\t1860
    },
    {
      Symbol	Token: "666KA32\t1248
    },
    {
      Symbol	Token: "666TN29\t7050
    },
    {
      Symbol	Token: "666TN30\t22413
    },
    {
      Symbol	Token: "667GS2035\t5577
    },
    {
      Symbol	Token: "667GS2050\t956
    },
    {
      Symbol	Token: "667MH31\t29
    },
    {
      Symbol	Token: "667MH32\t1251
    },
    {
      Symbol	Token: "667RJ30\t87
    },
    {
      Symbol	Token: "667RJ50\t22080
    },
    {
      Symbol	Token: "667TN50\t22375
    },
    {
      Symbol	Token: "667TS50\t1535
    },
    {
      Symbol	Token: "667UK30\t76
    },
    {
      Symbol	Token: "667UP30\t22414
    },
    {
      Symbol	Token: "668AP24\t20569
    },
    {
      Symbol	Token: "668AP33\t1378
    },
    {
      Symbol	Token: "668AP35\t22453
    },
    {
      Symbol	Token: "668AP35A\t1432
    },
    {
      Symbol	Token: "668AP39\t22455
    },
    {
      Symbol	Token: "668GA30\t22405
    },
    {
      Symbol	Token: "668GS2031\t7205
    },
    {
      Symbol	Token: "668HR39\t22373
    },
    {
      Symbol	Token: "668JH32\t1376
    },
    {
      Symbol	Token: "668KA36\t1437
    },
    {
      Symbol	Token: "668MZ31\t1430
    },
    {
      Symbol	Token: "668TN55\t22134
    },
    {
      Symbol	Token: "668UP30\t92
    },
    {
      Symbol	Token: "668WB30\t22411
    },
    {
      Symbol	Token: "668WB35\t1532
    },
    {
      Symbol	Token: "669GS2024\t9962
    },
    {
      Symbol	Token: "669KA37\t1379
    },
    {
      Symbol	Token: "669MP25\t2730
    },
    {
      Symbol	Token: "669MP30\t21992
    },
    {
      Symbol	Token: "669PN30\t590
    },
    {
      Symbol	Token: "669TN30\t179
    },
    {
      Symbol	Token: "669TN50\t22113
    },
    {
      Symbol	Token: "669TS40\t1655
    },
    {
      Symbol	Token: "669TS50\t22371
    },
    {
      Symbol	Token: "669UP30\t22097
    },
    {
      Symbol	Token: "66AS30\t1163
    },
    {
      Symbol	Token: "66AS30A\t1645
    },
    {
      Symbol	Token: "66GA30\t21389
    },
    {
      Symbol	Token: "66GA30A\t20
    },
    {
      Symbol	Token: "66GJ29\t21650
    },
    {
      Symbol	Token: "66HP30\t1221
    },
    {
      Symbol	Token: "66KA37\t1950
    },
    {
      Symbol	Token: "66MH31\t21937
    },
    {
      Symbol	Token: "66ML30\t1528
    },
    {
      Symbol	Token: "66ML30A\t1712
    },
    {
      Symbol	Token: "66MN30\t1368
    },
    {
      Symbol	Token: "66MZ30\t22017
    },
    {
      Symbol	Token: "66PN30\t1165
    },
    {
      Symbol	Token: "66RJ30\t18
    },
    {
      Symbol	Token: "66RJ30A\t611
    },
    {
      Symbol	Token: "66RJ30B\t1422
    },
    {
      Symbol	Token: "66RJ30C\t1715
    },
    {
      Symbol	Token: "66SK30\t1084
    },
    {
      Symbol	Token: "66TN29\t22129
    },
    {
      Symbol	Token: "66TN30\t22111
    },
    {
      Symbol	Token: "66UK31\t1854
    },
    {
      Symbol	Token: "66UP30\t1086
    },
    {
      Symbol	Token: "66UP30A\t1649
    },
    {
      Symbol	Token: "66UP31\t1842
    },
    {
      Symbol	Token: "66WB30\t1721
    },
    {
      Symbol	Token: "670AP26\t20600
    },
    {
      Symbol	Token: "670OR24\t22002
    },
    {
      Symbol	Token: "670RJ50\t22070
    },
    {
      Symbol	Token: "670TN50\t22128
    },
    {
      Symbol	Token: "671RJ30\t22077
    },
    {
      Symbol	Token: "671TN29\t6741
    },
    {
      Symbol	Token: "671TS40\t1446
    },
    {
      Symbol	Token: "671TS50\t22457
    },
    {
      Symbol	Token: "671WB40\t1443
    },
    {
      Symbol	Token: "672AP28\t20914
    },
    {
      Symbol	Token: "672GA30\t20913
    },
    {
      Symbol	Token: "672GJ30\t3750
    },
    {
      Symbol	Token: "672HR35\t867
    },
    {
      Symbol	Token: "672KA33\t1166
    },
    {
      Symbol	Token: "672KL27\t2901
    },
    {
      Symbol	Token: "672PN30\t21786
    },
    {
      Symbol	Token: "672RJ30\t171
    },
    {
      Symbol	Token: "672TN27\t420
    },
    {
      Symbol	Token: "672TS26\t22192
    },
    {
      Symbol	Token: "673KL28\t21903
    },
    {
      Symbol	Token: "673MP30\t21981
    },
    {
      Symbol	Token: "673PN40\t1382
    },
    {
      Symbol	Token: "673SK30\t173
    },
    {
      Symbol	Token: "673TN30\t22122
    },
    {
      Symbol	Token: "673TN40\t1254
    },
    {
      Symbol	Token: "673TS50\t1256
    },
    {
      Symbol	Token: "674GA30\t165
    },
    {
      Symbol	Token: "674PN24\t21788
    },
    {
      Symbol	Token: "674TN50\t22112
    },
    {
      Symbol	Token: "674TS50\t1386
    },
    {
      Symbol	Token: "674UP30\t161
    },
    {
      Symbol	Token: "675BR27\t4980
    },
    {
      Symbol	Token: "675GJ29\t6093
    },
    {
      Symbol	Token: "675GJ31\t4575
    },
    {
      Symbol	Token: "675KA33\t74
    },
    {
      Symbol	Token: "675KA33A\t618
    },
    {
      Symbol	Token: "675KA34\t1092
    },
    {
      Symbol	Token: "675KA35\t1006
    },
    {
      Symbol	Token: "675RJ30\t969
    },
    {
      Symbol	Token: "675RJ31\t3195
    },
    {
      Symbol	Token: "676GS2061\t2317
    },
    {
      Symbol	Token: "676MP33\t95
    },
    {
      Symbol	Token: "676MP40\t1012
    },
    {
      Symbol	Token: "676PN24\t21718
    },
    {
      Symbol	Token: "676PN40\t877
    },
    {
      Symbol	Token: "676RJ31\t3641
    },
    {
      Symbol	Token: "676TN31\t5742
    },
    {
      Symbol	Token: "677AP38\t876
    },
    {
      Symbol	Token: "677AP40\t22422
    },
    {
      Symbol	Token: "677BR28\t5227
    },
    {
      Symbol	Token: "677KA33\t22421
    },
    {
      Symbol	Token: "677KA34\t35
    },
    {
      Symbol	Token: "677RJ31\t3511
    },
    {
      Symbol	Token: "677RJ31A\t5743
    },
    {
      Symbol	Token: "677TN24\t22131
    },
    {
      Symbol	Token: "677TN31\t3364
    },
    {
      Symbol	Token: "677WB40\t42
    },
    {
      Symbol	Token: "678AP38\t3196
    },
    {
      Symbol	Token: "678AP39\t3200
    },
    {
      Symbol	Token: "678GA31\t4578
    },
    {
      Symbol	Token: "678JK33\t3244
    },
    {
      Symbol	Token: "678KA32\t182
    },
    {
      Symbol	Token: "678KL31\t3655
    },
    {
      Symbol	Token: "678MH31\t3659
    },
    {
      Symbol	Token: "678MH32\t185
    },
    {
      Symbol	Token: "678MN31\t3304
    },
    {
      Symbol	Token: "678RJ23\t21897
    },
    {
      Symbol	Token: "678RJ30\t22063
    },
    {
      Symbol	Token: "678RJ31\t3241
    },
    {
      Symbol	Token: "678RJ31A\t3373
    },
    {
      Symbol	Token: "678SK31\t3643
    },
    {
      Symbol	Token: "678TS50\t878
    },
    {
      Symbol	Token: "678WB35\t1169
    },
    {
      Symbol	Token: "679AP34\t1004
    },
    {
      Symbol	Token: "679GS2027\t7202
    },
    {
      Symbol	Token: "679GS2029\t7195
    },
    {
      Symbol	Token: "679HR31\t3517
    },
    {
      Symbol	Token: "679JK30\t22182
    },
    {
      Symbol	Token: "679MP33\t32
    },
    {
      Symbol	Token: "679MP40\t1095
    },
    {
      Symbol	Token: "679PN35\t1007
    },
    {
      Symbol	Token: "679WB28\t4877
    },
    {
      Symbol	Token: "679WB28A\t5344
    },
    {
      Symbol	Token: "67AS27\t2374
    },
    {
      Symbol	Token: "67GJ30\t167
    },
    {
      Symbol	Token: "67HR30\t26
    },
    {
      Symbol	Token: "67JK30\t23
    },
    {
      Symbol	Token: "67JK32\t1253
    },
    {
      Symbol	Token: "67KA30\t170
    },
    {
      Symbol	Token: "67KL27\t21916
    },
    {
      Symbol	Token: "67MH28\t158
    },
    {
      Symbol	Token: "67ML30\t83
    },
    {
      Symbol	Token: "67NL30\t86
    },
    {
      Symbol	Token: "67PN30\t21719
    },
    {
      Symbol	Token: "67PN40\t22456
    },
    {
      Symbol	Token: "67RJ24\t22071
    },
    {
      Symbol	Token: "67TR30\t89
    },
    {
      Symbol	Token: "681KL31\t4581
    },
    {
      Symbol	Token: "681MH28\t427
    },
    {
      Symbol	Token: "681MH31\t3704
    },
    {
      Symbol	Token: "681PN31\t3755
    },
    {
      Symbol	Token: "681TR35\t1172
    },
    {
      Symbol	Token: "682BR28\t5026
    },
    {
      Symbol	Token: "682CG28\t4984
    },
    {
      Symbol	Token: "682JH34\t3082
    },
    {
      Symbol	Token: "682KL32\t3077
    },
    {
      Symbol	Token: "682KL35\t3083
    },
    {
      Symbol	Token: "682MH32\t3376
    },
    {
      Symbol	Token: "682ML31\t3238
    },
    {
      Symbol	Token: "682PN36\t3085
    },
    {
      Symbol	Token: "682RJ31\t3259
    },
    {
      Symbol	Token: "683BR30\t7043
    },
    {
      Symbol	Token: "683GA31\t5882
    },
    {
      Symbol	Token: "683GJ30\t297
    },
    {
      Symbol	Token: "683GS2039\t6935
    },
    {
      Symbol	Token: "683KA31\t6988
    },
    {
      Symbol	Token: "683KA31A\t7045
    },
    {
      Symbol	Token: "683KA31B\t7155
    },
    {
      Symbol	Token: "683MH31\t4752
    },
    {
      Symbol	Token: "683MH32\t3567
    },
    {
      Symbol	Token: "683MH32A\t3665
    },
    {
      Symbol	Token: "683MH32B\t4580
    },
    {
      Symbol	Token: "683TN31\t4755
    },
    {
      Symbol	Token: "683TN31A\t7156
    },
    {
      Symbol	Token: "683WB28\t4989
    },
    {
      Symbol	Token: "683WB31\t2925
    },
    {
      Symbol	Token: "683WB31A\t3519
    },
    {
      Symbol	Token: "684AR31\t3257
    },
    {
      Symbol	Token: "684BR30\t7152
    },
    {
      Symbol	Token: "684GA31\t3076
    },
    {
      Symbol	Token: "684GJ30\t454
    },
    {
      Symbol	Token: "684GJ31\t2928
    },
    {
      Symbol	Token: "684GJ31A\t5558
    },
    {
      Symbol	Token: "684HR32\t3571
    },
    {
      Symbol	Token: "684JK31\t3073
    },
    {
      Symbol	Token: "684KL30\t21913
    },
    {
      Symbol	Token: "684KL33\t3656
    },
    {
      Symbol	Token: "684MH32\t3520
    },
    {
      Symbol	Token: "684MZ34\t1090
    },
    {
      Symbol	Token: "684PN31\t5883
    },
    {
      Symbol	Token: "684RJ24\t22078
    },
    {
      Symbol	Token: "684RJ30\t22068
    },
    {
      Symbol	Token: "684RJ31\t3713
    },
    {
      Symbol	Token: "684RJ31A\t4571
    },
    {
      Symbol	Token: "684RJ31B\t6990
    },
    {
      Symbol	Token: "684TS40\t68
    },
    {
      Symbol	Token: "684UK31\t2919
    },
    {
      Symbol	Token: "684UP31\t5887
    },
    {
      Symbol	Token: "685AP36\t38
    },
    {
      Symbol	Token: "685AR31\t2922
    },
    {
      Symbol	Token: "685AS29\t8186
    },
    {
      Symbol	Token: "685AS31\t2930
    },
    {
      Symbol	Token: "685AS31A\t5881
    },
    {
      Symbol	Token: "685BR30\t5556
    },
    {
      Symbol	Token: "685GA31\t2077
    },
    {
      Symbol	Token: "685GA31A\t2910
    },
    {
      Symbol	Token: "685GA31B\t5674
    },
    {
      Symbol	Token: "685GA31C\t7154
    },
    {
      Symbol	Token: "685KA30\t300
    },
    {
      Symbol	Token: "685ML31\t2937
    },
    {
      Symbol	Token: "685MP31\t5677
    },
    {
      Symbol	Token: "685NL31\t3265
    },
    {
      Symbol	Token: "685NL31A\t3710
    },
    {
      Symbol	Token: "685RJ30\t302
    },
    {
      Symbol	Token: "685RJ31\t2079
    },
    {
      Symbol	Token: "685TN51\t2097
    },
    {
      Symbol	Token: "685WB30\t22219
    },
    {
      Symbol	Token: "685WB30A\t22226
    },
    {
      Symbol	Token: "685WB31\t5566
    },
    {
      Symbol	Token: "686AP35\t5736
    },
    {
      Symbol	Token: "686HP30\t6878
    },
    {
      Symbol	Token: "686JH36\t2916
    },
    {
      Symbol	Token: "686KA30\t449
    },
    {
      Symbol	Token: "686KL35\t5737
    },
    {
      Symbol	Token: "686MH32\t3707
    },
    {
      Symbol	Token: "686PN33\t2940
    },
    {
      Symbol	Token: "686PY34\t2943
    },
    {
      Symbol	Token: "686RJ36\t5740
    },
    {
      Symbol	Token: "686TS41\t2095
    },
    {
      Symbol	Token: "686UP30\t22094
    },
    {
      Symbol	Token: "687AP35\t746
    },
    {
      Symbol	Token: "687AP37\t2096
    },
    {
      Symbol	Token: "687AP38\t41
    },
    {
      Symbol	Token: "687AP40\t5741
    },
    {
      Symbol	Token: "687AS31\t5670
    },
    {
      Symbol	Token: "687AS31A\t7041
    },
    {
      Symbol	Token: "687BR30\t5970
    },
    {
      Symbol	Token: "687BR30A\t6877
    },
    {
      Symbol	Token: "687HR31\t5536
    },
    {
      Symbol	Token: "687JH31\t5676
    },
    {
      Symbol	Token: "687KA31\t6887
    },
    {
      Symbol	Token: "687MH30\t448
    },
    {
      Symbol	Token: "687MH33\t3379
    },
    {
      Symbol	Token: "687MH33A\t3574
    },
    {
      Symbol	Token: "687MN31\t5691
    },
    {
      Symbol	Token: "687RJ25\t22067
    },
    {
      Symbol	Token: "687RJ31\t5561
    },
    {
      Symbol	Token: "687SK31\t6991
    },
    {
      Symbol	Token: "687UP31\t5695
    },
    {
      Symbol	Token: "688AP34\t21138
    },
    {
      Symbol	Token: "688AP35\t21054
    },
    {
      Symbol	Token: "688GA31\t5557
    },
    {
      Symbol	Token: "688GJ31\t4893
    },
    {
      Symbol	Token: "688KA31\t5986
    },
    {
      Symbol	Token: "688KA32\t7047
    },
    {
      Symbol	Token: "688MH33\t3522
    },
    {
      Symbol	Token: "688MN31\t2078
    },
    {
      Symbol	Token: "688PY31\t22026
    },
    {
      Symbol	Token: "688RJ46\t2089
    },
    {
      Symbol	Token: "688TS25\t22209
    },
    {
      Symbol	Token: "688UK30\t22168
    },
    {
      Symbol	Token: "688UP31\t2080
    },
    {
      Symbol	Token: "688UP31A\t4757
    },
    {
      Symbol	Token: "688WB40\t1015
    },
    {
      Symbol	Token: "689AP35\t2086
    },
    {
      Symbol	Token: "689BR28\t2065
    },
    {
      Symbol	Token: "689GA30\t303
    },
    {
      Symbol	Token: "689GA31\t4750
    },
    {
      Symbol	Token: "689GA31A\t5972
    },
    {
      Symbol	Token: "689GJ31\t5977
    },
    {
      Symbol	Token: "689GS2025\t13742
    },
    {
      Symbol	Token: "689KA33\t7159
    },
    {
      Symbol	Token: "689MH31\t4881
    },
    {
      Symbol	Token: "689MH32\t4760
    },
    {
      Symbol	Token: "689MP35\t21983
    },
    {
      Symbol	Token: "689MP40\t767
    },
    {
      Symbol	Token: "689PN31\t5560
    },
    {
      Symbol	Token: "689TN25\t22118
    },
    {
      Symbol	Token: "689TS51\t3266
    },
    {
      Symbol	Token: "689UP31\t5565
    },
    {
      Symbol	Token: "689WB41\t2092
    },
    {
      Symbol	Token: "68AS30\t164
    },
    {
      Symbol	Token: "68GS2060\t22438
    },
    {
      Symbol	Token: "68JK35\t1009
    },
    {
      Symbol	Token: "68KL31\t3070
    },
    {
      Symbol	Token: "68MH31\t4579
    },
    {
      Symbol	Token: "68MN30\t21924
    },
    {
      Symbol	Token: "68NL31\t5744
    },
    {
      Symbol	Token: "68OR25\t22006
    },
    {
      Symbol	Token: "68PN26\t21711
    },
    {
      Symbol	Token: "68RJ24\t22053
    },
    {
      Symbol	Token: "68RJ31\t3752
    },
    {
      Symbol	Token: "68SK31\t5745
    },
    {
      Symbol	Token: "68TS50\t1018
    },
    {
      Symbol	Token: "68TS50A\t1098
    },
    {
      Symbol	Token: "68UK31\t3067
    },
    {
      Symbol	Token: "690AP27\t20599
    },
    {
      Symbol	Token: "690UP30\t22093
    },
    {
      Symbol	Token: "691AP39\t626
    },
    {
      Symbol	Token: "691AP40\t3388
    },
    {
      Symbol	Token: "691AS30\t431
    },
    {
      Symbol	Token: "691AS31\t5969
    },
    {
      Symbol	Token: "691GJ30\t4991
    },
    {
      Symbol	Token: "691HP31\t6879
    },
    {
      Symbol	Token: "691MH33\t5678
    },
    {
      Symbol	Token: "691MH34\t5679
    },
    {
      Symbol	Token: "691MP40\t629
    },
    {
      Symbol	Token: "691NL30\t437
    },
    {
      Symbol	Token: "691RJ31\t4866
    },
    {
      Symbol	Token: "691RJ31A\t5541
    },
    {
      Symbol	Token: "691RJ31B\t5995
    },
    {
      Symbol	Token: "691UP30\t22100
    },
    {
      Symbol	Token: "691UP30A\t439
    },
    {
      Symbol	Token: "691WB31\t6897
    },
    {
      Symbol	Token: "692AP41\t6992
    },
    {
      Symbol	Token: "692AS24\t20568
    },
    {
      Symbol	Token: "692BR32\t21161
    },
    {
      Symbol	Token: "692HP33\t6881
    },
    {
      Symbol	Token: "692HR30\t5415
    },
    {
      Symbol	Token: "692HR36\t3382
    },
    {
      Symbol	Token: "692HR36A\t4612
    },
    {
      Symbol	Token: "692PN35\t21895
    },
    {
      Symbol	Token: "692RJ30\t430
    },
    {
      Symbol	Token: "692RJ31\t6557
    },
    {
      Symbol	Token: "692TN46\t6993
    },
    {
      Symbol	Token: "692UP31\t6000
    },
    {
      Symbol	Token: "693AP38\t5889
    },
    {
      Symbol	Token: "693GJ31\t2230
    },
    {
      Symbol	Token: "693GJ31A\t6320
    },
    {
      Symbol	Token: "693HP31\t5537
    },
    {
      Symbol	Token: "693HP32\t6880
    },
    {
      Symbol	Token: "693JH30\t428
    },
    {
      Symbol	Token: "693KA32\t5987
    },
    {
      Symbol	Token: "693SK31\t2913
    },
    {
      Symbol	Token: "693TS37\t5896
    },
    {
      Symbol	Token: "693UP31\t6558
    },
    {
      Symbol	Token: "693UP31A\t6744
    },
    {
      Symbol	Token: "694AP37\t3513
    },
    {
      Symbol	Token: "694AP38\t3514
    },
    {
      Symbol	Token: "694AP41\t5897
    },
    {
      Symbol	Token: "694AS31\t6556
    },
    {
      Symbol	Token: "694CG29\t2907
    },
    {
      Symbol	Token: "694GA30\t21139
    },
    {
      Symbol	Token: "694JK36\t7044
    },
    {
      Symbol	Token: "694MH31\t4993
    },
    {
      Symbol	Token: "694ML25\t10524
    },
    {
      Symbol	Token: "694MP35\t21979
    },
    {
      Symbol	Token: "694RJ33\t5886
    },
    {
      Symbol	Token: "694TN25\t22132
    },
    {
      Symbol	Token: "694TN50\t22126
    },
    {
      Symbol	Token: "694TS50\t322
    },
    {
      Symbol	Token: "694TS50A\t630
    },
    {
      Symbol	Token: "694TS60\t22207
    },
    {
      Symbol	Token: "694UK31\t4891
    },
    {
      Symbol	Token: "694UP31\t2140
    },
    {
      Symbol	Token: "694UP31A\t4889
    },
    {
      Symbol	Token: "694WB36\t7160
    },
    {
      Symbol	Token: "695AS30\t21162
    },
    {
      Symbol	Token: "695BR30\t6318
    },
    {
      Symbol	Token: "695GJ31\t5033
    },
    {
      Symbol	Token: "695GS2061\t6817
    },
    {
      Symbol	Token: "695HP29\t21141
    },
    {
      Symbol	Token: "695HP33\t20859
    },
    {
      Symbol	Token: "695HP34\t20858
    },
    {
      Symbol	Token: "695HR33\t3696
    },
    {
      Symbol	Token: "695KA31\t6210
    },
    {
      Symbol	Token: "695MH31\t5035
    },
    {
      Symbol	Token: "695MH32\t4883
    },
    {
      Symbol	Token: "695MN30\t21925
    },
    {
      Symbol	Token: "695PN25\t21787
    },
    {
      Symbol	Token: "695PN31\t4887
    },
    {
      Symbol	Token: "695PN40\t319
    },
    {
      Symbol	Token: "695RJ31\t2137
    },
    {
      Symbol	Token: "695SK30\t22156
    },
    {
      Symbol	Token: "695TN31\t2260
    },
    {
      Symbol	Token: "695TN31A\t4994
    },
    {
      Symbol	Token: "695TN31B\t5471
    },
    {
      Symbol	Token: "695WB35\t22145
    },
    {
      Symbol	Token: "696AP35\t3575
    },
    {
      Symbol	Token: "696AP36\t3576
    },
    {
      Symbol	Token: "696GA31\t4880
    },
    {
      Symbol	Token: "696HR29\t8011
    },
    {
      Symbol	Token: "696HR40\t20860
    },
    {
      Symbol	Token: "696JK35\t314
    },
    {
      Symbol	Token: "696KA31\t6095
    },
    {
      Symbol	Token: "696KA31A\t7304
    },
    {
      Symbol	Token: "696KL34\t3701
    },
    {
      Symbol	Token: "696PY30\t7511
    },
    {
      Symbol	Token: "696RJ31\t6327
    },
    {
      Symbol	Token: "696RJ41\t2147
    },
    {
      Symbol	Token: "696TN31\t6481
    },
    {
      Symbol	Token: "696TN51\t3578
    },
    {
      Symbol	Token: "696TN56\t3580
    },
    {
      Symbol	Token: "696TS45\t7055
    },
    {
      Symbol	Token: "696TS51\t3391
    },
    {
      Symbol	Token: "696UP31\t7314
    },
    {
      Symbol	Token: "697AS31\t5416
    },
    {
      Symbol	Token: "697AS31A\t7295
    },
    {
      Symbol	Token: "697GA31\t5469
    },
    {
      Symbol	Token: "697GS2026\t7158
    },
    {
      Symbol	Token: "697KA28\t20864
    },
    {
      Symbol	Token: "697KA30\t20912
    },
    {
      Symbol	Token: "697KA31\t311
    },
    {
      Symbol	Token: "697KL31\t5474
    },
    {
      Symbol	Token: "697MH28\t21946
    },
    {
      Symbol	Token: "697NL31\t5418
    },
    {
      Symbol	Token: "697PN31\t5419
    },
    {
      Symbol	Token: "697PN40\t21789
    },
    {
      Symbol	Token: "697RJ30\t22057
    },
    {
      Symbol	Token: "697RJ31\t4997
    },
    {
      Symbol	Token: "697RJ51\t2150
    },
    {
      Symbol	Token: "697RJ51A\t2257
    },
    {
      Symbol	Token: "697TN31\t5086
    },
    {
      Symbol	Token: "697TN31A\t5173
    },
    {
      Symbol	Token: "697TN31B\t5417
    },
    {
      Symbol	Token: "697TN31C\t6096
    },
    {
      Symbol	Token: "697TN46\t3647
    },
    {
      Symbol	Token: "697UP31\t5421
    },
    {
      Symbol	Token: "697UP31A\t6099
    },
    {
      Symbol	Token: "697WB36\t2149
    },
    {
      Symbol	Token: "698AP36\t5668
    },
    {
      Symbol	Token: "698AS31\t2134
    },
    {
      Symbol	Token: "698AS31A\t5468
    },
    {
      Symbol	Token: "698BR30\t6478
    },
    {
      Symbol	Token: "698GA31\t7296
    },
    {
      Symbol	Token: "698GJ31\t5334
    },
    {
      Symbol	Token: "698HP32\t5538
    },
    {
      Symbol	Token: "698HR31\t5229
    },
    {
      Symbol	Token: "698HR41\t2146
    },
    {
      Symbol	Token: "698JK36\t5890
    },
    {
      Symbol	Token: "698MH28\t21939
    },
    {
      Symbol	Token: "698MP30\t21978
    },
    {
      Symbol	Token: "698PN33\t5885
    },
    {
      Symbol	Token: "698PY33\t3079
    },
    {
      Symbol	Token: "698RJ31\t6100
    },
    {
      Symbol	Token: "698RJ31A\t6480
    },
    {
      Symbol	Token: "698TN31\t5037
    },
    {
      Symbol	Token: "698TN31A\t5230
    },
    {
      Symbol	Token: "698TR30\t22138
    },
    {
      Symbol	Token: "698TS28\t22191
    },
    {
      Symbol	Token: "698TS41\t3577
    },
    {
      Symbol	Token: "698UP31\t5473
    },
    {
      Symbol	Token: "698WB35\t22149
    },
    {
      Symbol	Token: "698WB36\t5697
    },
    {
      Symbol	Token: "698WB37\t6749
    },
    {
      Symbol	Token: "699AR30\t20861
    },
    {
      Symbol	Token: "699AS31\t6330
    },
    {
      Symbol	Token: "699GA30\t20862
    },
    {
      Symbol	Token: "699GA31\t4998
    },
    {
      Symbol	Token: "699GA31A\t5027
    },
    {
      Symbol	Token: "699GA31B\t5333
    },
    {
      Symbol	Token: "699GJ26\t21053
    },
    {
      Symbol	Token: "699GS2026\t15046
    },
    {
      Symbol	Token: "699GS2051\t6696
    },
    {
      Symbol	Token: "699HR31\t6211
    },
    {
      Symbol	Token: "699JH30\t22200
    },
    {
      Symbol	Token: "699JK31\t2074
    },
    {
      Symbol	Token: "699KA28\t2735
    },
    {
      Symbol	Token: "699KL36\t5891
    },
    {
      Symbol	Token: "699MH29\t8128
    },
    {
      Symbol	Token: "699MN30\t21922
    },
    {
      Symbol	Token: "699MP24\t21964
    },
    {
      Symbol	Token: "699MP41\t6750
    },
    {
      Symbol	Token: "699PY29\t8284
    },
    {
      Symbol	Token: "699RJ41\t2251
    },
    {
      Symbol	Token: "699TN41\t3645
    },
    {
      Symbol	Token: "699TR36\t5892
    },
    {
      Symbol	Token: "699TS28\t22190
    },
    {
      Symbol	Token: "699TS43\t6752
    },
    {
      Symbol	Token: "699UP31\t5038
    },
    {
      Symbol	Token: "699UP31A\t5174
    },
    {
      Symbol	Token: "699UP31B\t6350
    },
    {
      Symbol	Token: "699WB30\t5172
    },
    {
      Symbol	Token: "699WB31\t5470
    },
    {
      Symbol	Token: "699WB35\t620
    },
    {
      Symbol	Token: "699WB36\t3089
    },
    {
      Symbol	Token: "699WB36A\t5895
    },
    {
      Symbol	Token: "69AP32\t2081
    },
    {
      Symbol	Token: "69AP39\t3385
    },
    {
      Symbol	Token: "69AS30\t20155
    },
    {
      Symbol	Token: "69AS30A\t294
    },
    {
      Symbol	Token: "69GA30\t20148
    },
    {
      Symbol	Token: "69GA30A\t440
    },
    {
      Symbol	Token: "69GJ30\t3064
    },
    {
      Symbol	Token: "69HP30\t446
    },
    {
      Symbol	Token: "69JK33\t3392
    },
    {
      Symbol	Token: "69KA30\t20154
    },
    {
      Symbol	Token: "69KA31\t6743
    },
    {
      Symbol	Token: "69ML30\t306
    },
    {
      Symbol	Token: "69MN30\t21926
    },
    {
      Symbol	Token: "69MZ33\t3523
    },
    {
      Symbol	Token: "69PY28\t7893
    },
    {
      Symbol	Token: "69PY29\t291
    },
    {
      Symbol	Token: "69RJ32\t4764
    },
    {
      Symbol	Token: "69TN31\t5997
    },
    {
      Symbol	Token: "69UK30\t22172
    },
    {
      Symbol	Token: "69UK30A\t309
    },
    {
      Symbol	Token: "69UP30\t307
    },
    {
      Symbol	Token: "6AP25\t20920
    },
    {
      Symbol	Token: "701AP39\t3762
    },
    {
      Symbol	Token: "701MH32\t5002
    },
    {
      Symbol	Token: "701MN31\t5087
    },
    {
      Symbol	Token: "701PY26\t22027
    },
    {
      Symbol	Token: "701UP31\t5089
    },
    {
      Symbol	Token: "702AP30\t20863
    },
    {
      Symbol	Token: "702AP36\t6351
    },
    {
      Symbol	Token: "702AP37\t6352
    },
    {
      Symbol	Token: "702AP41\t5569
    },
    {
      Symbol	Token: "702AS30\t20851
    },
    {
      Symbol	Token: "702BR30\t21375
    },
    {
      Symbol	Token: "702HP36\t2236
    },
    {
      Symbol	Token: "702HR29\t2539
    },
    {
      Symbol	Token: "702KA31\t7524
    },
    {
      Symbol	Token: "702KA33\t7305
    },
    {
      Symbol	Token: "702KL28\t2537
    },
    {
      Symbol	Token: "702MH29\t2670
    },
    {
      Symbol	Token: "702ML41\t5570
    },
    {
      Symbol	Token: "702PN28\t2668
    },
    {
      Symbol	Token: "702TN30\t8287
    },
    {
      Symbol	Token: "702TN31\t7533
    },
    {
      Symbol	Token: "702UP31\t5335
    },
    {
      Symbol	Token: "702WB31\t5039
    },
    {
      Symbol	Token: "703AP40\t475
    },
    {
      Symbol	Token: "703AS31\t7512
    },
    {
      Symbol	Token: "703HP31\t7519
    },
    {
      Symbol	Token: "703HR40\t21236
    },
    {
      Symbol	Token: "703KA32\t6104
    },
    {
      Symbol	Token: "703KL30\t21915
    },
    {
      Symbol	Token: "703MN31\t6479
    },
    {
      Symbol	Token: "703MP31\t2239
    },
    {
      Symbol	Token: "703NL30\t21997
    },
    {
      Symbol	Token: "703PY28\t22029
    },
    {
      Symbol	Token: "703RJ30\t22076
    },
    {
      Symbol	Token: "703RJ31\t7531
    },
    {
      Symbol	Token: "703RJ36\t2248
    },
    {
      Symbol	Token: "703TN30\t8321
    },
    {
      Symbol	Token: "703TN46\t3719
    },
    {
      Symbol	Token: "703TN51\t3722
    },
    {
      Symbol	Token: "703TS51\t4556
    },
    {
      Symbol	Token: "703UP30\t22087
    },
    {
      Symbol	Token: "704AP34\t5967
    },
    {
      Symbol	Token: "704AP40\t3689
    },
    {
      Symbol	Token: "704AP41\t3692
    },
    {
      Symbol	Token: "704GJ30\t20359
    },
    {
      Symbol	Token: "704JK36\t3697
    },
    {
      Symbol	Token: "704KL34\t5539
    },
    {
      Symbol	Token: "704MH29\t2542
    },
    {
      Symbol	Token: "704ML30\t22012
    },
    {
      Symbol	Token: "704MP30\t21965
    },
    {
      Symbol	Token: "704MZ30\t22019
    },
    {
      Symbol	Token: "704MZ33\t2143
    },
    {
      Symbol	Token: "704RJ30\t22048
    },
    {
      Symbol	Token: "704RJ36\t4780
    },
    {
      Symbol	Token: "704TN30\t7812
    },
    {
      Symbol	Token: "704TN30A\t8134
    },
    {
      Symbol	Token: "704TS32\t7315
    },
    {
      Symbol	Token: "704TS51\t3767
    },
    {
      Symbol	Token: "704UK30\t22170
    },
    {
      Symbol	Token: "704UP30\t22085
    },
    {
      Symbol	Token: "704UP31\t7534
    },
    {
      Symbol	Token: "704WB35\t315
    },
    {
      Symbol	Token: "705AP31\t21237
    },
    {
      Symbol	Token: "705AP35\t5527
    },
    {
      Symbol	Token: "705AS30\t20774
    },
    {
      Symbol	Token: "705HP35\t2233
    },
    {
      Symbol	Token: "705HR40\t321
    },
    {
      Symbol	Token: "705JH30\t22198
    },
    {
      Symbol	Token: "705KL30\t21899
    },
    {
      Symbol	Token: "705KL36\t5991
    },
    {
      Symbol	Token: "705MH32\t466
    },
    {
      Symbol	Token: "705MN30\t21920
    },
    {
      Symbol	Token: "705MZ29\t8130
    },
    {
      Symbol	Token: "705MZ35\t316
    },
    {
      Symbol	Token: "705NL30\t21994
    },
    {
      Symbol	Token: "705NL31\t2242
    },
    {
      Symbol	Token: "705PN31\t2135
    },
    {
      Symbol	Token: "705RJ31\t2245
    },
    {
      Symbol	Token: "705RJ41\t3716
    },
    {
      Symbol	Token: "705TN26\t22119
    },
    {
      Symbol	Token: "705TS35\t5526
    },
    {
      Symbol	Token: "705TS41\t3725
    },
    {
      Symbol	Token: "705UK31\t7535
    },
    {
      Symbol	Token: "705WB30\t22143
    },
    {
      Symbol	Token: "705WB31\t2265
    },
    {
      Symbol	Token: "705WB36\t6001
    },
    {
      Symbol	Token: "705WB36A\t7319
    },
    {
      Symbol	Token: "706AP30\t20737
    },
    {
      Symbol	Token: "706CG29\t2740
    },
    {
      Symbol	Token: "706GJ32\t8189
    },
    {
      Symbol	Token: "706GS2028\t14970
    },
    {
      Symbol	Token: "706GS2046\t7184
    },
    {
      Symbol	Token: "706JK33\t6484
    },
    {
      Symbol	Token: "706KL38\t4790
    },
    {
      Symbol	Token: "706KL39\t5545
    },
    {
      Symbol	Token: "706KL41\t4793
    },
    {
      Symbol	Token: "706MZ34\t5992
    },
    {
      Symbol	Token: "706TS41\t4792
    },
    {
      Symbol	Token: "706UK30\t22166
    },
    {
      Symbol	Token: "706WB36\t4782
    },
    {
      Symbol	Token: "707AS31\t2266
    },
    {
      Symbol	Token: "707GJ31\t2381
    },
    {
      Symbol	Token: "707HR37\t4784
    },
    {
      Symbol	Token: "707JK30\t20796
    },
    {
      Symbol	Token: "707MP32\t460
    },
    {
      Symbol	Token: "707RJ46\t3763
    },
    {
      Symbol	Token: "707TN38\t7318
    },
    {
      Symbol	Token: "708AP35\t6485
    },
    {
      Symbol	Token: "708AP40\t6487
    },
    {
      Symbol	Token: "708CG29\t2380
    },
    {
      Symbol	Token: "708CG30\t22159
    },
    {
      Symbol	Token: "708GJ31\t2671
    },
    {
      Symbol	Token: "708JK36\t5544
    },
    {
      Symbol	Token: "708KA31\t20797
    },
    {
      Symbol	Token: "708KA34\t468
    },
    {
      Symbol	Token: "708KA34A\t6212
    },
    {
      Symbol	Token: "708MH31\t2383
    },
    {
      Symbol	Token: "708MP29\t8351
    },
    {
      Symbol	Token: "708PY26\t22025
    },
    {
      Symbol	Token: "708RJ30\t22035
    },
    {
      Symbol	Token: "708TS42\t6488
    },
    {
      Symbol	Token: "708UP31\t2264
    },
    {
      Symbol	Token: "708WB41\t6361
    },
    {
      Symbol	Token: "709AP39\t5968
    },
    {
      Symbol	Token: "709AS32\t8187
    },
    {
      Symbol	Token: "709GJ32\t8289
    },
    {
      Symbol	Token: "709HR29\t8569
    },
    {
      Symbol	Token: "709KA30\t20313
    },
    {
      Symbol	Token: "709KL36\t4748
    },
    {
      Symbol	Token: "709MP30\t21991
    },
    {
      Symbol	Token: "709RJ32\t8191
    },
    {
      Symbol	Token: "709TN30\t8489
    },
    {
      Symbol	Token: "709TS34\t5343
    },
    {
      Symbol	Token: "709TS40\t5998
    },
    {
      Symbol	Token: "709UP30\t22096
    },
    {
      Symbol	Token: "709WB40\t472
    },
    {
      Symbol	Token: "70AP38\t3758
    },
    {
      Symbol	Token: "70AP38A\t6563
    },
    {
      Symbol	Token: "70AP39\t318
    },
    {
      Symbol	Token: "70AP39A\t5567
    },
    {
      Symbol	Token: "70AP39B\t6564
    },
    {
      Symbol	Token: "70GA31\t6483
    },
    {
      Symbol	Token: "70GA31A\t7513
    },
    {
      Symbol	Token: "70JH33\t5983
    },
    {
      Symbol	Token: "70JK33\t7307
    },
    {
      Symbol	Token: "70MH28\t21944
    },
    {
      Symbol	Token: "70MN31\t4885
    },
    {
      Symbol	Token: "70MN31A\t6101
    },
    {
      Symbol	Token: "70MN31B\t7530
    },
    {
      Symbol	Token: "70MP31\t5034
    },
    {
      Symbol	Token: "70MZ34\t5559
    },
    {
      Symbol	Token: "70NL31\t6103
    },
    {
      Symbol	Token: "70NL31A\t7316
    },
    {
      Symbol	Token: "70RJ31\t5036
    },
    {
      Symbol	Token: "70TN31\t5336
    },
    {
      Symbol	Token: "70TS36\t5568
    },
    {
      Symbol	Token: "70TS51\t2227
    },
    {
      Symbol	Token: "70UK31\t5040
    },
    {
      Symbol	Token: "70UP30\t22088
    },
    {
      Symbol	Token: "70WB31\t5231
    },
    {
      Symbol	Token: "70WB31A\t6482
    },
    {
      Symbol	Token: "710GJ30\t20099
    },
    {
      Symbol	Token: "710GR2028\t14971
    },
    {
      Symbol	Token: "710GS2029\t9047
    },
    {
      Symbol	Token: "710UK30\t22164
    },
    {
      Symbol	Token: "710UP30\t22083
    },
    {
      Symbol	Token: "711AS30\t20100
    },
    {
      Symbol	Token: "711CG30\t22157
    },
    {
      Symbol	Token: "711GJ31\t2721
    },
    {
      Symbol	Token: "711HP28\t20041
    },
    {
      Symbol	Token: "711HP30\t20040
    },
    {
      Symbol	Token: "711MH29\t8935
    },
    {
      Symbol	Token: "711MP30\t21963
    },
    {
      Symbol	Token: "711MZ30\t22020
    },
    {
      Symbol	Token: "711UK30\t22169
    },
    {
      Symbol	Token: "712AP35\t5041
    },
    {
      Symbol	Token: "712AP37\t4789
    },
    {
      Symbol	Token: "712AS32\t7691
    },
    {
      Symbol	Token: "712AS32A\t8295
    },
    {
      Symbol	Token: "712GJ32\t8324
    },
    {
      Symbol	Token: "712HR40\t20775
    },
    {
      Symbol	Token: "712JK37\t8334
    },
    {
      Symbol	Token: "712KA34\t7539
    },
    {
      Symbol	Token: "712KA37\t8196
    },
    {
      Symbol	Token: "712MP35\t21966
    },
    {
      Symbol	Token: "712MZ34\t5003
    },
    {
      Symbol	Token: "712PN37\t8197
    },
    {
      Symbol	Token: "712TN30\t8352
    },
    {
      Symbol	Token: "712UP32\t7709
    },
    {
      Symbol	Token: "712WB36\t7548
    },
    {
      Symbol	Token: "712WB51\t5542
    },
    {
      Symbol	Token: "713AP36\t4766
    },
    {
      Symbol	Token: "713AP36A\t6112
    },
    {
      Symbol	Token: "713AP39\t8335
    },
    {
      Symbol	Token: "713AP40\t8193
    },
    {
      Symbol	Token: "713AP41\t8194
    },
    {
      Symbol	Token: "713BR32\t8298
    },
    {
      Symbol	Token: "713HR32\t7692
    },
    {
      Symbol	Token: "713HR42\t8336
    },
    {
      Symbol	Token: "713JK34\t8192
    },
    {
      Symbol	Token: "713KA38\t8301
    },
    {
      Symbol	Token: "713KA39\t8302
    },
    {
      Symbol	Token: "713KL46\t4897
    },
    {
      Symbol	Token: "713RJ29\t8680
    },
    {
      Symbol	Token: "713RJ31\t2673
    },
    {
      Symbol	Token: "713RJ41\t4869
    },
    {
      Symbol	Token: "713TN30\t8570
    },
    {
      Symbol	Token: "713TN47\t8198
    },
    {
      Symbol	Token: "713TS34\t8333
    },
    {
      Symbol	Token: "713TS37\t8299
    },
    {
      Symbol	Token: "714AP34\t20019
    },
    {
      Symbol	Token: "714AP35\t7540
    },
    {
      Symbol	Token: "714AP36\t5044
    },
    {
      Symbol	Token: "714AP37\t5234
    },
    {
      Symbol	Token: "714AP40\t7549
    },
    {
      Symbol	Token: "714AP41\t5236
    },
    {
      Symbol	Token: "714AP41A\t6115
    },
    {
      Symbol	Token: "714AP41B\t7550
    },
    {
      Symbol	Token: "714BR30\t20016
    },
    {
      Symbol	Token: "714GA30\t20667
    },
    {
      Symbol	Token: "714HP33\t7536
    },
    {
      Symbol	Token: "714HR31\t2743
    },
    {
      Symbol	Token: "714JK36\t7543
    },
    {
      Symbol	Token: "714KA29\t22218
    },
    {
      Symbol	Token: "714KA29A\t22225
    },
    {
      Symbol	Token: "714KA32\t7813
    },
    {
      Symbol	Token: "714KL35\t7541
    },
    {
      Symbol	Token: "714MH29\t21941
    },
    {
      Symbol	Token: "714PN32\t7708
    },
    {
      Symbol	Token: "714PN36\t7544
    },
    {
      Symbol	Token: "714RJ30\t22074
    },
    {
      Symbol	Token: "714RJ32\t7819
    },
    {
      Symbol	Token: "714SK30\t22154
    },
    {
      Symbol	Token: "714TN32\t8325
    },
    {
      Symbol	Token: "714TS33\t7538
    },
    {
      Symbol	Token: "714TS41\t5237
    },
    {
      Symbol	Token: "714UP30\t22095
    },
    {
      Symbol	Token: "714WB32\t7710
    },
    {
      Symbol	Token: "715AP31\t20772
    },
    {
      Symbol	Token: "715AP32\t20773
    },
    {
      Symbol	Token: "715AP36\t20919
    },
    {
      Symbol	Token: "715AP37\t5004
    },
    {
      Symbol	Token: "715GA30\t20546
    },
    {
      Symbol	Token: "715GA32\t8326
    },
    {
      Symbol	Token: "715HR28\t9333
    },
    {
      Symbol	Token: "715JK32\t457
    },
    {
      Symbol	Token: "715RJ30\t22054
    },
    {
      Symbol	Token: "715RJ31\t2545
    },
    {
      Symbol	Token: "715RJ31A\t2744
    },
    {
      Symbol	Token: "715TN27\t22120
    },
    {
      Symbol	Token: "715UP32\t7821
    },
    {
      Symbol	Token: "715WB35\t22150
    },
    {
      Symbol	Token: "716GA31\t2746
    },
    {
      Symbol	Token: "716GS2023\t7035
    },
    {
      Symbol	Token: "716GS2050\t18561
    },
    {
      Symbol	Token: "716KA30\t20845
    },
    {
      Symbol	Token: "716KA36\t8190
    },
    {
      Symbol	Token: "716KL30\t21914
    },
    {
      Symbol	Token: "716ML31\t2756
    },
    {
      Symbol	Token: "716UP29\t22090
    },
    {
      Symbol	Token: "716UP31\t2759
    },
    {
      Symbol	Token: "717AS31\t2548
    },
    {
      Symbol	Token: "717BR30\t22216
    },
    {
      Symbol	Token: "717BR30A\t22223
    },
    {
      Symbol	Token: "717BR32\t8327
    },
    {
      Symbol	Token: "717CG30\t22160
    },
    {
      Symbol	Token: "717GJ30\t22214
    },
    {
      Symbol	Token: "717GJ30A\t22222
    },
    {
      Symbol	Token: "717GS2028\t7208
    },
    {
      Symbol	Token: "717GS2030\t15050
    },
    {
      Symbol	Token: "717HP30\t20846
    },
    {
      Symbol	Token: "717HR29\t20310
    },
    {
      Symbol	Token: "717HR30\t20849
    },
    {
      Symbol	Token: "717KA29\t20573
    },
    {
      Symbol	Token: "717KA30\t20918
    },
    {
      Symbol	Token: "717KL32\t8329
    },
    {
      Symbol	Token: "717ML31\t2551
    },
    {
      Symbol	Token: "717MP29\t21976
    },
    {
      Symbol	Token: "717MP35\t21973
    },
    {
      Symbol	Token: "717PN30\t22212
    },
    {
      Symbol	Token: "717PN30A\t22220
    },
    {
      Symbol	Token: "717RJ30\t22044
    },
    {
      Symbol	Token: "717RJ32\t8331
    },
    {
      Symbol	Token: "717TN29\t22123
    },
    {
      Symbol	Token: "717TN30\t8681
    },
    {
      Symbol	Token: "717TR30\t22140
    },
    {
      Symbol	Token: "717TS41\t5090
    },
    {
      Symbol	Token: "717UK29\t22167
    },
    {
      Symbol	Token: "717UP31\t2676
    },
    {
      Symbol	Token: "717WB32\t8332
    },
    {
      Symbol	Token: "718AP28\t20309
    },
    {
      Symbol	Token: "718AP33\t20020
    },
    {
      Symbol	Token: "718AP40\t7713
    },
    {
      Symbol	Token: "718AS29\t20311
    },
    {
      Symbol	Token: "718AS30\t20146
    },
    {
      Symbol	Token: "718BR30\t20109
    },
    {
      Symbol	Token: "718CG27\t22161
    },
    {
      Symbol	Token: "718CG30\t22163
    },
    {
      Symbol	Token: "718GJ30\t20696
    },
    {
      Symbol	Token: "718HP32\t20108
    },
    {
      Symbol	Token: "718HR41\t2407
    },
    {
      Symbol	Token: "718KA33\t7694
    },
    {
      Symbol	Token: "718KL29\t21912
    },
    {
      Symbol	Token: "718MH30\t8934
    },
    {
      Symbol	Token: "718MN31\t2679
    },
    {
      Symbol	Token: "718MP30\t21972
    },
    {
      Symbol	Token: "718RJ29\t22060
    },
    {
      Symbol	Token: "718RJ30\t22072
    },
    {
      Symbol	Token: "718SK31\t2681
    },
    {
      Symbol	Token: "718TS33\t7690
    },
    {
      Symbol	Token: "718TS51\t4900
    },
    {
      Symbol	Token: "718UP30\t22213
    },
    {
      Symbol	Token: "718UP30A\t22221
    },
    {
      Symbol	Token: "718WB35\t22144
    },
    {
      Symbol	Token: "719AP34\t20147
    },
    {
      Symbol	Token: "719AP38\t5005
    },
    {
      Symbol	Token: "719GS2060\t18474
    },
    {
      Symbol	Token: "719JK29\t20959
    },
    {
      Symbol	Token: "719KA39\t2768
    },
    {
      Symbol	Token: "719KA40\t2771
    },
    {
      Symbol	Token: "719KL51\t5479
    },
    {
      Symbol	Token: "719ML41\t4895
    },
    {
      Symbol	Token: "719MP40\t21967
    },
    {
      Symbol	Token: "719PN37\t7714
    },
    {
      Symbol	Token: "719SK31\t2384
    },
    {
      Symbol	Token: "719TN30\t22125
    },
    {
      Symbol	Token: "719TN32\t8491
    },
    {
      Symbol	Token: "719TN35\t22110
    },
    {
      Symbol	Token: "719TN42\t8337
    },
    {
      Symbol	Token: "719UP29\t22092
    },
    {
      Symbol	Token: "719UP31\t2552
    },
    {
      Symbol	Token: "719WB29\t22148
    },
    {
      Symbol	Token: "719WB36\t2762
    },
    {
      Symbol	Token: "71AP37\t469
    },
    {
      Symbol	Token: "71JK30\t20018
    },
    {
      Symbol	Token: "71JK33\t4894
    },
    {
      Symbol	Token: "71JK33A\t5342
    },
    {
      Symbol	Token: "71KA32\t7693
    },
    {
      Symbol	Token: "71MH32\t313
    },
    {
      Symbol	Token: "71MH36\t5232
    },
    {
      Symbol	Token: "71TN32\t8292
    },
    {
      Symbol	Token: "71WB30\t22151
    },
    {
      Symbol	Token: "720AR30\t20518
    },
    {
      Symbol	Token: "720AS30\t20358
    },
    {
      Symbol	Token: "720ML30\t22010
    },
    {
      Symbol	Token: "720MZ30\t22015
    },
    {
      Symbol	Token: "721AP31\t20575
    },
    {
      Symbol	Token: "721KA32\t8012
    },
    {
      Symbol	Token: "721MP34\t21977
    },
    {
      Symbol	Token: "721PY28\t22024
    },
    {
      Symbol	Token: "721RJ32\t8013
    },
    {
      Symbol	Token: "721TR29\t22139
    },
    {
      Symbol	Token: "722AP28\t22031
    },
    {
      Symbol	Token: "722AP30\t22030
    },
    {
      Symbol	Token: "722AP31\t22215
    },
    {
      Symbol	Token: "722AP31A\t22032
    },
    {
      Symbol	Token: "722AP37\t2395
    },
    {
      Symbol	Token: "722AP42\t7715
    },
    {
      Symbol	Token: "722AS29\t20915
    },
    {
      Symbol	Token: "722AS30\t20850
    },
    {
      Symbol	Token: "722GA29\t20916
    },
    {
      Symbol	Token: "722KA35\t7707
    },
    {
      Symbol	Token: "722KA38\t2398
    },
    {
      Symbol	Token: "722KA38A\t2578
    },
    {
      Symbol	Token: "722PN32\t21893
    },
    {
      Symbol	Token: "722RJ32\t8492
    },
    {
      Symbol	Token: "722RJ41\t2413
    },
    {
      Symbol	Token: "722UP30\t22089
    },
    {
      Symbol	Token: "723GA32\t7871
    },
    {
      Symbol	Token: "723KA28\t21710
    },
    {
      Symbol	Token: "723MN32\t7855
    },
    {
      Symbol	Token: "723PN31\t2557
    },
    {
      Symbol	Token: "723TN32\t8573
    },
    {
      Symbol	Token: "723WB30\t22147
    },
    {
      Symbol	Token: "723WB32\t7857
    },
    {
      Symbol	Token: "723WB41\t2414
    },
    {
      Symbol	Token: "724AP33\t21644
    },
    {
      Symbol	Token: "724AP35\t21645
    },
    {
      Symbol	Token: "724AP38\t7711
    },
    {
      Symbol	Token: "724AS30\t20917
    },
    {
      Symbol	Token: "724AS31\t2389
    },
    {
      Symbol	Token: "724BR32\t7870
    },
    {
      Symbol	Token: "724GJ29\t21169
    },
    {
      Symbol	Token: "724HR29\t20519
    },
    {
      Symbol	Token: "724JK36\t2563
    },
    {
      Symbol	Token: "724KA37\t2691
    },
    {
      Symbol	Token: "724KA38\t2693
    },
    {
      Symbol	Token: "724RJ32\t7899
    },
    {
      Symbol	Token: "724RJ32A\t8136
    },
    {
      Symbol	Token: "724RJ32B\t8574
    },
    {
      Symbol	Token: "724RJ36\t2560
    },
    {
      Symbol	Token: "724SK32\t8493
    },
    {
      Symbol	Token: "724TN32\t7904
    },
    {
      Symbol	Token: "724TN51\t5091
    },
    {
      Symbol	Token: "724TS51\t5045
    },
    {
      Symbol	Token: "724UP32\t7856
    },
    {
      Symbol	Token: "725GJ32\t8354
    },
    {
      Symbol	Token: "725HR32\t8355
    },
    {
      Symbol	Token: "725MZ34\t8359
    },
    {
      Symbol	Token: "725PN25\t21721
    },
    {
      Symbol	Token: "725TN27\t22127
    },
    {
      Symbol	Token: "725TN32\t8357
    },
    {
      Symbol	Token: "725TS28\t22210
    },
    {
      Symbol	Token: "725TS41\t2581
    },
    {
      Symbol	Token: "725UK32\t7907
    },
    {
      Symbol	Token: "725WB41\t2657
    },
    {
      Symbol	Token: "726AS29\t21034
    },
    {
      Symbol	Token: "726GJ29\t21032
    },
    {
      Symbol	Token: "726GS2029\t8027
    },
    {
      Symbol	Token: "726GS2032\t10722
    },
    {
      Symbol	Token: "726GS2033\t14051
    },
    {
      Symbol	Token: "726HR32\t8575
    },
    {
      Symbol	Token: "726JH27\t22196
    },
    {
      Symbol	Token: "726KA25\t13593
    },
    {
      Symbol	Token: "726UP29\t22082
    },
    {
      Symbol	Token: "726WB34\t22146
    },
    {
      Symbol	Token: "727AR32\t7897
    },
    {
      Symbol	Token: "727AS29\t21550
    },
    {
      Symbol	Token: "727GS2026\t9537
    },
    {
      Symbol	Token: "727HR30\t9344
    },
    {
      Symbol	Token: "727MH30\t21942
    },
    {
      Symbol	Token: "727ML32\t8576
    },
    {
      Symbol	Token: "727MZ33\t2683
    },
    {
      Symbol	Token: "727RJ29\t22034
    },
    {
      Symbol	Token: "727RJ30\t22064
    },
    {
      Symbol	Token: "727SK32\t7900
    },
    {
      Symbol	Token: "728GJ29\t21214
    },
    {
      Symbol	Token: "728JH36\t2688
    },
    {
      Symbol	Token: "728JH37\t8360
    },
    {
      Symbol	Token: "728JK30\t21646
    },
    {
      Symbol	Token: "728KL30\t21908
    },
    {
      Symbol	Token: "728SK30\t22155
    },
    {
      Symbol	Token: "728TS35\t7815
    },
    {
      Symbol	Token: "728UP29\t22098
    },
    {
      Symbol	Token: "728UP32\t7905
    },
    {
      Symbol	Token: "729AP30\t21643
    },
    {
      Symbol	Token: "729AP34\t8930
    },
    {
      Symbol	Token: "729BR30\t21642
    },
    {
      Symbol	Token: "729GA29\t22217
    },
    {
      Symbol	Token: "729GA29A\t22224
    },
    {
      Symbol	Token: "729GJ32\t8683
    },
    {
      Symbol	Token: "729GR2033\t14973
    },
    {
      Symbol	Token: "729KA34\t7823
    },
    {
      Symbol	Token: "729KA36\t2566
    },
    {
      Symbol	Token: "729KA37\t2575
    },
    {
      Symbol	Token: "729KA39\t2656
    },
    {
      Symbol	Token: "729ML29\t22013
    },
    {
      Symbol	Token: "729MP30\t21980
    },
    {
      Symbol	Token: "729MP35\t21950
    },
    {
      Symbol	Token: "729MZ33\t7898
    },
    {
      Symbol	Token: "729NL29\t21998
    },
    {
      Symbol	Token: "729RJ32\t8684
    },
    {
      Symbol	Token: "729TR36\t2690
    },
    {
      Symbol	Token: "729UK29\t22171
    },
    {
      Symbol	Token: "729UP29\t22099
    },
    {
      Symbol	Token: "729WB29\t22153
    },
    {
      Symbol	Token: "72AP30\t20574
    },
    {
      Symbol	Token: "72AS29\t20960
    },
    {
      Symbol	Token: "72GA31\t2386
    },
    {
      Symbol	Token: "72HP35\t20844
    },
    {
      Symbol	Token: "72JH35\t2391
    },
    {
      Symbol	Token: "72JK29\t20312
    },
    {
      Symbol	Token: "72KA31\t20017
    },
    {
      Symbol	Token: "72KL56\t4899
    },
    {
      Symbol	Token: "72ML29\t22011
    },
    {
      Symbol	Token: "72MZ29\t22018
    },
    {
      Symbol	Token: "72NL29\t21996
    },
    {
      Symbol	Token: "72RJ46\t2584
    },
    {
      Symbol	Token: "72TN31\t22124
    },
    {
      Symbol	Token: "72TS51\t2659
    },
    {
      Symbol	Token: "72UP31\t2387
    },
    {
      Symbol	Token: "72WB30\t22142
    },
    {
      Symbol	Token: "730AS29\t21213
    },
    {
      Symbol	Token: "730JK29\t21651
    },
    {
      Symbol	Token: "730KA32\t8137
    },
    {
      Symbol	Token: "730PN31\t21894
    },
    {
      Symbol	Token: "730WB29\t22152
    },
    {
      Symbol	Token: "731AP42\t8366
    },
    {
      Symbol	Token: "731KA35\t7816
    },
    {
      Symbol	Token: "731KL32\t8686
    },
    {
      Symbol	Token: "731PY35\t7822
    },
    {
      Symbol	Token: "731TS60\t22206
    },
    {
      Symbol	Token: "731WB34\t22141
    },
    {
      Symbol	Token: "732AS32\t8138
    },
    {
      Symbol	Token: "732GS2024\t8274
    },
    {
      Symbol	Token: "732KA34\t8006
    },
    {
      Symbol	Token: "733AS32\t8688
    },
    {
      Symbol	Token: "733KA37\t7858
    },
    {
      Symbol	Token: "733KA40\t7859
    },
    {
      Symbol	Token: "733MP42\t7861
    },
    {
      Symbol	Token: "733TN52\t8007
    },
    {
      Symbol	Token: "733TN52A\t8371
    },
    {
      Symbol	Token: "733TN54\t22115
    },
    {
      Symbol	Token: "733TN57\t8372
    },
    {
      Symbol	Token: "734AP40\t8932
    },
    {
      Symbol	Token: "734GA32\t8692
    },
    {
      Symbol	Token: "734MN32\t8140
    },
    {
      Symbol	Token: "734MN32A\t8695
    },
    {
      Symbol	Token: "734NL32\t8698
    },
    {
      Symbol	Token: "734TR36\t2394
    },
    {
      Symbol	Token: "734TS34\t7874
    },
    {
      Symbol	Token: "734TS35\t8495
    },
    {
      Symbol	Token: "734UK32\t8689
    },
    {
      Symbol	Token: "734UP32\t8693
    },
    {
      Symbol	Token: "735CG30\t22162
    },
    {
      Symbol	Token: "735GJ26\t14634
    },
    {
      Symbol	Token: "735GS2024\t6936
    },
    {
      Symbol	Token: "735JH38\t8498
    },
    {
      Symbol	Token: "735KA36\t7872
    },
    {
      Symbol	Token: "735KA39\t2400
    },
    {
      Symbol	Token: "735KA40\t2404
    },
    {
      Symbol	Token: "735MP29\t21982
    },
    {
      Symbol	Token: "735PY30\t22028
    },
    {
      Symbol	Token: "735PY33\t8358
    },
    {
      Symbol	Token: "735SK32\t8699
    },
    {
      Symbol	Token: "735TS30\t22208
    },
    {
      Symbol	Token: "735UK30\t22202
    },
    {
      Symbol	Token: "735UP34\t8702
    },
    {
      Symbol	Token: "735WB30\t22177
    },
    {
      Symbol	Token: "736GS2052\t10931
    },
    {
      Symbol	Token: "736KA39\t7910
    },
    {
      Symbol	Token: "736MH28\t15009
    },
    {
      Symbol	Token: "736TS36\t8703
    },
    {
      Symbol	Token: "736WB32\t8701
    },
    {
      Symbol	Token: "737AP38\t8122
    },
    {
      Symbol	Token: "737AP42\t8123
    },
    {
      Symbol	Token: "737JH31\t22197
    },
    {
      Symbol	Token: "737KA38\t7908
    },
    {
      Symbol	Token: "737PN42\t8718
    },
    {
      Symbol	Token: "737RJ34\t8578
    },
    {
      Symbol	Token: "737TS36\t8121
    },
    {
      Symbol	Token: "738GJ30\t15260
    },
    {
      Symbol	Token: "738GS2027\t9913
    },
    {
      Symbol	Token: "738MP25\t14526
    },
    {
      Symbol	Token: "739HR29\t15256
    },
    {
      Symbol	Token: "739JK37\t8496
    },
    {
      Symbol	Token: "739ML26\t12289
    },
    {
      Symbol	Token: "739TN42\t8719
    },
    {
      Symbol	Token: "739TN52\t8502
    },
    {
      Symbol	Token: "739TS59\t22203
    },
    {
      Symbol	Token: "739UP37\t8705
    },
    {
      Symbol	Token: "73HP30\t21051
    },
    {
      Symbol	Token: "73PN34\t21717
    },
    {
      Symbol	Token: "73RJ30\t22066
    },
    {
      Symbol	Token: "73TN32\t8685
    },
    {
      Symbol	Token: "73UP30\t22091
    },
    {
      Symbol	Token: "741AP30\t15262
    },
    {
      Symbol	Token: "741GJ26\t11588
    },
    {
      Symbol	Token: "741GS2036\t13194
    },
    {
      Symbol	Token: "741PN42\t8501
    },
    {
      Symbol	Token: "742KL34\t8579
    },
    {
      Symbol	Token: "743AP31\t15264
    },
    {
      Symbol	Token: "743HP28\t10559
    },
    {
      Symbol	Token: "743HR41\t8364
    },
    {
      Symbol	Token: "743TN47\t8587
    },
    {
      Symbol	Token: "743TS33\t15265
    },
    {
      Symbol	Token: "743TS54\t22211
    },
    {
      Symbol	Token: "744AP42\t8721
    },
    {
      Symbol	Token: "744HR27\t12657
    },
    {
      Symbol	Token: "744KA35\t8120
    },
    {
      Symbol	Token: "744TN33\t15310
    },
    {
      Symbol	Token: "745AP37\t9345
    },
    {
      Symbol	Token: "745AP40\t10962
    },
    {
      Symbol	Token: "745AP42\t10963
    },
    {
      Symbol	Token: "745BR32\t10956
    },
    {
      Symbol	Token: "745GJ30\t20277
    },
    {
      Symbol	Token: "745HR32\t10955
    },
    {
      Symbol	Token: "745RJ30\t22036
    },
    {
      Symbol	Token: "745RJ33\t15309
    },
    {
      Symbol	Token: "745SK32\t10966
    },
    {
      Symbol	Token: "745TS30\t10902
    },
    {
      Symbol	Token: "745UK30\t22165
    },
    {
      Symbol	Token: "745UP33\t15314
    },
    {
      Symbol	Token: "746AP27\t9530
    },
    {
      Symbol	Token: "746KL48\t15324
    },
    {
      Symbol	Token: "746MP32\t10957
    },
    {
      Symbol	Token: "746TS48\t10964
    },
    {
      Symbol	Token: "746TS48A\t15333
    },
    {
      Symbol	Token: "746TS49\t10965
    },
    {
      Symbol	Token: "746WB40\t8499
    },
    {
      Symbol	Token: "746WB46\t15323
    },
    {
      Symbol	Token: "747AP37\t15267
    },
    {
      Symbol	Token: "747GJ25\t11674
    },
    {
      Symbol	Token: "747PN43\t15319
    },
    {
      Symbol	Token: "747TS31\t10904
    },
    {
      Symbol	Token: "747WB43\t15320
    },
    {
      Symbol	Token: "748AP38\t8363
    },
    {
      Symbol	Token: "748HP33\t10958
    },
    {
      Symbol	Token: "748PN42\t9099
    },
    {
      Symbol	Token: "748WB37\t7911
    },
    {
      Symbol	Token: "749GJ26\t11273
    },
    {
      Symbol	Token: "749GJ28\t14812
    },
    {
      Symbol	Token: "749HP34\t10959
    },
    {
      Symbol	Token: "749MH30\t15015
    },
    {
      Symbol	Token: "749ML27\t13239
    },
    {
      Symbol	Token: "749MN35\t15315
    },
    {
      Symbol	Token: "74GS2035\t6874
    },
    {
      Symbol	Token: "74GS2062\t10981
    },
    {
      Symbol	Token: "74HR37\t8580
    },
    {
      Symbol	Token: "74KL37\t8713
    },
    {
      Symbol	Token: "74ML27\t13118
    },
    {
      Symbol	Token: "74TN42\t8590
    },
    {
      Symbol	Token: "74WB38\t8584
    },
    {
      Symbol	Token: "750AS30\t20278
    },
    {
      Symbol	Token: "750GA30\t20218
    },
    {
      Symbol	Token: "750MZ30\t22016
    },
    {
      Symbol	Token: "750TN29\t22107
    },
    {
      Symbol	Token: "750TS28\t22189
    },
    {
      Symbol	Token: "751HR29\t13122
    },
    {
      Symbol	Token: "752AP38\t8974
    },
    {
      Symbol	Token: "752AP42\t8977
    },
    {
      Symbol	Token: "752GJ25\t14419
    },
    {
      Symbol	Token: "753AS27\t10195
    },
    {
      Symbol	Token: "753AS32\t10906
    },
    {
      Symbol	Token: "753BR32\t10923
    },
    {
      Symbol	Token: "753HR30\t10855
    },
    {
      Symbol	Token: "753TN53\t14280
    },
    {
      Symbol	Token: "753TS47\t13051
    },
    {
      Symbol	Token: "754AP29\t13712
    },
    {
      Symbol	Token: "754AS28\t10646
    },
    {
      Symbol	Token: "754GS2036\t9585
    },
    {
      Symbol	Token: "754KA41\t13050
    },
    {
      Symbol	Token: "755AP29\t12661
    },
    {
      Symbol	Token: "755AS32\t11095
    },
    {
      Symbol	Token: "755BR32\t11094
    },
    {
      Symbol	Token: "755BR32A\t13038
    },
    {
      Symbol	Token: "755GA32\t13124
    },
    {
      Symbol	Token: "755GJ30\t13366
    },
    {
      Symbol	Token: "755JK38\t13779
    },
    {
      Symbol	Token: "755TN53\t14117
    },
    {
      Symbol	Token: "755TS30\t13770
    },
    {
      Symbol	Token: "756RJ33\t15095
    },
    {
      Symbol	Token: "756RJ48\t14113
    },
    {
      Symbol	Token: "756TN53\t14357
    },
    {
      Symbol	Token: "756TS40\t11160
    },
    {
      Symbol	Token: "756TS48\t14112
    },
    {
      Symbol	Token: "756WB39\t11159
    },
    {
      Symbol	Token: "756WB42\t11161
    },
    {
      Symbol	Token: "757AS32\t13112
    },
    {
      Symbol	Token: "757GJ26\t11866
    },
    {
      Symbol	Token: "757GJ31\t13369
    },
    {
      Symbol	Token: "757GJ32\t13773
    },
    {
      Symbol	Token: "757GS2033\t10046
    },
    {
      Symbol	Token: "757HP31\t10526
    },
    {
      Symbol	Token: "757HP32\t13117
    },
    {
      Symbol	Token: "757HR30\t12664
    },
    {
      Symbol	Token: "757JK34\t11096
    },
    {
      Symbol	Token: "757MH31\t13913
    },
    {
      Symbol	Token: "757TN33\t13715
    },
    {
      Symbol	Token: "757TN53\t14455
    },
    {
      Symbol	Token: "757TS31\t13772
    },
    {
      Symbol	Token: "758AP40\t10911
    },
    {
      Symbol	Token: "758AP42\t10913
    },
    {
      Symbol	Token: "758AS33\t15016
    },
    {
      Symbol	Token: "758BR32\t13113
    },
    {
      Symbol	Token: "758GA37\t10912
    },
    {
      Symbol	Token: "758GA37A\t11097
    },
    {
      Symbol	Token: "758HR30\t13241
    },
    {
      Symbol	Token: "758JH31\t13368
    },
    {
      Symbol	Token: "758KL49\t14355
    },
    {
      Symbol	Token: "758NL33\t15021
    },
    {
      Symbol	Token: "758PN42\t10907
    },
    {
      Symbol	Token: "758RJ48\t14354
    },
    {
      Symbol	Token: "758TS45\t14353
    },
    {
      Symbol	Token: "759AP33\t13717
    },
    {
      Symbol	Token: "759CG30\t22158
    },
    {
      Symbol	Token: "759GS2026\t7139
    },
    {
      Symbol	Token: "759GS2029\t7130
    },
    {
      Symbol	Token: "759HP38\t14276
    },
    {
      Symbol	Token: "759KA38\t13049
    },
    {
      Symbol	Token: "759MP38\t14277
    },
    {
      Symbol	Token: "759PN33\t15019
    },
    {
      Symbol	Token: "759PN39\t14279
    },
    {
      Symbol	Token: "759PY41\t14168
    },
    {
      Symbol	Token: "759RJ48\t15109
    },
    {
      Symbol	Token: "759TS37\t13719
    },
    {
      Symbol	Token: "759TS40\t13721
    },
    {
      Symbol	Token: "759TS40A\t14167
    },
    {
      Symbol	Token: "75AP28\t12660
    },
    {
      Symbol	Token: "75GS2034\t6873
    },
    {
      Symbol	Token: "75HP36\t10960
    },
    {
      Symbol	Token: "75HP37\t10961
    },
    {
      Symbol	Token: "75HR29\t13594
    },
    {
      Symbol	Token: "75HR30\t15098
    },
    {
      Symbol	Token: "75TR30\t22137
    },
    {
      Symbol	Token: "761GJ32\t10531
    },
    {
      Symbol	Token: "761GS2030\t7142
    },
    {
      Symbol	Token: "761HR32\t10853
    },
    {
      Symbol	Token: "761JK42\t13135
    },
    {
      Symbol	Token: "761MH29\t9435
    },
    {
      Symbol	Token: "761RJ32\t13377
    },
    {
      Symbol	Token: "761RJ43\t15105
    },
    {
      Symbol	Token: "761TN32\t10852
    },
    {
      Symbol	Token: "761TN32A\t13379
    },
    {
      Symbol	Token: "761TS32\t14088
    },
    {
      Symbol	Token: "761TS44\t15106
    },
    {
      Symbol	Token: "762AR32\t13372
    },
    {
      Symbol	Token: "762AS32\t12666
    },
    {
      Symbol	Token: "762BR32\t10854
    },
    {
      Symbol	Token: "762GA32\t12678
    },
    {
      Symbol	Token: "762GA32A\t13373
    },
    {
      Symbol	Token: "762GJ29\t11589
    },
    {
      Symbol	Token: "762GS2039\t9538
    },
    {
      Symbol	Token: "762HR31\t13600
    },
    {
      Symbol	Token: "762KL53\t13624
    },
    {
      Symbol	Token: "762MH30\t9695
    },
    {
      Symbol	Token: "762MH30A\t11277
    },
    {
      Symbol	Token: "762MN35\t14165
    },
    {
      Symbol	Token: "762MP34\t14163
    },
    {
      Symbol	Token: "762MZ36\t14166
    },
    {
      Symbol	Token: "762PN32\t12673
    },
    {
      Symbol	Token: "762PN38\t15100
    },
    {
      Symbol	Token: "762PY35\t14164
    },
    {
      Symbol	Token: "762TN33\t13602
    },
    {
      Symbol	Token: "762TN43\t13908
    },
    {
      Symbol	Token: "762UK33\t13716
    },
    {
      Symbol	Token: "762UP35\t13778
    },
    {
      Symbol	Token: "763AP30\t9531
    },
    {
      Symbol	Token: "763GJ32\t13916
    },
    {
      Symbol	Token: "763GS2059\t9907
    },
    {
      Symbol	Token: "763HP37\t13127
    },
    {
      Symbol	Token: "763HR28\t9770
    },
    {
      Symbol	Token: "763HR29\t9433
    },
    {
      Symbol	Token: "763HR32\t13244
    },
    {
      Symbol	Token: "763HR33\t13627
    },
    {
      Symbol	Token: "763JH30\t14087
    },
    {
      Symbol	Token: "763KA37\t12692
    },
    {
      Symbol	Token: "763KA39\t13128
    },
    {
      Symbol	Token: "763KA40\t13134
    },
    {
      Symbol	Token: "763KA42\t12710
    },
    {
      Symbol	Token: "763KL32\t13375
    },
    {
      Symbol	Token: "763KL43\t12726
    },
    {
      Symbol	Token: "763MH30\t9437
    },
    {
      Symbol	Token: "763ML25\t11675
    },
    {
      Symbol	Token: "763PN39\t12706
    },
    {
      Symbol	Token: "763PY32\t13382
    },
    {
      Symbol	Token: "763TN47\t12345
    },
    {
      Symbol	Token: "763TS36\t13718
    },
    {
      Symbol	Token: "763TS43\t12321
    },
    {
      Symbol	Token: "763TS44\t12328
    },
    {
      Symbol	Token: "764AP33\t12689
    },
    {
      Symbol	Token: "764AR30\t20570
    },
    {
      Symbol	Token: "764BR32\t13242
    },
    {
      Symbol	Token: "764GA30\t20571
    },
    {
      Symbol	Token: "764GA33\t13887
    },
    {
      Symbol	Token: "764GA38\t13619
    },
    {
      Symbol	Token: "764HR31\t13915
    },
    {
      Symbol	Token: "764KL34\t13606
    },
    {
      Symbol	Token: "764MH32\t11285
    },
    {
      Symbol	Token: "764MH33\t13886
    },
    {
      Symbol	Token: "764MP33\t14093
    },
    {
      Symbol	Token: "764RJ38\t13902
    },
    {
      Symbol	Token: "764TN29\t10452
    },
    {
      Symbol	Token: "764TN32\t10544
    },
    {
      Symbol	Token: "764TS33\t14097
    },
    {
      Symbol	Token: "764UP36\t14109
    },
    {
      Symbol	Token: "764WB32\t13248
    },
    {
      Symbol	Token: "764WB42\t13621
    },
    {
      Symbol	Token: "765AS32\t10765
    },
    {
      Symbol	Token: "765BR32\t10529
    },
    {
      Symbol	Token: "765BR32A\t10721
    },
    {
      Symbol	Token: "765GA32\t13243
    },
    {
      Symbol	Token: "765GJ29\t10233
    },
    {
      Symbol	Token: "765GJ33\t13964
    },
    {
      Symbol	Token: "765HR30\t13957
    },
    {
      Symbol	Token: "765HR33\t13882
    },
    {
      Symbol	Token: "765HR33A\t14272
    },
    {
      Symbol	Token: "765KA34\t13384
    },
    {
      Symbol	Token: "765KL48\t13996
    },
    {
      Symbol	Token: "765NL32\t13247
    },
    {
      Symbol	Token: "765PN42\t11981
    },
    {
      Symbol	Token: "765RJ32\t10543
    },
    {
      Symbol	Token: "765RJ32A\t11288
    },
    {
      Symbol	Token: "765RJ33\t13881
    },
    {
      Symbol	Token: "765TN29\t10234
    },
    {
      Symbol	Token: "765TN33\t13874
    },
    {
      Symbol	Token: "765TN53\t13997
    },
    {
      Symbol	Token: "765TS30\t22188
    },
    {
      Symbol	Token: "765UP30\t22086
    },
    {
      Symbol	Token: "766AP32\t13958
    },
    {
      Symbol	Token: "766BR33\t14098
    },
    {
      Symbol	Token: "766GJ30\t14269
    },
    {
      Symbol	Token: "766HR29\t14635
    },
    {
      Symbol	Token: "766KA42\t12313
    },
    {
      Symbol	Token: "766KL50\t14563
    },
    {
      Symbol	Token: "766MH33\t14549
    },
    {
      Symbol	Token: "766MP48\t14559
    },
    {
      Symbol	Token: "766RJ33\t13960
    },
    {
      Symbol	Token: "766RJ43\t13994
    },
    {
      Symbol	Token: "766SK33\t14274
    },
    {
      Symbol	Token: "766TS34\t13387
    },
    {
      Symbol	Token: "766TS44\t13995
    },
    {
      Symbol	Token: "766UP32\t10771
    },
    {
      Symbol	Token: "766UP33\t14162
    },
    {
      Symbol	Token: "766UP33A\t14273
    },
    {
      Symbol	Token: "766WB39\t13906
    },
    {
      Symbol	Token: "767AP31\t9696
    },
    {
      Symbol	Token: "767AS32\t11980
    },
    {
      Symbol	Token: "767AS33\t13877
    },
    {
      Symbol	Token: "767AS33A\t14092
    },
    {
      Symbol	Token: "767HR32\t11284
    },
    {
      Symbol	Token: "767JH37\t13257
    },
    {
      Symbol	Token: "767KA32\t11984
    },
    {
      Symbol	Token: "767KL34\t10851
    },
    {
      Symbol	Token: "767MP33\t13965
    },
    {
      Symbol	Token: "767NL32\t10541
    },
    {
      Symbol	Token: "767NL33\t13626
    },
    {
      Symbol	Token: "767NL33A\t13967
    },
    {
      Symbol	Token: "767TN53\t14564
    },
    {
      Symbol	Token: "767TS35\t13389
    },
    {
      Symbol	Token: "767UK33\t14102
    },
    {
      Symbol	Token: "767WB37\t13237
    },
    {
      Symbol	Token: "767WB39\t13399
    },
    {
      Symbol	Token: "767WB41\t13401
    },
    {
      Symbol	Token: "768AS32\t10528
    },
    {
      Symbol	Token: "768BR32\t11985
    },
    {
      Symbol	Token: "768BR33\t14271
    },
    {
      Symbol	Token: "768GJ30\t14156
    },
    {
      Symbol	Token: "768GJ33\t14548
    },
    {
      Symbol	Token: "768GS2023\t7121
    },
    {
      Symbol	Token: "768HR31\t12295
    },
    {
      Symbol	Token: "768HR33\t13968
    },
    {
      Symbol	Token: "768JK37\t12701
    },
    {
      Symbol	Token: "768KA31\t11978
    },
    {
      Symbol	Token: "768KA34\t13254
    },
    {
      Symbol	Token: "768PN39\t13398
    },
    {
      Symbol	Token: "768PN42\t11276
    },
    {
      Symbol	Token: "768TS42\t13993
    },
    {
      Symbol	Token: "768UP32\t11289
    },
    {
      Symbol	Token: "768WB32\t11291
    },
    {
      Symbol	Token: "769AP35\t13878
    },
    {
      Symbol	Token: "769AP43\t14351
    },
    {
      Symbol	Token: "769AS33\t13959
    },
    {
      Symbol	Token: "769BR32\t11282
    },
    {
      Symbol	Token: "769GA32\t11283
    },
    {
      Symbol	Token: "769GA32A\t12301
    },
    {
      Symbol	Token: "769GS2043\t9888
    },
    {
      Symbol	Token: "769HR27\t9873
    },
    {
      Symbol	Token: "769KL40\t11292
    },
    {
      Symbol	Token: "769MH31\t14531
    },
    {
      Symbol	Token: "769MN34\t13252
    },
    {
      Symbol	Token: "769MP43\t14352
    },
    {
      Symbol	Token: "769MZ31\t9708
    },
    {
      Symbol	Token: "769MZ37\t13897
    },
    {
      Symbol	Token: "769PN39\t14381
    },
    {
      Symbol	Token: "769PY37\t13397
    },
    {
      Symbol	Token: "769RJ39\t14380
    },
    {
      Symbol	Token: "769TN37\t13393
    },
    {
      Symbol	Token: "769TN43\t14349
    },
    {
      Symbol	Token: "769TS32\t14533
    },
    {
      Symbol	Token: "769UP35\t13891
    },
    {
      Symbol	Token: "769WB39\t14340
    },
    {
      Symbol	Token: "769WB42\t14347
    },
    {
      Symbol	Token: "76AP28\t11299
    },
    {
      Symbol	Token: "76AP29\t14954
    },
    {
      Symbol	Token: "76GJ32\t12667
    },
    {
      Symbol	Token: "76GJ35\t14107
    },
    {
      Symbol	Token: "76JK35\t14103
    },
    {
      Symbol	Token: "76KA32\t13245
    },
    {
      Symbol	Token: "76KA32A\t13374
    },
    {
      Symbol	Token: "76KA33\t13601
    },
    {
      Symbol	Token: "76KL45\t13911
    },
    {
      Symbol	Token: "76MH30\t21934
    },
    {
      Symbol	Token: "76TN32\t10720
    },
    {
      Symbol	Token: "770MH32\t9722
    },
    {
      Symbol	Token: "771AP32\t9711
    },
    {
      Symbol	Token: "771AP33\t14270
    },
    {
      Symbol	Token: "771AP33A\t14959
    },
    {
      Symbol	Token: "771AP34\t11281
    },
    {
      Symbol	Token: "771AP36\t13972
    },
    {
      Symbol	Token: "771AP37\t10848
    },
    {
      Symbol	Token: "771AP39\t10847
    },
    {
      Symbol	Token: "771AP42\t10846
    },
    {
      Symbol	Token: "771AS33\t14160
    },
    {
      Symbol	Token: "771BR33\t14431
    },
    {
      Symbol	Token: "771GJ33\t14374
    },
    {
      Symbol	Token: "771GJ34\t14432
    },
    {
      Symbol	Token: "771KL42\t10845
    },
    {
      Symbol	Token: "771MN32\t11286
    },
    {
      Symbol	Token: "771WB39\t13991
    },
    {
      Symbol	Token: "772AP34\t10527
    },
    {
      Symbol	Token: "772AP35\t10718
    },
    {
      Symbol	Token: "772AS33\t14539
    },
    {
      Symbol	Token: "772BR33\t14161
    },
    {
      Symbol	Token: "772BR33A\t14375
    },
    {
      Symbol	Token: "772GJ34\t14643
    },
    {
      Symbol	Token: "772GJ35\t14553
    },
    {
      Symbol	Token: "772GS2025\t7123
    },
    {
      Symbol	Token: "772GS2049\t9604
    },
    {
      Symbol	Token: "772GS2055\t7136
    },
    {
      Symbol	Token: "772HP31\t14637
    },
    {
      Symbol	Token: "772HR32\t14638
    },
    {
      Symbol	Token: "772JK32\t9717
    },
    {
      Symbol	Token: "772MH31\t14367
    },
    {
      Symbol	Token: "772MH32\t14639
    },
    {
      Symbol	Token: "772MH34\t9724
    },
    {
      Symbol	Token: "772MN32\t9718
    },
    {
      Symbol	Token: "772MP38\t13977
    },
    {
      Symbol	Token: "772RJ35\t9725
    },
    {
      Symbol	Token: "772TS46\t14452
    },
    {
      Symbol	Token: "772UP36\t13973
    },
    {
      Symbol	Token: "772WB38\t11295
    },
    {
      Symbol	Token: "773AP32\t14640
    },
    {
      Symbol	Token: "773BR32\t11598
    },
    {
      Symbol	Token: "773BR33\t14534
    },
    {
      Symbol	Token: "773GJ29\t21049
    },
    {
      Symbol	Token: "773GJ32\t10648
    },
    {
      Symbol	Token: "773GJ36\t14652
    },
    {
      Symbol	Token: "773GS2034\t7127
    },
    {
      Symbol	Token: "773HR32\t14369
    },
    {
      Symbol	Token: "773HR33\t9441
    },
    {
      Symbol	Token: "773MH32\t14819
    },
    {
      Symbol	Token: "773MH34\t14645
    },
    {
      Symbol	Token: "773RJ38\t13979
    },
    {
      Symbol	Token: "773TS34\t14436
    },
    {
      Symbol	Token: "773UP33\t14538
    },
    {
      Symbol	Token: "773WB32\t9719
    },
    {
      Symbol	Token: "774AP31\t10647
    },
    {
      Symbol	Token: "774AP32\t14373
    },
    {
      Symbol	Token: "774AP38\t10719
    },
    {
      Symbol	Token: "774AP42\t11417
    },
    {
      Symbol	Token: "774GA32\t11597
    },
    {
      Symbol	Token: "774HR29\t11676
    },
    {
      Symbol	Token: "774HR31\t14814
    },
    {
      Symbol	Token: "774HR35\t9444
    },
    {
      Symbol	Token: "774KA37\t12311
    },
    {
      Symbol	Token: "774MH33\t14378
    },
    {
      Symbol	Token: "774MP43\t14656
    },
    {
      Symbol	Token: "774MZ33\t10540
    },
    {
      Symbol	Token: "774MZ38\t14558
    },
    {
      Symbol	Token: "774PN39\t14653
    },
    {
      Symbol	Token: "774RJ40\t14654
    },
    {
      Symbol	Token: "774RJ42\t11418
    },
    {
      Symbol	Token: "774RJ49\t14663
    },
    {
      Symbol	Token: "774TS45\t10783
    },
    {
      Symbol	Token: "774TS46\t10784
    },
    {
      Symbol	Token: "774TS48\t14660
    },
    {
      Symbol	Token: "774UK33\t14376
    },
    {
      Symbol	Token: "774UP37\t14554
    },
    {
      Symbol	Token: "774WB39\t11607
    },
    {
      Symbol	Token: "774WB41\t14655
    },
    {
      Symbol	Token: "774WB43\t14658
    },
    {
      Symbol	Token: "775AP29\t11760
    },
    {
      Symbol	Token: "775CG31\t14816
    },
    {
      Symbol	Token: "775GJ32\t11400
    },
    {
      Symbol	Token: "775HP32\t14818
    },
    {
      Symbol	Token: "775NL33\t14821
    },
    {
      Symbol	Token: "775PN42\t10782
    },
    {
      Symbol	Token: "775SK33\t14822
    },
    {
      Symbol	Token: "775TN30\t22104
    },
    {
      Symbol	Token: "775TN32\t10651
    },
    {
      Symbol	Token: "775UP35\t14441
    },
    {
      Symbol	Token: "775UP38\t14442
    },
    {
      Symbol	Token: "775WB39\t14446
    },
    {
      Symbol	Token: "776AP32\t9438
    },
    {
      Symbol	Token: "776HP30\t10235
    },
    {
      Symbol	Token: "776HP33\t14641
    },
    {
      Symbol	Token: "776HR30\t11867
    },
    {
      Symbol	Token: "776KL38\t10773
    },
    {
      Symbol	Token: "776KL51\t14855
    },
    {
      Symbol	Token: "776KL58\t14861
    },
    {
      Symbol	Token: "776MH30\t11390
    },
    {
      Symbol	Token: "776MN35\t14379
    },
    {
      Symbol	Token: "776PN37\t9449
    },
    {
      Symbol	Token: "776TN53\t14860
    },
    {
      Symbol	Token: "776UK33\t14820
    },
    {
      Symbol	Token: "777AP40\t14341
    },
    {
      Symbol	Token: "777GJ31\t9771
    },
    {
      Symbol	Token: "777GJ32\t10459
    },
    {
      Symbol	Token: "777HR32\t10652
    },
    {
      Symbol	Token: "777HR33\t14825
    },
    {
      Symbol	Token: "777JK35\t14437
    },
    {
      Symbol	Token: "777JK37\t11604
    },
    {
      Symbol	Token: "777MP43\t14451
    },
    {
      Symbol	Token: "777MP47\t14850
    },
    {
      Symbol	Token: "777RJ32\t10638
    },
    {
      Symbol	Token: "777RJ33\t14642
    },
    {
      Symbol	Token: "778AP41\t9450
    },
    {
      Symbol	Token: "778AP42\t9451
    },
    {
      Symbol	Token: "778MH29\t21933
    },
    {
      Symbol	Token: "778MH30\t11678
    },
    {
      Symbol	Token: "778ML31\t10330
    },
    {
      Symbol	Token: "778MZ32\t11401
    },
    {
      Symbol	Token: "778MZ37\t11294
    },
    {
      Symbol	Token: "778RJ33\t14824
    },
    {
      Symbol	Token: "778TS34\t14647
    },
    {
      Symbol	Token: "778UP35\t14649
    },
    {
      Symbol	Token: "778UP36\t14651
    },
    {
      Symbol	Token: "779AP31\t10458
    },
    {
      Symbol	Token: "779HP38\t14839
    },
    {
      Symbol	Token: "779JK35\t14650
    },
    {
      Symbol	Token: "779RJ32\t11404
    },
    {
      Symbol	Token: "779TN32\t11405
    },
    {
      Symbol	Token: "779UP33\t14829
    },
    {
      Symbol	Token: "779WB42\t14447
    },
    {
      Symbol	Token: "77AP28\t14359
    },
    {
      Symbol	Token: "77AP29\t14421
    },
    {
      Symbol	Token: "77AP30\t14268
    },
    {
      Symbol	Token: "77AP30A\t14636
    },
    {
      Symbol	Token: "77AP32\t14958
    },
    {
      Symbol	Token: "77BR32\t12300
    },
    {
      Symbol	Token: "77HP36\t13896
    },
    {
      Symbol	Token: "77HP38\t13901
    },
    {
      Symbol	Token: "77HR31\t14159
    },
    {
      Symbol	Token: "77HR32\t14532
    },
    {
      Symbol	Token: "77HR34\t12303
    },
    {
      Symbol	Token: "77JK37\t13392
    },
    {
      Symbol	Token: "77KL47\t11424
    },
    {
      Symbol	Token: "77MH30\t11590
    },
    {
      Symbol	Token: "77MH31\t14424
    },
    {
      Symbol	Token: "77MH33\t14425
    },
    {
      Symbol	Token: "77MN35\t13892
    },
    {
      Symbol	Token: "77MZ35\t13256
    },
    {
      Symbol	Token: "77PN40\t13992
    },
    {
      Symbol	Token: "77PN42\t11416
    },
    {
      Symbol	Token: "77RJ32\t9532
    },
    {
      Symbol	Token: "77TN42\t10844
    },
    {
      Symbol	Token: "780AP33\t21050
    },
    {
      Symbol	Token: "780HR30\t20219
    },
    {
      Symbol	Token: "780KA30\t20964
    },
    {
      Symbol	Token: "781GA32\t9779
    },
    {
      Symbol	Token: "781GJ32\t11506
    },
    {
      Symbol	Token: "781HR32\t9780
    },
    {
      Symbol	Token: "781HR32A\t10331
    },
    {
      Symbol	Token: "781HR32B\t10461
    },
    {
      Symbol	Token: "781HR32C\t11690
    },
    {
      Symbol	Token: "781KL44\t11706
    },
    {
      Symbol	Token: "781RJ32\t10462
    },
    {
      Symbol	Token: "781RJ47\t10219
    },
    {
      Symbol	Token: "781TN52\t10190
    },
    {
      Symbol	Token: "781UP32\t11408
    },
    {
      Symbol	Token: "781UP34\t11603
    },
    {
      Symbol	Token: "781UP34A\t14830
    },
    {
      Symbol	Token: "782AP35\t11412
    },
    {
      Symbol	Token: "782AP42\t10555
    },
    {
      Symbol	Token: "782AS32\t10246
    },
    {
      Symbol	Token: "782AS32A\t11764
    },
    {
      Symbol	Token: "782GJ32\t10196
    },
    {
      Symbol	Token: "782HP32\t10247
    },
    {
      Symbol	Token: "782MN32\t9781
    },
    {
      Symbol	Token: "782NL32\t10463
    },
    {
      Symbol	Token: "782NL32A\t11881
    },
    {
      Symbol	Token: "782PN42\t10558
    },
    {
      Symbol	Token: "782RJ32\t11765
    },
    {
      Symbol	Token: "782RJ44\t10525
    },
    {
      Symbol	Token: "782SK32\t10470
    },
    {
      Symbol	Token: "782SK32A\t11878
    },
    {
      Symbol	Token: "782TN32\t11693
    },
    {
      Symbol	Token: "782WB32\t10252
    },
    {
      Symbol	Token: "783AS32\t10357
    },
    {
      Symbol	Token: "783BR32\t11882
    },
    {
      Symbol	Token: "783GA32\t11683
    },
    {
      Symbol	Token: "783HR32\t11507
    },
    {
      Symbol	Token: "783KL39\t14840
    },
    {
      Symbol	Token: "783MH30\t21940
    },
    {
      Symbol	Token: "783MN32\t10368
    },
    {
      Symbol	Token: "783PN42\t11769
    },
    {
      Symbol	Token: "783RJ32\t9915
    },
    {
      Symbol	Token: "783RJ50\t14854
    },
    {
      Symbol	Token: "783TN42\t11704
    },
    {
      Symbol	Token: "783TS35\t11413
    },
    {
      Symbol	Token: "783TS36\t11415
    },
    {
      Symbol	Token: "783WB32\t9782
    },
    {
      Symbol	Token: "784AS32\t11679
    },
    {
      Symbol	Token: "784HP37\t11874
    },
    {
      Symbol	Token: "784RJ32\t11691
    },
    {
      Symbol	Token: "784RJ41\t14845
    },
    {
      Symbol	Token: "784TN52\t9953
    },
    {
      Symbol	Token: "784TS34\t11409
    },
    {
      Symbol	Token: "784TS36\t10545
    },
    {
      Symbol	Token: "784TS39\t11767
    },
    {
      Symbol	Token: "784TS40\t11768
    },
    {
      Symbol	Token: "785AP37\t9928
    },
    {
      Symbol	Token: "785AP40\t11514
    },
    {
      Symbol	Token: "785AS32\t10197
    },
    {
      Symbol	Token: "785AS32A\t11505
    },
    {
      Symbol	Token: "785BR32\t11513
    },
    {
      Symbol	Token: "785BR32A\t11682
    },
    {
      Symbol	Token: "785HP36\t11870
    },
    {
      Symbol	Token: "785KL34\t9788
    },
    {
      Symbol	Token: "785KL35\t10532
    },
    {
      Symbol	Token: "785MP32\t10198
    },
    {
      Symbol	Token: "785PN32\t10394
    },
    {
      Symbol	Token: "785PN42\t11515
    },
    {
      Symbol	Token: "785RJ37\t9943
    },
    {
      Symbol	Token: "785RJ39\t9952
    },
    {
      Symbol	Token: "785SK32\t11509
    },
    {
      Symbol	Token: "785UK30\t22201
    },
    {
      Symbol	Token: "785UK32\t11510
    },
    {
      Symbol	Token: "785WB42\t14849
    },
    {
      Symbol	Token: "786AP33\t11759
    },
    {
      Symbol	Token: "786AS32\t9916
    },
    {
      Symbol	Token: "786HR32\t10202
    },
    {
      Symbol	Token: "786JH34\t11885
    },
    {
      Symbol	Token: "786MH30\t9821
    },
    {
      Symbol	Token: "786MZ32\t9922
    },
    {
      Symbol	Token: "787HP34\t11886
    },
    {
      Symbol	Token: "787HP35\t11869
    },
    {
      Symbol	Token: "787MZ36\t11873
    },
    {
      Symbol	Token: "787RJ40\t11701
    },
    {
      Symbol	Token: "787TN33\t10338
    },
    {
      Symbol	Token: "788GA30\t21047
    },
    {
      Symbol	Token: "788GS2030\t7122
    },
    {
      Symbol	Token: "788MP33\t11695
    },
    {
      Symbol	Token: "788NL32\t9923
    },
    {
      Symbol	Token: "788RJ32\t22065
    },
    {
      Symbol	Token: "789HP37\t10551
    },
    {
      Symbol	Token: "789MH32\t9822
    },
    {
      Symbol	Token: "789TS34\t10334
    },
    {
      Symbol	Token: "789TS36\t11696
    },
    {
      Symbol	Token: "789WB37\t10553
    },
    {
      Symbol	Token: "789WB40\t14844
    },
    {
      Symbol	Token: "78AP31\t9773
    },
    {
      Symbol	Token: "78AP31A\t9914
    },
    {
      Symbol	Token: "78GJ32\t9777
    },
    {
      Symbol	Token: "78GJ32A\t10367
    },
    {
      Symbol	Token: "78JK35\t14834
    },
    {
      Symbol	Token: "78KL45\t11770
    },
    {
      Symbol	Token: "78ML31\t9774
    },
    {
      Symbol	Token: "78TN32\t9776
    },
    {
      Symbol	Token: "78TN32A\t10460
    },
    {
      Symbol	Token: "78TN42\t11877
    },
    {
      Symbol	Token: "790RJ26\t22061
    },
    {
      Symbol	Token: "791KL30\t21904
    },
    {
      Symbol	Token: "791TS43\t10269
    },
    {
      Symbol	Token: "791UP37\t11697
    },
    {
      Symbol	Token: "792AP41\t10337
    },
    {
      Symbol	Token: "792AP42\t10218
    },
    {
      Symbol	Token: "792AP42A\t10257
    },
    {
      Symbol	Token: "792TS45\t10272
    },
    {
      Symbol	Token: "793AP33\t10203
    },
    {
      Symbol	Token: "793KA31\t20965
    },
    {
      Symbol	Token: "793RJ45\t10645
    },
    {
      Symbol	Token: "793TN42\t10644
    },
    {
      Symbol	Token: "793TS34\t10204
    },
    {
      Symbol	Token: "793TS35\t10207
    },
    {
      Symbol	Token: "793UP30\t22084
    },
    {
      Symbol	Token: "793WB37\t11698
    },
    {
      Symbol	Token: "794AP34\t10206
    },
    {
      Symbol	Token: "794HR34\t10205
    },
    {
      Symbol	Token: "794PN42\t10333
    },
    {
      Symbol	Token: "794TN32\t9869
    },
    {
      Symbol	Token: "794TS36\t10212
    },
    {
      Symbol	Token: "795AP38\t10214
    },
    {
      Symbol	Token: "795AP39\t10215
    },
    {
      Symbol	Token: "795AP40\t10216
    },
    {
      Symbol	Token: "795AP40A\t10255
    },
    {
      Symbol	Token: "795GS2032\t6835
    },
    {
      Symbol	Token: "795HR32\t9870
    },
    {
      Symbol	Token: "795HR37\t10640
    },
    {
      Symbol	Token: "795JK30\t21046
    },
    {
      Symbol	Token: "795TS35\t10382
    },
    {
      Symbol	Token: "795TS37\t10642
    },
    {
      Symbol	Token: "795WB39\t11700
    },
    {
      Symbol	Token: "796AP40\t10643
    },
    {
      Symbol	Token: "796WB37\t10213
    },
    {
      Symbol	Token: "797AP36\t10639
    },
    {
      Symbol	Token: "797AP39\t10336
    },
    {
      Symbol	Token: "797HR42\t10479
    },
    {
      Symbol	Token: "797PN38\t14836
    },
    {
      Symbol	Token: "797RJ42\t10480
    },
    {
      Symbol	Token: "797WB42\t10454
    },
    {
      Symbol	Token: "798AP31\t20961
    },
    {
      Symbol	Token: "798RJ42\t10381
    },
    {
      Symbol	Token: "799TN42\t9834
    },
    {
      Symbol	Token: "799TS30\t22205
    },
    {
      Symbol	Token: "799TS35\t22204
    },
    {
      Symbol	Token: "799WB35\t22175
    },
    {
      Symbol	Token: "79AP33\t9785
    },
    {
      Symbol	Token: "79AP34\t9797
    },
    {
      Symbol	Token: "79HR34\t10332
    },
    {
      Symbol	Token: "79RJ42\t9800
    },
    {
      Symbol	Token: "79TS44\t10271
    },
    {
      Symbol	Token: "801WB41\t10393
    },
    {
      Symbol	Token: "802AP38\t10383
    },
    {
      Symbol	Token: "802MZ36\t10374
    },
    {
      Symbol	Token: "802TS35\t9824
    },
    {
      Symbol	Token: "802WB37\t10384
    },
    {
      Symbol	Token: "803AP35\t9826
    },
    {
      Symbol	Token: "803AP36\t10355
    },
    {
      Symbol	Token: "804AP37\t10471
    },
    {
      Symbol	Token: "804AP41\t9871
    },
    {
      Symbol	Token: "804AP42\t9872
    },
    {
      Symbol	Token: "804PN42\t10268
    },
    {
      Symbol	Token: "805RJ37\t10474
    },
    {
      Symbol	Token: "806JK37\t10477
    },
    {
      Symbol	Token: "807AP36\t9830
    },
    {
      Symbol	Token: "807WB38\t10478
    },
    {
      Symbol	Token: "80NL30\t21995
    },
    {
      Symbol	Token: "810JH32\t22199
    },
    {
      Symbol	Token: "810KL32\t21905
    },
    {
      Symbol	Token: "813GS2045\t7124
    },
    {
      Symbol	Token: "815GS2026\t7114
    },
    {
      Symbol	Token: "815JK30\t22181
    },
    {
      Symbol	Token: "817GS2044\t7115
    },
    {
      Symbol	Token: "824GS2027\t6884
    },
    {
      Symbol	Token: "824GS2033\t7106
    },
    {
      Symbol	Token: "826GS2027\t6898
    },
    {
      Symbol	Token: "828GS2027\t6921
    },
    {
      Symbol	Token: "828GS2032\t6885
    },
    {
      Symbol	Token: "82GS2025\t7024
    },
    {
      Symbol	Token: "831RJ27\t22062
    },
    {
      Symbol	Token: "832GS2032\t6899
    },
    {
      Symbol	Token: "833GS2026\t7019
    },
    {
      Symbol	Token: "833GS2032\t6922
    },
    {
      Symbol	Token: "833GS2036\t6883
    },
    {
      Symbol	Token: "83GS2040\t6981
    },
    {
      Symbol	Token: "83GS2042\t7034
    },
    {
      Symbol	Token: "84GS2024\t7097
    },
    {
      Symbol	Token: "86GS2028\t7088
    },
    {
      Symbol	Token: "883GS2023\t7042
    },
    {
      Symbol	Token: "883GS2041\t7013
    },
    {
      Symbol	Token: "896KL35\t21906
    },
    {
      Symbol	Token: "897GS2030\t7011
    },
    {
      Symbol	Token: "8AR30\t20963
    },
    {
      Symbol	Token: "8AS30\t21048
    },
    {
      Symbol	Token: "8HR30\t21031
    },
    {
      Symbol	Token: "8MN30\t21923
    },
    {
      Symbol	Token: "915GS2024\t7010
    },
    {
      Symbol	Token: "91D010623\t14382
    },
    {
      Symbol	Token: "91D030823\t15334
    },
    {
      Symbol	Token: "91D060723\t14967
    },
    {
      Symbol	Token: "91D080623\t14456
    },
    {
      Symbol	Token: "91D110523\t14118
    },
    {
      Symbol	Token: "91D130723\t15023
    },
    {
      Symbol	Token: "91D150623\t14568
    },
    {
      Symbol	Token: "91D180523\t14169
    },
    {
      Symbol	Token: "91D200723\t15115
    },
    {
      Symbol	Token: "91D230623\t14664
    },
    {
      Symbol	Token: "91D250523\t14283
    },
    {
      Symbol	Token: "91D270723\t15268
    },
    {
      Symbol	Token: "923GS2043\t7087
    },
    {
      Symbol	Token: "92GS2030\t7039
    },
    {
      Symbol	Token: "A2ZINFRA\t20906
    },
    {
      Symbol	Token: "AAATECH\t12533
    },
    {
      Symbol	Token: "AAKASH\t235
    },
    {
      Symbol	Token: "AAREYDRUGS\t5245
    },
    {
      Symbol	Token: "AARON\t1030
    },
    {
      Symbol	Token: "AARTIDRUGS\t4481
    },
    {
      Symbol	Token: "AARTIIND\t7
    },
    {
      Symbol	Token: "AARTIPHARM\t13868
    },
    {
      Symbol	Token: "AARTIPP\t14256
    },
    {
      Symbol	Token: "AARTISURF\t19233
    },
    {
      Symbol	Token: "AARVEEDEN\t13771
    },
    {
      Symbol	Token: "AARVI\t19073
    },
    {
      Symbol	Token: "AAVAS\t5385
    },
    {
      Symbol	Token: "ABAN\t10
    },
    {
      Symbol	Token: "ABB\t13
    },
    {
      Symbol	Token: "ABBOTINDIA\t17903
    },
    {
      Symbol	Token: "ABCAPITAL\t21614
    },
    {
      Symbol	Token: "ABCOTS\t7787
    },
    {
      Symbol	Token: "ABFRL\t30108
    },
    {
      Symbol	Token: "ABFRL\t11498
    },
    {
      Symbol	Token: "ABINFRA\t11022
    },
    {
      Symbol	Token: "ABMINTLLTD\t5551
    },
    {
      Symbol	Token: "ABNINT\t8588
    },
    {
      Symbol	Token: "ABSLAMC\t6018
    },
    {
      Symbol	Token: "ABSLBANETF\t13987
    },
    {
      Symbol	Token: "ABSLLIQUID\t14518
    },
    {
      Symbol	Token: "ABSLNN50ET\t7339
    },
    {
      Symbol	Token: "ACC\t22
    },
    {
      Symbol	Token: "ACCELYA\t7053
    },
    {
      Symbol	Token: "ACCORD\t21217
    },
    {
      Symbol	Token: "ACCURACY\t1465
    },
    {
      Symbol	Token: "ACE\t13587
    },
    {
      Symbol	Token: "ACEINTEG\t11784
    },
    {
      Symbol	Token: "ACI\t12024
    },
    {
      Symbol	Token: "ADANIENT\t25
    },
    {
      Symbol	Token: "ADANIGREEN\t3563
    },
    {
      Symbol	Token: "ADANIPORTS\t15083
    },
    {
      Symbol	Token: "ADANIPOWER\t17388
    },
    {
      Symbol	Token: "ADANITRANS\t10217
    },
    {
      Symbol	Token: "ADFFOODS\t19761
    },
    {
      Symbol	Token: "ADL\t248
    },
    {
      Symbol	Token: "ADORWELD\t34
    },
    {
      Symbol	Token: "ADROITINFO\t4953
    },
    {
      Symbol	Token: "ADSL\t14813
    },
    {
      Symbol	Token: "ADVANIHOTR\t14745
    },
    {
      Symbol	Token: "ADVENZYMES\t18039
    },
    {
      Symbol	Token: "AEGISCHEM\t40
    },
    {
      Symbol	Token: "AETHER\t9810
    },
    {
      Symbol	Token: "AFFLE\t11343
    },
    {
      Symbol	Token: "AGARIND\t3389
    },
    {
      Symbol	Token: "AGARWALFT\t14263
    },
    {
      Symbol	Token: "AGI\t1412
    },
    {
      Symbol	Token: "AGNI\t10491
    },
    {
      Symbol	Token: "AGRITECH\t11072
    },
    {
      Symbol	Token: "AGROPHOS\t9046
    },
    {
      Symbol	Token: "AGSTRA\t7927
    },
    {
      Symbol	Token: "AGUL\t15147
    },
    {
      Symbol	Token: "AHIMSA\t10769
    },
    {
      Symbol	Token: "AHL\t13288
    },
    {
      Symbol	Token: "AHLADA\t2004
    },
    {
      Symbol	Token: "AHLEAST\t19438
    },
    {
      Symbol	Token: "AHLUCONT\t17833
    },
    {
      Symbol	Token: "AIAENG\t13086
    },
    {
      Symbol	Token: "AILIMITED\t4626
    },
    {
      Symbol	Token: "AIRAN\t9897
    },
    {
      Symbol	Token: "AIROLAM\t6068
    },
    {
      Symbol	Token: "AIRTELPP\t6435
    },
    {
      Symbol	Token: "AISL\t482
    },
    {
      Symbol	Token: "AJANTPHARM\t8124
    },
    {
      Symbol	Token: "AJMERA\t17307
    },
    {
      Symbol	Token: "AJOONI\t3403
    },
    {
      Symbol	Token: "AKASH\t13510
    },
    {
      Symbol	Token: "AKG\t2176
    },
    {
      Symbol	Token: "AKI\t14890
    },
    {
      Symbol	Token: "AKSHAR\t9560
    },
    {
      Symbol	Token: "AKSHARCHEM\t20178
    },
    {
      Symbol	Token: "AKSHOPTFBR\t8591
    },
    {
      Symbol	Token: "AKZOINDIA\t1467
    },
    {
      Symbol	Token: "ALANKIT\t9921
    },
    {
      Symbol	Token: "ALBERTDAVD\t17256
    },
    {
      Symbol	Token: "ALEMBICLTD\t79
    },
    {
      Symbol	Token: "ALICON\t13656
    },
    {
      Symbol	Token: "ALKALI\t16959
    },
    {
      Symbol	Token: "ALKEM\t11703
    },
    {
      Symbol	Token: "ALKYLAMINE\t4487
    },
    {
      Symbol	Token: "ALLCARGO\t13501
    },
    {
      Symbol	Token: "ALLETEC\t13203
    },
    {
      Symbol	Token: "ALLSEC\t11798
    },
    {
      Symbol	Token: "ALMONDZ\t16719
    },
    {
      Symbol	Token: "ALOKINDS\t17675
    },
    {
      Symbol	Token: "ALPA\t14848
    },
    {
      Symbol	Token: "ALPHAGEO\t14597
    },
    {
      Symbol	Token: "AMARAJABAT\t100
    },
    {
      Symbol	Token: "AMBANIORG\t4083
    },
    {
      Symbol	Token: "AMBER\t1185
    },
    {
      Symbol	Token: "AMBICAAGAR\t11496
    },
    {
      Symbol	Token: "AMBIKCO\t15234
    },
    {
      Symbol	Token: "AMBUJACEM\t1270
    },
    {
      Symbol	Token: "AMDIND\t14398
    },
    {
      Symbol	Token: "AMEYA\t10898
    },
    {
      Symbol	Token: "AMIABLE\t11939
    },
    {
      Symbol	Token: "AMIORG\t5578
    },
    {
      Symbol	Token: "AMJLAND\t2598
    },
    {
      Symbol	Token: "AMRUTANJAN\t17547
    },
    {
      Symbol	Token: "ANANDRATHI\t7145
    },
    {
      Symbol	Token: "ANANTRAJ\t13620
    },
    {
      Symbol	Token: "ANDHRAPAP\t166
    },
    {
      Symbol	Token: "ANDHRSUGAR\t136
    },
    {
      Symbol	Token: "ANDREWYU\t5206
    },
    {
      Symbol	Token: "ANGELONE\t324
    },
    {
      Symbol	Token: "ANIKINDS\t16657
    },
    {
      Symbol	Token: "ANKITMETAL\t29430
    },
    {
      Symbol	Token: "ANLON\t13657
    },
    {
      Symbol	Token: "ANMOL\t3727
    },
    {
      Symbol	Token: "ANNAPURNA\t11198
    },
    {
      Symbol	Token: "ANSALAPI\t8760
    },
    {
      Symbol	Token: "ANTGRAPHIC\t8285
    },
    {
      Symbol	Token: "ANUP\t9014
    },
    {
      Symbol	Token: "ANURAS\t2829
    },
    {
      Symbol	Token: "ANZEN\t11945
    },
    {
      Symbol	Token: "APARINDS\t11491
    },
    {
      Symbol	Token: "APCL\t20453
    },
    {
      Symbol	Token: "APCOTEXIND\t154
    },
    {
      Symbol	Token: "APEX\t21623
    },
    {
      Symbol	Token: "APLAPOLLO\t25780
    },
    {
      Symbol	Token: "APLLTD\t25328
    },
    {
      Symbol	Token: "APOLLO\t1134
    },
    {
      Symbol	Token: "APOLLOHOSP\t157
    },
    {
      Symbol	Token: "APOLLOPIPE\t14361
    },
    {
      Symbol	Token: "APOLLOTYRE\t163
    },
    {
      Symbol	Token: "APOLSINHOT\t6302
    },
    {
      Symbol	Token: "APTECHT\t10755
    },
    {
      Symbol	Token: "APTUS\t5435
    },
    {
      Symbol	Token: "ARCHIDPLY\t16795
    },
    {
      Symbol	Token: "ARCHIES\t5688
    },
    {
      Symbol	Token: "ARENTERP\t181
    },
    {
      Symbol	Token: "ARHAM\t13092
    },
    {
      Symbol	Token: "ARIES\t15204
    },
    {
      Symbol	Token: "ARIHANTACA\t13340
    },
    {
      Symbol	Token: "ARIHANTCAP\t3813
    },
    {
      Symbol	Token: "ARIHANTSUP\t20159
    },
    {
      Symbol	Token: "ARISTO\t13926
    },
    {
      Symbol	Token: "ARMANFIN\t17263
    },
    {
      Symbol	Token: "AROGRANITE\t14557
    },
    {
      Symbol	Token: "ARROWGREEN\t9260
    },
    {
      Symbol	Token: "ARSHIYA\t17821
    },
    {
      Symbol	Token: "ARTEMISMED\t16913
    },
    {
      Symbol	Token: "ARTNIRMAN\t6156
    },
    {
      Symbol	Token: "ARVEE\t2814
    },
    {
      Symbol	Token: "ARVIND\t193
    },
    {
      Symbol	Token: "ARVINDFASN\t9111
    },
    {
      Symbol	Token: "ARVSMART\t10457
    },
    {
      Symbol	Token: "ASAHIINDIA\t5378
    },
    {
      Symbol	Token: "ASAHISONG\t25088
    },
    {
      Symbol	Token: "ASAL\t10634
    },
    {
      Symbol	Token: "ASALCBR\t17598
    },
    {
      Symbol	Token: "ASCOM\t15001
    },
    {
      Symbol	Token: "ASHAPURMIN\t203
    },
    {
      Symbol	Token: "ASHIANA\t24403
    },
    {
      Symbol	Token: "ASHIMASYN\t206
    },
    {
      Symbol	Token: "ASHOKA\t20182
    },
    {
      Symbol	Token: "ASHOKLEY\t212
    },
    {
      Symbol	Token: "ASIANENE\t7033
    },
    {
      Symbol	Token: "ASIANHOTNR\t18425
    },
    {
      Symbol	Token: "ASIANPAINT\t236
    },
    {
      Symbol	Token: "ASIANTILES\t14889
    },
    {
      Symbol	Token: "ASLIND\t20502
    },
    {
      Symbol	Token: "ASMS\t14867
    },
    {
      Symbol	Token: "ASPINWALL\t17270
    },
    {
      Symbol	Token: "ASTEC\t17728
    },
    {
      Symbol	Token: "ASTERDM\t1508
    },
    {
      Symbol	Token: "ASTRAL\t14418
    },
    {
      Symbol	Token: "ASTRAMICRO\t11618
    },
    {
      Symbol	Token: "ASTRAZEN\t5610
    },
    {
      Symbol	Token: "ASTRON\t874
    },
    {
      Symbol	Token: "ATALREAL\t566
    },
    {
      Symbol	Token: "ATFL\t1663
    },
    {
      Symbol	Token: "ATGL\t6066
    },
    {
      Symbol	Token: "ATLANTA\t13585
    },
    {
      Symbol	Token: "ATUL\t263
    },
    {
      Symbol	Token: "ATULAUTO\t30023
    },
    {
      Symbol	Token: "AUBANK\t21238
    },
    {
      Symbol	Token: "AURDIS\t18762
    },
    {
      Symbol	Token: "AURIONPRO\t12022
    },
    {
      Symbol	Token: "AUROPHARMA\t275
    },
    {
      Symbol	Token: "AURUM\t10310
    },
    {
      Symbol	Token: "AURUMPP\t9643
    },
    {
      Symbol	Token: "AUSOMENT\t4037
    },
    {
      Symbol	Token: "AUTOAXLES\t278
    },
    {
      Symbol	Token: "AUTOBEES\t7880
    },
    {
      Symbol	Token: "AUTOIND\t14106
    },
    {
      Symbol	Token: "AVADHSUGAR\t21406
    },
    {
      Symbol	Token: "AVALON\t15058
    },
    {
      Symbol	Token: "AVANTIFEED\t7936
    },
    {
      Symbol	Token: "AVG\t2621
    },
    {
      Symbol	Token: "AVONMORE\t13557
    },
    {
      Symbol	Token: "AVROIND\t8827
    },
    {
      Symbol	Token: "AVSL\t18692
    },
    {
      Symbol	Token: "AVTNPL\t14008
    },
    {
      Symbol	Token: "AWHCL\t1797
    },
    {
      Symbol	Token: "AWL\t8110
    },
    {
      Symbol	Token: "AXISBANK\t5900
    },
    {
      Symbol	Token: "AXISBNKETF\t1044
    },
    {
      Symbol	Token: "AXISBPSETF\t3530
    },
    {
      Symbol	Token: "AXISCADES\t9436
    },
    {
      Symbol	Token: "AXISCETF\t5732
    },
    {
      Symbol	Token: "AXISGOLD\t20532
    },
    {
      Symbol	Token: "AXISHCETF\t3608
    },
    {
      Symbol	Token: "AXISILVER\t11193
    },
    {
      Symbol	Token: "AXISNIFTY\t21252
    },
    {
      Symbol	Token: "AXISTECETF\t3010
    },
    {
      Symbol	Token: "AXITA\t9902
    },
    {
      Symbol	Token: "AXSENSEX\t14742
    },
    {
      Symbol	Token: "AYMSYNTEX\t10285
    },
    {
      Symbol	Token: "BAFNAPH\t17735
    },
    {
      Symbol	Token: "BAGFILMS\t11226
    },
    {
      Symbol	Token: "BAHETI\t12989
    },
    {
      Symbol	Token: "BAIDFIN\t13794
    },
    {
      Symbol	Token: "BAJAJ-AUTO\t16669
    },
    {
      Symbol	Token: "BAJAJCON\t19531
    },
    {
      Symbol	Token: "BAJAJELEC\t15034
    },
    {
      Symbol	Token: "BAJAJFINSV\t16675
    },
    {
      Symbol	Token: "BAJAJHCARE\t6863
    },
    {
      Symbol	Token: "BAJAJHIND\t308
    },
    {
      Symbol	Token: "BAJAJHLDNG\t305
    },
    {
      Symbol	Token: "BAJFINANCE\t317
    },
    {
      Symbol	Token: "BALAJITELE\t9158
    },
    {
      Symbol	Token: "BALAMINES\t14501
    },
    {
      Symbol	Token: "BALAXI\t11309
    },
    {
      Symbol	Token: "BALKRISHNA\t10181
    },
    {
      Symbol	Token: "BALKRISIND\t335
    },
    {
      Symbol	Token: "BALLARPUR\t1299
    },
    {
      Symbol	Token: "BALMLAWRIE\t338
    },
    {
      Symbol	Token: "BALPHARMA\t13441
    },
    {
      Symbol	Token: "BALRAMCHIN\t341
    },
    {
      Symbol	Token: "BANARBEADS\t347
    },
    {
      Symbol	Token: "BANARISUG\t350
    },
    {
      Symbol	Token: "BANCOINDIA\t13880
    },
    {
      Symbol	Token: "BANDHANBNK\t2263
    },
    {
      Symbol	Token: "BANG\t15303
    },
    {
      Symbol	Token: "BANKA\t822
    },
    {
      Symbol	Token: "BANKBARODA\t4668
    },
    {
      Symbol	Token: "BANKBEES\t11439
    },
    {
      Symbol	Token: "BANKINDIA\t4745
    },
    {
      Symbol	Token: "BANSWRAS\t14511
    },
    {
      Symbol	Token: "BARBEQUE\t3127
    },
    {
      Symbol	Token: "BASF\t368
    },
    {
      Symbol	Token: "BASML\t12034
    },
    {
      Symbol	Token: "BATAINDIA\t371
    },
    {
      Symbol	Token: "BAYERCROP\t17927
    },
    {
      Symbol	Token: "BBETF0432\t7196
    },
    {
      Symbol	Token: "BBL\t13761
    },
    {
      Symbol	Token: "BBOX\t3435
    },
    {
      Symbol	Token: "BBTC\t380
    },
    {
      Symbol	Token: "BBTCL\t12153
    },
    {
      Symbol	Token: "BCG\t8833
    },
    {
      Symbol	Token: "BCLIND\t2513
    },
    {
      Symbol	Token: "BCONCEPTS\t7780
    },
    {
      Symbol	Token: "BDL\t2144
    },
    {
      Symbol	Token: "BDR\t4294
    },
    {
      Symbol	Token: "BEARDSELL\t17933
    },
    {
      Symbol	Token: "BECTORFOOD\t1628
    },
    {
      Symbol	Token: "BEDMUTHA\t20196
    },
    {
      Symbol	Token: "BEL\t383
    },
    {
      Symbol	Token: "BEML\t395
    },
    {
      Symbol	Token: "BEPL\t419
    },
    {
      Symbol	Token: "BERGEPAINT\t404
    },
    {
      Symbol	Token: "BESTAGRO\t2306
    },
    {
      Symbol	Token: "BETA\t81
    },
    {
      Symbol	Token: "BEWLTD\t5662
    },
    {
      Symbol	Token: "BFINVEST\t21113
    },
    {
      Symbol	Token: "BFUTILITIE\t14567
    },
    {
      Symbol	Token: "BGRENERGY\t15189
    },
    {
      Symbol	Token: "BHAGCHEM\t6164
    },
    {
      Symbol	Token: "BHAGERIA\t13400
    },
    {
      Symbol	Token: "BHAGYANGR\t20776
    },
    {
      Symbol	Token: "BHALCHANDR\t9985
    },
    {
      Symbol	Token: "BHANDARI\t19556
    },
    {
      Symbol	Token: "BHARATFORG\t422
    },
    {
      Symbol	Token: "BHARATGEAR\t426
    },
    {
      Symbol	Token: "BHARATRAS\t3834
    },
    {
      Symbol	Token: "BHARATWIRE\t16123
    },
    {
      Symbol	Token: "BHARTIARTL\t10604
    },
    {
      Symbol	Token: "BHEL\t438
    },
    {
      Symbol	Token: "BIGBLOC\t18431
    },
    {
      Symbol	Token: "BIKAJI\t11966
    },
    {
      Symbol	Token: "BIL\t7848
    },
    {
      Symbol	Token: "BINANIIND\t13625
    },
    {
      Symbol	Token: "BINDALAGRO\t471
    },
    {
      Symbol	Token: "BIOCON\t11373
    },
    {
      Symbol	Token: "BIOFILCHEM\t4136
    },
    {
      Symbol	Token: "BIRET\t2203
    },
    {
      Symbol	Token: "BIRLACABLE\t477
    },
    {
      Symbol	Token: "BIRLACORPN\t480
    },
    {
      Symbol	Token: "BIRLAMONEY\t15239
    },
    {
      Symbol	Token: "BIRLATYRE\t17588
    },
    {
      Symbol	Token: "BLAL\t15067
    },
    {
      Symbol	Token: "BLBLIMITED\t8132
    },
    {
      Symbol	Token: "BLISSGVS\t19265
    },
    {
      Symbol	Token: "BLKASHYAP\t13290
    },
    {
      Symbol	Token: "BLS\t17279
    },
    {
      Symbol	Token: "BLUECOAST\t8552
    },
    {
      Symbol	Token: "BLUEDART\t495
    },
    {
      Symbol	Token: "BLUESTARCO\t8311
    },
    {
      Symbol	Token: "BMETRICS\t6052
    },
    {
      Symbol	Token: "BODALCHEM\t25017
    },
    {
      Symbol	Token: "BOHRAIND\t11640
    },
    {
      Symbol	Token: "BOMDYEING\t513
    },
    {
      Symbol	Token: "BOROLTD\t19401
    },
    {
      Symbol	Token: "BORORENEW\t3149
    },
    {
      Symbol	Token: "BOSCHLTD\t2181
    },
    {
      Symbol	Token: "BPCL\t526
    },
    {
      Symbol	Token: "BPL\t530
    },
    {
      Symbol	Token: "BRIGADE\t15184
    },
    {
      Symbol	Token: "BRIGHT\t3901
    },
    {
      Symbol	Token: "BRITANNIA\t547
    },
    {
      Symbol	Token: "BRITANNIA\t5066
    },
    {
      Symbol	Token: "BRNL\t21683
    },
    {
      Symbol	Token: "BROOKS\t25136
    },
    {
      Symbol	Token: "BSE\t19585
    },
    {
      Symbol	Token: "BSHSL\t812
    },
    {
      Symbol	Token: "BSL\t559
    },
    {
      Symbol	Token: "BSLGOLDETF\t23804
    },
    {
      Symbol	Token: "BSLNIFTY\t24781
    },
    {
      Symbol	Token: "BSLSENETFG\t5957
    },
    {
      Symbol	Token: "BSOFT\t6994
    },
    {
      Symbol	Token: "BTML\t14150
    },
    {
      Symbol	Token: "BURNPUR\t15194
    },
    {
      Symbol	Token: "BUTTERFLY\t2716
    },
    {
      Symbol	Token: "BVCL\t15073
    },
    {
      Symbol	Token: "BYKE\t7919
    },
    {
      Symbol	Token: "CADSYS\t21823
    },
    {
      Symbol	Token: "CALSOFT\t8400
    },
    {
      Symbol	Token: "CAMLINFINE\t6216
    },
    {
      Symbol	Token: "CAMPUS\t9362
    },
    {
      Symbol	Token: "CAMS\t342
    },
    {
      Symbol	Token: "CANBK\t10794
    },
    {
      Symbol	Token: "CANFINHOME\t583
    },
    {
      Symbol	Token: "CANTABIL\t20160
    },
    {
      Symbol	Token: "CAPACITE\t21749
    },
    {
      Symbol	Token: "CAPLIPOINT\t3906
    },
    {
      Symbol	Token: "CAPTRUST\t19447
    },
    {
      Symbol	Token: "CARBORUNIV\t595
    },
    {
      Symbol	Token: "CAREERP\t20086
    },
    {
      Symbol	Token: "CARERATING\t29113
    },
    {
      Symbol	Token: "CARTRADE\t5407
    },
    {
      Symbol	Token: "CARYSIL\t1879
    },
    {
      Symbol	Token: "CASTROLIND\t1250
    },
    {
      Symbol	Token: "CCCL\t14996
    },
    {
      Symbol	Token: "CCHHL\t6403
    },
    {
      Symbol	Token: "CCL\t11452
    },
    {
      Symbol	Token: "CDSL\t21174
    },
    {
      Symbol	Token: "CEATLTD\t15254
    },
    {
      Symbol	Token: "CELEBRITY\t13162
    },
    {
      Symbol	Token: "CENTENKA\t619
    },
    {
      Symbol	Token: "CENTEXT\t11511
    },
    {
      Symbol	Token: "CENTRALBK\t14894
    },
    {
      Symbol	Token: "CENTRUM\t2454
    },
    {
      Symbol	Token: "CENTUM\t14982
    },
    {
      Symbol	Token: "CENTURYPLY\t13305
    },
    {
      Symbol	Token: "CENTURYTEX\t625
    },
    {
      Symbol	Token: "CERA\t15039
    },
    {
      Symbol	Token: "CEREBRAINT\t30012
    },
    {
      Symbol	Token: "CESC\t628
    },
    {
      Symbol	Token: "CGCL\t20329
    },
    {
      Symbol	Token: "CGPOWER\t760
    },
    {
      Symbol	Token: "CHALET\t8546
    },
    {
      Symbol	Token: "CHAMBLFERT\t637
    },
    {
      Symbol	Token: "CHEMBOND\t14618
    },
    {
      Symbol	Token: "CHEMCON\t270
    },
    {
      Symbol	Token: "CHEMFAB\t2799
    },
    {
      Symbol	Token: "CHEMPLASTS\t5449
    },
    {
      Symbol	Token: "CHENNPETRO\t2049
    },
    {
      Symbol	Token: "CHEVIOT\t9879
    },
    {
      Symbol	Token: "CHOICEIN\t8866
    },
    {
      Symbol	Token: "CHOLAFIN\t685
    },
    {
      Symbol	Token: "CHOLAFIN\t15364
    },
    {
      Symbol	Token: "CHOLAFIN\t15368
    },
    {
      Symbol	Token: "CHOLAFIN\t15370
    },
    {
      Symbol	Token: "CHOLAFIN\t15372
    },
    {
      Symbol	Token: "CHOLAFIN\t15374
    },
    {
      Symbol	Token: "CHOLAFIN\t15376
    },
    {
      Symbol	Token: "CHOLAHLDNG\t21740
    },
    {
      Symbol	Token: "CIGNITITEC\t5142
    },
    {
      Symbol	Token: "CINELINE\t27161
    },
    {
      Symbol	Token: "CINEVISTA\t8024
    },
    {
      Symbol	Token: "CIPLA\t694
    },
    {
      Symbol	Token: "CLEAN\t5049
    },
    {
      Symbol	Token: "CLEDUCATE\t20223
    },
    {
      Symbol	Token: "CLOUD\t11179
    },
    {
      Symbol	Token: "CLSEL\t3482
    },
    {
      Symbol	Token: "CMICABLES\t19149
    },
    {
      Symbol	Token: "CMMIPL\t99
    },
    {
      Symbol	Token: "CMNL\t13731
    },
    {
      Symbol	Token: "CMRSL\t11447
    },
    {
      Symbol	Token: "CMSINFO\t7603
    },
    {
      Symbol	Token: "COALINDIA\t20374
    },
    {
      Symbol	Token: "COASTCORP\t6006
    },
    {
      Symbol	Token: "COASTPP1\t14476
    },
    {
      Symbol	Token: "COCHINSHIP\t21508
    },
    {
      Symbol	Token: "COFFEEDAY\t11165
    },
    {
      Symbol	Token: "COFORGE\t11543
    },
    {
      Symbol	Token: "COLPAL\t15141
    },
    {
      Symbol	Token: "COMPINFO\t17632
    },
    {
      Symbol	Token: "COMPUSOFT\t31138
    },
    {
      Symbol	Token: "CONCOR\t4749
    },
    {
      Symbol	Token: "CONFIPET\t10238
    },
    {
      Symbol	Token: "CONSOFINVT\t11731
    },
    {
      Symbol	Token: "CONSUMBEES\t2435
    },
    {
      Symbol	Token: "CONTI\t2531
    },
    {
      Symbol	Token: "CONTROLPR\t17477
    },
    {
      Symbol	Token: "COOLCAPS\t8560
    },
    {
      Symbol	Token: "CORALFINAC\t4007
    },
    {
      Symbol	Token: "CORDSCABLE\t15271
    },
    {
      Symbol	Token: "COROMANDEL\t739
    },
    {
      Symbol	Token: "COSMOFIRST\t742
    },
    {
      Symbol	Token: "COUNCODOS\t16986
    },
    {
      Symbol	Token: "CPSEETF\t2328
    },
    {
      Symbol	Token: "CRAFTSMAN\t2854
    },
    {
      Symbol	Token: "CREATIVE\t11155
    },
    {
      Symbol	Token: "CREDITACC\t4421
    },
    {
      Symbol	Token: "CREDITACC\t12427
    },
    {
      Symbol	Token: "CREDITACC\t12434
    },
    {
      Symbol	Token: "CREDITACC\t12444
    },
    {
      Symbol	Token: "CREDITACC\t12456
    },
    {
      Symbol	Token: "CREDITACC\t12465
    },
    {
      Symbol	Token: "CREDITACC\t12471
    },
    {
      Symbol	Token: "CREST\t13900
    },
    {
      Symbol	Token: "CRISIL\t757
    },
    {
      Symbol	Token: "CROMPTON\t17094
    },
    {
      Symbol	Token: "CROWN\t8083
    },
    {
      Symbol	Token: "CSBBANK\t14966
    },
    {
      Symbol	Token: "CSLFINANCE\t10350
    },
    {
      Symbol	Token: "CTE\t14218
    },
    {
      Symbol	Token: "CUB\t5701
    },
    {
      Symbol	Token: "CUBEINVIT\t15078
    },
    {
      Symbol	Token: "CUBEXTUB\t4064
    },
    {
      Symbol	Token: "CUMMINSIND\t1901
    },
    {
      Symbol	Token: "CUPID\t18520
    },
    {
      Symbol	Token: "CYBERMEDIA\t11842
    },
    {
      Symbol	Token: "CYBERTECH\t6051
    },
    {
      Symbol	Token: "CYIENT\t5748
    },
    {
      Symbol	Token: "DAAWAT\t13816
    },
    {
      Symbol	Token: "DABUR\t772
    },
    {
      Symbol	Token: "DALBHARAT\t8075
    },
    {
      Symbol	Token: "DALMIASUG\t781
    },
    {
      Symbol	Token: "DAMODARIND\t17541
    },
    {
      Symbol	Token: "DANGEE\t1110
    },
    {
      Symbol	Token: "DATAMATICS\t11423
    },
    {
      Symbol	Token: "DATAPATTNS\t7358
    },
    {
      Symbol	Token: "DBCORP\t17881
    },
    {
      Symbol	Token: "DBL\t18086
    },
    {
      Symbol	Token: "DBOL\t10893
    },
    {
      Symbol	Token: "DBREALTY\t18124
    },
    {
      Symbol	Token: "DBSTOCKBRO\t31107
    },
    {
      Symbol	Token: "DCAL\t21704
    },
    {
      Symbol	Token: "DCBBANK\t13725
    },
    {
      Symbol	Token: "DCI\t11566
    },
    {
      Symbol	Token: "DCM\t805
    },
    {
      Symbol	Token: "DCMFINSERV\t8704
    },
    {
      Symbol	Token: "DCMNVL\t11039
    },
    {
      Symbol	Token: "DCMSHRIRAM\t811
    },
    {
      Symbol	Token: "DCMSRIND\t7325
    },
    {
      Symbol	Token: "DCW\t817
    },
    {
      Symbol	Token: "DCXINDIA\t11895
    },
    {
      Symbol	Token: "DECCANCE\t14838
    },
    {
      Symbol	Token: "DEEPAKFERT\t827
    },
    {
      Symbol	Token: "DEEPAKNTR\t19943
    },
    {
      Symbol	Token: "DEEPENR\t18244
    },
    {
      Symbol	Token: "DEEPINDS\t3292
    },
    {
      Symbol	Token: "DELHIVERY\t9599
    },
    {
      Symbol	Token: "DELPHIFX\t24391
    },
    {
      Symbol	Token: "DELTACORP\t15044
    },
    {
      Symbol	Token: "DELTAMAGNT\t1214
    },
    {
      Symbol	Token: "DEN\t17722
    },
    {
      Symbol	Token: "DENORA\t4279
    },
    {
      Symbol	Token: "DESTINY\t6087
    },
    {
      Symbol	Token: "DEVIT\t8146
    },
    {
      Symbol	Token: "DEVYANI\t5373
    },
    {
      Symbol	Token: "DGCONTENT\t10346
    },
    {
      Symbol	Token: "DHAMPURSUG\t857
    },
    {
      Symbol	Token: "DHANBANK\t11359
    },
    {
      Symbol	Token: "DHANI\t15384
    },
    {
      Symbol	Token: "DHANILOANS\t9157
    },
    {
      Symbol	Token: "DHANILOANS\t9161
    },
    {
      Symbol	Token: "DHANILOANS\t9165
    },
    {
      Symbol	Token: "DHANILOANS\t10628
    },
    {
      Symbol	Token: "DHANILOANS\t10630
    },
    {
      Symbol	Token: "DHANILOANS\t10659
    },
    {
      Symbol	Token: "DHANILOANS\t13017
    },
    {
      Symbol	Token: "DHANILOANS\t13021
    },
    {
      Symbol	Token: "DHANILOANS\t13023
    },
    {
      Symbol	Token: "DHANILOANS\t8029
    },
    {
      Symbol	Token: "DHANILOANS\t8049
    },
    {
      Symbol	Token: "DHANILOANS\t8055
    },
    {
      Symbol	Token: "DHANILOANS\t8059
    },
    {
      Symbol	Token: "DHANILOANS\t8062
    },
    {
      Symbol	Token: "DHANILOANS\t8067
    },
    {
      Symbol	Token: "DHANILOANS\t9491
    },
    {
      Symbol	Token: "DHANILOANS\t9496
    },
    {
      Symbol	Token: "DHANILOANS\t9500
    },
    {
      Symbol	Token: "DHANILOANS\t9518
    },
    {
      Symbol	Token: "DHANILOANS\t9520
    },
    {
      Symbol	Token: "DHANILOANS\t9528
    },
    {
      Symbol	Token: "DHANUKA\t24409
    },
    {
      Symbol	Token: "DHARMAJ\t13001
    },
    {
      Symbol	Token: "DHARSUGAR\t11617
    },
    {
      Symbol	Token: "DHRUV\t6858
    },
    {
      Symbol	Token: "DHUNINV\t22233
    },
    {
      Symbol	Token: "DIAMONDYD\t21840
    },
    {
      Symbol	Token: "DICIND\t703
    },
    {
      Symbol	Token: "DIGISPICE\t16683
    },
    {
      Symbol	Token: "DIGJAMLMTD\t6136
    },
    {
      Symbol	Token: "DIL\t8657
    },
    {
      Symbol	Token: "DISHTV\t14537
    },
    {
      Symbol	Token: "DIVGIITTS\t14479
    },
    {
      Symbol	Token: "DIVISLAB\t10940
    },
    {
      Symbol	Token: "DIVOPPBEES\t2636
    },
    {
      Symbol	Token: "DIXON\t21690
    },
    {
      Symbol	Token: "DJML\t12749
    },
    {
      Symbol	Token: "DKEGL\t6249
    },
    {
      Symbol	Token: "DLF\t14732
    },
    {
      Symbol	Token: "DLINKINDIA\t17851
    },
    {
      Symbol	Token: "DMART\t19913
    },
    {
      Symbol	Token: "DMCC\t6973
    },
    {
      Symbol	Token: "DNAMEDIA\t641
    },
    {
      Symbol	Token: "DODLA\t4822
    },
    {
      Symbol	Token: "DOLATALGO\t12124
    },
    {
      Symbol	Token: "DOLLAR\t20560
    },
    {
      Symbol	Token: "DOLLEX\t13323
    },
    {
      Symbol	Token: "DONEAR\t13839
    },
    {
      Symbol	Token: "DPABHUSHAN\t936
    },
    {
      Symbol	Token: "DPSCLTD\t15419
    },
    {
      Symbol	Token: "DPWIRES\t16900
    },
    {
      Symbol	Token: "DRCSYSTEMS\t2645
    },
    {
      Symbol	Token: "DREAMFOLKS\t10859
    },
    {
      Symbol	Token: "DREDGECORP\t11271
    },
    {
      Symbol	Token: "DRL\t18769
    },
    {
      Symbol	Token: "DRREDDY\t881
    },
    {
      Symbol	Token: "DRSDILIP\t6686
    },
    {
      Symbol	Token: "DSPBANKETF\t13644
    },
    {
      Symbol	Token: "DSPGOLDETF\t15356
    },
    {
      Symbol	Token: "DSPN50ETF\t7451
    },
    {
      Symbol	Token: "DSPNEWETF\t6606
    },
    {
      Symbol	Token: "DSPQ50ETF\t7456
    },
    {
      Symbol	Token: "DSPSILVETF\t10761
    },
    {
      Symbol	Token: "DSSL\t25690
    },
    {
      Symbol	Token: "DTIL\t6227
    },
    {
      Symbol	Token: "DUCOL\t13766
    },
    {
      Symbol	Token: "DUCON\t28956
    },
    {
      Symbol	Token: "DUGLOBAL\t5457
    },
    {
      Symbol	Token: "DVL\t15214
    },
    {
      Symbol	Token: "DWARKESH\t11667
    },
    {
      Symbol	Token: "DYCL\t10417
    },
    {
      Symbol	Token: "DYNAMATECH\t4525
    },
    {
      Symbol	Token: "DYNAMIC\t6079
    },
    {
      Symbol	Token: "DYNPRO\t21314
    },
    {
      Symbol	Token: "E2E\t8937
    },
    {
      Symbol	Token: "EASEMYTRIP\t2792
    },
    {
      Symbol	Token: "EBANK\t11625
    },
    {
      Symbol	Token: "EBBETF0425\t22243
    },
    {
      Symbol	Token: "EBBETF0430\t16253
    },
    {
      Symbol	Token: "EBBETF0431\t22239
    },
    {
      Symbol	Token: "EBBETF0433\t13139
    },
    {
      Symbol	Token: "ECLERX\t15179
    },
    {
      Symbol	Token: "ECLFINANCE\t4276
    },
    {
      Symbol	Token: "ECLFINANCE\t4280
    },
    {
      Symbol	Token: "ECLFINANCE\t4284
    },
    {
      Symbol	Token: "ECLFINANCE\t4288
    },
    {
      Symbol	Token: "ECLFINANCE\t4292
    },
    {
      Symbol	Token: "ECLFINANCE\t7968
    },
    {
      Symbol	Token: "ECLFINANCE\t7970
    },
    {
      Symbol	Token: "ECLFINANCE\t7972
    },
    {
      Symbol	Token: "ECLFINANCE\t7975
    },
    {
      Symbol	Token: "ECLFINANCE\t7986
    },
    {
      Symbol	Token: "EDELWEISS\t15119
    },
    {
      Symbol	Token: "EHFLNCD\t17864
    },
    {
      Symbol	Token: "EHFLNCD\t17866
    },
    {
      Symbol	Token: "EHFLNCD\t17868
    },
    {
      Symbol	Token: "EICHERMOT\t910
    },
    {
      Symbol	Token: "EIDPARRY\t916
    },
    {
      Symbol	Token: "EIFFL\t6040
    },
    {
      Symbol	Token: "EIHAHOTELS\t15399
    },
    {
      Symbol	Token: "EIHOTEL\t919
    },
    {
      Symbol	Token: "EIMCOELECO\t4040
    },
    {
      Symbol	Token: "EKC\t13091
    },
    {
      Symbol	Token: "ELDEHSG\t8953
    },
    {
      Symbol	Token: "ELECON\t13643
    },
    {
      Symbol	Token: "ELECTCAST\t928
    },
    {
      Symbol	Token: "ELECTCAST\t18116
    },
    {
      Symbol	Token: "ELECTHERM\t4469
    },
    {
      Symbol	Token: "ELGIEQUIP\t937
    },
    {
      Symbol	Token: "ELGIRUBCO\t24924
    },
    {
      Symbol	Token: "ELIN\t13423
    },
    {
      Symbol	Token: "EMAMILTD\t15008
    },
    {
      Symbol	Token: "EMAMILTD\t13517
    },
    {
      Symbol	Token: "EMAMIPAP\t10074
    },
    {
      Symbol	Token: "EMAMIREAL\t19277
    },
    {
      Symbol	Token: "EMBASSY\t9383
    },
    {
      Symbol	Token: "EMIL\t11530
    },
    {
      Symbol	Token: "EMKAY\t13421
    },
    {
      Symbol	Token: "EMKAYTOOLS\t10253
    },
    {
      Symbol	Token: "EMMBI\t18142
    },
    {
      Symbol	Token: "EMUDHRA\t9756
    },
    {
      Symbol	Token: "ENDURANCE\t18822
    },
    {
      Symbol	Token: "ENERGYDEV\t15049
    },
    {
      Symbol	Token: "ENGINERSIN\t4907
    },
    {
      Symbol	Token: "ENIL\t13192
    },
    {
      Symbol	Token: "EPL\t981
    },
    {
      Symbol	Token: "EQUITASBNK\t913
    },
    {
      Symbol	Token: "ERFLNCDI\t2252
    },
    {
      Symbol	Token: "ERFLNCDI\t2254
    },
    {
      Symbol	Token: "ERIS\t21154
    },
    {
      Symbol	Token: "EROSMEDIA\t20080
    },
    {
      Symbol	Token: "ESABINDIA\t955
    },
    {
      Symbol	Token: "ESCORTS\t958
    },
    {
      Symbol	Token: "ESSARSHPNG\t25634
    },
    {
      Symbol	Token: "ESSENTIA\t30323
    },
    {
      Symbol	Token: "ESTER\t24265
    },
    {
      Symbol	Token: "ETHOSLTD\t9750
    },
    {
      Symbol	Token: "EUROBOND\t7331
    },
    {
      Symbol	Token: "EUROTEXIND\t999
    },
    {
      Symbol	Token: "EVEREADY\t11782
    },
    {
      Symbol	Token: "EVERESTIND\t993
    },
    {
      Symbol	Token: "EXCEL\t17376
    },
    {
      Symbol	Token: "EXCELINDUS\t11471
    },
    {
      Symbol	Token: "EXIDEIND\t676
    },
    {
      Symbol	Token: "EXPLEOSOL\t17486
    },
    {
      Symbol	Token: "EXXARO\t5352
    },
    {
      Symbol	Token: "FACT\t1008
    },
    {
      Symbol	Token: "FAIRCHEMOR\t1614
    },
    {
      Symbol	Token: "FAZE3Q\t12000
    },
    {
      Symbol	Token: "FCL\t6198
    },
    {
      Symbol	Token: "FCONSUMER\t30041
    },
    {
      Symbol	Token: "FCSSOFT\t11999
    },
    {
      Symbol	Token: "FDC\t4898
    },
    {
      Symbol	Token: "FEDERALBNK\t1023
    },
    {
      Symbol	Token: "FELIX\t573
    },
    {
      Symbol	Token: "FIBERWEB\t8159
    },
    {
      Symbol	Token: "FIDEL\t9858
    },
    {
      Symbol	Token: "FIEMIND\t13710
    },
    {
      Symbol	Token: "FILATEX\t24532
    },
    {
      Symbol	Token: "FINCABLES\t1038
    },
    {
      Symbol	Token: "FINEORG\t3744
    },
    {
      Symbol	Token: "FINOPB\t6579
    },
    {
      Symbol	Token: "FINPIPE\t1041
    },
    {
      Symbol	Token: "FIVESTAR\t12032
    },
    {
      Symbol	Token: "FLEXITUFF\t25512
    },
    {
      Symbol	Token: "FLFL\t14868
    },
    {
      Symbol	Token: "FLUOROCHEM\t13750
    },
    {
      Symbol	Token: "FMGOETZE\t1190
    },
    {
      Symbol	Token: "FMNL\t21021
    },
    {
      Symbol	Token: "FOCE\t7385
    },
    {
      Symbol	Token: "FOCUS\t6836
    },
    {
      Symbol	Token: "FOODSIN\t6673
    },
    {
      Symbol	Token: "FORCEMOT\t11573
    },
    {
      Symbol	Token: "FORTIS\t14592
    },
    {
      Symbol	Token: "FOSECOIND\t1073
    },
    {
      Symbol	Token: "FROG\t11501
    },
    {
      Symbol	Token: "FSL\t14304
    },
    {
      Symbol	Token: "FUSION\t11932
    },
    {
      Symbol	Token: "G1NSETEST\t12842
    },
    {
      Symbol	Token: "GABRIEL\t1085
    },
    {
      Symbol	Token: "GAEL\t8828
    },
    {
      Symbol	Token: "GAIL\t4717
    },
    {
      Symbol	Token: "GAL\t20296
    },
    {
      Symbol	Token: "GALAXYSURF\t1315
    },
    {
      Symbol	Token: "GALLANTT\t13337
    },
    {
      Symbol	Token: "GANDHITUBE\t14116
    },
    {
      Symbol	Token: "GANECOS\t6944
    },
    {
      Symbol	Token: "GANESHBE\t5614
    },
    {
      Symbol	Token: "GANESHHOUC\t14339
    },
    {
      Symbol	Token: "GANGAFORGE\t4957
    },
    {
      Symbol	Token: "GANGESSECU\t21399
    },
    {
      Symbol	Token: "GARFIBRES\t1100
    },
    {
      Symbol	Token: "GATEWAY\t8510
    },
    {
      Symbol	Token: "GATI\t13688
    },
    {
      Symbol	Token: "GAYAHWS\t3699
    },
    {
      Symbol	Token: "GEECEE\t13658
    },
    {
      Symbol	Token: "GEEKAYWIRE\t17922
    },
    {
      Symbol	Token: "GENCON\t2188
    },
    {
      Symbol	Token: "GENESYS\t10905
    },
    {
      Symbol	Token: "GENUSPAPER\t6600
    },
    {
      Symbol	Token: "GENUSPOWER\t11905
    },
    {
      Symbol	Token: "GEOJITFSL\t11896
    },
    {
      Symbol	Token: "GEPIL\t7862
    },
    {
      Symbol	Token: "GESHIP\t13776
    },
    {
      Symbol	Token: "GET&D\t16783
    },
    {
      Symbol	Token: "GFLLIMITED\t1289
    },
    {
      Symbol	Token: "GHCL\t1127
    },
    {
      Symbol	Token: "GICHSGFIN\t1139
    },
    {
      Symbol	Token: "GICL\t18815
    },
    {
      Symbol	Token: "GICRE\t277
    },
    {
      Symbol	Token: "GILLANDERS\t17839
    },
    {
      Symbol	Token: "GILLETTE\t1576
    },
    {
      Symbol	Token: "GILT5YBEES\t3172
    },
    {
      Symbol	Token: "GINNIFILA\t9294
    },
    {
      Symbol	Token: "GIPCL\t1145
    },
    {
      Symbol	Token: "GIRIRAJ\t2365
    },
    {
      Symbol	Token: "GIRRESORTS\t9935
    },
    {
      Symbol	Token: "GISOLUTION\t17000
    },
    {
      Symbol	Token: "GKWLIMITED\t17357
    },
    {
      Symbol	Token: "GLAND\t1186
    },
    {
      Symbol	Token: "GLAXO\t1153
    },
    {
      Symbol	Token: "GLENMARK\t7406
    },
    {
      Symbol	Token: "GLOBAL\t1415
    },
    {
      Symbol	Token: "GLOBALVECT\t13735
    },
    {
      Symbol	Token: "GLOBE\t393
    },
    {
      Symbol	Token: "GLOBUSSPR\t17424
    },
    {
      Symbol	Token: "GLS\t5265
    },
    {
      Symbol	Token: "GMBREW\t1168
    },
    {
      Symbol	Token: "GMDCLTD\t5204
    },
    {
      Symbol	Token: "GMMPFAUDLR\t1570
    },
    {
      Symbol	Token: "GMRINFRA\t13528
    },
    {
      Symbol	Token: "GMRP&UI\t8529
    },
    {
      Symbol	Token: "GNA\t18571
    },
    {
      Symbol	Token: "GNFC\t1174
    },
    {
      Symbol	Token: "GOACARBON\t14687
    },
    {
      Symbol	Token: "GOCLCORP\t3963
    },
    {
      Symbol	Token: "GOCOLORS\t6964
    },
    {
      Symbol	Token: "GODFRYPHLP\t1181
    },
    {
      Symbol	Token: "GODHA\t1607
    },
    {
      Symbol	Token: "GODREJAGRO\t144
    },
    {
      Symbol	Token: "GODREJCP\t10099
    },
    {
      Symbol	Token: "GODREJIND\t10925
    },
    {
      Symbol	Token: "GODREJPROP\t17875
    },
    {
      Symbol	Token: "GOKEX\t11778
    },
    {
      Symbol	Token: "GOKUL\t16705
    },
    {
      Symbol	Token: "GOKULAGRO\t14480
    },
    {
      Symbol	Token: "GOLDBEES\t14428
    },
    {
      Symbol	Token: "GOLDIAM\t11971
    },
    {
      Symbol	Token: "GOLDSHARE\t14535
    },
    {
      Symbol	Token: "GOLDSTAR\t1
    },
    {
      Symbol	Token: "GOLDTECH\t9878
    },
    {
      Symbol	Token: "GOODLUCK\t6125
    },
    {
      Symbol	Token: "GOODYEAR\t1205
    },
    {
      Symbol	Token: "GOYALALUM\t11789
    },
    {
      Symbol	Token: "GPIL\t13409
    },
    {
      Symbol	Token: "GPPL\t19731
    },
    {
      Symbol	Token: "GPTINFRA\t17685
    },
    {
      Symbol	Token: "GRANULES\t11872
    },
    {
      Symbol	Token: "GRAPHITE\t592
    },
    {
      Symbol	Token: "GRASIM\t1232
    },
    {
      Symbol	Token: "GRAUWEIL\t5200
    },
    {
      Symbol	Token: "GRAVITA\t20534
    },
    {
      Symbol	Token: "GRCL\t14052
    },
    {
      Symbol	Token: "GREAVESCOT\t1235
    },
    {
      Symbol	Token: "GREENLAM\t6848
    },
    {
      Symbol	Token: "GREENPANEL\t13810
    },
    {
      Symbol	Token: "GREENPLY\t3987
    },
    {
      Symbol	Token: "GREENPOWER\t20110
    },
    {
      Symbol	Token: "GRETEX\t18741
    },
    {
      Symbol	Token: "GRINDWELL\t13560
    },
    {
      Symbol	Token: "GRINFRA\t5054
    },
    {
      Symbol	Token: "GRMOVER\t10871
    },
    {
      Symbol	Token: "GROBTEA\t17770
    },
    {
      Symbol	Token: "GRPLTD\t6549
    },
    {
      Symbol	Token: "GRSE\t5475
    },
    {
      Symbol	Token: "GRWRHITECH\t7982
    },
    {
      Symbol	Token: "GS020124C\t3982
    },
    {
      Symbol	Token: "GS020125C\t4108
    },
    {
      Symbol	Token: "GS020126C\t4332
    },
    {
      Symbol	Token: "GS020723C\t3913
    },
    {
      Symbol	Token: "GS020724C\t4039
    },
    {
      Symbol	Token: "GS020725C\t4175
    },
    {
      Symbol	Token: "GS070623C\t3894
    },
    {
      Symbol	Token: "GS070624C\t4016
    },
    {
      Symbol	Token: "GS070625C\t4138
    },
    {
      Symbol	Token: "GS070626C\t4387
    },
    {
      Symbol	Token: "GS071223C\t3951
    },
    {
      Symbol	Token: "GS071224C\t4085
    },
    {
      Symbol	Token: "GS071225C\t4250
    },
    {
      Symbol	Token: "GS090324C\t3995
    },
    {
      Symbol	Token: "GS090325C\t4125
    },
    {
      Symbol	Token: "GS090326C\t4364
    },
    {
      Symbol	Token: "GS090923C\t3921
    },
    {
      Symbol	Token: "GS090924C\t4054
    },
    {
      Symbol	Token: "GS090925C\t4183
    },
    {
      Symbol	Token: "GS100224C\t3988
    },
    {
      Symbol	Token: "GS100225C\t4117
    },
    {
      Symbol	Token: "GS100226C\t4341
    },
    {
      Symbol	Token: "GS100424C\t4006
    },
    {
      Symbol	Token: "GS100425C\t4134
    },
    {
      Symbol	Token: "GS100426C\t4381
    },
    {
      Symbol	Token: "GS100524C\t4011
    },
    {
      Symbol	Token: "GS100525C\t4137
    },
    {
      Symbol	Token: "GS100526C\t4384
    },
    {
      Symbol	Token: "GS100823C\t3916
    },
    {
      Symbol	Token: "GS100824C\t4042
    },
    {
      Symbol	Token: "GS100825C\t4178
    },
    {
      Symbol	Token: "GS101023C\t3939
    },
    {
      Symbol	Token: "GS101024C\t4065
    },
    {
      Symbol	Token: "GS101025C\t4215
    },
    {
      Symbol	Token: "GS101123C\t3946
    },
    {
      Symbol	Token: "GS101124C\t4072
    },
    {
      Symbol	Token: "GS101125C\t4246
    },
    {
      Symbol	Token: "GS120623C\t3903
    },
    {
      Symbol	Token: "GS120624C\t4021
    },
    {
      Symbol	Token: "GS120625C\t4149
    },
    {
      Symbol	Token: "GS120626C\t4389
    },
    {
      Symbol	Token: "GS121223C\t3957
    },
    {
      Symbol	Token: "GS121224C\t4093
    },
    {
      Symbol	Token: "GS121225C\t4254
    },
    {
      Symbol	Token: "GS150324C\t3996
    },
    {
      Symbol	Token: "GS150325C\t4128
    },
    {
      Symbol	Token: "GS150326C\t4366
    },
    {
      Symbol	Token: "GS150623C\t3905
    },
    {
      Symbol	Token: "GS150624C\t4022
    },
    {
      Symbol	Token: "GS150625C\t4154
    },
    {
      Symbol	Token: "GS150626C\t4393
    },
    {
      Symbol	Token: "GS150923C\t3922
    },
    {
      Symbol	Token: "GS150924C\t4057
    },
    {
      Symbol	Token: "GS150925C\t4202
    },
    {
      Symbol	Token: "GS151223C\t3964
    },
    {
      Symbol	Token: "GS151224C\t4094
    },
    {
      Symbol	Token: "GS151225C\t4314
    },
    {
      Symbol	Token: "GS151226C\t4409
    },
    {
      Symbol	Token: "GS170623C\t3907
    },
    {
      Symbol	Token: "GS170624C\t4025
    },
    {
      Symbol	Token: "GS170625C\t4158
    },
    {
      Symbol	Token: "GS171223C\t3966
    },
    {
      Symbol	Token: "GS171224C\t4095
    },
    {
      Symbol	Token: "GS171225C\t4323
    },
    {
      Symbol	Token: "GS200324C\t4005
    },
    {
      Symbol	Token: "GS200325C\t4131
    },
    {
      Symbol	Token: "GS200326C\t4368
    },
    {
      Symbol	Token: "GS200923C\t3928
    },
    {
      Symbol	Token: "GS200924C\t4062
    },
    {
      Symbol	Token: "GS200925C\t4205
    },
    {
      Symbol	Token: "GS220224C\t3989
    },
    {
      Symbol	Token: "GS220225C\t4124
    },
    {
      Symbol	Token: "GS220226C\t4343
    },
    {
      Symbol	Token: "GS220230C\t4423
    },
    {
      Symbol	Token: "GS220231C\t4429
    },
    {
      Symbol	Token: "GS220236C\t4432
    },
    {
      Symbol	Token: "GS220240C\t4520
    },
    {
      Symbol	Token: "GS220250C\t4552
    },
    {
      Symbol	Token: "GS220261C\t4555
    },
    {
      Symbol	Token: "GS220261P\t4395
    },
    {
      Symbol	Token: "GS220823C\t3919
    },
    {
      Symbol	Token: "GS220824C\t4044
    },
    {
      Symbol	Token: "GS220825C\t4180
    },
    {
      Symbol	Token: "GS220830C\t4427
    },
    {
      Symbol	Token: "GS220831C\t4431
    },
    {
      Symbol	Token: "GS220836C\t4494
    },
    {
      Symbol	Token: "GS220840C\t4546
    },
    {
      Symbol	Token: "GS220850C\t4553
    },
    {
      Symbol	Token: "GS230623C\t3909
    },
    {
      Symbol	Token: "GS230624C\t4027
    },
    {
      Symbol	Token: "GS230625C\t4161
    },
    {
      Symbol	Token: "GS231223C\t3967
    },
    {
      Symbol	Token: "GS231224C\t4098
    },
    {
      Symbol	Token: "GS231225C\t4325
    },
    {
      Symbol	Token: "GS260424C\t4009
    },
    {
      Symbol	Token: "GS260425C\t4135
    },
    {
      Symbol	Token: "GS260426C\t4382
    },
    {
      Symbol	Token: "GS261023C\t3944
    },
    {
      Symbol	Token: "GS261024C\t4068
    },
    {
      Symbol	Token: "GS261025C\t4222
    },
    {
      Symbol	Token: "GS300623C\t3910
    },
    {
      Symbol	Token: "GS300624C\t4029
    },
    {
      Symbol	Token: "GS300625C\t4174
    },
    {
      Symbol	Token: "GS311223C\t3976
    },
    {
      Symbol	Token: "GS311224C\t4099
    },
    {
      Symbol	Token: "GS311225C\t4330
    },
    {
      Symbol	Token: "GSFC\t1247
    },
    {
      Symbol	Token: "GSLSU\t14599
    },
    {
      Symbol	Token: "GSPL\t13197
    },
    {
      Symbol	Token: "GSS\t15347
    },
    {
      Symbol	Token: "GSTL\t9764
    },
    {
      Symbol	Token: "GTL\t1162
    },
    {
      Symbol	Token: "GTLINFRA\t13745
    },
    {
      Symbol	Token: "GTPL\t21195
    },
    {
      Symbol	Token: "GUFICBIO\t11606
    },
    {
      Symbol	Token: "GUJALKALI\t1267
    },
    {
      Symbol	Token: "GUJAPOLLO\t14677
    },
    {
      Symbol	Token: "GUJGASLTD\t10599
    },
    {
      Symbol	Token: "GUJRAFFIA\t10097
    },
    {
      Symbol	Token: "GULFOILLUB\t4391
    },
    {
      Symbol	Token: "GULFPETRO\t11581
    },
    {
      Symbol	Token: "GULPOLY\t6286
    },
    {
      Symbol	Token: "GVKPIL\t13226
    },
    {
      Symbol	Token: "HAL\t2303
    },
    {
      Symbol	Token: "HAPPSTMNDS\t48
    },
    {
      Symbol	Token: "HARDWYN\t8962
    },
    {
      Symbol	Token: "HARIOMPIPE\t8968
    },
    {
      Symbol	Token: "HARRMALAYA\t1313
    },
    {
      Symbol	Token: "HARSHA\t11162
    },
    {
      Symbol	Token: "HATHWAY\t18154
    },
    {
      Symbol	Token: "HATSUN\t3892
    },
    {
      Symbol	Token: "HAVELLS\t9819
    },
    {
      Symbol	Token: "HAVISHA\t8417
    },
    {
      Symbol	Token: "HBANKETF\t22433
    },
    {
      Symbol	Token: "HBLPOWER\t13966
    },
    {
      Symbol	Token: "HBSL\t4116
    },
    {
      Symbol	Token: "HCC\t1375
    },
    {
      Symbol	Token: "HCG\t15555
    },
    {
      Symbol	Token: "HCL-INSYS\t1327
    },
    {
      Symbol	Token: "HCLTECH\t7229
    },
    {
      Symbol	Token: "HDFC\t1330
    },
    {
      Symbol	Token: "HDFC\t22326
    },
    {
      Symbol	Token: "HDFCAMC\t4244
    },
    {
      Symbol	Token: "HDFCBANK\t1333
    },
    {
      Symbol	Token: "HDFCBSE500\t14230
    },
    {
      Symbol	Token: "HDFCGROWTH\t11241
    },
    {
      Symbol	Token: "HDFCLIFE\t467
    },
    {
      Symbol	Token: "HDFCLOWVOL\t11547
    },
    {
      Symbol	Token: "HDFCMFGETF\t19543
    },
    {
      Symbol	Token: "HDFCMID150\t14236
    },
    {
      Symbol	Token: "HDFCMOMENT\t11538
    },
    {
      Symbol	Token: "HDFCNEXT50\t10619
    },
    {
      Symbol	Token: "HDFCNIF100\t10633
    },
    {
      Symbol	Token: "HDFCNIFETF\t11591
    },
    {
      Symbol	Token: "HDFCNIFIT\t12101
    },
    {
      Symbol	Token: "HDFCPVTBAN\t12108
    },
    {
      Symbol	Token: "HDFCQUAL\t11255
    },
    {
      Symbol	Token: "HDFCSENETF\t11593
    },
    {
      Symbol	Token: "HDFCSILVER\t10876
    },
    {
      Symbol	Token: "HDFCSML250\t14233
    },
    {
      Symbol	Token: "HDFCVALUE\t11260
    },
    {
      Symbol	Token: "HEADSUP\t19205
    },
    {
      Symbol	Token: "HEALTHY\t6297
    },
    {
      Symbol	Token: "HECPROJECT\t7425
    },
    {
      Symbol	Token: "HEG\t1336
    },
    {
      Symbol	Token: "HEIDELBERG\t2316
    },
    {
      Symbol	Token: "HEMIPROP\t701
    },
    {
      Symbol	Token: "HERANBA\t2614
    },
    {
      Symbol	Token: "HERCULES\t15288
    },
    {
      Symbol	Token: "HERITGFOOD\t4598
    },
    {
      Symbol	Token: "HEROMOTOCO\t1348
    },
    {
      Symbol	Token: "HESTERBIO\t7048
    },
    {
      Symbol	Token: "HEUBACHIND\t715
    },
    {
      Symbol	Token: "HEXATRADEX\t27008
    },
    {
      Symbol	Token: "HFCL\t21951
    },
    {
      Symbol	Token: "HGINFRA\t1672
    },
    {
      Symbol	Token: "HGS\t14712
    },
    {
      Symbol	Token: "HIGHWAYS\t10757
    },
    {
      Symbol	Token: "HIKAL\t9668
    },
    {
      Symbol	Token: "HIL\t1455
    },
    {
      Symbol	Token: "HILTON\t14631
    },
    {
      Symbol	Token: "HIMATSEIDE\t1360
    },
    {
      Symbol	Token: "HINDALCO\t1363
    },
    {
      Symbol	Token: "HINDCOMPOS\t1372
    },
    {
      Symbol	Token: "HINDCON\t4920
    },
    {
      Symbol	Token: "HINDCOPPER\t17939
    },
    {
      Symbol	Token: "HINDMOTORS\t21676
    },
    {
      Symbol	Token: "HINDOILEXP\t1403
    },
    {
      Symbol	Token: "HINDPETRO\t1406
    },
    {
      Symbol	Token: "HINDUNILVR\t1394
    },
    {
      Symbol	Token: "HINDWAREAP\t15883
    },
    {
      Symbol	Token: "HINDZINC\t1424
    },
    {
      Symbol	Token: "HIRECT\t13890
    },
    {
      Symbol	Token: "HISARMETAL\t19322
    },
    {
      Symbol	Token: "HITECH\t2868
    },
    {
      Symbol	Token: "HITECHCORP\t15161
    },
    {
      Symbol	Token: "HITECHGEAR\t4433
    },
    {
      Symbol	Token: "HLEGLAS\t2289
    },
    {
      Symbol	Token: "HLVLTD\t1448
    },
    {
      Symbol	Token: "HMT\t19698
    },
    {
      Symbol	Token: "HMVL\t19211
    },
    {
      Symbol	Token: "HNDFDS\t12173
    },
    {
      Symbol	Token: "HNGSNGBEES\t18284
    },
    {
      Symbol	Token: "HOMEFIRST\t2056
    },
    {
      Symbol	Token: "HOMESFY\t13526
    },
    {
      Symbol	Token: "HONAUT\t3417
    },
    {
      Symbol	Token: "HONDAPOWER\t3138
    },
    {
      Symbol	Token: "HOVS\t13592
    },
    {
      Symbol	Token: "HPAL\t7376
    },
    {
      Symbol	Token: "HPIL\t11800
    },
    {
      Symbol	Token: "HPL\t18679
    },
    {
      Symbol	Token: "HSCL\t14334
    },
    {
      Symbol	Token: "HTMEDIA\t11979
    },
    {
      Symbol	Token: "HUBTOWN\t14203
    },
    {
      Symbol	Token: "HUDCO\t20825
    },
    {
      Symbol	Token: "HUDCO\t31240
    },
    {
      Symbol	Token: "HUDCO\t29312
    },
    {
      Symbol	Token: "HUDCO\t29650
    },
    {
      Symbol	Token: "HUDCO\t19928
    },
    {
      Symbol	Token: "HUDCO\t19930
    },
    {
      Symbol	Token: "HUDCO\t19962
    },
    {
      Symbol	Token: "HUDCO\t19964
    },
    {
      Symbol	Token: "HUDCO\t19966
    },
    {
      Symbol	Token: "HUDCO\t19968
    },
    {
      Symbol	Token: "HUDCO\t19970
    },
    {
      Symbol	Token: "HUHTAMAKI\t2562
    },
    {
      Symbol	Token: "HYBRIDFIN\t12814
    },
    {
      Symbol	Token: "IBMFNIFTY\t9937
    },
    {
      Symbol	Token: "IBREALEST\t14450
    },
    {
      Symbol	Token: "IBUCCREDIT\t4909
    },
    {
      Symbol	Token: "IBUCCREDIT\t4912
    },
    {
      Symbol	Token: "IBUCCREDIT\t4914
    },
    {
      Symbol	Token: "IBUCCREDIT\t4926
    },
    {
      Symbol	Token: "IBUCCREDIT\t4930
    },
    {
      Symbol	Token: "IBUCCREDIT\t4936
    },
    {
      Symbol	Token: "IBUCCREDIT\t4942
    },
    {
      Symbol	Token: "IBUCCREDIT\t14005
    },
    {
      Symbol	Token: "IBUCCREDIT\t14010
    },
    {
      Symbol	Token: "IBUCCREDIT\t14017
    },
    {
      Symbol	Token: "IBUCCREDIT\t14021
    },
    {
      Symbol	Token: "IBUCCREDIT\t14026
    },
    {
      Symbol	Token: "IBUCCREDIT\t14028
    },
    {
      Symbol	Token: "IBUCCREDIT\t14030
    },
    {
      Symbol	Token: "IBUCCREDIT\t14032
    },
    {
      Symbol	Token: "IBUCCREDIT\t14034
    },
    {
      Symbol	Token: "IBUCCREDIT\t14036
    },
    {
      Symbol	Token: "IBUCCREDIT\t14038
    },
    {
      Symbol	Token: "IBUCCREDIT\t15205
    },
    {
      Symbol	Token: "IBUCCREDIT\t15210
    },
    {
      Symbol	Token: "IBUCCREDIT\t15215
    },
    {
      Symbol	Token: "IBUCCREDIT\t15220
    },
    {
      Symbol	Token: "IBUCCREDIT\t15231
    },
    {
      Symbol	Token: "IBUCCREDIT\t15235
    },
    {
      Symbol	Token: "IBUCCREDIT\t15240
    },
    {
      Symbol	Token: "IBUCCREDIT\t15245
    },
    {
      Symbol	Token: "IBUCCREDIT\t15249
    },
    {
      Symbol	Token: "IBUCCREDIT\t15251
    },
    {
      Symbol	Token: "IBUCCREDIT\t15253
    },
    {
      Symbol	Token: "IBULHSGFIN\t14673
    },
    {
      Symbol	Token: "IBULHSGFIN\t14678
    },
    {
      Symbol	Token: "IBULHSGFIN\t14683
    },
    {
      Symbol	Token: "IBULHSGFIN\t14688
    },
    {
      Symbol	Token: "IBULHSGFIN\t14692
    },
    {
      Symbol	Token: "IBULHSGFIN\t14720
    },
    {
      Symbol	Token: "IBULHSGFIN\t14721
    },
    {
      Symbol	Token: "IBULHSGFIN\t14696
    },
    {
      Symbol	Token: "IBULHSGFIN\t14704
    },
    {
      Symbol	Token: "IBULHSGFIN\t14710
    },
    {
      Symbol	Token: "IBULHSGFIN\t14714
    },
    {
      Symbol	Token: "IBULHSGFIN\t14718
    },
    {
      Symbol	Token: "IBULHSGFIN\t30125
    },
    {
      Symbol	Token: "IBULHSGFIN\t13497
    },
    {
      Symbol	Token: "IBULHSGFIN\t18624
    },
    {
      Symbol	Token: "IBULHSGFIN\t18626
    },
    {
      Symbol	Token: "IBULHSGFIN\t18628
    },
    {
      Symbol	Token: "IBULHSGFIN\t18630
    },
    {
      Symbol	Token: "IBULHSGFIN\t18632
    },
    {
      Symbol	Token: "IBULHSGFIN\t18634
    },
    {
      Symbol	Token: "IBULHSGFIN\t18636
    },
    {
      Symbol	Token: "IBULHSGFIN\t18638
    },
    {
      Symbol	Token: "IBULHSGFIN\t5815
    },
    {
      Symbol	Token: "IBULHSGFIN\t5817
    },
    {
      Symbol	Token: "IBULHSGFIN\t5819
    },
    {
      Symbol	Token: "IBULHSGFIN\t5821
    },
    {
      Symbol	Token: "IBULHSGFIN\t5823
    },
    {
      Symbol	Token: "IBULHSGFIN\t5825
    },
    {
      Symbol	Token: "IBULHSGFIN\t5827
    },
    {
      Symbol	Token: "IBULHSGFIN\t5829
    },
    {
      Symbol	Token: "IBULHSGFIN\t5842
    },
    {
      Symbol	Token: "IBULHSGFIN\t5844
    },
    {
      Symbol	Token: "IBULHSGFIN\t5846
    },
    {
      Symbol	Token: "IBULHSGFIN\t5850
    },
    {
      Symbol	Token: "IBULHSGFIN\t5855
    },
    {
      Symbol	Token: "IBULHSGFIN\t5857
    },
    {
      Symbol	Token: "IBULHSGFIN\t5859
    },
    {
      Symbol	Token: "IBULHSGFIN\t5861
    },
    {
      Symbol	Token: "IBULHSGFIN\t5863
    },
    {
      Symbol	Token: "IBULHSGFIN\t7729
    },
    {
      Symbol	Token: "IBULHSGFIN\t7731
    },
    {
      Symbol	Token: "IBULHSGFIN\t7734
    },
    {
      Symbol	Token: "IBULHSGFIN\t7740
    },
    {
      Symbol	Token: "IBULHSGFIN\t7744
    },
    {
      Symbol	Token: "IBULHSGFIN\t7749
    },
    {
      Symbol	Token: "IBULHSGFIN\t7752
    },
    {
      Symbol	Token: "IBULHSGFIN\t7755
    },
    {
      Symbol	Token: "IBULHSGFIN\t7757
    },
    {
      Symbol	Token: "IBULHSGFIN\t7761
    },
    {
      Symbol	Token: "IBULHSGFIN\t7763
    },
    {
      Symbol	Token: "IBULHSGFIN\t7765
    },
    {
      Symbol	Token: "IBULHSGFIN\t7769
    },
    {
      Symbol	Token: "IBULHSGFIN\t7772
    },
    {
      Symbol	Token: "IBULHSGFIN\t7777
    },
    {
      Symbol	Token: "IBULHSGFIN\t9123
    },
    {
      Symbol	Token: "IBULHSGFIN\t9150
    },
    {
      Symbol	Token: "IBULHSGFIN\t9153
    },
    {
      Symbol	Token: "IBULHSGFIN\t9163
    },
    {
      Symbol	Token: "IBULHSGFIN\t9184
    },
    {
      Symbol	Token: "IBULHSGFIN\t9191
    },
    {
      Symbol	Token: "IBULHSGFIN\t9195
    },
    {
      Symbol	Token: "IBULHSGFIN\t9209
    },
    {
      Symbol	Token: "IBULHSGFIN\t9211
    },
    {
      Symbol	Token: "IBULHSGFIN\t9218
    },
    {
      Symbol	Token: "IBULHSGFIN\t9221
    },
    {
      Symbol	Token: "IBULHSGFIN\t9255
    },
    {
      Symbol	Token: "IBULHSGFIN\t9262
    },
    {
      Symbol	Token: "IBULHSGFIN\t9273
    },
    {
      Symbol	Token: "IBULHSGFIN\t9277
    },
    {
      Symbol	Token: "IBULHSGFIN\t11310
    },
    {
      Symbol	Token: "IBULHSGFIN\t11316
    },
    {
      Symbol	Token: "IBULHSGFIN\t11322
    },
    {
      Symbol	Token: "IBULHSGFIN\t11324
    },
    {
      Symbol	Token: "IBULHSGFIN\t11328
    },
    {
      Symbol	Token: "IBULHSGFIN\t11333
    },
    {
      Symbol	Token: "IBULHSGFIN\t11335
    },
    {
      Symbol	Token: "IBULHSGFIN\t11337
    },
    {
      Symbol	Token: "IBULHSGFIN\t11339
    },
    {
      Symbol	Token: "IBULHSGFIN\t11342
    },
    {
      Symbol	Token: "IBULHSGFIN\t11352
    },
    {
      Symbol	Token: "IBULHSGFIN\t11356
    },
    {
      Symbol	Token: "IBULHSGFIN\t11361
    },
    {
      Symbol	Token: "IBULHSGFIN\t11365
    },
    {
      Symbol	Token: "IBULHSGFIN\t11368
    },
    {
      Symbol	Token: "IBULHSGFIN\t11814
    },
    {
      Symbol	Token: "IBULHSGFIN\t11818
    },
    {
      Symbol	Token: "IBULHSGFIN\t11823
    },
    {
      Symbol	Token: "IBULHSGFIN\t11825
    },
    {
      Symbol	Token: "IBULHSGFIN\t11827
    },
    {
      Symbol	Token: "IBULHSGFIN\t11830
    },
    {
      Symbol	Token: "IBULHSGFIN\t11833
    },
    {
      Symbol	Token: "IBULHSGFIN\t11835
    },
    {
      Symbol	Token: "IBULHSGFIN\t11837
    },
    {
      Symbol	Token: "IBULHSGFIN\t11843
    },
    {
      Symbol	Token: "IBULHSGFIN\t11846
    },
    {
      Symbol	Token: "IBULHSGFIN\t11854
    },
    {
      Symbol	Token: "IBULHSGFIN\t11857
    },
    {
      Symbol	Token: "IBULHSGFIN\t11861
    },
    {
      Symbol	Token: "IBULHSGFIN\t13435
    },
    {
      Symbol	Token: "IBULHSGFIN\t13438
    },
    {
      Symbol	Token: "IBULHSGFIN\t13443
    },
    {
      Symbol	Token: "IBULHSGFIN\t13448
    },
    {
      Symbol	Token: "IBULHSGFIN\t13453
    },
    {
      Symbol	Token: "IBULHSGFIN\t13460
    },
    {
      Symbol	Token: "IBULHSGFIN\t13465
    },
    {
      Symbol	Token: "IBULHSGFIN\t13477
    },
    {
      Symbol	Token: "IBULHSGFIN\t13482
    },
    {
      Symbol	Token: "IBULHSGFIN\t13484
    },
    {
      Symbol	Token: "IBULHSGFIN\t13487
    },
    {
      Symbol	Token: "IBULHSGFIN\t13492
    },
    {
      Symbol	Token: "ICDSLTD\t9610
    },
    {
      Symbol	Token: "ICEMAKE\t489
    },
    {
      Symbol	Token: "ICICI\t10201
    },
    {
      Symbol	Token: "ICICI0199\t6050
    },
    {
      Symbol	Token: "ICICI0402\t10716
    },
    {
      Symbol	Token: "ICICI10GS\t13143
    },
    {
      Symbol	Token: "ICICI500\t3001
    },
    {
      Symbol	Token: "ICICI5GSEC\t8342
    },
    {
      Symbol	Token: "ICICIALPLV\t22344
    },
    {
      Symbol	Token: "ICICIAUTO\t7844
    },
    {
      Symbol	Token: "ICICIB22\t522
    },
    {
      Symbol	Token: "ICICIBANK\t4963
    },
    {
      Symbol	Token: "ICICIBANKN\t11037
    },
    {
      Symbol	Token: "ICICIBANKP\t11386
    },
    {
      Symbol	Token: "ICICICOMMO\t13198
    },
    {
      Symbol	Token: "ICICICONSU\t6446
    },
    {
      Symbol	Token: "ICICIFIN\t12578
    },
    {
      Symbol	Token: "ICICIFMCG\t5306
    },
    {
      Symbol	Token: "ICICIGI\t21770
    },
    {
      Symbol	Token: "ICICIGOLD\t19679
    },
    {
      Symbol	Token: "ICICIINFRA\t10723
    },
    {
      Symbol	Token: "ICICILIQ\t4838
    },
    {
      Symbol	Token: "ICICILOVOL\t21254
    },
    {
      Symbol	Token: "ICICIM150\t17152
    },
    {
      Symbol	Token: "ICICIMCAP\t17702
    },
    {
      Symbol	Token: "ICICIMOM30\t10585
    },
    {
      Symbol	Token: "ICICINF100\t30392
    },
    {
      Symbol	Token: "ICICINIFTY\t29553
    },
    {
      Symbol	Token: "ICICINV20\t17475
    },
    {
      Symbol	Token: "ICICINXT50\t4529
    },
    {
      Symbol	Token: "ICICIPHARM\t3626
    },
    {
      Symbol	Token: "ICICIPRULI\t18652
    },
    {
      Symbol	Token: "ICICISENSX\t4378
    },
    {
      Symbol	Token: "ICICISILVE\t7942
    },
    {
      Symbol	Token: "ICICITECH\t22365
    },
    {
      Symbol	Token: "ICIL\t11987
    },
    {
      Symbol	Token: "ICRA\t14523
    },
    {
      Symbol	Token: "IDBI\t1476
    },
    {
      Symbol	Token: "IDBIGOLD\t25640
    },
    {
      Symbol	Token: "IDEA\t14366
    },
    {
      Symbol	Token: "IDFC\t11957
    },
    {
      Symbol	Token: "IDFCFIRSTB\t11184
    },
    {
      Symbol	Token: "IDFNIFTYET\t18783
    },
    {
      Symbol	Token: "IEL\t13303
    },
    {
      Symbol	Token: "IEX\t220
    },
    {
      Symbol	Token: "IFBAGRO\t1482
    },
    {
      Symbol	Token: "IFBIND\t1485
    },
    {
      Symbol	Token: "IFCI\t1491
    },
    {
      Symbol	Token: "IFCI\t5759
    },
    {
      Symbol	Token: "IFCI\t5761
    },
    {
      Symbol	Token: "IFCI\t6646
    },
    {
      Symbol	Token: "IFCI\t6652
    },
    {
      Symbol	Token: "IFGLEXPOR\t436
    },
    {
      Symbol	Token: "IGARASHI\t634
    },
    {
      Symbol	Token: "IGL\t11262
    },
    {
      Symbol	Token: "IGPL\t14086
    },
    {
      Symbol	Token: "IIFCL\t20052
    },
    {
      Symbol	Token: "IIFCL\t20054
    },
    {
      Symbol	Token: "IIFCL\t20056
    },
    {
      Symbol	Token: "IIFCL\t20058
    },
    {
      Symbol	Token: "IIFL\t11809
    },
    {
      Symbol	Token: "IIFL\t19045
    },
    {
      Symbol	Token: "IIFL\t19047
    },
    {
      Symbol	Token: "IIFL\t19067
    },
    {
      Symbol	Token: "IIFL\t19069
    },
    {
      Symbol	Token: "IIFL\t2871
    },
    {
      Symbol	Token: "IIFL\t2877
    },
    {
      Symbol	Token: "IIFL\t2883
    },
    {
      Symbol	Token: "IIFL\t6176
    },
    {
      Symbol	Token: "IIFL\t6178
    },
    {
      Symbol	Token: "IIFL\t6189
    },
    {
      Symbol	Token: "IIFL\t6195
    },
    {
      Symbol	Token: "IIFL\t6197
    },
    {
      Symbol	Token: "IIFL\t6200
    },
    {
      Symbol	Token: "IIFL\t6207
    },
    {
      Symbol	Token: "IIFL\t13833
    },
    {
      Symbol	Token: "IIFL\t13840
    },
    {
      Symbol	Token: "IIFL\t13845
    },
    {
      Symbol	Token: "IIFL\t13850
    },
    {
      Symbol	Token: "IIFL\t13852
    },
    {
      Symbol	Token: "IIFL\t13854
    },
    {
      Symbol	Token: "IIFL\t13858
    },
    {
      Symbol	Token: "IIFLSEC\t13072
    },
    {
      Symbol	Token: "IIHFL\t5212
    },
    {
      Symbol	Token: "IIHFL\t5214
    },
    {
      Symbol	Token: "IIHFL\t5217
    },
    {
      Symbol	Token: "IIHFL\t7640
    },
    {
      Symbol	Token: "IIHFL\t7645
    },
    {
      Symbol	Token: "IIHFL\t7648
    },
    {
      Symbol	Token: "IIHFL\t7662
    },
    {
      Symbol	Token: "IIHFL\t7666
    },
    {
      Symbol	Token: "IIHFL\t7668
    },
    {
      Symbol	Token: "IIHFL\t7671
    },
    {
      Symbol	Token: "IIHFL\t7674
    },
    {
      Symbol	Token: "IITL\t19525
    },
    {
      Symbol	Token: "IL&FSENGG\t9380
    },
    {
      Symbol	Token: "IL&FSTRANS\t9381
    },
    {
      Symbol	Token: "IMAGICAA\t7672
    },
    {
      Symbol	Token: "IMC1\t14214
    },
    {
      Symbol	Token: "IMC1\t14219
    },
    {
      Symbol	Token: "IMC1\t14224
    },
    {
      Symbol	Token: "IMC1\t14228
    },
    {
      Symbol	Token: "IMFA\t19235
    },
    {
      Symbol	Token: "IMPAL\t12009
    },
    {
      Symbol	Token: "IMPEXFERRO\t11684
    },
    {
      Symbol	Token: "INCREDFIN\t11481
    },
    {
      Symbol	Token: "INCREDFIN\t11485
    },
    {
      Symbol	Token: "INCREDFIN\t14040
    },
    {
      Symbol	Token: "INCREDFIN\t14042
    },
    {
      Symbol	Token: "INCREDFIN\t14045
    },
    {
      Symbol	Token: "INCREDFIN\t14049
    },
    {
      Symbol	Token: "INCREDIBLE\t17507
    },
    {
      Symbol	Token: "INDBANK\t16933
    },
    {
      Symbol	Token: "INDHOTEL\t1512
    },
    {
      Symbol	Token: "INDIACEM\t1515
    },
    {
      Symbol	Token: "INDIAGLYCO\t1521
    },
    {
      Symbol	Token: "INDIAMART\t10726
    },
    {
      Symbol	Token: "INDIANB\t14309
    },
    {
      Symbol	Token: "INDIANCARD\t4422
    },
    {
      Symbol	Token: "INDIANHUME\t1530
    },
    {
      Symbol	Token: "INDIGO\t11195
    },
    {
      Symbol	Token: "INDIGOPNTS\t2048
    },
    {
      Symbol	Token: "INDIGRID\t20988
    },
    {
      Symbol	Token: "INDIGRID\t3418
    },
    {
      Symbol	Token: "INDIGRID\t3420
    },
    {
      Symbol	Token: "INDIGRID\t3422
    },
    {
      Symbol	Token: "INDIGRID\t3425
    },
    {
      Symbol	Token: "INDIGRID\t3428
    },
    {
      Symbol	Token: "INDIGRID\t3433
    },
    {
      Symbol	Token: "INDIGRID\t3442
    },
    {
      Symbol	Token: "INDIGRID\t3451
    },
    {
      Symbol	Token: "INDIGRID\t3457
    },
    {
      Symbol	Token: "INDIGRID\t3464
    },
    {
      Symbol	Token: "INDIGRID\t3470
    },
    {
      Symbol	Token: "INDIGRID\t3476
    },
    {
      Symbol	Token: "INDINFR\t2892
    },
    {
      Symbol	Token: "INDNIPPON\t4747
    },
    {
      Symbol	Token: "INDOAMIN\t9116
    },
    {
      Symbol	Token: "INDOBORAX\t8614
    },
    {
      Symbol	Token: "INDOCO\t11677
    },
    {
      Symbol	Token: "INDORAMA\t10993
    },
    {
      Symbol	Token: "INDOSTAR\t3098
    },
    {
      Symbol	Token: "INDOTECH\t13275
    },
    {
      Symbol	Token: "INDOTHAI\t25612
    },
    {
      Symbol	Token: "INDOWIND\t14952
    },
    {
      Symbol	Token: "INDRAMEDCO\t8852
    },
    {
      Symbol	Token: "INDSWFTLAB\t4870
    },
    {
      Symbol	Token: "INDSWFTLTD\t11602
    },
    {
      Symbol	Token: "INDTERRAIN\t21957
    },
    {
      Symbol	Token: "INDUSINDBK\t5258
    },
    {
      Symbol	Token: "INDUSTOWER\t29135
    },
    {
      Symbol	Token: "INFIBEAM\t16249
    },
    {
      Symbol	Token: "INFINIUM\t15036
    },
    {
      Symbol	Token: "INFOBEAN\t11027
    },
    {
      Symbol	Token: "INFOMEDIA\t13694
    },
    {
      Symbol	Token: "INFRABEES\t20072
    },
    {
      Symbol	Token: "INFY\t1594
    },
    {
      Symbol	Token: "INGERRAND\t1597
    },
    {
      Symbol	Token: "INNOVANA\t666
    },
    {
      Symbol	Token: "INNOVATIVE\t21862
    },
    {
      Symbol	Token: "INOXGREEN\t12188
    },
    {
      Symbol	Token: "INOXWIND\t7852
    },
    {
      Symbol	Token: "INSECTICID\t14657
    },
    {
      Symbol	Token: "INSPIRISYS\t13734
    },
    {
      Symbol	Token: "INTELLECT\t5926
    },
    {
      Symbol	Token: "INTENTECH\t20071
    },
    {
      Symbol	Token: "INTLCONV\t5606
    },
    {
      Symbol	Token: "INVENTURE\t24870
    },
    {
      Symbol	Token: "IOB\t9348
    },
    {
      Symbol	Token: "IOC\t1624
    },
    {
      Symbol	Token: "IOLCP\t20413
    },
    {
      Symbol	Token: "IONEXCHANG\t1630
    },
    {
      Symbol	Token: "IPCALAB\t1633
    },
    {
      Symbol	Token: "IPL\t4934
    },
    {
      Symbol	Token: "IPSL\t11903
    },
    {
      Symbol	Token: "IRB\t15313
    },
    {
      Symbol	Token: "IRBINVIT\t20817
    },
    {
      Symbol	Token: "IRBIT\t14806
    },
    {
      Symbol	Token: "IRCON\t4986
    },
    {
      Symbol	Token: "IRCTC\t13611
    },
    {
      Symbol	Token: "IREDA\t1374
    },
    {
      Symbol	Token: "IREDA\t1380
    },
    {
      Symbol	Token: "IREDA\t1383
    },
    {
      Symbol	Token: "IREDA\t1387
    },
    {
      Symbol	Token: "IREDA\t1391
    },
    {
      Symbol	Token: "IREDA\t1393
    },
    {
      Symbol	Token: "IREDA\t20030
    },
    {
      Symbol	Token: "IRFC\t2029
    },
    {
      Symbol	Token: "IRFC\t31128
    },
    {
      Symbol	Token: "IRFC\t29323
    },
    {
      Symbol	Token: "IRFC\t29607
    },
    {
      Symbol	Token: "IRFC\t586
    },
    {
      Symbol	Token: "IRFC\t591
    },
    {
      Symbol	Token: "IRFC\t597
    },
    {
      Symbol	Token: "IRFC\t603
    },
    {
      Symbol	Token: "IRFC\t1987
    },
    {
      Symbol	Token: "IRFC\t1991
    },
    {
      Symbol	Token: "IRFC\t1993
    },
    {
      Symbol	Token: "IRFC\t1999
    },
    {
      Symbol	Token: "IRFC\t11722
    },
    {
      Symbol	Token: "IRFC\t11730
    },
    {
      Symbol	Token: "IRFC\t11748
    },
    {
      Symbol	Token: "IRFC\t11751
    },
    {
      Symbol	Token: "IRFC\t11754
    },
    {
      Symbol	Token: "IRFC\t11757
    },
    {
      Symbol	Token: "IRFC\t15110
    },
    {
      Symbol	Token: "IRFC\t15112
    },
    {
      Symbol	Token: "IRFC\t15134
    },
    {
      Symbol	Token: "IRFC\t15168
    },
    {
      Symbol	Token: "IRIS\t6489
    },
    {
      Symbol	Token: "IRISDOREME\t2275
    },
    {
      Symbol	Token: "ISEC\t2489
    },
    {
      Symbol	Token: "ISFT\t18479
    },
    {
      Symbol	Token: "ISGEC\t3329
    },
    {
      Symbol	Token: "ISHAN\t10995
    },
    {
      Symbol	Token: "ISMTLTD\t14932
    },
    {
      Symbol	Token: "ITBEES\t19084
    },
    {
      Symbol	Token: "ITC\t1660
    },
    {
      Symbol	Token: "ITDC\t19299
    },
    {
      Symbol	Token: "ITDCEM\t5622
    },
    {
      Symbol	Token: "ITI\t1675
    },
    {
      Symbol	Token: "IVC\t6711
    },
    {
      Symbol	Token: "IVP\t1681
    },
    {
      Symbol	Token: "IVZINGOLD\t18292
    },
    {
      Symbol	Token: "IVZINNIFTY\t24217
    },
    {
      Symbol	Token: "IWEL\t3776
    },
    {
      Symbol	Token: "IZMO\t14174
    },
    {
      Symbol	Token: "J&KBANK\t5633
    },
    {
      Symbol	Token: "JAGRAN\t13211
    },
    {
      Symbol	Token: "JAGSNPHARM\t4410
    },
    {
      Symbol	Token: "JAIBALAJI\t11256
    },
    {
      Symbol	Token: "JAICORPLTD\t5143
    },
    {
      Symbol	Token: "JAINAM\t6012
    },
    {
      Symbol	Token: "JAIPURKURT\t5516
    },
    {
      Symbol	Token: "JAKHARIA\t3949
    },
    {
      Symbol	Token: "JALAN\t20929
    },
    {
      Symbol	Token: "JAMNAAUTO\t20778
    },
    {
      Symbol	Token: "JASH\t13982
    },
    {
      Symbol	Token: "JAYAGROGN\t4041
    },
    {
      Symbol	Token: "JAYBARMARU\t1708
    },
    {
      Symbol	Token: "JAYNECOIND\t2331
    },
    {
      Symbol	Token: "JAYSREETEA\t1720
    },
    {
      Symbol	Token: "JBCHEPHARM\t1726
    },
    {
      Symbol	Token: "JBMA\t11655
    },
    {
      Symbol	Token: "JCHAC\t4491
    },
    {
      Symbol	Token: "JETAIRWAYS\t13420
    },
    {
      Symbol	Token: "JETFREIGHT\t7211
    },
    {
      Symbol	Token: "JETKNIT\t18699
    },
    {
      Symbol	Token: "JFLLIFE\t10885
    },
    {
      Symbol	Token: "JHS\t13720
    },
    {
      Symbol	Token: "JINDALPHOT\t11743
    },
    {
      Symbol	Token: "JINDALPOLY\t1756
    },
    {
      Symbol	Token: "JINDALSAW\t3024
    },
    {
      Symbol	Token: "JINDALSTEL\t6733
    },
    {
      Symbol	Token: "JINDRILL\t13875
    },
    {
      Symbol	Token: "JINDWORLD\t20642
    },
    {
      Symbol	Token: "JISLDVREQS\t25684
    },
    {
      Symbol	Token: "JISLJALEQS\t10397
    },
    {
      Symbol	Token: "JITFINFRA\t19695
    },
    {
      Symbol	Token: "JKCEMENT\t13270
    },
    {
      Symbol	Token: "JKIL\t15266
    },
    {
      Symbol	Token: "JKLAKSHMI\t13491
    },
    {
      Symbol	Token: "JKPAPER\t11860
    },
    {
      Symbol	Token: "JKTYRE\t14435
    },
    {
      Symbol	Token: "JMA\t7109
    },
    {
      Symbol	Token: "JMFINANCIL\t13637
    },
    {
      Symbol	Token: "JOCIL\t16927
    },
    {
      Symbol	Token: "JPASSOCIAT\t11460
    },
    {
      Symbol	Token: "JPOLYINVST\t31507
    },
    {
      Symbol	Token: "JPPOWER\t11763
    },
    {
      Symbol	Token: "JSL\t11236
    },
    {
      Symbol	Token: "JSLL\t9038
    },
    {
      Symbol	Token: "JSWENERGY\t17869
    },
    {
      Symbol	Token: "JSWHL\t11880
    },
    {
      Symbol	Token: "JSWISPL\t4671
    },
    {
      Symbol	Token: "JSWSTEEL\t11723
    },
    {
      Symbol	Token: "JTEKTINDIA\t3237
    },
    {
      Symbol	Token: "JTLIND\t7287
    },
    {
      Symbol	Token: "JUBLFOOD\t18096
    },
    {
      Symbol	Token: "JUBLINDS\t21541
    },
    {
      Symbol	Token: "JUBLINGREA\t2783
    },
    {
      Symbol	Token: "JUBLPHARMA\t3637
    },
    {
      Symbol	Token: "JUNIORBEES\t10939
    },
    {
      Symbol	Token: "JUSTDIAL\t29962
    },
    {
      Symbol	Token: "JWL\t20224
    },
    {
      Symbol	Token: "JYOTHYLAB\t15146
    },
    {
      Symbol	Token: "JYOTISTRUC\t2411
    },
    {
      Symbol	Token: "KABRAEXTRU\t1805
    },
    {
      Symbol	Token: "KAJARIACER\t1808
    },
    {
      Symbol	Token: "KAKATCEM\t1811
    },
    {
      Symbol	Token: "KALPATPOWR\t1814
    },
    {
      Symbol	Token: "KALYANI\t19653
    },
    {
      Symbol	Token: "KALYANIFRG\t15160
    },
    {
      Symbol	Token: "KALYANKJIL\t2955
    },
    {
      Symbol	Token: "KAMATHOTEL\t1826
    },
    {
      Symbol	Token: "KAMDHENU\t13457
    },
    {
      Symbol	Token: "KAMOPAINTS\t13814
    },
    {
      Symbol	Token: "KANANIIND\t25786
    },
    {
      Symbol	Token: "KANDARP\t11208
    },
    {
      Symbol	Token: "KANORICHEM\t1835
    },
    {
      Symbol	Token: "KANPRPLA\t1782
    },
    {
      Symbol	Token: "KANSAINER\t1196
    },
    {
      Symbol	Token: "KAPSTON\t18967
    },
    {
      Symbol	Token: "KARMAENG\t24389
    },
    {
      Symbol	Token: "KARURVYSYA\t1838
    },
    {
      Symbol	Token: "KAUSHALYA\t15136
    },
    {
      Symbol	Token: "KAVVERITEL\t15244
    },
    {
      Symbol	Token: "KAYA\t10276
    },
    {
      Symbol	Token: "KAYNES\t12092
    },
    {
      Symbol	Token: "KBCGLOBAL\t2360
    },
    {
      Symbol	Token: "KCK\t10293
    },
    {
      Symbol	Token: "KCP\t1841
    },
    {
      Symbol	Token: "KCPSUGIND\t4809
    },
    {
      Symbol	Token: "KDDL\t14908
    },
    {
      Symbol	Token: "KEC\t13260
    },
    {
      Symbol	Token: "KECL\t18220
    },
    {
      Symbol	Token: "KEEPLEARN\t8880
    },
    {
      Symbol	Token: "KEI\t13310
    },
    {
      Symbol	Token: "KELLTONTEC\t13430
    },
    {
      Symbol	Token: "KENNAMET\t11841
    },
    {
      Symbol	Token: "KERNEX\t13125
    },
    {
      Symbol	Token: "KESORAMIND\t1859
    },
    {
      Symbol	Token: "KEYFINSERV\t4157
    },
    {
      Symbol	Token: "KFINTECH\t13359
    },
    {
      Symbol	Token: "KHADIM\t425
    },
    {
      Symbol	Token: "KHAICHEM\t896
    },
    {
      Symbol	Token: "KHAITANLTD\t3912
    },
    {
      Symbol	Token: "KHANDSE\t9641
    },
    {
      Symbol	Token: "KHFM\t9570
    },
    {
      Symbol	Token: "KICL\t21119
    },
    {
      Symbol	Token: "KILITCH\t19937
    },
    {
      Symbol	Token: "KIMS\t4847
    },
    {
      Symbol	Token: "KINGFA\t18944
    },
    {
      Symbol	Token: "KIOCL\t19126
    },
    {
      Symbol	Token: "KIRIINDUS\t16639
    },
    {
      Symbol	Token: "KIRLFER\t14466
    },
    {
      Symbol	Token: "KIRLOSBROS\t18581
    },
    {
      Symbol	Token: "KIRLOSENG\t20936
    },
    {
      Symbol	Token: "KIRLOSIND\t19025
    },
    {
      Symbol	Token: "KIRLPNU\t15180
    },
    {
      Symbol	Token: "KITEX\t28899
    },
    {
      Symbol	Token: "KKCL\t13381
    },
    {
      Symbol	Token: "KKVAPOW\t17781
    },
    {
      Symbol	Token: "KMSUGAR\t14667
    },
    {
      Symbol	Token: "KNAGRI\t8602
    },
    {
      Symbol	Token: "KNRCON\t15283
    },
    {
      Symbol	Token: "KOHINOOR\t7675
    },
    {
      Symbol	Token: "KOKUYOCMLN\t16827
    },
    {
      Symbol	Token: "KOLTEPATIL\t15124
    },
    {
      Symbol	Token: "KOPRAN\t1919
    },
    {
      Symbol	Token: "KORE\t10889
    },
    {
      Symbol	Token: "KOTAKALPHA\t7412
    },
    {
      Symbol	Token: "KOTAKBANK\t1922
    },
    {
      Symbol	Token: "KOTAKBKETF\t5851
    },
    {
      Symbol	Token: "KOTAKCONS\t10512
    },
    {
      Symbol	Token: "KOTAKGOLD\t14858
    },
    {
      Symbol	Token: "KOTAKIT\t2627
    },
    {
      Symbol	Token: "KOTAKLIQ\t13950
    },
    {
      Symbol	Token: "KOTAKLOVOL\t8632
    },
    {
      Symbol	Token: "KOTAKMID50\t8077
    },
    {
      Symbol	Token: "KOTAKMNC\t10676
    },
    {
      Symbol	Token: "KOTAKNIFTY\t18102
    },
    {
      Symbol	Token: "KOTAKNV20\t11457
    },
    {
      Symbol	Token: "KOTAKPSUBK\t15061
    },
    {
      Symbol	Token: "KOTAKSILVE\t13082
    },
    {
      Symbol	Token: "KOTARISUG\t11647
    },
    {
      Symbol	Token: "KOTHARIPET\t4594
    },
    {
      Symbol	Token: "KOTHARIPRO\t5528
    },
    {
      Symbol	Token: "KOTYARK\t6441
    },
    {
      Symbol	Token: "KOVAI\t5192
    },
    {
      Symbol	Token: "KPIGREEN\t5108
    },
    {
      Symbol	Token: "KPITTECH\t9683
    },
    {
      Symbol	Token: "KPRMILL\t14912
    },
    {
      Symbol	Token: "KRBL\t10577
    },
    {
      Symbol	Token: "KRIDHANINF\t11488
    },
    {
      Symbol	Token: "KRISHANA\t12847
    },
    {
      Symbol	Token: "KRISHIVAL\t8671
    },
    {
      Symbol	Token: "KRISHNADEF\t8782
    },
    {
      Symbol	Token: "KRITI\t6417
    },
    {
      Symbol	Token: "KRITIKA\t9288
    },
    {
      Symbol	Token: "KRITINUT\t11432
    },
    {
      Symbol	Token: "KRSNAA\t5359
    },
    {
      Symbol	Token: "KSB\t1949
    },
    {
      Symbol	Token: "KSCL\t14972
    },
    {
      Symbol	Token: "KSHITIJPOL\t10407
    },
    {
      Symbol	Token: "KSL\t18889
    },
    {
      Symbol	Token: "KSOLVES\t11060
    },
    {
      Symbol	Token: "KTKBANK\t8054
    },
    {
      Symbol	Token: "KUANTUM\t13870
    },
    {
      Symbol	Token: "L&TFH\t24948
    },
    {
      Symbol	Token: "L&TFINANCE\t9212
    },
    {
      Symbol	Token: "L&TFINANCE\t9214
    },
    {
      Symbol	Token: "L&TFINANCE\t9216
    },
    {
      Symbol	Token: "L&TFINANCE\t9227
    },
    {
      Symbol	Token: "L&TFINANCE\t9229
    },
    {
      Symbol	Token: "L&TFINANCE\t9231
    },
    {
      Symbol	Token: "L&TFINANCE\t9233
    },
    {
      Symbol	Token: "L&TFINANCE\t9235
    },
    {
      Symbol	Token: "L&TFINANCE\t9622
    },
    {
      Symbol	Token: "L&TFINANCE\t9624
    },
    {
      Symbol	Token: "L&TFINANCE\t9630
    },
    {
      Symbol	Token: "L&TFINANCE\t9644
    },
    {
      Symbol	Token: "L&TFINANCE\t9650
    },
    {
      Symbol	Token: "L&TFINANCE\t9656
    },
    {
      Symbol	Token: "L&TFINANCE\t9662
    },
    {
      Symbol	Token: "L&TFINANCE\t9669
    },
    {
      Symbol	Token: "L&TFINANCE\t9674
    },
    {
      Symbol	Token: "L&TFINANCE\t9676
    },
    {
      Symbol	Token: "L&TFINANCE\t15641
    },
    {
      Symbol	Token: "L&TFINANCE\t15656
    },
    {
      Symbol	Token: "L&TFINANCE\t15684
    },
    {
      Symbol	Token: "L&TFINANCE\t15733
    },
    {
      Symbol	Token: "L&TFINANCE\t15763
    },
    {
      Symbol	Token: "L&TFINANCE\t15802
    },
    {
      Symbol	Token: "LAGNAM\t5865
    },
    {
      Symbol	Token: "LAKPRE\t4774
    },
    {
      Symbol	Token: "LAL\t14924
    },
    {
      Symbol	Token: "LALPATHLAB\t11654
    },
    {
      Symbol	Token: "LAMBODHARA\t6407
    },
    {
      Symbol	Token: "LANDMARK\t13276
    },
    {
      Symbol	Token: "LAOPALA\t14423
    },
    {
      Symbol	Token: "LASA\t21713
    },
    {
      Symbol	Token: "LATENTVIEW\t6818
    },
    {
      Symbol	Token: "LATTEYS\t3307
    },
    {
      Symbol	Token: "LAURUSLABS\t19234
    },
    {
      Symbol	Token: "LAXMICOT\t6568
    },
    {
      Symbol	Token: "LAXMIMACH\t1979
    },
    {
      Symbol	Token: "LCCINFOTEC\t7529
    },
    {
      Symbol	Token: "LEMERITE\t9372
    },
    {
      Symbol	Token: "LEMONTREE\t2606
    },
    {
      Symbol	Token: "LEXUS\t14459
    },
    {
      Symbol	Token: "LFIC\t7902
    },
    {
      Symbol	Token: "LGBBROSLTD\t18321
    },
    {
      Symbol	Token: "LGBFORGE\t16845
    },
    {
      Symbol	Token: "LGHL\t18475
    },
    {
      Symbol	Token: "LIBAS\t11082
    },
    {
      Symbol	Token: "LIBERTSHOE\t1994
    },
    {
      Symbol	Token: "LICHSGFIN\t1997
    },
    {
      Symbol	Token: "LICI\t9480
    },
    {
      Symbol	Token: "LICNETFGSC\t6062
    },
    {
      Symbol	Token: "LICNETFN50\t11319
    },
    {
      Symbol	Token: "LICNETFSEN\t11441
    },
    {
      Symbol	Token: "LICNFNHGP\t15229
    },
    {
      Symbol	Token: "LIKHITHA\t578
    },
    {
      Symbol	Token: "LINC\t6951
    },
    {
      Symbol	Token: "LINCOLN\t11596
    },
    {
      Symbol	Token: "LINDEINDIA\t1627
    },
    {
      Symbol	Token: "LIQUIDBEES\t11006
    },
    {
      Symbol	Token: "LIQUIDETF\t1927
    },
    {
      Symbol	Token: "LLOYDS\t11472
    },
    {
      Symbol	Token: "LODHA\t3220
    },
    {
      Symbol	Token: "LOKESHMACH\t13436
    },
    {
      Symbol	Token: "LOTUSEYE\t16807
    },
    {
      Symbol	Token: "LOVABLE\t22415
    },
    {
      Symbol	Token: "LOYALTEX\t10590
    },
    {
      Symbol	Token: "LPDC\t16863
    },
    {
      Symbol	Token: "LRRPL\t14204
    },
    {
      Symbol	Token: "LSIL\t17801
    },
    {
      Symbol	Token: "LT\t11483
    },
    {
      Symbol	Token: "LTGILTBEES\t17700
    },
    {
      Symbol	Token: "LTIM\t17818
    },
    {
      Symbol	Token: "LTTS\t18564
    },
    {
      Symbol	Token: "LUMAXIND\t2018
    },
    {
      Symbol	Token: "LUMAXTECH\t14014
    },
    {
      Symbol	Token: "LUPIN\t10440
    },
    {
      Symbol	Token: "LUXIND\t11301
    },
    {
      Symbol	Token: "LXCHEM\t2841
    },
    {
      Symbol	Token: "LYKALABS\t2028
    },
    {
      Symbol	Token: "LYPSAGEMS\t31468
    },
    {
      Symbol	Token: "M&M\t2031
    },
    {
      Symbol	Token: "M&MFIN\t13285
    },
    {
      Symbol	Token: "M&MFIN\t20046
    },
    {
      Symbol	Token: "M&MFIN\t20048
    },
    {
      Symbol	Token: "M&MFIN\t20050
    },
    {
      Symbol	Token: "MAANALU\t15017
    },
    {
      Symbol	Token: "MACPOWER\t22347
    },
    {
      Symbol	Token: "MADHAV\t15151
    },
    {
      Symbol	Token: "MADHAVBAUG\t8259
    },
    {
      Symbol	Token: "MADHUCON\t13668
    },
    {
      Symbol	Token: "MADRASFERT\t4911
    },
    {
      Symbol	Token: "MAESGETF\t1200
    },
    {
      Symbol	Token: "MAFANG\t3507
    },
    {
      Symbol	Token: "MAFSETF\t5220
    },
    {
      Symbol	Token: "MAGADSUGAR\t21392
    },
    {
      Symbol	Token: "MAGNUM\t14957
    },
    {
      Symbol	Token: "MAGOLDETF\t14286
    },
    {
      Symbol	Token: "MAGS813ETF\t14938
    },
    {
      Symbol	Token: "MAHABANK\t11377
    },
    {
      Symbol	Token: "MAHAPEXLTD\t5239
    },
    {
      Symbol	Token: "MAHASTEEL\t17527
    },
    {
      Symbol	Token: "MAHEPC\t17603
    },
    {
      Symbol	Token: "MAHESHWARI\t9576
    },
    {
      Symbol	Token: "MAHICKRA\t2839
    },
    {
      Symbol	Token: "MAHINDCIE\t14937
    },
    {
      Symbol	Token: "MAHKTECH\t7074
    },
    {
      Symbol	Token: "MAHLIFE\t8050
    },
    {
      Symbol	Token: "MAHLOG\t385
    },
    {
      Symbol	Token: "MAHSCOOTER\t2085
    },
    {
      Symbol	Token: "MAHSEAMLES\t2088
    },
    {
      Symbol	Token: "MAITHANALL\t24538
    },
    {
      Symbol	Token: "MAKS\t11218
    },
    {
      Symbol	Token: "MALLCOM\t7965
    },
    {
      Symbol	Token: "MALUPAPER\t13352
    },
    {
      Symbol	Token: "MAM150ETF\t8413
    },
    {
      Symbol	Token: "MAMFGETF\t7979
    },
    {
      Symbol	Token: "MAN50ETF\t6353
    },
    {
      Symbol	Token: "MANAKALUCO\t7420
    },
    {
      Symbol	Token: "MANAKCOAT\t7413
    },
    {
      Symbol	Token: "MANAKSIA\t15199
    },
    {
      Symbol	Token: "MANAKSTEEL\t7463
    },
    {
      Symbol	Token: "MANALIPETC\t13796
    },
    {
      Symbol	Token: "MANAPPURAM\t19061
    },
    {
      Symbol	Token: "MANAV\t21697
    },
    {
      Symbol	Token: "MANGALAM\t11817
    },
    {
      Symbol	Token: "MANGCHEFER\t15007
    },
    {
      Symbol	Token: "MANGLMCEM\t2106
    },
    {
      Symbol	Token: "MANINDS\t11884
    },
    {
      Symbol	Token: "MANINFRA\t18226
    },
    {
      Symbol	Token: "MANOMAY\t13753
    },
    {
      Symbol	Token: "MANORAMA\t10227
    },
    {
      Symbol	Token: "MANORG\t6428
    },
    {
      Symbol	Token: "MANUGRAPH\t13572
    },
    {
      Symbol	Token: "MANV30F\t14786
    },
    {
      Symbol	Token: "MANXT50\t17181
    },
    {
      Symbol	Token: "MANYAVAR\t8167
    },
    {
      Symbol	Token: "MAPMYINDIA\t7227
    },
    {
      Symbol	Token: "MARALOVER\t2112
    },
    {
      Symbol	Token: "MARATHON\t18659
    },
    {
      Symbol	Token: "MARICO\t4067
    },
    {
      Symbol	Token: "MARINE\t1328
    },
    {
      Symbol	Token: "MARKSANS\t10579
    },
    {
      Symbol	Token: "MARSHALL\t6764
    },
    {
      Symbol	Token: "MARUTI\t10999
    },
    {
      Symbol	Token: "MASFIN\t199
    },
    {
      Symbol	Token: "MASKINVEST\t18731
    },
    {
      Symbol	Token: "MASPTOP50\t5782
    },
    {
      Symbol	Token: "MASTEK\t2124
    },
    {
      Symbol	Token: "MATRIMONY\t21726
    },
    {
      Symbol	Token: "MAWANASUG\t17022
    },
    {
      Symbol	Token: "MAXHEALTH\t22377
    },
    {
      Symbol	Token: "MAXIND\t22428
    },
    {
      Symbol	Token: "MAXVIL\t17468
    },
    {
      Symbol	Token: "MAYURUNIQ\t28906
    },
    {
      Symbol	Token: "MAZDA\t18866
    },
    {
      Symbol	Token: "MAZDOCK\t509
    },
    {
      Symbol	Token: "MBAPL\t12686
    },
    {
      Symbol	Token: "MBLINFRA\t18029
    },
    {
      Symbol	Token: "MCDOWELL-N\t10447
    },
    {
      Symbol	Token: "MCL\t22362
    },
    {
      Symbol	Token: "MCLEODRUSS\t11944
    },
    {
      Symbol	Token: "MCON\t14574
    },
    {
      Symbol	Token: "MCX\t31181
    },
    {
      Symbol	Token: "MDL\t2132
    },
    {
      Symbol	Token: "MEDANTA\t11956
    },
    {
      Symbol	Token: "MEDICAMEQ\t6278
    },
    {
      Symbol	Token: "MEDICO\t9667
    },
    {
      Symbol	Token: "MEDPLUS\t7254
    },
    {
      Symbol	Token: "MEGAFLEX\t10971
    },
    {
      Symbol	Token: "MEGASOFT\t14793
    },
    {
      Symbol	Token: "MEGASTAR\t8153
    },
    {
      Symbol	Token: "MELSTAR\t17950
    },
    {
      Symbol	Token: "MENONBE\t6961
    },
    {
      Symbol	Token: "MEP\t8771
    },
    {
      Symbol	Token: "METROBRAND\t7242
    },
    {
      Symbol	Token: "METROPOLIS\t9581
    },
    {
      Symbol	Token: "MFL\t5382
    },
    {
      Symbol	Token: "MFSL\t2142
    },
    {
      Symbol	Token: "MGEL\t1598
    },
    {
      Symbol	Token: "MGL\t17534
    },
    {
      Symbol	Token: "MHHL\t1426
    },
    {
      Symbol	Token: "MHLXMIRU\t7886
    },
    {
      Symbol	Token: "MHRIL\t17333
    },
    {
      Symbol	Token: "MICEL\t7169
    },
    {
      Symbol	Token: "MID150BEES\t8506
    },
    {
      Symbol	Token: "MIDHANI\t2463
    },
    {
      Symbol	Token: "MILTON\t159
    },
    {
      Symbol	Token: "MINDACORP\t25897
    },
    {
      Symbol	Token: "MINDPOOL\t8900
    },
    {
      Symbol	Token: "MINDSPACE\t22308
    },
    {
      Symbol	Token: "MINDTECK\t18049
    },
    {
      Symbol	Token: "MIRCELECTR\t2202
    },
    {
      Symbol	Token: "MIRZAINT\t4394
    },
    {
      Symbol	Token: "MITCON\t8469
    },
    {
      Symbol	Token: "MITTAL\t18666
    },
    {
      Symbol	Token: "MKPL\t20509
    },
    {
      Symbol	Token: "MMFL\t13844
    },
    {
      Symbol	Token: "MMP\t16395
    },
    {
      Symbol	Token: "MMTC\t17957
    },
    {
      Symbol	Token: "MODIRUBBER\t6934
    },
    {
      Symbol	Token: "MODISONLTD\t3316
    },
    {
      Symbol	Token: "MOGSEC\t1507
    },
    {
      Symbol	Token: "MOHEALTH\t10508
    },
    {
      Symbol	Token: "MOHITIND\t29423
    },
    {
      Symbol	Token: "MOIL\t20830
    },
    {
      Symbol	Token: "MOKSH\t3586
    },
    {
      Symbol	Token: "MOL\t5394
    },
    {
      Symbol	Token: "MOLDTECH\t17625
    },
    {
      Symbol	Token: "MOLDTKPAC\t6713
    },
    {
      Symbol	Token: "MOLOWVOL\t8654
    },
    {
      Symbol	Token: "MOM100\t21423
    },
    {
      Symbol	Token: "MOM50\t19289
    },
    {
      Symbol	Token: "MOMENTUM\t10693
    },
    {
      Symbol	Token: "MOMOMENTUM\t8182
    },
    {
      Symbol	Token: "MON100\t22739
    },
    {
      Symbol	Token: "MONARCH\t7679
    },
    {
      Symbol	Token: "MONQ50\t7422
    },
    {
      Symbol	Token: "MONTECARLO\t5938
    },
    {
      Symbol	Token: "MOQUALITY\t10822
    },
    {
      Symbol	Token: "MORARJEE\t28877
    },
    {
      Symbol	Token: "MOREPENLAB\t2259
    },
    {
      Symbol	Token: "MOS\t15051
    },
    {
      Symbol	Token: "MOTHERSON\t4204
    },
    {
      Symbol	Token: "MOTILALOFS\t14947
    },
    {
      Symbol	Token: "MOTOGENFIN\t8793
    },
    {
      Symbol	Token: "MOVALUE\t10825
    },
    {
      Symbol	Token: "MOXSH\t13502
    },
    {
      Symbol	Token: "MPHASIS\t4503
    },
    {
      Symbol	Token: "MPSLTD\t10578
    },
    {
      Symbol	Token: "MPTODAY\t21792
    },
    {
      Symbol	Token: "MRF\t2277
    },
    {
      Symbol	Token: "MRO\t5130
    },
    {
      Symbol	Token: "MRO-TEK\t8998
    },
    {
      Symbol	Token: "MRPL\t2283
    },
    {
      Symbol	Token: "MSPL\t11919
    },
    {
      Symbol	Token: "MSTCLTD\t9356
    },
    {
      Symbol	Token: "MSUMI\t8596
    },
    {
      Symbol	Token: "MTARTECH\t2709
    },
    {
      Symbol	Token: "MTEDUCARE\t31413
    },
    {
      Symbol	Token: "MTNL\t2294
    },
    {
      Symbol	Token: "MUKANDLTD\t11325
    },
    {
      Symbol	Token: "MUKTAARTS\t8687
    },
    {
      Symbol	Token: "MUNJALAU\t13511
    },
    {
      Symbol	Token: "MUNJALSHOW\t2307
    },
    {
      Symbol	Token: "MURUDCERA\t2313
    },
    {
      Symbol	Token: "MUTHOOTCAP\t10415
    },
    {
      Symbol	Token: "MUTHOOTFIN\t23650
    },
    {
      Symbol	Token: "MWL\t10311
    },
    {
      Symbol	Token: "N1NSETEST\t12848
    },
    {
      Symbol	Token: "NABARD\t20032
    },
    {
      Symbol	Token: "NABARD\t20034
    },
    {
      Symbol	Token: "NACLIND\t20425
    },
    {
      Symbol	Token: "NAGAFERT\t17295
    },
    {
      Symbol	Token: "NAGREEKCAP\t14942
    },
    {
      Symbol	Token: "NAGREEKEXP\t14702
    },
    {
      Symbol	Token: "NAHARCAP\t15360
    },
    {
      Symbol	Token: "NAHARINDUS\t13106
    },
    {
      Symbol	Token: "NAHARPOLY\t14445
    },
    {
      Symbol	Token: "NAHARSPING\t14440
    },
    {
      Symbol	Token: "NAM-INDIA\t357
    },
    {
      Symbol	Token: "NARMADA\t11627
    },
    {
      Symbol	Token: "NATCOPHARM\t3918
    },
    {
      Symbol	Token: "NATHBIOGEN\t11065
    },
    {
      Symbol	Token: "NATIONALUM\t6364
    },
    {
      Symbol	Token: "NATNLSTEEL\t8682
    },
    {
      Symbol	Token: "NAUKRI\t13751
    },
    {
      Symbol	Token: "NAVA\t4014
    },
    {
      Symbol	Token: "NAVIFIN\t9842
    },
    {
      Symbol	Token: "NAVIFIN\t9844
    },
    {
      Symbol	Token: "NAVIFIN\t9849
    },
    {
      Symbol	Token: "NAVIFIN\t9852
    },
    {
      Symbol	Token: "NAVINFLUOR\t14672
    },
    {
      Symbol	Token: "NAVKARCORP\t10557
    },
    {
      Symbol	Token: "NAVNETEDUL\t2385
    },
    {
      Symbol	Token: "NAZARA\t2987
    },
    {
      Symbol	Token: "NBCC\t31415
    },
    {
      Symbol	Token: "NBIFIN\t19111
    },
    {
      Symbol	Token: "NCC\t2319
    },
    {
      Symbol	Token: "NCLIND\t14490
    },
    {
      Symbol	Token: "NDGL\t18371
    },
    {
      Symbol	Token: "NDL\t31258
    },
    {
      Symbol	Token: "NDLVENTURE\t14547
    },
    {
      Symbol	Token: "NDRAUTO\t22255
    },
    {
      Symbol	Token: "NDTV\t11427
    },
    {
      Symbol	Token: "NECCLTD\t13522
    },
    {
      Symbol	Token: "NECLIFE\t11927
    },
    {
      Symbol	Token: "NELCAST\t14761
    },
    {
      Symbol	Token: "NELCO\t2388
    },
    {
      Symbol	Token: "NEOGEN\t9917
    },
    {
      Symbol	Token: "NESCO\t15409
    },
    {
      Symbol	Token: "NESTLEIND\t17963
    },
    {
      Symbol	Token: "NETF\t7838
    },
    {
      Symbol	Token: "NETWORK18\t14111
    },
    {
      Symbol	Token: "NEULANDLAB\t2406
    },
    {
      Symbol	Token: "NEWGEN\t1164
    },
    {
      Symbol	Token: "NEXTMEDIA\t9867
    },
    {
      Symbol	Token: "NFL\t13925
    },
    {
      Symbol	Token: "NGIL\t5404
    },
    {
      Symbol	Token: "NGLFINE\t10277
    },
    {
      Symbol	Token: "NH\t11840
    },
    {
      Symbol	Token: "NHAI\t31040
    },
    {
      Symbol	Token: "NHAI\t176
    },
    {
      Symbol	Token: "NHAI\t180
    },
    {
      Symbol	Token: "NHAI\t186
    },
    {
      Symbol	Token: "NHAI\t192
    },
    {
      Symbol	Token: "NHAI\t11949
    },
    {
      Symbol	Token: "NHAI\t11952
    },
    {
      Symbol	Token: "NHAI\t11954
    },
    {
      Symbol	Token: "NHAI\t12003
    },
    {
      Symbol	Token: "NHAI\t14497
    },
    {
      Symbol	Token: "NHAI\t14499
    },
    {
      Symbol	Token: "NHAI\t14522
    },
    {
      Symbol	Token: "NHAI\t14529
    },
    {
      Symbol	Token: "NHBTF2014\t31965
    },
    {
      Symbol	Token: "NHBTF2014\t31966
    },
    {
      Symbol	Token: "NHBTF2014\t31967
    },
    {
      Symbol	Token: "NHBTF2014\t31968
    },
    {
      Symbol	Token: "NHBTF2014\t31969
    },
    {
      Symbol	Token: "NHBTF2014\t31970
    },
    {
      Symbol	Token: "NHBTF2023\t1754
    },
    {
      Symbol	Token: "NHBTF2023\t1758
    },
    {
      Symbol	Token: "NHBTF2023\t1761
    },
    {
      Symbol	Token: "NHBTF2023\t1763
    },
    {
      Symbol	Token: "NHBTF2023\t1765
    },
    {
      Symbol	Token: "NHBTF2023\t1767
    },
    {
      Symbol	Token: "NHIT\t6531
    },
    {
      Symbol	Token: "NHIT\t11658
    },
    {
      Symbol	Token: "NHIT\t11665
    },
    {
      Symbol	Token: "NHIT\t11669
    },
    {
      Symbol	Token: "NHPC\t17400
    },
    {
      Symbol	Token: "NHPC\t31482
    },
    {
      Symbol	Token: "NHPC\t31483
    },
    {
      Symbol	Token: "NHPC\t31484
    },
    {
      Symbol	Token: "NHPC\t31485
    },
    {
      Symbol	Token: "NHPC\t31486
    },
    {
      Symbol	Token: "NHPC\t31487
    },
    {
      Symbol	Token: "NIACL\t399
    },
    {
      Symbol	Token: "NIBL\t29737
    },
    {
      Symbol	Token: "NIDAN\t6592
    },
    {
      Symbol	Token: "NIF100BEES\t29577
    },
    {
      Symbol	Token: "NIFTYBEES\t10576
    },
    {
      Symbol	Token: "NIFTYQLITY\t10690
    },
    {
      Symbol	Token: "NIITLTD\t11522
    },
    {
      Symbol	Token: "NILAINFRA\t9253
    },
    {
      Symbol	Token: "NILASPACES\t7411
    },
    {
      Symbol	Token: "NILKAMAL\t2421
    },
    {
      Symbol	Token: "NINSYS\t14197
    },
    {
      Symbol	Token: "NIPPOBATRY\t6782
    },
    {
      Symbol	Token: "NIRAJ\t255
    },
    {
      Symbol	Token: "NIRMAN\t14722
    },
    {
      Symbol	Token: "NITCO\t13300
    },
    {
      Symbol	Token: "NITINSPIN\t13175
    },
    {
      Symbol	Token: "NITIRAJ\t3247
    },
    {
      Symbol	Token: "NKIND\t2439
    },
    {
      Symbol	Token: "NLCINDIA\t8585
    },
    {
      Symbol	Token: "NMDC\t15332
    },
    {
      Symbol	Token: "NOCIL\t2442
    },
    {
      Symbol	Token: "NOIDATOLL\t10786
    },
    {
      Symbol	Token: "NOVARTIND\t9007
    },
    {
      Symbol	Token: "NPBET\t12978
    },
    {
      Symbol	Token: "NPST\t5299
    },
    {
      Symbol	Token: "NRAIL\t20314
    },
    {
      Symbol	Token: "NRBBEARING\t7553
    },
    {
      Symbol	Token: "NRL\t13675
    },
    {
      Symbol	Token: "NSIL\t11239
    },
    {
      Symbol	Token: "NSLNISP\t14180
    },
    {
      Symbol	Token: "NTPC\t11630
    },
    {
      Symbol	Token: "NTPC\t31758
    },
    {
      Symbol	Token: "NTPC\t31760
    },
    {
      Symbol	Token: "NTPC\t31762
    },
    {
      Symbol	Token: "NTPC\t31764
    },
    {
      Symbol	Token: "NTPC\t31766
    },
    {
      Symbol	Token: "NTPC\t31768
    },
    {
      Symbol	Token: "NTPC\t7377
    },
    {
      Symbol	Token: "NTPC\t10737
    },
    {
      Symbol	Token: "NTPC\t10741
    },
    {
      Symbol	Token: "NTPC\t10744
    },
    {
      Symbol	Token: "NTPC\t10746
    },
    {
      Symbol	Token: "NTPC\t10749
    },
    {
      Symbol	Token: "NTPC\t10751
    },
    {
      Symbol	Token: "NUCLEUS\t10791
    },
    {
      Symbol	Token: "NURECA\t2350
    },
    {
      Symbol	Token: "NUVOCO\t5426
    },
    {
      Symbol	Token: "NV20BEES\t9847
    },
    {
      Symbol	Token: "NYKAA\t6545
    },
    {
      Symbol	Token: "OAL\t10768
    },
    {
      Symbol	Token: "OBCL\t8797
    },
    {
      Symbol	Token: "OBEROIRLTY\t20242
    },
    {
      Symbol	Token: "OCCL\t12231
    },
    {
      Symbol	Token: "OFSS\t10738
    },
    {
      Symbol	Token: "OIL\t17438
    },
    {
      Symbol	Token: "OILCOUNTUB\t2472
    },
    {
      Symbol	Token: "OLECTRA\t10637
    },
    {
      Symbol	Token: "OMAXAUTO\t10922
    },
    {
      Symbol	Token: "OMAXE\t14853
    },
    {
      Symbol	Token: "OMFURN\t117
    },
    {
      Symbol	Token: "OMINFRAL\t24231
    },
    {
      Symbol	Token: "OMKARCHEM\t13515
    },
    {
      Symbol	Token: "ONELIFECAP\t25492
    },
    {
      Symbol	Token: "ONEPOINT\t9939
    },
    {
      Symbol	Token: "ONGC\t2475
    },
    {
      Symbol	Token: "ONMOBILE\t15278
    },
    {
      Symbol	Token: "ONWARDTEC\t2481
    },
    {
      Symbol	Token: "OPTIEMUS\t21469
    },
    {
      Symbol	Token: "ORBTEXP\t31475
    },
    {
      Symbol	Token: "ORCHPHARMA\t929
    },
    {
      Symbol	Token: "ORICONENT\t10159
    },
    {
      Symbol	Token: "ORIENTABRA\t13111
    },
    {
      Symbol	Token: "ORIENTALTL\t14346
    },
    {
      Symbol	Token: "ORIENTBELL\t14278
    },
    {
      Symbol	Token: "ORIENTCEM\t30089
    },
    {
      Symbol	Token: "ORIENTELEC\t2972
    },
    {
      Symbol	Token: "ORIENTHOT\t2493
    },
    {
      Symbol	Token: "ORIENTLTD\t18208
    },
    {
      Symbol	Token: "ORIENTPPR\t2496
    },
    {
      Symbol	Token: "ORISSAMINE\t19931
    },
    {
      Symbol	Token: "ORTEL\t13321
    },
    {
      Symbol	Token: "ORTINLAB\t2979
    },
    {
      Symbol	Token: "OSEINTRUST\t10435
    },
    {
      Symbol	Token: "OSIAHYPER\t12635
    },
    {
      Symbol	Token: "OSWALAGRO\t2514
    },
    {
      Symbol	Token: "OSWALSEEDS\t14305
    },
    {
      Symbol	Token: "PAGEIND\t14413
    },
    {
      Symbol	Token: "PAISALO\t25468
    },
    {
      Symbol	Token: "PALASHSECU\t21383
    },
    {
      Symbol	Token: "PALREDTEC\t17062
    },
    {
      Symbol	Token: "PANACEABIO\t4055
    },
    {
      Symbol	Token: "PANACHE\t16355
    },
    {
      Symbol	Token: "PANAMAPET\t25392
    },
    {
      Symbol	Token: "PANSARI\t6141
    },
    {
      Symbol	Token: "PAR\t5631
    },
    {
      Symbol	Token: "PARACABLES\t13951
    },
    {
      Symbol	Token: "PARADEEP\t9741
    },
    {
      Symbol	Token: "PARAGMILK\t17130
    },
    {
      Symbol	Token: "PARAS\t5911
    },
    {
      Symbol	Token: "PARASPETRO\t8975
    },
    {
      Symbol	Token: "PARIN\t5460
    },
    {
      Symbol	Token: "PARSVNATH\t13791
    },
    {
      Symbol	Token: "PARTYCRUS\t2599
    },
    {
      Symbol	Token: "PASHUPATI\t21657
    },
    {
      Symbol	Token: "PASUPTAC\t6045
    },
    {
      Symbol	Token: "PATANJALI\t17030
    },
    {
      Symbol	Token: "PATELENG\t11699
    },
    {
      Symbol	Token: "PATINTLOG\t15219
    },
    {
      Symbol	Token: "PATTECH\t15137
    },
    {
      Symbol	Token: "PAVNAIND\t2633
    },
    {
      Symbol	Token: "PAYTM\t6705
    },
    {
      Symbol	Token: "PCBL\t2649
    },
    {
      Symbol	Token: "PCHFL\t5120
    },
    {
      Symbol	Token: "PCHFL\t5123
    },
    {
      Symbol	Token: "PCHFL\t5126
    },
    {
      Symbol	Token: "PCHFL\t5129
    },
    {
      Symbol	Token: "PCHFL\t5132
    },
    {
      Symbol	Token: "PCHFL\t5134
    },
    {
      Symbol	Token: "PCHFL\t5145
    },
    {
      Symbol	Token: "PCHFL\t5151
    },
    {
      Symbol	Token: "PCHFL\t5155
    },
    {
      Symbol	Token: "PCHFL\t5160
    },
    {
      Symbol	Token: "PCJEWELLER\t29124
    },
    {
      Symbol	Token: "PDMJEPAPER\t15377
    },
    {
      Symbol	Token: "PDSL\t5264
    },
    {
      Symbol	Token: "PEARLPOLY\t2610
    },
    {
      Symbol	Token: "PEL\t2412
    },
    {
      Symbol	Token: "PENIND\t20621
    },
    {
      Symbol	Token: "PENINLAND\t2256
    },
    {
      Symbol	Token: "PENTAGOLD\t13513
    },
    {
      Symbol	Token: "PERFECT\t11250
    },
    {
      Symbol	Token: "PERSISTENT\t18365
    },
    {
      Symbol	Token: "PETRONET\t11351
    },
    {
      Symbol	Token: "PFC\t14299
    },
    {
      Symbol	Token: "PFC\t19972
    },
    {
      Symbol	Token: "PFC\t19974
    },
    {
      Symbol	Token: "PFC\t19976
    },
    {
      Symbol	Token: "PFC\t20022
    },
    {
      Symbol	Token: "PFC\t20024
    },
    {
      Symbol	Token: "PFC\t20026
    },
    {
      Symbol	Token: "PFC\t20028
    },
    {
      Symbol	Token: "PFIZER\t2643
    },
    {
      Symbol	Token: "PFOCUS\t13496
    },
    {
      Symbol	Token: "PFS\t22602
    },
    {
      Symbol	Token: "PGEL\t25358
    },
    {
      Symbol	Token: "PGHH\t2535
    },
    {
      Symbol	Token: "PGHL\t940
    },
    {
      Symbol	Token: "PGIL\t14260
    },
    {
      Symbol	Token: "PGINVIT\t3494
    },
    {
      Symbol	Token: "PHANTOMFX\t11612
    },
    {
      Symbol	Token: "PHARMABEES\t4973
    },
    {
      Symbol	Token: "PHOENIXLTD\t14552
    },
    {
      Symbol	Token: "PIDILITIND\t2664
    },
    {
      Symbol	Token: "PIGL\t2738
    },
    {
      Symbol	Token: "PIIND\t24184
    },
    {
      Symbol	Token: "PILANIINVS\t11445
    },
    {
      Symbol	Token: "PILITA\t30835
    },
    {
      Symbol	Token: "PIONEEREMB\t13463
    },
    {
      Symbol	Token: "PITTIENG\t14134
    },
    {
      Symbol	Token: "PIXTRANS\t9087
    },
    {
      Symbol	Token: "PKTEA\t10318
    },
    {
      Symbol	Token: "PLASTIBLEN\t13920
    },
    {
      Symbol	Token: "PNB\t10666
    },
    {
      Symbol	Token: "PNBGILTS\t8736
    },
    {
      Symbol	Token: "PNBHOUSING\t18908
    },
    {
      Symbol	Token: "PNC\t9342
    },
    {
      Symbol	Token: "PNCINFRA\t9385
    },
    {
      Symbol	Token: "POCL\t14385
    },
    {
      Symbol	Token: "PODDARHOUS\t20450
    },
    {
      Symbol	Token: "PODDARMENT\t19036
    },
    {
      Symbol	Token: "POKARNA\t17651
    },
    {
      Symbol	Token: "POLICYBZR\t6656
    },
    {
      Symbol	Token: "POLYCAB\t9590
    },
    {
      Symbol	Token: "POLYMED\t25718
    },
    {
      Symbol	Token: "POLYPLEX\t2687
    },
    {
      Symbol	Token: "PONNIERODE\t10661
    },
    {
      Symbol	Token: "POONAWALLA\t11403
    },
    {
      Symbol	Token: "POONAWALLA\t9950
    },
    {
      Symbol	Token: "POONAWALLA\t9966
    },
    {
      Symbol	Token: "POONAWALLA\t9969
    },
    {
      Symbol	Token: "POONAWALLA\t9975
    },
    {
      Symbol	Token: "POONAWALLA\t9982
    },
    {
      Symbol	Token: "POWERGRID\t14977
    },
    {
      Symbol	Token: "POWERINDIA\t18457
    },
    {
      Symbol	Token: "POWERMECH\t10473
    },
    {
      Symbol	Token: "PPAP\t15209
    },
    {
      Symbol	Token: "PPL\t10297
    },
    {
      Symbol	Token: "PPLPHARMA\t11571
    },
    {
      Symbol	Token: "PRAENG\t13941
    },
    {
      Symbol	Token: "PRAJIND\t2705
    },
    {
      Symbol	Token: "PRAKASH\t2708
    },
    {
      Symbol	Token: "PRAKASHSTL\t19599
    },
    {
      Symbol	Token: "PRAXIS\t1204
    },
    {
      Symbol	Token: "PRECAM\t12603
    },
    {
      Symbol	Token: "PRECISION\t7950
    },
    {
      Symbol	Token: "PRECOT\t2711
    },
    {
      Symbol	Token: "PRECWIRE\t2717
    },
    {
      Symbol	Token: "PREMEXPLN\t17397
    },
    {
      Symbol	Token: "PREMIERPOL\t3908
    },
    {
      Symbol	Token: "PRESSMN\t11671
    },
    {
      Symbol	Token: "PRESTIGE\t20302
    },
    {
      Symbol	Token: "PRICOLLTD\t19631
    },
    {
      Symbol	Token: "PRIMESECU\t11864
    },
    {
      Symbol	Token: "PRINCEPIPE\t16045
    },
    {
      Symbol	Token: "PRITI\t8304
    },
    {
      Symbol	Token: "PRITIKA\t12971
    },
    {
      Symbol	Token: "PRITIKAUTO\t5292
    },
    {
      Symbol	Token: "PRIVISCL\t8825
    },
    {
      Symbol	Token: "PROLIFE\t19352
    },
    {
      Symbol	Token: "PROPEQUITY\t8735
    },
    {
      Symbol	Token: "PROZONINTU\t28859
    },
    {
      Symbol	Token: "PRSMJOHNSN\t2739
    },
    {
      Symbol	Token: "PRUDENT\t9553
    },
    {
      Symbol	Token: "PSB\t21001
    },
    {
      Symbol	Token: "PSPPROJECT\t20877
    },
    {
      Symbol	Token: "PSUBANKICI\t14584
    },
    {
      Symbol	Token: "PSUBNKBEES\t15032
    },
    {
      Symbol	Token: "PTC\t11355
    },
    {
      Symbol	Token: "PTL\t14101
    },
    {
      Symbol	Token: "PULZ\t507
    },
    {
      Symbol	Token: "PUNJABCHEM\t4344
    },
    {
      Symbol	Token: "PURVA\t14922
    },
    {
      Symbol	Token: "PVP\t4010
    },
    {
      Symbol	Token: "PVR\t13147
    },
    {
      Symbol	Token: "QFIL\t14613
    },
    {
      Symbol	Token: "QGOLDHALF\t15330
    },
    {
      Symbol	Token: "QMSMEDI\t11467
    },
    {
      Symbol	Token: "QNIFTY\t16819
    },
    {
      Symbol	Token: "QUADPRO\t5870
    },
    {
      Symbol	Token: "QUESS\t17704
    },
    {
      Symbol	Token: "QUICKHEAL\t13116
    },
    {
      Symbol	Token: "QUICKTOUCH\t15294
    },
    {
      Symbol	Token: "RACE\t15391
    },
    {
      Symbol	Token: "RADAAN\t11268
    },
    {
      Symbol	Token: "RADHIKAJWE\t10343
    },
    {
      Symbol	Token: "RADIANTCMS\t13580
    },
    {
      Symbol	Token: "RADICO\t10990
    },
    {
      Symbol	Token: "RADIOCITY\t19877
    },
    {
      Symbol	Token: "RAILTEL\t2431
    },
    {
      Symbol	Token: "RAIN\t15337
    },
    {
      Symbol	Token: "RAINBOW\t9408
    },
    {
      Symbol	Token: "RAJESHEXPO\t7401
    },
    {
      Symbol	Token: "RAJMET\t2168
    },
    {
      Symbol	Token: "RAJRATAN\t18962
    },
    {
      Symbol	Token: "RAJRILTD\t8428
    },
    {
      Symbol	Token: "RAJSREESUG\t2809
    },
    {
      Symbol	Token: "RAJTV\t14403
    },
    {
      Symbol	Token: "RALLIS\t2816
    },
    {
      Symbol	Token: "RAMANEWS\t13565
    },
    {
      Symbol	Token: "RAMAPHO\t10568
    },
    {
      Symbol	Token: "RAMASTEEL\t10300
    },
    {
      Symbol	Token: "RAMCOCEM\t2043
    },
    {
      Symbol	Token: "RAMCOIND\t4587
    },
    {
      Symbol	Token: "RAMCOSYS\t7851
    },
    {
      Symbol	Token: "RAMKY\t20134
    },
    {
      Symbol	Token: "RAMRAT\t10485
    },
    {
      Symbol	Token: "RANASUG\t2837
    },
    {
      Symbol	Token: "RANEENGINE\t16751
    },
    {
      Symbol	Token: "RANEHOLDIN\t2844
    },
    {
      Symbol	Token: "RATEGAIN\t7177
    },
    {
      Symbol	Token: "RATNAMANI\t13451
    },
    {
      Symbol	Token: "RAYMOND\t2859
    },
    {
      Symbol	Token: "RBA\t1494
    },
    {
      Symbol	Token: "RBL\t16745
    },
    {
      Symbol	Token: "RBLBANK\t18391
    },
    {
      Symbol	Token: "RBMINFRA\t13570
    },
    {
      Symbol	Token: "RCF\t2866
    },
    {
      Symbol	Token: "RECLTD\t15355
    },
    {
      Symbol	Token: "RECLTD\t29111
    },
    {
      Symbol	Token: "RECLTD\t29614
    },
    {
      Symbol	Token: "RECLTD\t30982
    },
    {
      Symbol	Token: "RECLTD\t30984
    },
    {
      Symbol	Token: "RECLTD\t30986
    },
    {
      Symbol	Token: "RECLTD\t30988
    },
    {
      Symbol	Token: "RECLTD\t30990
    },
    {
      Symbol	Token: "RECLTD\t30992
    },
    {
      Symbol	Token: "RECLTD\t2931
    },
    {
      Symbol	Token: "RECLTD\t2933
    },
    {
      Symbol	Token: "RECLTD\t2935
    },
    {
      Symbol	Token: "RECLTD\t2941
    },
    {
      Symbol	Token: "RECLTD\t2947
    },
    {
      Symbol	Token: "RECLTD\t2953
    },
    {
      Symbol	Token: "RECLTD\t19926
    },
    {
      Symbol	Token: "RECLTD\t19924
    },
    {
      Symbol	Token: "REDINGTON\t14255
    },
    {
      Symbol	Token: "REFEX\t17764
    },
    {
      Symbol	Token: "REGENCERAM\t9051
    },
    {
      Symbol	Token: "RELAXO\t24225
    },
    {
      Symbol	Token: "RELCAPITAL\t4692
    },
    {
      Symbol	Token: "RELCHEMQ\t9652
    },
    {
      Symbol	Token: "RELIABLE\t51
    },
    {
      Symbol	Token: "RELIANCE\t2885
    },
    {
      Symbol	Token: "RELIGARE\t15068
    },
    {
      Symbol	Token: "RELINFRA\t553
    },
    {
      Symbol	Token: "REMSONSIND\t3965
    },
    {
      Symbol	Token: "RENUKA\t12026
    },
    {
      Symbol	Token: "REPCOHOME\t29598
    },
    {
      Symbol	Token: "REPL\t1480
    },
    {
      Symbol	Token: "REPRO\t13126
    },
    {
      Symbol	Token: "RESPONIND\t20323
    },
    {
      Symbol	Token: "REVATHI\t11961
    },
    {
      Symbol	Token: "REXPIPES\t5309
    },
    {
      Symbol	Token: "RGL\t15129
    },
    {
      Symbol	Token: "RHFL\t21737
    },
    {
      Symbol	Token: "RHIM\t31163
    },
    {
      Symbol	Token: "RHL\t15162
    },
    {
      Symbol	Token: "RICHA\t8208
    },
    {
      Symbol	Token: "RICOAUTO\t2909
    },
    {
      Symbol	Token: "RIIL\t2912
    },
    {
      Symbol	Token: "RILINFRA\t9854
    },
    {
      Symbol	Token: "RITCO\t8944
    },
    {
      Symbol	Token: "RITES\t3761
    },
    {
      Symbol	Token: "RITEZONE\t11910
    },
    {
      Symbol	Token: "RKDL\t20954
    },
    {
      Symbol	Token: "RKEC\t1547
    },
    {
      Symbol	Token: "RKFORGE\t11411
    },
    {
      Symbol	Token: "RMCL\t4820
    },
    {
      Symbol	Token: "RMDRIP\t21816
    },
    {
      Symbol	Token: "RML\t11975
    },
    {
      Symbol	Token: "RNAVAL\t1986
    },
    {
      Symbol	Token: "ROHLTD\t13182
    },
    {
      Symbol	Token: "ROLEXRINGS\t5279
    },
    {
      Symbol	Token: "ROLLT\t19104
    },
    {
      Symbol	Token: "ROML\t359
    },
    {
      Symbol	Token: "ROSSARI\t19410
    },
    {
      Symbol	Token: "ROSSELLIND\t28913
    },
    {
      Symbol	Token: "ROTO\t9049
    },
    {
      Symbol	Token: "ROUTE\t128
    },
    {
      Symbol	Token: "RPGLIFE\t16725
    },
    {
      Symbol	Token: "RPOWER\t15259
    },
    {
      Symbol	Token: "RPPINFRA\t20760
    },
    {
      Symbol	Token: "RPPL\t6913
    },
    {
      Symbol	Token: "RPSGVENT\t8119
    },
    {
      Symbol	Token: "RSSOFTWARE\t8426
    },
    {
      Symbol	Token: "RSWM\t2794
    },
    {
      Symbol	Token: "RSYSTEMS\t13414
    },
    {
      Symbol	Token: "RTNINDIA\t27297
    },
    {
      Symbol	Token: "RTNPOWER\t17520
    },
    {
      Symbol	Token: "RUBYMILLS\t2939
    },
    {
      Symbol	Token: "RUCHINFRA\t8423
    },
    {
      Symbol	Token: "RUCHIRA\t13821
    },
    {
      Symbol	Token: "RUPA\t25724
    },
    {
      Symbol	Token: "RUSHIL\t24595
    },
    {
      Symbol	Token: "RUSTOMJEE\t12219
    },
    {
      Symbol	Token: "RVHL\t1565
    },
    {
      Symbol	Token: "RVNL\t9552
    },
    {
      Symbol	Token: "S&SPOWER\t8733
    },
    {
      Symbol	Token: "SABAR\t10982
    },
    {
      Symbol	Token: "SABTN\t15060
    },
    {
      Symbol	Token: "SADBHAV\t13236
    },
    {
      Symbol	Token: "SADBHIN\t10618
    },
    {
      Symbol	Token: "SADHNANIQ\t15343
    },
    {
      Symbol	Token: "SAFARI\t13035
    },
    {
      Symbol	Token: "SAGARDEEP\t8175
    },
    {
      Symbol	Token: "SAGCEM\t14068
    },
    {
      Symbol	Token: "SAH\t13689
    },
    {
      Symbol	Token: "SAHYADRI\t14900
    },
    {
      Symbol	Token: "SAIL\t2963
    },
    {
      Symbol	Token: "SAKAR\t9539
    },
    {
      Symbol	Token: "SAKHTISUG\t2969
    },
    {
      Symbol	Token: "SAKSOFT\t11794
    },
    {
      Symbol	Token: "SAKUMA\t13251
    },
    {
      Symbol	Token: "SALASAR\t21362
    },
    {
      Symbol	Token: "SALONA\t17351
    },
    {
      Symbol	Token: "SALSTEEL\t11634
    },
    {
      Symbol	Token: "SALZERELEC\t11399
    },
    {
      Symbol	Token: "SAMBHAAV\t4127
    },
    {
      Symbol	Token: "SANCO\t14630
    },
    {
      Symbol	Token: "SANDESH\t2988
    },
    {
      Symbol	Token: "SANDHAR\t2397
    },
    {
      Symbol	Token: "SANGAMIND\t4184
    },
    {
      Symbol	Token: "SANGHIIND\t2997
    },
    {
      Symbol	Token: "SANGHVIMOV\t14058
    },
    {
      Symbol	Token: "SANGINITA\t11032
    },
    {
      Symbol	Token: "SANOFI\t1442
    },
    {
      Symbol	Token: "SANSERA\t5751
    },
    {
      Symbol	Token: "SAPPHIRE\t6718
    },
    {
      Symbol	Token: "SARDAEN\t17758
    },
    {
      Symbol	Token: "SAREGAMA\t4892
    },
    {
      Symbol	Token: "SARLAPOLY\t14043
    },
    {
      Symbol	Token: "SARVESHWAR\t12913
    },
    {
      Symbol	Token: "SASKEN\t11983
    },
    {
      Symbol	Token: "SASTASUNDR\t20063
    },
    {
      Symbol	Token: "SATIA\t11045
    },
    {
      Symbol	Token: "SATIN\t10453
    },
    {
      Symbol	Token: "SATINDLTD\t12015
    },
    {
      Symbol	Token: "SBC\t6792
    },
    {
      Symbol	Token: "SBCL\t4656
    },
    {
      Symbol	Token: "SBGLP\t14139
    },
    {
      Symbol	Token: "SBICARD\t17971
    },
    {
      Symbol	Token: "SBIETFCON\t5168
    },
    {
      Symbol	Token: "SBIETFIT\t740
    },
    {
      Symbol	Token: "SBIETFPB\t722
    },
    {
      Symbol	Token: "SBIETFQLTY\t7218
    },
    {
      Symbol	Token: "SBILIFE\t21808
    },
    {
      Symbol	Token: "SBIN\t3045
    },
    {
      Symbol	Token: "SCAPDVR\t17
    },
    {
      Symbol	Token: "SCHAEFFLER\t1011
    },
    {
      Symbol	Token: "SCHAND\t20698
    },
    {
      Symbol	Token: "SCHNEIDER\t31234
    },
    {
      Symbol	Token: "SCI\t3048
    },
    {
      Symbol	Token: "SCPL\t12072
    },
    {
      Symbol	Token: "SDBL\t1338
    },
    {
      Symbol	Token: "SDL24BEES\t1143
    },
    {
      Symbol	Token: "SDL26BEES\t3022
    },
    {
      Symbol	Token: "SEAMECLTD\t2616
    },
    {
      Symbol	Token: "SECL\t13025
    },
    {
      Symbol	Token: "SECURCRED\t11520
    },
    {
      Symbol	Token: "SECURKLOUD\t11058
    },
    {
      Symbol	Token: "SEJALLTD\t7094
    },
    {
      Symbol	Token: "SELAN\t13598
    },
    {
      Symbol	Token: "SELMC\t6274
    },
    {
      Symbol	Token: "SEPC\t15308
    },
    {
      Symbol	Token: "SEPOWER\t27303
    },
    {
      Symbol	Token: "SEQUENT\t14296
    },
    {
      Symbol	Token: "SERVOTECH\t5511
    },
    {
      Symbol	Token: "SESHAPAPER\t3066
    },
    {
      Symbol	Token: "SETCO\t17518
    },
    {
      Symbol	Token: "SETF10GILT\t17395
    },
    {
      Symbol	Token: "SETFGOLD\t17272
    },
    {
      Symbol	Token: "SETFNIF50\t10176
    },
    {
      Symbol	Token: "SETFNIFBK\t7361
    },
    {
      Symbol	Token: "SETFNN50\t7353
    },
    {
      Symbol	Token: "SEYAIND\t10828
    },
    {
      Symbol	Token: "SFL\t19184
    },
    {
      Symbol	Token: "SGBAPR28I\t18862
    },
    {
      Symbol	Token: "SGBAUG24\t18429
    },
    {
      Symbol	Token: "SGBAUG27\t12904
    },
    {
      Symbol	Token: "SGBAUG28V\t22385
    },
    {
      Symbol	Token: "SGBAUG29V\t5455
    },
    {
      Symbol	Token: "SGBAUG30\t11192
    },
    {
      Symbol	Token: "SGBD29VIII\t7098
    },
    {
      Symbol	Token: "SGBDC27VII\t15432
    },
    {
      Symbol	Token: "SGBDE30III\t13642
    },
    {
      Symbol	Token: "SGBDEC25\t623
    },
    {
      Symbol	Token: "SGBDEC2512\t795
    },
    {
      Symbol	Token: "SGBDEC2513\t862
    },
    {
      Symbol	Token: "SGBDEC25XI\t729
    },
    {
      Symbol	Token: "SGBDEC26\t7654
    },
    {
      Symbol	Token: "SGBFEB24\t18385
    },
    {
      Symbol	Token: "SGBFEB27\t8766
    },
    {
      Symbol	Token: "SGBFEB28IX\t17664
    },
    {
      Symbol	Token: "SGBFEB29XI\t2200
    },
    {
      Symbol	Token: "SGBJ28VIII\t17110
    },
    {
      Symbol	Token: "SGBJAN26\t945
    },
    {
      Symbol	Token: "SGBJAN27\t8308
    },
    {
      Symbol	Token: "SGBJAN29IX\t1920
    },
    {
      Symbol	Token: "SGBJAN29X\t2003
    },
    {
      Symbol	Token: "SGBJAN30IX\t7879
    },
    {
      Symbol	Token: "SGBJU29III\t3800
    },
    {
      Symbol	Token: "SGBJUL25\t21477
    },
    {
      Symbol	Token: "SGBJUL27\t11154
    },
    {
      Symbol	Token: "SGBJUL28IV\t22242
    },
    {
      Symbol	Token: "SGBJUL29IV\t5113
    },
    {
      Symbol	Token: "SGBJUN27\t10261
    },
    {
      Symbol	Token: "SGBJUN28\t19078
    },
    {
      Symbol	Token: "SGBJUN29II\t3743
    },
    {
      Symbol	Token: "SGBJUN30\t10232
    },
    {
      Symbol	Token: "SGBMAR24\t18386
    },
    {
      Symbol	Token: "SGBMAR25\t20467
    },
    {
      Symbol	Token: "SGBMAR28X\t18451
    },
    {
      Symbol	Token: "SGBMAR30X\t8401
    },
    {
      Symbol	Token: "SGBMAR31IV\t14598
    },
    {
      Symbol	Token: "SGBMAY25\t20980
    },
    {
      Symbol	Token: "SGBMAY26\t2891
    },
    {
      Symbol	Token: "SGBMAY28\t18972
    },
    {
      Symbol	Token: "SGBMAY29I\t3742
    },
    {
      Symbol	Token: "SGBMR29XII\t2810
    },
    {
      Symbol	Token: "SGBN28VIII\t1342
    },
    {
      Symbol	Token: "SGBNOV23\t17248
    },
    {
      Symbol	Token: "SGBNOV24\t19203
    },
    {
      Symbol	Token: "SGBNOV25\t458
    },
    {
      Symbol	Token: "SGBNOV258\t497
    },
    {
      Symbol	Token: "SGBNOV25IX\t540
    },
    {
      Symbol	Token: "SGBNOV25VI\t398
    },
    {
      Symbol	Token: "SGBNOV26\t6355
    },
    {
      Symbol	Token: "SGBNV29VII\t6518
    },
    {
      Symbol	Token: "SGBOC28VII\t834
    },
    {
      Symbol	Token: "SGBOCT25\t250
    },
    {
      Symbol	Token: "SGBOCT25IV\t304
    },
    {
      Symbol	Token: "SGBOCT25V\t355
    },
    {
      Symbol	Token: "SGBOCT26\t5960
    },
    {
      Symbol	Token: "SGBOCT27\t13981
    },
    {
      Symbol	Token: "SGBOCT27VI\t14252
    },
    {
      Symbol	Token: "SGBSEP24\t18795
    },
    {
      Symbol	Token: "SGBSEP27\t13209
    },
    {
      Symbol	Token: "SGBSEP28VI\t149
    },
    {
      Symbol	Token: "SGBSEP29VI\t5575
    },
    {
      Symbol	Token: "SGIL\t5114
    },
    {
      Symbol	Token: "SGL\t13367
    },
    {
      Symbol	Token: "SHAHALLOYS\t11856
    },
    {
      Symbol	Token: "SHAILY\t8727
    },
    {
      Symbol	Token: "SHAIVAL\t10683
    },
    {
      Symbol	Token: "SHAKTIPUMP\t25574
    },
    {
      Symbol	Token: "SHALBY\t714
    },
    {
      Symbol	Token: "SHALPAINTS\t15342
    },
    {
      Symbol	Token: "SHANKARA\t20321
    },
    {
      Symbol	Token: "SHANTI\t5650
    },
    {
      Symbol	Token: "SHANTIGEAR\t3078
    },
    {
      Symbol	Token: "SHARDACROP\t4992
    },
    {
      Symbol	Token: "SHARDAMOTR\t10530
    },
    {
      Symbol	Token: "SHAREINDIA\t104
    },
    {
      Symbol	Token: "SHAREINDIA\t14869
    },
    {
      Symbol	Token: "SHARIABEES\t17044
    },
    {
      Symbol	Token: "SHEMAROO\t5068
    },
    {
      Symbol	Token: "SHERA\t14172
    },
    {
      Symbol	Token: "SHIGAN\t8394
    },
    {
      Symbol	Token: "SHILPAMED\t17752
    },
    {
      Symbol	Token: "SHIVALIK\t7016
    },
    {
      Symbol	Token: "SHIVAMAUTO\t13756
    },
    {
      Symbol	Token: "SHIVAMILLS\t1503
    },
    {
      Symbol	Token: "SHIVATEX\t804
    },
    {
      Symbol	Token: "SHIVAUM\t13446
    },
    {
      Symbol	Token: "SHK\t11212
    },
    {
      Symbol	Token: "SHOPERSTOP\t11813
    },
    {
      Symbol	Token: "SHRADHA\t708
    },
    {
      Symbol	Token: "SHREDIGCEM\t3099
    },
    {
      Symbol	Token: "SHREECEM\t3103
    },
    {
      Symbol	Token: "SHREEPUSHK\t10588
    },
    {
      Symbol	Token: "SHREERAMA\t7627
    },
    {
      Symbol	Token: "SHREMINVIT\t5718
    },
    {
      Symbol	Token: "SHRENIK\t11149
    },
    {
      Symbol	Token: "SHREYANIND\t3126
    },
    {
      Symbol	Token: "SHREYAS\t3129
    },
    {
      Symbol	Token: "SHRIPISTON\t17190
    },
    {
      Symbol	Token: "SHRIRAMFIN\t4306
    },
    {
      Symbol	Token: "SHRIRAMFIN\t298
    },
    {
      Symbol	Token: "SHRIRAMFIN\t498
    },
    {
      Symbol	Token: "SHRIRAMFIN\t696
    },
    {
      Symbol	Token: "SHRIRAMFIN\t1001
    },
    {
      Symbol	Token: "SHRIRAMFIN\t1897
    },
    {
      Symbol	Token: "SHRIRAMFIN\t6140
    },
    {
      Symbol	Token: "SHRIRAMFIN\t6149
    },
    {
      Symbol	Token: "SHRIRAMFIN\t6166
    },
    {
      Symbol	Token: "SHRIRAMFIN\t6168
    },
    {
      Symbol	Token: "SHRIRAMFIN\t6172
    },
    {
      Symbol	Token: "SHRIRAMFIN\t8621
    },
    {
      Symbol	Token: "SHRIRAMFIN\t8625
    },
    {
      Symbol	Token: "SHRIRAMFIN\t8633
    },
    {
      Symbol	Token: "SHRIRAMFIN\t8642
    },
    {
      Symbol	Token: "SHRIRAMFIN\t8663
    },
    {
      Symbol	Token: "SHRIRAMFIN\t12916
    },
    {
      Symbol	Token: "SHRIRAMFIN\t12919
    },
    {
      Symbol	Token: "SHRIRAMFIN\t12931
    },
    {
      Symbol	Token: "SHRIRAMFIN\t12933
    },
    {
      Symbol	Token: "SHRIRAMFIN\t12937
    },
    {
      Symbol	Token: "SHRIRAMFIN\t12941
    },
    {
      Symbol	Token: "SHRIRAMFIN\t17157
    },
    {
      Symbol	Token: "SHRIRAMFIN\t17159
    },
    {
      Symbol	Token: "SHRIRAMFIN\t17163
    },
    {
      Symbol	Token: "SHRIRAMFIN\t17172
    },
    {
      Symbol	Token: "SHRIRAMFIN\t17179
    },
    {
      Symbol	Token: "SHRIRAMPPS\t7200
    },
    {
      Symbol	Token: "SHUBHLAXMI\t6451
    },
    {
      Symbol	Token: "SHYAMCENT\t10188
    },
    {
      Symbol	Token: "SHYAMMETL\t4693
    },
    {
      Symbol	Token: "SIDDHIKA\t3148
    },
    {
      Symbol	Token: "SIEMENS\t3150
    },
    {
      Symbol	Token: "SIGACHI\t6663
    },
    {
      Symbol	Token: "SIGIND\t4522
    },
    {
      Symbol	Token: "SIGMA\t662
    },
    {
      Symbol	Token: "SIKKO\t6218
    },
    {
      Symbol	Token: "SIL\t11298
    },
    {
      Symbol	Token: "SILGO\t2492
    },
    {
      Symbol	Token: "SILINV\t4105
    },
    {
      Symbol	Token: "SILLYMONKS\t19097
    },
    {
      Symbol	Token: "SILVER\t8003
    },
    {
      Symbol	Token: "SILVERBEES\t8080
    },
    {
      Symbol	Token: "SILVERETF\t15085
    },
    {
      Symbol	Token: "SILVERTUC\t9422
    },
    {
      Symbol	Token: "SIMBHALS\t14612
    },
    {
      Symbol	Token: "SIMPLEXINF\t3162
    },
    {
      Symbol	Token: "SINTERCOM\t381
    },
    {
      Symbol	Token: "SIRCA\t11050
    },
    {
      Symbol	Token: "SIS\t21501
    },
    {
      Symbol	Token: "SITINET\t13998
    },
    {
      Symbol	Token: "SIYSIL\t14096
    },
    {
      Symbol	Token: "SJS\t6643
    },
    {
      Symbol	Token: "SJVN\t18883
    },
    {
      Symbol	Token: "SKFINDIA\t3186
    },
    {
      Symbol	Token: "SKIPPER\t9428
    },
    {
      Symbol	Token: "SKMEGGPROD\t4732
    },
    {
      Symbol	Token: "SKP\t10325
    },
    {
      Symbol	Token: "SKSTEXTILE\t1124
    },
    {
      Symbol	Token: "SKYGOLD\t13631
    },
    {
      Symbol	Token: "SMARTLINK\t9889
    },
    {
      Symbol	Token: "SMCGLOBAL\t2320
    },
    {
      Symbol	Token: "SMLISUZU\t3387
    },
    {
      Symbol	Token: "SMLT\t6843
    },
    {
      Symbol	Token: "SMSLIFE\t21551
    },
    {
      Symbol	Token: "SMSPHARMA\t14329
    },
    {
      Symbol	Token: "SMVD\t847
    },
    {
      Symbol	Token: "SNOWMAN\t4843
    },
    {
      Symbol	Token: "SOBHA\t13826
    },
    {
      Symbol	Token: "SOFTTECH\t8266
    },
    {
      Symbol	Token: "SOLARA\t3672
    },
    {
      Symbol	Token: "SOLARINDS\t13332
    },
    {
      Symbol	Token: "SOLEX\t1231
    },
    {
      Symbol	Token: "SOMANYCERA\t3880
    },
    {
      Symbol	Token: "SOMATEX\t9104
    },
    {
      Symbol	Token: "SOMICONVEY\t17794
    },
    {
      Symbol	Token: "SONACOMS\t4684
    },
    {
      Symbol	Token: "SONAHISONA\t13616
    },
    {
      Symbol	Token: "SONAMCLOCK\t8806
    },
    {
      Symbol	Token: "SONATSOFTW\t6596
    },
    {
      Symbol	Token: "SONUINFRA\t9458
    },
    {
      Symbol	Token: "SOTAC\t14993
    },
    {
      Symbol	Token: "SOTL\t3021
    },
    {
      Symbol	Token: "SOUTHBANK\t5948
    },
    {
      Symbol	Token: "SOUTHWEST\t9678
    },
    {
      Symbol	Token: "SPAL\t18252
    },
    {
      Symbol	Token: "SPANDANA\t11435
    },
    {
      Symbol	Token: "SPARC\t14788
    },
    {
      Symbol	Token: "SPCENET\t19372
    },
    {
      Symbol	Token: "SPECIALITY\t27107
    },
    {
      Symbol	Token: "SPECTRUM\t5060
    },
    {
      Symbol	Token: "SPENCERS\t8163
    },
    {
      Symbol	Token: "SPIC\t3252
    },
    {
      Symbol	Token: "SPLIL\t11935
    },
    {
      Symbol	Token: "SPLPETRO\t9617
    },
    {
      Symbol	Token: "SPMLINFRA\t7166
    },
    {
      Symbol	Token: "SPORTKING\t10733
    },
    {
      Symbol	Token: "SPRL\t8521
    },
    {
      Symbol	Token: "SREEL\t31837
    },
    {
      Symbol	Token: "SREIBNPNCD\t21527
    },
    {
      Symbol	Token: "SREIBNPNCD\t21529
    },
    {
      Symbol	Token: "SREIBNPNCD\t21531
    },
    {
      Symbol	Token: "SREIBNPNCD\t21533
    },
    {
      Symbol	Token: "SREIBNPNCD\t21535
    },
    {
      Symbol	Token: "SREIBNPNCD\t21537
    },
    {
      Symbol	Token: "SREIBNPNCD\t17892
    },
    {
      Symbol	Token: "SREIBNPNCD\t17894
    },
    {
      Symbol	Token: "SREIBNPNCD\t17896
    },
    {
      Symbol	Token: "SRF\t3273
    },
    {
      Symbol	Token: "SRHHYPOLTD\t14582
    },
    {
      Symbol	Token: "SRIRAM\t20994
    },
    {
      Symbol	Token: "SRIVASAVI\t14411
    },
    {
      Symbol	Token: "SRPL\t140
    },
    {
      Symbol	Token: "SSINFRA\t2689
    },
    {
      Symbol	Token: "SSWL\t11829
    },
    {
      Symbol	Token: "STAR\t7374
    },
    {
      Symbol	Token: "STARCEMENT\t21091
    },
    {
      Symbol	Token: "STARHEALTH\t7083
    },
    {
      Symbol	Token: "STARPAPER\t3291
    },
    {
      Symbol	Token: "STARTECK\t9305
    },
    {
      Symbol	Token: "STCINDIA\t10948
    },
    {
      Symbol	Token: "STEELCAS\t6803
    },
    {
      Symbol	Token: "STEELCITY\t10406
    },
    {
      Symbol	Token: "STEELXIND\t21339
    },
    {
      Symbol	Token: "STEL\t21484
    },
    {
      Symbol	Token: "STERTOOLS\t4299
    },
    {
      Symbol	Token: "STLTECH\t9309
    },
    {
      Symbol	Token: "STOVEKRAFT\t2107
    },
    {
      Symbol	Token: "STYLAMIND\t5186
    },
    {
      Symbol	Token: "STYRENIX\t19
    },
    {
      Symbol	Token: "SUBEXLTD\t967
    },
    {
      Symbol	Token: "SUBROS\t3324
    },
    {
      Symbol	Token: "SUDARSCHEM\t3327
    },
    {
      Symbol	Token: "SUKHJITS\t11804
    },
    {
      Symbol	Token: "SULA\t13218
    },
    {
      Symbol	Token: "SUMICHEM\t17105
    },
    {
      Symbol	Token: "SUMIT\t11141
    },
    {
      Symbol	Token: "SUMMITSEC\t21275
    },
    {
      Symbol	Token: "SUNCLAYLTD\t29008
    },
    {
      Symbol	Token: "SUNDARAM\t18931
    },
    {
      Symbol	Token: "SUNDARMFIN\t3339
    },
    {
      Symbol	Token: "SUNDARMHLD\t2183
    },
    {
      Symbol	Token: "SUNDRMBRAK\t4179
    },
    {
      Symbol	Token: "SUNDRMFAST\t3345
    },
    {
      Symbol	Token: "SUNFLAG\t3348
    },
    {
      Symbol	Token: "SUNPHARMA\t3351
    },
    {
      Symbol	Token: "SUNTECK\t17641
    },
    {
      Symbol	Token: "SUNTV\t13404
    },
    {
      Symbol	Token: "SUPERHOUSE\t20616
    },
    {
      Symbol	Token: "SUPERSPIN\t3357
    },
    {
      Symbol	Token: "SUPRAJIT\t11689
    },
    {
      Symbol	Token: "SUPREMEENG\t1401
    },
    {
      Symbol	Token: "SUPREMEIND\t3363
    },
    {
      Symbol	Token: "SUPREMEINF\t15002
    },
    {
      Symbol	Token: "SUPRIYA\t7390
    },
    {
      Symbol	Token: "SURANASOL\t21077
    },
    {
      Symbol	Token: "SURANAT&P\t10700
    },
    {
      Symbol	Token: "SURANI\t8513
    },
    {
      Symbol	Token: "SURYALAXMI\t11852
    },
    {
      Symbol	Token: "SURYAROSNI\t3375
    },
    {
      Symbol	Token: "SURYODAY\t2970
    },
    {
      Symbol	Token: "SUTLEJTEX\t13801
    },
    {
      Symbol	Token: "SUULD\t638
    },
    {
      Symbol	Token: "SUVEN\t11233
    },
    {
      Symbol	Token: "SUVENPHAR\t17945
    },
    {
      Symbol	Token: "SUVIDHAA\t3005
    },
    {
      Symbol	Token: "SUZLON\t12018
    },
    {
      Symbol	Token: "SVLL\t15121
    },
    {
      Symbol	Token: "SVPGLOB\t5023
    },
    {
      Symbol	Token: "SWANENERGY\t27095
    },
    {
      Symbol	Token: "SWARAJ\t8608
    },
    {
      Symbol	Token: "SWARAJENG\t3384
    },
    {
      Symbol	Token: "SWASTIK\t11492
    },
    {
      Symbol	Token: "SWELECTES\t11909
    },
    {
      Symbol	Token: "SWSOLAR\t12489
    },
    {
      Symbol	Token: "SYMPHONY\t24190
    },
    {
      Symbol	Token: "SYNCOMF\t11992
    },
    {
      Symbol	Token: "SYNGENE\t10243
    },
    {
      Symbol	Token: "SYRMA\t10793
    },
    {
      Symbol	Token: "SYSTANGO\t14506
    },
    {
      Symbol	Token: "TAINWALCHM\t3396
    },
    {
      Symbol	Token: "TAJGVK\t9354
    },
    {
      Symbol	Token: "TAKE\t14917
    },
    {
      Symbol	Token: "TALBROAUTO\t13648
    },
    {
      Symbol	Token: "TANLA\t13976
    },
    {
      Symbol	Token: "TANTIACONS\t1314
    },
    {
      Symbol	Token: "TAPIFRUIT\t10986
    },
    {
      Symbol	Token: "TARACHAND\t2117
    },
    {
      Symbol	Token: "TARC\t1581
    },
    {
      Symbol	Token: "TARMAT\t14771
    },
    {
      Symbol	Token: "TARSONS\t6943
    },
    {
      Symbol	Token: "TASTYBITE\t20092
    },
    {
      Symbol	Token: "TATACAPHSG\t16789
    },
    {
      Symbol	Token: "TATACAPHSG\t16791
    },
    {
      Symbol	Token: "TATACAPHSG\t16834
    },
    {
      Symbol	Token: "TATACAPHSG\t16836
    },
    {
      Symbol	Token: "TATACAPHSG\t16838
    },
    {
      Symbol	Token: "TATACAPHSG\t16870
    },
    {
      Symbol	Token: "TATACAPHSG\t16872
    },
    {
      Symbol	Token: "TATACAPHSG\t16874
    },
    {
      Symbol	Token: "TATACAPHSG\t16894
    },
    {
      Symbol	Token: "TATACHEM\t3405
    },
    {
      Symbol	Token: "TATACOFFEE\t724
    },
    {
      Symbol	Token: "TATACOMM\t3721
    },
    {
      Symbol	Token: "TATACONSUM\t3432
    },
    {
      Symbol	Token: "TATAELXSI\t3411
    },
    {
      Symbol	Token: "TATAINVEST\t1621
    },
    {
      Symbol	Token: "TATAMETALI\t3423
    },
    {
      Symbol	Token: "TATAMOTORS\t3456
    },
    {
      Symbol	Token: "TATAMTRDVR\t16965
    },
    {
      Symbol	Token: "TATAPOWER\t3426
    },
    {
      Symbol	Token: "TATASTEEL\t3499
    },
    {
      Symbol	Token: "TATASTLLP\t1639
    },
    {
      Symbol	Token: "TATVA\t5162
    },
    {
      Symbol	Token: "TBZ\t27037
    },
    {
      Symbol	Token: "TCFSL\t5031
    },
    {
      Symbol	Token: "TCFSL\t5042
    },
    {
      Symbol	Token: "TCFSL\t5056
    },
    {
      Symbol	Token: "TCFSL\t5058
    },
    {
      Symbol	Token: "TCFSL\t12951
    },
    {
      Symbol	Token: "TCFSL\t12953
    },
    {
      Symbol	Token: "TCFSL\t12956
    },
    {
      Symbol	Token: "TCFSL\t12958
    },
    {
      Symbol	Token: "TCFSL\t12961
    },
    {
      Symbol	Token: "TCFSL\t12963
    },
    {
      Symbol	Token: "TCI\t10580
    },
    {
      Symbol	Token: "TCIEXP\t19223
    },
    {
      Symbol	Token: "TCNSBRANDS\t4172
    },
    {
      Symbol	Token: "TCPLPACK\t184
    },
    {
      Symbol	Token: "TCS\t11536
    },
    {
      Symbol	Token: "TDPOWERSYS\t25178
    },
    {
      Symbol	Token: "TEAMLEASE\t12716
    },
    {
      Symbol	Token: "TECH\t6462
    },
    {
      Symbol	Token: "TECHIN\t25194
    },
    {
      Symbol	Token: "TECHM\t13538
    },
    {
      Symbol	Token: "TECHNOE\t6445
    },
    {
      Symbol	Token: "TECILCHEM\t14739
    },
    {
      Symbol	Token: "TEGA\t7105
    },
    {
      Symbol	Token: "TEJASNET\t21131
    },
    {
      Symbol	Token: "TEMBO\t3275
    },
    {
      Symbol	Token: "TERASOFT\t19292
    },
    {
      Symbol	Token: "TEXINFRA\t11549
    },
    {
      Symbol	Token: "TEXMOPIPES\t18214
    },
    {
      Symbol	Token: "TEXRAIL\t21828
    },
    {
      Symbol	Token: "TFCILTD\t3466
    },
    {
      Symbol	Token: "TFL\t14319
    },
    {
      Symbol	Token: "TGBHOTELS\t14607
    },
    {
      Symbol	Token: "THANGAMAYL\t18118
    },
    {
      Symbol	Token: "THEINVEST\t21427
    },
    {
      Symbol	Token: "THEJO\t28842
    },
    {
      Symbol	Token: "THEMISMED\t14485
    },
    {
      Symbol	Token: "THERMAX\t3475
    },
    {
      Symbol	Token: "THOMASCOOK\t3481
    },
    {
      Symbol	Token: "THOMASCOTT\t31021
    },
    {
      Symbol	Token: "THYROCARE\t17032
    },
    {
      Symbol	Token: "TI\t19196
    },
    {
      Symbol	Token: "TIDEWATER\t14019
    },
    {
      Symbol	Token: "TIIL\t14223
    },
    {
      Symbol	Token: "TIINDIA\t312
    },
    {
      Symbol	Token: "TIJARIA\t25482
    },
    {
      Symbol	Token: "TIL\t11624
    },
    {
      Symbol	Token: "TIMESCAN\t7800
    },
    {
      Symbol	Token: "TIMESGTY\t10717
    },
    {
      Symbol	Token: "TIMETECHNO\t14707
    },
    {
      Symbol	Token: "TIMKEN\t14198
    },
    {
      Symbol	Token: "TINPLATE\t3493
    },
    {
      Symbol	Token: "TIPSFILMS\t11374
    },
    {
      Symbol	Token: "TIPSINDLTD\t9117
    },
    {
      Symbol	Token: "TIRUMALCHM\t3496
    },
    {
      Symbol	Token: "TIRUPATI\t21868
    },
    {
      Symbol	Token: "TIRUPATIFL\t22282
    },
    {
      Symbol	Token: "TITAN\t3506
    },
    {
      Symbol	Token: "TMB\t10945
    },
    {
      Symbol	Token: "TNIDETF\t8882
    },
    {
      Symbol	Token: "TNPETRO\t3509
    },
    {
      Symbol	Token: "TNPL\t3980
    },
    {
      Symbol	Token: "TNTELE\t9884
    },
    {
      Symbol	Token: "TOKYOPLAST\t3837
    },
    {
      Symbol	Token: "TORNTPHARM\t3518
    },
    {
      Symbol	Token: "TORNTPOWER\t13786
    },
    {
      Symbol	Token: "TOTAL\t22423
    },
    {
      Symbol	Token: "TOUCHWOOD\t16910
    },
    {
      Symbol	Token: "TPLPLASTEH\t9219
    },
    {
      Symbol	Token: "TRACXN\t11582
    },
    {
      Symbol	Token: "TRANSWIND\t21260
    },
    {
      Symbol	Token: "TREEHOUSE\t25082
    },
    {
      Symbol	Token: "TREJHARA\t7518
    },
    {
      Symbol	Token: "TRENT\t1964
    },
    {
      Symbol	Token: "TRF\t17987
    },
    {
      Symbol	Token: "TRIDENT\t9685
    },
    {
      Symbol	Token: "TRIGYN\t5428
    },
    {
      Symbol	Token: "TRIL\t15174
    },
    {
      Symbol	Token: "TRITURBINE\t25584
    },
    {
      Symbol	Token: "TRIVENI\t13081
    },
    {
      Symbol	Token: "TTKHLTCARE\t11369
    },
    {
      Symbol	Token: "TTKPRESTIG\t3546
    },
    {
      Symbol	Token: "TTL\t14314
    },
    {
      Symbol	Token: "TTML\t8954
    },
    {
      Symbol	Token: "TV18BRDCST\t14208
    },
    {
      Symbol	Token: "TVSELECT\t11265
    },
    {
      Symbol	Token: "TVSMOTOR\t8479
    },
    {
      Symbol	Token: "TVSSRICHAK\t14245
    },
    {
      Symbol	Token: "TVTODAY\t11275
    },
    {
      Symbol	Token: "TWL\t15414
    },
    {
      Symbol	Token: "UBL\t16713
    },
    {
      Symbol	Token: "UCALFUEL\t3570
    },
    {
      Symbol	Token: "UCL\t4212
    },
    {
      Symbol	Token: "UCOBANK\t11223
    },
    {
      Symbol	Token: "UDAICEMENT\t7276
    },
    {
      Symbol	Token: "UFLEX\t1053
    },
    {
      Symbol	Token: "UFO\t9039
    },
    {
      Symbol	Token: "UGARSUGAR\t19578
    },
    {
      Symbol	Token: "UGROCAP\t5313
    },
    {
      Symbol	Token: "UGROCAP\t6697
    },
    {
      Symbol	Token: "UGROCAP\t9347
    },
    {
      Symbol	Token: "UGROCAP\t9352
    },
    {
      Symbol	Token: "UGROCAP\t9360
    },
    {
      Symbol	Token: "UGROCAP\t11224
    },
    {
      Symbol	Token: "UGROCAP\t11227
    },
    {
      Symbol	Token: "UGROCAP\t11230
    },
    {
      Symbol	Token: "UJAAS\t25540
    },
    {
      Symbol	Token: "UJJIVAN\t17069
    },
    {
      Symbol	Token: "UJJIVANSFB\t15228
    },
    {
      Symbol	Token: "ULTRACEMCO\t11532
    },
    {
      Symbol	Token: "UMA\t13349
    },
    {
      Symbol	Token: "UMAEXPORTS\t8842
    },
    {
      Symbol	Token: "UMANGDAIRY\t11387
    },
    {
      Symbol	Token: "UMESLTD\t19145
    },
    {
      Symbol	Token: "UNICHEMLAB\t3579
    },
    {
      Symbol	Token: "UNIDT\t201
    },
    {
      Symbol	Token: "UNIENTER\t11293
    },
    {
      Symbol	Token: "UNIINFO\t7791
    },
    {
      Symbol	Token: "UNIONBANK\t10753
    },
    {
      Symbol	Token: "UNIPARTS\t13057
    },
    {
      Symbol	Token: "UNITECH\t8893
    },
    {
      Symbol	Token: "UNITEDPOLY\t7564
    },
    {
      Symbol	Token: "UNITEDTEA\t17999
    },
    {
      Symbol	Token: "UNIVASTU\t18977
    },
    {
      Symbol	Token: "UNIVCABLES\t3607
    },
    {
      Symbol	Token: "UNIVPHOTO\t17659
    },
    {
      Symbol	Token: "UNOMINDA\t14154
    },
    {
      Symbol	Token: "UPL\t11287
    },
    {
      Symbol	Token: "URAVI\t2322
    },
    {
      Symbol	Token: "URJA\t20203
    },
    {
      Symbol	Token: "USASEEDS\t10610
    },
    {
      Symbol	Token: "USHAMART\t8840
    },
    {
      Symbol	Token: "USK\t14871
    },
    {
      Symbol	Token: "UTIAMC\t527
    },
    {
      Symbol	Token: "UTIBANKETF\t22440
    },
    {
      Symbol	Token: "UTINEXT50\t21478
    },
    {
      Symbol	Token: "UTINIFTETF\t10511
    },
    {
      Symbol	Token: "UTISENSETF\t10515
    },
    {
      Symbol	Token: "UTISXN50\t9168
    },
    {
      Symbol	Token: "UTTAMSUGAR\t13376
    },
    {
      Symbol	Token: "UWCSL\t5945
    },
    {
      Symbol	Token: "V1NSETEST\t12863
    },
    {
      Symbol	Token: "V2RETAIL\t14766
    },
    {
      Symbol	Token: "VADILALIND\t24196
    },
    {
      Symbol	Token: "VAIBHAVGBL\t11364
    },
    {
      Symbol	Token: "VAISHALI\t16589
    },
    {
      Symbol	Token: "VAKRANGEE\t13342
    },
    {
      Symbol	Token: "VALIANTORG\t330
    },
    {
      Symbol	Token: "VARDHACRLC\t11220
    },
    {
      Symbol	Token: "VARDMNPOLY\t6893
    },
    {
      Symbol	Token: "VARROC\t3857
    },
    {
      Symbol	Token: "VASA\t1274
    },
    {
      Symbol	Token: "VASCONEQ\t18110
    },
    {
      Symbol	Token: "VASWANI\t25340
    },
    {
      Symbol	Token: "VBL\t18921
    },
    {
      Symbol	Token: "VCL\t9020
    },
    {
      Symbol	Token: "VEDL\t3063
    },
    {
      Symbol	Token: "VEEKAYEM\t10710
    },
    {
      Symbol	Token: "VELS\t14590
    },
    {
      Symbol	Token: "VENKEYS\t3757
    },
    {
      Symbol	Token: "VENUSPIPES\t9592
    },
    {
      Symbol	Token: "VENUSREM\t13859
    },
    {
      Symbol	Token: "VERA\t2666
    },
    {
      Symbol	Token: "VERANDA\t8890
    },
    {
      Symbol	Token: "VERTEXPLUS\t14491
    },
    {
      Symbol	Token: "VERTOZ\t18863
    },
    {
      Symbol	Token: "VESUVIUS\t3676
    },
    {
      Symbol	Token: "VETO\t8652
    },
    {
      Symbol	Token: "VGUARD\t15362
    },
    {
      Symbol	Token: "VHL\t11892
    },
    {
      Symbol	Token: "VIAZ\t14316
    },
    {
      Symbol	Token: "VICEROY\t4818
    },
    {
      Symbol	Token: "VIDHIING\t13536
    },
    {
      Symbol	Token: "VIJAYA\t5585
    },
    {
      Symbol	Token: "VIJIFIN\t17691
    },
    {
      Symbol	Token: "VIKASECO\t25756
    },
    {
      Symbol	Token: "VIKASLIFE\t9931
    },
    {
      Symbol	Token: "VIMTALABS\t13101
    },
    {
      Symbol	Token: "VINATIORGA\t17364
    },
    {
      Symbol	Token: "VINDHYATEL\t3694
    },
    {
      Symbol	Token: "VINEETLAB\t3807
    },
    {
      Symbol	Token: "VINNY\t12506
    },
    {
      Symbol	Token: "VINYLINDIA\t16821
    },
    {
      Symbol	Token: "VIPCLOTHNG\t14843
    },
    {
      Symbol	Token: "VIPIND\t3703
    },
    {
      Symbol	Token: "VIPULLTD\t8424
    },
    {
      Symbol	Token: "VIRESCENT\t5920
    },
    {
      Symbol	Token: "VIRINCHI\t15295
    },
    {
      Symbol	Token: "VISAKAIND\t4221
    },
    {
      Symbol	Token: "VISASTEEL\t13298
    },
    {
      Symbol	Token: "VISESHINFO\t7303
    },
    {
      Symbol	Token: "VISHAL\t11773
    },
    {
      Symbol	Token: "VISHNU\t6908
    },
    {
      Symbol	Token: "VISHWARAJ\t13702
    },
    {
      Symbol	Token: "VITAL\t11920
    },
    {
      Symbol	Token: "VIVIANA\t10967
    },
    {
      Symbol	Token: "VIVIDHA\t29881
    },
    {
      Symbol	Token: "VIVO\t7610
    },
    {
      Symbol	Token: "VLSFINANCE\t3715
    },
    {
      Symbol	Token: "VMARCIND\t3188
    },
    {
      Symbol	Token: "VMART\t29284
    },
    {
      Symbol	Token: "VOLTAMP\t13577
    },
    {
      Symbol	Token: "VOLTAS\t3718
    },
    {
      Symbol	Token: "VRLLOG\t8696
    },
    {
      Symbol	Token: "VSCL\t20973
    },
    {
      Symbol	Token: "VSSL\t27067
    },
    {
      Symbol	Token: "VSTIND\t3724
    },
    {
      Symbol	Token: "VSTTILLERS\t24292
    },
    {
      Symbol	Token: "VTL\t2073
    },
    {
      Symbol	Token: "WABAG\t20188
    },
    {
      Symbol	Token: "WALCHANNAG\t3736
    },
    {
      Symbol	Token: "WALPAR\t5013
    },
    {
      Symbol	Token: "WANBURY\t14067
    },
    {
      Symbol	Token: "WATERBASE\t3745
    },
    {
      Symbol	Token: "WEALTH\t1923
    },
    {
      Symbol	Token: "WEBELSOLAR\t14602
    },
    {
      Symbol	Token: "WEIZMANIND\t3748
    },
    {
      Symbol	Token: "WEL\t7835
    },
    {
      Symbol	Token: "WELCORP\t11821
    },
    {
      Symbol	Token: "WELENT\t11626
    },
    {
      Symbol	Token: "WELINV\t19800
    },
    {
      Symbol	Token: "WELSPUNIND\t11253
    },
    {
      Symbol	Token: "WENDT\t4235
    },
    {
      Symbol	Token: "WESTLIFE\t11580
    },
    {
      Symbol	Token: "WEWIN\t9862
    },
    {
      Symbol	Token: "WHEELS\t3766
    },
    {
      Symbol	Token: "WHIRLPOOL\t18011
    },
    {
      Symbol	Token: "WILLAMAGOR\t3772
    },
    {
      Symbol	Token: "WINDLAS\t5366
    },
    {
      Symbol	Token: "WINDMACHIN\t24969
    },
    {
      Symbol	Token: "WIPL\t20491
    },
    {
      Symbol	Token: "WIPRO\t3787
    },
    {
      Symbol	Token: "WOCKPHARMA\t7506
    },
    {
      Symbol	Token: "WONDERLA\t3002
    },
    {
      Symbol	Token: "WORTH\t22277
    },
    {
      Symbol	Token: "WSI\t14832
    },
    {
      Symbol	Token: "WSTCSTPAPR\t3799
    },
    {
      Symbol	Token: "XCHANGING\t11705
    },
    {
      Symbol	Token: "XELPMOC\t8478
    },
    {
      Symbol	Token: "XPROINDIA\t11407
    },
    {
      Symbol	Token: "YAARI\t24999
    },
    {
      Symbol	Token: "YESBANK\t11915
    },
    {
      Symbol	Token: "YUKEN\t5501
    },
    {
      Symbol	Token: "ZEEL\t3812
    },
    {
      Symbol	Token: "ZEELEARN\t20852
    },
    {
      Symbol	Token: "ZEEMEDIA\t14003
    },
    {
      Symbol	Token: "ZENITHEXPO\t8802
    },
    {
      Symbol	Token: "ZENITHSTL\t14566
    },
    {
      Symbol	Token: "ZENSARTECH\t1076
    },
    {
      Symbol	Token: "ZENTEC\t7508
    },
    {
      Symbol	Token: "ZFCVINDIA\t16915
    },
    {
      Symbol	Token: "ZIMLAB\t12384
    },
    {
      Symbol	Token: "ZODIAC\t7138
    },
    {
      Symbol	Token: "ZODIACLOTH\t3821
    },
    {
      Symbol	Token: "ZOMATO\t5097
    },
    {
      Symbol	Token: "ZOTA\t11394
    },
    {
      Symbol	Token: "ZUARI\t29050
    },
    {
      Symbol	Token: "ZUARIIND\t3827
    },
    {
      Symbol	Token: "ZYDUSLIFE\t7929
    },
    {
      Symbol	Token: "ZYDUSWELL\t17635
    },
    {
      Symbol	Token: ""
    }
  ]


  const filterData = GraphSearchData.filter((i) =>
    i.Symbol.toLowerCase().includes(searchConst.toLowerCase())
  );
  console.log("GraphData" ,filterData )


  
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
  console.log("Appendix" ,filterAppendix )

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
                    {i.name}{" "} dsadsad
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
                {filterData?.map((i) => (
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
