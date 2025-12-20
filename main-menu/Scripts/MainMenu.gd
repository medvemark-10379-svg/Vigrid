extends Node2D
@onready var start_ = $New_Game/btn_NewGame
@onready var continue_ = $New_Game/btn_Continue
@onready var exit_ = $New_Game/btn_Exit

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass	
	
	# Helyezze el az összes gombot egymás után, ütközésmentesen

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_btn_new_game_pressed() -> void:
	get_tree().change_scene("")
