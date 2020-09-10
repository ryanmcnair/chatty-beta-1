const clearButton = () => {
  $('#clear-button').on('click', () => {
    $('#messages-list').empty();
  });
};

export default { clearButton };
