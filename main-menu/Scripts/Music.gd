extends HSlider
@export var busname: String = "Music"
@export var grabber_x_offset: int = 10
@onready var grabber_tex = preload("res://src/Slider_Icon.png")
var index_bus:int

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	index_bus = AudioServer.get_bus_index(busname)	
	value = 0.3
	db_to_linear(AudioServer.get_bus_volume_db(index_bus))
	value_changed.connect(_on_value_changed)

func _on_value_changed(new_value: float) -> void:
	AudioServer.set_bus_volume_db(index_bus, linear_to_db(new_value))
	AudioServer.set_bus_mute(index_bus,value == 0)
	queue_redraw()

func _draw():
	var style = get_theme_stylebox("slider")
	var grabber_w = grabber_tex.get_width()
	var grabber_offset = get_theme_constant("grabber_offset")
	var area_width = size.x - style.get_margin(SIDE_LEFT) - style.get_margin(SIDE_RIGHT)
	var ratio = (value - min_value) / (max_value - min_value)
	var x_pos = style.get_margin(SIDE_LEFT) + (ratio * area_width) - (grabber_w / 2.0) + grabber_offset
	var y_pos = (size.y - grabber_tex.get_height()) / 0.44
	draw_texture(grabber_tex, Vector2(round(x_pos), round(y_pos)))
