const {Comments} = require('../models');

const commentsData = [
    {
        "comment_content": "I'm the comment for post 1",
        "user_id": 1,
        "post_id": 1
    }
    ,
    {
        "comment_content": "I'm the comment for post 2",
        "user_id": 2,
        "post_id": 2
    }
    ,
    {
        "comment_content": "I'm the comment for post 3",
        "user_id": 3,
        "post_id": 3
    }
]


const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
