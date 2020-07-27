const fs = require('fs');
try {
    // read raw data from file
    // const startDate = new Date();
    // console.log('reading started @' + startDate);
    const rawdata = fs.readFileSync('data/q2data.json');
    // const endDate = new Date();
    // console.log('reading finished @' + endDate);
    // convert data to json array
    const data = JSON.parse(rawdata);

    function printTab(num) {
        if (num == 1) {
            return '    ';
        }
        else {
            let printObj = '';
            for (let i = 1; i <= num; i++) {
                printObj += printTab(1);
            }
            return printObj;
        }
    }

    // check if pasred data is an array
    if (Array.isArray(data)) {

        // convert to 
        let tr = data.reduce((tree, curr) => {
            curr.split('.').reduce((node, name) => node[name] = node[name] || {}, tree);
            return tree;
        }, {});

        // print 

        // console.log(tr);
        function printObj(obj, level) {
            const keys = Object.keys(obj);
            if (keys.length > 0) {
                for (const i in keys) {
                    if (obj.hasOwnProperty(keys[i])) {
                        console.log(printTab(level) + keys[i]);
                        printObj(obj[keys[i]], level + 1);
                    }
                }
            }
        }
        console.log('root');
        printObj(tr, 1);
    }
    else {
        console.log('File content is not in proper format');
    }
} catch (err) {
    console.log(err);
}
