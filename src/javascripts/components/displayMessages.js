import Data from '../helpers/data/messageData';
import Image from '../../assets/images/woodstock.gif';
import Delete from './removeMessage';

const displayMessage = (obj) => {
  const domString = `
  <li class="media mb-3" id="${obj.id}">
    <img class="mr-3 rounded-circle" src="${Image}" alt="${obj.user}">
    <div class="media-body">
      <h5 class="mt-0 mb-1">${obj.user}</h5>
      ${obj.message}
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
  Data.getMessages().forEach(displayMessage);
};

export default { printMessages };
