'use strict';

/* ══════════════════════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════════════════════ */
const I18N = {
  no: {
    /* nav */ nav_about:'Om Øyen', nav_villas:'Villas', nav_fish:'Fiske', nav_gallery:'Galleri', nav_book:'Book Nå',
    /* villa cards */ villa_details:'Se detaljer', badge_popular:'Mest populær', badge_new:'Ny!',
    about_cta:'Forespør Opphold', vm_facilities:'Fasiliteter',
    v_white_name:'Hvitvillaen', v_gray_name:'Gråvillaen', v_red_name:'Rødvillaen', v_yellow_name:'Gultvillaen', v_green_name:'Grønnvillaen',
    v_white_short:'Den klassiske hovedvillaen med direkte fjordutsikt fra soverommet. Historisk sjarm møter moderne komfort.',
    v_gray_short:'Moderne og koselig med vedovn, panoramavinduer og stor terrasse mot naturen.',
    v_red_short:'Rustikk sjarm med eksponerte trebjelker og varmt, innbydende interiør.',
    v_yellow_short:'Sjarmerende og privat — nestled i naturen med utsikt mot fjord og fjell.',
    v_green_short:'Moderne hytte med stor terrasse og åpen stue. Rett ved naturen med utsikt over øyen.',
    guests_2:'2 gjester', guests_4:'4 gjester', guests_6:'6 gjester',
    beds_1:'1 soverom', beds_2:'2 soverom', beds_3:'3 soverom',
    feat_fjord:'Fjordutsikt', feat_fireplace:'Vedovn', feat_nature:'Naturutsikt', feat_mountain:'Fjellutsikt', feat_terrace:'Terrasse',
    /* hero */ hero_eyebrow:'Vestlandet · Norge', hero_h1_1:'Din private øy', hero_h1_2:'midt i fjorden',
    hero_subtitle:'Eksklusivt fiskeresort med private villas — kun naturen, fjorden og stillheten.',
    hero_btn_villas:'Se Villas', hero_btn_fish:'Fiskemuligheter', hero_scroll:'Rull ned',
    stat_fish:'Fiskearter', stat_island:'Privat Øy',
    /* about */ about_eyebrow:'Om Øyen',
    about_h2:'En hel øy — <em>kun for deg</em>',
    about_p1:'Ulvsnesøy er en privat øy på Vestlandet, omgitt av ren norsk natur og rike fiskefjorder. Her leier du ikke bare et rom — du leier en hel opplevelse.',
    about_p2:'Med fem eksklusive villas, eget båthus og privat brygge er dette stedet skapt for dem som søker ekte ro, uberørt natur og minneverdige fisketurer.',
    about_feat1:'Privat brygge og båthus', about_feat2:'Utlån av fiskeutstyr og båter',
    about_feat3:'Lokal fiskeekspert tilgjengelig', about_feat4:'Matlaging av din fangst på forespørsel',
    /* parallax 1 */ pdiv1_sub:'5 eksklusive villas', pdiv1_h2:'En hel øy til din disposisjon',
    /* villas section */ villas_eyebrow:'Overnatting', villas_title:'Våre villas',
    villas_desc:'Fem unike villas — alle med panoramautsikt, privat terrasse og moderne fasiliteter.',
    /* fiske */ fish_eyebrow:'Aktiviteter', fish_title:'Fiskeopplevelsen',
    fish_desc:'Vestlandet er blant Europas beste fiskesteder. Fra øyen vår har du tilgang til rike fjorder og åpent hav.',
    fish_1_h:'Fjordfiske', fish_1_p:'Torsk, sei og lyr holder til i de rike fjordene rett utenfor øyen.',
    fish_2_h:'Havfiske', fish_2_p:'Med båt ut til åpent hav kan du jakte kveite, laks og tunfisk.',
    fish_3_h:'Flugefiske', fish_3_p:'Elver og bekker på fastlandet inkludert. Lokal guide tilgjengelig.',
    fish_4_h:'Midnattssol', fish_4_p:'Sommerfiske under midnattsolen — fisk 24 timer i døgnet i juli.',
    fish_species:'Vanlige fiskearter:',
    /* amenities */ am_eyebrow:'Fasiliteter', am_title:'Alt du trenger — <em>på øyen</em>',
    am_p:'Ulvsnesøy er mer enn overnattingssted. Her har vi skapt en komplett opplevelse for hele familien eller vennegjenger.',
    am_1_h:'Spillhus', am_1_p:'Biljard, bordtennis, dart og mer',
    am_2_h:'Båtutleie', am_2_p:'Motoriserte båter og kajakker',
    am_3_h:'Sykler', am_3_p:'Utforsk øyen og omgivelsene',
    am_4_h:'Kokketjeneste', am_4_p:'La oss tilberede din fangst',
    am_5_h:'Utendørs bål', am_5_p:'Grillplass og bålplass ved vannet',
    am_6_h:'Naturstier', am_6_p:'Merkede turer på og rundt øyen',
    /* why */ why_eyebrow:'Hvorfor Ulvsnesøy?', why_title:'Mer enn <em>bare et opphold</em>',
    why_1_h:'Total privatliv', why_1_p:'Hele øyen er din. Ingen andre gjester — bare naturen og dine nærmeste.',
    why_2_h:'Alt inkludert', why_2_p:'Båter, fiskeutstyr, kajakker, sykler og spillhus — alt er klart for deg.',
    why_3_h:'Lokal kunnskap', why_3_p:'Våre guider kjenner hvert fiskested og de beste plassene.',
    why_4_h:'Bærekraftig fiske', why_4_p:'Vi praktiserer catch-and-release og ivaretar fjordens ressurser.',
    why_season:'Åpen April — Oktober',
    /* video */ vid_eyebrow:'Se Øyen', vid_title:'Opplev Ulvsnesøy', vid_desc:'Se vår film og la deg friste av hva som venter deg på den private øyen vår midt i fjorden.',
    /* gallery */ gal_eyebrow:'Galleri', gal_title:'Stemningsbilder',
    gal_1:'Øyen i fjorden', gal_2:'Oversikt over øyen', gal_3:'Magisk morgenlys', gal_4:'Utsikt fra soverommet', gal_5:'Gultvillaen',
    gal_note:'Flere bilder — følg oss på Instagram',
    /* booking */ book_eyebrow:'Reservasjon', book_title:'Book ditt opphold',
    book_desc:'Fyll ut skjemaet, så tar vi kontakt innen 24 timer med tilgjengelighet og skreddersydd tilbud.',
    book_addr:'Adresse', book_phone:'Telefon', book_email_lbl:'E-post',
    form_fname:'Fornavn', form_lname:'Etternavn', form_email:'E-post', form_villa:'Villa',
    form_villa_opt:'Velg villa...', form_arrival:'Ankomst', form_departure:'Avreise',
    form_guests:'Antall gjester', form_msg:'Melding (valgfritt)', form_submit:'Send forespørsel',
    form_ph_fname:'Ola', form_ph_lname:'Nordmann', form_ph_email:'ola@nordmann.no',
    form_ph_msg:'Spesielle ønsker, fiskepreferanser...',
    form_success_h:'Takk for din forespørsel!', form_success_p:'Vi tar kontakt innen 24 timer.',
    /* footer */ footer_desc:'Privat øyresort på Vestlandet — eksklusivt fiskeopphold i hjertet av norsk natur.',
    footer_links_h:'Lenker', footer_info_h:'Informasjon', footer_social_h:'Følg oss',
    footer_terms:'Betingelser', footer_privacy:'Personvern', footer_cancel:'Kanselleringspolicy', footer_faq:'FAQ',
    footer_season:'Åpen April — Oktober',
    footer_copy:'© 2025 Ulvsnesøy Resort. Alle rettigheter forbeholdt.',
    footer_made:'Laget med ❤ i Norge',
  },
  en: {
    /* nav */ nav_about:'About', nav_villas:'Villas', nav_fish:'Fishing', nav_gallery:'Gallery', nav_book:'Book Now',
    /* villa cards */ villa_details:'View details', badge_popular:'Most popular', badge_new:'New!',
    about_cta:'Inquire About Stay', vm_facilities:'Facilities',
    v_white_name:'The White Villa', v_gray_name:'The Gray Villa', v_red_name:'The Red Villa', v_yellow_name:'The Yellow Villa', v_green_name:'The Green Villa',
    v_white_short:'The classic main villa with direct fjord views from the bedroom. Historic charm meets modern comfort.',
    v_gray_short:'Modern and cosy with wood stove, panoramic windows and large terrace facing nature.',
    v_red_short:'Rustic charm with exposed wooden beams and warm, inviting interior.',
    v_yellow_short:'Charming and private — nestled in nature with fjord and mountain views.',
    v_green_short:'Modern cabin with large terrace and open living room. Right in nature with island views.',
    guests_2:'2 guests', guests_4:'4 guests', guests_6:'6 guests',
    beds_1:'1 bedroom', beds_2:'2 bedrooms', beds_3:'3 bedrooms',
    feat_fjord:'Fjord view', feat_fireplace:'Wood stove', feat_nature:'Nature view', feat_mountain:'Mountain view', feat_terrace:'Terrace',
    /* hero */ hero_eyebrow:'Vestlandet · Norway', hero_h1_1:'Your private island', hero_h1_2:'in the fjord',
    hero_subtitle:'Exclusive fishing resort with private villas — just nature, the fjord and silence.',
    hero_btn_villas:'Explore Villas', hero_btn_fish:'Fishing', hero_scroll:'Scroll down',
    stat_fish:'Fish Species', stat_island:'Private Island',
    /* about */ about_eyebrow:'About the Island',
    about_h2:'A whole island — <em>just for you</em>',
    about_p1:'Ulvsnesøy is a private island on the west coast of Norway, surrounded by pure nature and rich fishing fjords. Here you do not just rent a room — you rent an entire experience.',
    about_p2:'With five exclusive villas, a private boathouse and dock, this place was created for those who seek true peace, untouched nature and memorable fishing trips.',
    about_feat1:'Private dock and boathouse', about_feat2:'Fishing equipment and boat hire',
    about_feat3:'Local fishing expert available', about_feat4:'Cooking your catch on request',
    /* parallax 1 */ pdiv1_sub:'5 exclusive villas', pdiv1_h2:'An entire island at your disposal',
    /* villas section */ villas_eyebrow:'Accommodation', villas_title:'Our villas',
    villas_desc:'Five unique villas — all with panoramic views, private terrace and modern facilities.',
    /* fiske */ fish_eyebrow:'Activities', fish_title:'The Fishing Experience',
    fish_desc:'Western Norway is among Europe\'s best fishing destinations. From our island you have access to rich fjords and open sea.',
    fish_1_h:'Fjord Fishing', fish_1_p:'Cod, pollock and saithe inhabit the rich fjords just outside the island.',
    fish_2_h:'Ocean Fishing', fish_2_p:'Head out by boat to open sea to hunt halibut, salmon and tuna.',
    fish_3_h:'Fly Fishing', fish_3_p:'Rivers and streams on the mainland included. Local guide available.',
    fish_4_h:'Midnight Sun', fish_4_p:'Summer fishing under the midnight sun — fish 24 hours a day in July.',
    fish_species:'Common fish species:',
    /* amenities */ am_eyebrow:'Facilities', am_title:'Everything you need — <em>on the island</em>',
    am_p:'Ulvsnesøy is more than a place to stay. We have created a complete experience for the whole family or groups of friends.',
    am_1_h:'Games Room', am_1_p:'Billiards, table tennis, darts and more',
    am_2_h:'Boat Hire', am_2_p:'Motorised boats and kayaks',
    am_3_h:'Bicycles', am_3_p:'Explore the island and surroundings',
    am_4_h:'Chef Service', am_4_p:'Let us prepare your catch',
    am_5_h:'Outdoor Fire', am_5_p:'BBQ and fire pit by the water',
    am_6_h:'Nature Trails', am_6_p:'Marked walks on and around the island',
    /* why */ why_eyebrow:'Why Ulvsnesøy?', why_title:'More than <em>just a stay</em>',
    why_1_h:'Total Privacy', why_1_p:'The entire island is yours. No other guests — just nature and your loved ones.',
    why_2_h:'All Inclusive', why_2_p:'Boats, fishing gear, kayaks, bicycles and games room — all ready for you.',
    why_3_h:'Local Knowledge', why_3_p:'Our guides know every fishing spot and the best locations.',
    why_4_h:'Sustainable Fishing', why_4_p:'We practice catch-and-release and preserve the fjord\'s resources.',
    why_season:'Open April — October',
    /* video */ vid_eyebrow:'Discover', vid_title:'Experience Ulvsnesøy', vid_desc:'Watch our film and let yourself be inspired by what awaits you on our private island in the fjord.',
    /* gallery */ gal_eyebrow:'Gallery', gal_title:'Atmosphere',
    gal_1:'Island in the fjord', gal_2:'Island overview', gal_3:'Magical morning light', gal_4:'View from the bedroom', gal_5:'The Yellow Villa',
    gal_note:'More photos — follow us on Instagram',
    /* booking */ book_eyebrow:'Reservation', book_title:'Book your stay',
    book_desc:'Fill in the form and we\'ll get back to you within 24 hours with availability and a tailored offer.',
    book_addr:'Address', book_phone:'Phone', book_email_lbl:'Email',
    form_fname:'First name', form_lname:'Last name', form_email:'Email', form_villa:'Villa',
    form_villa_opt:'Select villa...', form_arrival:'Check-in', form_departure:'Check-out',
    form_guests:'Number of guests', form_msg:'Message (optional)', form_submit:'Send inquiry',
    form_ph_fname:'John', form_ph_lname:'Smith', form_ph_email:'john@example.com',
    form_ph_msg:'Special requests, fishing preferences...',
    form_success_h:'Thank you for your inquiry!', form_success_p:'We\'ll get back to you within 24 hours.',
    /* footer */ footer_desc:'Private island resort in Western Norway — exclusive fishing retreat in the heart of Norwegian nature.',
    footer_links_h:'Links', footer_info_h:'Information', footer_social_h:'Follow us',
    footer_terms:'Terms & Conditions', footer_privacy:'Privacy Policy', footer_cancel:'Cancellation Policy', footer_faq:'FAQ',
    footer_season:'Open April — October',
    footer_copy:'© 2025 Ulvsnesøy Resort. All rights reserved.',
    footer_made:'Made with ❤ in Norway',
  }
};

