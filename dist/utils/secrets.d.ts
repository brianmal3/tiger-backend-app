export declare function getSecret(key: string): Promise<string>;
export declare function createSecret(key: string, value: string): Promise<[import("@google-cloud/secret-manager/build/protos/protos").google.cloud.secretmanager.v1.ISecret, import("@google-cloud/secret-manager/build/protos/protos").google.cloud.secretmanager.v1.ICreateSecretRequest, {}]>;
export declare function listSecrets(bankId: string): Promise<void>;
