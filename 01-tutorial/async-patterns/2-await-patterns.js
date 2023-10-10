const { readFile, writeFile } = require("fs").promises;

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf-8");
    const second = await readFile("../content/second.txt", "utf-8");
    console.log(first, second);
    await writeFile(
      "../content/write-async.txt",
      `This is FINAL: ${first} ${second}`
    );
  } catch (err) {
    console.log(err);
  }
};

start();
