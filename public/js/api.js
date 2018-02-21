var API = (function() {
    var baseUrl = 'http://localhost:4567/api/';

    function getBooks() {
        return $.ajax({
            type    : 'GET',
            url     : baseUrl + 'books/',
            dataType: 'json',
            async   : true,
            timeout : 10000
        });
    }

    function getBooksCountUnread() {
        return $.ajax({
            type    : 'GET',
            url     : baseUrl + 'books/count/unread/',
            dataType: 'json',
            async   : true,
            timeout : 10000
        });
    }

    function getBooksCountReading() {
        return $.ajax({
            type    : 'GET',
            url     : baseUrl + 'books/count/unread/',
            dataType: 'json',
            async   : true,
            timeout : 10000
        });
    }

    function getBooksCountFinished() {
        return $.ajax({
            type    : 'GET',
            url     : baseUrl + 'books/count/finished/',
            dataType: 'json',
            async   : true,
            timeout : 10000
        });
    }

    function registerBook(requestData) {
        return $.ajax({
            type    : 'POST',
            url     : baseUrl + 'book/',
            dataType: 'json',
            data    : requestData,
            async   : true,
            timeout : 10000
        });
    }
    return {
        books             : getBooks,
        booksCountUnread  : getBooksCountUnread,
        booksCountReading : getBooksCountReading,
        booksCountFinished: getBooksCountFinished,
        book              : registerBook

    };
})();