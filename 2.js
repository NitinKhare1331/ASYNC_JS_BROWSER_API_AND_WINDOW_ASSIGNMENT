const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        
        const userNames = users.map(user => user.name);
        console.log('User Names:', userNames);
        
        userNames.forEach(name => console.log(name));
    } else {
        console.error('Error fetching data:', xhr.statusText);
    }
};

xhr.onerror = function () {
  console.error('Request failed');
};

xhr.send();
