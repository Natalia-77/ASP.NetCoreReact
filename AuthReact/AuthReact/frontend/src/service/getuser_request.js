import http from '../http_common';

class UserDataService {

    getdata(data) {
        return http.get("api/user", data);        
    }  
    
}

export default new UserDataService();