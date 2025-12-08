extends Node2D

var mouseisonstrike= false
var baseposition

func _ready() -> void:
	baseposition = global_position

func _process(delta: float) -> void:
	pass


func _on_strikearea_mouse_entered() -> void:
	mouseisonstrike = true

func _on_strikearea_mouse_exited() -> void:
	mouseisonstrike = false
