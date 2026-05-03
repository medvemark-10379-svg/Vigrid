-- SQLite
CREATE TABLE bosses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    sizeDT TEXT,
    sizeMb TEXT,
    sizeMT TEXT
);

INSERT INTO bosses (name, description, image, sizeDT, sizeMb, sizeMT) VALUES
('Hel', 'Boss of the underworld, daughter of Loki.', 'Images/Bosses/Hel.png', '25%', '45%', '35%'),
('Fenrir', 'Giant wolf, son of Loki.', 'Images/Bosses/Fenrir.png', '25%', '45%', '35%'),
('Jörmungandr', 'World serpent, son of Loki.', 'Images/Bosses/Jörmungandr.png', '25%', '45%', '35%'),
('Loki', 'Trickster god, father of the other bosses.', 'Images/Bosses/Loki.png', '25%', '45%', '35%'),
('Surtr', 'Fire giant, foretold to set the world ablaze during Ragnarok.', 'Images/Bosses/Surtr.png', '25%', '45%', '35%');

CREATE TABLE cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    damage TEXT,
    defensive TEXT,
    stamina TEXT,
    availableFor TEXT
);

INSERT INTO cards (name, description, image, damage, defensive, stamina, availableFor) VALUES
('Sway', '', 'Images/Cards/Sway.png', '', 'Blocks one attack.', 'Drains 2 Stamina', 'Bondi,Shaman,Ulfhednar'),
('Sunder', '', 'Images/Cards/Sunder.png', 'Deals 3 Damage', '', 'Drains 1 Stamina', 'Bondi,Berserkr,Ulfhednar'),
('Eitr', '', 'Images/Cards/Eitr.png', 'Deals 2 Damage per round.', '', 'Drains 1 Stamina', 'Shaman'),
('Frenzy', '', 'Images/Cards/Frenzy.png', 'Deals 5 Damage', '', 'Drains 2 Stamina', 'Ulfhednar,Berserkr'),
('Gash', '', 'Images/Cards/Gash.png', 'Deals X Damage per round.', '', 'Drains 2 Stamina.', 'Shaman'),
('Guard', '', 'Images/Cards/Guard.png', '', 'Gives 3 defense to yourself.', 'Drains 1 Stamina', 'Bondi,Berserkr,Jarl,Ulfhednar'),
('Rooted', '', 'Images/Cards/Rooted.png', '', 'Stuns the enemy. The enemy skips a turn.', 'Drains 1 Stamina', 'Shaman');

CREATE TABLE updates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    version TEXT NOT NULL,
    date TEXT NOT NULL,
    title TEXT,
    changes TEXT,
    ishidden INTEGER DEFAULT 1
);

INSERT INTO updates (version, date, title, changes, ishidden) VALUES
('1.0.0', '2026-04-07', 'Release of Vigrid: Survive the Ragnarok', 'Version 1.0.0 is out now', 1);

CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    sizeDT TEXT,
    sizeMb TEXT,
    sizeMT TEXT
);

INSERT INTO characters (name, description, image, sizeDT, sizeMb, sizeMT) VALUES
('Bondi', 'A Bondi was a free landowning farmer who formed the backbone of Viking society, serving as a self-equipped warrior during times of conflict.', 'Images/Characters/Bondi.png', '25%', '45%', '35%'),
('Jarl', 'A Jarl was a high-ranking noble or chieftain in Viking society who held significant territorial power, wealth, and a loyal following of warriors.', 'Images/Characters/Jarl.png', '25%', '45%', '35%'),
('Berserkr', 'A fierce warrior who entered a state of uncontrollable rage in battle.', 'Images/Characters/Berserkr.png', '25%', '45%', '35%'),
('Shaman', 'A spiritual leader who could communicate with the gods and predict the future.', 'Images/Characters/Shaman.png', '25%', '45%', '35%'),
('Ulfhednar', 'A legendary warrior known for his strength and skill in battle.', 'Images/Characters/Ulfhednar.png', '25%', '45%', '35%');

CREATE TABLE enemies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    sizeMb TEXT,
    sizeDT TEXT,
    sizeMT TEXT
);

INSERT INTO enemies (name, description, image, sizeMb, sizeDT, sizeMT) VALUES
('Draugr', 'Undead warrior from the Norse mythology.', 'Images/Enemies/Draugr.png', '44%', '30%', '36%'),
('Wolves', 'Pack of wild wolves.', 'Images/Enemies/Wolf.png', '44%', '30%', '36%'),
('Snakes', 'Venomous snakes lurking in the shadows.', 'Images/Enemies/Snakes.png', '44%', '30%', '36%'),
('Jotnar', 'Giant beings from Norse mythology.', 'Images/Enemies/Jotun.png', '44%', '30%', '36%'),
('Muspels Synir', 'Fire giant, servant of Surtr.', 'Images/Enemies/Muspell_Synir.png', '44%', '23%', '33%');

