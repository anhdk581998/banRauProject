class Store {
    listProducts;
    constructor() {
        this.listProducts = JSON.parse(localStorage.getItem('listProducts'));
    }

    add(newProduct){
        this.listProducts.push(newProduct);
        localStorage.setItem('listProducts',JSON.stringify(this.listProducts))
    }
    findAll(){
        this.listProducts = JSON.parse(localStorage.getItem('listProducts'))
        return this.listProducts;
    }
    remove(index){
        this.listProducts.splice(index, 1);
        localStorage.setItem('listProducts', JSON.stringify(this.listProducts));
    }

    edit(index, newProduct){
        this.listProducts[index] = newProduct
        localStorage.setItem('listProducts', JSON.stringify(this.listProducts));
    }
    search(index, value){
        let valueIndex = this.listProducts[index].name.toLowerCase().indexOf(value.toLowerCase());
        return valueIndex;
    }
}