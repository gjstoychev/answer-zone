export const saveToStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};
  
export const getFromStorage = <T>(key: string): T | null => {
  const storedData = localStorage.getItem(key);
  return storedData ? (JSON.parse(storedData) as T) : null;
};
  
export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};
