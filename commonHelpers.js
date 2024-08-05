import{S as p,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(n){const s="https://pixabay.com/api",r="44685360-74500565ee10f6b109a60bbe8",a=new URLSearchParams({q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?key=${r}&${a}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)})}const i=new p(".gallery-list li",{captionsData:"alt",captionsDelay:250});function f(n){const s=n.map(r=>`<li class="gallery-item">
      <a href='${r.largeImageURL}' class="gallery-link">
      <img src='${r.webformatURL}' 
      alt='${r.tags}'
    width=360
      height=200
      class="gallery-image"/>
    </a>
      <div class="info-image"> 
        <p class="info-text"> LIKES: <span class="info-image-span">${r.likes} </span></p>
        <p class="info-text"> VIEWS:<span class="info-image-span">${r.views} </span></p>
         <p class="info-text"> COMMENTS:<span class="info-image-span">${r.comments} </span></p>
        <p class="info-text"> DOWNLOADS:<span class="info-image-span">${r.downloads} </span></p>
      </div>
    </li>`).join("");o.picturesList.innerHTML=s,i.refresh(),i?i.refresh():i=new p(".gallery-list li",{captionsData:"alt",captionsDelay:250})}function d(){o.loader.classList.remove("hidden")}function m(){o.loader.classList.add("hidden")}const o={input:document.querySelector(".form-input"),btn:document.querySelector(".search-btn"),searchForm:document.querySelector(".search-form"),picturesList:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};o.searchForm.addEventListener("submit",n=>{n.preventDefault();const s=o.input.value.trim();if(s===""){l.warning({title:"warning",message:"Search field can not be empty!",position:"topRight"});return}d(),o.picturesList.innerHTML="",u(s).then(({hits:r})=>{if(r.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once"});return}m(),f(r),h()}).catch(r=>{console.log(r)})});function h(){o.searchForm.reset()}
//# sourceMappingURL=commonHelpers.js.map
