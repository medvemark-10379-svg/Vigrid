extends CharacterBody2D

@onready var sprite: Sprite2D = $sprite


const SPEED = 300.0
const JUMP_VELOCITY = -400.0

var grab_offset
var grabbed = false

func create(texture):
	sprite.texture = texture




func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor() and grabbed == false :
		velocity += get_gravity() * delta
	move_and_slide()


func _on_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.is_pressed():
		grab_offset = global_position - get_global_mouse_position()
		teszt1()

func _input(event: InputEvent) -> void:
	if Input.is_action_just_released("mouseactions"):
		grabbed = false


func teszt1():
	grabbed = true
	MouseState.currentitem = self
