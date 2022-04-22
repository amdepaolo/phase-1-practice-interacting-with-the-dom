// - See the timer increment every second once the page has loaded.
const counter = document.querySelector("#counter");
let currentCount = counter.innerText;

function increaseCounter(){
    currentCount++;
    counter.innerText = currentCount;
}
function decreaseCounter(){
        currentCount--;
        counter.innerText = currentCount;
}
let timer = setInterval(increaseCounter, 1000)
// - Manually increment and decrement the counter using the plus and minus buttons.
document.querySelector("#plus").addEventListener('click',increaseCounter);
document.querySelector('#minus').addEventListener('click', decreaseCounter);
// - "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
const likeObject = {}

function handleLikes(){
    let likeList = document.querySelector(".likes");
    likeList.innerHTML = ""
    if (!likeObject[currentCount]){
        likeObject[currentCount] = 1
    }
    else likeObject[currentCount]++;
    for (key in likeObject){
        let newLike = document.createElement("p");
        newLike.innerText = `The count of ${key} has been liked ${likeObject[key]} times`
        likeList.appendChild(newLike);}
    }
document.querySelector('#heart').addEventListener('click', handleLikes)
// - Pause the counter, which should:
let pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click', ()=>{
    if(pauseButton.innerText === 'pause'){
        pauseCounter()
    }
    else if(pauseButton.innerText === 'resume'){
        resumeCounter()
    }
})
//   - pause the counter
//   - disable all buttons except the pause button
//   - switch the label on the button from "pause" to "resume"
function pauseCounter(){
    clearInterval(timer);
    pauseButton.innerText = 'resume';
    document.querySelector("#plus").removeEventListener('click',increaseCounter);
    document.querySelector('#minus').removeEventListener('click', decreaseCounter);
    document.querySelector('#heart').removeEventListener('click', handleLikes);
}
// - Click the "restart" button to restart the counter and re-enable the buttons.
function resumeCounter(){
    timer = setInterval(increaseCounter, 1000);
    pauseButton.innerText = 'pause'
    document.querySelector("#plus").addEventListener('click',increaseCounter);
    document.querySelector('#minus').addEventListener('click', decreaseCounter);
    document.querySelector('#heart').addEventListener('click', handleLikes);
}
// - Leave comments on my gameplay, such as: "Wow, what a fun game this is."
function createComments(){
    let newComment = document.createElement('p');
    let comment = document.querySelector('#comment-input');
    newComment.innerText = comment.value;
    document.querySelector('#list').appendChild(newComment)
}
document.querySelector('#submit').addEventListener('click',(e)=>{
    e.preventDefault();
    createComments();
})