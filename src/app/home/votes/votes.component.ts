import { Component, OnInit } from '@angular/core';
import { VotingBox } from './voting-box.model';
import { VotesService } from './votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  votingBoxes: VotingBox[];

  constructor(private votesService: VotesService) {}

  ngOnInit() {
    this.votesService
      .getVotesData()
      .then(votes => (this.votingBoxes = votes))
      .catch(error =>
        console.error('There was an error fetching the votes', error)
      );
  }
}
