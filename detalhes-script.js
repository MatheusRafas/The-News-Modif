//Funcionalidade para mostrar as noticas
function showNotices(){
    let notices = JSON.parse(localStorage.getItem('notices') || '[]')
    let list = document.getElementById('noticias')
    for(let i = 0; i < notices.length; i++){
       
      list.innerHTML = `<div class='det'><h5>${notices[i] ['title']}</h5> <p>${notices[i] ['content']}<p/>`
    
    }
  }
  
  showNotices()
  
  //Funcionalidade para categorias
  function showTags(){
    let notices = JSON.parse(localStorage.getItem('notices') || '[]')
    let cat = document.getElementById('categorias')
    for(let i = 0; i < notices.length; i++){
      
      cat.innerHTML += `<div class='log'><p>${notices[i] ['tags']}</p>`
    }
  }
  showTags()
  