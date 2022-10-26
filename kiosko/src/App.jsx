import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./routes/Rutas";
import ProductoState from "./context/productoContext/productoState";
import AuthState from "./context/authContext/authState";
import AlertaState from "./context/alertaContext/alertaState";
import PedidoState from "./context/pedidoContext/PedidoState";
import tokenAuth from "./config/tokenAuth";
import "./index.css";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <PedidoState>
      <ProductoState>
        <AuthState>
          <AlertaState>
            <Router>
              <Rutas />
            </Router>
          </AlertaState>
        </AuthState>
      </ProductoState>

    </PedidoState>
  );
}

export default App;
