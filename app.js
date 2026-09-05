const state = { phase: 0, scores: {solidarity: 5, environment: 5, power: 5}, choices: [] };
const phases = [
    {
        year: "Year 0",
        title: "The Announcement",
        text: `The town hall is packed. CCACore Industries wants to build a 500,000 sq. ft. data center on the abandoned field in the middle of town. They promised 150 jobs, $2 million in annual tax revenue, and "carbon-neutral" operations. The Mayor of Crystal Valley is already supporting this major project. However, your neighbor, Maria, who has lived here for 40 years, looks very concerned.`,
        choices: [
            { 
                text: "This is progress. We need those jobs and tax revenue.", 
                effects: { solidarity: -1, power: -1, environment: 0 }
            },
            { 
                text: "I want to see the environmental impact report and community benefit agreement before anything moves forward.", 
                effects: { solidarity: 1, power: 1, environment: 1 }
            },
            { 
                text: "We need to organize as a community. Maria is right to be worried. This data center affects all of us.", 
                effects: { solidarity: 2, power: 1, environment: 0 }
            }
        ]
    },
    {
        year: "Year 1",
        title: "Groundbreaking",
        text: `The empty field is gone. The foundations of an enormous data center is taking shape. Concrete trucks rumble past your home at all hours of the day and night, shaking the foundations. The water table is dropping because construction has diverted the river that feeds into the the neighborhood water system. CCACore says it is "temporary" and "within permitted variance." But the "150 jobs" turn out to be 12 security guards and a facilities manager which were all hired from outside the community. Maria's rose garden has withered and died. She also has not slept through the night in weeks.`,
        choices: [
            { 
                text: "Document everything: water levels, truck schedules, decibel readings. Start a shared spreadsheet with neighbors.", 
                effects: { solidarity: 1, power: 2, environment: 1 }
            },
            { 
                text: "Attend the company-sponsored 'Community Appreciation BBQ.' The burgers are good, and the CEO's assistant remembers your name.", 
                effects: { solidarity: -1, power: -1, environment: -1 }
            },
            { 
                text: "Call a realtor. Your equity has never been higher, and you can smell what's coming.", 
                effects: { solidarity: -2, power: -1, environment: 0 }
            }
        ]
    },
    {
        year: "Year 2",
        title: "The Hum",
        text: `CCACore CEO, Mayor, and a few neighbors come to celebrate the official opening of the data center. It is now live! Its cooling systems run around the clock. A high-frequency hum is audible and persistent. It vibrates through your walls at night. Three families on your block have developed chronic headaches. The local river runs warm now. CCACore uses 2.3 million gallons daily for cooling. Whne you complain, the company sends a "community liaison" who gives you a branded water bottle, a $50 grocery card, and a pamphlet about "adapting to the sounds of progress."`,
        choices: [
            { 
                text: "Start a health survey with neighbors, contact the EPA, and request a cumulative impact assessment.", 
                effects: { solidarity: 2, power: 2, environment: 1 }
            },
            { 
                text: "Install triple-pane windows, buy an air purifier, and a white noise machine. Protect your household.", 
                effects: { solidarity: -1, power: 0, environment: 1 }
            },
            { 
                text: `Accept the company's "Good Neighbor Grant" of $5000 for your block association with no strings attached.`, 
                effects: { solidarity: -1, power: -1, environment: -1 }
            }
        ]
    },
    {
        year: "Year 3",
        title: "The Incident",
        text: `August. 104 degrees. It's a scorching hot humid day in Crystal Valley. The data center's backup diesel generators kick on during a grid emergency, venting thick black smoke over the neighborhood for almost 6 hours. Then disaster strikes. A coolant leak was detected. CCACore says that it's "non-toxic" and "contained to the facility perimeter," but your neighbor's dog will not drink from the garden hose anymore. The county health department takes CCACore's word and does not test the results. Maria's grandson starts coughing uncontrollably.`,
        choices: [
            { 
                text: "Livestream the generator smoke, organize a blockade of the access road, and contact environmental justice lawyers.", 
                effects: { solidarity: 2, power: 2, environment: 1 }
            },
            { 
                text: "Sign the company's NDA and accept $15,000 in 'property value protection.' You can't afford to fight.", 
                effects: { solidarity: -2, power: -2, environment: -1 }
            },
            { 
                text: "Pack essentials and stay with your sister in the next county until the air clears.", 
                effects: { solidarity: -1, power: 0, environment: 1 }
            }
        ]
    },
    {
        year: "Year 4",
        title: "The Reckoning",
        text: `The incident made local then national news. CCACore's stock dipped 2% for three days. They respond with a "Community Sustainability Initiative." The program installs solar panels on the data center roof (which power nothing in the neighborhood) and establishes a scholarship fund for "STEM-focused youth." Meanwhile, property taxes have doubled displacing longtime friends and neighbors from their homes. Maria received an eviction notice. Her landlord sold to a private equity firm. They are planning to redevelop the units into "Tech Corridor Luxury Lofts." The Mayor of Crystal Valley was present to cut the ribbon.`,
        choices: [
            { 
                text: "Join the neighborhood coalition filing an environmental justice lawsuit under Title VI of the Civil Rights Act.", 
                effects: { solidarity: 2, power: 2, environment: 1 }
            },
            { 
                text: "Apply for the CCACore scholarship for your kid. It's a full ride to a state school. You stay quiet.", 
                effects: { solidarity: -1, power: -1, environment: 0 }
            },
            { 
                text: "Run for city council on an anti-corporate platform. The election is in six months.", 
                effects: { solidarity: 1, power: 3, environment: 0 }
            }
        ]
    },
    {
        year: "Year 5",
        title: "The Crossroads",
        text: `The massive facility now operates at a higher server load. Its demand for electricity and cooling water rises dramatically, while households face higher bills, lost sleep, and steep housing costs all at once. The Mayor calls it "a vote of confidence in our community." Maria has left, moved to a rental 40 miles away and commuting two hours to get to her job at the hospital. The remaining neighbors are exhausted, divided, and running out of patience. The next five years will test whether the community can turn its demands into lasting changes.`,
        choices: [
            { 
                text: "Organize a citywide campaign for enforceable operating limits and support for displaced residents.", 
                effects: { solidarity: 2, power: 2, environment: 1 }
            },
            { 
                text: "Negotiate a 'community benefits agreement.' Some concessions are better than none, and you're tired.", 
                effects: { solidarity: 1, power: 1, environment: 0 }
            },
            { 
                text: "Sell your house to CCA's real estate subsidiary at 180% market value. You need the money.", 
                effects: { solidarity: -3, power: -1, environment: -1 }
            }
        ]
    },
{
    "year": "Year 6",
    "title": "The Water Budget",
    "text": "A second dry summer brings watering restrictions. At a public hearing, families are asked to conserve while the data center retains its contracted water allocation. The utility says the existing contract leaves little room to change industrial allocations. A school custodian and a local farmer join the neighborhood meeting. This is no longer just one neighborhood's problem.",
    "choices": [
        {
            "text": "Build a townwide coalition to demand public water accounting and enforceable limits for large users.",
            "effects": {
                "solidarity": 2,
                "environment": 1,
                "power": 2
            }
        },
        {
            "text": "Support a company-funded recycled-water project, even though the proposed agreement has no independent reporting.",
            "effects": {
                "solidarity": 0,
                "environment": 1,
                "power": 1
            }
        },
        {
            "text": "Buy a storage tank for your household. You need reliable water now.",
            "effects": {
                "solidarity": -1,
                "environment": 1,
                "power": -1
            }
        }
    ]
},
{
    "year": "Year 7",
    "title": "Who Pays for the Grid?",
    "text": "Electric bills arrive alongside a proposal for a new substation for the data center. CCACore says extra capacity will benefit everyone. However, residents want to know who pays, and who gets priority during an outage. The Mayor hosts a hearing at a time when many shift workers are unable to attend. The nearby health clinic requests for backup power, too.",
    "choices": [
        {
            "text": "Help workers attend and demand a public cost-sharing plan with protection for essential services.",
            "effects": {
                "solidarity": 2,
                "environment": 1,
                "power": 2
            }
        },
        {
            "text": "Accept faster construction in exchange for company-funded backup power at the clinic.",
            "effects": {
                "solidarity": 0,
                "environment": 1,
                "power": 0
            }
        },
        {
            "text": "Install a home battery on credit and leave the utility negotiations to others.",
            "effects": {
                "solidarity": -1,
                "environment": 1,
                "power": -1
            }
        }
    ]
},
{
    "year": "Year 8",
    "title": "What Is in the Water?",
    "text": "Eight years of complaints finally lead to independent water testing. Investigators from the county identify repeated warm-water discharges and a contaminated drainage channel linked to the data center. Earlier concerns about household wells and drinking water remain unresolved. Water findings cannot establish what is in every water well. Families who can afford bottled water have been buying it for years. A few request more testing, and answers they can trust before a plan for cleanup is considered.",
    "choices": [
        {
            "text": "Demand an independently verified cleanup, household well testing, and publicly accessible results.",
            "effects": {
                "solidarity": 2,
                "environment": 1,
                "power": 2
            }
        },
        {
            "text": "Accept company-funded filtration while negotiating independent monitoring and a cleanup timetable.",
            "effects": {
                "solidarity": 1,
                "environment": 1,
                "power": 0
            }
        },
        {
            "text": "Stop attending meetings. After years of conflict, your household needs a break.",
            "effects": {
                "solidarity": -1,
                "environment": 0,
                "power": -1
            }
        }
    ]
},
{
    "year": "Year 9",
    "title": "A Town That Can Stay",
    "text": "The data center has not expanded, but the community around it has changed dramatically. Housing is now the issue that tops every agenda at the town hall meeting. Former residents want a way to return home. New arrivals worry about rising rents and property taxes. A developer offers a small affordable-housing fund in exchange for approval of another luxury block. The neighborhood must decide whose future its campaign represents.",
    "choices": [
        {
            "text": "Unite renters, homeowners, and displaced residents around housing protections and a community land fund.",
            "effects": {
                "solidarity": 2,
                "environment": 1,
                "power": 2
            }
        },
        {
            "text": "Negotiate more affordable units in the development, accepting that some displaced families will still be left out.",
            "effects": {
                "solidarity": 1,
                "environment": 0,
                "power": 1
            }
        },
        {
            "text": "Support the luxury development to protect property values and attract more investment.",
            "effects": {
                "solidarity": -2,
                "environment": -1,
                "power": -1
            }
        }
    ]
},
{
    "year": "Year 10",
    "title": "The Ten-Year Vote",
    "text": "A decade after the announcement of CCACore's construction of their data center, residents of the small quiet neighborhood of Crystal Valley faced higher electricity costs, pressure on water supplies, noise and water pollution, and the displacement of friends and neighbors. The neighborhood votes on the rules for the next decade. Residents bring years of evidence, but CCACore remains a powerful industrial customer, a dutiful taxpayer, and a major source of revenue for the neighborhood. This vote cannot undo very loss. It can decide who has a voice in what happens next.",
    "choices": [
        {
            "text": "Demand binding community oversight, independent monitoring, and a fund for residents who were displaced.",
            "effects": {
                "solidarity": 2,
                "environment": 1,
                "power": 2
            }
        },
        {
            "text": "Accept a negotiated package of cooling upgrades and annual grants with a limited resident advisory board.",
            "effects": {
                "solidarity": 1,
                "environment": 1,
                "power": 0
            }
        },
        {
            "text": "Back the company’s voluntary pledge and prioritize continued investment over new restrictions.",
            "effects": {
                "solidarity": -2,
                "environment": -1,
                "power": -2
            }
        }
    ]
}
];

