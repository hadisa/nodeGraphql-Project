# GraphQL Express Server

This is a simple Node.js server built with Express and GraphQL. The server provides an API to query a list of books and authors using GraphQL.

## Features

- **Query Books:** Fetch a list of books or get details of a specific book by its ID.
- **Query Authors:** Fetch a list of authors or get details of a specific author by their ID.
- **GraphiQL:** A built-in interactive GraphQL IDE for testing and exploring the API.

## Project Structure

- `server.js`: The main entry point for the server. Defines the GraphQL schema, resolvers, and sets up the Express server.
- `books`: An array of book objects with `id` and `name` properties.
- `authors`: An array of author objects with `id` and `name` properties.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development environment:

- Node.js (version 14 or above)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hadisa/nodeGraphql-Project
   cd graphql-express-server

 2. for running  the project

 ```
 npm install
 npm run dev
 ```
