interface User {
    name: string;
}

interface Product {
    id: string;
    price: number;
}

class Cart {
    // 기본 public접근 제한자
    // protected는 상속 받은 클래스에서 접근 가능
    // protected user: User;
    // private 속성과 메서드 접근 제한 | 내부에서는 접근 가능
    // private store: object;
    // 접근제한자와 속성을 단축하여 작성됨
    constructor(protected user: User, private store: object = {}) {
        // this.user = user;
        this.store = {};
    }
    public put(id: string, product: Product) {
        this.store[id] = product;
    }
    get(id: string) {
        return this.store[id];
    }
}

//  상속을 받았으므로 protected 접근 가능
class PromotionCart extends Cart {
    addPromotied() {
        this.user;
    }
}

//  하우에서 정의하면 상위 메서드까지 사용 가능
const cart2 = new PromotionCart({ name: 'john' });
cart2.addPromotied();
const cartJohn = new Cart({name: 'john '});
const cartJay = new Cart({ name: 'jay' });