extends Node2D

const MAP = preload("uid://2i40l6ds35ry")



# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	var map = MAP.instantiate()
	add_child(map)
	map.generateMappoints()