let currentLang = 'no';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const t = I18N[lang];

  // Standard text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (titles with <em> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Villa select first option
  const villaOpt = document.querySelector('#villa option[value=""]');
  if (villaOpt && t.form_villa_opt) villaOpt.textContent = t.form_villa_opt;

  // Lang toggle visual
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.querySelector('.lt-no').classList.toggle('active', lang === 'no');
    toggle.querySelector('.lt-en').classList.toggle('active', lang === 'en');
  }

  // Mobile menu links
  const mLinks = { '#om-oss':t.nav_about, '#villas':t.nav_villas, '#fiske':t.nav_fish, '#galleri':t.nav_gallery, '#booking':t.nav_book };
  document.querySelectorAll('.mobile-link').forEach(a => {
    const txt = mLinks[a.getAttribute('href')];
    if (txt) a.textContent = txt;
  });
}

/* ══════════════════════════════════════════════════════════════════════
   VILLA DATA
══════════════════════════════════════════════════════════════════════ */
const VILLAS = {
  white: {
    price: '3 800 kr',
    images: ['images/pro/pro_white_facade.jpg','images/pro/pro_white_2.jpg','images/pro/pro_white_3.jpg','images/pro/pro_white_4.jpg','images/pro/pro_white_5.jpg','images/pro/pro_white_6.jpg'],
    no: {
      name: 'Hvitvillaen', badge: 'Mest populær',
      desc: 'Den klassiske hovedvillaen på Ulvsnesøy. Tre soverom med direkte utsikt mot fjorden og fjellene. Fullverdig kjøkken, to bad og stor stue med vedovn. Historisk sjarm møter moderne komfort — den mest populære villaen på øyen.',
      guests:'6 gjester', beds:'3 soverom', baths:'2 bad', kitchen:'Fullverdig kjøkken',
      features:['Direkte fjordutsikt','Privat terrasse','Vedovn i stuen','2 badrom','Fullverdig kjøkken','Wi-Fi og Smart-TV','Sengeklær inkludert','Grillplass ved vannet'],
    },
    en: {
      name: 'The White Villa', badge: 'Most popular',
      desc: 'The classic main villa at Ulvsnesøy. Three bedrooms with direct fjord and mountain views. Full kitchen, two bathrooms and large living room with fireplace. Historic charm meets modern comfort — the most popular villa on the island.',
      guests:'6 guests', beds:'3 bedrooms', baths:'2 bathrooms', kitchen:'Full kitchen',
      features:['Direct fjord view','Private terrace','Living room fireplace','2 bathrooms','Full kitchen','Wi-Fi & Smart TV','Linen included','BBQ by the water'],
    },
  },
  gray: {
    price: '2 900 kr',
    images: ['images/pro/pro_gray_facade.jpg','images/pro/pro_gray_facade2.jpg','images/pro/pro_gray_1.jpg','images/pro/pro_gray_2.jpg','images/pro/pro_gray_3.jpg','images/pro/pro_gray_4.jpg','images/pro/pro_gray_5.jpg'],
    no: {
      name: 'Gråvillaen', badge: '',
      desc: 'Moderne og lys villa med store panoramavinduer mot fjorden. Vedovn i stuen skaper koselig stemning på kjølige kvelder. Romslig terrasse mot fjorden er perfekt for morgenkaffeen og kveldsmaten.',
      guests:'4 gjester', beds:'2 soverom', baths:'1 bad', kitchen:'Fullverdig kjøkken',
      features:['Panoramavinduer mot fjorden','Vedovn','Romslig terrasse','Fullverdig kjøkken','Fjordutsikt','Wi-Fi og Smart-TV','Sengeklær inkludert','Kajakker tilgjengelig'],
    },
    en: {
      name: 'The Grey Villa', badge: '',
      desc: 'Modern, bright villa with large panoramic windows facing the fjord. Wood-burning fireplace creates a cosy atmosphere on cool evenings. Spacious terrace facing the fjord — perfect for morning coffee and evening meals.',
      guests:'4 guests', beds:'2 bedrooms', baths:'1 bathroom', kitchen:'Full kitchen',
      features:['Panoramic fjord windows','Wood fireplace','Spacious terrace','Full kitchen','Fjord view','Wi-Fi & Smart TV','Linen included','Kayaks available'],
    },
  },
  red: {
    price: '3 200 kr',
    images: ['images/pro/pro_red_facade.jpg','images/pro/pro_red_1.jpg','images/pro/pro_red_2.jpg','images/pro/pro_red_3.jpg','images/red_07.jpg','images/red_08.jpg','images/red_09.jpg','images/red_11.jpg'],
    no: {
      name: 'Rødvillaen', badge: '',
      desc: 'Rustikk og varm villa med eksponerte trebjelker i taket. Den koselige stuen gir en unik norsk atmosfære. Store vinduer slipper inn naturlyset og gir utsikt mot den vakre norske naturen rundt øyen.',
      guests:'4 gjester', beds:'2 soverom', baths:'1 bad', kitchen:'Fullverdig kjøkken',
      features:['Eksponerte trebjelker','Naturutsikt','Koselig rustkk interiør','Fullverdig kjøkken','Privat terrasse','Wi-Fi og Smart-TV','Sengeklær inkludert','Bålplass utendørs'],
    },
    en: {
      name: 'The Red Villa', badge: '',
      desc: 'Rustic and warm villa with exposed wooden ceiling beams. The cosy living room creates a unique Norwegian atmosphere. Large windows let in natural light and offer views of the beautiful nature surrounding the island.',
      guests:'4 guests', beds:'2 bedrooms', baths:'1 bathroom', kitchen:'Full kitchen',
      features:['Exposed wood beams','Nature view','Cosy rustic interior','Full kitchen','Private terrace','Wi-Fi & Smart TV','Linen included','Outdoor fire pit'],
    },
  },
  yellow: {
    price: '2 600 kr',
    images: ['images/pro/pro_yellow_facade.jpg','images/yellow_01.jpg','images/pro/pro_yellow_2.jpg','images/pro/pro_yellow_3.jpg','images/pro/pro_yellow_4.jpg','images/pro/pro_yellow_5.jpg'],
    no: {
      name: 'Gultvillaen', badge: '',
      desc: 'Sjarmerende og privat hytte nestled i naturen med panoramautsikt mot fjord og fjell. Intim og rolig atmosfære — ideell for par som ønsker fred og stillhet. Solrik terrasse med direkte utsikt mot fjordlandskapet.',
      guests:'2 gjester', beds:'1 soverom', baths:'1 bad', kitchen:'Fullverdig kjøkken',
      features:['Fjellutsikt','Fjordutsikt','Privat og rolig','Solrik terrasse','Fullverdig kjøkken','Wi-Fi og Smart-TV','Sengeklær inkludert','Sykkel inkludert'],
    },
    en: {
      name: 'The Yellow Villa', badge: '',
      desc: 'Charming and private cabin nestled in nature with panoramic views of the fjord and mountains. Intimate and peaceful atmosphere — ideal for couples seeking tranquility. Sunny terrace with direct fjord views.',
      guests:'2 guests', beds:'1 bedroom', baths:'1 bathroom', kitchen:'Full kitchen',
      features:['Mountain view','Fjord view','Private & peaceful','Sunny terrace','Full kitchen','Wi-Fi & Smart TV','Linen included','Bicycle included'],
    },
  },
  green: {
    price: '2 800 kr',
    images: ['images/pro/pro_green_facade.jpg','images/pro/pro_green_balcony.jpg','images/pro/pro_green_3.jpg','images/pro/pro_green_4.jpg','images/pro/pro_green_5.jpg','images/pro/pro_green_6.jpg','images/pro/pro_green_7.jpg'],
    no: {
      name: 'Grønnvillaen', badge: 'Ny!',
      desc: 'Nyoppusset moderne hytte med stor åpen terrasse og panoramautsikt over øyen. Den romslige stuen med store vinduer gir deg naturen rett inn i stuen. En av de mest private og naturskjønne plassene på Ulvsnesøy.',
      guests:'4 gjester', beds:'2 soverom', baths:'1 bad', kitchen:'Fullverdig kjøkken',
      features:['Stor åpen terrasse','Panoramautsikt','Ny oppussing 2024','Fullverdig kjøkken','Privat beliggenhet','Wi-Fi og Smart-TV','Sengeklær inkludert','Bålplass'],
    },
    en: {
      name: 'The Green Villa', badge: 'New!',
      desc: 'Newly renovated modern cabin with large open terrace and panoramic views over the island. The spacious living room with large windows brings nature right inside. One of the most private and scenic spots on Ulvsnesøy.',
      guests:'4 guests', beds:'2 bedrooms', baths:'1 bathroom', kitchen:'Full kitchen',
      features:['Large open terrace','Panoramic view','Renovated 2024','Full kitchen','Private location','Wi-Fi & Smart TV','Linen included','Fire pit'],
    },
  },
};

