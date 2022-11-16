/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, context) {
      return context.models.Pet.findMany(input);
    },
    pet(_, { input }, context) {
      console.log("Query => pet");
      return context.models.Pet.findOne(input);
    },
  },
  Mutation: {
    newPet(_, { input }, context) {
      return context.models.Pet.create(input);
    },
  },
  Pet: {
    owner(_, __, context) {
      console.log("PET => OWNER");
      return context.models.User.findOne();
    },
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300";
    },
  },
  User: {
    pets(_, __, context) {
      console.log("USER => PETS");
      return context.models.Pet.findMany();
    },
  },
};
