import axios from "axios";
import { AdminErr, AdminSuccess } from "../admin/const/admin.const";

import untils from "../admin/untils";

export const adminApi = {
  fetchAdmin: async (userName: string) => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/admin`);
  },
  loginAdmin: async function (data: { userName: string; password: string }) {
    try {
      const checkUser = await axios.get(
        `${import.meta.env.VITE_SERVER}/admin?${data.userName}`
      );
      console.log(checkUser);
      const user = checkUser?.data[0];
      if (!user)
        throw {
          message: AdminErr.Admin_err_userName,
        };
      if (user.userName !== data.userName)
        throw {
          message: AdminErr.Admin_err_userName,
        };

      if (data.password !== user.password)
        throw {
          message: AdminErr.Admin_err_password,
        };
      return {
        status: 200,
        data: await untils.jwt.createToken(user),
        message: AdminSuccess.Admin_success_userName,
      };
    } catch (err) {
      return {
        status: 500,
        message: (err as Error).message,
      };
    }
  },
};