/* ══════════════════════════════════════════════════════════════════════
   LOADING SCREEN
══════════════════════════════════════════════════════════════════════ */
const loader    = document.getElementById('loader');
const loaderBar = document.getElementById('loaderBar');

let loadProgress = 0;
const loadInterval = setInterval(() => {
  loadProgress += Math.random() * 18 + 4;
  if (loadProgress >= 100) {
    loadProgress = 100;
    clearInterval(loadInterval);
    loaderBar.style.width = '100%';
    setTimeout(() => {
      loader.classList.add('done');
      document.body.style.overflow = '';
      setTimeout(triggerHeroSplitText, 200);
    }, 400);
  } else {
    loaderBar.style.width = loadProgress + '%';
  }
}, 120);
document.body.style.overflow = 'hidden';

/* ══════════════════════════════════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════════════════════════════════ */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});
function lerp(a, b, t) { return a + (b - a) * t; }
(function animateCursor() {
  ringX = lerp(ringX, mouseX, 0.12);
  ringY = lerp(ringY, mouseY, 0.12);
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateCursor);
})();
document.querySelectorAll('a, button, .villa-card, .gallery-item, label').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

/* ══════════════════════════════════════════════════════════════════════
   SCROLL PROGRESS
══════════════════════════════════════════════════════════════════════ */
const scrollProgress = document.getElementById('scrollProgress');
function updateScrollProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (window.scrollY / total * 100) + '%';
}

