import axios from "axios";

const hostUrl = "http://localhost:8090";

export const getData = url => {
    console.log("asdasdasdsd");
    return axios.get(hostUrl + url);
}

export const postData = (url, data) => {
    return axios.post(hostUrl + url, data);
}

export const deleteData = (url, id) => {
    return axios.delete(hostUrl + url + "/" + id);
}