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

func _ready():
	cardplace = [marker_2d.global_position, marker_2d_2.global_position, marker_2d_3.global_position, marker_2d_4.global_position, marker_2d_5.global_position ]
	deckhandler()


func deckhandler(CColor: Color = basedeck.Strikes.Color, Cost: int = basedeck.Strikes.Cost, Holded: int = basedeck.Strikes.Holded, Name: String = basedeck.Strikes.Name):
	for x in Holded:
		var strike = STRIKE.instantiate()
		add_child(strike)
		strike.id = x
		strike.global_position = cardplace[x]
		print(x)
		
