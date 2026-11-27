import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const studies=defineCollection({
 loader:glob({base:'./src/content/studies',pattern:'**/*.md'}),
 schema:z.object({
  title:z.string(),description:z.string(),pubDate:z.coerce.date(),
  studyNumber:z.number().int().positive(),company:z.string(),ticker:z.string(),
  exchange:z.string(),industry:z.string(),caseType:z.string(),focus:z.string(),
  difficulty:z.enum(['Foundation','Intermediate','Advanced']),
  timeMinutes:z.number().int().positive(),
  annualReport:z.string().url(),interimReport:z.string().url().optional(),
  tags:z.array(z.string()).default([])
 })
});
export const collections={studies};

