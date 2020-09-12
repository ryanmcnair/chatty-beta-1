import Message from '../helpers/data/messageData';

const editMessage = (e) => {
  const messageId = e.target.closest('li').id;
  Message.getMessages().forEach((obj) => {
    const findId = Message.getMessages().indexOf(obj);
    const selectedMessage = Message.getMessages()[findId].message;
    if (messageId === obj.id) {
      $('#message-input').val(selectedMessage);
    }
  });
};

export default { editMessage };
