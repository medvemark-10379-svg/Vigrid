class_name Enemy extends Node2D

@onready var interact: interact = $"../interact"
@onready var character: Node2D = $"../Character"
@onready var card: Strike = $"../Card"

var hp = 4


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
		if hp==0:
			queue_free()
