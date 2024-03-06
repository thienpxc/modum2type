import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyFn } from "./lazy";
import SignUp from "../pages/home/components/SignUp/SignUp";
import Accounts from "../components/account/Account";
import Email from "../components/account/email/email";
import Number from "../components/account/number/number";
import Password from "../components/account/password/Password";
import Name from "../components/account/name/UserName";
import Lognin from "../admin/lognin/Login";

export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={lazyFn(
            () => import("../pages/home/Home"),
            localStorage.getItem("token") !== null ? true : false,
            "/"
          )}
        />
        <Route
          path="/signup"
          element={lazyFn(
            () => import("../pages/home/components/SignUp/SignUp")
          )}
        />
        <Route
          path="/signin"
          element={lazyFn(
            () => import("../pages/home/components/SignIn/Signin"),
            localStorage.getItem("token") !== null ? false : true,
            "/"
          )}
        />
        <Route path="/accounts" element={<Accounts />}>
          <Route path="/accounts/email" element={<Email />} />
          <Route path="/accounts/password" element={<Password />} />
          <Route
            path="/accounts/profile"
            element={lazyFn(
              () => import("../components/account/profile/Profile")
            )}
          />
          <Route path="/accounts/number" element={<Number />} />
          <Route path="/accounts/name" element={<Name />} />
        </Route>
        {/* <Route path="/login" element={<Lognin />} /> */}
        <Route
          path="/login"
          element={lazyFn(
            () => import("../admin/lognin/Login"),
            localStorage.getItem("tokenAdmin") !== null ? false : true,
            "/admin"
          )}
        />

        <Route
          path="/admin"
          element={lazyFn(
            () => import("../admin/Admin"),
            localStorage.getItem("tokenAdmin") !== null ? true : false,
            "/login"
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}
