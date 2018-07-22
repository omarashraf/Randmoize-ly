function randomList(req, res) {
    inputArr = (req.params.list).split("-");
    let i, tmp;
    let m = inputArr.length;

    for (let counter = 0; counter < inputArr.length; counter++) {
        i = Math.floor(Math.random() * m--);

        tmp = inputArr[m];
        inputArr[m] = inputArr[i];
        inputArr[i] = tmp;
    }
    res.send({
        status: "Ok",
        statusCode: "200",
        data: inputArr
    });
}

module.exports = {
    randomList
}