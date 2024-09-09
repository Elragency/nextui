
const navBarLinks = [
  { name: "Accueil", url: "/" },
  { name: "Produits", url: "/products" },
  { name: "L'agence", url: "/elr" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/products" },
      { name: "Services de Construction", url: "/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};