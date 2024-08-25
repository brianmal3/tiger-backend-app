import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from 'firebase-admin/firestore';
import { Logger } from '@nestjs/common';
import { config } from 'dotenv';

const tag = '🍐🍐🍐🍐 Tiger ReconBackend 🍐🍐';
async function bootstrap() {
  config();
  console.log(`${tag} Tiger Recon Backend is starting!`);
  console.log(`${tag} Tiger Recon Backend Postgres database on Neon: 🍎 ${process.env.PGDATABASE} 🍎`);

  const app = await NestFactory.create(AppModule);
  await app.listen(8080);

  initializeApp({
    credential: applicationDefault(),
  });

  console.log(`${tag} Firebase has been initialized! - utilized for user auth`);

  const db = getFirestore();
  Logger.log(`${tag} Firestore has been setup: 🍎 ${db.databaseId} 🍎`);
  Logger.log(`${tag} 🥬 🥬 Tiger Recon Backend is up and waiting for requests!! 🍎 🍎`);
}
bootstrap();
