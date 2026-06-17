/* ==========================================================================
   Spotify Web Player Clone - Core JavaScript
   ========================================================================== */

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
  }
];

// App State
let folders = []; // Music folders (representing categories/playlists)
let likedSongs = []; // Array of song IDs that are liked
let activeQueue = []; // Currently playing list of song objects
let currentQueueIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = 0; // 0 = off, 1 = repeat playlist, 2 = repeat track
let currentView = "home"; // home, search, library, folder-detail, liked-detail
let activeFolderId = null; // Currently open folder detail ID
let searchTimeout = null;
let currentUser = { name: "Guest", phone: "", verified: false };
let pendingVerificationCode = null;

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

// Navigation Sidebar links
const navHome = document.getElementById("nav-home");
const navSearchLink = document.getElementById("nav-search-link");
const navLibrary = document.getElementById("nav-library");
const btnLikedSongs = document.getElementById("btn-liked-songs");

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
const loginPhoneInput = document.getElementById("login-phone");
const loginSendBtn = document.getElementById("login-send-btn");
const otpSection = document.getElementById("otp-section");
const loginMessage = document.getElementById("login-message");
const loginCodeInput = document.getElementById("login-code");
const verifyCodeBtn = document.getElementById("verify-code-btn");
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

/* ==========================================================================
   Initialization & Storage Logic
   ========================================================================== */
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
              duration: song.duration || "3:00",
              lyrics: song.lyrics || [
                { time: 0, text: `♪ Synced track from album: ${album.title} ♪` },
                { time: 5, text: `Playing: ${song.title}` },
                { time: 15, text: `Artist: ${song.artist}` },
                { time: 30, text: "♪ Enjoy the music on Spotify Lite! ♪" }
              ]
            };
            SONGS_DATABASE.push(existingSong);
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
  loadUserState();
  await loadExternalSongs();
  await loadCloudinaryConfig();
  setupEventListeners();
  updateVolumeSliders(audio.volume);
  
  // Set initial queue
  activeQueue = [...SONGS_DATABASE];
  currentQueueIndex = 0;
  loadTrack(0, false); // load but don't autoplay initially
  
  renderFolders();
  renderQuickAccessGrid();
  renderSidebarFolders();
  
  navigate("home");
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
  // Check URL parameters for WhatsApp verification redirect link
  const urlParams = new URLSearchParams(window.location.search);
  const isVerifiedParam = urlParams.get("verified");
  const nameParam = urlParams.get("name");
  const phoneParam = urlParams.get("phone");

  if (isVerifiedParam === "true" && nameParam && phoneParam) {
    currentUser = {
      name: nameParam,
      phone: phoneParam,
      verified: true
    };
    saveUserState();
    
    // Clean up URL query parameters so they don't stay in the address bar
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    
    // Show verified message
    if (loginMessage) {
      loginMessage.textContent = "Verified successfully — welcome to Spotify Lite!";
    }
  } else {
    const storedUser = localStorage.getItem("spotify_lite_user");
    if (storedUser) {
      try {
        currentUser = JSON.parse(storedUser);
      } catch (error) {
        currentUser = { name: "Guest", phone: "", verified: false };
      }
    }
  }
  
  if (!currentUser || typeof currentUser !== "object") {
    currentUser = { name: "Guest", phone: "", verified: false };
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
  if (currentUser.verified && currentUser.phone) {
    loginPhoneInput.value = currentUser.phone;
  }
}

function logoutUser() {
  currentUser = { name: "Guest", phone: "", verified: false };
  saveUserState();
  updateUserUI();
  loginNameInput.value = "";
  loginPhoneInput.value = "";
  loginCodeInput.value = "";
  otpSection.style.display = "none";
  loginMessage.textContent = "You have been logged out. Please sign in again to continue.";
  showLoginOverlay();
}

