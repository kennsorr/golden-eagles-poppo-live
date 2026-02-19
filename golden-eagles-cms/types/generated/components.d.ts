import type { Schema, Struct } from '@strapi/strapi';

export interface PollOption extends Struct.ComponentSchema {
  collectionName: 'components_poll_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    votes: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'poll.option': PollOption;
    }
  }
}
