const images = [
    '/images/img2.png',
    '/images/img3.png',
    '/images/img6.png',
    '/images/img7.png',
];

class Carousel{
    constructor(container){
        this.track = container.querySelector('.carousel-track');
        this.currentIndex = images.length;
        this.setupCarousel();
        this.addEventListeners(container);
    }

    setupCarousel(){
        const allimg = [...images, ...images, ...images, ...images];
        allimg.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${src}" alt="Image ${index}">`;
            this.track.appendChild(slide);
        });
        this.updatePosition;
    }

    updatePosition() {
        this.track.style.transform = `translateX(-${this.currentIndex * (100/3)}%)`;
      }


      addEventListeners(container) {
        container.querySelector('.prev').addEventListener('click', () => this.prev());
        container.querySelector('.next').addEventListener('click', () => this.next());
        
        this.track.addEventListener('transitionend', () => {
          if (this.currentIndex <= images.length/2) {
            this.track.style.transition = 'none';
            this.currentIndex += images.length;
            this.updatePosition();
            setTimeout(() => {
              this.track.style.transition = 'transform 0.5s ease-out';
            });
          } else if (this.currentIndex >= this.track.children.length - images.length - 3) {
            this.track.style.transition = 'none';
            this.currentIndex -= images.length;
            this.updatePosition();
            setTimeout(() => {
              this.track.style.transition = 'transform 0.5s ease-out';
            });
          }
        });
      }

      next() {
        this.currentIndex++;
        this.updatePosition();
      }

      prev() {
        this.currentIndex--;
        this.updatePosition();
      }
    }

new Carousel(document.querySelector('.carousel-container'));
    

async function loadImages() {
  try {
      const response = await fetch('/scripts/single_page.json');
      const data = await response.json();
      const grid = document.getElementById('gallery-imgs');
      
      data.images.forEach(image => {
          const div = document.createElement('div');
          div.className = 'gallery-item';
          div.innerHTML = `<img src="${image.url}" alt="Travel Image">`;
          grid.appendChild(div);
      });
  } catch (error) {
      console.error('Error loading images:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadImages);



const adultPrice = 490;
const childPrice = 200;

const adultsInput = document.getElementById("adults");
const childrenInput = document.getElementById("children");
const totalPriceEl = document.getElementById("totalPrice");
const bookNowButton = document.getElementById("bookNow");

const adultDecrease = document.getElementById("adultDecrease");
const adultIncrease = document.getElementById("adultIncrease");
const childDecrease = document.getElementById("childDecrease");
const childIncrease = document.getElementById("childIncrease");

const healthInsurance = document.getElementById("healthInsurance");
const medicalInsurance = document.getElementById("medicalInsurance");

function calculateTotal() {
  const adults = parseInt(adultsInput.value, 10);
  const children = parseInt(childrenInput.value, 10);

  let total = adults * adultPrice + children * childPrice;

  if (healthInsurance.checked) total += parseInt(healthInsurance.dataset.price, 10);
  if (medicalInsurance.checked) total += parseInt(medicalInsurance.dataset.price, 10);

  totalPriceEl.textContent = `$${total}`;
  bookNowButton.textContent = `BOOK NOW FOR $${total}`;
}

adultIncrease.addEventListener("click", () => {
  adultsInput.value = parseInt(adultsInput.value, 10) + 1;
  calculateTotal();
});

adultDecrease.addEventListener("click", () => {
  if (adultsInput.value > 1) {
    adultsInput.value = parseInt(adultsInput.value, 10) - 1;
    calculateTotal();
  }
});

childIncrease.addEventListener("click", () => {
  childrenInput.value = parseInt(childrenInput.value, 10) + 1;
  calculateTotal();
});

childDecrease.addEventListener("click", () => {
  if (childrenInput.value > 0) {
    childrenInput.value = parseInt(childrenInput.value, 10) - 1;
    calculateTotal();
  }
});

healthInsurance.addEventListener("change", calculateTotal);
medicalInsurance.addEventListener("change", calculateTotal);