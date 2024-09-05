/*
1) DOM (Document Object Model) API:

Purpose: Allows manipulation of HTML and XML documents, enabling JavaScript to dynamically modify content, structure, and styles of web pages.
Key Features: Methods like getElementById(), querySelector(), createElement(), and appendChild() allow for creating, modifying, and deleting elements.

2) Fetch API:

Purpose: Provides a modern way to make network requests (e.g., GET, POST) to retrieve or send data to servers asynchronously.
Key Features: Uses Promises for better error handling and chaining, making it a cleaner alternative to XMLHttpRequest.
Example: fetch('https://api.example.com/data').then(response => response.json()).then(data => console.log(data));

3) Local Storage and Session Storage APIs:

Purpose: Provides storage mechanisms to store key-value pairs in the browser, allowing data persistence across sessions or page reloads.
Key Features: localStorage retains data even after the browser is closed, while sessionStorage only retains data for the duration of the session.
Example: localStorage.setItem('key', 'value'); console.log(localStorage.getItem('key'));

4) Geolocation API:

Purpose: Allows web applications to access the user’s geographical location, useful for location-based services.
Key Features: Methods like getCurrentPosition() and watchPosition() to get the user’s latitude and longitude, with user permission.

*/