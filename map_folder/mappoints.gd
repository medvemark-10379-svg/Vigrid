extends Node2D

const MAP_POINT = preload("uid://btqnmscw0vvnx")


@onready var character: Sprite2D = $Character

var randomeventlist = ["beverted a lába", " elütött egy ló ", "megetted a kenyered", "találtál egy gyanus zacskót"]
var enemylist = ["P0", "P1", "P2", "P3"]
var x_cord = [300,417, 717, 1083, 1500]
var y_cord = [500,333, 500, 750]
var before: Vector2
var map = {}
var nextPointToClick = 0
@onready var moving: AnimationPlayer = $AnimationPlayer
@onready var walking: AnimationPlayer = $AnimationPlayer2

func generateMappoints() -> void: 
	for x in x_cord.size():
		var random = randi_range(0,y_cord.size()-1)
		var map_point = MAP_POINT.instantiate()
		add_child(map_point)
		map_point.global_position = Vector2(x_cord[x],y_cord[random])
		map_point.areajelolo_1 = x
		map[x] = map_point
		if x == 2:
			map_point.fight_icon.texture =  load("res://map_folder/Random_Icon.png")
			var randomevent= randomeventlist.pick_random()
			map_point.mapevent.Event.Description = randomevent
			map_point.checkdictionary("Event")
			randomeventlist.erase(randomevent)
		if x == 4:
			map_point.fight_icon.texture =  load("res://map_folder/Hel_Icon.png")
			map_point.checkdictionary("P4")
		if x == 0:
			map_point.fight_icon.texture =  load("res://map_folder/Campfire_Icon (1).png")
			map_point.checkdictionary("P0")
		else:
			var randomenemy = enemylist.pick_random()
			map_point.mapevent.Enemy.Name = randomenemy
			map_point.checkdictionary(randomenemy)
			enemylist.erase(randomenemy)
		if x == 0:
			map_point.used = true;
		if x != 0:
			var e = Line2D.new()
			add_child(e)
			e.add_point(before)
			e.add_point(map_point.global_position)
			e.width = 5
		before = map_point.global_position
	character.global_position = map[MouseState.CurrentPosition-1].global_position
	character.global_position.y -= 100

func progresson(ID: int):
	if map[ID].areajelolo_1 != nextPointToClick:
		return;
	map[ID].used = true
	nextPointToClick+=1
	map[ID].teszt1()

	
	print(ID)

func animation():
	var anim = moving.get_animation("moving")
	var track_idx = anim.find_track("Character:position", Animation.TYPE_VALUE)
	anim.track_set_key_value(track_idx,0, character.global_position)
	anim.track_set_key_value(track_idx,1, Vector2(map[MouseState.CurrentPosition-1].global_position.x, map[MouseState.CurrentPosition-1].global_position.y-100))
	moving.play("moving")
	walking.play("walking")


func _on_animation_player_animation_finished(anim_name: StringName) -> void:
	if anim_name == "moving":
		get_tree().change_scene_to_file("res://scenes/Main.tscn")
