/**
 * @author Michael Ion
 * @email michael.antonius.ion@gmail.com
 */


var english_dict_name = ["aa", "abaya", "abomasum", "absquatulate", "adscititious", "afreet", "Albertopolis", "alcazar", "amphibology", "amphisbaena", "anfractuous", "anguilliform", "apoptosis", "apple-knocker", "argle-bargle", "Argus-eyed", "argute", "ariel", "aristotle", "aspergillum", "astrobleme", "Attic salt", "autotomy", "badmash", "bandoline", "bardolatry", "Barmecide", "barn burner", "bashment", "bawbee", "benthos", "bergschrund", "bezoar", "bibliopole", "bichon frise", "bilboes", "bindlestiff", "bingle", "blatherskite", "bleeding edge", "blind pig", "bobsy-die", "boffola", "boilover", "borborygmus", "breatharian", "Brobdingnagian", "bruxism", "bumbo", "burnsides", "cacoethes", "callipygian", "callithumpian", "camisado", "canorous", "cantillate", "carphology", "catoptromancy", "cereology", "cerulean", "chad", "chalkdown", "chanticleer", "chiliad", "chump change", "claggy", "clepsydra", "colporteur", "comess", "commensalism", "comminatory", "concinnity", "congius", "conniption", "constellate", "coprolalia", "coriaceous", "couthy", "criticaster", "crore", "crottle", "croze", "cryptozoology", "cudbear", "cupreous", "cyanic", "cybersquatting", "dariole", "deasil", "decubitus", "deedy", "defervescence", "deglutition", "degust", "deipnosophist", "deracinate", "deterge", "didi", "digerati", "dight", "discobolus", "disembogue", "disenthral", "divagate", "divaricate", "donkey engine", "donkeyman", "doryphore", "dotish", "douceur", "draff", "dragoman", "dumbsize", "dwaal", "ecdysiast", "edacious", "effable", "emacity", "emmetropia", "empasm", "ensorcell", "entomophagy", "erf", "ergometer", "erubescent", "e-tailer", "etui", "eucatastrophe", "eurhythmic", "eviternity", "exequies", "exsanguine", "extramundane", "eye candy", "eyewater", "famulus", "fankle", "fipple", "flatline", "flews", "floccinaucinihilipilification", "flocculent", "force-ripe", "forehanded", "frondeur", "fugacious", "funambulist", "furuncle", "fuscous", "futhark", "futz", "gaberlunzie", "gaita", "galligaskins", "gallus", "gasconade", "glabrous", "glaikit", "gnathic", "gobemouche", "goodfella", "guddle", "habile", "hallux", "haruspex", "higgler", "hinky", "hoddy-noddy", "hodiernal", "hoggin", "hongi", "howff", "humdudgeon", "hunt-and-peck", "hwyl", "illywhacker", "incrassate", "incunabula", "ingurgitate", "inspissate", "inunct", "jumbuck", "jumentous", "jungli", "karateka", "keek", "kenspeckle", "kinnikinnick", "kylie", "labarum", "lablab", "lactarium", "liripipe", "loblolly", "lobola", "logomachy", "lollygag", "luculent", "lycanthropy", "macushla", "mallam", "mamaguy", "martlet", "mazel tov", "meacock", "merkin", "merrythought", "mim", "mimsy", "minacious", "minibeast", "misogamy", "mistigris", "mixologist", "mollitious", "momism", "monkey's wedding", "monorchid", "moonraker", "mouse potato", "mudlark", "muktuk", "mumpsimus", "nacarat", "nagware", "nainsook", "natation", "nesh", "netizen", "noctambulist", "noyade", "nugacity", "nympholepsy", "obnubilate", "ogdoad", "omophagy", "omphalos", "onolatry", "o-o", "operose", "opsimath", "orectic", "orrery", "ortanique", "otalgia", "oxter", "paludal", "Pantagruelian", "panurgic", "parapente", "paraph", "patulous", "pavonine", "pedicular", "peely-wally", "peever", "periapt", "petcock", "peterman", "pettitoes", "piacular", "pilgarlic", "pinguid", "piscatorial", "pleurodynia", "plew", "pneumonoul­tramicrosc­opicsilico­volcanocon­iosis", "pogey", "pollex", "pooter", "portolan", "posology", "possident", "pother", "pre-loved", "presenteeism", "previse", "probang", "prosopagnosia", "puddle jumper", "puddysticks", "pyknic", "pyroclastic", "ragtop", "ratite", "rawky", "razzia", "rebirthing", "resurrection man", "retiform", "rhinoplasty", "rubiginous", "rubricate", "rude boy", "rug rat", "rumpot", "sangoma", "sarmie", "saucier", "saudade", "scofflaw", "screenager", "scrippage", "selkie", "serac", "sesquipedalian", "shallop", "shamal", "shavetail", "shippon", "shofar", "skanky", "skelf", "skimmington", "skycap", "snakebitten", "snollygoster", "sockdolager", "solander", "soucouyant", "soul case", "soul catcher", "spaghettification", "spitchcock", "splanchnic", "spurrier", "stercoraceous", "sternutator", "stiction", "strappado", "strigil", "struthious", "studmuffin", "stylite", "subfusc", "submontane", "succuss", "sudd", "suedehead", "sun-grazing", "superbious", "superette", "taniwha", "tappen", "tellurian", "testudo", "thalassic", "thaumatrope", "thirstland", "thrutch", "thurifer", "tiffin", "tigon", "tokoloshe", "toplofty", "transpicuous", "triskaidekaphobia", "triskelion", "tsantsa", "turbary", "ulu", "umbriferous", "uncinate", "uniped", "uroboros", "ustad", "vagarious", "velleity", "verjuice", "vicinal", "vidiot", "vomitous", "wabbit", "waitron", "wakeboarding", "wayzgoose", "winebibber", "wish book", "wittol", "woopie", "wowser", "xenology", "ylem", "zetetic", "zoolatry", "zopissa", "zorro", "Zyrian"];
var english_dict_meaning = ["a kind of volcanic lava that forms jagged masses with a light frothy texture; in an unrelated sense (‘a stream’)aa is the first entry in the Oxford English Dictionary", "a full-length, sleeveless outer garment worn by Arabs", "the fourth stomach of a ruminant, such as a cow or sheep", "to leave somewhere abruptly", "additional", "a powerful jinn or demon in Arabian and Muslim mythology", "a group of museums and other cultural institutions in South Kensington in London, named after Prince Albert", "a Spanish palace or fortress", "a phrase or sentence that is grammatically ambiguous, such as She sees more of her children than her husband", "a mythical serpent with a head at each end", "winding or circuitous", "resembling an eel", "the death of cells which occurs as a normal part of an organism's growth or development", "US informal an ignorant or unsophisticated person", "copious but meaningless talk or writing", "vigilant, referring to Argos, a Greek mythological watchman with a hundred eyes", "shrewd", "a gazelle found in the Middle East and North Africa", "Austral. rhyming slang a bottle", "an implement used for sprinkling holy water in religious ceremonies", "an eroded remnant of a large, ancient crater made by the impact of a meteorite or comet", "refined, incisive wit", "the casting off of a limb or other part of the body by an animal under threat, such as a lizard", "Indian a hooligan", "a sticky preparation used for setting hair", "humorous excessive admiration of Shakespeare (‘the Bard of Avon’)", "illusory or imaginary and therefore disappointing", "N. Amer. a very exciting or dramatic event, especially a sports contest; first used of an exceptionally good hand at bridge.", "W. Indian a large party or dance", "Scottish a coin of low value", "the flora and fauna on the bottom of a sea or lake", "a type of crevasse", "a small hard, solid mass which may form in the stomachs of animals such as goats or sheep", "a person who buys and sells books, especially rare ones", "a breed of toy dog with a fine, curly white coat", "an iron bar with sliding shackles, used to fasten prisoners' ankles", "N. Amer. a tramp", "Austral. informal a collision", "a person who talks at great length without making much sense", "the very forefront of technological development", "N. Amer. informal a place where alcoholic drinks are sold illegally", "a great deal of fuss or trouble", "N. Amer. informal a joke that gets a loud or hearty laugh", "Austral. informal a surprise result in a sporting event", "a rumbling or gurgling noise in the intestines", "a person who believes that it is possible, through meditation, to reach a level of consciousness where one can exist on air alone", "gigantic, from Brobdingnag, a country in Jonathan Swift's Gulliver's Travels", "involuntary and habitual grinding of the teeth", "a drink of rum, sugar, water, and nutmeg", "a moustache in combination with whiskers on the cheeks but no beard on the chin", "an urge to do something inadvisable", "having shapely buttocks", "like a discordant band or a noisy parade", "a military attack carried out at night", "melodious or resonant", "to chant or intone a passage of religious text", "convulsive or involuntary movements made by delirious patients, such as plucking at the bedclothes", "foretelling the future by means of a mirror", "the study or investigation of crop circles", "deep sky blue", "a piece of waste paper produced by punching a hole", "S. African informal a teachers' strike", "a rooster in a fairy tale", "a thousand things or a thousand years", "N. Amer. informal a small or insignificant sum of money", "Brit. dialect sticky or able to form sticky lumps", "an early clock using the flow of water into or out of a container", "a person who peddles books, newspapers, or other writings, especially bibles and religious tracts", "W. Indian a confused or noisy situation", "an association between two organisms in which one benefits from the relationship and the other derives neither harm nor benefit", "threatening, punitive, or vengeful", "elegance or neatness of literary or artistic style", "an ancient Roman liquid measure equal in modern terms to about 6 imperial pints", "(or conniption fit) N. Amer. informal a fit of rage or hysterics", "to gather together in a cluster or group", "the involuntary repetitive use of obscene language", "like leather", "Scottish (of a person) warm and friendly; (of a place) cosy and comfortable", "a minor or incompetent critic", "Indian ten million", "a lichen used in Scotland to make a brownish dye for wool", "a groove at the end of a cask or barrel in which the head is fixed", "the search for and study of animals whose existence is unproven, such as the Loch Ness monster and the yeti", "a purple or violet powder used for dyeing, made from lichen", "of or like copper", "blue; azure", "the practice of registering well-known names as Internet domain names, in the hope of reselling them at a profit", "a small round metal mould used in French cooking for an individual sweet or savoury dish", "clockwise or in the direction of the sun's course", "Medicine the posture of someone who is lying down or lying in bed", "industrious or effective", "Medicine the lessening of a fever", "the action of process of swallowing", "to taste food or drink carefully, so as to fully appreciate it", "a person skilled in the art of dining and dinner-table conversation", "to tear something up by the roots", "to cleanse something thoroughly", "Indian an older sister or female cousin", "people with expertise or professional involvement in information technology", "clothed or equipped; also, to make something ready for use", "a discus thrower in ancient Greece", "to emerge or pour out (used of a river or stream)", "to set someone free from enslavement", "to stray or digress", "to stretch or spread apart", "a small auxiliary engine on a ship", "a man working in a ship's engine room", "a pedantic and annoyingly persistent critic of others", "W. Indian stupid or silly", "a financial inducement or bribe", "dregs or refuse", "an interpreter or professional guide for travellers, especially one in countries in which Arabic, Turkish, or Persian is spoken", "to reduce the staff numbers of a company to such low levels that work can no longer be carried out effectively", "S. African a dreamy, dazed, or absent-minded state", "a striptease performer", "having to do with eating or fond of eating", "able to be described in words. Its opposite, ineffable, is more widely used.", "fondness for buying things", "the normal condition of the eye: perfect vision", "a perfumed powder sprinkled on the body to prevent sweating or for medicinal purposes", "to enchant or fascinate someone", "the eating of insects, especially by people", "S. African a plot of land", "an apparatus which measures energy expended during physical exercise", "reddening or blushing", "a retailer who sells goods on the Internet", "a small ornamental case for holding needles, cosmetics, and other articles", "a happy ending to a story", "in harmonious proportion", "eternal existence or everlasting duration", "funeral rites", "bloodless or anaemic", "outside or beyond the physical world", "visual images that are superficially attractive and entertaining but intellectually undemanding", "W. Indian tears", "an assistant or attendant, especially one working for a magician or scholar", "Scottish to tangle or entangle something", "the mouthpiece of a recorder or similar wind instrument", "to die", "the thick pendulous lips of a bloodhound or similar dog", "the action or habit of estimating something as worthless (a word generally only quoted as a curiosity)", "having or resembling tufts of wool", "West Indian old or mature in certain respects without having developed fully in others", "chiefly N. Amer. prudent or thrifty", "a political rebel", "transient or fleeting", "a tightrope walker", "a boil", "dark and sombre in colour", "the Scandinavian runic alphabet", "to waste time or busy oneself aimlessly", "Scottish archaic a beggar", "a kind of bagpipe played in northern Spain and Portugal", "a type of loose breeches worn in the 16th and 17th centuries", "Scottish bold or daring", "extravagant boasting", "(of skin) hairless or (of a leaf) having no down", "Scottish & N. English stupid, foolish, or thoughtless", "having to do with the jaws", "a gullible or credulous listener", "a gangster, especially a member of a Mafia family", "Scottish to fish with one's hands by groping under the stones or banks of a stream", "deft or skilful", "Anatomy the big toe", "a religious official in ancient Rome who inspected the entrails of sacrificial animals in order to foretell the future", "W. Indian a person who travels from place to place selling small items", "US informal dishonest, suspect, or unreliable", "a foolish person", "of today", "a mixture of sand and gravel, used especially in road-building", "a traditional Maori greeting or salutation made by pressing or touching noses", "Scottish a favourite meeting place or haunt, especially a pub", "an imaginary illness", "using only one or two fingers on a computer keyboard", "a stirring feeling of emotional motivation and energy which is associated with the Welsh people", "Austral. informal a small-time confidence trickster", "thickened in form or consistency", "books printed before 1501", "to swallow something greedily", "to thicken or congeal", "to apply ointment to someone or something", "Austral. informal a sheep", "resembling horse's urine", "Indian uncultured or wild", "a person who performs karate", "Scottish to peep surreptitiously", "Scottish conspicuous or easily recognizable", "a substance consisting of dried sumac leaves and willow or dogwood bark, smoked by North American Indians", "Austral. a boomerang", "a banner or flag bearing symbolic motifs", "a tropical Asian plant of the pea family", "a dairy", "the long dangling tail of a medieval academic hood", "a North American pine tree with very long slender needles", "among southern African peoples, the money or cattle given by a bridegroom's family to the bride's family", "an argument about words", "to spend time in an aimless or lazy way", "(of speech or writing) clearly expressed", "the supernatural transformation of a person into a wolf", "Irish an affectionate form of address", "a learned man or scribe in Nigeria and other parts of Africa", "W. Indian to try to deceive someone by flattering them or telling them lies", "Heraldry a small, swallow-like bird with tufts of feathers in place of legs and feet", "a Jewish expression used to congratulate someone or wish them good luck", "a coward or effeminate person", "an artificial covering of hair for the pubic area", "a bird's wishbone", "Scottish modest or demure in an affected or priggish way", "rather feeble and prim or over-restrained (coined by Lewis Carroll in Through the Looking Glass)", "menacing or threatening", "Brit. informal a small invertebrate animal such as an insect or spider", "the hatred of marriage", "a joker or other extra card played as a wild card in some versions of poker", "N. Amer. informal a person who is skilled at mixing cocktails and other drinks", "luxurious or sensuous", "excessive attachment to or domination by one's mother", "S. African simultaneous rain and sunshine", "having only one testicle", "a native of the county of Wiltshire", "a person who spends large amounts of their leisure or working time on a computer", "a person who scavenges in riverside mud at low tide for anything of value", "the skin and blubber of a whale, eaten by the Inuit people", "a traditional custom or notion that is adhered to although it has been shown to be unreasonable", "a bright orange-red colour", "computer software which is free for a trial period and thereafter frequently reminds the user to pay for it", "a fine, soft cotton fabric, originally made in the Indian subcontinent", "swimming", "Brit. dialect weak, delicate, or feeble", "a habitual or keen user of the Internet", "a sleepwalker", "an execution carried out by drowning", "triviality or frivolity", "passion or rapture aroused in men by beautiful young girls", "to darken, dim, or obscure something", "a group or set of eight", "the eating of raw food, especially meat", "the centre or hub of something", "the worship of donkeys or asses", "an endangered Hawaiian bird, a species of honeyeater", "involving or displaying a lot of effort", "a person who begins to learn or study late in life", "having to do with desire or appetite", "a clockwork model of the solar system, or the sun, earth, and moon", "a cross between an orange and a tangerine", "earache", "Scottish & N. English a person's armpit", "living or occurring in a marshy habitat", "enormous", "able or ready to do anything", "an aerofoil parachute, used for gliding", "a flourish after a signature", "(of the boughs of a tree, for example) spreading", "to do with or resembling a peacock", "to do with lice", "Scottish looking pale and unwell", "Scottish hopscotch", "an item worn as a charm or amulet", "a small valve in a steam engine or boiler, used for drainage or for reducing pressure", "a person who breaks open and robs safes", "pig's trotters, especially as food", "making or requiring atonement", "a bald-headed man, or a person regarded with mild contempt", "resembling fat; oily or greasy", "connected with fishermen or fishing", "severe pain in the muscles between the ribs or in the diaphragm", "a beaver skin", "an invented term said to mean ‘a lung disease caused by inhaling very fine ash and sand dust’, but rarely used except for its curiosity value", "Canadian informal unemployment or welfare benefit", "Anatomy the thumb", "a suction bottle for collecting insects and other small invertebrates", "a book containing sailing directions with hand-drawn charts and descriptions of harbours and coasts", "the branch of medicine concerned with the size and frequency of doses of a medicine or a drug", "a possessor, i.e. a person who owns something", "a commotion or fuss", "second-hand", "the compulsion to spend longer at work than is required or to continue working despite illness", "to foresee or predict an event", "a strip of flexible material with a sponge or tuft at the end, used to remove a foreign body from the throat or to apply medication to it", "an inability to recognize the faces of familiar people, typically as a result of brain damage", "a small, light aircraft which is fast and highly manoeuvrable and used for short trips", "S. African children's word very easy", "a technical description of a stocky physique with a rounded body and head, thickset trunk, and a tendency to fat", "relating to fragments of rock erupted by a volcano", "a convertible car with a soft roof", "(of a bird such as the ostrich or emu) unable to fly because of having a flat breastbone, to which no flight muscles are attached", "foggy, damp, and cold", "a raid carried out by Moors in North Africa", "a form of therapy involving controlled breathing and intended to simulate the trauma of being born", "a person who, in past times, illicitly exhumed corpses from burial grounds and sold them to anatomists for dissection", "resembling a net", "plastic surgery performed on the nose", "rust-coloured", "to add elaborate capital letters (typically red ones) or other decorations to a manuscript", "Jamaican a lawless or rebellious unemployed urban youth who likes ska or reggae music", "N. Amer. a child", "N. Amer. a habitual or heavy drinker", "a traditional healer or witch doctor in southern Africa", "S. African informal a sandwich", "a sauce chef", "a feeling of longing or melancholy that is supposedly characteristic of the Portuguese or Brazilian temperament", "a person who flouts the law", "a person in their teens or twenties who has an aptitude for using computers and the Internet", "one's baggage and personal belongings", "Scottish a mythical sea creature like a seal in water but human on land", "a pinnacle or ridge of ice on the surface of a glacier", "(of a word) having many syllables or (of a piece of writing) using many long words", "a light sailing boat used chiefly for coastal fishing", "a hot, dry north-westerly wind that blows across the Persian Gulf in summer and causes sandstorms", "US military slang a newly commissioned officer, or any inexperienced person", "Brit. dialect a cattle shed", "a ram's-horn trumpet used in Jewish religious ceremonies and, in ancient times, to sound a battle signal", "N. Amer. informal revolting", "Scottish a splinter or sliver of wood", "a kind of procession once undertaken to make an example of a nagging wife or an unfaithful husband", "a porter at an airport", "N. Amer. informal unlucky or doomed to misfortune", "a shrewd or unprincipled person", "US informal a heavy blow", "a protective box made in the form of a book, for holding items such as botanical specimens, maps, and colour plates", "a kind of witch, in eastern Caribbean folklore, who is believed to shed her skin by night and suck the blood of her victims", "N. Amer. & W. Indian the human body", "a hollowed bone tube used by a North American Indian medicine man to keep a sick person's soul safe while they are sick", "the process by which (in some theories) an object would be stretched and ripped apart by gravitational forces on falling into a black hole", "an eel, split and then grilled or fried", "having to do with the the viscera or internal organs, especially those of the abdomen", "a person who makes spurs", "consisting of or resembling dung or faeces", "something that causes sneezing", "the frictional force which hinders an object from being moved while in contact with another", "a punishment or torture in which the victim was hoisted in the air on a rope and then allowed to fall almost to the ground before being stopped with an abrupt jerk", "an instrument with a curved blade used by ancient Greeks and Romans to scrape sweat and dirt from the skin in a hot-air bath or after exercise", "having to do with or resembling an ostrich", "N. Amer. humorous a sexually attractive, muscular man", "a early Christian ascetic who lived standing on top of a pillar", "the dark formal clothing worn for examinations and ceremonial or formal occasions at some universities.", "passing under or through mountains, or situated on the lower slopes of a mountain range", "to shake something vigorously, especially a homeopathic remedy", "an area of floating vegetation that impedes navigation in a stretch of the White Nile", "a youth like a skinhead but with slightly longer hair and smarter clothes", "(of a comet) having an orbit which passes close to the sun", "proud and overbearing", "N. Amer. a small supermarket", "a mythical monster which, according to Maori legend, lives in very deep water", "the plug by which the rectum of a bear is closed during hibernation", "of or inhabiting the earth, or an inhabitant of the earth", "a device used in siege warfare in ancient Rome, consisting of a wheeled screen with an arched roof (literally a ‘tortoise’)", "relating to the sea", "a scientific toy devised in the 19th century. It consisted of a disc with a different picture on each of its two sides: when the disc was rotated rapidly about a diameter, these pictures appeared to combine into one image.", "S. African a desert or large arid area", "N. English a narrow gorge or ravine", "a person carrying a censer, or thurible, of burning incense during religious ceremonies", "chiefly Indian a light meal, especially lunch", "the hybrid off spring of a male tiger and a lioness (the offspring of a male lion and a tigress being a liger)", "in African folklore, a mischievous and lascivious hairy water sprite", "N. Amer. informal haughty and arrogant", "transparent", "extreme superstition about the number thirteen", "a Celtic symbol consisting of three radiating legs or curved lines, such as the emblem of the Isle of Man", "a human head shrunk as a war trophy by the Jivaro people of Ecuador", "the legal right to cut turf or peat for fuel on common ground or on another person's ground", "a short-handled knife with a broad crescent-shaped blade, used by Inuit women.", "shady", "(of a part of the body) having a hooked shape", "a person or animal with only one foot or leg", "a circular symbol depicting a snake (or a dragon) swallowing its tail, intended as an emblem of wholeness or infinity", "Indian an expert or highly skilled person, especially a musician", "erratic and unpredictable in behaviour or direction", "a wish or inclination which is not strong enough to lead one to take action", "a sour juice obtained from crab apples or unripe grapes", "neighbouring or adjacent", "N. Amer. informal a habitual, undiscriminating watcher of television or videotapes", "N. Amer. nauseating or repulsive", "Scottish exhausted or slightly unwell", "N. Amer. a waiter or waitress", "the sport of riding on a short, wide board while being towed behind a motor boat", "an annual summer party and outing that used to be held by a printing house for all its employees", "a heavy drinker", "N. Amer. informal a mail-order catalogue", "a man who knows of and tolerates his wife's infidelity", "an affluent retired person able to pursue an active lifestyle (from the initials of well-off older person)", "chiefly Austral./NZ a puritanical, prudish person or a killjoy", "the scientific study of extraterrestrial phenomena", "(in big bang theory) the primordial matter of the universe", "proceeding by inquiry or investigation", "the worship of animals", "a medicinal preparation made from wax and pitch scraped from the sides of ships", "a South American kind of fox", "a former term for Komi, a language spoken in an area of Russia west of the Urals; at present the last entry in the Oxford English Dictionary"];
var german_dict_name = [];
var german_dict_meaning = [];
var colorSelect = -1;

