/* ================== HEADER & NAV ================== */
const navMenu = document.getElementById('nav_menu'),
	navToggle = document.getElementById('nav_toggle'),
	navClose = document.getElementById('nav_close');

// Menu Show
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show_menu');
	});
}

// Menu Hidden
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show_menu');
	});
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
	navMenu.classList.remove('show_menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

// SHADOW HEADER
const shadowHeader = () => {
	const header = document.getElementById('header');
	this.scrollY >= 50
		? header.classList.add('shadow_header')
		: header.classList.remove('shadow_header');
};
window.addEventListener('scroll', shadowHeader);

/* ================ MAIN AND SECTIONS =============== */

// SWIPER FAVORITES
const swiperFavorites = new Swiper('.favorite_swiper', {
	loop: true,
	grabCursor: true,
	slidesPerView: 'auto',
	centeredSlides: 'auto',
});

/* ===================== FOOTER ===================== */

/* ================= SHOW SCROLL UP ================= */
const scrollUp = () => {
	const scrollUp = document.getElementById('scrollup');
	this.scrollY >= 350
		? scrollUp.classList.add('show_scroll')
		: scrollUp.classList.remove('show_scroll');
};
window.addEventListener('scroll', scrollUp);

/* ========== SCROLL SECTIONS ACTIVE LINKS ========== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector(
				'.nav_menu a[href*=' + sectionId + ']',
			);

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active_link');
		} else {
			sectionsClass.classList.remove('active_link');
		}
	});
};
window.addEventListener('scroll', scrollActive);

/* ============= SCROLL REVEAL ANIMATION ============ */
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 300,
	// rest: true //Animation repeat
});

sr.reveal(`.home_data, .favorite_container, .footer_container`);
sr.reveal(`.home_circle, .home_img`, { delay: 600, scale: 0.5 });
sr.reveal(`.home_chips_1, .home_chips_2, .home_chips_3`, {
	delay: 1000,
	interval: 100,
});
sr.reveal(`.home_leaf`, { delay: 1200 });
sr.reveal(`.home_tomato_1, .home_tomato_2`, { delay: 1000, interval: 100 });
sr.reveal(`.care_img, .contact_img`, { origin: 'left' });
sr.reveal(`.care_list, .contact_data`, { origin: 'right' });
sr.reveal(`.banner_item, .products_card`, { interval: 100 });
