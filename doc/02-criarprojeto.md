# Criação de um Projeto TypeORM
>
A forma mais rápida de iniciar uso do TypeORM é usar comandos CLI (Comand Line Interface) para gerar uma estrutura de uma aplicação inicial. A estrutura da aplicação inicial funciona se estiver usando o TypeORM em uma aplicação Node.js.
>

## Como instanciar um projeto 
>
Nesse tópico iremos apresentar a criação de um projeto TypeScript que usa o TypeORM.
>

>
O comando abaixo cria um diretório(pasta) chamado MyProject onde será usado o driver do banco de dados mysql. 
```
npx typeorm init --name MyProject --database mysql 
```
> 
Os driver´s de banco de dados disponíveis para o uso do TypeORM são os seguintes:  `mysql, mariadb, postgres, cockroachdb, sqlite, mssql, sap, spanner, oracle, mongodb, cordova, react-native, expo, nativescript`. 
>

>
A seguinte estrutura de diretório será criada:
>
![This is a alt text.](/image/myproject.png "Estrutura de pastas e arquivos.")
>

>
A estrutura de pastas e arquivos criada acima funciona como um modelo inicial de um projeto TypeORM. O projeto poderá ser extendido criando novas entidades e módulos com funcionalidades que serão implementadas.
>

## Instalar as dependências do novo projeto TypeORM
>
Entrar na pasta (diretório) e instalar as dependências.
```
cd MyProject 
npm install 
```
>

## Alterar configuração package.jon

>
Existem situações onde é necessário alterar a versão de drives de banco de dados para compatibilizar com outros componentes. Os erros decorrentes dessa incompatibilidade são acompanhados de recomendações de alteração.
>
>
Exemplo: alterar no package.json a versão do sqlite3 de "^4.0.1" para "^5.0.8". Após a alteração salvar o arquivo package.json e chamar o comando abaixo.
```
npx npm install
```
>


