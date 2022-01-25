ALTER TABLE
    empresas
MODIFY
    cnpj varchar (14);


INSERT INTO
    empresas (nome, cnpj)
VALUES
    ('Bradesco', '95694186000132'),
    ('Vale', '27887148000146'),
    ('Cielo', '1598317000134');


DESC empresas;


SELECT
    *
FROM
    empresas;


INSERT INTO
    empresas_unidades (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);


SELECT
    *
FROM
    empresas_unidades;