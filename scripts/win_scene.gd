extends Control

@onready var carccontainer: Node = $Carccontainer

const MAIN = preload("uid://by5r5wqt6jbad")

const BASE_CARD_DATA = preload("uid://b7r4xggv73ykb")
var basedata = BASE_CARD_DATA.get_meta("BD")

var choosed = 0
var cards = []

func _ready() -> void:
	for i in basedata:
		cards.append(i)
	for i in carccontainer.get_children():
		var choosedcar = cards.pick_random()
		i.icon.modulate = basedata[choosedcar].Color
		i.Name = basedata[choosedcar].Name
		cards.erase(choosedcar)


func _on_button_pressed() -> void:
	Interact.pluscardpile.append(carccontainer.get_child(choosed).Name)
	get_tree().reload_current_scene()
	


func _on_one_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions"):
		choosed = 0
		print(choosed)

func _on_two_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions"):
		choosed = 1
		print(choosed)
	
func _on_three_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if Input.is_action_just_pressed("mouseactions"):
		choosed = 2
		print(choosed)
