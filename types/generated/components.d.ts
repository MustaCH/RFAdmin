import type { Schema, Struct } from '@strapi/strapi';

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    city: Schema.Attribute.String;
    neighborhood: Schema.Attribute.String;
    number: Schema.Attribute.String;
    province: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface PriceExpenses extends Struct.ComponentSchema {
  collectionName: 'components_price_expenses';
  info: {
    description: '';
    displayName: 'Price';
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
    bedrooms: Schema.Attribute.Integer;
    floor: Schema.Attribute.Integer;
    garage: Schema.Attribute.Integer;
    professional: Schema.Attribute.Boolean;
    rooms: Schema.Attribute.Integer;
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
    surfaceSemiCover: Schema.Attribute.Integer;
    surfaceTotal: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'location.location': LocationLocation;
      'price.expenses': PriceExpenses;
      'specs.specifications': SpecsSpecifications;
      'specs.surface': SpecsSurface;
    }
  }
}
