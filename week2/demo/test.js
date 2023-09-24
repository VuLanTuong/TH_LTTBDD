
var fn = (resolve, reject) => {
    resolve();
    reject();
}

var promise = new Promise(fn);





promise
    .then(
        function () {
            console.log('Successful!');
        }
    )
    .catch(
        function () {
            console.log('UnSuccessful!');
        }
    );
