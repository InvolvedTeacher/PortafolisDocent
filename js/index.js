function loadPageFromHash() {
    const hash = window.location.hash.substring(1) || 'home'; // Default to 'home'
    const url = `./${hash}.html`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('content').innerHTML = '<p>Error loading page.</p>';
        });
}

window.addEventListener('hashchange', loadPageFromHash);
window.addEventListener('DOMContentLoaded', loadPageFromHash);
