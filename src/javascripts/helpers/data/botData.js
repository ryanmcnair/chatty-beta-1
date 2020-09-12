import Teacher from '../../../assets/images/Teacher.jpg';
import Pumpkin from '../../../assets/images/pumpkin.jpg';
import Ace from '../../../assets/images/flyingace.jpg';

const bots = [
  {
    user: 'Teacher',
    image: `${Teacher}`,
    message: ['Good grief...', 'Whomp whomp', '*Stern gaze*'],
    respondTo: ['teacher', '?', 'curse words', 'holla', 'yo', 'hey'],
  },
  {
    user: 'Great Pumpkin',
    image: `${Pumpkin}`,
    message: ['Happy Halloween', 'Thank you for your never ending dedication, Linus'],
    respondTo: ['October', 'pumpkin', 'Halloween', 'great', 'yo', 'spooky'],
  },
  {
    user: 'The Flying Ace',
    image: `${Ace}`,
    message: ['Ack Ack Ack Ack', 'Curse you, Red Baron'],
    respondTo: ['red baron', 'Red Baron', 'German', '!', 'yo'],
  },
];

export default { bots };
