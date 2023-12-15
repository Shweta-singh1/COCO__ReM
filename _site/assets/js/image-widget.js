document.addEventListener('DOMContentLoaded', function(){
    var images = [
        '{{ site.baseurl }}/assets/images/000000580410_couch (1).jpg',
        '{{ site.baseurl }}/assets/images/000000138954_apple.jpg',
        '{{ site.baseurl }}/assets/images/000000368982_scissors.jpg',
        '{{ site.baseurl }}/assets/images/000000002157_dining table.jpg',
    ];

    var imageIndex = 0;
    var imageElement = document.getElementById('widget-image');

    function changeImage(){
        imageElement.src = images[imageIndex];
        imageIndex = (imageIndex+1) % images.length;
    }

    changeImage();

    setInterval(changeImage,2000);

});