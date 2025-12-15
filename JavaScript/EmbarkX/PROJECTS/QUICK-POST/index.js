// Base API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', fetchPosts);

// fetchPosts()
async function fetchPosts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw Error("Error Occurred When Fetching Data.");
        }
        const posts = response.json();
        // console.log(posts);
        displayPosts(posts);
    } catch (error) {
        console.error(error);
    }
}

// displayPosts()
function displayPosts(posts) {
    let postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.title}: ${post.body}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deletePost(post.id, li);
        li.appendChild(deleteBtn);
        postList.appendChild(li);
    })
}

// createPost()
document.getElementById('createPost').onclick = async function () {
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;

    const newPost = {
        title,
        body,
        userId: 1
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw Error("Error When Posting Post.");
        }

        const post = await response.json();
        alert('Post created successfully!');
        document.getElementById('postTitle').value = '';
        document.getElementById('postBody').value = '';
        fetchPosts();
    } catch (error) {
        console.error(error);
    }
}

// deletePost()
async function deletePost(postId, liElement) {
    try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error("Error When Delete Post.");
        }
        alert('Post deleted successfully!');
        liElement.remove();
    } catch (error) {
        console.error(error);
    }
}
