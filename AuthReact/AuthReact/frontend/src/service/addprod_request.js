import http from '../http_common';

class AddDataService {

    addproduct(data) {
        return http.post("api/product/add", data, {
           
        });
    }  
    
}

export default new AddDataService();