import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder2-f8ec3-default-rtdb.firebaseio.com";

export default instance;