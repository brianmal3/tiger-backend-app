import { Injectable } from '@nestjs/common';
import { getFirestore, Timestamp, FieldValue, QueryDocumentSnapshot } from 'firebase-admin/firestore';
const tag = '🦠 🦠 🦠 FirestoreService  🦠 '

@Injectable()
export class FirestoreService {
  private db: FirebaseFirestore.Firestore;



  async writeData(collectionName: string, documentId: string, data: any) {
    try {
      if (!this.db) {
        this.db = getFirestore();
      }
      const docRef = this.db.collection(collectionName).doc(documentId);
      await docRef.set(data, { merge: true }); // Merge data if document exists
      console.log(`${tag} Firestore data written to collection: ${collectionName}, document: ${documentId}`);
      return docRef.path;
    } catch (error) {
      console.error(`${tag} Error writing data to Firestore: ${error}`);
      return false;
    }
  }

  async writeDataWithTimestamp(collectionName: string, documentId: string, data: any) {
    try {
      if (!this.db) {
        this.db = getFirestore();
      }
      const docRef = this.db.collection(collectionName).doc(documentId);
      await docRef.set({
        ...data,
        createdAt: Timestamp.now(), // Add createdAt timestamp
        updatedAt: Timestamp.now(), // Add updatedAt timestamp
      }, { merge: true }); // Merge data if document exists
      console.log(`${tag} Firestore data written to collection: ${collectionName}, document: ${documentId}`);
      return docRef.path;
    } catch (error) {
      console.error(`${tag} Error writing data to Firestore: ${error}`);
      return false;
    }
  }

  async updateData(collectionName: string, documentId: string, data: any) {
    try {
      if (!this.db) {
        this.db = getFirestore();
      }
      const docRef = this.db.collection(collectionName).doc(documentId);
      await docRef.update(data);
      console.log(`${tag} Firestore data updated in collection: ${collectionName}, document: ${documentId}`);
      return true;
    } catch (error) {
      console.error(`${tag} Error updating data in Firestore: ${error}`);
      return false;
    }
  }

  async deleteData(collectionName: string, documentId: string) {
    try {
      if (!this.db) {
        this.db = getFirestore();
      }
      const docRef = this.db.collection(collectionName).doc(documentId);
      await docRef.delete();
      console.log(`${tag}Firestore data deleted from collection: ${collectionName}, document: ${documentId}`);
      return true;
    } catch (error) {
      console.error(`${tag} Error deleting data from Firestore: ${error}`);
      return false;
    }
  }
  async readData(collectionName: string, documentId: string): Promise<any> {
    try {
      if (!this.db) {
        this.db = getFirestore();
      }
      const docRef = this.db.collection(collectionName).doc(documentId);
      const docSnap = await docRef.get();

      if (docSnap) {
        console.log(`Firestore data read from collection: ${collectionName}, document: ${documentId}`);
        return docSnap.data();
      } else {
        console.log(`Firestore document does not exist: ${collectionName}/${documentId}`);
        return null;
      }
    } catch (error) {
      console.error(`Error reading data from Firestore: ${error}`);
      return null;
    }
  }

  async readAllData(collectionName: string): Promise<any[]> {
    try {
      if (!this.db) {
        this.db = getFirestore();
      }
      const querySnapshot = await this.db.collection(collectionName).get();
      const data: any[] = [];

      querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
        data.push(doc.data());
      });

      console.log(`Firestore data read from collection: ${collectionName}`);
      return data;
    } catch (error) {
      console.error(`Error reading data from Firestore: ${error}`);
      return [];
    }
  }

  async readDataByField(collectionName: string, field: string, value: any): Promise<any[]> {
    try {
      if (!this.db) {
        this.db = getFirestore();
      }
      const querySnapshot = await this.db.collection(collectionName).where(field, '==', value).get();
      const data: any[] = [];

      querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
        data.push(doc.data());
      });

      console.log(`Firestore data read from collection: ${collectionName}, where ${field} is ${value}`);
      return data;
    } catch (error) {
      console.error(`Error reading data from Firestore: ${error}`);
      return [];
    }
  }
}
