import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Sidebar from "./Components/Sidebar";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-16 md:ml-60 transition-all duration-300">
        <Cart />
      </main>
    </div>
  );
}


export default App;

