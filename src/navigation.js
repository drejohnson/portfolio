let date = new Date();
let year = date.getFullYear();

export const headerData = {
  links: [],
  actions: [],
};

export const footerData = {
  links: [],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/deandrejohnson' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/drejohnson' },
  ],
  footNote: `
    Built with <span class="text-blue-600">Astro</span> and Love by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://drejohnson.dev">Dre Johnson</a> · All rights reserved. // ${year}
  `,
};
