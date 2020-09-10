import Data from '../helpers/data/messageData';
import Print from './displayMessages';

const messageAction = () => {
  if ($('#message-input').val() === '') {
    $('#error').html('<p>Please enter a message</p>');
  } else {
    const newMessage = {
      id: `message${Data.getMessages().length + 1}`,
      user: 'Woodstock',
      message: $('#message-input').val(),
    };
    Data.getMessages().push(newMessage);
    Print.printMessages();
    $('#message-input').val('');
    $('#error').html('');
  }
};

const addMessage = () => {
  $('#send').on('click', () => {
    messageAction();
  });
  $('#message-input').on('keypress', (e) => {
    if (e.which === 13) {
      e.preventDefault();
      messageAction();
    }
  });
};

export default { addMessage };
