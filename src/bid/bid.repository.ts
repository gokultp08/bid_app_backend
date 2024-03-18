import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { Bid } from 'src/graphql/models/bid.model';
import { NewBid } from 'src/graphql/utils/bid-input.model';
import { BidStatus } from 'src/helpers/enums';
import { QueryResultMapper } from 'src/helpers/query-result.mapper';
import { v4 as uuid } from 'uuid';

export class BidRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findOne(id: string): Promise<Bid | null> {
    const result = await this.knex.raw('SELECT * FROM bids where id = ?', [id]);
    return QueryResultMapper.mapBidRowToBid(result?.rows[0]);
  }

  async findAll(): Promise<Bid[]> {
    const result = await this.knex.raw('SELECT * FROM bids');
    console.log('results', result.rows);
    return result.rows.map((item) => QueryResultMapper.mapBidRowToBid(item));
  }

  async findAllByProductId(id: string): Promise<Bid[]> {
    const result = await this.knex.raw(
      'SELECT * FROM bids where productid = ?',
      [id],
    );
    console.log('findAllByProductId', result.rows);
    return result.rows.map((item) => QueryResultMapper.mapBidRowToBid(item));
  }

  async create(data: NewBid): Promise<Bid> {
    await this.knex.raw(
      `CREATE TABLE IF NOT EXISTS bids(id VARCHAR(255) PRIMARY KEY,productId VARCHAR(255) NOT NULL,owner VARCHAR(255) NOT NULL,status VARCHAR(255) NOT NULL,price DECIMAL(10, 2) NOT NULL,createdTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE)`,
    );

    const id = String(uuid());
    await this.knex.raw(
      `INSERT INTO bids (id, productId, owner, status, price) VALUES(?,?,?,?,?)`,
      [
        id,
        data.productId,
        data.owner,
        BidStatus.SUBMITTED.toString(),
        data.price,
      ],
    );

    return await this.findOne(id);
  }

  async update(id: string, fields: Record<string, any>): Promise<Bid> {
    const columnName = Object.keys(fields);
    const columnValue = Object.values(fields);

    const updateFieldQuery = columnName
      .map((column) => `${column} = ?`)
      .join(', ');

    const query = `UPDATE bids SET ${updateFieldQuery} WHERE id = ?`;
    await this.knex.raw(query, [...columnValue, id]);

    return this.findOne(id);
  }

  async delete(id: string): Promise<string> {
    await this.knex.raw('DELETE FROM bids WHERE id = ?', [id]);
    return 'OK';
  }
}
