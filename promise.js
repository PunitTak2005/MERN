const datasave = (data) => {
  const internetSpeed = Math.floor(Math.random() * 100);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (internetSpeed > 5) {  
        resolve(`✅ ${data} saved! Speed: ${internetSpeed}`);
      } else {
        reject(`❌ ${data} failed. Speed: ${internetSpeed}`);
      }
    }, 1000);  
  });
};
datasave("data1")
  .then(result => {
    console.log(result);
    return datasave("data2");  
  })
  .then(result => console.log(result))
  .catch(err => console.error(err));
