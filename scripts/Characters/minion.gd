extends Node2D

var dmg = 1

func Attack():
	print(dmg)
	get_tree().call_group("Enemys", "hurt", dmg, 1)
	
func Attackbuff():
	dmg += 1
	
