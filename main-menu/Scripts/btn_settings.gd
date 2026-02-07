extends TextureButton
@onready var settings_lbl = $lbl_Settings
@onready var settings_Panel = $SettingsPanel

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	settings_lbl.visible = false
	settings_Panel.visible = false
	
	connect("mouse_entered", mouse_entered)
	connect("mouse_exited", mouse_exited)
	
	
func mouse_entered():
	settings_lbl.visible = true
	 

func mouse_exited():
	settings_lbl.visible=false

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	pass


func _on_pressed() -> void:
	settings_Panel.visible = true
	
	
