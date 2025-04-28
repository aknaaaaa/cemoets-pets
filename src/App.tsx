import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Sidebar from "./Components/Sidebar";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Cart / Main Content */}
      <main className="flex-1 p-4 transition-all duration-300">
        <Cart />
      </main>
    </div>
  );
}

export default App;
