import Message from '../helpers/data/messageData';

const removeMessage = (e) => {
  const messageId = e.target.closest('li').id;
  Message.getMessages().forEach((message) => {
    const findId = Message.getMessages().indexOf(message);
    if (messageId === message.id) {
      Message.getMessages().splice(findId, 1);
    }
  });
  $(`#${messageId}`).remove();
};

export default { removeMessage };
