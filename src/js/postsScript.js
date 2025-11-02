import { loadPosts, renderPosts } from "./api/posts.js";

async function initBlog() {
    try {
        const posts = await loadPosts();
        renderPosts(posts);
    } catch (err) {
        console.error("Ошибка загрузки постов:", err);
    }
}

initBlog();