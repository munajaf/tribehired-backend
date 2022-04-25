const { Instance } = require("./instance");
const { commentUrl } = require("./endpoint");

exports.getComments = async () => {
    const comments = await Instance.get(commentUrl);

    return comments.data;
}