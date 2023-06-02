 create table livro (
    id_livro int primary key auto_increment,
    titulo varchar(100)
 );

 create table categoria(
     id_categoria int primary key auto_increment, 
    nome varchar(50)
 );
 
 create table livro_categoria(
    fk_livro int,
    fk_categoria int,
    primary key (fk_livro, fk_categoria),
    constraint fk_livro foreign key (fk_livro) references livro(id_livro),
    constraint fk_categoria foreign key (fk_categoria) references categoria(id_categoria)
 );
 
 insert into livro (titulo)
 values
 ("Harry potter"),
 ("Game of Throns"),
 ("Maus");
 
 insert into categoria (nome)
 values 
 ("Fantasia"),
 ("Guerra"),
 ("Historia");
 
 insert into livro_categoria(fk_livro, fk_categoria)
 values
 (1,1),
 (1,2),
 (2,1),
 (2,2),
 (3,2),
 (3,3);
 
 
 select * from livro  join livro_categoria on livro.id_livro = livro_categoria.fk_livro join categoria on categoria.id_categoria = livro_categoria.fk_categoria;