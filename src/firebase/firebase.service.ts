import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

const serviceAccount = require('../../firebase_service_account.json');

@Injectable()
export class FirebaseService {
  private db: admin.database.Database;

  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: serviceAccount.databaseURL,
    });
    this.db = admin.database();
  }

  async findAll(collection: string): Promise<any[]> {
    const ref = this.db.ref(collection);
    const snapshot = await ref.once('value');
    const data = snapshot.val();
    if (!data) {
      return [];
    }
    const result = [];
    Object.keys(data).forEach((key) => {
      const item = data[key];
      item.id = key;
      result.push(item);
    });
    return result;
  }

  async findOne(collection: string, id: string): Promise<any> {
    const ref = this.db.ref(`${collection}/${id}`);
    const snapshot = await ref.once('value');
    const data = snapshot.val();
    if (!data) {
      return null;
    }
    data.id = id;
    return data;
  }

  async create(collection: string, data: any): Promise<any> {
    const ref = this.db.ref(collection);
    const newRef = ref.push();
    await newRef.set(data);
    return newRef.key;
  }

  async read(collection: string, id: string): Promise<any> {
    const ref = this.db.ref(`${collection}/${id}`);
    const snapshot = await ref.once('value');
    return snapshot.val();
  }

  async update(collection: string, id: string, data: any): Promise<void> {
    const ref = this.db.ref(`${collection}/${id}`);
    await ref.update(data);
  }

  async delete(collection: string, id: string): Promise<void> {
    const ref = this.db.ref(`${collection}/${id}`);
    await ref.remove();
  }
}
