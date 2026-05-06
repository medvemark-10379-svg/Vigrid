extends Area2D

@onready var fight_icon: Sprite2D = $FightIcon

var type 

var mapevent = {
	"Enemy":{
		"Name": ""
	},
	"Event":{
		"Description": ""
	}
}
var areajelolo_1  
var used = false

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass
	 

func _on_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions") and used== false and areajelolo_1 == MouseState.CurrentPosition:
		MouseState.CurrentPosition += 1
		get_parent().animation()
	else:
		used = false

func teszt1():
		fight_icon.modulate= Color(0.976, 0.239, 0.29)

func checkdictionary(e: String):
	MouseState.ChoosedEnemy = e


func _on_mouse_entered() -> void:
	pass # Replace with function body.
