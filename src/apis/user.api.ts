import axios from "axios";


const prefix = "user";
export const userApi = {
  fetchUser: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },
  
};
