/*
Both localStorage and sessionStorage are part of the Web Storage API, which provides mechanisms to store key-value pairs in the browser. They are used to store data persistently on the client side, enhancing user experience by retaining state, preferences, or other necessary data without needing a server request. Despite having similar interfaces, they differ in data persistence and scope.

localStorage API

Purpose:
localStorage is used to store data with no expiration time, meaning the data persists even after the browser is closed and reopened. It's ideal for storing data that should persist between sessions, like user settings, preferences, or authentication tokens.

Usage:
The data stored in localStorage is scoped to the entire domain, meaning it can be accessed across different pages of the same domain.
It has a storage limit of around 5-10MB, depending on the browser.

sessionStorage API

Purpose:
sessionStorage is used to store data for the duration of the page session, meaning the data is available as long as the browser tab is open. Once the tab is closed, the data is cleared. It’s useful for data that should not persist beyond the current session, like form inputs or temporary states.

Usage:
Data stored in sessionStorage is scoped to the tab or window where it was set. It is not shared between different tabs or windows, even within the same domain.
It has a similar storage limit as localStorage (around 5-10MB), depending on the browser.

*/

// Local Storage

localStorage.setItem('username', 'Nitin');
localStorage.setItem('theme', 'dark');

const username = localStorage.getItem('username');
console.log(username); 

localStorage.removeItem('theme');

localStorage.clear();

//Session Storage

sessionStorage.setItem('cartItems', JSON.stringify(['Item1', 'Item2', 'Item3']));

const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
console.log(cartItems); 

sessionStorage.removeItem('cartItems');

sessionStorage.clear();

