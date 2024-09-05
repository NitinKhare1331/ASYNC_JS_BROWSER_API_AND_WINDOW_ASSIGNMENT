/* The XMLHttpRequest (XHR) object is a built-in JavaScript object that allows you to interact with servers by making HTTP requests. You can retrieve data from a URL without having to refresh the entire page, which is essential for creating dynamic web applications. XMLHttpRequest is commonly used in AJAX (Asynchronous JavaScript and XML) to update parts of a web page without reloading it. */

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://example.com/data', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log('Data received:', data);
    } else {
        console.error('Error:', xhr.statusText);
    }
};

xhr.send();
