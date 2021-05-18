export function addLocalStorage(key, value) {
  if (localStorage.getItem(key) === null) {
    if (Array.isArray(value)) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
    }
  } else {
    localStorage.setItem(
      key,
      JSON.stringify([
        ...JSON.parse(localStorage.getItem(key)),
        value,
      ]),
    );
  }
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function updateLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}
