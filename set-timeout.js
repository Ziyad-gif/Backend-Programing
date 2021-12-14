console.log("Abdul Membuka Bowser Google Chrome.");

/**
 * setTimeout salah satu operasi Asynchronous.
 * fungsi setTimeout tidak mencegah operasi selanjutnya.
 * callback otomatis dijalankan setelah 5 detik.
 */
setTimeout(() => {
  console.log("Downloading 1 Hour ...");
  console.log("Download complete");
}, 5000);

console.log("Abdul Nonton Youtube tentang praktikum javascript.");