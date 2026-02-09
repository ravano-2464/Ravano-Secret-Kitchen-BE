const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Recipe = require('./models/Recipe');

dotenv.config();

const recipes = [
  {
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tips: [
      "Gunakan daging sapi bagian sandung lamur untuk hasil yang lebih empuk",
      "Masak dengan api kecil agar bumbu meresap sempurna",
      "Aduk terus saat santan mulai menyusut agar tidak gosong"
    ]
  },
  {
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
    tips: [
      "Gunakan nasi yang sudah dingin agar tidak lengket",
      "Terasi memberikan aroma dan rasa yang khas",
      "Tambahkan kerupuk untuk pelengkap"
    ]
  },
  {
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
      "6 siung bawang merah",
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
    tips: [
      "Bakar kunyit terlebih dahulu agar aromanya lebih harum",
      "Bisa ditambahkan kentang goreng sebagai pelengkap",
      "Sajikan dengan sambal untuk yang suka pedas"
    ]
  },
  {
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tips: [
      "Pastikan setiap lapisan matang sempurna sebelum menambah lapisan baru",
      "Jangan sampai gosong karena akan pahit",
      "Simpan di wadah kedap udara agar tahan lama",
      "Kue akan lebih enak setelah 2-3 hari"
    ]
  },
  {
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
    tips: [
      "Gunakan air es agar hasilnya lebih crispy",
      "Goreng dengan api sedang agar matang merata",
      "Bisa ditambahkan keju atau coklat di atasnya"
    ]
  },
  {
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
    tips: [
      "Tambahkan asam jawa di akhir agar sayuran tidak terlalu lembek",
      "Bisa ditambahkan nangka muda untuk variasi",
      "Enak disajikan dengan ikan asin atau ayam goreng"
    ]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Delete existing recipes
    await Recipe.deleteMany();
    console.log('Existing recipes deleted');

    // Insert new recipes
    await Recipe.insertMany(recipes);
    console.log('Recipes seeded successfully');

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
