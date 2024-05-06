let colorBtns = document.querySelectorAll('.color-select input[type="radio"]');
let productImg = document.getElementById("productImg");
let controls = document.querySelector(".controls");


function changeImage(colorPrefix) {


    productImg.src = "/images/" + colorPrefix + "1.png";


    for (let i = 0; i < 3; i++) {
        controls.children[i].onclick = function () {
            productImg.src = "/images/" + colorPrefix + (i + 1) + ".png";
            for (let bt of controls.children) {
                bt.classList.remove("active");
            }
            this.classList.add("active");
        }
    }
}


colorBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
        let colorPrefix = '';
        switch (index) {
            case 0:
                colorPrefix = 'G';
                break;
            case 1:
                colorPrefix = 'R';
                break;
            case 2:
                colorPrefix = 'B';
                break;
            case 3:
                colorPrefix = 'P';
                break;
            case 4:
                colorPrefix = 'GR';
                break;
            case 5:
                colorPrefix = 'Y';
                break;
            case 6:
                colorPrefix = 'BL';
                break;

            default:
                colorPrefix = 'G';
        }
        changeImage(colorPrefix);

        for (let i = 1; i < controls.children.length; i++) {
            controls.children[i].classList.remove("active");
        }

        controls.children[0].classList.add('active');
    });
});


changeImage('G');
controls.children[0].classList.add('active');