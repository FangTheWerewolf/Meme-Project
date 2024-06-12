document.addEventListener("DOMContentLoaded", function() {
    const memeForm = document.getElementById("memeForm");
    const memeImage = document.getElementById("memeImage");
    const memeTextTop = document.getElementById("memeTextTop");
    const memeTextBottom = document.getElementById("memeTextBottom");
    const errorContainer = document.getElementById("errorContainer");
    const deleteButton = document.getElementById("deleteButton");

    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const topText = document.getElementById("topText").value;
        const bottomText = document.getElementById("bottomText").value;
        const imageUrl = document.getElementById("imageUrl").value;

        if (!imageUrl) {
            errorContainer.textContent = "Error: Image URL is required.";
            return;
        }

        memeImage.src = imageUrl;
        memeImage.onerror = function() {
            errorContainer.textContent = "Error: Failed to generate meme image. Please check the input values.";
            memeImage.src = "";
        };

        memeTextTop.textContent = topText;
        memeTextBottom.textContent = bottomText;
    });

    function addImageUrl() {
        // Handle adding image URL if needed
    }

    document.getElementById('addImage').onclick = function() {
        addImageUrl();
    };

    deleteButton.addEventListener("click", function() {
        memeImage.src = ""; // Clear image source
        memeTextTop.textContent = ""; // Clear top text
        memeTextBottom.textContent = ""; // Clear bottom text
    });
});

