extends Node2D

const ENEMY = preload("uid://1rsrk55xpfre")
const WIN_SCENE = preload("uid://cya8g8i86r4f8")

@onready var energy_label: Label = $EnergyLabel
@onready var marker_2d: Marker2D = $Marker2D
@onready var marker_2d_2: Marker2D = $Marker2D2
@onready var combat_cs: Node = $CombatCs

var character
var energy = MouseState.Energy
var enemys = []
var Deck

func _ready() -> void:
	for x in 2:
		character = ENEMY.instantiate()
		combat_cs.add_child(character)
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
	if enemys[0] != null :
		enemys[0].activateaction()
	energy = MouseState.Energy

	
func EnergyHandler(Cost:int):
	energy -= Cost
	
func winlosesceene():
	var wlsceene = WIN_SCENE.instantiate()
	add_child(wlsceene)
