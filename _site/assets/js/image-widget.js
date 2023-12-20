document.addEventListener('DOMContentLoaded', function(){
    var images = [
        'assets/images/wid_img/img22.jpg',
        'assets/images/wid_img/img11.jpg',
        // 'assets/images/000000368982_scissors.jpg',
        // 'assets/images/000000002157_dining table.jpg',
    ];

    var imageIndex = 0;
    var imageElement = document.getElementById('widget-image');

    function changeImage(){
        imageElement.src = images[imageIndex];
        imageIndex = (imageIndex+1) % images.length;
    }

    changeImage();

    setInterval(changeImage,2000);
    // Add a class to the widget container for styling

});