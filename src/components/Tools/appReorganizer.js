const appReorganizer = (app) => {
  const appsDom = document.querySelectorAll('.window-container-frame');
  const runningappsDom = document.querySelectorAll('.fast-and-running-app');

  appsDom.forEach((runningapp) => {
    if (parseInt(runningapp.id, 10) === app.id) {
      runningapp.classList.add('ontop');
      runningapp.classList.remove('minimized');
    } else { runningapp.classList.remove('ontop'); }
  });

  runningappsDom.forEach((runningapp) => {
    if (parseInt(runningapp.id, 10) === app.id) {
      runningapp.classList.add('running-selected');
    } else { runningapp.classList.remove('running-selected'); }
  });
};

export default appReorganizer;