/* ══════════════════════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateScrollProgress();
}, { passive: true });

/* ══════════════════════════════════════════════════════════════════════
   LANGUAGE TOGGLE
══════════════════════════════════════════════════════════════════════ */
document.getElementById('langToggle')?.addEventListener('click', () => {
  setLang(currentLang === 'no' ? 'en' : 'no');
});

/* ══════════════════════════════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  const spans = hamburger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ══════════════════════════════════════════════════════════════════════
   SMOOTH ANCHOR SCROLL
══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 20, behavior: 'smooth' });
  });
});

/* ══════════════════════════════════════════════════════════════════════
   PARALLAX
══════════════════════════════════════════════════════════════════════ */
const TRAVEL = 20;
function updateParallax() {
  const vH = window.innerHeight;
  const heroImg = document.getElementById('heroImg');
  if (heroImg) heroImg.style.transform = `translateY(${-(window.scrollY * 0.35)}px)`;
  document.querySelectorAll('.parallax-wrap:not(.hero-parallax-wrap) .parallax-img').forEach(img => {
    const wrap = img.closest('.parallax-wrap');
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    if (rect.bottom < -100 || rect.top > vH + 100) return;
    const progress = Math.max(0, Math.min(1, (vH - rect.top) / (vH + rect.height)));
    img.style.transform = `translateY(${(progress - 0.5) * TRAVEL}%)`;
  });
}
let rafPending = false;
function scheduleParallax() {
  if (!rafPending) { rafPending = true; requestAnimationFrame(() => { updateParallax(); rafPending = false; }); }
}
window.addEventListener('scroll', scheduleParallax, { passive: true });
window.addEventListener('resize', scheduleParallax, { passive: true });
updateParallax();

