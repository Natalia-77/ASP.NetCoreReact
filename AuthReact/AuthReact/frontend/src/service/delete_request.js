
import http from '../http_common';

class DeleteUserService {

    deletedata(id) {
        return http.delete("api/user/"+id,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });        
    }      
}

export default new DeleteUserService();
