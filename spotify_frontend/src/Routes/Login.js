import { Icon } from "@iconify/react";
import TextInput from "../components/shared/Textinput";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-3 border-b w-full border-solid border-gray-300 flex flex-col items-center">
        <Icon icon="logos:spotify" width="170" height="100" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-12">To Continue, log in to Spotify</div>
        <TextInput
          label="Email ID or Username"
          placeholder="Email ID or Username"
          className="mb-5"
        />
        <div className="space-y-2" />
        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          className="mb-5"
        />
        <button
          className=" w-full  border-4 border-solid border-green-500 hover:bg-green-500 hover:text-white text-green-500 font-semibold py-2 px-10 rounded-full mb-6"
        >
          LOG IN
        </button>
      <div className="w-full border border-solid border-grey-300"></div>
      <div className="my-6 font-semibold text-xl"> Don't have an account?</div>
      
      <button
          className="w-full border-4 border-solid border-black  hover:bg-black bg-white hover:text-white font-semibold py-2 px-10 rounded-full 
          text-black "
        >
          <Link to="/signup">
          SIGN UP
          </Link>
        </button></div>
    </div>
  );
};
export default LoginComponent;
