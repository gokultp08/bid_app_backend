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

query GetProducts {
    getProducts {
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
