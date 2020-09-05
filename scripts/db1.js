auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        db.collection('Queries').where('ToEmail', '==', user.email).get().then((snapshot) => {
            // console.log(snapshot.docs);
            var documents = snapshot.docs;
            createTable(documents);
        })

    } else {
        window.location.replace("./index.html");
    }


})
var inboxmails = [];
createTable = (data) => {
    data.forEach(element => {
        var ele = element.data();
        inboxmails.push(ele);
    });
    console.log(inboxmails);
    var table = new Tabulator('#inbox', {
        data: inboxmails,
        layout: "fitColumns", //fit columns to width of table
        pagination: "local", //paginate the data
        paginationSize: 7, //allow 7 rows per page of data

        columns: [
            { title: "First Name", field: "FirstName" },
            { title: "Last Name", field: "LastName" },
            { title: "Sender", field: "FromEmail" },
            { title: "Contact Number", field: "MobileNumber" },
            { title: "Query", field: "Query" },



        ]
    })
}