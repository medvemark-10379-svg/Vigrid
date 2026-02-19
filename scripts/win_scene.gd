extends Control

@onready var carccontainer: Node = $Carccontainer
const MAIN = preload("uid://by5r5wqt6jbad")

const BASE_CARD_DATA = preload("uid://b7r4xggv73ykb")
var basedata = BASE_CARD_DATA.get_meta("BD")
var cards = []

func _ready() -> void:
	for i in basedata:
		cards.append(i)
	for i in carccontainer.get_children():
		var choosedcar = cards.pick_random()
		i.icon.modulate = basedata[choosedcar].Color
		i.Type = basedata[choosedcar].Type
		i.Baseeffectnumb = basedata[choosedcar].BaseEffectNumb 
		i.Name = basedata[choosedcar].Name
		i.cost = basedata[choosedcar].Cost
		cards.erase(choosedcar)


func _on_button_pressed() -> void:
	get_tree().change_scene_to_packed(MAIN)
