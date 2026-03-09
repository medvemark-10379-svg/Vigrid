extends Node

const ITEM_DATA = preload("uid://yxjmdddsno0u")
var item_data = ITEM_DATA.get_meta("I0")


func _ready() -> void:
	for i in item_data:
		print(item_data[i].Id)
