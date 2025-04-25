import image from "../assets/Koy1.jpg";

function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center font-poppins  bg-sky-200">
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl xl:rounded-tr-none xl:rounded-br-none">
          <h1 className="text-5xl font-bold">Sign In</h1>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Username</span>
            <input
              type="text"
              placeholder="Input Username"
              className="placeholder:text-lg w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 py-2"
            />
          </div>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input
              type="password"
              placeholder="Input Password"
              className="placeholder:text-lg w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 py-2"
            />
          </div>
          <button className="px-10 py-2 text-white text-2xl rounded-md border-2 bg-sky-600 hover:text-black hover:bg-slate-100 hover:border-sky-600 transition duration-300 ease-in-out">
            Login
          </button>
          <p className="font-semibold ">
            Don't have an account?{" "}
            <a href="SignUp.tsx" className="text-sky-600 hover:underline ">
              Register Now!
            </a>
          </p>
        </div>
        <img
          src={image}
          alt=""
          className="w-[450px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden"
        ></img>
      </div>
    </section>
  );
}

export default SignIn;
