SELECT
    cid.nome,
    est.nome,
    est.regiao
FROM
    estados est,
    cidades cid
WHERE
    est.id = cid.estado_id;


SELECT
    c.nome AS Cidade,
    e.nome AS Estado,
    regiao AS Regiao
FROM
    estados e
    INNER JOIN cidades c ON e.id = c.estado_id;