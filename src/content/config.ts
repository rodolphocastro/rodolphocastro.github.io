import { z, defineCollection } from 'astro:content';

const careerCollection = defineCollection(
    {  
        type: 'content',
        schema: z.object({
          title: z.string(),
        })
    });

//    This key should match your collection directory name in "src/content"
export const collections = {
  'career': careerCollection,
};