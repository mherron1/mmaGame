const puppeteer = require("puppeteer");

let events = [
  "https://en.wikipedia.org/wiki/Ultimate_Ultimate_1995",
  "https://en.wikipedia.org/wiki/Ultimate_Ultimate_1996",
  "https://en.wikipedia.org/wiki/UFC_Japan:_Ultimate_Japan",
  "https://en.wikipedia.org/wiki/UFC_Brazil",
  "https://en.wikipedia.org/wiki/2005_in_UFC#UFC_Ultimate_Fight_Night",
  "https://en.wikipedia.org/wiki/UFC_Ultimate_Fight_Night_2",
  "https://en.wikipedia.org/wiki/UFC_Ultimate_Fight_Night_3",
  "https://en.wikipedia.org/wiki/UFC_Ultimate_Fight_Night_4",
  "https://en.wikipedia.org/wiki/UFC_Ultimate_Fight_Night_5",
  "https://en.wikipedia.org/wiki/UFC_100",
  "https://en.wikipedia.org/wiki/UFC_101",
  "https://en.wikipedia.org/wiki/UFC_102",
  "https://en.wikipedia.org/wiki/UFC_103",
  "https://en.wikipedia.org/wiki/UFC_104",
  "https://en.wikipedia.org/wiki/UFC_105",
  "https://en.wikipedia.org/wiki/UFC_106",
  "https://en.wikipedia.org/wiki/UFC_107",
  "https://en.wikipedia.org/wiki/UFC_108",
  "https://en.wikipedia.org/wiki/UFC_109",
  "https://en.wikipedia.org/wiki/UFC_110",
  "https://en.wikipedia.org/wiki/UFC_Live:_Vera_vs._Jones",
  "https://en.wikipedia.org/wiki/UFC_111",
  "https://en.wikipedia.org/wiki/UFC_112",
  "https://en.wikipedia.org/wiki/UFC_113",
  "https://en.wikipedia.org/wiki/UFC_114",
  "https://en.wikipedia.org/wiki/UFC_115",
  "https://en.wikipedia.org/wiki/UFC_116",
  "https://en.wikipedia.org/wiki/UFC_Live:_Jones_vs._Matyushenko",
  "https://en.wikipedia.org/wiki/UFC_117",
  "https://en.wikipedia.org/wiki/UFC_118",
  "https://en.wikipedia.org/wiki/UFC_119",
  "https://en.wikipedia.org/wiki/UFC_120",
  "https://en.wikipedia.org/wiki/UFC_121",
  "https://en.wikipedia.org/wiki/UFC_122",
  "https://en.wikipedia.org/wiki/UFC_123",
  "https://en.wikipedia.org/wiki/UFC_124",
  "https://en.wikipedia.org/wiki/UFC_125",
  "https://en.wikipedia.org/wiki/UFC_126",
  "https://en.wikipedia.org/wiki/UFC_127",
  "https://en.wikipedia.org/wiki/UFC_Live:_Sanchez_vs._Kampmann",
  "https://en.wikipedia.org/wiki/UFC_128",
  "https://en.wikipedia.org/wiki/UFC_129",
  "https://en.wikipedia.org/wiki/UFC_130",
  "https://en.wikipedia.org/wiki/UFC_131",
  "https://en.wikipedia.org/wiki/UFC_Live:_Kongo_vs._Barry",
  "https://en.wikipedia.org/wiki/UFC_132",
  "https://en.wikipedia.org/wiki/UFC_133",
  "https://en.wikipedia.org/wiki/UFC_Live:_Hardy_vs._Lytle",
  "https://en.wikipedia.org/wiki/UFC_134",
  "https://en.wikipedia.org/wiki/UFC_135",
  "https://en.wikipedia.org/wiki/UFC_Live:_Cruz_vs._Johnson",
  "https://en.wikipedia.org/wiki/UFC_136",
  "https://en.wikipedia.org/wiki/UFC_137",
  "https://en.wikipedia.org/wiki/UFC_138",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Velasquez_vs._dos_Santos",
  "https://en.wikipedia.org/wiki/UFC_139",
  "https://en.wikipedia.org/wiki/UFC_140",
  "https://en.wikipedia.org/wiki/UFC_141",
  "https://en.wikipedia.org/wiki/UFC_142",
  "https://en.wikipedia.org/wiki/UFC_on_FX:_Guillard_vs._Miller",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Evans_vs._Davis",
  "https://en.wikipedia.org/wiki/UFC_143",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Sanchez_vs._Ellenberger",
  "https://en.wikipedia.org/wiki/UFC_144",
  "https://en.wikipedia.org/wiki/UFC_on_FX:_Alves_vs._Kampmann",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Gustafsson_vs._Silva",
  "https://en.wikipedia.org/wiki/UFC_145",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Diaz_vs._Miller",
  "https://en.wikipedia.org/wiki/2012_in_UFC#UFC_on_Fuel_TV:_The_Korean_Zombie_vs._Poirier",
  "https://en.wikipedia.org/wiki/UFC_146",
  "https://en.wikipedia.org/wiki/2012_in_UFC#UFC_on_FX:_Johnson_vs._McCall_2",
  "https://en.wikipedia.org/wiki/UFC_on_FX:_Maynard_vs._Guida",
  "https://en.wikipedia.org/wiki/UFC_147",
  "https://en.wikipedia.org/wiki/UFC_148",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Mu%C3%B1oz_vs._Weidman",
  "https://en.wikipedia.org/wiki/2012_in_UFC#UFC_149:_Faber_vs._Bar%C3%A3o",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Shogun_vs._Vera",
  "https://en.wikipedia.org/wiki/UFC_150",
  "https://en.wikipedia.org/wiki/UFC_151",
  "https://en.wikipedia.org/wiki/UFC_152",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Struve_vs._Miocic",
  "https://en.wikipedia.org/wiki/UFC_on_FX:_Browne_vs._Bigfoot",
  "https://en.wikipedia.org/wiki/UFC_153",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Franklin_vs._Le",
  "https://en.wikipedia.org/wiki/UFC_154",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Henderson_vs._Diaz",
  "https://en.wikipedia.org/wiki/The_Ultimate_Fighter:_The_Smashes#The_Ultimate_Fighter:_The_Smashes_Finale",
  "https://en.wikipedia.org/wiki/UFC_155",
  "https://en.wikipedia.org/wiki/UFC_on_FX:_Belfort_vs._Bisping",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Johnson_vs._Dodson",
  "https://en.wikipedia.org/wiki/UFC_156",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Bar%C3%A3o_vs._McDonald",
  "https://en.wikipedia.org/wiki/UFC_157",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Silva_vs._Stann",
  "https://en.wikipedia.org/wiki/UFC_158",
  "https://en.wikipedia.org/wiki/UFC_on_Fuel_TV:_Mousasi_vs._Latifi",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Henderson_vs._Melendez",
  "https://en.wikipedia.org/wiki/UFC_159",
  "https://en.wikipedia.org/wiki/UFC_on_FX:_Belfort_vs._Rockhold",
  "https://en.wikipedia.org/wiki/UFC_160",
  "https://en.wikipedia.org/wiki/The_Ultimate_Fighter:_Brazil_2#The_Ultimate_Fighter:_Brazil_2_Finale",
  "https://en.wikipedia.org/wiki/UFC_161",
  "https://en.wikipedia.org/wiki/UFC_162",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Johnson_vs._Moraga",
  "https://en.wikipedia.org/wiki/UFC_163",
  "https://en.wikipedia.org/wiki/UFC_164",
  "https://en.wikipedia.org/wiki/UFC_165",
  "https://en.wikipedia.org/wiki/UFC_166",
  "https://en.wikipedia.org/wiki/UFC_167",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hunt_vs._Bigfoot",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Johnson_vs._Benavidez_2",
  "https://en.wikipedia.org/wiki/UFC_168",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Saffiedine_vs._Lim",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rockhold_vs._Philippou",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Henderson_vs._Thomson",
  "https://en.wikipedia.org/wiki/UFC_169",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Machida_vs._Mousasi",
  "https://en.wikipedia.org/wiki/UFC_170",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Gustafsson_vs._Manuwa",
  "https://en.wikipedia.org/wiki/UFC_171",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Shogun_vs._Henderson_2",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Nogueira_vs._Nelson",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Werdum_vs._Browne",
  "https://en.wikipedia.org/wiki/UFC_172",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Brown_vs._Silva",
  "https://en.wikipedia.org/wiki/UFC_173",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Mu%C3%B1oz_vs._Mousasi",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Henderson_vs._Khabilov",
  "https://en.wikipedia.org/wiki/UFC_174",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Te_Huna_vs._Marquardt",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Swanson_vs._Stephens",
  "https://en.wikipedia.org/wiki/UFC_175",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cowboy_vs._Miller",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_McGregor_vs._Brandao",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Lawler_vs._Brown",
  "https://en.wikipedia.org/wiki/UFC_176",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bader_vs._Saint_Preux",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bisping_vs._Le",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Henderson_vs._dos_Anjos",
  "https://en.wikipedia.org/wiki/UFC_177",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Jacar%C3%A9_vs._Mousasi",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bigfoot_vs._Arlovski",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hunt_vs._Nelson",
  "https://en.wikipedia.org/wiki/UFC_178",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Nelson_vs._Story",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_MacDonald_vs._Saffiedine",
  "https://en.wikipedia.org/wiki/UFC_179",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rockhold_vs._Bisping",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Shogun_vs._Saint_Preux",
  "https://en.wikipedia.org/wiki/UFC_180",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Edgar_vs._Swanson",
  "https://en.wikipedia.org/wiki/UFC_181",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_dos_Santos_vs._Miocic",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Machida_vs._Dollaway",
  "https://en.wikipedia.org/wiki/UFC_182",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_McGregor_vs._Siver",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Gustafsson_vs._Johnson",
  "https://en.wikipedia.org/wiki/UFC_183",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Henderson_vs._Thatch",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bigfoot_vs._Mir",
  "https://en.wikipedia.org/wiki/UFC_184",
  "https://en.wikipedia.org/wiki/UFC_185",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Maia_vs._LaFlare",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Mendes_vs._Lamas",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Gonzaga_vs._Cro_Cop_2",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Machida_vs._Rockhold",
  "https://en.wikipedia.org/wiki/UFC_186",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Miocic_vs._Hunt",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Edgar_vs._Faber",
  "https://en.wikipedia.org/wiki/UFC_187",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Condit_vs._Alves",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Boetsch_vs._Henderson",
  "https://en.wikipedia.org/wiki/UFC_188",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_J%C4%99drzejczyk_vs._Penne",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Machida_vs._Romero",
  "https://en.wikipedia.org/wiki/UFC_189",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Mir_vs._Duffee",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bisping_vs._Leites",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Dillashaw_vs._Bar%C3%A3o_2",
  "https://en.wikipedia.org/wiki/UFC_190",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Teixeira_vs._Saint_Preux",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Holloway_vs._Oliveira",
  "https://en.wikipedia.org/wiki/UFC_191",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Barnett_vs._Nelson",
  "https://en.wikipedia.org/wiki/UFC_192",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Holohan_vs._Smolka",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Belfort_vs._Henderson_3",
  "https://en.wikipedia.org/wiki/UFC_193",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Henderson_vs._Masvidal",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Namajunas_vs._VanZant",
  "https://en.wikipedia.org/wiki/UFC_194",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_dos_Anjos_vs._Cowboy_2",
  "https://en.wikipedia.org/wiki/UFC_195",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Dillashaw_vs._Cruz",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Johnson_vs._Bader",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hendricks_vs._Thompson",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cowboy_vs._Cowboy",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Silva_vs._Bisping",
  "https://en.wikipedia.org/wiki/UFC_196",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hunt_vs._Mir",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rothwell_vs._dos_Santos",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Teixeira_vs._Evans",
  "https://en.wikipedia.org/wiki/UFC_197",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Overeem_vs._Arlovski",
  "https://en.wikipedia.org/wiki/UFC_198",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Almeida_vs._Garbrandt",
  "https://en.wikipedia.org/wiki/UFC_199",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_MacDonald_vs._Thompson",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_dos_Anjos_vs._Alvarez",
  "https://en.wikipedia.org/wiki/UFC_200",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_McDonald_vs._Lineker",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Holm_vs._Shevchenko",
  "https://en.wikipedia.org/wiki/UFC_201",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rodr%C3%ADguez_vs._Caceres",
  "https://en.wikipedia.org/wiki/UFC_202",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Maia_vs._Condit",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Arlovski_vs._Barnett",
  "https://en.wikipedia.org/wiki/UFC_203",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Poirier_vs._Johnson",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cyborg_vs._L%C3%A4nsberg",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lineker_vs._Dodson",
  "https://en.wikipedia.org/wiki/UFC_204",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lamas_vs._Penn",
  "https://en.wikipedia.org/wiki/UFC_205",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Mousasi_vs._Hall_2",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bader_vs._Nogueira_2",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Whittaker_vs._Brunson",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lewis_vs._Abdurakhimov",
  "https://en.wikipedia.org/wiki/UFC_206",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_VanZant_vs._Waterson",
  "https://en.wikipedia.org/wiki/UFC_207",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rodr%C3%ADguez_vs._Penn",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Shevchenko_vs._Pe%C3%B1a",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bermudez_vs._The_Korean_Zombie",
  "https://en.wikipedia.org/wiki/UFC_208",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lewis_vs._Browne",
  "https://en.wikipedia.org/wiki/UFC_209",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Belfort_vs._Gastelum",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Manuwa_vs._Anderson",
  "https://en.wikipedia.org/wiki/UFC_210",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Johnson_vs._Reis",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Swanson_vs._Lobov",
  "https://en.wikipedia.org/wiki/UFC_211",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Gustafsson_vs._Teixeira",
  "https://en.wikipedia.org/wiki/UFC_212",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lewis_vs._Hunt",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Holm_vs._Correia",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Chiesa_vs._Lee",
  "https://en.wikipedia.org/wiki/UFC_213",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Nelson_vs._Ponzinibbio",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Weidman_vs._Gastelum",
  "https://en.wikipedia.org/wiki/UFC_214",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Pettis_vs._Moreno",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Volkov_vs._Struve",
  "https://en.wikipedia.org/wiki/UFC_215",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rockhold_vs._Branch",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Saint_Preux_vs._Okami",
  "https://en.wikipedia.org/wiki/UFC_216",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cowboy_vs._Till",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Brunson_vs._Machida",
  "https://en.wikipedia.org/wiki/UFC_217",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Poirier_vs._Pettis",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Werdum_vs._Tybura",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Bisping_vs._Gastelum",
  "https://en.wikipedia.org/wiki/UFC_218",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Swanson_vs._Ortega",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Lawler_vs._dos_Anjos",
  "https://en.wikipedia.org/wiki/UFC_219",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Stephens_vs._Choi",
  "https://en.wikipedia.org/wiki/UFC_220",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Jacar%C3%A9_vs._Brunson_2",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Machida_vs._Anders",
  "https://en.wikipedia.org/wiki/UFC_221",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cowboy_vs._Medeiros",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Emmett_vs._Stephens",
  "https://en.wikipedia.org/wiki/UFC_222",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Werdum_vs._Volkov",
  "https://en.wikipedia.org/wiki/UFC_223",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Poirier_vs._Gaethje",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Barboza_vs._Lee",
  "https://en.wikipedia.org/wiki/UFC_224",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Maia_vs._Usman",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Thompson_vs._Till",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rivera_vs._Moraes",
  "https://en.wikipedia.org/wiki/UFC_225",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cowboy_vs._Edwards",
  "https://en.wikipedia.org/wiki/UFC_226",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_dos_Santos_vs._Ivanov",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Shogun_vs._Smith",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Alvarez_vs._Poirier_2",
  "https://en.wikipedia.org/wiki/UFC_227",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Gaethje_vs._Vick",
  "https://en.wikipedia.org/wiki/UFC_228",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hunt_vs._Oleinik",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Santos_vs._Anders",
  "https://en.wikipedia.org/wiki/UFC_229",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Volkan_vs._Smith",
  "https://en.wikipedia.org/wiki/UFC_230",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_The_Korean_Zombie_vs._Rodr%C3%ADguez",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Magny_vs._Ponzinibbio",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Blaydes_vs._Ngannou_2",
  "https://en.wikipedia.org/wiki/The_Ultimate_Fighter:_Heavy_Hitters#The_Ultimate_Fighter_28_Finale",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_dos_Santos_vs._Tuivasa",
  "https://en.wikipedia.org/wiki/UFC_231",
  "https://en.wikipedia.org/wiki/UFC_on_Fox:_Lee_vs._Iaquinta_2",
  "https://en.wikipedia.org/wiki/UFC_232",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cejudo_vs._Dillashaw",
  "https://en.wikipedia.org/wiki/UFC_233",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Assun%C3%A7%C3%A3o_vs._Moraes_2",
  "https://en.wikipedia.org/wiki/UFC_234",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Ngannou_vs._Velasquez",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_B%C5%82achowicz_vs._Santos",
  "https://en.wikipedia.org/wiki/UFC_235",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lewis_vs._dos_Santos",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Till_vs._Masvidal",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Thompson_vs._Pettis",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Barboza_vs._Gaethje",
  "https://en.wikipedia.org/wiki/UFC_236",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Overeem_vs._Oleinik",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Jacar%C3%A9_vs._Hermansson",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Iaquinta_vs._Cowboy",
  "https://en.wikipedia.org/wiki/UFC_237",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_dos_Anjos_vs._Lee",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Gustafsson_vs._Smith",
  "https://en.wikipedia.org/wiki/UFC_238",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Moicano_vs._The_Korean_Zombie",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Ngannou_vs._dos_Santos",
  "https://en.wikipedia.org/wiki/UFC_239",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_de_Randamie_vs._Ladd",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_dos_Anjos_vs._Edwards",
  "https://en.wikipedia.org/wiki/UFC_240",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Covington_vs._Lawler",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Shevchenko_vs._Carmouche_2",
  "https://en.wikipedia.org/wiki/UFC_241",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Andrade_vs._Zhang",
  "https://en.wikipedia.org/wiki/UFC_242",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Cowboy_vs._Gaethje",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rodr%C3%ADguez_vs._Stephens",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hermansson_vs._Cannonier",
  "https://en.wikipedia.org/wiki/UFC_243",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Joanna_vs._Waterson",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Reyes_vs._Weidman",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Maia_vs._Askren",
  "https://en.wikipedia.org/wiki/UFC_244",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Magomedsharipov_vs._Kattar",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_B%C5%82achowicz_vs._Jacar%C3%A9",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Overeem_vs._Rozenstruik",
  "https://en.wikipedia.org/wiki/UFC_245",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Edgar_vs._The_Korean_Zombie",
  "https://en.wikipedia.org/wiki/UFC_246",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Blaydes_vs._dos_Santos",
  "https://en.wikipedia.org/wiki/UFC_247",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Anderson_vs._B%C5%82achowicz_2",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Felder_vs._Hooker",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Benavidez_vs._Figueiredo",
  "https://en.wikipedia.org/wiki/UFC_248",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lee_vs._Oliveira",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Woodley_vs._Edwards",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Ngannou_vs._Rozenstruik",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Overeem_vs._Harris",
  "https://en.wikipedia.org/wiki/Cancelled_UFC_event_on_April_25,_2020",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hermansson_vs._Weidman",
  "https://en.wikipedia.org/wiki/UFC_249",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Smith_vs._Teixeira",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Overeem_vs._Harris",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Woodley_vs._Burns",
  "https://en.wikipedia.org/wiki/UFC_250",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Eye_vs._Calvillo",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Blaydes_vs._Volkov",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Poirier_vs._Hooker",
  "https://en.wikipedia.org/wiki/UFC_251",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Kattar_vs._Ige",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Figueiredo_vs._Benavidez_2",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Whittaker_vs._Till",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Brunson_vs._Shahbazyan",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Lewis_vs._Oleinik",
  "https://en.wikipedia.org/wiki/UFC_252",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Munhoz_vs._Edgar",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Smith_vs._Raki%C4%87",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Overeem_vs._Sakai",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Waterson_vs._Hill",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Covington_vs._Woodley",
  "https://en.wikipedia.org/wiki/UFC_253",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Holm_vs._Aldana",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Moraes_vs._Sandhagen",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Ortega_vs._The_Korean_Zombie",
  "https://en.wikipedia.org/wiki/UFC_254",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Hall_vs._Silva",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Santos_vs._Teixeira",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Felder_vs._dos_Anjos",
  "https://en.wikipedia.org/wiki/UFC_255",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Smith_vs._Clark",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Hermansson_vs._Vettori",
  "https://en.wikipedia.org/wiki/UFC_256",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Thompson_vs._Neal",
  "https://en.wikipedia.org/wiki/UFC_on_ABC:_Holloway_vs._Kattar",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Chiesa_vs._Magny",
  "https://en.wikipedia.org/wiki/UFC_257",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Overeem_vs._Volkov",
  "https://en.wikipedia.org/wiki/UFC_258",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Blaydes_vs._Lewis",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Rozenstruik_vs._Gane",
  "https://en.wikipedia.org/wiki/UFC_259",
  "https://en.wikipedia.org/wiki/UFC_Fight_Night:_Edwards_vs._Muhammad",
  "https://en.wikipedia.org/wiki/UFC_on_ESPN:_Brunson_vs._Holland",
  "https://en.wikipedia.org/wiki/UFC_260",
];

let index = 0;

asyncGetCards();

function asyncGetCards() {
  getResults(events[index]);
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  delay(3000).then(() => {
    index++;
    if (index < events.length) {
      asyncGetCards(index);
    }
  });
}

function getResults(url) {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const res = await page.evaluate(() => {
      let x = [...document.querySelectorAll(".toccolours tbody tr")];
      let eventDate = document
        .querySelectorAll(".infobox-data")[1]
        .textContent.split("(")[0];

      let arr = [];

      for (let i = 2; i < x.length; i++) {
        if (x[i].childElementCount > 6 && x[i].childNodes[7].innerText !== "") {
          let obj = {
            eventDate: eventDate,
            weight: x[i].childNodes[1].innerText,
            winner: x[i].childNodes[3].innerText,
            result: x[i].childNodes[5].innerText,
            loser: x[i].childNodes[7].innerText,
          };

          arr += JSON.stringify(obj) + ",";
        }
      }

      return arr;
    });

    console.log(res);

    await browser.close();
  })();
}
