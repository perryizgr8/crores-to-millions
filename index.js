const MILLION = 1000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000;
const LAKH = 100000;
const CRORE = 10000000;
const LAKHCRORE = 1000000000000;

function convert_indian() {
    var indian_total = document.getElementById('indian-value').value * document.getElementById('indian-names').value;
    var american_value = document.getElementById('american-value');
    var american_names = document.getElementById('american-names');
    console.log('indian changed:' + indian_total);
    if(indian_total < BILLION) {
        american_value.value = indian_total/MILLION;
        american_names.value = MILLION;
    } else if(indian_total < TRILLION) {
        american_value.value = indian_total/BILLION;
        american_names.value = BILLION;
    } else {
        american_value.value = indian_total/TRILLION;
        american_names.value = TRILLION;
    }
}

function convert_american() {
    var american_total = document.getElementById('american-value').value * document.getElementById('american-names').value;
    var indian_value = document.getElementById('indian-value');
    var indian_names = document.getElementById('indian-names');
    console.log('american changed:' + american_total);
    if(american_total < CRORE) {
        indian_value.value = american_total/LAKH;
        indian_names.value = LAKH;
    } else if(american_total < LAKHCRORE) {
        indian_value.value = american_total/CRORE;
        indian_names.value = CRORE;
    } else {
        indian_value.value = american_total/LAKHCRORE;
        indian_names.value = LAKHCRORE;
    }

}