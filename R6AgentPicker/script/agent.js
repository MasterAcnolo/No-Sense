const DefenseOperator = [ // Pas besoin de rajouter un truc au tableau, le tableau est fixe donc un const ca suffit
  { operator: "Skopos", icon: "assets/icons/defense/skopos.svg" },
  { operator: "Sentry", icon: "assets/icons/defense/sentry.svg" },
  { operator: "Turbarão", icon: "assets/icons/defense/tubarao.svg" },
  { operator: "Fenrir", icon: "assets/icons/defense/fenrir.svg" },
  { operator: "Solis", icon: "assets/icons/defense/solis.svg" },
  { operator: "Azami", icon: "assets/icons/defense/azami.svg" },
  { operator: "Thorn", icon: "assets/icons/defense/thorn.svg" },
  { operator: "Thunderbird", icon: "assets/icons/defense/thunderbird.svg" },
  { operator: "Aruni", icon: "assets/icons/defense/aruni.svg" },
  { operator: "Melusi", icon: "assets/icons/defense/melusi.svg" },
  { operator: "Oryx", icon: "assets/icons/defense/oryx.svg" },
  { operator: "Wamai", icon: "assets/icons/defense/wamai.svg" },
  { operator: "Goyo", icon: "assets/icons/defense/goyo.svg" },
  { operator: "Warden", icon: "assets/icons/defense/warden.svg" },
  { operator: "Mozzie", icon: "assets/icons/defense/mozzie.svg" },
  { operator: "Kaid", icon: "assets/icons/defense/kaid.svg" },
  { operator: "Clash", icon: "assets/icons/defense/clash.svg" },
  { operator: "Maestro", icon: "assets/icons/defense/maestro.svg" },
  { operator: "Alibi", icon: "assets/icons/defense/alibi.svg" },
  { operator: "Vigil", icon: "assets/icons/defense/vigil.svg" },
  { operator: "Ela", icon: "assets/icons/defense/ela.svg" },
  { operator: "Lesion", icon: "assets/icons/defense/lesion.svg" },
  { operator: "Mira", icon: "assets/icons/defense/mira.svg" },
  { operator: "Echo", icon: "assets/icons/defense/echo.svg" },
  { operator: "Caveira", icon: "assets/icons/defense/caveira.svg" },
  { operator: "Valkyrie", icon: "assets/icons/defense/valkyrie.svg" },
  { operator: "Frost", icon: "assets/icons/defense/frost.svg" },
  { operator: "Mute", icon: "assets/icons/defense/mute.svg" },
  { operator: "Smoke", icon: "assets/icons/defense/smoke.svg" },
  { operator: "Castle", icon: "assets/icons/defense/castle.svg" },
  { operator: "Pulse", icon: "assets/icons/defense/pulse.svg" },
  { operator: "Doc", icon: "assets/icons/defense/doc.svg" },
  { operator: "Rook", icon: "assets/icons/defense/rook.svg" },
  { operator: "Jäger", icon: "assets/icons/defense/jager.svg" },
  { operator: "Bandit", icon: "assets/icons/defense/bandit.svg" },
  { operator: "Tachanka", icon: "assets/icons/defense/tachanka.svg" },
  { operator: "Kapkan", icon: "assets/icons/defense/kapkan.svg" },
];


const AttackOperator = [
  { operator: "Rauora", icon: "assets/icons/attack/rauora.svg" },
  { operator: "Striker", icon: "assets/icons/attack/striker.svg" },
  { operator: "Deimos", icon: "assets/icons/attack/deimos.svg" },
  { operator: "Ram", icon: "assets/icons/attack/ram.svg" },
  { operator: "Brava", icon: "assets/icons/attack/brava.svg" },
  { operator: "Grim", icon: "assets/icons/attack/grim.svg" },
  { operator: "Sens", icon: "assets/icons/attack/sens.svg" },
  { operator: "Osa", icon: "assets/icons/attack/osa.svg" },
  { operator: "Flores", icon: "assets/icons/attack/flores.svg" },
  { operator: "Zero", icon: "assets/icons/attack/zero.svg" },
  { operator: "Ace", icon: "assets/icons/attack/ace.svg" },
  { operator: "Iana", icon: "assets/icons/attack/iana.svg" },
  { operator: "Kali", icon: "assets/icons/attack/kali.svg" },
  { operator: "Amaru", icon: "assets/icons/attack/amaru.svg" },
  { operator: "NØKK", icon: "assets/icons/attack/nokk.svg" },
  { operator: "Gridlock", icon: "assets/icons/attack/gridlock.svg" },
  { operator: "Nomad", icon: "assets/icons/attack/nomad.svg" },
  { operator: "Maverick", icon: "assets/icons/attack/maverick.svg" },
  { operator: "Lion", icon: "assets/icons/attack/lion.svg" },
  { operator: "Finka", icon: "assets/icons/attack/finka.svg" },
  { operator: "Dokkaebi", icon: "assets/icons/attack/dokkaebi.svg" },
  { operator: "Zofia", icon: "assets/icons/attack/zofia.svg" },
  { operator: "Ying", icon: "assets/icons/attack/ying.svg" },
  { operator: "Jackal", icon: "assets/icons/attack/jackal.svg" },
  { operator: "Hibana", icon: "assets/icons/attack/hibana.svg" },
  { operator: "CAPITÃO", icon: "assets/icons/attack/capitao.svg" },
  { operator: "Blackbeard", icon: "assets/icons/attack/blackbeard.svg" },
  { operator: "Buck", icon: "assets/icons/attack/buck.svg" },
  { operator: "Sledge", icon: "assets/icons/attack/sledge.svg" },
  { operator: "Thatcher", icon: "assets/icons/attack/thatcher.svg" },
  { operator: "Ash", icon: "assets/icons/attack/ash.svg" },
  { operator: "Thermite", icon: "assets/icons/attack/thermite.svg" },
  { operator: "Montagne", icon: "assets/icons/attack/montagne.svg" },
  { operator: "Twitch", icon: "assets/icons/attack/twitch.svg" },
  { operator: "Blitz", icon: "assets/icons/attack/blitz.svg" },
  { operator: "IQ", icon: "assets/icons/attack/iq.svg" },
  { operator: "Fuze", icon: "assets/icons/attack/fuze.svg" },
  { operator: "Glaz", icon: "assets/icons/attack/glaz.svg" },
];


console.log(DefenseOperator.length);
console.log(AttackOperator.length);

function R6randomDefenseOperator(){
    
    const DefenseOperatorOutput = DefenseOperator[Math.floor(Math.random() * DefenseOperator.length)];
    const DefenseOperatorOutput2 = DefenseOperator[0];
       
    const DefenseOperatorOutput3 = DefenseOperator[Math.floor(0.1 * DefenseOperator.length)];

    console.log(DefenseOperatorOutput2)
    console.log(DefenseOperatorOutput3)
    console.log(Math.floor(0.1 * DefenseOperator.length))
    console.log(Math.round(0.1 * DefenseOperator.length))

    document.getElementById("defense-output").innerHTML = `
    <p> ${DefenseOperatorOutput.operator} </p>
    <img src="${DefenseOperatorOutput.icon}">
    `;

}

function R6randomAttackOperator(){
               
    const AttackOperatorOutput = AttackOperator[Math.floor(Math.random() * AttackOperator.length)];

    document.getElementById("attack-output").innerHTML = `
    <p> ${AttackOperatorOutput.operator} </p>
    <img src="${AttackOperatorOutput.icon}">
    `;
}

function PickBoth(){
  R6randomAttackOperator();
  R6randomDefenseOperator();
  R6randomMap();
}