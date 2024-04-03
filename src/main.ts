import './style.css'
 


const div = document.getElementById("app");

const interval = setInterval(addTumblr, 2000);

function addTumblr(){


  const img = document.createElement('img');
  img.setAttribute('src', tumblr_api_read['posts'][0]['reblogged_from_avatar_url_512']);

  div?.append(img);
}

