extends RigidBody2D

@onready var sprite: Sprite2D = $sprite


const SPEED = 300.0
const JUMP_VELOCITY = -400.0

var grab_offset
var grabbed = false
var x
var y

func create(texture):
	sprite.texture = texture
	
	
func _physics_process(delta: float) -> void:
	if grabbed:
		
		var target = get_global_mouse_position() + grab_offset
		var dir = target - global_position
		linear_velocity += dir * 15
		linear_velocity *= 0.5
		
		
		var global_grab_point = to_local(get_global_mouse_position())
		var lir = global_grab_point
		var force = lir * 50
		

		apply_force(force, grab_offset)
		

func _on_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.is_pressed():
		center_of_mass = get_global_mouse_position()
		grab_offset = global_position - get_global_mouse_position()
		teszt1()

func _input(event: InputEvent) -> void:
	if Input.is_action_just_released("mouseactions"):
		grabbed = false
		freeze = false


func teszt1():
	grabbed = true
	MouseState.currentitem = self
