import { VotingBox } from './voting-box.model';

export const initialData: VotingBox[] = [
  {
    id: 1,
    imgUrl: 'assets/Kanye.jpg',
    title: 'Kanye West',
    time: '1 month ago',
    category: 'in Entertainment',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    votesUp: 16,
    votesDown: 9
  },
  {
    id: 2,
    imgUrl: 'assets/Mark.jpg',
    title: 'Mark Zuckerberg',
    time: '1 month ago',
    category: 'in Business',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    votesUp: 9,
    votesDown: 16
  },
  {
    id: 3,
    imgUrl: 'assets/Cristina.jpg',
    title: 'Cristina Fernández de Kirchner',
    time: '1 month ago',
    category: 'in Politics',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    votesUp: 9,
    votesDown: 16
  },
  {
    id: 4,
    imgUrl: 'assets/Malala.jpg',
    title: 'Malala Yousafzai',
    time: '1 month ago',
    category: 'in Entertainment',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    votesUp: 16,
    votesDown: 9
  }
];
