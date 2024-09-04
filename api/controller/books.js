import { request, response } from "express";
import db from "../db.js"

export const getBooks = (resquest, response) => {

 const query = /*sql */`SELECT * FROM books`

 db.query(query, (error, data) => {
    if (error) {
        return response.json(error)
    }
    return response.status(200).json(data)
  });
}

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
}