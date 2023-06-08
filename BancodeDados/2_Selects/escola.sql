create database Escola
use Escola

create table Aluno(


    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    data_nascimento DATE,
    cpf VARCHAR(11)
    

);

-- inserindo dados dentro da tabela Aluno
insert into Aluno(nome, data_nascimento, cpf)
values 
("Nickolas", '2002-10-17', "51340289480"),
("Stephanie", '2000-10-10', "51240283410"),
("Lucas", '2005-04-25', "51040189280"),
("Yury", '2008-06-26', "51140389490"),
("Marcio", '1986-07-22', "50340282480"),
("Thiago", '1992-01-26', "51840279490");


-- hora dos Selects

--Traz todos os dados da tabela Aluno
select * from Aluno; 

--Traz somente o nome e cpf da tabela Aluno
select nome, cpf from Aluno 

--Traz somente os dados da Tabela Aluno onde o campo nome é igual a Nickolas
select * from Aluno where nome = "Nickolas"  

-- Traz somente os dados da Tabela Aluno onde o campo nome tem a primeira letra como s
select * from Aluno where nome LIKE "T%"


-- Traz somente os dados da Tabela Aluno onde o campo nome tem a ultima letra como s
select * from Aluno where nome LIKE "%s"

-- Traz somente os dados da Tabela Aluno onde o campo nome tem alguma letra sendo u
select * from Aluno where nome LIKE "%u%"
