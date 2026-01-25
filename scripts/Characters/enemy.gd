class_name Enemy extends Node2D

@onready var interact: interact = $"../interact"
@onready var character: Node2D = $"../Character"
@onready var card: Strike = $"../Card"
@onready var alert: Sprite2D = $Alert

var hp = 4:
	set(hp):
		if hp == 0:
			queue_free()
var tesztszam = 2
var alert_mode: bool = false:
	set(alert_mode): 
		teszt(alert_mode)
@onready var animation_player: AnimationPlayer = $AnimationPlayer


func _process(delta: float) -> void:
	pass

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
	
func teszt(e: bool):
	pass
	
