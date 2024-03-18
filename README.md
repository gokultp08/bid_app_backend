RUN APP
Use docker to run postgres instance
docker run --name postgres_container -e POSTGRES_USER=db_user -e POSTGRES_PASSWORD=db_password -e POSTGRES_DB=bid_db -p 5432:5432 -d postgres
npm run start:dev

Using Docker
docker build -t my-nest-app .
docker run --name my-nest-app-container --link postgres_container -p 3000:3000 -d my-nest-app
Adjust DATABASE_HOST wrt to address of postgres docker instance running

GRAPHQL SCRIPTS
mutation {
createProduct(
createProduct: {
title: "Sample Product 222"
description: "This is a sample product description"
endTime: "2024-12-31T23:59:59"
owner: "gokul"
price: "19.99"
image: "sample_image_url.jpg"
}) {
id
title
description
endTime
owner
status
price
image
createdTime
}
}

query {
getProductById(id: "6d1ac324-7cef-46de-9988-ae3d0d86a945") {
id,
title,
description,
endTime,
owner,
status,
price,
image,
createdTime
}
}
