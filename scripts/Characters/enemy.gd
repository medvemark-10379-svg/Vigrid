class_name Enemy extends Area2D

@onready var interact: interact = $"../interact"

var hp = 3


func _process(delta: float) -> void:
	pass

func _on_mouse_entered() -> void:
	MouseState.checker(2)
	


func _on_mouse_exited() -> void:
	MouseState.checker(0)
	



func _on_area_entered(area: Area2D) -> void:
	hp = interact.attack(area.hitpoint,hp,0)
	if hp==0:
		queue_free()
