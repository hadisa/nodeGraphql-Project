const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require("graphql");

const app = express();

const books = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "1984" },
  { id: 3, name: "The Great Gatsby" },
  { id: 4, name: "The Catcher in the Rye" },
  { id: 5, name: "Moby-Dick" },
  { id: 6, name: "Pride and Prejudice" },
  { id: 7, name: "War and Peace" },
  { id: 8, name: "The Hobbit" },
  { id: 9, name: "Crime and Punishment" },
  { id: 10, name: "The Lord of the Rings" },
];

const authors = [
  { id: 1, name: "Harper Lee" },
  { id: 2, name: "George Orwell" },
  { id: 3, name: "F. Scott Fitzgerald" },
  { id: 4, name: "J.D. Salinger" },
  { id: 5, name: "Herman Melville" },
  { id: 6, name: "Jane Austen" },
  { id: 7, name: "Leo Tolstoy" },
  { id: 8, name: "J.R.R. Tolkien" },
  { id: 9, name: "Fyodor Dostoevsky" },
  { id: 10, name: "Gabriel García Márquez" },
];

// Define BookType
const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

// Define AuthorType
const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represents an author of a book",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
  }),
});

const rootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLInt } },
      resolve: (parent, args) => books.find((book) => book.id === args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: () => books,
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLInt } },
      resolve: (parent, args) => authors.find((author) => author.id === args.id),
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: () => authors,
    },
  },
});

// Create the schema with the root query type
const schema = new GraphQLSchema({
  query: rootQueryType,
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
