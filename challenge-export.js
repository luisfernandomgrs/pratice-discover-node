function getFlag(sParam = "") {
    let sReturn = "";
    let iElementReturn = 0;

    if (sParam.trim() !== ""){
        for (let sElement of process.argv) {
            if (String(sElement).includes(sParam) ) {
                sReturn = process.argv[iElementReturn + 1];
            };
            iElementReturn++;
        };
    }

    return sReturn;
};

module.exports = getFlag;