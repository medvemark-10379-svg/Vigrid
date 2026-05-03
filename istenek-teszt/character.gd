extends Node2D

const ISTENEK = preload("uid://nc38sidau2jq")
var attackcheck = 0
var defensecheck = 0
var buff = 0
var istenek = ISTENEK.get_meta("Thor")
var istenek2 = ISTENEK.get_meta("Heimdall")
var istenek3 = ISTENEK.get_meta("Tyr")
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	
	print(istenek)
	print(istenek2)
	print(istenek3)

func _input(event: InputEvent) -> void:
	if Input.is_action_just_pressed("Attack"):
		attackcheck += 1
		
		triggered()	
	if Input.is_action_just_pressed("Defense"):
		defensecheck += 1
		
		triggered()	
	
func triggered():
	if attackcheck == istenek.TriggerInf.Attack:
		buff+=1	
	if  defensecheck == istenek.TriggerInf.Defense:
		buff+=1
	if buff == istenek.BuffLimit:
		buff = 0
		print("Thor nagyon boldog")
		
		
	
