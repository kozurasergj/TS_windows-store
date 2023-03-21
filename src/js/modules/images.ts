export const images = (): void => {
  const imgPopup = document.createElement('div') as HTMLElement;
  const workSection = document.querySelector('.works') as HTMLElement;
  const bigImage = document.createElement('img') as HTMLElement;

  imgPopup.classList.add('popup_photo');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (event: Event): void => {
    event.preventDefault();

    const target = event.target as HTMLElement;;
    const parentNode = target.parentNode as HTMLElement;

    if (target && target.classList?.contains('preview')) {
      imgPopup.style.display = 'flex';
      const imgPath = parentNode?.getAttribute('href');
      if (imgPath) {
        const numberImg = imgPath?.replace('./src/assets/img/our_works/big_img/', '');
        const mainPath = '/big_img/';
        bigImage.setAttribute('src', `${mainPath}${numberImg}`);
      }
    }
    if (target && target?.matches('div.popup_photo')) {
      imgPopup.style.display = 'none';
    }
  });
};
