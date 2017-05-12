export default translateConfig;

/** @ngInject */
function translateConfig($translateProvider) {
    var translationsEN = {
      "Open a chequing account":"Open a chequing account",
      "Open a savings account":"Open a savings account",
      "Open a U.S. Dollar account":"Open a U.S. Dollar account",
      "Review my everyday banking needs":"Review my everyday banking needs",
      "Switch to TD":"Switch to TD",
      "Apply for Overdraft Protection":"Apply for Overdraft Protection",
      "Book an Appointment":"Book an Appointment",
      "Our Investing Topics":"Our Investing Topics",
      "Pick a topic, then we\'ll find a time and place":"Pick a topic, then we\'ll find a time and place",
      "Return to previous screen":"Return to previous screen",
      "French":"Français"
    };
    var translationsFR = {
      "Open a chequing account":"Ouvrir un compte chequing",
      "Open a savings account":"Ouvrir un compte d'épargne",
      "Open a U.S. Dollar account":"Ouvrir un compte en dollars des États-Unis",
      "Review my everyday banking needs":"Examinez mes besoins bancaires quotidiens",
      "Switch to TD":"Passer à TD",
      "Apply for Overdraft Protection":"Demande de protection contre le découvert",
      "Book an Appointment":"Prenez rendez-vous",
      "Our Investing Topics":"Nos sujets d\'investissement",
      "Pick a topic, then we\'ll find a time and place":"Choisissez un sujet, puis nous trouverons un moment et un lieu",
      "Return to previous screen":"Retour à l'écran précédent",
      "French":"English"
    };
    $translateProvider
    .translations('en', translationsEN)
    .translations('fr', translationsFR)
    .preferredLanguage('en');
}
