export const cleanPath = () => {
  setTimeout(() => {
    history.replaceState({}, document.title, window.location.pathname);
  }, 1);
};
