# Relacionamento Um para Um 
> 
Diagrama de Classe Relacionamento OneToOne.
![This is a alt text.](/image/Diagrama_Classe_OnetoOne.png "Relacionamento OneToOne.")
>
>
Modelo Entidade Relacionamento OneToOne.
![This is a alt text.](/image/MER_OneToOne.png "Relacionamento OneToOne.")
>
>
Aqui, estamos usando um novo decorador chamado @OneToOne. Ele permite criar um relacionamento one-to-one entre duas entidades. type => Photo é ma função que retorna a classe da entidade com a qual queremos fazer o relacionamento. We are forced to use a function that returns a class, instead of using the class directly, because of the language specifics. We can also write it as () => Photo, but we use type => Photo as a convention to increase code readability. The type variable itself does not contain anything.

Adicionamos o decorador @JoinColumn, que indica que esse lado irá possuir o relacionamento. Relacionamentos podem ser unidirecionais e bidirecionais. Sómente um lado do relacionamento pode ser dono do relacionamento. Usando o decorador @JoinColumn é necessário no lado do dono do relacionamento. 

Se você executar a app, voce verá uma nova tabela gerada, que conterá uma coluna com a chave estrangeira para o relacionamento photo:

>