var dict_name = english_dict_name;
var used_name = [];
var dict_meaning = english_dict_meaning;
//used for randomly determining if light color is body color or not
var colorOrder = Math.floor(Math.random()*2);

function css(selector, property, value) {
    for (var i=0; i<document.styleSheets.length;i++) {//Loop through all styles
        //Try add rule
		console.log(selector+ ' {'+property+':'+value+'}');
        try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}//IE
    }
}


function setRandomStyle() {
	/*There are two colors to set:
	First: Word-Bg
	Second: Body-Background, Description-Bg, NewButton-Bg
	Font color is white*/
	
	//don't change font color
	//[light, dark]
	var values = [['#7D9ABC', '#2C3E50'], //bright blue
				['#4CB646', '#427F3F'], // green
				['#EECD86', '#E18942'], //brown light
				['#E18942', '#B95835'], //brown dark
				['#ACD1E9', '#6D929B'], //ice
				['#FFCC00', '#FF9900'], //light orange
				['#FF9900', '#FF0000'], //dark orange
				['#D91E18', '#96281B'], //dark red
				['#95A5A6', '#6C7A89'], //grey
				['#BE90D4', '#9B59B6'], //purple
				['#F64747', '#DB0A5B'], //pink
				['#F1A9A0', '#E26A6A'], //dark pink
				['#F62459', '#DB0A5B'] //soft pink
				//['#', '#'],
	]
	var selectors = ['html,body', '#newWordButton', '.name', '.desc'];

	//make fix for first, then animate for every following
	var tmp = Math.floor(Math.random()*values.length);
	colorSelect = tmp == colorSelect ? (tmp+1)%values.length : tmp;
	$(selectors[0]).animate({'background-color': values[colorSelect][colorOrder]}, { duration: 200, queue: false });
	//$(selectors[1]).animate({'background-color': values[colorSelect][colorOrder]}, { duration: 200, queue: false });
	$(selectors[2]).animate({'background-color': values[colorSelect][(colorOrder+1)%2]}, { duration: 200, queue: false });
	//$(selectors[3]).animate({'background-color': values[colorSelect][colorOrder]}, { duration: 200, queue: false });
	//css(selectors[3], 'background-color', values[colorSelect][colorOrder]);

}

