
import axios from "axios";
class PicLibService {

    getImages = (callback) => {

      
        const config = {
            headers: { Authorization: "Client-ID AHZa22NIB09OeBz_TFrdQTGkDE477MPsDoGPcz-Qyuo", },
        };

        let urlToPass = "https://api.unsplash.com/search/photos?page="+callback.data.pageNumber+"&query="+callback.data.keyword.toLowerCase();

      
        axios.get(urlToPass,config).then((response) => {
           
           
            callback.onSuccess(response.data)
        })

       
    }

}

export default PicLibService;