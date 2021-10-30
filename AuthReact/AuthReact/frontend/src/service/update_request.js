import http from '../http_common';

class UpdateUserService {

    putdata(id,data) {
        return http.put("api/user/"+id,data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });        
    }      
}

export default new UpdateUserService();