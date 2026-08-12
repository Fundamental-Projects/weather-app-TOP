export const containerStyles = {
  default: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  content: "w-full max-w-4xl mx-auto px-4 sm:px-6",
  narrow: "w-full max-w-2xl mx-auto px-4 sm:px-6",
  fluid: "w-full px-4 sm:px-6 lg:px-8",
};

// Kullanım: <div className={styles.container.default}>...</div>
// Sonuç: İçeriği ortalar, genişliğini sınırlar ve responsive yatay boşluk ekler.

// content: Yazı ve form gibi orta genişlikteki içerikler için.
// narrow: Login, kayıt ve küçük form sayfaları için.
