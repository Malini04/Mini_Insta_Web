// function createPostHTML(post) {
//   return `
//     <div class="post">
//       <div class="info">
//         <div class="user">
//           <div class="profile">
//             <img src="profile1.jpg" alt="">
//           </div>
//           <p class="username">${post.username}</p>
//         </div>
//         <img class="options" width="50" height="50" src="https://img.icons8.com/ios/50/ellipsis.png" alt="ellipsis"/>
//       </div>
//       <div class="postimg">
//         <img src="${post.imageURL}" class="post-image" alt="">
//       </div>
//       <div class="post-content" data-post-id="${post.userId}">
//         <div class="reaction-wrapper">
//           <!-- Add your reaction icons here -->
//           <svg
//             class="heart-icon icon"
//             width="24"
//             height="24"
//             viewBox="0 0 106 97"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <!-- Add the heart icon path here -->
//           </svg>
//           <!-- Add the rest of the icon elements similarly -->
//         </div>
//         <span class="likeCount" data-like-count="0">0</span> Likes
//         <p class="description"><span>${post.username}</span>${post.caption}</p>
//         <p class="post-time">2 minutes ago</p>
//       </div>
//       <div class="comment-wrapper">
//         <img width="50" height="50" src="https://img.icons8.com/ios/50/smiling.png" class="icon" alt="smiling"/>
//         <input type="text" class="comment-box" placeholder="Add a comment">
//         <button class="comment-btn">post</button>
//       </div>
//     </div>
//   `;
// }

// // Function to render the posts in the #postsContainer
// async function renderPosts() {
//   try {
//     const postsData = await fetchPostsData();

//     const postsContainer = document.getElementById("postsContainer");
//     postsContainer.innerHTML = "";

//     postsData.forEach((post) => {
//       const postHTML = createPostHTML(post);
//       postsContainer.innerHTML += postHTML;
//     });
//   } catch (error) {
//     console.error("Error rendering posts:", error);
//   }
// }

// // Call the renderPosts function to display the posts on page load
// renderPosts();
