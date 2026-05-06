extends Node2D


var usedcard = []
var Character 
var Energy
var choseddeck
var addedtodeck = []
var CurrentPosition = 1

var CIVP = ["outside","inside_card", "Enemy"]
var CIVR = ["released","pressed"]
var mousestateP = CIVP[0]
var mousestateR = CIVR[0]
var dragabel = false
var clickedcardid
var currentitem
var ChoosedEnemy
	

#func _input(event: InputEvent) -> void:
#	if InputMap.event_is_action(event,"mouseactions"):
#		if Input.is_action_just_pressed("mouseactions"):
#			if mousestateP == CIVP[2] and MouseState.usedcard.size() != 0:
#				get_tree().call_group("Cards", "used", usedcard[0])
#		if Input.is_action_just_released("mouseactions"):
#			dragabel = false

func _input(event: InputEvent) -> void:
		if Input.is_action_pressed("mouseactions"):
			if mousestateP == CIVP[2] and MouseState.usedcard.size() != 0:
				get_tree().call_group("Cards", "used", usedcard[0])
			if currentitem != null and "y" not in currentitem:
				currentitem.global_position = get_global_mouse_position() + currentitem.grab_offset
		if Input.is_action_just_released("mouseactions") and currentitem != null:
			if "baseposition" in currentitem:
				currentitem.global_position = currentitem.baseposition
			currentitem = null

func checker(stateP: int = 0, stateR: int = 0):
	mousestateP = CIVP[stateP] 
	mousestateR = CIVR[stateR]
