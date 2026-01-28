class_name Enemy extends Node2D

@onready var interact: interact = $"../interact"
@onready var character: Node2D = $"../Character"
@onready var card: Strike = $"../Card"
@onready var alert: Sprite2D = $Alert

<<<<<<< HEAD
var hp = 10
=======
var maxhp = 40
var hp = 40
>>>>>>> 13efe3b0dbc7c6cb44700de2ca55bd523ddc12a9
var tesztszam = 2
var alert_mode: bool = false
var block: int
var nameclass = "Enemys"
@onready var block_bar: ProgressBar = $ProgressBar
@onready var hp_bar: ProgressBar = $ProgressBar2

@onready var animation_player: AnimationPlayer = $AnimationPlayer
@onready var interactive: interact = $"../interact"



func _process(delta: float) -> void:
	block_bar.value = block
	hp_bar.max_value = maxhp
	hp_bar.value = hp

func _on_mouse_entered() -> void:
	MouseState.checker(2)
	


func _on_mouse_exited() -> void:
	MouseState.checker(0)
	



func _on_area_entered(area: Area2D) -> void:
	if character.energy >= card.cost:
		character.energy -= card.cost
		hp = interact.attack(area.hitpoint,hp,0)
			
func alert_mode_check(alert_modee: bool):
	alert_mode = alert_modee
	alert.visible = alert_modee
	animation_player.play("alert")
	
func hurt(Damage: int):
	hp -= Damage
<<<<<<< HEAD
	if hp <= 0:
		queue_free()
	
=======
	print(hp)
	if hp <= 0:
		queue_free()
	
func GainBlock(Block: int):
	block += Block
>>>>>>> 13efe3b0dbc7c6cb44700de2ca55bd523ddc12a9
	


func _on_area_2d_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions") and MouseState.usedcard != []:
<<<<<<< HEAD
		Interact.Check(MouseState.usedcard[1], "Enemys", MouseState.usedcard[2])
		print("Nem működik")
=======
		Interact.Check(MouseState.usedcard[1], nameclass, MouseState.usedcard[2])
>>>>>>> 13efe3b0dbc7c6cb44700de2ca55bd523ddc12a9
