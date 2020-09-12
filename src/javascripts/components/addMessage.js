import moment from 'moment';
import emojis from 'emojis';
import Message from '../helpers/data/messageData';
import Print from './displayMessages';

const messageAction = () => {
  if ($('#message-input').val() === '') {
    $('#error').html('<p>Please enter a message</p>');
  } else {
    if (!Message.editing) {
      const radioSelection = document.querySelector(
        'input[name=character]:checked'
      ).value;
      const imageSelection = document.querySelector(
        'input[name=character]:checked'
      ).id;
      const newMessage = {
        id: `message${Message.getMessages().length + 1}`,
        user: `${radioSelection}`,
        image: `${imageSelection}`,
        message: emojis.unicode($('#message-input').val()),
        timestamp: moment().format('MMMM Do YYYY, h:mm a'),
      };
      Message.getMessages().push(newMessage);
    } else {
      Message.holding.message = emojis.unicode($('#message-input').val());
      Message.getMessages().forEach((obj) => {
        let oldMessage = obj.message;
        if (obj.id === Message.holding.id) {
          oldMessage = Message.holding.message;
        }
        return oldMessage;
      });
      Message.editing = false;
    }
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
