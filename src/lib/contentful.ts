import { createClient } from 'contentful';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  console.warn('Contentful space ID or access token is missing. Please check your .env file.');
}

export const client = createClient({
  space: space || 'placeholder',
  accessToken: accessToken || 'placeholder',
});

export interface CatFields {
  name: string;
  age: string;
  color: string;
  personality: string;
  siblings: string;
  healthStatus: string;
  adoptionStatus: 'Available' | 'Pending' | 'Adopted';
  storyline: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface CatEntry {
  sys: {
    id: string;
  };
  fields: CatFields;
}
