import { SignUp } from "@clerk/clerk-react";

const Signup = () => (
  <div className="flex justify-center items-center min-h-screen">
    <SignUp forceRedirectUrl="/dashboard" />
  </div>
);
export default Signup;
