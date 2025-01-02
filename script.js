class Blur {
  constructor(obj) {
    this.blurs = document.querySelectorAll(obj.blurs);
    this.moveElements(); 
  }

  // функция рандомайзера
  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // функция движения блюр-элементов
  moveElements() {
    this.blurs.forEach((blur) => {
      const randomX = this.random(0, innerWidth - blur.offsetWidth);
      const randomY = this.random(0, innerHeight - blur.offsetHeight);
      blur.style.transition = "transform 2s linear"; // плавный переход 
      blur.style.transform = `translate(${randomX}px, ${randomY}px)`; // перемещение
    });
    setTimeout(() => this.moveElements(), 2000); // рекурсия
  }
}

const blur = new Blur({
  blurs: ".blur-group",
});
