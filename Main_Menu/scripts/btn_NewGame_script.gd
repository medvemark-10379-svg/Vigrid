extends TextureButton

@onready var newgame_lbl = $lbl_NewGame

func _ready() -> void:
	newgame_lbl.visible = false
	connect("mouse_entered", mouse_entered)
	connect("mouse_exited", mouse_exited)
	self_position()

func mouse_entered():
	newgame_lbl.visible = true

func mouse_exited():
	newgame_lbl.visible=false

func ran_pos() -> Vector2:
	var current_pos = self.position
	var offsety = randf_range(-100,200)
	var offsetx = randf_range(-160,160)
	var new_pos = current_pos+ Vector2(offsetx,offsety)
	return new_pos

func self_position():
	self.position = ran_pos()


func _on_btn_continue_pressed() -> void:
	get_tree().change_scene("")
