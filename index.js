import fetch from "node-fetch";
import express from "express";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const image = await fetchDogImage();
  res.render("home", { image });
});

app.listen(3000, () => {
  console.log("Express server initialized");
});

async function fetchDogImage() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogImage = await res.json();
    const url = dogImage.message;
    return url;
  } catch (error) {
    console.error(error);
  }
}
