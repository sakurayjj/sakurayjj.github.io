// 示例文章数据
const articles = [
    // 现有文章...
    {
        title: `示例文章标题 1`,
        summary: `这是第1篇文章的摘要内容。`,
        date: `2025-07-01`,
        read: `3 分钟`,
        words: `800 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=MzU4ODgzNjc1NQ==&mid=2247486510&idx=1&sn=xxxxxx"
    },
    // 新添加的文章
    {
        title: `新文章标题`,
        summary: `这是新文章的摘要。`,
        date: `2025-08-01`,
        read: `5 分钟`,
        words: `1200 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第二篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第三篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第四篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第五篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第六篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第7篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第8篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第9篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    {
        title: `第10篇新文章标题`,
        summary: `这是第二篇新文章的摘要。`,
        date: `2025-08-10`,
        read: `7 分钟`,
        words: `1500 字`,
        author: "mimimirai_167167h",
        link: "https://mp.weixin.qq.com/s?__biz=xxx"
    },
    // 更多文章...
];

const pageSize = 10;
let page = 1;

function renderList() {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const data = articles.slice(start, end);
    const el = document.getElementById('post-list');
    el.innerHTML = data.map(item => `
        <a class="post-card" href="${item.link}" target="_blank">
            <div class="post-title">${item.title}</div>
            <div class="post-summary">${item.summary}</div>
            <div class="post-info">${item.date} · ${item.read} · ${item.words} · ${item.author}</div>
        </a>
    `).join('');
    renderPagination();
}

function renderPagination() {
    const total = articles.length;
    const pages = Math.ceil(total / pageSize);
    const el = document.getElementById('pagination');
    let html = `<button onclick="prevPage()" ${page === 1 ? "disabled" : ""}>上一页</button>`;
    for (let i = 1; i <= pages; ++i) {
        html += `<span class="${i === page ? 'current' : ''}" onclick="gotoPage(${i})" style="cursor:pointer">${i}</span>`;
    }
    html += `<button onclick="nextPage()" ${page === pages ? "disabled" : ""}>下一页</button>`;
    el.innerHTML = html;
}

window.prevPage = () => { if (page > 1) { page--; renderList() } };
window.nextPage = () => { if (page < Math.ceil(articles.length / pageSize)) { page++; renderList() } };
window.gotoPage = (n) => { if (page !== n) { page = n; renderList() } };

renderList();
