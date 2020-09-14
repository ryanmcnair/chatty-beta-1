import moment from 'moment';
import emojis from 'emojis';
import Message from '../helpers/data/messageData';
import Print from './displayMessages';
import Bot from '../helpers/data/botData';

const messageAction = () => {
  const lastIndex = Message.getMessages().length - 1;
  let idNumber = Message.getMessages().length === 0 ? 1 : Number(Message.getMessages()[lastIndex].id) + 1;
  const messageValue = $('#message-input').val();
  if (messageValue === '') {
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
        id: idNumber.toString(),
        user: `${radioSelection}`,
        image: `${imageSelection}`,
        message: emojis.unicode(messageValue),
        timestamp: moment().format('MMMM Do YYYY, h:mm a'),
      };
      Message.getMessages().push(newMessage);
    } else {
      Message.holding.message = emojis.unicode(messageValue);
      Message.getMessages().forEach((obj) => {
        let oldMessage = obj.message;
        if (obj.id === Message.holding.id) {
          oldMessage = Message.holding.message;
        }
        return oldMessage;
      });
      Message.editing = false;
    }
    for (let i = 0; i < Bot.bots.length; i += 1) {
      const lowerCaseMessageValue = messageValue.toLowerCase();
      if (
        lowerCaseMessageValue.includes(
          Bot.bots[i].respondTo.find((word) => lowerCaseMessageValue.includes(word))
        )
      ) {
        const botMessage = {
          id: (idNumber + 1).toString(),
          user: `${Bot.bots[i].user}`,
          image: `${Bot.bots[i].image}`,
          message: `${
            Bot.bots[i].message[
              Math.floor(Math.random() * Bot.bots[i].message.length)
            ]
          }`,
          timestamp: moment().format('MMMM Do YYYY, h:mm a'),
        };
        idNumber += 1;
        setTimeout(() => {
          Message.getMessages().push(botMessage);
          Print.printMessages();
        }, Math.floor(Math.random() * 10000) + 1000);
      }
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
