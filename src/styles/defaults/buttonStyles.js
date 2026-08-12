const sharedButton =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const buttonStyles = {
  primary: `${sharedButton} bg-blue-600 text-white hover:bg-blue-700`,
  secondary: `${sharedButton} border border-gray-300 bg-white text-gray-700 hover:bg-gray-50`,
  danger: `${sharedButton} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`,
  ghost: `${sharedButton} text-gray-700 hover:bg-gray-100`,
  fullWidth: "w-full",
};

// Kullanım: <button className={styles.button.primary}>Kaydet</button>
// Sonuç: Hover, focus ve disabled durumları hazır olan ana aksiyon butonu verir.

// Tam genişlik için: className={`${styles.button.primary} ${styles.button.fullWidth}`}
