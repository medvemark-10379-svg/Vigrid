extends Node2D

const MAIN = preload("uid://by5r5wqt6jbad")

@onready var bondi: Area2D = $Bondi
@onready var jarl: Area2D = $Jarl


func _on_bondi_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions"):
		MouseState.Character = "P0"


func _on_jarl_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions"):
		MouseState.Character = "P1"


func _on_button_pressed() -> void:
	get_tree().change_scene_to_packed(MAIN)
