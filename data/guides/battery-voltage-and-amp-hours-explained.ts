import type { InfoGuideModule } from "@/components/guide/InfoGuidePage";

const guide: InfoGuideModule = {
  kind: "info",
  guideSlug: "battery-voltage-and-amp-hours-explained",
  guideTitle: "Battery Voltage and Amp Hours Explained for Cordless Tools",
  metaTitle: "Cordless Tool Battery Volts and Ah Explained",
  metaDescription: "What volts and amp hours really mean on a cordless tool battery, why 18V and 20V max are the same pack, and how to read watt hours to compare runtime.",
  heroImage: "/images/articles/bat-drill-pack.webp",
  lastUpdated: "2026-11-21",
  readTime: "12 min",
  quickAnswer: "Voltage describes how hard a battery pushes current, which sets the tool's potential power, while amp hours describe how much charge it stores, which sets runtime. Multiply the two to get watt hours, the real measure of energy. An 18V pack and a 20V max pack are the same thing: 20V is the peak voltage with no load, and 18V is the nominal figure. A higher Ah pack runs longer, weighs more, and can also sag less under heavy load.",
  html: `<p>A shopper picks up two cordless drills on a shelf, one labelled 12V and one labelled 20V Max, and assumes the second is simply bigger. Then a pack labelled 2.0Ah and another labelled 5.0Ah appear in a bundle, and the numbers stop making sense together. The labels are not hiding anything sinister, but they are written for marketing first and physics second. Once you know which number controls which behaviour, a battery listing becomes easy to read.</p>

<p>This guide covers what volts, amp hours and watt hours each describe, why the same pack can wear two different voltage labels, how weight and platform choice follow from the battery, and how cold weather and storage habits change what you actually get from the pack over several years of ownership.</p>

<h2 id="what-volts-mean">What voltage tells you</h2>

<p>Voltage is electrical pressure. In a cordless tool it sets how fast the motor wants to spin and how much power the system can deliver for a given current. A motor on a 12V pack and a motor on an 18V pack drawing the same current are doing different amounts of work, because power in watts is volts multiplied by amps. Higher voltage lets a tool deliver more power without pulling a punishing current through thin wires and small contacts.</p>

<p>That is why voltage tiers map to job types. The compact 12V class suits light drilling, driving small screws, and work in tight spaces where a smaller tool matters more than raw grunt. The 18V and 20V class covers general carpentry, deck screws, larger holes and most contractor work. Beyond that sit 36V, 40V and 60V systems, usually built from higher voltage cells in series, aimed at outdoor power equipment and heavy cutting tools where sustained high power is the point.</p>

<p>Voltage is not a quality rating. A well made 12V tool will outlast a poorly made 18V one, and for hanging pictures, assembling flat-pack furniture or occasional household repairs the lighter tool is the better purchase. The mistake is buying more voltage than the work needs and then carrying the extra weight on every job. If you are choosing between formats, our comparison of <a href="/guide/drill-vs-impact-driver">a drill and an impact driver</a> explains how the tool type changes what the voltage is used for.</p>

<h2 id="18v-vs-20v">Why 18V and 20V Max are the same pack</h2>

<p>Lithium-ion cells have a nominal voltage of about 3.6V and a fully charged voltage of about 4.2V. A pack built from five cells in series therefore sits at a nominal 18V and reads roughly 20V straight off the charger, with no load on it. Brands in North America label the pack with the maximum figure, 20V Max, while brands in Europe and much of the rest of the world label the same arrangement with the nominal figure, 18V.</p>

<p>The practical result is that an 18V pack and a 20V Max pack can be identical in cell count and capability. The label tells you about the marketing region and the brand's habit, not about the performance. As soon as the tool is working, voltage drops under load to near the nominal figure, so a 20V Max tool is never delivering 20 volts while it drives a screw.</p>

<p>The same logic applies to 12V tools, which are often labelled 12V Max because a three cell pack reads about 12.6V at full charge. When you compare two tools, ignore the word Max and compare the cell count where the manufacturer states it, the motor type, and the stated torque or power output instead. A cheaper tool labelled with the biggest number is not more powerful than a premium tool with a smaller one, because voltage alone does not decide output, motor design and electronics do.</p>

<h2 id="amp-hours">Amp hours are runtime, roughly</h2>

<p>Amp hours, written Ah, describe how much charge a battery stores. A 2.0Ah pack can in theory supply 2 amps for an hour, or 20 amps for six minutes. Because cordless tools draw current in bursts and in very different amounts depending on the load, the useful reading is relative: a 4.0Ah pack stores twice the charge of a 2.0Ah pack of the same voltage, so it should run about twice as long on the same task.</p>

<p>Physically, extra capacity comes from more cells. A standard 18V pack has five cells in series. A 2.0Ah version uses one cell per position, while a 4.0Ah version uses two cells in parallel per position, ten cells total, and a 6.0Ah version uses three parallel cells in newer designs or larger format cells. That cell count is why capacity is not free: each added cell adds weight, volume and cost to the pack.</p>

<table>
<thead>
<tr><th>Pack capacity</th><th>Relative runtime</th><th>Typical use</th><th>Tradeoff</th></tr>
</thead>
<tbody>
<tr><td>1.5Ah to 2.0Ah</td><td>Short</td><td>Light driving, overhead work, quick jobs</td><td>Lightest pack, empties fast on a big task</td></tr>
<tr><td>4.0Ah</td><td>Moderate</td><td>All-round carpentry and home repair</td><td>The balance point for most people</td></tr>
<tr><td>5.0Ah to 6.0Ah</td><td>Long</td><td>Drilling many large holes, saws, outdoor tools</td><td>Heavier, slower to charge, higher cost</td></tr>
<tr><td>8.0Ah and above</td><td>Very long</td><td>High draw tools used for hours</td><td>Noticeably heavy, mostly for professionals</td></tr>
</tbody>
</table>

<p>Ah numbers also hide a trap. Comparing a 5.0Ah pack from one brand to a 5.0Ah pack from another tells you the charge stored, not how long the tool runs, because the tool's motor efficiency and the way the electronics manage the pack differ. Within one brand and one tool, Ah is a reliable guide to runtime. Across brands it is only a starting point.</p>

<figure>
  <img src="/images/articles/bat-ryobi-5ah.webp" alt="A lithium-ion tool battery pack marked 5.0Ah" />
  <figcaption>A pack with its amp hour rating printed on the label, the number that sets runtime.</figcaption>
</figure>

<h2 id="watt-hours">Watt hours are the real capacity</h2>

<p>Because volts and amp hours both matter, the honest comparison is watt hours, written Wh, which is volts multiplied by amp hours. An 18V 5.0Ah pack stores about 90Wh using the nominal voltage, while a 12V 2.0Ah pack stores about 24Wh. Watt hours measure energy, the thing that actually gets turned into drilled holes and driven screws, and it is why the right <a href="/guide/how-to-choose-drill-bits">drill bit</a> matters, since a dull bit wastes watt hours as heat.</p>

<p>This is the number that rescues a comparison across voltage tiers. Someone looking at a 12V 4.0Ah pack and an 18V 2.0Ah pack might assume they are close because the Ah figures are in the same range. In energy terms the 12V pack holds about 48Wh and the 18V pack about 36Wh, so the lower voltage pack stores more, though the 18V tool will turn that energy into more power at once.</p>

<h2 id="power-under-load">Why higher Ah packs can deliver more power</h2>

<p>A common surprise is that the same tool can feel stronger with a bigger pack. The reason is internal resistance. Every cell has some, and when a motor draws a large current, the resistance makes the pack's voltage sag. A pack with more cells in parallel splits the current across more paths, so each cell works less hard, the voltage sags less, and the electronics are less likely to cut power to protect the pack.</p>

<p>The effect shows up when the tool is stressed: a hole saw in thick lumber, a circular saw through wet timber, a mixer paddle in thick compound. On those jobs a 2.0Ah pack can overheat or hit its protection limit while a 5.0Ah pack of the same voltage keeps going. For light work the difference is negligible, so a bigger pack is not a power upgrade for gentle jobs, it is a power upgrade for high current jobs.</p>

<p>High output cell designs complicate this. Some manufacturers sell compact packs built from cells optimised for high discharge rates, so a smaller Ah pack can outperform a standard larger one on peak current. Whether a given pack uses such cells is something the manufacturer's specification page may state, and when it does not, there is no published way to tell from the outside. The sensible rule is to match pack size to the hungriest tool you own, then check whether that tool maker publishes a recommended minimum pack.</p>

<h2 id="weight-balance">Weight, balance and fatigue</h2>

<p>The battery is often the heaviest single component of a cordless tool. A compact 2.0Ah pack for an 18V system can weigh a few hundred grams less than a 5.0Ah pack, and on a drill held at arm's length that difference changes how long you can work comfortably. On an overhead task such as drilling into ceiling joists, the lighter pack can be the better choice even though it runs out sooner.</p>

<p>The pack also shifts the balance. A tool that stands upright on its battery, such as a drill with a flat bottomed pack, sits differently in the hand than the same tool with a long, tall pack. Heavy packs on small tools can make the tool tip back when set down and make it feel unwieldy in tight spaces. Experienced users keep two sizes: a compact pack for precision and overhead work, and a large pack for sustained high draw tasks.</p>

<h2 id="platform-lock-in">Platform lock-in and compatibility</h2>

<p>Batteries are the way a tool brand keeps you. Each brand's packs fit only that brand's tools, and often only a specific line within the brand, so choosing a drill is really choosing the battery platform you will buy into for years. The cost of the first battery is small compared with the cost of ten tools that all need compatible packs.</p>

<p>Most brands offer a bare tool option, sold without battery or charger, which is the cheapest way to add a tool once you own a platform. If you plan to build a collection, check whether the brand has the tools you expect to want, such as an impact driver, a circular saw, a reciprocating saw, a work light, a leaf blower and a vacuum, before you commit. A platform with a narrow range may leave you buying a second system later.</p>

<p>Voltage tiers within one brand are often incompatible with each other. A 12V pack does not fit an 18V tool, and a 36V outdoor pack may share a charger but not the tool body. Some brands have unified lines in which one pack runs everything from a drill to a mower, which is convenient but means every tool is carrying a pack sized for the heaviest job. Adapters that let one brand's pack power another brand's tool exist, but the connection is not endorsed by manufacturers and may bypass protections, so treat them with caution. For a broader sense of how tool choices relate, our <a href="/categories/tools-diy">Tools and DIY section</a> collects the guides that sit around this one.</p>

<figure>
  <img src="/images/articles/bat-contacts.webp" alt="Close view of the terminal contacts inside a cordless tool battery" />
  <figcaption>The contact block on a battery pack, where the tool and electronics communicate with the cells.</figcaption>
</figure>

<h2 id="cold-and-storage">Cold weather and storage</h2>

<p>Lithium-ion cells slow down in the cold. The chemical reactions inside become sluggish, internal resistance rises, and a pack that feels fine in a warm garage will deliver less runtime and less peak power on a freezing morning. Most manufacturers specify an operating temperature range in the manual, and many tools cut out below a lower limit to protect the cells. Charging a very cold pack is worse than using one, because charging lithium-ion below the safe limit can damage the cells permanently, so many chargers refuse to start until the pack warms up.</p>

<p>The practical habit is simple. Keep packs indoors overnight in winter, carry them in an inside pocket to a cold site, and rotate a warm spare when the first one slows down. A pack that has just come off a hard job is also hot, and charging it immediately is not ideal, so let it sit for several minutes first. Many chargers wait automatically, which is why a charger light may blink after heavy use rather than starting to charge.</p>

<p>Storage matters just as much as use. Lithium-ion packs age fastest when stored fully charged or fully empty, particularly in warm places. For a pack that will sit unused for months, store it partly charged, commonly described as around half, in a cool dry place away from a hot shed or a car. Do not leave packs on the charger indefinitely unless the manufacturer says it is safe. A pack that is run completely flat and left for months can fall below the voltage at which its electronics will let a charger revive it, making it effectively dead even though the cells are not worn. Nothing here is guaranteed to double a pack's life, and no source documents an exact number of cycles for a specific pack, but these habits are consistent with the general guidance on lithium-ion care.</p>

<h2 id="choosing">How to choose a pack and a platform</h2>

<p>Start with the work. For occasional household jobs, a 12V platform with a pair of 2.0Ah to 3.0Ah packs is light, cheap to run and enough for furniture assembly, shelves and light drilling. For a keen DIYer who builds decks, replaces fixtures and cuts timber, an 18V or 20V platform with a 4.0Ah pack and a compact 2.0Ah spare covers nearly everything. For someone running outdoor power tools on the same platform, larger packs make sense because those tools draw high current for long stretches.</p>

<p>Then check what you will add. A brushless motor changes efficiency, so <a href="/guide/brushed-vs-brushless-drill-motors">our explanation of brushless and brushed motors</a> is useful when a tool looks expensive for its size: a brushless tool wastes less energy as heat, which stretches the same watt hours further. Charger speed also matters. A fast charger can refill a mid size pack in well under an hour, while a basic charger can take several, and a kit with one battery and a slow charger can be the least productive bundle on the shelf.</p>

<h2 id="faq">Frequently asked questions</h2>

<h3>Is a 20V Max tool more powerful than an 18V tool?</h3>
<p>Not by itself. The two labels usually describe the same five cell lithium-ion pack, one using the peak voltage and the other the nominal voltage. Compare motor type, stated torque and the tool's design rather than the voltage word, because those decide how it performs in the workshop or on site.</p>

<h3>How do I calculate how long a battery will run a tool?</h3>
<p>Divide the pack's watt hours by the power the tool draws in watts. The catch is that power draw varies from moment to moment, and few manufacturers publish it, so the estimate is rough at best. A better practical approach is to compare two packs by Wh and expect runtime to scale in proportion on the same task with the same tool.</p>

<h3>Does a bigger Ah battery harm a tool?</h3>
<p>No. A tool takes the current it needs, and a larger pack of the same voltage and platform simply stores more. The only costs are weight and a longer charge time. The reverse can cause trouble: a very small pack on a power hungry tool may overheat or trip protection.</p>

<h3>Can I use my old pack in a new tool from the same brand?</h3>
<p>Often yes within a platform, but not always. Brands sometimes change contacts, communication protocols or voltage tiers, and a few tools need packs with a specific electronics version to unlock full power. Check the manufacturer's compatibility chart before assuming an old pack will give a new tool its full performance.</p>

<h3>Should I leave batteries on the charger?</h3>
<p>Modern chargers stop at full, so a short stay does no harm, but long term storage at full charge in a warm place ages cells faster. For months of storage, charge to roughly half and keep the pack somewhere cool and dry. If a pack has been flat for a long time, a charger may refuse to start.</p>

<h2 id="bottom-line">The bottom line</h2>

<p>Read a battery label in this order: platform first, then watt hours, then weight. Voltage tells you the tier, Ah tells you the charge stored, and multiplying them gives the energy you can actually use. Treat 18V and 20V Max as the same, and do not pay extra for a bigger voltage word on its own.</p>

<p>For most households, one mid capacity pack on an 18V or 20V platform, plus a lighter compact pack, is the sweet spot, and a 12V system is a better pick if the jobs are small. Buy bare tools once you own a platform, charge and store packs sensibly, and treat the battery as a consumable that will eventually need replacing.</p>`,
  imageCredits: [
    {"image":"adjdb-fixed-rack.webp","author":"stevepb","license":"Pixabay Content License","source":"https://pixabay.com/photos/dumbbells-shoes-sneakers-2465478/","via":"Pixabay"},
    {"image":"adjdb-spinlock-pair.webp","author":"Arcaion","license":"Pixabay Content License","source":"https://pixabay.com/photos/sport-fitness-center-fitness-2726735/","via":"Pixabay"},
    {"image":"adjdb-pair-floor.webp","author":"stevepb","license":"Pixabay Content License","source":"https://pixabay.com/photos/physiotherapy-weight-training-595529/","via":"Pixabay"},
    {"image":"airfryer-2020-unit.webp","author":"vaxey44972","license":"Pixabay Content License","source":"https://pixabay.com/photos/air-fryer-kitchen-appliance-10491699/","via":"Pixabay"},
    {"image":"airfryer-interior-basket.webp","author":"planet_fox","license":"Pixabay Content License","source":"https://pixabay.com/photos/deep-fryer-grill-stall-fast-food-6993379/","via":"Pixabay"},
    {"image":"airfryer-tabletop-convection.webp","author":"Bagoto","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/w/index.php?curid=50111020","via":"Openverse"},
    {"image":"bat-drill-pack.webp","author":"bluebudgie","license":"Pixabay Content License","source":"https://pixabay.com/photos/screw-wooden-decking-fix-repair-4054720/","via":"Pixabay"},
    {"image":"bat-ryobi-5ah.webp","author":"Alexei_other","license":"Pixabay Content License","source":"https://pixabay.com/photos/battery-alkaline-batteries-charge-4909979/","via":"Pixabay"},
    {"image":"btcodec-wireless-headphones.webp","author":"vinny1987","license":"Pixabay Content License","source":"https://pixabay.com/photos/earphone-soundpeats-bluetooth-3789599/","via":"Pixabay"},
    {"image":"brushless-cordless-drill.webp","author":"dreimarkfuffzig","license":"Pixabay Content License","source":"https://pixabay.com/photos/cordless-screwdriver-screwdriver-2239493/","via":"Pixabay"},
    {"image":"brushless-drill-driving-screw.webp","author":"Bru-nO","license":"Pixabay Content License","source":"https://pixabay.com/photos/drilling-machine-impact-drill-1038542/","via":"Pixabay"},
    {"image":"sawblade-carbide-teeth-closeup.webp","author":"annawaldl","license":"Pixabay Content License","source":"https://pixabay.com/photos/table-saw-table-circular-saw-2243289/","via":"Pixabay"},
    {"image":"sawblade-circular-saw-blade-teeth.webp","author":"jeanvdmeulen","license":"Pixabay Content License","source":"https://pixabay.com/photos/car-circular-circular-saw-closeup-4900733/","via":"Pixabay"},
    {"image":"sawblade-cordless-circular-saw.webp","author":"PfenningMassivholzmoebel","license":"Pixabay Content License","source":"https://pixabay.com/photos/carpenter-circular-saw-wood-machine-4602037/","via":"Pixabay"},
    {"image":"impact-driver-hex-collet.webp","author":"Mark Hunter","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Makita_Impact_Driver_(4887707944).jpg","via":"Wikimedia Commons"},
    {"image":"foamroller-row-densities.webp","author":"Pexels","license":"Pixabay Content License","source":"https://pixabay.com/photos/exercise-workout-yoga-foam-roller-1284374/","via":"Pixabay"},
    {"image":"foamroller-thigh-use.webp","author":"Pexels","license":"Pixabay Content License","source":"https://pixabay.com/photos/exercise-workout-yoga-foam-roller-1284373/","via":"Pixabay"},
    {"image":"foamroller-back-use.webp","author":"Pexels","license":"Pixabay Content License","source":"https://pixabay.com/photos/exercise-workout-yoga-foam-1284371/","via":"Pixabay"},
    {"image":"hose-coiled-green.webp","author":"Ralphs_Fotos","license":"Pixabay Content License","source":"https://pixabay.com/photos/water-jet-shower-to-water-water-8007873/","via":"Pixabay"},
    {"image":"hose-nozzle-spray.webp","author":"manfredrichter","license":"Pixabay Content License","source":"https://pixabay.com/photos/water-jet-shower-garden-shower-3611518/","via":"Pixabay"},
    {"image":"hose-reel-storage.webp","author":"RyanMcGuire","license":"Pixabay Content License","source":"https://pixabay.com/photos/garden-hose-hose-watering-gardening-413684/","via":"Pixabay"},
    {"image":"grillchoice-gas-charcoal-side.webp","author":"pixel2013","license":"Pixabay Content License","source":"https://pixabay.com/photos/charcoal-embers-barbecue-carbon-2396754/","via":"Pixabay"},
    {"image":"grillchoice-charcoal-kettle.webp","author":"adonyig","license":"Pixabay Content License","source":"https://pixabay.com/photos/charcoal-garden-party-baking-3550210/","via":"Pixabay"},
    {"image":"grillchoice-gas-burners.webp","author":"RAMillu","license":"Pixabay Content License","source":"https://pixabay.com/photos/bbq-barbecue-summer-gas-grill-825711/","via":"Pixabay"},
    {"image":"anc-over-ear-headphones.webp","author":"rupixen","license":"Pixabay Content License","source":"https://pixabay.com/photos/music-headset-sound-headphones-4334557/","via":"Pixabay"},
    {"image":"anc-headphones-over-ear.webp","author":"terydanphiri","license":"Pixabay Content License","source":"https://pixabay.com/photos/audio-music-sound-headphones-7276511/","via":"Pixabay"},
    {"image":"anc-earbuds-case.webp","author":"MUSIC_AND_WALLPAPER","license":"Pixabay Content License","source":"https://pixabay.com/photos/woman-headphones-computer-smile-10542985/","via":"Pixabay"},
    {"image":"yogamat-rolled-studio.webp","author":"pixelcreatures","license":"Pixabay Content License","source":"https://pixabay.com/photos/yoga-yoga-mat-green-940359/","via":"Pixabay"},
    {"image":"yogamat-cork-surface.webp","author":"lograstudio","license":"Pixabay Content License","source":"https://pixabay.com/photos/yoga-fitness-exercise-health-body-3053487/","via":"Pixabay"},
    {"image":"yogamat-practice-pose.webp","author":"StockSnap","license":"Pixabay Content License","source":"https://pixabay.com/photos/woman-yoga-mat-meditation-fitness-2562216/","via":"Pixabay"},
    {"image":"bits-sds-set.webp","author":"blickpixel","license":"Pixabay Content License","source":"https://pixabay.com/photos/tools-drill-drill-bit-equipment-444499/","via":"Pixabay"},
    {"image":"bits-gold-twist.webp","author":"Life-Of-Pix","license":"Pixabay Content License","source":"https://pixabay.com/photos/tools-diy-drill-metal-equipment-569108/","via":"Pixabay"},
    {"image":"bits-aluminium-oil.webp","author":"blickpixel","license":"Pixabay Content License","source":"https://pixabay.com/photos/drill-head-drill-bit-drill-metal-444504/","via":"Pixabay"},
    {"image":"dumbbell-rack-rows.webp","author":"anncapictures","license":"Pixabay Content License","source":"https://pixabay.com/photos/dumbbells-weight-training-training-3399107/","via":"Pixabay"},
    {"image":"dumbbell-curl-rack.webp","author":"markusspiske","license":"Pixabay Content License","source":"https://pixabay.com/photos/fitness-dumbbells-training-gym-594143/","via":"Pixabay"},
    {"image":"dumbbell-hand-grip.webp","author":"Engin_Akyurt","license":"Pixabay Content License","source":"https://pixabay.com/photos/weight-dumbbell-strength-arm-force-8246973/","via":"Pixabay"},
    {"image":"descale-hamilton-maker.webp","author":"andrew welch","license":"CC0","source":"https://stocksnap.io/photo/coffee-maker-H8G7YBNYE0","via":"Openverse"},
    {"image":"descale-limescale-pot.webp","author":"MuhamadIksan","license":"Pixabay Content License","source":"https://pixabay.com/photos/coffee-espresso-beverage-drink-hot-6886273/","via":"Pixabay"},
    {"image":"descale-espresso-jimmyweee.webp","author":"2857440","license":"Pixabay Content License","source":"https://pixabay.com/photos/ai-generated-kitchen-coffee-machine-7795820/","via":"Pixabay"},
    {"image":"castiron-skillet-seasoned-surface.webp","author":"ponce_photography","license":"Pixabay Content License","source":"https://pixabay.com/photos/banana-caramelized-food-sweet-1448901/","via":"Pixabay"},
    {"image":"castiron-skillet-on-hob.webp","author":"ponce_photography","license":"Pixabay Content License","source":"https://pixabay.com/photos/tomatoes-red-fresh-vegetable-food-1476093/","via":"Pixabay"},
    {"image":"shears-bypass-pair.webp","author":"Ray_Shrewsberry","license":"Pixabay Content License","source":"https://pixabay.com/photos/pruning-shears-plant-rose-pruning-7522188/","via":"Pixabay"},
    {"image":"shears-blade-sharpening.webp","author":"CarlottaSilvestrini","license":"Pixabay Content License","source":"https://pixabay.com/photos/shears-scissors-garden-gardening-1336374/","via":"Pixabay"},
    {"image":"shears-pruning-cut.webp","author":"schraubgut","license":"Pixabay Content License","source":"https://pixabay.com/photos/pruning-shears-hedge-trimmer-4964455/","via":"Pixabay"},
    {"image":"humidifier-cool-mist-unit.webp","author":"asundermeier","license":"Pixabay Content License","source":"https://pixabay.com/photos/diffuser-oil-aroma-sleep-4078729/","via":"Pixabay"},
    {"image":"humidifier-ultrasonic-mist.webp","author":"Tiluria","license":"Pixabay Content License","source":"https://pixabay.com/photos/light-smoke-colour-led-humidifier-2812881/","via":"Pixabay"},
    {"image":"cooktop-induction-pan.webp","author":"MrWashingt0n","license":"Pixabay Content License","source":"https://pixabay.com/photos/modern-kitchen-interior-design-10489109/","via":"Pixabay"},
    {"image":"cooktop-gas-burners-flame.webp","author":"ferarcosn","license":"Pixabay Content License","source":"https://pixabay.com/photos/gas-stove-gas-orange-kitchen-1776648/","via":"Pixabay"},
    {"image":"mower-rotary-lawn-cut.webp","author":"congerdesign","license":"Pixabay Content License","source":"https://pixabay.com/photos/lawn-mower-mow-gardening-lawn-5329533/","via":"Pixabay"},
    {"image":"mower-cordless-battery.webp","author":"ClickerHappy","license":"Pixabay Content License","source":"https://pixabay.com/photos/lawn-mower-grass-garden-front-yard-384589/","via":"Pixabay"},
    {"image":"mower-robotic-lawn.webp","author":"MonikaP","license":"Pixabay Content License","source":"https://pixabay.com/photos/lawn-mower-lawn-robotic-lawnmower-2914172/","via":"Pixabay"},
    {"image":"blower-backpack-yard.webp","author":"ClickerHappy","license":"Pixabay Content License","source":"https://pixabay.com/photos/shed-garden-tools-gardening-2806281/","via":"Pixabay"},
    {"image":"monitor-gaming-desk.webp","author":"StartupStockPhotos","license":"Pixabay Content License","source":"https://pixabay.com/photos/startup-business-people-students-849804/","via":"Pixabay"},
    {"image":"monitor-curved-display.webp","author":"PublicDomainPictures","license":"Pixabay Content License","source":"https://pixabay.com/photos/blank-business-computer-desktop-17894/","via":"Pixabay"},
    {"image":"monitor-dual-screen-setup.webp","author":"StartupStockPhotos","license":"Pixabay Content License","source":"https://pixabay.com/photos/typing-computer-man-workspace-work-849806/","via":"Pixabay"},
    {"image":"powerbank-capacity-pair.webp","author":"StockSnap","license":"Pixabay Content License","source":"https://pixabay.com/photos/power-bank-battery-technology-925569/","via":"Pixabay"},
    {"image":"powerbank-two-units-cable.webp","author":"aiiapromogifts","license":"Pixabay Content License","source":"https://pixabay.com/photos/promotional-products-694792/","via":"Pixabay"},
    {"image":"powerbank-phone-charging.webp","author":"aiiapromogifts","license":"Pixabay Content License","source":"https://pixabay.com/photos/promotional-products-694795/","via":"Pixabay"},
    {"image":"raisedbed-cedar-vegetables.webp","author":"planet_fox","license":"Pixabay Content License","source":"https://pixabay.com/photos/garden-salad-raised-bed-nourishment-5223912/","via":"Pixabay"},
    {"image":"raisedbed-steel-garden.webp","author":"AndreasGoellner","license":"Pixabay Content License","source":"https://pixabay.com/photos/raised-bed-chili-chives-garden-4392783/","via":"Pixabay"},
    {"image":"raisedbed-brick-stone.webp","author":"Farbsynthese","license":"Pixabay Content License","source":"https://pixabay.com/photos/self-cultivation-salad-vegetable-5345147/","via":"Pixabay"},
    {"image":"bands-loop-set-colours.webp","author":"SpencerWing","license":"Pixabay Content License","source":"https://pixabay.com/photos/resistance-bands-strength-training-6371695/","via":"Pixabay"},
    {"image":"robotvac-suction-floor.webp","author":"HOCKULUS","license":"Pixabay Content License","source":"https://pixabay.com/photos/vacuum-cleaner-dust-cleaning-robot-8114145/","via":"Pixabay"},
    {"image":"robotvac-brush-underside.webp","author":"NickyPe","license":"Pixabay Content License","source":"https://pixabay.com/photos/robot-vacuum-cleaner-robot-machine-3786243/","via":"Pixabay"},
    {"image":"robotvac-hard-floor-clean.webp","author":"ed_rsnhr","license":"Pixabay Content License","source":"https://pixabay.com/photos/vacuum-cleaner-robot-household-4827253/","via":"Pixabay"},
    {"image":"smarthome-hub-and-sensors.webp","author":"finnhart","license":"Pixabay Content License","source":"https://pixabay.com/photos/alexa-echo-smart-home-box-jukebox-4758340/","via":"Pixabay"},
    {"image":"ssd-and-hdd-side-by-side.webp","author":"bohed","license":"Pixabay Content License","source":"https://pixabay.com/photos/hard-drive-disk-hardware-data-hard-607461/","via":"Pixabay"},
    {"image":"ssd-sata-2-5-inch.webp","author":"blickpixel","license":"Pixabay Content License","source":"https://pixabay.com/photos/hard-drive-hdd-disk-data-store-503962/","via":"Pixabay"},
    {"image":"ssd-hard-disk-interior.webp","author":"wir_sind_klein","license":"Pixabay Content License","source":"https://pixabay.com/photos/computer-hard-drive-3293873/","via":"Pixabay"},
    {"image":"pans-three-materials.webp","author":"Unknown","license":"CC0","source":"https://www.rawpixel.com/image/5921197/photo-image-light-public-domain-green","via":"Openverse"},
    {"image":"treadmill-running-belt.webp","author":"lewisgoodphotos","license":"Pixabay Content License","source":"https://pixabay.com/photos/treadmill-workout-fitness-gym-5030966/","via":"Pixabay"},
    {"image":"treadmill-console-belt.webp","author":"Rattakarn_","license":"Pixabay Content License","source":"https://pixabay.com/photos/exercise-machine-run-gym-exercise-4565410/","via":"Pixabay"},
    {"image":"grillgrate-drip-tray.webp","author":"pixel2013","license":"Pixabay Content License","source":"https://pixabay.com/photos/charcoal-embers-barbecue-carbon-2396754/","via":"Pixabay"},
    {"image":"umbrella-market-patio-table.webp","author":"schaerfsystem","license":"Pixabay Content License","source":"https://pixabay.com/photos/restaurant-bistro-prague-patio-1530014/","via":"Pixabay"},
    {"image":"umbrella-cantilever-offset.webp","author":"ClickerHappy","license":"Pixabay Content License","source":"https://pixabay.com/photos/beach-sunshade-beach-resort-384585/","via":"Pixabay"},
    {"image":"umbrella-closed-base.webp","author":"Unknown","license":"CC0","source":"https://www.rawpixel.com/image/6076363/patio-umbrella-roe-gard-cafe","via":"Openverse"},
    {"image":"level-cross-line-laser-wall.webp","author":"Billbeee at English Wikipedia","license":"CC BY 2.5","source":"https://commons.wikimedia.org/w/index.php?curid=60331669","via":"Openverse"},
    {"image":"level-bubble-vial.webp","author":"Didgeman","license":"Pixabay Content License","source":"https://pixabay.com/photos/spirit-level-bubble-air-bubble-1077633/","via":"Pixabay"},
    {"image":"bench-fid-flat-incline.webp","author":"12019","license":"Pixabay Content License","source":"https://pixabay.com/photos/man-bench-press-weight-weights-81725/","via":"Pixabay"},
    {"image":"bat-contacts.webp","author":"bluebudgie","license":"Pixabay Content License","source":"https://pixabay.com/photos/screw-wooden-decking-fix-repair-4054720/","via":"Pixabay"},
    {"image":"btcodec-phone-and-earbuds.webp","author":"Firmbee","license":"Pixabay Content License","source":"https://pixabay.com/photos/mobile-phone-samsung-music-605422/","via":"Pixabay"},
    {"image":"btcodec-over-ear-wireless.webp","author":"HOerwin56","license":"Pixabay Content License","source":"https://pixabay.com/photos/headphones-music-audio-3683983/","via":"Pixabay"},
    {"image":"brushless-drill-motor-parts.webp","author":"Alexei_other","license":"Pixabay Content License","source":"https://pixabay.com/photos/screwdriver-drill-tool-hand-tool-5221750/","via":"Pixabay"},
    {"image":"impact-driver-and-drill-pair.webp","author":"Bru-nO","license":"Pixabay Content License","source":"https://pixabay.com/photos/drilling-machine-impact-drill-1038542/","via":"Pixabay"},
    {"image":"impact-driver-decking-screw.webp","author":"PublicDomainPictures","license":"Pixabay Content License","source":"https://pixabay.com/photos/head-construction-cordless-drill-19901/","via":"Pixabay"},
    {"image":"bike-spin-saddle.webp","author":"musculacaoMM2020","license":"Pixabay Content License","source":"https://pixabay.com/photos/exercise-bicycle-workout-gym-6486193/","via":"Pixabay"},
    {"image":"grillgrate-cast-iron-clean.webp","author":"pixel2013","license":"Pixabay Content License","source":"https://pixabay.com/photos/charcoal-embers-barbecue-carbon-2396754/","via":"Pixabay"},
    {"image":"grillgrate-brush-hot.webp","author":"4666192","license":"Pixabay Content License","source":"https://pixabay.com/photos/bbq-barbeque-meal-food-flesh-2123432/","via":"Pixabay"},
    {"image":"humidifier-evaporative-wick.webp","author":"asundermeier","license":"Pixabay Content License","source":"https://pixabay.com/photos/essential-oils-relaxation-oil-4074333/","via":"Pixabay"},
    {"image":"iprating-water-droplets-device.webp","author":"AS_Photography","license":"Pixabay Content License","source":"https://pixabay.com/photos/wet-smartphone-iphone-plus-apple-3369007/","via":"Pixabay"},
    {"image":"level-rotary-tripod.webp","author":"jarmoluk","license":"Pixabay Content License","source":"https://pixabay.com/photos/building-tiler-ceramic-tiles-1080599/","via":"Pixabay"},
    {"image":"blower-leaf-pile.webp","author":"ClickerHappy","license":"Pixabay Content License","source":"https://pixabay.com/photos/shed-garden-tools-gardening-2806281/","via":"Pixabay"},
    {"image":"massagegun-thigh-use.webp","author":"Surprising_Media","license":"Pixabay Content License","source":"https://pixabay.com/photos/friends-massage-park-outdoors-9021710/","via":"Pixabay"},
    {"image":"mesh-wifi-node-on-shelf.webp","author":"jeanvdmeulen","license":"Pixabay Content License","source":"https://pixabay.com/photos/blank-business-cell-cellphone-4900735/","via":"Pixabay"},
    {"image":"mesh-wifi-node-pair.webp","author":"dmitrochenkooleg","license":"Pixabay Content License","source":"https://pixabay.com/photos/server-switch-network-router-3632935/","via":"Pixabay"},
    {"image":"mesh-wifi-ceiling-access-point.webp","author":"wishedcn0","license":"Pixabay Content License","source":"https://pixabay.com/photos/radio-router-device-978868/","via":"Pixabay"},
    {"image":"multitool-plunge-cut-wood.webp","author":"neelam279","license":"Pixabay Content License","source":"https://pixabay.com/photos/cutting-granite-stones-bending-work-8028375/","via":"Pixabay"},
    {"image":"multitool-flush-cut.webp","author":"powertools","license":"Pixabay Content License","source":"https://pixabay.com/photos/grinder-hitachi-power-tool-flexible-1412226/","via":"Pixabay"},
    {"image":"multitool-blades-set.webp","author":"jeanvdmeulen","license":"Pixabay Content License","source":"https://pixabay.com/photos/black-cable-connection-construction-5141245/","via":"Pixabay"},
    {"image":"outdoormat-patio-table-set.webp","author":"KarenJubinville","license":"Pixabay Content License","source":"https://pixabay.com/photos/dove-bird-patio-furniture-poolside-7301617/","via":"Pixabay"},
    {"image":"outdoormat-teak-bench.webp","author":"rhyslud","license":"Pixabay Content License","source":"https://pixabay.com/photos/teak-teak-patio-furniture-172642/","via":"Pixabay"},
    {"image":"outdoormat-wicker-chairs.webp","author":"1139623","license":"Pixabay Content License","source":"https://pixabay.com/photos/white-outdoor-patio-furniture-1547092/","via":"Pixabay"},
    {"image":"bands-tube-handles.webp","author":"SpencerWing","license":"Pixabay Content License","source":"https://pixabay.com/photos/resistance-bands-strength-training-6371695/","via":"Pixabay"},
    {"image":"smarthome-smart-plug-wall.webp","author":"finnhart","license":"Pixabay Content License","source":"https://pixabay.com/photos/alexa-echo-smart-home-box-jukebox-4758340/","via":"Pixabay"},
    {"image":"pans-stainless-clad-skillet.webp","author":"ujrzanow194","license":"Pixabay Content License","source":"https://pixabay.com/photos/frying-pan-fat-4644950/","via":"Pixabay"},
    {"image":"pans-cast-iron-skillet.webp","author":"fotoblend","license":"Pixabay Content License","source":"https://pixabay.com/photos/frying-pan-cook-vegan-bio-4577843/","via":"Pixabay"},
    {"image":"torquewrench-click-socket.webp","author":"stevepb","license":"Pixabay Content License","source":"https://pixabay.com/photos/plumbing-pipe-wrenches-plumber-840835/","via":"Pixabay"},
    {"image":"treadmill-motor-hood.webp","author":"FitnessStore112","license":"Pixabay Content License","source":"https://pixabay.com/photos/man-treadmill-run-training-gym-8545861/","via":"Pixabay"},
    {"image":"usbc-charger-cable.webp","author":"C10Maj","license":"Pixabay Content License","source":"https://pixabay.com/photos/charging-phone-power-bank-charger-4874592/","via":"Pixabay"},
    {"image":"usbc-wall-charger.webp","author":"viarami","license":"Pixabay Content License","source":"https://pixabay.com/photos/product-minimalist-object-article-5226459/","via":"Pixabay"},
    {"image":"usbc-cables-connectors.webp","author":"ReadyElements","license":"Pixabay Content License","source":"https://pixabay.com/photos/two-pin-two-pin-plug-accessories-3509490/","via":"Pixabay"},
  ],
  shopGuides: [],
  relatedGuides: [
    {"title":"Drill versus impact driver, which one fits the job","href":"/guide/drill-vs-impact-driver"},
    {"title":"Brushless motors explained","href":"/guide/brushed-vs-brushless-drill-motors"},
    {"title":"Tools and DIY guides","href":"/categories/tools-diy"},
  ],
};

export default guide;
export const kind = guide.kind;
export const guideSlug = guide.guideSlug;
export const guideTitle = guide.guideTitle;
export const metaTitle = guide.metaTitle;
export const metaDescription = guide.metaDescription;
export const heroImage = guide.heroImage;
export const lastUpdated = guide.lastUpdated;
export const readTime = guide.readTime;
export const quickAnswer = guide.quickAnswer;
export const html = guide.html;
export const imageCredits = guide.imageCredits;
export const shopGuides = guide.shopGuides;
export const relatedGuides = guide.relatedGuides;
