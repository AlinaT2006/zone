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
    } else {
        i = 0
        this.text.innerHTML = ""
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
    this.maxAngle = maxAngle; // максимальный угол отклонения
    this.angle = 0; // начальный угол
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
      this.direction *= -1; // движение в противоположную сторону и возвращение в исходную позицию
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
    // область видимости элемента
    const sectionRect = this.section.getBoundingClientRect(); 
    // Метод getBoundingClientRect() возвращает координаты в контексте окна 
    // для минимального по размеру прямоугольника, который заключает в себе элемент
    if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
      this.flipLeftCards.forEach((flipLeft) => {
        const speed = flipLeft.getAttribute("data-speed");
        flipLeft.style.transition = speed + "ms";
        flipLeft.classList.add("active");
      })} else {
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
      })} else {
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
    this.img.forEach((item) => {
      item.style.transition = "transform 0.2s ease-out";
      item.addEventListener("mousemove", (e) => this.rotate(e, item));
      item.addEventListener("mouseout", () => this.rotateNone(item));
    });
  }

  rotate(e, item) {
    const halfHeight = item.offsetHeight / 2;
    const halfWidth = item.offsetWidth / 2;
    const rotateX = (halfHeight - e.offsetY) / 10; // угол отклонения по оси X
    const rotateY = (e.offsetX - halfWidth) / 10; // угол отклонения по оси Y
    item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  rotateNone(item) {
    item.style.transform = `rotate(0)`; // перезагрузка анимации, обнуление
  }
}

const rotate = new Rotate3D({
  img: ".img-item",
});

class TeamScroll {
  constructor(obj) {
    this.section = document.querySelector(obj.section);
    this.startAnimation();
  }
  startAnimation() {
    window.addEventListener("scroll", () => this.fadeRight());
  }
  fadeRight() {
    const fadeRightCards = this.section.querySelectorAll(".fade-right");
    fadeRightCards.forEach((fadeRight) => {
      const rect = fadeRight.getBoundingClientRect();
      const speed = fadeRight.getAttribute("data-speed");
      fadeRight.style.transition = speed + "ms";
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        fadeRight.classList.add("active");
      } else {
        fadeRight.classList.remove("active");
      }
    });
  }
}

const teamScroll = new TeamScroll({
  section: ".team__wrap",
});