function showEnding() {
    const { solidarity, environment, power } = state.scores;
    
    let ending;
    
    if (solidarity >= 7 && power >= 6) {
        ending = {
            title: "The Organized Community",
            headline: "\"Residents Win Landmark Community Benefits Agreement; CCACore Faces Binding Operating Limits\"",
            description: `Through social mobilization and sustained organizing, your neighborhood achieved what many sacrifice zones could not: institutional accountability. The community benefits agreement includes air quality monitoring, a community board with oversight of operating conditions, and a $10 million restorative justice fund for displaced families. Maria got her house back. This is what sociologists call <strong>social mobilization</strong>. It brings people, networks, and resources together to take collective action toward shared goals. But the fight took ten years, and not everyone who started the journey finished it.`
        };
    } else if (solidarity <= 3 && environment <= 4 && power <= 4) {
        ending = {
            title: "The Sacrifice Zone",
            headline: "\"CCACore Secures Long-Term Operating Deal; Former Neighborhood Left Behind\"",
            description: `Your neighborhood became what environmental justice scholars call a <strong>sacrifice zone</strong>. In these places, the burdens of industrial development are concentrated among those with the least political power to resist. Displaced families remain scattered, and former neighbors struggle to keep in touch. The creek is dead. The "150 jobs" never materialized; the work went to automated systems and outsourced contractors. This is not a failure of individual choice. It is a structural outcome of corporate power, weak regulatory frameworks, and fragmented community response.`
        };
    } else if (solidarity <= 4 && environment >= 6 && power <= 4) {
        ending = {
            title: "The Gentrified Enclave",
            headline: "\"Tech Corridor Luxury Lofts Open on Former Farmland; Original Residents Long Gone\"",
            description: `You survived. Your air purifiers worked. Your house, with its triple-pane windows, sits in a pocket of relative environmental quality. But you paid for it with isolation. The neighborhood you knew is gone. Luxury lofts for data center engineers and "cloud consultants" have replaced it. Maria couldn't afford the taxes. You didn't organize, but you didn't collaborate either. You opted out. Sociologists call this <strong>privatized survival</strong>. It is an individual solution to a collective problem that ultimately accelerates displacement. The data center didn't destroy your community. The market did, and you were complicit.`
        };
    } else {
        ending = {
            title: "The Managed Decline",
            headline: "\"CCACore Unveils 'Green Campus Initiative' Amid Ongoing Community Tensions\"",
            description: `You won some battles and lost others. The company offered solar panels on the roof and a modest scholarship fund. These concessions were just enough to neutralize the most vocal opposition without changing the fundamental power dynamic. This is what social movement scholars call <strong>co-optation</strong>: the absorption of dissent into institutional frameworks that preserve the status quo. The data center still operates with high resource demands, despite modest improvements. The creek is still warm, just not dead. Maria still left, just not as quickly. You are still fighting, but the fight has become your identity rather than your victory. A decade of negotiation has left the community exhausted.`
        };
    }
    
    document.getElementById('ending-title').textContent = ending.title;
    document.getElementById('ending-headline').textContent = ending.headline;
    document.getElementById('ending-description').innerHTML = ending.description;
    
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.innerHTML = `
        <div class="score-item">
            <div class="score-label">Community Solidarity</div>
            <div class="score-value ${solidarity >= 7 ? 'score-high' : solidarity >= 4 ? 'score-med' : 'score-low'}">${solidarity}/10</div>
        </div>
        <div class="score-item">
            <div class="score-label">Environmental Health</div>
            <div class="score-value ${environment >= 7 ? 'score-high' : environment >= 4 ? 'score-med' : 'score-low'}">${environment}/10</div>
        </div>
        <div class="score-item">
            <div class="score-label">Institutional Power</div>
            <div class="score-value ${power >= 7 ? 'score-high' : power >= 4 ? 'score-med' : 'score-low'}">${power}/10</div>
        </div>
    `;
    
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('ending-screen').classList.add('active');
}