/* ── Catch-up reveal for fast scroll ─────────────────────────────── */
function catchUpReveal() {
  const vH = window.innerHeight;
  document.querySelectorAll('.clip-reveal:not(.visible),.reveal-up:not(.visible),.reveal-left:not(.visible),.reveal-right:not(.visible)').forEach(el => {
    if (el.getBoundingClientRect().top < vH + 80) el.classList.add('visible');
  });
}
window.addEventListener('scroll', catchUpReveal, { passive: true });
catchUpReveal();

/* ══════════════════════════════════════════════════════════════════════
   SPLIT-TEXT REVEAL
══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('.split-line').forEach(line => {
  const delay = line.dataset.delay || 0;
  line.innerHTML = `<span class="split-line-inner" style="transition-delay:${delay}ms">${line.innerHTML}</span>`;
});
function triggerHeroSplitText() {
  document.querySelectorAll('.hero-text .split-line .split-line-inner').forEach(i => i.classList.add('visible'));
}
const splitObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.split-line-inner').forEach(i => i.classList.add('visible'));
    splitObs.unobserve(entry.target);
  });
}, { threshold: 0.2 });
document.querySelectorAll('.split-line').forEach(line => {
  if (!line.closest('.hero-text')) splitObs.observe(line);
});

/* ══════════════════════════════════════════════════════════════════════
   CLIP-PATH REVEAL
══════════════════════════════════════════════════════════════════════ */
const clipObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); clipObs.unobserve(entry.target); }
  });
}, { threshold: 0.05, rootMargin: '60px 0px 0px 0px' });
document.querySelectorAll('.clip-reveal').forEach(el => {
  if (el.getBoundingClientRect().bottom < window.innerHeight + 100) el.classList.add('visible');
  else clipObs.observe(el);
});

/* ══════════════════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObs.unobserve(entry.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  if (el.getBoundingClientRect().bottom < window.innerHeight + 100) el.classList.add('visible');
  else revealObs.observe(el);
});

/* ══════════════════════════════════════════════════════════════════════
   STATS COUNTER
══════════════════════════════════════════════════════════════════════ */
const statData = [{ suffix:'', target:5 }, { suffix:'+', target:60 }, { suffix:'%', target:100 }];
const statNums = document.querySelectorAll('.stat-number');
function animateCounter(el, target, suffix) {
  const start = performance.now();
  (function tick(now) {
    const ease = 1 - Math.pow(1 - Math.min((now - start) / 1400, 1), 3);
    el.textContent = Math.round(target * ease) + suffix;
    if (ease < 1) requestAnimationFrame(tick);
  })(start);
}
const statsObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const idx = [...statNums].indexOf(entry.target);
    if (idx >= 0) animateCounter(entry.target, statData[idx].target, statData[idx].suffix);
    statsObs.unobserve(entry.target);
  });
}, { threshold: 0.5 });
statNums.forEach(el => { el.textContent = '0'; statsObs.observe(el); });

/* ══════════════════════════════════════════════════════════════════════
   MAGNETIC BUTTONS
══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX - rect.left - rect.width/2) * 0.3}px, ${(e.clientY - rect.top - rect.height/2) * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ══════════════════════════════════════════════════════════════════════
   VILLA CAROUSEL — drag + arrow navigation
══════════════════════════════════════════════════════════════════════ */
const villasTrack = document.getElementById('villasTrack');
const villaCards  = villasTrack ? [...villasTrack.querySelectorAll('.villa-card')] : [];
const dotsWrap    = document.getElementById('villasDots');
let carouselIdx = 0;

// Build dots
if (dotsWrap && villaCards.length) {
  villaCards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'villas-nav-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Villa ${i+1}`);
    dot.addEventListener('click', () => goToVilla(i));
    dotsWrap.appendChild(dot);
  });
}

function updateDots(idx) {
  carouselIdx = idx;
  dotsWrap?.querySelectorAll('.villas-nav-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

function scrollToVilla(idx) {
  if (!villasTrack || !villaCards[idx]) return;
  const card    = villaCards[idx];
  const padding = parseFloat(getComputedStyle(villasTrack).paddingLeft) || 0;
  const maxScroll = villasTrack.scrollWidth - villasTrack.offsetWidth;
  villasTrack.scrollLeft = Math.min(maxScroll, Math.max(0, card.offsetLeft - padding));
}

function goToVilla(idx) {
  const next = Math.max(0, Math.min(villaCards.length - 1, idx));
  scrollToVilla(next);
  updateDots(next);
}

document.getElementById('villasPrev')?.addEventListener('click', () => goToVilla(carouselIdx - 1));
document.getElementById('villasNext')?.addEventListener('click', () => goToVilla(carouselIdx + 1));

if (villasTrack) {
  // Drag scroll
  let isDown = false, startX = 0, scrollLeft = 0;
  villasTrack.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - villasTrack.offsetLeft; scrollLeft = villasTrack.scrollLeft; villasTrack.classList.add('active'); });
  document.addEventListener('mouseup', () => { isDown = false; villasTrack.classList.remove('active'); syncDotFromScroll(); });
  villasTrack.addEventListener('mouseleave', () => { isDown = false; villasTrack.classList.remove('active'); });
  villasTrack.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); villasTrack.scrollLeft = scrollLeft - (e.pageX - villasTrack.offsetLeft - startX) * 1.5; });

  // Touch
  let tStartX = 0, tScrollLeft = 0;
  villasTrack.addEventListener('touchstart', (e) => { tStartX = e.touches[0].pageX; tScrollLeft = villasTrack.scrollLeft; }, { passive: true });
  villasTrack.addEventListener('touchmove',  (e) => { villasTrack.scrollLeft = tScrollLeft + (tStartX - e.touches[0].pageX); }, { passive: true });
  villasTrack.addEventListener('touchend', () => syncDotFromScroll(), { passive: true });

  // Update dots on native scroll (wheel/trackpad)
  villasTrack.addEventListener('scroll', () => {
    clearTimeout(villasTrack._scrollTimer);
    villasTrack._scrollTimer = setTimeout(syncDotFromScroll, 120);
  }, { passive: true });
}

