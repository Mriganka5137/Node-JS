const path = require("path");

// Path separator
console.log(path.sep);

//Join Path ---> It will join the path and return the path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//Base name ---> It will return the file name
const base = path.basename(filePath);
console.log(base);

console.log(__dirname);

// Absolute path ---> It will return the absolute path
const absolute = path.resolve(__dirname, "contet", "subfolder", "test.txt");

console.log(absolute);
