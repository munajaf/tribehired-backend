const { Instance } = require("./instance");

const { postUrl } = require("./endpoint");

exports.getPost = async (postId) => {
    const post = await Instance.get(`${postUrl}/${postId}`);

    return post.data
}

exports.getPosts = async () => {
    const post = await Instance.get(postUrl);

    return post.data;
}