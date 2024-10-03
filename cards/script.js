let x = new XMLHttpRequest();
let userCards = document.querySelector('.users');

// اختيار صفحة عشوائية بين 1 و 2
let randomPage = Math.floor(Math.random() * 2) + 1;

x.onload = () => {
    if (x.readyState == 4) {
        console.log("all is ok!");

        if (x.status == 200) {
            let response = JSON.parse(x.responseText);
            let users = response.data;
            console.log(users);

            userCards.innerHTML = '';

            users.map((element) => {
                userCards.innerHTML += `
                    <div class="cards">
                        <div class="image1"><img src="${element.avatar}" alt="User Background"></div>
                        <img class="image2" src="${element.avatar}" alt="User Image">
                        <h2>${element.first_name} ${element.last_name}</h2>
                        <p class="email">Email: ${element.email}</p>
                        <button class="add-button">Add</button>
                    </div>
                `;
            });
        } else {
            console.error('Error fetching data:', x.statusText);
        }
    }
};

x.open("GET", `https://reqres.in/api/users?page=${randomPage}`, true);
x.send();
