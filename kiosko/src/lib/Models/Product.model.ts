import { Base } from "./Base.model";

export interface Product extends Base {
  nombre: String;
  categoria: String;
  estado: String;
  img: String;
  cloud_id: String;
  provincia: String;
  municipio: String;
  promodate: String;
  medida: String;
  precio: number;
  creador: String;
  registro: Date;
}
