import { Injectable } from '@angular/core';
import { VotingBox } from './voting-box.model';
import { RuleOfThumbDB } from '../../core/db';
import { initialData } from './initialData';
@Injectable({
  providedIn: 'root'
})
export class VotesService {
  private db = new RuleOfThumbDB();

  constructor() {}

  async getVotesData(): Promise<VotingBox[]> {
    const count = await this.db.votes.count();

    // Add initial data if there is none in the indexed db
    if (count === 0) {
      await this.setInitialData();
    }
    return this.getFromDB();
  }

  private setInitialData(): Promise<number> {
    return this.db.votes.bulkAdd(initialData);
  }

  private getFromDB(): Promise<VotingBox[]> {
    return this.db.votes.toArray();
  }

  setVote(voteId: number, newVotingBox: VotingBox): Promise<number> {
    return this.db.votes.put(newVotingBox, voteId);
  }
}
