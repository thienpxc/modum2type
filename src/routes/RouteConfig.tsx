import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyFn } from "./lazy";
import SignUp from "../pages/home/components/SignUp/SignUp";
import Accounts from "../components/account/Account";
import Email from "../components/account/email/email";
import Number from "../components/account/number/number";
import Profiler from "../components/account/profile/Profile";
import Password from "../components/account/password/Password";
import Name from "../components/account/name/UserName";
export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={lazyFn(() => import("../pages/home/Home"))} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/signin"
          element={lazyFn(
            () => import("../pages/home/components/SignIn/Signin")
          )}
        />
        <Route path="/accounts" element={<Accounts />}>
          <Route path="/accounts/email" element={<Email />} />
          <Route path="/accounts/password" element={<Password />} />
          <Route path="/accounts/profile" element={<Profiler />} />
          <Route path="/accounts/number" element={<Number />} />
          <Route path="/accounts/name" element={<Name />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
