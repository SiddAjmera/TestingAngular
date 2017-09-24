import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
  });

  describe('upVote function', () => {

    it('should increment the totalVotes property set on the component', () => {

      voteComponent.upVote();

      expect(voteComponent.totalVotes).toEqual(1);

    });

  });

  describe('downVote function', () => {

    it('should decrement the totalVotes property set on the component', () => {

      voteComponent.downVote();
      
      expect(voteComponent.totalVotes).toEqual(-1);

    });

  });

});