// A low-resolution, hand-drawn world. Every mark snaps to the pixel grid.
const canvas = document.getElementById('town'), ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let motionPaused = reducedMotion;
let sceneTime = 0, lastFrame = 0, yearStarted = 0, playing = false;
const rect = (x,y,w,h,c) => {ctx.fillStyle=c;ctx.fillRect(Math.floor(x),Math.floor(y),Math.ceil(w),Math.ceil(h));};
function poly(points,c){ctx.fillStyle=c;ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fill();}
function label(text,x,y,c='#f5f0d9',size=7){ctx.fillStyle=c;ctx.font=`bold ${size}px monospace`;ctx.fillText(text,Math.floor(x),Math.floor(y));}
function cloud(x,y){[[0,10,55,12],[10,3,31,22],[20,0,12,8],[45,9,24,15],[63,17,15,7]].forEach(a=>rect(x+a[0],y+a[1],a[2],a[3],'#eee8d5'));rect(x+10,y+22,52,4,'#dbdbc8');}
function tree(x,y,seed=0){const dry=state.phase>=3&&seed%3===0;rect(x-2,y-6,4,16,'#6d6545');for(let k=0;k<4;k++){rect(x-6-k*3,y-30+k*7,12+k*6,8,dry?'#89905b':['#49704e','#547e54','#60895b','#4b7351'][k]);}rect(x-4,y-24,4,6,dry?'#b0a369':'#8fa875');}
function house(x,y,w=35,h=36,color='#d4c5a2',abandoned=false){rect(x+3,y+3,w,h,'#657b65');rect(x,y,w,h,color);rect(x+w-8,y,8,h,'#b2ad91');for(let k=0;k<4;k++)rect(x-4+k*4,y-3-k*3,w+8-k*8,4,k%2?'#b56f3d':'#cd8248');for(let i=6;i<w-8;i+=12){rect(x+i,y+10,5,8,abandoned?'#6a7463':'#657f7a');rect(x+i,y+11,2,3,abandoned?'#6a7463':'#b4cbc0');}rect(x+w/2-3,y+h-14,7,14,'#7c785e');if(abandoned){rect(x+3,y+21,23,7,'#e6d9b7');label('FOR SALE',x+4,y+26,'#9c6248',4);}}
// Pick homes once per run so boards and damage persist instead of flickering.
const visibleHomeIds = ['back-0','back-2','back-3','back-9','back-10','back-11','front-0','front-1','front-2','front-5','front-6','front-7'];
let vacatedHomes = [];
function chooseVacatedHomes(){
 vacatedHomes=[...visibleHomeIds];
 for(let i=vacatedHomes.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[vacatedHomes[i],vacatedHomes[j]]=[vacatedHomes[j],vacatedHomes[i]];}
 vacatedHomes=vacatedHomes.slice(0,8);
}
chooseVacatedHomes();
function homeCondition(id){const order=vacatedHomes.indexOf(id),p=state.phase;
 return {closed:order>=0&&order<(p>=5?8:p>=4?4:0),broken:order>=0&&order<(p>=8?4:p>=7?2:0)};
}
function townHome(id,x,y,w,h,color){
 const condition=homeCondition(id);house(x,y,w,h,color,false);
 if(!condition.closed)return;
 for(let wx=6;wx<w-8;wx+=12){rect(x+wx,y+10,5,8,'#454e43');rect(x+wx-1,y+11,8,2,'#9c8460');rect(x+wx-1,y+15,8,2,'#b69b70');}
 rect(x+w/2-3,y+h-14,7,14,'#535748');rect(x+w/2-5,y+h-10,11,3,'#9e835e');
 if(condition.broken){
  rect(x+7,y-6,10,5,'#655f4d');rect(x+11,y-9,6,4,'#7a7056');
  for(let k=0;k<4;k++)rect(x+w-12+(k%2)*2,y+8+k*4,2,5,'#6d705d');
  for(let k=0;k<5;k++)rect(x+2+k*7,y+h-3-(k%3),3,5,'#708257');
  rect(x+6,y+12,5,5,'#354740');rect(x+4,y+h-4,7,3,'#a39370');
 }
 rect(x+w-23,y+h-11,27,8,'#f1e2bc');label('FOR SALE',x+w-22,y+h-5,'#9c6248',5);
}
function angryPerson(x,y,i,intensity=1){
 const bob=Math.floor(Math.sin(sceneTime*3+i)*1.5);
 person(x,y,['#a45840','#728878','#506e87','#b18b4e'][i%4],false,true);
 rect(x+7,y-11+bob,13,10,'#f3dfbb');label(intensity>1?'!!':'!',x+10,y-3+bob,'#b63e2e',8);
 // A raised fist and angular anger mark.
 rect(x+7,y+3+bob,3,5,'#d3a87b');rect(x+7,y+1+bob,4,3,'#d3a87b');
 if(intensity>1){rect(x-5,y-5+bob,3,1,'#b63e2e');rect(x-4,y-7+bob,1,4,'#b63e2e');}
}
function crowdCounts(p){return {hall:p===5?3:p>=6?18:p===3?12:8,center:p===5?3:p>=8?25:p===7?18:p===6?7:p>=3?12:0};}
function drawCrowds(){
 const p=state.phase,counts=crowdCounts(p);
 for(let i=0;i<counts.hall;i++){const x=49+(i%6)*17,y=315+Math.floor(i/6)*15;if(p>=3&&p!==5)angryPerson(x,y,i,p>=8?2:1);else person(x,y,i%2?'#a26348':'#728878',p>=2,true);}
 for(let i=0;i<counts.center;i++)angryPerson(252+(i%10)*20,315+Math.floor(i/10)*15,i,p>=8?2:1);
}
function departureSchedule(p){return p===4?[{type:'car',delay:0},{type:'car',delay:4},{type:'truck',delay:9},{type:'truck',delay:16}]:p===5?[0,5,11,18,25].map(delay=>({type:'truck',delay})):[];}
function drawDepartures(){
 const elapsed=sceneTime-yearStarted;
 departureSchedule(state.phase).forEach(({type,delay},i)=>{
  const age=reducedMotion&&motionPaused?i*2:elapsed-delay;if(age<0)return;
  const x=150+i*38+age*27,y=type==='car'?342:337;if(x>645)return;
  if(type==='car'){
   rect(x,y+5,39,10,i%2?'#9c664c':'#688b91');rect(x+5,y,26,8,'#d0b689');
   for(let j=0;j<3;j++){rect(x+7+j*8,y+1,6,6,'#aac3bd');rect(x+8+j*8,y+2,3,3,'#d6ab7d');rect(x+8+j*8,y+2,3,1,'#66503d');}
   rect(x+7,y-5,10,5,'#a77e51');rect(x+18,y-4,9,4,'#758260');rect(x+6,y-1,24,1,'#4e6253');
  }else{
   rect(x,y,32,18,'#d7cfad');rect(x+32,y+6,12,12,'#839780');rect(x+34,y+7,8,6,'#a4c5c1');
   label('MOVERS',x+3,y+11,'#566c59',6);rect(x+2,y+15,28,2,'#b5986c');
  }
  rect(x+5,y+15,6,5,'#384e45');rect(x+(type==='car'?29:34),y+15,6,5,'#384e45');
 });
}
function waterState(){const p=state.phase,elapsed=sceneTime-yearStarted;
 return {drop:p<6?0:p===6?(reducedMotion&&motionPaused?1:Math.min(1,elapsed/18)):1,brown:p<8?0:p===8?(reducedMotion&&motionPaused?1:Math.min(1,elapsed/22)):1};
}
function mixColor(a,b,t){return '#'+a.map((v,i)=>Math.round(v+(b[i]-v)*t).toString(16).padStart(2,'0')).join('');}
function drawWater(){
 const {drop,brown}=waterState(),top=381+Math.floor(drop*24);
 rect(0,381,640,59,'#aaa07c');
 for(let i=0;i<40;i++)rect((i*79)%640,384+(i*7)%22,8,2,'#8d876b');
 rect(0,top,640,440-top,mixColor([66,110,124],[117,79,47],brown));
 for(let i=0;i<95;i++){let x=((i*71+sceneTime*(i%2?3:-2))%670+670)%670,y=top+3+(i*17)%Math.max(1,437-top);rect(x,y,8+i%21,2,mixColor(i%3?[82,127,135]:[106,148,148],i%3?[143,99,58]:[166,124,77],brown));}
 rect(0,377,640,4,'#bcc0a0');rect(503,379,71,5,'#9f946e');rect(513,384,4,29,'#6e745b');rect(564,384,4,29,'#6e745b');
}
function person(x,y,color='#ba694c',worried=false,walk=false){let step=walk?Math.floor(sceneTime*4)%2:0;rect(x,y,5,5,'#d3a87b');rect(x,y-1,5,2,'#514b3b');rect(x+1,y+2,1,1,'#354d43');rect(x+4,y+2,1,1,'#354d43');rect(x-1,y+5,7,7,color);rect(x,y+12,2,4+step,'#344b45');rect(x+3,y+12,2,5-step,'#344b45');rect(x-3,y+6,2,5,'#d3a87b');if(worried){rect(x+7,y-6,10,7,'#f3e8cf');label('!',x+10,y,'#ab623c',6);}}
function crane(x,y){rect(x,y-76,4,77,'#c5a35b');rect(x-30,y-76,91,4,'#ddb969');for(let k=0;k<7;k++){rect(x-27+k*12,y-83,2,8,'#b19050');}rect(x-28,y-84,84,2,'#ddbc70');rect(x-7,y-76,16,10,'#576e65');const hook=x+43+Math.sin(sceneTime*.7)*8;rect(hook,y-72,1,32+Math.sin(sceneTime)*4,'#535f50');rect(hook-3,y-40+Math.sin(sceneTime)*4,7,3,'#535f50');}
// One fixed footprint: construction in Year 1, continuous operation from Year 2.
function facility(){
 const p=state.phase,x=249,y=233,w=208;
 rect(x-8,y+75,w+16,13,'#87917a');
 if(p===1){
  rect(x,y,w,78,'#aaa58a');
  for(let k=0;k<9;k++){rect(x+k*25,y-12,4,89,'#6b8175');rect(x+k*25,y+22,23,4,'#c6c2a1');}
  rect(x,y-12,w,5,'#799084');crane(x+130,y);crane(x+40,y+18);
  for(let k=0;k<19;k++)rect(x-5+k*12,y+80,8,4,k%2?'#e6bc65':'#665b43');
  person(x+20,y+65,'#d4a14f',false,true);return;
 }
 rect(x,y,w,78,'#88998c');rect(x+6,y+7,w-21,66,'#a8b3a0');rect(x+w-15,y,15,78,'#70897b');
 rect(x-5,y-8,w+10,9,'#cbd1b8');
 for(let k=0;k<20;k++){rect(x+10+k*9,y+30,5,31,'#3d5752');rect(x+11+k*9,y+34,2,3,(Math.floor(sceneTime*2)+k)%3?'#abc88d':'#e0c787');}
 label('CCACORE / CRYSTAL VALLEY',x+22,y+19,'#344f48',9);
 for(let k=0;k<6;k++){
  let fx=x+15+k*33,fy=y-23;rect(fx-8,fy-7,20,17,'#607b71');rect(fx-5,fy-4,14,11,'#adc0ad');
  if(Math.floor(sceneTime*(4+p*.4))%2){rect(fx,fy-3,3,9,'#536d65');rect(fx-4,fy,11,3,'#536d65');}
  else for(let j=-4;j<5;j++)rect(fx+j,fy+j,2,2,'#536d65');
 }
 if(p===3){
  for(let j=23;j>=0;j--){const rise=(sceneTime*17+j*9)%205,spread=14+rise*.43,cx=x+w-16+rise*.18+Math.sin(sceneTime+j)*7,cy=y-17-rise;
   rect(cx-spread/2,cy,spread,16+rise*.09,['#62695f','#70766a','#7e8373'][j%3]);
   rect(cx-spread*.35,cy-7,spread*.7,12,'#777c6e');
  }
 }
 if(p>=4){rect(x+50,y-9,89,5,'#416b79');for(let k=0;k<10;k++)rect(x+53+k*9,y-9,1,5,'#82a7a7');}
}
const impacts = [
 {name:'Electricity',start:2,late:7,early:'Demand rising',later:'Higher household bills'},
 {name:'Water allocation',start:2,late:6,early:'Cooling draws water',later:'Household restrictions'},
 {name:'Water quality',start:3,late:8,early:'Leak concerns unresolved',later:'Creek pollution identified'},
 {name:'Housing',start:4,late:9,early:'Rents and taxes rise',later:'Fewer affordable homes'},
 {name:'Displacement',start:5,late:9,early:'Neighbors moving away',later:'Families remain displaced'}
];
function updateImpacts(year){
 const panel=document.getElementById('impact-tracker');panel.replaceChildren();
 for(const impact of impacts){const row=document.createElement('div');row.className='impact-row'+(year>=impact.start?' affected':'');const name=document.createElement('strong');name.textContent=impact.name;const value=document.createElement('span');value.textContent=year<impact.start?'Not yet observed':year<impact.late?impact.early:impact.later;row.append(name,value);panel.append(row);}
}
function drawTown(){const t=sceneTime,p=state.phase;rect(0,0,640,440,p===3?'#91bec9':p>=3?'#92aaa9':'#81aab9');
 if(p===3){const glow=Math.floor(Math.sin(t*1.5)*3);rect(112-glow,22-glow,54+glow*2,54+glow*2,'#eed691');rect(119,17,40,64,'#f4d97c');rect(107,29,64,40,'#f4d97c');rect(118,28,42,42,'#fff0a3');for(let i=0;i<8;i++){const a=i*Math.PI/4;rect(138+Math.cos(a)*(42+glow),48+Math.sin(a)*(42+glow),5,5,'#f5dc8a');}}
 else for(let i=0;i<7;i++)cloud(((i*113+t*1.8)%790)-90,16+(i%3)*28);
poly([[0,157],[0,100],[42,91],[85,118],[122,69],[168,106],[211,100],[253,158],[315,180],[385,117],[421,106],[460,66],[510,81],[555,128],[603,110],[640,131],[640,283],[0,283]],'#91a783');
poly([[0,188],[0,144],[63,103],[103,150],[137,132],[168,170],[211,137],[288,219],[376,183],[419,138],[458,109],[477,168],[542,150],[599,188],[640,155],[640,292],[0,292]],'#6f926d');
for(let i=0;i<85;i++){let x=(i*97)%640,y=150+(i*43)%120;rect(x,y,12+(i%4)*6,4,i%3?'#83a276':'#a9bb88');}
poly([[473,93],[504,89],[532,121],[545,162],[581,171],[602,150],[640,171],[640,285],[476,265]],'#a7aa92');for(let i=0;i<28;i++)rect(482+(i*19)%154,130+(i*31)%139,5+(i%3)*6,28,'#919782');
rect(0,266,640,111,'#9daa7d');rect(0,329,640,17,'#c7b995');rect(212,250,19,127,'#c7b995');rect(458,253,16,124,'#c7b995');rect(0,373,640,8,'#718774');
for(let i=0;i<12;i++)townHome('back-'+i,8+i*55,264-(i%3)*12,33+(i%2)*8,39,'#c9c3a7');
// Town hall and clock tower anchor the same neighborhood in every year.
house(69,278,62,46,'#e1d3ac');rect(87,203,22,75,'#d3c9a9');rect(91,191,14,13,'#68715e');rect(96,173,4,19,'#555f4b');rect(85,219,26,3,'#a7a88c');rect(91,226,14,14,'#f1e4bd');rect(97,229,2,6,'#536455');rect(98,234,4,2,'#536455');label('TOWN HALL',75,292,'#5c6451',6);
if(p===0){rect(259,278,175,43,'#8e9e65');for(let i=0;i<8;i++)rect(265+i*21,283,3,32,'#bcca8c');tree(316,275,2);tree(383,272,5);rect(310,307,70,12,'#ece0b7');label('PROPOSED SITE',315,315,'#646f4c',6);}else{facility();}
for(let i=0;i<8;i++){if(i===3||i===4)continue;townHome('front-'+i,14+i*78,351,46,24,'#d5c8a7');}
for(let i=0;i<17;i++){let x=(i*53+12)%640;if(x>245&&x<465)continue;tree(x,313+(i%3)*23,i);}
// Town meetings, walkers, and a mayor at the lectern.
rect(135,313,12,11,'#8f7450');label('MAYOR',127,334,'#5c6650',5);person(138,303,'#445e70');drawCrowds();
person(184+Math.sin(t*.25)*14,345,'#b37d53',p>=2,true);person(485+Math.sin(t*.3)*20,327,'#687fa0',p>=2,true);
if(p===1){let truckX=240+(t*15)%180;rect(truckX,338,23,9,'#bb884c');rect(truckX+23,336,10,11,'#d9b266');rect(truckX+26,338,6,4,'#759496');rect(truckX+4,347,5,5,'#485c51');rect(truckX+25,347,5,5,'#485c51');}
drawWater();
if(p>=6){rect(465,372,5,16,'#8d8063');rect(449,361,39,12,'#e5d4ab');label('SAVE WATER',452,369,'#7f6a45',5);}
 if(p>=7){for(let x of [192,482,586]){rect(x,281,3,46,'#7f7658');rect(x-8,286,19,3,'#7f7658');}rect(194,288,392,1,'#586b58');rect(175,343,36,12,'#ece0bd');label('BILLS UP',178,351,'#9c6248',5);}
 drawDepartures();
 if(p===1&&!motionPaused&&t-yearStarted<2){rect(240,126,181,22,'#f0e5c6');label('YEAR 1 / CONSTRUCTION BEGINS',250,140,'#526553',8);}}
