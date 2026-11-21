import type { InfoGuideModule } from "@/components/guide/InfoGuidePage";

const guide: InfoGuideModule = {
  kind: "info",
  guideSlug: "power-bank-capacity-explained",
  guideTitle: "Power Bank Capacity Explained: mAh, Wh and Real Charges",
  metaTitle: "Power Bank Capacity: mAh vs Wh Explained",
  metaDescription: "Why a 10,000 mAh power bank does not give your phone 10,000 mAh, how to convert to Wh, how many charges to expect, USB-C PD wattage and the airline limit.",
  heroImage: "/images/articles/powerbank-capacity-pair.webp",
  lastUpdated: "2026-11-21",
  readTime: "12 min",
  quickAnswer: "A power bank's mAh rating is measured at the internal cell voltage, about 3.7 V, while your phone charges at 5 V or higher, so the usable capacity is lower than the label suggests. Convert to watt hours by multiplying mAh by 3.7 and dividing by 1,000, then expect to receive roughly two thirds to four fifths of that. A 10,000 mAh bank is about 37 Wh and gives most phones around two charges. Airlines generally limit carry-on banks to 100 Wh.",
  html: `<p>A phone with a 4,000 mAh battery and a power bank labelled 10,000 mAh seems to promise two and a half full charges. Owners of such a pair routinely find they get closer to two, and sometimes less. The shortfall is not a defect and it is not dishonest labelling in the narrow sense. It comes from how battery capacity is measured and what happens to energy when it is moved from one battery to another.</p>

<p>This guide explains the two ways of stating capacity, shows the one calculation that makes any power bank comparable to any other, and explains where the energy goes. It then covers how many charges to realistically expect, how wattage and USB-C Power Delivery affect which devices a bank can serve, the airline rule that catches travellers, and how cells age.</p>

<h2 id="mah-vs-wh">Why mAh alone is a misleading number</h2>

<p>Milliamp hours, mAh, measure electric charge, not energy. Two batteries with the same mAh store different amounts of energy if their voltages differ. Energy is charge multiplied by voltage, which is why the proper unit of battery capacity is the watt hour, Wh. A bank advertised in mAh without a voltage is giving you half of the information needed to compare it.</p>

<p>The lithium ion or lithium polymer cells inside a power bank have a nominal voltage of about 3.7 V. Manufacturers quote mAh at that cell voltage because it gives the largest number. Phones, tablets and earbuds are charged at USB voltages, typically 5 V and higher, so the bank must step the voltage up, and the capacity in terms of what reaches the device is lower than the label suggests.</p>

<p>Watt hours remove the ambiguity. To convert, multiply the mAh by the voltage and divide by 1,000. A 10,000 mAh bank at 3.7 V holds 37 Wh. A 20,000 mAh bank holds 74 Wh. A 4,000 mAh phone battery, which has a nominal voltage slightly above 3.8 V, holds a little over 15 Wh. Comparing in watt hours is the only fair way to compare a phone, a laptop and a bank.</p>

<table>
<thead>
<tr><th>Bank rating (at 3.7 V)</th><th>Stored energy</th><th>Rough use for a 15 Wh phone</th></tr>
</thead>
<tbody>
<tr><td>5,000 mAh</td><td>About 18.5 Wh</td><td>Around one full charge</td></tr>
<tr><td>10,000 mAh</td><td>About 37 Wh</td><td>Around two charges</td></tr>
<tr><td>20,000 mAh</td><td>About 74 Wh</td><td>Around four charges</td></tr>
<tr><td>27,000 mAh</td><td>About 100 Wh</td><td>Around five to six charges</td></tr>
</tbody>
</table>

<p>The last column is a rule of thumb that already accounts for losses. It assumes the bank delivers around two thirds to four fifths of its rated energy, which is the range commonly seen for good quality banks. No standard fixes this figure and it varies with the model, the output voltage and the load, so treat it as an estimate rather than a guarantee.</p>

<h2 id="where-energy-goes">Where the missing energy goes</h2>

<p>Three things consume energy between the cell and your phone. The first is voltage conversion. A boost converter lifts the 3.7 V cell to 5 V, 9 V or more, and no converter is perfectly efficient. A good one loses something like a tenth to a fifth of the energy as heat, and the loss is greater at light loads and at high output power, when the converter runs hot.</p>

<p>The second is the phone's own charging. Phone batteries are not charged with perfect efficiency, and energy is lost in the phone's charging circuit and in the cable. Some of it becomes heat, which you can feel in the phone and the bank during fast charging. Thin cables with high resistance waste more, so a short, well made cable helps a little.</p>

<p>The third is the bank's own housekeeping. The control chip, the indicator lights and the protection circuits draw a small amount of power while the bank is running. A bank left plugged into a device that is already full may keep drawing small amounts. Some banks switch off at low current, which is a nuisance for earbuds and fitness trackers, and others have a low current mode for that case.</p>

<figure>
<img src="/images/articles/powerbank-two-units-cable.webp" alt="Two portable power banks of different sizes with a charging cable" />
<figcaption>Two power banks of different sizes, where the stated capacity and the energy that reaches a phone are not the same number.</figcaption>
</figure>

<h2 id="how-many-charges">How many charges to expect</h2>

<p>Divide the usable energy of the bank by the battery energy of your device. For a 10,000 mAh bank, take about 37 Wh, multiply by roughly 0.7 for losses, and you get around 26 Wh. A phone with a 15 Wh battery then receives about 1.7 full charges, which rounds to between one and a half and two. A smaller earbud case or a tablet follows the same arithmetic with its own watt hour figure, which is printed in its specifications or on the back of the device.</p>

<p>For a laptop, the figures get large quickly. Many thin laptops have batteries of 40 to 70 Wh. A 20,000 mAh bank at 74 Wh, after losses, gives about one charge for a thin laptop, and that only if the bank can output enough wattage. The practical question for a laptop is as much about power rating as about capacity, which is covered in the next section.</p>

<p>Real life makes the numbers worse in two ways. Cold temperatures reduce the available capacity of lithium cells, sometimes dramatically below freezing. And using the phone while it charges from the bank means some of the energy goes straight into running the screen. The estimates are best case, so when you plan for a long trip or a hike, add a margin of a third or more.</p>

<h2 id="wattage-and-pd">Output wattage and USB-C Power Delivery</h2>

<p>Capacity is how much energy a bank holds. Output wattage is how fast it can deliver it. A large bank with a weak output charges a laptop very slowly or not at all. Phones typically accept anything from a few watts up to a few tens of watts, tablets somewhat more, and laptops anywhere from around 30 watts to 100 watts depending on the model.</p>

<p>USB-C Power Delivery, or USB PD, is the common protocol for negotiating higher voltages and currents over a USB-C connection. A bank and a device agree on a voltage such as 9 V, 15 V or 20 V and a current, which determines the wattage. Check that the bank lists PD output at the wattage your device wants, not just a USB-C port. The protocol is explained in detail in <a href="/guide/usb-c-charging-standards-explained">USB-C charging standards explained</a>.</p>

<p>Watch for a port that shares output. Many banks with two or three ports quote a total power, and the power falls when more than one device is connected. A bank advertised at a high wattage may deliver it only from one port, and only when the others are empty. Read the table of per port and combined outputs in the specifications, not just the headline.</p>

<h2 id="airline-limit">The airline 100 Wh limit</h2>

<p>Lithium batteries are a fire risk, and aviation rules treat power banks as spare batteries, not as part of a device. Power banks must travel in carry-on baggage, not in the hold, and must not be used in some airlines' cabins. The common limit is 100 Wh per battery, and batteries between 100 Wh and 160 Wh typically need airline approval, with a small number allowed per passenger. Larger ones are generally not permitted.</p>

<p>The limit is in watt hours, which is why the conversion matters. A bank labelled 27,000 mAh at 3.7 V is almost exactly 100 Wh, so many large banks are sold at 26,800 mAh or lower to stay just under the line. A bank with only mAh printed may require you to do the sum at the check-in desk, and some banks print the Wh figure on the case for this reason.</p>

<p>Rules differ by airline and country, and they change, so check your airline's current guidance before travelling. Tape over exposed terminals on loose spare batteries, keep the bank where you can reach it, and do not charge it from the seat power for long periods while unattended. If the bank has no Wh or mAh marking, you may be asked to leave it behind.</p>

<h2 id="cell-aging">Cell aging, cycles and when to replace</h2>

<p>Lithium cells lose capacity over time. Manufacturers often quote a number of charge cycles before capacity falls to a set fraction, such as 80 percent, but there is no single standard and the figure depends on how the bank is used. Heat, keeping a bank fully charged for months, and repeated deep discharges all shorten the life of a cell, while moderate temperatures and partial cycles help.</p>

<p>A power bank that has lost a good share of its capacity still works but disappoints, and the loss is gradual so owners often miss it. A bank that gives one and a half charges when it once gave two may simply be several years old. If you rely on a bank for travel, test it at home before a trip: charge it fully, run a phone down and measure what you get.</p>

<p>Retire a bank that swells, becomes unusually hot, smells, or has a damaged case. Swelling means gas is forming inside the cell and it is a safety hazard, not a performance issue. Do not throw lithium batteries in household waste. Take them to a battery recycling point. For devices where moisture is a concern, see the guide to <a href="/guide/ip-ratings-explained">IP ratings explained</a>, as most banks are not waterproof.</p>

<h2 id="choosing">Choosing a size for how you live</h2>

<p>For daily commuting and a day out, a bank of 5,000 to 10,000 mAh covers one or two phone charges and fits a pocket. It is light enough that you will actually carry it, which matters because the best power bank is the one in your bag. Earbuds and headphones draw little, so a small bank goes a long way, as discussed in <a href="/guide/how-noise-cancelling-headphones-work">how noise cancelling headphones work</a>.</p>

<p>For weekends away, camping or a tablet, a bank of 20,000 mAh gives several charges but weighs several hundred grams. For a laptop, look at the PD output first and capacity second, and note that many laptops need 45 to 100 watts. For travel, check the 100 Wh limit. More capacity is not always better: a heavy bank that stays at home is worth nothing.</p>

<p>Pass through charging, where the bank charges a device while it is itself being charged, is useful but not universal and may be slower. Wireless charging on a bank is convenient but less efficient than a cable, and some energy becomes heat. For efficiency, use a cable. Browse the <a href="/categories/tech-electronics">tech and electronics category</a> for related guides.</p>

<figure>
<img src="/images/articles/powerbank-phone-charging.webp" alt="A smartphone charging from a portable power bank by cable" />
<figcaption>A phone connected to a power bank by cable, the most efficient way to move energy between the two batteries.</figcaption>
</figure>

<p>Recharge time is the cost people forget. A large bank with a slow input can take a full day to refill from a small phone charger, because the input wattage, not the capacity, sets the pace. A 20,000 mAh bank holds about 74 Wh, so a 10 watt input needs over seven hours in the best case, and longer once charging slows near the top. Look for a bank that accepts a higher wattage input over USB-C, so that you can refill it overnight or during a short stop.</p>

<p>Display and indicator quality also vary. Four lights give a crude sense of charge, while a numeric percentage or wattage readout is more useful. Neither is precise, since banks estimate the remaining charge from voltage, which drifts with load and temperature. Treat the last light as a warning rather than a measurement, and do not be surprised if the bank cuts out earlier than the display implies, especially in the cold.</p>

<h2 id="safety">Safety and when to stop using a bank</h2>

<p>Buy banks from established sellers that list their specifications, including the watt hour rating and protection features such as overcharge, over-discharge, short circuit and temperature protection. Very cheap banks with implausible capacity claims, such as a pocket sized unit claiming tens of thousands of mAh, often have much lower real capacity, and no source documents a reliable way to check this without a lab.</p>

<p>Do not charge a bank under a pillow or on soft furnishings where heat cannot escape, and do not leave it in a hot car. If a bank becomes too hot to hold, disconnect it and let it cool in an open place. If it emits smoke or a strong chemical smell, move it away from anything flammable if it is safe to do so and call emergency services. Never puncture or crush a bank.</p>

<p>If you suffer a burn, apply cool running water and seek medical care for anything beyond minor redness. If a battery leaks and you get fluid on your skin, rinse with water and seek advice. These are rare events, but a damaged bank should be removed from use rather than tested further.</p>

<h2 id="faq">Frequently asked questions</h2>

<h3>Why does my 10,000 mAh bank only charge my phone about twice?</h3>

<p>The rating is at the cell voltage of about 3.7 V, and energy is lost in voltage conversion, cable resistance and heat. After those losses you receive roughly two thirds to four fifths of the rated energy, which for a typical phone means about two charges, or fewer for a large phone battery.</p>

<h3>Is a higher mAh always better?</h3>

<p>Only for capacity. A higher figure also means more weight and a longer time to recharge the bank itself. It tells you nothing about output wattage, port count or quality. Choose capacity to match what you charge and how long you are away from a socket.</p>

<h3>Can I take a power bank on a plane?</h3>

<p>Generally yes in carry-on baggage, up to 100 Wh without special approval. Banks between 100 Wh and 160 Wh usually need airline approval. Check your airline's current rules, since they vary and can change, and never pack banks in checked baggage.</p>

<h3>How long does a power bank last before it wears out?</h3>

<p>It depends on use and heat. Manufacturers quote cycle counts, but there is no common standard. Expect noticeable capacity loss after a few years of regular use. If your bank gives clearly fewer charges than before, or swells, replace it.</p>

<h3>Can a power bank charge a laptop?</h3>

<p>Yes, if it supports USB-C Power Delivery at the wattage your laptop needs and has enough capacity. Many laptops need 45 to 100 watts. A bank with a lower output may charge the laptop slowly or only slow its drain.</p>

<h3>Should I leave my power bank fully charged?</h3>

<p>Occasional full charges are fine. For long storage, keep it at partial charge, around half, in a cool place. Constant heat and full charge age cells faster, so avoid leaving a bank in direct sun or in a hot vehicle.</p>

<h2 id="bottom-line">The bottom line</h2>

<p>Ignore the headline mAh on its own and convert to watt hours with a quick sum: mAh times 3.7 divided by 1,000. Then expect about two thirds to four fifths of that to reach your device, and plan for a margin. That alone tells you how many charges a bank really offers.</p>

<p>Match the output wattage to the devices you charge, check that any PD claim names the wattage on the port you will use, and keep banks below 100 Wh if you fly. Buy from sellers that publish real specifications rather than round numbers that look too good.</p>

<p>Finally, treat a power bank as a consumable. Keep it cool, charge it sensibly, test it before important trips, and replace it when it swells or loses obvious capacity.</p>`,
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
    {"title":"USB-C charging standards explained","href":"/guide/usb-c-charging-standards-explained"},
    {"title":"How noise cancelling headphones work","href":"/guide/how-noise-cancelling-headphones-work"},
    {"title":"IP ratings explained","href":"/guide/ip-ratings-explained"},
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
