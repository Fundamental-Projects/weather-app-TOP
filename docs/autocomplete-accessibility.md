# Autocomplete ve Dropdown Erişilebilirlik Değişiklikleri

Bu belge, arama autocomplete bileşenine ve ortak dropdown davranışına eklenen yükleme ve erişilebilirlik geliştirmelerini açıklar.

## Değiştirilen dosyalar

### `src/ui/SearchForm.jsx`

- Debounce süresi veya suggestion isteği devam ederken tasarımdaki **Search in progress** kutusu gösteriliyor.
- Input, ARIA combobox modeline geçirildi:
  - `role="combobox"`
  - `aria-autocomplete="list"`
  - `aria-expanded`
  - `aria-controls`
  - `aria-activedescendant`
- Suggestion listesi `role="listbox"`, her suggestion ise `role="option"` ve `aria-selected` kullanıyor.
- Aktif suggestion için `activeIndex` state'i eklendi.
- Klavye davranışları eklendi:
  - `ArrowDown`: Sonraki suggestion'a geçer ve listenin sonunda başa döner.
  - `ArrowUp`: Önceki suggestion'a geçer ve listenin başında sona döner.
  - `Enter`: Aktif suggestion'ı seçer.
  - `Escape`: Suggestion listesini kapatır ve aktif seçimi temizler.
- Formun dışına pointer ile basıldığında suggestion listesi kapanır.
- Mouse ile üzerine gelinen option, klavye ile aktif option kullanılan state ile eşitlenir.
- No-results submit kontrolü korunurken geçici yorumlanmış kodlar kaldırıldı.

### `src/hooks/useDropdown.js`

- Units ve hourly dropdown açıkken `Escape` tuşuna basılması artık:
  1. Dropdown'ı kapatır.
  2. Odağı dropdown'ı açan trigger butonuna geri taşır.
- Dışarı tıklayarak kapatma davranışında focus zorla değiştirilmez.

### `src/styles/figmaStlyes/figmaTailwing.js`

- Aktif autocomplete option için `search.optionActive` stili eklendi.
- Search progress ve suggestions katmanlarının mobil konumu, dikey formdaki Search butonunun altına gelecek şekilde düzenlendi.
- Tablet ve desktop konumu tasarımdaki `top: 64px` değerini koruyor.

## Durum sözleşmesi

- İki karakterden kısa input: suggestion sorgusu ve progress gösterilmez.
- Debounce bekleniyor veya güncel suggestion sorgusu fetch ediliyor: progress gösterilir.
- Güncel sorgu sonuç döndürdü: suggestion listesi gösterilir.
- Güncel sorgu başarıyla boş döndü: form submit edildiğinde `NoResultsState` gösterilir.
- Bir suggestion seçildi: koordinatlar `App` bileşenine gönderilir ve weather sorgusu çalışır.

## Doğrulama

Aşağıdaki kontroller değişikliklerden sonra çalıştırıldı:

- `npm run lint`
- `npm run build`

## Bu çalışmanın dışında kalanlar

- Suggestion API hatasının sayfa seviyesindeki `ErrorFallback` ile birleştirilmesi.
- İlk aramadan önce `WeatherView` bileşeninin tamamen gizlenmesi.
- Hourly forecast veri/saat seçimi backlog'u.
