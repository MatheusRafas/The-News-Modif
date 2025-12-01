export class Util {
    static getNotices() {
        return JSON.parse(localStorage.getItem('notices') || '[]');
    }

    static saveNotice(notice) {
        let notices = this.getNotices();
        notices.push(notice);
        localStorage.setItem('notices', JSON.stringify(notices));
    }

    static updateNotice(index, updatedNotice) {
        let notice = this.getNotices();
        if(index >= 0 && index < notice.length) {
            notice[index] = updatedNotice;
            localStorage.setItem('notices', JSON.stringify(notice));
            return true;
        }
        return false;
    }

    static deleteNotice(index) {
        let notices = this.getNotices();
        if(index >= 0 && index < notices.length) {
            notices.splice(index, 1);
            localStorage.setItem('notices', JSON.stringify(notices));
            return true;
        }
        return false;
    }
}