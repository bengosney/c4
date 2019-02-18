import PouchDB from 'pouchdb';

const dbName = 'c4';

export const db = new PouchDB(dbName);
const remoteURL = `http://evo.site:5984/${dbName}`;

const opts = { live: true, retry: true };

db.replicate.from(remoteURL).on('complete', function(info) {
  db.sync(remoteURL, opts).on('error', e => console.log('Sync error', e));
}).on('error', e => console.log('Inital sync error', e));

export const localDB = new PouchDB('localStore');
