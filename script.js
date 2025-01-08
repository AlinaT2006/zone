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
      blur.style.transition = "transform 2s linear"; 
      blur.style.transform = `translate(${randomX}px, ${randomY}px)`; 
    });
    setTimeout(() => this.moveElements(), 2000); 
  }
}

const blur = new Blur({
  blurs: ".blur-group",
});

class Typing {
  constructor(text) {
    this.text = document.querySelector(text);
    this.fullText = this.text.innerHTML;
    this.text.innerHTML = "";
    this.typeText();
  }
  typeText(i = 0) {
    this.text.innerHTML += this.fullText[i];
    i++;
    if (i < this.fullText.length) {
      setTimeout(() => {
        this.typeText(i);
      }, 100);
    }
  }
}

const typingEl = new Typing(".solutions__desc-title");

class Move {
  constructor(obj, maxAngle = 15) {
    this.pic = document.querySelector(obj);
    this.maxAngle = maxAngle;
    this.angle = 0;
    this.direction = 1;
    this.moveStart();
  }
  moveStart() {
    setInterval(() => this.movePic(), 50);
  }
  movePic() {
    this.angle += this.direction;
    this.pic.style.transform = `rotate(${this.angle}deg)`;
    if (this.angle >= this.maxAngle || this.angle <= -this.maxAngle) {
      this.direction *= -1;
    }
  }
}

const move = new Move(".solutions__img-item");

class Scroll1 {
  constructor(obj) {
    this.section = document.querySelector(obj.section);
    this.flipLeftCards = this.section.querySelectorAll(".flip-left");
    window.addEventListener("scroll", () => {
      this.checkVisibility();
    });
  }
  checkVisibility() {
    const sectionRect = this.section.getBoundingClientRect();
    if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
      this.flipLeftCards.forEach((flipLeft) => {
        const speed = flipLeft.getAttribute("data-speed");
        flipLeft.style.transition = speed + "ms";
        flipLeft.classList.add("active");
      });
    } else {
      this.flipLeftCards.forEach((flipLeft) => {
        flipLeft.classList.remove("active");
      });
    }
  }
}

const scroll1 = new Scroll1({
  section: ".service__wrap-section1",
});

class Scroll2 {
  constructor(obj) {
    this.section = document.querySelector(obj.section);
    this.flipRightCards = this.section.querySelectorAll(".flip-right");
    window.addEventListener("scroll", () => {
      this.checkVisibility();
    });
  }
  checkVisibility() {
    const sectionRect = this.section.getBoundingClientRect(); 
    if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
      this.flipRightCards.forEach((flipRight) => {
        const speed = flipRight.getAttribute("data-speed");
        flipRight.style.transition = speed + "ms";
        flipRight.classList.add("active");
      });
    } else {
      this.flipRightCards.forEach((flipRight) => {
        flipRight.classList.remove("active");
      });
    }
  }
}
const scroll2 = new Scroll2({
  section: ".service__wrap-section2",
});

class Rotate3D {
  constructor(obj) {
    this.img = document.querySelectorAll(obj.img);
    this.img.forEach(item => {
      item.addEventListener('mousemove', (e) => this.rotate(e, item));
      item.addEventListener('mouseout', () => this.resetRotation(item)); 
    });
  }

  rotate(e, item) {
    const imgItem = item.querySelector('.img-item');
    const halfWidth = imgItem.offsetWidth / 2;
    const halfHeight = imgItem.offsetHeight / 2;
    const rotateX = ((e.offsetY - halfHeight) / halfHeight) * 30;  
    const rotateY = ((e.offsetX - halfWidth) / halfWidth) * -30; 

    imgItem.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;  
  }

  resetRotation(item) {
    const imgItem = item.querySelector('.img-item');
    imgItem.style.transform = 'rotateX(0deg) rotateY(0deg)';  
  }
}

const rotate = new Rotate3D({
  img: '.section__img', 
});

