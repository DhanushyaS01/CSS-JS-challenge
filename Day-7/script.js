let page = 1;
const container = document.getElementById('posts-container');
const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const info = document.getElementById('page-info');

async function load(p) {
    container.innerHTML = 'Loading...';
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}&_limit=10`);
        const data = await res.json();
        container.innerHTML = data.map(post => `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `).join('');
        info.innerText = `Page ${p}`;
        prev.disabled = p === 1;
        next.disabled = p === 10;
        page = p;
    } catch (e) { container.innerHTML = 'Error loading posts'; }
}

prev.onclick = () => load(page - 1);
next.onclick = () => load(page + 1);
document.getElementById('explore-btn').onclick = () => window.scrollTo(0, 600);

load(1);
