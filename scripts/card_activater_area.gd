extends Area2D


func _on_area_entered(area: Area2D) -> void:
	if area is Card:
		get_tree().call_group("Cards", "Activated", MouseState.usedcard[0], true)


func _on_area_exited(area: Area2D) -> void:
	if area is Card:
		get_tree().call_group("Cards", "Activated", MouseState.usedcard[0], false)
		MouseState.usedcard.clear()
