import { Util } from './util.js';

function getNewsIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    const idStr = params.get('id');
    const id = idStr === null ? NaN : parseInt(idStr, 10);
    return Number.isNaN(id) ? -1 : id;
};

function loadNoticeForEditing(noticeId) {
    const notices = Util.getNotices();
    const notice = notices[noticeId];

    if(notice) {
        document.getElementById('notice-id').value = noticeId;
        document.getElementById('title').value = notice.title;
        document.getElementById('content').value = notice.content;
        document.getElementById('tags').value = notice.tags;
    } else {
        alert('Notícia não encontrada ou ID inválido!');
        window.location.href = '/Interface/paginaInicial.html';
    }
}

function handleUpdateSubmit(event) {
    event.preventDefault();

    const noticeId = parseInt(document.getElementById('notice-id').value);
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const tags = document.getElementById('tags').value;

    const updatedNotice = { title, content, tags };

    if(Util.updateNotice(noticeId, updatedNotice)) {
        alert('Notícia atualizada com sucesso!');
        window.location.href = '/Interface/detalhes.html?id=' + noticeId;
    } else {
        alert('Erro ao atualizar a notícia. ID inválido.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const noticeId = getNewsIdFromURL();
    const editForm = document.getElementById('edit-form');

    if(noticeId !== -1) {
        loadNoticeForEditing(noticeId);
    }

    if(editForm) {
        editForm.addEventListener('submit', handleUpdateSubmit);
    }
});