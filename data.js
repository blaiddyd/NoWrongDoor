window.onscroll = function() {scroll()};

function scroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    }
    else {
        document.getElementById("topBtn").style.display = "none";

    }
}

function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function inRange(input, min, max) {
    return input >= min && input <= max;
}

$('#search').click(function() {
    var orgsArray = [{
        "OrgName": "55 Central Inc",
        "OrgField": "Accommodation",
        "OrgSuburb": "Maylands",
        "OrgAge": [18, 25],
        "OrgContact": 189272133,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "55 Central Avenue Maylands, WA 6051",
        "OrgWeb": "http://55central.asn.au"
      },
      {
        "OrgName": "AccordWest",
        "OrgField": "Accommodation",
        "OrgSuburb": "Mandurah",
        "OrgAge": [12, 25],
        "OrgContact": 800115799,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "4/19 Davey Street Mandurah WA 6210",
        "OrgWeb": "http://www.accordwest.com.au/"
      },
      {
        "OrgName": "Activ Foundation",
        "OrgField": "Accommodation",
        "OrgSuburb": "Wembley",
        "OrgAge": [12, 25],
        "OrgContact": 893870555,
        "OrgHours": "Weekdays 8am - 4:30pm",
        "OrgAddress": "327 Cambridge St Wembley WA 6913",
        "OrgWeb": "http://www.activ.asn.au/"
      },
      {
        "OrgName": "Albany Youth Support Association (Young House)",
        "OrgField": "Accommodation",
        "OrgSuburb": "Albany",
        "OrgAge": [12, 25],
        "OrgContact": 898422082,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "12 Young St Albany WA 6330",
        "OrgWeb": "http://www.younghouse.org.au/"
      },
      {
        "OrgName": "Anglicare Y-shac Rockingham",
        "OrgField": "Accommodation",
        "OrgSuburb": "Rockingham/Baldivis",
        "OrgAge": [15, 20],
        "OrgContact": 895233400,
        "OrgHours": "Weekdays 24 hours",
        "OrgAddress": "62 Fifty Road Baldivis WA 6171",
        "OrgWeb": "https://www.anglicarewa.org.au/get-help/housing-and-homelessness/y-shac"
      },
      {
        "OrgName": "Anglicare Y-shac Spearwood",
        "OrgField": "Accommodation",
        "OrgSuburb": "Spearwood",
        "OrgAge": [15, 20],
        "OrgContact": 894120673,
        "OrgHours": "Weekdays 24 hours",
        "OrgAddress": "243 Spearwood Avenue Spearwood WA 6163",
        "OrgWeb": "https://www.anglicarewa.org.au/get-help/housing-and-homelessness/y-shac"
  
      },
      {
        "OrgName": "Anglicare YES! Housing",
        "OrgField": "Accommodation",
        "OrgSuburb": "East Perth",
        "OrgAge": [15, 17],
        "OrgContact": 892632009,
        "OrgHours": "Weekdays 8:30am - 4:30pm",
        "OrgAddress": "23 Adelaide Tce East Perth WA 6004",
        "OrgWeb": "https://www.anglicarewa.org.au/get-help/housing-and-homelessness/yes!-housing"
      },
      {
        "OrgName": "Armadale Youth Accommodation Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Armadale",
        "OrgAge": [15, 20],
        "OrgContact": 894971351,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "317 Railway Ave Armadale WA 6112",
        "OrgWeb": "http://www.parkerville.org.au/"
      },
      {
        "OrgName": "Avon Youth Merredin",
        "OrgField": "Accommodation",
        "OrgSuburb": "Merredin",
        "OrgAge": [12, 24],
        "OrgContact": 890415286,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "52 Barrack St Merredin WA 6515",
        "OrgWeb": "https://www.avonyouth.org.au/"
      },
      {
        "OrgName": "Avon Youth Narrogin",
        "OrgField": "Accommodation",
        "OrgSuburb": "Narrogin",
        "OrgAge": [12, 24],
        "OrgContact": 898816001,
        "OrgHours": "Mon-TuespWed 9am-5pm",
        "OrgAddress": "Shop 7/9 Egerton st Narrogin WA 6312",
        "OrgWeb": "https://www.avonyouth.org.au/"
      },
      {
        "OrgName": "Belmont Youth Programme",
        "OrgField": "Accommodation",
        "OrgSuburb": "Belmont",
        "OrgAge": [13, 18],
        "OrgContact": 92774692,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "Cale House, 11/52 The Crescent, Midland WA 6056",
        "OrgWeb": "http://parkerville.org.au/services/youth-services/belmont-youth-programme/"
      },
      {
        "OrgName": "Broome Youth Accommodation Services",
        "OrgField": "Accommodation",
        "OrgSuburb": "Broome",
        "OrgAge": [16, 25],
        "OrgContact": 891937100,
        "OrgHours": "Weekdays 8am - 4:00pm",
        "OrgAddress": "34 Blackman St Broome WA 6725",
        "OrgWeb": "http://www.nirrumbuk.org.au/"
      },
      {
        "OrgName": "Burdekin Youth in Action",
        "OrgField": "Accommodation",
        "OrgSuburb": "Broome",
        "OrgAge": [15, 20],
        "OrgContact": 891936391,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "33 Louis St Broome WA 6725",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "C.R.O.F.T.",
        "OrgField": "Accommodation",
        "OrgSuburb": "Inglewood",
        "OrgAge": [18, 25],
        "OrgContact": 892726111,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "833 Beaufort St Inglewood WA 6052",
        "OrgWeb": "http://www.croft.org.au/"
      },
      {
        "OrgName": "Calvary Youth Services Mandurah Inc",
        "OrgField": "Accommodation",
        "OrgSuburb": "Mandurah",
        "OrgAge": [15, 25],
        "OrgContact": 895811741,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "40 Sutton St Mandurah WA 6175",
        "OrgWeb": "http://www.calvary-mandurah.org/"
      },
      {
        "OrgName": "City of Rockingham Youth Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Rockingham/Baldivis",
        "OrgAge": [12, 25],
        "OrgContact": 95288689,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "City of Rockingham Administration Building Civic Blvd Rockingham WA 6168",
        "OrgWeb": "http://rockingham.wa.gov.au/Services/Community-wellbeing-services/Youth-services#"
      },
      {
        "OrgName": "DAWN Fremantle",
        "OrgField": "Drugs & Alcohol",
        "OrgSuburb": "Fremantle",
        "OrgAge": [12, 25],
        "OrgContact": 893356333,
        "OrgHours": "Weekdays 9am - 4 pm",
        "OrgAddress": "Fremantle Headspace, Level1 Wesley Central Cnr Cantonment St & Market St Fremantle 6160",
        "OrgWeb": "http://www.facebook.com/pages/headspace-perth/234160793322904"
      },
      {
        "OrgName": "DAWN Osborne Park",
        "OrgField": "Drugs & Alcohol",
        "OrgSuburb": "Osborne Park",
        "OrgAge": [12, 25],
        "OrgContact": 892089555,
        "OrgHours": "Weekdays 9am - 4 pm",
        "OrgAddress": "Suite 2/145 Main St Osborne Park WA 6017",
        "OrgWeb": "http://www.facebook.com/pages/headspace-perth/234160793322904"
      },
      {
        "OrgName": "City of Canning Youth Accommodation Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Canning/Lynwood",
        "OrgAge": [11, 21],
        "OrgContact": 894617182,
        "OrgHours": "Weekdays 9am - 5:30pm",
        "OrgAddress": "Edgeware St Lynwood WA 6147",
        "OrgWeb": "http://www.canning.wa.gov.au/y/youth-accommodation.html"
      },
      {
        "OrgName": "Ebenezer Home",
        "OrgField": "Accommodation",
        "OrgSuburb": "Balga",
        "OrgAge": [15, 25],
        "OrgContact": 894401736,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "4 Penrith Place Balga WA 6061",
        "OrgWeb": "http://ebenezerhome.org.au/"
      },
      {
        "OrgName": "Foyer Oxford",
        "OrgField": "Accommodation",
        "OrgSuburb": "Leederville",
        "OrgAge": [16, 25],
        "OrgContact": 1800185685,
        "OrgHours": "8am-8pm All Week",
        "OrgAddress": "196 Oxford St, Leederville WA 6007",
        "OrgWeb": "http://www.foyeroxford.org.au/"
      },
      {
        "OrgName": "Fusion Student Household Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Bentley",
        "OrgAge": [13, 18],
        "OrgContact": 893551159,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "1 Pusey St Bentley WA 6102",
        "OrgWeb": "http://perth.fusion.org.au/"
      },
      {
        "OrgName": "Horizon House Broome",
        "OrgField": "Accommodation",
        "OrgSuburb": "Broome",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Horizon House Bunburry",
        "OrgField": "Accommodation",
        "OrgSuburb": "Bunbury",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Horizon House Dianella",
        "OrgField": "Accommodation",
        "OrgSuburb": "Dianella",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Horizon House General Services",
        "OrgField": "Accommodation",
        "OrgSuburb": "Geraldton/Wanneroo/Wilson",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Kalgoorlie Boulder Youth Accommodation Services",
        "OrgField": "Accommodation",
        "OrgSuburb": "Kalgoorlie",
        "OrgAge": [15, 24],
        "OrgContact": 890911016,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "10 Park St Kalgoorlie WA 6430",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "Karratha Youth Housing Project",
        "OrgField": "Accommodation",
        "OrgSuburb": "Karratha",
        "OrgAge": [13, 25],
        "OrgContact": 891441881,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "7 Goodwyn Close Karratha WA 6714",
        "OrgWeb": "http://www.salvationarmy.org.au/karratha"
      },
      {
        "OrgName": "Kira House",
        "OrgField": "Accommodation",
        "OrgSuburb": "Midland",
        "OrgAge": [14, 18],
        "OrgContact": 408895613,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "41A Great Northern Highway Middle Swan 6056 WA ",
        "OrgWeb": "https://www.risenetwork.com.au/our-services/youth/individual-support-2youth/young-parent-support/"
      },
      {
        "OrgName": "Parkerville Children & Youth Care Inc.",
        "OrgField": "Accommodation, Mental Health",
        "OrgSuburb": "Parkerville",
        "OrgAge": [5, 18],
        "OrgContact": 892954400,
        "OrgHours": "Weekdays 8:30am-5pm",
        "OrgAddress": "Beacon Rd Parkeville WA 6081",
        "OrgWeb": "http://parkerville.org.au/"
      },
      {
        "OrgName": "Parkerville Reconnect",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Parkerville/Midland",
        "OrgAge": [12, 18],
        "OrgContact": 892748440,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "39 Helena St Midland WA 6056",
        "OrgWeb": "http://www.parkerville.org.au/"
      },
      {
        "OrgName": "PICYS-Household Network",
        "OrgField": "Accommodation",
        "OrgSuburb": "Perth/Leederville",
        "OrgAge": [16, 25],
        "OrgContact": 893882791,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "22 Blencowe St Leederville WA 6007",
        "OrgWeb": "http://picys.org.au/"
      },
      {
        "OrgName": "PICYS-PILLAR",
        "OrgField": "Mental Health",
        "OrgSuburb": "Perth/Leederville",
        "OrgAge": [15, 20],
        "OrgContact": 893882791,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "22 Blencowe St Leederville WA 6007",
        "OrgWeb": "http://picys.org.au/"
      },
      {
        "OrgName": "Reconnect Great Southern",
        "OrgField": "Accommodation",
        "OrgSuburb": "Albany",
        "OrgAge": [12, 18],
        "OrgContact": 438012572,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "12 Young St Albany WA 6330",
        "OrgWeb": "http://www.younghouse.org.au/"
      },
      {
        "OrgName": "Salvation Army Oasis House",
        "OrgField": "Accommodation",
        "OrgSuburb": "Northbridge",
        "OrgAge": [14, 17],
        "OrgContact": 893281600,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "333 William St Northbridge WA 6003",
        "OrgWeb": "www.salvationarmy.org.au/en/Find-Us/Western-Australia/Our-Churches/PerthFortress/"
      },
      {
        "OrgName": "STAY",
        "OrgField": "Accommodation",
        "OrgSuburb": "Geraldton",
        "OrgAge": [15, 25],
        "OrgContact": 899215696,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "24 Quary St Geraldton WA 6530",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "Town of Bassedan Youth Service",
        "OrgField": "General Youth Services",
        "OrgSuburb": "",
        "OrgAge": [12, 25],
        "OrgContact": 892792329,
        "OrgHours": "Tues-Fri 10am-6pm",
        "OrgAddress": "McDonald Pavilion Steel Blue Oval Corner West and Guildford Roads \nBassendean\nWA 6054",
        "OrgWeb": "http://www.bys.net.au/"
      },
      {
        "OrgName": "Transitional Accommodation Program",
        "OrgField": "Accommodation",
        "OrgSuburb": "Perth",
        "OrgAge": [16, 21],
        "OrgContact": 893002677,
        "OrgHours": "Weekdays 9am-4:30pm",
        "OrgAddress": "70 Davidson Tce Joodalup WA 6027",
        "OrgWeb": "www.youthfutureswa.org.au/"
      },
      {
        "OrgName": "Victoria Park Youth Accommodation Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Victoria Park",
        "OrgAge": [12, 25],
        "OrgContact": 893614118,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "5 Leonard St Victoria St WA 6100",
        "OrgWeb": "http://www.shelterwa.org.au/5264"
      },
      {
        "OrgName": "Wyn Carr House",
        "OrgField": "Accommodation",
        "OrgSuburb": "East Perth",
        "OrgAge": [18, 25],
        "OrgContact": 894305756,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "5/5 Aberdeen St East Perth WA 6004",
        "OrgWeb": "http://www.unitingcarewest.org.au/services/homelessness/wyn-carr-house/"
      },
      {
        "OrgName": "YASS",
        "OrgField": "Accommodation",
        "OrgSuburb": "Victoria Park",
        "OrgAge": [15, 25],
        "OrgContact": 893294480,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "91 Berwick St Victoria Park wa 6100",
        "OrgWeb": ""
      },
      {
        "OrgName": "Youth Futures-Nest Program",
        "OrgField": "Accommodation",
        "OrgSuburb": "Joondalup",
        "OrgAge": [16, 19],
        "OrgContact": 893002677,
        "OrgHours": "Weekdays 9am-4:30pm",
        "OrgAddress": "70 Davidson Tce Joodalup WA 6027",
        "OrgWeb": "www.youthfutureswa.org.au/"
      },
      {
        "OrgName": "Youth Involvement Council",
        "OrgField": "Accommodation",
        "OrgSuburb": "Hedland",
        "OrgAge": [10, 25],
        "OrgContact": 891401272,
        "OrgHours": "Tues-Fri 3pm-7pm, Sat-Sun 2pm-7pm",
        "OrgAddress": "34 Lawson St South Hedland WA 6722",
        "OrgWeb": "http://www.yic.com.au/"
      },
      {
        "OrgName": "AADS",
        "OrgField": "Drugs & Alcohol",
        "OrgSuburb": "East Perth",
        "OrgAge": [18, 25],
        "OrgContact": 882211511,
        "OrgHours": "Mon-Thurs 8:30am-12:30pm/1:30-5pm, Friday 8:30am-2pm",
        "OrgAddress": "211 Royal St East Perth WA 6004",
        "OrgWeb": "http://www.aads.org.au/"
      },
      {
        "OrgName": "Stand By Me Youth Services Inc",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Beechboro",
        "OrgAge": [11, 25],
        "OrgContact": 893774022,
        "OrgHours": "Tues-Fri 3pm-5pm",
        "OrgAddress": "332 Benara Rd Beechboro A 6063",
        "OrgWeb": "http://www.standbymewa.org.au/"
      },
      {
        "OrgName": "The Geraldton Family & Youth Support Service",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Geraldton",
        "OrgAge": [11, 18],
        "OrgContact": 899214855,
        "OrgHours": "Check Website Below for Hours",
        "OrgAddress": "24-28 Gregory St Geraldton WA 6530",
        "OrgWeb": "http://edcentre.wa.edu.au/"
      },
      {
        "OrgName": "Catholic Migrant Centre",
        "OrgField": "Counselling/Advising",
        "OrgSuburb": "Perth",
        "OrgAge": [12, 20],
        "OrgContact": 893256644,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "25 Victoria St Perth WA 6000",
        "OrgWeb": "http://www.acmro.catholic.org.au/"
      },
      {
        "OrgName": "Mission Australia Reconnect",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Mandurah",
        "OrgAge": [12, 18],
        "OrgContact": 895319400,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "41 Dower St Mandurah WA 6210",
        "OrgWeb": "http://sd.missionaustralia.com.au/255-reconnect-mandurah"
      },
      {
        "OrgName": "Denmark Youth Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Denmark",
        "OrgAge": [12, 17],
        "OrgContact": 898482377,
        "OrgHours": "Weds 3:30p-6pm, Fri 3:30pm-10pm, Sat 2pm-9pm",
        "OrgAddress": "McLean Park Brazier St Denmark WA 6333",
        "OrgWeb": "http://www.denmark.wa.gov.au/residents/youth-services.aspx"
      },
      {
        "OrgName": "headspace Albany",
        "OrgField": "Alcohol & Drugs, Mental Health, Counselling/Advising",
        "OrgSuburb": "Albany",
        "OrgAge": [12, 25],
        "OrgContact": 898429871,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "Shops 9-11 The Link Shopping Centre St Emilie Way Albany 6330",
        "OrgWeb": "https://www.headspace.org.au"
      },
      {
        "OrgName": "headspace Rockingham",
        "OrgField": "Drugs & Alcohol, Mental Health, Sexual Health",
        "OrgSuburb": "Rockingham",
        "OrgAge": [12, 25],
        "OrgContact": 895958888,
        "OrgHours": "Weekdays 8:30am-4:30pm, Sun 8:30am-4:30pm",
        "OrgAddress": "Unit 3/18 Goddard St",
        "OrgWeb": "https://www.headspace.org.au"
      },
      {
        "OrgName": "Avon Youth Community & Family Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Northam",
        "OrgAge": [12, 25],
        "OrgContact": 8962226122612,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "371 Fitzgerald St E, Northam WA 6401",
        "OrgWeb": "https://www.avonyouth.org.au/"
      },
      {
        "OrgName": "headspace Bunbury",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Bunbury",
        "OrgAge": [12, 25],
        "OrgContact": 892796800,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "1/82 Blair St, Bunbury WA 6230",
        "OrgWeb": "https://www.headspace.org.au"
      },
      {
        "OrgName": "ESCARE Inc",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Esperance",
        "OrgAge": [12, 18],
        "OrgContact": 890717192,
        "OrgHours": "Weekdays 9am-4pm",
        "OrgAddress": "Lotteries House, Forrest St, Esperence WA 6450",
        "OrgWeb": "http://www.escare.org.au/"
      },
      {
        "OrgName": "Balga Detached Youth Work Project",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Balga",
        "OrgAge": [14, 21],
        "OrgContact": 893429669,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "72 Fincley Crescent Balga WA 6061",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "Yaandina Family Centre and Youth Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Roeburne",
        "OrgAge": [5, 18],
        "OrgContact": 891821172,
        "OrgHours": "Mon-Tues 2:30pm-8:30pm, Wed 2:30 pm-5pm, Thurs 2:30pm-7pm, Fri 2:30pm-6:00pm",
        "OrgAddress": "51 Hampton Street\nRoeburne\nWA 6718",
        "OrgWeb": "www.yaandina.org/"
      },
      {
        "OrgName": "The Base at Belmont Youth Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Belmont",
        "OrgAge": [7, 25],
        "OrgContact": 894795794,
        "OrgHours": "Mon,Tues,Thurs 3pm-6pm, Wed 2:30pm-6pm, Fri 3pm-8pm, Sat 11am-3pm",
        "OrgAddress": "275 Abernethy Rd, Cloverdale WA 6105",
        "OrgWeb": "www.belmont.wa.gov.au/community/childrenandyouth/pages/belmont-youth-centre.aspx"
      },
      {
        "OrgName": "Metropolitan Migrant Resource Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Mirrabooka",
        "OrgAge": [8, 25],
        "OrgContact": 8934555755,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "1/14 Chesterfield Road \nMirrabooka \nWA 6061 ",
        "OrgWeb": "http://mmrcwa.org.au/"
      },
      {
        "OrgName": "The Humanitarian Group",
        "OrgField": "Counselling/Advising",
        "OrgSuburb": "Victoria Park",
        "OrgAge": [12, 25],
        "OrgContact": 892277311,
        "OrgHours": "Weekdays 9am-12pm, 1pm-3pm",
        "OrgAddress": "\n16B Sunbury Road\nVictoria Park\nWA 6100 ",
        "OrgWeb": "http://thehumanitariangroup.org.au/"
      },
      {
        "OrgName": "Youth Focus",
        "OrgField": "Counselling/Advising, Mental Health",
        "OrgSuburb": "Burswood",
        "OrgAge": [12, 25],
        "OrgContact": 862664333,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "54 Goodwood Parade\nBurswood WA 6100 ",
        "OrgWeb": "https://youthfocus.com.au/"
      },
      {
        "OrgName": "SHIFT Youth Crew",
        "OrgField": "Counselling/Advising",
        "OrgSuburb": "Busselton",
        "OrgAge": [12, 24],
        "OrgContact": 897810444,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "City of Busselton\n2 Southern Drive\nBusselton, WA 6280",
        "OrgWeb": "https://www.busselton.wa.gov.au/Community-Services/Youth-Activities-and-Services"
      },
      {
        "OrgName": "Freedom Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Perth CBD",
        "OrgAge": "",
        "OrgContact": 892280354,
        "OrgHours": "Mon-Thurs 5pm-8pm, Fri 4pm-8pm, Sat 12pm-5pm",
        "OrgAddress": "93 Brisbane Street\nPerth \nWA 6000 ",
        "OrgWeb": "http://www.freedom.org.au/"
      },
      {
        "OrgName": "YMCA WA",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Welshpool",
        "OrgAge": [12, 18],
        "OrgContact": 894738400,
        "OrgHours": "Times for Different Locations found on Website",
        "OrgAddress": "201 Star St Welshpool WA 6106",
        "OrgWeb": "https://www.ymcawa.org.au/"
      },
      {
        "OrgName": "Street Connect Anglicare",
        "OrgField": "General Youth Services",
        "OrgSuburb": "East Perth",
        "OrgAge": [15, 25],
        "OrgContact": 418942475,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "\n23 Adelaide Terrace\nEast Perth\nWA",
        "OrgWeb": "https://www.anglicarewa.org.au/youth/advice-advocacy-referral/street-connect/default.aspx"
      },
      {
        "OrgName": "Substance Outreach Information Service",
        "OrgField": "Counselling/Advising, Mental Health, Drugs & Alcohol",
        "OrgSuburb": "Bunbury",
        "OrgAge": [15, 24],
        "OrgContact": 897913213,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "40 Charles St \nBunbury \nWA 6230 ",
        "OrgWeb": "http://www.aswa.org.au/"
      },
      {
        "OrgName": "Chrysalis Women's Refuge",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Geraldton",
        "OrgAge": [12, 25],
        "OrgContact": 899642173,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "\n114 Sanford Street\nGeraldton\nWA 6530",
        "OrgWeb": "http://chrysalis.org.au/"
      },
      {
        "OrgName": "Paraburdoo Youth Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Paraburdoo",
        "OrgAge": [12, 18],
        "OrgContact": 891895589,
        "OrgHours": "Tue-Thurs, 3:30pm-6:30pm, Fri 6pm-10pm, Sat-Sun 1pm-5pm",
        "OrgAddress": "De Grey Rd Paraburdoo WA 6754",
        "OrgWeb": null
      },
      {
        "OrgName": "Swan City Youth Service",
        "OrgField": "Counselling/Advising, Emergency Relief",
        "OrgSuburb": "Midland",
        "OrgAge": [12, 25],
        "OrgContact": 892743488,
        "OrgHours": "Mon 9am-4pm, Tues-Fri 10am-7pm",
        "OrgAddress": "\n78 Morrison Road\nMidland\nWA 6054 ",
        "OrgWeb": "/http://www.scys.com.au/"
      },
      {
        "OrgName": "Youth Futures-Emergency Relief Program",
        "OrgField": "Emergency Relief",
        "OrgSuburb": "Joondalup",
        "OrgAge": [15, 24],
        "OrgContact": 893002677,
        "OrgHours": "Weekdays 9am-4:30pm",
        "OrgAddress": "\n70 Davidson Terrace \nJoondalup\nWA 6027 ",
        "OrgWeb": "www.youthfutureswa.org.au/"
      },
      {
        "OrgName": "Aboriginal Family Respite Service",
        "OrgField": "Mental Health",
        "OrgSuburb": "Balga",
        "OrgAge": [12, 25],
        "OrgContact": 892066209,
        "OrgHours": "Tuesday 9:30am-2:30am",
        "OrgAddress": "\nAboriginal Evanglical Church Penrith Place\nBalga\nWA 6061",
        "OrgWeb": "www.unitingcarewest.org.au/services/indigenous-communities/aboriginal-family-respite-service/"
      }
    ];
        
    var ageInput = document.querySelector('#age').value;
    var catInput = document.querySelector('#cat').value;
    var subInput = document.querySelector('#sub').value;
    if (catInput==null || catInput=="", subInput==null || subInput=="", ageInput==null || ageInput=="") {
        alert("Please Fill All Required Fields");
        return false;
    }
    else {
        var results = orgsArray.filter(function (org) {
        return org.OrgSuburb == subInput &&
        org.OrgField == catInput &&
        inRange(ageInput, org.OrgAge[0], org.OrgAge[1]);
        
    });       
    
    if(results.length == 0) {
        alert('None of the organizations matched your criteria. Please try again.');
        return;
    }
   
    var $tablehead = $('<thead></thead>');
    var $attribute = $('<tr></tr>');
    $attribute.append($('<th></th>').text("Name"));
    $attribute.append($('<th></th>').text("Category"));
    $attribute.append($('<th></th>').text("Suburb"));
    $attribute.append($('<th></th>').text("Ages"));
    $attribute.append($('<th></th>').text("Contact"));
    $attribute.append($('<th></th>').text("Hours"));
    $attribute.append($('<th></th>').text("Address"));
    $attribute.append($('<th></th>').text("Website"));
    $tablehead.append($attribute);
   
    var $tablebody = $('<tbody></tbody>');
    for(var i = 0; i < results.length; i++) {
        var oneOrg = results[i];
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(oneOrg.OrgName));
        $row.append($('<td></td>').text(oneOrg.OrgField));
        $row.append($('<td></td>').text(oneOrg.OrgSuburb));
        $row.append($('<td></td>').text(oneOrg.OrgAge));
        $row.append($('<td></td>').text(oneOrg.OrgContact));
        $row.append($('<td></td>').text(oneOrg.OrgHours));
        $row.append($('<td></td>').text(oneOrg.OrgAddress));
        $row.append($('<td></td>').text(oneOrg.OrgWeb));
        $tablebody.append($row);
    }
    $('#filtered').append($tablehead);
    var $finalTable = $('#filtered').append($tablebody);
    $('#result').append($finalTable);
}
});

