const { timeStamp } = require('console');
const moment = require('moment');

const formatDate = (timeStamp) => {
    return moment(timeStamp).format('lll')
}

module.exports = formatDate;