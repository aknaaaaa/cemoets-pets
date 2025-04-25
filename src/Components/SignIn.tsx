import image from "../assets/Koy1.jpg";

function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center font-poppins bg-sky-200 p-4">
      <div className="flex flex-col xl:flex-row w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden">
        {/* FORM */}
        <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 xl:p-20 gap-8 bg-white w-full">
          <h1 className="text-4xl sm:text-5xl font-bold">Sign In</h1>

          {/* Username */}
          <div className="flex flex-col text-lg sm:text-2xl text-left gap-1 w-full">
            <span>Username</span>
            <input
              type="text"
              placeholder="Input Username"
              className="placeholder:text-base sm:placeholder:text-lg w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 py-2"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col text-lg sm:text-2xl text-left gap-1 w-full">
            <span>Password</span>
            <input
              type="password"
              placeholder="Input Password"
              className="placeholder:text-base sm:placeholder:text-lg w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 py-2"
            />
          </div>

          {/* Button */}
          <button className="px-8 py-2 text-lg sm:text-2xl rounded-md border-2 bg-sky-600 hover:bg-slate-100 hover:border-sky-600 transition duration-300 ease-in-out">
            Login
          </button>

          {/* Register link */}
          <p className="font-semibold text-sm sm:text-base">
            Don't have an account?{" "}
            <a href="SignUp.tsx" className="text-sky-600 hover:underline">
              Register Now!
            </a>
          </p>
        </div>

        {/* IMAGE */}
        <img
          src={image}
          alt=""
          className="w-full xl:w-[450px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl hidden xl:block"
        />
      </div>
    </section>
  );
}

export default SignIn;
