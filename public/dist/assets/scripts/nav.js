document.body.addEventListener('click', (event) => {
  if (event.target.dataset.modal) {
    handleModalTrigger(event)
  } else if (event.target.classList.contains('modal-hide')) {
    hideAllModals()
  }
}) 

function handleSectionTrigger (event) {
  hideAllSectionsAndDeselectButtons()
  // Highlight clicked button and show view
  event.target.classList.add('is-selected')

  // Display the current section
  const sectionId = `${event.target.dataset.section}-section`;
  document.getElementById(sectionId).classList.add('is-shown');

}

function activateDefaultSection () {
  document.getElementById('button-windows').click()
}

function showMainContent () {
  document.querySelector('.js-nav').classList.add('is-shown')
  document.querySelector('.js-content').classList.add('is-shown')
}

function handleModalTrigger (event) {
  hideAllModals()
  const modalId = `${event.target.dataset.modal}-modal`
  document.getElementById(modalId).classList.add('is-shown')
}

function hideAllModals () {
  const modals = document.querySelectorAll('.modal.is-shown')
  Array.prototype.forEach.call(modals, (modal) => {
    modal.classList.remove('is-shown')
  })
  showMainContent()
}

function hideAllSectionsAndDeselectButtons () {
  const sections = document.querySelectorAll('.js-section.is-shown')
  Array.prototype.forEach.call(sections, (section) => {
    section.classList.remove('is-shown')
  })
  const allVideo = document.getElementsByClassName("video");
  Array.prototype.forEach.call(allVideo, (video) => {
    const audio = video.getElementsByClassName("audio")[0];
    video.pause();
    audio.pause();
  });
  const buttons = document.querySelectorAll('.nav-button.is-selected')
  Array.prototype.forEach.call(buttons, (button) => {
    button.classList.remove('is-selected')
  })
}

function displayAbout () {
  document.querySelector('#about-modal').classList.add('is-shown')
}
setTimeout(() => {
  const allVideo = document.getElementsByClassName("video");
  Array.prototype.forEach.call(allVideo, (video) => {
    const audio = video.getElementsByClassName("audio")[0];
    video.onplay  = function() { audio.play();  }
    video.onpause = function() { audio.pause(); }
  });
}, 2000);

