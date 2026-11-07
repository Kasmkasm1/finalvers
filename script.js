const productsData = [
    // --- YATAKLAR (5 ÜRÜN) ---
    {
        id: "Çift Ped Yatak",
        category: "yatak",
        categoryTitle: "Yatak Koleksiyonu",
        title: "1. Çift Megaliza Yatak",
        tagline: "Omurga dostu 7 bölgeli pocket yay teknolojisi ve pamuklu örme kumaş.",
        description: "Vücudun basınç noktalarına özel destek sunan bağımsız pocket yaylar, eşlerin uyku sırasındaki hareketlerinden etkilenmesini önler. Hava alan doğal pamuklu örme yüzeyiyle ferah bir uyku deneyimi sunar.",
        features: ["7 Bölgeli Bağımsız Pocket Yay", "Anti-Bakteriyel Örme Kumaş", "Çift Taraflı Kullanım", "Yüksek Yoğunluklu Destek Süngeri"],
        dimensions: " Ölçüler: 90x190 100x200 120x200 150x200 160x200 Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "yatak_img/ciftped.jpeg"
        ],
        priceNote: "Ölçü seçenekleri ve özel teklifler için iletişime geçiniz."
    },
    {
        id: "Çift Yatık Yatak",
        category: "yatak",
        categoryTitle: "Yatak Koleksiyonu",
        title: "2. Çift Yatık Yatak",
        tagline: "Doğal kauçuk özleriyle zenginleştirilmiş, nefes alan konfor katmanı.",
        description: "Luna Yatak, içeriğindeki %100 doğal lateks katmanı ile basınç noktalarını minimuma indirir. Terlemeyi önleyen özel hava kanallı yapısı ve esnek dokusuyla her uyku pozisyonunda üstün rahatlık sağlar.",
        features: ["Doğal Lateks Katman", "Hava Kanallı Terletmez Yapı", "Omurga Dostu Destek", "Yıkanabilir Fermuarlı Kılıf", "28 cm Kalınlık"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "yatak_img/ciftytk.jpeg"
        ],
        priceNote: "Ölçüye göre fiyatlandırma ve sipariş detayları için lütfen iletişime geçiniz."
    },
    {
        id: "Liza Large Yatak",
        category: "yatak",
        categoryTitle: "Yatak Koleksiyonu",
        title: "3. LizaLarge Yatak",
        tagline: "Vücut ısısına ve ağırlığına duyarlı akıllı sünger teknolojisi.",
        description: "Visco sünger teknolojisi vücudunuzun şeklini alarak kılcal damarlardaki kan dolaşımını rahatlatır. Güne zinde ve ağrısız uyanmanıza yardımcı olan terapötik konfor sunar.",
        features: ["Ağırlıksız Uyku Hissi", "Visco Memory Katman", "Kas ve Eklem Basıncını Azaltır", "Örme Tencel Kumaş"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "yatak_img/lizalarge.jpeg"
        ],
        priceNote: "Ölçü seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "Pedli Yatak",
        category: "yatak",
        categoryTitle: "Yatak Koleksiyonu",
        title: "4. LizaLarge Pedli Yatak",
        tagline: "Yazlık ve kışlık çift taraflı kullanım, sert omurga desteği.",
        description: "Bir tarafı serin tutan pamuklu dokuma, diğer tarafı sıcak tutan yünlü katman ile üretilmiştir. İki farklı mevsimsel kullanım opsiyonu sunan uzun ömürlü ortopedik model.",
        features: ["Yazlık / Kışlık Çift Yüzey", "Thermobond Hijyenik Elyaf", "Sert/Orta-Sert Konfor", "Çelik Yay Karkası"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "yatak_img/pedli.jpeg"
        ],
        priceNote: "Detaylar ve sipariş için iletişime geçiniz."
    },
    {
        id: "RozaLiza Yatak",
        category: "yatak",
        categoryTitle: "Yatak Koleksiyonu",
        title: "5. Rozaliza Yatak",
        tagline: "Entegre kuş tüyü sünger pedi ile bulutların üzerinde uyku konforu.",
        description: "Ekstra fermuarlı üst pedi sayesinde bulut gibi yumuşak bir temas sağlarken, alt katmandaki paket yaylar omurganıza tam destek verir.",
        features: ["Hybrit Yay & Sünger Kombinasyonu", "Lüks Kapitone Dikişler"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "yatak_img/rozaliza.jpeg"
        ],
        priceNote: "Özel ped ve ölçü seçenekleri için iletişime geçiniz."
    },

    // --- BAZALAR (9 ÜRÜN) ---
    {
        id: "velvet-sandikli-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "1. Velvet Lüks Sandıklı Baza",
        tagline: "Geniş iç hacmi, dayanıklı çelik konstrüksiyonu ve kadife dokusuyla şıklık.",
        description: "Velvet baza, yatak odalarınızda maksimum depolama alanı yaratırken güçlü amortisör sistemi sayesinde kolayca açılır. Çizilmeye dayanıklı boyalı çelik gövdesi ve estetik ayak tasarımlarıyla uzun ömürlü kullanım sunar.",
        features: ["Geniş Sandık Hacmi", "Amortisörlü Emniyet Kilidi", "Güçlendirilmiş Çelik Profil Gövde", "Robot Süpürge Uyumlu Yüksek Ayak", "Kolay Silinebilir Kadife Kumaş"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/e1.jpeg",
            "baza_img/e2.jpeg",
            "baza_img/e3.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve renk seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "monolit-sandiksiz-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "2. Japon (Sandıklı-Sandıksız) Baza",
        tagline: "Minimalist mekanlar için sade, zarif ve alçak profil tasarım.",
        description: "Sağlam ahşap iskeleti ve zarif kumaş kaplamasıyla yatak odanıza sofistike bir hava katar. Japon (Sandıklı-Sandıksız)",
        features: ["Platform Ahşap İskelet", "Minimalist Alçak Tasarım", "Hava Alan Delikli Taban", "Farklı Renk Alternatifleri", "Sessiz ve Sağlam Yapı"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/h1.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve renk seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "royal-deri-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "3. Japon (Sandıklı-Sandıksız) Baza",
        tagline: "Suni deri şıklığı ve kolay temizlenebilir yüzeyi ile prestijli bir görünüm.",
        description: "Royal Baza, silinebilir. Çift emniyetli kilit sistemine sahip güçlü amortisörleri güvenli kullanım sağlar. Japon (Sandıklı-Sandıksız)",
        features: ["Kolay Silinebilir Suni Deri", "Çift Emniyetli Amortisör", "Yüksek Taşıma Kapasitesi", "Leke Tutmaz Dış Yüzey", "Paslanmaz Metal İskelet"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/g1.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve renk seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "loft-industrial-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "4. Loft Endüstriyel Metal Baza",
        tagline: "Siyah elektrostatik boyalı çelik gövde ile maskülen ve endüstriyel tarz.",
        description: "Loft Baza, modern ve endüstriyel iç mekan tasarımları için özel olarak geliştirildi. Sağlam çelik strüktürü, esnemez taban profili ve yüksek ayaklarıyla hem fonksiyonel hem estetik bir tercihtir.",
        features: ["Elektrostatik Fırın Boya", "Gıcırdamaz Ekstra Dayanıklı Profil", "Yüksek Süpürülebilir Ayaklar", "Minimal Havalandırma Delikleri"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/d1.jpeg",
            "baza_img/d2.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve renk seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "nordic-wood-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "5. Nordic Ahşap Ayaklı Sandıklı Baza",
        tagline: "İskandinav tarzının doğal sıcaklığı ve ahşap dokunuşları.",
        description: "Nordic Baza, masif ahşap ayakları ve keten dokumalı silinebilir kumaşıyla yatak odanıza ferah bir atmosfer kazandırır. Yüksek sandık kapasitesi eşyalarınızı düzenle saklamanızı sağlar.",
        features: ["Masif Ahşap Ayak Sistemi", "Doğal Keten Dokulu Kumaş", "Geniş Sandık Hacmi", "Sessiz Kapanan Amortisörler"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/c1.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve ahşap renk opsiyonları için iletişime geçiniz."
    },
    {
        id: "chester-lux-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "6. Chester Kapitoneli Lüks Baza",
        tagline: "Etraflıca kapitoneli yan panelleriyle gösterişli ve zengin bir stil.",
        description: "Yan panellerinde özel el işçiliği Chester düğme çektirmeleri kullanılan bu baza modeli, klasik ve görkemli yatak odası dekorasyonlarının tamamlayıcısıdır.",
        features: ["Yan Panellerde El İşçiliği Kapitone", "Silinebilir Tay Tüyü Kumaş", "Çelik İç İskelet", "Yüksek Güvenlikli Havalı Amortisör"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/b1.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve kumaş seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "smart-motorlu-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "7. Smart Hareketli Motorlu Baza",
        tagline: "Kumanda ile ayarlanabilir baş ve ayak kısmı ile kişiselleştirilmiş konfor.",
        description: "Televizyon izleme, kitap okuma veya dinlenme pozisyonlarınıza göre kumandası aracılığıyla baş ve ayak açısını ayarlayabileceğiniz akıllı motorlu baza sistemi.",
        features: ["Sessiz Çift Motorlu Mekanizma", "Uzaktan Kumandalı Ayar", "Ergonomik Bel ve Sırt Desteği", "Kesintisiz Güvenlik Kilidi"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/j1.jpeg",
            "baza_img/j2.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Motor sistem detayları ve sipariş için iletişime geçiniz."
    },
    {
        id: "zen-low-profile-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "8. Zen Japon Stili Alçak Baza",
        tagline: "Yere yakın alçak yapısı ve geniş ahşap kenar detaylarıyla huzurlu atmosfer.",
        description: "Japon Zen felsefesinden esinlenerek tasarlanan bu baza, odanıza ferahlık ve dinginlik kazandırır. Yere yakın dengeli yapısıyla ekstra konfor sunar.",
        features: ["Zen Alçak Platform Tasarım", "Masif Ahşap Kenar Kaplama", "Sarsılmaz Taban Desteği", "Leke Tutmaz Dokuma"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/f1.jpg",
            "baza_img/f2.jpg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve ahşap renk opsiyonları için iletişime geçiniz."
    },
    {
        id: "slim-space-baza",
        category: "baza",
        categoryTitle: "Baza Koleksiyonu",
        title: "9. Slim Space Kompakt Sandıklı Baza",
        tagline: "Küçük alanlarda maksimum depolama sağlayan ince panelli özel tasarım.",
        description: "Dar yatak odalarında alandan tasarruf etmek için dış ölçüleri minimize edilmiş, ancak iç sandık hacmi geniş tutulmuş kompakt sandıklı baza çözümü.",
        features: ["Yer Tasarrufu Sağlayan Slim Dış Paneller", "Derin Sandık Depolama Hacmi", "Emniyet Kilitli Amortisörler", "Robot Süpürgeye Uygun Yüksek Ayak"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: [
            "baza_img/a1.jpeg",
            "kartela.jpeg"
        ],
        priceNote: "Ölçü ve renk seçenekleri için lütfen iletişime geçiniz."
    },

    // --- BAŞLIKLAR (13 ÜRÜN) ---
    {
        id: "royal-capitone-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "1. Royal Kapitoneli Başlık",
        tagline: "El işçiliği düğme detayları ve gösterişli yüksek formuyla yatak odanızın tacı.",
        description: "Royal başlık, klasik kapitone sanatını modern çizgilerle harmanlıyor. Kalın sünger dolgusu sayesinde yaslandığınızda maksimum konfor sağlarken duvara monte veya baza bağlantılı esnek montaj imkanı sunar.",
        features: ["El İşçiliği Kapitone Dikişler", "Konforlu Yaslanma Süngeri", "Lüks Keten / Kadife Kumaş Seçenekleri", "Özel Ölçü Üretim", "Kolay Montaj Aparatları"],
        dimensions: "150'lik | 160'lık | 180'lik | 200'lük Baza Uyumlu",
        images: ["baslik_img/001.jpeg", "baslik_img/002.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve kumaş değişimi için lütfen iletişime geçiniz."
    },
    {
        id: "line-modern-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "2. Line Dikey Çizgili Başlık",
        tagline: "Geometrik dikey hatlarıyla odanıza ferahlık ve derinlik katan modern tasarım.",
        description: "Line başlık, sade ve net hatları sevenler için üretildi. Dikey fitil detayları odanızın tavan yüksekliğini optik olarak vurgularken nubuk veya keten dokuma kumaş opsiyonlarıyla her dekorasyona uyum sağlar.",
        features: ["Dikey Fitil Geometrik Tasarım", "Yüksek Yoğunluklu Sünger", "Leke Tutmaz Nubuk Seçeneği", "Sağlam Ahşap Karkas", "Ergonomik Yükseklik"],
        dimensions: "140'lık | 150'lik | 160'lık | 180'lik Baza Uyumlu",
        images: ["baslik_img/011.jpeg", "baslik_img/112.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve kumaş değişimi için lütfen iletişime geçiniz."
    },
    {
        id: "velvet-lux-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "3. Velvet Lüks Kadife Başlık",
        tagline: "Yumuşak dokulu kadife kumaşı ve zarif bombeli yapısıyla asil bir duruş.",
        description: "Velvet Lüks Başlık, birinci sınıf kadife kumaş kalitesi ve özel sırt kavisleri ile okuma ve dinlenme saatlerinizi konfora dönüştürür. Çeşitli renk yelpazesiyle her odaya uyum sağlar.",
        features: ["1. Sınıf Kadife Kumaş", "Ergonomik Sırt Eğimi", "Özel Karkas Yapısı", "Kolay Temizlenebilir Dokuma", "Geniş Renk Seçeneği"],
        dimensions: "150'lik | 160'lık | 180'lik Baza Uyumlu",
        images: ["baslik_img/121.jpeg", "baslik_img/122.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve renk seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "minimal-slim-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "4. Minimal Slim İnce Başlık",
        tagline: "Dar ve kompakt mekanlar için ince profil, zarif ve modern çizgi.",
        description: "Minimal Slim, az yer kaplayan ancak şıklıktan ödün vermeyen yatak odaları için idealdir. Yalın tasarımıyla dikkat çeker.",
        features: ["İnce Profil Tasarım", "Minimalist Çizgiler", "Kompakt Ebat", "Sağlam Sabitleme"],
        dimensions: "90'lık | 140'lık | 160'lık Baza Uyumlu",
        images: ["baslik_img/131.jpeg", "baslik_img/132.jpeg", "kartela.jpeg"],
        priceNote: "Ölçüye göre fiyatlandırma için iletişime geçiniz."
    },
    {
        id: "chester-classic-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "5. Chester Klasik Kapitone Başlık",
        tagline: "Geleneksel Chester tarzının zamansız zarafeti yatak odanızda.",
        description: "Derin düğme çektirmeleri ve gösterişli yapısıyla klasik dekorasyon tutkunlarının vazgeçilmez tercihi olan Chester başlık.",
        features: ["Derin Chester Düğmeler", "El İşçiliği Detaylar", "Geniş Gövde Yapısı", "Birinci Sınıf Kumaş"],
        dimensions: "160'lık | 180'lik | 200'lük Baza Uyumlu",
        images: ["baslik_img/141.jpeg", "baslik_img/142.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve kumaş değişimi için lütfen iletişime geçiniz."
    },
    {
        id: "geo-modern-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "6. Geo Geometrik Kare Başlık",
        tagline: "Kare panellerin simetrik uyumuyla modern ve dinamik bir atmosfer.",
        description: "Geometrik kare dikiş hatlarıyla odanıza modern bir mimari dokunuş katan şık başlık modeli.",
        features: ["Simetrik Kare Bloklar", "Modern Tasarım", "Yüksek Konforlu Sünger", "Kolay Montaj"],
        dimensions: "150'lik | 160'lık | 180'lik Baza Uyumlu",
        images: ["baslik_img/151.jpeg", "baslik_img/152.jpeg", "kartela.jpeg"],
        priceNote: "Ölçüye göre fiyatlandırma için iletişime geçiniz."
    },
    {
        id: "bohem-naturel-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "7. Bohem Naturel Hasır Detaylı Başlık",
        tagline: "Doğal dokunuşlar ve sıcak tonlarla huzurlu bir uyku alanı.",
        description: "Doğal keten kumaş dokusu ve ahşap detaylarıyla bohem tarzı sevenler için özel olarak tasarlandı.",
        features: ["Doğal Keten Doku", "Ahşap Detaylar", "Huzurlu Renk Paleti", "Ekolojik Malzeme"],
        dimensions: "140'lık | 160'lık Baza Uyumlu",
        images: ["baslik_img/161.jpeg", "baslik_img/162.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve kumaş değişimi için lütfen iletişime geçiniz."
    },
    {
        id: "panelli-premium-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "8. Panelli Premium Geniş Başlık",
        tagline: "Yan komodin panelleriyle bütünleşen entegre lüks başlık sistemi.",
        description: "Yatak başlığının yanlarına entegre edilen panelleriyle yatak odanıza otel süiti konforu getiren ihtişamlı tasarım.",
        features: ["Entegre Komodin Panelleri", "Geniş Form", "LED Aydınlatma Uyumlu", "Özel Ölçü Üretim"],
        dimensions: "160'lık | 180'lik Baza Uyumlu",
        images: ["baslik_img/171.jpeg", "kartela.jpeg"],
        priceNote: "Ölçüye göre fiyatlandırma için iletişime geçiniz."
    },
    {
        id: "retro-vintage-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "9. Retro Vintage Ahşap Çerçeveli Başlık",
        tagline: "Geçmişin nostaljik zarafetini modern yatak odalarıyla buluşturan tasarım.",
        description: "Masif ahşap çerçeve ve yumuşak kumaş dolgunun muazzam uyumuyla nostaljik esintiler taşıyan başlık.",
        features: ["Masif Ahşap Çerçeve", "Vintage Tasarım Çizgisi", "Dayanıklı Gövde", "Özel Boya Opsiyonları"],
        dimensions: "150'lik | 160'lık Baza Uyumlu",
        images: ["baslik_img/181.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve renk seçenekleri için lütfen iletişime geçiniz."
    },
    {
        id: "lux-kavisli-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "10. Kavisli Sarmal Lüks Başlık",
        tagline: "Kökten gelen zarif kavisli yan kulakçıklarıyla sarıp sarmalayan konfor.",
        description: "Yan taraflarındaki hafif kavisli kulak yapısıyla size sarılıyor hissi veren, son derece konforlu yaslanma başlığı.",
        features: ["Kavisli Kulak Tasarımı", "Yüksek Konfor", "Leke Tutmaz Kumaş", "Akustik Rahatlık"],
        dimensions: "160'lık | 180'lik Baza Uyumlu",
        images: ["baslik_img/191.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve kumaş değişimi için lütfen iletişime geçiniz."
    },
    {
        id: "asimetrik-modern-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "11. Asimetrik Çizgili Modern Başlık",
        tagline: "Standartların dışında, sıradışı asimetrik dikiş detaylarıyla fark yaratın.",
        description: "Modern sanat çizgilerinden ilham alınarak tasarlanan asimetrik hatlara sahip özgün ve çarpıcı başlık modeli.",
        features: ["Asimetrik Dikiş Sanatı", "Özgün Tasarım", "Kaliteli Dolgu Süngeri", "Modern Görünüm"],
        dimensions: "150'lik | 160'lık Baza Uyumlu",
        images: ["baslik_img/201.jpeg", "kartela.jpeg"],
        priceNote: "Ölçüye göre fiyatlandırma için iletişime geçiniz."
    },
    {
        id: "kapitone-kristal-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "12. Kristal Düğmeli Işıltılı Başlık",
        tagline: "Işığı yansıtan zarif kristal düğme detaylarıyla göz alıcı ihtişam.",
        description: "Özel el işçiliği kapitone dikişleri arasına yerleştirilen parıltılı düğme detaylarıyla yatak odanıza ihtişam katar.",
        features: ["Kristal Düğme Detayları", "Parıltılı Şık Doku", "Geniş Renk Skalası", "Sağlam Karkas"],
        dimensions: "160'lık | 180'lik Baza Uyumlu",
        images: ["baslik_img/211.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve kumaş değişimi için lütfen iletişime geçiniz."
    },
    {
        id: "ultra-high-baslik",
        category: "baslik",
        categoryTitle: "Başlık Koleksiyonu",
        title: "13. Ultra Yüksek Gösterişli Başlık",
        tagline: "Yüksek tavanlı geniş odalar için tasarlanmış görkemli ve uzun form.",
        description: "Tavana doğru uzanan yüksek formuyla odanıza saraylara layık heybetli bir estetik ve zenginlik kazandıran başlık.",
        features: ["Ekstra Yüksek Form", "Görkemli Duruş", "Üstün Kalite Sünger", "Özel Duvar Sabitleme"],
        dimensions: "160'lık | 180'lık | 200'lük Baza Uyumlu",
        images: ["baslik_img/221.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve kumaş değişimi için lütfen iletişime geçiniz."
    },

    // --- SETLER (22 ÜRÜN) ---
    {
        id: "set-01-grand-suite",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "1. Grand Suite Tam Set",
        tagline: "Görkemli kapitone başlık, derin sandıklı baza ve ortopedik hybrid yatak uyumu.",
        description: "Yatak odanızda otel süiti konforunu yakalayın. Yüksek sandık hacmi, çift emniyetli amortisör sistemi ve pocket yaylı ortopedik yatağıyla eksiksiz bir uyku deneyimi sunar.",
        features: ["Kapitone İşlemeli Özel Başlık", "Geniş Sandık Hacimli Baza", "7 Bölgeli Pocket Yay Yatak", "Leke Tutmaz Kadife Dokuma"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/a1.jpeg", "set_img/a2.jpeg", "kartela.jpeg"],
        priceNote: "Özel kumaş ve ölçü paketleri için iletişime geçiniz."
    },
    {
        id: "set-02-nordic-minimal",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "2. Nordic Minimal Ahşap Set",
        tagline: "İskandinav sade çizgileri, ahşap ayak detayları ve doğal keten kumaş.",
        description: "Doğallığı ve ferahlığı sevenler için tasarlanan bu set, masif ahşap ayak yapısı ve pamuk lifli nefes alan yatağıyla uyku kalitenizi yükseltir.",
        features: ["Masif Ahşap Baza ve Başlık Detayı", "Nefes Alan Keten Dokusu", "Visko Sünger Destekli Yatak", "Sessiz Kapanan Amortisör"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/b1.jpeg", "kartela.jpeg"],
        priceNote: "Renk ve ölçü varyasyonları için iletişime geçiniz."
    },
    {
        id: "set-03-royal-velvet",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "3. Royal Velvet Lüks Set",
        tagline: "Yumuşak kadife dokusu ve altın detaylı başlık kavisleriyle saray konforu.",
        description: "Göz alıcı kadife kumaş kaplaması ve ergonomik yaslanma açısına sahip başlığıyla yatak odanızı lüks bir yaşam alanına dönüştürür.",
        features: ["Altın Şerit Detaylı Başlık", "Ağır Yük Taşıyan Çelik Profil Baza", "Anti-Bakteriyel Lateks Yatak", "Robot Süpürge Uyumlu Ayak"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/c1.jpeg", "kartela.jpeg"],
        priceNote: "Özel ölçü seçenekleri için iletişime geçiniz."
    },
    {
        id: "set-04-loft-industrial",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "4. Loft Industrial Metal Set",
        tagline: "Mat siyah metal detaylar, maskülen hatlar ve sert ortopedik destek.",
        description: "Modern ve endüstriyel stilde dekore edilmiş evler için elektrostatik siyah fırın boyalı strüktür ile dinamik bir görünüm.",
        features: ["Elektrostatik Metal İskelet", "Gıcırdamaz Kilit Sistemi", "Sert/Orta Sert Omurga Yatağı", "Minimalist İnce Başlık"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/d1.jpeg", "kartela.jpeg"],
        priceNote: "Metal renk ve kumaş seçenekleri için iletişime geçiniz."
    },
    {
        id: "set-05-chester-prestige",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "5. Chester Prestige Klasik Set",
        tagline: "El işçiliği derin kapitone düğmeleri ve heybetli tasarım.",
        description: "Geleneksel zarafetle üretilen Chester set, yan panellerinde ve başlığında yer alan yoğun düğme çektirmeleriyle odanın yıldızı olur.",
        features: ["Derin Chester El İşçiliği", "Silinebilir Tay Tüyü Kumaş", "Derin İç Sandık Hacmi", "Ekstra Yoğunluklu Yay Sistemi"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/e1.jpeg", "kartela.jpeg"],
        priceNote: "Kumaş kartelası ve teklif için iletişime geçiniz."
    },
    {
        id: "set-06-zen-harmony",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "6. Zen Harmony Alçak Platform Set",
        tagline: "Yere yakın dingin form, geniş ahşap çerçeve ve organik pamuk yatak.",
        description: "Uzak doğu felsefesinden ilham alan minimalist ve dengeli tasarım. Yere yakın yapısı odanızı olduğundan daha ferah ve geniş gösterir.",
        features: ["Zen Platform Çerçeve", "Organik Pamuk Örme Kumaş", "Basınç Dengeli Memory Foam", "Alçak Profil Modern Estetik"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/f1.jpeg", "set_img/f3.jpeg", "kartela.jpeg"],
        priceNote: "Ölçü ve ahşap tonları için iletişime geçiniz."
    },
    {
        id: "set-07-smart-motion",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "7. Smart Motion Motorlu Set",
        tagline: "Uzaktan kumandalı hareketli baza ve sırt destekli ergonomik yatak.",
        description: "Tek tuşla baş ve ayak açısını ayarlayarak kitap okuma, tv izleme ve dinlenme konumuna geçebileceğiniz yüksek teknolojili uyku seti.",
        features: ["Sessiz Çift Motor Mekanizması", "Kablosuz Uzaktan Kumanda", "Esnek Katlanabilir Özel Yatak", "Emniyet Kilitli Motor"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/g1.jpeg", "kartela.jpeg"],
        priceNote: "Motor teknolojisi ve detaylar için iletişime geçiniz."
    },
    {
        id: "set-08-linea-comfort",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "8. Linea Comfort Dikey Çizgili Set",
        tagline: "Dikey hatlı modern başlık, silinebilir nubuk doku ve tam ortopedik yatak.",
        description: "Tavan yüksekliğini öne çıkaran dikey çizgili başlık tasarımı, şık sandıklı baza ve tam destek sağlayan yaylı yatak kombinasyonu.",
        features: ["Dikey Fitil Desenli Başlık", "Leke Tutmaz Nubuk Kumaş", "Çift Emniyet Kilitli Baza", "Omurga Dostu Sünger Dolgu"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/14a.jpg", "kartela.jpeg"],
        priceNote: "Renk alternatifleri için iletişime geçiniz."
    },
    {
        id: "set-09-boho-chic",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "9. Boho Chic Doğal Dokuma Set",
        tagline: "Sıcak krem tonları, keten ve hasır dokunuşlar, anti-alerjik yatak.",
        description: "Yatak odanızda huzurlu ve bohem bir atmosfer yaratır. Doğal elyaflarla zenginleştirilmiş kumaşı hassas ciltler için son derece uygundur.",
        features: ["Doğal Dokuma Keten Kumaş", "Anti-Alerjik Yatak Yüzeyi", "Ahşap Detaylı Baza Ayakları", "Geniş Saklama Deposu"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/15a.jpg", "kartela.jpeg"],
        priceNote: "Ölçü bilgisi için iletişime geçiniz."
    },
    {
        id: "set-10-panoramik-suite",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "10. Panoramik Suite Komodinli Geniş Set",
        tagline: "Genişletilmiş başlık panelleri, entegre gece lambası uyumu ve pedli yatak.",
        description: "Otel konseptinden ilham alan genişletilmiş yan panelleriyle duvarınızı baştan başa kaplayan görkemli premium set.",
        features: ["Genişletilmiş Duvar Panelleri", "Lüks Visco Pedli Yatak", "Yüksek Taşıma Kapasitesi", "Özel Dokulu Süet Kumaş"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/16a.jpg", "kartela.jpeg"],
        priceNote: "Özel proje ve ebat talepleri için iletişime geçiniz."
    },
    {
        id: "set-11-slim-compact",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "11. Slim Compact Dar Alan Seti",
        tagline: "Kompakt paneller, maksimum sandık derinliği ve ergonomik ortopedik yatak.",
        description: "Küçük metrekareli yatak odalarında alandan maksimum tasarruf sağlamak için minimal kalınlıkta dış hatlarla üretilmiştir.",
        features: ["İnce Profil Dış Gövde", "Robot Süpürge Yüksekliği", "Derin Depolama Sandığı", "Orta Sertlikte Yaylı Yatak"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/18a.jpg", "kartela.jpeg"],
        priceNote: "Dar alan çözümleri için lütfen iletişime geçiniz."
    },
    {
        id: "set-12-satin-gold",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "12. Satin Gold Parıltılı Set",
        tagline: "Saten dokulu parlak kumaş, pirinç detaylı ayaklar ve kuş tüyü pedli yatak.",
        description: "Işıltıyı sevenlerin tercihi. Pirinç ayak kaplamaları ve yumuşak ped katmanı sayesinde bulutların üzerinde uyku hissi sunar.",
        features: ["Pirinç Detaylı Lüks Ayaklar", "Kuş Tüyü Sünger Ped Yatak", "Silinebilir Parlak Saten Kumaş", "Sessiz Baza Amortisörleri"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/20a.jpg", "kartela.jpeg"],
        priceNote: "Detaylı fiyatlandırma için iletişime geçiniz."
    },
    {
        id: "set-13-monochrome-grey",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "13. Monochrome Grey Antrasit Set",
        tagline: "Mat antrasit tonları, modern kare başlık dikişleri ve sert yatak desteği.",
        description: "Yalın antrasit gri renk paleti ve zamansız geometrik kare dikişleriyle modern odalara mükemmel uyum sağlar.",
        features: ["Kare Dikişli Modern Başlık", "Antrasit Leke Tutmaz Kumaş", "Güçlendirilmiş Çelik İskelet", "Full Ortopedik Destek"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/21a.jpg", "kartela.jpeg"],
        priceNote: "Ölçü ve sipariş için iletişime geçiniz."
    },
    {
        id: "set-14-emerald-luxury",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "14. Emerald Luxury Zümrüt Yeşili Set",
        tagline: "Zümrüt yeşili kadife, altın düğmeler ve anatomik pocket yay yatak.",
        description: "Yatak odasında cesur renkleri sevenler için tasarlanan bu set, derin zümrüt yeşili tonu ve gold aksanlarıyla dikkat çeker.",
        features: ["Zümrüt Yeşili Zengin Kadife", "Gold Detaylı Düğme/Ayak", "Anatomik 5 Bölgeli Yatak", "Geniş Depolama Alanı"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/22a.jpg", "kartela.jpeg"],
        priceNote: "Kumaş renk seçenekleri için iletişime geçiniz."
    },
    {
        id: "set-15-organic-latex",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "15. Organic Pure Lateks Set",
        tagline: "%100 doğal lateks yatak, yıkanabilir kılıf ve ahşap karkas baza.",
        description: "Sağlıklı ve ekolojik uykuyu önceliklendirenler için doğal kauçuk ağacı sütünden üretilen lateks yataklı set.",
        features: ["%100 Doğal Lateks Yatak Katmanı", "Fermuarlı Yıkanabilir Kılıf", "Sessiz Ahşap Platform Baza", "Hava Dolaşımlı Yapı"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/24a.jpg", "kartela.jpeg"],
        priceNote: "Lateks kalınlık seçenekleri için iletişime geçiniz."
    },
    {
        id: "set-16-vintage-leather",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "16. Vintage Leather Deri Kaplama Set",
        tagline: "Taba rengi eskitme suni deri, sağlam gövde ve hipoalerjenik yatak.",
        description: "Karakterli ve sıcak bir atmosfer arayanlar için taba rengi deri görünümü ve kolay silinebilir yüzey kalitesi.",
        features: ["Eskitme Taba Deri Kaplama", "Kolay Nemli Bezle Temizlik", "Çelik Profil İskelet", "Alerjen Karşıtı Kumaş Yüzey"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/33a.jpg", "kartela.jpeg"],
        priceNote: "Deri renk seçenekleri için iletişime geçiniz."
    },
    {
        id: "set-17-curved-wing",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "17. Curved Wing Kulaklı Başlık Seti",
        tagline: "Sarma hissi veren kavisli yan kulaklar ve ekstra kalın sünger dolgu.",
        description: "Sırtınızı yasladığınızda sizi saran kavisli başlık kulakları, akustik izolasyon hissi ve üstün konfor sunar.",
        features: ["Kavisli Kulak Tasarımlı Başlık", "Yüksek Yoğunluklu Sünger", "Amortisör Emniyet Kilitli Baza", "Çift Yönlü Kullanılabilir Yatak"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/36a.jpg", "kartela.jpeg"],
        priceNote: "Sipariş ve detay için iletişime geçiniz."
    },
    {
        id: "set-18-cappuccino-soft",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "18. Cappuccino Soft Vizon Set",
        tagline: "Sıcak vizon ve sütlü kahve tonları, yumuşak dokulu örme kumaş.",
        description: "Yatak odasına dinlendirici ve soft bir hava katan cappuccino tonlarında zarif kapitone dikişli set.",
        features: ["Yumuşak Tuşeli Dokuma Kumaş", "Omurgayı Destekleyen Pocket Yay", "Yüksek Sandık Kapasitesi", "Sessiz Havalı Amortisör"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/37a.jpg", "kartela.jpeg"],
        priceNote: "Ölçü ve renk opsiyonları için iletişime geçiniz."
    },
    {
        id: "set-19-urban-minimal",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "19. Urban Minimal Şehir Seti",
        tagline: "Metropol yaşamına özel dinamik, sade ve yer kaplamayan fonksiyonel set.",
        description: "Modern şehir daireleri için tasarlanmış yalın formlar, hafif yapı ve uzun ömürlü çelik konstrüksiyon.",
        features: ["Fonksiyonel Kompakt Yapı", "Elektrostatik Boyalı Metal İskelet", "Orta Sertlikte Visco Yatak", "Robot Süpürge Uyumlu"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/gem1.jpeg", "kartela.jpeg"],
        priceNote: "Fiyat ve teslimat bilgisi için iletişime geçiniz."
    },
    {
        id: "set-20-crystal-glam",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "20. Crystal Glam Parıltılı Düğme Set",
        tagline: "Kristal taşlı düğme detayları, kadife kumaş ve yüksek yatak pedi.",
        description: "Başlığında yer alan kristal düğmeler ışığı yansıtarak odanıza pırıltılı ve şık bir atmosfer kazandırır.",
        features: ["Işıltılı Kristal Taşlı Düğmeler", "Ekstra Pedli Rahat Yatak", "Yüksek Taşıma Kapasiteli Sandık", "Dayanıklı Tay Tüyü Dokuma"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/gem2.jpeg", "kartela.jpeg"],
        priceNote: "Işıltılı kumaş seçenekleri için iletişime geçiniz."
    },
    {
        id: "set-21-ocean-breeze",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "21. Ocean Breeze Mavi Marine Set",
        tagline: "Lacivert ve marin tonları, ferahlatıcı jelli soğutmalı yatak katmanı.",
        description: "Sıcak yaz gecelerinde serin tutan Jel teknolojili yatağı ve derin lacivert başlık kaplamasıyla ferahlık sağlar.",
        features: ["Serinletici Jel Teknolojili Yatak", "Lacivert Silinebilir Kumaş", "Sağlam Profil Gövde", "Emniyet Kilitli Sandık"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/gem3.jpeg", "kartela.jpeg"],
        priceNote: "Soğutmalı yatak seçenekleri için iletişime geçiniz."
    },
    {
        id: "set-22-scandi-oak",
        category: "set",
        categoryTitle: "Set Koleksiyonu",
        title: "22. Scandi Oak Meşe Detaylı Set",
        tagline: "Doğal meşe ağacı çerçöveler, pastel kumaş ve bambu örme yatak.",
        description: "Doğal meşe dokusunun sıcaklığı ve bambu lifli anti-bakteriyel yatak yüzeyi ile sağlıklı uyku hissi.",
        features: ["Masif Meşe Ağacı Kaplama Çerçeve", "Bambu Lifli Yatak Kumaşı", "Yüksek Hava Geçirgenliği", "Sessiz Baza İskeleti"],
        dimensions: "Ölçüler: 90x190 100x200 120x200 150x200 160x200      Özel ölçüler: 140x190 140x200 180x200 200x200",
        images: ["set_img/gem4.jpeg", "kartela.jpeg"],
        priceNote: "Meşe renk opsiyonları için iletişime geçiniz."
    }
];

function dismissSplash() {
    const splash = document.getElementById('splashScreen');
    if (splash) {
        splash.classList.add('hidden-splash');
    }
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('hamburgerIcon');
    if (!menu || !icon) return;

    if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('translate-x-full');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        document.body.style.overflow = 'hidden';
    } else {
        menu.classList.add('translate-x-full');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

// Router with History State Support (Back / Forward Button Navigation)
function router(view, param, pushState = true) {
    const container = document.getElementById('appContainer');
    if (!container) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pushState) {
        history.pushState({ view: view, param: param }, '', `#${view}${param ? '-' + param : ''}`);
    }

    if (view === 'home') {
        container.innerHTML = renderHomePage();
    } else if (view === 'category') {
        container.innerHTML = renderCategoryPage(param);
    } else if (view === 'detail') {
        container.innerHTML = renderDetailPage(param);
    }
}

// Browser Back/Forward navigation listener
window.onpopstate = function(event) {
    if (event.state) {
        router(event.state.view, event.state.param, false);
    } else {
        router('home', null, false);
    }
};

function renderHomePage() {
    return `
        <!-- Hero Section -->
        <section class="relative min-h-[85vh] flex items-center justify-center bg-brand-100/60 overflow-hidden px-4 py-20">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#2c2621_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div class="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
                <span class="inline-block py-1.5 px-4 rounded-full bg-brand-200/80 text-brand-900 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6">El Yapımı Kalite & Ergonomi</span>
                <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-900 mb-6 leading-tight">
                    Mükemmel Uykunun <br><span class="italic font-normal text-amber-900">Modern Tasarımı</span>
                </h1>
                <p class="text-brand-800/80 text-base sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Yatak odanızı yeniden tanımlayın. Yatak, baza, başlık ve özel tasarlanmış uyku setlerimizi keşfedin.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#kategoriler" class="w-full sm:w-auto px-8 py-4 bg-brand-900 text-white rounded-full font-medium hover:bg-amber-900 transition-all shadow-lg text-center">
                        Koleksiyonları İncele
                    </a>
                    <a href="https://wa.me/905431298945" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all shadow-lg flex items-center justify-center gap-3">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>WhatsApp Danışma Hattı</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- 4 Modern Category Cards (Yatak, Baza, Başlık, Set) -->
        <section id="kategoriler" class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-xs uppercase tracking-[0.2em] font-bold text-amber-800 mb-2 block">Kategorilerimiz</span>
                <h2 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-4">Yaşam Alanınıza Değer Katan Parçalar</h2>
                <p class="text-brand-800/70 text-sm sm:text-base">Aşağıdan ihtiyacınıza uygun kategoriyi seçerek özenle tasarlanmış modern ürünlerimizi inceleyebilirsiniz.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Yatak Card -->
                <div onclick="router('category', 'yatak')" class="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <img src="yatak_img/ciftped.jpeg" alt="Yataklar" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-transparent flex flex-col justify-end p-6 text-white">
                        <span class="text-xs tracking-widest uppercase text-amber-200 mb-1 font-semibold">Konfor & Sağlık</span>
                        <h3 class="font-serif text-2xl font-bold mb-2">Yataklar</h3>
                        <p class="text-xs text-brand-200/90 mb-4 line-clamp-2">Omurga sağlığınızı destekleyen ortopedik, lateks, visco ve pedli yatak modellerimiz.</p>
                        <span class="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 group-hover:translate-x-2 transition-transform">
                            <span>Modelleri İncele</span>
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </span>
                    </div>
                </div>

                <!-- Baza Card -->
                <div onclick="router('category', 'baza')" class="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <img src="baza_img/e1.jpeg" alt="Bazalar" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-transparent flex flex-col justify-end p-6 text-white">
                        <span class="text-xs tracking-widest uppercase text-amber-200 mb-1 font-semibold">Depolama & Dayanıklılık</span>
                        <h3 class="font-serif text-2xl font-bold mb-2">Bazalar</h3>
                        <p class="text-xs text-brand-200/90 mb-4 line-clamp-2">Geniş sandık hacimli, çelik konstrüksiyonlu lüks ve sandıksız baza modelleri.</p>
                        <span class="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 group-hover:translate-x-2 transition-transform">
                            <span>Modelleri İncele</span>
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </span>
                    </div>
                </div>

                <!-- Başlık Card -->
                <div onclick="router('category', 'baslik')" class="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <img src="baslik_img/001.jpeg" alt="Başlıklar" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/30 to-transparent flex flex-col justify-end p-6 text-white">
                        <span class="text-xs tracking-widest uppercase text-amber-200 mb-1 font-semibold">Estetik & Tasarım</span>
                        <h3 class="font-serif text-2xl font-bold mb-2">Başlıklar</h3>
                        <p class="text-xs text-brand-200/90 mb-4 line-clamp-2">13 farklı özel kapitoneli, dikey çizgili ve kumaş kaplamalı modern başlık.</p>
                        <span class="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 group-hover:translate-x-2 transition-transform">
                            <span>Modelleri İncele</span>
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </span>
                    </div>
                </div>

                <!-- Set Card -->
                <div onclick="router('category', 'set')" class="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-amber-500/30">
                    <img src="baza_img/e2.jpeg" alt="Setler" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-900/95 via-brand-900/40 to-transparent flex flex-col justify-end p-6 text-white">
                        <span class="text-xs tracking-widest uppercase text-amber-300 mb-1 font-bold">Tam Bütünlük</span>
                        <h3 class="font-serif text-2xl font-bold mb-2">Setler</h3>
                        <p class="text-xs text-brand-200/90 mb-4 line-clamp-2">Baza, yatak ve başlık kombinasyonlu eksiksiz oda çözümleri.</p>
                        <span class="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 group-hover:translate-x-2 transition-transform">
                            <span>Modelleri İncele</span>
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Value Proposition Banner -->
        <section class="bg-brand-100/50 py-20 my-10 border-y border-brand-200/60">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div class="p-6">
                    <div class="w-14 h-14 rounded-full bg-brand-900 text-amber-200 flex items-center justify-center mx-auto mb-5 text-xl">
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <h4 class="font-serif text-lg font-bold mb-2">Müşteri Memnuniyeti</h4>
                    <p class="text-sm text-brand-800/70">Üstün malzeme kalitesi ve sağlam iskelet yapımızla uzun yıllar güvenle kullanın.</p>
                </div>
                <div class="p-6">
                    <div class="w-14 h-14 rounded-full bg-brand-900 text-amber-200 flex items-center justify-center mx-auto mb-5 text-xl">
                        <i class="fa-solid fa-comments"></i>
                    </div>
                    <h4 class="font-serif text-lg font-bold mb-2">Doğrudan İletişim</h4>
                    <p class="text-sm text-brand-800/70">Online sepet yok! Uzmanlarımızla doğrudan görüşün, ölçü ve renk seçeneklerini belirleyin.</p>
                </div>
                <div class="p-6">
                    <div class="w-14 h-14 rounded-full bg-brand-900 text-amber-200 flex items-center justify-center mx-auto mb-5 text-xl">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>
                    <h4 class="font-serif text-lg font-bold mb-2">Profesyonel Kurulum</h4>
                    <p class="text-sm text-brand-800/70">Ücretsiz teslimat ve uzman ekibimizle evinizde kurulum hizmeti.</p>
                </div>
            </div>
        </section>
    `;
}

function renderCategoryPage(categoryKey) {
    const filteredProducts = productsData.filter(p => p.category === categoryKey);
    const categoryTitles = {
        yatak: "Yatak Koleksiyonu",
        baza: "Baza Koleksiyonu",
        baslik: "Başlık Koleksiyonu",
        set: "Set Koleksiyonu"
    };
    const categorySubtitles = {
        yatak: "Omurga sağlığınızı destekleyen, günün yorgunluğunu unutturan özel ortopedik uyku sistemleri.",
        baza: "Geniş depolama alanları, sağlam çelik yapısı ve estetik tasarımlarıyla 9 farklı baza modeli.",
        baslik: "Yatak odanıza karakter ve zarif bir atmosfer kazandıran 13 farklı başlık tasarımı.",
        set: "Baza, yatak ve başlığın mükemmel uyumuyla yatak odanız için bütünsel çözümler."
    };

    const title = categoryTitles[categoryKey] || "Koleksiyon";
    const subtitle = categorySubtitles[categoryKey] || "";

    return `
        <div class="py-12 bg-brand-100/40 border-b border-brand-200/60">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center gap-2 text-xs text-brand-800/60 mb-3">
                    <a href="javascript:void(0)" onclick="router('home')" class="hover:underline">Ana Sayfa</a>
                    <i class="fa-solid fa-chevron-right text-[10px]"></i>
                    <span class="text-brand-900 font-semibold">${title}</span>
                </div>
                <h1 class="font-serif text-3xl sm:text-5xl font-bold text-brand-900 mb-3">${title}</h1>
                <p class="text-brand-800/70 text-base max-w-2xl">${subtitle}</p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${filteredProducts.map(product => `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-200/55 flex flex-col transition-all duration-300 hover:shadow-2xl">
                        <div class="relative h-64 overflow-hidden bg-brand-50 cursor-pointer" onclick="router('detail', '${product.id}')">
                            <img src="${product.images[0]}" alt="${product.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                            <span class="absolute top-4 left-4 bg-brand-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                                ${product.category.toUpperCase()}
                            </span>
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 onclick="router('detail', '${product.id}')" class="font-serif text-xl font-bold text-brand-900 mb-2 cursor-pointer hover:text-amber-800 transition-colors">
                                ${product.title}
                            </h3>
                            <p class="text-brand-800/70 text-xs line-clamp-2 mb-4 flex-grow">${product.tagline}</p>
                            <div class="pt-4 border-t border-brand-100 flex items-center justify-between">
                                <span class="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/50">İletişim & Bilgi</span>
                                <button onclick="router('detail', '${product.id}')" class="px-4 py-2 bg-brand-900 text-white rounded-full text-xs font-medium hover:bg-amber-900 transition-colors">
                                    Detayları İncele
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderDetailPage(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        return `<div class="py-32 text-center"><h2 class="text-2xl font-serif">Ürün bulunamadı.</h2><button onclick="router('home')" class="mt-4 px-6 py-2 bg-brand-900 text-white rounded-full text-sm">Ana Sayfaya Dön</button></div>`;
    }

    return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <!-- Breadcrumb Navigation -->
            <div class="flex items-center gap-2 text-xs text-brand-800/60 mb-8">
                <a href="javascript:void(0)" onclick="router('home')" class="hover:underline">Ana Sayfa</a>
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                <a href="javascript:void(0)" onclick="router('category', '${product.category}')" class="hover:underline">${product.categoryTitle}</a>
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
                <span class="text-brand-900 font-semibold">${product.title}</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <!-- Image Gallery Carousel Card -->
                <div class="space-y-4">
                    <div class="relative h-[350px] sm:h-[480px] rounded-2xl overflow-hidden bg-brand-100 shadow-xl border border-brand-200/60 group cursor-zoom-in" onclick="openImageModal(document.getElementById('mainCarouselImage').src)">
                        <img id="mainCarouselImage" src="${product.images[0]}" alt="${product.title}" class="w-full h-full object-cover transition-all duration-300">
                        <div class="absolute bottom-3 right-3 bg-brand-900/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                            <span>Büyütmek için tıklayın</span>
                        </div>
                    </div>
                    <!-- Gallery Thumbnails Switcher -->
                    <div class="flex gap-4 overflow-x-auto pb-2">
                        ${product.images.map((img, idx) => `
                            <button onclick="document.getElementById('mainCarouselImage').src='${img}'" class="w-24 h-20 rounded-xl overflow-hidden border-2 border-brand-200 hover:border-brand-900 transition-colors flex-shrink-0 focus:outline-none">
                                <img src="${img}" alt="Görsel ${idx+1}" class="w-full h-full object-cover">
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Product Information & Direct Contact Section -->
                <div class="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-brand-200/50">
                    <span class="text-xs uppercase tracking-widest text-amber-800 font-bold mb-2 block">${product.categoryTitle}</span>
                    <h1 class="font-serif text-3xl sm:text-4xl font-bold text-brand-900 mb-4">${product.title}</h1>
                    <p class="text-brand-800/80 text-sm sm:text-base leading-relaxed mb-6">${product.description}</p>

                    <div class="mb-6">
                        <h3 class="text-xs font-bold uppercase tracking-wider text-brand-900 mb-3">Öne Çıkan Özellikler</h3>
                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            ${product.features.map(feat => `
                                <li class="flex items-center gap-2 text-xs sm:text-sm text-brand-800/80">
                                    <i class="fa-solid fa-check text-amber-700"></i>
                                    <span>${feat}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="mb-6 pt-4 border-t border-brand-100">
                        <h3 class="text-xs font-bold uppercase tracking-wider text-brand-900 mb-1">Ölçü Seçenekleri</h3>
                        <p class="text-xs text-brand-800/70">${product.dimensions}</p>
                    </div>

                    <!-- DIRECT CONTACT ACTIONS -->
                    <div class="bg-brand-50 p-6 rounded-xl border border-brand-200/60 mt-8">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div>
                                <h4 class="font-serif font-bold text-brand-900 text-sm">Sipariş & Bilgi Al Hattı</h4>
                                <p class="text-xs text-brand-800/70">${product.priceNote}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <a href="https://wa.me/905431298945?text=Merhaba,%20${encodeURIComponent(product.title)}%20modeli%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" class="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <i class="fa-brands fa-whatsapp text-lg"></i>
                                <span>WhatsApp ile Yaz</span>
                            </a>
                            <a href="tel:+905431298945" class="px-4 py-3 bg-brand-900 hover:bg-amber-900 text-white rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm">
                                <i class="fa-solid fa-phone text-sm"></i>
                                <span>Telefonla Ara</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Lightbox Modal Overlay -->
        <div id="imageModal" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md hidden flex items-center justify-center p-4 animate-fade-in" onclick="closeImageModal()">
            <button onclick="closeImageModal()" class="absolute top-6 right-6 text-white text-3xl hover:text-amber-300 focus:outline-none transition-colors z-10" aria-label="Kapat">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="max-w-5xl max-h-[90vh] flex items-center justify-center p-2" onclick="event.stopPropagation()">
                <img id="modalFullImage" src="" alt="Büyütülmüş Görsel" class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl">
            </div>
        </div>
    `;
}

// Lightbox Modal Functions
function openImageModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalFullImage');
    if (modal && modalImg) {
        modalImg.src = imgSrc;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Save initial home state into browser history
    history.replaceState({ view: 'home', param: null }, '', window.location.hash || '#home');
    router('home', null, false);
});
