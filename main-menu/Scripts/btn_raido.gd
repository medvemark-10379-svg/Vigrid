extends Button

@onready var newgame_lbl = $lbl_NewGame
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	random_position_raido()
	newgame_lbl.visible = false

func random_position_raido():
	var screen_size = get_viewport_rect().size
	var btn_size = size
	var margin_minx = 200
	var margin_maxx = screen_size.x - 200 - btn_size.x
	var margin_miny = screen_size.y / 2
	var margin_maxy = screen_size.y - 100 - btn_size.y
	var random_x = randf_range(margin_minx,margin_maxx)
	var random_y = randf_range(margin_miny, margin_maxy)
	position = Vector2(random_x, random_y)
