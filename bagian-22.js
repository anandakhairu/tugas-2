const checkDataPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data berhasil diambil");
  else reject("Terjadi error");
});

checkDataPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Selesai, apa pun hasilnya"));