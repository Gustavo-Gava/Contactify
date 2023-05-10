export interface Contact {
  id: string;
  name: string;
  lastname: string;
  picture: string;

  phones: Phone[];
  addresses: Address[];
}

export interface Phone {
  id: string;
  number: string;
  type: string;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
