class_name interact extends Node


#Check
func Check(Type: String, Victim):
	var callable = Callable(self, Type)
	callable.call(Victim)

#deckcheck

#Attack
func Attack(Victim):
	get_tree().call_group(Victim, "Hurt")
#Defence
func Buff():
	print("Buff")

#Item

#God
