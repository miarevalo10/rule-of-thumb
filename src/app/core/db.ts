import Dexie from 'dexie';
import { VotingBox } from '../home/votes/voting-box.model';

export class RuleOfThumbDB extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  votes: Dexie.Table<VotingBox, number>; // number = type of the primkey

  constructor() {
    super('ruleOfThumbDB');
    this.version(1).stores({
      votes: '++id,title,imgUrl,time,category,description,votesUp,votesDown'
    });
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.votes = this.table('votes');
  }
}
