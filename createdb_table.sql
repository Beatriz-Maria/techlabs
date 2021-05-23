create database db;

use db;

create table input (
    form_id int NOT NULL AUTO_INCREMENT,
    tempo_negocio varchar(255) NOT NULL,
    num_funcionários varchar(255) NOT NULL,
    entrega_app boolean,
    num_volta_clientes varchar(255) NOT NULL,
    ticket_medio varchar(255) NOT NULL,
    custos_medios_mensais varchar(255) NOT NULL,
    lucro varchar(255) NOT NULL,
    PRIMARY KEY (form_id)
); 


-- drop database db;