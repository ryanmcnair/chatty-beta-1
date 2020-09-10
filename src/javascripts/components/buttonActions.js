import Data from '../helpers/data/messageData';

const clearButton = () => {
  $('#clear-button').on('click', () => {
    $('#messages-list').empty();
    Data.getMessages().length = 0;
  });
};

export default { clearButton };
