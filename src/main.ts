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

const tag = '🍐🍐🍐🍐 ReconBack 🍐🍐';
async function bootstrap() {
  config();
  console.log(`${tag} ReconBack is starting!`);
  console.log(`${tag} ReconBack db: 🍎 ${process.env.PGDATABASE} 🍎`);

  const app = await NestFactory.create(AppModule);
  await app.listen(8080);

  initializeApp({
    credential: applicationDefault(),
  });
  console.log(`${tag} Firebase has been initialized!`);

  const db = getFirestore();
  Logger.log(`${tag} Firestore has been setup: 🍎 ${db.databaseId} 🍎`);
}
bootstrap();
