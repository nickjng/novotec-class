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


update Aluno set nome = "Matheus" where id_aluno = 6;  -- Atualizando o dado do campo nome para ser Matheus onde o id é igual a 6 ("Thiago")
select * from Aluno; 


alter table Aluno modify column nome varchar(100); -- Altera o tabela Aluno e modifica o campo nome para ele ter varchar(100)
desc Aluno -- descreve os atributos da tabela Aluno


alter table Aluno add column nota1 int;  -- Altera a tabela Aluno e adciona o campo nota1 sendo int.
desc Aluno

alter table Aluno drop column nota1; -- Altera a table Aluno e exclui o campo nota1.  
desc Aluno
