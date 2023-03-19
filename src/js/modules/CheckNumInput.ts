export const checkNumInput = (selector: string): void => {
  const numInput: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);

  numInput.forEach((input: HTMLInputElement): void => {
    input.addEventListener('input', (): void => {
      input.value = input.value.replace(/\D/, '');
    });
  });
};