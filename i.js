let inputRub = document.getElementById('rub')
let inputUsd = document.getElementById('usd')


inputRub.addEventListener('input', () => {
    function catchData() {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest()
            req.open('GET', './current.json')
            req.setRequestHeader('Content-type', 'application/json; charset=utf-8')
            req.send()
            req.onload = function () {
                if (req.readyState === 4) {
                    if (req.status == 200) {
                        resolve(this.response)
                    } else {
                        reject()
                    }
                }
            }
        })
    }
    catchData()
        .then(response => {
            console.log(response);
            let data = JSON.parse(response)
            inputUsd.value = inputRub.value / data.usd
        })
        .then(() => console.log(5000))
        .catch(() => inputUsd.value = "чТО-ТО ПОШЛО НЕ ТАК")

})

