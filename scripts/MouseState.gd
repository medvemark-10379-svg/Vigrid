extends Node

var CIVP = ["outside","inside_card", "Enemy"]
var CIVR = ["released","pressed"]
var mousestateP = CIVP[0]
var mousestateR = CIVR[0]
var dragabel = false


func _input(event: InputEvent) -> void:
	if InputMap.event_is_action(event,"mouseactions"):
		if Input.is_action_just_pressed("mouseactions"):
			print(mousestateP +","+ CIVR[1])
		if Input.is_action_just_released("mouseactions"):
			print(mousestateP +","+ CIVR[0])
			dragabel = false
		if mousestateP == CIVP[1] and mousestateR == CIVR[1]:
			dragabel = true
			print("JEJ")
			
func checker(stateP: int = 0, stateR: int = 0):
	mousestateP = CIVP[stateP] 
	mousestateR = CIVR[stateR]
