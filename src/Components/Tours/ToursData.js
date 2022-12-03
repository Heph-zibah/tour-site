import tour1 from '../../Assets/tour-1.jpg';
import tour2 from '../../Assets/tour-2.jpg';
import tour3 from '../../Assets/tour-3.jpg';
import tour4 from '../../Assets/tour-4.jpg';
import tour5 from '../../Assets/tour-5.jpg';
import tour6 from '../../Assets/tour-6.jpg';
const tours = [
	{
		id: 1,
		img: tour1,
		rate: 4.5,
		title: 'Krabi, Thailand',
		price: 20,
		text:
			'Krabi is famous for its scenic view and breathtaking Beaches and Islands. Its coral reef vistas are also one of the world’s most beautiful, which makes the City a great spot for coral diving. With attractions including hot springs, a wildlife sanctuary, sea caves, flourishing coral reefs and exotic marine life, limestone cliffs that draw rock climbing enthusiasts from around the world, and national parks that include the island paradises of Koh Phi Phi and Koh Lanta, one could easily spend weeks in Krabi and leave yearning for more. If that wasn’t enough, Krabi features some of the most photogenic sunsets in Thailand, often accompanied by spectacular displays of cloud to cloud lightning, that are best enjoyed from a beachside bar or Restaurant. “Town” to most visitors is Ao Nang, a seaside sTrip of guesthouses, hotels, bars, restaurants, and Souvenir shops that continues to grow as tourist arrivals increase, now spreading north into Noppharat Thara, whose quiet, shady beach is part of the National Park that includes the Phi Phi Islands. Ao Nang is the major launching point for Boat trips to nearby islands and the isolated beaches of Phra Nang Cape, where the famous former hippie enclave of Railey Beach is located.Krabi also provides you with great Shopping venues such as Maharaj Walking Street (Friday-Sunday market from 5.00 – 10.00 pm) and Chao Fah Pier night market (daily market from 5.00 pm – 12.30 am). ',
		source: 'tourismthailand.org/Destinations/Provinces/Krabi/344',
		sourceName: 'TOURISM THAILAND'
	},
	{
		id: 2,
		img: tour2,
		rate: 4,
		title: 'Multnomah Falls, United State',
		price: 80,
		text:
			'The Multnomah Falls Lodge Visitor Center, restaurant, gift shop, snack bar and restrooms are open to the public. Timed Use Permit requirements have ended for 2022, check back for dates for 2023. Multnomah Falls is the most visited natural recreation site in the Pacific Northwest with more than 2 million stopping by each year to take in the views. Fed by underground springs from Larch Mountain, the flow over the falls varies, but is usually highest during winter and spring. This is also one of the best places in the Columbia River Gorge National Scenic Area to study geology exposed by floods. The Multnomah Falls Lodge, which is run by a concessionaire, is well maintained with restrooms, a Visitor Center, a snack bar, a gift shop and a restaurant that is fully ADA accessible. The visitor information area within the lodge is jointly staffed by Friends of Multnomah Falls and the U.S. Forest Service. Offerings include a free simple trail map and free brochures about Multnomah Falls in multiple languages. Books, detailed maps of the Columbia River Gorge & Pacific Northwest, and Northwest Forest Passes are also available for purchase. On the lower level of Multnomah Falls Lodge is a U.S. Forest Service Visitor Center, snack bar, gift shop and restrooms. The restaurant is located on the upper level and can be accessed by stairs or elevator.',
		source: 'https://www.fs.usda.gov/recarea/crgnsa/recarea/?recid=30026',
		sourceName: 'USDA FOREST SERVICE'
	},
	{
		id: 3,
		img: tour3,
		rate: 4.3,
		title: 'Chitwan National Park, Nepal',
		price: 120,
		text:
			'The Chitwan National Park (CNP) is a world heritage property, and it also contains a Ramsar Site – Beeshazari Tal in its buffer zone. The CNP has a history of over 3 decades in park management and a rich experience in resolving conflicts between the park and the people. It is a rich natural area in the Terai, the subtropical southern part of Nepal. A total of 68 species of mammals, 544 species of birds, 56 species of herpetofauna and 126 species of fish have been recorded in the park. The park is especially renowned for its protection of One Horned Rhinoceros, Royal Bengal Tiger and Gharial Crocodile. Chitwan has a humid subtropical monsoon influenced climate (Cwa) with high humidity all through the year.[3] The area is located in the central climatic zone of the Himalayas, where monsoon starts in mid June and eases off in late September. During these 14–15 weeks most of the 2,500 mm (98 in) annual precipitation falls. After mid-October, the monsoon clouds retreat, humidity drops off, and the top daily temperature gradually subsides from around 36 °C (97 °F) to 18 °C (64 °F). Nights cool down to 5 °C (41 °F) until late December, when it usually rains softly for a few days. Then temperatures start rising gradually.',
		source: 'https://chitwannationalpark.gov.np/',
		sourceName: 'CHITWAN NATIONAL PARK'
	},
	{
		id: 4,
		img: tour4,
		rate: 4.1,
		title: 'Mont Blanc, France',
		price: 200,
		text:
			'Mont Blanc, Italian Monte Bianco, mountain massif and highest peak (15,771 feet [4,807 metres]) in Europe. Located in the Alps, the massif lies along the French-Italian border and reaches into Switzerland. It extends southwestward from Martigny, Switzerland, for about 25 miles (40 km) and has a maximum width of 10 miles (16 km). The summit is in French territory. Surrounding the massif are the Graian Alps (south), the Chamonix Valley and Savoy Alps (west), the Pennine Alps (northeast), and the Valley of Courmayeur (east). Other principal peaks within the massif include Mont Blanc du Tacul, Mont Maudit, Aiguille (“Peak”) du Géant, Les Grandes Jorasses, Mont Dolent, and Aiguille du Midi. Glaciers cover approximately 40 square miles (100 square km) of Mont Blanc (whence its name, meaning “white mountain”). Ice streams stretch from the central ice dome down to below 4,900 feet (1,490 metres). The Mer de Glace, the second longest glacier in the Alps, reached the elevation of 4,100 feet (1,250 metres) in 1930. At the beginning of the 17th century, glaciers advanced to the bottom of the Chamonix Valley, destroying or burying cultivated land and dwellings. Since that time, the glaciers have periodically advanced and retreated.',
		source: 'https://www.britannica.com/place/Mont-Blanc-mountain-Europe',
		sourceName: 'BRITANNICA'
	},
	{
		id: 5,
		img: tour5,
		rate: 4.2,
		title: 'Erg Chebbi, Morocco',
		price: 60,
		text:
			'Erg Chebbi, the dunes in the Sahara Desert that most people choose to visit, is located a two-day drive from Marrakech. Don’t worry about being bored along the way, though — there are plenty of attractions and sites to keep you entertained, with stops in Berber villages, oases and famous movie sites. Once you arrive in the Sahara Desert, there’s even more fun to be had. The Erg Chebbi dunes are located forty kilometers from Erfoud, near the town of Merzouga.They generally rise up to 150 meters in a surface area of approximately 28 kilometers north to south. Spend your time in the villages wandering through alleyways lined with crumbling terracotta homes and mosques along with tied-up mules and camels. Stop to play football with the local children, or admire the local artwork and rug offerings for sale before finishing off your time with a delicious meal of chicken tagine. Being able to look in any direction and not being able to see anything but sand in your eye line makes it hard to judge distances and leads to one of those amazing moments that make you feel so small in such a huge place.',
		source: 'https://www.moroccopedia.com/erg-chebbi/',
		sourceName: 'MOROCCOPEDIA'
	},
	{
		id: 6,
		img: tour6,
		rate: 4.4,
		title: 'Adjara, Georgia',
		price: 78,
		text:
			'Adjara is historical-geographical site of Georgia, which is located in the gorge of Adjaratskali. The territory of the Adjara region has great history. It was populated from ancient time. Except cultural monuments from different period, there is a wonderful nature in here, like sunny beaches, greenery and very impressive mountainous Adjara. You can meet the local lifestyle and culture in the mountainous villages, which are far from the bustle of modern civilization. Adjara is an amazing site for noisy entertainment and chocolate sunburn lovers as well as for the adventurers of harmony in a peaceful nature. Adjara is one of the oldest region of Georgia, it was part of upper Kartli, Meskheti. It was mentioned in Georgian written series firstly in XI century, in the narration of Leonti Mroveli, particularly in the notion of the division of Iberia into Saeristavo by King Pharnavaz( BC IV-III). But according to the scientists, the site was populated even in IV-III century BC, by the period of Stone Age. Bronze and Iron Age cultural layers have been found in the territory of Adjara. There are many interesting monuments in Adjara, which has the ancient culture. One can see here monuments from Stone, Bronze-Iron and Antic Age (The fortress of Gonio and the standing stone of Tkhilvani). Also monasteries, fortresses and bridges from the middle ages, that witnessed many interesting historical events. The nature of Adjara is breathtaking and diverse. You will be impressed by the waves of the black sea, beautiful gorges, waterfalls and alpine meadows. There are 4 protected areas in Adjara and each one is characterized by individual and endemic varieties. Adjara is also rich with seaside and mountainous resorts.',
		source: 'https://georgiantravelguide.com/en/adjara',
		sourceName: 'GEORGIAN TRAVEL GUIDE'
	}
];
export default tours;
