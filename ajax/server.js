const bodyParser = require('body-parser');
const express = require('express');
const app = express();

let port = 3000;
app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));//ler dados vindos do html
app.use(bodyParser.json());//conversor json em objeto JavaScript

/*Confiugrando sistema de upload de arquivos */
const multer = require('multer');
//criando objeto manipudador de arquivo de upload
const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './upload')//guardando arquivo na pasta
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)//colocando prefixos para evitar sobrescrita
    }
});
//arquivo já gerado ser disponivel com nome 'arquivo'
const upload = multer({storage}).single('arquivo');
//requisição ajax do tipo POST para fazer upload
app.post('/upload', (req, res)=>{
    upload(req, res, err =>{
        if(err){
            return res.end('Ocorreu um erro.');
        }
        res.end('Requisição concluída com sucesso.');
    });
});
/*Fim configuração sistema de upload de arquivos */
app.get('/teste',(req, res)=> res.send('Ok'));
app.listen(port, ()=> console.log('Servidor Iniciado escutando porta '+port));