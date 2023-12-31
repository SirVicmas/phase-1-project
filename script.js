const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);


// document.addEventListener("DOMContentLoaded", () => {
//   const attractionGallery = document.getElementById("attraction-gallery");

//   // Fetch attraction data from the local JSON DB server
//   fetch("http://localhost:3000/attractions")
//     .then(response => response.json())
//     .then(data => {
//       // Ensure data is an array
//       const attractions = Array.isArray(data) ? data : [];

//       // Initialize missing properties for each attraction
//       attractions.forEach(attraction => {
//         attraction.likes = attraction.likes || 0;
//         attraction.reviews = attraction.reviews || [];
//         attraction.inquiries = attraction.inquiries || [];
//       });

//       createAttractionCard(attractions);
//     })
//     .catch(error => alert(error));

//   // Function to create attraction cards and add them to the gallery
//   function createAttractionCard(attractions) {
//     attractions.forEach(attraction => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       // Create and append image
//       const image = document.createElement("img");
//       image.src = attraction.image;
//       card.appendChild(image);

//       // Create and append name
//       const name = document.createElement("h2");
//       name.textContent = attraction.name;
//       card.appendChild(name);

//       // Create and append description
//       const description = document.createElement("p");
//       description.textContent = attraction.description;
//       card.appendChild(description);

//       // Create and append Like button
//       const likeButton = document.createElement("button");
//       likeButton.textContent = "Like";
//       likeButton.addEventListener("click", () => {
//         attraction.likes++; // Increment the likes when the button is clicked
//         updateLikesCount(card, attraction.likes);
//       });
//       card.appendChild(likeButton);

//       // Create and append Likes count
//       const likesCount = document.createElement("span");
//       likesCount.textContent = attraction.likes + " Likes";
//       card.appendChild(likesCount);

//       // Review Section
//       const reviewSection = document.createElement("div");
//       reviewSection.classList.add("review-section");

//       // Create and append Review Title
//       const reviewTitle = document.createElement("h3");
//       reviewTitle.textContent = "Reviews";
//       reviewSection.appendChild(reviewTitle);

//       // Create and append Review List
//       const reviewList = document.createElement("ul");
//       attraction.reviews.forEach(review => {
//         const listItem = document.createElement("li");
//         listItem.textContent = review;
//         reviewList.appendChild(listItem);
//       });
//       reviewSection.appendChild(reviewList);

//       // Create and append Review Input and Add Review Button
//       const reviewInput = document.createElement("input");
//       reviewInput.setAttribute("type", "text");
//       reviewInput.setAttribute("placeholder", "Write a review...");
//       reviewSection.appendChild(reviewInput);

//       const addReviewButton = document.createElement("button");
//       addReviewButton.textContent = "Add Review";
//       addReviewButton.addEventListener("click", () => {
//         const reviewText = reviewInput.value.trim();
//         if (reviewText !== "") {
//           attraction.reviews.push(reviewText);
//           updateReviewList(reviewList, reviewText);
//           reviewInput.value = "";
//         }
//       });
//       reviewSection.appendChild(addReviewButton);

//       // Inquiry Section
//       const inquirySection = document.createElement("div");
//       inquirySection.classList.add("inquiry-section");

//       // Create and append Inquiry Title
//       const inquiryTitle = document.createElement("h3");
//       inquiryTitle.textContent = "Inquiries";
//       inquirySection.appendChild(inquiryTitle);

//       // Create and append Inquiry List
//       const inquiryList = document.createElement("ul");
//       attraction.inquiries.forEach(inquiry => {
//         const listItem = document.createElement("li");
//         listItem.textContent = inquiry;
//         inquiryList.appendChild(listItem);
//       });
//       inquirySection.appendChild(inquiryList);

//       // Create and append Inquiry Input and Ask Button
//       const inquiryInput = document.createElement("input");
//       inquiryInput.setAttribute("type", "text");
//       inquiryInput.setAttribute("placeholder", "Ask a question...");
//       inquirySection.appendChild(inquiryInput);

//       const askButton = document.createElement("button");
//       askButton.textContent = "Ask";
//       askButton.addEventListener("click", () => {
//         const inquiryText = inquiryInput.value.trim();
//         if (inquiryText !== "") {
//           attraction.inquiries.push(inquiryText);
//           updateInquiryList(inquiryList, inquiryText);
//           inquiryInput.value = "";
//         }
//       });
//       inquirySection.appendChild(askButton);

//       // Append Inquiry and Review sections to card
//       card.appendChild(inquirySection);
//       card.appendChild(reviewSection);

//       // Append card to the attraction gallery
//       attractionGallery.appendChild(card);
//     });
    
//     // Function to update the likes on the server
//     function updateAttractionLikes(attractionId, likes) {
//     fetch(`http://localhost:3000/attractions/${attractionId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ likes }),
//     });
//   }
//   }

//   // Function to update the review list
//   function updateReviewList(reviewList, newReview) {
//     const listItem = document.createElement("li");
//     listItem.textContent = newReview;
//     reviewList.appendChild(listItem);
//   }

//   // Function to update the inquiry list
//   function updateInquiryList(inquiryList, newInquiry) {
//     const listItem = document.createElement("li");
//     listItem.textContent = newInquiry;
//     inquiryList.appendChild(listItem);
//   }

//   // Function to update the number of likes displayed
//   function updateLikesCount(card, likes) {
//     const likesCount = card.querySelector("span");
//     likesCount.textContent = likes + " Likes";
//   }
// });
