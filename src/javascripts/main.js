import '../styles/main.scss';
import Display from './components/displayMessages';
import button from './components/buttonActions';

const init = () => {
  button.clearButton();
  Display.printMessages();
};

init();