function main() {
	setRandomStyle();
	fitText(document.getElementById('fittext'), 1.2);
	var names = document.getElementsByClassName("name");
	[].forEach.call(names, addDescription);
	loadNewWord();

}
//TODO: add a whole description of the game

//TODO: REFACTOR A LOT
//gets called to initialize everything
function loadFirst(){}

//gets called to initialize new words and contents
function loadNew() {}

function loadNewWord() {
	/*
	TODO: fly out old divs to the right
	fly new ones from the left
	each new word loading
	*/
	
	var names = document.getElementsByClassName("name");
	for (i = 0; i < names.length; i++) {
		var random_index = Math.floor(Math.random()*dict_name.length);
		used_name[i] = random_index;
		//don't override inserted div
		names[i].innerHTML = dict_name[random_index];
	}
	
	var descs = document.getElementsByClassName("desc");
	for (i = 0; i < descs.length; i++) {
		var d = descs[i];
		if(d.style.display !== "none") {
			$(d).animate({
				height: 'toggle'
			}, loadNewDescs);
		}
	}


}

function loadNewDescs() {
	//TODO: put this in callback function??? better to put all this in new methods
	var descs = document.getElementsByClassName("desc");
	for (i = 0; i < descs.length; i++) {
		var d = descs[i];
		d.innerHTML = dict_meaning[used_name[i]];
	}
}

