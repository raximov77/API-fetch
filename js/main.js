let elUserList = document.querySelector(".users-list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    renderUsers(data);
  });

function renderUsers(arr) {
  arr.forEach((item) => {
    let elItem = document.createElement("li");
    elItem.className = "p-2 rounded-lg bg-slate-300";
    elItem.innerHTML = `
      <p><strong>ID:</strong> ${item.id}</p>
      <p><strong>Name:</strong> ${item.name}</p>
      <p><strong>Username:</strong> ${item.username}</p>
      <p><strong>Email:</strong> ${item.email}</p>
      <p><strong>Phone Number:</strong> ${item.phone}</p>
      <button onclick="handleUsersPostShow(${item.id})" class="bg-green-600 text-white font-bold border-none w-full p-2 rounded-lg mt-5">Show Posts</button>
    `;
    elUserList.appendChild(elItem);
  });
}

let elPostsList = document.querySelector(".posts-list");

function handleUsersPostShow(id) {
  elPostsList.textContent = "Loading...";
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => renderPost(data), 500);
    });
}

function renderPost(arr) {
  elPostsList.innerHTML = null;
  arr.forEach((item) => {
    let elItem = document.createElement("li");
    elItem.className = "p-2 rounded-lg bg-slate-300";
    elItem.innerHTML = `
      <p><strong>ID:</strong> ${item.id}</p>
      <p><strong>User ID:</strong> ${item.userId}</p>
      <p><strong>Title:</strong> ${item.title}</p>
      <p><strong>Body:</strong> ${item.body}</p>
      <button onclick="handleUsersComments(${item.id})" class="bg-green-600 text-white font-bold border-none w-full p-2 rounded-lg mt-5">Show Comments</button>
    `;
    elPostsList.appendChild(elItem);
  });
}

let elCommentList = document.querySelector(".comments-list");

function handleUsersComments(id) {
  elCommentList.textContent = "Loading...";
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => renderComment(data), 500);
    });
}

function renderComment(arr) {
  elCommentList.innerHTML = null;
  arr.forEach((item) => {
    let elItem = document.createElement("li");
    elItem.className = "p-2 rounded-lg bg-slate-300";
    elItem.innerHTML = `
      <p><strong>ID:</strong> ${item.id}</p>
      <p><strong>Post ID:</strong> ${item.postId}</p>
      <p><strong>Name:</strong> ${item.name}</p>
      <p><strong>Email:</strong> ${item.email}</p>
      <p><strong>Body:</strong> ${item.body}</p>
    `;
    elCommentList.appendChild(elItem);
  });
}


/* dark mode */
function toggleDarkMode(mode) {
    if (mode === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.querySelectorAll('.framed-list').forEach(el => {
            el.classList.remove('framed-list-light');
            el.classList.add('framed-list-dark');
        });
        document.querySelectorAll('.list-item').forEach(el => {
            el.classList.remove('list-item-light');
            el.classList.add('list-item-dark');
        });
        document.querySelectorAll('.list-button').forEach(el => {
            el.classList.remove('list-button-light');
            el.classList.add('list-button-dark');
        });
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.querySelectorAll('.framed-list').forEach(el => {
            el.classList.remove('framed-list-dark');
            el.classList.add('framed-list-light');
        });
        document.querySelectorAll('.list-item').forEach(el => {
            el.classList.remove('list-item-dark');
            el.classList.add('list-item-light');
        });
        document.querySelectorAll('.list-button').forEach(el => {
            el.classList.remove('list-button-dark');
            el.classList.add('list-button-light');
        });
    }
}