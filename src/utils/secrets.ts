import { Logger } from "@nestjs/common";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const tag = "🔑🔑🔑🔑 Secrets";
export async function getSecret(key: string): Promise<string> {
  let projectId = "recon-back";
  if (process.env.PROJECT_ID) {
    projectId = process.env.PROJECT_ID;
  }
  const client = new SecretManagerServiceClient();

  const name = `projects/${projectId}/secrets/${key}`;
  Logger.log(`${tag} Looking for secret: ${name} 🔑`);
  const [secret] = await client.getSecret({
    name: name,
  });

  const policy = secret.replication.automatic;

  console.info(`${tag} Found secret ${secret.name} 🔑 policy: ${policy}`);
  return secret.name;
}
//
export async function createSecret(key: string, value: string) {
  const client = new SecretManagerServiceClient();

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
export async function listSecrets(bankId:string) {
  const client = new SecretManagerServiceClient();
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

