import Data from '../helpers/data/messageData';
import Delete from './removeMessage';

const displayMessage = (obj) => {
  const domString = `
  <li class="media mb-3" id="${obj.id}">
    <img class="mr-3 rounded-circle" src="${obj.image}" alt="${obj.user}">
    <div class="media-body">
      <h5 class="mt-0 mb-1">${obj.user}</h5>
      <p class="message--content">${obj.message}</p>
      <p class="timestamp">${obj.timestamp}</p>
      <button type="button" class="close" id="delete${obj.id}"><span>&times;</span></button>
    </div>
  </li>`;
  $('#messages-list').append(domString);
  $(`#delete${obj.id}`).on('click', Delete.removeMessage);
};

const clearDom = () => {
  $('#messages-list').html('');
};

const printMessages = () => {
  clearDom();
  for (let i = Data.getMessages().length - 1; i > Data.getMessages().length - 21; i -= 1) {
    if (typeof Data.getMessages()[i] === 'undefined') break;
    displayMessage(Data.getMessages()[i]);
  }
};

export default { printMessages };
