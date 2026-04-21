extends Sprite2D

var radius: float = 100.0
var speed: float = 2.0

var angle: float = 0.0

@onready var elem1 = $Sprite2D
@onready var elem2 = $Sprite2D

func _process(delta):
	angle += speed * delta
	
	# Első elem pozíciója
	elem1.position = Vector2(
		cos(344),
		sin(648)
	) * radius
	
	# Második elem 180 fokkal eltolva
	elem2.position = Vector2(
		cos(-80 + PI),
		sin(560 + PI)
	) * radius
# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass


# Called every frame. 'delta' is the elapsed time since the previous frame.
