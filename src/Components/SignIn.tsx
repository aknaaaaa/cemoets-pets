function SignIn (){
    return(
        <section className="min-h-screen flex items-center justify-center font-mono bg-sky-200">


        <div className="flex shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <div className="flex flex-col text-2xl text-left gap-1">
              <span>Username</span>
              <input type="text" className="rounded-md p-1 border-2 outline-none focus:border-sky-600 focus:bg-slate-100"/>
            </div>
            <div className="flex flex-col text-2xl text-left gap-1"> 
            <span>Password</span>
            <input type="password" className="rounded-md p-1 border-2 outline-none focus:border-sky-600 focus:bg-slate-100"/>
            </div>
            <button className="px-10 py-2  text-2xl rounded-md border-2 bg-sky-600 hover:bg-slate-100 hover:border-sky-600">Login</button>
            <p className="font-semibold ">Don't have an account? <a href="#" className="text-sky-600 hover:underline">Register Now!</a></p>
          </div>
        </div>
      </section> 
    )
}

export default SignIn