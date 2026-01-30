extends Node2D

const ENEMY = preload("uid://1rsrk55xpfre")

@onready var character: Node2D = $Character
@onready var energy_label: Label = $EnergyLabel
@onready var marker_2d: Marker2D = $Marker2D
@onready var marker_2d_2: Marker2D = $Marker2D2

var energy = 3

func _ready() -> void:
	for x in 2:
		var character = ENEMY.instantiate()
		add_child(character)
		if x == 1:
			character.controllabel = true
			character.global_position = marker_2d.global_position
			character.id = x
		else:
			character.global_position = marker_2d_2.global_position


func _process(delta: float) -> void:
	energy_label.text = str(energy)
	
