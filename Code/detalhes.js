import { Util } from './util.js';

export class Detalhes {
  constructor() {
    this.news = Util.getNotices();
  };

  getNewsIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    const idStr = params.get('id');
    const id = idStr === null ? NaN : parseInt(idStr, 10);
    return Number.isNaN(id) ? -1 : id;
  };

  handleDelete(){
    if(!confirm('Tem certeza que deseja deletar esta notícia?')) {
      return;
    }
    const newsId = this.getNewsIdFromURL();
    if(Util.deleteNotice(newsId)) {
      alert('Notícia deletada com sucesso!');
      window.location.href = '/Interface/paginaInicial.html';
    } else {
      alert('Erro ao deletar a notícia. ID inválido.');
    }
  };

  setupDeleteButton() {
    const deleteButton = document.getElementById('delete-button');
    if(deleteButton) {
      deleteButton.addEventListener('click', () => this.handleDelete());
    }
  };

  showNews(){
    let newsId = this.getNewsIdFromURL();
    let list = document.getElementById('noticias');
    let actionsContainer = document.getElementById('news-actions');

    if (newsId >= 0 && newsId < this.news.length) {
      const newsItem = this.news[newsId];

      list.innerHTML = `
      <div class='det'>
        <h5>${newsItem.title}</h5> 
        <p>${newsItem.content}</p>
        <p>Tags: ${newsItem.tags}</p>
      </div>
      `;

      actionsContainer.innerHTML = `
        <a class="btn btn-primary nav-link-custom" href="edit.html?id=${newsId}">Editar</a>
        <button id="delete-button" class="btn btn-danger nav-link-custom">Deletar</button>
      `;
      this.setupDeleteButton();

    } else {
      list.innerHTML = '<p class="alert alert-warning">Notícia não encontrada ou ID inválido!</p>';
    }
  };
  
  showTags(){
    let catList = document.getElementById('categorias');
    if (!catList) return;
    let tags = [];

    this.news.forEach(notices => {
      tags = tags.concat(notices.tags.split(',').map(tag => tag.trim()));
    });

    tags = [...new Set(tags)];
    const tagsHTML = tags.map(tag => {
      return `<div class='log'><p>${tag}</p></div>`;
    }).join(''); 

    catList.innerHTML = tagsHTML;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const detalhes = new Detalhes();
  detalhes.showNews();
  detalhes.showTags();
});
