interface TabsParams {
  headerSelector: string;
  tabsSelector: string;
  contentSelector: string;
  activeClass: string;
  display: string;
}
export const tabs = ({ headerSelector, tabsSelector, contentSelector, activeClass, display }: TabsParams): void => {

  const header = document.querySelector(headerSelector) as HTMLElement;
  const allTab = document.querySelectorAll<HTMLElement>(tabsSelector);
  const content = document.querySelectorAll<HTMLElement>(contentSelector);

  const hideTabContent = (): void => {
    content.forEach((blockHtml: HTMLElement): void => {
      blockHtml.style.display = 'none';
    });
    allTab.forEach((tab: HTMLElement): void => {
      tab.classList.remove(activeClass);
    });
  };
  const showTabContent = (index: number = 0): void => {
    content[index].style.display = display;
    allTab[index].classList.add(activeClass);
  };
  hideTabContent();
  showTabContent();


  header.addEventListener('click', (event: MouseEvent): void => {
    const target: HTMLElement | null = event.target as HTMLElement;

    if (target && target instanceof HTMLElement &&
      (target.classList.contains(tabsSelector.replace(/\./, '')) ||
        target.parentNode instanceof HTMLElement &&
        target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
      allTab.forEach((element, index) => {
        if (target == element || target.parentNode == element) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  header.addEventListener('keydown', (event: KeyboardEvent): void => {
    const target: HTMLElement | null = event.target as HTMLElement;

    if (event.key === 'Enter' && target && target instanceof HTMLElement &&
      (target.classList.contains(tabsSelector.replace(/\./, '')) ||
        target.parentNode instanceof HTMLElement &&
        target.parentNode.classList.contains(tabsSelector.replace(/\./, '')))) {
      allTab.forEach((element, index) => {
        if (target == element || target.parentNode == element) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
};