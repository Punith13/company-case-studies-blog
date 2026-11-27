import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context:{site:URL|undefined}){
 const posts=(await getCollection('studies')).sort((a,b)=>b.data.studyNumber-a.data.studyNumber);
 return rss({title:'Company Lab',description:'One company case study every day.',site:context.site??'https://example.com',
  items:posts.map(p=>({title:p.data.company+' — '+p.data.title,description:p.data.description,pubDate:p.data.pubDate,link:'/studies/'+p.id+'/'}))});
}

