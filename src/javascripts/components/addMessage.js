import Data from '../helpers/data/messageData';
import Print from './displayMessages';

const addMessage = () => {
  $('#send').on('click', () => {
    if ($('#message-input').val() === '') {
      $('#error').html('<p>Please enter a message</p>');
    } else {
      const newMessage = {
        id: 'message6',
        user: 'Woodstock',
        message: $('#message-input').val(),
      };
      Data.getMessages().push(newMessage);
      Print.printMessages();
      $('#message-input').val('');
      $('#error').html('');
    }
  });
};

export default { addMessage };
