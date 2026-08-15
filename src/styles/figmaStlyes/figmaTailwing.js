/*
 * WEATHER APP — FIGMA -> TAILWIND STIL HARITASI
 *
 * Bu dosyanin klasor ve dosya adi, istekte verilen `figmaStlyes/figmaTailwing.js`
 * yazimi korunarak olusturuldu. Dosya yalnizca tasarim kararlarini tasir;
 * veri akisi veya uygulama/component mimarisi hakkinda varsayim yapmaz.
 *
 * Kaynak: weather-app.fig
 * - Desktop: 1440 x 1158
 * - Tablet:   768 x 1845
 * - Mobile:   375 x 2413
 *
 * Tailwind notu:
 * Siniflar eksiksiz ve literal string olarak tutulur. Boylece Tailwind 3 JIT,
 * `src` altindaki JS/JSX/TS/TSX taramasinda butun arbitrary value siniflarini gorur.
 */

// Figma'daki orijinal export'lar. Ikonlari yeniden cizmek yerine bunlari kullan.
// Her yolun literal olmasi Vite'in asset'leri production build'e almasini saglar.
export const figmaAssets = Object.freeze({
  logo: new URL(
    "../../assets/images/logo.svg",
    import.meta.url,
  ).href,
  todayLarge: new URL(
    "../../assets/images/bg-today-large.svg",
    import.meta.url,
  ).href,
  todaySmall: new URL(
    "../../assets/images/bg-today-small.svg",
    import.meta.url,
  ).href,
  search: new URL(
    "../../assets/images/icon-search.svg",
    import.meta.url,
  ).href,
  units: new URL(
    "../../assets/images/icon-units.svg",
    import.meta.url,
  ).href,
  dropdown: new URL(
    "../../assets/images/icon-dropdown.svg",
    import.meta.url,
  ).href,
  checkmark: new URL(
    "../../assets/images/icon-checkmark.svg",
    import.meta.url,
  ).href,
  loading: new URL(
    "../../assets/images/icon-loading.svg",
    import.meta.url,
  ).href,
  error: new URL(
    "../../assets/images/icon-error.svg",
    import.meta.url,
  ).href,
  retry: new URL(
    "../../assets/images/icon-retry.svg",
    import.meta.url,
  ).href,
  drizzle: new URL(
    "../../assets/images/icon-drizzle.webp",
    import.meta.url,
  ).href,
  fog: new URL(
    "../../assets/images/icon-fog.webp",
    import.meta.url,
  ).href,
  overcast: new URL(
    "../../assets/images/icon-overcast.webp",
    import.meta.url,
  ).href,
  partlyCloudy: new URL(
    "../../assets/images/icon-partly-cloudy.webp",
    import.meta.url,
  ).href,
  rain: new URL(
    "../../assets/images/icon-rain.webp",
    import.meta.url,
  ).href,
  snow: new URL(
    "../../assets/images/icon-snow.webp",
    import.meta.url,
  ).href,
  storm: new URL(
    "../../assets/images/icon-storm.webp",
    import.meta.url,
  ).href,
  sunny: new URL(
    "../../assets/images/icon-sunny.webp",
    import.meta.url,
  ).href,
});

// Figma variable degerlerinin kod karsiligi. Deger karsilastirmak veya inline style
// gerektiren bir durumda bu ham token tablosunu kullanabilirsin.
export const figmaTokens = Object.freeze({
  frame: {
    mobile: { width: 375, height: 2413, contentWidth: 343 },
    tablet: { width: 768, height: 1845, contentWidth: 720 },
    desktop: { width: 1440, height: 1158, contentWidth: 1216 },
  },
  color: {
    neutral0: "#FFFFFF",
    neutral100: "#F6F5F1",
    neutral200: "#D4D3D9",
    neutral300: "#ACACB7",
    neutral600: "#3C3B5E",
    neutral700: "#302F4A",
    neutral800: "#262540",
    neutral900: "#02012C",
    blue500: "#4658D9",
    blue700: "#2B1B9C",
    orange500: "#FF820A",
  },
  spacing: {
    0: "0px",
    25: "2px",
    50: "4px",
    75: "6px",
    100: "8px",
    125: "10px",
    150: "12px",
    200: "16px",
    250: "20px",
    300: "24px",
    400: "32px",
    500: "40px",
    600: "48px",
    800: "64px",
    1000: "80px",
    1200: "96px",
    1400: "112px",
    1600: "128px",
    1800: "140px",
  },
  radius: {
    0: "0px",
    2: "2px",
    4: "4px",
    6: "6px",
    8: "8px",
    10: "10px",
    12: "12px",
    16: "16px",
    20: "20px",
    24: "24px",
    full: "999px",
  },
  gradient: "linear-gradient(94deg, #4658D9 -8.59%, #2B1B9C 98.38%)",
  shadow: "0 8px 16px 0 rgba(2, 1, 44, 0.32)",
});

