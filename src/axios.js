import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-9f6b5-default-rtdb.firebaseio.com";

export default instance;