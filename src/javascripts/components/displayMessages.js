import Data from '../helpers/data/messageData';
import Image from '../../assets/images/woodstock.gif';

const displayMessage = (obj) => {
  const domString = `
  <li class="media mb-3">
    <img class="mr-3 rounded-circle" src="${Image}" alt="${obj.user}">
    <div class="media-body">
      <h5 class="mt-0 mb-1">${obj.user}</h5>
      ${obj.message}
    </div>
  </li>`;

  $('#messages-list').append(domString);
};

const printMessages = () => {
  Data.messageArray.forEach(displayMessage);
};

export default { printMessages };
