create database Carros
use Carros



create table Motorista(

    id_motorista int primary key auto_increment,
    nome varchar(45),
    data_nascimento date,
    cnh varchar(45)

);




create table Carros (

    id_carro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    modelo VARCHAR(45),
    marca VARCHAR(45),
    data_fabricacao date,
    fk_motorista int
    
);


-- Alterando a tabela carros adcionando uma constraint (identificador da minha Fk), e adcionando a chave estrangeira (foreing key) e referenciando de qual tabela ela vem
alter table Carros add constraint fk_moto foreign key Carros(fk_motorista) references Motorista(id_motorista);


insert into Motorista(nome, data_nascimento, cnh)
values 
("Nickolas", '2002-10-17', "513581321"),
("Christian", '2000-20-27',"527498428");

insert into Carros(nome, modelo, marca, data_fabricacao, fk_motorista)
values 
("Carro aleatorio 1", "Modelo aleatorio 1", "Ford", '1980-05-06', 1),
("Carro aleatorio 2", "Modelo aleatorio 2", "Toyota", '2000-07-16', 1),
("Carro aleatorio 3", "Modelo aleatorio 3", "Fiat", '2012-02-26', 2),
("Carro aleatorio 4", "Modelo aleatorio 4", "Chevrolet", '2008-12-04', 2);


-- fazendo um selec na tabela carros e juntando com a motorista onde o fk tem que ser igual ao id
select * from Carros as c join Motorista as m on c.fk_motorista = m.id_motorista;

-- as é somente para apelidar. 