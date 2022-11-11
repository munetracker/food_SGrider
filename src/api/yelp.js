import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: 'Bearer m5x675yftRncf4X8eUqJ6bTtgbZAiCC2ftbc06jOdR1QCAM8PUNNoLhZBHmbpegCILWWFKxpksTcweHb_SLt-TTlPhuKz5y7p6f8y7m31-jJk4t6Bfr1ZaMydf9tY3Yx'
    }
});



// yelp.get('/search')