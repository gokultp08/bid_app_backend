import { Module } from '@nestjs/common';
import { BidResolvers } from './bid.resolver';
import { BidRepository } from './bid.repository';
import { BidService } from './bid.service';

@Module({
  providers: [BidResolvers, BidRepository, BidService],
  imports: [],
  exports: [BidService],
})
export class BidModule {}
