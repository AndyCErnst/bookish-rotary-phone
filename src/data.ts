import data from './data.json'
import { Broadside, LocationMap } from 'types'

export const broadsides = data as Record<string, Broadside>

// duplicate of 74459027
delete broadsides[74459028]
// duplicates of 74459008
delete broadsides[74459006]
delete broadsides[74459007]
// duplicate of 74459081
delete broadsides[74459082]
// duplicates of 74459259
delete broadsides[74459260]
delete broadsides[74459258]

export const broadsidesList: Broadside[] = Object.values(broadsides)

// Geocoding from Google Maps
export const locationMap: LocationMap = {
  Edinburgh: { lat: 55.953252, lng: -3.188267 },
  Glasgow: { lat: 55.864237, lng: -4.251806 },
  Calton: { lat: 55.8534843, lng: -4.2339188 },
  Fife: { lat: 56.2082078, lng: -3.1495175 },
  Cullen: { lat: 57.691635, lng: -2.821937 },
  Irvine: { lat: 55.61156690000001, lng: -4.6696364 },
  Cupar: { lat: 56.320235, lng: -3.010137 },
  'Old Town': { lat: 55.9489628, lng: -3.1898944 },
  Newington: { lat: 55.9414853, lng: -3.18262 },
  Alloa: { lat: 56.114073, lng: -3.791896 },
  Aberdeen: { lat: 57.1498891, lng: -2.0937528 },
  Portobello: { lat: 55.9496024, lng: -3.1092874 },
  Stirling: { lat: 56.1165227, lng: -3.9369029 },
  Barrhead: { lat: 55.79671099999999, lng: -4.397714000000001 },
  Dundee: { lat: 56.462018, lng: -2.970721 },
  Kilmarnock: { lat: 55.614719, lng: -4.498792 },
  Forfar: { lat: 56.643558, lng: -2.889062 },
  Forth: { lat: 55.765898, lng: -3.690916 },
  Cowgate: { lat: 55.948619, lng: -3.1881808 },
  Haddington: { lat: 55.95867399999999, lng: -2.774864 },
  Roslin: { lat: 55.85587, lng: -3.164189 },
  Leith: { lat: 55.97552779999999, lng: -3.1665102 },
  Inverness: { lat: 57.477773, lng: -4.224721 },
  Wick: { lat: 58.438936, lng: -3.093716 },
  Dumfries: { lat: 55.070859, lng: -3.60512 },
  Houston: { lat: 55.867832, lng: -4.551068 },
  Ayr: { lat: 55.458564, lng: -4.629179000000001 },
  Balfron: { lat: 56.071822, lng: -4.3373039 },
  Linlithgow: { lat: 55.9716266, lng: -3.6025847 },
  'Port Glasgow': { lat: 55.932291, lng: -4.679806999999999 },
  Greenock: { lat: 55.95647599999999, lng: -4.771983 },
  Rutherglen: { lat: 55.828972, lng: -4.2242689 },
  Highland: { lat: 57.4, lng: -4.44 }, // Set manually to not overlap with Inverness
  Musselburgh: { lat: 55.941941, lng: -3.053918 },
  Renfrew: { lat: 55.875322, lng: -4.391541999999999 },
  Douglas: { lat: 55.55733499999999, lng: -3.847176 },
  Paisley: { lat: 55.847258, lng: -4.440113999999999 },
  Bothwell: { lat: 55.80616999999999, lng: -4.072718 },
  'West Calder': { lat: 55.852154, lng: -3.566167 },
  Logan: { lat: 55.45512, lng: -4.235136 },
  Law: { lat: 55.749679, lng: -3.884374 },
  Queensferry: { lat: 55.99000299999999, lng: -3.399045 },
  Leslie: { lat: 56.200481, lng: -3.214391 },
  Johnstone: { lat: 55.837324, lng: -4.513915 },
  Hamilton: { lat: 55.77763299999999, lng: -4.053679 },
  Grangemouth: { lat: 56.0097152, lng: -3.7227698 },
  Keith: { lat: 57.543094, lng: -2.951526 },
  Anstruther: { lat: 56.22298000000001, lng: -2.700539 },
  Livingston: { lat: 55.90070799999999, lng: -3.518068 },
  Dunfermline: { lat: 56.071741, lng: -3.452151 },
  Dalrymple: { lat: 55.397209, lng: -4.5904489 },
  Kirkintilloch: { lat: 55.9392401, lng: -4.1561656 },
  Perth: { lat: 56.394994, lng: -3.430838 },
  Rothes: { lat: 57.527809, lng: -3.207355 },
  Fenwick: { lat: 55.66337799999999, lng: -4.440772 },
  Dalry: { lat: 55.711116, lng: -4.723153 },
  Duns: { lat: 55.777794, lng: -2.343461 },
  Blackburn: { lat: 55.8744129, lng: -3.6235554 },
  'New Town': { lat: 55.95491939999999, lng: -3.1980237 },
  Dumbarton: { lat: 55.945287, lng: -4.564554 },
  Falkirk: { lat: 56.00187750000001, lng: -3.7839131 },
  Stonehouse: { lat: 55.698739, lng: -3.983908 },
  Muirhead: { lat: 55.8976844, lng: -4.1049724 },
  Elgin: { lat: 57.64945400000001, lng: -3.318485 },
  Moffat: { lat: 55.33520799999999, lng: -3.440337 },
  Coatbridge: { lat: 55.862241, lng: -4.019337 },
  Armadale: { lat: 55.897742, lng: -3.702162 },
  Stanley: { lat: 56.4854, lng: -3.451842 },
  Dalkeith: { lat: 55.89311799999999, lng: -3.066606 },
  Gullane: { lat: 56.036342, lng: -2.827051 },
  Earlston: { lat: 55.639736, lng: -2.678481 },
  Elderslie: { lat: 55.837537, lng: -4.480095 },
  Redding: { lat: 55.9885005, lng: -3.7328196 },
  Strathblane: { lat: 55.9853215, lng: -4.305676900000001 },
  Airdrie: { lat: 55.866267, lng: -3.962566 },
  'East Kilbride': { lat: 55.76435240000001, lng: -4.1769988 },
  Sanquhar: { lat: 55.368078, lng: -3.926828 },
  Kirkwall: { lat: 58.98467400000001, lng: -2.962249 },
  Grassmarket: { lat: 55.9473435, lng: -3.1961502 },
  Renton: { lat: 55.97084599999999, lng: -4.584627 },
  Neilston: { lat: 55.78549520000001, lng: -4.424883599999999 },
  Lanark: { lat: 55.673865, lng: -3.782138 },
  Larbert: { lat: 56.0196754, lng: -3.8360606 },
  Lauder: { lat: 55.722936, lng: -2.756614 },
  Bannockburn: { lat: 56.091722, lng: -3.908402 },
  Selkirk: { lat: 55.550658, lng: -2.838524 },
  Forres: { lat: 57.60979099999999, lng: -3.61998 },
  Innerleithen: { lat: 55.624015, lng: -3.064912 },
  Arbroath: { lat: 56.559107, lng: -2.591543 },
  Cambuslang: { lat: 55.820982, lng: -4.164891 },
  Laurieston: { lat: 55.850781, lng: -4.256832 },
  Denny: { lat: 56.021427, lng: -3.90685 },
  Burntisland: { lat: 56.058809, lng: -3.233915 },
  Bonhill: { lat: 55.9836153, lng: -4.5711001 },
  Girvan: { lat: 55.240164, lng: -4.854217999999999 },
  Erskine: { lat: 55.909243, lng: -4.462418 },
  Dollar: { lat: 56.163937, lng: -3.677553 },
  Kirkliston: { lat: 55.95697200000001, lng: -3.401411 },
  Ochiltree: { lat: 55.462878, lng: -4.360361999999999 },
  Liberton: { lat: 55.913168, lng: -3.159998 },
  Beith: { lat: 55.753797, lng: -4.631787 },
  Kelty: { lat: 56.13310999999999, lng: -3.377893 },
  Winchburgh: { lat: 55.959518, lng: -3.464285 },
  Thurso: { lat: 58.593566, lng: -3.52208 },
  Inchinnan: { lat: 55.893245, lng: -4.440016 },
  Stockbridge: { lat: 55.958842, lng: -3.2120507 },
  Stonehaven: { lat: 56.96366099999999, lng: -2.209288 },
  Lesmahagow: { lat: 55.637634, lng: -3.88657 },
  Kinghorn: { lat: 56.071231, lng: -3.174329 },
  Granton: { lat: 55.97791950000001, lng: -3.2421983 },
  Ardrossan: { lat: 55.64388899999999, lng: -4.81182 },
  Lawnmarket: { lat: 55.9493706, lng: -3.193137 },
  Cleland: { lat: 55.802886, lng: -3.921275 },
  Jedburgh: { lat: 55.477721, lng: -2.5549369 },
  Methven: { lat: 56.417234, lng: -3.576942 },
  Crieff: { lat: 56.37654999999999, lng: -3.841993999999999 },
  Loanhead: { lat: 55.876406, lng: -3.149354 },
  Kelso: { lat: 55.600029, lng: -2.432207 },
  Prestonpans: { lat: 55.95953799999999, lng: -2.984467 },
  Tarbolton: { lat: 55.51224, lng: -4.488156 },
  Dunlop: { lat: 55.712608, lng: -4.532134999999999 },
  Dunbar: { lat: 56.002087, lng: -2.516737 },
  Callander: { lat: 56.245059, lng: -4.211663 },
  Peterhead: { lat: 57.50812299999999, lng: -1.784066 },
  Montrose: { lat: 56.706922, lng: -2.466115 },
  Huntly: { lat: 57.445936, lng: -2.7878059 },
  Dundonald: { lat: 55.577545, lng: -4.594958000000001 },
  Airth: { lat: 56.069301, lng: -3.770963 },
  'North Berwick': { lat: 56.058363, lng: -2.719646 },
  Peebles: { lat: 55.653071, lng: -3.193642 },
  Saltcoats: { lat: 55.637652, lng: -4.7834899 },
  Stranraer: { lat: 54.903367, lng: -5.024055 },
  Kilbarchan: { lat: 55.838112, lng: -4.554189 },
  Holyrood: { lat: 55.9509351, lng: -3.1811783 },
  Kincardine: { lat: 56.06895799999999, lng: -3.716691999999999 },
  Greenhill: { lat: 55.10503, lng: -3.405925 },
  Fallin: { lat: 56.104905, lng: -3.877669 },
  Shotts: { lat: 55.8238816, lng: -3.8063955 },
  Gourock: { lat: 55.9591984, lng: -4.8168799 },
  Largs: { lat: 55.79333500000001, lng: -4.867278000000001 },
  Balloch: { lat: 56.002716, lng: -4.580081 },
  Bathgate: { lat: 55.9024, lng: -3.643118 },
  Eaglesham: { lat: 55.739342, lng: -4.269971 },
  Ormiston: { lat: 55.911827, lng: -2.942105 },
  Blairgowrie: { lat: 56.5894057, lng: -3.3378318 },
  Tranent: { lat: 55.94450999999999, lng: -2.954526 },
  Invergordon: { lat: 57.688106, lng: -4.172882 },
  Galashiels: { lat: 55.623728, lng: -2.814449 },
  Blantyre: { lat: 55.793868, lng: -4.09492 },
  Tain: { lat: 57.811501, lng: -4.05523 },
  Aberfeldy: { lat: 56.621752, lng: -3.866969 },
  Banff: { lat: 57.666505, lng: -2.524038 },
  Buckie: { lat: 57.67739199999999, lng: -2.967311 },
  Dingwall: { lat: 57.595347, lng: -4.428411 },
  Cardross: { lat: 55.963506, lng: -4.655254999999999 },
  'Fort William': { lat: 56.81981700000001, lng: -5.105218 },
  Hawick: { lat: 55.42706, lng: -2.780914 },
  Craiglockhart: { lat: 55.92161600000001, lng: -3.235818 },
  Lochwinnoch: { lat: 55.7958077, lng: -4.6302458 },
  Inverleith: { lat: 55.9664864, lng: -3.214355 },
  Gretna: { lat: 54.994997, lng: -3.067108 },
  Torrance: { lat: 55.938854, lng: -4.211627 },
  Kilsyth: { lat: 55.979788, lng: -4.056933 },
  Annan: { lat: 54.990246, lng: -3.259773 },
  Insch: { lat: 57.34140499999999, lng: -2.611882 },
  Auchinleck: { lat: 55.473388, lng: -4.298566 },
  Banchory: { lat: 57.053856, lng: -2.49096 },
  'Calton Hill': { lat: 55.9550465, lng: -3.1827409 },
  Chryston: { lat: 55.90604, lng: -4.109538 },
  Kippen: { lat: 56.126624, lng: -4.166745 },
  Cumbernauld: { lat: 55.945668, lng: -3.992534 },
  'St Andrews': { lat: 56.3397753, lng: -2.7967214 },
  Slamannan: { lat: 55.937, lng: -3.830512999999999 },
  Ellon: { lat: 57.364597, lng: -2.072972 },
  Dornoch: { lat: 57.87907, lng: -4.028026 },
  Rothesay: { lat: 55.835963, lng: -5.055793 },
  Milngavie: { lat: 55.943304, lng: -4.316987 },
  Clarkston: { lat: 55.784536, lng: -4.275812 },
  Cowie: { lat: 56.08594600000001, lng: -3.872268999999999 },
  Tarbert: { lat: 55.863246, lng: -5.415608 },
  Carron: { lat: 56.0259532, lng: -3.7913557 },
  Errol: { lat: 56.391946, lng: -3.2127279 },
  Helensburgh: { lat: 56.002318, lng: -4.734014 },
  Thornton: { lat: 56.166325, lng: -3.146377 },
  Culloden: { lat: 57.487719, lng: -4.142093 },
  Rhu: { lat: 56.01342200000001, lng: -4.773518 },
  Tullibody: { lat: 56.13340299999999, lng: -3.837698999999999 },
  Dunblane: { lat: 56.183877, lng: -3.967449 },
  Killearn: { lat: 56.04628599999999, lng: -4.372517 },
  Auchterarder: { lat: 56.300621, lng: -3.700041 },
  Plains: { lat: 55.88071799999999, lng: -3.923012 },
  Kirriemuir: { lat: 56.675117, lng: -3.003501 },
  Saline: { lat: 56.114761, lng: -3.569448 },
  Pittenweem: { lat: 56.214, lng: -2.732285 },
  Broxburn: { lat: 55.934161, lng: -3.467681 },
  Aberlady: { lat: 56.009209, lng: -2.859444 },
  Biggar: { lat: 55.623396, lng: -3.523964 },
  Mauchline: { lat: 55.515888, lng: -4.3777549 },
  Carnwath: { lat: 55.701201, lng: -3.62357 },
  Nairn: { lat: 57.58642200000001, lng: -3.868475 },
  Galston: { lat: 55.601592, lng: -4.382581 },
  Kemnay: { lat: 57.232193, lng: -2.445715 },
  Doune: { lat: 56.191486, lng: -4.055376 },
  'Bridge of Allan': { lat: 56.153149, lng: -3.942207999999999 },
  Alva: { lat: 56.152958, lng: -3.799375 },
  Kinglassie: { lat: 56.173911, lng: -3.240616 },
  Stromness: { lat: 58.96619399999999, lng: -3.296495 },
  Troon: { lat: 55.541332, lng: -4.659948 },
  Inverurie: { lat: 57.28347400000001, lng: -2.373995 },
  Maybole: { lat: 55.35302, lng: -4.679055 },
  Kintore: { lat: 57.233247, lng: -2.346088 },
  Letham: { lat: 56.629253, lng: -2.77054 },
  Stewarton: { lat: 55.67995699999999, lng: -4.513587 },
  Kinross: { lat: 56.206132, lng: -3.4229 },
  Inverkeithing: { lat: 56.030043, lng: -3.398795 },
  Prestwick: { lat: 55.495587, lng: -4.6142139 },
  Brechin: { lat: 56.73334200000001, lng: -2.6552889 },
  Harthill: { lat: 55.8601907, lng: -3.7526334 },
  Carluke: { lat: 55.735435, lng: -3.836552 },
  Golspie: { lat: 57.973406, lng: -3.976086 },
  Kilbirnie: { lat: 55.755363, lng: -4.685976999999999 },
  Crail: { lat: 56.260551, lng: -2.6275909 },
  Falkland: { lat: 56.256285, lng: -3.206429 },
  Alexandria: { lat: 55.98870609999999, lng: -4.5789271 },
  Linwood: { lat: 55.84833399999999, lng: -4.493342 },
}
