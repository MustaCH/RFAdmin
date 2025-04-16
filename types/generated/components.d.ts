import type { Schema, Struct } from '@strapi/strapi';

export interface CurrencyPrice extends Struct.ComponentSchema {
  collectionName: 'components_currency_prices';
  info: {
    displayName: 'price';
  };
  attributes: {
    currency: Schema.Attribute.Enumeration<['USD', 'ARS']>;
    price: Schema.Attribute.Integer;
  };
}

export interface PriceExpenses extends Struct.ComponentSchema {
  collectionName: 'components_price_expenses';
  info: {
    displayName: 'expenses';
  };
  attributes: {
    currency: Schema.Attribute.Enumeration<['USD', 'ARS']>;
    price: Schema.Attribute.Integer;
  };
}

export interface SpecsSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_specs_specifications';
  info: {
    description: '';
    displayName: 'specifications';
  };
  attributes: {
    age: Schema.Attribute.Integer;
    bathrooms: Schema.Attribute.Integer;
    floor: Schema.Attribute.Integer;
    garage: Schema.Attribute.Integer;
    rooms: Schema.Attribute.Integer;
    surface: Schema.Attribute.Component<'specs.surface', false> &
      Schema.Attribute.Required;
    toilets: Schema.Attribute.Integer;
  };
}

export interface SpecsSurface extends Struct.ComponentSchema {
  collectionName: 'components_specs_surfaces';
  info: {
    displayName: 'surface';
  };
  attributes: {
    surfaceCover: Schema.Attribute.Integer;
    surfaceLand: Schema.Attribute.Integer;
    surfaceSemicover: Schema.Attribute.Integer;
    surfaceTotal: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'currency.price': CurrencyPrice;
      'price.expenses': PriceExpenses;
      'specs.specifications': SpecsSpecifications;
      'specs.surface': SpecsSurface;
    }
  }
}
