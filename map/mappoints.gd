extends Node2D
const MAP_POINT = preload("uid://cha8orfguleo0")

var randomeventlist = ["beverted a lába", " elütött egy ló ", "megetted a kenyered", "találtál egy gyanus zacskót"]
var enemylist = ["farkas", "létra", "kacsa","Ferenc"]
var x_cord = [250, 430,650,900]
var y_cord = [200,300,450]
var before: Vector2
var map = {}
var nextPointToClick = 0

func generateMappoints() -> void: 
	for x in x_cord.size():
		var random = randi_range(0,y_cord.size()-1)
		var map_point = MAP_POINT.instantiate()
		add_child(map_point)
		map_point.global_position = Vector2(x_cord[x],y_cord[random])
		map_point.areajelolo_1 = x
		map[x] = map_point
		if x == 1:
			map_point.fight_icon.texture =  load("res://Random_Icon.png")
			var randomevent= randomeventlist.pick_random()
			map_point.mapevent.Event.Description = randomevent
			map_point.checkdictionary("Event")
			randomeventlist.erase(randomevent)
		else:
			var randomenemy = enemylist.pick_random()
			map_point.mapevent.Enemy.Name = randomenemy
			enemylist.erase(randomenemy)
			map_point.checkdictionary("Enemy")
		if x == 0:
			map_point.used = true;
		if x != 0:
			var e = Line2D.new()
			add_child(e)
			e.add_point(before)
			e.add_point(map_point.global_position)
			e.width = 5
		before = map_point.global_position
	print(map)

func progresson(ID: int):
	if map[ID].areajelolo_1 != nextPointToClick:
		return;
	map[ID].used = true
	nextPointToClick+=1
	map[ID].teszt1()

	
	print(ID)
