import type { InfoGuideModule } from "@/components/guide/InfoGuidePage";

const guide: InfoGuideModule = {
  kind: "info",
  guideSlug: "how-noise-cancelling-headphones-work",
  guideTitle: "How Noise Cancelling Headphones Work and What They Cannot Do",
  metaTitle: "How Noise Cancelling Headphones Work",
  metaDescription: "Feedforward, feedback and hybrid ANC explained, why it cuts steady hum better than voices, the pressure feeling, battery cost and why dB claims do not compare.",
  heroImage: "/images/articles/anc-over-ear-headphones.webp",
  lastUpdated: "2026-11-21",
  readTime: "12 min",
  quickAnswer: "Active noise cancelling headphones use small microphones to listen to outside sound, then play an inverted copy through the speakers so the two waves partly cancel at your ear. It works best on low, steady sounds such as engine rumble and air conditioning, and poorly on sudden or high pitched sounds like voices, which passive isolation from the ear cups and tips has to handle. Treat decibel reduction claims cautiously, because brands do not measure them the same way.",
  html: `<p>Put on a good pair of noise cancelling headphones in an aircraft cabin and the engine roar seems to drop away, as if someone had turned down a dial on the world. Take them off, and you realise how loud it was. Yet the same headphones do almost nothing about the person talking in the next seat, and that gap between the dramatic and the disappointing is the most useful thing to understand before you spend money on a pair.</p>

<p>This guide explains how active noise cancelling works at the level of the physics and the electronics, why the technique favours some sounds over others, how the three circuit designs differ, and what the pressure sensation, the transparency mode and the battery drain really are. It also explains why the numbers on a product page are not comparable from one brand to the next.</p>

<h2 id="the-basic-idea">The basic idea: cancelling a wave with its mirror image</h2>

<p>Sound is a pressure wave in the air, a pattern of compressions and rarefactions. If you produce a second wave that is the exact opposite, compression where the first has rarefaction, the two add up to something close to silence at the point where they meet. This is called destructive interference, and it is the principle that active noise cancelling, usually shortened to ANC, relies on.</p>

<p>In a headphone, tiny microphones pick up the ambient sound. A processor flips the signal in phase, so every peak becomes a trough, and plays that inverted signal through the driver along with your music. The result at your eardrum is the sum of the real noise leaking in and the artificial anti-noise. If the timing and level are close enough, the sum is much quieter than the noise alone.</p>

<p>Timing is the hard part. The processor has only a tiny fraction of a millisecond to measure, invert and play the signal, and at higher frequencies the wave changes direction so quickly that even a small delay makes the anti-noise arrive out of step. That is the key to everything that follows, because it explains why ANC works well in one part of the sound spectrum and barely at all in another.</p>

<h2 id="three-designs">Feedforward, feedback and hybrid ANC</h2>

<p>There are three circuit layouts, differing in where the microphone sits. A feedforward system places a microphone on the outside of the ear cup, listening to noise before it reaches your ear. A feedback system places the microphone inside the cup, close to the driver, listening to what actually arrives at your ear after the headphone has done its work. A hybrid system uses both.</p>

<p>Feedforward is good at predicting incoming noise and can handle a wider range of frequencies, but it cannot see the result, so it cannot correct for the way the headphone sits on your head. Any gap in the seal changes the result, and it can pick up wind noise on the outer microphone. Feedback measures the end result and corrects errors, which makes it more robust to fit variations, but it can become unstable at higher frequencies and is limited by the delay inside the cup.</p>

<p>Hybrid designs combine both, using the outside microphone to anticipate noise and the inside microphone to trim the error. Most premium models are hybrid, and many have several microphones per ear. More microphones can give better results but also more processing and more battery use. A hybrid system is not automatically better, since tuning matters as much as the layout, but it has more capability to work with.</p>

<table>
<thead>
<tr><th>Design</th><th>Microphone position</th><th>Strength</th><th>Weakness</th></tr>
</thead>
<tbody>
<tr><td>Feedforward</td><td>Outside the ear cup</td><td>Anticipates noise, works over a wider range</td><td>Sensitive to fit, wind noise, cannot see the result</td></tr>
<tr><td>Feedback</td><td>Inside the ear cup</td><td>Corrects for what you actually hear</td><td>Limited at higher frequencies, can become unstable</td></tr>
<tr><td>Hybrid</td><td>Both inside and outside</td><td>Combines prediction and correction</td><td>More processing, more battery use, depends on tuning</td></tr>
</tbody>
</table>

<figure>
<img src="/images/articles/anc-headphones-over-ear.webp" alt="Wireless over-ear headphones with large padded ear cups" />
<figcaption>Large padded ear cups give passive isolation first, which active circuitry then builds on.</figcaption>
</figure>

<h2 id="why-low-hum">Why ANC cancels steady hum better than voices</h2>

<p>Low frequency sounds have long wavelengths, measured in metres, so the pressure changes slowly and predictably. A processor has plenty of time relative to the wave to produce a good opposite, and the sound reaching both ear and microphone is nearly the same. That is why the engine drone of a plane, the rumble of a train, an air conditioner and road noise are cut dramatically.</p>

<p>Higher frequencies, such as the consonants in speech, a baby crying or a clatter of cutlery, have short wavelengths and change rapidly. A small change in head position or a few millimetres' difference between microphone and eardrum changes the phase relationship. Voices are also irregular and unpredictable, so even a perfect system cannot anticipate them. In practice ANC reduces them only slightly, if at all, and sometimes leaves an odd hollow quality.</p>

<p>The practical effect is that ANC changes the character of noise more than it silences it. A busy open plan office or a cafe sounds quieter but not quiet: the steady background hum goes, and the speech remains but is easier to ignore. For concentration, that can be enough. For hearing nothing at all, you need more passive isolation, which is the next topic.</p>

<h2 id="passive-isolation">Passive isolation is half the result</h2>

<p>Everything above the range where ANC works relies on passive isolation, which is simply how well the ear cups or ear tips physically block sound. Dense materials, a deep cushion, and a good seal all matter. A tight fitting in-ear tip in the right size can block more high frequency noise than an expensive over-ear pair with a poor seal, and glasses arms or long hair can break the seal on an over-ear cushion.</p>

<p>That is why fit is the first thing to check on any pair. An unseated ear tip, or tips that are the wrong size, will make ANC sound weak, because the low frequency anti-noise leaks out through the same gap that lets noise in. Many in-ear models come with several tip sizes, and some apps run a fit test that checks the seal, which is more useful than it sounds.</p>

<p>Over-ear headphones have the advantage of large cups that sit around the ear, which gives more volume for low frequency work and less pressure on the ear canal. In-ear models are lighter and easier to carry, and often have excellent passive isolation. Neither wins for everyone, and the right choice depends on whether you value comfort over many hours or portability.</p>

<h2 id="the-pressure-feeling">The pressure feeling and other side effects</h2>

<p>Some people feel an odd pressure in the ears with ANC, a sense of fullness like being underwater or in a lift. It is not real air pressure, since no pressure is applied to the eardrum. The brain is reacting to the unusual absence of low frequency sound that it normally hears, and in some cases to a very faint hiss or low tone produced by the circuitry.</p>

<p>Sensitivity varies a great deal. Some people never notice it, others find it uncomfortable within minutes. If you are one of the sensitive group, test a pair with an adjustable ANC level, or choose a model that lets you lower the strength. A return period matters here, because the feeling often cannot be judged from specifications and depends on your own ears.</p>

<p>Other side effects are mostly practical. A faint background hiss is audible in a quiet room with nothing playing on some models, and wind can cause a thudding sound on outdoor microphones. Both are common and neither is a sign of damage. If the hiss is noticeably loud, or you hear a crackle that changes with head movement, it may indicate a fault worth raising with the seller.</p>

<h2 id="transparency-mode">Transparency mode and calls</h2>

<p>Transparency, sometimes called ambient mode, uses the same outside microphones but plays what they hear back through the driver, so you can hear traffic, announcements or a person speaking to you without taking the headphones off. Quality varies. Good systems sound natural, while weaker ones sound tinny, delayed or boosted at certain pitches, and may pick up wind and handling noise.</p>

<p>Transparency matters for safety and convenience in the street, on a platform or in an office where someone may speak to you. It is not a substitute for taking the headphones off when you are crossing a road or using machinery. The sound is processed and slightly delayed, and the direction of a sound source can be harder to judge than with open ears.</p>

<p>The same microphones are also used for calls. Voice pickup quality varies widely and is a separate system from ANC, tuned to isolate your voice and suppress background noise. A pair with excellent ANC can still have mediocre call quality. If calls matter, check how many microphones are dedicated to voice and whether the maker describes wind reduction, rather than assuming the two are linked.</p>

<h2 id="battery-and-codecs">What ANC costs in battery and audio</h2>

<p>ANC needs power for the microphones, the processor and the extra amplifier output. It is common for a pair to last noticeably longer with ANC off than on, and manufacturers usually publish both figures, so check which one a headline battery claim refers to. A listing that quotes only the best case without saying whether ANC was active is worth treating with caution.</p>

<p>Battery capacity in headphones is small, so the drain from ANC matters more than in a phone. If you travel, a pair that charges fast and can run wired with a cable when the battery dies is more flexible than one that cannot play at all when flat. Many headphones charge over USB-C, and the guide to <a href="/guide/usb-c-charging-standards-explained">USB-C charging standards</a> explains what a charger label means for that.</p>

<p>ANC does not usually affect wireless audio quality directly, but the codec you use does affect battery and latency. The way the headphones and phone agree on a format is covered in <a href="/guide/bluetooth-headphone-codecs-explained">Bluetooth headphone codecs explained</a>. If you need a spare power source on trips, <a href="/guide/power-bank-capacity-explained">power bank capacity explained</a> shows how to judge one.</p>

<figure>
<img src="/images/articles/anc-earbuds-case.webp" alt="True wireless earbuds with their charging case" />
<figcaption>True wireless earbuds and their charging case, where ANC and a small battery have to share a very limited space.</figcaption>
</figure>

<h2 id="decibel-claims">Why decibel reduction claims cannot be compared</h2>

<p>Many product pages quote a figure such as a number of decibels of noise reduction. These figures are not comparable across brands. No source documents a single agreed test that every maker follows, so each company chooses its own method: which frequencies, what kind of noise, what head or ear simulator, and whether the figure is a peak or an average.</p>

<p>A peak figure at one favourable frequency can sound impressive while an average across the whole range is far lower. A figure that includes passive isolation is not the same as one that measures only the active part. Without knowing these details, a ten point difference between two brands may mean nothing at all, and may even point in the opposite direction.</p>

<p>The honest approach is to rely on patterns in owner feedback and on independent frequency response measurements where they exist, and to compare headphones from the same brand using the same claim. For a purchase, judge by the situation you will use them in: a plane, a train, an open office. Look for owners describing those, rather than a single number on a box.</p>

<h2 id="hearing-health">Hearing and when to seek advice</h2>

<p>ANC can help you listen at a lower volume, because you no longer raise the music to overcome background noise. That is a genuine benefit for long term hearing. Keep the volume moderate anyway, and take breaks, since sustained loud listening can damage hearing whether or not ANC is on.</p>

<p>See a doctor or audiologist if you notice ringing in the ears, muffled hearing that does not clear, ear pain, or discomfort from the headphones that persists after removing them. Persistent tinnitus or sudden hearing loss in one ear needs prompt medical assessment, not a change of headphones.</p>

<p>If the pressure sensation is uncomfortable, dizziness, nausea or ear fullness persists with ANC off, speak to a professional. For general guidance on electronics purchases, the <a href="/categories/tech-electronics">tech and electronics category</a> has related explainers, and our <a href="/guide/ip-ratings-explained">IP ratings explained</a> guide helps if you want sweat resistant earbuds.</p>

<h2 id="faq">Frequently asked questions</h2>

<h3>Does noise cancelling work without music playing?</h3>

<p>Yes. ANC works independently of audio, and many people use it simply to reduce background noise. Without music you may notice a faint hiss on some models, which is the circuitry and not a defect. The effect is strongest for low steady sounds, and you will still hear voices.</p>

<h3>Are noise cancelling headphones bad for your ears?</h3>

<p>They do not damage hearing in themselves. The risk comes from volume. Used well, they can let you listen quieter. Some people find the pressure feeling uncomfortable, which is a perception rather than a measurable harm, and they can simply turn ANC down or off.</p>

<h3>Do in-ear or over-ear headphones cancel more?</h3>

<p>It depends on fit and design. Over-ear models are better for comfort over long periods and tend to isolate well at low frequencies. A well fitted in-ear pair can isolate high frequencies better thanks to a seal in the ear canal. Choose by fit and use.</p>

<h3>Can I use ANC while wired?</h3>

<p>On many models yes, but ANC needs power from the battery, so a flat battery may stop it, and some pairs switch off ANC or even the audio in wired mode. Check the specifications if you plan to fly with a wired connection.</p>

<h3>Do cheap ANC headphones work as well?</h3>

<p>Budget models can cut low steady noise usefully, but the difference shows in how wide a range they cancel, how natural transparency sounds, and how well the seal is made. For a noisy commute, a modest pair is often adequate. For demanding situations, tuning and fit make a difference.</p>

<h3>Why does my ANC sound weaker some days?</h3>

<p>Fit changes with glasses, hair, hats and ear tip position, and wind or a different noise type changes what the system can handle. Reseat the headphones, check the tip size, and clean the microphone ports, which can clog with wax or dust and reduce performance.</p>

<h2 id="bottom-line">The bottom line</h2>

<p>Buy noise cancelling headphones for steady low frequency noise: aircraft, trains, buses, fans and open office hum. For those, a decent pair makes a real difference. For voices and sudden sounds, expect a modest improvement, with passive isolation from a good fit carrying most of the work.</p>

<p>Judge on fit and comfort first, then battery with ANC on, then transparency quality, and treat decibel claims as marketing numbers that cannot be compared. If you can, try before you commit, and check the return policy, since the pressure feeling is personal.</p>

<p>Keep the volume sensible, charge them properly, and replace ear tips when they harden. A pair you wear comfortably, with a good seal, will do far more for you than an expensive pair that does not fit.</p>`,
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
    {"title":"Bluetooth headphone codecs explained","href":"/guide/bluetooth-headphone-codecs-explained"},
    {"title":"Power bank capacity explained","href":"/guide/power-bank-capacity-explained"},
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
