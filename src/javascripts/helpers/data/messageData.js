const messageArray = [
  {
    id: 'message1',
    user: 'Charlie Brown',
    message: 'Good grief...',
    timestamp: 'October 2, 1950, 6:15 am'
  },
  {
    id: 'message2',
    user: 'Snoopy',
    message: 'LOL',
    timestamp: 'October 4, 1950, 12:02 am'
  },
  {
    id: 'message3',
    user: 'Schroeder',
    message: 'Christmastime Is Here? But it\'s September!',
    timestamp: 'May 30, 1951, 8:48 pm'
  },
  {
    id: 'message4',
    user: 'Lucy',
    message: 'Hey Schroeder, play me that song, you know the one by Vince Guaraldi',
    timestamp: 'March 3, 1952, 10:11 pm'
  },
  {
    id: 'message5',
    user: 'Woodstock',
    message: '*Chittering noises*',
    timestamp: 'April 4, 1967, 7:03 pm'
  }
];

const getMessages = () => messageArray;

export default { getMessages };