function getInitials(name) {
  if (!name) return "GL";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "GL";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function normalizePhoneNumber(value) {
  if (!value) return "";
  return value.replace(/[^0-9]/g, "");
}

function generateVerificationCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function sendWhatsAppVerification() {
  const name = loginNameInput.value.trim();
  const phone = normalizePhoneNumber(loginPhoneInput.value);

  if (!name) {
    loginMessage.textContent = "Please enter your name.";
    return;
  }
  if (!phone || phone.length < 8) {
    loginMessage.textContent = "Please enter a valid phone number with country code.";
    return;
  }

  currentUser.name = name;
  currentUser.phone = phone;
  currentUser.verified = false;
  saveUserState();
  updateUserUI();

  pendingVerificationCode = generateVerificationCode();
  
  // Construct the verification redirect link
  const verificationUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?verified=true&name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`;
  
  loginMessage.textContent = `Verification link with code ${pendingVerificationCode} is ready. Click below to simulate or send.`;
  
  // Update the simulation anchor href
  const simLink = document.getElementById("whatsapp-sim-link");
  if (simLink) {
    simLink.href = verificationUrl;
  }
  
  otpSection.style.display = "grid";

  const messageText = `Verify your Spotify Lite login by clicking this link: ${verificationUrl} (Code: ${pendingVerificationCode})`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
  window.open(whatsappUrl, "_blank");
}

function verifyLoginCode() {
  const enteredCode = loginCodeInput.value.trim();
  if (!enteredCode) {
    loginMessage.textContent = "Enter the verification code from WhatsApp.";
    return;
  }
  if (enteredCode === pendingVerificationCode) {
    currentUser.verified = true;
    saveUserState();
    updateUserUI();
    hideLoginOverlay();
    loginMessage.textContent = "Verified successfully — welcome to Spotify Lite!";
    loginCodeInput.value = "";
  } else {
    loginMessage.textContent = "The code did not match. Please try again.";
  }
}

/* ==========================================================================
   View Routing & History Navigation
   ========================================================================== */
function navigate(viewName, folderId = null) {
  // Hide all main containers
  homeView.style.display = "none";
  libraryView.style.display = "none";
  songTableContainer.style.display = "none";
  heroBanner.style.display = "none";
  
  const mcpSection = document.getElementById("mcp-search-section");
  if (mcpSection) mcpSection.style.display = "none";
  
  currentView = viewName;
  activeFolderId = folderId;

  // Deactivate all sidebar items
  navHome.classList.remove("active");
  navSearchLink.classList.remove("active");
  navLibrary.classList.remove("active");
  btnLikedSongs.classList.remove("active");
  
  // Highlight sidebar folder item if needed
  const activeFolders = document.querySelectorAll(".sidebar-playlist-item");
  activeFolders.forEach(item => item.classList.remove("active-playlist"));

  if (viewName === "home") {
    navHome.classList.add("active");
    homeView.style.display = "block";
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
  } 
  else if (viewName === "library") {
    navLibrary.classList.add("active");
    libraryView.style.display = "block";
    renderFolders();
  } 
  else if (viewName === "search") {
    navSearchLink.classList.add("active");
    songTableContainer.style.display = "block";
    // Search results render into song-table-section
    performSearch(searchInput.value.trim());
  } 
  else if (viewName === "liked-detail") {
    btnLikedSongs.classList.add("active");
    setupLikedSongsHeroBanner();
    songTableContainer.style.display = "block";
    renderSongTable(likedSongs.map(id => SONGS_DATABASE.find(s => s.id === id)), "Liked Songs");
  } 
  else if (viewName === "folder-detail" && folderId) {
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
  headerBackBtn.disabled = historyIndex === 0;
  headerForwardBtn.disabled = historyIndex === viewHistory.length - 1;
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

/* ==========================================================================
   Hero Banners setups
   ========================================================================== */
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

/* ==========================================================================
   Library Folders management
   ========================================================================== */
function renderFolders() {
  foldersGridHome.innerHTML = "";
  foldersGridLibrary.innerHTML = "";
  
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
  
  // Pick first 6 songs from master database
  const quickSongs = SONGS_DATABASE.slice(0, 6);
  quickSongs.forEach((song, idx) => {
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
      activeQueue = [...SONGS_DATABASE];
      currentQueueIndex = song.id;
      loadTrack(song.id);
      playTrack();
    });
    
    quickAccessGrid.appendChild(card);
  });
}

function createNewFolder(title, desc) {
  if (!title) return;
  
  const id = "folder_" + Date.now();
  const newFolder = {
    id,
    title,
    desc: desc || "Custom user library compartment.",
    cover: "assets/bison image.jpg",
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
    loadTrack(0);
    playTrack();
  } else {
    alert("This folder is empty. Click the '+' on songs in Home or Search to add files here!");
  }
}

/* ==========================================================================
   Modal components for adding songs to folders
   ========================================================================== */
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

/* ==========================================================================
   Song Rendering Table Controls
   ========================================================================== */
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

/* ==========================================================================
   Audio Loading & Playback Controls
   ========================================================================== */
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
  } else {
    playerFavBtn.classList.remove("active-fav");
    playerFavBtn.querySelector("svg").setAttribute("fill", "none");
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
}

function toggleRepeat() {
  isRepeat = (isRepeat + 1) % 3;
  const badge = document.getElementById("repeat-badge");
  
  if (isRepeat === 0) {
    repeatBtn.classList.remove("active");
    badge.style.display = "none";
  } else if (isRepeat === 1) {
    repeatBtn.classList.add("active");
    badge.style.display = "flex";
    badge.textContent = "All";
  } else {
    repeatBtn.classList.add("active");
    badge.style.display = "flex";
    badge.textContent = "1";
  }
}

/* ==========================================================================
   Like / Favorite Song management
   ========================================================================== */
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
}

/* ==========================================================================
   Search Functionality
   ========================================================================== */
// MCP Cloud Config state
let mcpCloudConfig = { cloud_name: "", upload_preset: "" };

async function loadCloudinaryConfig() {
  try {
    const res = await fetch("/api/config");
    if (res.ok) {
      mcpCloudConfig = await res.json();
      const cnInput = document.getElementById("mcp-cloud-name");
      const upInput = document.getElementById("mcp-upload-preset");
      if (cnInput && mcpCloudConfig.cloud_name) cnInput.value = mcpCloudConfig.cloud_name;
      if (upInput && mcpCloudConfig.upload_preset) upInput.value = mcpCloudConfig.upload_preset;
    }
  } catch (err) {
    console.warn("Could not load Cloudinary config:", err);
  }
}

async function saveCloudinaryConfig() {
  const cnVal = document.getElementById("mcp-cloud-name").value;
  const upVal = document.getElementById("mcp-upload-preset").value;
  const cloud_name = cnVal ? cnVal.trim() : "";
  const upload_preset = upVal ? upVal.trim() : "";
  
  const statusEl = document.getElementById("mcp-config-status");
  if (!statusEl) return;
  statusEl.textContent = "";
  statusEl.style.color = "#1db954";

  if (!cloud_name || !upload_preset) {
    statusEl.textContent = "Please fill in all config fields.";
    statusEl.style.color = "#ff5555";
    return;
  }

  mcpCloudConfig = { cloud_name, upload_preset };

  try {
    const res = await fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mcpCloudConfig)
    });
    if (res.ok) {
      statusEl.textContent = "Configuration saved successfully!";
      setTimeout(() => { statusEl.textContent = ""; }, 3000);
    } else {
      statusEl.textContent = "Failed to save configuration.";
      statusEl.style.color = "#ff5555";
    }
  } catch (err) {
    statusEl.textContent = "Server communication error.";
    statusEl.style.color = "#ff5555";
  }
}

async function performMcpSearch(query) {
  const mcpSection = document.getElementById("mcp-search-section");
  const catalogBody = document.getElementById("mcp-catalog-list-body");
  
  if (!mcpSection || !catalogBody) return;

  const url = query ? `/api/search?q=${encodeURIComponent(query)}` : "/api/latest";
  
  try {
    const res = await fetch(url);
    if (!res.ok) {
      mcpSection.style.display = "none";
      return;
    }
    const albums = await res.json();
    if (albums.error) {
      catalogBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #ff5555; padding: 20px 0;">Error: ${albums.error}</td></tr>`;
      mcpSection.style.display = "block";
      return;
    }
    
    if (!Array.isArray(albums) || albums.length === 0) {
      if (query) {
        catalogBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 20px 0;">No matching albums in cloud catalog.</td></tr>`;
        mcpSection.style.display = "block";
      } else {
        mcpSection.style.display = "none";
      }
      return;
    }

    renderMcpCatalog(albums);
    mcpSection.style.display = "block";
  } catch (err) {
    console.warn("MCP search failed:", err);
    mcpSection.style.display = "none";
  }
}

