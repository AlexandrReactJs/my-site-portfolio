import axios from "axios";

const instance = axios.create({
    baseURL : "https://62c5b945a361f725128cd8a5.mockapi.io/"
});


export const portfolioApi = {
    getPortfolioItemsApi () {
        return instance.get('portfolioItems').then(response => {
            return response.data
        })
    }
}