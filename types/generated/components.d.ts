import type { Schema, Struct } from '@strapi/strapi';

export interface CodeCode extends Struct.ComponentSchema {
  collectionName: 'components_code_codes';
  info: {
    description: '';
    displayName: 'Code';
  };
  attributes: {
    Code: Schema.Attribute.Text;
    Language: Schema.Attribute.Enumeration<['HTML']>;
  };
}

export interface CodeDescription extends Struct.ComponentSchema {
  collectionName: 'components_code_descriptions';
  info: {
    description: '';
    displayName: 'Description';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'code.code': CodeCode;
      'code.description': CodeDescription;
    }
  }
}
