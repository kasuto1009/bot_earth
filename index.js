import makeWASocket, { P } from '@whiskeysockets/baileys';
import dotenv from 'dotenv';
import { handleMessages } from './api/messages.js';
import { manageGroups } from './api/groups.js';
import { managePrivacy } from './api/privacy.js';
import { manageBroadcasts } from './api/broadcasts.js';

// Cargar variables de entorno
dotenv.config();

const sock = makeWASocket({
    logger: P({ level: 'debug' }),
});

// Manejar eventos de mensajes
sock.ev.on('messages.upsert', handleMessages);

// Inicializar otras funcionalidades
manageGroups(sock);
managePrivacy(sock);
manageBroadcasts(sock);

console.log('Conectado a WhatsApp');