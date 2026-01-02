// Throttled function utility
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastExecTime = 0;
  
  return ((...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }) as T;
};

// Debounced function utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return ((...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  }) as T;
}; 