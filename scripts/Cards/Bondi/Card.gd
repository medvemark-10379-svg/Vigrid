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
	baseposition = global_position

func clicked(cardid: int):
		if cardid == id:
			collision_shape_2d.debug_color = Color(1.0, 0.005, 0.062, 0.42)
			activated = true
			MouseState.checker(1,1)

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
	if Input.is_action_just_pressed("mouseactions"):
		MouseState.usedcard = [id, Type, Baseeffectnumb, placedon]
		
		
func used(usedid:int):
	if get_parent().get_parent().get_parent().energy-cost >= 0:
		if usedid == id:
			get_tree().call_group("Enemys", "alert_mode_check", false)
			await get_tree().create_timer(0.001).timeout
			get_parent().get_parent().get_parent().EnergyHandler(cost)
			print(MouseState.usedcard)
			MouseState.usedcard.clear()
			queue_free()
			Interact.cardpile.append(Name)
