class_name interact extends Node


#Check
func Check(Type: String, Victim: String, base: int):
	var callable = Callable(self, Type)
	callable.call(Victim, base)

#deckcheck

#Attack
func Attack(Victim: String, damage):
	print(Victim)
	get_tree().call_group(Victim, "hurt", damage)
#Defence
func Buff():
	print("Buff")

#Item

#God

#Card Used
