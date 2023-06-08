create database Escola; -- Criação do Banco
use Escola; -- Usando o banco Criado

create table Aluno( -- Criando uma tabela chamada Aluno


    id_aluno INT PRIMARY KEY AUTO_INCREMENT, -- Atributo id_aluno Sendo Inteiro com Chave primaria e Auto incremento
    nome VARCHAR(45), -- Atributo Nome do tipo Texto com até 45 caracteres 
    data_nascimento DATE, -- Atributo data_nascimento do Tipo de Data
    cpf VARCHAR(11) -- Atritubuto cpf do tipo Texto com até 11 caracteres 
    

);