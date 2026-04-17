extends Node2D

var dmg = 1

func Attack():
	get_tree().call_group("Enemys", "hurt", dmg, 1)
	
func Attackbuff():
	dmg += 1
	
