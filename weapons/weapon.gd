extends RigidBody2D

@onready var sprite: Sprite2D = $sprite


const SPEED = 300.0
const JUMP_VELOCITY = -400.0

var grab_offset
var grabbed = false
var x
var y
var modifiers = [] 

func create(texture):
	sprite.texture = texture
	
	
func _physics_process(delta: float) -> void:
	if grabbed:
		var down = Vector2.DOWN
		var tip_direction = transform.y.normalized() 

		var angle_diff = tip_direction.angle_to(down)

		var torque = angle_diff * 200
		
		var target = get_global_mouse_position()
		var grab_global = to_global(grab_offset)
		
		var error = target - grab_global
		
		
		var r = grab_global - global_position
		var tangential_velocity = Vector2(-angular_velocity * r.y, angular_velocity * r.x)
		var point_velocity = linear_velocity + tangential_velocity
		
		
		var force = error * 50 - point_velocity * 10
		
		apply_torque(torque)
		apply_force(force, grab_offset)

func _on_input_event(viewport: Node, event: InputEvent, shape_idx: int) -> void:
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.is_pressed():
		MouseState.usedcard = modifiers
		teszt1()

func _input(event: InputEvent) -> void:
	if Input.is_action_just_released("mouseactions"):
		grabbed = false


func teszt1():
	grabbed = true
	MouseState.currentitem = self
	
	grab_offset = to_local(get_global_mouse_position())
	
	
	linear_velocity = Vector2.ZERO
	angular_velocity = 0.0


func _on_hitbox_area_entered(area: Area2D) -> void:
	if area is Enemy_hitbox:
		queue_free()
