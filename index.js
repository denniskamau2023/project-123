//fetch(http://localhost:5000)
function displayUsers(user){

let card= document.createElement("div")
card.classList.add("cardInfo")
card.innerHTML=`
<img src="${user.image}">
<h6>${user.name}</h6>
<p>${user.job}</p>
<p>${user.interests}</p>
<p>${user.location}</p>
<p>${user.job}"</p>
<p>${user.hobbie}</p>
<p>${user.fetures}</p>
<p>${user.contact}</p>
<button class="dislike">
<i class="fa fa-thumbs-o-down" aria-hidden="true">like</i>
</button>
<button class="like">
</button>
<i class="fa fa-thumbs-o-up"="true">like</i>
</button>
<button class="btn btn-ADD">
<span class="mdi mdi-delete mdi-24px">0</span>
<span class="mdi mdi-delete-empty mdi-24px"></span>
<span>ADD</span><span>delete</span>
</button>

`
document.querySelector("#users").append(card)
}
function fetchUsers(){
    fetch(" http://localhost:5000/users")
    .then(res => res.json())
    .then(users => users.forEach((user) => {
        displayUsers(user)}))
}
fetchUsers();
