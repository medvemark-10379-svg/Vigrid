extends TextureButton

@onready var exit_lbl = $lbl_Exit
func _ready() -> void:
	exit_lbl.visible = false
	connect("mouse_entered", mouse_entered)
	connect("mouse_exited", mouse_exited)
	self_position()

func mouse_entered():
	exit_lbl.visible = true

func mouse_exited():
	exit_lbl.visible=false


func _on_pressed() -> void:
	get_tree().quit()

func ran_pos() -> Vector2:
	var current_pos = self.position
	var offsety = randf_range(-100,200)
	var offsetx = randf_range(-150,100)
	var new_pos = current_pos+ Vector2(offsetx,offsety)
	return new_pos

func self_position():
	self.position = ran_pos()
