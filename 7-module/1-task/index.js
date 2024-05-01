import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
    constructor(categories) {
        this.categories = categories;
        this.render();
        this.initEvents();
    }

    render() {
        this.elem = createElement(`
        <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
          <nav class="ribbon__inner"></nav>
          <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        </div>
        `);

        let ribbonInner = this.elem.querySelector('.ribbon__inner');

        let categories = this.categories.map(category => createElement(`
        <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
        `));

        ribbonInner.append(...categories);
    }

    initEvents() {
        this.elem.querySelector('.ribbon__inner').addEventListener('click', (e) => {
            e.preventDefault();
            let selectedCategoryId = e.target.dataset.id;
            this.selectCategory(selectedCategoryId);
        });

        this.elem.querySelector('.ribbon__arrow_right').addEventListener('click', () => {
            this.scrollRight();
        });

        this.elem.querySelector('.ribbon__arrow_left').addEventListener('click', () => {
            this.scrollLeft();
        });

        this.elem.querySelector('.ribbon__inner').addEventListener('scroll', () => {
            this.toggleArrowsVisibility();
        });
    }

    selectCategory(categoryId) {
        let prevSelected = this.elem.querySelector('.ribbon__item_active');
        if (prevSelected) {
            prevSelected.classList.remove('ribbon__item_active');
        }

        let selected = this.elem.querySelector(`.ribbon__item[data-id="${categoryId}"]`);
        selected.classList.add('ribbon__item_active');

        let event = new CustomEvent('ribbon-select', {
            detail: categoryId,
            bubbles: true
        });

        this.elem.dispatchEvent(event);
    }

    scrollRight() {
        this.elem.querySelector('.ribbon__inner').scrollBy(350, 0);
    }

    scrollLeft() {
        this.elem.querySelector('.ribbon__inner').scrollBy(-350, 0);
    }

    toggleArrowsVisibility() {
        let ribbonInner = this.elem.querySelector('.ribbon__inner');
        let scrollLeft = ribbonInner.scrollLeft;
        let scrollWidth = ribbonInner.scrollWidth;
        let clientWidth = ribbonInner.clientWidth;
        let scrollRight = scrollWidth - scrollLeft - clientWidth;

        this.elem.querySelector('.ribbon__arrow_left').classList.toggle('ribbon__arrow_visible', scrollLeft > 0);
        this.elem.querySelector('.ribbon__arrow_right').classList.toggle('ribbon__arrow_visible', scrollRight > 1);
    }
}