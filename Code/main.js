import { Util } from "./util.js";

export const Main = {

  save() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const tags = document.getElementById('tags').value;
    const newNotice = {
      title, 
      content,
      tags
    };

    Util.saveNotice(newNotice);

    document.getElementById("noticia-form").reset();

     window.location.href = '/Interface/paginaInicial.html';
  },

  showNotices(noticesParam){
    let notices = Array.isArray(noticesParam) ? noticesParam : Util.getNotices();
    let list = document.getElementById('noticias');

    list.innerHTML = '';

    const newsHTML = notices.map((notice, index) => {
      return `
        <div class='it'>
          <h5>${notice.title}</h5>
          <p>${notice.content}</p>
          <a class="btn btn-primary nav-link-custom" href="detalhes.html?id=${index}">Ver Mais</a>
        </div>
      `;
    }).join('');

    list.innerHTML = newsHTML;

  },

  setupTagsAndFiltering() {
    this.showTags();

    const categoryItems = document.querySelectorAll('#categorias p');

     // Evento de clique na lista de categorias
    categoryItems.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();

        categoryItems.forEach(i => i.classList.remove('active'));

        item.classList.add('active');

        let categoria = item.textContent.trim();
        this.filtrarNoticias(categoria);
      });
    });
  },

  showTags() {
    let allNews = Util.getNotices();
    let cat = document.getElementById('categorias');
    cat.innerHTML = '';

    let tags = [];

    allNews.forEach(notices => {
      tags = tags.concat(notices.tags.split(',').map(tag => tag.trim()));
    });

    tags = [...new Set(tags)]; // Remove duplicatas

    const tagsHTML = tags.map(tag => {
      return `<div class='log'><p>${tag}</p></div>`;
    }).join('');

    cat.innerHTML = tagsHTML;
  },

  // Função para filtrar as notícias por categoria
  filtrarNoticias(categoria) {
    let news = Util.getNotices();
    let newsFiltradas = news.filter(noticia => noticia.tags && noticia.tags.split(',').map(t => t.trim()).includes(categoria));

    this.showNotices(newsFiltradas);
  }
}


  