document.addEventListener('DOMContentLoaded', () => {
    const words = ['Hello Peter', 'Good Morning', 'Welcome', 'Hi There', 'Greetings', 'Good Day', 'Bonjour', 'Hola'];
    const randomWord = words[Math.floor(Math.random() * words.length)];

    document.getElementById('header-img').src = `https://dummyjson.com/image/350x200/?text=${randomWord}`;
    
    let x = Math.floor(Math.random() * 2) + 1; 
    
    fetch(`https://reqres.in/api/users?page=${x}`)
        .then(response => response.json())
        .then(data => {
            let users = data.data; 
            let randomIndex = Math.floor(Math.random() * users.length); 
            let user = users[randomIndex]; 

            document.getElementById('user-name').textContent = `${user.first_name} ${user.last_name}`;
            document.getElementById('profile-pic').src = user.avatar; 
            document.getElementById('user-name-tweet').textContent = `${user.first_name} ${user.last_name}`;
            document.getElementById('tweet-profile-pic').src = user.avatar; 
            document.querySelector('.tweet-username').textContent = `@${user.first_name.toLowerCase()}_${user.last_name.toLowerCase()}`;
            document.getElementById('user-namee').textContent = `@${user.first_name.toLowerCase()}_${user.last_name.toLowerCase()}`;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });

    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            let posts = data.posts; 
            let randomIndex = Math.floor(Math.random() * posts.length); 
            let post = posts[randomIndex];

            document.getElementById('post-content').textContent = post.body;
            document.getElementById('like-count').innerHTML+= ` ${post.reactions.likes}`;
            document.getElementById('dislike-count').innerHTML+= ` ${post.reactions.dislikes}`;
            document.getElementById('view-count').innerHTML+= ` ${post.views}`;
        })
        .catch(error => {
            console.error('Error fetching post data:', error);
        });
});
