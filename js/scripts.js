// Fetch the JSON data from your file (assuming the JSON file is named data.json)
fetch('./json/articles.json')
    .then(response => response.json())
    .then(data => {
        // Access the 'monday_assets' array in the JSON data
        const mondayAssets = data[0].monday_assets; // Assuming you want the first item in the JSON array

        // Loop through the 'monday_assets' array
        mondayAssets.forEach((asset, index) => {
            // Access the image source for each 'celebrities_imageX'
            const imageSrc = asset[`celebrities_image${index + 1}`];

            // Select the existing image element by its class (assuming all images have the same class "image")
            const imageElement = document.querySelectorAll('.image')[index];

            // Set the 'src' attribute for the image
            imageElement.src = imageSrc;

            // Set an 'alt' attribute (you can customize the alt text as needed)
            imageElement.alt = `Image ${index + 1}`;
        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
