// Master Song Database (with the 6 provided Cloudinary URLs and Bison cover art)
const SONGS_DATABASE = [
  {
    id: 0,
    title: "Cheenikkallu Unplugged",
    artist: "Folk Unplugged Ensemble",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781619453/Cheenikkallu_Unplugged_kr75g3.mp3",
    cover: "assets/bison image.jpg",
    duration: "3:45",
    lyrics: [
      { time: 0, text: "♪ (Acoustic Guitar Intro) ♪" },
      { time: 5, text: "Cheenikkallu unplugged rhythm starting..." },
      { time: 14, text: "Kaathu vecha kadhal ithu kavyamaagumey..." },
      { time: 25, text: "Manasukkulla unna vechen unmaiyagavey..." },
      { time: 38, text: "♪ (Melodious Flute Solo) ♪" },
      { time: 52, text: "Unna paartha podhu nenjil minnal adikuthey..." },
      { time: 64, text: "Enna aachu yenna aachu yedho pannuthey..." },
      { time: 78, text: "Cheenikkallu pola en manasu uruguthey..." },
      { time: 92, text: "♪ (Violin Bridge) ♪" },
      { time: 110, text: "Aasa patta nenjukulla aasai vellamey..." },
      { time: 130, text: "Nee illama nanum illa aahla maramey..." },
      { time: 155, text: "♪ (Acoustic Guitar Outro) ♪" }
    ]
  },
  {
    id: 1,
    title: "Theekkoluthi",
    artist: "Vijay Yesudas, Shakthisree Gopalan",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781619451/Theekkoluthi_xdwgvs.mp3",
    cover: "assets/bison image.jpg",
    duration: "4:12",
    lyrics: [
      { time: 0, text: "♪ (Drums & Bass Beat Intro) ♪" },
      { time: 8, text: "Theekkoluthi pogum oru kaatu thee aval..." },
      { time: 18, text: "Nenjukkulla pathikicha rathiri neram..." },
      { time: 30, text: "Kanaa mudhi poga solli kaadhal sollutha..." },
      { time: 42, text: "Aiyayo enna aachu koluthi vitingalay..." },
      { time: 56, text: "♪ (Guitar Riff Interlude) ♪" },
      { time: 70, text: "Kannil oru thee irukku pathikka paakuthu..." },
      { time: 82, text: "Glow adikkum mogathula vetkam thondruthu..." },
      { time: 96, text: "Unna enna kolluthadi un kootu vizhithandi..." },
      { time: 115, text: "Theekkoluthi thoorathula ninna pothumey..." },
      { time: 135, text: "♪ (Heavy Percussion Interlude) ♪" },
      { time: 160, text: "Sillendra mazhaiyil pathari nikkiren..." },
      { time: 180, text: "Nee patha vaicha neruppa nan anaikkiren..." }
    ]
  },
  {
    id: 2,
    title: "Cheenikkallu",
    artist: "Jassie Gift, Deva",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781619448/Cheenikkallu_kel82b.mp3",
    cover: "assets/bison image.jpg",
    duration: "4:01",
    lyrics: [
      { time: 0, text: "♪ (Traditional Folk Percussion Intro) ♪" },
      { time: 6, text: "Oorukulla vantha oru singari ponnu..." },
      { time: 15, text: "Cheenikkallu pola oru azhaganu thonnu..." },
      { time: 26, text: "Deva beats adikkuthey thavilu muzhangu..." },
      { time: 38, text: "Jassie gift-u kuralil aadu parungu..." },
      { time: 52, text: "♪ (Nadaswaram Interlude) ♪" },
      { time: 68, text: "Aadi maasa kaathu pola veesum kaathaley..." },
      { time: 82, text: "Jodi sernthu poduvomey thillalangadiye..." },
      { time: 96, text: "Cheenikkallu! Cheenikkallu! Aattam podungadi..." },
      { time: 112, text: "♪ (Energetic Folk Rhythm Solo) ♪" },
      { time: 135, text: "Pachaikiliye vaadi thacham thari thari..." },
      { time: 155, text: "Konji pesum podhey nenju kothu thari..." }
    ]
  },
  {
    id: 3,
    title: "Rekka Rekka",
    artist: "G.V. Prakash Kumar, Saindhavi",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781619447/Rekka_Rekka_jy7k34.mp3",
    cover: "assets/bison image.jpg",
    duration: "3:30",
    lyrics: [
      { time: 0, text: "♪ (String Orchestra & Synth Pad Intro) ♪" },
      { time: 6, text: "Rekka rekka molaikudhey enakkulla ippo..." },
      { time: 14, text: "Tharaiyil nadakka thonala parakkuran eppo..." },
      { time: 24, text: "Unna paartha naalil irundhu paravai aananey..." },
      { time: 34, text: "Vaanil mela parandhu unna thedi ponaney..." },
      { time: 48, text: "♪ (Violin & Flute Interlude) ♪" },
      { time: 62, text: "Siru rekka asachukittu un mela varatha..." },
      { time: 74, text: "Oru sirippu sirippula kaathal tharatha..." },
      { time: 88, text: "Rekka katti parakum en kaadhal parava..." },
      { time: 102, text: "♪ (Synth Arpeggio Bridge) ♪" },
      { time: 118, text: "Un kootukkulla enna konjam adachukko..." },
      { time: 132, text: "Rekka rekka unakkum enakkum pothumey..." }
    ]
  },
  {
    id: 4,
    title: "Thennaadu",
    artist: "Santhosh Narayanan",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781619427/Thennaadu_v7jkwp.mp3",
    cover: "assets/bison image.jpg",
    duration: "4:48",
    lyrics: [
      { time: 0, text: "♪ (Acoustic Guitar & Folk Drone Intro) ♪" },
      { time: 10, text: "Thennaadu potrum engal veera bhoomida..." },
      { time: 22, text: "Mannoda vasam pesum makkal yaaru da..." },
      { time: 36, text: "Santhosh Narayanan in parai beat muzhakkam..." },
      { time: 48, text: "Saththam pottu paaduvomey illaiyadi urakkam..." },
      { time: 62, text: "♪ (Heavy Parai Drums Solo) ♪" },
      { time: 80, text: "Karisal kaatu mannil engal raththa veppamey..." },
      { time: 94, text: "Keeladiyil paatha namma nagara saasthiramey..." },
      { time: 110, text: "Thennaadu em Thennaadu potri paaduvomey..." },
      { time: 130, text: "♪ (Electric Guitar & Urumi Meltdown) ♪" },
      { time: 160, text: "Tharai meethu aadum aatam veeramaagumey..." },
      { time: 190, text: "Mannukaga vaazhum vaazhvu puniyamaagumey..." }
    ]
  },
  {
    id: 5,
    title: "Kaalamaadan Gaanam",
    artist: "Stephen Devassy, Folk Band",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781619419/Kaalamaadan_Gaanam_h18gpa.mp3",
    cover: "assets/bison image.jpg",
    duration: "3:15",
    lyrics: [
      { time: 0, text: "♪ (Epic Piano & Urumi Intro) ♪" },
      { time: 7, text: "Kaalamaadan varugiraaru veeramaaga da..." },
      { time: 16, text: "Stephen devassy piano raththa nerada..." },
      { time: 28, text: "Kombu muzhangu thavilu adikka kaadu thudikkuthey..." },
      { time: 40, text: "Singam pola munaikidhu namma kalaiyida..." },
      { time: 54, text: "♪ (Piano & Keyboard Fast Solo) ♪" },
      { time: 72, text: "Kaval dheivam kaalamaadan kaathu nirpara..." },
      { time: 84, text: "Ketta sakthi odippogum pathari nikkuda..." },
      { time: 96, text: "Kaalamaadan Gaanam ithu mannil ketkudhey..." },
      { time: 110, text: "♪ (Folk Fusion Jam Solo) ♪" },
      { time: 130, text: "Muthu muthu pechiamma aadi vaarunga..." },
      { time: 145, text: "Kaalamaadan kootathukku kaaval tharunga..." }
    ]
  },
  {
    id: 6,
    title: "Chella Magale",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781591380/Chella-Magale-MassTamilan.dev_osturc.mp3",
    cover: "assets/Jana-Nayagan.jpg",
    duration: "4:15",
    lyrics: [
      { time: 0, text: "♪ (Chella Magale Intro) ♪" },
      { time: 10, text: "Chella magale en singara silaye..." },
      { time: 25, text: "Un punnagai podhumey en thuyaram theerumey..." },
      { time: 45, text: "♪ (Violin Solo) ♪" },
      { time: 65, text: "Vaanathu nilavu pola en veetai olirbaval..." },
      { time: 85, text: "En uyirin uyiradhe unnaiyae paarthirupen..." }
    ]
  },
  {
    id: 7,
    title: "Oru Pere Varalaaru",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781591369/Oru-Pere-Varalaaru-MassTamilan.dev_qru1bs.mp3",
    cover: "assets/Jana-Nayagan.jpg",
    duration: "3:58",
    lyrics: [
      { time: 0, text: "♪ (Oru Pere Varalaaru Intro) ♪" },
      { time: 15, text: "Oru pere varalaaru ezhudhum neram..." },
      { time: 30, text: "Senaigal purappada thudikkum idhayam..." },
      { time: 50, text: "♪ (Heavy Beat & Horn Riff) ♪" },
      { time: 70, text: "Kaalam thozhum engal nayagane vaa..." }
    ]
  },
  {
    id: 8,
    title: "Athu Thalore",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781589017/Athu_Thalore_u149tt.mp3",
    cover: "assets/Jana-Nayagan.jpg",
    duration: "4:42",
    lyrics: [
      { time: 0, text: "♪ (Athu Thalore Soft Intro) ♪" },
      { time: 20, text: "Athu thalore thaalaattum isaiyae..." },
      { time: 40, text: "Kaatrinil karangum inba geethamae..." },
      { time: 65, text: "♪ (Flute Interlude) ♪" },
      { time: 90, text: "Thoongadha nenjil thoorum anbaey..." }
    ]
  },
  {
    id: 9,
    title: "Karuppa Kooda Va",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781589016/Karuppa_Kooda_Va_nrshhx.mp3",
    cover: "assets/photo 1.jpg",
    duration: "4:20",
    lyrics: [
      { time: 0, text: "♪ (Karuppa Kooda Va Intro) ♪" },
      { time: 15, text: "Karuppa kooda va, manadhil adiyiyasi..." },
      { time: 35, text: "Ooradi karuppu thaalam, kaathirundhu va..." },
      { time: 55, text: "♪ (Powerful Chorus) ♪" },
      { time: 80, text: "Unna paartha neram, kulir thrownu paatha..." }
    ]
  },
  {
    id: 10,
    title: "Verappa",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781588999/Verappa_xxktoz.mp3",
    cover: "assets/photo 1.jpg",
    duration: "3:52",
    lyrics: [
      { time: 0, text: "♪ (Verappa Beat Intro) ♪" },
      { time: 12, text: "Verappa naan pathi paattu kettaya..." },
      { time: 30, text: "Kaalam varum pothu, adhu pondru vere..." },
      { time: 48, text: "♪ (Hook) ♪" },
      { time: 70, text: "Un kannil verithanam, ennai kalangatha..." }
    ]
  },
  {
    id: 11,
    title: "Verappa - Extended",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781588994/Verappa_-_Extended_y7sk2d.mp3",
    cover: "assets/photo 1.jpg",
    duration: "5:05",
    lyrics: [
      { time: 0, text: "♪ (Extended Verappa Intro) ♪" },
      { time: 18, text: "Verappa extended dhaan, saayaatha thaalam..." },
      { time: 40, text: "Kurai illai, azhagu illai, idhu oru kural..." },
      { time: 65, text: "♪ (Extended Bridge) ♪" },
      { time: 95, text: "Thunaiyae verappi, adutha tharam..." }
    ]
  },
  {
    id: 12,
    title: "God Mode",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781588976/God_Mode_fneyun.mp3",
    cover: "assets/photo 1.jpg",
    duration: "4:30",
    lyrics: [
      { time: 0, text: "♪ (God Mode Power Intro) ♪" },
      { time: 16, text: "God mode on, naam ellam ready ah..." },
      { time: 38, text: "Yaarum thadukka mudiyadhu, un peyar solra..." },
      { time: 62, text: "♪ (God Mode Chorus) ♪" },
      { time: 88, text: "Thirumbi paaka maaten, ennai thadipathalla..." }
    ]
  },
  {
    id: 13,
    title: "Naanga Naalu Peru",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781588973/Naanga_Naalu_Peru_sybigu.mp3",
    cover: "assets/photo 1.jpg",
    duration: "4:10",
    lyrics: [
      { time: 0, text: "♪ (Naanga Naalu Peru Intro) ♪" },
      { time: 14, text: "Naanga naalu peru, pasanga kootam..." },
      { time: 36, text: "Vetri kaalathula naam, thunai irrupom..." },
      { time: 58, text: "♪ (Celebration Chorus) ♪" },
      { time: 82, text: "Saththu kettuchu, pati kettuchu..." }
    ]
  },
  {
    id: 14,
    title: "God Mode Begins",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781588955/God_Mode_Begins_wubfbj.mp3",
    cover: "assets/photo 1.jpg",
    duration: "4:25",
    lyrics: [
      { time: 0, text: "♪ (God Mode Begins Intro) ♪" },
      { time: 20, text: "God mode begins, race start agudhu..." },
      { time: 44, text: "Enna panni solla, naan ready-nu..." },
      { time: 70, text: "♪ (Anthem Bridge) ♪" },
      { time: 98, text: "Kaalam kaatanum, naam eduthukkalam..." }
    ]
  },
  {
    id: 15,
    title: "Yumabaibesa",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781679832/Yumabaibesa_kwtsdp.mp3",
    cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
    duration: "3:52",
    lyrics: [
      { time: 0, text: "♪ (Yumabaibesa Intro) ♪" },
      { time: 10, text: "Playing Yumabaibesa..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 16,
    title: "Oorum Blood",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781679818/Oorum_Blood_cgduor.mp3",
    cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
    duration: "4:05",
    lyrics: [
      { time: 0, text: "♪ (Oorum Blood Intro) ♪" },
      { time: 10, text: "Playing Oorum Blood..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 17,
    title: "Kannukulla Reprise",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781679812/Kannukulla_Reprise_uehcko.mp3",
    cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
    duration: "3:35",
    lyrics: [
      { time: 0, text: "♪ (Kannukulla Reprise Intro) ♪" },
      { time: 10, text: "Playing Kannukulla Reprise..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 18,
    title: "Yumabaibesa - Alternate",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781679807/Yumabaibesa_jux7oo.mp3",
    cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
    duration: "3:42",
    lyrics: [
      { time: 0, text: "♪ (Yumabaibesa Alt Intro) ♪" },
      { time: 10, text: "Playing Yumabaibesa Alternate..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 19,
    title: "Singari",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781679799/Singari_uwabi3.mp3",
    cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
    duration: "4:18",
    lyrics: [
      { time: 0, text: "♪ (Singari Intro) ♪" },
      { time: 10, text: "Playing Singari..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 20,
    title: "Nallaru Po",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781679779/Nallaru_Po_ohayjz.mp3",
    cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
    duration: "3:55",
    lyrics: [
      { time: 0, text: "♪ (Nallaru Po Intro) ♪" },
      { time: 10, text: "Playing Nallaru Po..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 21,
    title: "Oorum Blood Unplugged",
    artist: "Various Artists",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781679756/Oorum_Blood_Unplugged_zubg8r.mp3",
    cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
    duration: "4:22",
    lyrics: [
      { time: 0, text: "♪ (Oorum Blood Unplugged Intro) ♪" },
      { time: 10, text: "Playing Oorum Blood Unplugged..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 22,
    title: "Sithira Puthiri",
    artist: "Sai Abhyankkar",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781745871/Sithira-Puthiri-MassTamilan.dev_sxgg9z.mp3",
    cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
    duration: "3:40",
    lyrics: [
      { time: 0, text: "♪ (Sithira Puthiri Intro) ♪" },
      { time: 10, text: "Playing Sithira Puthiri by Sai Abhyankkar..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 23,
    title: "Pavazha Malli",
    artist: "Sai Abhyankkar",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781745864/Pavazha_Malli_yxcpuz.mp3",
    cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
    duration: "3:45",
    lyrics: [
      { time: 0, text: "♪ (Pavazha Malli Intro) ♪" },
      { time: 10, text: "Playing Pavazha Malli by Sai Abhyankkar..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 24,
    title: "Vizhi Veekura",
    artist: "Sai Abhyankkar",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781745855/Vizhi_Veekura_xyvvr2.mp3",
    cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
    duration: "3:20",
    lyrics: [
      { time: 0, text: "♪ (Vizhi Veekura Intro) ♪" },
      { time: 10, text: "Playing Vizhi Veekura by Sai Abhyankkar..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 25,
    title: "Aasa Kooda",
    artist: "Sai Abhyankkar",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781745853/Aasa_Kooda_romdzh.mp3",
    cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
    duration: "3:30",
    lyrics: [
      { time: 0, text: "♪ (Aasa Kooda Intro) ♪" },
      { time: 10, text: "Playing Aasa Kooda by Sai Abhyankkar..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 26,
    title: "Katchi Sera",
    artist: "Sai Abhyankkar",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781745846/Katchi_Sera_vchr5y.mp3",
    cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
    duration: "3:15",
    lyrics: [
      { time: 0, text: "♪ (Katchi Sera Intro) ♪" },
      { time: 10, text: "Playing Katchi Sera by Sai Abhyankkar..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  },
  {
    id: 27,
    title: "Pavazha Malli Unplugged",
    artist: "Sai Abhyankkar",
    url: "https://res.cloudinary.com/deogr4d1g/video/upload/q_auto/f_auto/v1781745798/Pavazha_Malli_Unplugged_eb8mse.mp3",
    cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
    duration: "4:02",
    lyrics: [
      { time: 0, text: "♪ (Pavazha Malli Unplugged Intro) ♪" },
      { time: 10, text: "Playing Pavazha Malli Unplugged by Sai Abhyankkar..." },
      { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
    ]
  }
];

// App State
let folders = []; // Music folders (representing categories/playlists)
let likedSongs = []; // Array of song IDs that are liked
let activeQueue = []; // Currently playing list of song objects
let currentQueueIndex = 0;
let slits = []; // array of song IDs shown in the slits UI
let playedSlits = []; // song IDs that were tapped and should be hidden
let isPlaying = false;
let isShuffle = false;
let isRepeat = 0; // 0 = off, 1 = repeat playlist, 2 = repeat track
let currentView = "home"; // home, search, library, folder-detail, liked-detail
let activeFolderId = null; // Currently open folder detail ID
let searchTimeout = null;
let currentUser = { name: "Guest", verified: false };

// History Navigation
const viewHistory = ["home"];
let historyIndex = 0;

// Initialize Audio Element
const audio = new Audio();
audio.volume = 0.7;

// DOM Element Selectors
const mainHeader = document.getElementById("main-header");
const scrollContainer = document.getElementById("scroll-container");
const homeView = document.getElementById("home-view-container");
const libraryView = document.getElementById("library-view-container");
const songTableContainer = document.getElementById("song-table-container");
const heroBanner = document.getElementById("hero-banner");
const songListBody = document.getElementById("song-list-body");
const extraFeaturesSection = document.getElementById("extra-features-section");
const slitsContainer = document.getElementById("slits-container");

// Navigation Sidebar links
const navHome = document.getElementById("nav-home");
const navSearchLink = document.getElementById("nav-search-link");
const navLibrary = document.getElementById("nav-library");
const btnLikedSongs = document.getElementById("btn-liked-songs");

// Mobile Bottom Navigation Links
const mobileNavHome = document.getElementById("mobile-nav-home");
const mobileNavSearch = document.getElementById("mobile-nav-search");
const mobileNavLibrary = document.getElementById("mobile-nav-library");

// Bottom Player Controllers
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");
const seekBar = document.getElementById("seek-bar");
const progressTrackFill = document.getElementById("progress-track-fill");
const currentTimeLabel = document.getElementById("current-time");
const totalDurationLabel = document.getElementById("total-duration");
const playerTrackCover = document.getElementById("player-track-cover");
const playerTrackTitle = document.getElementById("player-track-title");
const playerTrackArtist = document.getElementById("player-track-artist");
const playerFavBtn = document.getElementById("player-fav-btn");
const sidebarArtImg = document.getElementById("sidebar-art-img");
const sidebarArtGlow = document.getElementById("sidebar-art-glow");

// Login Elements
const loginOverlay = document.getElementById("login-overlay");
const loginNameInput = document.getElementById("login-name");
const loginMessage = document.getElementById("login-message");
const userNameDisplay = document.getElementById("user-name-display");
const welcomeName = document.getElementById("welcome-name");
const footerCredit = document.getElementById("footer-credit");
const userAvatar = document.querySelector(".user-avatar");
const logoutBtn = document.getElementById("logout-btn");

// Volume Controls
const volumeBtn = document.getElementById("volume-btn");
const volumeSlider = document.getElementById("volume-slider");
const volumeTrackFill = document.getElementById("volume-track-fill");
const volHighIcon = document.getElementById("vol-high");
const volLowIcon = document.getElementById("vol-low");
const volMuteIcon = document.getElementById("vol-mute");

// Searches
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const sidebarSearchInput = document.getElementById("sidebar-search-input");
const sidebarSearchBtn = document.getElementById("sidebar-search-btn");
const emptySearchState = document.getElementById("empty-search");
const searchQueryText = document.getElementById("search-query-text");

// Visualizer & Lyrics Panel
const visualizerTrackName = document.getElementById("visualizer-track-name");
const visualizerBars = document.getElementById("visualizer-bars");
const lyricLine1 = document.getElementById("lyric-line-1");
const lyricLine2 = document.getElementById("lyric-line-2");
const lyricLine3 = document.getElementById("lyric-line-3");
const lyricsToggle = document.getElementById("lyrics-toggle");

// Folder triggers
const createFolderBtnSidebar = document.getElementById("create-folder-btn");
const createFolderBtnMain = document.getElementById("create-folder-btn-main");
const foldersGridHome = document.getElementById("folders-grid-home");
const foldersGridLibrary = document.getElementById("folders-grid-library");
const sidebarFoldersList = document.getElementById("sidebar-folders-list");
const quickAccessGrid = document.getElementById("quick-access-grid");

// Header Navigation
const headerBackBtn = document.getElementById("header-back-btn");
const headerForwardBtn = document.getElementById("header-forward-btn");

async function loadExternalSongs() {
  try {
    const response = await fetch("songs.json");
    if (!response.ok) {
      console.log("No synced songs database (songs.json) found.");
      return;
    }
    const syncedAlbums = await response.json();
    if (!Array.isArray(syncedAlbums)) return;

    syncedAlbums.forEach(album => {
      const folderId = album.id || `folder_synced_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

      // Check if folder is already present in memory
      let existingFolder = folders.find(f => f.id === folderId);
      const songIds = [];

      if (album.songs && Array.isArray(album.songs)) {
        album.songs.forEach(song => {
          let existingSong = SONGS_DATABASE.find(s => s.url === song.url);
          if (!existingSong) {
            // Find max ID in SONGS_DATABASE to assign next number
            const maxId = SONGS_DATABASE.reduce((max, s) => s.id > max ? s.id : max, -1);
            const newId = maxId + 1;

            existingSong = {
              id: newId,
              title: song.title || "Unknown Title",
              artist: song.artist || "Unknown Artist",
              url: song.url,
              cover: song.cover || "assets/bison image.jpg",
              cover: song.cover || "assets/default.jpg",
              duration: song.duration || "3:00",
              lyrics: song.lyrics || [
                { time: 0, text: `♪ Synced track from album: ${album.title} ♪` },
                { time: 5, text: `Playing: ${song.title}` },
                { time: 15, text: `Artist: ${song.artist}` },
                { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
              ]
            };
            SONGS_DATABASE.push(existingSong);
            // Add newly synced songs to slits (unless already played)
            try { addSongToSlits(existingSong.id); } catch (e) { /* ignore */ }
          }
          songIds.push(existingSong.id);
        });
      }

      if (existingFolder) {
        // Merge song lists to avoid duplicates in the same folder
        existingFolder.songIds = [...new Set([...existingFolder.songIds, ...songIds])];
      } else {
        const newFolder = {
          id: folderId,
          title: album.title || "Synced Album",
          desc: album.desc || "Automatically synced from MassTamilan & Cloudinary.",
          cover: album.cover || "assets/bison image.jpg",
          songIds: songIds
        };
        folders.push(newFolder);
      }
    });

    // Save back to storage so the folder structure is persisted
    saveFoldersToStorage();
  } catch (error) {
    console.warn("Could not load or parse songs.json:", error);
  }
}

async function init() {
  loadLocalStorage();
  loadSlitsFromStorage();
  loadUserState();
  await loadExternalSongs();
  setupEventListeners();
  updateVolumeSliders(audio.volume);

  // Set initial queue
  activeQueue = [...SONGS_DATABASE];
  currentQueueIndex = 0;
  loadTrack(0, false); // load but don't autoplay initially

  updateHeaderLikedBadge();
  renderFolders();
  renderQuickAccessGrid();
  renderSidebarFolders();
  renderSlits();

  navigate("home");
}

/** Load slits state from localStorage */
function loadSlitsFromStorage() {
  const storedPlayedSlits = localStorage.getItem("spotify_played_slits");

  if (storedPlayedSlits) {
    try { playedSlits = JSON.parse(storedPlayedSlits); } catch (e) { playedSlits = []; }
  } else {
    playedSlits = [];
  }

  // Always seed slits from ALL songs in SONGS_DATABASE (freshest state)
  slits = SONGS_DATABASE.map(s => s.id);
  saveSlitsToStorage();
}

/** Persist slits to localStorage */
function saveSlitsToStorage() {
  localStorage.setItem("spotify_slits", JSON.stringify(slits));
  localStorage.setItem("spotify_played_slits", JSON.stringify(playedSlits));
}

/** Add a song id to the slits list (used when syncing new songs) */
function addSongToSlits(songId) {
  if (!slits.includes(songId) && !playedSlits.includes(songId)) {
    slits.push(songId);
    saveSlitsToStorage();
  }
}

/**
 * Render Apple Music-style horizontal slit tiles.
 * Shows up to 20 unplayed songs; active (currently playing) card gets a green glow ring.
 */
function renderSlits() {
  if (!slitsContainer) return;
  slitsContainer.innerHTML = "";

  // Filter: hide played slits, limit to 20
  const visibleIds = slits.filter(id => !playedSlits.includes(id)).slice(0, 20);

  if (visibleIds.length === 0) {
    slitsContainer.innerHTML = `
      <div class="slits-empty">
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.5" fill="none" style="margin-bottom:10px;opacity:0.4;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p>All songs have been played. Hit <strong>Refresh</strong> to reset.</p>
      </div>`;
    return;
  }

  visibleIds.forEach(songId => {
    const song = SONGS_DATABASE.find(s => s.id === songId);
    if (!song) return;

    const activeSong = activeQueue[currentQueueIndex];
    const isActive = activeSong && activeSong.id === songId;

    const card = document.createElement("div");
    card.className = `slit-card${isActive ? " slit-playing" : ""}`;
    card.id = `slit-card-${songId}`;
    card.setAttribute("data-song-id", songId);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Play ${song.title} by ${song.artist}`);

    card.innerHTML = `
      <div class="slit-thumb">
        <img src="${song.cover}" alt="${song.title}" loading="lazy"
             onerror="this.src='assets/bison image.jpg'">
      </div>
      <div class="slit-text">
        <span class="slit-title">${song.title}</span>
        <span class="slit-artist">${song.artist}</span>
      </div>
      <button class="slit-play-btn" title="Play ${song.title}" tabindex="-1">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M8 5v14l11-7z"></path>
        </svg>
      </button>`;

    // Click anywhere on card or the play button → play song
    const playSong = (e) => {
      e.stopPropagation();
      // Mark as played and hide
      if (!playedSlits.includes(songId)) {
        playedSlits.push(songId);
        saveSlitsToStorage();
      }
      // Set queue to all songs starting from this track
      activeQueue = [...SONGS_DATABASE];
      const idx = activeQueue.findIndex(s => s.id === songId);
      if (idx !== -1) {
        currentQueueIndex = idx;
        loadTrack(songId, true); // ← pass song ID, not queue index
      }
      // Animate the card out before re-rendering
      card.style.transition = "transform 0.3s ease, opacity 0.3s ease";
      card.style.transform = "translateY(-10px) scale(0.92)";
      card.style.opacity = "0";
      setTimeout(() => renderSlits(), 320);
    };

    card.addEventListener("click", playSong);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") playSong(e); });
    card.querySelector(".slit-play-btn").addEventListener("click", playSong);

    slitsContainer.appendChild(card);
  });

  // Entrance animation — stagger each card
  const cards = slitsContainer.querySelectorAll(".slit-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, i * 40);
    });
  });
}

/** Refresh slits — reset played list and re-render */
function refreshSlits() {
  playedSlits = [];
  // Re-seed from full song database
  slits = SONGS_DATABASE.slice(0, Math.min(20, SONGS_DATABASE.length)).map(s => s.id);
  saveSlitsToStorage();
  renderSlits();
}

/** Update the green glow ring on whichever slit card is currently playing */
function updateSlitPlayingState() {
  const activeSong = activeQueue[currentQueueIndex];
  const allSlitCards = document.querySelectorAll(".slit-card");
  allSlitCards.forEach(card => {
    const cardSongId = parseInt(card.getAttribute("data-song-id"), 10);
    if (activeSong && cardSongId === activeSong.id) {
      card.classList.add("slit-playing");
    } else {
      card.classList.remove("slit-playing");
    }
  });
}

function loadLocalStorage() {
  // Load Liked Songs
  const storedLikes = localStorage.getItem("spotify_liked_songs");
  if (storedLikes) {
    likedSongs = JSON.parse(storedLikes);
  } else {
    likedSongs = [0, 2, 4]; // Default starting liked songs
    localStorage.setItem("spotify_liked_songs", JSON.stringify(likedSongs));
  }

  // Load Library Folders
  const storedFolders = localStorage.getItem("spotify_folders");
  if (storedFolders) {
    folders = JSON.parse(storedFolders);
    folders = folders.filter(f => f.id !== "folder_jana_nayagan");
    if (!folders.some(f => f.id === "folder_synced_jana_nayagan")) {
      folders.push({
        id: "folder_synced_jana_nayagan",
        title: "Jana Nayagan Hits",
        desc: "Custom synced playlist featuring new hits with high-fidelity streaming.",
        cover: "assets/Jana-Nayagan.jpg",
        songIds: [6, 7, 8]
      });
    }
    const karupuFolder = folders.find(f => f.id === "folder_karupu_hits");
    if (!karupuFolder) {
      folders.push({
        id: "folder_karupu_hits",
        title: "Karupu Hits",
        desc: "A curated collection of six Karupu tracks with a shared cover image.",
        cover: "assets/photo 1.jpg",
        songIds: [9, 10, 11, 12, 13, 14]
      });
    } else if (!Array.isArray(karupuFolder.songIds) || karupuFolder.songIds.length === 0) {
      karupuFolder.songIds = [9, 10, 11, 12, 13, 14];
    }

    const gethuFolder = folders.find(f => f.id === "folder_gethu_vibes");
    if (!gethuFolder) {
      folders.push({
        id: "folder_gethu_vibes",
        title: "Gethu Vibes",
        desc: "Custom collection containing your requested Gethu Vibes tracks.",
        cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
        songIds: [15, 16, 17, 18, 19, 20, 21]
      });
    } else if (!Array.isArray(gethuFolder.songIds) || gethuFolder.songIds.length === 0) {
      gethuFolder.songIds = [15, 16, 17, 18, 19, 20, 21];
    }

    const abiFolder = folders.find(f => f.id === "folder_abi_hits");
    if (!abiFolder) {
      folders.push({
        id: "folder_abi_hits",
        title: "Abi Hits",
        desc: "A curated collection of hits by Sai Abhyankkar.",
        cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
        songIds: [22, 23, 24, 25, 26, 27]
      });
    } else if (!Array.isArray(abiFolder.songIds) || abiFolder.songIds.length === 0) {
      abiFolder.songIds = [22, 23, 24, 25, 26, 27];
    }

    localStorage.setItem("spotify_folders", JSON.stringify(folders));
  } else {
    // Default pre-loaded folder holding all the 6 songs
    folders = [
      {
        id: "folder_bison_folk",
        title: "Bison Folk Hits",
        desc: "A custom folder containing all your requested folk tracks.",
        cover: "assets/bison image.jpg",
        songIds: [0, 1, 2, 3, 4, 5]
      },
      {
        id: "folder_acoustic_vibes",
        title: "Unplugged Melodies",
        desc: "Acoustic and unplugged special folk session.",
        cover: "assets/bison image.jpg",
        songIds: [0, 3]
      },
      {
        id: "folder_synced_jana_nayagan",
        title: "Jana Nayagan Hits",
        desc: "Custom synced playlist featuring new hits with high-fidelity streaming.",
        cover: "assets/Jana-Nayagan.jpg",
        songIds: [6, 7, 8]
      },
      {
        id: "folder_karupu_hits",
        title: "Karupu Hits",
        desc: "A curated collection of six Karupu tracks with a shared cover image.",
        cover: "assets/photo 1.jpg",
        songIds: [9, 10, 11, 12, 13, 14]
      },
      {
        id: "folder_gethu_vibes",
        title: "Gethu Vibes",
        desc: "Custom collection containing your requested Gethu Vibes tracks.",
        cover: "assets/80873c6a-8ea3-4051-9bc2-9ce8b0dea2d4.jpg",
        songIds: [15, 16, 17, 18, 19, 20, 21]
      },
      {
        id: "folder_abi_hits",
        title: "Abi Hits",
        desc: "A curated collection of hits by Sai Abhyankkar.",
        cover: "assets/is-sai-abhyankkar-being-experimental-or-just-wildly-v0-tds8hhr9fzng1.webp",
        songIds: [22, 23, 24, 25, 26, 27]
      }
    ];
    localStorage.setItem("spotify_folders", JSON.stringify(folders));
  }
}

function saveFoldersToStorage() {
  localStorage.setItem("spotify_folders", JSON.stringify(folders));
}

function saveLikesToStorage() {
  localStorage.setItem("spotify_liked_songs", JSON.stringify(likedSongs));
}

function saveUserState() {
  localStorage.setItem("spotify_lite_user", JSON.stringify(currentUser));
}

function loadUserState() {
  const storedUser = localStorage.getItem("spotify_lite_user");
  if (storedUser) {
    try {
      currentUser = JSON.parse(storedUser);
    } catch (error) {
      currentUser = { name: "Guest", verified: false };
    }
  }

  if (!currentUser || typeof currentUser !== "object") {
    currentUser = { name: "Guest", verified: false };
  }

  updateUserUI();

  if (!currentUser.verified) {
    showLoginOverlay();
  } else {
    hideLoginOverlay();
  }
}

function showLoginOverlay() {
  if (loginOverlay) {
    loginOverlay.style.display = "flex";
  }
}

function hideLoginOverlay() {
  if (loginOverlay) {
    loginOverlay.style.display = "none";
  }
}

function updateUserUI() {
  const name = currentUser.name ? currentUser.name : "Guest";
  const initials = getInitials(name);
  if (userAvatar) userAvatar.textContent = initials;
  if (userNameDisplay) userNameDisplay.textContent = name;
  if (welcomeName) welcomeName.textContent = name;
  if (footerCredit) footerCredit.textContent = `© 2026 Spotify Lite. Crafted for ${name}.`;
}

function logoutUser() {
  currentUser = { name: "Guest", verified: false };
  saveUserState();
  updateUserUI();
  loginNameInput.value = "";
  loginMessage.textContent = "You have been logged out. Please enter your name to login.";
  showLoginOverlay();
}

function getInitials(name) {
  if (!name) return "S";
  const trimmed = name.trim();
  if (trimmed.length === 0) return "S";
  return trimmed.charAt(0).toUpperCase();
}

function performLogin() {
  const name = loginNameInput.value.trim();
  if (!name) {
    loginMessage.textContent = "Please enter your name.";
    return;
  }
  currentUser.name = name;
  currentUser.verified = true;
  saveUserState();
  updateUserUI();
  hideLoginOverlay();
}

function navigate(viewName, folderId = null) {
  // Reset scroll container scroll position
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  // Manage scrollability for folder/liked views
  if (scrollContainer) {
    scrollContainer.style.overflowY = "auto";
  }

  // Hide all main containers
  homeView.style.display = "none";
  libraryView.style.display = "none";
  songTableContainer.style.display = "none";
  heroBanner.style.display = "none";

  // Hide breadcrumb by default
  const breadcrumb = document.getElementById("folder-breadcrumb");
  if (breadcrumb) breadcrumb.style.display = "none";
  // Toggle dedicated search page input visibility
  const searchInputContainer = document.getElementById("search-view-input-container");
  if (searchInputContainer) {
    searchInputContainer.style.display = (viewName === "search") ? "block" : "none";
  }

  currentView = viewName;
  activeFolderId = folderId;

  // Deactivate all sidebar items
  navHome.classList.remove("active");
  navSearchLink.classList.remove("active");
  navLibrary.classList.remove("active");
  btnLikedSongs.classList.remove("active");

  // Deactivate all mobile bottom nav items
  if (mobileNavHome) mobileNavHome.classList.remove("active");
  if (mobileNavSearch) mobileNavSearch.classList.remove("active");
  if (mobileNavLibrary) mobileNavLibrary.classList.remove("active");

  // Highlight sidebar folder item if needed
  const activeFolders = document.querySelectorAll(".sidebar-playlist-item");
  activeFolders.forEach(item => item.classList.remove("active-playlist"));

  if (viewName === "home") {
    navHome.classList.add("active");
    if (mobileNavHome) mobileNavHome.classList.add("active");
    homeView.style.display = "block";
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
  }
  else if (viewName === "library") {
    navLibrary.classList.add("active");
    if (mobileNavLibrary) mobileNavLibrary.classList.add("active");
    libraryView.style.display = "block";
    renderFolders();
  }
  else if (viewName === "search") {
    navSearchLink.classList.add("active");
    if (mobileNavSearch) mobileNavSearch.classList.add("active");
    songTableContainer.style.display = "block";
    // Search results render into song-table-section
    performSearch(searchInput.value.trim());
  }
  else if (viewName === "liked-detail") {
    btnLikedSongs.classList.add("active");
    if (mobileNavLibrary) mobileNavLibrary.classList.add("active");
    setupLikedSongsHeroBanner();
    songTableContainer.style.display = "block";
    renderSongTable(likedSongs.map(id => SONGS_DATABASE.find(s => s.id === id)), "Liked Songs");
  }
  else if (viewName === "folder-detail" && folderId) {
    if (mobileNavLibrary) mobileNavLibrary.classList.add("active");
    const folder = folders.find(f => f.id === folderId);
    if (folder) {
      // Highlight sidebar shortcut
      const sbItem = document.getElementById(`sidebar-folder-${folderId}`);
      if (sbItem) sbItem.classList.add("active-playlist");

      setupFolderHeroBanner(folder);
      songTableContainer.style.display = "block";
      const folderSongs = folder.songIds.map(id => SONGS_DATABASE.find(s => s.id === id)).filter(Boolean);
      renderSongTable(folderSongs, folder.title);
    } else {
      navigate("home");
      return;
    }
  }

  // Manage history track
  if (viewHistory[historyIndex] !== viewName || (viewName === "folder-detail" && activeFolderId !== folderId)) {
    // If we branched from middle of history, clear forward
    if (historyIndex < viewHistory.length - 1) {
      viewHistory.splice(historyIndex + 1);
    }
    viewHistory.push({ view: viewName, folderId });
    historyIndex = viewHistory.length - 1;
  }

  updateHistoryButtonsUI();
}

function updateHistoryButtonsUI() {
  if (headerBackBtn) headerBackBtn.disabled = historyIndex === 0;
  if (headerForwardBtn) headerForwardBtn.disabled = historyIndex === viewHistory.length - 1;
}

function goBack() {
  if (historyIndex > 0) {
    historyIndex--;
    const state = viewHistory[historyIndex];
    if (typeof state === "string") {
      navigate(state);
    } else {
      navigate(state.view, state.folderId);
    }
    // Remove the automatically added duplicate from navigate() call
    viewHistory.pop();
    historyIndex = viewHistory.length - 1;
    updateHistoryButtonsUI();
  }
}

function goForward() {
  if (historyIndex < viewHistory.length - 1) {
    historyIndex++;
    const state = viewHistory[historyIndex];
    if (typeof state === "string") {
      navigate(state);
    } else {
      navigate(state.view, state.folderId);
    }
    // Remove the automatically added duplicate from navigate() call
    viewHistory.pop();
    historyIndex = viewHistory.length - 1;
    updateHistoryButtonsUI();
  }
}

function setupFolderHeroBanner(folder) {
  heroBanner.style.display = "flex";
  document.getElementById("hero-title").textContent = folder.title;
  document.getElementById("hero-desc").textContent = folder.desc || "No description provided.";
  document.getElementById("hero-song-count").textContent = `${folder.songIds.length} songs`;
  document.getElementById("hero-owner").textContent = "Music Library Folder";

  // Set default bison gradient coloring
  document.documentElement.style.setProperty("--active-accent-color", "100, 110, 85");
  heroBanner.style.background = "var(--dynamic-gradient)";
}

function setupLikedSongsHeroBanner() {
  heroBanner.style.display = "flex";
  document.getElementById("hero-title").textContent = "Liked Songs";
  document.getElementById("hero-desc").textContent = "Your customized collection of liked folk hits.";
  document.getElementById("hero-song-count").textContent = `${likedSongs.length} songs`;
  document.getElementById("hero-owner").textContent = currentUser.name || "Spotify Lite";

  // Dark blue heart-shaped gradient theme
  document.documentElement.style.setProperty("--active-accent-color", "69, 10, 245");
  heroBanner.style.background = "linear-gradient(180deg, #2b118c 0%, var(--bg-base) 100%)";
}

function renderFolders() {
  foldersGridHome.innerHTML = "";
  foldersGridLibrary.innerHTML = "";

  const folderCount = folders.length;
  const trackCount = folders.reduce((total, folder) => total + (Array.isArray(folder.songIds) ? folder.songIds.length : 0), 0);
  const folderCountEl = document.getElementById("library-folder-count");
  const trackCountEl = document.getElementById("library-track-count");
  if (folderCountEl) folderCountEl.textContent = folderCount;
  if (trackCountEl) trackCountEl.textContent = trackCount;

  if (folders.length === 0) {
    const emptyMsg = `<p style="color:var(--text-muted); grid-column:1/-1;">No library folders found. Create one to arrange your songs!</p>`;
    foldersGridHome.innerHTML = emptyMsg;
    foldersGridLibrary.innerHTML = emptyMsg;
    return;
  }

  folders.forEach(folder => {
    // Generate card for Home
    const cardHome = createFolderCardElement(folder);
    foldersGridHome.appendChild(cardHome);

    // Generate card for Library view
    const cardLib = createFolderCardElement(folder);
    foldersGridLibrary.appendChild(cardLib);
  });
}

function createFolderCardElement(folder) {
  const card = document.createElement("div");
  card.className = "album-card";

  card.innerHTML = `
    <div class="card-img-container">
      <img src="${folder.cover}" alt="${folder.title}">
      <button class="card-play-btn" title="Play Folder Content">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
      </button>
    </div>
    <h3>${folder.title}</h3>
    <p>${folder.desc}</p>
    <div class="folder-meta-row">
      <span>${folder.songIds.length} track${folder.songIds.length === 1 ? '' : 's'}</span>
    </div>
    <div class="card-actions">
      ${folder.id !== "folder_bison_folk" ? `
        <button class="card-delete-btn" title="Delete Folder">Delete</button>
      ` : ''}
    </div>
  `;

  // Navigate to folder detail on card click
  card.addEventListener("click", (e) => {
    if (e.target.closest(".card-delete-btn")) return;
    navigate("folder-detail", folder.id);
  });

  // Play folder playlist on card play button click
  const playBtn = card.querySelector(".card-play-btn");
  playBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playFolderSongs(folder.id);
  });

  // Delete folder logic
  const deleteBtn = card.querySelector(".card-delete-btn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteFolder(folder.id);
    });
  }

  return card;
}

function renderSidebarFolders() {
  sidebarFoldersList.innerHTML = "";
  folders.forEach(folder => {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "sidebar-playlist-item";
    link.id = `sidebar-folder-${folder.id}`;
    link.innerHTML = `
      <span class="playlist-dot"></span>
      ${folder.title}
    `;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("folder-detail", folder.id);
    });
    sidebarFoldersList.appendChild(link);
  });
}

function renderQuickAccessGrid() {
  quickAccessGrid.innerHTML = "";

  if (likedSongs.length === 0) {
    quickAccessGrid.innerHTML = `
      <div style="flex: 1; padding: 24px; text-align: center; color: var(--text-muted); font-size: 13px; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.08); width: 100%; min-width: 280px; margin: 4px;">
        No liked songs yet. Click the heart icon on any track to add it here!
      </div>
    `;
    return;
  }

  likedSongs.forEach((songId) => {
    const song = SONGS_DATABASE.find(s => s.id === songId);
    if (!song) return;

    const card = document.createElement("div");
    card.className = "quick-access-card";

    card.innerHTML = `
      <img src="${song.cover}" alt="${song.title}">
      <div class="quick-access-card-text">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
      </div>
      <button class="quick-play-hover-btn" title="Play song">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
      </button>
    `;

    card.addEventListener("click", () => {
      activeQueue = likedSongs.map(id => SONGS_DATABASE.find(s => s.id === id)).filter(Boolean);
      const idx = activeQueue.findIndex(s => s.id === song.id);
      currentQueueIndex = idx !== -1 ? idx : 0;
      loadTrack(song.id);
      playTrack();
    });

    quickAccessGrid.appendChild(card);
  });
}

function createNewFolder(title, desc, cover) {
  if (!title) return;

  const id = "folder_" + Date.now();
  const newFolder = {
    id,
    title,
    desc: desc || "Custom user library compartment.",
    cover: cover || "assets/bison image.jpg",
    songIds: []
  };

  folders.push(newFolder);
  saveFoldersToStorage();
  renderFolders();
  renderSidebarFolders();
  navigate("library");
}

function deleteFolder(folderId) {
  if (confirm("Are you sure you want to delete this library folder?")) {
    folders = folders.filter(f => f.id !== folderId);
    saveFoldersToStorage();
    renderFolders();
    renderSidebarFolders();
    if (activeFolderId === folderId) {
      navigate("library");
    }
  }
}

function playFolderSongs(folderId) {
  const folder = folders.find(f => f.id === folderId);
  if (folder && folder.songIds.length > 0) {
    activeQueue = folder.songIds.map(id => SONGS_DATABASE.find(s => s.id === id)).filter(Boolean);
    currentQueueIndex = 0;
    loadTrack(activeQueue[0].id);
    playTrack();
  } else {
    alert("This folder is empty. Click the '+' on songs in Home or Search to add files here!");
  }
}

function showAddToFolderModal(songId, event) {
  // Prevent click bubbling
  event.stopPropagation();

  // Close any existing modal
  const existingModal = document.getElementById("add-folder-modal");
  if (existingModal) existingModal.remove();

  const modal = document.createElement("div");
  modal.id = "add-folder-modal";
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #282828;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    border-radius: 8px;
    z-index: 1000;
    width: 320px;
    max-width: 90%;
    padding: 20px;
  `;

  let foldersListHtml = "";
  if (folders.length === 0) {
    foldersListHtml = "<p style='color:#b3b3b3; font-size:13px; margin: 10px 0;'>Create a library folder first!</p>";
  } else {
    folders.forEach(folder => {
      const alreadyHas = folder.songIds.includes(songId);
      foldersListHtml += `
        <div class="modal-folder-row" data-folder-id="${folder.id}" style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 10px;
          margin: 6px 0;
          background: rgba(255,255,255,0.03);
          border-radius: 4px;
          cursor: pointer;
          font-size: 13px;
          transition: background 0.2s;
        " onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
          <span>${folder.title}</span>
          ${alreadyHas ? `
            <span style="color:#1db954; font-weight:700; font-size:11px;">Added</span>
          ` : `
            <span style="color:#b3b3b3; font-size:12px;">Add</span>
          `}
        </div>
      `;
    });
  }

  modal.innerHTML = `
    <h3 style="font-size: 15px; margin-bottom: 12px; color: #fff; font-family:'Plus Jakarta Sans',sans-serif;">Add Song to Folder</h3>
    <div style="max-height: 200px; overflow-y: auto; margin-bottom: 16px;">
      ${foldersListHtml}
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 10px;">
      <button id="modal-close-btn" style="
        background: transparent;
        border: none;
        color: #b3b3b3;
        font-size: 12px;
        cursor: pointer;
        font-weight: 700;
        padding: 6px 12px;
      ">Cancel</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Backdrop overlay to dismiss modal
  const backdrop = document.createElement("div");
  backdrop.id = "add-folder-modal-backdrop";
  backdrop.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  `;
  document.body.appendChild(backdrop);

  const closeModal = () => {
    modal.remove();
    backdrop.remove();
  };

  backdrop.addEventListener("click", closeModal);
  modal.querySelector("#modal-close-btn").addEventListener("click", closeModal);

  // Row clicks logic
  modal.querySelectorAll(".modal-folder-row").forEach(row => {
    row.addEventListener("click", () => {
      const folderId = row.dataset.folderId;
      const folder = folders.find(f => f.id === folderId);
      if (folder) {
        const idx = folder.songIds.indexOf(songId);
        if (idx === -1) {
          folder.songIds.push(songId);
          saveFoldersToStorage();
          row.querySelector("span:last-child").textContent = "Added";
          row.querySelector("span:last-child").style.color = "#1db954";
          row.querySelector("span:last-child").style.fontWeight = "700";
        } else {
          // Remove song if already present (acts as a toggle)
          folder.songIds.splice(idx, 1);
          saveFoldersToStorage();
          row.querySelector("span:last-child").textContent = "Add";
          row.querySelector("span:last-child").style.color = "#b3b3b3";
          row.querySelector("span:last-child").style.fontWeight = "normal";
        }

        // Refresh details table if active
        if (currentView === "folder-detail" && activeFolderId === folderId) {
          const folderSongs = folder.songIds.map(id => SONGS_DATABASE.find(s => s.id === id)).filter(Boolean);
          renderSongTable(folderSongs, folder.title);
        }
      }
    });
  });
}

function renderSongTable(songsList, folderTitle = "Songs") {
  songListBody.innerHTML = "";

  if (songsList.length === 0) {
    songListBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 60px 0;">No songs in this view.</td></tr>`;
    return;
  }

  songsList.forEach((song, index) => {
    const row = document.createElement("tr");
    row.className = "song-row";
    row.id = `song-row-${song.id}`;
    row.dataset.songId = song.id;
    row.dataset.listIndex = index;

    const isLiked = likedSongs.includes(song.id);

    row.innerHTML = `
      <td class="col-num">
        <div class="track-index-col">
          <span class="track-number">${index + 1}</span>
          <button class="row-play-btn" title="Play">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
          </button>
          <div class="playing-indicator">
            <span class="indicator-bar"></span>
            <span class="indicator-bar"></span>
            <span class="indicator-bar"></span>
            <span class="indicator-bar"></span>
          </div>
        </div>
      </td>
      <td class="col-title">
        <div class="title-cell-content">
          <img class="table-cover-art" src="${song.cover}" alt="Cover">
          <div class="title-text-group">
            <span class="table-song-title">${song.title}</span>
            <span class="table-song-artist">${song.artist}</span>
          </div>
        </div>
      </td>
      <td class="col-duration">
        <div class="duration-cell">
          <button class="row-add-folder-btn" title="Add/Remove from Folder" style="
            background: transparent; border: none; color: var(--text-muted); cursor: pointer; opacity: 0; padding: 4px; transition: opacity 0.2s, color 0.2s; font-size:16px; font-weight:700; margin-right: 4px;
          ">+</button>
          <button class="row-fav-btn ${isLiked ? 'active-fav' : ''}" title="Save to Liked Songs">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="${isLiked ? 'currentColor' : 'none'}"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <span style="min-width: 40px; text-align: right;">${song.duration}</span>
        </div>
      </td>
    `;

    // Add folder button hover display rule
    row.addEventListener("mouseenter", () => {
      row.querySelector(".row-add-folder-btn").style.opacity = 1;
    });
    row.addEventListener("mouseleave", () => {
      row.querySelector(".row-add-folder-btn").style.opacity = 0;
    });

    // Play row on double click or cell click (excluding buttons)
    row.addEventListener("click", (e) => {
      if (e.target.closest(".row-fav-btn") || e.target.closest(".row-add-folder-btn") || e.target.closest(".row-play-btn")) return;
      playRowSong(songsList, index);
    });

    row.querySelector(".row-play-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      playRowSong(songsList, index);
    });

    row.querySelector(".row-fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLike(song.id);
    });

    row.querySelector(".row-add-folder-btn").addEventListener("click", (e) => {
      showAddToFolderModal(song.id, e);
    });

    songListBody.appendChild(row);
  });

  highlightActiveRow();
}

function playRowSong(list, index) {
  activeQueue = [...list];
  currentQueueIndex = index;
  const song = activeQueue[index];

  loadTrack(song.id);
  playTrack();
}

function highlightActiveRow() {
  const rows = document.querySelectorAll(".song-row");
  const playingSong = activeQueue[currentQueueIndex];

  rows.forEach((row) => {
    const songId = parseInt(row.dataset.songId);
    row.classList.remove("active-row", "playing-row");

    const pbtn = row.querySelector(".row-play-btn svg");

    if (playingSong && songId === playingSong.id) {
      row.classList.add("active-row");
      if (isPlaying) {
        row.classList.add("playing-row");
        if (pbtn) pbtn.innerHTML = `<rect x="4" y="4" width="4" height="16"></rect><rect x="12" y="4" width="4" height="16"></rect>`;
      } else {
        if (pbtn) pbtn.innerHTML = `<path d="M8 5v14l11-7z"></path>`;
      }
    } else {
      if (pbtn) pbtn.innerHTML = `<path d="M8 5v14l11-7z"></path>`;
    }
  });
}

function loadTrack(songId, triggerPlay = true) {
  const song = SONGS_DATABASE.find(s => s.id === songId);
  if (!song) return;

  audio.src = song.url;
  audio.load();

  // Set meta track fields
  playerTrackCover.src = song.cover;
  playerTrackTitle.textContent = song.title;
  playerTrackArtist.textContent = song.artist;
  sidebarArtImg.src = song.cover;
  visualizerTrackName.textContent = song.title;

  // Update full screen player elements
  const fsCover = document.getElementById("fs-player-track-cover");
  const fsTitle = document.getElementById("fs-player-track-title");
  const fsArtist = document.getElementById("fs-player-track-artist");
  const fsFavBtn = document.getElementById("fs-player-fav-btn");
  const fsTotalDuration = document.getElementById("fs-total-duration");
  const fsSeekBar = document.getElementById("fs-seek-bar");
  const fsProgressFill = document.getElementById("fs-progress-track-fill");
  const fsCurrentTime = document.getElementById("fs-current-time");

  if (fsCover) fsCover.src = song.cover;
  if (fsTitle) fsTitle.textContent = song.title;
  if (fsArtist) fsArtist.textContent = song.artist;
  if (fsTotalDuration) fsTotalDuration.textContent = song.duration;
  if (fsSeekBar) fsSeekBar.value = 0;
  if (fsProgressFill) fsProgressFill.style.width = "0%";
  if (fsCurrentTime) fsCurrentTime.textContent = "0:00";

  // Handle text scrolling marquee
  const titleWrapper = document.querySelector(".track-title-wrapper");
  if (song.title.length > 20) {
    titleWrapper.classList.add("marquee");
  } else {
    titleWrapper.classList.remove("marquee");
  }

  // Update heart active indicators
  const isLiked = likedSongs.includes(song.id);
  if (isLiked) {
    playerFavBtn.classList.add("active-fav");
    playerFavBtn.querySelector("svg").setAttribute("fill", "currentColor");
    if (fsFavBtn) {
      fsFavBtn.classList.add("active-fav");
      fsFavBtn.querySelector("svg").setAttribute("fill", "currentColor");
    }
  } else {
    playerFavBtn.classList.remove("active-fav");
    playerFavBtn.querySelector("svg").setAttribute("fill", "none");
    if (fsFavBtn) {
      fsFavBtn.classList.remove("active-fav");
      fsFavBtn.querySelector("svg").setAttribute("fill", "none");
    }
  }

  // Reset seek sliders
  seekBar.value = 0;
  progressTrackFill.style.width = "0%";
  currentTimeLabel.textContent = "0:00";
  totalDurationLabel.textContent = song.duration;

  highlightActiveRow();
  updateLyricsDisplay(0);

  // Set Dynamic Accent Colors depending on the track
  // (We use HSL gradients mimicking Spotify cover color matches)
  const hslVals = [
    "29, 185, 84",   // 0 Green
    "226, 40, 80",   // 1 Red
    "245, 140, 10",  // 2 Orange
    "190, 45, 220",  // 3 Purple
    "40, 160, 230",  // 4 Blue
    "220, 210, 30"   // 5 Yellow
  ];
  document.documentElement.style.setProperty("--active-accent-color", hslVals[songId % hslVals.length]);

  if (triggerPlay) {
    playTrack();
  }
}

function playTrack() {
  audio.play()
    .then(() => {
      isPlaying = true;
      togglePlayBtnUI(true);
      startVisualizer();
      highlightActiveRow();
    })
    .catch(err => {
      console.warn("Audio play blocked by browser. Wait for user tap action.", err);
    });
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  togglePlayBtnUI(false);
  stopVisualizer();
  highlightActiveRow();
}

function togglePlayPause() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function nextTrack() {
  if (activeQueue.length === 0) return;

  let nextIndex;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * activeQueue.length);
  } else {
    nextIndex = (currentQueueIndex + 1) % activeQueue.length;
  }

  currentQueueIndex = nextIndex;
  loadTrack(activeQueue[nextIndex].id);
}

function prevTrack() {
  if (activeQueue.length === 0) return;

  // If track is >3s, restart it instead of prev track
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  let prevIndex;
  if (isShuffle) {
    prevIndex = Math.floor(Math.random() * activeQueue.length);
  } else {
    prevIndex = (currentQueueIndex - 1 + activeQueue.length) % activeQueue.length;
  }

  currentQueueIndex = prevIndex;
  loadTrack(activeQueue[prevIndex].id);
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
  const fsShuffleBtn = document.getElementById("fs-shuffle-btn");
  if (fsShuffleBtn) fsShuffleBtn.classList.toggle("active", isShuffle);
}

function toggleRepeat() {
  isRepeat = (isRepeat + 1) % 3;
  const badge = document.getElementById("repeat-badge");
  const fsRepeatBtn = document.getElementById("fs-repeat-btn");
  const fsBadge = document.getElementById("fs-repeat-badge");

  if (isRepeat === 0) {
    repeatBtn.classList.remove("active");
    badge.style.display = "none";
    if (fsRepeatBtn) fsRepeatBtn.classList.remove("active");
    if (fsBadge) fsBadge.style.display = "none";
  } else if (isRepeat === 1) {
    repeatBtn.classList.add("active");
    badge.style.display = "flex";
    badge.textContent = "All";
    if (fsRepeatBtn) fsRepeatBtn.classList.add("active");
    if (fsBadge) {
      fsBadge.style.display = "flex";
      fsBadge.textContent = "All";
    }
  } else {
    repeatBtn.classList.add("active");
    badge.style.display = "flex";
    badge.textContent = "1";
    if (fsRepeatBtn) fsRepeatBtn.classList.add("active");
    if (fsBadge) {
      fsBadge.style.display = "flex";
      fsBadge.textContent = "1";
    }
  }
}

function toggleLike(songId) {
  const idx = likedSongs.indexOf(songId);
  const song = SONGS_DATABASE.find(s => s.id === songId);

  if (idx === -1) {
    likedSongs.push(songId);
    // Trigger pop micro-animation if target exists
    const btn = document.getElementById(`song-row-${songId}`)?.querySelector(".row-fav-btn");
    if (btn) btn.classList.add("active-fav");
  } else {
    likedSongs.splice(idx, 1);
  }

  saveLikesToStorage();

  // Update main player bar like
  const currentPlaying = activeQueue[currentQueueIndex];
  if (currentPlaying && currentPlaying.id === songId) {
    const isLiked = likedSongs.includes(songId);
    playerFavBtn.classList.toggle("active-fav", isLiked);
    playerFavBtn.querySelector("svg").setAttribute("fill", isLiked ? "currentColor" : "none");
  }

  // If in Liked detail page, reload list to remove disliked item
  if (currentView === "liked-detail") {
    setupLikedSongsHeroBanner();
    renderSongTable(likedSongs.map(id => SONGS_DATABASE.find(s => s.id === id)), "Liked Songs");
  } else {
    // Redraw current table rows to update favorite indicator hearts
    if (currentView === "folder-detail" && activeFolderId) {
      const folder = folders.find(f => f.id === activeFolderId);
      if (folder) {
        const folderSongs = folder.songIds.map(id => SONGS_DATABASE.find(s => s.id === id)).filter(Boolean);
        renderSongTable(folderSongs, folder.title);
      }
    } else if (currentView === "search") {
      performSearch(searchInput.value.trim());
    }
  }

  updateHeaderLikedBadge();
  renderQuickAccessGrid();
}

function performSearch(query) {
  emptySearchState.style.display = "none";
  document.querySelector(".song-table").style.display = "table";

  if (!query) {
    renderSongTable(SONGS_DATABASE, "All Songs");
    return;
  }

  const searchResults = SONGS_DATABASE.filter(song => {
    return song.title.toLowerCase().includes(query.toLowerCase()) ||
           song.artist.toLowerCase().includes(query.toLowerCase());
  });

  if (searchResults.length > 0) {
    renderSongTable(searchResults, `Search results for: "${query}"`);
  } else {
    document.querySelector(".song-table").style.display = "none";
    emptySearchState.style.display = "block";
    searchQueryText.textContent = query;
  }
}

function updateLyricsDisplay(seconds) {
  const song = activeQueue[currentQueueIndex];
  if (!song || !song.lyrics) {
    lyricLine1.textContent = "No lyrics loaded for this track.";
    lyricLine2.textContent = "";
    lyricLine3.textContent = "";
    return;
  }

  const lyrics = song.lyrics;
  let activeIndex = -1;

  // Find current active lyric line
  for (let i = 0; i < lyrics.length; i++) {
    if (seconds >= lyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  if (activeIndex === -1) {
    lyricLine1.textContent = "♪ Listening to " + song.title + " ♪";
    lyricLine2.textContent = lyrics[0] ? lyrics[0].text : "";
    lyricLine3.textContent = lyrics[1] ? lyrics[1].text : "";

    lyricLine1.className = "lyric-line active-lyric";
    lyricLine2.className = "lyric-line";
    lyricLine3.className = "lyric-line";
  } else {
    lyricLine1.textContent = lyrics[activeIndex - 1] ? lyrics[activeIndex - 1].text : "";
    lyricLine2.textContent = lyrics[activeIndex].text;
    lyricLine3.textContent = lyrics[activeIndex + 1] ? lyrics[activeIndex + 1].text : "";

    lyricLine1.className = "lyric-line";
    lyricLine2.className = "lyric-line active-lyric";
    lyricLine3.className = "lyric-line";
  }
}

function startVisualizer() {
  visualizerBars.classList.add("animating");
}

function stopVisualizer() {
  visualizerBars.classList.remove("animating");
  // Reset bar heights to default low
  const bars = visualizerBars.querySelectorAll(".bar");
  bars.forEach(bar => {
    bar.style.height = "8%";
  });
}

function modulateVisualizerBars() {
  if (!isPlaying) return;
  const bars = visualizerBars.querySelectorAll(".bar");

  // Add some realistic random jitter overlay to the visualizer bars keyframes
  bars.forEach((bar, idx) => {
    // Generate heights between 15% and 95%
    const baseVal = Math.sin(audio.currentTime * (idx + 1) * 0.5);
    const randOffset = Math.random() * 0.3;
    const heightPct = Math.max(12, Math.floor((Math.abs(baseVal) + randOffset) * 90));
    bar.style.height = `${heightPct}%`;
  });
}

function setupEventListeners() {
  // Navigation sidebar item triggers
  navHome.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("home");
  });

  navSearchLink.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("search");
    searchInput.focus();
  });

  navLibrary.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("library");
  });

  btnLikedSongs.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("liked-detail");
  });

  document.getElementById("view-all-library-link").addEventListener("click", () => {
    navigate("library");
  });

  // Header Liked button navigation
  const headerLikedBtn = document.getElementById("header-liked-btn");
  if (headerLikedBtn) {
    headerLikedBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("liked-detail");
    });
  }

  // Play all liked songs button
  const quickAccessPlayAllBtn = document.getElementById("quick-access-play-all");
  if (quickAccessPlayAllBtn) {
    quickAccessPlayAllBtn.addEventListener("click", () => {
      if (likedSongs.length > 0) {
        activeQueue = likedSongs.map(id => SONGS_DATABASE.find(s => s.id === id)).filter(Boolean);
        currentQueueIndex = 0;
        loadTrack(activeQueue[0].id);
        playTrack();
      } else {
        alert("You don't have any liked songs yet!");
      }
    });
  }

  // Header Navigation Arrows
  if (headerBackBtn) headerBackBtn.addEventListener("click", goBack);
  if (headerForwardBtn) headerForwardBtn.addEventListener("click", goForward);

  // Bottom Media Controllers
  playPauseBtn.addEventListener("click", togglePlayPause);
  prevBtn.addEventListener("click", prevTrack);
  nextBtn.addEventListener("click", nextTrack);
  shuffleBtn.addEventListener("click", toggleShuffle);
  repeatBtn.addEventListener("click", toggleRepeat);

  // Track heart save button
  playerFavBtn.addEventListener("click", () => {
    const currentPlaying = activeQueue[currentQueueIndex];
    if (currentPlaying) {
      toggleLike(currentPlaying.id);
    }
  });

  // Login actions
  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      performLogin();
    });
  }

  if (userAvatar) {
    userAvatar.addEventListener("click", (e) => {
      e.preventDefault();
      // Show custom styled confirm modal
      const existing = document.getElementById("custom-confirm-modal");
      if (existing) existing.remove();

      const modal = document.createElement("div");
      modal.id = "custom-confirm-modal";
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
        font-family: 'Plus Jakarta Sans', sans-serif;
      `;
      modal.innerHTML = `
        <div style="
          background: #181818;
          color: white;
          padding: 24px;
          border-radius: 12px;
          width: 300px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        ">
          <h3 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 700;">Log out</h3>
          <p style="margin: 0 0 24px 0; font-size: 14px; color: #b3b3b3; line-height: 1.4;">Are you sure you want to log out of Spotify Lite?</p>
          <div style="display: flex; justify-content: flex-end; gap: 12px;">
            <button id="confirm-cancel" style="
              background: transparent;
              border: 1px solid #727272;
              color: white;
              font-size: 13px;
              font-weight: 700;
              padding: 8px 16px;
              border-radius: 500px;
              cursor: pointer;
              outline: none;
            ">Cancel</button>
            <button id="confirm-ok" style="
              background: #ffffff;
              border: none;
              color: black;
              font-size: 13px;
              font-weight: 700;
              padding: 8px 16px;
              border-radius: 500px;
              cursor: pointer;
              outline: none;
            ">Log out</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById("confirm-cancel").onclick = () => {
        modal.remove();
      };

      document.getElementById("confirm-ok").onclick = () => {
        modal.remove();
        logoutUser();
      };
    });
  }

  // Folder banner big play action
  document.getElementById("hero-play-btn").addEventListener("click", () => {
    if (activeQueue.length > 0) {
      currentQueueIndex = 0;
      loadTrack(activeQueue[0].id);
      playTrack();
    }
  });

  // Audio Playback Events
  audio.addEventListener("ended", () => {
    if (isRepeat === 2) {
      // Repeat current single song
      audio.currentTime = 0;
      playTrack();
    } else if (isRepeat === 1) {
      // Repeat entire active list
      nextTrack();
    } else {
      // Stop at end of queue
      if (currentQueueIndex < activeQueue.length - 1) {
        nextTrack();
      } else {
        pauseTrack();
        audio.currentTime = 0;
      }
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    // Calculate timeline position percent
    const pct = (audio.currentTime / audio.duration) * 100;
    seekBar.value = pct;
    progressTrackFill.style.width = `${pct}%`;
    seekBar.parentElement.style.setProperty("--thumb-offset", `${pct}%`);

    currentTimeLabel.textContent = formatTime(audio.currentTime);

    // Sync full screen player seek bar
    const fsSeekBar = document.getElementById("fs-seek-bar");
    const fsProgressFill = document.getElementById("fs-progress-track-fill");
    const fsCurrentTime = document.getElementById("fs-current-time");

    if (fsSeekBar) {
      fsSeekBar.value = pct;
      fsSeekBar.parentElement.style.setProperty("--thumb-offset", `${pct}%`);
    }
    if (fsProgressFill) fsProgressFill.style.width = `${pct}%`;
    if (fsCurrentTime) fsCurrentTime.textContent = formatTime(audio.currentTime);

    updateLyricsDisplay(audio.currentTime);
    modulateVisualizerBars();
  });

  audio.addEventListener("loadedmetadata", () => {
    totalDurationLabel.textContent = formatTime(audio.duration);
    const fsTotalDuration = document.getElementById("fs-total-duration");
    if (fsTotalDuration) fsTotalDuration.textContent = formatTime(audio.duration);
  });

  // Slider controls seeking
  seekBar.addEventListener("input", (e) => {
    if (!audio.duration) return;
    const seekTo = (parseFloat(e.target.value) / 100) * audio.duration;
    audio.currentTime = seekTo;
    progressTrackFill.style.width = `${e.target.value}%`;
    seekBar.parentElement.style.setProperty("--thumb-offset", `${e.target.value}%`);
    currentTimeLabel.textContent = formatTime(seekTo);

    // Sync full screen seek bar too
    const fsSeekBar = document.getElementById("fs-seek-bar");
    const fsProgressFill = document.getElementById("fs-progress-track-fill");
    const fsCurrentTime = document.getElementById("fs-current-time");
    if (fsSeekBar) {
      fsSeekBar.value = e.target.value;
      fsSeekBar.parentElement.style.setProperty("--thumb-offset", `${e.target.value}%`);
    }
    if (fsProgressFill) fsProgressFill.style.width = `${e.target.value}%`;
    if (fsCurrentTime) fsCurrentTime.textContent = formatTime(seekTo);
  });

  // Volume slider
  volumeSlider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    audio.volume = val;
    updateVolumeSliders(val);
  });

  // Volume icon button mute toggle
  volumeBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    if (audio.muted) {
      volHighIcon.style.display = "none";
      volLowIcon.style.display = "none";
      volMuteIcon.style.display = "block";
      volumeTrackFill.style.width = "0%";
      volumeSlider.parentElement.style.setProperty("--thumb-offset", "0%");
    } else {
      updateVolumeSliders(audio.volume);
    }
  });

  // Lyrics toggle display trigger
  lyricsToggle.addEventListener("click", () => {
    const state = extraFeaturesSection.style.display === "grid";
    extraFeaturesSection.style.display = state ? "none" : "grid";
    lyricsToggle.classList.toggle("active-util", !state);

    // Smooth scroll down to lyrics view if opened
    if (!state) {
      setTimeout(() => {
        extraFeaturesSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  });

  // Header Search Input
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    clearSearchBtn.style.display = query ? "block" : "none";

    // Debounce search index parsing
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (currentView !== "search") {
        navigate("search");
      } else {
        performSearch(query);
      }
    }, 250);
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
    performSearch("");
  });

  // Sidebar Search Input
  sidebarSearchInput.addEventListener("input", () => {
    const query = sidebarSearchInput.value.trim();
    searchInput.value = query;
    clearSearchBtn.style.display = query ? "block" : "none";

    if (currentView !== "search") {
      navigate("search");
    } else {
      performSearch(query);
    }
  });

  sidebarSearchBtn.addEventListener("click", () => {
    const query = sidebarSearchInput.value.trim();
    if (query) {
      searchInput.value = query;
      clearSearchBtn.style.display = "block";
      navigate("search");
    }
  });

  // Create Library Folder Actions (modal)
  const openCreateFolderModal = () => {
    const modal = document.getElementById("create-folder-modal");
    if (!modal) return;
    modal.style.display = "flex";
    const titleIn = document.getElementById("new-folder-title");
    const descIn = document.getElementById("new-folder-desc");
    if (titleIn) titleIn.value = "";
    if (descIn) descIn.value = "";
    if (titleIn) titleIn.focus();
  };

  const closeCreateFolderModal = () => {
    const modal = document.getElementById("create-folder-modal");
    if (!modal) return;
    modal.style.display = "none";
  };

  // hookups for modal controls
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCancelBtn = document.getElementById("modal-cancel-btn");
  const modalCreateBtn = document.getElementById("modal-create-btn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeCreateFolderModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener("click", closeCreateFolderModal);
  if (modalCreateBtn) modalCreateBtn.addEventListener("click", () => {
    const title = document.getElementById("new-folder-title").value.trim();
    if (!title) { alert("Please enter a folder name."); return; }
    const desc = document.getElementById("new-folder-desc").value.trim();
    createNewFolder(title, desc);
    closeCreateFolderModal();
  });

  createFolderBtnSidebar.addEventListener("click", openCreateFolderModal);
  createFolderBtnMain.addEventListener("click", openCreateFolderModal);

  // Scrolled header state
  scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollTop > 40) {
      mainHeader.classList.add("scrolled");
    } else {
      mainHeader.classList.remove("scrolled");
    }
  });

  // ---- Slits scroll nav buttons ----
  const slitsPrevBtn = document.getElementById("slits-prev-btn");
  const slitsNextBtn = document.getElementById("slits-next-btn");
  const slitsRefreshBtn = document.getElementById("slits-refresh-btn");

  if (slitsPrevBtn && slitsContainer) {
    slitsPrevBtn.addEventListener("click", () => {
      slitsContainer.scrollBy({ left: -440, behavior: "smooth" });
    });
  }

  if (slitsNextBtn && slitsContainer) {
    slitsNextBtn.addEventListener("click", () => {
      slitsContainer.scrollBy({ left: 440, behavior: "smooth" });
    });
  }

  if (slitsRefreshBtn) {
    slitsRefreshBtn.addEventListener("click", refreshSlits);
  }

  // Update slit playing highlight whenever a new track loads
  // (piggyback on audio events already handled elsewhere)
  audio.addEventListener("play", updateSlitPlayingState);
  audio.addEventListener("pause", updateSlitPlayingState);

  // Mobile Bottom Navigation Click Listeners
  if (mobileNavHome) {
    mobileNavHome.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("home");
    });
  }

  if (mobileNavSearch) {
    mobileNavSearch.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("search");
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 50);
    });
  }

  if (mobileNavLibrary) {
    mobileNavLibrary.addEventListener("click", (e) => {
      e.preventDefault();
      navigate("library");
    });
  }

  // Mobile Full Screen Player Controls
  const fsPlayer = document.getElementById("mobile-fullscreen-player");
  const fsCloseBtn = document.getElementById("fs-close-btn");
  const miniPlayerTrackInfo = document.querySelector(".player-track-info");

  const openFullscreenPlayer = () => {
    if (fsPlayer) {
      fsPlayer.style.display = "flex";
      // Force offsetWidth to trigger reflow before adding active class for animation
      void fsPlayer.offsetWidth;
      fsPlayer.classList.add("active");
    }
  };

  const closeFullscreenPlayer = () => {
    if (fsPlayer) {
      fsPlayer.classList.remove("active");
      // Wait for slide-down animation to complete before display: none
      setTimeout(() => {
        if (!fsPlayer.classList.contains("active")) {
          fsPlayer.style.display = "none";
        }
      }, 400);
    }
  };

  // Open on clicking mini player info (only if viewport <= 768)
  if (miniPlayerTrackInfo) {
    miniPlayerTrackInfo.addEventListener("click", (e) => {
      // Don't trigger full-screen if clicking the favorite or device buttons
      if (e.target.closest("#player-fav-btn") || e.target.closest("#player-device-btn")) return;
      if (window.innerWidth <= 768) {
        openFullscreenPlayer();
      }
    });
  }

  if (fsCloseBtn) {
    fsCloseBtn.addEventListener("click", closeFullscreenPlayer);
  }

  // Bind full-screen buttons to main player core functions
  const fsPlayPauseBtn = document.getElementById("fs-play-pause-btn");
  const fsPrevBtn = document.getElementById("fs-prev-btn");
  const fsNextBtn = document.getElementById("fs-next-btn");
  const fsShuffleBtn = document.getElementById("fs-shuffle-btn");
  const fsRepeatBtn = document.getElementById("fs-repeat-btn");
  const fsFavBtn = document.getElementById("fs-player-fav-btn");

  if (fsPlayPauseBtn) {
    fsPlayPauseBtn.addEventListener("click", togglePlayPause);
  }
  if (fsPrevBtn) {
    fsPrevBtn.addEventListener("click", prevTrack);
  }
  if (fsNextBtn) {
    fsNextBtn.addEventListener("click", nextTrack);
  }
  if (fsShuffleBtn) {
    fsShuffleBtn.addEventListener("click", toggleShuffle);
  }
  if (fsRepeatBtn) {
    fsRepeatBtn.addEventListener("click", toggleRepeat);
  }
  if (fsFavBtn) {
    fsFavBtn.addEventListener("click", () => {
      // Toggle favorite on the current song
      const currentSong = SONGS_DATABASE.find(s => s.url === audio.src || audio.src.endsWith(s.url));
      if (currentSong) {
        const index = likedSongs.indexOf(currentSong.id);
        if (index > -1) {
          likedSongs.splice(index, 1);
        } else {
          likedSongs.push(currentSong.id);
        }
        saveUserState();

        // Sync favorite UI on both buttons
        const isLiked = likedSongs.includes(currentSong.id);
        playerFavBtn.classList.toggle("active-fav", isLiked);
        playerFavBtn.querySelector("svg").setAttribute("fill", isLiked ? "currentColor" : "none");

        fsFavBtn.classList.toggle("active-fav", isLiked);
        fsFavBtn.querySelector("svg").setAttribute("fill", isLiked ? "currentColor" : "none");

        renderFolders();
      }
    });
  }

  // Seek bar seek functionality for full screen player
  const fsSeekBar = document.getElementById("fs-seek-bar");
  const fsProgressFill = document.getElementById("fs-progress-track-fill");
  const fsCurrentTime = document.getElementById("fs-current-time");

  if (fsSeekBar) {
    fsSeekBar.addEventListener("input", (e) => {
      if (!audio.duration) return;
      const seekTo = (parseFloat(e.target.value) / 100) * audio.duration;
      audio.currentTime = seekTo;
      if (fsProgressFill) fsProgressFill.style.width = `${e.target.value}%`;
      fsSeekBar.parentElement.style.setProperty("--thumb-offset", `${e.target.value}%`);
      if (fsCurrentTime) fsCurrentTime.textContent = formatTime(seekTo);

      // sync main seek bar
      seekBar.value = e.target.value;
      progressTrackFill.style.width = `${e.target.value}%`;
      seekBar.parentElement.style.setProperty("--thumb-offset", `${e.target.value}%`);
      currentTimeLabel.textContent = formatTime(seekTo);
    });
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function updateVolumeSliders(value) {
  audio.muted = false;
  const pct = value * 100;
  volumeTrackFill.style.width = `${pct}%`;
  volumeSlider.value = value;
  volumeSlider.parentElement.style.setProperty("--thumb-offset", `${pct}%`);

  if (value === 0) {
    volHighIcon.style.display = "none";
    volLowIcon.style.display = "none";
    volMuteIcon.style.display = "block";
  } else if (value < 0.5) {
    volHighIcon.style.display = "none";
    volLowIcon.style.display = "block";
    volMuteIcon.style.display = "none";
  } else {
    volHighIcon.style.display = "block";
    volLowIcon.style.display = "none";
    volMuteIcon.style.display = "none";
  }
}

function togglePlayBtnUI(playing) {
  const playIcon = document.getElementById("play-icon");
  const pauseIcon = document.getElementById("pause-icon");
  const heroPlayIcon = document.getElementById("hero-play-btn").querySelector("svg path");
  const fsPlayIcon = document.getElementById("fs-play-icon");
  const fsPauseIcon = document.getElementById("fs-pause-icon");

  if (playing) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    if (fsPlayIcon) fsPlayIcon.style.display = "none";
    if (fsPauseIcon) fsPauseIcon.style.display = "block";
    if (heroPlayIcon) heroPlayIcon.setAttribute("d", "M6 19h4V5H6v14zm8-14v14h4V5h-4z"); // pause icon
  } else {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    if (fsPlayIcon) fsPlayIcon.style.display = "block";
    if (fsPauseIcon) fsPauseIcon.style.display = "none";
    if (heroPlayIcon) heroPlayIcon.setAttribute("d", "M8 5v14l11-7z"); // play icon
  }
}

function updateHeaderLikedBadge() {
  const badge = document.getElementById("header-liked-badge");
  if (badge) {
    badge.textContent = likedSongs.length;
  }
}

// Start Application on Page Load
window.addEventListener("DOMContentLoaded", init);
