import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,join,normalize} from 'node:path';
const root=join(process.cwd(),'dist');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
createServer(async(req,res)=>{try{let path=(req.url||'/').split('?')[0]; if(path==='/'||!extname(path))path='/index.html'; const file=join(root,normalize(path).replace(/^\.\.?[\\/]/,'')); const body=await readFile(file);res.writeHead(200,{'content-type':types[extname(file)]||'application/octet-stream'});res.end(body)}catch{const body=await readFile(join(root,'index.html'));res.writeHead(200,{'content-type':'text/html'});res.end(body)}}).listen(process.env.PORT||4173,'0.0.0.0',()=>console.log('mo preview ready'));
