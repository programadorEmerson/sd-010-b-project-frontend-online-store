export function addLocalStorage(name, value, isCart) {
  if (localStorage.getItem(name) === null) {
    if (Array.isArray(value)) localStorage.setItem(name, JSON.stringify(value));
    localStorage.setItem(name, JSON.stringify([value]));
  } else {
    localStorage.setItem(
      name,
      JSON.stringify([
        ...JSON.parse(localStorage.getItem(name)),
        value,
      ]),
    );
  }
}

export function getLocalStorage() {

}

export function removeLocalStorage() {

}
