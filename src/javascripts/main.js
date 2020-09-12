import '../styles/main.scss';
import Display from './components/displayMessages';
import Button from './components/buttonActions';
import Message from './components/addMessage';
import Users from './components/multipleUsers';

const init = () => {
  Message.addMessage();
  Button.clearButton();
  Display.printMessages();
  Users.userSelection();
};

init();