function renderMcpCatalog(albums) {
  const catalogBody = document.getElementById("mcp-catalog-list-body");
  if (!catalogBody) return;
  catalogBody.innerHTML = "";

  albums.forEach((album, index) => {
    const row = document.createElement("tr");
    row.className = "song-row";
    
    // Match titles
    const isSynced = folders.some(f => f.title.toLowerCase() === album.title.toLowerCase());
    
    row.innerHTML = `
      <td class="col-num">${index + 1}</td>
      <td class="col-title">
        <div class="title-cell-content">
          <div class="title-text-group">
            <span class="table-song-title" style="color: #fff; font-weight:600;">${album.title}</span>
            <span class="table-song-artist" style="font-size:11px;">Starring: ${album.starring || "N/A"} | Music: ${album.music_director || "N/A"}</span>
          </div>
        </div>
      </td>
      <td class="col-duration" style="text-align: center;">
        ${isSynced ? `
          <span style="color:#1db954; font-weight:700; font-size:12px; display: inline-flex; align-items: center; gap: 4px;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Synced
          </span>
        ` : `
          <button class="create-folder-main-btn sync-btn" data-link="${album.source}" data-title="${album.title}" style="padding: 6px 12px; font-size: 11px; background: #1db954; color: #000; font-weight:700; cursor: pointer; border:none; border-radius:20px; transition: transform 0.2s;">
            Sync & Play
          </button>
        `}
      </td>
    `;

    const syncBtn = row.querySelector(".sync-btn");
    if (syncBtn) {
      syncBtn.addEventListener("click", () => {
        const link = syncBtn.dataset.link;
        const title = syncBtn.dataset.title;
        syncAlbumFromMcp(link, title, syncBtn);
      });
    }

    catalogBody.appendChild(row);
  });
}

