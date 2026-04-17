extends Node2D

@onready var carccontainer: Node = $CanvasLayer/Carccontainer
const MAIN = preload("uid://by5r5wqt6jbad")
const BUY_CARD = preload("uid://cjd8ba7t5dbn7")
const BASE_CARD_DATA = preload("uid://b7r4xggv73ykb")

var basedata = BASE_CARD_DATA.get_meta("BD")
var cards = []
var basenumber = 3
var positions = [Vector2(244,334),Vector2(572,334),Vector2(860,334)]

func _ready() -> void:
	for i in basenumber:
		var card = BUY_CARD.instantiate()
		carccontainer.add_child(card)
		card.global_position = positions[i]
		card.input_event.connect(areaInput.bind(card))
	for i in basedata:
		cards.append(i)
	for i in carccontainer.get_children():
		var choosedcar = cards.pick_random()
		i.name = basedata[choosedcar].Name
		i.get_node("Icon").modulate = basedata[choosedcar].Color
		cards.erase(choosedcar)

func areaInput(viewport, event, shape_idx, card):
	if event is InputEventMouseButton :
		MouseState.addedtodeck.append(card.name)

func _on_button_pressed() -> void:
	get_tree().reload_current_scene()
