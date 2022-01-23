SELECT * FROM cidades cid inner join prefeitos pref on cid.id = pref.cidade_id;

select * from cidades as c left join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c right join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c left join prefeitos as p on c.id = p.cidade_id
union
select * from cidades as c right join prefeitos as p on c.id = p.cidade_id;

