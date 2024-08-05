import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(a){const r="https://pixabay.com/api",o="44685360-74500565ee10f6b109a60bbe8",s=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?key=${o}&${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)})}function u(a){const r=new c(".gallery-list li",{captionsData:"alt",captionsDelay:250}),o=a.map(s=>`<li class="gallery-item">
      <a href='${s.largeImageURL}' class="gallery-link">
      <img src='${s.webformatURL}' 
      alt='${s.tags}'
    width=360
      height=200
      class="gallery-image"/>
    </a>
      <div class="info-image"> 
        <p class="info-text"> LIKES: <span class="info-image-span">${s.likes} </span></p>
        <p class="info-text"> VIEWS:<span class="info-image-span">${s.views} </span></p>
         <p class="info-text"> COMMENTS:<span class="info-image-span">${s.comments} </span></p>
        <p class="info-text"> DOWNLOADS:<span class="info-image-span">${s.downloads} </span></p>
      </div>
    </li>`).join("");n.picturesList.innerHTML=o,r.refresh(),r?r.refresh():r=new c(".gallery-list li",{captionsData:"alt",captionsDelay:250})}const n={input:document.querySelector(".form-input"),btn:document.querySelector(".search-btn"),searchForm:document.querySelector(".search-form"),picturesList:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};function f(){n.loader.classList.remove("hidden")}function d(){n.loader.classList.add("hidden")}n.searchForm.addEventListener("submit",a=>{a.preventDefault();const r=n.input.value.trim();if(r===""){l.warning({title:"warning",message:"Search field can not be empty!",position:"topRight"});return}f(),n.picturesList.innerHTML="",p(r).then(({hits:o})=>{if(o.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once"});return}u(o),m()}).finally(()=>d())});function m(){n.searchForm.reset()}
//# sourceMappingURL=commonHelpers.js.map
