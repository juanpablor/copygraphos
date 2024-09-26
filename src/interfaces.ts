export interface Description {
  title?: string;
  description: string;
}

export interface Service {
  title: string;
  image: string;
  description: Description[];
}

export interface ProductCategory {
  title?: string;
  image: string;
  description: Description[];
}

export interface ProductSection {
  bn?: ProductCategory[];
  color?: ProductCategory[];
  toners?: ProductCategory[];
  recharge?: ProductCategory[];
  parts?: ProductCategory[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
  image?: string;
  price?: string;
  note?: string;
}

export interface Company {
  companyName: string;
  address: string;
  email: string;
  phone_1: string;
  phone_2: string;
  whatsApp: string;
  facebook: string;
  instagram: string;
  menu: string[];
  homePage: {
    title: string;
    copies: Array<{
      paragraph: string;
    }>;
    items: Array<{
      title: string;
      image: string;
      description: string;
    }>;
  };
  servicesPage: Service[]; // Array de servicios
  productsPage: {
    printers: ProductSection; // Secciones de productos impresoras
    supplies: ProductSection; // Secciones de productos suministros
  };
  quienesSomosPage: {
    title: string;
    items: Array<{
      title: string;
      description: Array<{
        paragraph: string;
      }>;
    }>;
  };
}
