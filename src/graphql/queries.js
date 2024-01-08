import { gql } from "@apollo/client";

const GET_PRODUCTS_INFO = gql`
  query {
    products ( last: 100, orderBy: createdAt_ASC){
    id
    name
    price
    slug
    cover {
      url
    }
    covers {
      url
    }
  }
}

  
  
`;

const GET_CATEGORIES_INFO = gql`
  query {
    categories {
    id
    name
    photo {
      url
    }
    slug
    
  }
  }
`;

const GET_CATEGORY_INFO = gql`
  query getCategoryInfo($slug: String!) {
    category(where: { slug: $slug } ) {
    id
    name
    photo {
      url
    }
    products {
      id
      name
      slug
      price
      cover {
        url
      }
    }
  }
  }
`;

const GET_PRODUCT_INFO = gql`
  query getProduct($slug: String!) {
    product(where: {slug: $slug}) {
    id
    name
    price
    slug
    details{
      html
    }
    covers(orderBy: mimeType_ASC) {
      url
    }
    specifications
    cover {
      url
    }
    category {
      id
      name
      photo {
        url
      }
      slug
    }
  }
  }
`;

const GET_PRODUCT_COMMENTS = gql`
  query getProductComments($slug: String!) {
    comments(where: { product: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

export {
  GET_PRODUCTS_INFO,
  GET_CATEGORIES_INFO,
  GET_CATEGORY_INFO,
  GET_PRODUCT_INFO,
  GET_PRODUCT_COMMENTS,
};
