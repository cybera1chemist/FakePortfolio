const IMAGE_ROOT = "../assets/img/work5";
const NUM_IMAGE = 4;
let step = 1;

const onion_image = document.querySelector('.onion_image');

let images = [];
for (let i = 1; i <= NUM_IMAGE; i++){
    const img = new Image();
    img.src = `${IMAGE_ROOT}/onion${i}.png`;
    images.push(img);
}


onion_image.addEventListener('click', () => {
    step++;   
    if (step <= NUM_IMAGE){
        // 剥洋葱
        onion_image.src = images[step - 1].src;
    } 
    else if (step === NUM_IMAGE + 1){
        // 眼睛无限放大
        let img_path = `${IMAGE_ROOT}/eye.png`;
        onion_image.src = img_path;
        onion_image.classList.add('eye-zoom');
    }
})