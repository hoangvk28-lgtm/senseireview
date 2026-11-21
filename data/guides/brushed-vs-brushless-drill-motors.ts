import type { InfoGuideModule } from "@/components/guide/InfoGuidePage";

const guide: InfoGuideModule = {
  kind: "info",
  guideSlug: "brushed-vs-brushless-drill-motors",
  guideTitle: "Brushed vs Brushless Drill Motors: Is the Premium Worth It?",
  metaTitle: "Brushed vs Brushless Drill Motors",
  metaDescription: "How brushed and brushless drill motors commutate, and what that means for heat, runtime per charge, torque under load, lifespan, and when brushed is right.",
  heroImage: "/images/articles/brushless-drill-motor-parts.webp",
  lastUpdated: "2026-11-21",
  readTime: "12 min",
  quickAnswer: "A brushed motor switches current to its rotor with carbon brushes that rub on a commutator, which wastes energy as heat and friction and wears out. A brushless motor uses a circuit board to switch current electronically, so it runs cooler, gets more work from each battery charge, and has no brushes to wear. It costs more. Brushless is worth it if you drill or drive screws often, and a brushed drill is still sensible for occasional light jobs.",
  html: `<p>Walk down the cordless drill aisle and the same model number often appears twice, one with a small badge reading brushless and a price noticeably higher. The packaging promises more power, longer runtime and a longer life. Some of those claims are solid and some are inflated, and the gap between them is what a buyer needs to understand to decide whether the premium makes sense for the jobs they actually do.</p>

<p>This guide explains how each type of motor works in plain terms, then follows the consequences: heat, runtime on a charge, torque under load, the electronic protections that only brushless designs can offer, how long each lasts, and the cases where the older brushed design remains the sensible choice. It also covers the common marketing claims and which ones hold up.</p>

<h2 id="how-brushed-works">How a brushed motor works</h2>

<p>An electric motor turns because a magnetic field pushes on a coil carrying current. For the rotor to keep turning, the direction of current in its coils must reverse at the right moments, otherwise it would stop after half a turn. A brushed motor does this mechanically. Two carbon blocks, the brushes, press against a segmented ring on the rotor shaft called the commutator, and as the rotor spins, the segments pass under the brushes and switch the current direction automatically.</p>

<p>The design is simple and cheap to make, and it has been used for over a century. It works with direct current straight from a battery, with no electronics beyond a switch and a speed control. For power tools, that meant a low cost and a robust product, which is why brushed motors dominated cordless drills for decades and still appear in budget models.</p>

<p>The price of the simplicity is friction and sparking. The brushes rub constantly against the commutator, which wastes some energy as heat, creates carbon dust and wears down both parts. A small amount of electrical arcing occurs at the contacts, which makes electrical noise and, over time, pits the surfaces. These losses are small in a light duty drill and larger in a hard working one.</p>

<h2 id="how-brushless-works">How a brushless motor works</h2>

<p>A brushless motor turns the arrangement inside out. The permanent magnets sit on the rotor, and the coils are fixed on the stator, so no current needs to be fed to the moving part. Without a commutator, something else must switch the coil currents at the right moment, and that is the job of a small electronic controller. Sensors, or the motor's own electrical signals, tell the controller where the rotor is, and it energises the coils in sequence.</p>

<p>Removing the brushes removes the friction, the arcing and the carbon dust, and it removes the wear part. The controller can also adjust the timing and current continuously, so it can fine tune the motor's behaviour from moment to moment. This is the source of nearly every advantage that brushless tools offer, and it also explains the cost, since the controller and the magnets add electronics and materials.</p>

<p>The coils being on the outside also helps heat. In a brushed motor the hot windings are on the spinning rotor deep inside, and heat has to travel through the shaft and air. In a brushless motor the windings are attached to the housing, so heat flows out more directly. That is one reason brushless motors can be pushed harder for longer.</p>

<table>
<thead>
<tr><th>Aspect</th><th>Brushed</th><th>Brushless</th></tr>
</thead>
<tbody>
<tr><td>Current switching</td><td>Mechanical, carbon brushes and commutator</td><td>Electronic controller</td></tr>
<tr><td>Wear parts</td><td>Brushes wear and need replacing in heavy use</td><td>No brushes, bearings are the main wear part</td></tr>
<tr><td>Heat</td><td>More waste heat from friction and arcing</td><td>Less waste heat, windings cool more easily</td></tr>
<tr><td>Runtime per charge</td><td>Shorter at the same load</td><td>Longer at the same load</td></tr>
<tr><td>Electronics</td><td>Minimal</td><td>Controller allows smart protection</td></tr>
<tr><td>Cost</td><td>Lower</td><td>Higher</td></tr>
</tbody>
</table>

<figure>
<img src="/images/articles/brushless-cordless-drill.webp" alt="A cordless drill with a battery pack attached" />
<figcaption>A cordless drill of the kind sold in brushed and brushless versions, with the difference sitting inside the motor housing.</figcaption>
</figure>

<h2 id="heat-and-efficiency">Heat and efficiency</h2>

<p>Every motor wastes some energy as heat. A brushed motor has two extra sources of loss, the friction of the brushes and the electrical resistance at the contacts, and so it turns a smaller share of battery energy into useful work. A brushless motor, with no contact losses, converts a larger share. The exact difference depends on the model and the task, and no source documents one universal figure, but the direction is consistent.</p>

<p>Efficiency matters because heat limits how hard a tool can work. A hard working brushed drill heats up, and the heat damages the winding insulation and the battery over time. Brushless tools run cooler under the same load, so they can sustain heavy work, such as driving long screws or drilling large holes, without the tool becoming too hot to hold or the thermal protection tripping.</p>

<p>For light, intermittent work, the difference barely shows. Hanging a few pictures, assembling flat pack furniture or tightening a few screws does not stress a motor, and a brushed drill does the job without noticeable disadvantage. The heat benefit appears with repeated, heavy or long duration use, which is why professionals adopted brushless first.</p>

<h2 id="runtime">Runtime per charge</h2>

<p>Wasting less energy as heat means more of the battery goes into the work, so brushless tools commonly run longer on the same battery. Manufacturers often claim improvements of a fifth to a half, depending on the task, but these claims come from the makers' own tests under conditions they chose, and real gains vary. A fair summary is that the gain is real and usually meaningful for demanding work, and small for light tasks.</p>

<p>The battery itself matters at least as much. A larger capacity pack gives more runtime to either motor type, and the guide to <a href="/guide/battery-voltage-and-amp-hours-explained">battery voltage and amp hours</a> explains how to read those figures. A brushed drill with a large battery can outlast a brushless drill with a small one, so compare the whole package, not the motor alone.</p>

<p>The load changes the picture as well. At light load, the controller in a brushless tool draws a small standby current and it also draws current while running, and the difference from a brushed motor is modest. At heavy load, where brushed motors lose proportionally more energy as heat, the gap widens. If you often drive large screws, drill into masonry or use hole saws, you will notice it in the number of holes per charge.</p>

<h2 id="torque-and-control">Torque under load and electronic control</h2>

<p>Because the controller monitors the motor continuously, a brushless tool can deliver more of its peak torque when needed and adjust to the load. In practice, a brushless drill tends to hold its speed better when the bit bites into hard material, instead of slowing and heating. The controller can also limit current to protect the motor and battery, so the tool does not burn out if it stalls.</p>

<p>Electronic clutch settings and overload protection are common in brushless tools. The controller can detect when the rotor is stalling and shut off, or ease the torque as a screw seats, which is gentler on the screw head and the workpiece. Some also offer a mode that senses the end of a screw drive. These features are possible in a brushed tool with added electronics, but brushless designs already have the hardware.</p>

<p>Torque figures on the box deserve caution. Peak torque is quoted in different ways by different brands, and the figure for a drill is not directly comparable with the one for an impact driver. The relationship between the two tool types is covered in <a href="/guide/drill-vs-impact-driver">drill versus impact driver</a>. Judge a tool by the work it does and by owner feedback, not just a headline number.</p>

<h2 id="lifespan">Lifespan, brush wear and maintenance</h2>

<p>A brushed motor's brushes wear down with use, a little each time the tool runs. Eventually they become too short to press against the commutator, and the tool loses power, sparks heavily or stops. Many tools allow brushes to be replaced, and a set is inexpensive, but not all do, and a worn commutator can be damaged beyond easy repair. For a weekend user, the brushes may outlast the tool. For daily heavy use, they are a service item.</p>

<p>Brushless motors avoid this wear. Their main mechanical wear parts are the bearings, which last long when the tool is not abused. The electronics can fail, usually from heat, moisture or an impact, and a failed controller is more costly to repair than a set of brushes. Overall, brushless tools tend to last longer in heavy use, but the repair economics differ, and many people replace the tool instead of repairing it.</p>

<p>For either type, the basic care is the same: keep vents clear of dust, avoid blocking the fan, do not run the tool to a stall for long, and let a hot tool cool. Store batteries at moderate temperatures. A drill that smells hot, has a burning odour or loses power suddenly deserves a rest and an inspection of the vents.</p>

<h2 id="when-brushed">When brushed is still the sensible buy</h2>

<p>If you use a drill a few times a year, a brushed model gives all the performance you need at a lower price. The extra cost of brushless is spent on efficiency and durability that you will not use. A budget brushed drill with a decent battery is a reasonable choice for a flat, a rented home or a household toolkit.</p>

<p>Brushed motors also make sense in low cost tools bought as a stopgap, in secondary tools kept for a single task, and in cases where brushes are easily replaced and a long tool life is expected. A brushed tool that is part of a battery platform you already own can be the cheapest way to add a tool to a system.</p>

<p>The choice shifts as use increases. If you build furniture, renovate rooms, drill into masonry or use a drill almost daily, brushless pays back through runtime, cooler operation and fewer worn parts. The premium is usually modest compared with the total cost of the tool and batteries, and for a regular user the difference is felt every working day.</p>

<figure>
<img src="/images/articles/brushless-drill-driving-screw.webp" alt="A cordless drill driving a screw into a piece of wood" />
<figcaption>A cordless drill driving a screw into wood, a task where runtime and torque control are the benefits of a brushless motor.</figcaption>
</figure>

<p>Weight and balance are easy to overlook and affect real use. Brushless motors are often a little shorter for the same output, which can make the tool more compact and easier to use in a tight space such as between joists or inside a cabinet. A shorter tool also puts less strain on the wrist during overhead work. If you spend long periods drilling above head height, a compact brushless model can be a bigger comfort upgrade than any torque figure on the box.</p>

<p>Noise and feel differ slightly as well. Brushed motors have a characteristic whine and, in older tools, a rougher feel at low speed. Brushless motors usually run smoother and let the controller deliver fine speed control from the trigger, which helps when starting a hole on a smooth surface without the bit skating. This is a modest advantage, but people who drill into tile or metal often notice it first.</p>

<p>Finally, consider the platform. A battery system is an investment across many tools, and the same battery fits both brushed and brushless tools in most ranges. Buying into a platform that offers the tools you may want later, such as an impact driver, a circular saw or an oscillating tool, matters more over ten years than the motor type of your first drill.</p>

<h2 id="marketing-claims">Marketing claims worth discounting</h2>

<p>Phrases such as the maker's own name for its brushless motor often suggest a unique technology, when the principle is the same across brands. Differences in controller tuning, magnet quality and housing design do matter, but they are not captured by a brand label. Look for the specifications and owner feedback on real tasks instead of branded names.</p>

<p>Power claims in watts or in a peak torque figure are another trap. A motor's rated power does not tell you how much torque reaches the chuck after the gearbox, and a drill with a lower figure but a better gearbox can feel stronger. Compare the speed ranges, the clutch settings and the weight, and consider whether the tool is comfortable to hold for the jobs you do.</p>

<p>Finally, a brushless label does not guarantee quality. A cheap brushless drill with a small battery and a plastic gearbox can be worse than a good brushed one. Judge the whole package, including the chuck, the batteries and the warranty. Browse the <a href="/categories/tools-diy">tools and DIY category</a> for related guides.</p>

<h2 id="safety">Safety and when to stop using a tool</h2>

<p>Stop using a drill that sparks heavily, smells of burning, shows smoke or loses power suddenly. For a brushed tool, heavy sparking may mean worn brushes. For any tool, a hot battery or a swollen pack is a hazard. Remove the battery and let the tool cool before investigating, and do not charge a damaged battery.</p>

<p>Wear eye protection when drilling, secure the workpiece, and keep clothing and hair clear of the chuck. Check for hidden cables and pipes before drilling into walls, which is covered in our guide to <a href="/guide/how-to-choose-a-stud-finder">choosing a stud finder</a>. If you receive an electric shock or a burn, seek medical advice.</p>

<p>Do not open a battery pack or a controller yourself, and take damaged lithium batteries to a recycling point rather than the household bin. If a tool has been dropped, check the housing and chuck for cracks before reuse, since a cracked housing can expose live parts.</p>

<h2 id="faq">Frequently asked questions</h2>

<h3>Is a brushless drill more powerful than a brushed drill?</h3>

<p>Not automatically. Power depends on the motor size, the voltage, the battery and the gearbox. A brushless motor is more efficient and can sustain its output under load, so in demanding work it often feels stronger, but a large brushed drill can outperform a small brushless one.</p>

<h3>Do brushless drills last longer?</h3>

<p>In heavy use, generally yes, because there are no brushes to wear. Bearings and electronics can still fail. For occasional use, both types usually outlast the owner's interest, so durability is a weak reason to buy brushless for light work.</p>

<h3>Can I replace the brushes in a brushed drill?</h3>

<p>Many models have accessible brush caps and sell replacement brushes cheaply. Others do not, and the tool must be opened. Check whether the model has replaceable brushes before buying if you expect heavy use.</p>

<h3>Is brushless worth it for a homeowner?</h3>

<p>If you use a drill monthly or more, or tackle larger projects, it can be, because of runtime and cooler running. For occasional hanging and assembly, a brushed model is adequate and cheaper.</p>

<h3>Do brushless tools use less battery?</h3>

<p>They typically use battery energy more efficiently, so you get more work per charge, especially under heavy load. The gain depends on the task, and manufacturers' percentage claims come from their own tests, so treat them as indicative.</p>

<h3>Will a brushless drill work with my old batteries?</h3>

<p>If the tool is from the same battery platform and voltage, usually yes. Check the manufacturer's compatibility list, since controller requirements and battery connectors can differ between generations.</p>

<h2 id="bottom-line">The bottom line</h2>

<p>Buy brushless if you use a drill regularly, work on demanding materials, or want fewer worn parts and more work per charge. The premium over a brushed tool is justified by runtime and cooler running, and it is felt most with heavy tasks.</p>

<p>Buy brushed if your use is occasional and light, or if you want the lowest price within a battery platform. A decent brushed drill with a good battery handles household jobs well, and no source documents a requirement that every tool must be brushless.</p>

<p>Whichever you choose, put the money into the battery capacity, the chuck and the grip as well as the motor, since the whole tool decides how it feels to use.</p>`,
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
    {"title":"Drill vs impact driver","href":"/guide/drill-vs-impact-driver"},
    {"title":"Battery voltage and amp hours explained","href":"/guide/battery-voltage-and-amp-hours-explained"},
    {"title":"How to choose drill bits","href":"/guide/how-to-choose-drill-bits"},
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
