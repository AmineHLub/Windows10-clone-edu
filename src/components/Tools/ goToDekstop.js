const goToDekstop = () => {
  document.querySelectorAll('.window-container-frame').forEach((app) => {
    if (!app.classList.contains('minimized')) {
      app.classList.add('minimized');
    }
  });
};

export default goToDekstop;
