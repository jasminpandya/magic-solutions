const fs = require('fs');
try {

    //read arguement from command prompt
    const args = process.argv.slice(2);
    const pat = args[0];

    // read raw data from file
    const rawdata = fs.readFileSync('data/q3data.json');
    const data = JSON.parse(rawdata);

    // function to merge all level keys and create array & filter also at the same time
    const reverseMap = (obj, prefix = '', pattern) => {
        return Object.keys(obj).reduce((prev, curr) => {
            if (Array.isArray(curr)) {
                return prev;
            } else if (typeof obj[curr] === 'object' && obj[curr] !== null && Object.keys(obj[curr]).length !== 0) {
                return [...prev, ...reverseMap(obj[curr], prefix + curr + '.', pattern)]
            } else {
                const lastlevel = prefix + curr;
                if (lastlevel.includes(pattern)) {
                    return [...prev, lastlevel]
                } else {
                    return prev
                }
            }
        }, [])
    }

    // call the function
    console.log(reverseMap(data, '', pat));

} catch (err) {
    console.log(err);
}