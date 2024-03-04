import * as Yup from "yup";

interface FormData {
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}


export const validationSchema: Yup.Schema<FormData> = Yup.object({
  userName: Yup.string().required("Tên không được để trống"),
  phoneNumber: Yup.string()
    .test("is-unique", "Số điện thoại đã được đăng ký", async () => {
      // Thực hiện kiểm tra tùy chỉnh cho số điện thoại ở đây
      return true; // Trả về true nếu số điện thoại hợp lệ, false nếu không hợp lệ
    })
    .required("Số điện thoại không được để trống"),
  email: Yup.string()
    .test("is-unique", "Email đã được đăng ký", async () => {
      // Thực hiện kiểm tra tùy chỉnh cho email ở đây
      return true; // Trả về true nếu email hợp lệ, false nếu không hợp lệ
    })
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  password: Yup.string()
    .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự")
    .required("Mật khẩu không được để trống"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Mật khẩu xác nhận không khớp")
    .required("Mật khẩu xác nhận không được để trống"),
    
});

