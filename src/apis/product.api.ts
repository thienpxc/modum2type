import axios from "axios";

const product = "producthome";
export const productApi = {
  productApi: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${product}`);
  },
  
};