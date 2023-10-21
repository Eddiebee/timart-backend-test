const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    orders: [Order]!
  }

  type Order {
    id: Int!
    item: String!
    price: String!
    userId: Int!
  }

  type Query {
    oneUser(id: Int!): User
    userOrders(id: Int!): [Order]
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      password: String!
      confirmPassword: String!
    ): User!
    createOrder(userId: Int!, item: String!, price: String!): Order!
  }
`;
module.exports = typeDefs;
