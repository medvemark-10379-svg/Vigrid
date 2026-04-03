CREATE TABLE "God" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    buff_name TEXT NOT NULL,
    buff_stat INTEGER NOT NULL
    image  BLOB NOT NULL
);

CREATE TABLE "Character" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    god_id INTEGER,
    name TEXT NOT NULL,
    stat TEXT NOT NULL,
    unique_weapon TEXT NOT NULL,
    healthpoints INTEGER NOT NULL,
    iscontrollable BOOLEAN NOT NULL,
    combat_state BOOLEAN NOT NULL,
    image BLOB NOT NULL
    FOREIGN KEY ("god_id") REFERENCES "god"("id")
);

CREATE TABLE "Card" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    stat TEXT NOT NULL,
    image BLOB NOT NULL
);

CREATE TABLE "Item"(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name TEXT NOT NULL,
    stat INTEGER,
    description TEXT
    image BLOB NOT NULL
);

CREATE TABLE "Rune" (
    item_id INTEGER PRIMARY KEY,
    requirment BOOLEAN,
    symbol TEXT,
    image BLOB NOT NULL
    FOREIGN KEY (item_id) REFERENCES Item(id) ON DELETE CASCADE
);

CREATE TABLE "Weapon" (
    item_id INTEGER PRIMARY KEY,
    damage INTEGER,
    image BLOB NOT NULL
    FOREIGN KEY (item_id) REFERENCES Item(id) ON DELETE CASCADE
);

CREATE TABLE "Potion" (
    item_id INTEGER PRIMARY KEY,
    potion_run_time INTEGER,
    image BLOB NOT NULL
    FOREIGN KEY (item_id) REFERENCES Item(id) ON DELETE CASCADE
);