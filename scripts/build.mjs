import {mkdir,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('index.html','dist/index.html');
await cp('styles.css','dist/styles.css');
await cp('app.js','dist/app.js');
await cp('public/assets','dist/assets',{recursive:true});
console.log('built dist');
