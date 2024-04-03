document.addEventListener("DOMContentLoaded", function() {
    // Function to animate floating images
    function animateFloatingImages() {
        // Select all floating images
        var floatingImages = document.querySelectorAll('.floating-images img');

        // Loop through each image and apply animation
        floatingImages.forEach(function(img, index) {
            // Set a delay for each image to create staggered animation
            setTimeout(function() {
                // Apply vertical floating animation
                img.style.animation = 'float 5s infinite'; // Adjust animation duration as needed
            }, index * 500); // Adjust delay between each image
        });
    }

    // Call the function to animate floating images
    animateFloatingImages();
});
