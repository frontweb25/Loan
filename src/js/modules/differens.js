export default class Differens {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    animated(item) {
        item.forEach(item => item.classList.add('animated', 'fadeInDown'));
    }

    bindeTrigers(itemsOfiicer, itemsCount, itemsOld) {
         itemsOfiicer.querySelector('.plus').addEventListener('click', () => {
            if (itemsCount !== itemsOld.length - 2) {
                itemsOld[itemsCount].style.display = 'flex';
                itemsCount++;
            } else {
                itemsOld[itemsCount].style.display = 'flex';
                itemsOld[itemsOld.length - 1].remove();
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
        this.bindeTrigers(this.oldOfficer, this.oldCounter, this.oldItems);
        this.bindeTrigers(this.newOfficer, this.newCounter, this.newItems);
        this.animated(this.oldItems);
        this.animated(this.newItems);
    }

    
}

