import axios from 'axios';
import {API_KEY} from "@env";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: `Bearer ${API_KEY}`
    }
});



// yelp.get('/search')