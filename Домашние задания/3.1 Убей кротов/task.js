(() => {
  const getHole = index => document.getElementById(`hole${index}`),
    getDead = () => document.getElementById('dead'),
    getDeadCount = () => parseInt(getDead().textContent),
    setDeadCount = string => getDead().textContent = string,
    getLost = () => document.getElementById('lost'),
    getLostCount = () => parseInt(getLost().textContent),
    setLostCount = string => getLost().textContent = string;

  let hasClicked = false;

  for (let i = 1; i < 10; i++) {
    getHole(i).addEventListener('click', function() {
      if (getHole(i).classList.contains('hole_has-mole') & !hasClicked) {
        setDeadCount(getDeadCount() + 1);
        hasClicked = true;
      }
    });
  }

  const cycle = () => setTimeout(() => {
    if (!hasClicked) {
      setLostCount(getLostCount() + 1);
    }

    if (getDeadCount() == 10 | getLostCount() == 5) {
      setDeadCount(0);
      setLostCount(0);
    }

    hasClicked = false;
    cycle();
  }, 800 );

  cycle();
})();