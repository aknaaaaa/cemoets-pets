import image from "../assets/Koy2.jpg";

function SignUp() {
  return (
    <section className="min-h-screen flex items-center justify-center font-poppins bg-sky-200">
      <div className="flex shadow-2xl">
        <img
          src={image}
          alt=""
          className="w-[450px] object-cover xl:rounded-bl-2xl xl:rounded-tl-2xl"
        ></img>
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl xl:rounded-tl-none xl:rounded-bl-none">
          <h1 className="text-5xl font-bold">Sign Up</h1>
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
              className="placeholder:text-lg  w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 transition duration-300 py-2"
            />
          </div>
          <button className="px-10 py-2  text-2xl rounded-md border-2 bg-sky-600 hover:bg-slate-100 hover:border-sky-600 transition duration-300 ease-in-out">
            Register
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
