import type { Station } from "~/types/station";

export const stations: Station[] = [
  // Line 1 (Red Line)
  {
    ID: "0",
    "Name English": "Tajrish",
    "Name Persian": "تجریش",
    Latitude: "35.80438056",
    Longitude: "51.43395000",
    "Line(s)": "1",
    Previous: "-1",
    Next: "1",
    "Is Active": "T",
  },
  {
    ID: "1",
    "Name English": "Gheytariyeh",
    "Name Persian": "قیطریه",
    Latitude: "35.79305556",
    Longitude: "51.43527778",
    "Line(s)": "1",
    Previous: "0",
    Next: "2",
    "Is Active": "T",
  },
  {
    ID: "2",
    "Name English": "Shahid Sadr",
    "Name Persian": "شهید صدر",
    Latitude: "35.78527778",
    Longitude: "51.43583333",
    "Line(s)": "1",
    Previous: "1",
    Next: "3",
    "Is Active": "T",
  },
  {
    ID: "3",
    "Name English": "Gholhak",
    "Name Persian": "قلهک",
    Latitude: "35.77277778",
    Longitude: "51.43805556",
    "Line(s)": "1",
    Previous: "2",
    Next: "4",
    "Is Active": "T",
  },
  {
    ID: "4",
    "Name English": "Shariati",
    "Name Persian": "دکتر شریعتی",
    Latitude: "35.76277778",
    Longitude: "51.44444444",
    "Line(s)": "1",
    Previous: "3",
    Next: "5",
    "Is Active": "T",
  },
  {
    ID: "5",
    "Name English": "Mirdamad",
    "Name Persian": "میرداماد",
    Latitude: "35.76000000",
    Longitude: "51.43361111",
    "Line(s)": "1",
    Previous: "4",
    Next: "6",
    "Is Active": "T",
  },
  {
    ID: "6",
    "Name English": "Shahid Haghani",
    "Name Persian": "شهید حقانی",
    Latitude: "35.75583333",
    Longitude: "51.42611111",
    "Line(s)": "1",
    Previous: "5",
    Next: "7",
    "Is Active": "T",
  },
  {
    ID: "7",
    "Name English": "Shahid Hemmat",
    "Name Persian": "شهید همت",
    Latitude: "35.74750000",
    Longitude: "51.42805556",
    "Line(s)": "1",
    Previous: "6",
    Next: "8",
    "Is Active": "T",
  },
  {
    ID: "8",
    "Name English": "Mosalla Imam Khomeini",
    "Name Persian": "مصلی امام خمینی",
    Latitude: "35.73997778",
    Longitude: "51.42792778",
    "Line(s)": "1",
    Previous: "7",
    Next: "9",
    "Is Active": "T",
  },
  {
    ID: "9",
    "Name English": "Shahid Beheshti",
    "Name Persian": "شهید بهشتی",
    Latitude: "35.73163056",
    Longitude: "51.42681389",
    "Line(s)": "1,3",
    Previous: "8,60",
    Next: "10,61",
    "Is Active": "T",
  },
  {
    ID: "10",
    "Name English": "Shahid Mofatteh",
    "Name Persian": "شهید مفتح",
    Latitude: "35.72444444",
    Longitude: "51.42777778",
    "Line(s)": "1",
    Previous: "9",
    Next: "11",
    "Is Active": "T",
  },
  {
    ID: "11",
    "Name English": "Shohada-ye Haftom-e Tir",
    "Name Persian": "شهدای هفتم تیر",
    Latitude: "35.71583333",
    Longitude: "51.42611111",
    "Line(s)": "1,6",
    Previous: "10",
    Next: "12,112",
    "Is Active": "T",
  },
  {
    ID: "12",
    "Name English": "Taleghani",
    "Name Persian": "طالقانی",
    Latitude: "35.70716111",
    Longitude: "51.42603333",
    "Line(s)": "1",
    Previous: "11",
    Next: "13",
    "Is Active": "T",
  },
  {
    ID: "13",
    "Name English": "Darvazeh Dowlat",
    "Name Persian": "دروازه دولت",
    Latitude: "35.70171111",
    Longitude: "51.42603333",
    "Line(s)": "1,4",
    Previous: "12,39",
    Next: "14,80",
    "Is Active": "T",
  },
  {
    ID: "14",
    "Name English": "Saadi",
    "Name Persian": "سعدی",
    Latitude: "35.69305556",
    Longitude: "51.42472222",
    "Line(s)": "1",
    Previous: "13",
    Next: "15",
    "Is Active": "T",
  },
  {
    ID: "15",
    "Name English": "Imam Khomeini",
    "Name Persian": "امام خمینی",
    Latitude: "35.68583333",
    Longitude: "51.41972222",
    "Line(s)": "1,2",
    Previous: "14,41",
    Next: "16,42",
    "Is Active": "T",
  },
  {
    ID: "16",
    "Name English": "Panzdah-e-Khordad (15th of Khordad)",
    "Name Persian": "پانزده خرداد",
    Latitude: "35.67799444",
    Longitude: "51.41748333",
    "Line(s)": "1",
    Previous: "15",
    Next: "17",
    "Is Active": "T",
  },
  {
    ID: "17",
    "Name English": "Khayam",
    "Name Persian": "خیام",
    Latitude: "35.67315833",
    Longitude: "51.41646389",
    "Line(s)": "1",
    Previous: "16",
    Next: "18",
    "Is Active": "T",
  },
  {
    ID: "18",
    "Name English": "Meydan-e Mohammadiyeh",
    "Name Persian": "میدان محمدیه",
    Latitude: "35.66831944",
    Longitude: "51.41559444",
    "Line(s)": "1,7",
    Previous: "17,66",
    Next: "19,135",
    "Is Active": "T",
  },
  {
    ID: "19",
    "Name English": "Shush",
    "Name Persian": "شوش",
    Latitude: "35.65833333",
    Longitude: "51.41416667",
    "Line(s)": "1",
    Previous: "18",
    Next: "20",
    "Is Active": "T",
  },
  {
    ID: "20",
    "Name English": "Payane Jonoob",
    "Name Persian": "پایانه جنوب",
    Latitude: "35.64786389",
    Longitude: "51.41560556",
    "Line(s)": "1",
    Previous: "19",
    Next: "21",
    "Is Active": "T",
  },
  {
    ID: "21",
    "Name English": "Shahid Bokharaei",
    "Name Persian": "شهید بخارایی",
    Latitude: "35.64090000",
    Longitude: "51.41497778",
    "Line(s)": "1",
    Previous: "20",
    Next: "22",
    "Is Active": "T",
  },
  {
    ID: "22",
    "Name English": "Ali Abad",
    "Name Persian": "علی آباد",
    Latitude: "35.62842500",
    Longitude: "51.41616667",
    "Line(s)": "1",
    Previous: "21",
    Next: "23",
    "Is Active": "T",
  },
  {
    ID: "23",
    "Name English": "Javanmard-e-Ghassab",
    "Name Persian": "جوانمرد قصاب",
    Latitude: "35.61866111",
    Longitude: "51.41873611",
    "Line(s)": "1",
    Previous: "22",
    Next: "24",
    "Is Active": "T",
  },
  {
    ID: "24",
    "Name English": "Shahr-e-Rey",
    "Name Persian": "شهر ری",
    Latitude: "35.59510000",
    Longitude: "51.42237778",
    "Line(s)": "1",
    Previous: "23",
    Next: "25",
    "Is Active": "T",
  },
  {
    ID: "25",
    "Name English": "Palayeshgah",
    "Name Persian": "پالایشگاه",
    Latitude: "35.55972222",
    Longitude: "51.39916667",
    "Line(s)": "1",
    Previous: "24",
    Next: "26",
    "Is Active": "T",
  },
  {
    ID: "26",
    "Name English": "Shahed - Bagher Shahr",
    "Name Persian": "شاهد (باقر شهر)",
    Latitude: "35.54744722",
    Longitude: "51.38258333",
    "Line(s)": "1",
    Previous: "25",
    Next: "27, 261",
    "Is Active": "T",
  },
  {
    ID: "261",
    "Name English": "نمایشگاه شهر آفتاب",
    "Name Persian": "Shahr-e Aftab",
    Latitude: "35.5399092",
    Longitude: "51.3491535",
    "Line(s)": "1",
    Previous: "26",
    Next: "262",
    "Is Active": "T",
  },

  {
    ID: "262",
    "Name English": "Emam Khomeini Airport Station",
    "Name Persian": "ایستگاه مترو فرودگاه امام خمینی",
    Latitude: "35.4068735",
    Longitude: "51.1542374",
    "Line(s)": "1",
    Previous: "261",
    Next: "263",
    "Is Active": "T",
  },
  {
    ID: "263",
    "Name English": "Parand",
    "Name Persian": "شهر پرند",
    Latitude: "35.4826196",
    Longitude: "50.9491786",
    "Line(s)": "1",
    Previous: "262",
    Next: "-1",
    "Is Active": "T",
  },
  {
    ID: "27",
    "Name English": "Haram-e Motahhar-e Emam Khomeini",
    "Name Persian": "حرم مطهر امام خمینی",
    Latitude: "35.54510556",
    Longitude: "51.37298333",
    "Line(s)": "1",
    Previous: "26",
    Next: "28",
    "Is Active": "T",
  },
  {
    ID: "28",
    "Name English": "Kahrizak",
    "Name Persian": "کهریزک",
    Latitude: "35.52170000",
    Longitude: "51.36920000",
    "Line(s)": "1",
    Previous: "27",
    Next: "-1",
    "Is Active": "T",
  },
  {
    ID: "29",
    "Name English": "Farhangsara",
    "Name Persian": "فرهنگسرا",
    Latitude: "35.72972222",
    Longitude: "51.54694444",
    "Line(s)": "2",
    Previous: "-1",
    Next: "30",
    "Is Active": "T",
  },
  {
    ID: "30",
    "Name English": "Tehranpars",
    "Name Persian": "تهرانپارس",
    Latitude: "35.73083333",
    Longitude: "51.53166667",
    "Line(s)": "2",
    Previous: "29",
    Next: "31",
    "Is Active": "T",
  },
  {
    ID: "31",
    "Name English": "Shahid Bagheri",
    "Name Persian": "شهید باقری",
    Latitude: "35.73277778",
    Longitude: "51.51638889",
    "Line(s)": "2",
    Previous: "30",
    Next: "32",
    "Is Active": "T",
  },
  {
    ID: "32",
    "Name English": "Elm-o-Sanat University",
    "Name Persian": "دانشگاه علم و صنعت",
    Latitude: "35.73444444",
    Longitude: "51.50472222",
    "Line(s)": "2",
    Previous: "31",
    Next: "33",
    "Is Active": "T",
  },
  {
    ID: "33",
    "Name English": "Sarsabz",
    "Name Persian": "سرسبز",
    Latitude: "35.73500000",
    Longitude: "51.49500000",
    "Line(s)": "2",
    Previous: "32",
    Next: "34",
    "Is Active": "T",
  },
  {
    ID: "34",
    "Name English": "Janbazan",
    "Name Persian": "جانبازان",
    Latitude: "35.73250000",
    Longitude: "51.47361111",
    "Line(s)": "2",
    Previous: "33",
    Next: "35",
    "Is Active": "T",
  },
  {
    ID: "35",
    "Name English": "Fadak",
    "Name Persian": "فدک",
    Latitude: "35.72638889",
    Longitude: "51.47583333",
    "Line(s)": "2",
    Previous: "34",
    Next: "36",
    "Is Active": "T",
  },
  {
    ID: "36",
    "Name English": "Sabalan",
    "Name Persian": "سبلان",
    Latitude: "35.71805556",
    Longitude: "51.46444444",
    "Line(s)": "2",
    Previous: "35",
    Next: "37",
    "Is Active": "T",
  },
  {
    ID: "37",
    "Name English": "Shahid Madani",
    "Name Persian": "شهید مدنی",
    Latitude: "35.70916667",
    Longitude: "51.45250000",
    "Line(s)": "2",
    Previous: "36",
    Next: "38",
    "Is Active": "T",
  },
  {
    ID: "38",
    "Name English": "Imam Hossein",
    "Name Persian": "امام حسین",
    Latitude: "35.70194444",
    Longitude: "51.44500000",
    "Line(s)": "6,2",
    Previous: "37,79",
    Next: "39,79",
    "Is Active": "T",
  },
  {
    ID: "39",
    "Name English": "Darvazeh Shemiran",
    "Name Persian": "دروازه شمیران",
    Latitude: "35.69899000",
    Longitude: "51.43725000",
    "Line(s)": "4,2",
    Previous: "38,13",
    Next: "40,13",
    "Is Active": "T",
  },
  {
    ID: "40",
    "Name English": "Baharestan",
    "Name Persian": "بهارستان",
    Latitude: "35.69166667",
    Longitude: "51.43277778",
    "Line(s)": "2",
    Previous: "39",
    Next: "41",
    "Is Active": "T",
  },
  {
    ID: "41",
    "Name English": "Mellat",
    "Name Persian": "ملت",
    Latitude: "35.68880000",
    Longitude: "51.42694444",
    "Line(s)": "2",
    Previous: "40",
    Next: "15",
    "Is Active": "T",
  },
  {
    ID: "42",
    "Name English": "Hasan Abad",
    "Name Persian": "حسن آباد",
    Latitude: "35.68638889",
    Longitude: "51.40972222",
    "Line(s)": "2",
    Previous: "15",
    Next: "43",
    "Is Active": "T",
  },
  {
    ID: "43",
    "Name English": "Daneshgah-e Emam Ali",
    "Name Persian": "دانشگاه امام علی",
    Latitude: "35.68722222",
    Longitude: "51.39916667",
    "Line(s)": "2",
    Previous: "42",
    Next: "44",
    "Is Active": "T",
  },
  {
    ID: "44",
    "Name English": "Meydan-e Horr",
    "Name Persian": "میدان حر",
    Latitude: "35.69083333",
    Longitude: "51.38861111",
    "Line(s)": "2",
    Previous: "43",
    Next: "45",
    "Is Active": "T",
  },
  {
    ID: "45",
    "Name English": "Shahid Navvab-e Safavi",
    "Name Persian": "شهید نواب صفوی",
    Latitude: "35.6950338801135",
    Longitude: "51.37839426529634",
    "Line(s)": "2,7",
    Previous: "44",
    Next: "46,131",
    "Is Active": "T",
  },
  {
    ID: "46",
    "Name English": "Shademan",
    "Name Persian": "شادمان",
    Latitude: "35.7006982",
    Longitude: "51.3609275",
    "Line(s)": "2,4",
    Previous: "45,82",
    Next: "47,83",
    "Is Active": "T",
  },
  {
    ID: "47",
    "Name English": "Daneshgah-e Sharif",
    "Name Persian": "دانشگاه شریف",
    Latitude: "35.70583333",
    Longitude: "51.35361111",
    "Line(s)": "2",
    Previous: "46",
    Next: "48",
    "Is Active": "T",
  },
  {
    ID: "48",
    "Name English": "Tarasht",
    "Name Persian": "طرشت",
    Latitude: "35.71610000",
    Longitude: "51.34350000",
    "Line(s)": "2",
    Previous: "47",
    Next: "49",
    "Is Active": "T",
  },
  {
    ID: "49",
    "Name English": "Tehran (Sadeghiyeh)",
    "Name Persian": "تهران(صادقیه)",
    Latitude: "35.71777778",
    Longitude: "51.33083333",
    "Line(s)": "2,5",
    Previous: "48",
    Next: "88",
    "Is Active": "T",
  },
  {
    ID: "50",
    "Name English": "Ghaem",
    "Name Persian": "قائم",
    Latitude: "35.79944444",
    Longitude: "51.52166667",
    "Line(s)": "3",
    Previous: "-1",
    Next: "51",
    "Is Active": "T",
  },
  {
    ID: "51",
    "Name English": "Shahid Mahallati",
    "Name Persian": "شهید محلاتی",
    Latitude: "35.79805556",
    Longitude: "51.50833333",
    "Line(s)": "3",
    Previous: "50",
    Next: "52",
    "Is Active": "T",
  },
  {
    ID: "52",
    "Name English": "Aghdasiyeh",
    "Name Persian": "اقدسیه",
    Latitude: "35.80070000",
    Longitude: "51.48462000",
    "Line(s)": "3",
    Previous: "51",
    Next: "53",
    "Is Active": "T",
  },
  {
    ID: "53",
    "Name English": "Nobonyad",
    "Name Persian": "نوبنیاد",
    Latitude: "35.79083333",
    Longitude: "51.47850000",
    "Line(s)": "3",
    Previous: "52",
    Next: "54",
    "Is Active": "T",
  },
  {
    ID: "54",
    "Name English": "Hossein Abad",
    "Name Persian": "حسین آباد",
    Latitude: "35.77861111",
    Longitude: "51.48055556",
    "Line(s)": "3",
    Previous: "53",
    Next: "55",
    "Is Active": "T",
  },
  {
    ID: "55",
    "Name English": "Heravi",
    "Name Persian": "میدان هروی",
    Latitude: "35.77194444",
    Longitude: "51.47305556",
    "Line(s)": "3",
    Previous: "54",
    Next: "56",
    "Is Active": "T",
  },
  {
    ID: "56",
    "Name English": "Shahid Zeyn-o-ddin",
    "Name Persian": "شهید زین‌الدین",
    Latitude: "35.75972222",
    Longitude: "51.46666667",
    "Line(s)": "3",
    Previous: "55",
    Next: "57",
    "Is Active": "T",
  },
  {
    ID: "57",
    "Name English": "Khajeh Abdollah-e Ansari",
    "Name Persian": "خواجه عبدالله انصاری",
    Latitude: "35.74361111",
    Longitude: "51.46361111",
    "Line(s)": "3",
    Previous: "56",
    Next: "58",
    "Is Active": "T",
  },
  {
    ID: "58",
    "Name English": "Shahid Sayyad-e Shirazi",
    "Name Persian": "شهید صیاد شیرازی",
    Latitude: "35.73500000",
    Longitude: "51.45944444",
    "Line(s)": "3",
    Previous: "57",
    Next: "59",
    "Is Active": "T",
  },
  {
    ID: "59",
    "Name English": "Shahid Ghoddoosi",
    "Name Persian": "شهید قدوسی",
    Latitude: "35.73138889",
    Longitude: "51.44500000",
    "Line(s)": "3",
    Previous: "58",
    Next: "60",
    "Is Active": "T",
  },
  {
    ID: "60",
    "Name English": "Sohrevardi",
    "Name Persian": "سهروردی",
    Latitude: "35.73111111",
    Longitude: "51.43750000",
    "Line(s)": "3",
    Previous: "59",
    Next: "9",
    "Is Active": "T",
  },
  {
    ID: "61",
    "Name English": "Mirzaye Shirazi",
    "Name Persian": "میرزای شیرازی",
    Latitude: "35.72818000",
    Longitude: "51.41692000",
    "Line(s)": "3",
    Previous: "9",
    Next: "62",
    "Is Active": "T",
  },
  {
    ID: "62",
    "Name English": "Meydan-e Jahad",
    "Name Persian": "میدان جهاد",
    Latitude: "35.72051000",
    Longitude: "51.40842000",
    "Line(s)": "3",
    Previous: "61",
    Next: "63",
    "Is Active": "T",
  },
  {
    ID: "63",
    "Name English": "Meydan-e Vali Asr",
    "Name Persian": "میدان ولیعصر",
    Latitude: "35.71162000",
    Longitude: "51.40701000",
    "Line(s)": "3,6",
    Previous: "62,10",
    Next: "64,11",
    "Is Active": "T",
  },
  {
    ID: "64",
    "Name English": "Teatr-e Shahr",
    "Name Persian": "تئاتر شهر",
    Latitude: "35.70111111",
    Longitude: "51.40555556",
    "Line(s)": "3,4",
    Previous: "63,80",
    Next: "65,81",
    "Is Active": "T",
  },
  {
    ID: "65",
    "Name English": "Moniriyeh",
    "Name Persian": "منیریه",
    Latitude: "35.68114000",
    Longitude: "51.40163000",
    "Line(s)": "3",
    Previous: "64",
    Next: "66",
    "Is Active": "T",
  },
  {
    ID: "66",
    "Name English": "Mahdiyeh",
    "Name Persian": "مهدیه",
    Latitude: "35.66719000",
    Longitude: "51.39942000",
    "Line(s)": "3,7",
    Previous: "65,18",
    Next: "67,18",
    "Is Active": "T",
  },
  {
    ID: "67",
    "Name English": "Rahahan",
    "Name Persian": "راه آهن",
    Latitude: "35.65867000",
    Longitude: "51.39838000",
    "Line(s)": "3",
    Previous: "66",
    Next: "68",
    "Is Active": "T",
  },
  {
    ID: "68",
    "Name English": "Javadiyeh",
    "Name Persian": "جوادیه",
    Latitude: "35.65935000",
    Longitude: "51.38800000",
    "Line(s)": "3",
    Previous: "67",
    Next: "69",
    "Is Active": "T",
  },
  {
    ID: "69",
    "Name English": "Zam Zam",
    "Name Persian": "زمزم",
    Latitude: "35.65256000",
    Longitude: "51.37359000",
    "Line(s)": "3",
    Previous: "68",
    Next: "70",
    "Is Active": "T",
  },
  {
    ID: "70",
    "Name English": "Shahrak-e Shari'ati",
    "Name Persian": "شهرک شریعتی",
    Latitude: "35.64403000",
    Longitude: "51.36883000",
    "Line(s)": "3",
    Previous: "69",
    Next: "71",
    "Is Active": "T",
  },
  {
    ID: "71",
    "Name English": "Abdol Abad",
    "Name Persian": "عبدل آباد",
    Latitude: "35.63821000",
    Longitude: "51.36015000",
    "Line(s)": "3",
    Previous: "70",
    Next: "72",
    "Is Active": "T",
  },
  {
    ID: "72",
    "Name English": "Ne'mat Abad",
    "Name Persian": "نعمت آباد",
    Latitude: "35.63402000",
    Longitude: "51.34775000",
    "Line(s)": "3",
    Previous: "71",
    Next: "73",
    "Is Active": "T",
  },
  {
    ID: "73",
    "Name English": "Azadegan",
    "Name Persian": "آزادگان",
    Latitude: "35.62753000",
    Longitude: "51.33525000",
    "Line(s)": "3",
    Previous: "72",
    Next: "-1",
    "Is Active": "T",
  },
  {
    ID: "74",
    "Name English": "Shahid Kolahdooz",
    "Name Persian": "شهید کلاهدوز",
    Latitude: "35.69888889",
    Longitude: "51.49999000",
    "Line(s)": "4",
    Previous: "-1",
    Next: "75",
    "Is Active": "T",
  },
  {
    ID: "75",
    "Name English": "Nirooye Havaei",
    "Name Persian": "نیروی هوایی",
    Latitude: "35.69250000",
    Longitude: "51.48800000",
    "Line(s)": "4",
    Previous: "74",
    Next: "76",
    "Is Active": "T",
  },
  {
    ID: "76",
    "Name English": "Nabard",
    "Name Persian": "نبرد",
    Latitude: "35.69166667",
    Longitude: "51.47777778",
    "Line(s)": "4",
    Previous: "75",
    Next: "77",
    "Is Active": "T",
  },
  {
    ID: "77",
    "Name English": "Piroozi",
    "Name Persian": "پیروزی",
    Latitude: "35.69100000",
    Longitude: "51.46790000",
    "Line(s)": "4",
    Previous: "76",
    Next: "78",
    "Is Active": "T",
  },
  {
    ID: "78",
    "Name English": "Ebn-e Sina",
    "Name Persian": "ابن سینا",
    Latitude: "35.69027778",
    Longitude: "51.45666667",
    "Line(s)": "4",
    Previous: "77",
    Next: "79",
    "Is Active": "T",
  },
  {
    ID: "79",
    "Name English": "Meydan-e Shohada",
    "Name Persian": "میدان شهدا",
    Latitude: "35.69027778",
    Longitude: "51.44750000",
    "Line(s)": "4,6",
    Previous: "78,38",
    Next: "39,114",
    "Is Active": "T",
  },
  {
    ID: "80",
    "Name English": "Ferdowsi",
    "Name Persian": "فردوسی",
    Latitude: "35.70140000",
    Longitude: "51.41850000",
    "Line(s)": "4",
    Previous: "13",
    Next: "64",
    "Is Active": "T",
  },
  {
    ID: "81",
    "Name English": "Meydan-e Enghelab-e Eslami",
    "Name Persian": "میدان انقلاب اسلامی",
    Latitude: "35.70111111",
    Longitude: "51.38972222",
    "Line(s)": "4",
    Previous: "64",
    Next: "82",
    "Is Active": "T",
  },
  {
    ID: "82",
    "Name English": "Towhid",
    "Name Persian": "توحید",
    Latitude: "35.70083333",
    Longitude: "51.37861111",
    "Line(s)": "4,7",
    Previous: "81,",
    Next: "46,45",
    "Is Active": "T",
  },
  {
    ID: "83",
    "Name English": "Doctor Habib-o-llah",
    "Name Persian": "دکتر حبیب الله",
    Latitude: "35.70031000",
    Longitude: "51.35604000",
    "Line(s)": "4",
    Previous: "46",
    Next: "84",
    "Is Active": "T",
  },
  {
    ID: "84",
    "Name English": "Ostad Moein",
    "Name Persian": "استاد معین",
    Latitude: "35.70016000",
    Longitude: "51.34472000",
    "Line(s)": "4",
    Previous: "83",
    Next: "85",
    "Is Active": "T",
  },
  {
    ID: "85",
    "Name English": "Meydan-e Azadi",
    "Name Persian": "میدان آزادی",
    Latitude: "35.69975000",
    Longitude: "51.33260000",
    "Line(s)": "4",
    Previous: "84",
    Next: "86",
    "Is Active": "T",
  },
  {
    ID: "86",
    "Name English": "Bimeh",
    "Name Persian": "بیمه",
    Latitude: "35.69944444",
    Longitude: "51.32055556",
    "Line(s)": "4",
    Previous: "85",
    Next: "87,861",
    "Is Active": "T",
  },
  {
    ID: "861",
    "Name English": "Mehrabad Airport Terminal 1 and 2",
    "Name Persian": "پایانه ۱ و ۲ فرودگاه مهرآباد",
    Latitude: "35.69196107704828",
    Longitude: "51.32285434000335",
    "Line(s)": "4",
    Previous: "86",
    Next: "862",
    "Is Active": "T",
  },
  {
    ID: "862",
    "Name English": "Mehrabad Airport Terminal 4 and 6",
    "Name Persian": "پایانه ۴ و ۶ فرودگاه مهرآباد",
    Latitude: "35.6881740540629",
    Longitude: "51.33159138595394",
    "Line(s)": "4",
    Previous: "861",
    Next: "-1",
    "Is Active": "T",
  },
  {
    ID: "87",
    "Name English": "Shahrak-e Ekbatan",
    "Name Persian": "شهرک اکباتان",
    Latitude: "35.70553000",
    Longitude: "51.30763000",
    "Line(s)": "4",
    Previous: "86",
    Next: "88",
    "Is Active": "T",
  },
  {
    ID: "88",
    "Name English": "Eram-e Sabz",
    "Name Persian": "ارم سبز",
    Latitude: "35.71750000",
    Longitude: "51.30194444",
    "Line(s)": "4,5",
    Previous: "87,49",
    Next: "89,881",
    "Is Active": "T",
  },
  {
    ID: "881",
    "Name English": "Allameh Jafari",
    "Name Persian": "علامه جعفری",
    Latitude: "35.7307482",
    Longitude: "51.3046842",
    "Line(s)": "4",
    Previous: "87",
    Next: "882",
    "Is Active": "T",
  },
  {
    ID: "882",
    "Name English": "Ayatollah Kashani",
    "Name Persian": "آیت‌الله کاشانی",
    Latitude: "35.740442813391994",
    Longitude: "51.30296587944032",
    "Line(s)": "4,6",
    Previous: "881,101",
    Next: "883,103",
    "Is Active": "T",
  },
  // {
  //   ID: "883",
  //   "Name English": "Chaharbagh",
  //   "Name Persian": "",
  //   Latitude: "35.740442813391994",
  //   Longitude: "51.30296587944032",
  //   "Line(s)": "4",
  //   Previous: "882",
  //   Next: "883",
  //   "Is Active": "T",
  // },

  {
    ID: "89",
    "Name English": "Varzeshgah-e Azadi",
    "Name Persian": "ورزشگاه آزادی",
    Latitude: "35.71666667",
    Longitude: "51.28138889",
    "Line(s)": "5",
    Previous: "88",
    Next: "90",
    "Is Active": "T",
  },
  {
    ID: "90",
    "Name English": "Chitgar",
    "Name Persian": "چیتگر",
    Latitude: "35.71722222",
    Longitude: "51.24388889",
    "Line(s)": "5",
    Previous: "89",
    Next: "91",
    "Is Active": "T",
  },
  {
    ID: "91",
    "Name English": "Iran Khodro",
    "Name Persian": "ایران خودرو",
    Latitude: "35.72527778",
    Longitude: "51.19666667",
    "Line(s)": "5",
    Previous: "90",
    Next: "92",
    "Is Active": "T",
  },
  {
    ID: "92",
    "Name English": "Vardavard",
    "Name Persian": "وردآورد",
    Latitude: "35.74388889",
    Longitude: "51.15083333",
    "Line(s)": "5",
    Previous: "91",
    Next: "93",
    "Is Active": "T",
  },
  {
    ID: "93",
    "Name English": "Garmdarreh",
    "Name Persian": "گرم دره",
    Latitude: "35.75100000",
    Longitude: "51.08166667",
    "Line(s)": "5",
    Previous: "92",
    Next: "94",
    "Is Active": "T",
  },
  {
    ID: "94",
    "Name English": "Atmosfer",
    "Name Persian": "اتمسفر",
    Latitude: "35.76740000",
    Longitude: "51.04580000",
    "Line(s)": "5",
    Previous: "93",
    Next: "95",
    "Is Active": "T",
  },
  {
    ID: "95",
    "Name English": "Karaj",
    "Name Persian": "کرج",
    Latitude: "35.78690556",
    Longitude: "51.00299722",
    "Line(s)": "5",
    Previous: "94",
    Next: "96",
    "Is Active": "T",
  },
  {
    ID: "96",
    "Name English": "Mohammad Shahr (Mahdasht)",
    "Name Persian": "محمدشهر(ماهدشت)",
    Latitude: "35.80222222",
    Longitude: "50.96500000",
    "Line(s)": "5",
    Previous: "95",
    Next: "97",
    "Is Active": "T",
  },
  {
    ID: "97",
    "Name English": "Golshahr",
    "Name Persian": "گلشهر",
    Latitude: "35.82500000",
    Longitude: "50.93277778",
    "Line(s)": "5",
    Previous: "96",
    Next: "971",
    "Is Active": "T",
  },
  {
    ID: "971",
    "Name English": "Fakhrizadeh",
    "Name Persian": "فخری زاده",
    Latitude: "35.9175096",
    Longitude: "50.789165",
    "Line(s)": "5",
    Previous: "97",
    Next: "972",
    "Is Active": "T",
  },
  {
    ID: "972",
    "Name English": "Ghasem Soleimani",
    "Name Persian": "قاسم سلیمانی",
    Latitude: "35.95882966952798",
    Longitude: "50.71920151458703",
    "Line(s)": "5",
    Previous: "96",
    Next: "-1",
    "Is Active": "T",
  },
  {
    ID: "98",
    "Name English": "Koohsar",
    "Name Persian": "کوهسار",
    Latitude: "35.77043721853544",
    Longitude: "51.27917655920767",
    "Line(s)": "6",
    Previous: "-1",
    Next: "99",
    "Is Active": "T",
  },
  {
    ID: "99",
    "Name English": "Shohada-ye Kan",
    "Name Persian": "شهدای کن",
    Latitude: "35.76311597006182",
    Longitude: "51.28415286540986",
    "Line(s)": "6",
    Previous: "98",
    Next: "100",
    "Is Active": "T",
  },
  {
    ID: "100",
    "Name English": "Shahran",
    "Name Persian": "شهران",
    Latitude: "35.753295211348444",
    Longitude: "51.28778883972884",
    "Line(s)": "6",
    Previous: "99",
    Next: "101",
    "Is Active": "T",
  },
  {
    ID: "101",
    "Name English": "Shahr-e Ziba",
    "Name Persian": "شهر زیبا",
    Latitude: "35.745397676018534",
    Longitude: "51.29516610815486",
    "Line(s)": "6",
    Previous: "100",
    Next: "882",
    "Is Active": "T",
  },
  {
    ID: "103",
    "Name English": "Shahid Sattari",
    "Name Persian": "شهید ستاری",
    Latitude: "35.73676932643607",
    Longitude: "51.320053568765",
    "Line(s)": "6",
    Previous: "882",
    Next: "104",
    "Is Active": "T",
  },
  {
    ID: "104",
    "Name English": "Shahid Ashrafi Esfahani",
    "Name Persian": "شهید اشرفی اصفهانی",
    Latitude: "35.73611409609121",
    Longitude: "51.33150439206545",
    "Line(s)": "6",
    Previous: "103",
    Next: "105",
    "Is Active": "T",
  },
  {
    ID: "105",
    "Name English": "Yadegar-e Emam",
    "Name Persian": "یادگار امام",
    Latitude: "35.73474639844432",
    Longitude: "51.346036850003124",
    "Line(s)": "6",
    Previous: "104",
    Next: "106",
    "Is Active": "T",
  },
  {
    ID: "106",
    "Name English": "Marzdaran",
    "Name Persian": "مرزداران",
    Latitude: "35.734418862370724",
    Longitude: "51.359468259307086",
    "Line(s)": "6",
    Previous: "105",
    Next: "107",
    "Is Active": "T",
  },
  {
    ID: "107",
    "Name English": "Shahrak-e Azmayesh",
    "Name Persian": "شهرک آزمایش",
    Latitude: "35.73171079938589",
    Longitude: "51.3714087497828",
    "Line(s)": "6",
    Previous: "106",
    Next: "108",
    "Is Active": "T",
  },
  {
    ID: "108",
    "Name English": "Daneshgah-e Tarbiat Modares",
    "Name Persian": "دانشگاه تربیت مدرس",
    Latitude: "35.72474106307087",
    Longitude: "51.38123886469535",
    "Line(s)": "6,7",
    Previous: "107",
    Next: "109,1301",
    "Is Active": "T",
  },
  {
    ID: "109",
    "Name English": "Karegar",
    "Name Persian": "کارگر",
    Latitude: "35.715354154995836",
    Longitude: "51.38951536073492",
    "Line(s)": "6",
    Previous: "108",
    Next: "110",
    "Is Active": "T",
  },
  {
    ID: "110",
    "Name English": "Boostan-e Laleh",
    "Name Persian": "بوستان لاله",
    Latitude: "35.70830026651861",
    Longitude: "51.39517788039512",
    "Line(s)": "6",
    Previous: "109",
    Next: "63",
    "Is Active": "T",
  },
  // {
  //   ID: "111",
  //   "Name English": "Shahid Nejat-o llahi",
  //   "Name Persian": "شهید نجات اللهی",
  //   Latitude: "35.71625",
  //   Longitude: "51.4188",
  //   "Line(s)": "6",
  //   Previous: "63",
  //   Next: "11",
  //   "Is Active": "F",
  // },
  {
    ID: "112",
    "Name English": "Bahar Shiraz",
    "Name Persian": "بهار شیراز",
    Latitude: "35.71547223271686",
    Longitude: "51.43934547901154",
    "Line(s)": "6",
    Previous: "11",
    Next: "38",
    "Is Active": "T",
  },
  // {
  //   ID: "113",
  //   "Name English": "Sarbaz",
  //   "Name Persian": "سرباز",
  //   Latitude: "35.6825680288",
  //   Longitude: "51.446688347",
  //   "Line(s)": "6",
  //   Previous: "112",
  //   Next: "38",
  //   "Is Active": "F",
  // },
  {
    ID: "114",
    "Name English": "Amir Kabir",
    "Name Persian": "امیرکبیر",
    Latitude: "35.68256202881702",
    Longitude: "51.44686834769672",
    "Line(s)": "6",
    Previous: "79",
    Next: "115",
    "Is Active": "T",
  },
  {
    ID: "115",
    "Name English": "Shohada-ye Hefdah-e Shahrivar",
    "Name Persian": "شهدای هفده شهریور",
    Latitude: "35.66857564592442",
    Longitude: "51.44567197126579",
    "Line(s)": "6,7",
    Previous: "114",
    Next: "116,137",
    "Is Active": "T",
  },
  {
    ID: "116",
    "Name English": "Meydan-e Khorasan",
    "Name Persian": "میدان خراسان",
    Latitude: "35.66539099567759",
    Longitude: "51.44552799283873",
    "Line(s)": "6",
    Previous: "115",
    Next: "117",
    "Is Active": "F",
  },
  {
    ID: "117",
    "Name English": "Shahid Rezai",
    "Name Persian": "شهید رضایی",
    Latitude: "35.652409334471706",
    Longitude: "51.44462366570966",
    "Line(s)": "6",
    Previous: "116",
    Next: "118",
    "Is Active": "T",
  },
  {
    ID: "118",
    "Name English": "Be'sat",
    "Name Persian": "بعثت",
    Latitude: "35.64468840571407",
    Longitude: "51.44456759457712",
    "Line(s)": "6",
    Previous: "117",
    Next: "119",
    "Is Active": "T",
  },
  {
    ID: "119",
    "Name English": "Kiyan Shahr",
    "Name Persian": "کیان شهر",
    Latitude: "35.63270135856449",
    Longitude: "51.44854171684225",
    "Line(s)": "6",
    Previous: "118",
    Next: "120",
    "Is Active": "T",
  },
  {
    ID: "120",
    "Name English": "Dowlat Abad",
    "Name Persian": "دولت آباد",
    Latitude: "35.618692353623096",
    Longitude: "51.46423984719359",
    "Line(s)": "6",
    Previous: "119",
    Next: "121",
    "Is Active": "T",
  },
  {
    ID: "121",
    "Name English": "Cheshme Ali",
    "Name Persian": "چشمه علی",
    Latitude: "35.6079777",
    Longitude: "51.4468117",
    "Line(s)": "6",
    Previous: "120",
    Next: "122",
    "Is Active": "F",
  },
  {
    ID: "122",
    "Name English": "Ebn-e Babvieh",
    "Name Persian": "ابن باویه",
    Latitude: "35.6016934",
    Longitude: "51.4448901",
    "Line(s)": "6",
    Previous: "121",
    Next: "124",
    "Is Active": "F",
  },
  // {
  //   ID: "123",
  //   "Name English": "Meydan-e Hazrat-e Abdol Azim",
  //   "Name Persian": "میدان حضرت عبدالعظیم",
  //   Latitude: "",
  //   Longitude: "",
  //   "Line(s)": "6",
  //   Previous: "122",
  //   Next: "124",
  //   "Is Active": "T",
  // },
  {
    ID: "124",
    "Name English": "Haram-e Hazrat-e Abdol Azim",
    "Name Persian": "حرم حضرت عبدالعظیم",
    Latitude: "35.5856765",
    Longitude: "51.4355401",
    "Line(s)": "6",
    Previous: "123",
    Next: "-1",
    "Is Active": "F",
  },
  {
    ID: "125",
    "Name English": "Meydan-e Ketab",
    "Name Persian": "میدان کتاب",
    Latitude: "35.77732693371048",
    Longitude: "51.35563141547079",
    "Line(s)": "7",
    Previous: "-1",
    Next: "126",
    "Is Active": "T",
  },
  {
    ID: "126",
    "Name English": "Shahid Dadman",
    "Name Persian": "شهید دادمان",
    Latitude: "35.76667173901451",
    Longitude: "51.36700556831937",
    "Line(s)": "7",
    Previous: "125",
    Next: "127",
    "Is Active": "T",
  },
  {
    ID: "127",
    "Name English": "Meydan-e San'at",
    "Name Persian": "میدان صنعت",
    Latitude: "35.75476776904177",
    Longitude: "51.367480921884116",
    "Line(s)": "7",
    Previous: "126",
    Next: "128",
    "Is Active": "T",
  },
  {
    ID: "128",
    "Name English": "Borg-e Milad Tehran",
    "Name Persian": "برج میلاد تهران",
    Latitude: "35.747515599121535",
    Longitude: "51.37921156321945",
    "Line(s)": "7",
    Previous: "127",
    Next: "129",
    "Is Active": "T",
  },
  {
    ID: "129",
    "Name English": "Boostan-e Goftegoo",
    "Name Persian": "بوستان گفتگو",
    Latitude: "35.73287514077497",
    Longitude: "51.38360709518914",
    "Line(s)": "7",
    Previous: "128",
    Next: "108",
    "Is Active": "T",
  },
  // {
  //   ID: "130",
  //   "Name English": "Bagher Khan",
  //   "Name Persian": "باقرخان",
  //   Latitude: "35.72474106307087",
  //   Longitude: "51.38123886469535",
  //   "Line(s)": "7",
  //   Previous: "108",
  //   Next: "82",
  //   "Is Active": "T",
  // },
  {
    ID: "1301",
    "Name English": "Modafean-e Salamat",
    "Name Persian": "مدافعان سلامت",
    Latitude: "35.70586752256931",
    Longitude: "51.377671633563146",
    "Line(s)": "7",
    Previous: "45",
    Next: "1302,82",
    "Is Active": "T",
  },
  // {
  //   ID: "1302",
  //   "Name English": "Towhid",
  //   "Name Persian": "توحید",
  //   Latitude: "35.700875715141336",
  //   Longitude: "51.378610814657605",
  //   "Line(s)": "7",
  //   Previous: "1301",
  //   Next: "45",
  //   "Is Active": "T",
  // },
  // {
  //   ID: "1303",
  //   "Name English": "Shahid Navab-e Safav",
  //   "Name Persian": "شهید نواب صفوی",
  //   Latitude: "35.6950338801135",
  //   Longitude: "51.37839426529634",
  //   "Line(s)": "7",
  //   Previous: "1302",
  //   Next: "131",
  //   "Is Active": "T",
  // },
  {
    ID: "131",
    "Name English": "Rudaki",
    "Name Persian": "رودکی",
    Latitude: "35.68780000",
    Longitude: "51.37960000",
    "Line(s)": "7",
    Previous: "45",
    Next: "132",
    "Is Active": "T",
  },
  {
    ID: "132",
    "Name English": "Komeyl",
    "Name Persian": "کمیل",
    Latitude: "35.68140000",
    Longitude: "51.38010000",
    "Line(s)": "7",
    Previous: "131",
    Next: "133",
    "Is Active": "T",
  },
  {
    ID: "133",
    "Name English": "Beryanak",
    "Name Persian": "بریانک",
    Latitude: "35.67100000",
    Longitude: "51.38170000",
    "Line(s)": "7",
    Previous: "132",
    Next: "134",
    "Is Active": "T",
  },
  {
    ID: "134",
    "Name English": "Helal-e Ahmar",
    "Name Persian": "هلال احمر",
    Latitude: "35.66780000",
    Longitude: "51.38710000",
    "Line(s)": "7",
    Previous: "133",
    Next: "66",
    "Is Active": "T",
  },
  {
    ID: "135",
    "Name English": "Mowlavi",
    "Name Persian": "مولوی",
    Latitude: "35.6692591578812",
    Longitude: "51.42880803435814",
    "Line(s)": "7",
    Previous: "18",
    Next: "136",
    "Is Active": "T",
  },
  {
    ID: "136",
    "Name English": "Meydan-e Ghiam",
    "Name Persian": "میدان قیام",
    Latitude: "35.66973248853759",
    Longitude: "51.43647518646082",
    "Line(s)": "7",
    Previous: "135",
    Next: "115",
    "Is Active": "T",
  },
  {
    ID: "137",
    "Name English": "Chehel Tan-e Doulab",
    "Name Persian": "چهل تن دولاب (بزرگراه شهید محلاتی)",
    Latitude: "35.66790746668022",
    Longitude: "51.46243395539341",
    "Line(s)": "7",
    Previous: "115",
    Next: "138",
    "Is Active": "T",
  },
  {
    ID: "138",
    "Name English": "Ahang",
    "Name Persian": "آهنگ",
    Latitude: "35.66921497579869",
    Longitude: "51.47219893360183",
    "Line(s)": "7",
    Previous: "137",
    Next: "139",
    "Is Active": "T",
  },
  {
    ID: "139",
    "Name English": "Basij",
    "Name Persian": "بسیج",
    Latitude: "35.6666383097794",
    Longitude: "51.49069604720057",
    "Line(s)": "7",
    Previous: "138",
    Next: "140",
    "Is Active": "T",
  },
  {
    ID: "140",
    "Name English": "Varzeshgah-e Takhti",
    "Name Persian": "ورزشگاه تختی",
    Latitude: "35.6639952",
    Longitude: "51.5149543",
    "Line(s)": "7",
    Previous: "139",
    Next: "-1",
    "Is Active": "F",
  },
];
