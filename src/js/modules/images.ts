export const images = (): void => {
  const imgPopup = document.createElement('div') as HTMLDivElement;
  const bigImage = document.createElement('img') as HTMLImageElement;
  const workSection = document.querySelector('.works') as HTMLElement;

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (event: Event): void => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const parentNode = target.parentNode as HTMLElement;
      const path = parentNode.getAttribute('href');
      if (path) {
        bigImage.setAttribute('src', path);
      }
    }
    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  });
}; 