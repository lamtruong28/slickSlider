$(document).ready(function(){
    $('.slider').slick({
        dots: true,     //chấm
        infinite: true, //vòng lặp khi đến slide cuối
        speed: 500, //tốc độ chuyển slide
        slidesToShow: 1, //số slide muốn hiển thị 1 lượt (số cột)
        slidesToScroll: 1, // số slide chuyển một lần,
        autoplay: true,      //tự động chuyển slide
        autoplaySpeed: 3000, //thời gian chuyển slide
        // fade: true,
        // cssEase: 'ease',
        // arrows: false, //btn next and previous :default true,
        draggable: true, //cho phép dùng chuột kéo slide
        swipe: true,     ////cho phép dùng chuột kéo slide
        rows: 1, //cài đặt số dòng
        useCSS: false,
        prevArrow:`<button type='button' class='slick-prev arrows'><ion-icon name="arrow-back-circle-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next arrows'><ion-icon name="arrow-forward-circle-outline"></ion-icon></button>`,
    });
});