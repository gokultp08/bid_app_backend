import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { BidService } from './bid.service';
import { Bid } from 'src/graphql/models/bid.model';
import { NewBid, UpdateBidStatus } from 'src/graphql/utils/bid-input.model';

@Resolver(Bid)
export class BidResolvers {
  constructor(private readonly bidService: BidService) {}

  @Query(() => [Bid])
  async getBids(): Promise<Bid[]> {
    return this.bidService.getBids();
  }

  @Query((returns) => Bid, { nullable: true })
  getBidById(@Args('id') id: string) {
    console.log('id', id);
    return this.bidService.getBidById(id);
  }

  @Mutation((returns) => Bid)
  createBid(@Args('createBid') createBid: NewBid): Promise<Bid> {
    console.log('resolver', createBid);
    return this.bidService.createBid(createBid);
  }

  @Mutation((returns) => Bid)
  updateBidStatus(
    @Args('updateProductStatus') bid: UpdateBidStatus,
  ): Promise<Bid> {
    return this.bidService.updateBidStatus(bid);
  }

  @Mutation((returns) => String)
  deleteProduct(@Args('id') id: string): Promise<string> {
    return this.bidService.deleteBid(id);
  }
}
