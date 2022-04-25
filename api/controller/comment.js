const { getComments } = require("../provider/comment");

exports.filterComment = async ({ query: filters }, res) => {
    const comments = await getComments();

    const filteredComments = comments.filter(comment =>
        Object.keys(filters).reduce(
            (acc,param) => (comment[param] === +filters[param]) && acc, true
        )
    )

    res.json(filteredComments)
}