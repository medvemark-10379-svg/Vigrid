extends HSlider
@export var busname: String = "Music"
var index_bus:int

# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	index_bus = AudioServer.get_bus_index(busname)	
	value = 0.3
	db_to_linear(AudioServer.get_bus_volume_db(index_bus))

func _on_value_changed(new_value: float) -> void:
	AudioServer.set_bus_volume_db(index_bus, linear_to_db(new_value))
	AudioServer.set_bus_mute(index_bus,value == 0)
