export const flexStyles = {
  row: "flex items-center",
  column: "flex flex-col",
  center: "flex items-center justify-center",
  between: "flex items-center justify-between",
  wrap: "flex flex-wrap items-center",
  responsiveRow: "flex flex-col md:flex-row md:items-center",
};

// Kullanım: <div className={styles.flex.between}>...</div>
// Sonuç: Elemanları yan yana, dikeyde ortalı ve iki uca yaslı gösterir.

// Kullanım: <div className={styles.flex.responsiveRow}>...</div>
// Sonuç: Mobilde alt alta, tablet ve üstünde yan yana gösterir.
