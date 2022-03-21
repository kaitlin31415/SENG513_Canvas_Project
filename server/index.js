const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socket = require('socket.io');
const io = socket(server);