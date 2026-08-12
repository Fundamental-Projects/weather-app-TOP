export const cardStyles = {
  default: "rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6",
  compact: "rounded-lg border border-gray-200 bg-white p-4 shadow-sm",
  panel: "rounded-xl bg-gray-100 p-5 md:p-6",
  interactive:
    "rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-6",
};

// Kullanım: <article className={styles.card.default}>...</article>
// Sonuç: Border, gölge, radius ve responsive padding içeren hazır kart verir.

// interactive: Tıklanabilir kartlarda hover sırasında hafif yükselme efekti verir.
