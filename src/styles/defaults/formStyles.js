export const formStyles = {
  container: "w-full max-w-2xl mx-auto p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4",
  title: "text-xl font-semibold text-gray-800 mb-2",
  gridWrapper: "grid grid-cols-1 md:grid-cols-2 gap-4",
  fullWidthField: "md:col-span-2",
  label: "block text-sm font-medium text-gray-700 mb-1",
  input:
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
  select:
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100",
  textarea:
    "min-h-28 w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100",
  helpText: "mt-1 text-sm text-gray-500",
  errorText: "mt-1 text-sm font-medium text-red-600",
  checkboxRow: "flex items-center gap-2 text-sm text-gray-700",
  button:
    "inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
};

// Kullanım: <input className={styles.form.input} />
// Sonuç: Genişliği, border'ı, focus ve disabled durumları hazır bir input verir.

// Kullanım: <div className={styles.form.gridWrapper}>...</div>
// Sonuç: Form alanlarını mobilde alt alta, tabletten itibaren iki kolon gösterir.

// Eski kullanım da geçerlidir: import { formStyles } from "./styles/formStyles";
