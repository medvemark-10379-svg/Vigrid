extends Node2D

const MAP = preload("uid://byrpqpqob35tm")



# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var map = MAP.instantiate()
	add_child(map)
	map.generateMappoints()
