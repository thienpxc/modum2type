// import untils from "../untils";
import { message } from "antd";
import apis from "../../apis/index";
import "./login.scss"

export default function Lognin() {
 


  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <title>CodePen - Animated Login Form using Html &amp; CSS Only</title>
        <link rel="stylesheet" href="./style.css" />
        {/* partial:index.partial.html */}
        <section>
          {" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span />
          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              const data: { userName: string; password: string; } = {
                userName: (e.target as any).userName.value,
                password: (e.target as any).password.value,
              };
              apis.admin.loginAdmin(data).then((res) => {
                if (res.status === 200) {
                  message.success(res.message);
                  localStorage.setItem("tokenAdmin", res.data as string);
                  window.location.href = "/admin";
                } else {
                  message.error(res.message);
                }
              });
            }}
            className="signin"
          >
            <div className="content">
              <h2>Admin</h2>
              <div className="form">
                <div className="inputBox">
                  <input type="text" name="userName" />
                  <i>Username</i>
                </div>
                <div className="inputBox">
                  <input type="password" name="password" /> <i>Password</i>
                </div>
                <div className="links">
                  {" "}
                  <a href="#">Forgot Password</a> <a href="#">Signup</a>
                </div>
                <div className="inputBox">
                  <input type="submit" defaultValue="Login" />
                </div>
              </div>
            </div>
          </form>
        </section>{" "}
        {/* partial */}
      </>
    </>
  );
}
