const SELECTOR = {
    siteNameInput: '#siteName',
    siteURL: '#siteURL',
    submitBtn: '#submit',
    bookmarksDiv: '#bookmarksResults',
}

function bookmarksApp(btnID, siteName, siteURL) {
    return {
        handleEvent: function (e) {
            if (e.target.id === btnID) {
                this.init();
            }

        },

        init: function () {
            if (this.validateInput()) {
                
            }
            
            return this.invalidMessage();
        },

        validateInput: function () {
            if (siteName.value === '' || siteURL.value === '') {
                return false;
            }
            return true
        },

        invalidMessage: function(){

        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', bookmarksApp(
        'submit',
        document.querySelector(SELECTOR.siteNameInput),
        document.querySelector(SELECTOR.siteURL)
    ))
})