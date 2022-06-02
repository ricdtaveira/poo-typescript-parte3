# Criação de um Projeto 
>
A forma mais rápida de iniciar uso do TypeORM é usar comandos CLI (Comand Line Interface) para gerar uma estrutura de uma aplicação inicial. A estrutura da aplicação inicial funciona se estiver usando o TypeORM em uma aplicação Node.js.
>

## Criar um novo projeto
>
Nesse tópico iremos apresentar a criação de um projeto TypeScript que usa o TypeORM.
>

>
O comando abaixo cria um diretório(pasta) chamado MyProject onde será usado o driver do banco de dados mysql. 
```
npx typeorm init --name MyProject --database mysql 
```
> 
Os driver de banco de dados são os seguintes:  `mysql, mariadb, postgres, cockroachdb, sqlite, mssql, sap, spanner, oracle, mongodb, cordova, react-native, expo, nativescript`. 
>

>
A seguinte estrutura de diretório será criada:

>
![This is a alt text.](/image/sample.png "This is a sample image.")
>
