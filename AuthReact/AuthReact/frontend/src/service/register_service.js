
import http from '../http_common';

class AuthDataService {

    register(data) {
        return http.post("api/account/register", data);
    }
    
}

export default new AuthDataService();