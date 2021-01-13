class Cart {
    constructor(user, store = {}) {
        this.user = user;
        this.store = store;
        this.store = {};
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotied() {
        this.user;
    }
}
const cart2 = new PromotionCart({ name: 'john' });
cart2.addPromotied();
const cartJohn = new Cart({ name: 'john ' });
const cartJay = new Cart({ name: 'jay' });
//# sourceMappingURL=class.js.map