function syncDotFromScroll() {
  if (!villasTrack) return;
  const padding = parseFloat(getComputedStyle(villasTrack).paddingLeft) || 0;
  const left = villasTrack.scrollLeft + padding;
  let closest = 0, minDist = Infinity;
  villaCards.forEach((c, i) => {
    const dist = Math.abs(c.offsetLeft - left);
    if (dist < minDist) { minDist = dist; closest = i; }
  });
  updateDots(closest);
}

/* Villa card tilt */
villaCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.transform = `translateY(-6px) rotateY(${(e.clientX - rect.left - rect.width/2) / (rect.width/2) * 4}deg) rotateX(${-(e.clientY - rect.top - rect.height/2) / (rect.height/2) * 4}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ══════════════════════════════════════════════════════════════════════
   VILLA DETAIL MODAL
══════════════════════════════════════════════════════════════════════ */
const villaModal  = document.getElementById('villaModal');
const vmMainImg   = document.getElementById('vmMainImg');
const vmThumbs    = document.getElementById('vmThumbs');
const vmCounter   = document.getElementById('vmCounter');
const vmBadge     = document.getElementById('vmBadge');
const vmPriceTag  = document.getElementById('vmPriceTag');
const vmTitle     = document.getElementById('vmTitle');
const vmDesc      = document.getElementById('vmDesc');
const vmSpecs     = document.getElementById('vmSpecs');
const vmFeatures  = document.getElementById('vmFeatures');
const vmBookBtn   = document.getElementById('vmBookBtn');
const vmInquireBtn= document.getElementById('vmInquireBtn');

let vmImages  = [];
let vmCurrent = 0;

function openVillaModal(villaId) {
  const data = VILLAS[villaId];
  if (!data) return;
  const t = data[currentLang];

  // Images
  vmImages  = data.images;
  vmCurrent = 0;
  renderVmImage(0);

  // Thumbnails
  vmThumbs.innerHTML = '';
  data.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src; img.alt = ''; img.className = 'vm-thumb' + (i === 0 ? ' active' : '');
    img.addEventListener('click', () => renderVmImage(i));
    vmThumbs.appendChild(img);
  });

  // Info
  vmBadge.textContent    = t.badge;
  vmPriceTag.innerHTML   = `fra ${data.price} <small>/natt</small>`;
  vmTitle.textContent    = t.name;
  vmDesc.textContent     = t.desc;

  // Specs grid
  vmSpecs.innerHTML = [
    { icon:'👥', label: currentLang === 'no' ? 'Gjester' : 'Guests',    value: t.guests  },
    { icon:'🛏', label: currentLang === 'no' ? 'Soverom' : 'Bedrooms',  value: t.beds    },
    { icon:'🛁', label: currentLang === 'no' ? 'Badrom'  : 'Bathrooms', value: t.baths   },
    { icon:'🍳', label: currentLang === 'no' ? 'Kjøkken' : 'Kitchen',   value: t.kitchen },
  ].map(s => `
    <div class="vm-spec">
      <span class="vm-spec-icon">${s.icon}</span>
      <div class="vm-spec-info">
        <span class="vm-spec-label">${s.label}</span>
        <span class="vm-spec-value">${s.value}</span>
      </div>
    </div>`).join('');

  // Features
  vmFeatures.innerHTML = t.features.map(f => `<div class="vm-feat">${f}</div>`).join('');

  // CTA text
  if (vmBookBtn)    vmBookBtn.querySelector('span').textContent    = currentLang === 'no' ? 'Book Nå' : 'Book Now';
  if (vmInquireBtn) vmInquireBtn.querySelector('span').textContent = currentLang === 'no' ? 'Forespør Opphold' : 'Enquire Now';

  // Open
  villaModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderVmImage(idx) {
  vmCurrent = idx;
  vmMainImg.style.opacity = '0';
  setTimeout(() => {
    vmMainImg.src = vmImages[idx];
    vmMainImg.style.opacity = '1';
  }, 150);
  vmCounter.textContent = `${idx + 1} / ${vmImages.length}`;
  vmThumbs.querySelectorAll('.vm-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
}

function closeVillaModal() {
  villaModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Open on "Se detaljer" click
document.querySelectorAll('.villa-detail-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openVillaModal(btn.dataset.villa);
  });
});

// Also open on card click (but not on the button itself)
villaCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.villa-detail-btn')) openVillaModal(card.dataset.villa);
  });
});

// Prev/next image in modal
document.getElementById('vmPrev')?.addEventListener('click', () => renderVmImage((vmCurrent - 1 + vmImages.length) % vmImages.length));
document.getElementById('vmNext')?.addEventListener('click', () => renderVmImage((vmCurrent + 1) % vmImages.length));

// Close
document.getElementById('vmClose')?.addEventListener('click', closeVillaModal);
document.getElementById('vmBackdrop')?.addEventListener('click', closeVillaModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVillaModal(); });

// Close modal before scrolling to booking
[vmBookBtn, vmInquireBtn].forEach(btn => btn?.addEventListener('click', () => { closeVillaModal(); }));

/* ══════════════════════════════════════════════════════════════════════
   BOOKING FORM
══════════════════════════════════════════════════════════════════════ */
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');
bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = bookingForm.querySelector('[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = `<span class="btn-text">${currentLang === 'no' ? 'Sender...' : 'Sending...'}</span>`;
  setTimeout(() => { bookingForm.style.display = 'none'; formSuccess.classList.add('visible'); }, 1200);
});

/* ══════════════════════════════════════════════════════════════════════
   GALLERY LIGHTBOX
══════════════════════════════════════════════════════════════════════ */
const galleryImgs = document.querySelectorAll('.gallery-item img');
if (galleryImgs.length) {
  const lb     = document.createElement('div');
  lb.id        = 'lightbox';
  lb.innerHTML = `<div class="lb-backdrop"></div><img class="lb-img" /><button class="lb-close">&times;</button>`;
  document.body.appendChild(lb);
  const lbImg  = lb.querySelector('.lb-img');
  galleryImgs.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => { lbImg.src = img.src; lb.classList.add('open'); document.body.style.overflow = 'hidden'; });
  });
  const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
  lb.querySelector('.lb-close').addEventListener('click', closeLb);
  lb.querySelector('.lb-backdrop').addEventListener('click', closeLb);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('open')) closeLb(); });
}

/* ══════════════════════════════════════════════════════════════════════
   FJORD SOUNDSCAPE  —  Professional Sound Design
   Signal chain:
     [water bed] ──┐
     [melody]   ──►├─► [reverb send] ─► [master]
     [birds]    ──┤│
     [paddle]   ──┘│
                   └─► [dry mix] ─────► [master]
══════════════════════════════════════════════════════════════════════ */
(function() {
  const player = document.getElementById('musicPlayer');
  const toggle = document.getElementById('musicToggle');
  const label  = document.getElementById('musicLabel');
  if (!player || !toggle) return;

  let ctx = null, masterGain = null, playing = false;
  let loopNodes = [], timers = [];

  /* ── Pink-noise buffer ── */
  function pinkBuf(ctx, secs) {
    const len = ctx.sampleRate * secs;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
    for (let i = 0; i < len; i++) {
      const w = Math.random()*2-1;
      b0=0.99886*b0+w*0.0555179; b1=0.99332*b1+w*0.0750759;
      b2=0.96900*b2+w*0.1538520; b3=0.86650*b3+w*0.3104856;
      b4=0.55000*b4+w*0.5329522; b5=-0.7616*b5-w*0.0168980;
      d[i]=(b0+b1+b2+b3+b4+b5+b6+w*0.5362)*0.11; b6=w*0.115926;
    }
    return buf;
  }

  /* ── Convolution reverb from exponential-decay IR ── */
  function makeReverb(ctx, decaySecs) {
    const cv = ctx.createConvolver();
    const len = Math.floor(ctx.sampleRate * decaySecs);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++)
        d[i] = (Math.random()*2-1) * Math.pow(1 - i/len, 2.4);
    }
    cv.buffer = ir;
    return cv;
  }

  /* ── Nordic flute note (additive: fund + 2nd + breath) ── */
  function fluteNote(ctx, dest, freq, vol, startT, durT) {
    const atk = 0.16, rel = 0.5;
    const end = startT + durT;

    function tone(f, gainVal, type='sine') {
      const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = 0;
      g.gain.setValueAtTime(0, startT);
      g.gain.linearRampToValueAtTime(gainVal, startT + atk);
      g.gain.setValueAtTime(gainVal, end - rel);
      g.gain.linearRampToValueAtTime(0, end);
      o.connect(g); g.connect(dest);
      o.start(startT); o.stop(end + 0.05);
    }

    tone(freq,      vol);          // fundamental
    tone(freq*2,    vol*0.07);     // 2nd harmonic — lighter than before
    tone(freq*3,    vol*0.02);     // 3rd — just a touch of air

    /* Breath noise — reduced, very subtle */
    const ns = ctx.createBufferSource();
    ns.buffer = pinkBuf(ctx, Math.max(2, durT + 0.5)); ns.loop = true;
    const hp = ctx.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=4200;
    const ng = ctx.createGain(); ng.gain.value = 0;
    ng.gain.setValueAtTime(0, startT);
    ng.gain.linearRampToValueAtTime(vol*0.016, startT+atk);
    ng.gain.setValueAtTime(vol*0.016, end-rel);
    ng.gain.linearRampToValueAtTime(0, end);
    ns.connect(hp); hp.connect(ng); ng.connect(dest);
    ns.start(startT); ns.stop(end+0.05);
  }

  /* ── Melody sequencer — D Dorian (natural 6th = B gives Nordic lightness) ── */
  const N = { D4:293.66, E4:329.63, F4:349.23, G4:392.00,
               A4:440.00, B4:493.88, C5:523.25, D5:587.33 };

  /* Lighter, flowing phrases — more upward movement, less brooding */
  const PHRASES = [
    // Gentle rise: D→F→A, lands softly on G
    [[N.D4,1.6,0.35],[N.F4,1.3,0.3],[N.A4,2.0,0.4],[N.G4,2.2,3.0]],
    // Bright Dorian phrase: uses B natural (the Nordic lift)
    [[N.G4,1.4,0.3],[N.A4,1.3,0.3],[N.B4,2.0,0.4],[N.A4,1.5,0.3],[N.G4,1.8,3.5]],
    // Simple ascending — optimistic, light
    [[N.D4,1.0,0.2],[N.F4,0.9,0.2],[N.G4,1.0,0.2],[N.A4,1.4,0.3],[N.B4,2.5,4.0]],
    // Mid-range wandering — peaceful, not heavy
    [[N.A4,1.5,0.35],[N.G4,1.2,0.3],[N.A4,1.0,0.25],[N.C5,2.2,0.4],[N.A4,1.8,3.5]],
  ];

  function scheduleMelody(dest, startT) {
    if (!playing) return;
    const phrase = PHRASES[Math.floor(Math.random()*PHRASES.length)];
    let t = startT;
    const vol = 0.19;  // quieter than before
    phrase.forEach(([freq, dur, gap]) => {
      /* Small pitch humanisation ±0.8% */
      const fHz = freq * (1 + (Math.random()-0.5)*0.016);
      fluteNote(ctx, dest, fHz, vol, t, dur);
      t += dur + gap;
    });
    /* Gap between phrases: 5–12 s, then next phrase */
    const nextIn = t - startT + 5 + Math.random()*7;
    const id = setTimeout(() => scheduleMelody(dest, ctx.currentTime + 0.05), nextIn * 1000);
    timers.push(id);
  }

  /* ── Bird calls: 4 Nordic species impressions ── */
  function bird(when) {
    const species = [
      /* Willow warbler: descending cascade */
      () => {
        const notes = [[4200,3100],[3800,2800],[3400,2500],[3000,2200]];
        notes.forEach(([f0,f1], i) => {
          const t = when + i*0.12;
          const o = ctx.createOscillator(); o.type='sine';
          o.frequency.setValueAtTime(f0,t); o.frequency.linearRampToValueAtTime(f1,t+0.1);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.28,t+0.01);
          g.gain.linearRampToValueAtTime(0,t+0.1);
          o.connect(g); g.connect(masterGain); o.start(t); o.stop(t+0.12);
        });
      },
      /* Robin: two-note call */
      () => {
        [[2600,2900,0.1],[3200,2700,0.12]].forEach(([f0,f1,dur],i) => {
          const t = when + i*0.22;
          const o = ctx.createOscillator(); o.type='sine';
          o.frequency.setValueAtTime(f0,t); o.frequency.linearRampToValueAtTime(f1,t+dur);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.22,t+0.02);
          g.gain.linearRampToValueAtTime(0,t+dur);
          o.connect(g); g.connect(masterGain); o.start(t); o.stop(t+dur+0.05);
        });
      },
      /* Blackbird: rich flute-like phrase */
      () => {
        [[1800,2200,0.25,0.24],[2400,1900,0.20,0.22],[2100,2500,0.22,0.20]].forEach(([f0,f1,dur,vol],i) => {
          const t = when + i*0.38;
          const o = ctx.createOscillator(); o.type='sine';
          o.frequency.setValueAtTime(f0,t); o.frequency.linearRampToValueAtTime(f1,t+dur);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+0.04);
          g.gain.linearRampToValueAtTime(0,t+dur);
          o.connect(g); g.connect(masterGain); o.start(t); o.stop(t+dur+0.05);
        });
      },
      /* Distant lone call: single soft chirp */
      () => {
        const t = when;
        const o = ctx.createOscillator(); o.type='sine'; o.frequency.value=3400;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(0.14,t+0.02);
        g.gain.linearRampToValueAtTime(0,t+0.08);
        o.connect(g); g.connect(masterGain); o.start(t); o.stop(t+0.12);
      },
    ];
    species[Math.floor(Math.random()*species.length)]();
  }

  /* ── Paddle / rowing: 3-layer water physics ── */
  function paddleStroke(when) {
    /* Layer 1: sharp entry splash — broadband, fast decay */
    (function entry() {
      const s = ctx.createBufferSource(); s.buffer = pinkBuf(ctx,1);
      const bp = ctx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=1200; bp.Q.value=1.2;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0,when); g.gain.linearRampToValueAtTime(0.55,when+0.018);
      g.gain.exponentialRampToValueAtTime(0.001,when+0.22);
      s.connect(bp); bp.connect(g); g.connect(masterGain);
      s.start(when); s.stop(when+0.25);
    })();

    /* Layer 2: water resonance — lower, longer decay */
    (function resonance() {
      const s = ctx.createBufferSource(); s.buffer = pinkBuf(ctx,2);
      const lp = ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=380;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0,when+0.01); g.gain.linearRampToValueAtTime(0.38,when+0.04);
      g.gain.exponentialRampToValueAtTime(0.001,when+0.8);
      s.connect(lp); lp.connect(g); g.connect(masterGain);
      s.start(when+0.01); s.stop(when+0.85);
    })();

    /* Layer 3: drip — short bandpass transient 200ms after */
    (function drip() {
      const t2 = when + 0.18 + Math.random()*0.1;
      const s = ctx.createBufferSource(); s.buffer = pinkBuf(ctx,0.5);
      const bp = ctx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=900; bp.Q.value=3;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0,t2); g.gain.linearRampToValueAtTime(0.18,t2+0.01);
      g.gain.exponentialRampToValueAtTime(0.001,t2+0.15);
      s.connect(bp); bp.connect(g); g.connect(masterGain);
      s.start(t2); s.stop(t2+0.2);
    })();
  }

  function rowingEvent(when) {
    /* 2–4 strokes with natural cadence */
    const strokes = 2 + Math.floor(Math.random()*3);
    for (let i = 0; i < strokes; i++)
      paddleStroke(when + i * (0.85 + Math.random()*0.3));
  }

  /* ── Event scheduler ── */
  function sched(fn, minS, maxS) {
    function next() {
      const ms = (minS + Math.random()*(maxS-minS)) * 1000;
      const id = setTimeout(() => { if (playing) { fn(); next(); } }, ms);
      timers.push(id);
    }
    next();
  }

  /* ── Main start / stop ── */
  function start() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();

    masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.connect(ctx.destination);

    /* Reverb bus — melody + birds run through this */
    const reverb = makeReverb(ctx, 2.8);
    const reverbGain = ctx.createGain(); reverbGain.gain.value = 0.38;
    reverb.connect(reverbGain); reverbGain.connect(masterGain);

    /* Dry bus */
    const dry = ctx.createGain(); dry.gain.value = 1.0; dry.connect(masterGain);

    /* Melody goes dry + wet */
    const melodyDry = ctx.createGain(); melodyDry.gain.value = 0.7; melodyDry.connect(dry);
    const melodyWet = ctx.createGain(); melodyWet.gain.value = 1.0; melodyWet.connect(reverb);
    const melodyBus = ctx.createGain(); melodyBus.gain.value = 1.0;
    melodyBus.connect(melodyDry); melodyBus.connect(melodyWet);

    /* Water bed: very subtle, lowpass at 160 Hz */
    const waterSrc = ctx.createBufferSource();
    waterSrc.buffer = pinkBuf(ctx, 6); waterSrc.loop = true;
    const waterLp = ctx.createBiquadFilter(); waterLp.type='lowpass'; waterLp.frequency.value=160;
    const waterG = ctx.createGain(); waterG.gain.value = 0.12;
    waterSrc.connect(waterLp); waterLp.connect(waterG); waterG.connect(dry);
    waterSrc.start(); loopNodes.push(waterSrc);

    /* Quiet low drone for depth */
    const drone = ctx.createOscillator(); drone.type='sine'; drone.frequency.value=55;
    const droneG = ctx.createGain(); droneG.gain.value = 0.05;
    drone.connect(droneG); droneG.connect(dry); drone.start(); loopNodes.push(drone);

    /* Fade master in */
    masterGain.gain.linearRampToValueAtTime(0.85, ctx.currentTime + 3.5);

    /* Start melody after 2 s */
    const mid = setTimeout(() => scheduleMelody(melodyBus, ctx.currentTime + 0.1), 2000);
    timers.push(mid);

    /* Events */
    sched(() => bird(ctx.currentTime + 0.05), 7, 20);
    sched(() => rowingEvent(ctx.currentTime + 0.05), 22, 55);
  }

  function stop() {
    timers.forEach(clearTimeout); timers = [];
    if (!ctx || !masterGain) return;
    masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
    setTimeout(() => {
      loopNodes.forEach(n => { try { n.stop(); } catch(e){} });
      ctx.close(); ctx = null; masterGain = null; loopNodes = [];
    }, 2200);
  }

  toggle.addEventListener('click', () => {
    if (!playing) { playing=true; player.classList.add('is-playing'); start(); }
    else          { playing=false; player.classList.remove('is-playing'); stop(); }
  });

  const _setLang = setLang;
  window.setLang = function(lang) {
    _setLang(lang);
    if (label) label.textContent = lang==='en' ? 'Ambience' : 'Atmosfære';
  };
})();
