export const ALL_DATA = "ALL_DATA";
export const LIKED_DATA = "LIKED_DATA";
export const REMOVED_DATA = "REMOVED_DATA";

export const saveStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getStorage = (key) => {
    if (JSON.parse(localStorage.getItem(key))) return JSON.parse(localStorage.getItem(key))
    return localStorage.getItem(key);
}