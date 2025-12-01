import { Main } from "./main.js"; 

document.addEventListener('DOMContentLoaded', () => {
  const noticiasList = document.getElementById('noticias');
  if (noticiasList) {
    console.log("Carregando notícias...");
    Main.showNotices();
    Main.setupTagsAndFiltering();
  }

  const form = document.getElementById('noticia-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      Main.save();
    });
  }
});