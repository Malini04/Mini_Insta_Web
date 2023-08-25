// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// import { getFirestore,  doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyDBnxfG2muMuI_hEP2VbUUdwI9YLJoW9NA",
//   authDomain: "mini-insta-5f0cc.firebaseapp.com",
//   projectId: "mini-insta-5f0cc",
//   storageBucket: "mini-insta-5f0cc.appspot.com",
//   messagingSenderId: "671504305978",
//   appId: "1:671504305978:web:317f6c4920dc4b9c5b4a03",
//   measurementId: "G-HZ32N4RLL5"
// };


//Function for like button  
// Variables
// const likeBtns = document.querySelectorAll('.heart-icon');
// const numberOfLikesElements = document.querySelectorAll('.likeCount');

// let numberOfLikes = Array.from(numberOfLikesElements).map(el => Number.parseInt(el.textContent, 10));
// let isLiked = Array(likeBtns.length).fill(false);

// // Functions

// const likeClick = (index) => {
//   if (!isLiked[index]) {
//     likeBtns[index].classList.add('isLiked');
//     numberOfLikes[index]++;
//     numberOfLikesElements[index].textContent = numberOfLikes[index];
//     isLiked[index] = true;
//   } else {
//     likeBtns[index].classList.remove('isLiked');
//     numberOfLikes[index]--;
//     numberOfLikesElements[index].textContent = numberOfLikes[index];
//     isLiked[index] = false;
//   }
// };

// // Event Listeners

// likeBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => likeClick(index));
// });



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}







