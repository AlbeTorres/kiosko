import { Product } from "../Models/Product.model";
import { FetchProductData, FetchProductsData } from "../requests/products.type";
import { FetchShopCartProductsData } from "../requests/shopcart.type";

export const productAdapter = (data: FetchProductData): Product => ({
  _id: data.producto._id,
  nombre: data.producto.nombre,
  categoria: data.producto.categoria,
  estado: data.producto.nombre,
  img: data.producto.img,
  cloud_id: data.producto.cloud_id,
  provincia: data.producto.provincia,
  municipio: data.producto.municipio,
  promodate: data.producto.promodate,
  medida: data.producto.medida,
  precio: data.producto.precio,
  creador: data.producto.creador,
  registro: data.producto.registro,
});

export const productsAdapter = (
  data: FetchProductsData | FetchShopCartProductsData,
): Product[] => {
  const products: Product[] = [];

  if ((data as FetchProductsData).productos) {
    (data as FetchProductsData).productos.map((p) =>
      products.push(productAdapter({ producto: p })),
    );
  } else {
    (data as FetchShopCartProductsData).cartproducts.map((p) =>
      products.push(productAdapter({ producto: p })),
    );
  }

  return products;
};
