import { checkNumInput } from "./CheckNumInput";

export const changeModalState = (state: { [key: string]: any }): void => {
  const formsOfWindow: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.balcon_icons_img');
  const windowHeight: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('#height');
  const windowWidth: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('#width');
  const windowOption: NodeListOf<HTMLSelectElement> = document.querySelectorAll<HTMLSelectElement>('#view_type');
  const windowProfile: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.checkbox');

  checkNumInput('#width');
  checkNumInput('#height');

  const bindActionToElement = (event: string, elements: NodeListOf<HTMLElement>, prop: string) => {
    elements.forEach((element: HTMLElement|HTMLInputElement|HTMLSelectElement, index: number) => {
      element.addEventListener(event, () => {
        switch (element.nodeName) {
          case 'SPAN':
            state[prop] = index;
            break;
          case 'INPUT':
            if (element instanceof HTMLInputElement) {
              state[prop] = element.value;
            }
            break;
          case 'SELECT':
            if (element instanceof HTMLSelectElement) {
              state[prop] = element.value;
            }
            break;
        }
        console.log(state);
      });
    });
  };

  bindActionToElement('click', formsOfWindow, 'form');
  bindActionToElement('input', windowWidth, 'width');
  bindActionToElement('input', windowHeight, 'heigh');
  bindActionToElement('change', windowOption, 'option');
  bindActionToElement('change', windowProfile, 'profile');
};