document.addEventListener('DOMContentLoaded', function(){
    var images = [
        '/assets/images/000000580410_couch (1).jpg',
        '/assets/images/000000138954_apple.jpg',
        '/assets/images/000000368982_scissors.jpg',
        '/assets/images/000000002157_dining table.jpg',
    ];

    var imageIndex = 0;
    var imageElement = document.getElementById('widget-image');
    var baseurl = imageElement.getAttribute('data-baseurl');
    function changeImage(){
        imageElement.src = images[imageIndex];
        imageIndex = (imageIndex+1) % images.length;
    }

    changeImage();

    setInterval(changeImage,2000);

});