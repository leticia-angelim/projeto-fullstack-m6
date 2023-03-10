export interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

export interface IAddressUpdate {
  id?: string;
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}
