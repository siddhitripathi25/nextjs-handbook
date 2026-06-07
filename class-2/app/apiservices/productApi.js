import axios from "axios";
let getProducts = () => {
    return axios.get(`https://dummyjson.com/products`)   ///WE CAN FETCH API USING AXIOS OR FETCH.
    .then((res) => res.data.products)   ///WE CAN ALSO USE .THEN TO GET THE DATA FROM THE API AND THEN RETURN IT.
}

export { getProducts }   ///WE NEED TO EXPORT THE FUNCTION SO THAT WE CAN USE IT IN OTHER FILES.