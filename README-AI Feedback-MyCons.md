##### Teknik zayıf noktalar

- - dl, dt, dd gibi yeni etiketler
  - weatherTypes'ları objeye çevirmek . temel bi obje tanımı `figmaAssets[weatherTypes[daily.weatherCode]]`
  - reducer genel kullanımı
  - tanstack kurulumunda veriyi almak, hata ve loading yönetimi
- Accesibility, yeni html etiketleri, orchestirate fonksiyon (fetch servis icin) ve dropdown menu mantgi
- Search suggestion logic akışı, bazı object destruture mapping modelleri.
- search-no found akışı çok karışık
- direk search api kuurlumu ve useEffect ve query ile bu datayı alıp işlememiz çok karışıktı. search component'ında yaptıklarımı practice drill yapmalıyım
- useEffect ve useRefs pratiğine ihtiyacım var
- error handling

Bu projeyi bir öğrenme projesi olarak tamamlanmış kabul edebiliriz. Ortaya yalnızca API’den veri gösteren bir hava durumu uygulaması çıkmadı; debounce, autocomplete, koordinat bazlı sorgu, birim dönüşümleri, hata/boş/yükleme durumları ve erişilebilir dropdown davranışları olan ciddi bir React projesi çıktı.

## Genel seviyen

React tarafında “temelleri bilen başlangıç seviyesi”ni geçmiş durumdasın. Seni şu anda erken–orta intermediate seviyede değerlendiririm.

Güçlü olduğun yer çalışan parçalar üretmek. Bir sonraki seviyeye geçmeni sağlayacak konu ise bu parçaların state sözleşmesini kodlamadan önce tasarlamak.

## Güçlü yönlerin

### 1. Problemin nedenini anlamaya çalışıyorsun

Bir fonksiyonun gereksiz olduğunu düşündüğünde “zaten selectedLocation üzerinden ulaşıyoruz, buna neden ihtiyacımız var?” diye sorguladın. Bu önemli bir mühendislik refleksi. Her abstraction’ı sorgulamadan kabul etmiyorsun.

### 2. API katmanını UI’dan ayırabildin

Geocoding ve weather isteklerini servis katmanında tuttun. Ham API verisini component’lere dağıtmak yerine `processWeatherData` ile uygulamanın kullanacağı modele dönüştürdün.

Bu, portfolyoda anlatılabilecek iyi bir karar:

```
Harici API modeli → servis/normalizasyon katmanı → UI modeli
```

### 3. Autocomplete veri akışını kurdun

Son durumda akış mantıklı:

```
Input
→ debounce
→ suggestion query
→ location seçimi
→ latitude/longitude
→ weather query
→ normalize edilmiş weather verisi
→ UI
```

Özellikle weather query key’inin seçilen koordinatlarla kurulması doğru bir React Query yaklaşımı.

### 4. UI durumlarını ayırmayı öğrendin

Başlangıçta API hatasıyla “sonuç bulunamadı” aynı akışta karışıyordu. Proje sonunda şu ayrımı kurabildin:

- Loading
- API error
- No results
- Suggestions
- Weather success

Bu ayrım gerçek uygulamalarda çok önemlidir.

### 5. Erişilebilirliği ciddiye aldın

Projede yalnızca `aria-label` ekleyip geçmedin:

- Combobox ilişkileri
- Listbox ve option modeli
- Aktif option
- Arrow Up/Down
- Enter
- Escape
- Focus restoration
- Dışarı tıklayarak kapatma

gibi gerçek etkileşim davranışları üzerinde çalıştın. Junior portfolyolarının çoğunda bu seviye erişilebilirlik düşüncesi bulunmuyor.

### 6. Component organizasyonun genel olarak anlaşılır

`SearchForm`, `WeatherView`, `CurrentWeather`, `DailyForecast`, `HourlyForecast`, `UnitToggle`, servis ve reducer ayrımları makul. Gereksiz bir global state kütüphanesi eklememen de doğru tercih.