// Background gorseli responsive olarak CSS variable uzerinden degisir.
// Kullanim: className={figmaTailwing.weather.todayCard}
//           style={figmaInlineStyles.todayCard}
export const figmaInlineStyles = Object.freeze({
  todayCard: {
    "--weather-today-small": `url(${figmaAssets.todaySmall})`,
    "--weather-today-large": `url(${figmaAssets.todayLarge})`,
  },
});

export const figmaTailwing = Object.freeze({
  // SAYFA VE RESPONSIVE FRAME
  layout: {
    page: "min-h-screen bg-[#02012C] font-['DM_Sans'] text-white antialiased",
    canvas:
      "mx-auto w-full max-w-[1440px] px-4 pb-12 pt-4 md:px-6 md:pb-20 md:pt-6 min-[1440px]:px-[112px] min-[1440px]:pt-12",
    header: "flex h-[33px] w-full items-center justify-between md:h-[43px]",
    logo: "h-7 w-[138px] object-contain md:h-10 md:w-[197px]",
    title:
      "mx-auto w-full max-w-[343px] text-center font-['Bricolage_Grotesque'] text-[52px] font-bold leading-[1.2] md:max-w-[482px] min-[1440px]:max-w-[731px]",
    main:
      "mx-auto mt-12 w-full max-w-[343px] md:max-w-[720px] min-[1440px]:mt-16 min-[1440px]:max-w-[1216px]",
    content:
      "mt-8 grid w-full grid-cols-1 gap-8 min-[1440px]:mt-12 min-[1440px]:grid-cols-[800px_384px]",
    leftColumn: "flex min-w-0 flex-col gap-8 min-[1440px]:gap-12",
    rightColumn: "min-w-0 w-full",
  },

  // FIGMA TYPOGRAPHY PRESET'LERI
  typography: {
    preset1:
      "font-['DM_Sans'] text-[96px] font-semibold italic leading-none tracking-[-0.02em]",
    preset2:
      "font-['Bricolage_Grotesque'] text-[52px] font-bold leading-[1.2]",
    preset3: "font-['DM_Sans'] text-[32px] font-light leading-none",
    preset4: "font-['DM_Sans'] text-[28px] font-bold leading-[1.2]",
    preset5: "font-['DM_Sans'] text-[20px] font-semibold leading-[1.2]",
    preset5Medium: "font-['DM_Sans'] text-[20px] font-medium leading-[1.2]",
    preset6: "font-['DM_Sans'] text-[18px] font-medium leading-[1.2]",
    preset7: "font-['DM_Sans'] text-[16px] font-medium leading-[1.2]",
    preset8: "font-['DM_Sans'] text-[14px] font-medium leading-[1.2]",
    muted: "text-[#D4D3D9]",
    subtle: "text-[#ACACB7]",
  },

  // ARAMA
  search: {
    form:
      "relative mx-auto mt-12 flex w-full flex-col gap-3 md:flex-row md:gap-4 min-[1440px]:mt-16 min-[1440px]:w-[656px]",
    fieldWrapper: "relative min-w-0 flex-1",
    icon:
      "pointer-events-none absolute left-6 top-1/2 size-5 -translate-y-1/2",
    input:
      "h-14 w-full rounded-[12px] bg-[#262540] py-4 pl-[60px] pr-6 text-[20px] font-medium leading-[1.2] text-white outline-none placeholder:text-[#D4D3D9] hover:bg-[#302F4A] focus-visible:shadow-[0_0_0_3px_#02012C,0_0_0_5px_#FFFFFF]",
    button:
      "inline-flex h-14 items-center justify-center rounded-[12px] bg-[#4658D9] px-6 text-[20px] font-medium leading-[1.2] text-white hover:bg-[#2B1B9C] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_#02012C,0_0_0_5px_#4658D9] md:w-[114px]",
    dropdown:
      "absolute left-0 top-[64px] z-30 flex h-[184px] w-full flex-col items-start gap-1 rounded-[12px] border border-[#302F4A] bg-[#262540] p-2 shadow-[0_8px_16px_0_rgba(2,1,44,0.32)] md:w-[calc(100%_-_130px)] min-[1440px]:w-[526px]",
    option:
      "flex h-[39px] w-full items-center gap-[10px] rounded-[8px] px-2 py-[10px] text-left text-[16px] font-medium leading-[1.2] text-white hover:bg-[#302F4A] focus-visible:bg-[#302F4A] focus-visible:outline-none",
    progress:
      "absolute left-0 top-[64px] z-30 flex h-[55px] w-full items-center gap-[10px] rounded-[12px] border border-[#302F4A] bg-[#262540] p-2 text-[16px] font-medium leading-[1.2] text-white md:w-[calc(100%_-_130px)] min-[1440px]:w-[526px]",
  },

  // UST MENULER VE DROPDOWN DURUMLARI
  controls: {
    unitsButton:
      "inline-flex h-[33px] w-[89px] items-center justify-center gap-[6px] rounded-[6px] bg-[#262540] px-[10px] py-2 text-[14px] font-medium leading-[1.2] text-white hover:bg-[#302F4A] focus-visible:bg-[#302F4A] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_#02012C,0_0_0_5px_#FFFFFF] md:h-[43px] md:w-[119px] md:gap-[10px] md:rounded-[8px] md:px-4 md:py-3 md:text-[16px]",
    unitsIcon: "size-[14px] shrink-0 md:size-4",
    unitsChevron:
      "h-[14px] w-[9px] shrink-0 md:h-[18px] md:w-3",
    chevron: "h-[18px] w-3 shrink-0",
    dayButton:
      "inline-flex h-[37px] w-[140px] shrink-0 items-center justify-between gap-3 rounded-[8px] bg-[#3C3B5E] px-4 py-2 text-[16px] font-medium leading-[1.2] text-white hover:bg-[#302F4A] focus-visible:bg-[#302F4A] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_#262540,0_0_0_3px_#FFFFFF]",
    menu:
      "z-40 flex h-[412px] w-[214px] flex-col items-start gap-1 rounded-[12px] border border-[#3C3B5E] bg-[#262540] px-2 py-[6px] shadow-[0_8px_16px_0_rgba(2,1,44,0.32)]",
    switchButton:
      "flex h-[39px] w-full items-center rounded-[8px] px-2 py-[10px] text-left text-[16px] font-medium leading-[1.2] text-white hover:bg-[#302F4A] focus-visible:bg-[#302F4A] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_#262540,0_0_0_3px_#FFFFFF]",
    menuGroup:
      "m-0 flex w-full min-w-0 flex-col items-start gap-2 border-0 p-0",
    menuOptions: "flex w-full flex-col items-start gap-1",
    menuItem:
      "flex h-[39px] w-full cursor-pointer items-center gap-[10px] rounded-[8px] px-2 py-[10px] text-[16px] font-medium leading-[1.2] text-white hover:bg-[#302F4A] has-[:checked]:bg-[#302F4A] focus-within:outline-none focus-within:shadow-[0_0_0_2px_#262540,0_0_0_3px_#FFFFFF]",
    radio: "peer sr-only",
    checkmark:
      "invisible ml-auto h-[11px] w-[14px] shrink-0 peer-checked:visible",
    menuLabel:
      "h-[23px] w-full px-2 pt-[6px] text-[14px] font-medium leading-[1.2] text-[#ACACB7]",
    menuDivider: "h-px w-full shrink-0 bg-[#3C3B5E]",
  },

  // BUGUNUN HAVA KARTI
  weather: {
    group: "flex flex-col gap-5 min-[1440px]:gap-8",
    todayCard:
      "relative isolate h-[286px] w-full overflow-hidden rounded-[20px] bg-cover bg-center [background-image:var(--weather-today-small)] md:[background-image:var(--weather-today-large)]",
    location:
      "absolute left-1/2 top-[41px] flex w-[219px] -translate-x-1/2 flex-col items-center gap-3 text-center md:left-6 md:top-[109px] md:w-auto md:translate-x-0 md:items-start md:text-left",
    locationName: "text-[28px] font-bold leading-[1.2] text-white",
    date: "text-[18px] font-medium leading-[1.2] text-white opacity-80",
    temperature:
      "absolute bottom-[41px] left-1/2 flex h-[120px] w-[294px] -translate-x-1/2 items-center justify-end gap-5 md:bottom-auto md:left-auto md:right-6 md:top-[83px] md:translate-x-0",
    temperatureIcon: "size-[120px] shrink-0 object-contain",
    temperatureValue:
      "w-[154px] text-center font-['DM_Sans'] text-[96px] font-semibold italic leading-none tracking-[-0.02em] text-white",
    detailGrid:
      "grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 min-[1440px]:gap-6",
    detailCard:
      "flex h-[118px] flex-col justify-between rounded-[12px] border border-[#3C3B5E] bg-[#262540] p-5",
    detailLabel: "text-[18px] font-medium leading-[1.2] text-[#D4D3D9]",
    detailValue: "text-[32px] font-light leading-none text-white",
  },

  // GUNLUK TAHMIN
  daily: {
    section: "flex flex-col gap-5",
    title: "text-[20px] font-semibold leading-[1.2] text-white",
    grid: "grid grid-cols-3 gap-4 md:grid-cols-7",
    card:
      "flex h-[165px] min-w-0 flex-col items-center justify-between rounded-[12px] border border-[#3C3B5E] bg-[#262540] px-[10px] py-4",
    day: "text-[18px] font-medium leading-[1.2] text-white",
    icon: "size-[60px] object-contain",
    range:
      "flex h-[19px] w-full items-center justify-between text-[16px] font-medium leading-[1.2] text-white",
    low: "text-[#D4D3D9]",
  },

  // SAATLIK TAHMIN
  hourly: {
    panel:
      "relative h-[685px] overflow-hidden rounded-[20px] bg-[#262540] px-4 py-5 md:h-[693px] md:p-6",
    header: "relative flex h-[37px] items-center justify-between",
    title: "text-[20px] font-semibold leading-[1.2] text-white",
    dayMenu:
      "absolute right-0 top-[45px] z-30 flex w-[214px] flex-col gap-1 rounded-[12px] border border-[#3C3B5E] bg-[#262540] p-2 shadow-[0_8px_16px_0_rgba(2,1,44,0.32)]",
    dayMenuOption:
      "flex h-[39px] w-full items-center rounded-[8px] px-2 py-[10px] text-left text-[16px] font-medium leading-[1.2] text-white hover:bg-[#302F4A] focus-visible:bg-[#302F4A] focus-visible:outline-none",
    rows: "mt-4 flex flex-col gap-4",
    row:
      "flex h-[60px] items-center rounded-[8px] border border-[#3C3B5E] bg-[#302F4A] py-[10px] pl-3 pr-4",
    icon: "size-10 shrink-0 object-contain",
    time: "ml-2 flex-1 text-[20px] font-medium leading-[1.2] text-white",
    temperature: "text-[16px] font-medium leading-[1.2] text-white",
    scrollbar:
      "absolute right-0 top-[263px] h-[262px] w-1 rounded-[12px] border border-[#3C3B5E] bg-[#302F4A]",
  },

  // YUKLEME, BOS SONUC VE API HATASI
  states: {
    skeleton: "animate-pulse rounded-[12px] bg-[#302F4A]",
    loadingCard:
      "flex h-[286px] items-center justify-center rounded-[20px] bg-[#262540] text-[18px] font-medium leading-[1.2] text-white",
    loadingContent: "flex flex-col items-center gap-[14px]",
    loadingIcon: "size-4 animate-spin",
    noResults:
      "mt-12 text-center text-[28px] font-bold leading-[1.2] text-white",
    errorLayout:
      "mx-auto flex w-full max-w-[1216px] flex-col items-center gap-6 pt-10 text-center",
    errorIcon: "h-[50px] w-[42px] object-contain",
    errorTitle:
      "font-['Bricolage_Grotesque'] text-[52px] font-bold leading-[1.2] text-white",
    errorMessage:
      "max-w-[554px] text-[20px] font-medium leading-[1.2] text-[#D4D3D9]",
    retryButton:
      "inline-flex h-[43px] items-center justify-center gap-[10px] rounded-[8px] bg-[#262540] px-4 py-3 text-[16px] font-medium leading-[1.2] text-white hover:bg-[#302F4A] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_#02012C,0_0_0_5px_#FFFFFF]",
  },

  // ORIJINAL FIGMA EXPORT'LARINDA IKON BOYUTLARI SABITTIR.
  asset: {
    uiIcon: "block size-4 shrink-0 object-contain",
    searchIcon: "block size-5 shrink-0 object-contain",
    weatherSmall: "block size-10 shrink-0 object-contain",
    weatherMedium: "block size-[60px] shrink-0 object-contain",
    weatherLarge: "block size-[120px] shrink-0 object-contain",
  },
});

// Mevcut stil toplayicisinin bekledigi semantik ad.
export const weatherAppStyles = figmaTailwing;

export default figmaTailwing;

/*
 * KISA KULLANIM REHBERI
 *
 * 1) Dogrudan stil haritasi:
 *    import figmaTailwing from "./styles/figmaStlyes/figmaTailwing.js";
 *    className={figmaTailwing.search.input}
 *
 * 2) Projedeki toplu stil export'u:
 *    import { styles } from "./styles/defaults/index.js";
 *    className={styles.figma.daily.card}
 *
 * 3) Bir Figma stilini ezmeden ek sinif birlestirmek:
 *    className={cn(styles.figma.daily.card, "opacity-60")}
 *
 * 4) Orijinal export kullanmak:
 *    src={figmaAssets.logo}
 *
 * 5) Responsive bugun karti background'i:
 *    className={figmaTailwing.weather.todayCard}
 *    style={figmaInlineStyles.todayCard}
 *
 * Bu ornekler yalnizca stil baglama seklini gosterir; dosya herhangi bir
 * React component hiyerarsisi, state yapisi veya veri modeli onermiyor.
 */
