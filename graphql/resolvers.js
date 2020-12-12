/* const nicolas = {
  name: "Nicolas",
  age: 18,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => nicolas,
  },
}; */
/* import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      console.log(id); //요청할 때 작동
      return getById(id);
    }, //첫번째 인자는 Object를 보내는 Object?
  },
};

export default resolvers; */

//.graphql example
/* type Movie {
  id: Int!
  name: String!
  score: Int!
}

type Query {
  movies: [Movie]!
  movie(id: Int!): Movie
}

type Mutation {
  addMovie(name: String!, score: Int!): Movie!
  deleteMovie(id: Int!): Boolean!
} 

import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;*/

import { getMovies } from "./nodeFetchDb";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

export default resolvers;