### 7. Zorlandığında projeyi bırakmadın

Bu küçümsenecek bir özellik değil. Autocomplete akışı birkaç kez karışmasına rağmen problemi küçük parçalara ayırarak çalışır hale getirdin. Gerçek geliştirme süreci çoğunlukla tam olarak böyle ilerler.

## Zayıf ve geliştirilmesi gereken yönlerin

### 1. State sözleşmesini koddan önce tasarlamıyorsun

En fazla zorlandığın konu buydu. `isNoResults`, `selectedSuggestion`, `isSearchOpen`, `inputValue` ve query state’leri aynı anda devreye girince hangi state’in neyi temsil ettiği karıştı.

Örneğin bir noktada:

- Aynı `isNoResults` ismi iki kez tanımlandı.
- Input değişirken no-results önce kapatılıp hemen tekrar açıldı.
- Henüz tamamlanmamış query, “sonuç bulunamadı” olarak yorumlandı.
- Seçim yapılmaması ile gerçekten sonuç bulunmaması birbirine karıştı.

Bunu geliştirmek için yeni bir özellikten önce şu dört soruyu yaz:

1. Bu state’in sahibi hangi component?
2. Başlangıç değeri ne?
3. Hangi olay bu değeri değiştirir?
4. Hangi olay eski değeri temizler?

Ayrıca mümkün olduğunca “kaynak state” ile “türetilmiş değer” ayrımını koru. Her boolean’ın ayrıca state olması gerekmez.

### 2. Guard condition’larını fazla birleştiriyorsun

Şu tür ifadelerde zorlandın:

```
suggestions.length === 0 || !suggestionsQuery.isSuccess
```

Burada “boş sonuç”, “yükleniyor”, “çalışmadı” ve “hata verdi” birbirinden farklı durumlar olmasına rağmen tek koşula sıkıştırılmıştı.

Daha iyi alışkanlık:

```
Önce başarılı yol
Sonra henüz hazır olmayan durum
Sonra hata
Sonra boş sonuç
```

Her guard mümkünse tek bir kavramı temsil etsin.

### 3. Aynı anda çok fazla katmanı değiştirebiliyorsun

Bazı aşamalarda servis fonksiyonu, App query’si, SearchForm state’i ve JSX aynı anda değişti. Bir problem çıktığında hangi değişikliğin sebep olduğunu görmek zorlaştı.

Daha profesyonel çalışma biçimi dikey ve küçük adımlardır:

1. API fonksiyonunu yaz ve dönen sonucu incele.
2. Query’yi bağla.
3. State sözleşmesini doğrula.
4. En basit JSX’i render et.
5. Etkileşimi ekle.
6. Stil ve erişilebilirliği tamamla.

### 4. Çalışan kodu zaman zaman tamamlanmış akışla karıştırıyorsun

Bir şey ekranda çalışınca “neden ek fonksiyon yazıyoruz?” diye sorduğun birkaç nokta oldu. Bu itiraz bazen haklıydı; ancak bazen mevcut çözüm yalnızca happy path’i karşılıyordu.

Profesyonel kontrolde şunları ayrı ayrı denemelisin:

- Boş input
- Çok hızlı yazma
- İstek sürerken submit
- Sonuç bulunmaması
- API hatası
- Aynı konumu tekrar arama
- Mouse kullanmadan işlem
- Dropdown açıkken Escape
- Yeni veri gelirken eski state’in kalması

### 5. Kopyala-yapıştır bağımlılığı oluşabiliyor

Autocomplete’ın ortasında “öğrenmekten çok kopyala-yapıştır oldu” demen doğru bir öz değerlendirmeydi. Bu, yetenek eksikliği değil; zihinsel kapasitenin aynı anda çok fazla state ve async durum taşımaya çalışmasının sonucu.

Bunu azaltmak için aldığın her kod parçasında şunları yap:

- Her state’in amacını kendi cümlenle yaz.
- Bir koşulu değiştirmeden önce beklediğin sonucu tahmin et.
- Kodu kapatıp akışı sözlü olarak yeniden anlat.
- Bir sonraki projede aynı özelliğin ilk sürümünü yardım almadan kur.

### 6. Test ve bitirme disiplini geliştirilmeli

Projede otomatik test bulunmuyor. README de portfolyo teslim seviyesinde değil. Kod yazmak kadar projeyi kapatma aşaması da profesyonel beceridir.

Özellikle şu alanlar test için uygun:

- Unit reducer
- Sıcaklık/rüzgâr/yağış dönüşümleri
- Weather verisi normalizasyonu
- Boş suggestion sonucu
- Suggestion seçme ve submit
- Escape ve Arrow tuşları

## Teknik olarak kalan borçlar

Projeyi tamamlanmış kabul etsek bile bunları dürüstçe teknik borç olarak görmelisin:

- İlk aramadan önce `WeatherView` render sözleşmesi
- Suggestion API hatasının kullanıcıya gösterilmesi
- Hourly forecast içindeki sabit saat dilimi
- Yeni konumda eski `selectedDate` state’i
- Bazı yorumlanmış eski kodlar
- README’nin tamamlanması
- Test eksikliği

Bunlar projenin başarısız olduğu anlamına gelmez. Üretim kalitesine geçerken karşılaşacağın ikinci tur işlerdir.

## İşe alım ve portfolyo açısından

Bu proje düzgün README, ekran görüntüsü, canlı demo ve kısa teknik açıklamayla junior portfolyosunda yer alabilecek seviyede.

Mülakatta “hava durumu uygulaması yaptım” demek yerine şöyle anlatmalısın:

> Open-Meteo geocoding ve forecast API’lerini kullandım. Kullanıcının yazdığı metni debounce ederek location suggestion sorgusu çalıştırdım. Seçilen suggestion’ın koordinatlarını ikinci query’nin key ve fetch parametreleri olarak kullandım. Ham API verisini servis katmanında UI modeline dönüştürdüm. Loading, empty, API error ve success durumlarını ayırdım. Autocomplete için combobox/listbox ARIA ilişkilerini ve klavye navigasyonunu uyguladım.

Bu anlatım, sadece ekranı değil veri ve durum mimarisini de düşündüğünü gösterir.

## Bundan sonra nasıl gelişmelisin?

Bir sonraki 2–3 projede özellikle şunlara odaklan:

1. Koddan önce küçük bir state-transition tablosu hazırla.
2. Her özelliği tek bir dikey akış halinde tamamla.
3. React Testing Library ve Vitest öğren.
4. Async UI için idle/loading/success/empty/error ayrımını baştan kur.
5. Aynı problemi önce kendin çöz; sonra alternatif çözümle karşılaştır.
6. Her proje sonunda README, deployment, test ve temizlik turu yap.
7. Bir sonraki autocomplete veya dropdown’ı bu projeye bakmadan yeniden uygula.

## Nihai değerlendirmem

En güçlü tarafın merakın, sorgulaman ve vazgeçmemen. En zayıf tarafın ise state ve async akışları kodlamadan önce yeterince modellememen.

Teknik kapasiten var. Şu anda ihtiyacın daha fazla React özelliği öğrenmekten çok, bildiklerini daha kontrollü ve sistematik kullanmak. Bu alışkanlığı geliştirirsen karmaşık component’lerde yaşadığın “beyin patlaması” ciddi biçimde azalır.

Bu proje seni geliştirmiş. En önemlisi de yalnızca weather app yazmayı değil; loading, error, empty, selection ve async state’lerin birbirinden neden ayrılması gerektiğini öğrenmiş oldun.

Haklısın; önceki “junior portfolyosunda yer alabilecek seviyede” değerlendirmem fazla yumuşaktı.

