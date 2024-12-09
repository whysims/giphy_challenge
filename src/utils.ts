type CallbackFunctionType = (...args: unknown[]) => void;

export const debounce = (callback: CallbackFunctionType, wait: number) => {
  let timeoutId: number | undefined = undefined;
  return (...args: unknown[]) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
