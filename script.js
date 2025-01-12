const hamburger = document.querySelector('.hamburger'); // Mengambil elemen tombol hamburger
const sidebar = document.querySelector('.sidebar'); // Mengambil elemen sidebar

// Menambahkan event listener untuk mengubah visibilitas sidebar saat tombol hamburger diklik
hamburger.addEventListener('click', (event) => {
    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px'; // Menyembunyikan sidebar
    } else {
        sidebar.style.right = '0px'; // Menampilkan sidebar
    }
    event.stopPropagation(); // Mencegah klik pada hamburger dianggap klik di luar sidebar
});


const header = document.querySelector('header');

// Fungsi untuk mengatur padding atas sidebar
function adjustSidebarPadding() {
    const headerHeight = header.offsetHeight; // Mengambil tinggi header
    sidebar.querySelector('ul').style.paddingTop = headerHeight-20 + 'px'; // Mengatur padding atas pada ul di dalam sidebar
}

// Menyesuaikan padding saat halaman dimuat
window.addEventListener('load', adjustSidebarPadding);
// Menyesuaikan padding saat ukuran jendela diubah
window.addEventListener('resize', adjustSidebarPadding);



// Menutup sidebar saat mengklik di luar sidebar
document.addEventListener('click', (event) => {
    if (sidebar.style.right === '0px' && !sidebar.contains(event.target)) {
        sidebar.style.right = '-250px'; // Menyembunyikan sidebar
    }
});

const homeSection = document.getElementById('home'); // Mengambil elemen bagian home

// Daftar gambar latar belakang
const backgrounds = [
    'images/home_bg_1.webp', // Gambar latar belakang 1
    'images/home_bg_2.webp', // Gambar latar belakang 2
    'images/home_bg_3.webp'  // Gambar latar belakang 3
];

let currentIndex = 0; // Indeks gambar latar belakang saat ini

// Fungsi untuk mengubah gambar latar belakang
function changeBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length; // Menghitung indeks gambar berikutnya
    homeSection.style.backgroundImage = `url(${backgrounds[currentIndex]})`; // Mengubah gambar latar belakang
}

// Mengubah gambar latar belakang setiap 5 detik
setInterval(changeBackground, 5000);

// Set gambar latar belakang pertama saat halaman dimuat
homeSection.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

