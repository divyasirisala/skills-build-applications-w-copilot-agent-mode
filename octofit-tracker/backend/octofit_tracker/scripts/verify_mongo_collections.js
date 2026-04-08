// Script to verify collections and show sample documents in octofit_db
use('octofit_db');

print('Collections:');
printjson(db.getCollectionNames());

const collections = db.getCollectionNames();
collections.forEach(function(coll) {
    print('\nSample from ' + coll + ':');
    printjson(db[coll].findOne());
});
