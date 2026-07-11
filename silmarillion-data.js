// Content model for the Silmarillion Reading Companion.
// Edit freely — the component renders whatever is here.
//
// Each entry: { id, partId, label, title, blocks: [...] }
// Block kinds:
//   { kind: 'prose',     h?, body }
//   { kind: 'list',      h?, ordered?, items: [{ lead?, text }] }
//   { kind: 'questions', h?, items: [ 'question text', ... ] }

window.SILM_PARTS = [
  { id: 'intro',      title: 'Getting Started' },
  { id: 'opening',    title: 'The Opening Books' },
  { id: 'quenta',     title: 'Quenta Silmarillion' },
  { id: 'later',      title: 'The Later Ages' },
  { id: 'appendix',   title: 'Appendix' },
];

window.SILM_DATA = [
  // ---------------------------------------------------------------- INTRO
  {
    id: 'before',
    partId: 'intro',
    label: 'Orientation',
    title: 'Before You Start',
    blocks: [
      {
        kind: 'prose',
        h: 'How the book is structured',
        body: 'The Silmarillion is really five works in one volume:',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          { lead: 'Ainulindalë', text: ' — the creation myth (very short)' },
          { lead: 'Valaquenta', text: ' — a "who\u2019s who" of the gods (very short)' },
          { lead: 'Quenta Silmarillion', text: ' — the main event: 24 chapters on the history of the Silmarils' },
          { lead: 'Akallabêth', text: ' — the fall of Númenor (Second Age)' },
          { lead: 'Of the Rings of Power and the Third Age', text: ' — the bridge to The Lord of the Rings' },
        ],
      },
      {
        kind: 'list',
        h: 'Reading tips that actually help',
        items: [
          { lead: 'Use the index and maps constantly.', text: ' Every name is listed in the back with a short identification. Nobody remembers all the names on a first read.' },
          { lead: 'Don\u2019t stall in the first five chapters.', text: ' The opening reads like scripture, and chapters 3–5 are the densest genealogy in the book. The narrative engine starts at Chapter 6 (Fëanor).' },
          { lead: 'Track houses, not individuals.', text: ' Three Elvish houses matter most: Fëanor\u2019s, Fingolfin\u2019s, and Finarfin\u2019s. When a new "Fin-" name appears, ask "whose kid is this?"' },
          { lead: 'Watch for the Oath and the Doom', text: ' (both in Ch. 9). When something goes catastrophically wrong later, one of these is almost always why.' },
          { lead: 'It\u2019s okay to skim geography.', text: ' Chapter 14 is a map in prose. Keep the Beleriand map open and move on.' },
          { lead: 'Multiple names are normal.', text: ' Quenya and Sindarin names coexist; the index disambiguates.' },
        ],
      },
      {
        kind: 'list',
        h: 'Context for your discussions — three lenses',
        items: [
          { lead: 'Tolkien\u2019s worldview:', text: ' He called his central idea sub-creation — humans, made in the image of a Maker, are themselves makers, and art is a form of worship that goes wrong when the maker hoards or dominates. Pair this with his ideal of Northern courage (fighting on without hope of victory) and his lifelong hostility to industrial "the Machine."' },
          { lead: 'The historical window:', text: ' Tolkien began this mythology in 1916–17 as a signals officer recovering from the Somme, where most of his closest friends died. He was a devout Catholic in a largely Protestant England, orphaned young, and a professional philologist who believed language and myth were inseparable. The book was published posthumously in 1977 by his son Christopher.' },
          { lead: 'The theology:', text: ' Tolkien insisted his work was "fundamentally religious and Catholic" but by design contains almost no visible religion. Key doctrines to watch: evil as privation (Augustine); providence working through and despite evil (Boethius); the Fall replayed at every scale; pride as the root sin; death as gift rather than punishment; and grace arriving as eucatastrophe, the sudden unearned turn.' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- OPENING
  {
    id: 'ainulindale',
    partId: 'opening',
    label: 'Ainulindalë',
    title: 'The Music of the Ainur',
    blocks: [
      { kind: 'prose', h: 'What it is', body: 'The creation of the universe through music. Eru Ilúvatar (God) and the Ainur (angelic spirits) sing the world into being; Melkor, mightiest of the Ainur, weaves discord into the Music. Eru declares that even the discord will ultimately serve a design Melkor cannot see.' },
      { kind: 'prose', h: 'Keep track of', body: 'Eru Ilúvatar; Melkor; Manwë (chief of the faithful Ainur); Ulmo (lord of waters).' },
      { kind: 'prose', h: 'Watch for', body: 'The book\u2019s central theological claim — evil cannot create, only corrupt, and providence folds rebellion into a greater harmony. Nearly every tragedy that follows replays this in miniature.' },
      { kind: 'questions', items: [
        'Compare the Ainulindalë to Genesis 1 and to John 1 ("In the beginning was the Word"). Tolkien makes creation musical and gives angelic beings a participatory role. What does he gain theologically by having Eru create through the Ainur rather than alone? Is this orthodox, or is Tolkien flirting with something else?',
        'Melkor\u2019s fall begins with impatience and the desire to create things of his own — before any act of cruelty. How does this map onto Augustine\u2019s account of pride as the primal sin, and onto Lucifer in Isaiah 14? Why does Tolkien locate the origin of evil in a creative impulse?',
        'Eru tells Melkor that no theme can be played that does not have its "uttermost source" in Him. Is this a felix culpa (the "fortunate fall") — evil permitted because it produces greater good? Does that comfort you or trouble you? Would it have comforted a man who\u2019d just survived the Somme?',
      ] },
      { kind: 'prose', h: 'Difficulty', body: 'Abstract but short. Read slowly once; you don\u2019t need to master it.' },
    ],
  },
  {
    id: 'valaquenta',
    partId: 'opening',
    label: 'Valaquenta',
    title: 'Account of the Valar',
    blocks: [
      { kind: 'prose', h: 'What it is', body: 'A reference chapter, not a story: the fourteen Valar and the Maiar (lesser spirits).' },
      { kind: 'list', h: 'Keep track of (the plot-relevant ones)', items: [
        { lead: 'Manwë', text: ' — king of the Valar, lord of air' },
        { lead: 'Varda / Elbereth', text: ' — queen of stars, most revered by the Elves' },
        { lead: 'Ulmo', text: ' — lord of waters; never abandons Middle-earth. Remember him.' },
        { lead: 'Aulë', text: ' — the smith' },
        { lead: 'Yavanna', text: ' — growing things; Aulë\u2019s spouse' },
        { lead: 'Mandos (Námo)', text: ' — keeper of the dead, speaker of dooms' },
        { lead: 'Oromë', text: ' — the huntsman who finds the Elves' },
        { lead: 'Melkor', text: ' — soon renamed Morgoth' },
        { lead: 'Among the Maiar:', text: ' Sauron, Melkor\u2019s chief lieutenant, and the Balrogs' },
      ] },
      { kind: 'questions', items: [
        'The Valar look polytheistic — a pantheon with domains like sea, air, and harvest — yet they are created beings under one God. How does Tolkien\u2019s arrangement let him keep pagan mythic beauty inside a monotheistic frame? Is this a baptism of Norse/Greek myth, and does it succeed?',
        'Elves revere Varda/Elbereth above all, calling on her name in darkness (as characters do in LotR). Tolkien acknowledged Marian influence here. What does the presence of a venerated queenly intercessor — but not a goddess — tell you about the specifically Catholic texture of his imagination?',
        'Notice that Sauron begins in the household of Aulë the maker, as does Saruman. Why does Tolkien keep sourcing his devils from among the craftsmen? What was a man watching mechanized warfare in 1916 saying about technology and the will to order?',
      ] },
      { kind: 'prose', h: 'Difficulty', body: 'Feels like homework. Skim, dog-ear, refer back.' },
    ],
  },

  // ---------------------------------------------------------------- QUENTA
  {
    id: 'ch1', partId: 'quenta', label: 'Chapter 1', title: 'Of the Beginning of Days',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The Valar shape the world; Melkor mars everything they make. The Valar retreat to Aman in the far West and light it with the Two Trees, Telperion and Laurelin, leaving Middle-earth in twilight. Elves are revealed as immortal and bound to the world; Men are mortal, given death as Ilúvatar\u2019s "Gift."' },
      { kind: 'prose', h: 'Keep track of', body: 'The Two Trees — the most important object-concept in the book. The geographic split: Aman/Valinor (blessed West) vs. Middle-earth (marred East).' },
      { kind: 'questions', items: [
        'Death as a gift — Men alone leave the world, and even the Valar will envy them. Tolkien inverts the intuitive reading of Genesis (death as curse). How does this square with Christian hope in resurrection? Is Tolkien saying something Paul says in 1 Corinthians 15, or something stranger?',
        'The Valar respond to Melkor\u2019s marring by withdrawing to a walled paradise. Is this retreat prudence or abdication? Discuss as a mirror of the Church\u2019s (or England\u2019s) temptations toward fortress and withdrawal in Tolkien\u2019s era of world wars.',
        'Light in this book is physical, moral, and sacramental all at once. Where else in Christian tradition does light function this way (Easter Vigil, "Light from Light" in the Creed)? Start a running list of what happens to light across the book.',
      ] },
    ],
  },
  {
    id: 'ch2', partId: 'quenta', label: 'Chapter 2', title: 'Of Aulë and Yavanna',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Aulë secretly makes the Dwarves out of impatience; Eru confronts him, Aulë repents and offers to destroy them, and Eru adopts them. Yavanna is granted protectors for her forests (the Eagles; the Ents are foreshadowed).' },
      { kind: 'prose', h: 'Keep track of', body: 'Durin, first of the Dwarf fathers.' },
      { kind: 'questions', items: [
        'Aulë does almost exactly what Melkor did — creating beings of his own will — yet is forgiven. What makes the difference? (Watch his response when caught.) How is this a parable of repentance, and where\u2019s the line between sub-creation as worship and sub-creation as usurpation?',
        'Aulë raises his hammer to destroy his own children in obedience — and the Dwarves flinch. Compare Abraham and Isaac. What is Tolkien saying about obedience, and about the moment a creation becomes truly other than its maker?',
        'Yavanna\u2019s grief that trees cannot defend themselves against axes is pure Tolkien. Connect it to his rural childhood at Sarehole being swallowed by industrial Birmingham. Is his environmentalism nostalgic, theological, or both?',
      ] },
    ],
  },
  {
    id: 'ch3', partId: 'quenta', label: 'Chapter 3', title: 'Of the Coming of the Elves and the Captivity of Melkor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The Elves awaken under starlight at Cuiviénen. The Valar war on Melkor to protect them and imprison him for three ages. The Elves are summoned to Valinor; they split into those who go (Eldar) and refusers (Avari). Orcs are revealed as Elves captured and corrupted by Melkor.' },
      { kind: 'prose', h: 'Keep track of', body: 'The three ambassador-kings: Ingwë (Vanyar), Finwë (Noldor — the important one), Elwë/Thingol (Teleri).' },
      { kind: 'questions', items: [
        'Orcs as corrupted Elves is the doctrine of privation made flesh: Melkor cannot make, only mock. Yet it troubled Tolkien for the rest of his life — can a rational creature be born irredeemable? Discuss whether the Orc problem is a flaw in the theology or an honest wound in it.',
        'The summons to Valinor divides Elvenkind forever. Is the Valar\u2019s summons a type of religious calling — and is refusing it sin, or legitimate love of the created world? Note that the narrative never quite condemns the refusers.',
        'Melkor gets parole after his sentence. The Valar extend mercy to the irredeemable and it will cost everyone dearly. Is mercy that enables evil still virtuous? How would Tolkien\u2019s answer differ from a utilitarian\u2019s? (Keep this question — it returns with Gollum in LotR.)',
      ] },
      { kind: 'prose', h: 'Difficulty', body: 'The name-flood begins. Focus on Finwë and Elwë.' },
    ],
  },
  {
    id: 'ch4', partId: 'quenta', label: 'Chapter 4', title: 'Of Thingol and Melian',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Two pages, hugely important. Elwë (Thingol) meets the Maia Melian, falls into an enchanted trance, and stays in Middle-earth as king of the Sindar. Their daughter is Lúthien, most beautiful of all the Children of Ilúvatar.' },
      { kind: 'questions', items: [
        'An angelic being weds an incarnate one out of love, binding herself to the world\u2019s grief. Where does Christian theology use marriage across an infinite gap as its central image (Christ and the Church, Ephesians 5)? What does Melian give up, and what does that prefigure?',
        'Tolkien wrote myth as a philologist: a chance meeting in a starlit wood generates whole languages and kingdoms. Discuss his claim that stories exist to give languages a world to live in — how does that reverse the way we usually think fiction works?',
      ] },
    ],
  },
  {
    id: 'ch5', partId: 'quenta', label: 'Chapter 5', title: 'Of Eldamar and the Princes of the Eldalië',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The Elves settle in Aman. Finwë\u2019s family is laid out: Fëanor by his first wife (who, uniquely among Elves, chooses to die after his birth), and Fingolfin and Finarfin by his second.' },
      { kind: 'list', h: 'Keep track of — THE family tree, the one genealogy worth learning', items: [
        { lead: 'Fëanor', text: ' → 7 sons (remember Maedhros and Maglor)' },
        { lead: 'Fingolfin', text: ' → Fingon, Turgon, Aredhel' },
        { lead: 'Finarfin', text: ' → Finrod (Felagund), Galadriel' },
      ] },
      { kind: 'questions', items: [
        'Fëanor\u2019s story begins with a mother\u2019s death and a remarriage he never accepts. Tolkien lost his own mother at twelve and regarded her as a martyr for the faith. How does grief-turned-grievance shape Fëanor before he does anything wrong? Where is the line between wound and sin?',
        'In paradise, in the direct light of the Trees, resentment still takes root. What is Tolkien saying against utopianism — the belief that the right environment perfects people? How might this reflect a Catholic doctrine of the Fall against the progressive optimism of the pre-1914 world he watched die?',
      ] },
    ],
  },
  {
    id: 'ch6', partId: 'quenta', label: 'Chapter 6', title: 'Of Fëanor and the Unchaining of Melkor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Fëanor, greatest craftsman ever to live, creates the Silmarils — three jewels holding the living light of the Two Trees. Melkor, released on parole, spreads lies among the Noldor and covets the jewels. Fëanor begins to love the Silmarils with a greedy love, locking them away.' },
      { kind: 'questions', items: [
        'The Silmarils are genuinely holy — Fëanor\u2019s masterwork is an act of sub-creation at its highest. His sin is not making them but possessing them. Trace the theology: when does devotion to a good thing become idolatry? What\u2019s the difference between Fëanor and the Vala who hallowed the jewels?',
        'Melkor never touches anyone in this chapter; he only talks. Lies about the Valar\u2019s motives, about Men, about inheritance. Consider the serpent in Genesis 3 and propaganda in Tolkien\u2019s lifetime. Why is the father of lies more dangerous free and plausible than armed?',
        'Tolkien the artist buried his own life\u2019s work (this very mythology) in drawers for decades, endlessly revising, reluctant to release it. Is Fëanor a self-portrait of the artist\u2019s possessiveness? Does knowing the book was published only by his son after his death change how you read this chapter?',
      ] },
    ],
  },
  {
    id: 'ch7', partId: 'quenta', label: 'Chapter 7', title: 'Of the Silmarils and the Unrest of the Noldor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Melkor\u2019s whisper-campaign works: Fëanor draws a sword on his half-brother Fingolfin and is exiled from Tirion. Finwë goes with him. Melkor\u2019s deceit is exposed and he vanishes. The Silmarils are hallowed by Varda: no evil or mortal flesh may touch them unburned.' },
      { kind: 'questions', items: [
        'The Valar punish Fëanor\u2019s violence but cannot un-poison the Noldor\u2019s hearts. Discuss the limits of law against sin — why can external authority restrain but not heal? Where does the book locate the thing that can heal (watch for it in later chapters)?',
        'The hallowing of the Silmarils makes them a moral litmus test: holiness that burns the unholy. Compare the Ark of the Covenant (2 Samuel 6) or receiving the Eucharist "unworthily" (1 Corinthians 11). Why does Tolkien want sanctity to be dangerous?',
      ] },
    ],
  },
  {
    id: 'ch8', partId: 'quenta', label: 'Chapter 8', title: 'Of the Darkening of Valinor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Melkor allies with Ungoliant, a primordial spider-horror of insatiable void, and together they destroy the Two Trees. The light of paradise dies.' },
      { kind: 'questions', items: [
        'Ungoliant is not Melkor\u2019s servant — she is appetite itself, an un-light that consumes even him nearly to destruction. Evil here fragments and devours its own allies. How does this dramatize Augustine\u2019s idea that evil is ultimately self-consuming nothingness rather than a rival power (contra Manichaean dualism)?',
        'The death of the Trees is the book\u2019s first irreversible loss: the Valar can make the Sun and Moon later, but never that light again, except in the Silmarils. Tolkien\u2019s whole legendarium is elegiac — history as "the long defeat." How might a man who lost his generation\u2019s light at the Somme in 1916 come to write loss as permanent rather than recoverable? Is this despair, or something Christian hope can contain?',
      ] },
    ],
  },
  {
    id: 'ch9', partId: 'quenta', label: 'Chapter 9', title: 'Of the Flight of the Noldor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The pivotal chapter of the book. Melkor kills Finwë, steals the Silmarils, and flees to Middle-earth; Fëanor names him Morgoth ("Black Foe of the World"). Fëanor and his seven sons swear the terrible Oath — pursuing with vengeance anyone who withholds a Silmaril — and lead the Noldor in revolt from the Valar. At Alqualondë, Fëanor\u2019s host slaughters fellow Elves for their ships: the first Kinslaying. Mandos pronounces the Doom of the Noldor: treason, sorrow, and ruin will dog everything they do. Fëanor burns the ships, abandoning Fingolfin\u2019s host to cross the murderous Ice on foot.' },
      { kind: 'prose', h: 'Keep track of', body: 'The Oath and the Doom — the twin engines of every catastrophe for the next 500 pages. Note who kills at Alqualondë and who doesn\u2019t; note who crosses the Ice.' },
      { kind: 'questions', items: [
        'The Oath is sworn by the name of Eru himself, making it unbreakable and damning either way — keep it and do evil, break it and be forsworn. Christ\u2019s teaching is "swear not at all" (Matthew 5:34). Discuss the Oath as the anatomy of sin: a free act that destroys freedom. Can any later good come to the sons of Fëanor while the Oath stands?',
        'Is the Doom of Mandos a curse, a prophecy, or simply a description of what the Kinslaying has already set in motion? Wrestle with providence vs. free will here — Boethius argued God\u2019s foreknowledge doesn\u2019t cause our choices. Does the narrative treat the Noldor as fated or as free and warned?',
        'Fëanor\u2019s rebellion has real grievances (his father murdered, his work stolen, the Valar passive) and his speech is magnificent. Tolkien makes the revolt attractive. Why? Discuss how the chapter portrays the seduction of righteous anger — and whether Fingolfin\u2019s choice to follow anyway, out of loyalty and pride, is nobler or just quieter folly.',
        'Historical lens: an entire generation marches out on burning rhetoric to a war of attrition they cannot imagine, and the ships are burned behind them. Tolkien denied allegory but admitted "applicability." What applications to 1914 does this chapter invite?',
      ] },
    ],
  },
  {
    id: 'ch10', partId: 'quenta', label: 'Chapter 10', title: 'Of the Sindar',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Rewind to Middle-earth meanwhile: Thingol and Melian rule Doriath; Melian raises the Girdle, a protective enchantment; Dwarves build Menegroth; the first Orc raids begin.' },
      { kind: 'questions', items: [
        'Doriath is a second walled paradise, guarded by grace (Melian\u2019s Girdle) rather than mountains. The book keeps building sanctuaries. Given what you know of the Doom heading their way, what do you predict the book thinks of sanctuaries? What might Tolkien — whose Shire is another one — believe walls can and cannot keep out?',
      ] },
    ],
  },
  {
    id: 'ch11', partId: 'quenta', label: 'Chapter 11', title: 'Of the Sun and Moon and the Hiding of Valinor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'From the Trees\u2019 last flower and fruit the Valar make the Moon and the Sun. Valinor is sealed. The Sun first rises precisely as Fingolfin\u2019s host, having survived the Ice, marches into Middle-earth.' },
      { kind: 'questions', items: [
        'The Sun and Moon are salvage — lesser lights made from a dead paradise, given not to the faithful but to the rebels\u2019 new world and to Men about to wake. Discuss grace given to the undeserving. Where does the timing of that first sunrise sit on the line between coincidence and providence — and does the book ever distinguish the two?',
        'The Valar respond to catastrophe by hiding paradise completely. Evaluate this decision theologically: is sealing off the holy from the fallen ever what God does in the Christian story — or is the Christian story precisely the opposite motion?',
      ] },
    ],
  },
  {
    id: 'ch12', partId: 'quenta', label: 'Chapter 12', title: 'Of Men',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'A short meditation on the awakening of Men: brief lives, wills free from the Music, death as a gift that Melkor has taught them to fear.' },
      { kind: 'questions', items: [
        'Elves are bound to the world and cannot leave it; Men escape it to a destiny unknown even to the Valar. Tolkien said the real theme of his work was "death and the desire for deathlessness." Which condition do you actually envy by this point in the book — and which does the book want you to envy?',
        'Melkor\u2019s first and greatest victory over Men happens offstage, before they enter the story: he taught them to fear the Gift. The book is strangely silent about what Men did in the East. Why might a Catholic author leave a shadowy, unnarrated Fall of Man in his mythology rather than dramatize it?',
      ] },
      { kind: 'prose', h: 'Difficulty', body: 'Two pages, easy. A breather before the war chapters.' },
    ],
  },
  {
    id: 'ch13', partId: 'quenta', label: 'Chapter 13', title: 'Of the Return of the Noldor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Fëanor\u2019s fury carries him too far: he is slain by Balrogs almost immediately, and his spirit burns his body to ash — the Oath outlives him. Maedhros is captured, hung from a cliff of Thangorodrim, and rescued by his friend Fingon in a daring act that mends (partly) the feud between the houses. Maedhros waives the kingship to Fingolfin. The Noldor besiege Morgoth\u2019s fortress of Angband.' },
      { kind: 'questions', items: [
        'Fëanor, the book\u2019s most gifted being, accomplishes essentially nothing after the Oath except ruin, and dies within pages of arriving. What is Tolkien saying about genius unmoored from humility? Compare the fates the book gives to talent versus faithfulness — start tracking this.',
        'Fingon\u2019s rescue of Maedhros — going alone, singing in the dark, aided by an Eagle of Manwë — is the book\u2019s first real act of grace after the Kinslaying, and heaven visibly assists it. Maedhros responds by giving up power. Discuss forgiveness and restitution here: what does genuine repentance look like in a world where the Oath still stands?',
      ] },
    ],
  },
  {
    id: 'ch14', partId: 'quenta', label: 'Chapter 14', title: 'Of Beleriand and Its Realms',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'A geography chapter: who holds what land during the Siege of Angband.' },
      { kind: 'prose', h: 'Difficulty', body: 'This is the map-in-prose chapter. Read with the map open; absorb the general layout (Doriath in the middle, Gondolin hidden, Morgoth in the north); move on guilt-free.' },
      { kind: 'questions', items: [
        '(A light one for a light chapter.) Tolkien built geography before plot and insisted a believable "secondary world" was a moral achievement — sub-creation honoring the Creator. Does the sheer density of this world-building affect your trust in the story? Is exhaustive world-building an act of love, obsession, or worship?',
      ] },
    ],
  },
  {
    id: 'ch15', partId: 'quenta', label: 'Chapter 15', title: 'Of the Noldor in Beleriand',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Turgon builds the hidden city of Gondolin, guided by Ulmo. In Doriath, Thingol learns the truth about the Kinslaying; the Noldor\u2019s exile-guilt surfaces. Galadriel and Melian speak of the shadow the exiles carry.' },
      { kind: 'questions', items: [
        'The Kinslaying cannot stay hidden: Thingol hears of it, and the ban and bitterness that follow will shape the whole age. Discuss the book\u2019s insistence that concealed sin poisons outward from the concealment. Is confession — sacramental for Tolkien — the missing act the Noldor keep refusing?',
        'Ulmo, the Vala who never abandoned Middle-earth, works through dreams, water, and warnings rather than force. Trace him as the book\u2019s figure of quiet, persistent grace operating inside the fallen world while Valinor stays sealed. Who does Ulmo resemble in the Christian economy — the Spirit? Conscience?',
      ] },
    ],
  },
  {
    id: 'ch16', partId: 'quenta', label: 'Chapter 16', title: 'Of Maeglin',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Aredhel, Turgon\u2019s sister, chafes at Gondolin\u2019s confinement, rides out, and is taken to wife by the dark elf Eöl. Their son Maeglin grows up in shadow. The family\u2019s escape to Gondolin ends with Eöl\u2019s crime and execution — and Maeglin, brilliant and grieving, inside the hidden city, nursing a forbidden love for his cousin Idril.' },
      { kind: 'questions', items: [
        'This is the book\u2019s most domestic evil — possession, control, and a child formed by a loveless marriage. No Morgoth required. Discuss how Tolkien roots large-scale ruin (you\u2019ll see Maeglin again) in private, familial sin. What does this say about his view of the family as the first battlefield of the soul?',
        'Gondolin\u2019s law — none who enter may leave — protects the city and destroys Aredhel. Revisit the sanctuary question from Ch. 10: when does protection become imprisonment? Is there a theology of the cloister (or a critique of it) here?',
      ] },
    ],
  },
  {
    id: 'ch17', partId: 'quenta', label: 'Chapter 17', title: 'Of the Coming of Men into the West',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Men enter Beleriand. Bëor, Haleth, and Hador lead the Three Houses of the Edain; Finrod Felagund befriends them first, teaching them. Men and Elves form their fateful alliance; some Men ask hard questions about the Valar and death that no one can fully answer.' },
      { kind: 'questions', items: [
        'Finrod finds Men singing, and teaches them by music — a deliberate echo of the Ainulindalë. The Edain then choose loyalty to the Elves knowing it means war and short lives spent for others\u2019 causes. Is this the book\u2019s picture of faith: allegiance to a light you did not make and will not live to see triumph?',
        'The Edain are migrants fleeing a darkness in the East they refuse to describe. Tolkien wrote refugees, displaced peoples, and homelessness into the marrow of this book. Connect to the historical window: Europe 1914–1945. What dignity does the narrative insist on giving the displaced?',
      ] },
    ],
  },
  {
    id: 'ch18', partId: 'quenta', label: 'Chapter 18', title: 'Of the Ruin of Beleriand and the Fall of Fingolfin',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Morgoth breaks the Siege in the Dagor Bragollach, the Battle of Sudden Flame. The long defeat begins in earnest. In magnificent despair, Fingolfin rides alone to Angband\u2019s gate and challenges Morgoth to single combat — wounding him seven times before dying under his hammer. Sauron takes the watchtower of Minas Tirith (not that one). The traitor Men appear alongside the faithful.' },
      { kind: 'questions', items: [
        'Fingolfin\u2019s duel is the purest expression of Northern courage — Tolkien\u2019s beloved pagan ideal from Beowulf: defiance without hope of victory. He called it the great contribution of Northern myth, yet also knew despair is a sin in Catholic teaching. Is Fingolfin\u2019s ride heroism or suicide? Can the book hold both the pagan and Christian judgments at once?',
        'Morgoth — a god — is wounded by a creature and afraid to come out, and limps forever after. Evil in this book grows physically weaker as it spends itself into domination and armies. Trace this doctrine (evil\u2019s self-emptying, the parody of kenosis): where does Morgoth\u2019s power keep going, and what does that predict?',
      ] },
    ],
  },
  {
    id: 'ch19', partId: 'quenta', label: 'Chapter 19', title: 'Of Beren and Lúthien',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'THE chapter. The mortal man Beren, last survivor of a ruined house, sees Lúthien dancing in the woods of Doriath. Thingol, scorning him, sets an impossible bride-price: a Silmaril from Morgoth\u2019s own crown. What follows — Finrod\u2019s sacrifice, the duel of songs with Sauron, Lúthien before Morgoth\u2019s throne, the werewolf Carcharoth, the hand and the jewel — is the heart of the entire legendarium. Tolkien had "Lúthien" carved on his wife Edith\u2019s gravestone, and "Beren" later on his own.' },
      { kind: 'questions', items: [
        'Lúthien — the story\u2019s most powerful figure — conquers Sauron and enchants Morgoth not with a sword but with song, and later stands before Mandos himself and moves pity in the ungrieving. Love here is not sentiment; it is the strongest force in creation, stronger than doom. How close is this to 1 Corinthians 13 and the Song of Songs? Why does Tolkien give the Christ-like harrowing role to a woman in love?',
        'Beren\u2019s quest inverts the Oath of Fëanor: both pursue a Silmaril, one for possession, one as a bride-price. Compare grasping and gift. The Silmaril burns Morgoth and Carcharoth but not — watch for it. What is the jewel\u2019s judgment measuring?',
        'The eucatastrophe here is real, but so is the cost: Finrod dies keeping his oath (a good oath — compare Fëanor\u2019s), and the lovers\u2019 victory is bought with death and a mortal choice. Tolkien wrote this in 1917 while watching Edith dance in a woodland clearing, home from the trenches. Discuss the chapter as an act of hope by a man with every reason for despair — and Lúthien\u2019s choice of mortality as the book\u2019s answer to Ch. 12\u2019s question about the Gift.',
      ] },
    ],
  },
  {
    id: 'ch20', partId: 'quenta', label: 'Chapter 20', title: 'Of the Fifth Battle: Nirnaeth Arnoediad',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'United by hope from Beren\u2019s deed, the Elves, Men, and Dwarves launch a grand alliance against Angband — and are annihilated in the Nirnaeth Arnoediad, "Unnumbered Tears," through treachery of Men and the premature spring of the trap. Fingon falls. Húrin of the Edain, captured, defies Morgoth face to face — "Day shall come again" — and is set in a chair on Thangorodrim, cursed to watch his family\u2019s ruin through Morgoth\u2019s eyes.' },
      { kind: 'questions', items: [
        'The best-laid, most united, most hopeful military effort in the book fails catastrophically — undone by treachery within, not strength without. For the Somme veteran writing this, the "big push" that ends in unnumbered tears needs little decoding. Discuss the chapter as WWI grief transfigured into myth — and why myth might carry such grief better than memoir.',
        'Húrin\u2019s defiance and Morgoth\u2019s curse set up the next chapter\u2019s experiment: Morgoth claims he can prove that all of Ilúvatar\u2019s design ends in nothing. The stage is set for the book\u2019s darkest test of providence. Before reading on: do you believe this book will let Morgoth be right?',
      ] },
    ],
  },
  {
    id: 'ch21', partId: 'quenta', label: 'Chapter 21', title: 'Of Túrin Turambar',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The other great tale, and the dark twin of Beren\u2019s. Túrin, son of cursed Húrin, is fostered in Doriath and grows into the mightiest and unluckiest of Men. Pride, haste, and Morgoth\u2019s curse braid together: every refuge he enters falls, everyone who loves him dies, and the dragon Glaurung weaves a final deception around Túrin and his sister that ends in the book\u2019s most devastating scene. Túrin\u2019s black sword speaks once, at the end.' },
      { kind: 'questions', items: [
        'This is Tolkien\u2019s deliberate answer to pagan tragedy — modeled on Kullervo of the Finnish Kalevala and on Oedipus. How much of Túrin\u2019s ruin is Morgoth\u2019s curse and how much is Túrin\u2019s own pride and refusal of counsel? Try to actually adjudicate specific disasters — the book makes it genuinely hard. Is that ambiguity the point?',
        'Túrin renames himself constantly — Neithan, Gorthol, Mormegil, Turambar ("Master of Doom") — fleeing his identity. In a book by a philologist where names are destiny, what does self-renaming signify? Compare the biblical pattern where God renames (Abram, Simon) versus a man renaming himself.',
        'Here is providence\u2019s hardest test case: a good man, a praying mother, real courage — and no rescue, no eucatastrophe, only a hint (in other writings Tolkien gave Túrin a role at the world\u2019s end). Can Christian hope coexist with a story God appears to sit out? Why might Tolkien have needed one unconsoled tragedy in his mythology? Discuss Job.',
      ] },
    ],
  },
  {
    id: 'ch22', partId: 'quenta', label: 'Chapter 22', title: 'Of the Ruin of Doriath',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Húrin, released at last, broken and bitter, unwittingly serves Morgoth\u2019s malice one more time. The Silmaril in Doriath draws destruction: Thingol quarrels with Dwarves over the necklace Nauglamír, and treachery, sack, and the second Kinslaying follow as the sons of Fëanor\u2019s Oath awakens. Melian, bereft, departs the world. The Girdle is gone. A Silmaril escapes with Beren and Lúthien\u2019s granddaughter…' },
      { kind: 'questions', items: [
        'Thingol — who once demanded a Silmaril in contempt and received it by grace — dies possessing it, killed over craftsmanship and pride in a treasury. The jewel\u2019s judgment again: trace how the Silmaril destroys everyone who holds it and blesses those who give it away. What sacrament of Tolkien\u2019s faith turns on exactly this distinction between grasping and offering?',
        'Melian\u2019s departure is the withdrawal of grace made visible: the moment love\u2019s presence leaves, the sanctuary is just trees. Discuss what her exit implies about what the Girdle actually was — and about what actually protects any community.',
      ] },
    ],
  },
  {
    id: 'ch23', partId: 'quenta', label: 'Chapter 23', title: 'Of Tuor and the Fall of Gondolin',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'Ulmo sends Tuor, Húrin\u2019s nephew, as his prophet to Gondolin: abandon the city, the doom is coming. Turgon, loving his creation, refuses. Maeglin, captured and turned, betrays the city\u2019s location for the promise of Idril. Gondolin falls in fire; Glorfindel duels a Balrog above the pass so the refugees — among them Tuor, Idril, and their child Eärendil — escape.' },
      { kind: 'questions', items: [
        'A warning from the god who never gave up on Middle-earth, delivered by a prophet, refused by a king who loves the work of his hands too much to leave it — Gondolin falls like Jerusalem in Jeremiah. Discuss the recurring shape: love of the made thing (city, jewel, kingdom) as the noble sin of this entire book. Where has your own group\u2019s list of "walled paradises" ended up?',
        'This was the first story of the mythology Tolkien ever wrote — begun in 1917 in hospital, invalided home from the Somme, with its machine-dragons of iron and fire crawling over the walls. Read the fall of the city with the trenches in mind. What did it mean for a 25-year-old to answer mechanized war with myth?',
        'Maeglin\u2019s treason completes the arc begun in Ch. 16: a wound of childhood, a coveted woman, a moment of torture, a city\u2019s death. Judas comparisons are easy — but Tolkien shows the formation of a traitor across decades. Does understanding Maeglin\u2019s making change the moral verdict?',
      ] },
    ],
  },
  {
    id: 'ch24', partId: 'quenta', label: 'Chapter 24', title: 'Of the Voyage of Eärendil and the War of Wrath',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The two refugee lines — Gondolin\u2019s and Doriath\u2019s — converge: Eärendil weds Elwing, keeper of the Silmaril. The Oath brings the sons of Fëanor down on the refuge at Sirion: the third Kinslaying. Elwing, jewel-bound, is borne to Eärendil by miracle, and Eärendil sails with the Silmaril to Valinor to plead for both kindreds — the errand no one has dared. The Valar answer: the War of Wrath breaks Morgoth\u2019s power forever, Beleriand sinks, and Morgoth is thrust through the Door of Night. The last two Silmarils meet fates that close the Oath\u2019s ledger with terrible poetry. Eärendil sails the sky, jewel on his brow — a star of hope.' },
      { kind: 'questions', items: [
        'Eärendil is a mediator — half-elven, bearing both kindreds\u2019 blood and their plea, interceding before the Powers at the cost of never returning to the world he saves. Tolkien\u2019s most explicit Christ-figure, and the oldest element of his whole mythology (sparked by the Old English word ēarendel, "radiant morning star" — cf. 2 Peter 1:19). Discuss intercession as the thing that finally works after 500 pages of oaths, wars, and walls failing.',
        'The end of Maedhros and Maglor: the Silmarils, recovered at last, burn the hands that swore for them — the hallowing of Ch. 7 delivering its verdict — and the last sons of Fëanor meet fire and water. Is the Oath\u2019s ending justice, tragedy, or mercy? Could they have been released from it? Discuss what repentance would even have looked like.',
        'The Valar\u2019s pity comes at last, but the rescue destroys the land itself: Beleriand drowns. Salvation and cataclysm arrive together, as in Noah\u2019s flood. Why does Tolkien insist that even eucatastrophe cannot restore what was — that history moves through loss toward a healing beyond history? What does that imply he thinks about nostalgia, including his own?',
      ] },
    ],
  },

  // ---------------------------------------------------------------- LATER
  {
    id: 'akallabeth', partId: 'later', label: 'Akallabêth', title: 'The Downfall of Númenor',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The Second Age. Men faithful in the war are granted the island of Númenor, long life, and one ban: sail not west to the Undying Lands. Over millennia, envy of Elvish immortality corrupts them. Sauron, taken to Númenor as a "prisoner," seduces the last king Ar-Pharazôn into Melkor-worship, human sacrifice, and finally an armada against Valinor itself to seize deathlessness by force. Eru intervenes directly — the only time — and Númenor drowns; the world is bent round. Elendil and the faithful escape to found Gondor and Arnor.' },
      { kind: 'questions', items: [
        'This is Tolkien\u2019s Atlantis, his Babel, and his Eden in one: a single command ("come no further west"), a serpent in the court, and a fall driven by refusal of creaturely limits — specifically, of death. Return to Ch. 1 and 12: the Gift, feared, becomes the engine of damnation. Discuss the Akallabêth as Tolkien\u2019s diagnosis of the modern project — the technological pursuit of deathlessness. What would he say about our own longevity obsessions?',
        'Númenor develops the book\u2019s only organized religion — and it is Satanic: temple, altar, human sacrifice, a priest-king. True worship in Tolkien\u2019s world is nearly invisible (a hallow on a mountaintop, silence before meals). Why might a devout Catholic depict institutional religion only in its demonic form and keep true faith wordless?',
        'Recurring dream: Tolkien suffered all his life from a nightmare of a great wave rolling over green land, which he gave to Faramir and exorcised, he said, by writing this. Discuss myth-making as therapy and as prayer — and Eru\u2019s direct intervention, unique in the legendarium, as the moment the frame of the world itself testifies that some evils exhaust even angelic patience.',
      ] },
    ],
  },
  {
    id: 'rings', partId: 'later', label: 'Rings of Power', title: 'Of the Rings of Power and the Third Age',
    blocks: [
      { kind: 'prose', h: 'What happens', body: 'The bridge to The Lord of the Rings, compressed: Sauron, fair-seeming, teaches the Elven-smiths ring-craft; the Rings of Power and the One are forged; the Last Alliance, Isildur, the long vigil of the Third Age, the Istari (wizards), and the War of the Ring in brief, ending with the ships leaving Middle-earth.' },
      { kind: 'questions', items: [
        'The Rings are Fëanor\u2019s error industrialized: sub-creation turned to preservation — the Elves\u2019 attempt to embalm time, to have Valinor without going there, and Sauron\u2019s to order everything under one will. Trace the family resemblance from Silmarils to Rings: what has been learned, and what refuses to be learned, across the ages?',
        'Reading LotR after the Silmarillion, the trilogy\u2019s Third Age is autumnal: everything in it — Elrond, Galadriel, the very light in the phial Frodo carries — trails this deep history of loss. How does knowing the backstory change the genre of The Lord of the Rings for you: adventure, elegy, or something like liturgy?',
        'Last question for the whole book: Tolkien called history "the long defeat" — with only "samples or glimpses of final victory." Assemble the glimpses your group found: Fingon\u2019s rescue, Lúthien\u2019s song, Eärendil\u2019s star, the unlooked-for turns. Is the Silmarillion a hopeful book? What kind of hope survives a story where everything beautiful falls?',
      ] },
    ],
  },

  // ---------------------------------------------------------------- APPENDIX
  {
    id: 'survival', partId: 'appendix', label: 'Survival Kit', title: 'Appendix: Survival Kit',
    blocks: [
      { kind: 'list', h: 'The name-element cheat sheet', items: [
        { lead: 'Fin-', text: ' = hair (the house of Finwë: Fingolfin, Fingon, Finrod, Finarfin)' },
        { lead: '-wë', text: ' = person/being (Manwë, Finwë, Elwë)' },
        { lead: 'Mor-', text: ' = black/dark (Morgoth, Moria, Mordor)' },
        { lead: 'Gond-', text: ' = stone (Gondolin, Gondor)' },
        { lead: '-(i)el', text: ' = daughter/maiden (Galadriel, Lúthien Tinúviel)' },
        { lead: 'Ea-/Eär-', text: ' = sea (Eärendil)' },
        { lead: 'Tur-', text: ' = mastery, power (Turgon, Túrin Turambar)' },
      ] },
      { kind: 'list', h: 'The five things to hold onto if you hold nothing else', ordered: true, items: [
        { text: 'The Silmarils hold the dead Trees\u2019 light; everyone wants them; holding them destroys you, giving them away saves you.' },
        { text: 'The Oath of Fëanor and the Doom of Mandos (Ch. 9) cause almost everything bad.' },
        { text: 'Three Elf-houses: Fëanor (fire, doom), Fingolfin (valor), Finarfin (wisdom, Galadriel).' },
        { text: 'Two great tales: Beren & Lúthien (love defeats the dark) and Túrin (the dark, for once, is not defeated).' },
        { text: 'One mediator: Eärendil, whose star is the light Frodo carries into Mordor two ages later.' },
      ] },
      { kind: 'list', h: 'One-session book club plan (if you can\u2019t do chapter-by-chapter)', items: [
        { lead: 'Session 1:', text: ' Ainulindalë–Ch. 9 (creation, fall, exile)' },
        { lead: 'Session 2:', text: ' Ch. 10–18 (the kingdoms and the long war)' },
        { lead: 'Session 3:', text: ' Ch. 19–21 (the two great tales)' },
        { lead: 'Session 4:', text: ' Ch. 22–24 + Akallabêth + Rings of Power (ruin, intercession, and the bridge to LotR)' },
      ] },
      { kind: 'prose', body: '"…and yet their ending was not the end." Enjoy the journey — it\u2019s the deepest well in modern fantasy, and everything else is carrying water from it.' },
    ],
  },
];
