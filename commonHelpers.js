import{a as m,S as q,i as c}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const v=document.querySelector(".search-form");async function h(o,t){if(t!==""){const l=t;m.defaults.baseURL="https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d";try{const s=await m.get("",{params:{q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}});return v.reset(),s.data}catch(s){console.error(s)}}}const $=new q(".gallery a",{captionsData:"alt"}),w=document.querySelector(".loader");function g(o){const t=document.querySelector(".gallery");w.style.display="none";const l=o.map(({largeImageURL:s,webformatURL:e,tags:r,likes:n,views:b,comments:L,downloads:S})=>`<li class="gallery-item">
    	<a class="gallery-link" href="${s}">
    		<img
    			class="gallery-image"
    			src="${e}"
    			alt="${r}"
    			/>
    	</a>
        <div class="stats-box">
      <ul class="img-stats">
         <li>
            <p>Likes</p>
            <p>${n}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${b}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${L}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${S}</p>
          </li>
      </ul>
    </div>
    </li>
    `).join("");t.insertAdjacentHTML("beforeend",l),$.refresh()}const d=document.querySelector(".search-form"),x=document.querySelector(".loader"),f=document.querySelector(".second-loader"),a=document.querySelector(".load-more-button"),u=document.querySelector(".gallery");let i,p,y;d.addEventListener("submit",M);function M(o){o.preventDefault(),a.style.display="none",p=d.inputForm.value.trim(),u.innerHTML="",d.inputForm.value!==""?(x.style.display="block",i=1,h(i,p).then(t=>{t.hits.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),g(t.hits),y=15,a.style.display="block"}).catch(t=>{console.error(t)})):c.error({title:"Error",message:"field cannot be empty"})}a.addEventListener("click",O);function O(){f.style.display="block",i++,y+=15,h(i,p).then(o=>{g(o.hits);const t=u.children[u.children.length-14].getBoundingClientRect();window.scrollBy({top:t.y,left:t.x,behavior:"smooth"}),f.style.display="none",y>=o.totalHits&&(a.style.display="none",c.info({message:"We are sorry, but you have reached the end of search results."}))})}
//# sourceMappingURL=commonHelpers.js.map
