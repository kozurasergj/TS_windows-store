export const timer = (selector: string, deadline: string) => {

  const addZero = (num: number): string => num <= 9 ? `0${num}` : `${num}`;

  interface TimeRemaining {
    betweenTime: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
  }

  const getTimeRemaining = (endTime: string): TimeRemaining => {
    const betweenTime = Date.parse(endTime) - Date.parse(new Date().toString());
    const seconds = Math.floor((betweenTime / 1000) % 60);
    const minutes = Math.floor((betweenTime / 1000 / 60) % 60);
    const hours = Math.floor((betweenTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor((betweenTime / (1000 * 60 * 60 * 24)));
    return { betweenTime, seconds, minutes, hours, days };
  }

  const setClock = (selector: string, deadline: string): void => {
    const HtmlblockTimer = document.querySelector(selector) as HTMLElement;
    if (!HtmlblockTimer) {
      throw new Error(`No HTML element found for the selector: ${selector}`);
    }
    const days = HtmlblockTimer.querySelector("#days") as HTMLElement;
    const hours = HtmlblockTimer.querySelector("#hours") as HTMLElement;
    const minutes = HtmlblockTimer.querySelector("#minutes") as HTMLElement;
    const seconds = HtmlblockTimer.querySelector("#seconds") as HTMLElement;

    const updateClock = (): void => {
      const timeObj = getTimeRemaining(deadline);
      days.textContent = addZero(timeObj.days);
      hours.textContent = addZero(timeObj.hours);
      minutes.textContent = addZero(timeObj.minutes);
      seconds.textContent = addZero(timeObj.seconds);
      if (timeObj.betweenTime <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timerInterval);
      }
    };
    updateClock();
    const timerInterval = setInterval(updateClock, 1000);
  };

  setClock(selector, deadline);
};