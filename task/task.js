/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
  const showDownload = ($result) => {
    console.log("Download selesai");
      console.log("Hasil download" + $result)
  };
  /**
   * Fungsi untuk download file
   * @param {function} callback - Function callback show
   */
  const download = () => {
    return new Promise(function(resolve) {
      setTimeout(function ()  {
        const result = `windows-10.exe1`;
        resolve(result);
      }, 3000);
    });
  };
  
  async function main () {
    const hasil = await download();
    showDownload (hasil);
  };
  main();
  
  /**
   * TODO:
   * - Refactor callback ke Promise atau Async Await
   * - Refactor function ke ES6 Arrow Function
   * - Refactor string ke ES6 Template Literals
   */
