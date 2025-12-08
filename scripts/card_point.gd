extends Node2D

@onready var path_2d: Path2D = $Path2D
@onready var attacarea: Area2D = $attacarea


var enemyattacked = false

func _process(delta: float) -> void:
	attacarea.position = path_2d.curve.get_point_position(1)
	if Input.is_action_pressed("mouseactions"):
		var mousPos = get_local_mouse_position() - path_2d.position
		path_2d.curve.set_point_position(0,Vector2(0,0))
		var cutX = mousPos.x/5
		path_2d.curve.set_point_out(0,Vector2(cutX,-cutX))
		
		path_2d.curve.set_point_position(1,mousPos)
		path_2d.curve.set_point_in(1, Vector2(-cutX,-cutX))
	if Input.is_action_just_released("mouseactions") and enemyattacked == true:
		BgScript.enemy_is_attacked = true


func _on_attacarea_area_entered(area: Area2D) -> void:
		enemyattacked = true
		print("true")
		


func _on_attacarea_area_exited(area: Area2D) -> void:
		enemyattacked = false
		print("false")
