extends Node2D

var charactertree = load("res://scripts/Character_Data.tres")


@export var CN : String 

var character = charactertree.get_meta("Jarl")
var hp = character.HP
var energy = character.energy

func _ready() -> void:
	print(energy)
	