Net cevap: Bu proje 2026’da tek başına güçlü veya ayırt edici bir portfolyo projesi değil. İyi bir öğrenme projesi ve destekleyici portfolyo parçası olabilir; fakat “flagship project” olarak yetersiz kalır.

## Neden çıta yükseldi?

HackerRank’in 2025 raporunda geliştiricilerin %97’sinin AI asistanı kullandığı, erken kariyer işe alımlarının geride kaldığı ve geliştiricilerin %74’ünün iş bulmakta zorlandığı belirtiliyor. AI ile üretilmiş başvuruların artması da adayları ayırt etmeyi zorlaştırıyor. Dolayısıyla çalışan bir React arayüzü artık eskisi kadar güçlü bir sinyal değil. [HackerRank Developer Skills Report 2025](https://www.hackerrank.com/reports/developer-skills-report-2025)

GitHub’ın 2025 verilerinde TypeScript en çok kullanılan dil haline gelmiş ve milyonlarca AI projesi bulunuyor. Bu ortamda JavaScript ile yapılmış standart bir API uygulaması teknoloji tercihi bakımından da öne çıkmıyor. [GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)

Türkiye’deki güncel junior ilanlarından bazıları React yanında TypeScript, Next.js, form doğrulama, state araçları ve test otomasyonu bekliyor. Bunlar piyasanın tamamını temsil eden istatistikler değil, ancak yönü gösteriyor: [WinnowPro ilanı](https://tr.linkedin.com/jobs/view/junior-frontend-developer-at-winnowpro-4129193639), [Radity test otomasyonu ilanı](https://tr.linkedin.com/jobs/view/junior-frontend-developer-typescript-%E2%80%93-test-automation-track-at-radity-4238226714), [Assign To Me ilanı](https://tr.linkedin.com/jobs/view/junior-frontend-developer-react-next-js-at-assign-to-me-4300881046).

## Bu proje gerçekte ne kanıtlıyor?

Olumlu sinyaller veriyor:

- React component yapısı kurabiliyorsun.
- REST API ve async veri akışıyla çalışabiliyorsun.
- TanStack Query, debounce ve coordinate-based query kullanmışsın.
- API verisini UI modeline dönüştürmüşsün.
- Responsive tasarım uygulamışsın.
- Loading, error ve empty state kavramlarını tanıyorsun.
- Erişilebilir combobox ve dropdown davranışları üzerinde çalışmışsın.

Fakat 2026’da bunların önemli bir kısmını AI kısa sürede üretebiliyor. İşveren açısından asıl soru artık yalnızca “bunu yapabiliyor mu?” değil:

> Bu kişi gereksinimleri kendisi modelleyebilir, AI çıktısını denetleyebilir, hataları bulabilir, test yazabilir ve sistem büyüdüğünde doğru kararlar verebilir mi?

Projede en çok zorlandığın yer de tam olarak bu soruya temas ediyor: state sözleşmesi ve async durum modellemesi. Üstelik autocomplete erişilebilirlik kısmının önemli bölümü doğrudan benim tarafımdan uygulandı. Dolayısıyla sen her satırını açıklayamıyor ve benzerini bağımsız şekilde yeniden kuramıyorsan, o bölüm henüz senin yetkinliğini güçlü biçimde kanıtlamaz.

## Mevcut haliyle portfolyo konumu

Ben şöyle sınıflandırırım:

- Öğrenme projesi: başarılı
- GitHub’da gösterilecek proje: evet
- Portfolyoda destekleyici ikinci/üçüncü proje: temizlik sonrası evet
- Ana/öne çıkarılan proje: hayır
- Tek başına işe aldıracak proje: hayır
- Diğer adaylardan belirgin şekilde ayıracak proje: hayır

Weather app, todo app ve basit e-commerce arayüzleri artık çok yaygın. Frontend Mentor tasarımını kullanman da ürün/tasarım kararlarının sana ait olduğunu göstermiyor.

## Bunu daha güçlü hale getirmek için

Bu projeye sonsuza kadar özellik eklemek doğru olmaz. Önce profesyonel bitirme turu yapılabilir:

- TypeScript’e geçirmek
- Vitest ve React Testing Library testleri eklemek
- Autocomplete için Playwright klavye testi yazmak
- Suggestion API hata durumunu tamamlamak
- Bilinen hourly state sorunlarını düzeltmek
- CI içinde lint, test ve build çalıştırmak
- Canlı deployment hazırlamak
- README’yi gerçek bir teknik vaka çalışmasına çevirmek
- Mimari kararları ve trade-off’ları açıklamak
- AI’dan nerede, nasıl yararlandığını dürüstçe belgelemek

Bunlar projeyi kaliteli bir destekleyici parçaya dönüştürür. Fakat onu hâlâ benzersiz bir ürün yapmaz.

## Asıl güçlü portfolyo projen nasıl olmalı?

Sonraki projen gerçek bir kullanıcı problemini çözmeli ve daha fazla mühendislik yüzeyi göstermeli:

- Sana ait ürün fikri ve gereksinimler
- TypeScript
- Backend ve veritabanı
- Kimlik doğrulama ve yetkilendirme
- CRUD işlemleri
- Form doğrulama
- Arama, filtreleme, sıralama ve sayfalama
- Optimistic update veya cache invalidation
- Erişilebilirlik
- Unit, integration ve E2E testleri
- CI/CD
- Hata takibi ve loglama
- Gerçek deployment
- Performans ve güvenlik kararları

AI özelliği eklemek zorunlu değil. Sırf güncel görünmek için hava durumu sohbet botu eklemek projeyi otomatik olarak güçlendirmez. Stack Overflow’un 2025 araştırması AI kullanımının yaygınlaştığını, fakat profesyonel geliştiricilerin büyük bölümünün tüm uygulamayı yalnız prompt’larla üretmeyi çalışma biçimi olarak görmediğini gösteriyor. Değer hâlâ doğrulama, muhakeme ve mühendislik sahipliğinde. [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/)

## Düzeltilmiş nihai yargım

Bu proje senin geliştiğini gösteriyor fakat 2026 piyasasında seni öne çıkaracak kadar güçlü değil. Portfolyodan atılacak kadar değersiz de değil.

En doğru kullanım:

> “React ve istemci tarafı veri akışını öğrendiğim, erişilebilir autocomplete geliştirdiğim sağlam bir frontend projesi.”

Ama portfolyonun merkezine şunu koymalısın:

> “Gerçek bir problemi uçtan uca çözdüğüm, test edilmiş, deploy edilmiş ve mimari kararlarını bağımsız olarak savunabildiğim ürün.”

Dolayısıyla önceki değerlendirmemi şöyle düzeltiyorum: Proje portfolyoya girebilir, fakat mevcut haliyle portfolyonun seni işe aldıran veya farklılaştıran parçası olmamalı.

Evet, uygun. Hatta bu projeye daha fazla özellik eklemek yerine burada bırakıp ortaya çıkan eksikleri ayrı ve küçük çalışmalarla hedeflemek daha verimli olur.

Yalnız “tamamen yetkin hissetmek” biraz yanıltıcı olabilir. His yerine ölçülebilir kriter kullan:

> Bir konuyu açıklayabiliyor, sıfırdan kurabiliyor, edge case’lerini test edebiliyor ve hata çıktığında yardım almadan teşhis edebiliyorsan yeterli yetkinliğe ulaşmışsındır.

## Öncelik 1 — State modelleme

Bu projede en fazla çalışman gereken alan bu.

Çalışılacak konular:

- Kaynak state ve türetilmiş değer ayrımı
- State’in hangi component’e ait olduğuna karar verme
- State lifting
- Controlled input
- Boolean state’lerin yaşam döngüsü
- Birbirine bağlı state’lerin senkronizasyonu
- `useState` ile `useReducer` arasında seçim
- UI’ı state machine olarak düşünme
- Idle, loading, success, empty ve error durumları

Pratik çalışmalar:

1. Sadece input, debounce ve sonuç listesinden oluşan küçük bir autocomplete yaz.
2. API yerine önce statik bir dizi kullan.
3. Durum tablosunu koddan önce kâğıda yaz.
4. Daha sonra aynı component’i API ile çalıştır.
5. Son olarak boolean’lar yerine tek bir durum modeli dene:

```
idle → typing → loading → success → empty → error
```

Yetkinlik ölçütü:

- Her state için “kim sahip?”, “ne zaman değişir?” ve “ne zaman temizlenir?” sorularını cevaplayabilmek.
- Aynı değeri hem state hem türetilmiş değişken olarak tanımlamamak.
- Component’i bir hafta sonra mevcut koda bakmadan tekrar kurabilmek.

## Öncelik 2 — Guard condition ve kontrol akışı

Bu projede birbirinden farklı durumları tek koşula sıkıştırdığın zamanlar oldu.

Çalışılacak konular:

- Early return
- Guard clause
- `&&` ve `||` farkının gerçek durumlar üzerinden analizi
- Truthy/falsy değerler
- Nullish değerler
- Başarılı yol ile hata yollarını ayırma
- Boolean ifadeleri isimlendirme

Pratik çalışmalar:

- Form submit için şu durumları ayrı ayrı modelle:
  - Boş input
  - Geçersiz input
  - İstek devam ediyor
  - API hatası
  - Boş sonuç
  - Geçerli seçim
- Her koşulun sonucunu kodu çalıştırmadan önce tahmin et.
- Uzun koşulları `isQueryCurrent`, `hasSelection`, `hasResults` gibi anlamlı değişkenlere ayır.

Yetkinlik ölçütü:

- Bir guard’ın yalnızca tek bir durumu temsil etmesi.
- Koşula bakınca hangi kullanıcı durumunu karşıladığını açıklayabilmek.

## Öncelik 3 — Async JavaScript

React Query’den bağımsız olarak temel async davranışına hâkim olmalısın.

Çalışılacak konular:

- Promise yaşam döngüsü
- `async/await`
- `try/catch`
- HTTP hatası ile network hatası arasındaki fark
- Paralel ve sıralı istekler
- Race condition
- `AbortController`
- Debounce
- Eski isteğin yeni sonucu ezmesi
- API verisi doğrulama

Pratik çalışmalar:

1. Vanilla JavaScript ile fetch yapan küçük bir sayfa oluştur.
2. Loading, error, empty ve success durumlarını elle yönet.
3. Kullanıcı yeni arama yaptığında önceki isteği iptal et.
4. Gecikmeli sahte API kullanarak race condition üret.
5. Bilerek 404, network failure ve geçersiz JSON senaryolarını test et.

Yetkinlik ölçütü:

- Bir async fonksiyonun ne döndürdüğünü adım adım anlatabilmek.
- “Sonuç yok” ile “istek başarısız” durumunu hiçbir zaman karıştırmamak.
- Hızlı aramalarda eski verinin neden ekrana gelmediğini açıklayabilmek.

## Öncelik 4 — TanStack Query

Bu projede temel kullanımını yaptın; ancak zihinsel modelini güçlendirmelisin.

Çalışılacak konular:

- Query key tasarımı
- `queryFn`
- `enabled`
- `isPending`, `isFetching`, `isLoading`, `isError`
- `staleTime`
- Cache davranışı
- `refetch`
- Retry
- Query cancellation
- Dependent query
- Placeholder ve initial data
- Mutation
- Cache invalidation
- Optimistic update

Pratik çalışmalar:

- Kullanıcı listesini getiren küçük bir uygulama yap.
- Kullanıcı seçildiğinde ikinci dependent query çalıştır.
- Aynı kullanıcıya dönünce cache davranışını gözlemle.
- Yeni kayıt ekleyip query invalidation uygula.
- Network panelinden hangi durumlarda istek çıktığını izle.

Yetkinlik ölçütü:

- `isPending` ve `isFetching` farkını örnekle anlatabilmek.
- Query key değiştiğinde cache’in neden değiştiğini açıklayabilmek.
- `useEffect` kullanmadan server state akışı kurabilmek.

## Öncelik 5 — `useEffect` disiplini

`useEffect`i “bir şey değişince bir şey yap” aracı olarak görmek tehlikelidir.

Çalışılacak konular:

- Effect’in gerçekten gerekli olduğu durumlar
- Event handler ile effect arasındaki fark
- Dependency listesi
- Cleanup
- Timer ve event listener temizliği
- Derived state’in effect ile tutulmaması
- Strict Mode davranışı

Pratik çalışmalar:

- Debounce hook’u yaz.
- Document event listener kullanan dropdown yaz.
- Component kaldırıldığında listener’ın temizlendiğini doğrula.
- Effect kullanılan bir değeri derived value’ya dönüştürmeyi dene.

Yetkinlik ölçütü:

- Her effect için bağlanılan harici sistemi söyleyebilmek.
- “Bunu event handler’da yapabilir miyim?” sorusunu alışkanlık haline getirmek.

## Öncelik 6 — Erişilebilir etkileşimler

Bu projede önemli deneyim kazandın, fakat uygulamanın bir kısmı hazır şekilde eklendi. Aynı yapıyı bağımsız kurmalısın.

Çalışılacak bileşenler:

- Combobox
- Listbox
- Menu button
- Dialog
- Tabs
- Accordion
- Focus management
- Klavye navigasyonu
- Screen reader isimlendirmesi

Pratik çalışmalar:

1. Statik verili autocomplete’ı sıfırdan yaz.
2. Mouse kullanmadan tamamını çalıştır.
3. Escape sonrası focus dönüşünü uygula.
4. Aktif option’ı `aria-activedescendant` ile yönet.
5. Sonrasında erişilebilir modal ve tabs component’i yaz.

Yetkinlik ölçütü:

- Component’in klavye sözleşmesini koddan önce yazabilmek.
- Yalnız Tab, Enter, Space, ok tuşları ve Escape ile kullanabilmek.
- ARIA eklediğin her özelliğin neden bulunduğunu açıklayabilmek.

## Öncelik 7 — Testing

Bir sonraki büyük sıçraman test yazmak olmalı.

Sıralama:

1. Vitest
2. Saf fonksiyon unit testleri
3. React Testing Library
4. API mocking için MSW
5. Playwright ile E2E

Bu projeden çıkarılabilecek test egzersizleri:

- Celsius–Fahrenheit dönüşümü
- km/h–mph dönüşümü
- Reducer action’ları
- Weather API normalizasyonu
- Boş input submit
- Boş suggestion sonucu
- Suggestion seçimi
- Arrow Up/Down
- Escape
- API error
- Retry

Yetkinlik ölçütü:

- Component’in iç implementation’ını değil kullanıcı davranışını test etmek.
- Başarılı yol dışında error ve empty senaryolarını da yazmak.
- Bir bug bulduğunda önce onu tekrar üreten test yazabilmek.

## Öncelik 8 — TypeScript

Bir sonraki React projen TypeScript olmalı.

Çalışılacak konular:

- Primitive ve object type’ları
- Union type
- Literal type
- Component prop type’ları
- Event type’ları
- API response type’ları
- Domain model ve API model ayrımı
- Reducer action discriminated union
- `unknown` ve type narrowing
- Generic’ler
- `null` ve `undefined` yönetimi

Özellikle şu modelleri ayrı tanımlamayı öğren:

```
GeoApiResponse
LocationSuggestion
SelectedLocation
WeatherApiResponse
ProcessedWeatherData
Query/UI status
```

Yetkinlik ölçütü:

- `any` kullanmadan benzer bir veri akışı kurabilmek.
- API modelinin neden doğrudan UI modeli olmadığını açıklayabilmek.
- Geçersiz state kombinasyonlarını type sistemiyle engellemek.

## Öncelik 9 — Debugging yöntemi

Debugging’i rastgele satır değiştirmekten sistemli deney yapmaya dönüştürmelisin.

Her bug’da şu sırayı uygula:

1. Beklenen davranışı yaz.
2. Gerçek davranışı yaz.
3. Hatanın tekrar üretim adımlarını çıkar.
4. Bir hipotez oluştur.
5. Yalnızca hipotezi doğrulayacak log veya breakpoint ekle.
6. Tek değişiklik yap.
7. Aynı senaryoyu tekrar test et.
8. İlgili edge case’leri kontrol et.

Kullanılacak araçlar:

- Browser Network paneli
- React DevTools
- TanStack Query Devtools
- Breakpoint
- Console trace
- Testler
- Git diff

Yetkinlik ölçütü:

- “Çalışmıyor” yerine hangi state’in hangi değerde yanlış olduğunu söyleyebilmek.
- Bir değişiklik yapmadan önce beklenen sonucu tahmin etmek.

## Öncelik 10 — Proje bitirme disiplini

Kodun çalışması projenin tamamlandığı anlamına gelmez.

Her proje sonunda kontrol et:

- Lint
- Test
- Production build
- Responsive kontroller
- Klavye testi
- README
- Canlı deployment
- Ekran görüntüsü
- Anlamlı commit geçmişi
- Bilinen teknik borçlar
- Kullanılmayan ve yorumlanmış kodlar
- Console temizliği
- CI

Yetkinlik ölçütü:

- Başka bir geliştiricinin projeyi yalnızca README ile çalıştırabilmesi.
- Her commit’in tek bir anlaşılır amacı olması.
- Bilinen eksikleri saklamak yerine belgelemek.

## Çalışma sırası

Hepsine aynı anda saldırma. Önerdiğim sıra:

1. State modelleme ve guard condition
2. Async JavaScript
3. `useEffect` disiplini
4. TanStack Query
5. Testing
6. TypeScript
7. Erişilebilir component’ler
8. Debugging ve proje bitirme alışkanlığı

İlk dört konu sağlamlaşmadan yeni ve büyük bir uygulamaya geçmek aynı karışıklıkları tekrar üretebilir. Ancak yalnızca konu çalışıp proje üretmemek de doğru olmaz. Küçük egzersizler ile gerçek proje arasında gidip gel.

## Bu projeyi kapatırken

Projeyi daha fazla büyütmene gerek yok. Şunları yapıp arşivleyebilirsin:

- Son durumu commit et.
- Bir tag oluştur.
- README’ye kısa bir “öğrendiklerim” ve “bilinen eksikler” bölümü ekle.
- Yapamadığın noktaları dürüstçe kaydet.
- Birkaç hafta sonra yalnızca `SearchForm`u sıfırdan yeniden yazmayı dene.

En değerli tekrar egzersizin bu olacak:

> Mevcut koda ve konuşmalarımıza bakmadan debounce, suggestion query, keyboard navigation, no-results ve error durumları bulunan küçük bir autocomplete oluştur.

Bunu bağımsız şekilde kurup test edebildiğinde, bu projede zorlandığın en önemli alanı gerçekten aşmış olacaksın.

- Servis tasarimini olustururken

  - Hata yonetimi sirasinda guard conditionlari. veriyi aldigimda ?. ile bos mu degil mi durumunu kontrol etmek. Bunlar ustune gucuk bi calisma gerekli.

  - new URL fonksiyonu ve bununla parametreleri set etmek

  - async fonksiyonlari once ikinci bi async fonksiyonda birlestirmek, sonra orkestra sync fonksiyonu yazip veriyi return etmek

- Header componenti olustururken

  - Seciliebilir buton dropdown'u olusturmak

    - fieldset ve legend etiketlerinin mantigi ve kullanimi

    - label ile input radio'nun kullanimi

    - defaultChecked degeri vermek
