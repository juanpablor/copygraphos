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
  menu: string[];
  homePage: {
    title: string;
    copy_1: string;
  };
  servicesPage: Service[]; // Array de servicios
  productsPage: {
    printers: ProductSection;  // Secciones de productos impresoras
    supplies: ProductSection;  // Secciones de productos suministros
  };
  contactPage: {
    title: string;
    copy_1: string;
  };
}
