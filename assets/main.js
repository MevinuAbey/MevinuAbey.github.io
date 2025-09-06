// Mobile menu toggle
return `
<article class="card glass thumb">
<a href="${item.url}" target="_blank" rel="noopener">
<img src="${item.image}" alt="${item.title}">
<div class="pad">
<h3>${item.title}</h3>
<div class="meta">
<span>${item.tag || item.category || ''}</span>
<span>${new Date(item.date).toLocaleDateString()}</span>
</div>
</div>
</a>
</article>`;
}


// Home: Featured Projects & Blog
(async function renderHome(){
const pg = document.getElementById('projects-grid');
const bg = document.getElementById('blog-grid');
try{
if(pg){
const projects = (await getJSON('/data/projects.json'))
.sort((a,b)=> new Date(b.date) - new Date(a.date))
.slice(0,3);
pg.innerHTML = projects.map(cardTemplate).join('');
}
if(bg){
const posts = (await getJSON('/data/blog.json'))
.sort((a,b)=> new Date(b.date) - new Date(a.date))
.slice(0,3);
bg.innerHTML = posts.map(cardTemplate).join('');
}
}catch(err){ console.warn(err); }
})();


// Projects page: list all
(async function renderProjectsPage(){
const pg = document.querySelector('body.projects-page #projects-grid') || (document.getElementById('projects-grid') && document.title.includes('Projects')) ? document.getElementById('projects-grid') : null;
if(!pg) return;
try{
const projects = (await getJSON('/data/projects.json')).sort((a,b)=> new Date(b.date)-new Date(a.date));
pg.innerHTML = projects.map(cardTemplate).join('');
}catch(err){ console.warn(err); }
})();


// Blog page: list all
(async function renderBlogPage(){
const bg = document.querySelector('body.blog-page #blog-grid') || (document.getElementById('blog-grid') && document.title.includes('Blog')) ? document.getElementById('blog-grid') : null;
if(!bg) return;
try{
const posts = (await getJSON('/data/blog.json')).sort((a,b)=> new Date(b.date)-new Date(a.date));
bg.innerHTML = posts.map(cardTemplate).join('');
}catch(err){ console.warn(err); }
})();
