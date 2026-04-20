class_name Strike extends Node2D

var baseposition
var id
var Type  
var placedon
var activated = false
var Name 
var Baseeffectnumb 
var cost


@onready var card_point: Node2D = $CardPoint
@onready var icon: Sprite2D = $Icon
@onready var collision_shape_2d: CollisionShape2D = $Strikearea/CollisionShape2D



func _ready() -> void:
	await get_tree().create_timer(0.001).timeout
	baseposition = global_position

func _on_strikearea_mouse_entered() -> void:
	await get_tree().create_timer(0.001).timeout
	collision_shape_2d.debug_color = Color(0.658, 0.516, 0.0, 0.42)
	global_position.y -= 10
	MouseState.clickedcardid = id

func _on_strikearea_mouse_exited() -> void:
	MouseState.checker(0,0)
	collision_shape_2d.debug_color = Color(0.0, 0.6, 0.7, 0.42)
	global_position.y += 10


func _on_strikearea_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if  event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.is_pressed() and get_parent().get_parent().get_parent().energy-cost >= 0:
		MouseState.usedcard = [id, Type, Baseeffectnumb, placedon]
		teszt1()
		
		
func used(usedid:int):
		if usedid == id:
			get_tree().call_group("Enemys", "alert_mode_check", false)
			await get_tree().create_timer(0.001).timeout
			get_parent().get_parent().get_parent().EnergyHandler(cost)
			MouseState.usedcard.clear()
			queue_free()
			Interact.cardpile.append(Name)
			
func teszt1():
	MouseState.currentcard = self
