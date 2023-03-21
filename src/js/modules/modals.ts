export const modals = () => {
  interface BindModalParams {
    triggersSelector: string;
    modalSelector: string;
    closeSelector: string;
    closeClickOverlayModal: boolean;
    closeAfterSubmit?: boolean;
  }

  const bindModal = (params: BindModalParams) => {
    const triggers = document.querySelectorAll<HTMLElement>(params.triggersSelector);
    const modal = document.querySelector(params.modalSelector) as HTMLElement;
    const close = document.querySelector(params.closeSelector) as HTMLElement;
    const windows = document.querySelectorAll<HTMLElement>('[data-modal]');
    const scrollWidth = calcScrol();

    triggers.forEach((trigger): void => {
      trigger.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }
        closeAllModals();
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        document.body.style.marginRight = `${scrollWidth}px`;
      });
    });

    const closeAllModals = (): void => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
    };

    const closeModal = (modal: HTMLElement): void => {
      closeAllModals();
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
    };

    document.addEventListener('keydown', (event): void => {
      if (event.code === 'Escape') {
        closeModal(modal);
        closeAllModals();
      }
    });

    close.addEventListener('click', (): void => {
      closeModal(modal);
      closeAllModals();
    });

    modal.addEventListener('click', (event): void => {
      if (event.target === modal && params.closeClickOverlayModal) {
        closeModal(modal);
        closeAllModals();
      }
    });
  };

  const showModalByTime = (selector: string, time: number): void => {
    setTimeout(() => {
      const modals = document.querySelectorAll<HTMLElement>(selector);
      modals.forEach(modal => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      });
      modals[0].style.display = 'block';
      document.body.classList.add('modal-open');
    }, time);
  };

  const calcScrol = (): Number => {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };

  bindModal({
    triggersSelector: '.popup_engineer_btn',
    modalSelector: '.popup_engineer',
    closeSelector: '.popup_engineer .popup_close',
    closeClickOverlayModal: true,
  });

  bindModal({
    triggersSelector: '.phone_link',
    modalSelector: '.popup',
    closeSelector: '.popup .popup_close',
    closeClickOverlayModal: true,
  });

  bindModal({
    triggersSelector: '.popup_calc_btn',
    modalSelector: '.popup_calc',
    closeSelector: '.popup_calc_close',
    closeClickOverlayModal: true,
  });

  bindModal({
    triggersSelector: '.popup_calc_button',
    modalSelector: '.popup_calc_profile',
    closeSelector: '.popup_calc_profile_close',
    closeClickOverlayModal: false,
  });

  bindModal({
    triggersSelector: '.popup_calc_profile_button',
    modalSelector: '.popup_calc_end',
    closeSelector: '.popup_calc_end_close',
    closeClickOverlayModal: false,
  });

  showModalByTime('.popup', 60000);
};