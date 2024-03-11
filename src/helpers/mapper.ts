import { Product } from 'src/graphql/models/product.model';

export function mapProductRowToProduct(row: any): Product {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    endTime: row.endtime.toString(),
    owner: row.owner,
    status: row.status,
    price: row.price,
    image: row.image,
    createdTime: new Date(row.createdtime).toUTCString(),
  };
}
