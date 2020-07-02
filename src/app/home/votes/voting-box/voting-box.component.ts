import { Component, OnInit, Input } from '@angular/core';
import { VotesService } from '../votes.service';
import { VotingBox } from '../voting-box.model';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.scss']
})
export class VotingBoxComponent implements OnInit {
  @Input() votingBox: VotingBox;
  isVoteUp = true;
  isRulingUp: boolean;
  totalVotes: number;
  isVoteAgain = false;

  constructor(private votesService: VotesService) {}

  ngOnInit() {
    this.setRuling();
    this.setTotal();
  }

  setTotal(): void {
    this.totalVotes = this.votingBox.votesUp + this.votingBox.votesDown;
  }
  setRuling(): void {
    this.isRulingUp = this.votingBox.votesUp > this.votingBox.votesDown;
  }

  getPercentage(votes: number): number {
    return Math.round((votes / this.totalVotes) * 100);
  }

  vote(): void {
    this.totalVotes++;
    this.isVoteUp ? this.votingBox.votesUp++ : this.votingBox.votesDown++;
    this.setRuling();

    this.votesService
      .setVote(this.votingBox.id, this.votingBox)
      .then(_ => this.toggleVoteAgain())
      .catch(error =>
        console.error(
          'There was an error adding your vote, please try again',
          error
        )
      );
  }

  toggleVoteAgain(): void {
    this.isVoteAgain = !this.isVoteAgain;
  }
}
