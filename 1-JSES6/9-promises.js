const url = ''

fetch(url)
    .then(function(res) {
        //no need to handle error
        return res.json()
    })
    .then(function(json) {
        return ({
            importantData: json.importantData,
        })
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        //handle error for any then
    })
