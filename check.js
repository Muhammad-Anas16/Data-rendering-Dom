//           main Data

const data = [
    {
        "name": "World Cup 2018",
        "groups": [
            {
                "name": "Group A",
                "standings": [
                    {
                        "team": {
                            "name": "Uruguay",
                            "code": "URU"
                        },
                        "pos": 1,
                        "played": 3,
                        "won": 3,
                        "drawn": 0,
                        "lost": 0,
                        "goals_for": 5,
                        "goals_against": 0,
                        "pts": 9
                    },
                    {
                        "team": {
                            "name": "Russia",
                            "code": "RUS"
                        },
                        "pos": 2,
                        "played": 3,
                        "won": 2,
                        "drawn": 0,
                        "lost": 1,
                        "goals_for": 8,
                        "goals_against": 4,
                        "pts": 6
                    },
                    {
                        "team": {
                            "name": "Saudi Arabia",
                            "code": "KSA"
                        },
                        "pos": 3,
                        "played": 3,
                        "won": 1,
                        "drawn": 0,
                        "lost": 2,
                        "goals_for": 2,
                        "goals_against": 7,
                        "pts": 3
                    },
                    {
                        "team": {
                            "name": "Egypt",
                            "code": "EGY"
                        },
                        "pos": 4,
                        "played": 3,
                        "won": 0,
                        "drawn": 0,
                        "lost": 3,
                        "goals_for": 2,
                        "goals_against": 6,
                        "pts": 0
                    }
                ]
            },
            {
                "name": "Group B",
                "standings": [
                    {
                        "team": {
                            "name": "Spain",
                            "code": "ESP"
                        },
                        "pos": 1,
                        "played": 3,
                        "won": 1,
                        "drawn": 2,
                        "lost": 0,
                        "goals_for": 6,
                        "goals_against": 5,
                        "pts": 5
                    },
                    {
                        "team": {
                            "name": "Portugal",
                            "code": "POR"
                        },
                        "pos": 2,
                        "played": 3,
                        "won": 1,
                        "drawn": 2,
                        "lost": 0,
                        "goals_for": 5,
                        "goals_against": 4,
                        "pts": 5
                    },
                    {
                        "team": {
                            "name": "Iran",
                            "code": "IRN"
                        },
                        "pos": 3,
                        "played": 3,
                        "won": 1,
                        "drawn": 1,
                        "lost": 1,
                        "goals_for": 2,
                        "goals_against": 2,
                        "pts": 4
                    },
                    {
                        "team": {
                            "name": "Morocco",
                            "code": "MAR"
                        },
                        "pos": 4,
                        "played": 3,
                        "won": 0,
                        "drawn": 1,
                        "lost": 2,
                        "goals_for": 2,
                        "goals_against": 4,
                        "pts": 1
                    }
                ]
            },
            {
                "name": "Group C",
                "standings": [
                    {
                        "team": {
                            "name": "France",
                            "code": "FRA"
                        },
                        "pos": 1,
                        "played": 3,
                        "won": 2,
                        "drawn": 1,
                        "lost": 0,
                        "goals_for": 3,
                        "goals_against": 1,
                        "pts": 7
                    },
                    {
                        "team": {
                            "name": "Denmark",
                            "code": "DEN"
                        },
                        "pos": 2,
                        "played": 3,
                        "won": 1,
                        "drawn": 2,
                        "lost": 0,
                        "goals_for": 2,
                        "goals_against": 1,
                        "pts": 5
                    },
                    {
                        "team": {
                            "name": "Peru",
                            "code": "PER"
                        },
                        "pos": 3,
                        "played": 3,
                        "won": 1,
                        "drawn": 0,
                        "lost": 2,
                        "goals_for": 2,
                        "goals_against": 2,
                        "pts": 3
                    },
                    {
                        "team": {
                            "name": "Australia",
                            "code": "AUS"
                        },
                        "pos": 4,
                        "played": 3,
                        "won": 0,
                        "drawn": 1,
                        "lost": 2,
                        "goals_for": 2,
                        "goals_against": 5,
                        "pts": 1
                    }
                ]
            },
        ]
    }
];

function openModal(groupName) {

    modal.style.display = "flex";

    tbl.innerHTML = ' ';

    let thisData = {};
    
    for (let key in data[0].groups) {

        if (groupName == data[0].groups[key].name) {

            thisData = data[0].groups[key];

            console.log(data[0].groups[key]);
            
        }
    };

    tbl.innerHTML = `<tr>
  <th>Team</th>
  <th>Code</th>
  <th>Played</th>
  <th>Won</th>
  <th>Lost</th>
  </tr>`;

    for (var key in thisData.standings) {

        // console.log(key, thisData.standings[key]);

        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${thisData.standings[key]?.team?.name}</td>
        <td>${thisData.standings[key]?.team?.code}</td>
        <td>${thisData.standings[key]?.played}</td>
        <td>${thisData.standings[key]?.won}</td>
        <td>${thisData.standings[key]?.lost}</td>`;

        tbl.appendChild(tr);
    }
}

function closeModal() {
    modal.style.display = "none";
}


let modal = document.getElementsByClassName("modal")[0];
let modalBody = document.getElementsByClassName("modalBody")[0];
let main = document.getElementsByClassName("main")[0];
let tbl = document.createElement("table");
tbl.setAttribute('border', '1');

//           Loop

for (var i in data[0].groups) {

    let group = document.createElement("div");

    group.setAttribute("class", "groupBox");

    group.setAttribute("onClick", openModal('${data[0].groups[i].name}'));
    group.innerHTML = data[0].groups[i].name;
    main.appendChild(group);
}
