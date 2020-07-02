import { Component, OnInit } from '@angular/core';

export interface VotingBox {
  id: number;
  imgUrl: string;
  title: string;
  time: string;
  category: string;
  description: string;
  votesUp: number;
  votesDown: number;
}

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  votingBoxes: VotingBox[] = [
    {
      id: 1,
      imgUrl: 'assets/Kanye.png',
      title: 'Kanye West',
      time: '1 month ago',
      category: 'in Entertainment',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votesUp: 6,
      votesDown: 5
    },
    {
      id: 2,
      imgUrl: 'assets/Mark.png',
      title: 'Mark Zuckerberg',
      time: '1 month ago',
      category: 'in Business',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votesUp: 5,
      votesDown: 6
    },
    {
      id: 3,
      imgUrl: 'assets/Cristina.png',
      title: 'Cristina Fernández de Kirchner',
      time: '1 month ago',
      category: 'in Politics',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votesUp: 6,
      votesDown: 5
    },
    {
      id: 4,
      imgUrl: 'assets/Malala.png',
      title: 'Malala Yousafzai',
      time: '1 month ago',
      category: 'in Entertainment',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      votesUp: 6,
      votesDown: 5
    }
  ];

  constructor() {}

  ngOnInit() {}
}
