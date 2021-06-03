create database db;

use db;

create table input(
    form_id int NOT NULL AUTO_INCREMENT,
    tempo_negocio varchar (255) NOT NULL,
    num_funcionarios varchar (255) NOT NULL,
    tam_cardapio varchar (255) NOT NULL,
    compra_semana varchar (255) NOT NULL,
    din_reinvestir varchar (255) NOT NULL, -- Adicionar no send.forms e forms --
    pretende_expandir varchar (255) NOT NULL, -- Adicionar no send.forms e forms --
    licenca_necessaria varchar (255) NOT NULL, -- Adicionar no send.forms e forms --
    
    ticket_medio varchar (255) NOT NULL,
    custos_medios_mensais varchar (255) NOT NULL,
    margem_lucro varchar (255) NOT NULL,
    fluxo_caixa varchar (255) NOT NULL,
    controle_estoque varchar (255) NOT NULL,
    contabilidade_imposto varchar (255) NOT NULL,
    custos_variaveis varchar (255) NOT NULL,
    redes_sociais varchar (255) NOT NULL,
    publicidade varchar (255) NOT NULL,
    identidade_visual varchar (255) NOT NULL,
    diferencial_negocio varchar (255) NOT NULL,
    publico_alvo varchar (255) NOT NULL,
    motivacao varchar (255) NOT NULL,  -- Adicionar no send.forms e forms --
    delivery boolean,
    volta_clientes varchar (255) NOT NULL,
    motivo_volta_clientes varchar (255) NOT NULL,
    nps varchar (255) NOT NULL,
    vem_clientes varchar (255) NOT NULL,
    PRIMARY KEY (form_id)
); 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ell5280p#M'
flush privileges;


drop database db;