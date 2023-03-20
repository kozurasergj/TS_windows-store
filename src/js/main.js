import { modals, forms, tabs, changeModalState } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
  let modalState = {};
  changeModalState(modalState);
  modals();
  tabs({
    headerSelector: '.glazing_slider',
    tabsSelector: '.glazing_block',
    contentSelector: '.glazing_content',
    activeClass: 'active',
    display: 'block',
  });
  tabs({
    headerSelector: '.decoration_slider',
    tabsSelector: '.no_click',
    contentSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
    display: 'block',
  });
  tabs({
    headerSelector: '.balcon_icons',
    tabsSelector: '.balcon_icons_img',
    contentSelector: '.big_img > img',
    activeClass: 'do_image_more',
    display: 'inline-block',
  });
  forms(modalState);
});
