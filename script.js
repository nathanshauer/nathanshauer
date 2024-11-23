document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.simulation-photo');
    let currentPhotoIndex = 0;

    function showNextPhoto() {
        photos[currentPhotoIndex].style.display = 'none';
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photos[currentPhotoIndex].style.display = 'block';
    }

    setInterval(showNextPhoto, 3000); // Change photo every 5 seconds
});