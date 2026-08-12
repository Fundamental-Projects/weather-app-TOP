export const navigationStyles = {
  bar: "border-b border-gray-200 bg-white",
  inner: "flex min-h-16 items-center justify-between gap-4",
  links: "flex items-center gap-1 sm:gap-2",
  link: "rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900",
  activeLink: "rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700",
};

// Kullanım: <nav className={styles.navigation.bar}>...</nav>
// Sonuç: Alt border'ı ve beyaz arka planı olan sade bir navbar oluşturur.

// Aktif sayfada link yerine activeLink kullanarak seçili görünüm elde edilir.
