class_name Strike extends Node2D

var mouseisonstrike= false
var baseposition

@onready var card_point: Node2D = $CardPoint
@onready var icon: Sprite2D = $Icon



func _ready() -> void:
	baseposition = global_position

func _process(delta: float) -> void:
	pass



func _on_strikearea_mouse_entered() -> void:
	mouseisonstrike = true
	MouseState.checker(1,1)

func _on_strikearea_mouse_exited() -> void:
	mouseisonstrike = false
	MouseState.checker(0,0)
