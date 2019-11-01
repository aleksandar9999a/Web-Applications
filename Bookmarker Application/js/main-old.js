const SELECTOR = {
    siteNameInput: '#siteName',
    siteURL: '#siteURL',
    submitBtn: '#submit',
    bookmarksDiv: '#bookmarksResults',
}

const siteNameInput = document.querySelector(SELECTOR.siteNameInput);
const siteURL = document.querySelector(SELECTOR.siteURL);
const submitBtn = document.querySelector(SELECTOR.submitBtn);
const bookmarksDiv = document.querySelector(SELECTOR.bookmarksDiv);
let bookmarks = [];

submitBtn.addEventListener('click', addBookmark);

function addBookmark() {
    if (siteNameInput.value != '' && siteURL.value != '') {
        let currentBookmark = {
            name: siteNameInput.value,
            url: siteURL.value,
        };

        if (localStorage.getItem('bookmarks') === null) {
            bookmarks.push(currentBookmark);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }
        else {
            bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            bookmarks.push(currentBookmark);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }

        clear();
        printBookmarks();
    }
}

function printBookmarks() {
    let currentBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarksDiv.innerHTML = '';

    for (let i = 0; i < currentBookmarks.length; i++) {
        let name = currentBookmarks[i].name;
        let url = currentBookmarks[i].url;
        bookmarksDiv.innerHTML += '<div class="well">' +
            '<h3>' + name +
            ' <a class="btn btn-default" target="_blank" href="' + addhttp(url) + '">Visit</a> ' +
            ' <a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a> ' +
            '</h3>' +
            '</div>';
    }
}

function deleteBookmark(url) {
    let currentBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    currentBookmarks = currentBookmarks.filter(u => u.url != url);
    localStorage.setItem('bookmarks', JSON.stringify(currentBookmarks));
    printBookmarks();
}

function clear() {
    siteNameInput.value = '';
    siteURL.value = '';
}

function addhttp(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}
