import Woodstock from '../../../assets/images/woodstock.gif';
import Snoopy from '../../../assets/images/snoopy.jpg';
import Chuck from '../../../assets/images/Charlie Brown.png';
import Lucy from '../../../assets/images/Lucy.png';
import Schroeder from '../../../assets/images/Schroeder.jpg';

const messageArray = [
  {
    id: 'message1',
    user: 'Woodstock',
    image: `${Woodstock}`,
    message: '*Chittering noises*'
  },
  {
    id: 'message2',
    user: 'Snoopy',
    image: `${Snoopy}`,
    message: 'LOL'
  },
  {
    id: 'message3',
    user: 'Charlie Brown',
    image: `${Chuck}`,
    message: 'Good grief...'
  },
  {
    id: 'message4',
    user: 'Lucy',
    image: `${Lucy}`,
    message: 'Hey Schroeder, play me that song, you know the one by Vince Guaraldi'
  },
  {
    id: 'message5',
    user: 'Schroeder',
    image: `${Schroeder}`,
    message: 'Christmastime Is Here? But it\'s September!'
  }
];

const getMessages = () => messageArray;

export default { getMessages };
