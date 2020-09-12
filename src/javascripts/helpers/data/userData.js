import Linus from '../../../assets/images/Linus.png';
import Peppermint from '../../../assets/images/Peppermint Patty.png';
import Pig from '../../../assets/images/pigpen.jpg';
import Marcie from '../../../assets/images/Marcie.png';
import Franklin from '../../../assets/images/Franklin.jpg';

const users = [
  {
    id: 'user1',
    image: `${Linus}`,
    user: 'Linus',
  },
  {
    id: 'user2',
    image: `${Peppermint}`,
    user: 'Peppermint Patty',
  },
  {
    id: 'user3',
    image: `${Pig}`,
    user: 'Pig-Pen',
  },
  {
    id: 'user4',
    image: `${Marcie}`,
    user: 'Marcie',
  },
  {
    id: 'user5',
    image: `${Franklin}`,
    user: 'Franklin',
  },
];

const selectUsers = () => users;

export default { selectUsers };
