export const sectionStyles = {
  compact: "py-6 md:py-8",
  default: "py-10 md:py-16",
  spacious: "py-16 md:py-24",
};

// Kullanım: <section className={styles.section.default}>...</section>
// Sonuç: Mobilde daha küçük, geniş ekranlarda daha ferah dikey boşluk verir.

// compact: Dashboard ve sıkışık alanlar için.
// spacious: Landing page hero veya öne çıkan bölümler için.
