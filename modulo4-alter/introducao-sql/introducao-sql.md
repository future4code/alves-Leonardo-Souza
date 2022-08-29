CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
-- 1. a) O comando VARCHAR serve para definir que será uma string e ao lado nos parênteses o número máximo
-- de caracteres. O comando PRIMARY KEY defini a chave única da tabela, que é obrigátoria. O comando NOY NULL
-- define que aquele campo é obrigátorio, ou seja, não sendo possível deixá-lo em branco. O comando DATE define
-- que será uma linha
-- b) Ao rodar o comando SHOW TABLES é disponibilizado um chart com informações das tabelas que estão no schema.
-- Ao rodar o comando SHOW DATABASES foram mostradas as informações dos schemas.
-- c) Com o comando DESCRIBE, abre no chart toda a descrição da tabela e tudo que é ou não permitido na mesma
-- 2. b) O erro gerado informa uma duplicidade daquele id, isto acontece pois este item está definido como PRIMARY
-- KEY e por isso não permite duplicidades
-- c) Este erro acontece pois o número de colunas não bate com os valores. Este erro está acontecendo pois não
-- foram fornecidas todas as informações necessárias dentro dos parenteses
-- d) Um dos campos, neste caso o "name", não foi preenchido
-- e) Faltaram aspas na data e gerou um erro que não permitiria a criação;

SHOW DATABASES;
SHOW TABLES ;
DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória `Pires",
  1200000,
  "1963-08-23", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "A",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Torres",
  350000,
  "1965-09-15", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Murilo Benicio",
  975000,
  "1971-07-13", 
  "male"
);

SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";

-- 3. a)
SELECT * from Actor WHERE gender = "female";
-- b)
SELECT salary from Actor WHERE name = "Tony Ramos";
-- c) Nenhuma row foi retornada pois não há este tipo nos generos.;
SELECT * from Actor WHERE gender = "invalid";
-- d) 
SELECT id, name, salary from Actor WHERE salary <= 500000;

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- 4. a) A query descrita seleciona dentro da tabela Actor todos aqueles com nomes começando em A ou J e que tenham
-- salario acima de 300.000;
-- b)
SELECT * from Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
-- c)
SELECT * FROM Actor 
WHERE name LIKE "%g%" OR "%G%";
-- d)
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR "%G%" OR name LIKE "%a%" OR "%A%") AND salary BETWEEN 350000 AND 900000

-- 5.
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    releaseDate DATE NOT NULL,
    rating INT NOT NULL    
);
-- a)
INSERT INTO Movie (id, name, synopsis, releaseDate, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
7
);
-- b)
INSERT INTO Movie (id, name, synopsis, releaseDate, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
 A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha,
 anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
);
-- c)
INSERT INTO Movie (id, name, synopsis, releaseDate, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.
 A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);
-- d)
INSERT INTO Movie (id, name, synopsis, releaseDate, rating)
VALUES(
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre
 enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela
 região",
"2000/09/10",
10
);
-- 6. a)
SELECT id, name, rating from Movie
WHERE id = "003";
-- b)
SELECT * from Movie
WHERE name = "O Auto da Compadecida";
-- c)
SELECT id, name, synopsis from Movie
WHERE rating >= 7;
-- 7. a)
SELECT * FROM Movie
WHERE name LIKE "%vida%";
-- b)
SELECT * from Movie
WHERE name LIKE "%Seus%" OR synopsis LIKE "%Seus%"; 
-- c)
SELECT * from Movie;Actor
-- d)
SELECT * from Movie
WHERE (name LIKE "%Seus%" OR synopsis LIKE "%Seus%") AND rating >= 7;
