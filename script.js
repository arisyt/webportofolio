document.addEventListener('DOMContentLoaded', function() {

  const produkList = [
    {
      nama: "Stylus Pencil Prokontol",
      deskripsi: "Alat tulis digital untuk meningkatkan produktivitas Anda.",
      gambar: "/img/item/produk1.png"
    },
    {
      nama: "Smart Glasses 2.0",
      deskripsi: "Kacamata pintar dengan augmented reality terintegrasi.",
      gambar: "/img/item/produk2.png"
    },
    {
      nama: "AI Home Assistant",
      deskripsi: "Asisten rumah berbasis AI untuk kenyamanan dan keamanan Anda.",
      gambar: "img/item/produk3.png"
    }
  ];

  let index = 0;

  
  const produkNama = document.getElementById('produkNama');
  const produkDeskripsi = document.getElementById('produkDeskripsi');
  const produkGambar = document.getElementById('produkGambar');
  const produkContainer = document.getElementById('produkContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function tampilkanProduk(i, arah = 'kanan') {
    produkContainer.classList.add(arah === 'kanan' ? 'slide-out-left' : 'slide-out-right');
    setTimeout(() => {
      produkNama.textContent = produkList[i].nama;
      produkDeskripsi.textContent = produkList[i].deskripsi;
      produkGambar.src = produkList[i].gambar;
      produkContainer.classList.remove('slide-out-left', 'slide-out-right');
      produkContainer.classList.add(arah === 'kanan' ? 'slide-in-right' : 'slide-in-left');
    }, 300);
    setTimeout(() => {
      produkContainer.classList.remove('slide-in-right', 'slide-in-left');
    }, 600);
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + produkList.length) % produkList.length;
    tampilkanProduk(index, 'kiri');
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % produkList.length;
    tampilkanProduk(index, 'kanan');
  });
});
