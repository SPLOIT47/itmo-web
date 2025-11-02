import"./script-CUkpMkL8.js";const c="https://ceramic-api.onrender.com";function r(e){return{EUR:"€",USD:"$",GBP:"£"}[e]??e}async function o(e=""){let n=`${c}/api/products`;e&&(n+=`?category=${encodeURIComponent(e)}`);const t=await fetch(n,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`Ошибка: ${t.status}`);return await t.json()}function a(e){const n=document.querySelector(".catalog_feed__container");n&&(n.innerHTML="",e.forEach(t=>{n.insertAdjacentHTML("beforeend",`
      <div class="catalog_feed__element">
        <img src="${c}${t.image}" alt="${t.title}" class="catalog_feed__element__img" />
        <p class="catalog_feed__element__text">${t.title}</p>
        <p class="catalog_feed__element__text">${t.price??""} ${r(t.currency)}</p>
      </div>
      `)}))}async function s(){try{const e=await o();a(e)}catch(e){console.error("Ошибка загрузки данных:",e)}}s();
