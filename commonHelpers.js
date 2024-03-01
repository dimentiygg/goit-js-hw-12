import{a as g,S as q,i as u}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d";async function h(o,t){return(await g.get("",{params:{q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const w=new q(".gallery a",{captionsData:"alt"}),$=document.querySelector(".gallery");function b(o){const t=o.map(({largeImageURL:a,webformatURL:l,tags:e,likes:r,views:s,comments:S,downloads:v})=>`<li class="gallery-item">
    	<a class="gallery-link" href="${a}">
    		<img
    			class="gallery-image"
    			src="${l}"
    			alt="${e}"
    			/>
    	</a>
        <div class="stats-box">
      <ul class="img-stats">
         <li>
            <p>Likes</p>
            <p>${r}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${s}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${S}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${v}</p>
          </li>
      </ul>
    </div>
    </li>
    `).join("");$.insertAdjacentHTML("beforeend",t),w.refresh()}const L=document.querySelector(".search-form"),d=document.querySelector(".loader"),m=document.querySelector(".second-loader"),i=document.querySelector(".load-more-button"),p=document.querySelector(".gallery");let c,n,y,f;L.addEventListener("submit",x);async function x(o){if(o.preventDefault(),i.style.display="none",n=L.inputForm.value.trim(),f=n,p.innerHTML="",n===""){u.error({title:"Error",message:"field cannot be empty"});return}d.style.display="block",c=1;try{const t=await h(c,f);t.hits.length===0?(d.style.display="none",u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})):(d.style.display="none",b(t.hits),y=15,i.style.display="block")}catch(t){console.error(t)}}i.addEventListener("click",M);async function M(){m.style.display="block",c++,y+=15;try{const o=await h(c,n);if(b(o.hits),o.totalHits>=14){const t=p.children[p.children.length-14].getBoundingClientRect();window.scrollBy({top:t.y,left:t.x,behavior:"smooth"})}m.style.display="none",y>=o.totalHits&&(i.style.display="none",u.info({message:"We are sorry, but you have reached the end of search results."}))}catch(o){console.error(o)}}
//# sourceMappingURL=commonHelpers.js.map
