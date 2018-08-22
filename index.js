var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, data) {
	console.log('Zawartosc katalogu!');    
    console.log(data);

    fs.writeFile('./text.txt', data , function(err) {
        if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
        console.log('Zapisano!');
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie')
            console.log(data);
        });
    });
});

