const { getComments } = require("../provider/comment");

exports.filterComment = async ({ query: filters }, res) => {
    const comments = await getComments();

    const filteredComments = comments.filter(comment =>
        Object.keys(filters).reduce(
            (acc,param) => {
                const apiValue = comment[param];
                const requestValue = filters[param];

                const isString = typeof apiValue === 'string';

                const intHandler = apiValue === +requestValue;
                const stringHandler = isString && apiValue.includes(requestValue)

                return ( intHandler || stringHandler) && acc;
            }, true
        )
    )

    res.json(filteredComments)
}