# Pos-Noticias — Portal de Notícias

Um portal de notícias simples e funcional desenvolvido com vanilla JavaScript, HTML5 e CSS3. Permite criar, editar, visualizar e deletar notícias com sistema de categorias/tags.

## 🎯 Funcionalidades

- ✅ **Criar notícias** — Formulário para adicionar novas notícias com título, conteúdo e tags
- ✅ **Listar notícias** — Página inicial exibe todas as notícias cadastradas
- ✅ **Visualizar detalhes** — Clique em "Ver Mais" para ler a notícia completa
- ✅ **Editar notícias** — Modifique título, conteúdo e tags de notícias existentes
- ✅ **Deletar notícias** — Remova notícias com confirmação de segurança
- ✅ **Filtrar por tags** — Clique nas categorias para filtrar notícias por tag
- ✅ **Armazenamento local** — Dados persistem em localStorage (sem servidor necessário)

## 🚀 Como Começar

### Pré-requisitos

- Navegador moderno com suporte a ES6 modules (Chrome, Firefox, Safari, Edge)
- Um servidor HTTP local (não funciona com `file://`)

### Instalação

1. Clone ou baixe o projeto:
```bash
git clone <seu-repositorio>
cd Pos-Noticias
```

2. Inicie um servidor HTTP local (escolha uma opção):
   - **VS Code**: Use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - **Python 3**: `python -m http.server 8000`
   - **Node.js**: `npx http-server`

3. Acesse no navegador: `http://localhost:8000/Interface/paginaInicial.html`

### Uso Básico

#### Adicionar uma notícia
1. Clique em **"Adicionar Notícias"** na navegação
2. Preencha título, conteúdo e tags (separadas por vírgula)
3. Clique em **"Salvar"**

#### Editar uma notícia
1. Na página inicial, clique em **"Editar"** na notícia desejada
2. Modifique os campos
3. Clique em **"Salvar Edição"**

#### Deletar uma notícia
- Clique em **"Excluir"** na notícia (ou no detalhe) — confirme a ação

#### Filtrar por tags
1. Na página inicial, veja a lista de categorias no painel lateral
2. Clique em uma tag para filtrar apenas notícias com aquela categoria

## 📁 Estrutura do Projeto

```
Pos-Noticias/
├── Code/
│   ├── app.js           # Controlador principal (carrega notícias e formulários)
│   ├── main.js          # Lógica de notícias (CRUD, filtros)
│   ├── detalhes.js      # Página de detalhes e exclusão
│   ├── edit.js          # Página de edição
│   └── util.js          # Utilitários (localStorage)
├── Interface/
│   ├── paginaInicial.html    # Página inicial
│   ├── novaNews.html         # Formulário de adição/edição
│   ├── detalhes.html         # Página de detalhes
│   └── edit.html             # Página de edição
├── Styles/
│   └── style.css        # Estilos CSS (custom + Bootstrap)
└── README.md
```

## 🔧 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6 Modules)
- **UI Framework**: Bootstrap 5.3
- **Armazenamento**: localStorage (browser)
- **Arquitetura**: MVC simples (Model: Util, View: HTML, Controller: Main/app.js)

## 📝 Exemplos de Código

### Criar uma notícia
```javascript
// Code/util.js
static saveNotice(notice) {
  let notices = this.getNotices();
  notices.push(notice);
  localStorage.setItem('notices', JSON.stringify(notices));
}
```

### Filtrar por tag
```javascript
// Code/main.js
filtrarNoticias(categoria) {
  let news = Util.getNotices();
  let newsFiltradas = news.filter(noticia => 
    noticia.tags.split(',').map(t => t.trim()).includes(categoria)
  );
  this.showNotices(newsFiltradas);
}
```

## ⚠️ Importante — Correção Necessária

**O arquivo `edit.js` está faltando o import de `Util`.**

Abra `Code/edit.js` e adicione no topo:
```javascript
import { Util } from './util.js';
```

Sem isso, a edição não funcionará (erro: "Util is not defined").

## 🐛 Troubleshooting

### "Cannot use import statement outside a module"
- Certifique-se de que abriu as páginas via HTTP (Live Server ou servidor local), não com `file://`
- Verifique se `<script>` tem `type="module"` no HTML

### Notícias não aparecem após salvar
- Abra DevTools (F12) → Console e procure por erros de import
- Verifique se localStorage está habilitado no navegador
- Confirme que todos os imports usam extensão `.js`

### Edição não funciona
- Adicione o import de `Util` em `edit.js` (veja seção acima)
- Recarregue a página (Ctrl+F5 para limpar cache)

## 📚 Recursos Adicionais

- [MDN — ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN — localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)

## 👤 Autor

Desenvolvido como projeto educacional de Portal de Notícias.

## 📄 Licença

Este projeto é fornecido como está, sem garantias. Use livremente para fins educacionais.

---

**Última atualização**: Dezembro 2025