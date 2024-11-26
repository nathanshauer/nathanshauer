document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.simulation-photo');
    let currentPhotoIndex = 0;

    function showNextPhoto() {
        photos[currentPhotoIndex].style.display = 'none';
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photos[currentPhotoIndex].style.display = 'block';
    }

    setInterval(showNextPhoto, 3000); // Change photo every 5 seconds

    // Add smooth scrolling to all internal links with class "nav-link"
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Check if the link is an internal link
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                e.preventDefault();

                // Store hash
                const hash = this.hash;

                // Using scrollIntoView to add smooth page scroll
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.history.pushState(null, null, hash);
            }
        });
    });
});