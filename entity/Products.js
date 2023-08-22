class Product {
    img;
    category;
    name;
    price;
    discount;

    constructor(imgInput, categoryInput, nameInput, priceInput,discountInput) {
        this.img = imgInput;
        this.category = categoryInput;
        this.name = nameInput;
        this.price = priceInput;
        this.discount = discountInput
    }
    get img() {
        return this.img;
    }

    set img(value) {
        this.img = value;
    }

    get category() {
        return this.category;
    }

    set category(value) {
        this.category = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }
    get discount() {
        return this.discount;
    }

    set discount(value) {
        this.discount = value;
    }
}