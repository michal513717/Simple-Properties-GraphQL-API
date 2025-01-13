interface AddPropertyInput {
    city: string;
    street: string;
    state: string;
    zipCode: string;
  }
  

  interface Filter {
    city?: string;
    zipCode?: string;
    state?: string;
  }
  
  interface Sort {
    createdAt?: 'asc' | 'desc';
  }