function randomList(req, res) {
    let inputArr = (req.params.list).split("-");
    let i, tmp;
    let m = inputArr.length;

    for (let counter = 0; counter < inputArr.length; counter++) {
        i = Math.floor(Math.random() * m--);

        tmp = inputArr[m];
        inputArr[m] = inputArr[i];
        inputArr[i] = tmp;
    }
    res.send({
        status: "200",
        statusMsg: "Ok",
        data: inputArr
    });
}

function randomDraw(req, res) {
    const drawCounts = [4, 8, 16, 32, 64, 128, 256, 512, 1024];
    let inputArr = (req.params.list).split("-");
    if (drawCounts.includes(inputArr.length)) {
        randomList(req, res);
    }
    res.send({
        status: "400",
        statusMsg: "The teams entered should be at least 4, or consistent with knockout format",
        data: ""
    });
}

module.exports = {
    randomList,
    randomDraw
}