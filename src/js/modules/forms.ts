import { checkNumInput } from "./CheckNumInput";

export const forms = (state: object): void => {

  const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
  checkNumInput(`input[name="user_phone"]`);

  interface Message {
    loading: string;
    success: string;
    failure: string;
  }
  const message: Message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так',
  }

  const postData = async (url: string, data: any) => {
    const status = document.querySelector('.status') as HTMLElement;
    status.textContent = message.loading;

    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return await response.text();
  };

  const clearInputs = (): void => {
    inputs.forEach((input: HTMLInputElement): void => {
      input.value = '';
    });
  };

  const closeAllModal = () => {
    const windows = document.querySelectorAll<HTMLElement>('[data-modal]');
    windows.forEach((window): void => {
      window.style.display = 'none';
      document.body.classList.remove('modal-open');
    });
  }

  forms.forEach((form: HTMLFormElement) => {
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      const statusMessage: HTMLDivElement = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData: FormData = new FormData(form);
      if (form.getAttribute('data-calc') === 'end') {
        for (const keyForm in state) {
          formData.append(keyForm, state[keyForm]);
        }
      }

      postData('https://dummyjson.com/users/add', formData)
        .then((response) => {
          console.log(response);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            closeAllModal();
          }, 6000);
        });
    });
  });
};