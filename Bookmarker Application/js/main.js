const SELECTOR = {
    siteNameInput: '#siteName',
    siteURL: '#siteURL',
    submitBtn: '#submit',
    bookmarksDiv: '#bookmarksResults',
    notification: '#notification'
}

function bookmarksApp(btnID, siteName, siteURL, resultDiv, notificationDiv) {
    return {
        handleEvent: function (e) {
            if (e.target.id === btnID) {
                this.submit();
            }

        },

        submit: function () {
            if (this.validateInput()) {
                let listElement = this.createListElement();
                this.appendElements(resultDiv, listElement)
                
            }

            return this.invalidMessage();
        },

        validateInput: function () {
            if (siteName.value === '' || siteURL.value === '') {
                return false;
            }
            return true
        },

        invalidMessage: function () {
            notificationDiv.style.display = 'block';
    
            setTimeout(function(){
                notificationDiv.style.display = 'none';
            }, 2000)

        },

        createNotification: function(message){
        },

        createElement: function (type, content) {
            let e = document.createElement(type);
            if (typeof content === "string") {
                e.innerHTML = content;
            }
            if (typeof content === "object") {
                e.appendChild(content);
            }

            return e;
        },

        createListElement: function () {
            let div = this.createElement('div');
            div.className = 'well';

            let h3 = this.createElement('h3', siteName.value);

            let btnVisit = this.createElement('a', 'Visit');
            btnVisit.className = 'btn btn-default';
            btnVisit.target = '_blank';
            btnVisit.href = this.addhttp(siteURL.value);

            let btnDelete = this.createElement('a', 'Delete');
            btnDelete.className = 'btn btn-danger';
            btnDelete.href = '#';

            this.appendElements(h3, [btnVisit, btnDelete]);
            this.appendElements(div, h3);

            return div;
        },

        addhttp: function (url) {
            if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
                url = "http://" + url;
            }
            return url;
        },

        appendElements: function (parent, elements) {
            if (Array.isArray(elements)) {
                elements.map(x => parent.appendChild(x));
            } else {
                parent.appendChild(elements);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', bookmarksApp(
        'submit',
        document.querySelector(SELECTOR.siteNameInput),
        document.querySelector(SELECTOR.siteURL),
        document.querySelector(SELECTOR.bookmarksDiv),
        document.querySelector(SELECTOR.notification)
    ))
})