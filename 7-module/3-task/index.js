// export default class StepSlider {
//   constructor({ steps, value = 0 }) {
//   }
// }

export default class StepSlider {
  constructor(config) {
    this.steps = config.steps;
    this.value = config.value;
    this.render();
    this.initEventListeners();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.className = 'slider';
    this.elem.innerHTML = `
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
        ${Array.from({ length: this.steps }, (_, index) => `
          <span${index === this.value ? ' class="slider__step-active"' : ''}></span>
        `).join('')}
      </div>
    `;
  }

  initEventListeners() {
    this.elem.addEventListener('click', event => this.onClick(event));
  }

  onClick(event) {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);

    this.value = value;
    this.elem.querySelector('.slider__value').textContent = value;

    let valuePercents = value / segments * 100;
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');

    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;

    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    }));
  }
}