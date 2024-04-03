import "./style.css";

const div = document.getElementById("app");

const interval = setInterval(addTumblr, 2000);

function addTumblr() {
  if (tumblr_api_read) {
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      tumblr_api_read["posts"][rand(20)]["reblogged_from_avatar_url_512"]
    );

    div?.append(img);
  }
}

const rand = (x: number) => Math.floor(Math.random() * x);
