import { makeAutoObservable } from "mobx";
import articlesData from "../articlesData"; // Импортируем данные
import { createContext } from "react";

export class ArticleStore {
  articles = [];

  PopupStore = {
    newArticlePopupOpen: false,
    UserPopupOpen: false,
  };

  PopupHandlers = {};

  newArticle = {
    title: "",
    summary: "",
    content: "",
    link: "",
    theme: "",
    author: "",
  };

  User = {
    login: "",
    password: "",
  };

  constructor(RootStore) {
    makeAutoObservable(this);
    this.RootStore = RootStore;
    this.loadArticles();
  }

  addArticle = () => {
    this.articles.unshift({
      ...this.newArticle,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    });
  };

  loadArticles() {
    this.articles = articlesData;
  }

  loadArticleDetailsById = (id) => {
    return this.articles.find((article) => article.id === id);
  };
}
