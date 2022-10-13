import ProductoState from "./context/productoContext/productoState";
import "./index.css";
import Home from "./components/pages/home/Home";
import AuthState from "./context/authContext/authState";
import AlertaState from "./context/alertaContext/alertaState";

function App() {
  return (
    <ProductoState>
      <AuthState>
        <AlertaState>
          <Home />
        </AlertaState>
      </AuthState>
    </ProductoState>
  );
}

export default App;
