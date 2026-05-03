extends Node2D

@onready var texture_progress_bar: TextureProgressBar = $TextureProgressBar
@onready var timer: Timer = $Timer

var max_value = 100

func _on_timer_timeout():
	texture_progress_bar.value -= 1
	if texture_progress_bar.value == max_value:
		$Timer.stop()
		print(max_value)	
	if texture_progress_bar.value <=max_value:
		texture_progress_bar.value -= 1
		$Timer.start()
func _input(event: InputEvent) -> void:
	if Input.is_action_just_pressed("Attack"):
		texture_progress_bar.value += 15
