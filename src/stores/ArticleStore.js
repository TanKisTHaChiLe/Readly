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

  constructor(RootStore ) {
    makeAutoObservable(this);
    this.RootStore = RootStore;
    this.loadArticles();
  }

//   addEscapeHandler = (popupName) => {
//     const handler = (e) => {
//       if (e.key === "Escape") {
//         this.closePopup(popupName);
//       }
//     };
//     window.addEventListener("keydown", handler);
//     this.PopupHandlers[`${popupName}_handler`] = handler;
//   };

//   removeEscapeHandler = (popupName) => {
//     const handler = this.PopupHandlers[`${popupName}_handler`];
//     if (handler) {
//       window.removeEventListener("keydown", handler);
//       this.PopupHandlers[`${popupName}_handler`] = null;
//     }
//   };

//   resetForm = (formObject) => {
//     console.log(formObject);
//     Object.keys(formObject).forEach((key) => {
//       if (typeof formObject[key] === "string") {
//         formObject[key] = "";
//       } else if (Array.isArray(formObject[key])) {
//         formObject[key] = [];
//       } else if (typeof formObject[key] === "boolean") {
//         formObject[key] = false;
//       } else if (typeof formObject[key] === "number") {
//         formObject[key] = 0;
//       } else if (
//         typeof formObject[key] === "object" &&
//         formObject[key] !== null
//       ) {
//         this.resetForm(formObject[key]);
//       }
//     });
//   };

//   updateNewArticle = (field, value) => {
//     this.newArticle[field] = value;
//   };

//   openPopup = (popupName) => {
//     this.PopupStore[`${popupName}PopupOpen`] = true;
//     this.addEscapeHandler(`${popupName}PopupOpen`);
//   };

//   closePopup = (popupName) => {
//     this.PopupStore[`${popupName}PopupOpen`] = false;
//     this.removeEscapeHandler(`${popupName}PopupOpen`);
//     if (document.activeElement) {
//       document.activeElement.blur();
//     }
//   };

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

