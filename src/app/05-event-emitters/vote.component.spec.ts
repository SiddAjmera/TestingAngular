import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment the totalVotes field when upVoted', () => {

    let totalVotes = null;
    component.voteChanged.subscribe(t => totalVotes = t);

    component.upVote();

    expect(totalVotes).toEqual(1);

  });
});