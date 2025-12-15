import { GraphData, ColorPalette } from './types';

export const COLOR_PALETTE: ColorPalette = {
  "action": "#16A085",
  "anime": "#E91E63",
  "anime-influenced": "#E91E63",
  "blaxploitation": "#9B59B6",
  "comedy": "#F39C12",
  "crime": "#7F8C8D",
  "default": "#7F8C8D",
  "eastern-action": "#8E44AD",
  "exploitation": "#E74C3C",
  "female-action": "#D35400",
  "female-ensemble": "#D35400",
  "female-lead": "#D35400",
  "film-noir": "#34495E",
  "foundation": "#95A5A6",
  "grindhouse": "#2C3E50",
  "kill-bill-core": "#FFD700",
  "kung-fu": "#F4D03F",
  "mentorship": "#16A085",
  "modern-action": "#2980B9",
  "modern-revenge": "#3498DB",
  "neo-grindhouse": "#C0392B",
  "noir": "#34495E",
  "practical-effects": "#27AE60",
  "psychological": "#9B59B6",
  "revenge": "#C0392B",
  "revisionist": "#BDC3C7",
  "samurai": "#4A90E2",
  "sci-fi-action": "#1ABC9C",
  "spaghetti-western": "#FF6B35",
  "spy": "#27AE60",
  "superhero": "#E74C3C",
  "western": "#D35400",
  "wuxia": "#8E44AD",
  "yakuza": "#8E44AD"
};

