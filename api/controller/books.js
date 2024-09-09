import { request, response } from "express";
import db from "../db.js";

export const getBooks = (resquest, response) => {

 const query = /*sql */`SELECT * FROM books`

 db.query(query, (error, data) => {
    if (error) {
        return response.json(error)
    }
    return response.status(200).json(data)
  });
};

export const addBook = (request, response) => {
  const query = "INSERT INTO books(`titulo`, `autor`, `editora`) VALUES (?)"
  const values = [
    request.body.titulo, 
    request.body.autor, 
    request.body.editora
  ]

  db.query(query, [values], (error) => {
     if (error) {
      return response.json(error)
     }
     return response.status(200).json({ message: "Livro cadastrado com sucesso!" })
  });
};

export const deleteBook = (request, response) => {
  const query = "DELETE FROM books WHERE id = ?"

  db.query(query, [request.params.id], (error) => {
    if (error) {
      return response.status(500).json(error);
      }
      return response.status(200).json({ message: "Livro deletado com sucesso!" });
  });
};

export const updateBook = (request, response) => {
  const query = "UPDATE books SET titulo = ?, autor = ?, editora = ? WHERE id = ?";

  const values = [
    request.body.titulo,
    request.body.autor,
    request.body.editora
  ];

  db.query(query, [...values, request.params.id], (error) => {
    if (error) {
      return response.status(500).json(error);
      }
      return response.status(200).json({ message: "Livro atualizado com sucesso!" });
  });
};