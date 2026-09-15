const IMAGE_ROOT = "../assets/img/work5";
let step = 1;

const onion_image = document.querySelector('.onion_image');

onion_image.addEventListener('click', () => {
    step++;   
    if (step <= 4){
        // 剥洋葱
        let img_path = `${IMAGE_ROOT}/onion${step}.png`;
        onion_image.src = img_path;
    } else if (step === 5){
        // 眼睛无限放大
        let img_path = `${IMAGE_ROOT}/eye.png`;
        onion_image.src = img_path;
        onion_image.classList.add('eye-zoom');
    }

})