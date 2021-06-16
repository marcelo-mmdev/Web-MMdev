create database av2_bd;

create table cliente(
id int auto_increment,
nome varchar(45),
telefone varchar(45),
email varchar(45),
constraint pk_id_cli primary key(id)
);

create table vendedor(
id int auto_increment,
nome varchar(45),
constraint pk_id_ven primary key (id)
);

create table pagamento(
id int auto_increment,
forma_pagamento varchar(45),
constraint pk_id_pag primary key (id)
);

create table categoria(
id int auto_increment,
nome varchar(45),
constraint pk_id_cat primary key(id)
);

create table fornecedores(
id int auto_increment,
cnpj varchar(45),
nome varchar(45),
constraint pk_id_for primary key(id)
);

create table venda(
id int auto_increment,
valor_total decimal(10,2),
dat datetime,
cliente_id int,
vendedor_id int,
pagamento_id int,
constraint pk_id_ven primary key(id),
foreign key (cliente_id) references cliente(id),
foreign key (vendedor_id) references vendedor(id),
foreign key (pagamento_id) references pagamento(id)
);

create table produto(
id int auto_increment,
nome varchar(45),
preço decimal(10,2),
qtd_estoque varchar(45),
categoria_id int,
fornecedores_id int,
constraint pk_id_prod primary key (id),
foreign key (categoria_id) references categoria(id),
foreign key (fornecedores_id) references fornecedores(id)
);

create table venda_has_produto(
venda_id int,
produto_id int,
foreign key(produto_id) references produto(id),
foreign key(venda_id) references venda(id)
);

INSERT into cliente (nome, telefone, email) VALUES ('Robert Garcia','8198989898','robert@gmail.com');
INSERT into cliente (nome, telefone, email) VALUES ('Ryo Sakazaki','81920202020','ryo@gmail.com');
INSERT into cliente (nome, telefone, email) VALUES ('Mai Shiranui','81920022002','mai@gmail.com');
INSERT into cliente (nome, telefone, email) VALUES ('Leona Heidern','81996969696','leona@gmail.com');
INSERT into cliente (nome, telefone, email) VALUES ('Kim Kaphwan','81922222202','kim@gmail.com');
INSERT into cliente (nome, telefone, email) VALUES ('Athena Asamiya','81997979797','athena@gmail.com');
INSERT into cliente (nome, telefone, email) VALUES ('Goro Daimon','81997982002','daimon@gmail.com');
select * from cliente;

INSERT into vendedor (nome) VALUES ('Rugal Bernstein');
INSERT into vendedor (nome) VALUES ('Orochi Mestre');
INSERT into vendedor (nome) VALUES ('Goenitz Kof');
INSERT into vendedor (nome) VALUES ('Chizuru Kagura');
select * from vendedor;

INSERT into pagamento (forma_pagamento) VALUES ('Cartão de Crédito');
INSERT into pagamento (forma_pagamento) VALUES ('Boleto Bancário');
INSERT into pagamento (forma_pagamento) VALUES ('À Vista');
INSERT into pagamento (forma_pagamento) VALUES ('Cartão de Débito');
select * from pagamento;

INSERT into categoria (nome) VALUES ('Remedios');
INSERT into categoria (nome) VALUES ('Armas');
INSERT into categoria (nome) VALUES ('Roupas');
select * from categoria;

INSERT into fornecedores (cnpj, nome) VALUES ('142536142536-98', 'Kyo Kusanagi');
INSERT into fornecedores (cnpj, nome) VALUES ('748596362514-97', 'Iori Yagami');
INSERT into fornecedores (cnpj, nome) VALUES ('986532125478-99', 'Kula Diamond');
select * from fornecedores;

INSERT into venda (valor_total, dat, cliente_id, vendedor_id, pagamento_id) VALUES ('1998', current_timestamp(), '4', '2', '4');
INSERT into venda (valor_total, dat, cliente_id, vendedor_id, pagamento_id) VALUES ('2002', current_timestamp(), '6', '4', '1');
INSERT into venda (valor_total, dat, cliente_id, vendedor_id, pagamento_id) VALUES ('1997', current_timestamp(), '3', '1', '3');
INSERT into venda (valor_total, dat, cliente_id, vendedor_id, pagamento_id) VALUES ('2003', current_timestamp(), '1', '3', '2');
INSERT into venda (valor_total, dat, cliente_id, vendedor_id, pagamento_id) VALUES ('1997', current_timestamp(), '7', '4', '3');
INSERT into venda (valor_total, dat, cliente_id, vendedor_id, pagamento_id) VALUES ('1996', current_timestamp(), '2', '1', '1');
INSERT into venda (valor_total, dat, cliente_id, vendedor_id, pagamento_id) VALUES ('2001', current_timestamp(), '5', '2', '4');
select * from venda;

INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Calças', '85', '50', '3', '3');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id) VALUES ('Faca', '100', '50', '2', '2');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id) VALUES ('Dorflex', '10', '50', '1', '1');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Dipirona', '3', '50', '1', '1');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Bastão', '114', '50', '2', '2');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Camisa', '45', '50', '3', '3');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Blusa', '95', '50', '3', '3');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Short', '50', '50', '3', '3');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Faixa', '20', '50', '1', '1');
INSERT into produto (nome, preço, qtd_estoque, categoria_id, fornecedores_id ) VALUES ('Nunchaku', '200', '50', '2', '2');
select * from produto;

INSERT into venda_has_produto (venda_id, produto_id) VALUES ('7', '4');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('6', '5');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('5', '2');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('7', '8');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('6', '9');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('5', '3');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('4', '7');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('3', '6');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('2', '1');
INSERT into venda_has_produto (venda_id, produto_id) VALUES ('1', '7');
select * from venda_has_produto;


create view dados_clientes as
select v.id as Id_Venda, c.nome as Cliente, c.email, p.forma_pagamento, d.nome as Vendedor, v.dat, v.valor_total
from cliente c
inner join venda v
on c.id = v.cliente_id
inner join pagamento p
on p.id = v.pagamento_id
inner join vendedor d
on d.id = v.vendedor_id;
select * from dados_clientes;

create view dados_vendas as
select v.id as Id_Venda, v.dat, v.valor_total, d.nome as Vendedor, count(b.venda_id)
from venda v
inner join vendedor d
on d.id = v.vendedor_id
inner join venda_has_produto b
on v.id = b.venda_id
group by venda_id;
select * from dados_vendas;

create view dados_produto as
select p.id as Id_Produto, p.nome as Nome_Produto, p.preço, p.qtd_estoque, c.nome as CATEGORIA, f.nome, count(b.produto_id) as 'Vendas do Produto'
from produto p
inner join categoria c
on c.id = p.categoria_id
inner join fornecedores f
on f.id = p.fornecedores_id
inner join venda_has_produto b
on p.id = b.produto_id
group by produto_id;
select * from dados_produto;

create trigger d_estoque
AFTER INSERT
ON venda_has_produto FOR EACH ROW
update produto
set qtd_estoque = qtd_estoque - 1
where id = NEW.produto_id;

DELIMITER $
create procedure cadastrar_venda (in clienteId int, in vendedorId int, in formPagamento int)
begin
	insert into cliente (id, nome, telefone, email) values (clienteId,'','','');
	insert into vendedor (id, nome) values (vendedorId,'');
	insert into pagamento (id, forma_pagamento) values (formPagamento,'');
end $

DELIMITER $
create procedure AssProVenda (in vendaId int,in produtoId int)
begin
	insert into venda (id, data_venda, valor_total) values (vendaId,'', '');
    insert into produto (id, nome, preço, qtd_estoque) values (produtoId,'','','');
end $

DELIMITER $
create procedure attValorTotal (in VendaID int, in valorTotalVenda decimal (10,2))
begin
	update venda
    set venda.valor_total = valorTotalVenda
    where venda.id = vendaId;
end $

DELIMITER $
create procedure cltVinculadoVenda (in vendaId int, out clienteVenda varchar(45))
begin
	select nome from venda where venda.id = vendaId;
end $

DELIMITER $
create procedure produto_mais_vendido(OUT maisVendido varchar(50))
begin
    SELECT p.nome AS produto, f.nome AS fornecedor, count(vhp.produto_id) AS qtd_estoque
    FROM P_produto p, P_fornecedores f, P_venda_has_produto vtp
    WHERE vhp.produto_id = p.id
        AND f.id = p.fornecedores_id 
    GROUP BY (vtp.produto_id)
    ORDER BY qtde DESC LIMIT 1;
    
end $ 