function frame(now){if(!motionPaused)sceneTime+=Math.min((now-lastFrame)/1000,.05);lastFrame=now;drawTown();requestAnimationFrame(frame);}requestAnimationFrame(frame);

// The supplied recording loops through Web Audio; user gestures unlock playback.
let audioContext, audioSource, audioGain, audioBuffer, audioLoading, audioLimiter;
let soundEnabled=true, targetGain=0, ended=false;
const soundButton=document.getElementById('sound-btn');
async function prepareAudio(){if(!audioContext){audioContext=new (window.AudioContext||window.webkitAudioContext)();audioGain=audioContext.createGain();audioGain.gain.value=0;audioLimiter=audioContext.createDynamicsCompressor();
    audioLimiter.threshold.value=-3; audioLimiter.knee.value=3;
    audioLimiter.ratio.value=20; audioLimiter.attack.value=.003; audioLimiter.release.value=.15;
    audioGain.connect(audioLimiter); audioLimiter.connect(audioContext.destination);}await audioContext.resume();if(!audioLoading)audioLoading=fetch('hum.mp3').then(r=>{if(!r.ok)throw Error('Audio unavailable');return r.arrayBuffer();}).then(b=>audioContext.decodeAudioData(b)).then(b=>{// Normalize the quiet source once; keep the original MP3 unchanged.
    let peak=0;
    for(let ch=0;ch<b.numberOfChannels;ch++)for(const sample of b.getChannelData(ch))peak=Math.max(peak,Math.abs(sample));
    const normalization=peak>0?.9/peak:1;
    for(let ch=0;ch<b.numberOfChannels;ch++){const samples=b.getChannelData(ch);for(let i=0;i<samples.length;i++)samples[i]*=normalization;}
    audioBuffer=b;}).catch(e=>{audioLoading=null;throw e;});await audioLoading;}
