const { getPosts } = require("../provider/post");
const { getComments } = require("../provider/comment");

exports.fetchTopPost = async (req, res) => {
    try {

        const [posts, comments] = await Promise.all([
            getPosts(),
            getComments(),
        ])

        const formattedPost = posts.reduce((acc, post) =>
            ({
                ...acc, [post.id]: {
                    post_id: post.id,
                    post_title: post.title,
                    post_body: post.body,
                    total_number_of_comments: comments.filter(comment => comment.postId === post.id).length,
                    // used to test sort because all comments are total of 5
                    // total_number_of_comments: post.id === 18 ? 12 : post.id === 70 ? 10 : 0,
                }
            }), {});


        const sortedPost = Object.values(formattedPost).sort(
            (a,b) => b.total_number_of_comments - a.total_number_of_comments
        );

        res.json(sortedPost);
    } catch (e) {
        res.sendStatus(500);
    }

}
