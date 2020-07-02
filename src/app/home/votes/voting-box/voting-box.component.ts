import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.scss']
})
export class VotingBoxComponent implements OnInit {
  @Input() votingBox;
  isVoteUp = true;
  isRulingUp: boolean;
  totalVotes: number;
  isVoteAgain = false;

  constructor() {}

  ngOnInit() {
    this.setRuling();
    this.setTotal();
  }

  setTotal() {
    this.totalVotes = this.votingBox.votesUp + this.votingBox.votesDown;
  }
  setRuling() {
    this.isRulingUp = this.votingBox.votesUp > this.votingBox.votesDown;
  }

  getPercentage(votes: number): number {
    return Math.round((votes / this.totalVotes) * 100);
  }

  vote(): void {
    this.totalVotes++;
    this.isVoteUp ? this.votingBox.votesUp++ : this.votingBox.votesDown++;
    this.setRuling();
    this.toggleVoteAgain();
  }

  toggleVoteAgain(): void {
    this.isVoteAgain = !this.isVoteAgain;
  }
}
