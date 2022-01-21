UPDATE
    estados
SET
    nome = 'Maranhão'
WHERE
    sigla = 'ma';


SELECT
    est.nome
FROM
    estados AS est
WHERE
    sigla = 'MA';


UPDATE
    estados
SET
    nome = 'Paraná',
    populacao = 11.32
WHERE
    sigla = 'PR';


SELECT
    est.nome, sigla, populacao
FROM
    estados AS est
WHERE
    sigla = 'PR';