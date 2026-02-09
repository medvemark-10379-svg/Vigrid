extends Node2D

var BaseCard_data = load("res://scripts/BaseCard_data.tres")
var basedeck
const STRIKE = preload("uid://dsrjwl4y5t6cm")

@onready var marker_2d: Marker2D = $Marker2D
@onready var marker_2d_2: Marker2D = $Marker2D2
@onready var marker_2d_3: Marker2D = $Marker2D3
@onready var marker_2d_4: Marker2D = $Marker2D4
@onready var marker_2d_5: Marker2D = $Marker2D5
@onready var hand: Node = $hand
@onready var combatscene_main: Node2D = $".."

var cardplace = []
var indeck= []
var infront = []
var usedpile = []
var random


func _ready():
	await get_tree().create_timer(0.001).timeout
	basedeck = BaseCard_data.get_meta(combatscene_main.Deck)
	for item in basedeck:
		for x in basedeck[item].Holded:
			indeck.append(basedeck[item].Name)
	deckshuffel()
	
	
	
	
func deckshuffel():
	if indeck.size()>5:
		cardplace = [marker_2d.global_position, marker_2d_2.global_position, marker_2d_3.global_position, marker_2d_4.global_position, marker_2d_5.global_position ]
		for x in 5:
			random = randi_range(0,indeck.size()-1)
			infront.append(indeck[random])
			deckhandler(indeck[random], x)
			indeck.remove_at(random)
	else: 
		for i in usedpile.size():
			indeck.append(usedpile[i-1])
		usedpile.clear()
			
func deckhandler(Name: String, id: int ):
	for item in basedeck:
		if basedeck[item].Name == Name:
			var strike = STRIKE.instantiate()
			hand.add_child(strike)
			strike.id = id
			strike.global_position = cardplace[id]
			strike.icon.modulate = basedeck[item].Color
			strike.Type = basedeck[item].Type
			strike.Baseeffectnumb = basedeck[item].BaseEffectNumb 
			strike.Name = basedeck[item].Name
			strike.cost = basedeck[item].Cost
			if basedeck[item].Name == "Block":
				strike.placedon = basedeck[item].PlacedOn


func _on_button_pressed() -> void:
	usedpile.append_array(Interact.cardpile)
	for n in hand.get_children():
		usedpile.append(n.Name)
		n.queue_free()
	deckshuffel()
	Interact.cardpile.clear()
	
