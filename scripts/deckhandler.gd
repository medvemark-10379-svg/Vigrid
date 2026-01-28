extends Node2D

var BaseCard_data = load("res://scripts/BaseCard_data.tres")
var basedeck = BaseCard_data.get_meta("BD")
const STRIKE = preload("uid://dsrjwl4y5t6cm")

@onready var marker_2d: Marker2D = $Marker2D
@onready var marker_2d_2: Marker2D = $Marker2D2
@onready var marker_2d_3: Marker2D = $Marker2D3
@onready var marker_2d_4: Marker2D = $Marker2D4
@onready var marker_2d_5: Marker2D = $Marker2D5

var cardplace = []
var indeck= []
var infront = []
var random

func _ready():
	cardplace = [marker_2d.global_position, marker_2d_2.global_position, marker_2d_3.global_position, marker_2d_4.global_position, marker_2d_5.global_position ]
	for item in basedeck:
		for x in basedeck[item].Holded:
			indeck.append(basedeck[item].Name)
	for x in 5:
		random = randi_range(0,indeck.size()-1)
		infront.append(indeck[random])
		
		deckhandler(indeck[random], x)
			
func deckhandler(Name: String, id: int ):
	for item in basedeck:
		if basedeck[item].Name == Name:
			var strike = STRIKE.instantiate()
			add_child(strike)
			strike.id = id
			strike.global_position = cardplace[id]
			strike.icon.modulate = basedeck[item].Color
			strike.Type = basedeck[item].Type
			strike.Baseeffectnumb = basedeck[item].BaseEffectNumb
			if basedeck[item].Name == "Block":
				strike.placedon = basedeck[item].PlacedOn
