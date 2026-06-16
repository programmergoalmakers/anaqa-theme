import '@salla.sa/twilight';
import './partials/main-menu';
import './partials/product-card';
import './partials/add-product-toast';
import './partials/wishlist-card';

function updateQty(change) {
    const input = document.getElementById('qty-input');
    if (!input) return;
    let val = parseInt(input.value) || 1;
    val += change;
    const max = parseInt(input.getAttribute('max')) || 999;
    if (val < 1) val = 1;
    if (val > max) val = max;
    input.value = val;
}

function addToCart(productId) {
    const qty = document.getElementById('qty-input')?.value || 1;
    const event = new CustomEvent('salla-cart-add', {
        detail: { product_id: productId, quantity: parseInt(qty) }
    });
    document.dispatchEvent(event);
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('active', 'border-dark');
        el.classList.add('text-gray-400');
    });
    const tab = document.getElementById(`tab-${tabId}`);
    if (tab) tab.style.display = 'block';
    const btn = document.querySelector(`[data-tab="${tabId}"]`);
    if (btn) {
        btn.classList.add('active', 'border-dark');
        btn.classList.remove('text-gray-400');
    }
}

function toggleSearch() {
    const search = document.querySelector('salla-search');
    if (search) search.setAttribute('open', '');
}

window.updateQty = updateQty;
window.addToCart = addToCart;
window.switchTab = switchTab;
window.toggleSearch = toggleSearch;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-toggle-search]').forEach(el => {
        el.addEventListener('click', toggleSearch);
    });

    const cartCountEl = document.querySelector('.cart-count');
    if (cartCountEl) {
        document.addEventListener('salla-cart-updated', (e) => {
            const count = e.detail?.count || 0;
            if (count > 0) {
                cartCountEl.style.display = 'flex';
                cartCountEl.textContent = count;
            } else {
                cartCountEl.style.display = 'none';
            }
        });
    }
});
