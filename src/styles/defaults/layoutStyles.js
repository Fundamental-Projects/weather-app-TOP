export const layoutStyles = {
  page: "min-h-screen bg-gray-50 text-gray-900",
  pageContent: "flex-1 py-8 md:py-12",
  centeredPage: "min-h-screen flex items-center justify-center bg-gray-50 p-4",
  appShell: "min-h-screen flex flex-col bg-gray-50 text-gray-900",
};

// Kullanım: <main className={styles.layout.page}>...</main>
// Sonuç: En az ekran yüksekliğinde, açık arka planlı standart bir sayfa oluşturur.

// Kullanım: <div className={styles.layout.centeredPage}>...</div>
// Sonuç: İçeriği ekranın yatay ve dikey merkezine yerleştirir.
