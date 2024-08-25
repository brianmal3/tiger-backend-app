"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecret = getSecret;
exports.createSecret = createSecret;
exports.listSecrets = listSecrets;
const common_1 = require("@nestjs/common");
const secret_manager_1 = require("@google-cloud/secret-manager");
const tag = "🔑🔑🔑🔑 Secrets";
async function getSecret(key) {
    let projectId = "recon-back";
    if (process.env.PROJECT_ID) {
        projectId = process.env.PROJECT_ID;
    }
    const client = new secret_manager_1.SecretManagerServiceClient();
    const name = `projects/${projectId}/secrets/${key}`;
    common_1.Logger.log(`${tag} Looking for secret: ${name} 🔑`);
    const [secret] = await client.getSecret({
        name: name,
    });
    const policy = secret.replication.automatic;
    console.info(`${tag} Found secret ${secret.name} 🔑 policy: ${policy}`);
    return secret.name;
}
async function createSecret(key, value) {
    const client = new secret_manager_1.SecretManagerServiceClient();
    const secret = await client.createSecret({
        parent: getParent(),
        secretId: key,
        secret: {
            name: value,
            replication: {
                automatic: {},
            },
        },
    });
    console.log(`${tag} Created secret ${JSON.stringify(secret)}`);
    return secret;
}
async function listSecrets(bankId) {
    const client = new secret_manager_1.SecretManagerServiceClient();
    const parent = getParent();
    const secrets = await client.listSecrets({
        parent: parent,
    });
    secrets.forEach((secret) => {
        console.log(`secret: ${JSON.stringify(secret)}`);
    });
    console.log(`${tag} secrets found : ${secrets.length}`);
}
function getParent() {
    let projectId = "recon-back";
    if (process.env.PROJECT_ID) {
        projectId = process.env.PROJECT_ID;
    }
    const parent = `projects/${projectId}`;
    return parent;
}
//# sourceMappingURL=secrets.js.map