function updateAudio(){const level=Number(document.getElementById('volume').value)/100;targetGain=soundEnabled&&playing&&!ended&&state.phase>=2&&!document.hidden?level*(.65+.85*(state.phase-2)/(phases.length-3)):0;if(audioGain){audioGain.gain.cancelScheduledValues(audioContext.currentTime);audioGain.gain.setTargetAtTime(targetGain,audioContext.currentTime,.45);if(targetGain>0&&!audioSource&&audioBuffer){audioSource=audioContext.createBufferSource();audioSource.buffer=audioBuffer;audioSource.loop=true;audioSource.connect(audioGain);audioSource.start();}}
soundButton.textContent=soundEnabled?'SOUND ON':'SOUND OFF';soundButton.setAttribute('aria-pressed',String(soundEnabled));document.getElementById('sound-status').textContent=ended?'Simulation finished · audio faded out':state.phase<2?'Hum begins when cooling starts in Year 2':soundEnabled?'Cooling hum · intensity '+(state.phase-1)+'/'+(phases.length-2):'Cooling is running · sound muted';}
soundButton.onclick=async()=>{soundEnabled=!soundEnabled;updateAudio();if(soundEnabled){try{await prepareAudio();updateAudio();}catch{soundEnabled=false;updateAudio();document.getElementById('sound-status').textContent='Could not load hum.mp3. Tap Sound to retry.';}}};
document.getElementById('volume').oninput=updateAudio;document.addEventListener('visibilitychange',updateAudio);
function updateMotion(){document.body.classList.toggle('motion-paused',motionPaused);document.getElementById('motion-btn').textContent=motionPaused?'Resume motion':'Pause motion';document.getElementById('motion-btn').setAttribute('aria-pressed',String(motionPaused));}document.getElementById('motion-btn').onclick=()=>{motionPaused=!motionPaused;updateMotion();};updateMotion();
function portrait(){const c=document.getElementById('portrait').getContext('2d');c.fillStyle='#dbe1c8';c.fillRect(0,0,32,32);c.fillStyle='#6d7969';c.fillRect(7,4,18,20);c.fillStyle='#d4af89';c.fillRect(9,9,14,15);c.fillStyle='#ccd0b7';c.fillRect(7,5,18,6);c.fillRect(6,9,4,13);c.fillStyle='#3d554b';c.fillRect(12,14,2,2);c.fillRect(19,14,2,2);c.fillRect(14,20,5,1);if(state.phase>=2){c.fillRect(13,21,1,1);c.fillRect(19,21,1,1);}c.fillStyle='#a46b50';c.fillRect(6,26,21,6);}
function showPhase(index){state.phase=index;yearStarted=sceneTime;const phase=phases[index];document.getElementById('phase-number').textContent=phase.title;document.getElementById('phase-year').textContent=`${phase.year} / Decision ${index+1} of ${phases.length}`;document.getElementById('world-year').textContent=`${phase.year.toUpperCase()} · ${index?'THE TOWN IS CHANGING':'BEFORE THE BUILD'}`;document.querySelectorAll('.dot').forEach((d,i)=>{d.className='dot'+(i===index?' active':i<index?' completed':'');});document.getElementById('narrative-text').textContent=phase.text;document.getElementById('building-count').textContent=index===0?'PROPOSED':index===1?'BUILDING':'OPERATING';document.getElementById('cooling-status').textContent=index>=2?'LOAD '+(index-1)+'/'+(phases.length-2):'OFFLINE';document.getElementById('town-status').textContent=['AT A CROSSROADS','BREAKING GROUND','LOSING SLEEP','UNDER STRAIN','FACING DISPLACEMENT','AT THE MIDPOINT','SHARING SCARCE WATER','FACING HIGHER BILLS','DEMANDING EVIDENCE','FIGHTING TO STAY','DECIDING ITS FUTURE'][index];document.getElementById('scene-caption').textContent=['A small community faces a very big proposal.','One massive facility takes over the central farm.','The cooling starts. The hum settles into daily life.','Generators run as the town gathers to speak.','Housing costs rise. Familiar homes go up for sale.','The same facility. Fewer familiar neighbors.','Households conserve while industrial demand continues.','Electricity bills rise. The town asks who should pay.','Creek testing brings pollution and unequal burdens into view.','The housing debate brings new neighbors into the square.','One facility. Ten years of accumulated community costs.'][index];canvas.setAttribute('aria-label',`Pixel-art Crystal Valley, ${phase.year}. ${index===0?'A farm in the center of town':index===1?'One massive data center under construction':'One massive operating data center'}. ${document.getElementById('scene-caption').textContent}`);document.getElementById('speaker-name').textContent=index>=5?'The neighbors':'Maria';document.getElementById('speaker-role').textContent=index===phases.length-1?'The community faces its final decision':index>=5?'Crystal Valley · a decade of change':'Your neighbor of 40 years in Crystal Valley';portrait();updateImpacts(index);const choices=document.getElementById('choices-container');choices.replaceChildren();phase.choices.forEach((choice,i)=>{const b=document.createElement('button');b.className='choice-btn';const n=document.createElement('b');n.textContent=String(i+1).padStart(2,'0');const text=document.createElement('span');text.textContent=choice.text;b.append(n,text);b.onclick=()=>makeChoice(index,i);choices.append(b);});updateAudio();}
function makeChoice(index,i){if(ended||index!==state.phase)return;const choice=phases[index].choices[i];for(const key in choice.effects)state.scores[key]=Math.max(0,Math.min(10,state.scores[key]+choice.effects[key]));state.choices.push(i);if(index<phases.length-1)showPhase(index+1);else{ended=true;showEnding();updateAudio();}const heading=document.querySelector('.screen.active h2');heading.tabIndex=-1;heading.focus({preventScroll:true});if(innerWidth<901)heading.scrollIntoView({block:'start'});}
function start(){if(soundEnabled)prepareAudio().then(updateAudio).catch(()=>{soundEnabled=false;updateAudio();document.getElementById('sound-status').textContent='Could not start audio. Tap Sound to retry.';});chooseVacatedHomes();ended=false;playing=true;state.scores={solidarity:5,environment:5,power:5};state.choices=[];document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById('game-screen').classList.add('active');showPhase(0);if(audioSource){audioSource.stop();audioSource.disconnect();audioSource=null;}document.getElementById('phase-number').tabIndex=-1;document.getElementById('phase-number').focus({preventScroll:true});}
document.querySelector('.progress-dots').replaceChildren(...phases.map(()=>{const dot=document.createElement('i');dot.className='dot';return dot;}));
document.getElementById('start-btn').onclick=start;document.getElementById('restart-btn').onclick=start;portrait();updateImpacts(0);
