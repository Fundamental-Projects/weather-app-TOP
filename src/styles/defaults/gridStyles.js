export const gridStyles = {
  default: "grid gap-4 md:gap-6",
  twoColumns: "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6",
  threeColumns: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6",
  fourColumns: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6",
  sidebar: "grid grid-cols-1 gap-6 lg:grid-cols-[16rem_1fr]",
};

// Kullanım: <div className={styles.grid.threeColumns}>...</div>
// Sonuç: Mobilde 1, küçük ekranda 2, geniş ekranda 3 kolon oluşturur.

// sidebar: Mobilde alt alta, geniş ekranda sabit sidebar + esnek içerik oluşturur.
