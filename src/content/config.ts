import { defineCollection } from 'astro:content';

const careerCollection = defineCollection(
    {  
        type: 'content'
    });

//    This key should match your collection directory name in "src/content"
export const collections = {
  'career': careerCollection,
};