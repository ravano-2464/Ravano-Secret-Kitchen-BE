import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Recipe from './models/Recipe.ts';

dotenv.config();

const recipes = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    title: "Rendang Daging Sapi",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "3 jam",
    servings: "6 porsi",
    image: "https://images.unsplash.com/photo-1766567461692-32c352d198d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Rendang adalah masakan daging bercita rasa pedas yang menggunakan campuran berbagai bumbu dan rempah-rempah khas Indonesia.",
    ingredients: [
      "1 kg daging sapi, potong dadu",
      "400 ml santan kental",
      "3 lembar daun jeruk",
      "2 batang serai, memarkan",
      "3 lembar daun salam",
      "2 cm lengkuas, memarkan",
      "10 cabai merah",
      "8 siung bawang merah",
      "6 siung bawang putih",
      "3 cm jahe",
      "2 cm kunyit",
      "1 sdt ketumbar",
      "Garam dan gula secukupnya"
    ],
    steps: [
      "Haluskan cabai merah, bawang merah, bawang putih, jahe, kunyit, dan ketumbar.",
      "Tumis bumbu halus bersama serai, lengkuas, daun jeruk, dan daun salam hingga harum.",
      "Masukkan daging sapi, aduk hingga berubah warna.",
      "Tuang santan, masak dengan api kecil sambil terus diaduk.",
      "Masak hingga santan menyusut dan bumbu meresap (sekitar 2-3 jam).",
      "Aduk sesekali agar tidak gosong.",
      "Masak hingga kuah mengering dan daging empuk berwarna cokelat kehitaman.",
      "Angkat dan sajikan dengan nasi hangat."
    ],
    videoUrl: "https://www.youtube.com/watch?v=DMcFqtm1lfY",
    tips: [
      "Gunakan daging sapi bagian sandung lamur untuk hasil yang lebih empuk",
      "Masak dengan api kecil agar bumbu meresap sempurna",
      "Aduk terus saat santan mulai menyusut agar tidak gosong"
    ]
  },
  {
    id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1",
    title: "Nasi Goreng Kampung",
    category: "Masakan Utama",
    difficulty: "Mudah",
    time: "30 menit",
    servings: "4 porsi",
    image: "https://images.unsplash.com/photo-1680674814945-7945d913319c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    description: "Nasi goreng kampung adalah nasi goreng khas Indonesia dengan cita rasa sederhana namun lezat, lengkap dengan ikan teri dan telur.",
    ingredients: [
      "4 piring nasi putih (dingin)",
      "100 gram ikan teri medan",
      "2 butir telur",
      "5 siung bawang merah, iris tipis",
      "3 siung bawang putih, cincang",
      "3 cabai merah, iris serong",
      "2 cabai rawit (sesuai selera)",
      "2 sdm kecap manis",
      "1 sdt terasi bakar",
      "Daun bawang secukupnya",
      "Garam dan merica secukupnya",
      "Minyak untuk menumis"
    ],
    steps: [
      "Goreng ikan teri hingga kering dan garing, sisihkan.",
      "Panaskan minyak, orak-arik telur, sisihkan.",
      "Tumis bawang merah, bawang putih, dan cabai hingga harum.",
      "Masukkan terasi, aduk rata.",
      "Masukkan nasi putih, aduk hingga tercampur rata.",
      "Tambahkan kecap manis, garam, dan merica, aduk rata.",
      "Masukkan ikan teri dan telur orak-arik, aduk rata.",
      "Tambahkan daun bawang, aduk sebentar.",
      "Angkat dan sajikan selagi hangat."
    ],
    videoUrl: "https://www.youtube.com/watch?v=xBZeOw681vk",
    tips: [
      "Gunakan nasi yang sudah dingin agar tidak lengket",
      "Terasi memberikan aroma dan rasa yang khas",
      "Tambahkan kerupuk untuk pelengkap"
    ]
  },
  {
    id: "a9d1877b-6cdd-41e7-be49-939e0839e240",
    title: "Soto Ayam Kuning",
    category: "Masakan Berkuah",
    difficulty: "Mudah",
    time: "1 jam",
    servings: "5 porsi",
    image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/12004415/Resep-Soto-Ayam-Kuning-yang-Enak-dan-Bikin-Segar-.jpg.webp",
    description: "Soto ayam adalah sup ayam khas Indonesia dengan kuah kuning yang segar dan gurih, cocok dinikmati kapan saja.",
    ingredients: [
      "500 gram daging ayam",
      "2 liter air",
      "3 cm kunyit, bakar",
      "2 cm jahe",
      "2 batang serai, memarkan",
      "3 lembar daun salam",
      "2 lembar daun jeruk",
      "5 siung bawang putih",
      "6 siung bawang putih",
      "1 sdt merica bubuk",
      "Garam secukupnya",
      "Minyak untuk menumis",
      "Pelengkap: bihun, telur rebus, kubis, tomat, seledri, bawang goreng, jeruk nipis, sambal"
    ],
    steps: [
      "Rebus ayam dengan air, serai, daun salam, dan jahe hingga empuk. Angkat ayam, suwir-suwir.",
      "Haluskan bawang putih, bawang merah, kunyit, dan merica.",
      "Tumis bumbu halus hingga harum.",
      "Masukkan bumbu tumis ke dalam kaldu ayam.",
      "Tambahkan daun jeruk, masak hingga mendidih.",
      "Bumbui dengan garam secukupnya.",
      "Siapkan mangkuk saji, isi dengan bihun, kubis, ayam suwir, dan telur.",
      "Siram dengan kuah soto panas.",
      "Beri taburan seledri, bawang goreng, tomat, dan perasan jeruk nipis."
    ],
    videoUrl: "https://www.youtube.com/watch?v=I6KKPcDV5PQ",
    tips: [
      "Bakar kunyit terlebih dahulu agar aromanya lebih harum",
      "Bisa ditambahkan kentang goreng sebagai pelengkap",
      "Sajikan dengan sambal untuk yang suka pedas"
    ]
  },
  {
    id: "9f05a1ce-718c-4573-b3c4-f8cf1c210d52",
    title: "Kue Lapis Legit",
    category: "Kue dan Camilan",
    difficulty: "Sulit",
    time: "2.5 jam",
    servings: "20 potong",
    image: "https://image.makewebeasy.net/makeweb/m_1920x0/rGAbosWut/DefaultData/DSC_0363.jpg",
    description: "Kue lapis legit adalah kue khas Indonesia yang terbuat dari telur dan butter dengan rempah-rempah, dimasak berlapis-lapis.",
    ingredients: [
      "30 butir kuning telur",
      "10 butir telur utuh",
      "500 gram butter/mentega",
      "200 gram gula halus",
      "150 gram tepung terigu",
      "50 gram susu bubuk",
      "2 sdm madu",
      "1 sdm vanilla",
      "Bumbu spekuk: 2 sdt kayu manis bubuk, 1 sdt pala bubuk, 1/2 sdt cengkeh bubuk, 1/2 sdt kapulaga bubuk"
    ],
    steps: [
      "Kocok butter dan gula halus hingga lembut dan pucat.",
      "Masukkan kuning telur dan telur utuh satu per satu sambil terus dikocok.",
      "Tambahkan madu dan vanilla, kocok rata.",
      "Masukkan tepung terigu, susu bubuk, dan bumbu spekuk. Aduk rata dengan spatula.",
      "Panaskan oven suhu 180°C dengan api atas.",
      "Olesi loyang 20x20 cm dengan mentega, alasi dengan kertas roti.",
      "Tuang 3-4 sendok sayur adonan, ratakan tipis.",
      "Panggang hingga matang (sekitar 3-5 menit).",
      "Ulangi hingga adonan habis, panggang lapis demi lapis.",
      "Setelah semua adonan habis, panggang kue dengan api atas bawah selama 20 menit.",
      "Dinginkan, potong-potong, dan sajikan."
    ],
    videoUrl: "https://www.youtube.com/watch?v=05ZPOsh-5jk",
    tips: [
      "Pastikan setiap lapisan matang sempurna sebelum menambah lapisan baru",
      "Jangan sampai gosong karena akan pahit",
      "Simpan di wadah kedap udara agar tahan lama",
      "Kue akan lebih enak setelah 2-3 hari"
    ]
  },
  {
    id: "5be0c4b4-6a89-4e14-a957-c37a6b093b12",
    title: "Pisang Goreng Crispy",
    category: "Kue dan Camilan",
    difficulty: "Mudah",
    time: "20 menit",
    servings: "4 porsi",
    image: "https://storage.googleapis.com/bakingworld-web-production/uploads/media/content_banner/banner-pgc-1720164486454.jpg",
    description: "Pisang goreng crispy adalah camilan favorit dengan balutan tepung yang renyah di luar dan pisang yang lembut di dalam.",
    ingredients: [
      "6 buah pisang tanduk/kepok",
      "150 gram tepung terigu",
      "50 gram tepung beras",
      "2 sdm gula pasir",
      "1/4 sdt garam",
      "1/4 sdt vanili",
      "150 ml air es",
      "Minyak untuk menggoreng"
    ],
    steps: [
      "Kupas pisang, belah memanjang (opsional).",
      "Campur tepung terigu, tepung beras, gula, garam, dan vanili.",
      "Tambahkan air es sedikit demi sedikit sambil diaduk hingga adonan kental.",
      "Panaskan minyak dengan api sedang.",
      "Celupkan pisang ke dalam adonan hingga terbalut rata.",
      "Goreng pisang hingga berwarna kuning kecokelatan dan crispy.",
      "Angkat dan tiriskan.",
      "Sajikan selagi hangat."
    ],
    videoUrl: "https://www.youtube.com/watch?v=WbMESRQd7a0",
    tips: [
      "Gunakan air es agar hasilnya lebih crispy",
      "Goreng dengan api sedang agar matang merata",
      "Bisa ditambahkan keju atau coklat di atasnya"
    ]
  },
  {
    id: "c9594d4e-d00e-4348-b42d-222a76f2360e",
    title: "Sayur Asem Jakarta",
    category: "Sayuran",
    difficulty: "Mudah",
    time: "40 menit",
    servings: "6 porsi",
    image: "https://assets.unileversolutions.com/v1/131569115.jpg",
    description: "Sayur asem adalah masakan berkuah asam segar dengan berbagai sayuran, cocok untuk pendamping lauk goreng atau bakar.",
    ingredients: [
      "200 gram kacang panjang, potong 3 cm",
      "100 gram jagung manis, pipil",
      "100 gram labu siam, potong dadu",
      "100 gram kacang tanah, rebus",
      "3 buah melinjo",
      "5 lembar daun melinjo muda",
      "2 buah tomat, potong-potong",
      "3 sdm asam jawa",
      "1 liter air",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "3 cabai merah",
      "1 sdt terasi bakar",
      "Garam dan gula merah secukupnya"
    ],
    steps: [
      "Haluskan bawang merah, bawang putih, cabai merah, dan terasi.",
      "Rebus air hingga mendidih, masukkan bumbu halus.",
      "Masukkan kacang tanah rebus, melinjo, dan jagung. Masak hingga setengah matang.",
      "Tambahkan labu siam, kacang panjang, dan daun melinjo.",
      "Masukkan air asam jawa yang sudah disaring.",
      "Tambahkan garam dan gula merah, aduk rata.",
      "Masukkan tomat, masak sebentar.",
      "Koreksi rasa, angkat dan sajikan."
    ],
    videoUrl: "https://www.youtube.com/watch?v=It1J25H5790",
    tips: [
      "Tambahkan asam jawa di akhir agar sayuran tidak terlalu lembek",
      "Bisa ditambahkan nangka muda untuk variasi",
      "Enak disajikan dengan ikan asin atau ayam goreng"
    ]
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Sate Ayam Madura",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "1 jam",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/bf_40E-g750x500/data/photo/2013/11/15/sate-ayam-madura780x390.jpg",
    description: "Sate ayam dengan bumbu kacang khas Madura yang kental dan gurih.",
    ingredients: [
      "500 gr daging ayam, potong dadu",
      "200 gr kacang tanah, goreng dan haluskan",
      "3 siung bawang putih",
      "3 siung bawang merah",
      "2 butir kemiri",
      "50 gr gula merah",
      "Kecap manis secukupnya",
      "Garam secukupnya",
      "Jeruk nipis"
    ],
    steps: [
      "Haluskan bumbu kacang.",
      "Tumis bumbu hingga harum, tambahkan air dan kecap.",
      "Tusuk daging ayam.",
      "Bakar sate sambil diolesi bumbu.",
      "Sajikan dengan bumbu kacang dan acar."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample1",
    tips: ["Rendam tusuk sate agar tidak terbakar."]
  },
  {
    id: "d9e4a3b1-2c5d-4e6f-8a9b-0c1d2e3f4g5h",
    title: "Gado-Gado",
    category: "Sayuran",
    difficulty: "Mudah",
    time: "45 menit",
    servings: "3 porsi",
    image: "https://www.masakapahariini.com/wp-content/uploads/2019/01/gado-gado.jpg",
    description: "Salad sayuran khas Indonesia dengan saus kacang.",
    ingredients: [
      "Kangkung, tauge, labu siam, kacang panjang (rebus)",
      "Tempe dan tahu goreng",
      "Telur rebus",
      "Bumbu kacang",
      "Kerupuk"
    ],
    steps: [
      "Tata sayuran, tahu, tempe, dan telur di piring.",
      "Siram bumbu kacang.",
      "Taburkan kerupuk dan bawang goreng."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample2",
    tips: ["Sajikan segera setelah disiram bumbu."]
  },
  {
    id: "b8a9c2d1-3e4f-5a6b-7c8d-9e0f1a2b3c4d",
    title: "Bakso Sapi",
    category: "Masakan Berkuah",
    difficulty: "Sulit",
    time: "2 jam",
    servings: "6 porsi",
    image: "https://cdn1-production-images-kly.akamaized.net/K34703487043870/640x360/03487043870/bakso-sapi-kenyal-alami.jpg",
    description: "Bola daging sapi dengan kuah kaldu yang segar.",
    ingredients: [
      "500 gr daging sapi giling",
      "100 gr tepung tapioka",
      "Es batu secukupnya",
      "Bawang putih, garam, merica (haluskan)",
      "Kuah kaldu sapi"
    ],
    steps: [
      "Giling daging dengan es batu dan bumbu.",
      "Campur dengan tepung tapioka, uleni hingga kalis.",
      "Bentuk bulat, rebus dalam air panas hingga mengapung.",
      "Sajikan dengan kuah kaldu dan pelengkap."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample3",
    tips: ["Gunakan daging segar agar bakso kenyal."]
  },
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    title: "Pempek Palembang",
    category: "Kue dan Camilan",
    difficulty: "Sulit",
    time: "2 jam",
    servings: "5 porsi",
    image: "https://asset.kompas.com/crops/Pempek-Palembang.jpg",
    description: "Makanan khas Palembang dari ikan dan sagu dengan kuah cuko.",
    ingredients: [
      "500 gr daging ikan tenggiri",
      "300 gr tepung sagu",
      "Bawang putih, garam, penyedap",
      "Air es",
      "Bahan cuko: gula merah, asam jawa, cabai, bawang putih, cuka"
    ],
    steps: [
      "Campur ikan dengan bumbu dan air es.",
      "Masukkan sagu sedikit demi sedikit, aduk rata.",
      "Bentuk adonan (lenjer atau kapal selam dengan telur).",
      "Rebus hingga mengapung, lalu goreng.",
      "Sajikan dengan cuko."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample4",
    tips: ["Jangan mengulen adonan terlalu keras agar tidak alot."]
  },
  {
    id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
    title: "Gudeg Jogja",
    category: "Masakan Utama",
    difficulty: "Sulit",
    time: "4 jam",
    servings: "6 porsi",
    image: "https://asset.kompas.com/crops/Gudeg-Jogja.jpg",
    description: "Sayur nangka muda dengan santan dan gula merah.",
    ingredients: [
      "1 kg nangka muda",
      "1 liter santan",
      "Gula merah, daun salam, lengkuas",
      "Bumbu halus: bawang merah, bawang putih, ketumbar, kemiri"
    ],
    steps: [
      "Rebus nangka muda dengan bumbu dan santan.",
      "Masak dengan api kecil hingga kuah habis dan nangka empuk (coklat kemerahan).",
      "Sajikan dengan nasi, ayam, dan krecek."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample5",
    tips: ["Masak perlahan untuk hasil terbaik."]
  },
  {
    id: "1a2b3c4d-5e6f-7890-1234-567890abcdef",
    title: "Rawon Surabaya",
    category: "Masakan Berkuah",
    difficulty: "Sedang",
    time: "2 jam",
    servings: "5 porsi",
    image: "https://asset.kompas.com/crops/Rawon.jpg",
    description: "Sup daging sapi dengan kuah hitam dari kluwek.",
    ingredients: [
      "500 gr daging sapi",
      "Kluwek (rendam air panas)",
      "Bumbu halus: bawang merah, bawang putih, kunyit, jahe, kemiri",
      "Serai, daun jeruk",
      "Tauge pendek"
    ],
    steps: [
      "Rebus daging hingga empuk.",
      "Tumis bumbu halus dan kluwek, masukkan ke rebusan daging.",
      "Masak hingga meresap.",
      "Sajikan dengan tauge, telur asin, dan sambal."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample6",
    tips: ["Pilih kluwek yang tua dan tidak pahit."]
  },
  {
    id: "9z8y7x6w-5v4u-3t2s-1r0q-p9o8n7m6l5k4",
    title: "Soto Betawi",
    category: "Masakan Berkuah",
    difficulty: "Sedang",
    time: "1.5 jam",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/Soto-Betawi.jpg",
    description: "Soto bersantan dengan isian daging dan jeroan.",
    ingredients: [
      "500 gr daging sapi/jeroan",
      "500 ml santan",
      "250 ml susu cair (opsional)",
      "Rempah-rempah (cengkeh, kayu manis)",
      "Bumbu halus: bawang merah, bawang putih, jahe, kemiri"
    ],
    steps: [
      "Rebus daging hingga empuk.",
      "Tumis bumbu halus, masukkan ke kuah daging.",
      "Tambahkan santan dan susu, aduk terus.",
      "Sajikan dengan emping, tomat, dan daun bawang."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample7",
    tips: ["Gunakan susu untuk rasa yang lebih creamy dan gurih."]
  },
  {
    id: "1q2w3e4r-5t6y-7u8i-9o0p-a1s2d3f4g5h6",
    title: "Opor Ayam",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "1 jam",
    servings: "6 porsi",
    image: "https://asset.kompas.com/crops/Opor-Ayam.jpg",
    description: "Ayam masak santan putih/kuning, teman setia ketupat.",
    ingredients: [
      "1 ekor ayam, potong-potong",
      "1 liter santan",
      "Serai, daun salam, lengkuas",
      "Bumbu halus: bawang merah, bawang putih, kemiri, ketumbar, jintan, kunyit (opsional)"
    ],
    steps: [
      "Tumis bumbu halus dan rempah daun.",
      "Masukkan ayam, aduk hingga berubah warna.",
      "Tuang santan, masak hingga ayam empuk dan kuah mengental.",
      "Sajikan dengan ketupat dan bawang goreng."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample8",
    tips: ["Gunakan ayam kampung untuk rasa yang lebih gurih."]
  },
  {
    id: "a2b3c4d5-e6f7-8901-2345-67890abcdef1",
    title: "Ayam Goreng Kalasan",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "1 jam",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/Ayam-Kalasan.jpg",
    description: "Ayam goreng dengan rasa manis gurih khas Kalasan, Yogyakarta.",
    ingredients: [
      "1 ekor ayam kampung, potong 4",
      "500 ml air kelapa",
      "Gula merah, daun salam, lengkuas",
      "Bumbu halus: bawang putih, ketumbar, kemiri, garam"
    ],
    steps: [
      "Ungkep ayam dengan air kelapa dan bumbu hingga air menyusut.",
      "Tiriskan ayam.",
      "Goreng ayam sebentar dalam minyak panas.",
      "Sajikan dengan sambal dan lalapan."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample9",
    tips: ["Gunakan air kelapa agar daging ayam lebih empuk dan gurih."]
  },
  {
    id: "b3c4d5e6-f7g8-9012-3456-7890abcdef12",
    title: "Tahu Telur",
    category: "Masakan Utama",
    difficulty: "Mudah",
    time: "30 menit",
    servings: "2 porsi",
    image: "https://asset.kompas.com/crops/Tahu-Telur.jpg",
    description: "Omelet tahu khas Jawa Timur dengan bumbu petis.",
    ingredients: [
      "2 buah tahu putih, potong dadu",
      "3 butir telur, kocok lepas",
      "Tauge rebus",
      "Bumbu kacang petis: kacang tanah, petis udang, bawang putih, cabai",
      "Kerupuk"
    ],
    steps: [
      "Campur tahu dan telur, tambahkan sedikit garam.",
      "Goreng hingga matang kedua sisi.",
      "Letakkan di piring, beri tauge di atasnya.",
      "Siram dengan bumbu kacang petis.",
      "Taburi bawang goreng dan kerupuk."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample10",
    tips: ["Gunakan api sedang agar telur matang merata."]
  },
  {
    id: "c4d5e6f7-g8h9-0123-4567-890abcdef123",
    title: "Pepes Ikan Mas",
    category: "Masakan Utama",
    difficulty: "Sulit",
    time: "1.5 jam",
    servings: "2 porsi",
    image: "https://asset.kompas.com/crops/Pepes-Ikan.jpg",
    description: "Ikan mas dibumbu kuning dan dibungkus daun pisang.",
    ingredients: [
      "2 ekor ikan mas",
      "Daun pisang untuk membungkus",
      "Daun kemangi, tomat, cabai rawit utuh",
      "Bumbu halus: bawang merah, bawang putih, kunyit, jahe, kemiri, cabai merah"
    ],
    steps: [
      "Lumuri ikan dengan bumbu halus dan garam, diamkan 15 menit.",
      "Siapkan daun pisang, tata ikan, kemangi, tomat, dan cabai rawit.",
      "Bungkus rapi dan semat dengan lidi.",
      "Kukus selama 1 jam hingga matang.",
      "Bakar sebentar di atas bara api agar harum (opsional)."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample11",
    tips: ["Kukus ikan cukup lama agar duri lunak."]
  },
  {
    id: "d5e6f7g8-h9i0-1234-5678-90abcdef1234",
    title: "Sayur Lodeh",
    category: "Sayuran",
    difficulty: "Sedang",
    time: "45 menit",
    servings: "5 porsi",
    image: "https://asset.kompas.com/crops/Sayur-Lodeh.jpg",
    description: "Sayur berkuah santan dengan isian nangka muda, labu siam, dan kacang panjang.",
    ingredients: [
      "200 gr nangka muda",
      "100 gr kacang panjang",
      "1 buah labu siam",
      "1 buah terong",
      "Daun melinjo dan buah melinjo",
      "1 liter santan",
      "Bumbu halus: bawang merah, bawang putih, cabai merah, kemiri, terasi"
    ],
    steps: [
      "Rebus nangka muda dan melinjo hingga empuk.",
      "Masukkan bumbu halus, lengkuas, dan daun salam.",
      "Masukkan santan dan sisa sayuran.",
      "Masak hingga semua sayuran matang.",
      "Koreksi rasa."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample12",
    tips: ["Aduk terus santan agar tidak pecah."]
  },
  {
    id: "e6f7g8h9-i0j1-2345-6789-0abcdef12345",
    title: "Perkedel Kentang",
    category: "Kue dan Camilan",
    difficulty: "Mudah",
    time: "45 menit",
    servings: "10 buah",
    image: "https://asset.kompas.com/crops/Perkedel.jpg",
    description: "Olahan kentang goreng yang dihaluskan dan dibumbui.",
    ingredients: [
      "500 gr kentang, kupas potong dadu",
      "1 butir telur (pisahkan kuning dan putih)",
      "Daun seledri iris halus",
      "Bawang merah goreng",
      "Bumbu halus: bawang putih, merica, pala, garam"
    ],
    steps: [
      "Goreng kentang hingga matang, haluskan selagi panas.",
      "Campur kentang halus dengan kuning telur, bumbu halus, seledri, dan bawang goreng.",
      "Bentuk bulat pipih.",
      "Celupkan ke putih telur kocok.",
      "Goreng dalam minyak panas hingga kecokelatan."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample13",
    tips: ["Gunakan kentang jenis tes agar tidak lembek."]
  },
  {
    id: "f7g8h9i0-j1k2-3456-7890-abcdef123456",
    title: "Martabak Manis",
    category: "Kue dan Camilan",
    difficulty: "Sedang",
    time: "1 jam",
    servings: "8 potong",
    image: "https://asset.kompas.com/crops/Martabak-Manis.jpg",
    description: "Kue dadar tebal manis dengan topping coklat, keju, dan kacang.",
    ingredients: [
      "250 gr tepung terigu",
      "350 ml air",
      "1 butir telur",
      "Gula pasir, baking powder, baking soda",
      "Topping: mentega, susu kental manis, coklat meises, keju parut"
    ],
    steps: [
      "Campur tepung, gula, dan air, aduk rata hingga tidak bergerindil.",
      "Diamkan adonan 1 jam.",
      "Tambahkan baking powder dan baking soda, aduk rata.",
      "Panaskan teflon, tuang adonan, tunggu hingga bersarang.",
      "Taburkan gula pasir, tutup teflon hingga matang.",
      "Angkat, olesi mentega dan beri topping."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample14",
    tips: ["Pastikan teflon benar-benar panas sebelum menuang adonan."]
  },
  {
    id: "g8h9i0j1-k2l3-4567-8901-abcdef123456",
    title: "Klepon",
    category: "Kue dan Camilan",
    difficulty: "Sedang",
    time: "1 jam",
    servings: "20 butir",
    image: "https://asset.kompas.com/crops/Klepon.jpg",
    description: "Kue bola ketan hijau isi gula merah cair tabur kelapa.",
    ingredients: [
      "250 gr tepung ketan",
      "50 gr tepung beras",
      "Air pandan/pewarna hijau",
      "Gula merah sisir",
      "Kelapa parut kukus (beri sedikit garam)"
    ],
    steps: [
      "Campur tepung ketan dan tepung beras.",
      "Tuang air pandan sedikit demi sedikit hingga bisa dipulung.",
      "Ambil sedikit adonan, pipihkan, isi gula merah, bulatkan.",
      "Rebus dalam air mendidih. Jika mengapung berarti matang.",
      "Gulingkan di kelapa parut."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample15",
    tips: ["Jangan merebus terlalu lama agar tidak pecah."]
  },
  {
    id: "h9i0j1k2-l3m4-5678-9012-abcdef123456",
    title: "Es Teler",
    category: "Kue dan Camilan",
    difficulty: "Mudah",
    time: "20 menit",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/Es-Teler.jpg",
    description: "Minuman es segar dengan isian alpukat, kelapa muda, dan nangka.",
    ingredients: [
      "2 buah alpukat, kerok dagingnya",
      "1 butir kelapa muda, kerok dagingnya",
      "5 biji nangka, potong-potong",
      "Susu kental manis",
      "Sirup gula/cocopandan (opsional)",
      "Es serut/es batu"
    ],
    steps: [
      "Tata alpukat, kelapa muda, dan nangka di mangkuk.",
      "Beri es serut di atasnya.",
      "Siram dengan susu kental manis dan sirup.",
      "Sajikan segera."
    ],
    videoUrl: "https://www.youtube.com/watch?v=sample16",
    tips: ["Pilih alpukat yang matang sempurna agar creamy."]
  },
  {
    id: "i0j1k2l3-m4n5-6789-0123-abcdef123456",
    title: "Kolak Pisang",
    category: "Kue dan Camilan",
    difficulty: "Mudah",
    time: "30 menit",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/Kolak-Pisang.jpg",
    description: "Hidangan penutup manis bersantan dengan pisang dan ubi.",
    ingredients: [
      "5 buah pisang kepok",
      "2 buah ubi jalar",
      "1 liter santan",
      "Gula merah, gula pasir, garam, daun pandan"
    ],
    steps: [
      "Rebus air, gula merah, gula pasir, dan daun pandan hingga mendidih.",
      "Masukkan ubi, masak setengah matang.",
      "Masukkan pisang dan santan.",
      "Masak hingga matang sambil diaduk agar santan tidak pecah."
    ],
    videoUrl: "https://www.youtube.com/watch?v=OwlbfIbRG6k",
    tips: ["Gunakan pisang yang tidak terlalu matang agar tidak hancur."]
  },
  {
    id: "j1k2l3m4-n5o6-7890-1234-abcdef123456",
    title: "Ayam Betutu",
    category: "Masakan Utama",
    difficulty: "Sulit",
    time: "3 jam",
    servings: "6 porsi",
    image: "https://asset.kompas.com/crops/Ayam-Betutu.jpg",
    description: "Ayam khas Bali dengan bumbu rempah yang sangat kaya.",
    ingredients: [
      "1 ekor ayam kampung",
      "Bumbu base genep: bawang merah, bawang putih, cabai, kencur, jahe, lengkuas, kunyit, kemiri, ketumbar, merica, terasi",
      "Daun singkong rebus",
      "Daun pisang untuk membungkus"
    ],
    steps: [
      "Tumis bumbu base genep hingga harum.",
      "Lumuri ayam dengan sebagian bumbu, masukkan sebagian lagi ke perut ayam bersama daun singkong.",
      "Bungkus ayam dengan daun pisang.",
      "Kukus selama 2 jam, lalu panggang 1 jam."
    ],
    videoUrl: "https://www.youtube.com/watch?v=TXFb8aYhf4E",
    tips: ["Semakin lama dimasak, bumbu semakin meresap."]
  },
  {
    id: "k2l3m4n5-o6p7-8901-2345-abcdef123456",
    title: "Ikan Bakar Jimbaran",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "1 jam",
    servings: "3 porsi",
    image: "https://asset.kompas.com/crops/Ikan-Bakar-Jimbaran.jpg",
    description: "Ikan bakar dengan bumbu khas Jimbaran Bali.",
    ingredients: [
      "2 ekor ikan kakap/gurame/bawal",
      "Jeruk nipis, garam",
      "Bumbu halus: bawang merah, bawang putih, cabai, kemiri, ketumbar, kunyit, terasi",
      "Saus olesan: margarin, kecap manis"
    ],
    steps: [
      "Lumuri ikan dengan jeruk nipis dan garam.",
      "Tumis bumbu halus hingga matang, campur dengan saus olesan.",
      "Bakar ikan sambil diolesi bumbu hingga matang."
    ],
    videoUrl: "https://www.youtube.com/watch?v=158wvOi62Eo",
    tips: ["Gunakan arang batok kelapa untuk aroma asap yang sedap."]
  },
  {
    id: "l3m4n5o6-p7q8-9012-3456-abcdef123456",
    title: "Mie Goreng Jawa",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "45 menit",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/Mie-Goreng-Jawa.jpg",
    description: "Mie goreng dengan bumbu kemiri dan kecap manis.",
    ingredients: [
      "1 bungkus mie telur, rebus",
      "Telur, bakso, ayam suwir",
      "Kol, sawi hijau",
      "Bumbu halus: bawang putih, bawang merah, kemiri, merica",
      "Kecap manis, garam, gula"
    ],
    steps: [
      "Tumis bumbu halus hingga harum.",
      "Masukkan telur, buat orak-arik.",
      "Masukkan ayam, bakso, dan sayuran.",
      "Masukkan mie, kecap manis, dan bumbu lain.",
      "Aduk rata hingga matang."
    ],
    videoUrl: "https://www.youtube.com/watch?v=vkWWi_zLCAE",
    tips: ["Tambahkan sedikit air agar bumbu meresap."]
  },
  {
    id: "m4n5o6p7-q8r9-0123-4567-abcdef123456",
    title: "Capcay Kuah",
    category: "Sayuran",
    difficulty: "Mudah",
    time: "30 menit",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/Capcay-Kuah.jpg",
    description: "Tumis aneka sayuran dengan kuah kental gurih.",
    ingredients: [
      "Wortel, brokoli, kembang kol, sawi putih, kapri",
      "Bakso, udang, ayam",
      "Bawang putih cincang, bawang bombay",
      "Saus tiram, kecap asin, minyak wijen, maizena (larutkan)"
    ],
    steps: [
      "Tumis bawang putih dan bombay.",
      "Masukkan ayam dan udang hingga berubah warna.",
      "Masukkan sayuran keras (wortel), beri air.",
      "Masukkan sayuran lain dan bumbu.",
      "Kentalkan dengan larutan maizena."
    ],
    videoUrl: "https://www.youtube.com/watch?v=L3mQwQ31CAQ",
    tips: ["Jangan masak sayuran terlalu lama agar tetap renyah."]
  },
  {
    id: "n5o6p7q8-r9s0-1234-5678-abcdef123456",
    title: "Fuyunghai",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "45 menit",
    servings: "4 porsi",
    image: "https://asset.kompas.com/crops/Fuyunghai.jpg",
    description: "Telur dadar tebal isi sayuran dan daging siram saus asam manis.",
    ingredients: [
      "5 butir telur",
      "Daging ayam/udang cincang",
      "Wortel serut, kol iris halus",
      "Tepung terigu/sagu",
      "Saus: bawang putih, bawang bombay, saus tomat, gula, cuka, kacang polong"
    ],
    steps: [
      "Campur telur, daging, sayuran, dan tepung. Goreng tebal hingga matang.",
      "Tumis bawang putih dan bombay, masukkan bahan saus lainnya.",
      "Masak hingga saus mengental.",
      "Siram saus di atas telur."
    ],
    videoUrl: "https://www.youtube.com/watch?v=IzvXjNqO7AA",
    tips: ["Gunakan minyak banyak saat menggoreng agar telur mengembang."]
  },
  {
    id: "o6p7q8r9-s0t1-2345-6789-abcdef123456",
    title: "Cumi Saus Padang",
    category: "Masakan Utama",
    difficulty: "Sedang",
    time: "30 menit",
    servings: "3 porsi",
    image: "https://asset.kompas.com/crops/Cumi-Saus-Padang.jpg",
    description: "Cumi dimasak dengan saus pedas manis ala restoran Padang.",
    ingredients: [
      "500 gr cumi, bersihkan dan potong cincin",
      "Jagung manis rebus (opsional)",
      "Bumbu halus: cabai merah, bawang merah, bawang putih, jahe",
      "Saus sambal, saus tomat, saus tiram",
      "Daun jeruk, serai"
    ],
    steps: [
      "Tumis bumbu halus dan rempah daun hingga matang.",
      "Masukkan saus-sausan.",
      "Masukkan cumi dan jagung.",
      "Masak sebentar saja agar cumi tidak alot."
    ],
    videoUrl: "https://www.youtube.com/watch?v=Gq4ISe5cL8Y",
    tips: ["Masak cumi maksimal 3 menit."]
  },
  {
    id: "p7q8r9s0-t1u2-3456-7890-abcdef123456",
    title: "Udang Balado",
    category: "Masakan Utama",
    difficulty: "Mudah",
    time: "30 menit",
    servings: "3 porsi",
    image: "https://asset.kompas.com/crops/Udang-Balado.jpg",
    description: "Udang goreng dimasak dengan sambal balado merah.",
    ingredients: [
      "500 gr udang",
      "Daun jeruk, pete (opsional)",
      "Bumbu tumbuk kasar: cabai merah besar, cabai keriting, bawang merah, bawang putih"
    ],
    steps: [
      "Goreng udang sebentar, sisihkan.",
      "Tumis bumbu tumbuk dan daun jeruk hingga matang dan berminyak.",
      "Masukkan udang dan pete.",
      "Aduk rata, beri garam dan gula."
    ],
    videoUrl: "https://www.youtube.com/watch?v=7S3r6WZ7Ejk",
    tips: ["Gunakan api kecil saat menumis bumbu agar warnanya cantik."]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB Connected');

    await Recipe.deleteMany();
    console.log('Existing recipes deleted');

    await Recipe.insertMany(recipes);
    console.log('Recipes seeded successfully');

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();