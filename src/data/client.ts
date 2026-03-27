// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Recuerdos Para Morelia",
	tagline: "Un regalo especial de cumpleaños",
	description: "Un sitio especial lleno de recuerdos, fotos y cartas para celebrar el cumpleaños de Morelia.",
	url: "https://happybirthdaymore.netlify.app",
	author: "Con amor",
	locale: "es",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "",
	phoneForTel: "",
	phoneFormatted: "",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "",
		lineTwo: "",
		city: "",
		state: "",
		zip: "",
		mapLink: "",
	},
	socials: {
		facebook: "",
		instagram: "",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "es_CO",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
