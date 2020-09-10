import '../styles/main.scss';
import Display from './components/displayMessages';
import button from './components/buttonActions';
import Message from './components/addMessage';

const init = () => {
  Message.addMessage();
  button.clearButton();
  Display.printMessages();
};

init();
