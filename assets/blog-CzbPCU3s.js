import"./script-CUkpMkL8.js";const o="https://ceramic-api.onrender.com";async function n(){const e=`${o}/api/posts`,t=await fetch(e,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`Ошибка загрузки постов: ${t.status}`);return t.json()}function r(e){const t=document.querySelector(".blog_feed__container");t&&(t.innerHTML="",e.forEach(_=>{t.insertAdjacentHTML("beforeend",`
      <div class="blog_feed__element">
        <div class="blog_feed__element__header">
          <img src="${o}${_.image}" alt="${_.title}" class="blog_feed__element__header__img" />

          <div class="blog_feed__element__header__title_block">
            <h2 class="title-h2 blog_feed__element__header__title_block__title">
              ${_.title}
            </h2>

            <button class="btn-default blog_feed__element__header__title_block__button" data-post-id="${_.id}">
              read
            </button>
          </div>
        </div>

        <p class="paragraph blog_feed__element__text">
          ${_.excerpt??""}
        </p>
      </div>
      `)}))}async function a(){try{const e=await n();r(e)}catch(e){console.error("Ошибка загрузки постов:",e)}}a();
