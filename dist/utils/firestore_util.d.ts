export declare class FirestoreService {
    private db;
    writeData(collectionName: string, documentId: string, data: any): Promise<string | false>;
    writeDataWithTimestamp(collectionName: string, documentId: string, data: any): Promise<string | false>;
    updateData(collectionName: string, documentId: string, data: any): Promise<boolean>;
    deleteData(collectionName: string, documentId: string): Promise<boolean>;
    readData(collectionName: string, documentId: string): Promise<any>;
    readAllData(collectionName: string): Promise<any[]>;
    readDataByField(collectionName: string, field: string, value: any): Promise<any[]>;
}
