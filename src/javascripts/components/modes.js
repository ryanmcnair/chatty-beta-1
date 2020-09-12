const darkMode = () => {
  $('#darkMode').on('click', () => {
    document.body.classList.toggle('dark-mode');
  });
};

const largeText = () => {
  $('#largeText').on('click', () => {
    document.body.classList.toggle('large-text');
  });
};

export default { darkMode, largeText };
