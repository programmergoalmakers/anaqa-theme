import '@salla.sa/twilight';
import './partials/product-card';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.variant-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.variant-selector > div');
            if (parent) {
                parent.querySelectorAll('.variant-option').forEach(el => el.classList.remove('active'));
            }
            this.classList.add('active');
        });
    });
});
