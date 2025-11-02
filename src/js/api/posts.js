const BASE_URL = "https://ceramic-api.onrender.com";

export async function loadPosts() {
    const url = `${BASE_URL}/api/posts`;

    const res = await fetch(url, {
        headers: {
            Accept: "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`Ошибка загрузки постов: ${res.status}`);
    }

    return res.json();
}

export function renderPosts(posts) {
    const container = document.querySelector(".blog_feed__container");
    if (!container) return;

    container.innerHTML = "";

    posts.forEach((item) => {
        container.insertAdjacentHTML(
            "beforeend",
            `
      <div class="blog_feed__element">
        <div class="blog_feed__element__header">
          <img src="${BASE_URL}${item.image}" alt="${item.title}" class="blog_feed__element__header__img" />

          <div class="blog_feed__element__header__title_block">
            <h2 class="title-h2 blog_feed__element__header__title_block__title">
              ${item.title}
            </h2>

            <button class="btn-default blog_feed__element__header__title_block__button" data-post-id="${item.id}">
              read
            </button>
          </div>
        </div>

        <p class="paragraph blog_feed__element__text">
          ${item.excerpt ?? ""}
        </p>
      </div>
      `
        );
    });
}