class_name interact extends Node

var cardpile = []
var pluscardpile = []
var playercharacters = []
var enemys = []

#Check
func Check(Type: String, Victim: String, base: int):
	var callable = Callable(self, Type)
	callable.call(Victim, base)

#deckcheck

#Attack
func Attack(Victim: String, damage, basedamage = 0):
	get_tree().call_group(Victim, "hurt", damage+basedamage, MouseState.usedcard[4])
#Defence
func Block(Victim: String, block, baseblock= 0):
	get_tree().call_group(Victim, "GainBlock", block+baseblock, MouseState.usedcard[4])

#Buff
func Buff(Victim: String, buff, basebuff = 0 ):
	get_tree().call_group("Minions", "Attackbuff")

#Summon
func Summon(Victim: String, summoned):
	get_tree().call_group(Victim, "Summon", summoned, MouseState.usedcard[4])

#Item



#God

#Card Used