async function syncAlbumFromMcp(albumLink, albumTitle, btnElement) {
  const cnVal = document.getElementById("mcp-cloud-name").value;
  const upVal = document.getElementById("mcp-upload-preset").value;
  const cloud_name = (mcpCloudConfig.cloud_name || cnVal || "").trim();
  const upload_preset = (mcpCloudConfig.upload_preset || upVal || "").trim();

  if (!cloud_name || !upload_preset) {
    alert("Please enter and save your Cloudinary credentials (Cloud Name & Upload Preset) first before syncing songs!");
    document.getElementById("mcp-config-panel").style.display = "block";
    return;
  }

  const banner = document.getElementById("mcp-sync-status-banner");
  const bannerText = document.getElementById("mcp-sync-status-text");
  
  if (banner && bannerText) {
    banner.style.display = "flex";
    bannerText.textContent = `Syncing "${albumTitle}" from MassTamilan catalog to your Cloudinary storage...`;
  }

  btnElement.disabled = true;
  btnElement.textContent = "Syncing...";
  btnElement.style.background = "#555";
  btnElement.style.color = "#aaa";

  try {
    const res = await fetch("/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        album_link: albumLink,
        cloud_name: cloud_name,
        upload_preset: upload_preset
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (bannerText) bannerText.textContent = `Success! Synced ${data.songs_count} songs. Loading playlist...`;
      
      await loadExternalSongs();
      renderFolders();
      renderSidebarFolders();
      
      setTimeout(() => {
        if (banner) banner.style.display = "none";
        const newFolder = folders.find(f => f.title.toLowerCase() === albumTitle.toLowerCase());
        if (newFolder) {
          navigate("folder-detail", newFolder.id);
          playFolderSongs(newFolder.id);
        } else {
          navigate("library");
        }
      }, 1500);

    } else {
      const errData = await res.json();
      alert(`Sync Failed: ${errData.error || "Server error occurred during sync"}`);
      resetSyncButton(btnElement, banner);
    }
  } catch (err) {
    alert(`Sync Failed: Server communication error.`);
    resetSyncButton(btnElement, banner);
  }
}

