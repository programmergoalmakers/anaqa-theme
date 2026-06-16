import '@salla.sa/twilight';

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.anaqa-hero');
    if (hero && window.header_is_sticky === 'true') {
        const header = document.querySelector('.anaqa-header');
        if (header) {
            const headerHeight = header.offsetHeight;
            const announcementBar = document.querySelector('.anaqa-announcement-bar');
            const totalOffset = headerHeight + (announcementBar ? announcementBar.offsetHeight : 0);
            hero.style.marginTop = `-${totalOffset}px`;
            hero.style.paddingTop = `${totalOffset}px`;
        }
    }
});
