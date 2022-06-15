# ORM passo a passo
>
O que se espera de um ORM? Primeiro, com o ORM será possível criar tabelas em um banco de dados, em seguida inserir, atualizar, excluir e consultar registrosnessas tabelas. Todas essa operações serão possíveis sem criar sentenças SQL. 
>
## Criando um Modelo
>
Working with a database starts from creating tables. How do you tell TypeORM to create a database table? The answer is - through the models. Your models in your app are your database tables.
>

## Criando uma Entidade
>
Uma Entidade é modelo decorador com a anotação @Entity. Uma tabela do banco de dados será criada por esse modelo. Voce trabalha com entidades em todos o código usando TypeORM. Voce pode carregar/inserir/atualizar/excluir e executar outras operações com entidades.

Let's make our Photo model an entity:
>
>

>

## Adicionando colunas a uma tabela
>
Para adicionar colunas a tabelas, voce simplismente decora uma propriedade da entidade com a anotação @Column. 
>

>
import { Entity } from "typeorm"

@Entity()
export class Photo {
    @Column()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    filename: string

    @Column()
    views: number

    @Column()
    isPublished: boolean
}
>
Agora as colunas id, name, description, filename, views e isPublished serâoadicionadas para a tabela Photo. Os tipos de colunas nas tabelas serão inferidas a partir dos tipos usados nos atributos das entidades. Por exemplo, number será convertido para integer, string para varchar, boolean para bool, etc. Porém, voce pode usar qualquer tipo de coluna que a tabela suporta para o banco de dados configurado. Isso é feito usando explicitamente, mas voce pode usar qualquer tipo de coluna que a tabela do banco de dados selecionado suporta especificandoo tipo da coluna com o decorador @Column. 
We generated a database table with columns, but there is one thing left. Each database table must have a column with a primary key.
>

## Criando uma Chave Primária
>
Each entity must have at least one primary key column. This is a requirement and you can't avoid it. To make a column a primary key, you need to use the @PrimaryColumn decorator.
>

>

>
## Criando uma Chave Primária auto-incrementada
>
A criação de uma chave primária autoincrementada é feita com a anotação @PrimaryGeneratedColumn. 
>

>

>

## Tipos de Dados de colunas
>

>



