document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.querySelector('.slider__bar-range');
    const afterImage = document.querySelector('.slider__cat-image--after');
    const beforeImage = document.querySelector('.slider__cat-image--before');

    rangeInput.addEventListener('input', () => {
        //value от 0 до 100
        const value = rangeInput.value;
        //режет справа фото толстого кота на значение ползунка, чем больше тянешь влево, тем больше показывается фото кота
        beforeImage.style.clipPath = `inset(0 ${value}% 0 0)`;
        //режет слева фото худого кота, 100 и значение ползунка, получается чем больше тянешь вправо, тем меньше обрезки
        afterImage.style.clipPath = `inset(0 0 0 ${100 - value}%)`;
    });
});
