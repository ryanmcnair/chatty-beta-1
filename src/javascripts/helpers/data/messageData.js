const messageArray = [
  {
    id: 'message1',
    user: 'Woodstock',
    message: '*Chittering noises*'
  },
  {
    id: 'message2',
    user: 'Snoopy',
    message: 'LOL'
  },
  {
    id: 'message3',
    user: 'Charlie Brown',
    message: 'Good grief...'
  },
  {
    id: 'message4',
    user: 'Lucy',
    message: 'Hey Schroeder, play me that song, you know the one by Vince Guaraldi'
  },
  {
    id: 'message5',
    user: 'Schroeder',
    message: 'Christmastime Is Here? But it\'s September!'
  }
];

const getMessages = () => messageArray;

export default { getMessages };
