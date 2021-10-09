
import http from '../http_common';

class AuthDataService {

    register(data) {
        return http.post("api/account/register", data);
    }
    login(data){
        return http
            .post("api/account/login", data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    }
    
}

export default new AuthDataService();