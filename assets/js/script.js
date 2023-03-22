// ketika navbar di klick maka akan menampilkan background active
// const navbar = document.querySelector('.menu-navbar');
// const links = navbar.querySelectorAll('a');

// links.forEach((link) => {
//   link.addEventListener('click', () => {
//     // remove active class from all links
//     links.forEach((link) => {
//       link.classList.remove('active');
//     });
//     // add active class to clicked link
//     link.classList.add('active');
//   });
// });

// ketika berada pada url navbar tersebut akan menampilkan kelas active permanen
// Mengambil link-link navigasi
const navLinks = document.querySelectorAll('.nav-link');

// Loop melalui link-link navigasi
navLinks.forEach((link) => {
  // Menambahkan event click pada setiap link
  link.addEventListener('click', () => {
    // Mengambil nilai data-nav dari link yang diklik
    const navId = link.getAttribute('data-nav');

    // Menandai link yang diklik dengan kelas active
    link.classList.add('active');

    // Loop melalui link-link navigasi dan menghapus kelas active dari link yang lain
    navLinks.forEach((navLink) => {
      if (navLink.getAttribute('data-nav') !== navId) {
        navLink.classList.remove('active');
      }
    });

    // Simpan status aktif pada sessionStorage
    sessionStorage.setItem('activeNav', navId);
  });

  // Memeriksa apakah ada status aktif yang disimpan pada sessionStorage
  const activeNav = sessionStorage.getItem('activeNav');

  // Jika ada status aktif, tandai link yang sesuai dengan kelas active
  if (activeNav && activeNav === link.getAttribute('data-nav')) {
    link.classList.add('active');
  }
});

// Mendapatkan nilai dari parameter "q" di URL
const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');

// Menentukan produk yang akan ditampilkan berdasarkan nilai "q"
if (q === 'coffee') {
  console.log('Product coffee ditemukan.');
  // ...
} else if (q === 'non-coffee') {
  console.log('Product non-coffee ditemukan.');
  // ...
} else if (q === 'tea') {
  console.log('Product tea ditemukan.');
  // ...
} else {
  // Menampilkan pesan kesalahan jika nilai "q" tidak sesuai
  console.error('Product tidak ditemukan.');
}
