var queryform = document.querySelector('#queryForm');
queryform.addEventListener('submit', (e) => {
    console.log('submitted');
    e.preventDefault();
    var collection = db.collection('Queries');
    collection.doc().set({
            FirstName: queryform['FirstName'].value,
            LastName: queryform['LastName'].value,
            MobileNumber: queryform['MobileNumber'].value,
            FromEmail: queryform['FromEmail'].value,
            ToEmail: queryform['ToEmail'].value,
            Query: queryform['Query'].value,
        }).then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
})