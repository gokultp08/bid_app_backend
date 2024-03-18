import { Injectable } from '@nestjs/common';
import { BidRepository } from './bid.repository';
import { NewBid, UpdateBidStatus } from 'src/graphql/utils/bid-input.model';
import { Bid } from 'src/graphql/models/bid.model';

@Injectable()
export class BidService {
  constructor(private readonly bidRepository: BidRepository) {}

  async getBidById(id: string): Promise<Bid | null> {
    return this.bidRepository.findOne(id);
  }

  async getBids(): Promise<Bid[]> {
    return this.bidRepository.findAll();
  }

  async getBidsbyProductId(id: string): Promise<Bid[]> {
    return this.bidRepository.findAllByProductId(id);
  }

  async createBid(data: NewBid): Promise<Bid> {
    return this.bidRepository.create(data);
  }

  async updateBidStatus(data: UpdateBidStatus): Promise<Bid> {
    const oldData = await this.getBidById(data.id);
    return this.bidRepository.update(data.id, {
      status: data.status,
    });
  }

  async deleteBid(id: string): Promise<string> {
    return this.bidRepository.delete(id);
  }
}
