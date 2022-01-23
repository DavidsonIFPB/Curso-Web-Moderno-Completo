CREATE TABLE IF NOT EXISTS prefeitos (
    id int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL,
    cidade_id int UNSIGNED,
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);