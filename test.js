function foobar() {


    var db = new loki('./lokitest002.json');
    
    /*
    var coll = db.addCollection('ajtems2');
    coll.insert({nm: "imie1", liczba: 1});
    coll.insert({nm: "imie2", liczba: 2});
    coll.insert({nm: "imie3", liczba: 3});
    db.saveDatabase();
    */

    db.loadDatabase( 
        {},
        function() {
            var coll = db.getCollection('ajtems2');
            var el = document.getElementById('cntnt');

            el.innerHTML += "aaa<br>";
            console.log(coll);
            console.log(db);
                
        }
    );

    /*
    for( var x = 0 ; x < 10 ; x++ ) {
        coll.insert({
            a: x, 
            b: "text"
        });
    }
    */


    
    
    
}


foobar();