const mainMenuItems = document.querySelectorAll('.main-menu .menu-item');
const subMenuItemsContainers = document.querySelectorAll('.sub-menu .sub-menu-column');
let activeMainMenuItem = 0;
let activeSubMenuIndex = 0;

function setActiveMainMenuItem(index) {
  mainMenuItems[activeMainMenuItem].classList.remove('active');
  activeMainMenuItem = index;
  mainMenuItems[activeMainMenuItem].classList.add('active');
  setActiveSubMenu(0);
}

function setActiveSubMenu(index) {
  activeSubMenuIndex = index;
  subMenuItemsContainers.forEach(container => {
    const subMenuItems = container.querySelectorAll('.menu-item');
    subMenuItems.forEach(item => item.classList.remove('active'));
    subMenuItems[activeSubMenuIndex].classList.add('active');
  });
}

function handleLeftRightKeys(key) {
  if (key === 'ArrowLeft' && activeMainMenuItem > 0) {
    setActiveMainMenuItem(activeMainMenuItem - 1);
  } else if (key === 'ArrowRight' && activeMainMenuItem < mainMenuItems.length - 1) {
    setActiveMainMenuItem(activeMainMenuItem + 1);
  }
}

function handleUpDownKeys(key) {
  if (key === 'ArrowUp' && activeSubMenuIndex > 0) {
    setActiveSubMenu(activeSubMenuIndex - 1);
  } else if (key === 'ArrowDown' && activeSubMenuIndex < subMenuItemsContainers[0].querySelectorAll('.menu-item').length - 1) {
    setActiveSubMenu(activeSubMenuIndex + 1);
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowRight':
      handleLeftRightKeys(event.key);
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      handleUpDownKeys(event.key);
      break;
  }
});

// Set the initial active menu items
setActiveMainMenuItem(0);
