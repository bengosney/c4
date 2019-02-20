import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);

const dbName = 'c4';
const remoteURL = `http://evo.site:5984/${dbName}`;
const opts = { live: true, retry: true };

export const localDB = new PouchDB('localStore');
export const db = new PouchDB(dbName);

db.replicate.from(remoteURL).on('complete', function(info) {
  db.sync(remoteURL, opts).on('error', e => console.log('Sync error', e));
}).on('error', e => console.log('Inital sync error', e));
