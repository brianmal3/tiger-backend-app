"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("firebase-admin/firestore");
const tag = '🦠 🦠 🦠 FirestoreService  🦠 ';
let FirestoreService = class FirestoreService {
    async writeData(collectionName, documentId, data) {
        try {
            if (!this.db) {
                this.db = (0, firestore_1.getFirestore)();
            }
            const docRef = this.db.collection(collectionName).doc(documentId);
            await docRef.set(data, { merge: true });
            console.log(`${tag} Firestore data written to collection: ${collectionName}, document: ${documentId}`);
            return docRef.path;
        }
        catch (error) {
            console.error(`${tag} Error writing data to Firestore: ${error}`);
            return false;
        }
    }
    async writeDataWithTimestamp(collectionName, documentId, data) {
        try {
            if (!this.db) {
                this.db = (0, firestore_1.getFirestore)();
            }
            const docRef = this.db.collection(collectionName).doc(documentId);
            await docRef.set({
                ...data,
                createdAt: firestore_1.Timestamp.now(),
                updatedAt: firestore_1.Timestamp.now(),
            }, { merge: true });
            console.log(`${tag} Firestore data written to collection: ${collectionName}, document: ${documentId}`);
            return docRef.path;
        }
        catch (error) {
            console.error(`${tag} Error writing data to Firestore: ${error}`);
            return false;
        }
    }
    async updateData(collectionName, documentId, data) {
        try {
            if (!this.db) {
                this.db = (0, firestore_1.getFirestore)();
            }
            const docRef = this.db.collection(collectionName).doc(documentId);
            await docRef.update(data);
            console.log(`${tag} Firestore data updated in collection: ${collectionName}, document: ${documentId}`);
            return true;
        }
        catch (error) {
            console.error(`${tag} Error updating data in Firestore: ${error}`);
            return false;
        }
    }
    async deleteData(collectionName, documentId) {
        try {
            if (!this.db) {
                this.db = (0, firestore_1.getFirestore)();
            }
            const docRef = this.db.collection(collectionName).doc(documentId);
            await docRef.delete();
            console.log(`${tag}Firestore data deleted from collection: ${collectionName}, document: ${documentId}`);
            return true;
        }
        catch (error) {
            console.error(`${tag} Error deleting data from Firestore: ${error}`);
            return false;
        }
    }
    async readData(collectionName, documentId) {
        try {
            if (!this.db) {
                this.db = (0, firestore_1.getFirestore)();
            }
            const docRef = this.db.collection(collectionName).doc(documentId);
            const docSnap = await docRef.get();
            if (docSnap) {
                console.log(`Firestore data read from collection: ${collectionName}, document: ${documentId}`);
                return docSnap.data();
            }
            else {
                console.log(`Firestore document does not exist: ${collectionName}/${documentId}`);
                return null;
            }
        }
        catch (error) {
            console.error(`Error reading data from Firestore: ${error}`);
            return null;
        }
    }
    async readAllData(collectionName) {
        try {
            if (!this.db) {
                this.db = (0, firestore_1.getFirestore)();
            }
            const querySnapshot = await this.db.collection(collectionName).get();
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            console.log(`Firestore data read from collection: ${collectionName}`);
            return data;
        }
        catch (error) {
            console.error(`Error reading data from Firestore: ${error}`);
            return [];
        }
    }
    async readDataByField(collectionName, field, value) {
        try {
            if (!this.db) {
                this.db = (0, firestore_1.getFirestore)();
            }
            const querySnapshot = await this.db.collection(collectionName).where(field, '==', value).get();
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            console.log(`Firestore data read from collection: ${collectionName}, where ${field} is ${value}`);
            return data;
        }
        catch (error) {
            console.error(`Error reading data from Firestore: ${error}`);
            return [];
        }
    }
};
exports.FirestoreService = FirestoreService;
exports.FirestoreService = FirestoreService = __decorate([
    (0, common_1.Injectable)()
], FirestoreService);
//# sourceMappingURL=firestore_util.js.map