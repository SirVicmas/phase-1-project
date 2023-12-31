Tembea Kenya(TOURIFY) - Tourist Site Web Application

Tembea Kenya is a web application that showcases various tourist attractions in Kenya. Users can view attraction details, leave reviews, and ask inquiries about different attractions.

Screenshot

Features
Browse a variety of tourist attractions with images and descriptions.
Like attractions to show appreciation.
Leave reviews to share your experiences.
Ask inquiries to get more information about attractions.
Technologies Used
HTML5
CSS3
JavaScript (ES6)
Bootstrap 5
Fetch API
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/tembea-kenya.git
Navigate to the project directory:

bash
Copy code
cd phase-1-project
Open the index.html file in your web browser.

Usage
Fetching Attraction Data: When the page loads, JavaScript fetches attraction data from a local JSON DB server (http://localhost:3000/attractions). The data is processed to ensure it's an array, and missing properties like likes, reviews, and inquiries are initialized.

Creating Attraction Cards: The createAttractionCard function is responsible for generating attraction cards and adding them to the gallery. For each attraction, an HTML card element is created with an image, name, description, like button, likes count, review section, and inquiry section.

Liking Attractions: Users can click the "Like" button to increment the number of likes for an attraction. The updateLikesCount function updates the displayed likes count when the button is clicked.

Leaving Reviews: Users can type a review in the review input field and click the "Add Review" button to leave a review for an attraction. The updateReviewList function adds the new review to the review list.

Asking Inquiries: Users can ask questions about attractions by typing a question in the inquiry input field and clicking the "Ask" button. The updateInquiryList function adds the new inquiry to the inquiry list.

Contact Us Page: Users can navigate to the "Contact Us" page to get in touch via email (info@tembeakenya.com) for more information or inquiries.

Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to fork the repository and submit a pull request.

#AUTHOR
VICTOR MASIBO WAFULA.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
The project was inspired by the beauty of Kenya and the desire to promote its tourist attractions.


Contact
For inquiries and feedback, please contact us at info@tembeakenya.com.