import http from'../http_common';

class CartService {

    add(data) {
        return http.post("api/cart/add", data);
    }

    list() {
        return http.get("api/cart/list");
    }
}

export default new CartService();