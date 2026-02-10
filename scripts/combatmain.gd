extends Node2D

const ENEMY = preload("uid://1rsrk55xpfre")

@onready var energy_label: Label = $EnergyLabel
@onready var marker_2d: Marker2D = $Marker2D
@onready var marker_2d_2: Marker2D = $Marker2D2

var character
var energy = MouseState.Energy
var enemys = []
var Deck

func _ready() -> void:
	for x in 2:
		character = ENEMY.instantiate()
		add_child(character)
		if x == 0:
			character.controllabel = true
			character.global_position = marker_2d.global_position
			character.sid = x
		else:
			character.global_position = marker_2d_2.global_position
			character.sid = x
			enemys.append(character)
		character.create()
	energy = MouseState.Energy
	Deck = MouseState.choseddeck
		


func _process(delta: float) -> void:
	energy_label.text = str(energy)

func _on_button_pressed() -> void:
	get_tree().call_group("Minions", "Attack")
	enemys[0].activateaction()
	energy = MouseState.Energy
	
func EnergyHandler(Cost:int):
	energy -= Cost
