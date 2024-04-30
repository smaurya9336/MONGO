const mongoose = require("mongoose");

// mongoose.connect("mongodb://127:0.0.1:27017/test");
main()
  .then(() => {
    console.log("connection successfully.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("6630ad44a6816e5892face89")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// User.findOneAndDelete({ name: "Farah" });
// User.find();
// User.updateOne({ name: "Farah" }, { age: 30 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Mahi" }, { age: 35 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ age: { $gt: 40 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const Employee = mongoose.model("Employee", userSchema);

// User.insertMany([
//   { name: "Rishi", email: "rishi@gmail.com", age: 22 },
//   { name: "Disha", email: "disha@yahoo.in", age: 30 },
//   { name: "Mahi", email: "mahii@gmail.com", age: 28 },
// ]).then((res) => {
//   console.log(res);
// });

// const user1 = new User({
//   name: "Farah",
//   email: "farah@gmail.com",
//   age: 28,
// });
// user1.save();

// const user2 = new User({
//   name: "Ravi",
//   email: "ravi@google.com",
//   age: 25,
// });
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
