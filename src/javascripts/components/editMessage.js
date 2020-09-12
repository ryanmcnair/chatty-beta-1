import Message from '../helpers/data/messageData';

const editMessage = (e) => {
  Message.editing = true;
  const messageId = e.target.closest('li').id;
  Message.getMessages().forEach((obj) => {
    const findId = Message.getMessages().indexOf(obj);
    const messageToBeEdited = Message.getMessages()[findId];
    const selectedMessage = messageToBeEdited.message;
    if (messageId === obj.id) {
      $('#message-input').val(selectedMessage);
      Message.holding = messageToBeEdited;
    }
  });
};

export default { editMessage };