window.onresize = function(event) {
	var d = document.getElementsByClassName("desc");
	[].forEach.call(d, function(temp){ setSmallerFontSize(temp);});
}

function setSmallerFontSize(obj) {
	obj.style.fontSize = document.getElementById("fittext").style.fontSize.split("px")[0] * 0.65 + "px";
}

function addDescription(name) {
	var desc = document.createElement('div');
	desc.setAttribute('class', 'desc');
	desc.innerHTML = "this is an interesting description!";
	name.parentNode.insertBefore(desc, name.nextSibling);
	
	//make the description font smaller than the fittext font size
	setSmallerFontSize(desc);
	//toggle all the other open descs
	$(name).click(function(){
		var descs = document.getElementsByClassName("desc");
		for (i = 0; i < descs.length; i++) {
			var d = descs[i];
			if(d !== desc && d.style.display !== "none") {
				$(d).animate({
					height: 'toggle'
				});
			}
		}
		$(desc).animate({
            height: 'toggle'
        });

    });
	desc.style.display = "none";
}

function langGer() {changeLang("GER");}
function langEng() {changeLang("ENG");}

function changeLang(lang) {
	var newButtonText;
	switch(lang) {
		case "GER":
			newButtonText = "Klick mich für neue Wörter!";
		break;
		case "ENG":
			newButtonText = "Click me for new words!";
			dict_name = english_dict_name;
			dict_meaning = english_dict_meaning;
		break;
	}
	$('#newWordButton').find("span").animate({opacity:0}, function(){
        $(this).text(newButtonText).animate({opacity:1});  
    });
	loadNewWord();
}

