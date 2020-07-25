const fs = require('fs');
try {
    // read raw data from file
    // const startDate = new Date();
    // console.log('reading started @' + startDate);
    const rawdata = fs.readFileSync('data/q1data.json');
    // const endDate = new Date();
    // console.log('reading finished @' + endDate);
    // convert data to json array
    const data = JSON.parse(rawdata);
    if (Array.isArray(data)) {

        const sorted = data.sort((a, b) => {
            return a.isExpired !== b.isExpired ? a.isExpired === true ? 1 : -1 : 0;
        })

        console.log(sorted);
    } else {
        console.log('File content is not in proper format');
    }
} catch (err) {
    console.log(err);
}
