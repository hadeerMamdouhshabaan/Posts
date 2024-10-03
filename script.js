let postssection = document.querySelector(".posts");
let requestPosts = new XMLHttpRequest();
let requestUsers = new XMLHttpRequest();

requestPosts.onload = () => {
    if (requestPosts.readyState === 4) {
        if (requestPosts.status === 200) {
            let responsePosts = JSON.parse(requestPosts.responseText);
            let posts = responsePosts.posts;   
            requestUsers.onload = () => {
                if (requestUsers.readyState === 4) {
                    if (requestUsers.status === 200) {
                        let responseUsers = JSON.parse(requestUsers.responseText);
                        let users = responseUsers.data;
                        posts.map((el, index) => {
                            let user = users[index % users.length];
                            postssection.innerHTML += `
                             <div class="post">
                                <div class="user">
                                <div> 
                                 <img src="${user.avatar}" alt="" class="user__img">
                                </div>
                                   <div class="user__info">
                                  
                                    <h2>${user.first_name} ${user.last_name}</h2>
                                    <p class="user__email">@${user.email}</p>
                                    </div>
                        
                                </div>
                                <div class="post__content">
                                    <h3>${el.title}</h3>
                                    <p class="post__body">${el.body}</p>
                                </div>
                                <div class="post__react">
                                    <div class="react">
                                        <i class="fa-solid fa-heart like"></i><span class="like">${el.reactions.likes}</span>
                                    </div>
                                    <div class="react">
                                        <i class="fa-regular fa-thumbs-down dislike"></i><span class="dislike">${el.reactions.dislikes}</span>
                                    </div>
                                    <div class="react">
                                        <i class="fa-solid fa-eye"></i><span>${el.views}</span>
                                    </div>
                                </div>
                                <div>
                                    <a href="" class="p1">Show this thread</a>
                                </div>
                             </div>
                            `;
                        });
                    }
                }
            };
          
            requestUsers.open("GET", "https://reqres.in/api/users?page=1", true);
            requestUsers.send();
        }
    }
};
requestPosts.open("GET", "https://dummyjson.com/posts", true);
requestPosts.send();
