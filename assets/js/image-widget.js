document.addEventListener('DOMContentLoaded', function(){
    var images = [
        '000000580410_couch (1).jpg',
        '000000138954_apple.jpg',
        '000000368982_scissors.jpg',
        '000000002157_dining table.jpg',
    ];

    var imageIndex = 0;
    var imageElement = document.getElementById('widget-image');
    var baseurl = '{{ site.baseurl }}';

    function changeImage() {
        imageElement.src = baseurl + '/assets/images/' + images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length;
    }

    changeImage();

    setInterval(changeImage, 2000);
});
