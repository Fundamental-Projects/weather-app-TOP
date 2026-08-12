import { twMerge } from "tailwind-merge";

export function cn(...classes) {
  return twMerge(...classes);
}

// Kullanım: className={cn(styles.card.default, "bg-red-50 p-8")}
// Sonuç: Kartın diğer stilleri korunur; çakışan background ve padding değerleri yenileriyle değişir.

// Koşullu kullanım: className={cn(styles.button.primary, loading && "opacity-70")}
// Sonuç: Koşul doğruysa ekstra class eklenir; false/undefined değerler yok sayılır.
