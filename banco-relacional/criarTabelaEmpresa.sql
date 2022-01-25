CREATE TABLE IF NOT EXISTS empresas (
    id int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL,
    cnpj int UNSIGNED,
    UNIQUE KEY (cnpj)
);


CREATE TABLE IF NOT EXISTS empresas_unidades(
    empresa_id int UNSIGNED NOT NULL,
    cidade_id int UNSIGNED NOT NULL,
    sede tinyint(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
);