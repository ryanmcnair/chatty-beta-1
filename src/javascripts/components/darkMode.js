const darkMode = () => {
  $('#darkMode').on('click', () => {
    document.body.classList.toggle('dark-mode');
  });
};

export default { darkMode };
