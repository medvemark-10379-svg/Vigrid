class_name interact extends Node


#Check
func Check(Type: String, Victim: String, base: int):
	var callable = Callable(self, Type)
	callable.call(Victim, base)

#deckcheck

#Attack
func Attack(Victim: String, damage):
	get_tree().call_group(Victim, "hurt", damage)
#Defence
func Block(Victim: String, block,):
	get_tree().call_group(Victim, "GainBlock", block)

#Item


#God

#Card Used
