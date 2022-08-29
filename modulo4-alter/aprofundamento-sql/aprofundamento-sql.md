1. a) Remove a coluna salário de dentro da tabela dos atores
   b) Altera o nome da coluna gênero para sexo com limite de 6 caracteres na string.
   c) Altera a coluna gênero mantendo o nome e colocando o número de caracteres em 255.
   d)   ALTER TABLE Actor
	CHANGE gender gender VARCHAR(100);

2. a)	UPDATE Actor
	SET name = "Moacyr Franco"
	WHERE id = 003;
	
	UPDATE Actor
	SET birth_date = "1936-10-05"
	WHERE id = 003;
   
   b) 	UPDATE Actor
	SET name = UPPER(name)
	WHERE id = 005;

	UPDATE Actor
	SET name = "Juliana Paes"
	WHERE id = 005; 
   
   c)	UPDATE Actor
	SET name = "Adriana Esteves",
	salary = 500000,
    	birth_date = "1969-12-15",
    	gender = "female"
	WHERE id = "005";

   d) O comando deu como OK no "Output" entretanto por tratar-se de id inválido, foi registrado que não houveram alterações
      em nenhuma linha ou coluna.

3. a) 	DELETE FROM Actor
	WHERE name = "Glória `Pires"

	Obs: Fernanda Montenegro era id 003 substituido em outro exercicio. Exclui esta aproveitando um erro de digitação de ontem
   
   b)	DELETE FROM Actor
	WHERE gender = "male" AND salary > 1000000;

4. a) 	SELECT MAX(salary) FROM Actor;

   b) 	SELECT MIN(salary) FROM Actor
	WHERE gender = "female";

   c) 	SELECT COUNT(*) FROM Actor
	WHERE gender = "female";

   d) 	SELECT SUM(salary) FROM Actor;

5. a) Esta query retorna agrupados os generos e suas quantidades, ou seja, separa os generos em "male" e "female" e 
   mostra suas respectivas quantidades.

   b) 	SELECT id , name FROM Actor
	ORDER BY name ASC;

   c) 	SELECT * FROM Actor
	ORDER BY salary DESC;

   d) 	SELECT * FROM Actor
	ORDER BY salary DESC
	LIMIT 3;

   e) 	SELECT AVG(salary) FROM Actor
	GROUP BY gender;

6. a)	ALTER TABLE Movie
	ADD playing_limit_date DATE;

   b)  	ALTER TABLE Movie
	CHANGE rating rating FLOAT;

   c) 	UPDATE Movie
	SET playing_limit_date = "2022-08-15"
	WHERE name = "Se Eu Fosse Você";

	UPDATE Movie
	SET playing_limit_date = "2022-09-25"
	WHERE name = "Doce de mãe";

   d) 