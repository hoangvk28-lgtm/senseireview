import type { InfoGuideModule } from "@/components/guide/InfoGuidePage";

const guide: InfoGuideModule = {
  kind: "info",
  guideSlug: "what-is-cadr-air-purifier",
  guideTitle: "What Is CADR? How to Read an Air Purifier Rating",
  metaTitle: "What CADR Means on an Air Purifier",
  metaDescription: "CADR explained: what the three numbers measure, how they map to room size and air changes per hour, and why the coverage claim on the box is optimistic.",
  heroImage: "/images/articles/cadr-purifier-core300.webp",
  lastUpdated: "2026-11-21",
  readTime: "11 min",
  quickAnswer: "CADR, the Clean Air Delivery Rate, is the volume of filtered air a purifier delivers each minute, measured in cubic feet per minute (cfm). It is reported as three separate numbers, one each for smoke, dust and pollen, because those particles differ in size. A higher number means faster cleaning. To match a purifier to a room, aim for a smoke CADR of at least two thirds of the floor area in square feet for a standard ceiling, and treat the coverage figure on the box as a best case.",
  html: `<p>Most people read the coverage line on an air purifier box, find a number bigger than their room, and stop there. That number is the easiest figure on the package to read and the least reliable one to lean on. The figure it was derived from, the Clean Air Delivery Rate, is far more useful, but it appears in small print as three unfamiliar numbers with no explanation of what they measure or how to use them.</p>

<p>This guide explains CADR from the ground up: what the test actually does, why there are three numbers rather than one, how to turn cubic feet per minute into air changes per hour for your own room, and why the coverage claim printed in large type usually assumes a gentler standard than you would choose. By the end you should be able to compare any two purifiers using only the specification panel.</p>

<h2 id="what-cadr-measures">What CADR actually measures</h2>

<p>CADR stands for Clean Air Delivery Rate. It is the volume of air, in cubic feet per minute, that a purifier cleans of a particular pollutant under standardised test conditions. A purifier with a smoke CADR of 300 cfm removes smoke particles as fast as 300 cubic feet of perfectly clean air per minute would dilute them. It is a rate of cleaning, not a measure of how much filter is inside the machine.</p>

<p>The number combines two things that are easy to confuse: how much air the fan moves, and how well the filter captures particles from that air. A powerful fan pushing air through a poor filter, or a superb filter starved of airflow, both produce a modest CADR. The figure captures the end result, which is why it is a better comparison tool than fan speed, wattage or the filter grade alone.</p>

<p>The test is run by the manufacturer or a laboratory in a sealed chamber of about 1,008 cubic feet. Particles are released, the purifier runs on its highest setting, and the decay in particle count is compared with the natural decay of an identical run with the purifier off. The difference gives the rate. Because the chamber is fixed, the result is comparable across models in a way that a marketing claim is not.</p>

<h2 id="three-numbers">Why there are three numbers: smoke, dust and pollen</h2>

<p>A CADR label lists three values, one each for tobacco smoke, dust and pollen. They are separate because the particles are very different sizes, and filters and airflow behave differently across that range. Smoke particles are the smallest, roughly 0.09 to 1.0 micron. Dust sits in the middle at about 0.5 to 3 microns. Pollen is the largest, around 5 to 11 microns.</p>

<p>Larger particles are easier to catch because they are heavier and collide with filter fibres more readily, and they also settle out of the air on their own. Pollen CADR is therefore usually the highest of the three on a given machine, and smoke CADR the lowest. If you see three nearly identical numbers, the model is probably a larger, high airflow unit rather than a quirk of the test.</p>

<table>
<thead>
<tr><th>Particle type</th><th>Approximate size</th><th>Typical sources</th><th>How hard it is to capture</th></tr>
</thead>
<tbody>
<tr><td>Smoke</td><td>0.09 to 1.0 micron</td><td>Cooking, candles, wildfire haze, tobacco</td><td>Hardest, drives the lowest CADR</td></tr>
<tr><td>Dust</td><td>0.5 to 3 microns</td><td>Skin flakes, textile fibres, soil tracked indoors</td><td>Moderate</td></tr>
<tr><td>Pollen</td><td>5 to 11 microns</td><td>Trees, grasses, weeds, drifting in through windows</td><td>Easiest, usually the highest CADR</td></tr>
</tbody>
</table>

<p>For most households the smoke figure is the one to use for sizing, because it is the most demanding and the closest proxy for the fine particles that stay airborne longest. If you buy mainly for pollen season, the pollen number is relevant, but a purifier sized on smoke will be comfortably adequate for it. Note that the three figures do not cover gases, odours or viruses, which the test does not address.</p>

<figure>
  <img src="/images/articles/cadr-product-1.webp" alt="A home air purifier with a published CADR rating" />
  <figcaption>A room purifier whose clean air delivery rate sets the room size it suits.</figcaption>
</figure>

<h2 id="aham-verification">AHAM verification and why it matters</h2>

<p>The test method behind CADR was developed by the Association of Home Appliance Manufacturers, and models that participate carry a verification seal with the three numbers. Verification means an independent laboratory ran the test on a sample, and that results are checked periodically. It is the difference between a published figure and a self declared one.</p>

<p>Not every purifier is verified. Some brands publish CADR figures that they measured themselves using the same chamber method, and some publish no CADR at all, offering only a coverage claim or a filter grade. A listing that gives a room size but no CADR leaves you unable to check the claim, which is worth treating as a mild warning sign rather than proof of a poor product.</p>

<p>When a verified seal is present, check that the numbers on the seal match the numbers in the listing. Occasionally a listing quotes the pollen figure, the biggest one, as if it were the headline number. Look for all three values and use the smoke figure for sizing. If only a single CADR appears with no particle type named, you cannot tell what it measures.</p>

<h2 id="cfm-to-room-size">From cfm to room size: the air changes per hour calculation</h2>

<p>A CADR in cfm only becomes meaningful once you compare it with the volume of your room. The useful quantity is air changes per hour, abbreviated ACH: how many times per hour the purifier could, in theory, process a volume of air equal to the room. The formula is simple: ACH equals CADR multiplied by 60, divided by the room volume in cubic feet.</p>

<p>Take a living room that is 20 feet by 15 feet with an 8 foot ceiling. The floor area is 300 square feet and the volume is 2,400 cubic feet. A purifier with a smoke CADR of 240 cfm gives 240 times 60 divided by 2,400, which is 6 air changes per hour. The same machine in a 450 square foot open plan space with the same ceiling height, volume 3,600 cubic feet, drops to 4 air changes per hour.</p>

<p>The manufacturers' association guidance offers a shortcut: the smoke CADR should be at least two thirds of the floor area in square feet, assuming a ceiling of about 8 feet. For a 300 square foot room that works out at 200 cfm. This rule yields roughly 5 air changes per hour, which is the level at which airborne particles are cleared at a useful pace for allergy and smoke control.</p>

<p>Ceiling height changes everything. A vaulted ceiling of 12 feet adds half again to the volume, so the same purifier delivers only two thirds of the air changes. Measure height as well as floor area, and if the space is open to a hallway or kitchen, count the connected volume, because air moves freely between them and the purifier is cleaning all of it.</p>

<h2 id="box-claims">Why the box coverage claim is optimistic</h2>

<p>The coverage figure on the front of a box is derived from CADR, but the derivation is chosen by the manufacturer. Most claims assume either one or two air changes per hour, far fewer than the roughly five that the two thirds rule produces. At one or two changes per hour, a room is cleaned slowly: a puff of smoke or a burst of cooking particles lingers for a long time before the level falls.</p>

<p>That makes the claim technically honest and practically generous. A purifier rated for a 600 square foot room on a two air change basis is, for allergy or smoke purposes, closer to a 250 square foot machine if you apply the five change standard. The conversion is a straight division, and it explains why a unit sold as suitable for a large living room can feel underpowered in one.</p>

<p>Some manufacturers state their assumption openly, for example by writing the number of air changes or the time to clean the room once. Others print only the square footage. If the assumption is not stated, no source documents it, so do not guess. Instead, ignore the headline coverage and run the calculation with the smoke CADR yourself. It takes under a minute and removes the largest source of disappointment.</p>

<figure>
  <img src="/images/articles/cadr-product-2.webp" alt="A home air purifier with a published CADR rating" />
  <figcaption>A room purifier whose clean air delivery rate sets the room size it suits.</figcaption>
</figure>

<h2 id="noise-trade-off">The noise trade off at the CADR you were promised</h2>

<p>CADR is measured on the highest fan speed. That is the setting that produces the number on the label, and it is also the loudest. Many purifiers are comfortable on low, where they may deliver only a third or a half of the rated airflow, and intrusive on high. The rated CADR is therefore a peak, not a typical operating figure.</p>

<p>This is the central trade off in choosing a size. A purifier that is just adequate for the room on its top setting will run flat out to do its job, and most people end up turning it down or off because of the sound. A larger machine can deliver the same air changes on a medium setting, with a lower pitch and less fan noise. Oversizing by a factor of about one and a half to two is the usual remedy.</p>

<p>Manufacturers often quote noise in decibels on the lowest setting, which is flattering. A fairer comparison is to find the decibel figure at the speed that delivers the CADR you are relying on. If a listing gives a quiet number only for the lowest speed and a CADR only for the highest, the two figures describe different operating conditions and neither tells you what the machine will sound like while doing the job.</p>

<ul>
<li>Choose a CADR that meets your target at a medium fan speed, not only at maximum.</li>
<li>Check whether the decibel figure refers to the lowest or the highest speed.</li>
<li>Remember that pitch matters as much as level: broad, low airflow noise is easier to live with than a whine.</li>
</ul>

<h2 id="filters-and-cadr">How filters and maintenance erode CADR</h2>

<p>The label figure applies to a new filter in a new machine. As the filter loads with dust, the resistance to airflow rises, the fan moves less air, and the delivered CADR falls. A clogged pre-filter raises the pressure drop across the fan long before the purifier looks dirty, so a unit left alone for a year can be running well below its rating without any visible sign.</p>

<p>The filter itself also matters. A tightly pleated high efficiency filter captures more fine particles, but it also resists airflow more, which is why a purifier with a very dense filter needs a stronger fan to reach the same CADR. Filter grade is covered in the separate guide to <a href="/guide/hepa-vs-true-hepa-filters">HEPA and true HEPA filters</a>, and the two guides are best read together.</p>

<p>Replacement cost is the true ownership expense of a purifier. A cheap machine with an expensive proprietary filter replaced twice a year can cost more over three years than a premium machine with a long lived filter. Check the recommended replacement interval, and whether washable pre-filters are included, before you commit, because a purifier you stop maintaining stops delivering its CADR.</p>

<h2 id="placement">Placement and the things that quietly reduce performance</h2>

<p>CADR is measured in a mixed chamber with no furniture. In a real room, placement matters. A purifier pushed into a corner behind a sofa, or one whose intake faces a wall, recirculates the air nearest to it and cleans the rest of the room more slowly. Leave at least a foot of clearance on the intake sides, and keep the outlet unobstructed.</p>

<p>Open doors and windows work against any purifier. Air changes per hour assume a closed room. In a space with constant outdoor air exchange, such as an open window in pollen season, the purifier is fighting a continuous supply of fresh pollutants and the achieved reduction will be smaller than the calculation suggests. For smoke events, close the room as far as is practical and run the unit on high for the first hour.</p>

<p>Another non-obvious failure is a purifier that filters particles well but is placed far from the source. A unit at one end of a long room takes longer to clear a source at the other end, because the air must travel to it. For a kitchen adjoining a living area, putting a purifier near the passage between the two catches cooking particles before they spread.</p>

<h2 id="when-to-consult">When to see a professional</h2>

<p>An air purifier manages airborne particles. It does not diagnose or treat a medical condition, and it cannot remove carbon monoxide, which is a gas produced by faulty combustion appliances. Fit a carbon monoxide alarm regardless of any purifier you own.</p>

<p>Speak to a doctor if breathing symptoms are persistent or worsening: wheezing, chest tightness, shortness of breath at rest, or an asthma action plan that is no longer controlling symptoms. Seek urgent care for severe breathlessness or blue lips. Allergic symptoms that follow a clear pattern, such as worsening in one room, may justify allergy testing to identify the cause.</p>

<p>If you suspect mould, a gas leak or a heating fault, the right step is to find and fix the source, not to filter around it. Damp rooms in particular are a moisture problem first, covered in <a href="/guide/dehumidifier-size-explained">our dehumidifier sizing guide</a>. A purifier is a supporting measure alongside source control, ventilation and regular cleaning. Browse the wider <a href="/categories/home-kitchen">home and kitchen category</a> for related guides on the equipment that shapes indoor air.</p>

<h2 id="faq">Frequently asked questions</h2>

<h3>What CADR do I need for a 300 square foot room?</h3>

<p>Using the two thirds guideline with a standard 8 foot ceiling, a smoke CADR of about 200 cfm gives roughly five air changes per hour. If you want the machine to run on a medium, quieter setting, choose a unit rated nearer 300 cfm so the headline figure leaves headroom. For a higher ceiling, scale up in proportion to the extra height.</p>

<h3>Does a higher CADR cost more to run?</h3>

<p>Usually, yes, because it means a stronger fan, and fan power draws electricity. In practice the running cost of even a large purifier is modest compared with a heater or air conditioner, but it runs for many hours. A larger machine on a low setting can use less energy than a small one forced onto high, so oversizing is not automatically wasteful.</p>

<h3>Is a bigger coverage number always better?</h3>

<p>Not as a standalone number. Coverage depends on the air changes the maker assumed, and two machines with the same coverage claim can have very different CADR values if the assumptions differ. Compare the smoke CADR directly, and use the coverage figure only as a loose indication.</p>

<h3>Can a purifier remove odours and cooking smells?</h3>

<p>CADR measures particles only. Odours are gases and need activated carbon, and a thin carbon layer saturates quickly. Particles from cooking smoke are captured, which can reduce visible haze, but the smell may remain unless a substantial carbon filter is fitted and replaced on schedule.</p>

<h3>What if my room is open to the rest of the home?</h3>

<p>Use the combined volume of the connected spaces, or treat the purifier as serving only the area around it. Open plan homes often need two smaller units placed in different zones rather than one large one, since air takes time to travel the full length of the space.</p>

<h3>Do I still need a purifier if I have a whole home HVAC filter?</h3>

<p>A furnace filter only cleans air when the blower runs, and its efficiency varies widely by grade. A purifier cleans continuously in the room where you spend time, so the two are complementary. Fitting a higher grade furnace filter that your system can handle also helps the whole house.</p>

<h2 id="bottom-line">The bottom line</h2>

<p>Ignore the headline coverage and calculate with the smoke CADR. Measure the room, including ceiling height, and divide: you want a smoke CADR of at least two thirds of the floor area for a standard ceiling, and more if you want to run quietly or the room is open to others. That one calculation is worth more than any other line on the box.</p>

<p>Prefer a verified rating with all three numbers, and buy larger than the minimum so the machine can work on a middle fan speed. Check the filter replacement interval and the cost of the filters before you buy, because a purifier that is neglected will not deliver the rating you paid for.</p>

<p>When you are ready to compare specific models, start with our <a href="/guide/best-air-purifiers-for-living-rooms">guide to air purifiers for living rooms</a>, which applies these rules to real products.</p>`,
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
    {"image":"bench-flat-pad.webp","author":"12019","license":"Pixabay Content License","source":"https://pixabay.com/photos/man-bench-press-weight-weights-81725/","via":"Pixabay"},
    {"image":"bench-dumbbell-press.webp","author":"Unknown","license":"CC0","source":"https://www.rawpixel.com/image/8739130/matt-phelps-break-world-record","via":"Openverse"},
    {"image":"bike-indoor-cycling-row.webp","author":"musculacaoMM2020","license":"Pixabay Content License","source":"https://pixabay.com/photos/exercise-bicycle-workout-gym-6486193/","via":"Pixabay"},
    {"image":"castiron-seasoned-skillet.webp","author":"u_uiv44oi92w","license":"Pixabay Content License","source":"https://pixabay.com/photos/cast-iron-skillet-walnuts-10558697/","via":"Pixabay"},
    {"image":"cooktop-induction-surface.webp","author":"Fxq19910504","license":"Pixabay Content License","source":"https://pixabay.com/photos/stir-fry-potato-floss-1797624/","via":"Pixabay"},
    {"image":"iprating-phone-in-water.webp","author":"AS_Photography","license":"Pixabay Content License","source":"https://pixabay.com/photos/wet-smartphone-iphone-plus-apple-3369007/","via":"Pixabay"},
    {"image":"washer-patio-cleaning.webp","author":"Mosatsu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/w/index.php?curid=131686774","via":"Openverse"},
    {"image":"dehumidifier-portable-unit.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/21TT7epZ3xL._SL500_.jpg","via":"Amazon"},
    {"image":"hepa-kowa-filter.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/510mgrRPPIL._SL500_.jpg","via":"Amazon"},
    {"image":"cadr-purifier-core300.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/3137UpsSXkL._SL500_.jpg","via":"Amazon"},
    {"image":"studfinder-handheld-scanner.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31sFkzKwYKL._SL500_.jpg","via":"Amazon"},
    {"image":"rower-air-flywheel-gym.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31v8qFAXPJL._SL500_.jpg","via":"Amazon"},
    {"image":"wifi-router-antennas.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31hsjP9+bQL._SL500_.jpg","via":"Amazon"},
    {"image":"sandpaper-grit-sheets.webp","author":"BRRT","license":"Pixabay Content License","source":"https://pixabay.com/photos/sandpaper-close-up-texture-paper-654698/","via":"Pixabay"},
    {"image":"dehumidifier-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31PVrmTchaL._SL500_.jpg","via":"Amazon"},
    {"image":"dehumidifier-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31pqvdCNZqL._SL500_.jpg","via":"Amazon"},
    {"image":"hepa-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31K9NLoXncL._SL500_.jpg","via":"Amazon"},
    {"image":"hepa-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/419EDCYNm+L._SL500_.jpg","via":"Amazon"},
    {"image":"cadr-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/516Q3qcYzqL._SL500_.jpg","via":"Amazon"},
    {"image":"cadr-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/51eKO-HwWVL._SL500_.jpg","via":"Amazon"},
    {"image":"studfinder-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31+9bKL9N5L._SL500_.jpg","via":"Amazon"},
    {"image":"studfinder-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31iVtujHkOL._SL500_.jpg","via":"Amazon"},
    {"image":"massagegun-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31ij9FmvFiL._SL500_.jpg","via":"Amazon"},
    {"image":"washer-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/41BUwtSML4L._SL500_.jpg","via":"Amazon"},
    {"image":"washer-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/41GHbRpQtKL._SL500_.jpg","via":"Amazon"},
    {"image":"rower-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/41UFnR7QXpL._SL500_.jpg","via":"Amazon"},
    {"image":"rower-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/41TmD6KcH4L._SL500_.jpg","via":"Amazon"},
    {"image":"smarthome-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31kQCWZJbnL._SL500_.jpg","via":"Amazon"},
    {"image":"torquewrench-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/41AOiIwQUcL._SL500_.jpg","via":"Amazon"},
    {"image":"torquewrench-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/41SxaO777GL._SL500_.jpg","via":"Amazon"},
    {"image":"wifi-product-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31cXnHQNtzL._SL500_.jpg","via":"Amazon"},
    {"image":"wifi-product-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/31Q7C3-+E7L._SL500_.jpg","via":"Amazon"},
    {"image":"iprating-wet-smartwatch.webp","author":"indraprojects","license":"Pixabay Content License","source":"https://pixabay.com/photos/smartwatch-technology-watch-time-8300238/","via":"Pixabay"},
    {"image":"bike-alt-rower-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/3196CD2pYrL._SL500_.jpg","via":"Amazon"},
    {"image":"bands-alt-dumbbell-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/315+bjBhWHL._SL500_.jpg","via":"Amazon"},
    {"image":"sandpaper-drill-1.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/41B-BDgzOgL._SL500_.jpg","via":"Amazon"},
    {"image":"sandpaper-drill-2.webp","author":"Amazon product image","license":"Product image","source":"https://m.media-amazon.com/images/I/51lJR91RS+L._SL500_.jpg","via":"Amazon"},
  ],
  shopGuides: [
    {"title":"Best air purifiers for large rooms","href":"/guide/best-air-purifiers-for-living-rooms","blurb":"Purifiers compared on CADR, filters and noise"},
  ],
  relatedGuides: [
    {"title":"Best air purifiers for large rooms","href":"/guide/best-air-purifiers-for-living-rooms"},
    {"title":"HEPA vs true HEPA filters","href":"/guide/hepa-vs-true-hepa-filters"},
    {"title":"Humidifier types compared","href":"/guide/humidifier-types-compared"},
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
