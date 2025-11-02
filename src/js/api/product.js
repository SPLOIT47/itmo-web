const BASE_URL = "https://ceramic-api.onrender.com";

function toCurrencySymbol(code) {
    const map = {
        EUR: "€",
        USD: "$",
        GBP: "£"
    };

    return map[code] ?? code;
}

export async function loadProducts(category = "") {
    let url = `${BASE_URL}/api/products`;

    if (category) {
        url += `?category=${encodeURIComponent(category)}`;
    }

    const res = await fetch(url, {
        headers: {
            "Accept": "application/json",
        }
    });

    if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
    }

    return await res.json();
}

export function renderProducts(products) {
    const container = document.querySelector(".catalog_feed__container");
    if (!container) return;

    container.innerHTML = "";

    products.forEach((item) => {
        container.insertAdjacentHTML(
            "beforeend",
            `
      <div class="catalog_feed__element">
        <img src="${BASE_URL}${item.image}" alt="${item.title}" class="catalog_feed__element__img" />
        <p class="catalog_feed__element__text">${item.title}</p>
        <p class="catalog_feed__element__text">${item.price ?? ""} ${toCurrencySymbol(item.currency)}</p>
      </div>
      `
        );
    });
}