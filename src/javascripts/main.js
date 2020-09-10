import '../styles/main.scss';
import Display from './components/displayMessages';
import Message from './components/addMessage';

const init = () => {
  Message.addMessage();
  Display.printMessages();
};

init();
