extends Node2D


@onready var character: Node2D = $Character
@onready var energy_label: Label = $EnergyLabel


func _process(delta: float) -> void:
	energy_label.text = str(character.energy)
	
