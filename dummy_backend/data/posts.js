const fs = require("node:fs/promises");

async function getStoredPosts() {
    const rawFileContent = await fs.readFile("dummy_backend/posts.json", {
        encoding: "utf-8",
    });
    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
}

function storePosts(posts) {
    return fs.writeFile(
        "dummy_backend/posts.json",
        JSON.stringify({ posts: posts || [] })
    );
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