document.addEventListener('DOMContentLoaded', () => { // Menunggu hingga konten halaman dimuat
    const form = document.querySelector('form'); // Mengambil elemen form
    form.addEventListener('submit', (e) => { // Menambahkan event listener untuk submit form
        e.preventDefault(); // Mencegah pengiriman form default

        const name = document.querySelector('#name').value; // Mengambil nilai nama
        const message = document.querySelector('#message').value; // Mengambil nilai pesan
        const phone = '6285774537320'; // Nomor telepon untuk WhatsApp

        if (name && message) { // Memeriksa apakah nama dan pesan diisi
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(`Halo, nama saya ${name}. ${message}`)}`; // Membuat URL WhatsApp
            window.open(whatsappUrl, '_blank'); // Membuka URL WhatsApp di tab baru
        } else {
            alert('Harap isi semua kolom!'); // Peringatan jika kolom tidak diisi
        }
    });

    const scrollToTopBtn = document.getElementById('scrollToTop'); // Mengambil tombol scroll ke atas

    window.addEventListener('scroll', () => { // Menambahkan event listener untuk scroll
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block'; // Menampilkan tombol jika scroll lebih dari 300px
        } else {
            scrollToTopBtn.style.display = 'none'; // Menyembunyikan tombol jika scroll kurang dari 300px
        }
    });

    scrollToTopBtn.addEventListener('click', () => { // Menambahkan event listener untuk klik tombol scroll ke atas
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Meng-scroll ke atas dengan efek halus
    });
});

// Fungsi untuk memfilter kategori produk
function filterCategory(category) {
    const products = document.querySelectorAll('.product'); // Mengambil semua elemen produk
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block'; // Menampilkan produk yang sesuai
        } else {
            product.style.display = 'none'; // Menyembunyikan produk yang tidak sesuai
        }
    });
}

// Fungsi untuk memfilter kategori produk dengan penambahan kelas 'active'
function filterCategory(category) {
    const products = document.querySelectorAll('.product'); // Mengambil semua elemen produk
    const buttons = document.querySelectorAll('.radio-inputs .radio input'); // Mengambil semua tombol radio

    // Menghapus kelas 'active' dari semua tombol
    buttons.forEach(button => {
        button.parentElement.classList.remove('active'); // Menghapus kelas 'active' dari label
    });

    // Menambahkan kelas 'active' pada tombol yang dipilih
    if (category === 'all') {
        buttons[0].parentElement.classList.add('active'); // Tombol "Semua"
    } else {
        buttons.forEach(button => {
            if (button.value === category) {
                button.parentElement.classList.add('active'); // Menambahkan kelas 'active' pada label yang sesuai
            }
        });
    }

    // Menampilkan atau menyembunyikan produk berdasarkan kategori
    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block'; // Menampilkan produk yang sesuai
        } else {
            product.style.display = 'none'; // Menyembunyikan produk yang tidak sesuai
        }
    });
}

// Menambahkan event listener untuk gambar produk yang diperbesar saat diklik dua kali
document.querySelectorAll('.product-image').forEach(image => {
    image.addEventListener('dblclick', function() {
        const enlargedImage = document.createElement('img'); // Membuat elemen gambar baru
        enlargedImage.src = this.src; // Mengambil sumber gambar yang diklik
        enlargedImage.classList.add('enlarged-image'); // Menambahkan kelas untuk gaya
        document.body.appendChild(enlargedImage); // Menambahkan gambar yang diperbesar ke body

        enlargedImage.addEventListener('click', function() {
            document.body.removeChild(enlargedImage); // Menghapus gambar yang diperbesar saat diklik
        });
    });
});

// Menambahkan event listener untuk gambar produk unggulan yang diperbesar saat diklik dua kali
document.querySelectorAll('.product-image-featured').forEach(image => {
    image.addEventListener('dblclick', function() {
        const enlargedImage = document.createElement('img'); // Membuat elemen gambar baru
        enlargedImage.src = this.src; // Mengambil sumber gambar yang diklik
        enlargedImage.classList.add('enlarged-image'); // Menambahkan kelas untuk gaya
        document.body.appendChild(enlargedImage); // Menambahkan gambar yang diperbesar ke body

        enlargedImage.addEventListener('click', function() {
            document.body.removeChild(enlargedImage); // Menghapus gambar yang diperbesar saat diklik
        });
    });
});

// Mengambil semua produk unggulan
const featuredProducts = document.querySelectorAll('.featured-product');
let currentIndex1 = 0; // Indeks produk unggulan saat ini
let intervalId; // ID interval untuk menghentikan highlighting

// Fungsi untuk memulai efek highlighting pada produk unggulan
function startHighlighting() {
    intervalId = setInterval(() => {
        // Menghapus highlight dari semua produk
        featuredProducts.forEach(product => product.classList.remove('highlight'));
        
        // Menambahkan highlight ke produk saat ini
        featuredProducts[currentIndex1].classList.add('highlight');
        
        // Pindah ke produk berikutnya
        currentIndex1 = (currentIndex1 + 1) % featuredProducts.length;
    }, 1000); // Mengubah setiap 1 detik
}

// Memulai efek highlighting
startHighlighting();

// Menghentikan highlighting saat hover
const featuredSection = document.getElementById('featured');
featuredSection.addEventListener('mouseover', () => {
    clearInterval(intervalId); // Menghentikan interval
    featuredProducts.forEach(product => product.classList.remove('highlight')); // Menghapus highlight
});

// Memulai kembali highlighting saat tidak hover
featuredSection.addEventListener('mouseout', () => {
    startHighlighting(); // Memulai kembali efek highlighting
});

// Menambahkan event listener untuk navigasi smooth scrolling
document.querySelectorAll('li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default
        const targetId = this.getAttribute('href'); // Mengambil ID target
        const targetElement = document.querySelector(targetId); // Mengambil elemen target

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight; // Mengambil tinggi header
            const elementPosition = targetElement.offsetTop; // Mengambil posisi elemen target
            const offsetPosition = elementPosition - headerHeight; // Menghitung posisi offset

            window.scrollTo({
                top: offsetPosition, // Mengatur posisi scroll
                behavior: 'smooth', // Efek scroll halus
            });
        }
    });
});
