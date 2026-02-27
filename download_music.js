const ytdl = require('./node_modules/ytdl-core');
const fs = require('fs');

const url = 'https://www.youtube.com/watch?v=xFONPDwW-lU';
const output = './music.mp3';

console.log('Đang tải audio...');
ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
}).pipe(fs.createWriteStream(output))
    .on('finish', () => console.log('Tải xong: music.mp3'))
    .on('error', (e) => console.error('Lỗi:', e.message));
