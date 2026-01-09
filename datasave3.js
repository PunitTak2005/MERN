console.log("Start");

datasave("data1")
  .then((data) => {
    console.log(`${data} saved!`);
    return datasave("data2");
  })
  .then((data) => {
    console.log(`${data} saved!`);
  })
  .catch((err) => console.error(err));

console.log("End");
