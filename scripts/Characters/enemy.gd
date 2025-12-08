class_name Enemy extends Area2D


func _process(delta: float) -> void:
	if BgScript.enemy_is_attacked == true:
		queue_free()
