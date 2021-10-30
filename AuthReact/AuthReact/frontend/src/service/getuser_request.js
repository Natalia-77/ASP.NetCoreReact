import http from '../http_common';

class UserDataService {

    getdata() {
        return http.get("api/user");        
    }  
    
}

export default new UserDataService();