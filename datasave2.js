const datasave = (data) => {
  const internetSpeed = Math.floor(Math.random() * 100);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (internetSpeed > 30) {
        resolve(data);  // Success: pass data forward
      } else {
        reject(`Failed: Speed ${internetSpeed}`);  // Enhanced error
      }
    }, 1000);
  });
};
datasave("data1")
  .then((data) => {
    console.log(`${data} saved`);
    return datasave("data2");
  })
  .then((data) => {
    console.log(`${data} saved`);
  })
  .catch((err) => console.error(err));

