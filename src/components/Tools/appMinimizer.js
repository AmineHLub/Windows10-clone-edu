const appMinimizer = (app) => {
  const appsDom = document.querySelectorAll('.window-container-frame');
  appsDom.forEach((runningapp) => {
    if (parseInt(runningapp.id, 10) === app.id) {
      setTimeout(() => {
        runningapp.classList.add('minimized');
        runningapp.classList.remove('ontop');
      }, 50);
    }
  });
};

export default appMinimizer;
