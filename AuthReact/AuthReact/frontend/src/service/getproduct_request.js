import http from '../http_common';

class ProductDataService {

    getdataproduct() {
        return http.get("api/product");        
    }  
    
}

export default new ProductDataService();