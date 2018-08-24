# record-collections
CREATE TABLE "album" (
    "id" SERIAL PRIMARY KEY,
	"artist" varchar(255),
    "album" varchar(255),
    "release_date" DATE,
    "own_wish" BOOL DEFAULT false,
	"image_path" varchar(2000) default 'https://yt3.ggpht.com/b3hgmMgwScEcUB7rGxZl6m6ogxFLw5_GjKSVFdzVzd_Q8aAKkr35IkV7aIsCY8carzabsSlLmNbf3CFozMM=s900-mo-c-c0xffffffff-rj-k-no', 
	"genre_id" INT REFERENCES "genre" 
);

CREATE TABLE "genre" (
	"id" serial primary key,
	"genre" varchar(255) 
);

SELECT "artist", "album", "release_date", "own_wish", "image_path", "genre_id" FROM "album" JOIN "genre" ON "album"."genre_id" = "genre"."id";






INSERT INTO "album" ("artist", "album", "release_date", "own_wish", "genre_id")

VALUES 
('rolling stones', 'stickey fingers', '1971-04-23', 'true', '7'),

('pink floyd', 'meddle', '1971-10-31', 'true', '7');



INSERT INTO "genre" ("genre")
VALUES
('classical'),
('country'),
('folk'),
('jazz'),
('newage'),
('reggae'),
('rock'),
('soundtrack'),
('electronic'),
('funk'),
('soul'),
('hip-hop'),
('latin'),
('pop'),
('religious'),
('traditional'),
('international'),
('r&b'),
('rap');

SELECT * FROM "album";

