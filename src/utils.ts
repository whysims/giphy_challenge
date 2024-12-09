export const debounce = (callback: Function, wait: number) => {
  let timeoutId: number | undefined = undefined;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