$(document).ready(function() {
    var orgsArray = [{
        "OrgName": "55 Central Inc",
        "OrgField": "Accommodation",
        "OrgSuburb": "Maylands",
        "OrgAge": [18, 25],
        "OrgContact": 189272133,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "55 Central Avenue Maylands, WA 6051",
        "OrgWeb": "http://55central.asn.au"
      },
      {
        "OrgName": "AccordWest",
        "OrgField": "Accommodation",
        "OrgSuburb": "Mandurah",
        "OrgAge": [12, 25],
        "OrgContact": 800115799,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "4/19 Davey Street Mandurah WA 6210",
        "OrgWeb": "http://www.accordwest.com.au/"
      },
      {
        "OrgName": "Activ Foundation",
        "OrgField": "Accommodation",
        "OrgSuburb": "Wembley",
        "OrgAge": [12, 25],
        "OrgContact": 893870555,
        "OrgHours": "Weekdays 8am - 4:30pm",
        "OrgAddress": "327 Cambridge St Wembley WA 6913",
        "OrgWeb": "http://www.activ.asn.au/"
      },
      {
        "OrgName": "Albany Youth Support Association (Young House)",
        "OrgField": "Accommodation",
        "OrgSuburb": "Albany",
        "OrgAge": [12, 25],
        "OrgContact": 898422082,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "12 Young St Albany WA 6330",
        "OrgWeb": "http://www.younghouse.org.au/"
      },
      {
        "OrgName": "Anglicare Y-shac Rockingham",
        "OrgField": "Accommodation",
        "OrgSuburb": "Rockingham/Baldivis",
        "OrgAge": [15, 20],
        "OrgContact": 895233400,
        "OrgHours": "Weekdays 24 hours",
        "OrgAddress": "62 Fifty Road Baldivis WA 6171",
        "OrgWeb": "https://www.anglicarewa.org.au/get-help/housing-and-homelessness/y-shac"
      },
      {
        "OrgName": "Anglicare Y-shac Spearwood",
        "OrgField": "Accommodation",
        "OrgSuburb": "Spearwood",
        "OrgAge": [15, 20],
        "OrgContact": 894120673,
        "OrgHours": "Weekdays 24 hours",
        "OrgAddress": "243 Spearwood Avenue Spearwood WA 6163",
        "OrgWeb": "https://www.anglicarewa.org.au/get-help/housing-and-homelessness/y-shac"
  
      },
      {
        "OrgName": "Anglicare YES! Housing",
        "OrgField": "Accommodation",
        "OrgSuburb": "East Perth",
        "OrgAge": [15, 17],
        "OrgContact": 892632009,
        "OrgHours": "Weekdays 8:30am - 4:30pm",
        "OrgAddress": "23 Adelaide Tce East Perth WA 6004",
        "OrgWeb": "https://www.anglicarewa.org.au/get-help/housing-and-homelessness/yes!-housing"
      },
      {
        "OrgName": "Armadale Youth Accommodation Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Armadale",
        "OrgAge": [15, 20],
        "OrgContact": 894971351,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "317 Railway Ave Armadale WA 6112",
        "OrgWeb": "http://www.parkerville.org.au/"
      },
      {
        "OrgName": "Avon Youth Merredin",
        "OrgField": "Accommodation",
        "OrgSuburb": "Merredin",
        "OrgAge": [12, 24],
        "OrgContact": 890415286,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "52 Barrack St Merredin WA 6515",
        "OrgWeb": "https://www.avonyouth.org.au/"
      },
      {
        "OrgName": "Avon Youth Narrogin",
        "OrgField": "Accommodation",
        "OrgSuburb": "Narrogin",
        "OrgAge": [12, 24],
        "OrgContact": 898816001,
        "OrgHours": "Mon-TuespWed 9am-5pm",
        "OrgAddress": "Shop 7/9 Egerton st Narrogin WA 6312",
        "OrgWeb": "https://www.avonyouth.org.au/"
      },
      {
        "OrgName": "Belmont Youth Programme",
        "OrgField": "Accommodation",
        "OrgSuburb": "Belmont",
        "OrgAge": [13, 18],
        "OrgContact": 92774692,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "Cale House, 11/52 The Crescent, Midland WA 6056",
        "OrgWeb": "http://parkerville.org.au/services/youth-services/belmont-youth-programme/"
      },
      {
        "OrgName": "Broome Youth Accommodation Services",
        "OrgField": "Accommodation",
        "OrgSuburb": "Broome",
        "OrgAge": [16, 25],
        "OrgContact": 891937100,
        "OrgHours": "Weekdays 8am - 4:00pm",
        "OrgAddress": "34 Blackman St Broome WA 6725",
        "OrgWeb": "http://www.nirrumbuk.org.au/"
      },
      {
        "OrgName": "Burdekin Youth in Action",
        "OrgField": "Accommodation",
        "OrgSuburb": "Broome",
        "OrgAge": [15, 20],
        "OrgContact": 891936391,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "33 Louis St Broome WA 6725",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "C.R.O.F.T.",
        "OrgField": "Accommodation",
        "OrgSuburb": "Inglewood",
        "OrgAge": [18, 25],
        "OrgContact": 892726111,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "833 Beaufort St Inglewood WA 6052",
        "OrgWeb": "http://www.croft.org.au/"
      },
      {
        "OrgName": "Calvary Youth Services Mandurah Inc",
        "OrgField": "Accommodation",
        "OrgSuburb": "Mandurah",
        "OrgAge": [15, 25],
        "OrgContact": 895811741,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "40 Sutton St Mandurah WA 6175",
        "OrgWeb": "http://www.calvary-mandurah.org/"
      },
      {
        "OrgName": "City of Rockingham Youth Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Rockingham/Baldivis",
        "OrgAge": [12, 25],
        "OrgContact": 95288689,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "City of Rockingham Administration Building Civic Blvd Rockingham WA 6168",
        "OrgWeb": "http://rockingham.wa.gov.au/Services/Community-wellbeing-services/Youth-services#"
      },
      {
        "OrgName": "DAWN Fremantle",
        "OrgField": "Drugs & Alcohol",
        "OrgSuburb": "Fremantle",
        "OrgAge": [12, 25],
        "OrgContact": 893356333,
        "OrgHours": "Weekdays 9am - 4 pm",
        "OrgAddress": "Fremantle Headspace, Level1 Wesley Central Cnr Cantonment St & Market St Fremantle 6160",
        "OrgWeb": "http://www.facebook.com/pages/headspace-perth/234160793322904"
      },
      {
        "OrgName": "DAWN Osborne Park",
        "OrgField": "Drugs & Alcohol",
        "OrgSuburb": "Osborne Park",
        "OrgAge": [12, 25],
        "OrgContact": 892089555,
        "OrgHours": "Weekdays 9am - 4 pm",
        "OrgAddress": "Suite 2/145 Main St Osborne Park WA 6017",
        "OrgWeb": "http://www.facebook.com/pages/headspace-perth/234160793322904"
      },
      {
        "OrgName": "City of Canning Youth Accommodation Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Canning/Lynwood",
        "OrgAge": [11, 21],
        "OrgContact": 894617182,
        "OrgHours": "Weekdays 9am - 5:30pm",
        "OrgAddress": "Edgeware St Lynwood WA 6147",
        "OrgWeb": "http://www.canning.wa.gov.au/y/youth-accommodation.html"
      },
      {
        "OrgName": "Ebenezer Home",
        "OrgField": "Accommodation",
        "OrgSuburb": "Balga",
        "OrgAge": [15, 25],
        "OrgContact": 894401736,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "4 Penrith Place Balga WA 6061",
        "OrgWeb": "http://ebenezerhome.org.au/"
      },
      {
        "OrgName": "Foyer Oxford",
        "OrgField": "Accommodation",
        "OrgSuburb": "Leederville",
        "OrgAge": [16, 25],
        "OrgContact": 1800185685,
        "OrgHours": "8am-8pm All Week",
        "OrgAddress": "196 Oxford St, Leederville WA 6007",
        "OrgWeb": "http://www.foyeroxford.org.au/"
      },
      {
        "OrgName": "Fusion Student Household Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Bentley",
        "OrgAge": [13, 18],
        "OrgContact": 893551159,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "1 Pusey St Bentley WA 6102",
        "OrgWeb": "http://perth.fusion.org.au/"
      },
      {
        "OrgName": "Horizon House Broome",
        "OrgField": "Accommodation",
        "OrgSuburb": "Broome",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Horizon House Bunburry",
        "OrgField": "Accommodation",
        "OrgSuburb": "Bunbury",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Horizon House Dianella",
        "OrgField": "Accommodation",
        "OrgSuburb": "Dianella",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Horizon House General Services",
        "OrgField": "Accommodation",
        "OrgSuburb": "Geraldton/Wanneroo/Wilson",
        "OrgAge": [16, 22],
        "OrgContact": 891921548,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "Main Office: 1322 Hay St West Perth WA 6005",
        "OrgWeb": "https://www.sjog.org.au/horizonhouse"
      },
      {
        "OrgName": "Kalgoorlie Boulder Youth Accommodation Services",
        "OrgField": "Accommodation",
        "OrgSuburb": "Kalgoorlie",
        "OrgAge": [15, 24],
        "OrgContact": 890911016,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "10 Park St Kalgoorlie WA 6430",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "Karratha Youth Housing Project",
        "OrgField": "Accommodation",
        "OrgSuburb": "Karratha",
        "OrgAge": [13, 25],
        "OrgContact": 891441881,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "7 Goodwyn Close Karratha WA 6714",
        "OrgWeb": "http://www.salvationarmy.org.au/karratha"
      },
      {
        "OrgName": "Kira House",
        "OrgField": "Accommodation",
        "OrgSuburb": "Midland",
        "OrgAge": [14, 18],
        "OrgContact": 408895613,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "41A Great Northern Highway Middle Swan 6056 WA ",
        "OrgWeb": "https://www.risenetwork.com.au/our-services/youth/individual-support-2youth/young-parent-support/"
      },
      {
        "OrgName": "Parkerville Children & Youth Care Inc.",
        "OrgField": "Accommodation, Mental Health",
        "OrgSuburb": "Parkerville",
        "OrgAge": [5, 18],
        "OrgContact": 892954400,
        "OrgHours": "Weekdays 8:30am-5pm",
        "OrgAddress": "Beacon Rd Parkeville WA 6081",
        "OrgWeb": "http://parkerville.org.au/"
      },
      {
        "OrgName": "Parkerville Reconnect",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Parkerville/Midland",
        "OrgAge": [12, 18],
        "OrgContact": 892748440,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "39 Helena St Midland WA 6056",
        "OrgWeb": "http://www.parkerville.org.au/"
      },
      {
        "OrgName": "PICYS-Household Network",
        "OrgField": "Accommodation",
        "OrgSuburb": "Perth/Leederville",
        "OrgAge": [16, 25],
        "OrgContact": 893882791,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "22 Blencowe St Leederville WA 6007",
        "OrgWeb": "http://picys.org.au/"
      },
      {
        "OrgName": "PICYS-PILLAR",
        "OrgField": "Mental Health",
        "OrgSuburb": "Perth/Leederville",
        "OrgAge": [15, 20],
        "OrgContact": 893882791,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "22 Blencowe St Leederville WA 6007",
        "OrgWeb": "http://picys.org.au/"
      },
      {
        "OrgName": "Reconnect Great Southern",
        "OrgField": "Accommodation",
        "OrgSuburb": "Albany",
        "OrgAge": [12, 18],
        "OrgContact": 438012572,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "12 Young St Albany WA 6330",
        "OrgWeb": "http://www.younghouse.org.au/"
      },
      {
        "OrgName": "Salvation Army Oasis House",
        "OrgField": "Accommodation",
        "OrgSuburb": "Northbridge",
        "OrgAge": [14, 17],
        "OrgContact": 893281600,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "333 William St Northbridge WA 6003",
        "OrgWeb": "www.salvationarmy.org.au/en/Find-Us/Western-Australia/Our-Churches/PerthFortress/"
      },
      {
        "OrgName": "STAY",
        "OrgField": "Accommodation",
        "OrgSuburb": "Geraldton",
        "OrgAge": [15, 25],
        "OrgContact": 899215696,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "24 Quary St Geraldton WA 6530",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "Town of Bassedan Youth Service",
        "OrgField": "General Youth Services",
        "OrgSuburb": "",
        "OrgAge": [12, 25],
        "OrgContact": 892792329,
        "OrgHours": "Tues-Fri 10am-6pm",
        "OrgAddress": "McDonald Pavilion Steel Blue Oval Corner West and Guildford Roads \nBassendean\nWA 6054",
        "OrgWeb": "http://www.bys.net.au/"
      },
      {
        "OrgName": "Transitional Accommodation Program",
        "OrgField": "Accommodation",
        "OrgSuburb": "Perth",
        "OrgAge": [16, 21],
        "OrgContact": 893002677,
        "OrgHours": "Weekdays 9am-4:30pm",
        "OrgAddress": "70 Davidson Tce Joodalup WA 6027",
        "OrgWeb": "www.youthfutureswa.org.au/"
      },
      {
        "OrgName": "Victoria Park Youth Accommodation Service",
        "OrgField": "Accommodation",
        "OrgSuburb": "Victoria Park",
        "OrgAge": [12, 25],
        "OrgContact": 893614118,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "5 Leonard St Victoria St WA 6100",
        "OrgWeb": "http://www.shelterwa.org.au/5264"
      },
      {
        "OrgName": "Wyn Carr House",
        "OrgField": "Accommodation",
        "OrgSuburb": "East Perth",
        "OrgAge": [18, 25],
        "OrgContact": 894305756,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "5/5 Aberdeen St East Perth WA 6004",
        "OrgWeb": "http://www.unitingcarewest.org.au/services/homelessness/wyn-carr-house/"
      },
      {
        "OrgName": "YASS",
        "OrgField": "Accommodation",
        "OrgSuburb": "Victoria Park",
        "OrgAge": [15, 25],
        "OrgContact": 893294480,
        "OrgHours": "24 hours All Week",
        "OrgAddress": "91 Berwick St Victoria Park wa 6100",
        "OrgWeb": ""
      },
      {
        "OrgName": "Youth Futures-Nest Program",
        "OrgField": "Accommodation",
        "OrgSuburb": "Joondalup",
        "OrgAge": [16, 19],
        "OrgContact": 893002677,
        "OrgHours": "Weekdays 9am-4:30pm",
        "OrgAddress": "70 Davidson Tce Joodalup WA 6027",
        "OrgWeb": "www.youthfutureswa.org.au/"
      },
      {
        "OrgName": "Youth Involvement Council",
        "OrgField": "Accommodation",
        "OrgSuburb": "Hedland",
        "OrgAge": [10, 25],
        "OrgContact": 891401272,
        "OrgHours": "Tues-Fri 3pm-7pm, Sat-Sun 2pm-7pm",
        "OrgAddress": "34 Lawson St South Hedland WA 6722",
        "OrgWeb": "http://www.yic.com.au/"
      },
      {
        "OrgName": "AADS",
        "OrgField": "Drugs & Alcohol",
        "OrgSuburb": "East Perth",
        "OrgAge": [18, 25],
        "OrgContact": 882211511,
        "OrgHours": "Mon-Thurs 8:30am-12:30pm/1:30-5pm, Friday 8:30am-2pm",
        "OrgAddress": "211 Royal St East Perth WA 6004",
        "OrgWeb": "http://www.aads.org.au/"
      },
      {
        "OrgName": "Stand By Me Youth Services Inc",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Beechboro",
        "OrgAge": [11, 25],
        "OrgContact": 893774022,
        "OrgHours": "Tues-Fri 3pm-5pm",
        "OrgAddress": "332 Benara Rd Beechboro A 6063",
        "OrgWeb": "http://www.standbymewa.org.au/"
      },
      {
        "OrgName": "The Geraldton Family & Youth Support Service",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Geraldton",
        "OrgAge": [11, 18],
        "OrgContact": 899214855,
        "OrgHours": "Check Website Below for Hours",
        "OrgAddress": "24-28 Gregory St Geraldton WA 6530",
        "OrgWeb": "http://edcentre.wa.edu.au/"
      },
      {
        "OrgName": "Catholic Migrant Centre",
        "OrgField": "Counselling/Advising",
        "OrgSuburb": "Perth",
        "OrgAge": [12, 20],
        "OrgContact": 893256644,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "25 Victoria St Perth WA 6000",
        "OrgWeb": "http://www.acmro.catholic.org.au/"
      },
      {
        "OrgName": "Mission Australia Reconnect",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Mandurah",
        "OrgAge": [12, 18],
        "OrgContact": 895319400,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "41 Dower St Mandurah WA 6210",
        "OrgWeb": "http://sd.missionaustralia.com.au/255-reconnect-mandurah"
      },
      {
        "OrgName": "Denmark Youth Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Denmark",
        "OrgAge": [12, 17],
        "OrgContact": 898482377,
        "OrgHours": "Weds 3:30p-6pm, Fri 3:30pm-10pm, Sat 2pm-9pm",
        "OrgAddress": "McLean Park Brazier St Denmark WA 6333",
        "OrgWeb": "http://www.denmark.wa.gov.au/residents/youth-services.aspx"
      },
      {
        "OrgName": "headspace Albany",
        "OrgField": "Alcohol & Drugs, Mental Health, Counselling/Advising",
        "OrgSuburb": "Albany",
        "OrgAge": [12, 25],
        "OrgContact": 898429871,
        "OrgHours": "Weekdays 9 am - 5 pm",
        "OrgAddress": "Shops 9-11 The Link Shopping Centre St Emilie Way Albany 6330",
        "OrgWeb": "https://www.headspace.org.au"
      },
      {
        "OrgName": "headspace Rockingham",
        "OrgField": "Drugs & Alcohol, Mental Health, Sexual Health",
        "OrgSuburb": "Rockingham",
        "OrgAge": [12, 25],
        "OrgContact": 895958888,
        "OrgHours": "Weekdays 8:30am-4:30pm, Sun 8:30am-4:30pm",
        "OrgAddress": "Unit 3/18 Goddard St",
        "OrgWeb": "https://www.headspace.org.au"
      },
      {
        "OrgName": "Avon Youth Community & Family Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Northam",
        "OrgAge": [12, 25],
        "OrgContact": 8962226122612,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "371 Fitzgerald St E, Northam WA 6401",
        "OrgWeb": "https://www.avonyouth.org.au/"
      },
      {
        "OrgName": "headspace Bunbury",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Bunbury",
        "OrgAge": [12, 25],
        "OrgContact": 892796800,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "1/82 Blair St, Bunbury WA 6230",
        "OrgWeb": "https://www.headspace.org.au"
      },
      {
        "OrgName": "ESCARE Inc",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Esperance",
        "OrgAge": [12, 18],
        "OrgContact": 890717192,
        "OrgHours": "Weekdays 9am-4pm",
        "OrgAddress": "Lotteries House, Forrest St, Esperence WA 6450",
        "OrgWeb": "http://www.escare.org.au/"
      },
      {
        "OrgName": "Balga Detached Youth Work Project",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Balga",
        "OrgAge": [14, 21],
        "OrgContact": 893429669,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "72 Fincley Crescent Balga WA 6061",
        "OrgWeb": "N/A"
      },
      {
        "OrgName": "Yaandina Family Centre and Youth Services",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Roeburne",
        "OrgAge": [5, 18],
        "OrgContact": 891821172,
        "OrgHours": "Mon-Tues 2:30pm-8:30pm, Wed 2:30 pm-5pm, Thurs 2:30pm-7pm, Fri 2:30pm-6:00pm",
        "OrgAddress": "51 Hampton Street\nRoeburne\nWA 6718",
        "OrgWeb": "www.yaandina.org/"
      },
      {
        "OrgName": "The Base at Belmont Youth Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Belmont",
        "OrgAge": [7, 25],
        "OrgContact": 894795794,
        "OrgHours": "Mon,Tues,Thurs 3pm-6pm, Wed 2:30pm-6pm, Fri 3pm-8pm, Sat 11am-3pm",
        "OrgAddress": "275 Abernethy Rd, Cloverdale WA 6105",
        "OrgWeb": "www.belmont.wa.gov.au/community/childrenandyouth/pages/belmont-youth-centre.aspx"
      },
      {
        "OrgName": "Metropolitan Migrant Resource Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Mirrabooka",
        "OrgAge": [8, 25],
        "OrgContact": 8934555755,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "1/14 Chesterfield Road \nMirrabooka \nWA 6061 ",
        "OrgWeb": "http://mmrcwa.org.au/"
      },
      {
        "OrgName": "The Humanitarian Group",
        "OrgField": "Counselling/Advising",
        "OrgSuburb": "Victoria Park",
        "OrgAge": [12, 25],
        "OrgContact": 892277311,
        "OrgHours": "Weekdays 9am-12pm, 1pm-3pm",
        "OrgAddress": "\n16B Sunbury Road\nVictoria Park\nWA 6100 ",
        "OrgWeb": "http://thehumanitariangroup.org.au/"
      },
      {
        "OrgName": "Youth Focus",
        "OrgField": "Counselling/Advising, Mental Health",
        "OrgSuburb": "Burswood",
        "OrgAge": [12, 25],
        "OrgContact": 862664333,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "54 Goodwood Parade\nBurswood WA 6100 ",
        "OrgWeb": "https://youthfocus.com.au/"
      },
      {
        "OrgName": "SHIFT Youth Crew",
        "OrgField": "Counselling/Advising",
        "OrgSuburb": "Busselton",
        "OrgAge": [12, 24],
        "OrgContact": 897810444,
        "OrgHours": "Weekdays 8:30am-4:30pm",
        "OrgAddress": "City of Busselton\n2 Southern Drive\nBusselton, WA 6280",
        "OrgWeb": "https://www.busselton.wa.gov.au/Community-Services/Youth-Activities-and-Services"
      },
      {
        "OrgName": "Freedom Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Perth CBD",
        "OrgAge": "",
        "OrgContact": 892280354,
        "OrgHours": "Mon-Thurs 5pm-8pm, Fri 4pm-8pm, Sat 12pm-5pm",
        "OrgAddress": "93 Brisbane Street\nPerth \nWA 6000 ",
        "OrgWeb": "http://www.freedom.org.au/"
      },
      {
        "OrgName": "YMCA WA",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Welshpool",
        "OrgAge": [12, 18],
        "OrgContact": 894738400,
        "OrgHours": "Times for Different Locations found on Website",
        "OrgAddress": "201 Star St Welshpool WA 6106",
        "OrgWeb": "https://www.ymcawa.org.au/"
      },
      {
        "OrgName": "Street Connect Anglicare",
        "OrgField": "General Youth Services",
        "OrgSuburb": "East Perth",
        "OrgAge": [15, 25],
        "OrgContact": 418942475,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "\n23 Adelaide Terrace\nEast Perth\nWA",
        "OrgWeb": "https://www.anglicarewa.org.au/youth/advice-advocacy-referral/street-connect/default.aspx"
      },
      {
        "OrgName": "Substance Outreach Information Service",
        "OrgField": "Counselling/Advising, Mental Health, Drugs & Alcohol",
        "OrgSuburb": "Bunbury",
        "OrgAge": [15, 24],
        "OrgContact": 897913213,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "40 Charles St \nBunbury \nWA 6230 ",
        "OrgWeb": "http://www.aswa.org.au/"
      },
      {
        "OrgName": "Chrysalis Women's Refuge",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Geraldton",
        "OrgAge": [12, 25],
        "OrgContact": 899642173,
        "OrgHours": "Weekdays 9am-5pm",
        "OrgAddress": "\n114 Sanford Street\nGeraldton\nWA 6530",
        "OrgWeb": "http://chrysalis.org.au/"
      },
      {
        "OrgName": "Paraburdoo Youth Centre",
        "OrgField": "General Youth Services",
        "OrgSuburb": "Paraburdoo",
        "OrgAge": [12, 18],
        "OrgContact": 891895589,
        "OrgHours": "Tue-Thurs, 3:30pm-6:30pm, Fri 6pm-10pm, Sat-Sun 1pm-5pm",
        "OrgAddress": "De Grey Rd Paraburdoo WA 6754",
        "OrgWeb": null
      },
      {
        "OrgName": "Swan City Youth Service",
        "OrgField": "Counselling/Advising, Emergency Relief",
        "OrgSuburb": "Midland",
        "OrgAge": [12, 25],
        "OrgContact": 892743488,
        "OrgHours": "Mon 9am-4pm, Tues-Fri 10am-7pm",
        "OrgAddress": "\n78 Morrison Road\nMidland\nWA 6054 ",
        "OrgWeb": "/http://www.scys.com.au/"
      },
      {
        "OrgName": "Youth Futures-Emergency Relief Program",
        "OrgField": "Emergency Relief",
        "OrgSuburb": "Joondalup",
        "OrgAge": [15, 24],
        "OrgContact": 893002677,
        "OrgHours": "Weekdays 9am-4:30pm",
        "OrgAddress": "\n70 Davidson Terrace \nJoondalup\nWA 6027 ",
        "OrgWeb": "www.youthfutureswa.org.au/"
      },
      {
        "OrgName": "Aboriginal Family Respite Service",
        "OrgField": "Mental Health",
        "OrgSuburb": "Balga",
        "OrgAge": [12, 25],
        "OrgContact": 892066209,
        "OrgHours": "Tuesday 9:30am-2:30am",
        "OrgAddress": "\nAboriginal Evanglical Church Penrith Place\nBalga\nWA 6061",
        "OrgWeb": "www.unitingcarewest.org.au/services/indigenous-communities/aboriginal-family-respite-service/"
      }
    ];
        
    var $tablehead = $('<thead></thead>');
    var $attribute = $('<tr></tr>');
    $attribute.append($('<th></th>').text("Name"));
    $attribute.append($('<th></th>').text("Category"));
    $attribute.append($('<th></th>').text("Suburb"));
    $attribute.append($('<th></th>').text("Ages"));
    $attribute.append($('<th></th>').text("Contact"));
    $attribute.append($('<th></th>').text("Hours"));
    $attribute.append($('<th></th>').text("Address"));
    $attribute.append($('<th></th>').text("Website"));
    $tablehead.append($attribute);
   
    var $tablebody = $('<tbody></tbody>');
    for(var i = 0; i < orgsArray.length; i++) {
        var oneOrg = orgsArray[i];
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(oneOrg.OrgName));
        $row.append($('<td></td>').text(oneOrg.OrgField));
        $row.append($('<td></td>').text(oneOrg.OrgSuburb));
        $row.append($('<td></td>').text(oneOrg.OrgAge));
        $row.append($('<td></td>').text(oneOrg.OrgContact));
        $row.append($('<td></td>').text(oneOrg.OrgHours));
        $row.append($('<td></td>').text(oneOrg.OrgAddress));
        $row.append($('<td></td>').text(oneOrg.OrgWeb));
        $tablebody.append($row);
    }
    $('#nofilter').append($tablehead);
    var $finalTable = $('#nofilter').append($tablebody);

});
    