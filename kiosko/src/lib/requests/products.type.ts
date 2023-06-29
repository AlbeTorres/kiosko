import { Product } from "../Models/Product.model";
import { Function } from "./types";

export type FetchProducts = Function<FetchProductsInput, FetchProductsOutput>;

export type FetchProductsInput = void;

export type FetchProductsOutput = { productos: Product[] };
