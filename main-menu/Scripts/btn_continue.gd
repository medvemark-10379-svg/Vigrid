extends TextureButton

@onready var continue_lbl = $lbl_Continue

func _ready() -> void:
	continue_lbl.visible = false
	connect("mouse_entered", mouse_entered)
	connect("mouse_exited", mouse_exited)
	self_position()

func mouse_entered():
	continue_lbl.visible = true

func mouse_exited():
	continue_lbl.visible=false

func ran_pos() -> Vector2:
	var current_pos = self.position
	var offsety = randf_range(-100,200)
	var offsetx = randf_range(-160,160)
	var new_pos = current_pos+ Vector2(offsetx,offsety)
	return new_pos

func self_position():
	self.position = ran_pos()
