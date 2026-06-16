import { Blog, Ebook, Journal } from './types';

export const BLOGS_DATA: Blog[] = [
  {
    id: 'blog-1',
    title: 'Dasar-Dasar Forex untuk Pemula',
    category: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Langkah awal yang tepat merupakan kunci kesuksesan di pasar forex. Pahami apa itu forex, bagaimana pasar bekerja, dan terminologi penting.',
    date: '10 Juni 2026',
    readTime: '5 min read',
    author: 'Kara FX Research',
    content: [
      'Forex (Foreign Exchange) adalah pasar keuangan terbesar di dunia tempat mata uang global diperdagangkan selama 24 jam sehari, 5 hari seminggu. Bagi pemula, memahami bagaimana nilai tukar bekerja adalah langkah pertama yang krusial. Perdagangan dilakukan dalam pasangan mata uang (currency pairs), seperti EUR/USD atau GBP/USD, di mana Anda membeli satu mata uang sambil menjual mata uang lainnya secara bersamaan.',
      'Dalam pasar forex, Anda akan sering menemui istilah-istilah dasar seperti Pip (Price Interest Point), Spread, Leverage, dan Margin. Pip digunakan untuk mengukur pergerakan harga terkecil, sementara Spread adalah selisih antara harga jual (Bid) dan harga beli (Ask) yang menjadi sumber keuntungan bagi broker. Penggunaan Leverage memungkinkan Anda mengendalikan posisi transaksi yang besar dengan modal yang relatif kecil, namun ingatlah bahwa leverage bagaikan pisau bermata dua yang bisa melipatgandakan keuntungan maupun kerugian Anda.',
      'Untuk memulai dengan aman, pemula disarankan untuk berlatih menggunakan akun demo terlebih dahulu. Akun demo memungkinkan Anda menguji platform, memahami pergerakan harga secara real-time, dan mengasah psikologi trading tanpa risiko finansial nyata. Mulailah membangun pondasi pengetahuan Anda bersama Kara FX sebelum terjun ke akun riil.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Cara Membaca Candlestick dengan Mudah',
    category: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Candlestick adalah peta rute harga pasar. Pelajari anatomi candlestick, pola dasar, dan cara membaca sentimen bull dan bear dalam hitungan detik.',
    date: '12 Juni 2026',
    readTime: '6 min read',
    author: 'Kara FX Research',
    content: [
      'Grafik candlestick pertama kali dikembangkan di Jepang pada abad ke-18 untuk menganalisis pasar beras, dan hingga kini menjadi metode paling populer yang digunakan oleh trader di seluruh dunia. Setiap candlestick mewakili pergerakan harga dalam periode waktu tertentu (timeframe) dan secara visual menyampaikan informasi krusial mengenai pertempuran antara pembeli (bull) dan penjual (bear).',
      'Anatomi sebuah candlestick terdiri dari badan (body) dan sumbu (shadow/wick). Badan candlestick menunjukkan selisih antara harga pembukaan (open) dan penutupan (close). Jika harga penutupan lebih tinggi dari pembukaan, candlestick biasanya berwarna hijau (bullish). Sebaliknya, jika harga penutupan lebih rendah dari pembukaan, candlestick berwarna merah atau hitam (bearish). Sumbu atas dan bawah mencerminkan harga tertinggi (high) dan terendah (low) yang pernah dicapai selama periode tersebut.',
      'Beberapa pola candlestick tunggal yang sangat terkenal antara lain Hammer, Shooting Star, dan Doji. Pola Hammer menandakan potensi pembalikan arah dari turun menjadi naik (bullish reversal) karena adanya penolakan harga rendah oleh pembeli. Dengan melatih mata Anda membaca pola-pola ini, Anda dapat mengidentifikasi perubahan sentimen pasar secara real-time dan meningkatkan akurasi entri transaksi Anda.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Strategi Scalping Paling Efektif',
    category: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Trading cepat dengan profit kecil tapi konsisten bisa sangat menguntungkan jika dilakukan dengan teknik yang benar. Temukan rahasia scalping di timeframe M1/M5.',
    date: '14 Juni 2026',
    readTime: '8 min read',
    author: 'Kara FX Elite Team',
    content: [
      'Scalping adalah strategi trading jangka pendek yang bertujuan untuk mengambil keuntungan kecil dari perubahan harga yang sangat cepat sepanjang hari. Para scalper biasanya membuka dan menutup puluhan hingga ratusan posisi dalam hitungan menit bahkan detik menggunakan timeframe super rendah seperti M1 (1 menit) hingga M15 (15 menit). Kunci sukses scalping terletak pada disiplin tinggi, kecepatan eksekusi, dan biaya transaksi (spread) yang sangat rendah.',
      'Salah satu strategi scalping yang paling efektif adalah memanfaatkan kombinasi indikator Moving Average Exponential (EMA) periode 50 dan 200 sebagai penunjuk arah tren utama, serta osilator Stochastic untuk mendeteksi kondisi jenuh beli (overbought) atau jenuh jual (oversold). Aturan dasarnya sangat disiplin: saat harga berada di atas EMA 50 & 200, lakukan entri "Buy" ketika Stochastic menyilang naik dari area oversold. Sebaliknya, saat di bawah EMA, cari peluang "Sell" ketika Stochastic menyilang turun dari area overbought.',
      'Meskipun scalping menjanjikan akumulasi profit yang cepat, strategi ini menuntut konsentrasi penuh dan tidak cocok untuk semua jenis kepribadian. Selalu pastikan Anda menggunakan broker dengan eksekusi cepat tanpa requote dan memiliki spread tipis demi meminimalkan biaya yang dapat menggerus pundi-pundi keuntungan singkat Anda.'
    ]
  },
  {
    id: 'blog-4',
    title: 'Risk Management dalam Trading',
    category: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Tanpa manajemen risiko, trading hanyalah perjudian biasa. Pelajari aturan risk-reward ratio, penempatan stop loss, dan penentuan ukuran lot.',
    date: '15 Juni 2026',
    readTime: '7 min read',
    author: 'Kara FX Research',
    content: [
      'Setiap trader hebat tahu bahwa kemampuan bertahan di pasar jauh lebih penting dibanding mencari profit besar dalam sekali transaksi. Manajemen risiko (Risk Management) adalah pilar terpenting yang membedakan trader profesional dari penjudi amatir. Hukum utama dalam trading adalah: jangan pernah merisikokan modal yang Anda tidak sanggup kehilangannya.',
      'Aturan emas manajemen risiko adalah membatasi risiko per transaksi harian antara 1% hingga 2% dari total modal Anda. Misalnya, jika saldo akun Anda adalah $1.000, maka batas toleransi kerugian maksimal per posisi adalah $10 hingga $20. Penentuan batas ini diatur melalui penempatan Stop Loss (SL) yang logis berdasarkan analisis teknikal, kemudian disesuaikan dengan ukuran Lot (position sizing) yang tepat, bukan dengan sekadar tebak-tebakan.',
      'Selain membatasi risiko, usahakan selalu menerapkan Risk-to-Reward Ratio (RRR) minimal 1:2. Artinya, untuk setiap potensi kerugian sebesar $10, target keuntungan Anda minimal harus $20. Dengan rasio ini, bahkan jika tingkat akurasi transaksi Anda hanya 40%, akun Anda akan tetap menghasilkan profit bersih dalam jangka panjang.'
    ]
  },
  {
    id: 'blog-5',
    title: 'Psikologi Trading yang Benar',
    category: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Emosi adalah musuh terbesar seorang trader. Kuasai cara mengatasi rasa takut (Fear of Losing) dan keserakahan (Greed) untuk performa konsisten.',
    date: '16 Juni 2026',
    readTime: '6 min read',
    author: 'Kara FX Research',
    content: [
      'Anda bisa memiliki strategi teknikal dengan akurasi 90%, namun tanpa psikologi trading yang stabil, Anda tetap bisa mengalami margin call. Musuh utama seorang trader bukanlah pasar, melainkan cerminan dirinya sendiri di layar monitor. Serangan emosi seperti keserakahan (Greed), ketakutan (Fear), dan harapan kosong (Hope) sering kali merusak rencana trading yang sudah dipersiapkan matang.',
      'FOMO (Fear of Missing Out) membuat trader terburu-buru melakukan entri pasar saat harga sedang mengalami lonjakan ekstrem tanpa menunggu koreksi sehat. Di sisi lain, ketakutan akan kerugian (Fear of Losing) dapat memicu tindakan menutup posisi profit terlalu dini atau justru menolak memasang Stop Loss karena berharap harga akan berbalik arah. Sikap tidak rasional ini umumnya berakhir dengan kerugian fatal yang merusak mental trader.',
      'Membangun psikologi trading yang kokoh memerlukan penerimaan bahwa kerugian adalah bagian tak terpisahkan dari bisnis trading. Buatlah jurnal trading visual, patuhi rencana yang telah disusun matang, dan evaluasi performa Anda secara rutin setiap akhir pekan. Ingat, trading yang sukses adalah maraton panjang, bukan sprint instan.'
    ]
  },
  {
    id: 'blog-6',
    title: 'Indikator Forex Paling Akurat',
    category: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Menemukan kombinasi indikator yang tepat dapat memberikan sinyal perdagangan berkualitas tinggi. Pelajari RSI, MACD, dan Moving Averages.',
    date: '16 Juni 2026',
    readTime: '7 min read',
    author: 'Kara FX Elite Team',
    content: [
      'Tidak ada indikator tunggal yang sempurna (Holy Grail) dalam dunia trading, namun terdapat barisan indikator populer yang teruji waktu memberikan keunggulan statistik tinggi. Indikator teknikal umumnya dibagi menjadi dua kategori utama: Trend-Following (pengikut tren) seperti Moving Average (MA) dan Bollinger Bands, serta Oscillators (pengukur momentum) seperti RSI dan MACD.',
      'Relative Strength Index (RSI) adalah osilator momentum yang mengukur kecepatan dan perubahan arah pergerakan harga pada skala 0 hingga 100. Angka di atas 70 umumnya menunjukkan kondisi jenuh beli (overbought), sedangkan di bawah 30 menunjukkan jenuh jual (oversold). Namun, rahasia terdalam penggunaan RSI oleh profesional adalah dengan mencari pola Divergence—yaitu perbedaan arah tren harga dengan arah tren indikator—yang sering kali mengindikasikan pembalikan tren kuat.',
      'Moving Average Convergence Divergence (MACD) sangat berguna untuk melihat pergeseran dinamika kekuatan pasar. Ketika garis MACD menyilang di atas garis sinyal (golden cross), itu memberikan sinyal momentum bullish yang kuat. Kombinasikan indikator pendeteksi tren dan momentum ini untuk menyaring sinyal palsu dan mengonfirmasi entri perdagangan berkualitas tinggi.'
    ]
  },
  {
    id: 'blog-7',
    title: 'Cara Menghindari Overtrading',
    category: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Terlalu banyak melakukan transaksi justru akan menguras saldo Anda akibat biaya spread dan kelelahan mental. Tetapkan batasan trading harian.',
    date: '16 Juni 2026',
    readTime: '5 min read',
    author: 'Kara FX Research',
    content: [
      'Overtrading terjadi ketika seorang trader membuka posisi secara berlebihan, baik dalam hal ukuran lot maupun frekuensi transaksi harian. Hal ini biasanya dipicu oleh rasa bosan, keserakahan setelah profit berturut-turut, atau keinginan membalas dendam setelah mengalami kerugian (revenge trading). Hasilnya hampir selalu sama: kelelahan mental dan penurunan drastis pada saldo akun.',
      'Untuk menghindari jebakan berbahaya ini, Anda wajib menetapkan pedoman batasan harian yang ketat. Batasi diri Anda untuk hanya melakukan maksimal 2 hingga 3 transaksi berkualitas per hari. Setelah batas tersebut tercapai—baik dalam kondisi profit maupun loss—tutuplah chart Anda dan pergilah menjauh dari layar komputer untuk melakukan aktivitas hobi atau istirahat lainnya.',
      'Kualitas jauh lebih penting daripada kuantitas. Ingatlah bahwa tidak melakukan perdagangan sama sekali (being in cash/sitting on hands) juga merupakan sebuah posisi trading yang sah dan sering kali merupakan keputusan terbaik ketika kondisi market tidak memberikan konfirmasi setup sesuai standar trading plan Anda.'
    ]
  },
  {
    id: 'blog-8',
    title: 'Analisis Teknikal vs Fundamental',
    category: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Dua kubu analisis utama dalam forex. Temukan perbedaan mendasar dan bagaimana mengombinasikan keduanya untuk analisis pasar yang holistik.',
    date: '16 Juni 2026',
    readTime: '8 min read',
    author: 'Kara FX Elite Team',
    content: [
      'Dalam dunia trading forex, dua metode analisis dominan yang digunakan adalah Analisis Teknikal dan Analisis Fundamental. Analisis Teknikal berfokus pada studi grafik pergerakan harga historis menggunakan pola harga (chart patterns), bantuan indikator, dan level psikologis seperti Support & Resistance, berasumsi bahwa semua informasi yang relevan telah tercermin pada pergerakan harga di masa lampau.',
      'Sebaliknya, Analisis Fundamental berfokus pada kekuatan ekonomi makro yang menggerakkan nilai mata uang suatu negara, seperti rilis tingkat suku bunga acuan bank sentral (FOMC), tingkat inflasi (CPI), pengangguran (Non-Farm Payrolls - NFP), serta kondisi geopolitik global. Fundamental menjelaskan "mengapa" pasar bergerak, sedangkan teknikal menunjukkan "kapan" dan "di mana" momentum pergerakan tersebut terjadi secara presisi.',
      'Alih-alih memperdebatkan mana yang terbaik, trader profesional yang sukses biasanya mengombinasikan kedua analisis ini. Gunakan analisis fundamental untuk menentukan arah bias mata uang jangka panjang yang kuat, lalu manfaatkan analisis teknikal di timeframe yang lebih rendah untuk mencari area entri berisiko rendah dengan potensi profit maksimal.'
    ]
  },
  {
    id: 'blog-9',
    title: 'Kesalahan Umum Trader Pemula',
    category: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Ketahui lubang jebakan yang mengandaskan 90% trader pemula di tahun pertama mereka. Pelajari cara menghindari margin call sejak awal.',
    date: '16 Juni 2026',
    readTime: '6 min read',
    author: 'Kara FX Research',
    content: [
      'Statistik menunjukkan bahwa mayoritas trader pemula mengalami kegagalan di tahun pertama perdagangan mereka. Penyebab utamanya bukanlah karena pasar forex terlalu sulit, melainkan karena mereka masuk ke pasar dengan ekspektasi tidak realistis dan sering kali melakukan rentetan kesalahan konyol yang sebenarnya sangat mudah dihindari.',
      'Dua kesalahan terbesar adalah ketidakdisiplinan dalam memasang Stop Loss dan penggunaan leverage yang terlalu agresif (overleveraging). Banyak pemula memandang leverage sebagai alat kaya cepat secara instan, sehingga mendaratkan ukuran lot yang terlalu besar di akun mereka. Ketika arah pasar meleset sedikit saja, margin akun mereka langsung habis seketika, berujung pada Margin Call (MC).',
      'Kesalahan lainnya adalah gemar berpindah-pindah strategi tanpa pernah mengujinya secara konsisten (strategy-hopping). Satu kali mengalami loss bukan berarti strateginya buruk. Bersabarlah, jalankan strategi Anda minimal dalam kurun waktu 100 posisi untuk melihat apakah ia memiliki win-rate dan profit factor yang positif di berbagai kondisi pasar.'
    ]
  },
  {
    id: 'blog-10',
    title: 'Cara Konsisten Profit di Forex',
    category: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Profit konsisten adalah tentang probabilitas dan disiplin ketat sistematis. Simak blueprint trading rule dari profesional Kara FX.',
    date: '16 Juni 2026',
    readTime: '9 min read',
    author: 'Kara FX Elite Team',
    content: [
      'Mencapai profit konsisten di pasar forex bukanlah tentang selalu memenangkan setiap transaksi, melainkan tentang membangun keunggulan statistik (trading edge) dalam jangka panjang. Konsistensi diraih dengan melakukan hal yang sama berulang kali secara sistematis tanpa keterlibatan emosional pribadi.',
      'Blueprint utama untuk profit konsisten mencakup tiga pilar utama: Sistem Trading yang Teruji (pola konfirmasi entri yang jelas), Manajemen Keuangan yang Ketat (membatasi kerugian per perdagangan), dan Konsistensi Psikologis (mengeksekusi rencana secara objektif). Trader yang konsisten selalu mendokumentasikan setiap posisi mereka dalam jurnal untuk dievaluasi pada akhir bulan demi menyempurnakan strategi.',
      'Kunci terakhir adalah kesabaran. Biarkan keuntungan Anda berjalan (let your profits run) dan potong segera kerugian Anda sesegera mungkin (cut your losses short). Dengan mematuhi hukum matematika probabilitas dan disiplin besi ini, Anda akan melihat kurva pertumbuhan finansial akun Anda meroket secara bertahap bersama bimbingan premium dari Kara FX.'
    ]
  }
];

export const EBOOKS_DATA: Ebook[] = [
  {
    id: 'ebook-1',
    title: 'Forex Mastery for Beginners',
    category: 'Beginner',
    description: 'Panduan fundamental terlengkap dari nol hingga mandiri menganalisis market bagi trader pemula.',
    price: 'Rp 149.000',
    pages: 180,
    rating: 4.8,
    features: ['Ebook PDF High Quality', 'Glosarium Istilah Forex lengkap', 'Template Jurnal Trading Excel', 'Amanah & Gratis Update Selamanya'],
    coverColor: 'from-[#10b981] to-[#047857]'
  },
  {
    id: 'ebook-2',
    title: 'Smart Money Concept Trading',
    category: 'Advanced',
    description: 'Bongkar rahasia cara institusi & bank besar bergerak di market untuk entri persis di ujung sumbu harga.',
    price: 'Rp 299.000',
    pages: 245,
    rating: 4.9,
    features: ['Koleksi Studi Kasus SMC Nyata', 'Panduan Orderblock & FVG', 'Akses Komunitas VIP 1 Bulan', 'Teknik Liquidity Sweep Pro'],
    coverColor: 'from-[#059669] to-[#064e3b]'
  },
  {
    id: 'ebook-3',
    title: 'Price Action Blueprint',
    category: 'Beginner',
    description: 'Analisis grafik murni tanpa indikator membingungkan. Kuasai naked trading tingkat lanjut dengan efektif.',
    price: 'Rp 199.000',
    pages: 210,
    rating: 4.7,
    features: ['Cheat Sheet Pola Candlestick HD', 'Strategi breakout & retest', 'Contoh chart asli terkurasi', 'Latihan Mandiri Interaktif'],
    coverColor: 'from-[#34d399] to-[#059669]'
  },
  {
    id: 'ebook-4',
    title: 'Risk Management Secrets',
    category: 'Beginner',
    description: 'Sistem pengaturan dana & ukuran posisi anti bangkrut yang digunakan oleh para portfolio manager profesional.',
    price: 'Rp 129.000',
    pages: 150,
    rating: 4.9,
    features: ['Kombinasi Kalkulator Lot Riil', 'Strategi Anti-Margin Call', 'Sistem Diversifikasi Aset global', 'Rule Buku Saku Disiplin Pelat'],
    coverColor: 'from-[#047857] to-[#064e3b]'
  },
  {
    id: 'ebook-5',
    title: 'Scalping Strategy Handbook',
    category: 'Advanced',
    description: 'Strategi entri kilat timeframe rendah (M1-M5) untuk mengumpulkan pundi-pundi USD secara harian.',
    price: 'Rp 179.000',
    pages: 195,
    rating: 4.6,
    features: ['Setup Indikator khusus Scalper', 'Teknik Spread Filter ultra tipis', 'Sistem Kognitif Kesiapan Cepat', 'Panduan Pilih Broker Low-Spreads'],
    coverColor: 'from-[#10b981] to-[#022c22]'
  },
  {
    id: 'ebook-6',
    title: 'Candlestick Mastery Guide',
    category: 'Beginner',
    description: 'Pengenalan bahasa rahasia grafik. Mengidentifikasi kekuatan pembeli & penjual mendalam lewat anatomi lilin.',
    price: 'Rp 99.000',
    pages: 120,
    rating: 4.8,
    features: ['50+ Ilustrasi Pola Lilin berwarna', 'Teknik Konfirmasi Multi-timeframe', 'Metode Penyaringan Sumbu Palsu', 'Praktek Analisis Bar per Bar'],
    coverColor: 'from-[#6ee7b7] to-[#047857]'
  },
  {
    id: 'ebook-7',
    title: 'Institutional Trading Guide',
    category: 'Advanced',
    description: 'Meretas jejak likuiditas besar (big liquidity) milik korporasi raksasa di pasar keuangan global.',
    price: 'Rp 349.000',
    pages: 310,
    rating: 4.95,
    features: ['Pemetaan Interbank Order Flow', 'Analisis Volume Profiling canggih', 'Teknik Swing Failure Pattern (SFP)', 'Sesi Q&A Pembelian Prioritas'],
    coverColor: 'from-[#22c55e] to-[#14532d]'
  },
  {
    id: 'ebook-8',
    title: 'Psychology of Winning Trader',
    category: 'Beginner',
    description: 'Membentuk pola pikir kuat seorang juara global. Menghentikan emosi merusak dalam mengambil keputusan.',
    price: 'Rp 149.000',
    pages: 175,
    rating: 4.85,
    features: ['Strategi Anti-FOMO & Dendam trading', 'Latihan Olah Napas Fokus harian', 'Blueprint Disiplin Trader 30 Hari', 'Teknik Membaca Ulang Jurnal Emosi'],
    coverColor: 'from-[#86efac] to-[#15803d]'
  },
  {
    id: 'ebook-9',
    title: 'Algorithmic Trading Basics',
    category: 'Advanced',
    description: 'Gerbang utama mempelajari pembuatan Expert Advisor (Robot Trading) mandiri menggunakan pengkodean bersih.',
    price: 'Rp 249.000',
    pages: 220,
    rating: 4.7,
    features: ['Sintaks Kode Dasar MQL4/MQL5', 'Strategi Optimasi Backtesting EA', 'Metode Cloud VPS & VPS Setup', 'Source Code Robot Siap Pakai'],
    coverColor: 'from-[#16a34a] to-[#165b33]'
  },
  {
    id: 'ebook-10',
    title: 'Complete Forex Trading System',
    category: 'Advanced',
    description: 'Satu playbook trading utuh terlengkap berisikan SOP masuk hingga keluar pasar secara presisi bernilai miliaran.',
    price: 'Rp 399.000',
    pages: 350,
    rating: 5.0,
    features: ['100% SOP Aturan Tertulis Sistematis', 'Kombinasi SMC & Price Action Pro', 'Semua Template File Excel & Notion', 'Akses Eksklusif Grup Mentoring Seumur Hidup'],
    coverColor: 'from-[#10b981] to-[#14532d]'
  }
];

export const JOURNALS_DATA: Journal[] = [
  {
    id: 'journal-1',
    title: 'Market Structure Analysis in Forex',
    category: 'Journal',
    abstract: 'Penelitian mendalam mengenai visualisasi tren menggunakan teori Higher Highs & Lower Lows (HH-HL/LH-LL) serta penentuan zona krusial likuiditas di pasangan mata uang mayor GBP/USD.',
    author: 'Dr. Hendra Wijaya, FX Lead Analyst',
    publishedDate: 'Mei 2026',
    readTime: '12 min',
    documentSize: '2.4 MB',
    keyFindings: [
      'Visualisasi bias tren jangka panjang di timeframe H4 memiliki reliabilitas 72% lebih tinggi dibanding timeframe rendah.',
      'Zona Break of Structure (BoS) yang tervalidasi merupakan sinyal awal kelanjutan tren yang kuat.',
      'Sesi London & New York menyumbang 85% dari total pergeseran struktur pasar harian.'
    ]
  },
  {
    id: 'journal-2',
    title: 'Liquidity and Price Movement Study',
    category: 'Journal',
    abstract: 'Analisis empiris mengenai pergerakan dinamis harga menuju kantong likuiditas (Liquidity Pools) seperti Equal Highs/Lows dan dampak transaksional sesaat setelah pengambilalihan.',
    author: 'Siti Rahmawati, M.Fin, Quantitative Analyst',
    publishedDate: 'April 2026',
    readTime: '15 min',
    documentSize: '3.1 MB',
    keyFindings: [
      'Menembusnya area Equal Highs / Lows sering memicu perburuan Stop Loss ritel sebelum akhirnya harga berbalik arah.',
      'Tingkat kecepatan pengembalian harga (rejection speed) berkorelasi linear dengan volume transaksi di ujung zona.',
      'Penyusunan batas eksternal likuiditas membentuk pola fluktuasi harian yang dapat diprediksi.'
    ]
  },
  {
    id: 'journal-3',
    title: 'Institutional Order Flow Behavior',
    category: 'Journal',
    abstract: 'Studi pelacakan modal institusional (smart money order flow) melalui analisis volume dan ketimpangan penyebaran harga (Fair Value Gap) pada pasar valuta asing global.',
    author: 'Kara FX Institutional Team',
    publishedDate: 'Maret 2026',
    readTime: '18 min',
    documentSize: '4.2 MB',
    keyFindings: [
      'Fair Value Gap (FVG) bertindak sebagai daya tarik magnetik harga (price magnet) untuk diisi ulang hingga tingkat 50%.',
      'Orderblock institusional mendeteksi akumulasi dana yang sengaja ditinggalkan untuk posisi masuk berikutnya.',
      'Penerapan mitigasi order flow meminimalkan potensi kegagalan transaksi lindung nilai.'
    ]
  },
  {
    id: 'journal-4',
    title: 'Volatility Patterns in Major Pairs',
    category: 'Journal',
    abstract: 'Meneliti perilaku Average True Range (ATR) pada pasangan EUR/USD, GBP/USD, dan USD/JPY selama rilis berita ekonomi utama guna mengevaluasi risiko paparan retail broker.',
    author: 'Prof. Bambang Prasetyo, Financial Engineering',
    publishedDate: 'Februari 2026',
    readTime: '10 min',
    documentSize: '1.8 MB',
    keyFindings: [
      'USD/JPY menunjukkan peningkatan volatilitas rata-rata sebesar 312% dalam 30 menit awal rilis suku bunga FOMC.',
      'Pola volatilitas mengecil (ATR compression) selalu menandakan akan datangnya ledakan tren searah berskala masif.',
      'Pengukuran jarak target profit ideal minimal berjarak 1.5 kali dari nilai ATR harian.'
    ]
  },
  {
    id: 'journal-5',
    title: 'Correlation Between News and Price Action',
    category: 'Journal',
    abstract: 'Studi korelasi matematis antara deviasi rilis data makro ekonomi (CPI & Non-Farm Payrolls) terhadap respons teknikal instan di grafik harga mata uang komoditas.',
    author: 'Andi Pratama, B.Econ, Macro Strategist',
    publishedDate: 'Januari 2026',
    readTime: '14 min',
    documentSize: '2.9 MB',
    keyFindings: [
      'Deviasi rilis data CPI sebesar 0.2% dari ekspektasi pasar memicu pergeseran rata-rata 50-70 pips secara instan.',
      'Grafik harga kerap mengabaikan berita berdampak kecil jika struktur pasar teknikal makro sedang berada di fase jenuh.',
      'Respons pergerakan awal berita seringkali berupa sumbu manipulasi (stop hunt) sebelum gerak asli dimulai.'
    ]
  },
  {
    id: 'journal-6',
    title: 'Risk Exposure in Retail Trading',
    category: 'Journal',
    abstract: 'Evaluasi perilaku manajemen risiko trader independen (retail) dan analisis statistik mengapa 90% akun mengalami kehancuran akibat kesalahan posisi lot berulang.',
    author: 'Rian Kusuma, CFA, risk Officer',
    publishedDate: 'Desember 2025',
    readTime: '11 min',
    documentSize: '1.9 MB',
    keyFindings: [
      'Pelanggaran toleransi kerugian harian di atas 5% modal mengganggu rasionalitas emosional trader hingga 95%.',
      'Penetapan rasio risk-to-reward di bawah 1:1 memberikan kontribusi kebangkrutan akun paling dominan.',
      'Pengaruh konsumsi sinyal eksternal tanpa verifikasi teknikal pribadi menurunkan ketahanan akun.'
    ]
  },
  {
    id: 'journal-7',
    title: 'Behavioral Finance in Forex Market',
    category: 'Journal',
    abstract: 'Penerapan teori psikologi keuangan (Loss Aversion & Overconfidence Bias) dalam mendeteksi gelembung sentimen emosional di pasar mata uang regional.',
    author: 'Dr. Diana Sari, Behavioral Finance specialist',
    publishedDate: 'November 2025',
    readTime: '13 min',
    documentSize: '2.5 MB',
    keyFindings: [
      'Trader cenderung membiarkan kerugian berjalan (loss aversion) namun terburu-buru mengunci keuntungan kecil.',
      'Rasa percaya diri berlebih (overconfidence) pasca kemenangan berturut-turut memicu peningkatan lot tidak terkendali.',
      'Sentimen keramaian (herd behavior) mengakibatkan pembentukan tren semu di area support psikologis utama.'
    ]
  },
  {
    id: 'journal-8',
    title: 'Backtesting Trading Strategy Results',
    category: 'Journal',
    abstract: 'Uji klinis performa strategi silang Moving Average (EMA 50/200) selama periode 10 tahun ke belakang untuk mendeteksi keandalan performa di berbagai siklus pasar.',
    author: 'Fajar Nugraha, Algo system Developer',
    publishedDate: 'Oktober 2025',
    readTime: '16 min',
    documentSize: '3.6 MB',
    keyFindings: [
      'Strategi Golden Cross EMA berkinerja optimal pada kondisi pasar trending kuat (68% profit factor).',
      'Mengalami penurunan kinerja berlanjut (drawdown) hingga 23% saat kondisi pasar berkonsolidasi (sideways).',
      'Filter tren makro menggunakan Moving Average 200 harian mereduksi entri salah sebesar 42%.'
    ]
  },
  {
    id: 'journal-9',
    title: 'High-Frequency Trading Impact',
    category: 'Journal',
    abstract: 'Investigasi pengaruh aktivitas sistem algoritma komputer super cepat (HFT) terhadap penipisan spread dan terjadinya insiden kilat (Flash Crashes) pada bursa valas.',
    author: 'Kara FX Quantitative Desk',
    publishedDate: 'September 2025',
    readTime: '20 min',
    documentSize: '4.8 MB',
    keyFindings: [
      'HFT menyediakan 70% likuiditas aktif di pasar, namun dapat menarik likuiditas tersebut seketika saat panik geopolitik.',
      'Sinyal mikro yang dihasilkan algoritma komputer memicu persaingan ketat dalam penentuan harga broker.',
      'Tekanan manipulasi jangka pendek (sub-detik) tidak berpengaruh pada struktur pasar utama jangka panjang.'
    ]
  },
  {
    id: 'journal-10',
    title: 'Market Manipulation and Smart Money',
    category: 'Journal',
    abstract: 'Mengungkap manipulasi harga di zona Asia Range (Asia Session) oleh pelaku pasar raksasa dan konseptualisasi pola "Judas Swing" untuk entri berprobabilitas tinggi.',
    author: 'Christian Wibowo, Senior Market Strategist',
    publishedDate: 'Agustus 2025',
    readTime: '15 min',
    documentSize: '3.0 MB',
    keyFindings: [
      'Penembusan palsu batas atas/bawah sesi Asia (Asia Range) terjadi pada 74% hari perdagangan sebelum dimulainya pergerakan asli London.',
      'Siklus AMD (Accumulation, Manipulation, Distribution) adalah skema utama pergerakan harian market maker.',
      'Kehadiran Judas Swing memberikan peluang masuk terbaik dengan risiko stop loss minimal di bawah sumbu manipulasi.'
    ]
  }
];
