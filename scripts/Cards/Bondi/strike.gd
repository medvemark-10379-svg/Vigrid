class_name Strike extends Node2D

var baseposition
var id 
var activated = false

@onready var card_point: Node2D = $CardPoint
@onready var icon: Sprite2D = $Icon
@onready var collision_shape_2d: CollisionShape2D = $Strikearea/CollisionShape2D



func _ready() -> void:
	baseposition = global_position

func _process(delta: float) -> void:
	pass


func clicked(cardid: int):
	if cardid == id:
		collision_shape_2d.debug_color = Color(1.0, 0.005, 0.062, 0.42)
		activated = true

func _on_strikearea_mouse_entered() -> void:
	await get_tree().create_timer(0.001).timeout
	MouseState.checker(1,1)
	collision_shape_2d.debug_color = Color(0.658, 0.516, 0.0, 0.42)
	global_position.y -= 10
	MouseState.clickedcardid = id

func _on_strikearea_mouse_exited() -> void:
	MouseState.checker(0,0)
	collision_shape_2d.debug_color = Color(0.0, 0.6, 0.7, 0.42)
	global_position.y += 10
		
