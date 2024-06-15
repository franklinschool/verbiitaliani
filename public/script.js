let cards = {
    // (A) PROPERTIES
    data : null, // flashcards data array
    cNow : null, // current flashcard
    cMode : null, // current mode - "v"iew or "m"anage
    hScr : null, // html screens
    hCard : null, // html card wrapper
  
    // (B) INIT APP
    init : () => {
      // (B1) RESTORE CARDS FROM LOCALSTORAGE
      cards.data = localStorage.getItem("cards");
      if (cards.data == null) { cards.data = [
        ["fare","to do or make"],
        ["dire","to say"],
        ["potere","can or to be able to"],
        ["volere","to want"],
        ["sapere","to know"],
        ["stare","to stay"],
        ["dovere","to must or to have to"],
        ["vedere","to see"],
        ["andare","to go"],
        ["venire","to come"],
        ["dare","to give"],
        ["parlare","to speak"],
        ["trovare","to find"],
        ["lasciare","to let go or to leave"],
        ["guardare","to watch"],
        ["pensare","to think"],
        ["passare","to pass to move or to hand"],
        ["portare","to bring"],
        ["tornare","to come back"],
        ["sembrare","to seem or to look like"],
        ["chiamare","to call"],
        ["cercare","to look for or to search for"],
        ["entrare","to enter"],
        ["ricordare","to remember"],
        ["aspettare","to wait"],
        ["arrivare","to arrive"],
        ["diventare","to become"],
        ["mangiare","to eat"],
        ["camminare","to walk"],
        ["toccare","to touch"],
        ["considerare","to consider"],
        ["mandare","to send"],
        ["domandare","to ask"],
        ["ascoltare","to listen"],
        ["osservare","to observe"],
        ["spiegare","to explain"],
        ["mostrare","to show"],
        ["significare","to mean"],
        ["desiderare","to wish"],
        ["giudicare","to judge"],
        ["avvicinare","to move closer or to approach"],
        ["ordinare","to organize or to tidy up or to order"],
        ["invitare","to invite"],
        ["sbagliare","to make a mistake or to miss or to be mistaken"],
        ["prendere","to take"],
        ["mettere","to put"],
        ["credere","to believe"],
        ["vivere","to live"],
        ["parere","to seem or to appear or to believe or to think"],
        ["tenere","to keep or to grip"],
        ["rispondere","to answer"],
        ["chiudere","to close or to end"],
        ["bere","to drink"],
        ["raggiungere","to reach"],
        ["comprendere","to understand or to comprehend"],
        ["scendere","to get off or to go down"],
        ["compiere","to accomplish or to complete or to carry out"],
        ["muovere","to move"],
        ["conoscere","to know"],
        ["chiedere","to ask"],
        ["stringere","to tighten"],
        ["decidere","to decide"],
        ["ricevere","to receive"],
        ["permettere","to allow"],
        ["raccogliere","to pick up"],
        ["ottenere","to obtain"],
        ["ammettere","to admit"],
        ["vendere","to sell"],
        ["distinguere","to distinguish or to recognize"],
        ["offendere","to offend"],
        ["rimettere","to replace or to refer"],
        ["rompere","to break"],
        ["godere","to enjoy"],
        ["imporre","to impose"],
        ["produrre","to produce"],
        ["discutere","to discuss or to argue"],
        ["prevedere","to foresee"],
        ["spegnere","to turn off or to put out"],
        ["sentire","to feel or to hear"],
        ["capire","to understand"],
        ["morire","to die"],
        ["aprire","to open"],
        ["uscire","to go out"],
        ["riuscire","to succeed"],
        ["finire","to end or to finish"],
        ["scrivere","to write"],
        ["dormire","to sleep"],
        ["avvenire","to happen or to take place"],
        ["offrire","to offer"],
        ["fuggire","to flee"],
        ["riferire","to refer"],
        ["impedire","to prevent or to forbid"],
        ["divertire","to entertain or to amuse"],
        ["fornire","to provide"],
        ["riempire","to fill"],
        ["scoprire","to discover"],
        ["partire","to leave or to depart"],
        ["unire","to unite"],
        ["colpire","to hit"],
        ["casa","house or home"],
        ["paese","country or town"],
        ["mondo","world"],
        ["città","city"],
        ["strada","road"],
        ["piazza","square"],
        ["sala","room"],
        ["ufficio","office"],
        ["zona","zone"],
        ["isola","island"],
        ["anno","year"],
        ["giorno","day"],
        ["volta","time as an occasion"],
        ["tempo","time"],
        ["ora","hour"],
        ["momento","moment"],
        ["notte","night"],
        ["sera","evening"],
        ["mese","month"],
        ["periodo","period or interval"],
        ["ieri","yesterday"],
        ["oggi","today"],
        ["domani","tomorrow"],
        ["minuto","minute"],
        ["uomo","man"],
        ["donna","woman"],
        ["signore/a","sir or woman"],
        ["padre","father"],
        ["figlio/a","son or daughter"],
        ["persona","person"],
        ["gente","people"],
        ["amico/a","friend"],
        ["famiglia","family"],
        ["nemico/a","enemy"],
        ["sorella","sister"],
        ["acqua","water"],
        ["aria","air"],
        ["mare","sea"],
        ["luce","light"],
        ["sole","sun"],
        ["albero","tree"],
        ["fiore","flower"],
        ["natura","nature"],
        ["fuoco","fire"],
        ["campagna","(the) country"],
        ["vita","life"],
        ["mano","hand"],
        ["occhio","eye"],
        ["parte","part"],
        ["voce","voice"],
        ["piede","foot"],
        ["testa","head"],
        ["mente","mind"],
        ["bocca","mouth"],
        ["gamba","leg"],
        ["braccio","arm"],
        ["modo","manner or way"],
        ["parola","word"],
        ["punto","dot or period or moment"],
        ["lavoro","job or work"],
        ["stato","state"],
        ["caso","case or coincidence"],
        ["guerra","war"],
        ["nome","name"],
        ["fatto","fact"],
        ["amore","love"],
        ["storia","story or history"],
        ["forza","strength"],
        ["ragione","reason"],
        ["via","street or road"],
        ["capo","boss or head"],
        ["specie","species or kind"],
        ["governo","government"],
        ["senso","sense"],
        ["opera","work or opera"],
        ["prodotto","product"],
        ["festa","party"],
        ["gioco","game"],
        ["prova","test or trial"],
        ["misura","measure"],
        ["posizione","position"],
        ["successo","success"],
        ["vista","sight"],
        ["libertà","freedom"],
        ["risultato","result"],
        ["importanza","importance"],
        ["dubbio","doubt"],
        ["ricerca","research"],
        ["figura","figure or image"],
        ["questione","matter or issue"],
        ["pena","pain"],
        ["motivo","motive"],
        ["esperienza","experience"],
        ["ricordo","memory or souvenir"],
        ["politica","politics"],
        ["processo","process"],
        ["vino","wine"],
        ["porta","door"],
        ["sud","south"],
        ["sogno","dream"],
        ["cane","dog"],
        ["movimento","movement"],
        ["occasione","occasion"],
        ["prezzo","price"],
        ["causa","cause"],
        ["sviluppo","development"],
        ["fame","hunger"],
        ["sete","thirst"],
        ["niente","nothing"],
        ["qualcosa","something"],
        ["aiuto","help"],
        ["errore","mistake"],
        ["domanda","question"],
        ["risposta","answer"],
        ["macchina","car"],
        ["aereo","plane"],
        ["tutto/a","all"],
        ["poco/a","little"],
        ["alcuno/a","not any or some"],
        ["ogni","each"],
        ["qualsiasi","any"],
        ["qualche","some or a few"],
        ["altro/a","other or different"],
        ["uno/a","one"],
        ["due","two"],
        ["tre","three"],
        ["quattro","four"],
        ["cinque","five"],
        ["sei","six"],
        ["sette","seven"],
        ["otto","eight"],
        ["nove","nine"],
        ["dieci","ten"],
        ["undici","eleven"],
        ["dodici","twelve"],
        ["tredici","thirteen"],
        ["quattordici","fourteen"],
        ["quindici","fifteen"],
        ["sedici","sixteen"],
        ["diciassette","seventeen"],
        ["diciotto","eighteen"],
        ["diciannove","nineteen"],
        ["venti","twenti"],
        ["trenta","thirty"],
        ["quaranta","fourty"],
        ["cinquanta","fifty"],
        ["sessanta","sixty"],
        ["settanta","seventy"],
        ["ottanta","eighty"],
        ["novanta","ninety"],
        ["cento","hundred or a hundred"],
        ["mille","thousand or a thousand"],
        ["millione","million"],
        ["milliardo","billion"],
        ["primo/a","first"],
        ["secondo/a","second"],
        ["terzo/a","third"],
        ["quarto/a","fourth"],
        ["quinto/a","fifth"],
        ["sesto/a","sixth"],
        ["ottavo","eighth"],
        ["nono","ninth"],
        ["decimo","tenth"],
        ["centesimo","hundredth"],
        ["millesimo","thousandth"],
        ["grande","big"],
        ["stesso/a","same"],
        ["bello/a","beautiful or gorgeous"],
        ["nuovo/a","new"],
        ["certo/a","sure or certain"],
        ["vero/a","true"],
        ["buono/a","good"],
        ["italiano/a","Italian"],
        ["vecchio/a","old"],
        ["piccolo/a","small"],
        ["giovane","young"],
        ["alto/a","tall"],
        ["diverso/a","different"],
        ["lungo/a","long"],
        ["povero/a","poor"],
        ["maggiore","greater or elder or older"],
        ["possibile","possible"],
        ["caro/a","expensive or dear"],
        ["pieno/a","full"],
        ["nero/a","black"],
        ["particolare","specific or unique"],
        ["bianco/a","white"],
        ["attuale","current"],
        ["latino/a","Latin"],
        ["impossibile","impossible"],
        ["sereno/a","serene or sunny"],
        ["puro/a","pure"],
        ["normale","normal"],
        ["perfetto/a","perfect"],
        ["caratteristico/a","characteristic"],
        ["russo/a","Russian"],
        ["continuo/a","continuous"],
        ["stupido/a","stupid"],
        ["estremo/a","extreme"],
        ["grigio/a","gray"],
        ["reale","real"],
        ["interessante","interesting"],
        ["medesimo/a","same"],
        ["religioso/a","religious"],
        ["ampio/a","wide"],
        ["biondo/a","blonde"],
        ["ufficiale","official"],
        ["attento","attentive or alert"],
        ["enorme","enormous"],
        ["sottile","thin"],
        ["triste","sad"],
        ["minimo","smallest or slightest or minimal"],
        ["privato/a","private"],
        ["rapido/a","fast"],
        ["diretto/a","direct"],
        ["veramente","truly or really or actually"],
        ["francamente","frankly"],
        ["esattamente","exactly"],
        ["sinceramente","sincerely"],
        ["profondamente","deeply or profoundly"],
        ["certamente","certainly"],
        ["improvvisamente","suddenly"],
        ["chiaramente","clearly"],
        ["direttamente","directly"],
        ["raramente","rarely"],
        ["altamente","highly"],
        ["specialmente","especially"],
        ["particolarmente","particularly"],
        ["talmente","so much or to such an extent"],
        ["cordialmente","cordially"],
        ["abitualmente","usually"],
        ["finalmente","finally"],
        ["probabilmente","probably"],
        ["eventualmente","possibly"],
        ["fuori","outside"],
        ["dentro","inside"],
        ["sotto","under or below"],
        ["davanti","in front"],
        ["dietro","behind or back"],
        ["qui","here"],
        ["qua","here"],
        ["lì","there"],
        ["là","there"],
        ["via","away"],
        ["lontano","far"],
        ["vicino","close"],
        ["più","more"],
        ["meno","less"],
        ["solo","only"],
        ["tanto","more or very much"],
        ["quasi","almost"],
        ["poco","little"],
        ["parecchio","quite a lot or much"],
        ["abbastanza","quite or enough"],
        ["almeno","at least"],
        ["circa","about or around"],
        ["per nulla","at all"],
        ["poi","then"],
        ["adesso","now"],
        ["sempre","always or forever"],
        ["mai","never or never"],
        ["prima","before"],
        ["subito","immediately"],
        ["dopo","after"],
        ["durante","during"],
        ["ancora","again or still"],
        ["presto","soon or early or rapidly"],
        ["già","before or already"],
        ["bene/ben","well"],
        ["male","bad"],
        ["forte","heavily"],
        ["piano","slowly or quietly"],
        ["appena","just or only"],
        ["insieme","together"],
        ["volentieri","gladly or willingly"],
        ["meglio","better"],
        ["peggio","worse"],
        ["pure","even or also or too"],
        ["forse","maybe"],
        ["piuttosto","instead or rather"],
        ["inoltre","moreover"],
        ["oltretutto","besides"],
        ["mi","myself"],
        ["ti","yourself"],
        ["si","himself/herself/itself/yourself (formal)"],
        ["ci","ourselves"],
        ["vi","yourselves"],
        ["si","themselves"],
        ["e","and"],
        ["anche","as well or also or even"],
        ["dunque","so"],
        ["allora","so or therefore"],
        ["però","but or yet or however"],
        ["ma","but"],
        ["perché","because"],
        ["mentre","while or whereas"],
        ["contro","against"],
        ["invece","instead"],
        ["o","or"],
        ["né","neither or nor"],
        ["cioè","that is (to say) or namely"],
        ["anzi","instead or actually or rather"],
        ["quindi","therefore"],
        ["così","thus"],
        ["perciò","so or for this reason"],
        ["finché","as long as"],
        ["nonostante","although or even though"],
        ["a meno che or a meno che non","unless"],
        ["tra","between"],
        ["fra","among"],
        ["di","of or from"],
        ["a","at/in/on"],
        ["da/dal/dalla","from/to"],
        ["in","at/in/to/into"],
        ["su","on/up/over"],
        ["per","for"],
        ["con","with"],
        ["senza","without"],
        ["chi","who"],
        ["che","what"],
        ["dove","where"],
        ["quando","when"],
        ["come","how"],
        ["perché","why"],
        ["quale (quali)","which"],
        ["sì","yes"],
        ["no","no"], 
        ["toh","here, have it or look"],
        ["peccato","what a shame"],
        ["dai","come on"],
        ["ciao","hello and goodbye"],
        ["ecco","here or there"],
        ["del","some (standard masculine singular version)"],
        ["dello","some (masculine singular version)"],
        ["della","some (feminine singular version in front of consonants)"],
        ["dell'","some (feminine and masculine singular version in front of vowels)"],
        ["dei'","some (masculine plural version)"],
        ["degli'","some (masculine plural version)"],
        ["delle","some (feminine plural version)"]
        ["accogliere","to welcome"],
        ["affrettarsi","to hurry"],
        ["ammettere","to admit"],
        ["apparecchiare","to set"],
        ["colpire","to hit"],
        ["commuovere","to affect"],
        ["digerire","to digest"],
        ["dirigere","to direct"],
        ["implicare","to implicate"],
        ["invadere","to invade"],
        ["prevalere","to prevail"],
        ["rivolgersi","to turn"],
        ["svenire","to faint"],
        ["toccare","to touch"],
        ["tradurre","to translate"],
        ["calmarsi","to calm"],
        ["compiacere","to satisfy"],
        ["gridare","to shout"],
        ["impiegare","to employ"],
        ["istruire","to instruct"],
        ["meritare","to deserve"],
        ["misurare","to measure"],
        ["muovere","to move"],
        ["raggiungere","to reach"],
        ["rimproverare","to reproach"],
        ["ripetere","to repeat"],
        ["riuscire","to succeed"],
        ["sospendere","to suspend"],
        ["spedire","to send"],
        ["tentare","to attempt"],
        ["avvolgere","to wrap"],
        ["concedere","to concede"],
        ["fingere","to fake"],
        ["infliggere","to inflict"],
        ["lamentarsi","to complain"],
        ["mantenere","to maintain"],
        ["medicare","to medicate"],
        ["nutrire","to feed"],
        ["ottenere","to obtain"],
        ["persuadere","to persuade"],
        ["promettere","to promise"],
        ["reggere","to support"],
        ["restituire","to restore"],
        ["rincrescere","to regret"],
        ["sposare","to marry"],
        ["abbandonare","to abandon"],
        ["abbronzare","to tan"],
        ["abituarsi","to get"],
        ["afferrare","to seize"],
        ["assumere","to assume"],
        ["comprare","to buy"],
        ["friggere","to fry"],
        ["gestire","to manage"],
        ["guadagnare","to earn"],
        ["piovere","to rain"],
        ["ridurre","to reduce"],
        ["ritenere","to retain"],
        ["salvare","to save"],
        ["urlare","to shout"],
        ["aggiungere","to add"],
        ["alludere","to allude"],
        ["ballare","to dance"],
        ["comportarsi","to behave"],
        ["coprire","to cover"],
        ["descrivere","to describe"],
        ["dipendere","to depend"],
        ["garantire","to guarantee"],
        ["illudere","to deceive"],
        ["intendere","to intend"],
        ["liquidare","to liquidate"],
        ["pretendere","to demand"],
        ["salutare","to greet"],
        ["sottrarre","to subtract"],
        ["variare","to vary"],
        ["annoiare","to annoy"],
        ["correggere","to correct"],
        ["eleggere","to elect"],
        ["fallire","to fail"],
        ["fermarsi","to stop"],
        ["firmare","to sign"],
        ["includere","to include"],
        ["obbligare","to obligate"],
        ["omettere","to omit"],
        ["pesare","to weigh"],
        ["produrre","to produce"],
        ["rassegnarsi","to resign"],
        ["scrivere","to write"],
        ["spargere","to spread"],
        ["votare","to vote"],
        ["accendere","to light"],
        ["assistere","to assist"],
        ["causare","to cause"],
        ["celebrare","to celebrate"],
        ["comporre","to compose"],
        ["contenere","to contain"],
        ["divertirsi","to enjoy"],
        ["esprimere","to express"],
        ["inquinare","to pollute"],
        ["lottare","to struggle"],
        ["negoziare","to negotiate"],
        ["spendere","to spend"],
        ["suonare","to play"],
        ["temere","to fear"],
        ["udire","to hear"],
        ["alzare","to raise"],
        ["chiedere","to ask"],
        ["depositare","to deposit"],
        ["difendere","to defend"],
        ["impersonare","to impersonate"],
        ["incontrare","to meet"],
        ["interrompere","to interrupt"],
        ["legare","to tie"],
        ["limitare","to limit"],
        ["nuotare","to swim"],
        ["occupare","to occupy"],
        ["rispettare","to respect"],
        ["tornare","to come"],
        ["turbare","to upset"],
        ["valere","to be"],
        ["ardere","to burn"],
        ["bloccare","to block"],
        ["camminare","to walk"],
        ["condurre","to lead"],
        ["distrarre","to distract"],
        ["scomodare","to bother"],
        ["lanciare","to fling"],
        ["mostrare","to show"],
        ["navigare","to navigate"],
        ["negare","to deny"],
        ["operare","to operate"],
        ["predire","to predict"],
        ["annegare","to drown"],
        ["stendere","to spread"],
        ["suggerire","to suggest"],
        ["dettare","to dictate"],
        ["funzionare","to function"],
        ["girare","to turn"],
        ["giurare","to swear"],
        ["gustare","to taste"],
        ["lodare","to praise"],
        ["mangiare","to eat"],
        ["modificare","to modify"],
        ["parlare","to talk"],
        ["piangere","to cry"],
        ["rendere","to render"],
        ["resistere","to resist"],
        ["stringere","to tighten"],
        ["togliere","to take"],
        ["trasferire","to transfer"],
        ["attribuire","to attribute"],
        ["buttarsi","to throw"],
        ["chiamare","to call"],
        ["convincere","to convince"],
        ["cuocere","to cook"],
        ["distruggere","to destroy"],
        ["festeggiare","to party"],
        ["indicare","to indicate"],
        ["organizzare","to organise"],
        ["parere","to seem"],
        ["penetrare","to penetrate"],
        ["promuovere","to promote"],
        ["ridire","to resay"],
        ["supporre","to suppose"],
        ["uscire","to go out"],
        ["abbassare","to lower"],
        ["corrispondere","to correspond"],
        ["fidarsi","to trust"],
        ["fuggire","to escape"],
        ["imprimere","to impress"],
        ["informare","to inform"],
        ["insistere","to insist"],
        ["intervenire","to intervene"],
        ["notificare","to notify"],
        ["odiare","to hate"],
        ["partecipare","to participate"],
        ["permettere","to permit"],
        ["stabilire","to establish"],
        ["zittire","to shut"],
        ["accadere","to happen"],
        ["cedere","to give up or surrender"],
        ["costruire","to build"],
        ["esaminare","to examine"],
        ["mandare","to send"],
        ["nuocere","to harm"],
        ["preferire","to prefer"],
        ["recitare","to recite"],
        ["scoprire","to discover"],
        ["seguire","to follow"],
        ["singhiozzare","to sob"],
        ["sorridere","to smile"],
        ["spiegare","to explain"],
        ["spingere","to push"],
        ["torcere","to twist"],
        ["angolare","to slant"],
        ["consumare","to consume"],
        ["contraddire","to contradict"],
        ["definire","to define"],
        ["elevare","to elevate"],
        ["generare","to generate"],
        ["lusingare","to flatter"],
        ["prestare","to lend"],
        ["prevenire","to prevent"],
        ["soffrire","to suffer"],
        ["trascinare","to drag"],
        ["ubbidire","to obey"],
        ["usare","to use"],
        ["zappare","to hoe"],
        ["zoppicare","to limp"],
        ["aderire","to adhere"],
        ["chiudere","to close"],
        ["esibire","to exhibit"],
        ["estendere","to extend"],
        ["mutare","to mutate"],
        ["onorare","to honor"],
        ["oscurare","to obscure"],
        ["percuotere","to strike"],
        ["sbarcare","to disembark"],
        ["scendere","to get down"],
        ["sottomettere","to subdue"],
        ["tacere","to be quiet"],
        ["umiliare","to humiliate"],
        ["verificare","to verify"],
        ["volgere","to turn"],
        ["cancellare","to cancel"],
        ["comunicare","to communicate"],
        ["cucire","to sew"],
        ["distinguere","to distinguish"],
        ["finire","to finish"],
        ["fumare","to smoke"],
        ["nevicare","to snow"],
        ["passare","to pass"],
        ["premere","to press"],
        ["regolare","to regulate"],
        ["riflettere","to reflect  (light, image / ponder)"],
        ["rimanere","to remain"],
        ["soddisfare","to satisfy"],
        ["abbracciare","to hug"],
        ["abusare","to abuse"],
        ["asciugare","to dry"],
        ["disarmare","to disarm"],
        ["governare","to govern"],
        ["liberare","to liberate"],
        ["macchiare","to stain"],
        ["offrire","to offer"],
        ["pendere","to hang"],
        ["prendere","to take"],
        ["ragionare","to reason"],
        ["redigere","to edit"],
        ["sorgere","to rise"],
        ["sorprendere","to surprise"],
        ["tremare","to tremble"],
        ["accompagnare","to accompany"],
        ["cogliere","to pick"],
        ["deliberare","to deliberate"],
        ["gettare","to throw"],
        ["giocare","to play"],
        ["glorificare","to glorify"],
        ["impaurire","to frighten"],
        ["impazzire","to go"],
        ["opporre","to oppose"],
        ["porgere","to offer"],
        ["riscaldare","to heat"],
        ["scusare","to excuse"],
        ["separare","to separate"],
        ["trarre","to draw"],
        ["vedere","to see"],
        ["arrabbiarsi","to get"],
        ["bruciarsi","to burn"],
        ["diventare","to become"],
        ["immergere","to immerse"],
        ["leggere","to read"],
        ["mascherare","to mask"],
        ["notare","to note"],
        ["pensare","to think"],
        ["porre","to place or to ask"],
        ["provvedere","to provide"],
        ["riassumere","to resume"],
        ["rinnovare","to renew"],
        ["scambiare","to exchange"],
        ["sedere","to sit"],
        ["spandere","to spread"],
        ["ammirare","to admire"],
        ["arrestare","to arrest"],
        ["attendere","to await"],
        ["avvisare","to advise"],
        ["comprendere","to comprise"],
        ["consistere","to consist"],
        ["desiderare","to desire"],
        ["eliminare","to eliminate"],
        ["introdurre","to introduce"],
        ["ostinarsi","to persist"],
        ["presentare","to present"],
        ["ricevere","to receive"],
        ["rodere","to gnaw"],
        ["scuotere","to shake"],
        ["tendere","to stretch"],
        ["appartenere","to belong"],
        ["arrivare","to arrive"],
        ["cascare","to fall"],
        ["commettere","to commit"],
        ["decidere","to decide"],
        ["diffondere","to diffuse"],
        ["dissolvere","to dissolve"],
        ["fissare","to fix"],
        ["proibire","to prohibit"],
        ["pungere","to sting"],
        ["rifiutare","to refuse"],
        ["scegliere","to choose"],
        ["tirare","to pull"],
        ["vagabondare","to wander"],
        ["accorgersi","to realise"],
        ["anticipare","to anticipate"],
        ["arrostire","to roast"],
        ["determinare","to determine"],
        ["disgustare","to disgust"],
        ["emettere","to emit"],
        ["facilitare","to facilitate"],
        ["godere","to enjoy"],
        ["moderare","to moderate"],
        ["opprimere","to oppress"],
        ["ringraziare","to thank"],
        ["svanire","to vanish"],
        ["trascorrere","to spend"],
        ["vendere","to sell"],
        ["vietare","to forbid"],
        ["annoiarsi","to be bored"],
        ["bere","to drink"],
        ["convertire","to convert"],
        ["dimostrare","to demonstrate"],
        ["dolere","to suffer"],
        ["escludere","to exclude"],
        ["giudicare","to judge"],
        ["nominare","to name"],
        ["portare","to bring"],
        ["proporre","to propose"],
        ["raccontare","to recount"],
        ["rappresentare","to represent"],
        ["ungere","to smear"],
        ["vantarsi","to boast"],
        ["visitare","to visit"],
        ["baciare","to kiss"],
        ["contendere","to contend"],
        ["discutere","to discuss"],
        ["disfare","to undo"],
        ["esasperare","to exasperate"],
        ["esaurire","to exhaust"],
        ["fondere","to melt"],
        ["noleggiare","to rent"],
        ["osare","to dare"],
        ["pagare","to pay"],
        ["ridere","to laugh"],
        ["risolvere","to resolve"],
        ["servire","to serve"],
        ["trasmettere","to transmit"],
        ["unire","to unite"],
        ["affliggere","to afflict"],
        ["calcolare","to calculate"],
        ["corrompere","to corrupt"],
        ["dimenticare","to forget"],
        ["discorrere","to talk"],
        ["emergere","to emerge"],
        ["imporre","to impose"],
        ["inferire","to infer"],
        ["maledire","to curse"],
        ["possedere","to possess"],
        ["punire","to punish"],
        ["riconoscere","to recognise"],
        ["rifare","to do again"],
        ["svolgere","to unfold"],
        ["tingere","to dye"],
        ["affermare","to affirm"],
        ["andarsene","to go away or leave"],
        ["bussare","to knock"],
        ["cominciare","to commence"],
        ["confondere","to confuse"],
        ["esagerare","to exaggerate"],
        ["esistere","to exist"],
        ["falsificare","to falsify"],
        ["giungere","to arrive"],
        ["lavorare","to work"],
        ["maltrattare","to mistreat"],
        ["piacere","to like"],
        ["proteggere","to protect"],
        ["riunire","to reunite"],
        ["sapere","to know"],
        ["adorare","to adore"],
        ["aizzare","to incite"],
        ["apparire","to appear"],
        ["apprendere","to learn"],
        ["avvedersi","to notice"],
        ["bollire","to boil"],
        ["concludere","to conclude"],
        ["costringere","to force"],
        ["detestare","to detest"],
        ["dire","to say"],
        ["ferire","to wound"],
        ["imbucare","to post"],
        ["osservare","to observe"],
        ["prevedere","to foresee"],
        ["spegnere","to switch"],
        ["assaggiare","to taste"],
        ["assalire","to assail"],
        ["benedire","to bless"],
        ["discendere","to descend"],
        ["dormire","to sleep"],
        ["offendere","to offend"],
        ["patire","to endure"],
        ["piegare","to fold"],
        ["pronunciare","to pronounce"],
        ["raccomandare","to recommend"],
        ["snodare","to unknot"],
        ["sostenere","to sustain"],
        ["tenere","to keep"],
        ["tradire","to betray"],
        ["versare","to pour"],
        ["abitare","to live"],
        ["conoscere","to know"],
        ["correre","to run"],
        ["disperare","to despair"],
        ["essere","to be"],
        ["fare","to do"],
        ["guarire","to heal"],
        ["imparare","to learn"],
        ["nascere","to be born"],
        ["passeggiare","to walk"],
        ["preparare","to prepare"],
        ["ritornare","to go"],
        ["sconfiggere","to defeat"],
        ["sentire","to feel"],
        ["venire","to come"],
        ["aprire","to open"],
        ["cambiare","to change"],
        ["cercare","to look"],
        ["dovere","to have"],
        ["guidare","to drive"],
        ["lavarsi","to wash"],
        ["pettinare","to comb"],
        ["radersi","to shave"],
        ["sbagliare","to make"],
        ["studiare","to study"],
        ["svegliarsi","to wake"],
        ["tagliare","to cut"],
        ["uccidere","to kill"],
        ["vivere","to live"],
        ["volere","to want"],
        ["addormentarsi","to fall asleep"],
        ["avere","to have"],
        ["bocciare","to fail"],
        ["credere","to believe"],
        ["dare","to give"],
        ["entrare","to enter"],
        ["invitare","to invite"],
        ["lavare","to wash"],
        ["mentire","to lie"],
        ["mordere","to bite"],
        ["morire","to die"],
        ["potere","to be able to"],
        ["pulire","to clean"],
        ["scomparire","to disappear"],
        ["volare","to fly"],
        ["andare","to go"],
        ["aiutare","to help"],
        ["aspettare","to wait"],
        ["capire","to understand"],
        ["dipingere","to paint"],
        ["dividere","to divide"],
        ["evitare","to avoid"],
        ["guardare","to look"],
        ["lasciare","to leave"],
        ["nascondere","to hide"],
        ["ordinare","to order"],
        ["partire","to leave"],
        ["rompere","to break"],
        ["saltare","to jump"],
        ["sognare","to dream"],
        ["alzarsi","to get up"],
        ["cadere","to fall"],
        ["cantare","to sing"],
        ["crescere","to grow"],
        ["formare","to form"],
        ["giacere","to lie"],
        ["giustificare","to justify"],
        ["mettere","to put"],
        ["migliorare","to better"],
        ["perdere","to lose"],
        ["rispondere","to respond"],
        ["salire","to get or climb"],
        ["stare","to stay"],
        ["trovare","to find"],
        ["vincere","to win"],
        ["domandare","to demand"],
        ["scherzare","to joke"],
        ["vestirsi","to dress"],
        ["innamorarsi","to fall in love"],
        ["respirare","to breathe"],
        ["ricordare","to remember"],
        ["combinare","to combine"],
        ["provare","to try"],
        ["amare","to love"],
        ["succedere","to happen"],
        ["mancare","to miss"],
        ["significare","to mean"],
        ["ascoltare","to listen"],
        ["fermare","to stop"],
        ["controllare","to control"],
        ["attraversare","to cross"],
        ["bastare","to be enough"],
        ["durare","to last"],
        ["insegnare","to teach"],
        ["costare","to cost"],
        ["spostare","to move"],
        ["disegnare","to design"],
        ["indossare","to wear"],
        ["rubare","to steal"],
        ["pescare","to fish"],
        ["bruciare","to burn"],
        ["riempire","to fill"],
        ["coltivare","to cultivate"],
        ["esplorare","to explore"],
        ["allenare","to train"],
        ["prenotare","to book"],
        ["parcheggiare","to park"],
        ["riparare","to repair"],
        ["cucinare","to cook"],
        ["svuotare","to empty"],
        ["pianificare","to plan"],
        ["dispiacere","to displease"],
        ["sembrare","to seem"],
        ["accettare","to accept"],
        ["cenare","to have dinner"],
        ["continuare","to continue"],
        ["divorziare","to divorce"],
        ["interessare","to affect"],
        ["pranzare","to have lunch"],
        ["regalare","to give"],
        ["sperare","to hope"],
        ["telefonare","to phone"],
        ["viaggiare","to travel"],
        ["riposare","to rest"],
        ["iniziare","to start"],
        ["svegliare","to wake up"],
        ["preoccupare","to worry"],
        ["spaventare","to scare"],
        ["concordare","to agree"],
        ["immaginare","to imagine"],
        ["restare","to stay"],
        ["filmare","to film"],
        ["fotografare","to take"],
        ["ricercare","to research"],
        ["inviare","to send"],
        ["stampare","to print"],
        ["affittare","to rent"],
        ["terminare","to terminate"],
        ["aumentare","to increase"],
        ["diminuire","to diminish"],
        ["peggiorare","to deteriorate"],
        ["sfumare","to fade"],
        ["affogare","to drown"],
        ["avanzare","to advance"],
        ["esplodere","to explode"],
        ["invecchiare","to grow"],
        ["schizzare","to squirt"]
      ]; }
      else { cards.data = JSON.parse(cards.data); }
  
      // (B2) GET HTML ELEMENTS
      cards.hScr = [
        document.getElementById("screenA"),
        document.getElementById("screenB")
      ];
      cards.hCard = document.getElementById("bCard");
    },
  
    // (C) SWTICH HTML SCREEN
    screen : i => { for (let j in cards.hScr) {
      if (i==j) { cards.hScr[j].classList.remove("hide"); }
      else { cards.hScr[j].classList.add("hide"); }
    }},
  
    // (D) UPDATE CURRENT & TOTAL CARDS
    count : () => {
      document.getElementById("bCardNow").innerHTML = cards.data.length==0 ? 0 : cards.cNow + 1;
      document.getElementById("bCardAll").innerHTML = cards.data.length;
    },
    
    // (E) VIEW/MANAGE CARDS
    view : mode => {
      // (E1) VIEW MODE - CONTINUE ONLY WHEN THERE ARE CARDS
      if (mode=="v" && cards.data.length==0) {
        alert("Add some cards first...");
        return;
      }
  
      // (E2) UPDATE FLAGS & CARDS COUNT
      cards.cMode = mode;
      cards.cNow = 0;
      cards.count();
      
      // (E3) SHOW/HIDE "MANAGE CARD" CONTROLS
      if (mode=="v") { for (let i of document.querySelectorAll(".bManage")) {
        i.classList.add("hide");
      }} else { for (let i of document.querySelectorAll(".bManage")) {
        i.classList.remove("hide");
      }}
      
      // (E4) DRAW CARD & SHOW
      cards.draw();
      cards.screen(1);
    },
    
    // (F) DRAW CARD
    draw : () => {
      // (F1) VIEW MODE CARD
      if (cards.cMode=="v") {
        cards.hCard.innerHTML = `<div class="card" onclick="this.classList.toggle('flip')">
        <div class="front">${cards.data[cards.cNow][0]}</div>
        <div class="back">${cards.data[cards.cNow][1]}</div>
        </div>`;
      }
  
      // (F2) MANAGE MODE CARD
      else {
        if (cards.data.length==0) {
          cards.hCard.innerHTML = `<div class="mFront">Add a card first.</div>`;
        } else {
          cards.hCard.innerHTML = `
          <textarea class="mFront" onchange="cards.update(this.value, 1)">${cards.data[cards.cNow][0]}</textarea>
          <textarea class="mBack" onchange="cards.update(this.value)">${cards.data[cards.cNow][1]}</textarea>`;
        }
      }
    },
  
    // (G) LAST/NEXT CARD
    move : next => {
      // (G1) UPDATE CURRENT CARD
      if (next) { cards.cNow++; }
      else { cards.cNow--; }
      if (cards.cNow >= cards.data.length) { cards.cNow = 0; }
      if (cards.cNow < 0) { cards.cNow = cards.data.length - 1; }
  
      // (G2) UPDATE HTML INTERFACE
      cards.count();
      cards.draw();
    },
  
    // (H) SAVE CARD DATA TO LOCALSTORAGE
    save : () => localStorage.setItem("cards", JSON.stringify(cards.data)),
  
    // (I) ADD EMPTY CARD
    add : () => {
      cards.data.splice(cards.cNow, 0, ["Front", "Back"]);
      cards.save();
      cards.count();
      cards.draw();
    },
    
    // (J) UPDATE CURRENT CARD
    update : (txt, side) => {
      if (side) { cards.data[cards.cNow][0] = txt; }
      else { cards.data[cards.cNow][1] = txt; }
      cards.save();
    },
    
    // (K) DELETE CURRENT CARD
    delete : () => { if (cards.data.length!=0) {
      cards.data.splice(cards.cNow, 1);
      cards.save();
      if (cards.data.length == 0) { cards.cNow = 0; }
      else if (cards.cNow+1 >= cards.data.length) {cards.cNow = cards.data.length-1; }
      cards.count();
      cards.draw();
    }}
  };
  window.onload = cards.init;