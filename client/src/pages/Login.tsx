import { SignIn } from "@clerk/clerk-react";

const Login = () => (
  <div className="flex justify-center items-center min-h-screen">
    <SignIn forceRedirectUrl="/dashboard" />
  </div>
);
export default Login;
