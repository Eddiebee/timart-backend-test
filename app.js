const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas/schema");
const resolvers = require("./resolvers/resolvers");
const express = require("express");
const models = require("./models");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(
    `Server started on port http://localhost:4000${server.graphqlPath}`
  );
});
