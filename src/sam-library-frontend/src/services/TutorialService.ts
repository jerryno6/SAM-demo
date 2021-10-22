import http from "../http-common";
import ITutorialData from "../types/Tutorial";

const getAll = () => {
  return http.get("/books");
};

const get = (id: any) => {
  return http.get(`/books/${id}`);
};

const create = (data: ITutorialData) => {
  return http.post("/books", data);
};

const update = (id: any, data: ITutorialData) => {
  return http.put(`/books/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/books/${id}`);
};

const removeAll = () => {
  return http.delete(`/books`);
};

const findByTitle = (title: string) => {
  return http.get(`/books?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
