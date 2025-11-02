import { loadProducts, renderProducts } from "./api/product";

async function initProducts() {
    try {
        const posts = await loadProducts();
        renderProducts(posts);
    } catch (err) {
        console.error("Ошибка загрузки данных:", err);
    }
}

initProducts();