const RAW_NODES = [
  {
    "id": "a-fistful-of-dollars-1964",
    "name": "A Fistful of Dollars",
    "fullTitle": "A Fistful of Dollars (1964)",
    "year": 1964,
    "director": "Sergio Leone",
    "country": "Italy|Spain|West Germany",
    "genres": [
      "action",
      "western",
      "drama"
    ],
    "subclouds": [
      "spaghetti-western",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/lBwOEpwVeUAmrmglcstnaGcJq3Y.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Yojimbo (1961)"
    ],
    "influences": [
      "Kill Bill Vol. 2 (2004)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "anna-2019",
    "name": "Anna",
    "fullTitle": "Anna (2019)",
    "year": 2019,
    "director": "Luc Besson",
    "country": "USA|France|Germany",
    "genres": [
      "action",
      "thriller",
      "spy"
    ],
    "subclouds": [
      "modern-revenge",
      "action",
      "spy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/2U0oAVAE0lDRhNmJPPYhDW9kQ8t.jpg",
    "color": "#3498DB",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol 1 (2003)",
      "La Femme Nikita (1990)"
    ],
    "influences": [
      "Female spy protagonist; revenge narrative"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "atomic-blonde-2017",
    "name": "Atomic Blonde",
    "fullTitle": "Atomic Blonde (2017)",
    "year": 2017,
    "director": "David Leitch",
    "country": "USA|UK",
    "genres": [
      "action",
      "thriller",
      "spy"
    ],
    "subclouds": [
      "modern-revenge",
      "action",
      "spy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg",
    "color": "#3498DB",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol. 1 (2003)",
      "John Wick (2014)"
    ],
    "influences": [
      "Female action lead; hyper-stylized combat sequences"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "birds-of-prey-2020",
    "name": "Birds of Prey",
    "fullTitle": "Birds of Prey (2020)",
    "year": 2020,
    "director": "Cathy Yan",
    "country": "USA",
    "genres": [
      "action",
      "crime",
      "superhero"
    ],
    "subclouds": [
      "modern-action",
      "female-ensemble"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Gunpowder Milkshake lineage",
      "Kill Bill"
    ],
    "influences": [
      "Superhero action films"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "bitch-slap-2009",
    "name": "Bitch Slap",
    "fullTitle": "Bitch Slap (2009)",
    "year": 2009,
    "director": "Rick Jacobson",
    "country": "USA",
    "genres": [
      "action",
      "revenge",
      "exploitation"
    ],
    "subclouds": [
      "neo-grindhouse",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/uwpDERT9drTPhvoV8cWzuV6xhdt.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influences": [
      "Grindhouse (2007)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "black-mama-white-mama-1972",
    "name": "Black Mama White Mama",
    "fullTitle": "Black Mama White Mama (1972)",
    "year": 1972,
    "director": "Eddie Romero",
    "country": "USA|Philippines",
    "genres": [
      "action",
      "exploitation",
      "thriller"
    ],
    "subclouds": [
      "exploitation",
      "female-action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/pwTnHe9WBBWvaivTNeuuy1tUzLh.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "Prison exploitation cinema"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "blacula-1972",
    "name": "Blacula",
    "fullTitle": "Blacula (1972)",
    "year": 1972,
    "director": "William Crain",
    "country": "USA",
    "genres": [
      "horror",
      "blaxploitation",
      "action"
    ],
    "subclouds": [
      "blaxploitation",
      "exploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/yLqtFeZfRPoUUzzro3ogCdobB6q.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "Vampire film tradition"
    ],
    "influences": [
      "Horror-blaxploitation hybrids"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "cleopatra-jones-1973",
    "name": "Cleopatra Jones",
    "fullTitle": "Cleopatra Jones (1973)",
    "year": 1973,
    "director": "Jack Starrett",
    "country": "USA",
    "genres": [
      "action",
      "crime",
      "thriller"
    ],
    "subclouds": [
      "blaxploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/j13LI9r1Jim2XPvmJUvwGFtD0ag.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "Shaft (1971)",
      "Coffy (1973)"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "Atomic Blonde (2017)"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "coffy-1973",
    "name": "Coffy",
    "fullTitle": "Coffy (1973)",
    "year": 1973,
    "director": "Jack Hill",
    "country": "USA",
    "genres": [
      "action",
      "revenge",
      "drama"
    ],
    "subclouds": [
      "blaxploitation",
      "revenge",
      "exploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/sN00Cvlahl6JLC2TAUBL0jZOqD3.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "Shaft (1971)"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "crouching-tiger-hidden-dragon-sword-of-destiny-2016",
    "name": "Crouching Tiger Hidden Dragon: Sword of Destiny",
    "fullTitle": "Crouching Tiger Hidden Dragon: Sword of Destiny (2016)",
    "year": 2016,
    "director": "Yuen Woo-ping",
    "country": "China|Hong Kong|USA",
    "genres": [
      "action",
      "fantasy",
      "martial-arts"
    ],
    "subclouds": [
      "wuxia",
      "eastern-action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/te3aeAyhkfqgpa5BSTq3oNxGqQD.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Crouching Tiger Hidden Dragon (2000)"
    ],
    "influences": [
      "Modern action cinema"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "day-of-anger-1969",
    "name": "Day of Anger",
    "fullTitle": "Day of Anger (1969)",
    "year": 1969,
    "director": "Tonino Valerii",
    "country": "Italy",
    "genres": [
      "action",
      "western",
      "drama"
    ],
    "subclouds": [
      "spaghetti-western"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/2TYZtE3BXP1LvktbkMb45mbd42G.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Spaghetti western tradition"
    ],
    "influences": [
      "Kill Bill Vol 2 (2004)",
      "John Wick (2014)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "dead-leaves-2004",
    "name": "Dead Leaves",
    "fullTitle": "Dead Leaves (2004)",
    "year": 2004,
    "director": "Imaishi Hiroyuki",
    "country": "Japan",
    "genres": [
      "anime",
      "action",
      "sci-fi"
    ],
    "subclouds": [
      "anime",
      "action",
      "exploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/jpsqSocm0o978PRChacBoTlTida.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol 1 (2003)",
      "Samurai Champloo (2004)"
    ],
    "influences": [
      "Stylized action animation; anime influence on modern revenge"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "deadpool-2016",
    "name": "Deadpool",
    "fullTitle": "Deadpool (2016)",
    "year": 2016,
    "director": "Tim Miller",
    "country": "USA",
    "genres": [
      "action",
      "comedy",
      "superhero"
    ],
    "subclouds": [
      "modern-action",
      "comedy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "John Wick evolution"
    ],
    "influences": [
      "Comic book adaptations"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "death-rides-a-horse-1967",
    "name": "Death Rides a Horse",
    "fullTitle": "Death Rides a Horse (1967)",
    "year": 1967,
    "director": "Giulio Petroni",
    "country": "Italy",
    "genres": [
      "western",
      "action",
      "revenge"
    ],
    "subclouds": [
      "spaghetti-western",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/qjvb8IYBaqizU1GG1qmGtMJpkBK.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Spaghetti western tradition"
    ],
    "influences": [
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "django-1966",
    "name": "Django",
    "fullTitle": "Django (1966)",
    "year": 1966,
    "director": "Sergio Leone",
    "country": "Italy",
    "genres": [
      "western",
      "action",
      "drama"
    ],
    "subclouds": [
      "spaghetti-western"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/vs4vieNstSEfbgLFEelXXOPvr6h.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "A Fistful of Dollars (1964)"
    ],
    "influences": [
      "The Good the Bad and the Ugly (1966)",
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "enter-the-dragon-1973",
    "name": "Enter the Dragon",
    "fullTitle": "Enter the Dragon (1973)",
    "year": 1973,
    "director": "Robert Clouse",
    "country": "USA|Hong Kong",
    "genres": [
      "action",
      "martial-arts",
      "drama"
    ],
    "subclouds": [
      "kung-fu",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/fyrh2ULEcmLpGTVLPQqFW45hqr5.jpg",
    "color": "#F4D03F",
    "influenceNotes": "",
    "influencedBy": [
      "The Green Hornet (1966)"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "extraction-2020",
    "name": "Extraction",
    "fullTitle": "Extraction (2020)",
    "year": 2020,
    "director": "Sam Hargrave",
    "country": "USA|India",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "modern-action",
      "practical-effects"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "John Wick evolution"
    ],
    "influences": [
      "Action thrillers"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "faster-2010",
    "name": "Faster",
    "fullTitle": "Faster (2010)",
    "year": 2010,
    "director": "George Tillman Jr.",
    "country": "USA",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "modern-revenge",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/AsUeaXrhw4oscCSjUZ6heh1pVvd.jpg",
    "color": "#3498DB",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol 2 (2004)",
      "Death Wish (1974)"
    ],
    "influences": [
      "John Wick (2014)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "faster-pussycat-kill-kill-1965",
    "name": "Faster Pussycat Kill Kill",
    "fullTitle": "Faster Pussycat Kill Kill (1965)",
    "year": 1965,
    "director": "Russ Meyer",
    "country": "USA",
    "genres": [
      "action",
      "exploitation",
      "comedy"
    ],
    "subclouds": [
      "exploitation",
      "grindhouse",
      "female-action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/2hIHFk52SZ9XsZB4U85RUq36BT4.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "Russ Meyer exploitation tradition"
    ],
    "influences": [
      "Vixen! (1968)",
      "Kill Bill Vol 1 (2003)",
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "female-prisoner-scorpion-1972",
    "name": "Female Prisoner Scorpion",
    "fullTitle": "Female Prisoner Scorpion (1972)",
    "year": 1972,
    "director": "Shunya Ito",
    "country": "Japan",
    "genres": [
      "action",
      "revenge",
      "exploitation"
    ],
    "subclouds": [
      "exploitation",
      "revenge",
      "samurai"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/q2PYJshLAXKxd2tsXqgifhbkfAp.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "Japanese women-in-prison tradition"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "fists-of-fury-1972",
    "name": "Fists of Fury",
    "fullTitle": "Fists of Fury (1972)",
    "year": 1972,
    "director": "Lo Wei",
    "country": "Hong Kong",
    "genres": [
      "action",
      "martial-arts",
      "drama"
    ],
    "subclouds": [
      "kung-fu",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/dlcipCOa9hlfBBz7kCAyjsf3q0E.jpg",
    "color": "#F4D03F",
    "influenceNotes": "",
    "influencedBy": [
      "Bruce Lee cinema tradition"
    ],
    "influences": [
      "Enter the Dragon (1973)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "for-a-few-dollars-more-1965",
    "name": "For a Few Dollars More",
    "fullTitle": "For a Few Dollars More (1965)",
    "year": 1965,
    "director": "Sergio Leone",
    "country": "Italy",
    "genres": [
      "western",
      "action",
      "drama"
    ],
    "subclouds": [
      "spaghetti-western"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/ooqASvA7qxlTVKL3KwOzBwy57Dh.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "A Fistful of Dollars (1964)"
    ],
    "influences": [
      "Django (1966)",
      "The Good the Bad and the Ugly (1966)",
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "foxy-brown-1974",
    "name": "Foxy Brown",
    "fullTitle": "Foxy Brown (1974)",
    "year": 1974,
    "director": "Jack Hill",
    "country": "USA",
    "genres": [
      "action",
      "revenge",
      "drama"
    ],
    "subclouds": [
      "blaxploitation",
      "revenge",
      "exploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/lAeEDcBgEqnxl9l7n7i4936ERi8.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "Coffy (1973)"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "game-of-death-1978",
    "name": "Game of Death",
    "fullTitle": "Game of Death (1978)",
    "year": 1978,
    "director": "Robert Clouse",
    "country": "USA",
    "genres": [
      "action",
      "martial-arts",
      "drama"
    ],
    "subclouds": [
      "kung-fu",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/c6jgLHaQpdIPH1rC94KkjAqgE7O.jpg",
    "color": "#F4D03F",
    "influenceNotes": "",
    "influencedBy": [
      "Enter the Dragon (1973)"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "ghost-in-the-shell-2017",
    "name": "Ghost in the Shell",
    "fullTitle": "Ghost in the Shell (2017)",
    "year": 2017,
    "director": "Rupert Sanders",
    "country": "USA|Japan",
    "genres": [
      "action",
      "sci-fi",
      "thriller"
    ],
    "subclouds": [
      "sci-fi-action",
      "anime-influenced"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/9gC88zYUBARRSThcG93MvW14sqx.jpg",
    "color": "#1ABC9C",
    "influenceNotes": "",
    "influencedBy": [
      "Ghost in the Shell anime tradition",
      "Kill Bill Vol 1 (2003)"
    ],
    "influences": [
      "Anime live-action adaptations"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "gilda-1946",
    "name": "Gilda",
    "fullTitle": "Gilda (1946)",
    "year": 1946,
    "director": "Charles Vidor",
    "country": "USA",
    "genres": [
      "noir",
      "drama",
      "crime"
    ],
    "subclouds": [
      "noir",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/46eKPjoWEyNBAQKDoXEcDFBcaUw.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "American film noir tradition"
    ],
    "influences": [
      "Point Blank (1967)",
      "Kiss Me Deadly (1955)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "gun-crazy-1950",
    "name": "Gun Crazy",
    "fullTitle": "Gun Crazy (1950)",
    "year": 1950,
    "director": "Joseph H. Lewis",
    "country": "USA",
    "genres": [
      "noir",
      "crime",
      "action"
    ],
    "subclouds": [
      "noir",
      "crime"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/kC1IIitCJTZLwZyuQnKw4zaOaXc.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Film noir tradition"
    ],
    "influences": [
      "Bonnie and Clyde (1967)",
      "Tarantino cinema"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "gunpowder-milkshake-2021",
    "name": "Gunpowder Milkshake",
    "fullTitle": "Gunpowder Milkshake (2021)",
    "year": 2021,
    "director": "Navot Papushado",
    "country": "USA|UK",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "neo-grindhouse",
      "modern-revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/56ofGPMOZCwlTjTao5fB7vnGOoj.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol 1 (2003)",
      "Kill Bill Vol 2 (2004)",
      "John Wick (2014)"
    ],
    "influences": [
      "All-female action ensemble; grindhouse homage"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "harakiri-1962",
    "name": "Harakiri",
    "fullTitle": "Harakiri (1962)",
    "year": 1962,
    "director": "Masaki Kobayashi",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/3nPwMd3KviJWaHzG9fZCqlwWMas.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Japanese cinema traditions"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "haywire-2011",
    "name": "Haywire",
    "fullTitle": "Haywire (2011)",
    "year": 2011,
    "director": "Steven Soderbergh",
    "country": "USA|UK",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "modern-revenge",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/c9fJ0dYC30NnE9k2p61c0dqlZqW.jpg",
    "color": "#3498DB",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol. 1 (2003)",
      "The Professional (1994)"
    ],
    "influences": [
      "Atomic Blonde (2017)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "i-drink-your-blood-1970",
    "name": "I Drink Your Blood",
    "fullTitle": "I Drink Your Blood (1970)",
    "year": 1970,
    "director": "David E. Durston",
    "country": "USA",
    "genres": [
      "horror",
      "exploitation",
      "drama"
    ],
    "subclouds": [
      "exploitation",
      "grindhouse"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/vmqUMajGp8WTMvUexATvfabY7xx.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "B-horror films"
    ],
    "influences": [
      "Bitch Slap (2009)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "ichi-the-killer-2001",
    "name": "Ichi the Killer",
    "fullTitle": "Ichi the Killer (2001)",
    "year": 2001,
    "director": "Takashi Miike",
    "country": "Japan",
    "genres": [
      "action",
      "thriller",
      "horror"
    ],
    "subclouds": [
      "exploitation",
      "revenge",
      "anime"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/k8j4YLZlda98dqp9ErymKzjYowG.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "Oldboy (2003)"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "Bitch Slap (2009)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "in-a-lonely-place-1950",
    "name": "In a Lonely Place",
    "fullTitle": "In a Lonely Place (1950)",
    "year": 1950,
    "director": "Nicholas Ray",
    "country": "USA",
    "genres": [
      "noir",
      "drama",
      "crime"
    ],
    "subclouds": [
      "noir"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/vbdgtwzLOpE6MppZlyYChMagvQq.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Film noir tradition"
    ],
    "influences": [
      "Point Blank (1967)",
      "Tarantino cinema"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "john-wick-2014",
    "name": "John Wick",
    "fullTitle": "John Wick (2014)",
    "year": 2014,
    "director": "Chad Stahelski|David Leitch",
    "country": "USA|Canada",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "modern-revenge",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    "color": "#3498DB",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influences": [
      "Atomic Blonde (2017)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "johnny-guitar-1954",
    "name": "Johnny Guitar",
    "fullTitle": "Johnny Guitar (1954)",
    "year": 1954,
    "director": "Nicholas Ray",
    "country": "USA",
    "genres": [
      "western",
      "drama",
      "action"
    ],
    "subclouds": [
      "spaghetti-western"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/bap37yOCwcR9x4YDsNUaSo9nIp9.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Western cinema tradition"
    ],
    "influences": [
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "kate-2021",
    "name": "Kate",
    "fullTitle": "Kate (2021)",
    "year": 2021,
    "director": "Cedric Nicolas-Troyan",
    "country": "USA",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "modern-action",
      "female-lead",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/uJgdT1boTSP0dDIjdTgGleg71l4.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Atomic Blonde lineage",
      "Anna lineage"
    ],
    "influences": [
      "Female action revenge thrillers"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "kill-bill-vol-1-2003",
    "name": "Kill Bill: Vol. 1",
    "fullTitle": "Kill Bill: Vol. 1 (2003)",
    "year": 2003,
    "director": "Quentin Tarantino",
    "country": "USA",
    "genres": [
      "action",
      "revenge",
      "martial-arts"
    ],
    "subclouds": [
      "kill-bill-core"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    "color": "#FFD700",
    "influenceNotes": "",
    "influencedBy": [
      "Lady Snowblood (1973)",
      "Game of Death (1978)",
      "Shogun Assassin (1980)",
      "The Good the Bad and the Ugly (1966)",
      "Rio Bravo (1959)",
      "Coffy (1973)",
      "Vixen! (1968)",
      "Sword of Doom (1966)",
      "Lone Wolf and Cub (1972)",
      "Harakiri (1962)",
      "Enter the Dragon (1973)",
      "The 36th Chamber of Shaolin (1978)",
      "Foxy Brown (1974)",
      "The Mack (1973)",
      "I Drink Your Blood (1970)"
    ],
    "influences": [
      "Bitch Slap (2009)",
      "Haywire (2011)",
      "Atomic Blonde (2017)",
      "Gunpowder Milkshake (2021)",
      "John Wick (2014)",
      "Kingsman (2015)",
      "Anna (2019)",
      "Faster (2010)",
      "Dead Leaves (2004)",
      "Ichi the Killer (2001)"
    ],
    "influenceCount": 25,
    "size": 60
  },
  {
    "id": "kill-bill-vol-2-2004",
    "name": "Kill Bill: Vol. 2",
    "fullTitle": "Kill Bill: Vol. 2 (2004)",
    "year": 2004,
    "director": "Quentin Tarantino",
    "country": "USA",
    "genres": [
      "action",
      "revenge",
      "western"
    ],
    "subclouds": [
      "kill-bill-core"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/vr9w5OrpAPjCdccZ6xheBqGkxwM.jpg",
    "color": "#FFD700",
    "influenceNotes": "",
    "influencedBy": [
      "The Good the Bad and the Ugly (1966)",
      "Rio Bravo (1959)",
      "For a Few Dollars More (1965)",
      "Django (1966)",
      "Death Rides a Horse (1967)",
      "The Big Gundown (1966)",
      "Johnny Guitar (1954)",
      "Lady Snowblood (1973)",
      "Game of Death (1978)"
    ],
    "influences": [
      "Bitch Slap (2009)",
      "Haywire (2011)",
      "Atomic Blonde (2017)",
      "Gunpowder Milkshake (2021)",
      "John Wick (2014)"
    ],
    "influenceCount": 14,
    "size": 38
  },
  {
    "id": "kingsman-2015",
    "name": "Kingsman",
    "fullTitle": "Kingsman (2015)",
    "year": 2015,
    "director": "Matthew Vaughn",
    "country": "USA|UK",
    "genres": [
      "action",
      "spy",
      "comedy"
    ],
    "subclouds": [
      "modern-revenge",
      "action",
      "spy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
    "color": "#3498DB",
    "influenceNotes": "",
    "influencedBy": [
      "Kill Bill Vol 1 (2003)",
      "James Bond tradition"
    ],
    "influences": [
      "Stylized action sequences with dark humor"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "kiss-me-deadly-1955",
    "name": "Kiss Me Deadly",
    "fullTitle": "Kiss Me Deadly (1955)",
    "year": 1955,
    "director": "Robert Aldrich",
    "country": "USA",
    "genres": [
      "noir",
      "crime",
      "action"
    ],
    "subclouds": [
      "noir",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/z7me91nrpWLHY1mZOB2v20cK0zY.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "American film noir tradition"
    ],
    "influences": [
      "Point Blank (1967)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "kung-fu-hustle-2004",
    "name": "Kung Fu Hustle",
    "fullTitle": "Kung Fu Hustle (2004)",
    "year": 2004,
    "director": "Stephen Chow",
    "country": "Hong Kong",
    "genres": [
      "action",
      "comedy",
      "martial-arts"
    ],
    "subclouds": [
      "kung-fu",
      "action",
      "comedy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/exbyTbrvRUDKN2mcNEuVor4VFQW.jpg",
    "color": "#F4D03F",
    "influenceNotes": "",
    "influencedBy": [
      "Hong Kong action tradition",
      "The 36th Chamber of Shaolin (1978)"
    ],
    "influences": [
      "Modern action comedies"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "la-femme-nikita-1990",
    "name": "La Femme Nikita",
    "fullTitle": "La Femme Nikita (1990)",
    "year": 1990,
    "director": "Luc Besson",
    "country": "France",
    "genres": [
      "action",
      "thriller",
      "spy"
    ],
    "subclouds": [
      "action",
      "female-lead",
      "spy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/1ulQDewUG4KKHOhpXdGKm3GdLFq.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "French action cinema tradition"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "lady-snowblood-1973",
    "name": "Lady Snowblood",
    "fullTitle": "Lady Snowblood (1973)",
    "year": 1973,
    "director": "Toshiyuki Kubooka",
    "country": "Japan",
    "genres": [
      "action",
      "revenge",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "revenge",
      "exploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/wkcbaqCoYEXDUnSQ6NTnB2C7H05.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Lone Wolf and Cub (1972)"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "lady-snowblood-2-love-song-of-vengeance-1974",
    "name": "Lady Snowblood 2: Love Song of Vengeance",
    "fullTitle": "Lady Snowblood 2: Love Song of Vengeance (1974)",
    "year": 1974,
    "director": "Toshiyuki Kubooka",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "revenge"
    ],
    "subclouds": [
      "samurai",
      "revenge",
      "exploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/jmORZTEqJuTIJ28XAF3jnQUnUyT.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Lady Snowblood (1973)"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "lady-vengeance-2005",
    "name": "Lady Vengeance",
    "fullTitle": "Lady Vengeance (2005)",
    "year": 2005,
    "director": "Park Chan-wook",
    "country": "South Korea",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "modern-action",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/3Oy3iLMqD79us2iAUD6fKqWebYU.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Sympathy for Mr. Vengeance (2002)",
      "Oldboy (2003)"
    ],
    "influences": [
      "Contemporary revenge thrillers"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "lock-stock-and-two-smoking-barrels-1998",
    "name": "Lock Stock and Two Smoking Barrels",
    "fullTitle": "Lock Stock and Two Smoking Barrels (1998)",
    "year": 1998,
    "director": "Guy Ritchie",
    "country": "UK",
    "genres": [
      "action",
      "crime",
      "comedy"
    ],
    "subclouds": [
      "action",
      "crime",
      "comedy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/6pJB2t3MbQUy9m5pFIBHXLqnqNd.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Tarantino influence"
    ],
    "influences": [
      "Snatch (2000)",
      "Sherlock Holmes (2009)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "lone-wolf-and-cub-1972",
    "name": "Lone Wolf and Cub",
    "fullTitle": "Lone Wolf and Cub (1972)",
    "year": 1972,
    "director": "Kenji Misumi",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "revenge"
    ],
    "subclouds": [
      "samurai",
      "revenge",
      "anime"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/a33RihlBiOhNi4YffwofJxVqIzn.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Harakiri (1962)"
    ],
    "influences": [
      "Lady Snowblood (1973)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "machete-2010",
    "name": "Machete",
    "fullTitle": "Machete (2010)",
    "year": 2010,
    "director": "Robert Rodriguez",
    "country": "USA",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "neo-grindhouse",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/dcPSm1rGEFdiEc7DaKz0t5kb66b.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Rodriguez grindhouse tradition"
    ],
    "influences": [
      "Action thrillers"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "machete-kills-2013",
    "name": "Machete Kills",
    "fullTitle": "Machete Kills (2013)",
    "year": 2013,
    "director": "Robert Rodriguez",
    "country": "USA",
    "genres": [
      "action",
      "thriller",
      "comedy"
    ],
    "subclouds": [
      "neo-grindhouse",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/3i4UgSZmAJXt6Euy5azvknmzsm9.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Machete (2010)"
    ],
    "influences": [
      "Action comedies"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "massacre-time-1966",
    "name": "Massacre Time",
    "fullTitle": "Massacre Time (1966)",
    "year": 1966,
    "director": "Marino Girolami",
    "country": "Italy",
    "genres": [
      "action",
      "western",
      "revenge"
    ],
    "subclouds": [
      "spaghetti-western",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/vR071DK3PNAkApOTkPW4PPGBdCQ.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Spaghetti western tradition"
    ],
    "influences": [
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "mission-impossible---fallout-2018",
    "name": "Mission: Impossible - Fallout",
    "fullTitle": "Mission: Impossible - Fallout (2018)",
    "year": 2018,
    "director": "Christopher McQuarrie",
    "country": "USA|UK|New Zealand",
    "genres": [
      "action",
      "spy",
      "thriller"
    ],
    "subclouds": [
      "modern-action",
      "spy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Mission: Impossible - Rogue Nation (2015)"
    ],
    "influences": [
      "Mission: Impossible - Ghost Protocol evolution"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "mission-impossible---rogue-nation-2015",
    "name": "Mission: Impossible - Rogue Nation",
    "fullTitle": "Mission: Impossible - Rogue Nation (2015)",
    "year": 2015,
    "director": "Christopher McQuarrie",
    "country": "USA|UK|Austria",
    "genres": [
      "action",
      "spy",
      "thriller"
    ],
    "subclouds": [
      "modern-action",
      "spy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/fRJLXQBHK2wyznK5yZbO7vmsuVK.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Mission: Impossible tradition"
    ],
    "influences": [
      "Mission: Impossible - Fallout (2018)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "navajo-joe-1966",
    "name": "Navajo Joe",
    "fullTitle": "Navajo Joe (1966)",
    "year": 1966,
    "director": "Enzo G. Castellari",
    "country": "Italy|USA",
    "genres": [
      "action",
      "western",
      "revenge"
    ],
    "subclouds": [
      "spaghetti-western",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/hxrsKfgsPlQozvANkZy84lDRKFv.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Spaghetti western tradition"
    ],
    "influences": [
      "Kill Bill Vol 2 (2004)",
      "Death Wish (1974)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "oldboy-2003",
    "name": "Oldboy",
    "fullTitle": "Oldboy (2003)",
    "year": 2003,
    "director": "Park Chan-wook",
    "country": "South Korea",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "modern-action",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Japanese manga adaptation"
    ],
    "influences": [
      "Ichi the Killer (2001)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "point-blank-1967",
    "name": "Point Blank",
    "fullTitle": "Point Blank (1967)",
    "year": 1967,
    "director": "John Boorman",
    "country": "USA|UK",
    "genres": [
      "crime",
      "neo-noir",
      "action"
    ],
    "subclouds": [
      "neo-grindhouse",
      "noir"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/4y8yNXdcP9KQJXd0cIUmQ0t3ezB.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "In a Lonely Place (1950)"
    ],
    "influences": [
      "Tarantino cinema",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "ready-player-one-2018",
    "name": "Ready Player One",
    "fullTitle": "Ready Player One (2018)",
    "year": 2018,
    "director": "Steven Spielberg",
    "country": "USA",
    "genres": [
      "action",
      "sci-fi",
      "adventure"
    ],
    "subclouds": [
      "sci-fi-action",
      "anime-influenced"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    "color": "#1ABC9C",
    "influenceNotes": "",
    "influencedBy": [
      "Anime",
      "Science fiction tradition",
      "Kill Bill Vol 1 (2003)"
    ],
    "influences": [
      "Sci-fi action films"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "rebecca-2020",
    "name": "Rebecca",
    "fullTitle": "Rebecca (2020)",
    "year": 2020,
    "director": "Ben Wheatley",
    "country": "USA|UK",
    "genres": [
      "thriller",
      "mystery",
      "drama"
    ],
    "subclouds": [
      "noir",
      "psychological"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/kGhllBArW7ImDycSMIG5bj6GEPL.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Point Blank neo-noir lineage"
    ],
    "influences": [
      "Psychological thrillers"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "red-sparrow-2018",
    "name": "Red Sparrow",
    "fullTitle": "Red Sparrow (2018)",
    "year": 2018,
    "director": "Francis Lawrence",
    "country": "USA|Russia",
    "genres": [
      "action",
      "spy",
      "thriller"
    ],
    "subclouds": [
      "modern-action",
      "spy",
      "female-lead"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/cdefNr6aS00IwVbSlxdFJnfmzKh.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Anna (2019) lineage"
    ],
    "influences": [
      "Contemporary spy thrillers"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "rio-bravo-1959",
    "name": "Rio Bravo",
    "fullTitle": "Rio Bravo (1959)",
    "year": 1959,
    "director": "Howard Hawks",
    "country": "USA",
    "genres": [
      "western",
      "action",
      "drama"
    ],
    "subclouds": [
      "spaghetti-western"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/4gI4KKmoi0d3yfsF71YU3S0I5t8.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Rio Grande (1950)"
    ],
    "influences": [
      "Kill Bill Vol. 2 (2004)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "samurai-rebellion-1967",
    "name": "Samurai Rebellion",
    "fullTitle": "Samurai Rebellion (1967)",
    "year": 1967,
    "director": "Masaki Kobayashi",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/bKySGFUTgsZyn5i7s5htMVy4Xd2.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Harakiri (1962)",
      "Yojimbo (1961)"
    ],
    "influences": [
      "Lady Snowblood (1973)",
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "sanjuro-1962",
    "name": "Sanjuro",
    "fullTitle": "Sanjuro (1962)",
    "year": 1962,
    "director": "Akira Kurosawa",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/zW47oIH3bc3ggmmmzTvKqM4Fqjk.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Japanese samurai tradition"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "se7en-1995",
    "name": "Se7en",
    "fullTitle": "Se7en (1995)",
    "year": 1995,
    "director": "David Fincher",
    "country": "USA",
    "genres": [
      "crime",
      "thriller",
      "noir"
    ],
    "subclouds": [
      "noir",
      "psychological"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "American film noir tradition"
    ],
    "influences": [
      "Modern thrillers",
      "Point Blank legacy"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "seven-samurai-1954",
    "name": "Seven Samurai",
    "fullTitle": "Seven Samurai (1954)",
    "year": 1954,
    "director": "Akira Kurosawa",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/lOMGc8bnSwQhS4XyE1S99uH8NXf.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Japanese samurai tradition"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "shaft-1971",
    "name": "Shaft",
    "fullTitle": "Shaft (1971)",
    "year": 1971,
    "director": "Gordon Parks",
    "country": "USA",
    "genres": [
      "action",
      "crime",
      "thriller"
    ],
    "subclouds": [
      "blaxploitation",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/yJChPuu2V339IiDPQDHeIh1SYpA.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "African-American action cinema tradition"
    ],
    "influences": [
      "Coffy (1973)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "shogun-assassin-1980",
    "name": "Shogun Assassin",
    "fullTitle": "Shogun Assassin (1980)",
    "year": 1980,
    "director": "Robert Houston",
    "country": "USA|Japan",
    "genres": [
      "action",
      "samurai",
      "revenge"
    ],
    "subclouds": [
      "samurai",
      "revenge",
      "grindhouse"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/t376p5q8zvhyQ2FOroytJsRvlL8.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Lone Wolf and Cub (1972)"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "snatch-2000",
    "name": "Snatch",
    "fullTitle": "Snatch (2000)",
    "year": 2000,
    "director": "Guy Ritchie",
    "country": "UK|USA",
    "genres": [
      "action",
      "crime",
      "comedy"
    ],
    "subclouds": [
      "action",
      "crime",
      "comedy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/kJZoAHq1SLDdWjeNGtlHAnGpmFV.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Lock Stock and Two Smoking Barrels (1998)"
    ],
    "influences": [
      "Action comedies"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "spy-game-2005",
    "name": "Spy Game",
    "fullTitle": "Spy Game (2005)",
    "year": 2005,
    "director": "Tony Scott",
    "country": "USA|UK",
    "genres": [
      "action",
      "thriller",
      "spy"
    ],
    "subclouds": [
      "modern-action",
      "spy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/6y8M1rxjKofQCRKKe6xeV91K2Fc.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Tony Scott action tradition"
    ],
    "influences": [
      "Mission: Impossible evolution"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "super-fly-1972",
    "name": "Super Fly",
    "fullTitle": "Super Fly (1972)",
    "year": 1972,
    "director": "Gordon Parks",
    "country": "USA",
    "genres": [
      "action",
      "crime",
      "drama"
    ],
    "subclouds": [
      "blaxploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/lCj4IZ9l8NfOEiM4zHq3BRF2LzX.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "Shaft (1971)"
    ],
    "influences": [
      "Truck Turner (1974)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "supervixens-1975",
    "name": "Supervixens",
    "fullTitle": "Supervixens (1975)",
    "year": 1975,
    "director": "Russ Meyer",
    "country": "USA",
    "genres": [
      "action",
      "exploitation",
      "comedy"
    ],
    "subclouds": [
      "exploitation",
      "grindhouse",
      "female-action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/ymlxw3Gt2F9PuWek9Nkf4zeUeLz.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "Faster Pussycat Kill Kill (1965)",
      "Vixen! (1968)"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "sweet-smell-of-success-1957",
    "name": "Sweet Smell of Success",
    "fullTitle": "Sweet Smell of Success (1957)",
    "year": 1957,
    "director": "Alexander Mackendrick",
    "country": "USA",
    "genres": [
      "noir",
      "crime",
      "drama"
    ],
    "subclouds": [
      "noir",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/akzvV8JasNrgEl5iAP9K6zPHGJe.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "American film noir tradition"
    ],
    "influences": [
      "Point Blank (1967)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "sword-of-destiny-2014",
    "name": "Sword of Destiny",
    "fullTitle": "Sword of Destiny (2014)",
    "year": 2014,
    "director": "James Wan",
    "country": "China|USA",
    "genres": [
      "action",
      "fantasy",
      "martial-arts"
    ],
    "subclouds": [
      "wuxia",
      "eastern-action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/te3aeAyhkfqgpa5BSTq3oNxGqQD.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Crouching Tiger tradition"
    ],
    "influences": [
      "Wuxia action films"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "sword-of-doom-1966",
    "name": "Sword of Doom",
    "fullTitle": "Sword of Doom (1966)",
    "year": 1966,
    "director": "Masaki Kobayashi",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/yjHbIihqpuAXlZVoPbWdqaukllB.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Harakiri (1962)"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "tattooed-swordsman-1966",
    "name": "Tattooed Swordsman",
    "fullTitle": "Tattooed Swordsman (1966)",
    "year": 1966,
    "director": "Masaki Kobayashi",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "yakuza"
    ],
    "posterUrl": "",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Harakiri (1962)"
    ],
    "influences": [
      "Lady Snowblood (1973)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "the-36th-chamber-of-shaolin-1978",
    "name": "The 36th Chamber of Shaolin",
    "fullTitle": "The 36th Chamber of Shaolin (1978)",
    "year": 1978,
    "director": "Gordon Chan",
    "country": "Hong Kong",
    "genres": [
      "action",
      "martial-arts",
      "fantasy"
    ],
    "subclouds": [
      "kung-fu",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/6j1ZnapQPGD9aUcqQWqFYPhWd3B.jpg",
    "color": "#F4D03F",
    "influenceNotes": "",
    "influencedBy": [
      "Shaolin films tradition"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "Kung Fu Hustle (2004)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "the-ballad-of-little-jo-1993",
    "name": "The Ballad of Little Jo",
    "fullTitle": "The Ballad of Little Jo (1993)",
    "year": 1993,
    "director": "Maggie Greenwald",
    "country": "USA",
    "genres": [
      "western",
      "drama",
      "action"
    ],
    "subclouds": [
      "western",
      "revisionist"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/cFGLQ3NigGdDmJy2Wjhcp9nmHe4.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Western cinema tradition"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "the-big-gundown-1966",
    "name": "The Big Gundown",
    "fullTitle": "The Big Gundown (1966)",
    "year": 1966,
    "director": "Sergio Leone",
    "country": "Italy",
    "genres": [
      "western",
      "action",
      "drama"
    ],
    "subclouds": [
      "spaghetti-western"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/a03mr7GwtyTz8EvmZYcugOBH7hN.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "A Fistful of Dollars (1964)"
    ],
    "influences": [
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "the-chinese-connection-1972",
    "name": "The Chinese Connection",
    "fullTitle": "The Chinese Connection (1972)",
    "year": 1972,
    "director": "Lo Wei",
    "country": "Hong Kong",
    "genres": [
      "action",
      "martial-arts",
      "drama"
    ],
    "subclouds": [
      "kung-fu",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/dlcipCOa9hlfBBz7kCAyjsf3q0E.jpg",
    "color": "#F4D03F",
    "influenceNotes": "",
    "influencedBy": [
      "Bruce Lee cinema tradition"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "Ichi the Killer (2001)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "the-dark-knight-2008",
    "name": "The Dark Knight",
    "fullTitle": "The Dark Knight (2008)",
    "year": 2008,
    "director": "Christopher Nolan",
    "country": "USA|UK",
    "genres": [
      "action",
      "crime",
      "thriller"
    ],
    "subclouds": [
      "modern-action",
      "superhero",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Batman tradition",
      "Crime drama",
      "Heat"
    ],
    "influences": [
      "Superhero action evolution",
      "Modern action cinema"
    ],
    "influenceCount": 5,
    "size": 20
  },
  {
    "id": "the-good-the-bad-and-the-ugly-1966",
    "name": "The Good the Bad and the Ugly",
    "fullTitle": "The Good the Bad and the Ugly (1966)",
    "year": 1966,
    "director": "Sergio Leone",
    "country": "Italy",
    "genres": [
      "western",
      "action",
      "drama"
    ],
    "subclouds": [
      "spaghetti-western"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "A Fistful of Dollars (1964)"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "the-great-silence-1968",
    "name": "The Great Silence",
    "fullTitle": "The Great Silence (1968)",
    "year": 1968,
    "director": "Sergio Corbucci",
    "country": "Italy",
    "genres": [
      "action",
      "western",
      "revenge"
    ],
    "subclouds": [
      "spaghetti-western",
      "revenge"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/3kpxS7SZMyYSXvhDnmxQXOOxiTM.jpg",
    "color": "#FF6B35",
    "influenceNotes": "",
    "influencedBy": [
      "Spaghetti western tradition"
    ],
    "influences": [
      "Kill Bill Vol 2 (2004)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "the-green-hornet-1966",
    "name": "The Green Hornet",
    "fullTitle": "The Green Hornet (1966)",
    "year": 1966,
    "director": "Norman Foster",
    "country": "USA",
    "genres": [
      "action",
      "adventure",
      "comedy"
    ],
    "subclouds": [
      "action",
      "kung-fu",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/4c0m6mSuMIVze8udLJcfkJ1eU4q.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Television adaptation"
    ],
    "influences": [
      "Enter the Dragon (1973)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "the-killers-1946",
    "name": "The Killers",
    "fullTitle": "The Killers (1946)",
    "year": 1946,
    "director": "Robert Siodmak",
    "country": "USA",
    "genres": [
      "noir",
      "crime",
      "thriller"
    ],
    "subclouds": [
      "noir",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/uXnuc6pW01s1MDwb6QwBWg2JQeX.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "American film noir tradition"
    ],
    "influences": [
      "Gun Crazy (1950)",
      "Point Blank (1967)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "the-mack-1973",
    "name": "The Mack",
    "fullTitle": "The Mack (1973)",
    "year": 1973,
    "director": "Michael Campus",
    "country": "USA",
    "genres": [
      "crime",
      "drama",
      "action"
    ],
    "subclouds": [
      "blaxploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/xcS9bxWGFzC3cA7qAOjcIjKajSf.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "Shaft (1971)"
    ],
    "influences": [
      "Coffy (1973)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "the-man-from-toronto-2022",
    "name": "The Man from Toronto",
    "fullTitle": "The Man from Toronto (2022)",
    "year": 2022,
    "director": "Patrick Hughes",
    "country": "USA|Canada",
    "genres": [
      "action",
      "comedy",
      "thriller"
    ],
    "subclouds": [
      "modern-action",
      "comedy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/uTCfTibqtk4f90cC59bLPMOmsfc.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Kingsman lineage"
    ],
    "influences": [
      "Action comedies"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "the-matrix-1999",
    "name": "The Matrix",
    "fullTitle": "The Matrix (1999)",
    "year": 1999,
    "director": "The Wachowskis",
    "country": "USA|Australia",
    "genres": [
      "action",
      "sci-fi",
      "thriller"
    ],
    "subclouds": [
      "sci-fi-action",
      "anime-influenced",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/p96dm7sCMn4VYAStA6siNz30G1r.jpg",
    "color": "#1ABC9C",
    "influenceNotes": "",
    "influencedBy": [
      "Anime tradition",
      "Cyberpunk",
      "Hong Kong action"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "the-old-guard-2020",
    "name": "The Old Guard",
    "fullTitle": "The Old Guard (2020)",
    "year": 2020,
    "director": "Gina Prince-Bythewood",
    "country": "USA",
    "genres": [
      "action",
      "fantasy",
      "thriller"
    ],
    "subclouds": [
      "modern-action",
      "female-lead"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "John Wick evolution"
    ],
    "influences": [
      "Action thrillers"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "the-professional-1994",
    "name": "The Professional",
    "fullTitle": "The Professional (1994)",
    "year": 1994,
    "director": "Luc Besson",
    "country": "France|USA",
    "genres": [
      "action",
      "thriller",
      "crime"
    ],
    "subclouds": [
      "action",
      "mentorship",
      "female-action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Jean-Jacques Beineix influence"
    ],
    "influences": [
      "Haywire (2011)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "the-tale-of-zatoichi-1962",
    "name": "The Tale of Zatoichi",
    "fullTitle": "The Tale of Zatoichi (1962)",
    "year": 1962,
    "director": "Shoji Ito",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/ohFJMGouR4rwH32QOM9zk4TC000.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Japanese samurai tradition"
    ],
    "influences": [
      "Zatoichi sequels (1963-1973)",
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "the-wild-bunch-1969",
    "name": "The Wild Bunch",
    "fullTitle": "The Wild Bunch (1969)",
    "year": 1969,
    "director": "Sam Peckinpah",
    "country": "USA",
    "genres": [
      "action",
      "western",
      "drama"
    ],
    "subclouds": [
      "western",
      "foundation",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/8j9yEC3xjy1PJDSizIbaxcHaSph.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "Ford Westerns tradition"
    ],
    "influences": [
      "Spaghetti westerns",
      "Kill Bill Vol 2 (2004)",
      "Modern action cinema"
    ],
    "influenceCount": 4,
    "size": 18
  },
  {
    "id": "thriller-a-cruel-picture-1974",
    "name": "Thriller: A Cruel Picture",
    "fullTitle": "Thriller: A Cruel Picture (1974)",
    "year": 1974,
    "director": "Bo Arne Vibenius",
    "country": "Sweden",
    "genres": [
      "exploitation",
      "revenge",
      "horror"
    ],
    "subclouds": [
      "exploitation",
      "revenge",
      "grindhouse"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/pMYgdygJZ6oBpnC3dWrluevlZOt.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "European exploitation cinema"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)",
      "I Drink Your Blood (1970)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "truck-turner-1974",
    "name": "Truck Turner",
    "fullTitle": "Truck Turner (1974)",
    "year": 1974,
    "director": "Jonathan Kaplan",
    "country": "USA",
    "genres": [
      "action",
      "crime",
      "thriller"
    ],
    "subclouds": [
      "blaxploitation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/lMB0WY73s8AOns9cUmdAT3USreo.jpg",
    "color": "#9B59B6",
    "influenceNotes": "",
    "influencedBy": [
      "Super Fly (1972)"
    ],
    "influences": [
      "Kill Bill Vol 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "two-lane-blacktop-1971",
    "name": "Two Lane Blacktop",
    "fullTitle": "Two Lane Blacktop (1971)",
    "year": 1971,
    "director": "Monte Hellman",
    "country": "USA",
    "genres": [
      "action",
      "drama",
      "crime"
    ],
    "subclouds": [
      "exploitation",
      "action"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/8GSjw941Maq4oDvbYqbyc6UM8WH.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "American cinema tradition"
    ],
    "influences": [
      "Revisionist action cinema"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "venom-1981",
    "name": "Venom",
    "fullTitle": "Venom (1981)",
    "year": 1981,
    "director": "Piers Haggard",
    "country": "UK|USA",
    "genres": [
      "horror",
      "thriller",
      "action"
    ],
    "subclouds": [
      "exploitation",
      "grindhouse"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/v44VNoH2suoaCPnUj2YyXcvgGfn.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "Horror cinema tradition"
    ],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "vixen!-1968",
    "name": "Vixen!",
    "fullTitle": "Vixen! (1968)",
    "year": 1968,
    "director": "Russ Meyer",
    "country": "USA",
    "genres": [
      "action",
      "adventure",
      "comedy"
    ],
    "subclouds": [
      "exploitation",
      "grindhouse"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/9KMZWDA3xTrlgrScqdMisINQmsh.jpg",
    "color": "#E74C3C",
    "influenceNotes": "",
    "influencedBy": [
      "The Immoral Mr. Teas (1959)"
    ],
    "influences": [
      "Bitch Slap (2009)"
    ],
    "influenceCount": 2,
    "size": 14
  },
  {
    "id": "wonder-woman-2017",
    "name": "Wonder Woman",
    "fullTitle": "Wonder Woman (2017)",
    "year": 2017,
    "director": "Patty Jenkins",
    "country": "USA",
    "genres": [
      "action",
      "adventure",
      "superhero"
    ],
    "subclouds": [
      "modern-action",
      "female-lead"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg",
    "color": "#16A085",
    "influenceNotes": "",
    "influencedBy": [
      "John Wick evolution",
      "Atomic Blonde"
    ],
    "influences": [
      "Superhero action films"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "yojimbo-1961",
    "name": "Yojimbo",
    "fullTitle": "Yojimbo (1961)",
    "year": 1961,
    "director": "Akira Kurosawa",
    "country": "Japan",
    "genres": [
      "action",
      "samurai",
      "drama"
    ],
    "subclouds": [
      "samurai",
      "foundation"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w400/tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg",
    "color": "#4A90E2",
    "influenceNotes": "",
    "influencedBy": [
      "Japanese samurai tradition",
      "Ford Westerns"
    ],
    "influences": [
      "A Fistful of Dollars (1964)"
    ],
    "influenceCount": 3,
    "size": 16
  },
  {
    "id": "rashomon-1950",
    "name": "Rashomon",
    "fullTitle": "Rashomon (1950)",
    "year": 1950,
    "director": "Akira Kurosawa",
    "country": "Japan",
    "genres": [
      "drama",
      "crime",
      "mystery"
    ],
    "subclouds": [
      "samurai",
      "foundation"
    ],
    "posterUrl": null,
    "color": "#4A90E2",
    "influenceNotes": "Multiple perspectives narrative style influenced Tarantino's non-linear storytelling in Kill Bill",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "throne-of-blood-1957",
    "name": "Throne of Blood",
    "fullTitle": "Throne of Blood (1957)",
    "year": 1957,
    "director": "Akira Kurosawa",
    "country": "Japan",
    "genres": [
      "drama",
      "history",
      "thriller"
    ],
    "subclouds": [
      "samurai",
      "foundation"
    ],
    "posterUrl": null,
    "color": "#4A90E2",
    "influenceNotes": "Adaptation of Macbeth in feudal Japan, influencing themes of ambition and betrayal",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "unforgiven-1992",
    "name": "Unforgiven",
    "fullTitle": "Unforgiven (1992)",
    "year": 1992,
    "director": "Clint Eastwood",
    "country": "USA",
    "genres": [
      "western",
      "drama"
    ],
    "subclouds": [
      "western",
      "foundation"
    ],
    "posterUrl": null,
    "color": "#16A085",
    "influenceNotes": "Moral complexity of violence and redemption influenced Tarantino's approach to the Bride's arc",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 2 (2004)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "true-grit-1969",
    "name": "True Grit",
    "fullTitle": "True Grit (1969)",
    "year": 1969,
    "director": "Henry Hathaway",
    "country": "USA",
    "genres": [
      "western",
      "adventure",
      "drama"
    ],
    "subclouds": [
      "western",
      "foundation"
    ],
    "posterUrl": null,
    "color": "#16A085",
    "influenceNotes": "Female avenger archetype in western setting influenced the Bride's character",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 2 (2004)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "black-caesar-1973",
    "name": "Black Caesar",
    "fullTitle": "Black Caesar (1973)",
    "year": 1973,
    "director": "Larry Cohen",
    "country": "USA",
    "genres": [
      "crime",
      "drama",
      "action"
    ],
    "subclouds": [
      "blaxploitation"
    ],
    "posterUrl": null,
    "color": "#9B59B6",
    "influenceNotes": "Rise and fall of ambitious criminal influenced revenge narrative structures",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "master-of-the-flying-guillotine-1976",
    "name": "Master of the Flying Guillotine",
    "fullTitle": "Master of the Flying Guillotine (1976)",
    "year": 1976,
    "director": "Jimmy Wang Yu",
    "country": "Hong Kong",
    "genres": [
      "action",
      "martial-arts",
      "fantasy"
    ],
    "subclouds": [
      "kung-fu",
      "action"
    ],
    "posterUrl": null,
    "color": "#F4D03F",
    "influenceNotes": "Signature weapon combat influenced Kill Bill's creative fight choreography",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "the-one-armed-boxer-1972",
    "name": "The One-Armed Boxer",
    "fullTitle": "The One-Armed Boxer (1972)",
    "year": 1972,
    "director": "Jimmy Wang Yu",
    "country": "Hong Kong",
    "genres": [
      "action",
      "martial-arts",
      "drama"
    ],
    "subclouds": [
      "kung-fu",
      "action"
    ],
    "posterUrl": null,
    "color": "#F4D03F",
    "influenceNotes": "Overcoming disability through martial arts influenced themes of personal triumph",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "ms-45-1981",
    "name": "Ms. 45",
    "fullTitle": "Ms. 45 (1981)",
    "year": 1981,
    "director": "Abel Ferrara",
    "country": "USA",
    "genres": [
      "thriller",
      "action",
      "drama"
    ],
    "subclouds": [
      "modern-revenge",
      "female-lead"
    ],
    "posterUrl": null,
    "color": "#3498DB",
    "influenceNotes": "Female victim turning vigilante influenced the Bride's revenge transformation",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "the-lady-from-shanghai-1947",
    "name": "The Lady from Shanghai",
    "fullTitle": "The Lady from Shanghai (1947)",
    "year": 1947,
    "director": "Orson Welles",
    "country": "USA",
    "genres": [
      "film-noir",
      "thriller",
      "drama"
    ],
    "subclouds": [
      "noir",
      "foundation"
    ],
    "posterUrl": null,
    "color": "#16A085",
    "influenceNotes": "Complex female character navigating moral ambiguity influenced the Bride",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "the-last-house-on-the-left-1972",
    "name": "The Last House on the Left",
    "fullTitle": "The Last House on the Left (1972)",
    "year": 1972,
    "director": "Wes Craven",
    "country": "USA",
    "genres": [
      "horror",
      "thriller",
      "exploitation"
    ],
    "subclouds": [
      "exploitation",
      "revenge"
    ],
    "posterUrl": null,
    "color": "#E74C3C",
    "influenceNotes": "Home invasion and revenge structure influenced Kill Bill's opening scene",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  },
  {
    "id": "i-spit-on-your-grave-1978",
    "name": "I Spit on Your Grave",
    "fullTitle": "I Spit on Your Grave (1978)",
    "year": 1978,
    "director": "Meir Zarchi",
    "country": "USA",
    "genres": [
      "horror",
      "thriller",
      "exploitation"
    ],
    "subclouds": [
      "exploitation",
      "revenge"
    ],
    "posterUrl": null,
    "color": "#E74C3C",
    "influenceNotes": "Rape-revenge narrative structure directly influenced Kill Bill's premise",
    "influencedBy": [],
    "influences": [
      "Kill Bill Vol. 1 (2003)"
    ],
    "influenceCount": 1,
    "size": 12
  }
];

// Ensure unique nodes by ID (keeping the first occurrence which usually has valid poster data)
const NODES = RAW_NODES.filter((node, index, self) =>
  index === self.findIndex((t) => (
    t.id === node.id
  ))
);

export const INITIAL_GRAPH_DATA: GraphData = {
  "nodes": NODES,
  "links": [
  {
    "source": "yojimbo-1961",
    "target": "a-fistful-of-dollars-1964",
    "type": "influenced"
  },
  {
    "source": "a-fistful-of-dollars-1964",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "la-femme-nikita-1990",
    "target": "anna-2019",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "atomic-blonde-2017",
    "type": "influenced"
  },
  {
    "source": "john-wick-2014",
    "target": "atomic-blonde-2017",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "bitch-slap-2009",
    "type": "influenced"
  },
  {
    "source": "shaft-1971",
    "target": "cleopatra-jones-1973",
    "type": "influenced"
  },
  {
    "source": "coffy-1973",
    "target": "cleopatra-jones-1973",
    "type": "influenced"
  },
  {
    "source": "cleopatra-jones-1973",
    "target": "atomic-blonde-2017",
    "type": "influenced"
  },
  {
    "source": "shaft-1971",
    "target": "coffy-1973",
    "type": "influenced"
  },
  {
    "source": "coffy-1973",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "day-of-anger-1969",
    "target": "john-wick-2014",
    "type": "influenced"
  },
  {
    "source": "a-fistful-of-dollars-1964",
    "target": "django-1966",
    "type": "influenced"
  },
  {
    "source": "django-1966",
    "target": "the-good-the-bad-and-the-ugly-1966",
    "type": "influenced"
  },
  {
    "source": "the-green-hornet-1966",
    "target": "enter-the-dragon-1973",
    "type": "influenced"
  },
  {
    "source": "enter-the-dragon-1973",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "faster-2010",
    "target": "john-wick-2014",
    "type": "influenced"
  },
  {
    "source": "faster-pussycat-kill-kill-1965",
    "target": "vixen!-1968",
    "type": "influenced"
  },
  {
    "source": "fists-of-fury-1972",
    "target": "enter-the-dragon-1973",
    "type": "influenced"
  },
  {
    "source": "a-fistful-of-dollars-1964",
    "target": "for-a-few-dollars-more-1965",
    "type": "influenced"
  },
  {
    "source": "for-a-few-dollars-more-1965",
    "target": "django-1966",
    "type": "influenced"
  },
  {
    "source": "for-a-few-dollars-more-1965",
    "target": "the-good-the-bad-and-the-ugly-1966",
    "type": "influenced"
  },
  {
    "source": "coffy-1973",
    "target": "foxy-brown-1974",
    "type": "influenced"
  },
  {
    "source": "foxy-brown-1974",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "enter-the-dragon-1973",
    "target": "game-of-death-1978",
    "type": "influenced"
  },
  {
    "source": "game-of-death-1978",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "gilda-1946",
    "target": "point-blank-1967",
    "type": "influenced"
  },
  {
    "source": "gilda-1946",
    "target": "kiss-me-deadly-1955",
    "type": "influenced"
  },
  {
    "source": "john-wick-2014",
    "target": "gunpowder-milkshake-2021",
    "type": "influenced"
  },
  {
    "source": "harakiri-1962",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "haywire-2011",
    "type": "influenced"
  },
  {
    "source": "the-professional-1994",
    "target": "haywire-2011",
    "type": "influenced"
  },
  {
    "source": "haywire-2011",
    "target": "atomic-blonde-2017",
    "type": "influenced"
  },
  {
    "source": "i-drink-your-blood-1970",
    "target": "bitch-slap-2009",
    "type": "influenced"
  },
  {
    "source": "oldboy-2003",
    "target": "ichi-the-killer-2001",
    "type": "influenced"
  },
  {
    "source": "ichi-the-killer-2001",
    "target": "bitch-slap-2009",
    "type": "influenced"
  },
  {
    "source": "in-a-lonely-place-1950",
    "target": "point-blank-1967",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "john-wick-2014",
    "type": "influenced"
  },
  {
    "source": "lady-snowblood-1973",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "shogun-assassin-1980",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "the-good-the-bad-and-the-ugly-1966",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "rio-bravo-1959",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "vixen!-1968",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "sword-of-doom-1966",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "lone-wolf-and-cub-1972",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "the-36th-chamber-of-shaolin-1978",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "the-mack-1973",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "i-drink-your-blood-1970",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "gunpowder-milkshake-2021",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "kingsman-2015",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "anna-2019",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "faster-2010",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "dead-leaves-2004",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-1-2003",
    "target": "ichi-the-killer-2001",
    "type": "influenced"
  },
  {
    "source": "the-good-the-bad-and-the-ugly-1966",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "rio-bravo-1959",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "for-a-few-dollars-more-1965",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "django-1966",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "death-rides-a-horse-1967",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "the-big-gundown-1966",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "johnny-guitar-1954",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "lady-snowblood-1973",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "game-of-death-1978",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-2-2004",
    "target": "bitch-slap-2009",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-2-2004",
    "target": "haywire-2011",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-2-2004",
    "target": "atomic-blonde-2017",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-2-2004",
    "target": "gunpowder-milkshake-2021",
    "type": "influenced"
  },
  {
    "source": "kill-bill-vol-2-2004",
    "target": "john-wick-2014",
    "type": "influenced"
  },
  {
    "source": "kiss-me-deadly-1955",
    "target": "point-blank-1967",
    "type": "influenced"
  },
  {
    "source": "the-36th-chamber-of-shaolin-1978",
    "target": "kung-fu-hustle-2004",
    "type": "influenced"
  },
  {
    "source": "la-femme-nikita-1990",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "lone-wolf-and-cub-1972",
    "target": "lady-snowblood-1973",
    "type": "influenced"
  },
  {
    "source": "lady-snowblood-1973",
    "target": "lady-snowblood-2-love-song-of-vengeance-1974",
    "type": "influenced"
  },
  {
    "source": "oldboy-2003",
    "target": "lady-vengeance-2005",
    "type": "influenced"
  },
  {
    "source": "lock-stock-and-two-smoking-barrels-1998",
    "target": "snatch-2000",
    "type": "influenced"
  },
  {
    "source": "harakiri-1962",
    "target": "lone-wolf-and-cub-1972",
    "type": "influenced"
  },
  {
    "source": "machete-2010",
    "target": "machete-kills-2013",
    "type": "influenced"
  },
  {
    "source": "mission-impossible---rogue-nation-2015",
    "target": "mission-impossible---fallout-2018",
    "type": "influenced"
  },
  {
    "source": "harakiri-1962",
    "target": "samurai-rebellion-1967",
    "type": "influenced"
  },
  {
    "source": "yojimbo-1961",
    "target": "samurai-rebellion-1967",
    "type": "influenced"
  },
  {
    "source": "samurai-rebellion-1967",
    "target": "lady-snowblood-1973",
    "type": "influenced"
  },
  {
    "source": "sanjuro-1962",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "seven-samurai-1954",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "lone-wolf-and-cub-1972",
    "target": "shogun-assassin-1980",
    "type": "influenced"
  },
  {
    "source": "shaft-1971",
    "target": "super-fly-1972",
    "type": "influenced"
  },
  {
    "source": "super-fly-1972",
    "target": "truck-turner-1974",
    "type": "influenced"
  },
  {
    "source": "faster-pussycat-kill-kill-1965",
    "target": "supervixens-1975",
    "type": "influenced"
  },
  {
    "source": "vixen!-1968",
    "target": "supervixens-1975",
    "type": "influenced"
  },
  {
    "source": "sweet-smell-of-success-1957",
    "target": "point-blank-1967",
    "type": "influenced"
  },
  {
    "source": "harakiri-1962",
    "target": "sword-of-doom-1966",
    "type": "influenced"
  },
  {
    "source": "harakiri-1962",
    "target": "tattooed-swordsman-1966",
    "type": "influenced"
  },
  {
    "source": "tattooed-swordsman-1966",
    "target": "lady-snowblood-1973",
    "type": "influenced"
  },
  {
    "source": "a-fistful-of-dollars-1964",
    "target": "the-big-gundown-1966",
    "type": "influenced"
  },
  {
    "source": "the-chinese-connection-1972",
    "target": "ichi-the-killer-2001",
    "type": "influenced"
  },
  {
    "source": "a-fistful-of-dollars-1964",
    "target": "the-good-the-bad-and-the-ugly-1966",
    "type": "influenced"
  },
  {
    "source": "the-killers-1946",
    "target": "gun-crazy-1950",
    "type": "influenced"
  },
  {
    "source": "the-killers-1946",
    "target": "point-blank-1967",
    "type": "influenced"
  },
  {
    "source": "shaft-1971",
    "target": "the-mack-1973",
    "type": "influenced"
  },
  {
    "source": "the-mack-1973",
    "target": "coffy-1973",
    "type": "influenced"
  },
  {
    "source": "the-matrix-1999",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "thriller-a-cruel-picture-1974",
    "target": "i-drink-your-blood-1970",
    "type": "influenced"
  },
  {
    "source": "venom-1981",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "vixen!-1968",
    "target": "bitch-slap-2009",
    "type": "influenced"
  },
  {
    "source": "the-good-the-bad-and-the-ugly-1966",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "shogun-assassin-1980",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "rashomon-1950",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "throne-of-blood-1957",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "unforgiven-1992",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "true-grit-1969",
    "target": "kill-bill-vol-2-2004",
    "type": "influenced"
  },
  {
    "source": "black-caesar-1973",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "master-of-the-flying-guillotine-1976",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "the-one-armed-boxer-1972",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "ms-45-1981",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "the-lady-from-shanghai-1947",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "the-last-house-on-the-left-1972",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  },
  {
    "source": "i-spit-on-your-grave-1978",
    "target": "kill-bill-vol-1-2003",
    "type": "influenced"
  }
]
};