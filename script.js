//Funcionalidade ao botão salvar
function save(){
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const tags = document.getElementById('tags').value;
  const form = {
    title, 
    content,
    tags
  }
  let notices = JSON.parse(localStorage.getItem('notices') || '[]')
  notices.push(form)
  localStorage.setItem('notices', JSON.stringify(notices));
  document.getElementById("noticia-form").reset();
  showNotices()
  showTags()
}

//Funcionalidade para mostrar as noticas
function showNotices(){
  let notices = JSON.parse(localStorage.getItem('notices') || '[]')
  let list = document.getElementById('noticias')

  for(let i = 0; i < notices.length; i++){
     
    list.innerHTML += `<div class='it'><h5>${notices[i] ['title']}</h5> <p>${notices[i] ['content']}<p/> <a class="nav-link" aria-current="page" href="detalhes.html" style ="background-color: rgba(51, 51, 187, 0.993);
    color: aliceblue; width:70px">Ver Mais</a>`
  
  }
}

showNotices()

//Funcionalidade para categorias
function showTags() {
  let notices = JSON.parse(localStorage.getItem('notices') || '[]');
  let cat = $('#categorias');
  cat.empty();
  let tags = [];

  for (let i = 0; i < notices.length; i++) {
    tags = tags.concat(notices[i].tags.split(',').map(tag => tag.trim()));
  }

  tags = [...new Set(tags)]; // Remove duplicatas

  for (let i = 0; i < tags.length; i++) {
    cat.append(`<div class='log'><p>${tags[i]}</p></div>`);
  }

  // Evento de clique na lista de categorias
  $('#categorias p').click(function(event) {
    event.preventDefault();
    $('#categorias p').removeClass('active');
    $(this).addClass('active');
    let categoria = $(this).text().trim();
    filtrarNoticias(categoria);
  });
}

// Função para filtrar as notícias por categoria
function filtrarNoticias(categoria) {
  let notices = JSON.parse(localStorage.getItem('notices') || '[]');
  let noticiasFiltradas = notices.filter(noticia => noticia.tags.includes(categoria));
  let list = $('#noticias');
  list.empty();
  for (let i = 0; i < noticiasFiltradas.length; i++) {
    list.append(`
      <div class='it'>
        <h5>${noticiasFiltradas[i].title}</h5>
        <p>${noticiasFiltradas[i].content}</p>
        <a class="nav-link" aria-current="page" href="detalhes.html?id=${i}" style="background-color: rgba(51, 51, 187, 0.993); color: aliceblue; width: 70px;">Ver Mais</a>
      </div>
    `);
  }
}
  showTags();

  