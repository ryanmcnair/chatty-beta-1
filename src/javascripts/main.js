import '../styles/main.scss';
import Display from './components/displayMessages';
import button from './components/buttonActions';
import Message from './components/addMessage';
import Dark from './components/darkMode';

const init = () => {
  Message.addMessage();
  button.clearButton();
  Display.printMessages();
  Dark.darkMode();
};

init();
