import { Base } from "./Base.model";
import { Product } from "./Product.model";

export interface Pedido extends Base {
  usuario: string;
  productos: Product[];
  estado: string;
  direccion: string;
  receptor: string;
  movil: string;
  pago: string;
  valor: number;
  fechaini: string;
  fechafin: string;
}
