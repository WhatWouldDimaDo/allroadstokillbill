import { GraphData, ColorPalette } from './types';

export const COLOR_PALETTE: ColorPalette = {
  "70s-cinema": "#95A5A6",
  "action": "#16A085",
  "anime": "#E91E63",
  "anime-influenced": "#E91E63",
  "anthology": "#9B59B6",
  "blaxploitation": "#9B59B6",
  "car-chase": "#F39C12",
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
  "french-new-wave": "#3498DB",
  "grindhouse": "#2C3E50",
  "heist": "#7F8C8D",
  "heroic-bloodshed": "#E91E63",
  "hong-kong-action": "#E91E63",
  "horror": "#C0392B",
  "italian-cinema": "#E74C3C",
  "kill-bill-core": "#FFD700",
  "kung-fu": "#F4D03F",
  "men-on-mission": "#2C3E50",
  "mentorship": "#16A085",
  "modern-action": "#2980B9",
  "modern-revenge": "#3498DB",
  "neo-grindhouse": "#C0392B",
  "neo-noir": "#34495E",
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
  "war": "#27AE60",
  "western": "#D35400",
  "wuxia": "#8E44AD",
  "wwii": "#27AE60",
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
    "For a Few Dollars More (1965)",
    "The Good the Bad and the Ugly (1966)",
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 4,
  "size": 20,
  "runtime": 99,
  "rating": 7.8,
  "imdbId": "tt0058461",
  "trailerUrl": "https://www.youtube.com/watch?v=f_oZUWAdEe8",
  "overview": "The Man With No Name enters the Mexican village of San Miguel in the midst of a power struggle among the three Rojo brothers and sheriff John Baxter. When a regiment of Mexican soldiers bearing gold intended to pay for new weapons is waylaid by the Rojo brothers, the stranger inserts himself into th",
  "tmdbId": 391
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
  "influenceCount": 2,
  "size": 15,
  "runtime": 119,
  "rating": 6.7,
  "imdbId": "tt7456310",
  "trailerUrl": "https://www.youtube.com/watch?v=oZSMV-NDH4w",
  "overview": "Beneath Anna Poliatova's striking beauty lies a secret that will unleash her indelible strength and skill to become one of the world's most feared government assassins.",
  "tmdbId": 484641
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
    "Haywire (2011)",
    "John Wick (2014)"
  ],
  "influences": [
    "Female action lead; hyper-stylized combat sequences"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 115,
  "rating": 6.4,
  "imdbId": "tt2406566",
  "trailerUrl": "https://www.youtube.com/watch?v=yIUube1pSC0",
  "overview": "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
  "tmdbId": 341013
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [
    "Kill Bill"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 109,
  "rating": 6.9,
  "imdbId": "tt7713068",
  "trailerUrl": "https://www.youtube.com/watch?v=q2u2raiIlm0",
  "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
  "tmdbId": 495764
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
  "color": "#C0392B",
  "influenceNotes": "",
  "influencedBy": [
    "Kill Bill Vol 2 (2004)"
  ],
  "influences": [
    "Grindhouse (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 109,
  "rating": 4.8,
  "imdbId": "tt1212974",
  "trailerUrl": "https://www.youtube.com/watch?v=BY4Le__VJps",
  "overview": "Three bad girls - a down-and-out stripper, a drug-running killer, and a corporate powerbroker - arrive at a remote desert hideaway to extort and steal $200 million in diamonds from a ruthless underworld kingpin.",
  "tmdbId": 26715
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 87,
  "rating": 5.3,
  "imdbId": "tt0068282",
  "trailerUrl": "https://www.youtube.com/watch?v=4RdpzwacITk",
  "overview": "When two troublemaking female prisoners (one a revolutionary, the other a former harem-girl) can't seem to get along, they are chained together and extradited for safekeeping. The women, still chained together, stumble, stab, and cat-fight their way across the wilderness, igniting a bloody shootout ",
  "tmdbId": 28797
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
  "influencedBy": [],
  "influences": [
    "Horror-blaxploitation hybrids"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 93,
  "rating": 5.4,
  "imdbId": "tt0068284",
  "trailerUrl": "https://www.youtube.com/watch?v=V8Sfrhj5IP4",
  "overview": "An 18th century African prince is turned into a vampire while visiting Transylvania. Two centuries later, he rises from his coffin attacking various residents of Los Angeles and meets Tina, a woman who he believes is the reincarnation of his deceased wife.",
  "tmdbId": 30566
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 89,
  "rating": 5.7,
  "imdbId": "tt0069890",
  "trailerUrl": "https://www.youtube.com/watch?v=7J5IRiBmt-o",
  "overview": "After federal agent Cleopatra Jones orders the burning of a Turkish poppy field, the notorious drug lord Mommy vows to destroy her.",
  "tmdbId": 26196
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
    "The Mack (1973)"
  ],
  "influences": [
    "Kill Bill Vol 1 (2003)",
    "Foxy Brown (1974)"
  ],
  "influenceCount": 3,
  "size": 20,
  "runtime": 90,
  "rating": 6.6,
  "imdbId": "tt0069897",
  "trailerUrl": "https://www.youtube.com/watch?v=dyz9XeQwggQ",
  "overview": "After her younger sister gets involved in drugs and is severely injured by contaminated heroin, a nurse sets out on a mission of vengeance and vigilante justice, killing drug dealers, pimps, and mobsters who cross her path.",
  "tmdbId": 22021
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
  "color": "#8E44AD",
  "influenceNotes": "",
  "influencedBy": [
    "Crouching Tiger Hidden Dragon (2000)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 103,
  "rating": 6.2,
  "imdbId": "tt2652118",
  "trailerUrl": "https://www.youtube.com/watch?v=P7ohxUUd5XQ",
  "overview": "A story of lost love, young love, a legendary sword and one last opportunity at redemption.",
  "tmdbId": 263341
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 2 (2004)",
    "John Wick (2014)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 113,
  "rating": 7.0,
  "imdbId": "tt0061709",
  "trailerUrl": "https://www.youtube.com/watch?v=P0TGLbFUib4",
  "overview": "A scruffy garbage boy becomes the pupil of famed gunfighter Talby, and the stage for confrontation is set when the gunman overruns the boy's town through violence and corruption.",
  "tmdbId": 56373
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
  "color": "#E74C3C",
  "influenceNotes": "",
  "influencedBy": [
    "Kill Bill Vol 1 (2003)",
    "Samurai Champloo (2004)"
  ],
  "influences": [
    "Stylized action animation; anime influence on modern revenge"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 52,
  "rating": 7.0,
  "imdbId": "tt0439533",
  "trailerUrl": "https://www.youtube.com/watch?v=cFBd7A_IvgU",
  "overview": "Pandy and Retro awaken naked on Earth with no recollection of their past. They embark on a crime spree in search of food and clothing, but are captured by authorities and sent to the infamous lunar penitentiary named Dead Leaves.",
  "tmdbId": 15981
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Comic book adaptations"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.6,
  "imdbId": "tt1431045",
  "trailerUrl": "https://www.youtube.com/watch?v=9vN6DHB6bJc",
  "overview": "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the ",
  "tmdbId": 293660
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 114,
  "rating": 7.0,
  "imdbId": "tt0064208",
  "trailerUrl": "https://www.youtube.com/watch?v=KibMV5nhfaM",
  "overview": "Bill Meceita, a boy whose family was murdered in front of him by a gang, sets out 15 years later to exact revenge. On his journey, he finds himself continually sparring and occasionally cooperating with Ryan, a gunfighter on his own quest for vengeance, who knows more than he says about Bill's trage",
  "tmdbId": 49397
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
  "influenceCount": 2,
  "size": 15,
  "runtime": 93,
  "rating": 7.2,
  "imdbId": "tt0060315",
  "trailerUrl": "https://www.youtube.com/watch?v=RxTjqkTDrV8",
  "overview": "A coffin-dragging gunslinger and a prostitute become embroiled in a bitter feud between a merciless masked clan and a band of Mexican revolutionaries.",
  "tmdbId": 10772
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
    "Game of Death (1978)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 102,
  "rating": 7.4,
  "imdbId": "tt0070034",
  "trailerUrl": "https://www.youtube.com/watch?v=CDUw0ruKzNY",
  "overview": "A martial artist agrees to spy on a reclusive crime lord using his invitation to a tournament there as cover.",
  "tmdbId": 9461
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 116,
  "rating": 7.3,
  "imdbId": "tt8936646",
  "trailerUrl": "https://www.youtube.com/watch?v=L6P3nI6VnlY",
  "overview": "A hardened gun-for-hire's latest mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
  "tmdbId": 545609
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
  "influenceCount": 1,
  "size": 15,
  "runtime": 98,
  "rating": 6.4,
  "imdbId": "tt1433108",
  "trailerUrl": "https://www.youtube.com/watch?v=SbJ3Itb4vsI",
  "overview": "After 10 years in prison, Driver is now a free man with a single focus - hunting down the people responsible for brutally murdering his brother.",
  "tmdbId": 41283
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
  "influencedBy": [],
  "influences": [
    "Vixen! (1968)",
    "Kill Bill Vol 1 (2003)",
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 83,
  "rating": 6.3,
  "imdbId": "tt0059170",
  "trailerUrl": "https://www.youtube.com/watch?v=gLTnzo-nd8Q",
  "overview": "A trio of thrill-seeking go-go dancers kidnap a young girl and attempt to seduce an old rancher and his two sons out of their small fortune, but their scheme doesn't play out as intended.",
  "tmdbId": 315
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
  "color": "#4A90E2",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 90,
  "rating": 7.0,
  "imdbId": "tt0226874",
  "trailerUrl": "https://www.youtube.com/watch?v=kDJSPIfxN3c",
  "overview": "After being used and betrayed by the detective she had fallen in love with, young Matsu is sent to a female prison full of sadistic guards and disobedient prisoners.",
  "tmdbId": 39872
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
  "influencedBy": [],
  "influences": [
    "Enter the Dragon (1973)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.2,
  "imdbId": "tt0068767",
  "trailerUrl": "https://www.youtube.com/watch?v=oO9PVJdgu4M",
  "overview": "Chen Chen returns to his former school in Shanghai when he learns that his beloved instructor has been murdered. While investigating the man's death, Chen discovers that a rival Japanese school is operating a drug smuggling ring. To avenge his master\u2019s death, Chen takes on both Chinese and Japanese ",
  "tmdbId": 11713
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
  "influenceCount": 1,
  "size": 15,
  "runtime": 132,
  "rating": 8.0,
  "imdbId": "tt0059578",
  "trailerUrl": "https://www.youtube.com/watch?v=xZm8i5sGlWI",
  "overview": "Two bounty hunters both pursue the brutal and sadistic bandit, El Indio, who has a large bounty on his head.",
  "tmdbId": 938
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
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 94,
  "rating": 6.2,
  "imdbId": "tt0071517",
  "trailerUrl": "https://www.youtube.com/watch?v=sMJCorShtSc",
  "overview": "A voluptuous black woman takes a job as a high-class prostitute in order to get revenge on the mobsters who murdered her boyfriend.",
  "tmdbId": 22048
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
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 101,
  "rating": 6.4,
  "imdbId": "tt0077594",
  "trailerUrl": "https://www.youtube.com/watch?v=Wt6-3Sim6Gs",
  "overview": "A martial arts movie star must fake his death to find the people who are trying to kill him.",
  "tmdbId": 13333
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
    "Kill Bill Vol 1 (2003)"
  ],
  "influences": [
    "Anime live-action adaptations"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 83,
  "rating": 7.9,
  "imdbId": "tt0113568",
  "trailerUrl": "https://www.youtube.com/watch?v=rU6Matng9MU",
  "overview": "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as 'The Puppetmaster' begins involving them in politics, Section 9, a group of cybernetically e",
  "tmdbId": 9323
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Point Blank (1967)",
    "Kiss Me Deadly (1955)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 110,
  "rating": 7.5,
  "imdbId": "tt0038559",
  "trailerUrl": "https://www.youtube.com/watch?v=9hTdgygrlOg",
  "overview": "A gambler discovers an old flame while in Argentina, but she's married to his new boss.",
  "tmdbId": 3767
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Bonnie and Clyde (1967)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 87,
  "rating": 7.4,
  "imdbId": "tt0042530",
  "overview": "Bart Tare is an ex-Army man who has a lifelong fixation with guns, he meets a kindred spirit in sharpshooter Annie Starr and goes to work at a carnival. After upsetting the carnival owner who lusts after Starr, they both get fired. Soon, on Starr's behest, they embark on a crime spree for cash.",
  "tmdbId": 18671
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
  "color": "#3498DB",
  "influenceNotes": "",
  "influencedBy": [
    "Kill Bill Vol 1 (2003)",
    "Kill Bill Vol 2 (2004)",
    "John Wick (2014)"
  ],
  "influences": [
    "All-female action ensemble; grindhouse homage"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 114,
  "rating": 6.3,
  "imdbId": "tt8368408",
  "trailerUrl": "https://www.youtube.com/watch?v=YLMT5uXjFLY",
  "overview": "To protect an 8-year-old girl, a dangerous assassin reunites with her mother and her lethal associates to take down a ruthless crime syndicate and its army of henchmen.",
  "tmdbId": 574060
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
  "influencedBy": [],
  "influences": [
    "Lone Wolf and Cub (1972)",
    "Sword of Doom (1966)",
    "Lady Snowblood (1973)"
  ],
  "influenceCount": 6,
  "size": 25,
  "runtime": 135,
  "rating": 8.4,
  "imdbId": "tt0056058",
  "trailerUrl": "https://www.youtube.com/watch?v=gfABwM-Ppng",
  "overview": "Down-on-his-luck veteran Tsugumo Hanshir\u014d enters the courtyard of the prosperous House of Iyi. Unemployed, and with no family, he hopes to find a place to commit seppuku\u2014and a worthy second to deliver the coup de gr\u00e2ce in his suicide ritual. The senior counselor for the Iyi clan questions the ronin\u2019",
  "tmdbId": 14537
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
    "Kill Bill Vol 1 (2003)"
  ],
  "influences": [
    "Atomic Blonde (2017)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 93,
  "rating": 5.7,
  "imdbId": "tt1506999",
  "trailerUrl": "https://www.youtube.com/watch?v=Og9dz4KNhJk",
  "overview": "A black ops soldier seeks payback after she is betrayed and left for dead.",
  "tmdbId": 70435
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
  "influenceCount": 1,
  "size": 15,
  "runtime": 83,
  "rating": 5.9,
  "imdbId": "tt0067229",
  "trailerUrl": "https://www.youtube.com/watch?v=zNejoosw3Vk",
  "overview": "A group of Satanic hippies wreak havoc on a small town where a young boy, whose sister and grandfather were victimized by them, tries to get even - with deadly results.",
  "tmdbId": 27313
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
    "Lady Snowblood (1973)",
    "Lone Wolf and Cub (1972)"
  ],
  "influences": [
    "Kill Bill Vol 1 (2003)",
    "Bitch Slap (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 129,
  "rating": 7.0,
  "imdbId": "tt0296042",
  "trailerUrl": "https://www.youtube.com/watch?v=YWnd581Ihgo",
  "overview": "As sadomasochistic yakuza enforcer Kakihara searches for his missing boss he comes across Ichi, a repressed and psychotic killer who may be able to inflict levels of pain that Kakihara has only dreamed of.",
  "tmdbId": 9696
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Point Blank (1967)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 93,
  "rating": 7.6,
  "imdbId": "tt0042593",
  "trailerUrl": "https://www.youtube.com/watch?v=68C2IFX60CU",
  "overview": "A violent screenwriter and a female neighbor fall in love after she clears him of murder, but she begins to have second thoughts.",
  "tmdbId": 17057
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
    "Kill Bill Vol 1 (2003)",
    "Hard Boiled (1992)"
  ],
  "influences": [
    "Stylized action choreography; revenge narrative"
  ],
  "influenceCount": 6,
  "size": 25,
  "runtime": 101,
  "rating": 7.5,
  "imdbId": "tt2911666",
  "trailerUrl": "https://www.youtube.com/watch?v=6r0s41Ju5XA",
  "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
  "tmdbId": 245891
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 110,
  "rating": 7.4,
  "imdbId": "tt0047136",
  "trailerUrl": "https://www.youtube.com/watch?v=ACgSyxdV9vE",
  "overview": "On the outskirts of town, the hard-nosed Vienna owns a saloon frequented by the undesirables of the region, including Dancin' Kid and his gang. Another patron of Vienna's establishment is Johnny Guitar, a former gunslinger and her lover. When a heist is pulled in town that results in a man's death, ",
  "tmdbId": 26596
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
  "color": "#C0392B",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 106,
  "rating": 6.6,
  "imdbId": "tt7737528",
  "trailerUrl": "https://www.youtube.com/watch?v=MysGjRS9jFU",
  "overview": "A ruthless criminal operative has less than 24 hours to exact revenge on her enemies and in the process forms an unexpected bond with the daughter of one of her past victims.",
  "tmdbId": 597891
},
{
  "id": "kill-bill-vol-1-2003",
  "name": "Kill Bill Vol. 1",
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
    "Harakiri (1962)"
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
  "influenceCount": 0,
  "size": 35,
  "runtime": 111,
  "rating": 8.0,
  "imdbId": "tt0266697",
  "trailerUrl": "https://www.youtube.com/watch?v=sXwXk3jcrfU",
  "overview": "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle \u2013 but she lives to plot her vengeance.",
  "tmdbId": 24
},
{
  "id": "kill-bill-vol-2-2004",
  "name": "Kill Bill Vol. 2",
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
  "influenceCount": 0,
  "size": 35,
  "runtime": 136,
  "rating": 7.9,
  "imdbId": "tt0378194",
  "trailerUrl": "https://www.youtube.com/watch?v=q2h6EFk36kI",
  "overview": "The Bride unwaveringly continues on her roaring rampage of revenge against the band of assassins who had tried to kill her and her unborn child. She visits each of her former associates one-by-one, checking off the victims on her Death List Five until there's nothing left to do \u2026 but kill Bill.",
  "tmdbId": 393
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
    "Kill Bill Vol 1 (2003)"
  ],
  "influences": [
    "Stylized action sequences with dark humor"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 129,
  "rating": 7.6,
  "imdbId": "tt2802144",
  "trailerUrl": "https://www.youtube.com/watch?v=Th_KrhqmHk8",
  "overview": "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
  "tmdbId": 207703
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Point Blank (1967)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 106,
  "rating": 7.2,
  "imdbId": "tt0048261",
  "trailerUrl": "https://www.youtube.com/watch?v=ss4AF91KOFw",
  "overview": "One evening, Hammer gives a ride to Christina, an attractive hitchhiker on a lonely country road, who has escaped from the nearby lunatic asylum. Thugs waylay them and force his car to crash. When Hammer returns to semi-consciousness, he hears Christina being tortured until she dies. Hammer, both fo",
  "tmdbId": 18030
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
    "The 36th Chamber of Shaolin (1978)"
  ],
  "influences": [
    "Modern action comedies"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 99,
  "rating": 7.5,
  "imdbId": "tt0373074",
  "trailerUrl": "https://www.youtube.com/watch?v=-m3IB7N_PRk",
  "overview": "It's the 1940s, and the notorious Axe Gang terrorizes Shanghai. Small-time criminals Sing and Bone hope to join, but they only manage to make lots of very dangerous enemies. Fortunately for them, kung fu masters and hidden strength can be found in unlikely places. Now they just have to take on the e",
  "tmdbId": 9470
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
  "influencedBy": [],
  "influences": [
    "The Professional (1994)",
    "Anna (2019)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 117,
  "rating": 7.1,
  "imdbId": "tt0100263",
  "trailerUrl": "https://www.youtube.com/watch?v=Gh8RoDMUUsA",
  "overview": "A beautiful felon, sentenced to life in prison for the murder of a policeman, is given a second chance \u2013 as a secret political assassin controlled by the government.",
  "tmdbId": 9322
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
    "Harakiri (1962)"
  ],
  "influences": [
    "Kill Bill Vol 1 (2003)",
    "Ichi the Killer (2001)"
  ],
  "influenceCount": 4,
  "size": 20,
  "runtime": 97,
  "rating": 7.5,
  "imdbId": "tt0158714",
  "trailerUrl": "https://www.youtube.com/watch?v=bIiuywU9ZJ4",
  "overview": "Yuki's family is nearly wiped out before she is born due to the machinations of a band of criminals. These criminals kidnap and brutalize her mother but leave her alive. Later her mother ends up in prison with only revenge to keep her alive. She creates an instrument for this revenge by purposefully",
  "tmdbId": 2487
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 89,
  "rating": 6.4,
  "imdbId": "tt0072157",
  "trailerUrl": "https://www.youtube.com/watch?v=ZIzQE4hX9lU",
  "overview": "Lady Snowblood is caught by the police and sentenced to death for her crimes. As she is sent to the gallows she is rescued by the secret police who offer her a deal to assassinate some revolutionaries.",
  "tmdbId": 18818
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
  "color": "#C0392B",
  "influenceNotes": "",
  "influencedBy": [
    "Sympathy for Mr. Vengeance (2002)",
    "Oldboy (2003)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 115,
  "rating": 7.5,
  "imdbId": "tt0451094",
  "trailerUrl": "https://www.youtube.com/watch?v=deSJEDUi4rQ",
  "overview": "Released after being wrongfully convicted and imprisoned for 13 years, a woman begins executing her elaborate plan of retribution.",
  "tmdbId": 4550
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
  "color": "#7F8C8D",
  "influenceNotes": "",
  "influencedBy": [
    "Tarantino influence"
  ],
  "influences": [
    "Snatch (2000)",
    "Sherlock Holmes (2009)"
  ],
  "influenceCount": 3,
  "size": 20,
  "runtime": 105,
  "rating": 8.1,
  "imdbId": "tt0120735",
  "trailerUrl": "https://www.youtube.com/watch?v=HY7mRdQuUSw",
  "overview": "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
  "tmdbId": 100
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
    "Shogun Assassin (1980)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 3,
  "size": 20,
  "runtime": 89,
  "rating": 7.1,
  "imdbId": "tt0068817",
  "trailerUrl": "https://www.youtube.com/watch?v=ajHiSb9FnL4",
  "overview": "Ogami Itto volunteers to be tortured by Yakuza in order to save a prostitute and is hired by their leader to kill an evil chamberlain.",
  "tmdbId": 41474
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
  "color": "#C0392B",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 1,
  "size": 15,
  "runtime": 105,
  "rating": 6.3,
  "imdbId": "tt0985694",
  "trailerUrl": "https://www.youtube.com/watch?v=LNDLSS7faQo",
  "overview": "After being set-up and betrayed by the man who hired him to assassinate a Texas Senator, an ex-Federale launches a brutal rampage of revenge against his former boss.",
  "tmdbId": 23631
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 5.6,
  "imdbId": "tt2002718",
  "trailerUrl": "https://www.youtube.com/watch?v=7fGKttdOWQE",
  "overview": "Ex-Federale agent Machete is recruited by the President of the United States for a mission which would be impossible for any mortal man \u2013 he must take down a madman revolutionary and an eccentric billionaire arms dealer who has hatched a plan to spread war and anarchy across the planet.",
  "tmdbId": 106747
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 92,
  "rating": 6.3,
  "imdbId": "tt0061074",
  "trailerUrl": "https://www.youtube.com/watch?v=ZX0IQUlFYiI",
  "overview": "In 1866, prospector Tom Corbett returns to his hometown of Laramie, Texas, now under the brutal control of gangster Jason Scott and his violent son, Junior. With his brother Jeff, a struggling drunk cared for by their maid Mercedes, Tom seeks to overthrow the Scotts' tyrannical rule and restore peac",
  "tmdbId": 40141
},
{
  "id": "mission-impossible-fallout-2018",
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [
    "Mission: Impossible - Rogue Nation (2015)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 147,
  "rating": 7.4,
  "imdbId": "tt4912910",
  "trailerUrl": "https://www.youtube.com/watch?v=MEOOas3JZt0",
  "overview": "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a g",
  "tmdbId": 353081
},
{
  "id": "mission-impossible-rogue-nation-2015",
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Mission: Impossible - Fallout (2018)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 131,
  "rating": 7.2,
  "imdbId": "tt2381249",
  "trailerUrl": "https://www.youtube.com/watch?v=F-qBD17wwrQ",
  "overview": "Ethan and team take on their most impossible mission yet\u2014eradicating 'The Syndicate', an International and highly-skilled rogue organization committed to destroying the IMF.",
  "tmdbId": 177677
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 2 (2004)",
    "Death Wish (1974)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 93,
  "rating": 6.2,
  "imdbId": "tt0061587",
  "trailerUrl": "https://www.youtube.com/watch?v=r71G-srmHv4",
  "overview": "The sole survivor of a bloody massacre vows revenge on his attackers and on the men who killed his wife.",
  "tmdbId": 6474
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
  "color": "#C0392B",
  "influenceNotes": "",
  "influencedBy": [
    "Japanese manga adaptation"
  ],
  "influences": [
    "Lady Vengeance (2005)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 120,
  "rating": 8.2,
  "imdbId": "tt0364569",
  "trailerUrl": "https://www.youtube.com/watch?v=tAaBkFChaRg",
  "overview": "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate man seeks revenge on his captors.",
  "tmdbId": 670
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [
    "In a Lonely Place (1950)"
  ],
  "influences": [
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 91,
  "rating": 7.0,
  "imdbId": "tt0062138",
  "trailerUrl": "https://www.youtube.com/watch?v=Z3CCNj_zMco",
  "overview": "After being double-crossed and left for dead, a mysterious man named Walker single-mindedly tries to retrieve the rather inconsequential sum of money that was stolen from him.",
  "tmdbId": 26039
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
    "Kill Bill Vol 1 (2003)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 140,
  "rating": 7.6,
  "imdbId": "tt1677720",
  "trailerUrl": "https://www.youtube.com/watch?v=1hrwbc5qCZ4",
  "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
  "tmdbId": 333339
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 123,
  "rating": 6.3,
  "imdbId": "tt2235695",
  "trailerUrl": "https://www.youtube.com/watch?v=LFVhB54UqvQ",
  "overview": "After a whirlwind romance with a wealthy widower, a na\u00efve bride moves to his family estate but can't escape the haunting shadow of his late wife.",
  "tmdbId": 505379
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 140,
  "rating": 6.5,
  "imdbId": "tt2873282",
  "trailerUrl": "https://www.youtube.com/watch?v=PmUL6wMpMWw",
  "overview": "Prima ballerina Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous ",
  "tmdbId": 401981
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
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 141,
  "rating": 7.8,
  "imdbId": "tt0053221",
  "trailerUrl": "https://www.youtube.com/watch?v=VD55fwjvJlw",
  "overview": "A small-town sheriff in the American West enlists the help of a disabled man, a drunk, and a young gunfighter in his efforts to hold in jail the brother of the local bad guy.",
  "tmdbId": 301
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 121,
  "rating": 8.2,
  "imdbId": "tt0061847",
  "trailerUrl": "https://www.youtube.com/watch?v=GTkERWlcJB0",
  "overview": "The mother of a feudal lord's only heir is kidnapped away from her husband by the lord. The husband and his samurai father must decide whether to accept the unjust decision, or risk death to get her back.",
  "tmdbId": 27031
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
  "influencedBy": [],
  "influences": [
    "Lady Snowblood (1973)",
    "Sword of Doom (1966)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 96,
  "rating": 8.0,
  "imdbId": "tt0056443",
  "trailerUrl": "https://www.youtube.com/watch?v=Nkrc_FLZWEs",
  "overview": "Toshiro Mifune swaggers and snarls to brilliant comic effect in Kurosawa's tightly paced, beautifully composed \"Sanjuro.\" In this companion piece and sequel to \"Yojimbo,\" jaded samurai Sanjuro helps an idealistic group of young warriors weed out their clan's evil influences, and in the process turns",
  "tmdbId": 11712
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Point Blank legacy"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 127,
  "rating": 8.4,
  "imdbId": "tt0114369",
  "trailerUrl": "https://www.youtube.com/watch?v=KPOuJGkpblk",
  "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Somerset researches each sin in an effort to get inside the k",
  "tmdbId": 807
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
  "influencedBy": [],
  "influences": [
    "Harakiri (1962)",
    "Yojimbo (1961)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 207,
  "rating": 8.5,
  "imdbId": "tt0047478",
  "trailerUrl": "https://www.youtube.com/watch?v=RsRN65PlaIM",
  "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
  "tmdbId": 346
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
  "influencedBy": [],
  "influences": [
    "The Mack (1973)",
    "Coffy (1973)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 4,
  "size": 20,
  "runtime": 100,
  "rating": 6.4,
  "imdbId": "tt0067741",
  "trailerUrl": "https://www.youtube.com/watch?v=hwrLNTN7-Fs",
  "overview": "Cool Black private eye John Shaft is hired by a crime lord to find and retrieve his kidnapped daughter.",
  "tmdbId": 482
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
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 85,
  "rating": 6.9,
  "imdbId": "tt0081506",
  "trailerUrl": "https://www.youtube.com/watch?v=ZxAPEyzcCtU",
  "overview": "A Shogun who grew paranoid as he became senile sent his ninjas to kill his samurai. They failed but did kill the samurai\u2019s wife. The samurai swore to avenge the death of his wife and roams the countryside with his toddler son in search of vengeance.",
  "tmdbId": 15119
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
  "color": "#7F8C8D",
  "influenceNotes": "",
  "influencedBy": [
    "Lock Stock and Two Smoking Barrels (1998)"
  ],
  "influences": [
    "Action comedies"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 103,
  "rating": 7.8,
  "imdbId": "tt0208092",
  "trailerUrl": "https://www.youtube.com/watch?v=ni4tEtuTccc",
  "overview": "Unscrupulous boxing promoters, violent bookies, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewellers fight to track down a priceless stolen diamond.",
  "tmdbId": 107
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 126,
  "rating": 6.9,
  "imdbId": "tt0266987",
  "trailerUrl": "https://www.youtube.com/watch?v=S7m6SWDODMA",
  "overview": "On the day of his retirement, a veteran CIA agent learns that his former prot\u00e9g\u00e9 has been arrested in China, is sentenced to die the next morning in Beijing, and that the CIA is considering letting that happen to avoid an international scandal.",
  "tmdbId": 1535
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
  "influenceCount": 1,
  "size": 15,
  "runtime": 91,
  "rating": 6.2,
  "imdbId": "tt0069332",
  "trailerUrl": "https://www.youtube.com/watch?v=AdNdQjAWG2w",
  "overview": "Priest, a suave top-rung New York City drug dealer, decides that he wants to get out of his dangerous trade. Working with his reluctant friend, Eddie, Priest devises a scheme that will allow him to make a big deal and then retire. When a desperate street dealer informs the police of Priest's activit",
  "tmdbId": 21968
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 106,
  "rating": 5.7,
  "imdbId": "tt0073768",
  "trailerUrl": "https://www.youtube.com/watch?v=nbji7on0dxQ",
  "overview": "Clint must flee after his wife is killed by a psychopathic cop, who tries to pin the murder on him.",
  "tmdbId": 5725
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Point Blank (1967)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 97,
  "rating": 7.6,
  "imdbId": "tt0051036",
  "trailerUrl": "https://www.youtube.com/watch?v=Ewz4kPADLks",
  "overview": "New York City newspaper writer J.J. Hunsecker holds considerable sway over public opinion with his Broadway column, but one thing that he can't control is his younger sister, Susan, who is in a relationship with aspiring jazz guitarist Steve Dallas. Hunsecker strongly disapproves of the romance and ",
  "tmdbId": 976
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
  "posterUrl": "https://image.tmdb.org/t/p/w400/7xBkkPorAY59lf2djiaXLy3ymxT.jpg",
  "color": "#8E44AD",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 89,
  "rating": 6.0,
  "imdbId": "tt0201276",
  "overview": "When master swordsman Mikogami Genshiro of the Ono fencing school returns to find that his ailing sensei has been murdered in the dead of night, he must find the culprit and exact revenge.  His return sets off a series of violent incidents and incites a high ranked female skilled in sword to test hi",
  "tmdbId": 654176
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
  "influenceCount": 1,
  "size": 15,
  "runtime": 122,
  "rating": 7.7,
  "imdbId": "tt0060277",
  "trailerUrl": "https://www.youtube.com/watch?v=FGhpT8PGslA",
  "overview": "Ryunosuke, a gifted swordsman plying his trade during the turbulent final days of Shogunate rule, has no moral code and kills without remorse. It\u2019s a way of life that leads to madness.",
  "tmdbId": 19884
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
  "influenceCount": 0,
  "size": 12
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 1 (2003)",
    "Kung Fu Hustle (2004)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 116,
  "rating": 7.5,
  "imdbId": "tt0078243",
  "overview": "During the Qing Dynasty, a fishmonger is killed by the reigning Manchu government for supporting the anti-government movement; his son manages to escape to Shaolin Temple, where he plans to learn its secretive brand of martial arts to seek revenge.",
  "tmdbId": 11841
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
  "color": "#D35400",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 1 (2003)",
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 121,
  "rating": 5.8,
  "imdbId": "tt0106350",
  "overview": "After being thrown out of her home, a young woman decides to disguise herself as a man to survive the ruthless Wild West.",
  "tmdbId": 71940
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
  "influenceCount": 1,
  "size": 15,
  "runtime": 111,
  "rating": 7.3,
  "imdbId": "tt0063501",
  "trailerUrl": "https://www.youtube.com/watch?v=gp4LGLIComk",
  "overview": "Unofficial lawman John Corbett hunts down Cuchillo Sanchez, a Mexican peasant accused of raping and killing a 12-year-old girl.",
  "tmdbId": 16662
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 1 (2003)",
    "Ichi the Killer (2001)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.2,
  "imdbId": "tt0068767",
  "trailerUrl": "https://www.youtube.com/watch?v=oO9PVJdgu4M",
  "overview": "Chen Chen returns to his former school in Shanghai when he learns that his beloved instructor has been murdered. While investigating the man's death, Chen discovers that a rival Japanese school is operating a drug smuggling ring. To avenge his master\u2019s death, Chen takes on both Chinese and Japanese ",
  "tmdbId": 11713
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
  "color": "#95A5A6",
  "influenceNotes": "",
  "influencedBy": [
    "Crime drama",
    "Heat"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 152,
  "rating": 8.5,
  "imdbId": "tt0468569",
  "trailerUrl": "https://www.youtube.com/watch?v=vbjYVETxZqM",
  "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos u",
  "tmdbId": 155
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
  "influenceCount": 2,
  "size": 15,
  "runtime": 161,
  "rating": 8.5,
  "imdbId": "tt0060196",
  "trailerUrl": "https://www.youtube.com/watch?v=WCnRSl24FPA",
  "overview": "While the Civil War rages on between the Union and the Confederacy, three men \u2013 a quiet loner, a ruthless hitman, and a Mexican bandit \u2013 comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
  "tmdbId": 429
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
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 106,
  "rating": 7.5,
  "imdbId": "tt0063032",
  "trailerUrl": "https://www.youtube.com/watch?v=nMrhQp35uUo",
  "overview": "A mute gunslinger fights in the defense of a group of outlaws and a vengeful young widow, against a group of ruthless bounty hunters.",
  "tmdbId": 9028
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
  "posterUrl": "https://image.tmdb.org/t/p/w400/1YrRviphr3eXPus9iHyQX56QgIE.jpg",
  "color": "#F4D03F",
  "influenceNotes": "",
  "influencedBy": [
    "Television adaptation"
  ],
  "influences": [
    "Enter the Dragon (1973)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 119,
  "rating": 5.6,
  "imdbId": "tt0990407",
  "trailerUrl": "https://www.youtube.com/watch?v=PMA-taGtfXs",
  "overview": "Britt Reid, the heir to the largest newspaper fortune in Los Angeles, is a spoiled playboy who has been, thus far, happy to lead an aimless life. After his father dies, Britt meets Kato, a resourceful company employee. Realizing that they have the talent and resources to make something of their live",
  "tmdbId": 40805
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
  "color": "#34495E",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Gun Crazy (1950)",
    "Point Blank (1967)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 103,
  "rating": 7.3,
  "imdbId": "tt0038669",
  "trailerUrl": "https://www.youtube.com/watch?v=Cq_gxqCaFms",
  "overview": "Two hit men walk into a diner asking for a man called \"the Swede\". When the killers find the Swede, he's expecting them and doesn't put up a fight. Since the Swede had a life insurance policy, an investigator, on a hunch, decides to look into the murder. As the Swede's past is laid bare, it comes to",
  "tmdbId": 14638
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
  "size": 15,
  "runtime": 110,
  "rating": 6.4,
  "imdbId": "tt0070350",
  "trailerUrl": "https://www.youtube.com/watch?v=Z1rmTT-4vzs",
  "overview": "A recently-released convict becomes the most powerful pimp in Oakland, but tragedy ensues when his activities draw the ire of two corrupt cops and the crime lord he once worked for.",
  "tmdbId": 29515
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Action comedies"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 113,
  "rating": 6.4,
  "imdbId": "tt11671006",
  "trailerUrl": "https://www.youtube.com/watch?v=urqy8DrcGBs",
  "overview": "A case of mistaken identity forces a bumbling entrepreneur to team up with a notorious assassin known as The Man from Toronto in hopes of staying alive.",
  "tmdbId": 667739
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
  "color": "#95A5A6",
  "influenceNotes": "",
  "influencedBy": [
    "Cyberpunk",
    "Hong Kong action"
  ],
  "influences": [
    "Kill Bill Vol 1 (2003)",
    "John Wick (2014)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 136,
  "rating": 8.2,
  "imdbId": "tt0133093",
  "trailerUrl": "https://www.youtube.com/watch?v=d0XTFAMmhrE",
  "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  "tmdbId": 603
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 125,
  "rating": 7.1,
  "imdbId": "tt7556122",
  "trailerUrl": "https://www.youtube.com/watch?v=aK-X2d0lJ_s",
  "overview": "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
  "tmdbId": 547016
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
    "Anna (2019)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 111,
  "rating": 8.3,
  "imdbId": "tt0110413",
  "trailerUrl": "https://www.youtube.com/watch?v=DD-6bmOY__g",
  "overview": "L\u00e9on, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in L\u00e9on",
  "tmdbId": 101
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
  "influencedBy": [],
  "influences": [
    "Zatoichi sequels (1963-1973)",
    "Kill Bill Vol 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 96,
  "rating": 7.3,
  "imdbId": "tt0056714",
  "trailerUrl": "https://www.youtube.com/watch?v=KihzozGuhZU",
  "overview": "The adventures of a blind, gambling masseur and master swordsman. Zatoichi targets a yakuza-controlled village, because war with a neighbouring town's smaller gang is brewing.",
  "tmdbId": 16692
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
  "color": "#95A5A6",
  "influenceNotes": "",
  "influencedBy": [],
  "influences": [
    "Spaghetti westerns",
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 145,
  "rating": 7.6,
  "imdbId": "tt0065214",
  "trailerUrl": "https://www.youtube.com/watch?v=kdy0t_8mQBw",
  "overview": "An aging group of outlaws look for one last big score as the \"traditional\" American West is disappearing around them.",
  "tmdbId": 576
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 6.4,
  "imdbId": "tt0072285",
  "trailerUrl": "https://www.youtube.com/watch?v=Lt8mpuYPcRY",
  "overview": "Madeleine, rendered mute after being sexually assaulted as a youth, accepts a lift from a wealthy and sadistic pimp who soon enslaves her into his prostitution racket. Despite her limited means, Madeleine embarks on a bloody road to revenge against her captors.",
  "tmdbId": 15018
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
  "influenceCount": 0,
  "size": 12,
  "runtime": 91,
  "rating": 6.4,
  "imdbId": "tt0072325",
  "trailerUrl": "https://www.youtube.com/watch?v=0NYQAfc2Gmc",
  "overview": "Truck Turner and his partner Jerry, who make their living as bounty hunters in Los Angeles, are hired to hunt down Gator, a pimp who has skipped bail.",
  "tmdbId": 22121
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
  "influencedBy": [],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 102,
  "rating": 6.9,
  "imdbId": "tt0067893",
  "trailerUrl": "https://www.youtube.com/watch?v=J5sxfIBCTY0",
  "overview": "A driver and mechanic drag racing for money cross paths with a female hitchhiker and a drifter who challenges them to a cross-country race.",
  "tmdbId": 27236
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
  "influencedBy": [],
  "influences": [
    "Horror-action hybrids"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 93,
  "rating": 5.6,
  "imdbId": "tt0084854",
  "trailerUrl": "https://www.youtube.com/watch?v=IhbwHcrcJuM",
  "overview": "International terrorists attempt to kidnap a wealthy couple's child. Their plan comes unstuck, however, when a deadly Black Mamba, sent by mistake instead of a harmless snake, escapes and terrorizes both them and their hostages.",
  "tmdbId": 30789
},
{
  "id": "vixen-1968",
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
  "size": 15,
  "runtime": 71,
  "rating": 5.4,
  "imdbId": "tt0063787",
  "trailerUrl": "https://www.youtube.com/watch?v=FuMIkgbiyGI",
  "overview": "In a Canadian mountain resort, Vixen resides with her naive pilot husband. While he's away flying in tourists, she sleeps with practically everybody including a husband and his wife, and even her biker brother. However, the only one she won't bed is her brother's friend... who is Black.",
  "tmdbId": 5721
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
  "color": "#2980B9",
  "influenceNotes": "",
  "influencedBy": [
    "Atomic Blonde"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 141,
  "rating": 7.2,
  "imdbId": "tt0451279",
  "trailerUrl": "https://www.youtube.com/watch?v=VSB4wGIdDwo",
  "overview": "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
  "tmdbId": 297762
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
    "Ford Westerns"
  ],
  "influences": [
    "A Fistful of Dollars (1964)",
    "Kill Bill Vol 1 (2003)",
    "Kill Bill Vol 2 (2004)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 110,
  "rating": 8.1,
  "imdbId": "tt0055630",
  "trailerUrl": "https://www.youtube.com/watch?v=nazk6Zpm_Ks",
  "overview": "A nameless ronin, or samurai with no master, enters a small village in feudal Japan where two rival businessmen are struggling for control of the local gambling trade. Taking the name Sanjuro Kuwabatake, the ronin convinces both silk merchant Tazaemon and sake merchant Tokuemon to hire him as a pers",
  "tmdbId": 11878
},
{
  "id": "city-on-fire-1987",
  "name": "City on Fire",
  "fullTitle": "City on Fire (1987)",
  "year": 1987,
  "director": "Ringo Lam",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "hong-kong-action",
    "crime",
    "heist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/uOgCKhHsQvOFVNxOUdewPwc0Z9N.jpg",
  "color": "#E91E63",
  "influenceNotes": "Undercover cop infiltrating criminals for heist gone wrong. Tarantino acknowledged taking the last 10 minutes and making an entire movie from it. Moral crossroads of loyalty vs justice directly inspired Mr. Orange's character arc.",
  "influencedBy": [],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 7.0,
  "imdbId": "tt0093435",
  "trailerUrl": "https://www.youtube.com/watch?v=KF1wFE5GfFY",
  "overview": "Ko Chow is an undercover cop who is under pressure from all sides. His boss, Inspector Lau, wants him to infiltrate a gang of ruthless jewel thieves; his girlfriend wants him to commit to marriage or she will leave Hong Kong with another lover; and he is being pursued by other cops who are unaware t",
  "tmdbId": 42120
},
{
  "id": "kansas-city-confidential-1952",
  "name": "Kansas City Confidential",
  "fullTitle": "Kansas City Confidential (1952)",
  "year": 1952,
  "director": "Phil Karlson",
  "country": "USA",
  "genres": [
    "noir",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "noir",
    "heist",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/2RcTYPzsR0QfN5d8g3HjIkIqcbg.jpg",
  "color": "#34495E",
  "influenceNotes": "Heist plot structure where criminals don't know each other's identities. Influenced Reservoir Dogs' narrative framework and paranoid atmosphere.",
  "influencedBy": [],
  "influences": [
    "The Killing (1956)",
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 100,
  "rating": 7.1,
  "imdbId": "tt0044789",
  "overview": "An ex-convict sets out to uncover who framed him for an armored car robbery.",
  "tmdbId": 21296
},
{
  "id": "the-taking-of-pelham-one-two-three-1974",
  "name": "The Taking of Pelham One Two Three",
  "fullTitle": "The Taking of Pelham One Two Three (1974)",
  "year": 1974,
  "director": "Joseph Sargent",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "action"
  ],
  "subclouds": [
    "crime",
    "heist",
    "70s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/vNhywp9w1DVG6BytxKp4kjtaaGC.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Originated the color-coded aliases (Mr. Blue, Mr. Green, etc.) that Tarantino adopted for Reservoir Dogs. Tense hostage situation and professional criminals template.",
  "influencedBy": [],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 104,
  "rating": 7.5,
  "imdbId": "tt0072251",
  "trailerUrl": "https://www.youtube.com/watch?v=_WnD63TiceA",
  "overview": "In New York, armed men hijack a subway car and demand a ransom for the passengers. Even if it's paid, how could they get away?",
  "tmdbId": 8333
},
{
  "id": "the-killing-1956",
  "name": "The Killing",
  "fullTitle": "The Killing (1956)",
  "year": 1956,
  "director": "Stanley Kubrick",
  "country": "USA",
  "genres": [
    "noir",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "noir",
    "heist",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/A6VzUPcADZGYdGHlVdWvpMNDF5d.jpg",
  "color": "#34495E",
  "influenceNotes": "Tarantino called Reservoir Dogs 'my Killing, my take on that kind of heist movie.' Non-linear narrative and doomed heist structure directly influenced.",
  "influencedBy": [
    "Kansas City Confidential (1952)"
  ],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 85,
  "rating": 7.7,
  "imdbId": "tt0049406",
  "trailerUrl": "https://www.youtube.com/watch?v=c0Odg-GY40w",
  "overview": "Career criminal Johnny Clay recruits a sharpshooter, a crooked police officer, a bartender and a betting teller named George, among others, for one last job before he goes straight and gets married. But when George tells his restless wife about the scheme to steal millions from the racetrack where h",
  "tmdbId": 247
},
{
  "id": "mean-streets-1973",
  "name": "Mean Streets",
  "fullTitle": "Mean Streets (1973)",
  "year": 1973,
  "director": "Martin Scorsese",
  "country": "USA",
  "genres": [
    "crime",
    "drama",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "neo-noir",
    "70s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rzVTH9ylCw0owKkMZQVz2Eve97E.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Scorsese's stylized crime narrative with rock soundtrack influenced Tarantino's approach to crime drama. Character-driven violence and moral ambiguity.",
  "influencedBy": [
    "Italian neorealism",
    "Film noir"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 111,
  "rating": 7.1,
  "imdbId": "tt0070379",
  "trailerUrl": "https://www.youtube.com/watch?v=zwVqYS3kcUU",
  "overview": "A small-time hood must choose from among love, friendship and the chance to rise within the mob.",
  "tmdbId": 203
},
{
  "id": "the-big-combo-1955",
  "name": "The Big Combo",
  "fullTitle": "The Big Combo (1955)",
  "year": 1955,
  "director": "Joseph H. Lewis",
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
  "posterUrl": "https://image.tmdb.org/t/p/w400/fltH7VmdZQeCRMwionxfYKOZoPg.jpg",
  "color": "#34495E",
  "influenceNotes": "Cop-in-chair torture scene directly inspired Mr. Blonde's torture of officer Marvin Nash in Reservoir Dogs.",
  "influencedBy": [],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 88,
  "rating": 7.0,
  "imdbId": "tt0047878",
  "overview": "Police Lt. Leonard Diamond vies to bring a clever, well connected, and sadistic gangster to justice all the while obsessing over the gangster's girlfriend.",
  "tmdbId": 22342
},
{
  "id": "a-better-tomorrow-ii-1987",
  "name": "A Better Tomorrow II",
  "fullTitle": "A Better Tomorrow II (1987)",
  "year": 1987,
  "director": "John Woo",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "hong-kong-action",
    "heroic-bloodshed"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/e8352Dw1SeM4rNAGYDZVkQ0aenz.jpg",
  "color": "#E91E63",
  "influenceNotes": "Black suits worn by Reservoir Dogs crew are direct tribute to this film. John Woo's stylized violence aesthetic influenced Tarantino's visual language.",
  "influencedBy": [
    "A Better Tomorrow (1986)"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 103,
  "rating": 7.1,
  "imdbId": "tt0094357",
  "trailerUrl": "https://www.youtube.com/watch?v=p5CfkEB1RaA",
  "overview": "A restauranteur teams up with a police officer and his ex-con brother to avenge the death of a friend's daughter.",
  "tmdbId": 18305
},
{
  "id": "black-sabbath-1963",
  "name": "Black Sabbath",
  "fullTitle": "Black Sabbath (1963)",
  "year": 1963,
  "director": "Mario Bava",
  "country": "Italy",
  "genres": [
    "horror",
    "anthology",
    "thriller"
  ],
  "subclouds": [
    "italian-cinema",
    "horror",
    "anthology"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/vrMcn6CKrLjWAtHHMFL7cj8A5au.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Three-part horror anthology structure inspired Pulp Fiction's non-linear, multi-story format. Tarantino wanted to do for crime films what Bava did for horror. Eric Stoltz's character offers 'Bava' heroin as direct reference.",
  "influencedBy": [],
  "influences": [
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 95,
  "rating": 7.2,
  "imdbId": "tt0057603",
  "trailerUrl": "https://www.youtube.com/watch?v=t7MyJMlOpdE",
  "overview": "Three tales of supernatural horror include a woman plagued by threatening phone calls, a family targeted by vampiric monsters, and a deceased medium who wreaks havoc upon the living.",
  "tmdbId": 28043
},
{
  "id": "band-of-outsiders-1964",
  "name": "Band of Outsiders",
  "fullTitle": "Band of Outsiders (1964)",
  "year": 1964,
  "director": "Jean-Luc Godard",
  "country": "France",
  "genres": [
    "crime",
    "drama",
    "romance"
  ],
  "subclouds": [
    "french-new-wave",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9oqyj79xmcypxLajJdefOtrYx64.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Madison dance scene inspired Jack Rabbit Slim's twist contest. Mia Wallace's look influenced by Anna Karina. Tarantino's production company 'A Band Apart' named after French title 'Bande \u00e0 part.'",
  "influencedBy": [
    "French New Wave"
  ],
  "influences": [
    "Pulp Fiction (1994)",
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 97,
  "rating": 7.5,
  "imdbId": "tt0057869",
  "trailerUrl": "https://www.youtube.com/watch?v=TM0lC2QCiSU",
  "overview": "Cinephile slackers Franz and Arthur spend their days mimicking the antiheroes of Hollywood noirs and Westerns while pursuing the lovely Odile. The misfit trio upends convention at every turn, be it through choreographed dances in caf\u00e9s or frolicsome romps through the Louvre. Eventually, their romant",
  "tmdbId": 8073
},
{
  "id": "blow-out-1981",
  "name": "Blow Out",
  "fullTitle": "Blow Out (1981)",
  "year": 1981,
  "director": "Brian De Palma",
  "country": "USA",
  "genres": [
    "thriller",
    "mystery",
    "crime"
  ],
  "subclouds": [
    "neo-noir",
    "thriller"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/weMW1wLzeagP3tw6BfmYf1iL7dz.jpg",
  "color": "#34495E",
  "influenceNotes": "De Palma's stylized thriller aesthetic and narrative complexity influenced Pulp Fiction's structure. Manipulation of time and perspective.",
  "influencedBy": [
    "Blow-Up (1966)",
    "The Conversation (1974)"
  ],
  "influences": [
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.4,
  "imdbId": "tt0082085",
  "trailerUrl": "https://www.youtube.com/watch?v=dgWfyFgEsO8",
  "overview": "While recording sound effects for a slasher flick, Jack Terry stumbles upon a real-life horror: a car careening off a bridge and into a river. Jack jumps into the water and fishes out Sally from the car, but the other passenger is already dead \u2014 a governor intending to run for president. As Jack doe",
  "tmdbId": 11644
},
{
  "id": "bonnie-and-clyde-1967",
  "name": "Bonnie and Clyde",
  "fullTitle": "Bonnie and Clyde (1967)",
  "year": 1967,
  "director": "Arthur Penn",
  "country": "USA",
  "genres": [
    "crime",
    "drama",
    "action"
  ],
  "subclouds": [
    "crime",
    "new-hollywood",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/sCSQFK9kMsprT4jgWqgw82dT6WI.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Revolutionary stylized violence and sympathetic criminals influenced Tarantino's approach to crime protagonists. New Hollywood landmark film.",
  "influencedBy": [
    "Gun Crazy (1950)",
    "French New Wave"
  ],
  "influences": [
    "Pulp Fiction (1994)",
    "Natural Born Killers (1994)"
  ],
  "influenceCount": 3,
  "size": 20,
  "runtime": 111,
  "rating": 7.5,
  "imdbId": "tt0061418",
  "trailerUrl": "https://www.youtube.com/watch?v=dJsnF6Of2G4",
  "overview": "In the 1930s, bored European-American waitress Bonnie Parker falls in love with a European-American ex-con named Clyde Barrow and together they start a violent crime spree through the country, stealing cars and robbing banks.",
  "tmdbId": 475
},
{
  "id": "repo-man-1984",
  "name": "Repo Man",
  "fullTitle": "Repo Man (1984)",
  "year": 1984,
  "director": "Alex Cox",
  "country": "USA",
  "genres": [
    "sci-fi",
    "comedy",
    "punk"
  ],
  "subclouds": [
    "cult-cinema",
    "punk",
    "sci-fi"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/bjuu5UceuVUNUjnOC2fBzL3hZKC.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Glowing trunk MacGuffin inspired by Kiss Me Deadly influenced Pulp Fiction's mysterious briefcase. Punk aesthetic and deadpan humor.",
  "influencedBy": [
    "Punk rock culture",
    "B-movies"
  ],
  "influences": [
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 92,
  "rating": 6.7,
  "imdbId": "tt0087995",
  "trailerUrl": "https://www.youtube.com/watch?v=NK8ETgSLRpA",
  "overview": "A down and out young punk gets a job working with a seasoned repo man, but what awaits him in his new career is a series of outlandish adventures revolving around aliens, the CIA, and a most wanted '64 Chevy.",
  "tmdbId": 13820
},
{
  "id": "across-110th-street-1972",
  "name": "Across 110th Street",
  "fullTitle": "Across 110th Street (1972)",
  "year": 1972,
  "director": "Barry Shear",
  "country": "USA",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "blaxploitation",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/2RFefK8DS8eUEuYyiN3tLAyM5IX.jpg",
  "color": "#9B59B6",
  "influenceNotes": "Gritty Harlem crime thriller with aging characters and moral complexity. Theme song used in Jackie Brown opening credits. Influenced Jackie Brown's tone and setting.",
  "influencedBy": [
    "Shaft (1971)"
  ],
  "influences": [
    "Jackie Brown (1997)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 102,
  "rating": 6.7,
  "imdbId": "tt0068168",
  "trailerUrl": "https://www.youtube.com/watch?v=iOZ3MqdHzzQ",
  "overview": "In a daring robbery, some $300,000 is taken from the Italian mob. Several mafiosi are killed, as are two policemen. Lt. Pope and Capt. Mattelli are two New York City cops trying to break the case. Three small-time criminals are on the run with the money. Will the mafia catch them first, or will the ",
  "tmdbId": 23847
},
{
  "id": "vanishing-point-1971",
  "name": "Vanishing Point",
  "fullTitle": "Vanishing Point (1971)",
  "year": 1971,
  "director": "Richard C. Sarafian",
  "country": "USA",
  "genres": [
    "action",
    "thriller",
    "car-chase"
  ],
  "subclouds": [
    "car-chase",
    "70s-cinema",
    "existential"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/1ThnpFx2G2HPhecvODGFEQxfOpO.jpg",
  "color": "#F39C12",
  "influenceNotes": "Existential car-chase film with Dodge Challenger. Direct influence on Death Proof's car-as-character philosophy and stunts. Anti-hero driver archetype.",
  "influencedBy": [
    "Easy Rider (1969)"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 99,
  "rating": 7.1,
  "imdbId": "tt0067927",
  "trailerUrl": "https://www.youtube.com/watch?v=0P2VCMT8vAw",
  "overview": "Kowalski works for a car delivery service, and takes delivery of a 1970 Dodge Challenger to drive from Colorado to San Francisco. Shortly after pickup, he takes a bet to get the car there in less than 15 hours.",
  "tmdbId": 11951
},
{
  "id": "dirty-mary-crazy-larry-1974",
  "name": "Dirty Mary Crazy Larry",
  "fullTitle": "Dirty Mary Crazy Larry (1974)",
  "year": 1974,
  "director": "John Hough",
  "country": "USA",
  "genres": [
    "action",
    "crime",
    "car-chase"
  ],
  "subclouds": [
    "car-chase",
    "70s-cinema",
    "exploitation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/8hLvJUBEFFQHgiJIPXywRD9KZft.jpg",
  "color": "#E74C3C",
  "influenceNotes": "High-speed car chase film with rebellious characters. Influenced Death Proof's practical stunt work and 70s aesthetic. Raw action approach.",
  "influencedBy": [],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 93,
  "rating": 6.3,
  "imdbId": "tt0071424",
  "trailerUrl": "https://www.youtube.com/watch?v=sujCL06VSXY",
  "overview": "Down-on-their-luck racers Larry and Deke steal from a supermarket manager to buy a car that will help them advance their racing chances. Their escape does not go as planned when Larry's one-night stand, Mary, tags along for the ride.",
  "tmdbId": 19017
},
{
  "id": "gone-in-60-seconds-1974",
  "name": "Gone in 60 Seconds",
  "fullTitle": "Gone in 60 Seconds (1974)",
  "year": 1974,
  "director": "H.B. Halicki",
  "country": "USA",
  "genres": [
    "action",
    "crime",
    "car-chase"
  ],
  "subclouds": [
    "car-chase",
    "exploitation",
    "70s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/4Fvmm9XhV5BUCfBjlX3S3DRPrmf.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Famous 40-minute car chase sequence. Pioneered practical car stunts that Death Proof emulated. Eleanor Mustang became iconic.",
  "influencedBy": [
    "Car chase films"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 6.2,
  "imdbId": "tt0071571",
  "trailerUrl": "https://www.youtube.com/watch?v=1HiKyQMyq_Q",
  "overview": "Insurance investigator Maindrian Pace and his team lead double-lives as unstoppable car thieves. When a South American drug lord pays Pace to steal 48 cars for him, all but one, a 1973 Ford Mustang, are in the bag. As Pace prepares to rip-off the fastback, codenamed \"Eleanor\", in Long Beach, he is u",
  "tmdbId": 16246
},
{
  "id": "the-dirty-dozen-1967",
  "name": "The Dirty Dozen",
  "fullTitle": "The Dirty Dozen (1967)",
  "year": 1967,
  "director": "Robert Aldrich",
  "country": "USA|UK",
  "genres": [
    "war",
    "action",
    "adventure"
  ],
  "subclouds": [
    "men-on-mission",
    "war",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/tFWWsuhp22zJ6OG6QepJIiPUfeF.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Definitive men-on-a-mission WWII film. Ragtag team of criminals on dangerous mission directly inspired Basterds' structure. Anti-authority military misfits.",
  "influencedBy": [],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 149,
  "rating": 7.6,
  "imdbId": "tt0061578",
  "trailerUrl": "https://www.youtube.com/watch?v=ff1V6ywnWcY",
  "overview": "12 American military prisoners in World War II are ordered to infiltrate a well-guarded enemy ch\u00e2teau and kill the Nazi officers vacationing there. The soldiers, most of whom are facing death sentences for a variety of violent crimes, agree to the mission and the possible commuting of their sentence",
  "tmdbId": 1654
},
{
  "id": "where-eagles-dare-1968",
  "name": "Where Eagles Dare",
  "fullTitle": "Where Eagles Dare (1968)",
  "year": 1968,
  "director": "Brian G. Hutton",
  "country": "UK|USA",
  "genres": [
    "war",
    "action",
    "adventure"
  ],
  "subclouds": [
    "men-on-mission",
    "war",
    "espionage"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/dnyiVS4Ad4w4rfS4Bm1YalEdonx.jpg",
  "color": "#2C3E50",
  "influenceNotes": "Elaborate WWII infiltration mission behind enemy lines. Complex plot with double-crosses influenced Basterds' espionage elements. Castle raid parallels.",
  "influencedBy": [
    "The Guns of Navarone (1961)"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 155,
  "rating": 7.5,
  "imdbId": "tt0065207",
  "trailerUrl": "https://www.youtube.com/watch?v=J80nOz7wFqY",
  "overview": "World War II is raging, and an American general has been captured and is being held hostage in the Schloss Adler, a Bavarian castle that's nearly impossible to breach. It's up to a group of skilled Allied soldiers to liberate the general before it's too late.",
  "tmdbId": 11046
},
{
  "id": "the-inglorious-bastards-1978",
  "name": "The Inglorious Bastards",
  "fullTitle": "The Inglorious Bastards (1978)",
  "year": 1978,
  "director": "Enzo G. Castellari",
  "country": "Italy",
  "genres": [
    "war",
    "action",
    "adventure"
  ],
  "subclouds": [
    "men-on-mission",
    "war",
    "italian-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/8f7PoX7TveyKrndh3bZZcBvR55Z.jpg",
  "color": "#2C3E50",
  "influenceNotes": "Italian exploitation war film that provided the title for Tarantino's film. Escaped military prisoners on mission. Spaghetti war movie aesthetic.",
  "influencedBy": [
    "The Dirty Dozen (1967)"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 99,
  "rating": 6.3,
  "imdbId": "tt0076584",
  "trailerUrl": "https://www.youtube.com/watch?v=qH2PeTVIpfs",
  "overview": "Set in Europe during WWII, a group of American soldiers on their way to military prison are beset upon by a German artillery attack, escaping with Switzerland in their sights. Before making it any farther, they volunteer to steal a V2 warhead for the French Underground - taking them deep into the he",
  "tmdbId": 22311
},
{
  "id": "the-mercenary-1968",
  "name": "The Mercenary",
  "fullTitle": "The Mercenary (1968)",
  "year": 1968,
  "director": "Sergio Corbucci",
  "country": "Italy|Spain",
  "genres": [
    "western",
    "action",
    "comedy"
  ],
  "subclouds": [
    "spaghetti-western",
    "revolutionary"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/gIRRNEpkZg41syNBw0phpQfXa3C.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Political spaghetti western with Mexican Revolution setting. Franco Nero performance influenced Django Unchained. Slave liberation themes.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 101,
  "rating": 6.9,
  "imdbId": "tt0063293",
  "trailerUrl": "https://www.youtube.com/watch?v=v2VruFrIoGA",
  "overview": "While a Mexican revolutionary lies low as a U.S. rodeo clown, the cynical Polish mercenary who tutored the idealistic peasant tells how he and a dedicated female radical fought for the soul of the guerrilla general Paco, as Mexicans threw off repressive government and all-powerful landowners in the ",
  "tmdbId": 48169
},
{
  "id": "mandingo-1975",
  "name": "Mandingo",
  "fullTitle": "Mandingo (1975)",
  "year": 1975,
  "director": "Richard Fleischer",
  "country": "USA",
  "genres": [
    "drama",
    "exploitation",
    "historical"
  ],
  "subclouds": [
    "exploitation",
    "slavery",
    "controversial"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/bZXmb4HQt24OAzdKoBdSEqcFvBw.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Controversial slavery exploitation film. Brutal depiction of antebellum South influenced Django's unflinching violence. Mandingo fighting referenced in Django.",
  "influencedBy": [
    "Blaxploitation",
    "Southern Gothic"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 127,
  "rating": 6.6,
  "imdbId": "tt0073349",
  "trailerUrl": "https://www.youtube.com/watch?v=Px83VZ0QB6s",
  "overview": "Warren Maxwell, the owner of a run-down plantation, pressures his son, Hammond, to marry and produce an heir to inherit the plantation. Hammond settles on his own cousin, Blanche, but purchases a sex slave when he returns from the honeymoon. He also buys his father a new Mandingo slave named Mede to",
  "tmdbId": 38027
},
{
  "id": "the-thing-1982",
  "name": "The Thing",
  "fullTitle": "The Thing (1982)",
  "year": 1982,
  "director": "John Carpenter",
  "country": "USA",
  "genres": [
    "horror",
    "sci-fi",
    "thriller"
  ],
  "subclouds": [
    "horror",
    "paranoia",
    "isolation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
  "color": "#C0392B",
  "influenceNotes": "Paranoid isolated group unable to trust each other. Influenced Reservoir Dogs' paranoia and Hateful Eight's snowbound isolation. Ennio Morricone score used in Hateful Eight.",
  "influencedBy": [
    "The Thing from Another World (1951)"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 109,
  "rating": 8.1,
  "imdbId": "tt0084787",
  "trailerUrl": "https://www.youtube.com/watch?v=l8A_DMMJC_Q",
  "overview": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
  "tmdbId": 1091
},
{
  "id": "stagecoach-1939",
  "name": "Stagecoach",
  "fullTitle": "Stagecoach (1939)",
  "year": 1939,
  "director": "John Ford",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "action"
  ],
  "subclouds": [
    "western",
    "foundation",
    "classic-hollywood"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/zgMnfnwWZ3nkx4t0bUDEKtW24O8.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Ensemble trapped in stagecoach with hidden tensions. Classical western chamber piece influenced Hateful Eight's one-location structure.",
  "influencedBy": [],
  "influences": [
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 96,
  "rating": 7.6,
  "imdbId": "tt0031971",
  "trailerUrl": "https://www.youtube.com/watch?v=OE-VWDsdkwM",
  "overview": "A group of people traveling on a stagecoach find their journey complicated by the threat of Geronimo, and learn something about each other in the process.",
  "tmdbId": 995
},
{
  "id": "le-samoura-1967",
  "name": "Le Samoura\u00ef",
  "fullTitle": "Le Samoura\u00ef (1967)",
  "year": 1967,
  "director": "Jean-Pierre Melville",
  "country": "France",
  "genres": [
    "crime",
    "thriller",
    "noir"
  ],
  "subclouds": [
    "french-crime",
    "neo-noir",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/5Fa6o5nfUPEatQ9b3OwEvdEdR7T.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Minimalist crime thriller with honor code. Melville's cool aesthetic influenced Tarantino's crime films. Professional killer with code of ethics.",
  "influencedBy": [
    "Film noir",
    "Samurai code"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 5,
  "size": 25,
  "runtime": 105,
  "rating": 7.8,
  "imdbId": "tt0062229",
  "trailerUrl": "https://www.youtube.com/watch?v=PTFV07ah4fY",
  "overview": "After carrying out a flawlessly planned hit, Jef Costello, a contract killer with samurai instincts, finds himself caught between a persistent police investigator and a ruthless employer, and not even his armor of fedora and trench coat can protect him.",
  "tmdbId": 5511
},
{
  "id": "bob-le-flambeur-1956",
  "name": "Bob le Flambeur",
  "fullTitle": "Bob le Flambeur (1956)",
  "year": 1956,
  "director": "Jean-Pierre Melville",
  "country": "France",
  "genres": [
    "crime",
    "thriller",
    "noir"
  ],
  "subclouds": [
    "french-crime",
    "heist",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/3CIfIDtD1I1rYY3ooaya8iZHlD8.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Casino heist film with style over violence. Melville's cool professionalism influenced Tarantino's criminals. Established French heist aesthetic.",
  "influencedBy": [
    "Film noir",
    "French crime films"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "Ocean's Eleven (2001)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 103,
  "rating": 7.3,
  "imdbId": "tt0047892",
  "trailerUrl": "https://www.youtube.com/watch?v=1NJBRyUDeA4",
  "overview": "In Paris, Bob Montagne is practically synonymous with gambling -- and winning. He is kind, classy and well-liked by virtually everyone in town, including police inspector Ledru. However, when Bob's luck turns sour, he begins to lose friends and makes the most desperate gamble of his life: to rob the",
  "tmdbId": 26030
},
{
  "id": "le-cercle-rouge-1970",
  "name": "Le Cercle Rouge",
  "fullTitle": "Le Cercle Rouge (1970)",
  "year": 1970,
  "director": "Jean-Pierre Melville",
  "country": "France|Italy",
  "genres": [
    "crime",
    "thriller",
    "noir"
  ],
  "subclouds": [
    "french-crime",
    "heist",
    "neo-noir"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/w56La43IJnGpLepgqfGCAZsbQPp.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Elaborate heist with professional criminals and code of silence. Melville's meditation on honor among thieves influenced Tarantino's crime philosophy.",
  "influencedBy": [
    "Le Samoura\\u00ef (1967)"
  ],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 140,
  "rating": 7.6,
  "imdbId": "tt0065531",
  "trailerUrl": "https://www.youtube.com/watch?v=taSkmZUa4dY",
  "overview": "When French criminal Corey gets released from prison, he resolves to never return. He is quickly pulled back into the underworld, however, after a chance encounter with escaped murderer Vogel. Along with former policeman and current alcoholic Jansen, they plot an intricate jewel heist. All the while",
  "tmdbId": 11657
},
{
  "id": "breathless-1960",
  "name": "Breathless",
  "fullTitle": "Breathless (1960)",
  "year": 1960,
  "director": "Jean-Luc Godard",
  "country": "France",
  "genres": [
    "crime",
    "drama",
    "romance"
  ],
  "subclouds": [
    "french-new-wave",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9Wx0Wdn2EOqeCZU4SP6tlS3LOml.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Revolutionary jump cuts and casual violence. French New Wave style influenced Tarantino's editing and dialogue. Breaking fourth wall and self-awareness.",
  "influencedBy": [
    "American film noir"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 90,
  "rating": 7.5,
  "imdbId": "tt0053472",
  "trailerUrl": "https://www.youtube.com/watch?v=UoICuMPOWrk",
  "overview": "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he attempts to persuade a girl to run away to Italy with him.",
  "tmdbId": 269
},
{
  "id": "the-400-blows-1959",
  "name": "The 400 Blows",
  "fullTitle": "The 400 Blows (1959)",
  "year": 1959,
  "director": "Fran\u00e7ois Truffaut",
  "country": "France",
  "genres": [
    "drama",
    "coming-of-age"
  ],
  "subclouds": [
    "french-new-wave",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/12PuU23kkDLvTd0nb8hMlE3oShB.jpg",
  "color": "#95A5A6",
  "influenceNotes": "French New Wave landmark. Innovative cinematography and naturalistic dialogue influenced Tarantino's approach to character.",
  "influencedBy": [
    "Italian neorealism"
  ],
  "influences": [
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 99,
  "rating": 8.0,
  "imdbId": "tt0053198",
  "trailerUrl": "https://www.youtube.com/watch?v=ICGZfU-9Yl0",
  "overview": "For young Parisian boy Antoine Doinel, life is one difficult situation after another. Surrounded by inconsiderate adults, including his neglectful parents, Antoine spends his days with his best friend, Rene, trying to plan for a better life. When one of their schemes goes awry, Antoine ends up in tr",
  "tmdbId": 147
},
{
  "id": "pierrot-le-fou-1965",
  "name": "Pierrot le Fou",
  "fullTitle": "Pierrot le Fou (1965)",
  "year": 1965,
  "director": "Jean-Luc Godard",
  "country": "France|Italy",
  "genres": [
    "crime",
    "drama",
    "romance"
  ],
  "subclouds": [
    "french-new-wave",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/i124H6iQB4CawrgFW9aZaZs7OBO.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Couple-on-the-run crime odyssey with vibrant colors. Godard's genre-blending influenced Tarantino's narrative experimentation.",
  "influencedBy": [
    "Breathless (1960)"
  ],
  "influences": [
    "Natural Born Killers (1994)",
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 110,
  "rating": 7.3,
  "imdbId": "tt0059592",
  "trailerUrl": "https://www.youtube.com/watch?v=TVvhJrrgfs0",
  "overview": "Pierrot escapes his boring society and travels from Paris to the Mediterranean Sea with Marianne, a girl chased by hit-men from Algeria. They lead an unorthodox life, always on the run.",
  "tmdbId": 2786
},
{
  "id": "shoot-the-piano-player-1960",
  "name": "Shoot the Piano Player",
  "fullTitle": "Shoot the Piano Player (1960)",
  "year": 1960,
  "director": "Fran\u00e7ois Truffaut",
  "country": "France",
  "genres": [
    "crime",
    "drama",
    "thriller"
  ],
  "subclouds": [
    "french-new-wave",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/6UhMIZaaoe2HUU7sEIwYpuYgugh.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Genre-mixing noir with sudden tonal shifts. Truffaut's playful approach to crime film influenced Tarantino's tonal flexibility.",
  "influencedBy": [
    "Film noir",
    "American B-movies"
  ],
  "influences": [
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 85,
  "rating": 7.2,
  "imdbId": "tt0054389",
  "trailerUrl": "https://www.youtube.com/watch?v=wCq3Q2jUg20",
  "overview": "Charlie is a former classical pianist who has changed his name and now plays jazz in a grimy Paris bar. When Charlie's brothers, Richard and Chico, surface and ask for Charlie's help while on the run from gangsters they have scammed, he aids their escape. Soon Charlie and Lena, a waitress at the sam",
  "tmdbId": 1818
},
{
  "id": "the-conformist-1970",
  "name": "The Conformist",
  "fullTitle": "The Conformist (1970)",
  "year": 1970,
  "director": "Bernardo Bertolucci",
  "country": "Italy|France|West Germany",
  "genres": [
    "drama",
    "thriller",
    "political"
  ],
  "subclouds": [
    "italian-cinema",
    "political"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/nLJjFRqIJAK8qz0OKYnpKCblZNK.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Visually stunning political thriller set in fascist Italy. Cinematography by Vittorio Storaro influenced Basterds' visual approach to WWII.",
  "influencedBy": [
    "Italian cinema"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.6,
  "imdbId": "tt0065571",
  "trailerUrl": "https://www.youtube.com/watch?v=04kMeEjVGIk",
  "overview": "A weak-willed Italian man becomes a fascist flunky who goes abroad to arrange the assassination of his old teacher, now a political dissident.",
  "tmdbId": 8416
},
{
  "id": "the-battle-of-algiers-1966",
  "name": "The Battle of Algiers",
  "fullTitle": "The Battle of Algiers (1966)",
  "year": 1966,
  "director": "Gillo Pontecorvo",
  "country": "Italy|Algeria",
  "genres": [
    "war",
    "drama",
    "political"
  ],
  "subclouds": [
    "war",
    "political",
    "italian-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/2p3AFtOHFvP6OeVMqlnL1zLKOqL.jpg",
  "color": "#27AE60",
  "influenceNotes": "Docudrama style guerrilla warfare. Urban resistance tactics influenced Basterds' portrayal of resistance fighters. Political complexity.",
  "influencedBy": [
    "Italian neorealism"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 121,
  "rating": 7.9,
  "imdbId": "tt0058946",
  "trailerUrl": "https://www.youtube.com/watch?v=vhhoS3zOskE",
  "overview": "Paratrooper commander Colonel Mathieu, a former French Resistance fighter during World War II, is sent to Algeria to reinforce efforts to squelch the uprisings of the Algerian War. There he faces Ali la Pointe, a former petty criminal who, as the leader of the Algerian Front de Liberation Nationale,",
  "tmdbId": 17295
},
{
  "id": "army-of-shadows-1969",
  "name": "Army of Shadows",
  "fullTitle": "Army of Shadows (1969)",
  "year": 1969,
  "director": "Jean-Pierre Melville",
  "country": "France|Italy",
  "genres": [
    "war",
    "drama",
    "thriller"
  ],
  "subclouds": [
    "war",
    "french-resistance",
    "french-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/aqNZWM9bspt8zaDvVRIRiWxRVJ7.jpg",
  "color": "#27AE60",
  "influenceNotes": "Melville's meditation on French Resistance. Moral ambiguity and professional resistance fighters influenced Basterds. Code of silence under occupation.",
  "influencedBy": [
    "French Resistance history"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 145,
  "rating": 7.9,
  "imdbId": "tt0064040",
  "trailerUrl": "https://www.youtube.com/watch?v=sxnCZ0nR2a4",
  "overview": "Betrayed by an informant, Philippe Gerbier finds himself trapped in a torturous Nazi prison camp. Though Gerbier escapes to rejoin the Resistance in occupied Marseilles, France, and exacts his revenge on the informant, he must continue a quiet, seemingly endless battle against the Nazis in an atmosp",
  "tmdbId": 15383
},
{
  "id": "millers-crossing-1990",
  "name": "Miller's Crossing",
  "fullTitle": "Miller's Crossing (1990)",
  "year": 1990,
  "director": "Coen Brothers",
  "country": "USA",
  "genres": [
    "crime",
    "drama",
    "thriller"
  ],
  "subclouds": [
    "neo-noir",
    "crime",
    "gangster"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/ab3pnsTKp3BgcAFy0FgWBFBg9FL.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Coen Brothers' stylized gangster film. Complex loyalties and double-crosses influenced Tarantino's crime narratives. Dialogue-driven crime drama.",
  "influencedBy": [
    "Dashiell Hammett novels",
    "Film noir"
  ],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 115,
  "rating": 7.5,
  "imdbId": "tt0100150",
  "trailerUrl": "https://www.youtube.com/watch?v=R1kRUyVeEOg",
  "overview": "Set in 1929, a political boss and his advisor have a parting of the ways when they both fall for the same woman.",
  "tmdbId": 379
},
{
  "id": "the-long-goodbye-1973",
  "name": "The Long Goodbye",
  "fullTitle": "The Long Goodbye (1973)",
  "year": 1973,
  "director": "Robert Altman",
  "country": "USA",
  "genres": [
    "crime",
    "mystery",
    "noir"
  ],
  "subclouds": [
    "neo-noir",
    "revisionist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/oBhUK54yBJ0aH6u9zCzSV5iV7OP.jpg",
  "color": "#34495E",
  "influenceNotes": "Altman's revisionist noir with Elliot Gould. Deconstructed detective genre influenced Tarantino's genre awareness. Los Angeles noir aesthetic.",
  "influencedBy": [
    "Raymond Chandler novel"
  ],
  "influences": [
    "Pulp Fiction (1994)",
    "Jackie Brown (1997)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 112,
  "rating": 7.4,
  "imdbId": "tt0070334",
  "trailerUrl": "https://www.youtube.com/watch?v=XqLUx8RF0EQ",
  "overview": "In 1970s Hollywood, Detective Philip Marlowe tries to help a friend who is accused of murdering his wife.",
  "tmdbId": 1847
},
{
  "id": "chinatown-1974",
  "name": "Chinatown",
  "fullTitle": "Chinatown (1974)",
  "year": 1974,
  "director": "Roman Polanski",
  "country": "USA",
  "genres": [
    "mystery",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "neo-noir",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/kZRSP3FmOcq0xnBulqpUQngJUXY.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Definitive neo-noir. Polanski's dark vision and Robert Towne's screenplay influenced Tarantino's approach to genre and corruption.",
  "influencedBy": [],
  "influences": [
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 130,
  "rating": 7.9,
  "imdbId": "tt0071315",
  "trailerUrl": "https://www.youtube.com/watch?v=RKdXf-fiBcw",
  "overview": "Private eye Jake Gittes lives off of the murky moral climate of sunbaked, pre-World War II Southern California. Hired by a beautiful socialite to investigate her husband's extra-marital affair, Gittes is swept into a maelstrom of double dealings and deadly deceits, uncovering a web of personal and p",
  "tmdbId": 829
},
{
  "id": "night-of-the-hunter-1955",
  "name": "Night of the Hunter",
  "fullTitle": "Night of the Hunter (1955)",
  "year": 1955,
  "director": "Charles Laughton",
  "country": "USA",
  "genres": [
    "thriller",
    "noir",
    "horror"
  ],
  "subclouds": [
    "noir",
    "southern-gothic",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rBka0nFWiHxabHRLr0KfIA8Yiaq.jpg",
  "color": "#34495E",
  "influenceNotes": "Gothic thriller with religious psychopath. Robert Mitchum's menacing preacher influenced Tarantino's villains. Visual poetry and violence.",
  "influencedBy": [
    "German Expressionism"
  ],
  "influences": [
    "Natural Born Killers (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 93,
  "rating": 7.9,
  "imdbId": "tt0048424",
  "trailerUrl": "https://www.youtube.com/watch?v=GAxs6tChiKo",
  "overview": "In Depression-era West Virginia, a serial-killing preacher hunts two young children who know the whereabouts of a stash of money.",
  "tmdbId": 3112
},
{
  "id": "sorcerer-1977",
  "name": "Sorcerer",
  "fullTitle": "Sorcerer (1977)",
  "year": 1977,
  "director": "William Friedkin",
  "country": "USA",
  "genres": [
    "thriller",
    "adventure",
    "drama"
  ],
  "subclouds": [
    "70s-cinema",
    "existential"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/2b7oexm173SF1FSEq0DdgxZZNRH.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Desperate criminals on dangerous mission. Friedkin's gritty realism and tension influenced Tarantino's crime aesthetics. Men under pressure.",
  "influencedBy": [
    "The Wages of Fear (1953)"
  ],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 122,
  "rating": 7.4,
  "imdbId": "tt0076740",
  "trailerUrl": "https://www.youtube.com/watch?v=RlfJcU3nnl8",
  "overview": "Four men from different parts of the globe, all hiding from their pasts in the same remote South American town, agree to risk their lives transporting several cases of dynamite (which is so old that it is dripping unstable nitroglycerin) across dangerous jungle terrain.",
  "tmdbId": 38985
},
{
  "id": "the-french-connection-1971",
  "name": "The French Connection",
  "fullTitle": "The French Connection (1971)",
  "year": 1971,
  "director": "William Friedkin",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "action"
  ],
  "subclouds": [
    "crime",
    "70s-cinema",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/5XSGvIKl2yPvOkieFjc3rzLw7x0.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Gritty realistic crime film. Friedkin's documentary style and car chase influenced Tarantino's approach to violence and realism.",
  "influencedBy": [
    "True crime"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 104,
  "rating": 7.5,
  "imdbId": "tt0067116",
  "trailerUrl": "https://www.youtube.com/watch?v=T76K3RxJY0A",
  "overview": "Tough narcotics detective 'Popeye' Doyle is in hot pursuit of a suave French drug dealer who may be the key to a huge heroin-smuggling operation.",
  "tmdbId": 1051
},
{
  "id": "thief-1981",
  "name": "Thief",
  "fullTitle": "Thief (1981)",
  "year": 1981,
  "director": "Michael Mann",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "action"
  ],
  "subclouds": [
    "neo-noir",
    "crime",
    "heist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/bpjRGwfYJ71bU0hNhLIz7g3t6Oy.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Mann's professional criminal with code. Tangerine Dream score and neon aesthetics influenced crime film evolution. Methodical heist planning.",
  "influencedBy": [
    "Film noir",
    "Jean-Pierre Melville"
  ],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 123,
  "rating": 7.2,
  "imdbId": "tt0083190",
  "trailerUrl": "https://www.youtube.com/watch?v=YDa_z0op7iU",
  "overview": "Frank is an expert professional safecracker, specialized in high-profile diamond heists. He plans to use his ill-gotten income to retire from crime and build a nice life for himself complete with a home, wife and kids. To accelerate the process, he signs on with a top gangster for a big score.",
  "tmdbId": 11524
},
{
  "id": "heat-1995",
  "name": "Heat",
  "fullTitle": "Heat (1995)",
  "year": 1995,
  "director": "Michael Mann",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "action"
  ],
  "subclouds": [
    "neo-noir",
    "crime",
    "heist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Epic crime saga with professional criminals. Mann's contemplative approach to crime influenced post-Pulp Fiction crime cinema. Character study through action.",
  "influencedBy": [
    "Thief (1981)",
    "Le Samoura\\u00ef (1967)"
  ],
  "influences": [
    "Jackie Brown (1997)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 170,
  "rating": 7.9,
  "imdbId": "tt0113277",
  "trailerUrl": "https://www.youtube.com/watch?v=14oNcFxiVaQ",
  "overview": "Obsessive master thief Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse g",
  "tmdbId": 949
},
{
  "id": "hard-boiled-1992",
  "name": "Hard Boiled",
  "fullTitle": "Hard Boiled (1992)",
  "year": 1992,
  "director": "John Woo",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "hong-kong-action",
    "heroic-bloodshed",
    "gun-fu"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/mbA77wY7fjh2TSQ3FxEuqpKOOA8.jpg",
  "color": "#E91E63",
  "influenceNotes": "Woo's masterpiece of gun-fu action. Hospital shootout influenced modern action choreography. Stylized violence ballet influenced Tarantino and John Wick.",
  "influencedBy": [
    "A Better Tomorrow (1986)",
    "The Killer (1989)"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "John Wick (2014)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 126,
  "rating": 7.5,
  "imdbId": "tt0104684",
  "trailerUrl": "https://www.youtube.com/watch?v=_fcwFheTLdE",
  "overview": "A cop who loses his partner in a shoot-out with gun smugglers goes on a mission to catch them. In order to get closer to the leaders of the ring he joins forces with an undercover cop who's working as a gangster hitman. They use all means of excessive force to find them.",
  "tmdbId": 11782
},
{
  "id": "the-killer-1989",
  "name": "The Killer",
  "fullTitle": "The Killer (1989)",
  "year": 1989,
  "director": "John Woo",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "hong-kong-action",
    "heroic-bloodshed"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/8hTxlSqMAHBXAh1eB69ir0BXhzE.jpg",
  "color": "#E91E63",
  "influenceNotes": "Woo's assassin with honor code. Church shootout and dual-wielding guns influenced action cinema. Emotional male bonding through violence.",
  "influencedBy": [
    "A Better Tomorrow (1986)",
    "Le Samoura\\u00ef (1967)"
  ],
  "influences": [
    "Reservoir Dogs (1992)",
    "John Wick (2014)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 110,
  "rating": 7.6,
  "imdbId": "tt0097202",
  "trailerUrl": "https://www.youtube.com/watch?v=Cdxehm0NxkU",
  "overview": "Mob assassin Jeffrey is no ordinary hired gun; the best in his business, he views his chosen profession as a calling rather than simply a job. So, when beautiful nightclub chanteuse Jennie is blinded in the crossfire of his most recent hit, Jeffrey chooses to retire after one last job to pay for his",
  "tmdbId": 10835
},
{
  "id": "a-better-tomorrow-1986",
  "name": "A Better Tomorrow",
  "fullTitle": "A Better Tomorrow (1986)",
  "year": 1986,
  "director": "John Woo",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "drama"
  ],
  "subclouds": [
    "hong-kong-action",
    "heroic-bloodshed"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/56vi7JCrVZuCqBPDVLzfO5fEQMr.jpg",
  "color": "#E91E63",
  "influenceNotes": "Launched heroic bloodshed genre. Chow Yun-fat's trench coat and dual pistols became iconic. Brotherhood and honor codes influenced Tarantino.",
  "influencedBy": [],
  "influences": [
    "A Better Tomorrow II (1987)",
    "The Killer (1989)",
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 3,
  "size": 20,
  "runtime": 95,
  "rating": 7.4,
  "imdbId": "tt0092263",
  "trailerUrl": "https://www.youtube.com/watch?v=yEbvc32n7bU",
  "overview": "A reforming ex-gangster tries to reconcile with his estranged policeman brother, but the ties to his former gang are difficult to break.",
  "tmdbId": 11471
},
{
  "id": "bullet-in-the-head-1990",
  "name": "Bullet in the Head",
  "fullTitle": "Bullet in the Head (1990)",
  "year": 1990,
  "director": "John Woo",
  "country": "Hong Kong",
  "genres": [
    "action",
    "war",
    "crime"
  ],
  "subclouds": [
    "hong-kong-action",
    "war",
    "heroic-bloodshed"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/A5pmWlYwLY0JSR72kz27lA5DWsG.jpg",
  "color": "#E91E63",
  "influenceNotes": "Woo's Vietnam War epic. Friendship destroyed by violence influenced Reservoir Dogs' betrayal themes. Brutal action sequences.",
  "influencedBy": [
    "The Deer Hunter (1978)"
  ],
  "influences": [
    "Reservoir Dogs (1992)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 130,
  "rating": 7.6,
  "imdbId": "tt0099426",
  "trailerUrl": "https://www.youtube.com/watch?v=NIACrhExQgM",
  "overview": "Three childhood friends from the slums of Hong Kong flee to war-time Saigon after accidentally murdering a gang leader, but their troubles only escalate.",
  "tmdbId": 11909
},
{
  "id": "the-big-boss-1971",
  "name": "The Big Boss",
  "fullTitle": "The Big Boss (1971)",
  "year": 1971,
  "director": "Lo Wei",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "crime"
  ],
  "subclouds": [
    "kung-fu",
    "bruce-lee"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9VFYDWYnAhXAgyqgs94lwNmMBbk.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Bruce Lee's breakthrough film. Raw martial arts violence influenced Kill Bill's approach to fighting. Revenge narrative structure.",
  "influencedBy": [],
  "influences": [
    "Enter the Dragon (1973)",
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 99,
  "rating": 7.1,
  "imdbId": "tt0067824",
  "trailerUrl": "https://www.youtube.com/watch?v=eFJmVD0qHHg",
  "overview": "Cheng is a young Chinese mainlander who moves in with his expatriate cousins to work at an ice factory in Thailand. He does this with a family promise never to get involved in any fights. However, when members of his family begin disappearing after meeting the management of the factory, the resultin",
  "tmdbId": 12481
},
{
  "id": "way-of-the-dragon-1972",
  "name": "Way of the Dragon",
  "fullTitle": "Way of the Dragon (1972)",
  "year": 1972,
  "director": "Bruce Lee",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "comedy"
  ],
  "subclouds": [
    "kung-fu",
    "bruce-lee"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/m7AIITQ624sfldI4SsX4htXPH1f.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Bruce Lee's only self-directed film. Colosseum fight with Chuck Norris influenced martial arts cinema. East-meets-West cultural clash.",
  "influencedBy": [
    "Bruce Lee philosophy"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 100,
  "rating": 7.4,
  "imdbId": "tt0068935",
  "trailerUrl": "https://www.youtube.com/watch?v=72giNDkKhSE",
  "overview": "After a Chinese restaurant in Rome is threatened by the mafia, who will stop at nothing to acquire the property, the owner recruits a family friend in Hong Kong, kung fu expert Tang Lung, to help them defend their business.",
  "tmdbId": 9462
},
{
  "id": "master-of-the-flying-guillotine-1976",
  "name": "Master of the Flying Guillotine",
  "fullTitle": "Master of the Flying Guillotine (1976)",
  "year": 1976,
  "director": "Jimmy Wang Yu",
  "country": "Taiwan|Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "wuxia"
  ],
  "subclouds": [
    "kung-fu",
    "wuxia",
    "exploitation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/upa8qI25kJrrQHgYz66IO2ccvoH.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Cult kung-fu film with exotic weapons and tournament fighting. Sampled by RZA for Wu-Tang Clan. Influenced Kill Bill's weapon variety and fight choreography.",
  "influencedBy": [
    "One-Armed Swordsman (1967)"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 93,
  "rating": 6.6,
  "imdbId": "tt0072913",
  "trailerUrl": "https://www.youtube.com/watch?v=_o_49R60zCQ",
  "overview": "A one-armed martial arts master is being stalked by an Imperial assassin, the master of two fighters  killed in the previous film. When the One-Armed Boxer is invited to attend a martial arts tournament, his efforts to lay low are unsuccessful, and the assassin soon tracks him down with the help of ",
  "tmdbId": 49636
},
{
  "id": "five-deadly-venoms-1978",
  "name": "Five Deadly Venoms",
  "fullTitle": "Five Deadly Venoms (1978)",
  "year": 1978,
  "director": "Chang Cheh",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "mystery"
  ],
  "subclouds": [
    "kung-fu",
    "shaw-brothers"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/z446TqbbOb7emtN1S8iOrwTHz7Y.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Shaw Brothers classic with masked fighters and unique fighting styles. Mystery structure and specialized weapons influenced Kill Bill's Deadly Viper Squad concept.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 97,
  "rating": 6.7,
  "imdbId": "tt0077559",
  "trailerUrl": "https://www.youtube.com/watch?v=3aEl8kyCs-4",
  "overview": "A dying master sends his last student to check up on five former pupils, who each know a special style of kung-fu.",
  "tmdbId": 13481
},
{
  "id": "the-8-diagram-pole-fighter-1984",
  "name": "The 8 Diagram Pole Fighter",
  "fullTitle": "The 8 Diagram Pole Fighter (1984)",
  "year": 1984,
  "director": "Lau Kar-leung",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "drama"
  ],
  "subclouds": [
    "kung-fu",
    "shaw-brothers"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/lme6eIZ12ar3fsOodNCUuVul9cq.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Intense training sequences and pole fighting. Gordon Liu performance influenced Kill Bill (he plays Pai Mei). Martial arts mastery through suffering.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 99,
  "rating": 7.0,
  "imdbId": "tt0086606",
  "trailerUrl": "https://www.youtube.com/watch?v=mZ87HitPUCE",
  "overview": "The Yangs are betrayed by a government official conspiring with the Mongols. All of the Yang family males except the 5th and 6th brother are killed. Fu Sheng loses his mind after the death of his family, while the other brother takes refuge in a Buddhist temple.",
  "tmdbId": 32520
},
{
  "id": "drunken-master-1978",
  "name": "Drunken Master",
  "fullTitle": "Drunken Master (1978)",
  "year": 1978,
  "director": "Yuen Woo-ping",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "comedy"
  ],
  "subclouds": [
    "kung-fu",
    "jackie-chan"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/cf43J2SH8tECZVl9N5n0Q6Ckche.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Yuen Woo-ping's breakthrough with Jackie Chan. Comedic training sequences influenced Kill Bill's Pai Mei training. Hired Yuen Woo-ping as choreographer.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 111,
  "rating": 7.4,
  "imdbId": "tt0080179",
  "trailerUrl": "https://www.youtube.com/watch?v=krvm6ikt6v4",
  "overview": "After getting into trouble, a mischievous young man is sent to train under a brutal, but slovenly old beggar, who teaches him the secret of the Drunken Fist.",
  "tmdbId": 11230
},
{
  "id": "snake-in-the-eagles-shadow-1978",
  "name": "Snake in the Eagle's Shadow",
  "fullTitle": "Snake in the Eagle's Shadow (1978)",
  "year": 1978,
  "director": "Yuen Woo-ping",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "comedy"
  ],
  "subclouds": [
    "kung-fu",
    "jackie-chan"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/oCt4990zVSNILSU0Q6DStmdbpIA.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Yuen Woo-ping and Jackie Chan collaboration. Student-master dynamic and animal styles influenced Kill Bill's training sequences.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 98,
  "rating": 7.3,
  "imdbId": "tt0078252",
  "trailerUrl": "https://www.youtube.com/watch?v=YdQ_7mhfqNw",
  "overview": "Everyone abuses and humiliates a downtrodden orphan until he befriends an old man, who turns out to be the last master of the snake fist fighting style. Jackie becomes the old man's student and finds himself in battle with the master of the eagle's claw style, who has vowed to destroy the snake fist",
  "tmdbId": 11537
},
{
  "id": "zu-warriors-from-the-magic-mountain-1983",
  "name": "Zu Warriors from the Magic Mountain",
  "fullTitle": "Zu Warriors from the Magic Mountain (1983)",
  "year": 1983,
  "director": "Tsui Hark",
  "country": "Hong Kong",
  "genres": [
    "action",
    "fantasy",
    "wuxia"
  ],
  "subclouds": [
    "wuxia",
    "fantasy",
    "hong-kong-action"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9vJi1xPMlC4qb41h08kvKZQXyFj.jpg",
  "color": "#E91E63",
  "influenceNotes": "Special effects-heavy wuxia fantasy. Wire-fu and supernatural elements influenced modern martial arts cinema and Kill Bill's stylization.",
  "influencedBy": [
    "Chinese mythology"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)",
    "Crouching Tiger Hidden Dragon (2000)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 95,
  "rating": 6.8,
  "imdbId": "tt0086308",
  "trailerUrl": "https://www.youtube.com/watch?v=ku3kF6xZdeQ",
  "overview": "In the fifth century, constant civil war scars western China. To escape death, Ti, a young scout, jumps through a crevice in the Zu mountains where he gets entangled in a great battle against the Blood Demon, a supernatural entity seeking to wreak havoc upon the world.",
  "tmdbId": 38155
},
{
  "id": "once-upon-a-time-in-china-1991",
  "name": "Once Upon a Time in China",
  "fullTitle": "Once Upon a Time in China (1991)",
  "year": 1991,
  "director": "Tsui Hark",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "historical"
  ],
  "subclouds": [
    "wuxia",
    "hong-kong-action",
    "historical"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/dkBQC0jmkmTOJJMgwsBdgkzZ6Ry.jpg",
  "color": "#E91E63",
  "influenceNotes": "Jet Li as folk hero Wong Fei-hung. Wire-fu and nationalist themes influenced 90s martial arts renaissance that informed Kill Bill.",
  "influencedBy": [
    "Wong Fei-hung legend"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)",
    "Crouching Tiger Hidden Dragon (2000)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 133,
  "rating": 7.1,
  "imdbId": "tt0103285",
  "trailerUrl": "https://www.youtube.com/watch?v=x95gXieo3f0",
  "overview": "Set in late 19th century Canton, this martial arts film depicts the stance taken by the legendary martial arts hero Wong Fei-Hung against foreign forces' plundering of China.",
  "tmdbId": 10617
},
{
  "id": "iron-monkey-1993",
  "name": "Iron Monkey",
  "fullTitle": "Iron Monkey (1993)",
  "year": 1993,
  "director": "Yuen Woo-ping",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "historical"
  ],
  "subclouds": [
    "wuxia",
    "kung-fu"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/qXYISomt08V5PUqCzYRLVSQZmWP.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Yuen Woo-ping's wuxia masterpiece. Demonstrated his choreography skills before being hired for Matrix and Kill Bill. Pole fighting and wire-fu.",
  "influencedBy": [
    "Wong Fei-hung legend"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 90,
  "rating": 7.4,
  "imdbId": "tt0108148",
  "trailerUrl": "https://www.youtube.com/watch?v=B9-OQqbVkU8",
  "overview": "In this Hong Kong variation of Robin Hood, corrupt officials of a Chinese village are robbed by a masked bandit known as \"Iron Monkey\", named after a benevolent deity. When all else fails, the Governor forces a traveling physician into finding the bandit.",
  "tmdbId": 12780
},
{
  "id": "executioners-from-shaolin-1977",
  "name": "Executioners from Shaolin",
  "fullTitle": "Executioners from Shaolin (1977)",
  "year": 1977,
  "director": "Lau Kar-leung",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "historical"
  ],
  "subclouds": [
    "kung-fu",
    "shaw-brothers"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9PJyuHP1nNDMyJDZMpZWpwEduSL.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Lau Kar-leung kung-fu classic. Tiger-crane style training influenced Kill Bill's martial arts philosophy. Gordon Liu stars.",
  "influencedBy": [
    "Shaolin legend"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 100,
  "rating": 6.8,
  "imdbId": "tt0076168",
  "trailerUrl": "https://www.youtube.com/watch?v=G3Buxr3G4QI",
  "overview": "A couple unite - she is fluent in the crane style of kung fu, he in tiger style. They have a son, but the boy's father is killed by the evil eunuch Pai Mei. Disguised as a girl, his mom trains him in crane style while he secretly learns tiger style from his father's training manual.",
  "tmdbId": 22124
},
{
  "id": "come-drink-with-me-1966",
  "name": "Come Drink With Me",
  "fullTitle": "Come Drink With Me (1966)",
  "year": 1966,
  "director": "King Hu",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "wuxia"
  ],
  "subclouds": [
    "wuxia",
    "female-action",
    "shaw-brothers"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/bVQhrpCfMZy8YoiAmbze1qWIoho.jpg",
  "color": "#8E44AD",
  "influenceNotes": "First major female wuxia protagonist. Cheng Pei-pei's performance influenced female martial arts heroes including Kill Bill's Bride.",
  "influencedBy": [
    "Chinese opera",
    "Wuxia literature"
  ],
  "influences": [
    "A Touch of Zen (1971)",
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 91,
  "rating": 6.7,
  "imdbId": "tt0059079",
  "trailerUrl": "https://www.youtube.com/watch?v=01Xl296CxQE",
  "overview": "Golden Sparrow is a fighter-for-hire who has been contracted by the local government to retrieve the governor's kidnapped son. Holding him is a group of rebels who are demanding that their leader be released from prison in return for the captured son. After a brief encounter with the gang at a local",
  "tmdbId": 26259
},
{
  "id": "a-touch-of-zen-1971",
  "name": "A Touch of Zen",
  "fullTitle": "A Touch of Zen (1971)",
  "year": 1971,
  "director": "King Hu",
  "country": "Taiwan|Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "wuxia"
  ],
  "subclouds": [
    "wuxia",
    "art-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/pgveqayMFUIZbFqN87ghiKmmxt3.jpg",
  "color": "#8E44AD",
  "influenceNotes": "Art-house wuxia epic. Bamboo forest fight influenced Crouching Tiger and Kill Bill. Spiritual martial arts philosophy.",
  "influencedBy": [
    "Come Drink With Me (1966)",
    "Zen Buddhism"
  ],
  "influences": [
    "Crouching Tiger Hidden Dragon (2000)",
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 180,
  "rating": 7.7,
  "imdbId": "tt0064451",
  "trailerUrl": "https://www.youtube.com/watch?v=18yH_9ZT27Q",
  "overview": "Gu Sheng-zhai, an artist in his early 30s, still lives with his mother, but he is suddenly shaken by the arrival of Yang Hui-zhen, a mysterious princess on the run. Yang brings Gu into her circle of protectors, including a nameless monk whose spiritual guidance transforms him into a valiant fighter.",
  "tmdbId": 44154
},
{
  "id": "dragon-inn-1967",
  "name": "Dragon Inn",
  "fullTitle": "Dragon Inn (1967)",
  "year": 1967,
  "director": "King Hu",
  "country": "Taiwan",
  "genres": [
    "action",
    "martial-arts",
    "wuxia"
  ],
  "subclouds": [
    "wuxia",
    "taiwanese-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/x1EVgOjZ4gfnRTFSZIsr1UoAx0W.jpg",
  "color": "#8E44AD",
  "influenceNotes": "Atmospheric wuxia with inn setting. King Hu's graceful action choreography influenced modern wuxia and Kill Bill's aesthetics.",
  "influencedBy": [
    "Come Drink With Me (1966)"
  ],
  "influences": [
    "A Touch of Zen (1971)",
    "Crouching Tiger Hidden Dragon (2000)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 111,
  "rating": 7.3,
  "imdbId": "tt0060635",
  "trailerUrl": "https://www.youtube.com/watch?v=ooTWA7rsPsY",
  "overview": "China, year 1457. The Minister of Defense is executed, and his children are sentenced to exile by order of the tyrannical Tsao. Fearful of future revenge from the young people, Tsao sends cruel soldiers to murder them, but a brave group of swordsmen can change the course of the battle at the Dragon ",
  "tmdbId": 104237
},
{
  "id": "new-dragon-gate-inn-1992",
  "name": "New Dragon Gate Inn",
  "fullTitle": "New Dragon Gate Inn (1992)",
  "year": 1992,
  "director": "Raymond Lee",
  "country": "Hong Kong|China",
  "genres": [
    "action",
    "martial-arts",
    "wuxia"
  ],
  "subclouds": [
    "wuxia",
    "hong-kong-action"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/jCkdnfVu08gM87KcbEOURyymAtT.jpg",
  "color": "#E91E63",
  "influenceNotes": "Remake of King Hu classic. Maggie Cheung and Brigitte Lin performances influenced strong female warriors in Kill Bill.",
  "influencedBy": [
    "Dragon Inn (1967)"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 104,
  "rating": 7.2,
  "imdbId": "tt0105859",
  "trailerUrl": "https://www.youtube.com/watch?v=KUKXPlZRusE",
  "overview": "During the Ming Dynasty, Tso Siu Yan, a power-crazed eunuch who rules his desert region of China as if he were the Emperor, ruthlessly thwarts plots against him and sets a trap for one of his enemies at the Dragon Gate Inn.",
  "tmdbId": 40213
},
{
  "id": "swordsman-ii-1992",
  "name": "Swordsman II",
  "fullTitle": "Swordsman II (1992)",
  "year": 1992,
  "director": "Ching Siu-tung",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "wuxia"
  ],
  "subclouds": [
    "wuxia",
    "fantasy"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/nHDvrm1tpaZIE3g5ZENIW7Kfe1E.jpg",
  "color": "#8E44AD",
  "influenceNotes": "Brigitte Lin as Asia the Invincible. Gender-fluid villain and supernatural powers influenced Kill Bill's operatic approach to martial arts.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 107,
  "rating": 6.5,
  "imdbId": "tt0103295",
  "trailerUrl": "https://www.youtube.com/watch?v=QO-d_0E8_rQ",
  "overview": "Ling Wu Chung decides to hide from the chaotic world. Before leaving, he visits his friends, a tribe of snake-wielding women warriors. However, he finds that the tribe have been attacked, and their leader Yam Ying Ying has been abducted.",
  "tmdbId": 18672
},
{
  "id": "heroic-trio-1993",
  "name": "Heroic Trio",
  "fullTitle": "Heroic Trio (1993)",
  "year": 1993,
  "director": "Johnnie To",
  "country": "Hong Kong",
  "genres": [
    "action",
    "fantasy",
    "sci-fi"
  ],
  "subclouds": [
    "hong-kong-action",
    "female-ensemble"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/ilYFTXzy04qP5rZoQtWfz5JYH9a.jpg",
  "color": "#E91E63",
  "influenceNotes": "All-female action trio with superpowers. Maggie Cheung, Michelle Yeoh, Anita Mui influenced Kill Bill's female ensemble approach.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 88,
  "rating": 6.6,
  "imdbId": "tt0105619",
  "trailerUrl": "https://www.youtube.com/watch?v=6u2lyRQIByY",
  "overview": "While one tough woman with an invisible robe has stolen 18 babies for her powerful master, two other tough women and the cops try to stop her.",
  "tmdbId": 43636
},
{
  "id": "the-bride-with-white-hair-1993",
  "name": "The Bride with White Hair",
  "fullTitle": "The Bride with White Hair (1993)",
  "year": 1993,
  "director": "Ronny Yu",
  "country": "Hong Kong",
  "genres": [
    "action",
    "romance",
    "wuxia"
  ],
  "subclouds": [
    "wuxia",
    "romance",
    "fantasy"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/pFfxAufiZtZBOiSCi0oRmbnDSpD.jpg",
  "color": "#8E44AD",
  "influenceNotes": "Gothic wuxia romance with Brigitte Lin. Tragic love story and supernatural martial arts influenced Kill Bill's romantic tragedy.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 80,
  "rating": 5.7,
  "imdbId": "tt0106343",
  "trailerUrl": "https://www.youtube.com/watch?v=hXpRVmwazxU",
  "overview": "For ten years, Cho has been in the snow of Mount Shin Fung waiting for a rare flower to blossom that will cure his wife who, back in Chung Yuan, is slowly killing all of the members of the Eight Big Clans. Something Cho did to her early in their marriage has turned her hair white and driven her mad.",
  "tmdbId": 25384
},
{
  "id": "police-story-1985",
  "name": "Police Story",
  "fullTitle": "Police Story (1985)",
  "year": 1985,
  "director": "Jackie Chan",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "comedy"
  ],
  "subclouds": [
    "hong-kong-action",
    "jackie-chan"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/1eFB0Iy1TMU4VO5hMcoCE064JAT.jpg",
  "color": "#E91E63",
  "influenceNotes": "Jackie Chan's spectacular stunts. Shopping mall fight influenced action choreography. Practical stunts over CGI philosophy.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 100,
  "rating": 7.5,
  "imdbId": "tt0089374",
  "trailerUrl": "https://www.youtube.com/watch?v=KV4mHWyKy9c",
  "overview": "Officer Chan Ka Kui manages to put a major Hong Kong drug dealer behind the bars practically alone, after a shooting and an impressive chase inside a slum. Now, he must protect the boss' secretary, Selina, who will testify against the gangster in court.",
  "tmdbId": 9056
},
{
  "id": "project-a-1983",
  "name": "Project A",
  "fullTitle": "Project A (1983)",
  "year": 1983,
  "director": "Jackie Chan",
  "country": "Hong Kong",
  "genres": [
    "action",
    "comedy",
    "historical"
  ],
  "subclouds": [
    "hong-kong-action",
    "jackie-chan"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/c6OVzxnnz5D3xkb6THHNrtP8s26.jpg",
  "color": "#E91E63",
  "influenceNotes": "Jackie Chan's physical comedy and stunts. Clock tower fall homage to Harold Lloyd. Influenced Kill Bill's commitment to practical action.",
  "influencedBy": [
    "Buster Keaton",
    "Harold Lloyd"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 7.2,
  "imdbId": "tt0085127",
  "trailerUrl": "https://www.youtube.com/watch?v=Xn-b_DoUXnE",
  "overview": "In late 19th century Hong Kong, the British may rule the land, but the pirates rule the waters. Coast Guard officer Dragon Ma is determined that his beloved Coast Guard will not be made a fool of.",
  "tmdbId": 21519
},
{
  "id": "the-magnificent-butcher-1979",
  "name": "The Magnificent Butcher",
  "fullTitle": "The Magnificent Butcher (1979)",
  "year": 1979,
  "director": "Yuen Woo-ping",
  "country": "Hong Kong",
  "genres": [
    "action",
    "martial-arts",
    "comedy"
  ],
  "subclouds": [
    "kung-fu",
    "comedy"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/7zU373WqLUfuDOkdWOhelnbexKQ.jpg",
  "color": "#F4D03F",
  "influenceNotes": "Sammo Hung in Yuen Woo-ping choreography. Comic kung-fu with brutal fights influenced Kill Bill's tonal mixing.",
  "influencedBy": [
    "Wong Fei-hung films"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.1,
  "imdbId": "tt0079472",
  "trailerUrl": "https://www.youtube.com/watch?v=pJ3UJQT_MJU",
  "overview": "A plump butcher student of Wong Fei Hung, Lam Sai-Wing gets into trouble with a rival kung-fu school known as Five Dragons. He is accused of raping the Head of that school's goddaughter and killing his son. Now Ko, the Head of Five Dragons, wants revenge.",
  "tmdbId": 18812
},
{
  "id": "yes-madam-1985",
  "name": "Yes, Madam",
  "fullTitle": "Yes, Madam (1985)",
  "year": 1985,
  "director": "Corey Yuen",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "martial-arts"
  ],
  "subclouds": [
    "hong-kong-action",
    "female-action"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/4KcufMSckdPInz4VAxg3VTpQtDo.jpg",
  "color": "#E91E63",
  "influenceNotes": "Michelle Yeoh's breakthrough as action star. Female martial arts leads influenced Kill Bill. Practical fight choreography.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 92,
  "rating": 7.1,
  "imdbId": "tt0093229",
  "trailerUrl": "https://www.youtube.com/watch?v=BbG39mFhz9Q",
  "overview": "Two unlucky thieves break into a just murdered man's hotel room and steal his passport, with a hidden microfilm, wanted by a triad boss. Two ass-kicking women cops\u2014one Chinese, one British\u2014are on the case.",
  "tmdbId": 39448
},
{
  "id": "royal-warriors-1986",
  "name": "Royal Warriors",
  "fullTitle": "Royal Warriors (1986)",
  "year": 1986,
  "director": "David Chung",
  "country": "Hong Kong",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "hong-kong-action",
    "female-action"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/79QtxrBbDG2FbvgJSxWQpYCKJbM.jpg",
  "color": "#E91E63",
  "influenceNotes": "Michelle Yeoh action sequel. Female action choreography influenced Kill Bill's female fighters.",
  "influencedBy": [
    "Yes, Madam (1985)"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 96,
  "rating": 6.7,
  "imdbId": "tt0091229",
  "trailerUrl": "https://www.youtube.com/watch?v=2CP5822jI4M",
  "overview": "When a tough policewoman learns about a group of violent terrorists, she, along with her partner and a Japanese detective, does everything it takes to take them down.",
  "tmdbId": 45450
},
{
  "id": "companeros-1970",
  "name": "Companeros",
  "fullTitle": "Companeros (1970)",
  "year": 1970,
  "director": "Sergio Corbucci",
  "country": "Italy|Spain|West Germany",
  "genres": [
    "western",
    "action",
    "comedy"
  ],
  "subclouds": [
    "spaghetti-western",
    "revolutionary"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/i5pRcXrVo3zcoTCV9iMIf5qgrrk.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Political spaghetti western with Mexican Revolution. Franco Nero and revolution themes influenced Django Unchained.",
  "influencedBy": [
    "The Mercenary (1968)"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 118,
  "rating": 6.5,
  "imdbId": "tt0066612",
  "trailerUrl": "https://www.youtube.com/watch?v=vLAfW9P2Mtk",
  "overview": "Arms dealer Yolaf Peterson aims to make a sale to guerilla Mongo, but the money is locked in a bank safe, the combination known only to Professor Xantos, a prisoner of the Americans. Yolaf agrees to free Xantos, accompanied by reluctant guerilla Basco, but a former business partner of Yolaf's- John ",
  "tmdbId": 61044
},
{
  "id": "a-professional-gun-1968",
  "name": "A Professional Gun",
  "fullTitle": "A Professional Gun (1968)",
  "year": 1968,
  "director": "Sergio Corbucci",
  "country": "Italy",
  "genres": [
    "western",
    "action",
    "political"
  ],
  "subclouds": [
    "spaghetti-western",
    "revolutionary"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/gIRRNEpkZg41syNBw0phpQfXa3C.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Corbucci's revolutionary western. Political awakening through violence influenced Django's liberation narrative.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 101,
  "rating": 6.9,
  "imdbId": "tt0063293",
  "trailerUrl": "https://www.youtube.com/watch?v=v2VruFrIoGA",
  "overview": "While a Mexican revolutionary lies low as a U.S. rodeo clown, the cynical Polish mercenary who tutored the idealistic peasant tells how he and a dedicated female radical fought for the soul of the guerrilla general Paco, as Mexicans threw off repressive government and all-powerful landowners in the ",
  "tmdbId": 48169
},
{
  "id": "minnesota-clay-1964",
  "name": "Minnesota Clay",
  "fullTitle": "Minnesota Clay (1964)",
  "year": 1964,
  "director": "Sergio Corbucci",
  "country": "Italy|Spain|France",
  "genres": [
    "western",
    "action",
    "drama"
  ],
  "subclouds": [
    "spaghetti-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/zRiIGkt0dAORPb4eigQQgnQDnFt.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Early Corbucci western with disabled hero. Handicapped gunfighter influenced Django's approach to disadvantaged heroes.",
  "influencedBy": [
    "American westerns"
  ],
  "influences": [
    "Django (1966)",
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 93,
  "rating": 6.1,
  "imdbId": "tt0058202",
  "trailerUrl": "https://www.youtube.com/watch?v=q6wSYJ5OHIw",
  "overview": "Wrongfully imprisoned for a crime he didn't commit, Minnesota Clay seeks revenge on the man who withheld evidence at his trial. There is a problem however, he is going blind.",
  "tmdbId": 91478
},
{
  "id": "face-to-face-1967",
  "name": "Face to Face",
  "fullTitle": "Face to Face (1967)",
  "year": 1967,
  "director": "Sergio Sollima",
  "country": "Italy|Spain",
  "genres": [
    "western",
    "action",
    "political"
  ],
  "subclouds": [
    "spaghetti-western",
    "political"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/tvvCChgjwqyzwcrHtqG1hMNlfv2.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Political spaghetti western with role reversal. Class consciousness and power dynamics influenced Django's political themes.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 112,
  "rating": 7.0,
  "imdbId": "tt0061636",
  "trailerUrl": "https://www.youtube.com/watch?v=b6Nyq8UnKUg",
  "overview": "History Professor Brad Fletcher heads west for his health, but falls in with Solomon Bennett's outlaw gang. Fascinated by their way of life, Fletcher finally takes over the gang, leading with a new 'efficient' ruthlessness.",
  "tmdbId": 45211
},
{
  "id": "keoma-1976",
  "name": "Keoma",
  "fullTitle": "Keoma (1976)",
  "year": 1976,
  "director": "Enzo G. Castellari",
  "country": "Italy",
  "genres": [
    "western",
    "action",
    "drama"
  ],
  "subclouds": [
    "spaghetti-western",
    "twilight-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9Dq0J0mNkUM7SatXzZr7QRciZa5.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Franco Nero as half-breed outcast. Racial themes and twilight western melancholy influenced Django Unchained.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 100,
  "rating": 6.9,
  "imdbId": "tt0074740",
  "overview": "Half-breed Keoma returns to his border hometown after service in the Civil War and finds it under the control of Caldwell, an ex-Confederate raider, and his vicious gang of thugs. To make matters worse, Keoma's three half-brothers have joined forces with Caldwell, and make it painfully clear that hi",
  "tmdbId": 6609
},
{
  "id": "blindman-1971",
  "name": "Blindman",
  "fullTitle": "Blindman (1971)",
  "year": 1971,
  "director": "Ferdinando Baldi",
  "country": "Italy|USA",
  "genres": [
    "western",
    "action",
    "comedy"
  ],
  "subclouds": [
    "spaghetti-western",
    "exploitation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/aPulAJ81joUMYlC6epEmgNcOGRF.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Blind gunfighter western. Disability as strength and exploitation elements influenced Django.",
  "influencedBy": [
    "Zatoichi films"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 5.6,
  "imdbId": "tt0066844",
  "trailerUrl": "https://www.youtube.com/watch?v=mYXaPyiud7g",
  "overview": "A blind, but deadly, gunman, is hired to escort fifty mail order brides to their miner husbands. His business partners double cross him, selling the women to bandit Domingo. Blindman heads into Mexico in pursuit.",
  "tmdbId": 30648
},
{
  "id": "my-name-is-nobody-1973",
  "name": "My Name is Nobody",
  "fullTitle": "My Name is Nobody (1973)",
  "year": 1973,
  "director": "Tonino Valerii",
  "country": "Italy|France|West Germany",
  "genres": [
    "western",
    "comedy",
    "action"
  ],
  "subclouds": [
    "spaghetti-western",
    "comedy"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/tJQEVI1p00Jh9TUgNEI623iu7ST.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Henry Fonda in comic spaghetti western. Genre self-awareness and humor influenced Tarantino's western approach.",
  "influencedBy": [
    "Sergio Leone westerns"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 117,
  "rating": 7.3,
  "imdbId": "tt0070215",
  "overview": "Jack Beauregard, an aging gunman of the Old West, only wants to retire in peace and move to Europe, but a young gunfighter known as \"Nobody\" who idolizes Beauregard wants him to go out in a blaze of glory. So, he arranges for Jack to face the 150-man gang known as The Wild Bunch and earn his place i",
  "tmdbId": 9474
},
{
  "id": "four-of-the-apocalypse-1975",
  "name": "Four of the Apocalypse",
  "fullTitle": "Four of the Apocalypse (1975)",
  "year": 1975,
  "director": "Lucio Fulci",
  "country": "Italy",
  "genres": [
    "western",
    "horror",
    "action"
  ],
  "subclouds": [
    "spaghetti-western",
    "horror"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/fXuIo8Qn3he4QRDQPWI3HDxx6Sf.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Fulci's brutal western-horror hybrid. Extreme violence and nihilism influenced Tarantino's violent westerns.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 104,
  "rating": 6.5,
  "imdbId": "tt0073594",
  "trailerUrl": "https://www.youtube.com/watch?v=9DX2ooJdLrQ",
  "overview": "Four petty criminals, three men and a woman, wander through the trackless terrain of the Wild West Utah and are hounded by a sadistic bandit.",
  "tmdbId": 48855
},
{
  "id": "cutthroats-nine-1972",
  "name": "Cut-Throats Nine",
  "fullTitle": "Cut-Throats Nine (1972)",
  "year": 1972,
  "director": "Joaqu\u00edn Luis Romero Marchent",
  "country": "Spain|Italy",
  "genres": [
    "western",
    "horror",
    "action"
  ],
  "subclouds": [
    "spaghetti-western",
    "horror"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/o2YJpPfcmliO36dtjsBOroN9tgs.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Snow-bound western with extreme violence. Winter isolation and brutality influenced Hateful Eight's atmosphere.",
  "influencedBy": [],
  "influences": [
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 92,
  "rating": 6.6,
  "imdbId": "tt0066939",
  "trailerUrl": "https://www.youtube.com/watch?v=VvYkPpwuIN0",
  "overview": "A group of ruthless convicts is led to prison through an inhospitable mountain range by a small cavalry detachment commanded by Sergeant Brown, who is accompanied by his young and beautiful daughter.",
  "tmdbId": 29496
},
{
  "id": "the-shooting-1966",
  "name": "The Shooting",
  "fullTitle": "The Shooting (1966)",
  "year": 1966,
  "director": "Monte Hellman",
  "country": "USA",
  "genres": [
    "western",
    "thriller",
    "mystery"
  ],
  "subclouds": [
    "revisionist-western",
    "art-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/oaySRq49jlCtoYjhoR7IhSga6Vm.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Minimalist existential western. Hellman's ambiguous narrative influenced Tarantino's revisionist approach to westerns.",
  "influencedBy": [
    "Existential cinema"
  ],
  "influences": [
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 82,
  "rating": 6.2,
  "imdbId": "tt0062262",
  "trailerUrl": "https://www.youtube.com/watch?v=5updNaVyvBU",
  "overview": "Two miners agree to guide a mysterious woman, who has appeared in their camp from nowhere, to a nearby town; but soon, because of her erratic behavior, they begin to suspect that her true purpose is quite different.",
  "tmdbId": 42701
},
{
  "id": "ride-in-the-whirlwind-1966",
  "name": "Ride in the Whirlwind",
  "fullTitle": "Ride in the Whirlwind (1966)",
  "year": 1966,
  "director": "Monte Hellman",
  "country": "USA",
  "genres": [
    "western",
    "drama"
  ],
  "subclouds": [
    "revisionist-western",
    "art-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/Afx1Wigd0sr9nM1Unq2MkVd2RT1.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Jack Nicholson-scripted western. Hellman's stripped-down approach influenced Tarantino's chamber westerns.",
  "influencedBy": [
    "Existential cinema"
  ],
  "influences": [
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 82,
  "rating": 6.3,
  "imdbId": "tt0059653",
  "trailerUrl": "https://www.youtube.com/watch?v=WxEGkbnl4MQ",
  "overview": "Three cowboys, mistaken for members of an outlaw gang, are relentlessly pursued by a posse.",
  "tmdbId": 60555
},
{
  "id": "pat-garrett-and-billy-the-kid-1973",
  "name": "Pat Garrett and Billy the Kid",
  "fullTitle": "Pat Garrett and Billy the Kid (1973)",
  "year": 1973,
  "director": "Sam Peckinpah",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "action"
  ],
  "subclouds": [
    "revisionist-western",
    "twilight-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/o0LXWfTXoDOoeYzZw0u1KmZhVIL.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Peckinpah's elegiac western about aging outlaws. Twilight-of-the-west themes influenced Tarantino's westerns.",
  "influencedBy": [
    "The Wild Bunch (1969)"
  ],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 115,
  "rating": 7.2,
  "imdbId": "tt0070518",
  "trailerUrl": "https://www.youtube.com/watch?v=SVDryeFDRPs",
  "overview": "Pat Garrett is hired as a lawman on behalf of a group of wealthy New Mexico cattle barons to bring down his old friend Billy the Kid.",
  "tmdbId": 11577
},
{
  "id": "the-outlaw-josey-wales-1976",
  "name": "The Outlaw Josey Wales",
  "fullTitle": "The Outlaw Josey Wales (1976)",
  "year": 1976,
  "director": "Clint Eastwood",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "action"
  ],
  "subclouds": [
    "revisionist-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/92BZIFPbyCPNhExyFScxA3xF1dy.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Eastwood's post-Civil War revenge western. Outlaw protagonist and racial themes influenced Django.",
  "influencedBy": [
    "Spaghetti westerns",
    "American westerns"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 135,
  "rating": 7.4,
  "imdbId": "tt0075029",
  "trailerUrl": "https://www.youtube.com/watch?v=YvXl6Ij-LhQ",
  "overview": "After avenging his family's brutal murder, Wales is pursued by a pack of soldiers. He prefers to travel alone, but ragtag outcasts are drawn to him - and Wales can't bring himself to leave them unprotected.",
  "tmdbId": 10747
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
    "drama",
    "action"
  ],
  "subclouds": [
    "revisionist-western",
    "neo-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/54roTwbX9fltg85zjsmrooXAs12.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Eastwood's deconstruction of western violence. Moral complexity and aging gunfighters influenced Tarantino's revisionist westerns.",
  "influencedBy": [
    "The Outlaw Josey Wales (1976)",
    "Spaghetti westerns"
  ],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 130,
  "rating": 7.9,
  "imdbId": "tt0105695",
  "trailerUrl": "https://www.youtube.com/watch?v=amE57OniG9Y",
  "overview": "William Munny is a retired, once-ruthless killer turned gentle widower and hog farmer. To help support his two motherless children, he accepts one last bounty-hunter mission to find the men who brutalized a prostitute. Joined by his former partner and a cocky greenhorn, he takes on a corrupt sheriff",
  "tmdbId": 33
},
{
  "id": "high-plains-drifter-1973",
  "name": "High Plains Drifter",
  "fullTitle": "High Plains Drifter (1973)",
  "year": 1973,
  "director": "Clint Eastwood",
  "country": "USA",
  "genres": [
    "western",
    "mystery",
    "action"
  ],
  "subclouds": [
    "spaghetti-western",
    "supernatural"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/AjkJCFkqanK1OZqiHxc6Kl2wPQO.jpg",
  "color": "#FF6B35",
  "influenceNotes": "Eastwood's supernatural western. Vengeance from beyond grave and moral ambiguity influenced Tarantino.",
  "influencedBy": [
    "Leone westerns"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 7.3,
  "imdbId": "tt0068699",
  "trailerUrl": "https://www.youtube.com/watch?v=be2mIVxDrr8",
  "overview": "A gunfighting stranger comes to the small settlement of Lago. After gunning down three gunmen who tried to kill him, the townsfolk decide to hire the Stranger to hold off three outlaws who are on their way.",
  "tmdbId": 11901
},
{
  "id": "high-noon-1952",
  "name": "High Noon",
  "fullTitle": "High Noon (1952)",
  "year": 1952,
  "director": "Fred Zinnemann",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "thriller"
  ],
  "subclouds": [
    "western",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/qETSMQ4IXBSAS409Z9OL0ppXWTW.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Real-time western about lone marshal. Ticking clock tension and moral courage influenced Tarantino's westerns.",
  "influencedBy": [],
  "influences": [
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 85,
  "rating": 7.7,
  "imdbId": "tt0044706",
  "trailerUrl": "https://www.youtube.com/watch?v=vFRm6xPDLFc",
  "overview": "Will Kane, the sheriff of a small town in New Mexico, learns a notorious outlaw he put in jail has been freed, and will be arriving on the noon train. Knowing the outlaw and his gang are coming to kill him, Kane is determined to stand his ground, so he attempts to gather a posse from among the local",
  "tmdbId": 288
},
{
  "id": "the-searchers-1956",
  "name": "The Searchers",
  "fullTitle": "The Searchers (1956)",
  "year": 1956,
  "director": "John Ford",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "adventure"
  ],
  "subclouds": [
    "western",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/jLBmgW0epNzJ1N9uzaVCjbyT94v.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Ford's masterpiece about obsessive quest. John Wayne's dark performance influenced complex western heroes in Django.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 119,
  "rating": 7.7,
  "imdbId": "tt0049730",
  "trailerUrl": "https://www.youtube.com/watch?v=pJXgjw_5erE",
  "overview": "As a Civil War veteran spends years searching for a young niece captured by Indians, his motivation becomes increasingly questionable.",
  "tmdbId": 3114
},
{
  "id": "the-man-who-shot-liberty-valance-1962",
  "name": "The Man Who Shot Liberty Valance",
  "fullTitle": "The Man Who Shot Liberty Valance (1962)",
  "year": 1962,
  "director": "John Ford",
  "country": "USA",
  "genres": [
    "western",
    "drama"
  ],
  "subclouds": [
    "western",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/4C1R0LEivLjbv3swAzJfzh0tzXl.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Ford's meditation on legend vs truth. Mythmaking and historical revision influenced Tarantino's alternate history westerns.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 123,
  "rating": 7.8,
  "imdbId": "tt0056217",
  "trailerUrl": "https://www.youtube.com/watch?v=GqhRXr2Mhn0",
  "overview": "Questions arise when Senator Stoddard attends the funeral of a local man named Tom Doniphon in a small Western town. Flashing back, we learn Doniphon saved Stoddard, then a lawyer, when he was roughed up by a crew of outlaws terrorizing the town, led by Liberty Valance. As the territory's safety hun",
  "tmdbId": 11697
},
{
  "id": "red-river-1948",
  "name": "Red River",
  "fullTitle": "Red River (1948)",
  "year": 1948,
  "director": "Howard Hawks",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "action"
  ],
  "subclouds": [
    "western",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/jyNTsAzrIWB441OtvfbgKtx1kFS.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Hawks' epic cattle drive western. Mentor-student conflict and epic scope influenced Django.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 133,
  "rating": 7.3,
  "imdbId": "tt0040724",
  "trailerUrl": "https://www.youtube.com/watch?v=ZxVCrIMPQXI",
  "overview": "Following the Civil War, headstrong rancher Thomas Dunson decides to lead a perilous cattle drive from Texas to Missouri. During the exhausting journey, his persistence becomes tyrannical in the eyes of Matthew Garth, his adopted son and prot\u00e9g\u00e9.",
  "tmdbId": 3089
},
{
  "id": "winchester-73-1950",
  "name": "Winchester '73",
  "fullTitle": "Winchester '73 (1950)",
  "year": 1950,
  "director": "Anthony Mann",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "action"
  ],
  "subclouds": [
    "western",
    "foundation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rqRgjWqSmK9oI6duvigPmn49aVG.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Mann's psychological western. James Stewart's dark performance and quest narrative influenced Tarantino's westerns.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 92,
  "rating": 7.3,
  "imdbId": "tt0043137",
  "trailerUrl": "https://www.youtube.com/watch?v=eb7xOnMX1Qw",
  "overview": "Lin McAdam rides into town on the trail of Dutch Henry Brown, only to find himself in a shooting competition against him. McAdam wins the prize, a one-in-a-thousand Winchester rifle, but Dutch steals it and leaves town. McAdam follows, intent on settling his old quarrel, while the rifle keeps changi",
  "tmdbId": 14551
},
{
  "id": "the-naked-spur-1953",
  "name": "The Naked Spur",
  "fullTitle": "The Naked Spur (1953)",
  "year": 1953,
  "director": "Anthony Mann",
  "country": "USA",
  "genres": [
    "western",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "western",
    "psychological"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/xS5EAgCnFFvHbyRydlqTbDbaXZ6.jpg",
  "color": "#D35400",
  "influenceNotes": "Mann's claustrophobic western. Psychological tension among small group influenced Hateful Eight.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 91,
  "rating": 6.9,
  "imdbId": "tt0044953",
  "trailerUrl": "https://www.youtube.com/watch?v=FtBtW1v6wuw",
  "overview": "A bounty hunter trying to bring a murderer to justice is forced to accept the help of two less-than-trustworthy strangers.",
  "tmdbId": 20442
},
{
  "id": "the-man-from-laramie-1955",
  "name": "The Man from Laramie",
  "fullTitle": "The Man from Laramie (1955)",
  "year": 1955,
  "director": "Anthony Mann",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "thriller"
  ],
  "subclouds": [
    "western",
    "revenge"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/aKMZoZpN0FobSIDAlj5Ixv0kDeT.jpg",
  "color": "#C0392B",
  "influenceNotes": "Mann's revenge western. James Stewart seeking justice for brother's death influenced Django's vengeance quest.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 103,
  "rating": 7.2,
  "imdbId": "tt0048342",
  "trailerUrl": "https://www.youtube.com/watch?v=GX_w0EKj2mA",
  "overview": "Will Lockhart arrives in Coronado, an isolated town in New Mexico, in search of someone who sells rifles to the Apache tribe, finding himself unwillingly drawn into the convoluted life of a local ranching family whose members seem to have a lot to hide.",
  "tmdbId": 18264
},
{
  "id": "ride-the-high-country-1962",
  "name": "Ride the High Country",
  "fullTitle": "Ride the High Country (1962)",
  "year": 1962,
  "director": "Sam Peckinpah",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "action"
  ],
  "subclouds": [
    "western",
    "twilight-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/oBdJliz2o88ZLPulL5KLdbRsQuf.jpg",
  "color": "#D35400",
  "influenceNotes": "Peckinpah's elegiac western about aging gunfighters. Honor and obsolescence themes influenced Tarantino.",
  "influencedBy": [],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 94,
  "rating": 7.0,
  "imdbId": "tt0056412",
  "trailerUrl": "https://www.youtube.com/watch?v=O8a70CB8mzU",
  "overview": "An ex-lawman is hired to transport gold from a mining community through dangerous territory. But what he doesn't realize is that his partner and old friend is plotting to double-cross him.",
  "tmdbId": 36206
},
{
  "id": "the-magnificent-seven-1960",
  "name": "The Magnificent Seven",
  "fullTitle": "The Magnificent Seven (1960)",
  "year": 1960,
  "director": "John Sturges",
  "country": "USA",
  "genres": [
    "western",
    "action",
    "adventure"
  ],
  "subclouds": [
    "western",
    "men-on-mission"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/e5ToxOyJwuZD4VOfI0qEn5uIjeJ.jpg",
  "color": "#D35400",
  "influenceNotes": "American remake of Seven Samurai. Team assembly and mission structure influenced Tarantino's ensemble films.",
  "influencedBy": [
    "Seven Samurai (1954)"
  ],
  "influences": [
    "Inglourious Basterds (2009)",
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 127,
  "rating": 7.5,
  "imdbId": "tt0054047",
  "trailerUrl": "https://www.youtube.com/watch?v=SEgfAuFwads",
  "overview": "An oppressed Mexican peasant village hires seven gunfighters to help defend their homes.",
  "tmdbId": 966
},
{
  "id": "el-topo-1970",
  "name": "El Topo",
  "fullTitle": "El Topo (1970)",
  "year": 1970,
  "director": "Alejandro Jodorowsky",
  "country": "Mexico",
  "genres": [
    "western",
    "surreal",
    "art"
  ],
  "subclouds": [
    "acid-western",
    "art-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/4ea7sUzZaQNRuIm4M6EqWLQWfnX.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Surrealist midnight movie western. Cult classic's genre experimentation influenced Tarantino's willingness to bend western conventions.",
  "influencedBy": [
    "Surrealism",
    "Spaghetti westerns"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 125,
  "rating": 7.0,
  "imdbId": "tt0067866",
  "trailerUrl": "https://www.youtube.com/watch?v=xjTlNTbv-xs",
  "overview": "El Topo decides to confront warrior Masters on a trans-formative desert journey he begins with his 6 year old son, who must bury his childhood totems to become a man.",
  "tmdbId": 13041
},
{
  "id": "dead-man-1995",
  "name": "Dead Man",
  "fullTitle": "Dead Man (1995)",
  "year": 1995,
  "director": "Jim Jarmusch",
  "country": "USA|Japan|Germany",
  "genres": [
    "western",
    "drama",
    "surreal"
  ],
  "subclouds": [
    "acid-western",
    "art-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/jX3wGBVoYoAY3IixBpwYk1fjT4z.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Jarmusch's existential western with Native American themes. Art-western approach influenced indie revisionism.",
  "influencedBy": [
    "Art cinema"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 121,
  "rating": 7.3,
  "imdbId": "tt0112817",
  "trailerUrl": "https://www.youtube.com/watch?v=FEHMWguT--U",
  "overview": "On the run after committing murder, an accountant encounters a strange Native American man who prepares him for his journey into the spiritual world.",
  "tmdbId": 922
},
{
  "id": "the-proposition-2005",
  "name": "The Proposition",
  "fullTitle": "The Proposition (2005)",
  "year": 2005,
  "director": "John Hillcoat",
  "country": "Australia|UK",
  "genres": [
    "western",
    "drama",
    "crime"
  ],
  "subclouds": [
    "australian-western",
    "revisionist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/bbSHSJuO5XjrIKMh6QXXLTg3Yzr.jpg",
  "color": "#BDC3C7",
  "influenceNotes": "Australian outback western. Brutal violence and moral complexity influenced Tarantino's revisionist westerns.",
  "influencedBy": [
    "Spaghetti westerns",
    "Australian cinema"
  ],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 104,
  "rating": 7.0,
  "imdbId": "tt0421238",
  "trailerUrl": "https://www.youtube.com/watch?v=BL9l9W49SRY",
  "overview": "In 1880s Australia, a lawman offers renegade Charlie Burns a difficult choice. In order to save his younger brother from the gallows, Charlie must hunt down and kill his older brother, who is wanted for rape and murder. Venturing into one of the Outback's most inhospitable regions, Charlie faces a t",
  "tmdbId": 16608
},
{
  "id": "no-country-for-old-men-2007",
  "name": "No Country for Old Men",
  "fullTitle": "No Country for Old Men (2007)",
  "year": 2007,
  "director": "Coen Brothers",
  "country": "USA",
  "genres": [
    "western",
    "thriller",
    "crime"
  ],
  "subclouds": [
    "neo-western",
    "thriller"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/6d5XOczc226jECq0LIX0siKtgHR.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Coen Brothers' modern western. Moral ambiguity and violence influenced contemporary western revival including Tarantino.",
  "influencedBy": [
    "Cormac McCarthy novel",
    "Westerns"
  ],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 122,
  "rating": 7.9,
  "imdbId": "tt0477348",
  "trailerUrl": "https://www.youtube.com/watch?v=A0oNrgumrlE",
  "overview": "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.",
  "tmdbId": 6977
},
{
  "id": "true-grit-2010",
  "name": "True Grit",
  "fullTitle": "True Grit (2010)",
  "year": 2010,
  "director": "Coen Brothers",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "adventure"
  ],
  "subclouds": [
    "neo-western",
    "revenge"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/tCrB8pcjadZjsDk7rleGJaIv78k.jpg",
  "color": "#C0392B",
  "influenceNotes": "Coen Brothers' faithful western remake. Revenge quest and period detail influenced Django Unchained.",
  "influencedBy": [
    "Charles Portis novel"
  ],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 110,
  "rating": 7.3,
  "imdbId": "tt1403865",
  "trailerUrl": "https://www.youtube.com/watch?v=Q5fEgKj9QNs",
  "overview": "Following the murder of her father by a hired hand, a 14-year-old farm girl sets out to capture the killer. To aid her, she hires the toughest U.S. Marshal she can find\u2014a man with 'true grit'\u2014Reuben J. 'Rooster' Cogburn.",
  "tmdbId": 44264
},
{
  "id": "310-to-yuma-2007",
  "name": "3:10 to Yuma",
  "fullTitle": "3:10 to Yuma (2007)",
  "year": 2007,
  "director": "James Mangold",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "thriller"
  ],
  "subclouds": [
    "neo-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/voMB69AsLnPNmtfbrBl0lbeFKDH.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Modern western remake. Moral complexity and strong performances influenced western revival.",
  "influencedBy": [
    "3:10 to Yuma (1957)"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 122,
  "rating": 7.2,
  "imdbId": "tt0381849",
  "trailerUrl": "https://www.youtube.com/watch?v=Kv6apbWxb5M",
  "overview": "In Arizona in the late 1800s, infamous outlaw Ben Wade and his vicious gang of thieves and murderers have plagued the Southern Railroad. When Wade is captured, Civil War veteran Dan Evans, struggling to survive on his drought-plagued ranch, volunteers to deliver him alive to the \"3:10 to Yuma\", a tr",
  "tmdbId": 5176
},
{
  "id": "the-assassination-of-jesse-james-by-the-coward-robert-ford-2007",
  "name": "The Assassination of Jesse James by the Coward Robert Ford",
  "fullTitle": "The Assassination of Jesse James by the Coward Robert Ford (2007)",
  "year": 2007,
  "director": "Andrew Dominik",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "biography"
  ],
  "subclouds": [
    "neo-western",
    "revisionist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/2d1S6fJS80fvseg6mJE8eq5o7Kx.jpg",
  "color": "#BDC3C7",
  "influenceNotes": "Contemplative western about fame and violence. Art-house approach influenced serious western filmmaking.",
  "influencedBy": [
    "Ron Hansen novel",
    "Terrence Malick"
  ],
  "influences": [
    "Django Unchained (2012)",
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 160,
  "rating": 7.0,
  "imdbId": "tt0443680",
  "trailerUrl": "https://www.youtube.com/watch?v=SrGmmitc62Q",
  "overview": "Outlaw Jesse James is rumored to be the 'fastest gun in the West'. An eager recruit into James' notorious gang, Robert Ford eventually grows jealous of the famed outlaw and, when Robert and his brother sense an opportunity to kill James, their murderous action elevates their target to near mythical ",
  "tmdbId": 4512
},
{
  "id": "the-sisters-brothers-2018",
  "name": "The Sisters Brothers",
  "fullTitle": "The Sisters Brothers (2018)",
  "year": 2018,
  "director": "Jacques Audiard",
  "country": "USA|France|Spain|Romania",
  "genres": [
    "western",
    "drama",
    "comedy"
  ],
  "subclouds": [
    "neo-western",
    "revisionist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/hbUGrEaJgFz9NWh34HHUb4vLjkG.jpg",
  "color": "#BDC3C7",
  "influenceNotes": "European art-western. Brothers as gunfighters influenced by Tarantino's revisionist westerns.",
  "influencedBy": [
    "Patrick deWitt novel"
  ],
  "influences": [
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 121,
  "rating": 6.8,
  "imdbId": "tt4971344",
  "trailerUrl": "https://www.youtube.com/watch?v=pShK7n9fY_Q",
  "overview": "Oregon, 1851. Hermann Kermit Warm, a chemist and aspiring gold prospector, keeps a profitable secret that the Commodore wants to know, so he sends the Sisters brothers, two notorious assassins, to capture him on his way to California.",
  "tmdbId": 440161
},
{
  "id": "bone-tomahawk-2015",
  "name": "Bone Tomahawk",
  "fullTitle": "Bone Tomahawk (2015)",
  "year": 2015,
  "director": "S. Craig Zahler",
  "country": "USA",
  "genres": [
    "western",
    "horror",
    "thriller"
  ],
  "subclouds": [
    "western",
    "horror"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/4MmTHpn2Y8emqvBgvOjufImUmKZ.jpg",
  "color": "#D35400",
  "influenceNotes": "Horror-western hybrid. Extreme violence and genre-mixing influenced by Tarantino's approach.",
  "influencedBy": [
    "The Searchers (1956)",
    "Horror westerns"
  ],
  "influences": [
    "The Hateful Eight (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 133,
  "rating": 6.9,
  "imdbId": "tt2494362",
  "trailerUrl": "https://www.youtube.com/watch?v=4KNWbfRDEv8",
  "overview": "During a shootout in a saloon, Sheriff Hunt injures a suspicious stranger. The doctor's assistant, wife of the local foreman, tends to him in prison. That night, the town is attacked and they both disappear\u2014only the arrow of a cannibal tribe is found. Hunt and a few of his men go in search of the pr",
  "tmdbId": 294963
},
{
  "id": "hostiles-2017",
  "name": "Hostiles",
  "fullTitle": "Hostiles (2017)",
  "year": 2017,
  "director": "Scott Cooper",
  "country": "USA",
  "genres": [
    "western",
    "drama",
    "action"
  ],
  "subclouds": [
    "neo-western",
    "revisionist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rqoezyB51GfhiloOB5ZErg5HXas.jpg",
  "color": "#BDC3C7",
  "influenceNotes": "Brutal western about racism and violence. Post-Django serious western influenced by Tarantino's racial themes.",
  "influencedBy": [
    "The Searchers (1956)",
    "Unforgiven (1992)"
  ],
  "influences": [
    "Django Unchained (2012)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 134,
  "rating": 6.9,
  "imdbId": "tt5478478",
  "trailerUrl": "https://www.youtube.com/watch?v=lrD0I-vLsXM",
  "overview": "A legendary Native American-hating Army captain nearing retirement in 1892 is given one last assignment: to escort a Cheyenne chief and his family through dangerous territory back to his Montana reservation.",
  "tmdbId": 384680
},
{
  "id": "the-harder-they-fall-2021",
  "name": "The Harder They Fall",
  "fullTitle": "The Harder They Fall (2021)",
  "year": 2021,
  "director": "Jeymes Samuel",
  "country": "USA",
  "genres": [
    "western",
    "action",
    "drama"
  ],
  "subclouds": [
    "neo-western",
    "black-western"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/su9WzL7lwUZPhjH6eZByAYFx2US.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "All-Black cast western directly influenced by Django Unchained. Stylized revenge narrative and hip-hop aesthetic.",
  "influencedBy": [
    "Django Unchained (2012)",
    "Blaxploitation"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 137,
  "rating": 6.6,
  "imdbId": "tt10696784",
  "trailerUrl": "https://www.youtube.com/watch?v=Poc55U2RPMw",
  "overview": "Gunning for revenge, outlaw Nat Love saddles up with his gang to take down enemy Rufus Buck, a ruthless crime boss who just got sprung from prison.",
  "tmdbId": 618162
},
{
  "id": "rolling-thunder-1977",
  "name": "Rolling Thunder",
  "fullTitle": "Rolling Thunder (1977)",
  "year": 1977,
  "director": "John Flynn",
  "country": "USA",
  "genres": [
    "action",
    "thriller",
    "crime"
  ],
  "subclouds": [
    "revenge",
    "70s-cinema",
    "exploitation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9iZjVn6Q5FJa92SQLcFMrskpES9.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Vietnam vet revenge thriller. Methodical vengeance and exploitation aesthetic influenced Kill Bill. Tarantino named his production company after this film.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)",
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 100,
  "rating": 6.8,
  "imdbId": "tt0076637",
  "trailerUrl": "https://www.youtube.com/watch?v=BY8te30b7gs",
  "overview": "A Vietnam veteran, Charles Rane, returns home after years in a POW camp and is treated as a hero. He has a hard time adjusting, and things go badly. A movie about the walking dead, before that meant just flesh-eating zombies.",
  "tmdbId": 21948
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
    "crime",
    "exploitation"
  ],
  "subclouds": [
    "rape-revenge",
    "exploitation",
    "female-action"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9ulPP8hcBjIrWRqeXsZVjL0uX3E.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Mute woman's revenge rampage. Female vengeance exploitation influenced Kill Bill's rape-revenge elements.",
  "influencedBy": [
    "Exploitation cinema"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 81,
  "rating": 6.7,
  "imdbId": "tt0082776",
  "trailerUrl": "https://www.youtube.com/watch?v=_-Ey6mjaARA",
  "overview": "After being attacked and raped twice in one day, a timid, mute seamstress goes insane, takes to the streets of New York City after dark, and randomly shoots men with a .45 caliber pistol.",
  "tmdbId": 22171
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
    "rape-revenge",
    "exploitation",
    "grindhouse"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/nMCkOo26GtISoxJmpkTAJyMqBO8.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Controversial rape-revenge exploitation. Methodical female vengeance influenced Kill Bill's revenge structure.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 101,
  "rating": 6.0,
  "imdbId": "tt0077713",
  "trailerUrl": "https://www.youtube.com/watch?v=CYtIfQU0gzw",
  "overview": "A young, beautiful career woman rents a backwoods cabin to write her first novel. Attacked by a group of local lowlifes and left for dead, she devises a horrific plan to inflict revenge.",
  "tmdbId": 25239
},
{
  "id": "the-bride-wore-black-1968",
  "name": "The Bride Wore Black",
  "fullTitle": "The Bride Wore Black (1968)",
  "year": 1968,
  "director": "Fran\u00e7ois Truffaut",
  "country": "France|Italy",
  "genres": [
    "thriller",
    "crime",
    "drama"
  ],
  "subclouds": [
    "french-cinema",
    "revenge"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/iP7kuo3tMyR2hJfqBsssiPnEoik.jpg",
  "color": "#C0392B",
  "influenceNotes": "Bride systematically killing those who murdered her husband. Direct narrative precursor to Kill Bill's revenge list structure.",
  "influencedBy": [
    "Cornell Woolrich novel",
    "Hitchcock"
  ],
  "influences": [
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 107,
  "rating": 7.1,
  "imdbId": "tt0061955",
  "trailerUrl": "https://www.youtube.com/watch?v=9elbbTIYeJE",
  "overview": "Julie Kohler is prevented from suicide by her mother. She leaves home, with the intent track down, charm and kill five men who do not know her. What is her goal? What is her purpose?",
  "tmdbId": 4191
},
{
  "id": "death-wish-1974",
  "name": "Death Wish",
  "fullTitle": "Death Wish (1974)",
  "year": 1974,
  "director": "Michael Winner",
  "country": "USA",
  "genres": [
    "action",
    "thriller",
    "crime"
  ],
  "subclouds": [
    "vigilante",
    "70s-cinema",
    "exploitation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rNksI6UiuTgLtBy69WvKT1PrG0R.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Urban vigilante revenge. Charles Bronson's methodical vengeance influenced revenge film tradition that informed Kill Bill.",
  "influencedBy": [],
  "influences": [
    "Kill Bill Vol. 1 (2003)",
    "John Wick (2014)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 93,
  "rating": 6.9,
  "imdbId": "tt0071402",
  "trailerUrl": "https://www.youtube.com/watch?v=FuDFXV56gQ0",
  "overview": "After his wife is murdered by street punks, a pacifistic New York City architect becomes a one-man vigilante squad, prowling the streets for would-be muggers after dark.",
  "tmdbId": 13939
},
{
  "id": "the-omega-man-1971",
  "name": "The Omega Man",
  "fullTitle": "The Omega Man (1971)",
  "year": 1971,
  "director": "Boris Sagal",
  "country": "USA",
  "genres": [
    "sci-fi",
    "action",
    "horror"
  ],
  "subclouds": [
    "sci-fi",
    "70s-cinema",
    "post-apocalyptic"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/qlt65C43HeoDm5K5gYBtT20OeA1.jpg",
  "color": "#95A5A6",
  "influenceNotes": "Charlton Heston in 70s sci-fi. Grindhouse aesthetic and isolation themes influenced Death Proof's exploitation style.",
  "influencedBy": [
    "I Am Legend novel"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 98,
  "rating": 6.2,
  "imdbId": "tt0067525",
  "trailerUrl": "https://www.youtube.com/watch?v=bWB6Ufh4O98",
  "overview": "Due to an experimental vaccine, Dr. Robert Neville is the only human survivor of an apocalyptic war waged with biological weapons. Besides him, only a few hundred deformed, nocturnal people remain - sensitive to light, and homicidally psychotic.",
  "tmdbId": 11234
},
{
  "id": "the-cars-that-ate-paris-1974",
  "name": "The Cars That Ate Paris",
  "fullTitle": "The Cars That Ate Paris (1974)",
  "year": 1974,
  "director": "Peter Weir",
  "country": "Australia",
  "genres": [
    "horror",
    "comedy",
    "thriller"
  ],
  "subclouds": [
    "australian-cinema",
    "car-horror",
    "exploitation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/ocYL30byfNiimXpzFUBVBtE6RN1.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Car-as-weapon horror. Australian exploitation car violence influenced Death Proof's vehicular mayhem.",
  "influencedBy": [
    "Australian exploitation"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 91,
  "rating": 5.5,
  "imdbId": "tt0071282",
  "trailerUrl": "https://www.youtube.com/watch?v=xKrZ8eTcdK4",
  "overview": "The small town of Paris, Australia deliberately causes car accidents, then sells/salvages all valuables from the wrecks as a means of economy.",
  "tmdbId": 62761
},
{
  "id": "mad-max-1979",
  "name": "Mad Max",
  "fullTitle": "Mad Max (1979)",
  "year": 1979,
  "director": "George Miller",
  "country": "Australia",
  "genres": [
    "action",
    "sci-fi",
    "thriller"
  ],
  "subclouds": [
    "car-chase",
    "post-apocalyptic",
    "australian-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/5LrI4GiCSrChgkdskVZiwv643Kg.jpg",
  "color": "#F39C12",
  "influenceNotes": "Influential car-chase film. Practical stunt work and vehicular mayhem influenced Death Proof's car stunts.",
  "influencedBy": [
    "The Cars That Ate Paris (1974)"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 91,
  "rating": 6.7,
  "imdbId": "tt0079501",
  "trailerUrl": "https://www.youtube.com/watch?v=E3F8IegOcjA",
  "overview": "In the ravaged near-future, a savage motorcycle gang rules the road. Terrorizing innocent civilians while tearing up the streets, the ruthless gang laughs in the face of a police force hell-bent on stopping them.",
  "tmdbId": 9659
},
{
  "id": "the-road-warrior-1981",
  "name": "The Road Warrior",
  "fullTitle": "The Road Warrior (1981)",
  "year": 1981,
  "director": "George Miller",
  "country": "Australia",
  "genres": [
    "action",
    "sci-fi",
    "adventure"
  ],
  "subclouds": [
    "car-chase",
    "post-apocalyptic",
    "australian-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/l1KVEhkGDpWRzQ0VqIhZqDDuOim.jpg",
  "color": "#F39C12",
  "influenceNotes": "Epic car-chase sequences. Practical stunts and vehicular combat influenced Death Proof and modern action.",
  "influencedBy": [
    "Mad Max (1979)"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 96,
  "rating": 7.4,
  "imdbId": "tt0082694",
  "trailerUrl": "https://www.youtube.com/watch?v=bwcADuJZDNA",
  "overview": "Max Rockatansky returns as the heroic loner who drives the dusty roads of a postapocalyptic Australian Outback in an unending search for gasoline. Arrayed against him and the other scraggly defendants of a fuel-depot encampment are the bizarre warriors commanded by the charismatic Lord Humungus, a v",
  "tmdbId": 8810
},
{
  "id": "race-with-the-devil-1975",
  "name": "Race with the Devil",
  "fullTitle": "Race with the Devil (1975)",
  "year": 1975,
  "director": "Jack Starrett",
  "country": "USA",
  "genres": [
    "action",
    "horror",
    "thriller"
  ],
  "subclouds": [
    "car-chase",
    "horror",
    "70s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/4ezD93ytLd8707j3Qvg53Mpz5ff.jpg",
  "color": "#F39C12",
  "influenceNotes": "RV car chase with occult horror. 70s car-chase exploitation influenced Death Proof aesthetic.",
  "influencedBy": [
    "Car chase exploitation"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 88,
  "rating": 6.4,
  "imdbId": "tt0073600",
  "trailerUrl": "https://www.youtube.com/watch?v=DbKpXL-E8mg",
  "overview": "Two couples vacationing together in an R.V. from Texas to Colorado are terrorized after they witness a murder during a Satanic ritual.",
  "tmdbId": 32051
},
{
  "id": "white-line-fever-1975",
  "name": "White Line Fever",
  "fullTitle": "White Line Fever (1975)",
  "year": 1975,
  "director": "Jonathan Kaplan",
  "country": "USA",
  "genres": [
    "action",
    "crime",
    "drama"
  ],
  "subclouds": [
    "trucking",
    "70s-cinema",
    "exploitation"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/cPXwaBrDGOUIkzGj6MeAElzUi3Z.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Trucker revenge film. Working-class heroes and vehicular action influenced Death Proof.",
  "influencedBy": [
    "Trucking exploitation"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 90,
  "rating": 6.0,
  "imdbId": "tt0073896",
  "trailerUrl": "https://www.youtube.com/watch?v=bOFmdyNFsjI",
  "overview": "An independent trucker with a pregnant wife fights cargo crooks and the big shot they work for.",
  "tmdbId": 42267
},
{
  "id": "duel-1971",
  "name": "Duel",
  "fullTitle": "Duel (1971)",
  "year": 1971,
  "director": "Steven Spielberg",
  "country": "USA",
  "genres": [
    "thriller",
    "action",
    "horror"
  ],
  "subclouds": [
    "car-chase",
    "thriller",
    "tv-movie"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/trhk6fA4Ss2cyiCYvwegLW9OmEM.jpg",
  "color": "#F39C12",
  "influenceNotes": "Spielberg's TV movie about truck stalking car. Vehicular menace influenced Death Proof's Stuntman Mike.",
  "influencedBy": [
    "Richard Matheson story"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 89,
  "rating": 7.4,
  "imdbId": "tt0067023",
  "trailerUrl": "https://www.youtube.com/watch?v=Gdk1Igqu05Y",
  "overview": "Traveling businessman David Mann angers the driver of a rusty tanker while crossing the California desert. A simple trip turns deadly, as Mann struggles to stay on the road while the tanker plays cat and mouse with his life.",
  "tmdbId": 839
},
{
  "id": "the-sugarland-express-1974",
  "name": "The Sugarland Express",
  "fullTitle": "The Sugarland Express (1974)",
  "year": 1974,
  "director": "Steven Spielberg",
  "country": "USA",
  "genres": [
    "crime",
    "drama",
    "adventure"
  ],
  "subclouds": [
    "car-chase",
    "crime",
    "70s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/csahjHhtJ9NzFKcxVcw7S4Pyfj.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Spielberg's car-chase drama. Extended vehicular pursuit influenced Death Proof's chase aesthetic.",
  "influencedBy": [
    "Bonnie and Clyde (1967)"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 110,
  "rating": 6.6,
  "imdbId": "tt0072226",
  "trailerUrl": "https://www.youtube.com/watch?v=Idj2FA06e9A",
  "overview": "Married small-time crooks Lou-Jean and Clovis Poplin lose their baby to the state of Texas and resolve to do whatever it takes to get him back. Lou-Jean gets Clovis out of jail, and the two steal their son from his foster home, in addition to taking a highway patrolman hostage. As a massive dragnet ",
  "tmdbId": 5121
},
{
  "id": "smokey-and-the-bandit-1977",
  "name": "Smokey and the Bandit",
  "fullTitle": "Smokey and the Bandit (1977)",
  "year": 1977,
  "director": "Hal Needham",
  "country": "USA",
  "genres": [
    "action",
    "comedy",
    "adventure"
  ],
  "subclouds": [
    "car-chase",
    "comedy",
    "70s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/2dI1Z427FPoicySnXmzwlEUX0RX.jpg",
  "color": "#F39C12",
  "influenceNotes": "Burt Reynolds car-chase comedy. Stunt coordinator Hal Needham's practical work influenced Death Proof's commitment to real stunts.",
  "influencedBy": [],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 96,
  "rating": 7.0,
  "imdbId": "tt0076729",
  "trailerUrl": "https://www.youtube.com/watch?v=3U7j296Nxcs",
  "overview": "A race car driver tries to transport an illegal beer shipment from Texas to Atlanta in under 28 hours, picking up a reluctant bride-to-be on the way.",
  "tmdbId": 11006
},
{
  "id": "the-great-texas-dynamite-chase-1976",
  "name": "The Great Texas Dynamite Chase",
  "fullTitle": "The Great Texas Dynamite Chase (1976)",
  "year": 1976,
  "director": "Michael Pressman",
  "country": "USA",
  "genres": [
    "action",
    "crime",
    "comedy"
  ],
  "subclouds": [
    "exploitation",
    "female-action",
    "car-chase"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/hS4ToJrIwMrS39iw7rbddXo9NTF.jpg",
  "color": "#E74C3C",
  "influenceNotes": "Female bank robbers on the run. Women-led car chase exploitation influenced Death Proof's female ensemble.",
  "influencedBy": [
    "Bonnie and Clyde (1967)"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 90,
  "rating": 4.8,
  "imdbId": "tt0076109",
  "overview": "Candy and Ellie Jo are a pair of sexy bank robbers who blast their way into small-town banks with a carload of dynamite! When they take Slim hostage, it begins a thrill-packed crime spree across the state of Texas.",
  "tmdbId": 44005
},
{
  "id": "convoy-1978",
  "name": "Convoy",
  "fullTitle": "Convoy (1978)",
  "year": 1978,
  "director": "Sam Peckinpah",
  "country": "USA",
  "genres": [
    "action",
    "drama",
    "adventure"
  ],
  "subclouds": [
    "trucking",
    "car-chase",
    "70s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/xjowoBInlikSlvfAYDRN9ubaODB.jpg",
  "color": "#F39C12",
  "influenceNotes": "Peckinpah's trucker action film. CB radio culture and vehicular solidarity influenced Death Proof.",
  "influencedBy": [
    "Trucking culture"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 110,
  "rating": 6.3,
  "imdbId": "tt0077369",
  "trailerUrl": "https://www.youtube.com/watch?v=BNYk9hMdvIo",
  "overview": "Trucker Rubber Duck and his buddies Pig Pen, Widow Woman and Spider Mike use their CB radios to warn one another of the presence of cops. But conniving Sheriff Wallace is hip to the truckers' tactics, and begins tricking the drivers through his own CB broadcasts. Facing constant harassment from the ",
  "tmdbId": 9584
},
{
  "id": "the-driver-1978",
  "name": "The Driver",
  "fullTitle": "The Driver (1978)",
  "year": 1978,
  "director": "Walter Hill",
  "country": "USA",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "neo-noir",
    "car-chase",
    "minimalist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/zSpk2OH4MCgLGB06XDv4YUfBTv6.jpg",
  "color": "#34495E",
  "influenceNotes": "Minimalist car-chase noir. Professional driver aesthetic influenced Death Proof and modern car cinema.",
  "influencedBy": [
    "Film noir",
    "Le Samoura\\u00ef (1967)"
  ],
  "influences": [
    "Death Proof (2007)",
    "Drive (2011)"
  ],
  "influenceCount": 2,
  "size": 15,
  "runtime": 91,
  "rating": 7.2,
  "imdbId": "tt0077474",
  "trailerUrl": "https://www.youtube.com/watch?v=K9HIFF8_26M",
  "overview": "The Driver specializes in driving getaway cars for robberies. His exceptional talent has prevented him from being caught yet. After another successful flight from the police a self-assured detective makes it his primary goal to catch the Driver. He promises pardons to a gang if they help to convict ",
  "tmdbId": 2153
},
{
  "id": "to-live-and-die-in-la-1985",
  "name": "To Live and Die in L.A.",
  "fullTitle": "To Live and Die in L.A. (1985)",
  "year": 1985,
  "director": "William Friedkin",
  "country": "USA",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "neo-noir",
    "car-chase",
    "80s-cinema"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/2iW3pSihBIhXjnBQmUJ0mAiZbB5.jpg",
  "color": "#34495E",
  "influenceNotes": "Wrong-way freeway chase. Friedkin's kinetic car action influenced Death Proof's practical stunts.",
  "influencedBy": [
    "The French Connection (1971)"
  ],
  "influences": [
    "Death Proof (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 116,
  "rating": 7.1,
  "imdbId": "tt0090180",
  "trailerUrl": "https://www.youtube.com/watch?v=haDl-oPkWEc",
  "overview": "When his longtime partner on the force is killed, reckless U.S. Secret Service agent Richard Chance vows revenge, setting out to nab dangerous counterfeit artist Eric Masters.",
  "tmdbId": 9846
},
{
  "id": "faster-pussycat-kill-kill-1965",
  "name": "Faster, Pussycat! Kill! Kill!",
  "fullTitle": "Faster, Pussycat! Kill! Kill! (1965)",
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
  "influenceNotes": "Go-go dancers as killers with cars. Meyer's female-led exploitation directly influenced Death Proof's structure.",
  "influencedBy": [],
  "influences": [
    "Death Proof (2007)",
    "Kill Bill Vol. 1 (2003)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 83,
  "rating": 6.3,
  "imdbId": "tt0059170",
  "trailerUrl": "https://www.youtube.com/watch?v=gLTnzo-nd8Q",
  "overview": "A trio of thrill-seeking go-go dancers kidnap a young girl and attempt to seduce an old rancher and his two sons out of their small fortune, but their scheme doesn't play out as intended.",
  "tmdbId": 315
},
{
  "id": "the-great-escape-1963",
  "name": "The Great Escape",
  "fullTitle": "The Great Escape (1963)",
  "year": 1963,
  "director": "John Sturges",
  "country": "USA",
  "genres": [
    "war",
    "adventure",
    "thriller"
  ],
  "subclouds": [
    "war",
    "men-on-mission",
    "prison"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/gBH4H8UMFxl139HaLz6lRuvsel8.jpg",
  "color": "#27AE60",
  "influenceNotes": "WWII prison escape ensemble. Diverse characters and German opposition influenced Basterds.",
  "influencedBy": [],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 173,
  "rating": 7.9,
  "imdbId": "tt0057115",
  "trailerUrl": "https://www.youtube.com/watch?v=8No6XGbvr0w",
  "overview": "The Nazis, exasperated at the number of escapes from their prison camps by a relatively small number of Allied prisoners, relocate them to a high-security 'escape-proof' camp to sit out the remainder of the war. Undaunted, the prisoners plan one of the most ambitious escape attempts of World War II.",
  "tmdbId": 5925
},
{
  "id": "the-guns-of-navarone-1961",
  "name": "The Guns of Navarone",
  "fullTitle": "The Guns of Navarone (1961)",
  "year": 1961,
  "director": "J. Lee Thompson",
  "country": "USA|UK",
  "genres": [
    "war",
    "action",
    "adventure"
  ],
  "subclouds": [
    "war",
    "men-on-mission"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/j6VSFnm20GlkUi8yb7hM5Qfc1fA.jpg",
  "color": "#27AE60",
  "influenceNotes": "Classic men-on-mission WWII film. Diverse team with specialized skills influenced Basterds structure.",
  "influencedBy": [
    "Alistair MacLean novel"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 160,
  "rating": 7.3,
  "imdbId": "tt0054953",
  "trailerUrl": "https://www.youtube.com/watch?v=DR2KGPVqIHo",
  "overview": "A team of allied saboteurs are assigned an impossible mission: infiltrate an impregnable Nazi-held island and destroy the two enormous long-range field guns that prevent the rescue of 2,000 trapped British soldiers.",
  "tmdbId": 10911
},
{
  "id": "operation-amsterdam-1959",
  "name": "Operation Amsterdam",
  "fullTitle": "Operation Amsterdam (1959)",
  "year": 1959,
  "director": "Michael McCarthy",
  "country": "UK",
  "genres": [
    "war",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "war",
    "espionage"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/6Bd4LTkKvkL8A2nkk5CE08RofSE.jpg",
  "color": "#27AE60",
  "influenceNotes": "Mission behind enemy lines to secure diamonds. Covert operations influenced Basterds' espionage elements.",
  "influencedBy": [
    "WWII history"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 104,
  "rating": 5.8,
  "imdbId": "tt0053140",
  "trailerUrl": "https://www.youtube.com/watch?v=5gVZYF6MfTs",
  "overview": "When Germany invades Holland in 1940, a British intelligence officer and two Dutch diamond merchants go to Amsterdam to persuade the Dutch diamond merchants to evacuate their diamond supplies to England.",
  "tmdbId": 46039
},
{
  "id": "the-train-1964",
  "name": "The Train",
  "fullTitle": "The Train (1964)",
  "year": 1964,
  "director": "John Frankenheimer",
  "country": "France|Italy|USA",
  "genres": [
    "war",
    "thriller",
    "action"
  ],
  "subclouds": [
    "war",
    "resistance"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/bzgPLB7efMohled42PIn6CcOTnO.jpg",
  "color": "#27AE60",
  "influenceNotes": "French Resistance stopping Nazi art theft. Sabotage and resistance influenced Basterds.",
  "influencedBy": [
    "French Resistance history"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 133,
  "rating": 7.5,
  "imdbId": "tt0059825",
  "trailerUrl": "https://www.youtube.com/watch?v=KDpjtVI1z9g",
  "overview": "As the Allied forces approach Paris in August 1944, German Colonel Von Waldheim is desperate to take all of France's greatest paintings to Germany. He manages to secure a train to transport the valuable art works even as the chaos of retreat descends upon them. The French resistance however wants to",
  "tmdbId": 3482
},
{
  "id": "cross-of-iron-1977",
  "name": "Cross of Iron",
  "fullTitle": "Cross of Iron (1977)",
  "year": 1977,
  "director": "Sam Peckinpah",
  "country": "UK|West Germany",
  "genres": [
    "war",
    "drama",
    "action"
  ],
  "subclouds": [
    "war",
    "anti-war"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/fR6pqh5aFn0fawsn7sR2zC15swx.jpg",
  "color": "#27AE60",
  "influenceNotes": "Peckinpah's brutal WWII film from German perspective. Moral ambiguity influenced Basterds.",
  "influencedBy": [
    "Willi Heinrich novel"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 132,
  "rating": 7.1,
  "imdbId": "tt0074695",
  "trailerUrl": "https://www.youtube.com/watch?v=PBn3kOvK_qI",
  "overview": "It is 1943, and the German army\u2014ravaged and demoralised\u2014is hastily retreating from the Russian front. In the midst of the madness, conflict brews between the aristocratic yet ultimately pusillanimous Captain Stransky and the courageous Corporal Steiner. Stransky is the only man who believes that the",
  "tmdbId": 10839
},
{
  "id": "patton-1970",
  "name": "Patton",
  "fullTitle": "Patton (1970)",
  "year": 1970,
  "director": "Franklin J. Schaffner",
  "country": "USA",
  "genres": [
    "war",
    "biography",
    "drama"
  ],
  "subclouds": [
    "war",
    "biography"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rLM7jIEPTjj4CF7F1IrzzNjLUCu.jpg",
  "color": "#27AE60",
  "influenceNotes": "Epic WWII character study. Larger-than-life military characters influenced Aldo Raine character.",
  "influencedBy": [
    "George S. Patton biography"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 1,
  "size": 15,
  "runtime": 172,
  "rating": 7.5,
  "imdbId": "tt0066206",
  "trailerUrl": "https://www.youtube.com/watch?v=bLXzqSmxGaM",
  "overview": "\"Patton\" tells the tale of General George S. Patton, famous tank commander of World War II. The film begins with Patton's career in North Africa and progresses through the invasion of Germany and the fall of the Third Reich. Side plots also speak of Patton's numerous faults such his temper and habit",
  "tmdbId": 11202
},
{
  "id": "the-longest-day-1962",
  "name": "The Longest Day",
  "fullTitle": "The Longest Day (1962)",
  "year": 1962,
  "director": "Multiple",
  "country": "USA",
  "genres": [
    "war",
    "drama",
    "action"
  ],
  "subclouds": [
    "war",
    "epic"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/5zmvEofdIlgXrQl9A7e5IOzlnFU.jpg",
  "color": "#27AE60",
  "influenceNotes": "Epic D-Day ensemble film. Multiple perspectives influenced Basterds' chapter structure.",
  "influencedBy": [
    "D-Day history"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 178,
  "rating": 7.6,
  "imdbId": "tt0056197",
  "trailerUrl": "https://www.youtube.com/watch?v=nqFn_pM5QxU",
  "overview": "The retelling of June 6, 1944, from the perspectives of the Germans, US, British, Canadians, and the Free French. Marshall Erwin Rommel, touring the defenses being established as part of the Reich's Atlantic Wall, notes to his officers that when the Allied invasion comes they must be stopped on the ",
  "tmdbId": 9289
},
{
  "id": "kellys-heroes-1970",
  "name": "Kelly's Heroes",
  "fullTitle": "Kelly's Heroes (1970)",
  "year": 1970,
  "director": "Brian G. Hutton",
  "country": "USA|Yugoslavia",
  "genres": [
    "war",
    "comedy",
    "action"
  ],
  "subclouds": [
    "war",
    "comedy",
    "heist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/hleMxFKSC42yT0TClS4G29HV11n.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "WWII heist comedy. Genre-mixing and irreverent tone influenced Basterds' approach.",
  "influencedBy": [
    "WWII heist concept"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 144,
  "rating": 7.3,
  "imdbId": "tt0065938",
  "trailerUrl": "https://www.youtube.com/watch?v=2W58fJvUMbQ",
  "overview": "A misfit group of World War II American soldiers goes AWOL to rob a bank behind German lines.",
  "tmdbId": 11589
},
{
  "id": "the-devils-brigade-1968",
  "name": "The Devil's Brigade",
  "fullTitle": "The Devil's Brigade (1968)",
  "year": 1968,
  "director": "Andrew V. McLaglen",
  "country": "USA|Italy",
  "genres": [
    "war",
    "action",
    "drama"
  ],
  "subclouds": [
    "war",
    "men-on-mission"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/kbcyQHD93FcPxUvKQai5oJ9tUtE.jpg",
  "color": "#27AE60",
  "influenceNotes": "American-Canadian special forces. Ragtag unit training influenced Basterds.",
  "influencedBy": [
    "WWII history"
  ],
  "influences": [
    "Inglourious Basterds (2009)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 130,
  "rating": 6.3,
  "imdbId": "tt0062886",
  "trailerUrl": "https://www.youtube.com/watch?v=xMee254zEFg",
  "overview": "At the onset of World War II, American Lt. Col. Robert Frederick  is put in charge of a unit called the 1st Special Service Force, composed of elite Canadian commandos and undisciplined American soldiers. With Maj. Alan Crown leading the Canadians and Maj. Cliff Bricker the acting head of the Americ",
  "tmdbId": 31938
},
{
  "id": "natural-born-killers-1994",
  "name": "Natural Born Killers",
  "fullTitle": "Natural Born Killers (1994)",
  "year": 1994,
  "director": "Oliver Stone",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "satire"
  ],
  "subclouds": [
    "crime",
    "satire",
    "violence"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/fEKZwT91gxvkAoyPgpNXo8W5fu0.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Based on Tarantino's original screenplay. Stone's adaptation shows Tarantino's influence on 90s crime cinema even when not directing.",
  "influencedBy": [
    "Tarantino screenplay",
    "Bonnie and Clyde (1967)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 118,
  "rating": 7.1,
  "imdbId": "tt0110632",
  "trailerUrl": "https://www.youtube.com/watch?v=Quh24cn7-E8",
  "overview": "Two victims of traumatized childhoods become lovers and serial murderers irresponsibly glorified by the mass media.",
  "tmdbId": 241
},
{
  "id": "true-romance-1993",
  "name": "True Romance",
  "fullTitle": "True Romance (1993)",
  "year": 1993,
  "director": "Tony Scott",
  "country": "USA",
  "genres": [
    "crime",
    "romance",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "romance"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/39lXk6ud6KiJgGbbWI2PUKS7y2.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Tarantino's screenplay directed by Tony Scott. Pop-culture dialogue and violence mix established Tarantino's voice.",
  "influencedBy": [
    "Tarantino screenplay"
  ],
  "influences": [
    "Pulp Fiction (1994)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 121,
  "rating": 7.5,
  "imdbId": "tt0108399",
  "trailerUrl": "https://www.youtube.com/watch?v=6uoPeUa7Gkc",
  "overview": "Clarence marries hooker Alabama, steals cocaine from her pimp, and tries to sell it in Hollywood, while the owners of the coke try to reclaim it.",
  "tmdbId": 319
},
{
  "id": "from-dusk-till-dawn-1996",
  "name": "From Dusk Till Dawn",
  "fullTitle": "From Dusk Till Dawn (1996)",
  "year": 1996,
  "director": "Robert Rodriguez",
  "country": "USA",
  "genres": [
    "horror",
    "action",
    "crime"
  ],
  "subclouds": [
    "horror",
    "vampire",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/uBoQytp3KTQFaVqTe6d0ECGaKh9.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Tarantino screenplay and performance. Genre-switching and exploitation aesthetic influenced later collaborations.",
  "influencedBy": [
    "Tarantino screenplay",
    "Vampire films"
  ],
  "influences": [
    "Grindhouse (2007)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.0,
  "imdbId": "tt0116367",
  "trailerUrl": "https://www.youtube.com/watch?v=y-J9bBvO5dk",
  "overview": "After kidnapping a father and his two kids, the Gecko brothers head south to a seedy Mexican bar to hide out in safety, unaware of its notorious vampire clientele.",
  "tmdbId": 755
},
{
  "id": "out-of-sight-1998",
  "name": "Out of Sight",
  "fullTitle": "Out of Sight (1998)",
  "year": 1998,
  "director": "Steven Soderbergh",
  "country": "USA",
  "genres": [
    "crime",
    "romance",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "elmore-leonard"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/v49q7AMR3pB4M762woWB1NYMCLF.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Soderbergh's Elmore Leonard adaptation showing post-Pulp Fiction crime cinema aesthetic. Non-linear structure.",
  "influencedBy": [
    "Elmore Leonard novel",
    "Pulp Fiction (1994)"
  ],
  "influences": [
    "Jackie Brown (1997)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 123,
  "rating": 6.7,
  "imdbId": "tt0120780",
  "trailerUrl": "https://www.youtube.com/watch?v=WE49DjCAZCc",
  "overview": "Meet Jack Foley, a smooth criminal who bends the law and is determined to make one last heist. Karen Sisco is a federal marshal who chooses all the right moves \u2026 and all the wrong guys. Now they're willing to risk it all to find out if there's more between them than just the law.",
  "tmdbId": 1389
},
{
  "id": "get-shorty-1995",
  "name": "Get Shorty",
  "fullTitle": "Get Shorty (1995)",
  "year": 1995,
  "director": "Barry Sonnenfeld",
  "country": "USA",
  "genres": [
    "crime",
    "comedy",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "comedy",
    "elmore-leonard"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/r82SdPhg4fnIcLt0ogIjQxqjdcO.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Elmore Leonard adaptation with Hollywood satire. Crime-comedy mix influenced by Tarantino.",
  "influencedBy": [
    "Elmore Leonard novel",
    "Pulp Fiction (1994)"
  ],
  "influences": [
    "Jackie Brown (1997)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 6.5,
  "imdbId": "tt0113161",
  "trailerUrl": "https://www.youtube.com/watch?v=fvBx0x9IJnk",
  "overview": "Chili Palmer is a Miami mobster who gets sent to L.A. to collect a bad debt from Harry Zimm, a Hollywood producer who specializes in cheesy horror films. When Chili meets Harry's leading lady, the romantic sparks fly. After pitching his own life story as a movie idea, Chili learns that being a mobst",
  "tmdbId": 8012
},
{
  "id": "bound-1996",
  "name": "Bound",
  "fullTitle": "Bound (1996)",
  "year": 1996,
  "director": "Wachowskis",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "noir"
  ],
  "subclouds": [
    "neo-noir",
    "crime",
    "lgbtq"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/9qAy6UWVw44dGrsyKrdEMt5qIUM.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Wachowskis' neo-noir influenced by Tarantino's crime aesthetic. Stylized dialogue and violence.",
  "influencedBy": [
    "Film noir",
    "Pulp Fiction (1994)"
  ],
  "influences": [
    "The Matrix (1999)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 7.2,
  "imdbId": "tt0115736",
  "trailerUrl": "https://www.youtube.com/watch?v=ToCMwdOaWh4",
  "overview": "Corky, a tough female ex-convict working on an apartment renovation in a Chicago building, meets a couple living next door, Caesar, a paranoid mobster, and Violet, his seductive girlfriend, who is immediately attracted to her.",
  "tmdbId": 9303
},
{
  "id": "go-1999",
  "name": "Go",
  "fullTitle": "Go (1999)",
  "year": 1999,
  "director": "Doug Liman",
  "country": "USA",
  "genres": [
    "crime",
    "comedy",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "comedy",
    "multi-narrative"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/kP0OOAa4GTZSUPW8fgPbk1OmKEW.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Multi-perspective crime comedy. Pulp Fiction's narrative structure influence on late-90s crime films.",
  "influencedBy": [
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 11,
  "size": 25,
  "runtime": 102,
  "rating": 7.0,
  "imdbId": "tt0139239",
  "trailerUrl": "https://www.youtube.com/watch?v=0KTWEFpDOis",
  "overview": "A supermarket clerk decides to step in for an absent drug dealer, setting off an explosive, comedic chain of events.",
  "tmdbId": 9430
},
{
  "id": "suicide-kings-1997",
  "name": "Suicide Kings",
  "fullTitle": "Suicide Kings (1997)",
  "year": 1997,
  "director": "Peter O'Fallon",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "comedy"
  ],
  "subclouds": [
    "crime",
    "thriller"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rQ2Sidqubi7XiHDScFe1faIz3Uv.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "One-location crime thriller. Reservoir Dogs influence on 90s crime chamber pieces.",
  "influencedBy": [
    "Reservoir Dogs (1992)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 106,
  "rating": 6.6,
  "imdbId": "tt0120241",
  "trailerUrl": "https://www.youtube.com/watch?v=zGR8t4rSMUU",
  "overview": "Carlo, a former mobster, is abducted by five privileged young men desperate to raise a $2 million ransom to save the sister of a friend. As Carlo plays mind games, however, his captors splinter -- each wondering whether one of their own had a hand in the crime.",
  "tmdbId": 10668
},
{
  "id": "the-usual-suspects-1995",
  "name": "The Usual Suspects",
  "fullTitle": "The Usual Suspects (1995)",
  "year": 1995,
  "director": "Bryan Singer",
  "country": "USA",
  "genres": [
    "crime",
    "mystery",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "neo-noir",
    "mystery"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/99X2SgyFunJFXGAYnDv3sb9pnUD.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Twist-ending crime film. Reservoir Dogs' influence on ensemble crime narratives.",
  "influencedBy": [
    "Film noir",
    "Reservoir Dogs (1992)"
  ],
  "influences": [],
  "influenceCount": 1,
  "size": 15,
  "runtime": 106,
  "rating": 8.2,
  "imdbId": "tt0114814",
  "trailerUrl": "https://www.youtube.com/watch?v=jM3jrHGAsIE",
  "overview": "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor \u2013 leaving few surviv",
  "tmdbId": 629
},
{
  "id": "things-to-do-in-denver-when-youre-dead-1995",
  "name": "Things to Do in Denver When You're Dead",
  "fullTitle": "Things to Do in Denver When You're Dead (1995)",
  "year": 1995,
  "director": "Gary Fleder",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "crime",
    "neo-noir"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/3LxYzYybOVpnw0juCSlNL5cj8NK.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Stylized crime dialogue. Post-Pulp Fiction crime cinema with witty criminals.",
  "influencedBy": [
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 116,
  "rating": 6.5,
  "imdbId": "tt0114660",
  "trailerUrl": "https://www.youtube.com/watch?v=i1o_PO3ridY",
  "overview": "Five different criminals face imminent death after botching a job quite badly.",
  "tmdbId": 400
},
{
  "id": "2-days-in-the-valley-1996",
  "name": "2 Days in the Valley",
  "fullTitle": "2 Days in the Valley (1996)",
  "year": 1996,
  "director": "John Herzfeld",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "comedy"
  ],
  "subclouds": [
    "crime",
    "ensemble"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/kKSr1PP7IVJek8heFWbSrmJXVMZ.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "LA crime ensemble with intersecting stories. Pulp Fiction structure influence.",
  "influencedBy": [
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 104,
  "rating": 6.2,
  "imdbId": "tt0115438",
  "trailerUrl": "https://www.youtube.com/watch?v=U1p9idpwzK4",
  "overview": "In a sleepy bedroom community of LA's San Fernando Valley, the murder of a professional athlete by two hit men sets into motion a chain of events that puts the mundane lives of a dozen residents on a collision course. This clever tale tells the story of two hit men, a mistress, a nurse, a vindictive",
  "tmdbId": 9401
},
{
  "id": "sexy-beast-2000",
  "name": "Sexy Beast",
  "fullTitle": "Sexy Beast (2000)",
  "year": 2000,
  "director": "Jonathan Glazer",
  "country": "UK|Spain|USA",
  "genres": [
    "crime",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "crime",
    "british-crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/xTfCZTzhgHNAR1pf5D49WH4buI5.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Ben Kingsley's menacing gangster. Stylized British crime influenced by Tarantino aesthetic.",
  "influencedBy": [
    "Tarantino influence"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 89,
  "rating": 7.0,
  "imdbId": "tt0203119",
  "trailerUrl": "https://www.youtube.com/watch?v=osexRaPM_Gc",
  "overview": "Ex-safecracker Gal Dove has served his time behind bars and is blissfully retired to a Spanish villa paradise with a wife he adores. The idyll is shattered by the arrival of his nemesis Don Logan, intent on persuading Gal to return to London for one last big job.",
  "tmdbId": 11826
},
{
  "id": "layer-cake-2004",
  "name": "Layer Cake",
  "fullTitle": "Layer Cake (2004)",
  "year": 2004,
  "director": "Matthew Vaughn",
  "country": "UK",
  "genres": [
    "crime",
    "thriller",
    "action"
  ],
  "subclouds": [
    "british-crime",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/rDOxXteqxALBaSa3V3zTjGJuyWB.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Stylized British crime film. Tarantino's influence on British crime cinema.",
  "influencedBy": [
    "Lock Stock and Two Smoking Barrels (1998)",
    "Pulp Fiction (1994)"
  ],
  "influences": [
    "Kingsman (2015)"
  ],
  "influenceCount": 0,
  "size": 12,
  "runtime": 105,
  "rating": 6.9,
  "imdbId": "tt0375912",
  "trailerUrl": "https://www.youtube.com/watch?v=QtrbWfZtxxM",
  "overview": "When a seemingly straight-forward drug deal goes awry, XXXX has to break his die-hard rules and turn up the heat, not only to outwit the old regime and come out on top, but to save his own skin...",
  "tmdbId": 4836
},
{
  "id": "rocknrolla-2008",
  "name": "RocknRolla",
  "fullTitle": "RocknRolla (2008)",
  "year": 2008,
  "director": "Guy Ritchie",
  "country": "UK|France|USA",
  "genres": [
    "crime",
    "action",
    "thriller"
  ],
  "subclouds": [
    "british-crime",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/6mLXG2f7LBRpbZZgxsOFO5scgzd.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Ritchie's crime ensemble. Continued Tarantino influence on British crime genre.",
  "influencedBy": [
    "Lock Stock and Two Smoking Barrels (1998)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 114,
  "rating": 6.9,
  "imdbId": "tt1032755",
  "trailerUrl": "https://www.youtube.com/watch?v=mnigSqJ2i10",
  "overview": "When a Russian mobster sets up a real estate scam that generates millions of pounds, various members of London's criminal underworld pursue their share of the fortune. Various shady characters, including Mr One-Two, Stella the accountant, and Johnny Quid, a druggie rock-star, try to claim their slic",
  "tmdbId": 13809
},
{
  "id": "in-bruges-2008",
  "name": "In Bruges",
  "fullTitle": "In Bruges (2008)",
  "year": 2008,
  "director": "Martin McDonagh",
  "country": "UK|USA",
  "genres": [
    "crime",
    "comedy",
    "drama"
  ],
  "subclouds": [
    "crime",
    "dark-comedy"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/vz3Vd6nfq9YZrVvyYx5RHFaYKV3.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Hitmen with philosophical dialogue. Tarantino-influenced crime dramedy.",
  "influencedBy": [
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 1,
  "size": 15,
  "runtime": 108,
  "rating": 7.5,
  "imdbId": "tt0780536",
  "trailerUrl": "https://www.youtube.com/watch?v=bc4lG_BbIEw",
  "overview": "Ray and Ken, two hit men, are in Bruges, Belgium, waiting for their next mission. While they are there they have time to think and discuss their previous assignment. When the mission is revealed to Ken, it is not what he expected.",
  "tmdbId": 8321
},
{
  "id": "seven-psychopaths-2012",
  "name": "Seven Psychopaths",
  "fullTitle": "Seven Psychopaths (2012)",
  "year": 2012,
  "director": "Martin McDonagh",
  "country": "UK|USA",
  "genres": [
    "crime",
    "comedy",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "meta",
    "dark-comedy"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/4ukEYAxlSivFcDG6vLxJB6PjTjg.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Meta crime film about crime films. Tarantino's self-aware genre play influence.",
  "influencedBy": [
    "Pulp Fiction (1994)",
    "In Bruges (2008)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 110,
  "rating": 6.8,
  "imdbId": "tt1931533",
  "trailerUrl": "https://www.youtube.com/watch?v=fUFUd5m7UH8",
  "overview": "A struggling screenwriter inadvertently becomes entangled in the Los Angeles criminal underworld after his oddball friends kidnap a gangster's beloved Shih Tzu.",
  "tmdbId": 86838
},
{
  "id": "the-boondock-saints-1999",
  "name": "The Boondock Saints",
  "fullTitle": "The Boondock Saints (1999)",
  "year": 1999,
  "director": "Troy Duffy",
  "country": "USA|Canada",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "vigilante"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/wtLUmkWg41xFLpvmUWAN1mm65f6.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Cult crime film with stylized violence. Heavy Tarantino influence on vigilante narrative.",
  "influencedBy": [
    "Reservoir Dogs (1992)",
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 108,
  "rating": 7.3,
  "imdbId": "tt0144117",
  "trailerUrl": "https://www.youtube.com/watch?v=IMs4ESRJuCU",
  "overview": "Tired of the crime overrunning the streets of Boston, Irish Catholic twin brothers Conner and Murphy are inspired by their faith to cleanse their hometown of evil with their own brand of zealous vigilante justice. As they hunt down and kill one notorious gangster after another, they become controver",
  "tmdbId": 8374
},
{
  "id": "smokin-aces-2006",
  "name": "Smokin' Aces",
  "fullTitle": "Smokin' Aces (2006)",
  "year": 2006,
  "director": "Joe Carnahan",
  "country": "USA|UK|France",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "action"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/nrdnN8WqvyOt8Bnl3hgWcZD6ZyM.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Ensemble assassins converging. Tarantino's influence on ensemble action-crime.",
  "influencedBy": [
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 109,
  "rating": 6.5,
  "imdbId": "tt0475394",
  "trailerUrl": "https://www.youtube.com/watch?v=202uOuNsgow",
  "overview": "When a Las Vegas performer-turned-snitch named Buddy Israel decides to turn state's evidence and testify against the mob, it seems that a whole lot of people would like to make sure he's no longer breathing.",
  "tmdbId": 7516
},
{
  "id": "lucky-number-slevin-2006",
  "name": "Lucky Number Slevin",
  "fullTitle": "Lucky Number Slevin (2006)",
  "year": 2006,
  "director": "Paul McGuigan",
  "country": "USA|Germany|Canada",
  "genres": [
    "crime",
    "thriller",
    "mystery"
  ],
  "subclouds": [
    "crime",
    "neo-noir"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/x21s3p5wPww534nYj1cWakTcqz4.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Twist crime thriller with witty dialogue. Post-Tarantino crime puzzle film.",
  "influencedBy": [
    "The Usual Suspects (1995)",
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 110,
  "rating": 7.5,
  "imdbId": "tt0425210",
  "trailerUrl": "https://www.youtube.com/watch?v=oYOiObTFtNk",
  "overview": "Slevin is mistakenly put in the middle of a personal war between the city\u2019s biggest criminal bosses. Under constant watch, Slevin must try not to get killed by an infamous assassin and come up with an idea of how to get out of his current dilemma.",
  "tmdbId": 186
},
{
  "id": "kiss-kiss-bang-bang-2005",
  "name": "Kiss Kiss Bang Bang",
  "fullTitle": "Kiss Kiss Bang Bang (2005)",
  "year": 2005,
  "director": "Shane Black",
  "country": "USA",
  "genres": [
    "crime",
    "comedy",
    "thriller"
  ],
  "subclouds": [
    "neo-noir",
    "comedy",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/aWfjIkpENFX6Uw82pET7EQ6jnrd.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Shane Black's meta-noir comedy. Fourth-wall breaking and genre awareness from Tarantino.",
  "influencedBy": [
    "Film noir",
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 1,
  "size": 15,
  "runtime": 102,
  "rating": 7.2,
  "imdbId": "tt0373469",
  "trailerUrl": "https://www.youtube.com/watch?v=x7L-kF5Im1Y",
  "overview": "A petty thief posing as an actor is brought to Los Angeles for an unlikely audition and finds himself in the middle of a murder investigation along with his high school dream girl and a detective who's been training him for his upcoming role...",
  "tmdbId": 5236
},
{
  "id": "the-nice-guys-2016",
  "name": "The Nice Guys",
  "fullTitle": "The Nice Guys (2016)",
  "year": 2016,
  "director": "Shane Black",
  "country": "USA",
  "genres": [
    "crime",
    "comedy",
    "thriller"
  ],
  "subclouds": [
    "neo-noir",
    "buddy-comedy",
    "crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/clq4So9spa9cXk3MZy2iMdqkxP2.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "70s LA crime comedy. Shane Black's continued Tarantino-influenced noir.",
  "influencedBy": [
    "Kiss Kiss Bang Bang (2005)",
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 116,
  "rating": 7.1,
  "imdbId": "tt3799694",
  "trailerUrl": "https://www.youtube.com/watch?v=GQR5zsLHbYw",
  "overview": "A private eye investigates the apparent suicide of a fading porn star in 1970s Los Angeles and uncovers a conspiracy.",
  "tmdbId": 290250
},
{
  "id": "baby-driver-2017",
  "name": "Baby Driver",
  "fullTitle": "Baby Driver (2017)",
  "year": 2017,
  "director": "Edgar Wright",
  "country": "UK|USA",
  "genres": [
    "action",
    "crime",
    "thriller"
  ],
  "subclouds": [
    "crime",
    "car-chase",
    "music"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/tYzFuYXmT8LOYASlFCkaPiAFAl0.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Music-driven heist film. Tarantino's music-action integration influence on Wright.",
  "influencedBy": [
    "The Driver (1978)",
    "Reservoir Dogs (1992)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 113,
  "rating": 7.4,
  "imdbId": "tt3890160",
  "trailerUrl": "https://www.youtube.com/watch?v=jGGptGEAo2U",
  "overview": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
  "tmdbId": 339403
},
{
  "id": "nightcrawler-2014",
  "name": "Nightcrawler",
  "fullTitle": "Nightcrawler (2014)",
  "year": 2014,
  "director": "Dan Gilroy",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "neo-noir",
    "thriller"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
  "color": "#34495E",
  "influenceNotes": "Dark LA noir. Tarantino's influence on modern crime thrillers.",
  "influencedBy": [
    "Taxi Driver (1976)",
    "Pulp Fiction (1994)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 118,
  "rating": 7.7,
  "imdbId": "tt2872718",
  "trailerUrl": "https://www.youtube.com/watch?v=7uaYhPpV7G4",
  "overview": "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
  "tmdbId": 242582
},
{
  "id": "drive-2011",
  "name": "Drive",
  "fullTitle": "Drive (2011)",
  "year": 2011,
  "director": "Nicolas Winding Refn",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "action"
  ],
  "subclouds": [
    "neo-noir",
    "car-chase",
    "minimalist"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
  "color": "#34495E",
  "influenceNotes": "Minimalist crime film with sudden violence. Tarantino's aesthetic influence on art-house crime.",
  "influencedBy": [
    "The Driver (1978)",
    "Le Samoura\\u00ef (1967)"
  ],
  "influences": [],
  "influenceCount": 4,
  "size": 20,
  "runtime": 100,
  "rating": 7.6,
  "imdbId": "tt0780504",
  "trailerUrl": "https://www.youtube.com/watch?v=J8lZi3ocbYk",
  "overview": "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar he",
  "tmdbId": 64690
},
{
  "id": "only-god-forgives-2013",
  "name": "Only God Forgives",
  "fullTitle": "Only God Forgives (2013)",
  "year": 2013,
  "director": "Nicolas Winding Refn",
  "country": "France|Denmark|USA|Sweden",
  "genres": [
    "crime",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "neo-noir",
    "art-crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/kWjjFSng1JttmDRwDROoGcIArEh.jpg",
  "color": "#34495E",
  "influenceNotes": "Stylized violence and minimal dialogue. Post-Tarantino art-house crime aesthetic.",
  "influencedBy": [
    "Drive (2011)",
    "Asian extreme cinema"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 89,
  "rating": 5.8,
  "imdbId": "tt1602613",
  "trailerUrl": "https://www.youtube.com/watch?v=XiSq-7QQDQg",
  "overview": "Julian, who runs a Thai boxing club as a front organization for his family's drug smuggling operation, is forced by his mother Crystal to find and kill the individual responsible for his brother's recent death.",
  "tmdbId": 77987
},
{
  "id": "the-guest-2014",
  "name": "The Guest",
  "fullTitle": "The Guest (2014)",
  "year": 2014,
  "director": "Adam Wingard",
  "country": "USA",
  "genres": [
    "thriller",
    "action",
    "mystery"
  ],
  "subclouds": [
    "thriller",
    "action",
    "80s-homage"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/8hGMD8PhOJrzkew0RZyOWqDhGJR.jpg",
  "color": "#16A085",
  "influenceNotes": "Genre-blending thriller. Tarantino's influence on genre pastiche filmmaking.",
  "influencedBy": [
    "80s action",
    "Tarantino"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 101,
  "rating": 6.6,
  "imdbId": "tt2980592",
  "trailerUrl": "https://www.youtube.com/watch?v=9tyL6OzBMt8",
  "overview": "A soldier introduces himself to the Peterson family, claiming to be a friend of their son who died in action. After the young man is welcomed into their home, a series of accidental deaths seem to be connected to his presence.",
  "tmdbId": 241848
},
{
  "id": "blue-ruin-2013",
  "name": "Blue Ruin",
  "fullTitle": "Blue Ruin (2013)",
  "year": 2013,
  "director": "Jeremy Saulnier",
  "country": "USA|France",
  "genres": [
    "thriller",
    "crime",
    "drama"
  ],
  "subclouds": [
    "revenge",
    "indie-crime"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/q0itEsso2drJXqH9kfdidxIT5dF.jpg",
  "color": "#C0392B",
  "influenceNotes": "Realistic revenge thriller. Post-Tarantino indie crime aesthetic.",
  "influencedBy": [
    "No Country for Old Men (2007)"
  ],
  "influences": [],
  "influenceCount": 1,
  "size": 15,
  "runtime": 91,
  "rating": 6.8,
  "imdbId": "tt2359024",
  "trailerUrl": "https://www.youtube.com/watch?v=W0XGOxFnm9A",
  "overview": "When the quiet life of a beach bum is upended by dreadful news, he sets off for his childhood home to carry out an act of vengeance. However, he proves an inept assassin and finds himself in a brutal fight to protect his estranged family.",
  "tmdbId": 188166
},
{
  "id": "green-room-2015",
  "name": "Green Room",
  "fullTitle": "Green Room (2015)",
  "year": 2015,
  "director": "Jeremy Saulnier",
  "country": "USA",
  "genres": [
    "thriller",
    "horror",
    "crime"
  ],
  "subclouds": [
    "thriller",
    "siege"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/evZicaR7nXe4LiD9G6QYTorcJGO.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Siege thriller with brutal violence. Tarantino's influence on indie genre films.",
  "influencedBy": [
    "Blue Ruin (2013)",
    "Reservoir Dogs (1992)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 95,
  "rating": 6.7,
  "imdbId": "tt4062536",
  "trailerUrl": "https://www.youtube.com/watch?v=T_Tklsuiako",
  "overview": "A punk rock band is forced to fight for survival after witnessing an act of violence at a skinhead bar.",
  "tmdbId": 313922
},
{
  "id": "good-time-2017",
  "name": "Good Time",
  "fullTitle": "Good Time (2017)",
  "year": 2017,
  "director": "Safdie Brothers",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "crime",
    "thriller",
    "indie"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/yE1c9hj5Hf8a9KplAdRdhADqUro.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Frantic crime thriller. Modern crime cinema influenced by Tarantino's energy.",
  "influencedBy": [
    "Dog Day Afternoon (1975)"
  ],
  "influences": [],
  "influenceCount": 1,
  "size": 15,
  "runtime": 102,
  "rating": 7.2,
  "imdbId": "tt4846232",
  "trailerUrl": "https://www.youtube.com/watch?v=upsR80YmwWc",
  "overview": "After a botched bank robbery lands his younger brother in prison, Connie Nikas embarks on a twisted odyssey through New York City's underworld to get his brother Nick out of jail.",
  "tmdbId": 429200
},
{
  "id": "uncut-gems-2019",
  "name": "Uncut Gems",
  "fullTitle": "Uncut Gems (2019)",
  "year": 2019,
  "director": "Safdie Brothers",
  "country": "USA",
  "genres": [
    "crime",
    "thriller",
    "drama"
  ],
  "subclouds": [
    "crime",
    "thriller"
  ],
  "posterUrl": "https://image.tmdb.org/t/p/w400/sg0xxJeb3u1C4kAxhSuTwTNpEDt.jpg",
  "color": "#7F8C8D",
  "influenceNotes": "Anxiety-inducing crime film. Post-Tarantino crime thriller aesthetic.",
  "influencedBy": [
    "Good Time (2017)"
  ],
  "influences": [],
  "influenceCount": 0,
  "size": 12,
  "runtime": 136,
  "rating": 7.2,
  "imdbId": "tt5727208",
  "trailerUrl": "https://www.youtube.com/watch?v=sXga1Oy0iRk",
  "overview": "A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pu",
  "tmdbId": 473033
}
];

const RAW_LINKS = [
  {"source": "a-fistful-of-dollars-1964", "target": "for-a-few-dollars-more-1965", "type": "influenced"},
  {"source": "a-fistful-of-dollars-1964", "target": "the-good-the-bad-and-the-ugly-1966", "type": "influenced"},
  {"source": "a-fistful-of-dollars-1964", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "yojimbo-1961", "target": "a-fistful-of-dollars-1964", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "anna-2019", "type": "influenced"},
  {"source": "la-femme-nikita-1990", "target": "anna-2019", "type": "influenced"},
  {"source": "haywire-2011", "target": "atomic-blonde-2017", "type": "influenced"},
  {"source": "john-wick-2014", "target": "atomic-blonde-2017", "type": "influenced"},
  {"source": "kill-bill-vol-2-2004", "target": "bitch-slap-2009", "type": "influenced"},
  {"source": "black-mama-white-mama-1972", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "black-mama-white-mama-1972", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "cleopatra-jones-1973", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "cleopatra-jones-1973", "target": "atomic-blonde-2017", "type": "influenced"},
  {"source": "shaft-1971", "target": "cleopatra-jones-1973", "type": "influenced"},
  {"source": "coffy-1973", "target": "cleopatra-jones-1973", "type": "influenced"},
  {"source": "coffy-1973", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "coffy-1973", "target": "foxy-brown-1974", "type": "influenced"},
  {"source": "the-mack-1973", "target": "coffy-1973", "type": "influenced"},
  {"source": "day-of-anger-1969", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "day-of-anger-1969", "target": "john-wick-2014", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "dead-leaves-2004", "type": "influenced"},
  {"source": "death-rides-a-horse-1967", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "django-1966", "target": "the-good-the-bad-and-the-ugly-1966", "type": "influenced"},
  {"source": "django-1966", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "a-fistful-of-dollars-1964", "target": "django-1966", "type": "influenced"},
  {"source": "enter-the-dragon-1973", "target": "game-of-death-1978", "type": "influenced"},
  {"source": "enter-the-dragon-1973", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-green-hornet-1966", "target": "enter-the-dragon-1973", "type": "influenced"},
  {"source": "faster-2010", "target": "john-wick-2014", "type": "influenced"},
  {"source": "kill-bill-vol-2-2004", "target": "faster-2010", "type": "influenced"},
  {"source": "death-wish-1974", "target": "faster-2010", "type": "influenced"},
  {"source": "faster-pussycat-kill-kill-1965", "target": "vixen-1968", "type": "influenced"},
  {"source": "faster-pussycat-kill-kill-1965", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "faster-pussycat-kill-kill-1965", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "female-prisoner-scorpion-1972", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "fists-of-fury-1972", "target": "enter-the-dragon-1973", "type": "influenced"},
  {"source": "fists-of-fury-1972", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "for-a-few-dollars-more-1965", "target": "django-1966", "type": "influenced"},
  {"source": "for-a-few-dollars-more-1965", "target": "the-good-the-bad-and-the-ugly-1966", "type": "influenced"},
  {"source": "for-a-few-dollars-more-1965", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "foxy-brown-1974", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "game-of-death-1978", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "ghost-in-the-shell-2017", "type": "influenced"},
  {"source": "gilda-1946", "target": "point-blank-1967", "type": "influenced"},
  {"source": "gilda-1946", "target": "kiss-me-deadly-1955", "type": "influenced"},
  {"source": "gilda-1946", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "gun-crazy-1950", "target": "bonnie-and-clyde-1967", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "gunpowder-milkshake-2021", "type": "influenced"},
  {"source": "kill-bill-vol-2-2004", "target": "gunpowder-milkshake-2021", "type": "influenced"},
  {"source": "john-wick-2014", "target": "gunpowder-milkshake-2021", "type": "influenced"},
  {"source": "harakiri-1962", "target": "lone-wolf-and-cub-1972", "type": "influenced"},
  {"source": "harakiri-1962", "target": "sword-of-doom-1966", "type": "influenced"},
  {"source": "harakiri-1962", "target": "lady-snowblood-1973", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "haywire-2011", "type": "influenced"},
  {"source": "i-drink-your-blood-1970", "target": "bitch-slap-2009", "type": "influenced"},
  {"source": "ichi-the-killer-2001", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "ichi-the-killer-2001", "target": "bitch-slap-2009", "type": "influenced"},
  {"source": "lady-snowblood-1973", "target": "ichi-the-killer-2001", "type": "influenced"},
  {"source": "lone-wolf-and-cub-1972", "target": "ichi-the-killer-2001", "type": "influenced"},
  {"source": "in-a-lonely-place-1950", "target": "point-blank-1967", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "john-wick-2014", "type": "influenced"},
  {"source": "hard-boiled-1992", "target": "john-wick-2014", "type": "influenced"},
  {"source": "johnny-guitar-1954", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "bitch-slap-2009", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "atomic-blonde-2017", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "kingsman-2015", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "faster-2010", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "ichi-the-killer-2001", "type": "influenced"},
  {"source": "lady-snowblood-1973", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "shogun-assassin-1980", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-good-the-bad-and-the-ugly-1966", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "rio-bravo-1959", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "vixen-1968", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "sword-of-doom-1966", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "lone-wolf-and-cub-1972", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "harakiri-1962", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-36th-chamber-of-shaolin-1978", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-mack-1973", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "i-drink-your-blood-1970", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "kill-bill-vol-2-2004", "target": "haywire-2011", "type": "influenced"},
  {"source": "kill-bill-vol-2-2004", "target": "atomic-blonde-2017", "type": "influenced"},
  {"source": "kill-bill-vol-2-2004", "target": "john-wick-2014", "type": "influenced"},
  {"source": "the-good-the-bad-and-the-ugly-1966", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "rio-bravo-1959", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "the-big-gundown-1966", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "lady-snowblood-1973", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "game-of-death-1978", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "kiss-me-deadly-1955", "target": "point-blank-1967", "type": "influenced"},
  {"source": "kiss-me-deadly-1955", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-36th-chamber-of-shaolin-1978", "target": "kung-fu-hustle-2004", "type": "influenced"},
  {"source": "la-femme-nikita-1990", "target": "the-professional-1994", "type": "influenced"},
  {"source": "la-femme-nikita-1990", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "lady-snowblood-2-love-song-of-vengeance-1974", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "lady-snowblood-1973", "target": "lady-snowblood-2-love-song-of-vengeance-1974", "type": "influenced"},
  {"source": "oldboy-2003", "target": "lady-vengeance-2005", "type": "influenced"},
  {"source": "lock-stock-and-two-smoking-barrels-1998", "target": "snatch-2000", "type": "influenced"},
  {"source": "lone-wolf-and-cub-1972", "target": "shogun-assassin-1980", "type": "influenced"},
  {"source": "machete-2010", "target": "machete-kills-2013", "type": "influenced"},
  {"source": "massacre-time-1966", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "mission-impossible-rogue-nation-2015", "target": "mission-impossible-fallout-2018", "type": "influenced"},
  {"source": "navajo-joe-1966", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "navajo-joe-1966", "target": "death-wish-1974", "type": "influenced"},
  {"source": "oldboy-2003", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "point-blank-1967", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "kill-bill-vol-1-2003", "target": "ready-player-one-2018", "type": "influenced"},
  {"source": "samurai-rebellion-1967", "target": "lady-snowblood-1973", "type": "influenced"},
  {"source": "samurai-rebellion-1967", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "harakiri-1962", "target": "samurai-rebellion-1967", "type": "influenced"},
  {"source": "yojimbo-1961", "target": "samurai-rebellion-1967", "type": "influenced"},
  {"source": "sanjuro-1962", "target": "lady-snowblood-1973", "type": "influenced"},
  {"source": "sanjuro-1962", "target": "sword-of-doom-1966", "type": "influenced"},
  {"source": "sanjuro-1962", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "seven-samurai-1954", "target": "harakiri-1962", "type": "influenced"},
  {"source": "seven-samurai-1954", "target": "yojimbo-1961", "type": "influenced"},
  {"source": "seven-samurai-1954", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "shaft-1971", "target": "the-mack-1973", "type": "influenced"},
  {"source": "shaft-1971", "target": "coffy-1973", "type": "influenced"},
  {"source": "shaft-1971", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "super-fly-1972", "target": "truck-turner-1974", "type": "influenced"},
  {"source": "super-fly-1972", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "shaft-1971", "target": "super-fly-1972", "type": "influenced"},
  {"source": "supervixens-1975", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "faster-pussycat-kill-kill-1965", "target": "supervixens-1975", "type": "influenced"},
  {"source": "vixen-1968", "target": "supervixens-1975", "type": "influenced"},
  {"source": "sweet-smell-of-success-1957", "target": "point-blank-1967", "type": "influenced"},
  {"source": "sweet-smell-of-success-1957", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "tattooed-swordsman-1966", "target": "lady-snowblood-1973", "type": "influenced"},
  {"source": "tattooed-swordsman-1966", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "harakiri-1962", "target": "tattooed-swordsman-1966", "type": "influenced"},
  {"source": "the-ballad-of-little-jo-1993", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-ballad-of-little-jo-1993", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "a-fistful-of-dollars-1964", "target": "the-big-gundown-1966", "type": "influenced"},
  {"source": "the-chinese-connection-1972", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-chinese-connection-1972", "target": "ichi-the-killer-2001", "type": "influenced"},
  {"source": "the-great-silence-1968", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "the-green-hornet-1966", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-killers-1946", "target": "gun-crazy-1950", "type": "influenced"},
  {"source": "the-killers-1946", "target": "point-blank-1967", "type": "influenced"},
  {"source": "the-killers-1946", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-matrix-1999", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-matrix-1999", "target": "john-wick-2014", "type": "influenced"},
  {"source": "the-professional-1994", "target": "anna-2019", "type": "influenced"},
  {"source": "the-professional-1994", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-tale-of-zatoichi-1962", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-wild-bunch-1969", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "thriller-a-cruel-picture-1974", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "thriller-a-cruel-picture-1974", "target": "i-drink-your-blood-1970", "type": "influenced"},
  {"source": "truck-turner-1974", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "vixen-1968", "target": "bitch-slap-2009", "type": "influenced"},
  {"source": "yojimbo-1961", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "yojimbo-1961", "target": "kill-bill-vol-2-2004", "type": "influenced"},
  {"source": "kansas-city-confidential-1952", "target": "the-killing-1956", "type": "influenced"},
  {"source": "a-better-tomorrow-1986", "target": "a-better-tomorrow-ii-1987", "type": "influenced"},
  {"source": "bonnie-and-clyde-1967", "target": "natural-born-killers-1994", "type": "influenced"},
  {"source": "shaft-1971", "target": "across-110th-street-1972", "type": "influenced"},
  {"source": "the-guns-of-navarone-1961", "target": "where-eagles-dare-1968", "type": "influenced"},
  {"source": "the-dirty-dozen-1967", "target": "the-inglorious-bastards-1978", "type": "influenced"},
  {"source": "le-samoura-1967", "target": "le-cercle-rouge-1970", "type": "influenced"},
  {"source": "pierrot-le-fou-1965", "target": "natural-born-killers-1994", "type": "influenced"},
  {"source": "breathless-1960", "target": "pierrot-le-fou-1965", "type": "influenced"},
  {"source": "night-of-the-hunter-1955", "target": "natural-born-killers-1994", "type": "influenced"},
  {"source": "thief-1981", "target": "heat-1995", "type": "influenced"},
  {"source": "le-samoura-1967", "target": "heat-1995", "type": "influenced"},
  {"source": "a-better-tomorrow-1986", "target": "hard-boiled-1992", "type": "influenced"},
  {"source": "the-killer-1989", "target": "hard-boiled-1992", "type": "influenced"},
  {"source": "the-killer-1989", "target": "john-wick-2014", "type": "influenced"},
  {"source": "a-better-tomorrow-1986", "target": "the-killer-1989", "type": "influenced"},
  {"source": "le-samoura-1967", "target": "the-killer-1989", "type": "influenced"},
  {"source": "the-big-boss-1971", "target": "enter-the-dragon-1973", "type": "influenced"},
  {"source": "the-big-boss-1971", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "way-of-the-dragon-1972", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "master-of-the-flying-guillotine-1976", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "five-deadly-venoms-1978", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-8-diagram-pole-fighter-1984", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "drunken-master-1978", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "snake-in-the-eagles-shadow-1978", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "zu-warriors-from-the-magic-mountain-1983", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "once-upon-a-time-in-china-1991", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "iron-monkey-1993", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "executioners-from-shaolin-1977", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "come-drink-with-me-1966", "target": "a-touch-of-zen-1971", "type": "influenced"},
  {"source": "come-drink-with-me-1966", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "a-touch-of-zen-1971", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "dragon-inn-1967", "target": "a-touch-of-zen-1971", "type": "influenced"},
  {"source": "come-drink-with-me-1966", "target": "dragon-inn-1967", "type": "influenced"},
  {"source": "new-dragon-gate-inn-1992", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "dragon-inn-1967", "target": "new-dragon-gate-inn-1992", "type": "influenced"},
  {"source": "swordsman-ii-1992", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "heroic-trio-1993", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-bride-with-white-hair-1993", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "police-story-1985", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "project-a-1983", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-magnificent-butcher-1979", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "yes-madam-1985", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "royal-warriors-1986", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "yes-madam-1985", "target": "royal-warriors-1986", "type": "influenced"},
  {"source": "the-mercenary-1968", "target": "companeros-1970", "type": "influenced"},
  {"source": "minnesota-clay-1964", "target": "django-1966", "type": "influenced"},
  {"source": "the-wild-bunch-1969", "target": "pat-garrett-and-billy-the-kid-1973", "type": "influenced"},
  {"source": "the-outlaw-josey-wales-1976", "target": "unforgiven-1992", "type": "influenced"},
  {"source": "seven-samurai-1954", "target": "the-magnificent-seven-1960", "type": "influenced"},
  {"source": "the-searchers-1956", "target": "bone-tomahawk-2015", "type": "influenced"},
  {"source": "the-searchers-1956", "target": "hostiles-2017", "type": "influenced"},
  {"source": "unforgiven-1992", "target": "hostiles-2017", "type": "influenced"},
  {"source": "rolling-thunder-1977", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "ms-45-1981", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "i-spit-on-your-grave-1978", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "the-bride-wore-black-1968", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "death-wish-1974", "target": "kill-bill-vol-1-2003", "type": "influenced"},
  {"source": "death-wish-1974", "target": "john-wick-2014", "type": "influenced"},
  {"source": "the-cars-that-ate-paris-1974", "target": "mad-max-1979", "type": "influenced"},
  {"source": "mad-max-1979", "target": "the-road-warrior-1981", "type": "influenced"},
  {"source": "bonnie-and-clyde-1967", "target": "the-sugarland-express-1974", "type": "influenced"},
  {"source": "bonnie-and-clyde-1967", "target": "the-great-texas-dynamite-chase-1976", "type": "influenced"},
  {"source": "the-driver-1978", "target": "drive-2011", "type": "influenced"},
  {"source": "le-samoura-1967", "target": "the-driver-1978", "type": "influenced"},
  {"source": "the-french-connection-1971", "target": "to-live-and-die-in-la-1985", "type": "influenced"},
  {"source": "bound-1996", "target": "the-matrix-1999", "type": "influenced"},
  {"source": "layer-cake-2004", "target": "kingsman-2015", "type": "influenced"},
  {"source": "lock-stock-and-two-smoking-barrels-1998", "target": "layer-cake-2004", "type": "influenced"},
  {"source": "lock-stock-and-two-smoking-barrels-1998", "target": "rocknrolla-2008", "type": "influenced"},
  {"source": "in-bruges-2008", "target": "seven-psychopaths-2012", "type": "influenced"},
  {"source": "the-usual-suspects-1995", "target": "lucky-number-slevin-2006", "type": "influenced"},
  {"source": "kiss-kiss-bang-bang-2005", "target": "the-nice-guys-2016", "type": "influenced"},
  {"source": "the-driver-1978", "target": "baby-driver-2017", "type": "influenced"},
  {"source": "le-samoura-1967", "target": "drive-2011", "type": "influenced"},
  {"source": "drive-2011", "target": "only-god-forgives-2013", "type": "influenced"},
  {"source": "no-country-for-old-men-2007", "target": "blue-ruin-2013", "type": "influenced"},
  {"source": "blue-ruin-2013", "target": "green-room-2015", "type": "influenced"},
  {"source": "good-time-2017", "target": "uncut-gems-2019", "type": "influenced"}
];

// Process nodes to ensure all required fields
const processedNodes = RAW_NODES.map(node => ({
  ...node,
  genres: node.genres || [],
  subclouds: node.subclouds || [],
  influencedBy: node.influencedBy || [],
  influences: node.influences || [],
  influenceCount: node.influenceCount || 0,
  size: node.size || 10
}));

// Process links to match node IDs
const processedLinks = RAW_LINKS.map(link => ({
  source: link.source,
  target: link.target,
  type: link.type || 'influence'
}));

export const INITIAL_GRAPH_DATA: GraphData = {
  nodes: processedNodes,
  links: processedLinks
};

export default INITIAL_GRAPH_DATA;
