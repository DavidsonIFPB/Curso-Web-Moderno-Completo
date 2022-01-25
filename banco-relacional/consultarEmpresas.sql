SELECT
    e.nome Empresa,
    c.nome as `Cidade`
FROM
    empresas e,
    cidades c,
    empresas_unidades eu
WHERE
    eu.cidade_id = c.id
    AND e.id = eu.empresa_id
    AND sede;