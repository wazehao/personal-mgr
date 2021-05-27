const getYearByTimeStamp = (ts) =>{
    const date = new Date(ts);

    return date.getFullYear();
};

const getDateByTimeStamp = (ts) =>{
    const date = new Date(ts);

    return date.getDate();
};

const getBody = (ctx) => {
    return ctx.request.body || {};
}

module.exports = {
    getBody,
}
