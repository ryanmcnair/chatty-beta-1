import moment from 'moment';
import Data from '../helpers/data/messageData';
import Print from './displayMessages';

const messageAction = () => {
  if ($('#message-input').val() === '') {
    $('#error').html('<p>Please enter a message</p>');
  } else {
    const radioSelection = document.querySelector('input[name=character]:checked').value;
    const imageSelection = document.querySelector('input[name=character]:checked').id;
    const newMessage = {
      id: `message${Data.getMessages().length + 1}`,
      user: `${radioSelection}`,
      image: `${imageSelection}`,
      message: $('#message-input').val(),
      timestamp: moment().format('MMMM Do YYYY, h:mm a')
    };
    Data.getMessages().push(newMessage);
    $('#message-input').val('');
    $('#error').html('');
    Print.printMessages();
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
