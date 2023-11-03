// Fetch the JSON data from your file (assuming the JSON file is named data.json)
fetch('./json/articles.json')
    .then(response => response.json())
    .then(data => {
        const mondayAssets = data[0].monday_assets; // Assuming you want the first item in the JSON array

        // Access specific images by their keys
        const shoppingImage1 = mondayAssets[8].shopping_image1;
        const shoppingImage2 = mondayAssets[9].shopping_image2;
        const shoppingImage3 = mondayAssets[10].shopping_image3;
        const shoppingImage4 = mondayAssets[11].shopping_image4;
        const shoppingImage5 = mondayAssets[12].shopping_image5;
        const shoppingImage6 = mondayAssets[13].shopping_image6;
        const shoppingImage7 = mondayAssets[14].shopping_image7;
        const shoppingImage8 = mondayAssets[15].shopping_image8;



        // Select the existing image elements by their class (assuming all images have the same class "image")
        const imageElements = document.querySelectorAll('.image');

        // Set the 'src' attributes for the images
        imageElements[0].src = shoppingImage1;
        imageElements[1].src = shoppingImage2;
        imageElements[2].src = shoppingImage3;
        imageElements[3].src = shoppingImage4;
        imageElements[4].src = shoppingImage5;
        imageElements[5].src = shoppingImage6;
        imageElements[6].src = shoppingImage7;
        imageElements[7].src = shoppingImage8;



        // Access the 'Monday' title from the JSON data
        const mondayTitle = data[0].monday_articles;

        // Find the HTML element with the class "title" and update its content
        const titleElement = document.querySelector('.title');
        titleElement.textContent = mondayTitle[0].shopping_title;
        // Find the HTML element with the class "article" and update its content
        const articleElement = document.querySelector('.article');
        articleElement.textContent = mondayTitle[0].shopping_article;
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
