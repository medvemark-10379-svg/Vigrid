class_name Enemy extends Node2D

const CHARACTER_DATA = preload("uid://dl6m4iaalcd6r")
const MINION = preload("uid://c7naktn4x0j8v")
const MAIN = preload("uid://by5r5wqt6jbad")


@onready var interact: interact = $"../interact"
@onready var character: Node2D = $"../Character"
@onready var card: Strike = $"../Card"
@onready var alert: Sprite2D = $Alert
@onready var action: Sprite2D = $Action
@onready var minioncontainer: Node = $Minioncontainer
@onready var icon: Sprite2D = $Area2D/Icon

var minionplace 


var controllabel
var hp = 40
var maxhp =0

var sid
var actionid 
var Name
var energy 
var minioncounter = 0


var tesztszam = 2
var alert_mode: bool = false
var block: int = 0
var nameclass = "Enemys"
var actionnumber = 0

var enemy = CHARACTER_DATA.get_meta("C1")
var basedic 
var function
var Basic 
var baseid 
var functionid 
var texture

@onready var block_bar: ProgressBar = $ProgressBar
@onready var hp_bar: ProgressBar = $ProgressBar2

@onready var animation_player: AnimationPlayer = $AnimationPlayer
@onready var interactive: interact = $"../interact"

func activateaction():
	basedic = enemy.P0.Actions[actionnumber]
	function = basedic.Kind
	Basic = basedic.Basic
	baseid = basedic.id
	if baseid == 1:
		functionid = 1
	else:
		functionid= Interact.playercharacters[randi_range(0,Interact.playercharacters.size()-1)]
	get_tree().call_group("Enemys", function, Basic, functionid)
	actionnumber +=1
	if actionnumber == enemy.P0.Actions.size():
		actionnumber = 0
		
	curentaction()
	

func curentaction():
	if baseid == 1:
		action.modulate = Color(0.0, 0.0, 0.847)
	else:
		action.modulate = Color(1.0, 0.0, 0.216)
	
func _process(delta: float) -> void:
	block_bar.value = block
	hp_bar.max_value = maxhp
	hp_bar.value = hp

func _on_mouse_entered() -> void:
	MouseState.checker(2)
	


func _on_mouse_exited() -> void:
	MouseState.checker(0)
	



func _on_area_entered(area: Area2D) -> void:
	if area is weapon_hitbox and MouseState.usedcard != []:
		MouseState.usedcard.append(sid)
		Interact.Check(MouseState.usedcard[1], nameclass, MouseState.usedcard[2])
			
func alert_mode_check(alert_modee: bool):
	alert_mode = alert_modee
	alert.visible = alert_modee
	animation_player.play("alert")
	
func hurt(Damage: int ,id: int):
	if id== sid:
		var blocked = min(block, Damage)
		block -= blocked
	
		var remaining_damage = Damage - blocked
		hp -= remaining_damage
		
		hp = max(hp,0)
		
		if hp <= 0:
			get_parent().get_parent().winlosesceene()
			queue_free()
	
func GainBlock(Block: int, id: int):
	if id== sid:
		block += Block


func create():
	var choosedcharacter
	var basecharacter = CHARACTER_DATA.get_meta("C"+str(sid))
	if sid == 0:
		choosedcharacter = basecharacter[MouseState.Character]
		controllabel = choosedcharacter.controllabel
		Interact.playercharacters.append(sid)
		MouseState.Energy = choosedcharacter.energy
		MouseState.choseddeck = choosedcharacter.UsedDeck
	else: 
		choosedcharacter = basecharacter[MouseState.ChoosedEnemy]
		controllabel = choosedcharacter.controllabel
	actionid = choosedcharacter.ActionId
	maxhp = choosedcharacter.HP
	hp = choosedcharacter.HP
	texture = choosedcharacter.Texture
	icon.texture = texture

func pick_Enemy(dictionary: Dictionary) -> Variant:
	var random_key = dictionary.keys().pick_random()
	return dictionary[random_key].ActionId


func action1():
	get_tree().call_group("Enemys", "hurt", 12,Interact.playercharacters[randi_range(0,Interact.playercharacters.size()-1)])


func Summon(Damage: int ,id: int):
	if id == sid:
		minions()

func minions():
	if minioncounter <= 1: 
		minionplace = [$Minion1,$Minion2]
		var minion = MINION.instantiate()
		minioncontainer.add_child(minion)
		minion.global_position = minionplace[minioncounter].global_position 
		if minioncounter <1:
			minioncounter += 1
