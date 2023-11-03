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
                processWednesday(data); f
                break;
            default:
                break;
        }



    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });



function processMonday(data) {
    const mondayAssets = data[0].monday_assets; // Assuming you want the first item in the JSON array

    const celebritiesImage1 = mondayAssets[0].celebrities_image1;
    const celebritiesImage2 = mondayAssets[1].celebrities_image2;
    const celebritiesImage3 = mondayAssets[2].celebrities_image3;
    const celebritiesImage4 = mondayAssets[3].celebrities_image4;
    const celebritiesImage5 = mondayAssets[4].celebrities_image5;
    const celebritiesImage6 = mondayAssets[5].celebrities_image6;
    const celebritiesImage7 = mondayAssets[6].celebrities_image7;
    const celebritiesImage8 = mondayAssets[7].celebrities_image8;



    // Select the existing image elements by their class (assuming all images have the same class "image")
    const imageElements = document.querySelectorAll('.image');

    // Set the 'src' attributes for the images
    imageElements[0].src = celebritiesImage1;
    imageElements[1].src = celebritiesImage2;
    imageElements[2].src = celebritiesImage3;
    imageElements[3].src = celebritiesImage4;
    imageElements[4].src = celebritiesImage5;
    imageElements[5].src = celebritiesImage6;
    imageElements[6].src = celebritiesImage7;
    imageElements[7].src = celebritiesImage8;



    // Access the 'Monday' title from the JSON data
    const mondayTitle = data[0].monday_articles;

    // Find the HTML element with the class "title" and update its content
    const titleElement = document.querySelector('.title');
    titleElement.textContent = mondayTitle[0].celebrities_title;
    // Find the HTML element with the class "article" and update its content
    const articleElement = document.querySelector('.article');
    articleElement.textContent = mondayTitle[0].celebrities_article;
}


function processWednesday(data) {
    const wednesdayAssets = data[1].wednesday_assets; // Assuming you want the first item in the JSON array
    const celebritiesImage1 = wednesdayAssets[0].celebrities_image1;
    const celebritiesImage2 = wednesdayAssets[1].celebrities_image2;
    const celebritiesImage3 = wednesdayAssets[2].celebrities_image3;
    const celebritiesImage4 = wednesdayAssets[3].celebrities_image4;
    const celebritiesImage5 = wednesdayAssets[4].celebrities_image5;
    const celebritiesImage6 = wednesdayAssets[5].celebrities_image6;
    const celebritiesImage7 = wednesdayAssets[6].celebrities_image7;
    const celebritiesImage8 = wednesdayAssets[7].celebrities_image8;



    // Select the existing image elements by their class (assuming all images have the same class "image")
    const imageElements = document.querySelectorAll('.image');

    // Set the 'src' attributes for the images
    imageElements[0].src = celebritiesImage1;
    imageElements[1].src = celebritiesImage2;
    imageElements[2].src = celebritiesImage3;
    imageElements[3].src = celebritiesImage4;
    imageElements[4].src = celebritiesImage5;
    imageElements[5].src = celebritiesImage6;
    imageElements[6].src = celebritiesImage7;
    imageElements[7].src = celebritiesImage8;



    // Access the 'wednesday' title from the JSON data
    const wednesdayTitle = data[1].wednesday_articles;

    // Find the HTML element with the class "title" and update its content
    const titleElement = document.querySelector('.title');
    titleElement.textContent = wednesdayTitle[0].celebrities_title;
    // Find the HTML element with the class "article" and update its content
    const articleElement = document.querySelector('.article');
    articleElement.textContent = wednesdayTitle[1].celebrities_article;
}