
const products = [
  // FRUGT
  {
    name: "Bananer",
    plu: "406",
    categories: ["frugt"],
    generalDifficulty: 1,
    image: "Photos/Fruits/BananaPhoto.png",
    active: true
  },

  // BAGERI
  {
    name: "Minipizza med pepperoni",
    plu: "4072",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Pizzasnegl",
    plu: "2217",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Mørk baguette",
    plu: "2106",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Pølsehorn",
    plu: "4403",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Surdejsbaguette",
    plu: "2556",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Lys baguette",
    plu: "2201",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Kanelstang",
    plu: "2400",
    categories: ["bageri"],
    generalDifficulty: 2,
    image: "Photos/Bakery/KangelstangPhoto.png",
    active: true
  },
  {
    name: "Brunsviger-sneglestang",
    plu: "4404",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Kanelsnegl",
    plu: "2300",
    categories: ["bageri"],
    generalDifficulty: 1,
    image: "Photos/Bakery/KangelsneglPhoto.png",
    active: true
  },
  {
    name: "Cremesnegl",
    plu: "2116",
    categories: ["bageri"],
    image: "Photos/Bakery/CremesneglPhoto.png",
    active: true
  },
  {
    name: "Onsdagssnegl",
    plu: "3509",
    categories: ["bageri"],
    generalDifficulty: 3,
    image: "Photos/Bakery/Onsdagssnegl.png",
    active: true
  },
  {
    name: "Thebirkes",
    plu: "2310",
    categories: ["bageri"],
    generalDifficulty: 2,
    image: "Photos/Bakery/Tebirkes.png",
    active: true
  },
  {
    name: "Spandauer med creme",
    plu: "2315",
    categories: ["bageri"],
    generalDifficulty: 2,
    image: "Photos/Bakery/Spandauermedcreme.png",
    active: true
  },
  {
    name: "Kærnemælkshorn",
    plu: "2325",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Halloweenbolle med creme",
    plu: "4405",
    categories: ["bageri", "halloween"],
    image: "Photos/Bakery/Halloweenbollemedcreme.png",
    active: true
  },
  {
    name: "Halloweenbolle med hindbær",
    plu: "4108",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Kardemommesnurre",
    plu: "1114",
    categories: ["bageri"],
    generalDifficulty: 3,
    image: "Photos/Bakery/Kardemommesnurre.png",
    active: true
  },
  {
    name: "Rosenbrød",
    plu: "1610",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Grødbrød",
    plu: "2219",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Mormorbrød",
    plu: "2123",
    categories: ["bageri"],
    image: "Photos/Bakery/Mormorbrød.png",
    active: true
  },
  {
    name: "Trekornsbrød",
    plu: "2140",
    categories: ["bageri"],
    generalDifficulty: 1,
    image: "Photos/Bakery/Trekornsbrød.png",
    active: true
  },
  {
    name: "Formbrød",
    plu: "2150",
    categories: ["bageri"],
    generalDifficulty: 3,
    image: "Photos/Bakery/Formbrød.png",
    active: true
  },
  {
    name: "Skagensbrød",
    plu: "1111",
    categories: ["bageri"],
    image: "Photos/Bakery/Skagensbrød.png",
    active: true
  },
  {
    name: "Grov birkes",
    plu: "2311",
    categories: ["bageri"],
    generalDifficulty: 2,
    image: "Photos/Bakery/Grovbirkes.png",
    active: true
  },
  {
    name: "Gulerodsbolle",
    plu: "2554",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Stykker",
    plu: "2012",
    categories: ["bageri"],
    generalDifficulty: 1,
    image: "Photos/Bakery/Stykker.png",
    active: true
  },
  {
    name: "Gourmet rugbrød",
    plu: "2517",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Softkerne rugbrød",
    plu: "1046",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Chokoladebolle",
    plu: "1006",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false
  },
  {
    name: "Tebolle",
    plu: "2023",
    categories: ["bageri"],
    generalDifficulty: 2,
    image: "Photos/Bakery/Tebolle.png",
    active: true
  },
  {
    name: "Brunsvigerkagemand med marcipanbånd og slik",
    plu: "2525",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false // In rotation but never have had to use it in 10 months maybe add later
  },
  {
    name: "Brunsvigerkagemand med marcipanbånd uden slik",
    plu: "2422",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
  {
    name: "Brunsvigerkagemand med slik uden marcipanbånd",
    plu: "2520",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
  {
    name: "Kagemand med marcipanbånd og slik",
    plu: "2050",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
  {
    name: "Kagemand med slik uden marcipanbånd",
    plu: "2055",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
  {
    name: "Wienerfirkantkagemand med marcipanbånd og slik",
    plu: "4069",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
  {
    name: "Wienerfirkantkagemand med marcipanbånd uden slik",
    plu: "4071",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
  {
    name: "Wienerfirkantkagemand med slik uden marcipanbånd",
    plu: "4070",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
  {
    name: "Kagemand med smør-marcipanbånd uden slik",
    plu: "2423",
    categories: ["bageri"],
    generalDifficulty: null,
    image: null,
    active: false //same
  },
    {
    name: "Græskar", 
    plu: "504", // Just a guess icl
    categories: ["halloween"],
    generalDifficulty: null,
    image: "Photos/Halloween/Græskar.png",
    active: true
  },
    {
    name: "Pynte græskar",
    plu: "501",
    categories: ["halloween"],
    generalDifficulty: null,
    image: "Photos/Halloween/Pyntegræskar.png",
    active: true
  },
    {
    name: "Hokkaido",
    plu: "476",
    categories: ["halloween","frugt"],
    generalDifficulty: null,
    image: "Photos/Fruits/Hokkaido.png",
    active: true
  },
] 
