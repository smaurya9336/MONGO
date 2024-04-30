const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },

  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
  title: "Marvel Comics",
  price: 600,
  category: "fiction",
});
book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// let book2 = new Book({
//   title: "Physics",
//   author: "MD Sharma",
//   price: 699,
// });
