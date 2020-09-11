const darkMode = () => {
  $('#darkMode').on('click', () => {
    if ($('body').hasClass('dark-mode')) {
      $('body').removeClass('dark-mode');
    } else {
      $('body').addClass('dark-mode');
    }
  });
};

export default { darkMode };
