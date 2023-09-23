let span = document.getElementById('like');
let img = document.getElementById('like-img');

var count = 0;

img.addEventListener("click", likeCount);

function likeCount() {

    count++;
    span.innerText = count;
}