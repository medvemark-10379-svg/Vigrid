extends Node2D

const MAIN = preload("uid://by5r5wqt6jbad")
const MAIN_MAP = preload("uid://c1pcvylcde5og")

@onready var bondi: Area2D = $Bondi
@onready var jarl: Area2D = $Jarl




func _on_button_pressed() -> void:
	if MouseState.Character != null:
		get_tree().change_scene_to_packed(MAIN_MAP)


func _on_p_0_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions"):
		$P0/Label.modulate = Color(0.0, 1.0, 1.0)
		MouseState.Character = "P0"




func _on_p_2_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions"):
		MouseState.Character = "P3"


func _on_p_0_mouse_entered() -> void:
	$AnimationPlayer.play("jiggle")
