const User = require("../models").User;
const Order = require("../models").Order;
const bcrypt = require("bcryptjs");
const resolvers = {
  User: {
    async orders(user) {
      return user.getOrders();
    },
  },
  Order: {
    async userId(order) {
      return order.getUser().userId;
    },
  },
  Query: {
    oneUser(root, { id }) {
      return User.findOne({
        where: { id: id },
      })
        .then((user) => {
          return user;
        })
        .catch((error) => error);
    },
    userOrders(root, { id }) {
      return Order.findAll({
        where: { userId: id },
      })
        .then((orders) => orders)
        .catch((error) => error);
    },
  },
  Mutation: {
    createUser(root, { name, email, password, confirmPassword }) {
      if (password !== confirmPassword) {
        throw new Error();
      }
      return bcrypt
        .hash(password, 10)
        .then((pass) => {
          return User.create({
            name: name,
            email: email,
            password: pass,
          })
            .then((created) => created)
            .catch((error) => error);
        })
        .catch((error) => error);
    },
    createOrder(root, { userId, item, price }) {
      return Order.create({
        userId: userId,
        item: item,
        price: price,
      })
        .then((order) => order)
        .catch((error) => error);
    },
  },
};

module.exports = resolvers;
