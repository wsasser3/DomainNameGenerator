

function getDomainName(){
    let pronoun = ['the', 'my', 'your', 'our', 'his', 'her'];
    let adjective = ['great', 'stupid', 'wonderful', 'painful', 'blaring', 'personified'];
    let noun = ['bear', 'baseball', 'dribble', 'noodle', 'ricecake', 'dog'];

    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adjective.length; j++) {
            for(let k = 0; k < noun.length; k++){
                console.log(pronoun[i] + adjective[j] + noun[k] + '.com');
            } 
        }
    } 
}
//getDomainName();

function getDomainName2(){
    let pronoun = ['the', 'my', 'your', 'our', 'his', 'her'];
    let adjective = ['great', 'stupid', 'wonderful', 'painful', 'blaring', 'personified'];
    let noun = ['bear', 'baseball', 'dribble', 'noodle', 'ricecake', 'dog'];
    let domain_names;
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adjective.length; j++) {
            for(let k = 0; k < noun.length; k++){
               domain_names += pronoun[i] + adjective[j] + noun[k] + '.com' + '\n';
            } 
        }
    }
    return domain_names;
}
console.log(getDomainName2());