CREATE TABLE gods (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    sizeDT TEXT,
    sizeMb TEXT,
    sizeMT TEXT
);

INSERT INTO gods (name, description, image, sizeDT, sizeMb, sizeMT) VALUES
('Odin', 'Odin is the All-Father of the Aesir, a powerful seeker of knowledge who sacrificed his eye for ultimate wisdom.', 'Images/Gods/Odin.png', '25%', '45%', '35%'),
('Freyr', 'Freyr rules over rain and sunshine; he is often depicted with his golden boar, Gullinbursti', 'Images/Gods/Frey.png', '25%', '45%', '35%'),
('Thor', 'Thor is a fearless warrior who travels in a chariot pulled by two goats and fights giants to protect Asgard', 'Images/Gods/Thor.png', '25%', '45%', '35%'),
('Tyr', 'He is the bravest of the gods, known for losing his right hand to the wolf Fenrir.', 'Images/Gods/Tyr.png', '25%', '45%', '35%'),
('Heimdall', 'He stands on the Bifröst bridge with his horn, Gjallarhorn, to warn the gods of approaching enemies.', 'Images/Gods/Heimdall.png', '25%', '45%', '35%');

CREATE TABLE requirements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    os TEXT,
    cpu TEXT,
    ram TEXT,
    gpu TEXT,
    storage TEXT
);

INSERT INTO requirements (type, os, cpu, ram, gpu, storage) VALUES
('Minimum', 'Windows 7/ Windows 10/ Windows 11 (64x)', '2.0 GHz Dual Core', '4GB RAM', 'Integrated Intel HD 4000 (Vulkan 1.2+)', '500MB'),
('Recommended', 'Windows 10/ Windows 11 (64x)', '2.5 GHz+ Quad Core', '8GB RAM', 'Nvidia GTX 960 / AMD RX 560 or better', '1GB');

CREATE TABLE runes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    buff_name TEXT,
    buff_desc TEXT
);

INSERT INTO runes (name, description, image, buff_name, buff_desc) VALUES
('Raido', "Raido represents the journey, signifying both physical travel and the rhythmic movement of life's path toward personal transformation.", 'Images/Runes/Raido_Rune.png', 'Relentless Traveler', 'At the end of combat, heal 10% of your Max HP for every 5 turns the battle lasted.'),
('Tiwaz', "The Tiwaz rune represents the spiritual warrior, symbolizing justice, victory through sacrifice, and the unwavering courage to follow one's principles.", 'Images/Runes/Tiwaz_Rune.png', 'Victory Through Sacrifice', 'Lose 10% of your current HP to deal +50% Damage for the remainder of the turn.'),
('Thurisaz', "Thurisaz represents the giant and the thorn, symbolizing raw destructive power, the breaking of obstacles, and defensive protection through conflict.", 'Images/Runes/Thurisaz_Rune.png', 'Thorn in the Side', 'Whenever you are attacked, deal 25% of the damage received back to the attacker as Thorns.'),
('Uruz', "Uruz represents the 'aurochs', symbolizing raw primal power, physical strength, endurance, and the untamed vitality of nature used for personal transformation.", 'Images/Runes/Uruz_Rune.png', 'Aurochs'' Endurance', 'Reduce all incoming damage by 15% as long as your current HP is above 75%.'),
('Algiz', "Algiz represents protection and divine connection, acting as a spiritual shield that safeguards one’s path and enhances intuitive awareness.", 'Images/Runes/Algiz_Rune.png', 'Intuitive Awareness', 'You have a 15% chance to completely negate (0 damage) any incoming attack.');

CREATE TABLE weapons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    sizeDT TEXT,
    sizeMb TEXT,
    sizeMT TEXT
);

INSERT INTO weapons (name, description, image, sizeDT, sizeMb, sizeMT) VALUES
('Short Spear', 'A simple spear used by warriors.', 'Images/Weapons/Short_Spear.png', '3%', '12%', '7%'),
('Ulfberht Sword', 'A high-quality sword from the Viking Age.', 'Images/Weapons/Ulfberht.png', '7%', '20%', '15%'),
('Dane Axe', 'A heavy axe used in combat.', 'Images/Weapons/Dane_Axe.png', '9%', '24%', '21%'),
('Seax', 'A versatile knife used for various tasks.', 'Images/Weapons/Seax.png', '7%', '36%', '27%'),
('Shield', 'A defensive tool used to protect against attacks.', 'Images/Weapons/Shield.png', '7%', '20%', '15%');
