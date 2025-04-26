import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Sidebar from "./Components/Sidebar";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Cart /> 
    </div>
  );
}

export default App;
