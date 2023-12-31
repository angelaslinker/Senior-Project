// Fetch the JSON data from your file (assuming the JSON file is named data.json)
fetch('./json/articles.json')
    .then(response => response.json())
    .then(data => {

        let day = new Date().getDay();

        switch (day) {
            case 1:
            case 2:
                processMonday(data);
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 0:
                processWednesday(data);
                break;
            default:
                break;
        }



    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });

function processMonday(data) {
    // Access the 'monday_assets' array in the JSON data
    const mondayAssets = data[0].monday_assets; // Assuming you want the first item in the JSON array

    // Access specific images by their keys
    const celebritiesImage1 = mondayAssets[0].celebrities_image1;
    const shoppingImage1 = mondayAssets[8].shopping_image1;
    const celebritiesImage2 = mondayAssets[1].celebrities_image2;
    const shoppingImage2 = mondayAssets[9].shopping_image2;

    // Select the existing image elements by their class (assuming all images have the same class "image")
    const imageElements = document.querySelectorAll('.image');

    // Set the 'src' attributes for the images
    imageElements[0].src = celebritiesImage1;
    imageElements[1].src = shoppingImage2;
    imageElements[2].src = celebritiesImage2;
    imageElements[3].src = shoppingImage1;

    // Access the 'Monday' quote from the JSON data
    const mondayQuote = data[0].quote;

    // Find the HTML element with the class "quote" and update its content
    const quoteElement = document.querySelector('.quote');
    quoteElement.textContent = mondayQuote;
}


function processWednesday(data) {
    // Access the 'wednesday_assets' array in the JSON data
    const wednesdayAssets = data[1].wednesday_assets; // Assuming you want the first item in the JSON array

    // Access specific images by their keys
    const celebritiesImage1 = wednesdayAssets[0].celebrities_image1;
    const shoppingImage1 = wednesdayAssets[8].shopping_image1;
    const celebritiesImage2 = wednesdayAssets[1].celebrities_image2;
    const shoppingImage2 = wednesdayAssets[9].shopping_image2;

    // Select the existing image elements by their class (assuming all images have the same class "image")
    const imageElements = document.querySelectorAll('.image');

    // Set the 'src' attributes for the images
    imageElements[0].src = celebritiesImage1;
    imageElements[1].src = shoppingImage2;
    imageElements[2].src = celebritiesImage2;
    imageElements[3].src = shoppingImage1;

    // Access the 'Monday' quote from the JSON data
    const wednesdayQuote = data[1].quote;

    // Find the HTML element with the class "quote" and update its content
    const quoteElement = document.querySelector('.quote');
    quoteElement.textContent = wednesdayQuote;
}

