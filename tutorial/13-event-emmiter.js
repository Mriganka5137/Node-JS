const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("data received");
});
customEmitter.on("response", (name, roll) => {
  console.log(`data received from ${name} with roll no ${roll}`);
});

// Order of this emit function matters --> if it's above the customEmitter.on() functions, it won't work
// customEmitter.emit("response");
customEmitter.emit("response", "Mriganka", 5137);
