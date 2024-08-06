import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(n){const s="https://pixabay.com/api/",r="44685360-74500565ee10f6b109a60bbe8",i=new URLSearchParams({q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?key=${r}&${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{iziToast.error({position:"topRight",message:`${t}`})})}const u=new l(".gallery-list a",{captionsData:"alt",captionsDelay:250});function f(n){const s=n.map(r=>`<li class="gallery-item">
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
    </li>`).join("");o.picturesList.insertAdjacentHTML("beforeend",s),u.refresh()}const o={input:document.querySelector(".form-input"),btn:document.querySelector(".search-btn"),searchForm:document.querySelector(".search-form"),picturesList:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};function d(){o.loader.classList.remove("hidden")}function m(){o.loader.classList.add("hidden")}o.searchForm.addEventListener("submit",n=>{n.preventDefault();const s=o.input.value.trim();if(s===""){c.warning({title:"warning",message:"Search field can not be empty!",position:"topRight"});return}d(),o.picturesList.innerHTML="",p(s).then(({hits:r})=>{if(r.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once"});return}f(r),h()}).catch(r=>{c.error({position:"topRight",message:`${r}`})}).finally(()=>m())});function h(){o.searchForm.reset()}
//# sourceMappingURL=commonHelpers.js.map