function resetSyncButton(btn, banner) {
  if (banner) banner.style.display = "none";
  btn.disabled = false;
  btn.textContent = "Sync & Play";
  btn.style.background = "#1db954";
  btn.style.color = "#000";
}

function performSearch(query) {
  emptySearchState.style.display = "none";
  document.querySelector(".song-table").style.display = "table";
  
  if (!query) {
    renderSongTable(SONGS_DATABASE, "All Songs");
    performMcpSearch("");
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

  performMcpSearch(query);
}

/* ==========================================================================
   Lyrics Preview Rendering
   ========================================================================== */
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

/* ==========================================================================
   Visualizer Controls (CSS Height modulation simulating waves)
   ========================================================================== */
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

/* ==========================================================================
   Event Handlers Setup
   ========================================================================== */
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
  
  // Header Navigation Arrows
  headerBackBtn.addEventListener("click", goBack);
  headerForwardBtn.addEventListener("click", goForward);

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
  if (loginSendBtn) {
    loginSendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sendWhatsAppVerification();
    });
  }

  if (verifyCodeBtn) {
    verifyCodeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      verifyLoginCode();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logoutUser();
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
    updateLyricsDisplay(audio.currentTime);
    modulateVisualizerBars();
  });
  
  audio.addEventListener("loadedmetadata", () => {
    totalDurationLabel.textContent = formatTime(audio.duration);
  });

  // Slider controls seeking
  seekBar.addEventListener("input", (e) => {
    if (!audio.duration) return;
    const seekTo = (parseFloat(e.target.value) / 100) * audio.duration;
    audio.currentTime = seekTo;
    progressTrackFill.style.width = `${e.target.value}%`;
    seekBar.parentElement.style.setProperty("--thumb-offset", `${e.target.value}%`);
    currentTimeLabel.textContent = formatTime(seekTo);
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

  // Create Library Folder Actions
  const handleCreateFolder = () => {
    const title = prompt("Enter library folder name:");
    if (!title) return;
    const desc = prompt("Enter folder description:");
    createNewFolder(title.trim(), desc ? desc.trim() : "");
  };

  createFolderBtnSidebar.addEventListener("click", handleCreateFolder);
  createFolderBtnMain.addEventListener("click", handleCreateFolder);

  // MCP config panel toggle & save listeners
  const mcpConfigBtn = document.getElementById("mcp-config-btn");
  const mcpConfigPanel = document.getElementById("mcp-config-panel");
  const mcpSaveConfigBtn = document.getElementById("mcp-save-config-btn");

  if (mcpConfigBtn && mcpConfigPanel) {
    mcpConfigBtn.addEventListener("click", () => {
      const shown = mcpConfigPanel.style.display === "block";
      mcpConfigPanel.style.display = shown ? "none" : "block";
    });
  }

  if (mcpSaveConfigBtn) {
    mcpSaveConfigBtn.addEventListener("click", (e) => {
      e.preventDefault();
      saveCloudinaryConfig();
    });
  }

  // Scrolled header state
  scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollTop > 40) {
      mainHeader.classList.add("scrolled");
    } else {
      mainHeader.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   Helper Utilities
   ========================================================================== */
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
  
  if (playing) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    if (heroPlayIcon) heroPlayIcon.setAttribute("d", "M6 19h4V5H6v14zm8-14v14h4V5h-4z"); // pause icon
  } else {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    if (heroPlayIcon) heroPlayIcon.setAttribute("d", "M8 5v14l11-7z"); // play icon
  }
}

// Start Application on Page Load
window.addEventListener("DOMContentLoaded", init);
