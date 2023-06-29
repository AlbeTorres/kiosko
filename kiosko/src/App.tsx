import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./routes/Rutas";
import ProductoState from "./context/productoContext/productoState";
import AuthState from "./context/authContext/authState";
import AlertaState from "./context/alertaContext/alertaState";
import PedidoState from "./context/pedidoContext/pedidoState.jsx";
import tokenAuth from "./config/tokenAuth";
import "./index.css";
import UsuarioState from "./context/usuarioContext/usuarioState";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/layout/Navbar";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <UsuarioState>
      <PedidoState>
        <ProductoState>
          <AuthState>
            <AlertaState>
              <Router>
                <Navbar>
                  <Rutas />
                </Navbar>
              </Router>
            </AlertaState>
          </AuthState>
        </ProductoState>
      </PedidoState>
    </UsuarioState>
  );
}

export default App;
