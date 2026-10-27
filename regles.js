/* Concordance, par Hémistiches : tarifs et règles de prix, communs aux pages française et anglaise.
   Source unique : toute modification de prix se fait ici, et nulle part ailleurs.
   Les montants écrits dans les pages (data-p) et dans le rapport ({clé}) sont recalculés depuis ce fichier au chargement.
   Les textes restent dans chaque page ; ce fichier ne contient que des nombres et des calculs. */
(function (g) {
  "use strict";

  /* Tarifs HT, arrêtés par le cabinet le 27 octobre 2026. « aPartirDe » : prix d'entrée d'une situation simple ;
     au-delà des hypothèses décrites dans la page, devis arrêté avant toute intervention. */
  var TARIFS = {
    version: "2026-10-27",
    consultation: { prix: 350, minutes: 45, deductionJours: 30 },
    qualification: { aPartirDe: 2000 },
    distribution: { diagnostic: 1200, miseEnRegle: 2500 },          // mise en règle : prix global, diagnostic compris
    contrats: { revueCiblee: 1200, revueApprofondie: 2000 },
    entree: { strategie: 3000, organisation: 6000 },                 // organisation : prix global, stratégie comprise
    suivi: [
      { cle: "regulier",  prix: 490, heures: 3, premierRetourJoursOuvres: 2 },
      { cle: "echeances", prix: 990, heures: 6, premierRetourJoursOuvres: 1 }
    ],
    preavisMois: 1
  };

  function palier(cle) { for (var i = 0; i < TARIFS.suivi.length; i++) if (TARIFS.suivi[i].cle === cle) return TARIFS.suivi[i]; return null; }

  /* Prix globaux : un diagnostic ou une stratégie déjà réglés sont imputés ; seul le complément est facturé. */
  function complementMiseEnRegle(diagnosticDejaRegle) {
    return diagnosticDejaRegle ? TARIFS.distribution.miseEnRegle - TARIFS.distribution.diagnostic : TARIFS.distribution.miseEnRegle;
  }
  function complementOrganisation(strategieDejaReglee) {
    return strategieDejaReglee ? TARIFS.entree.organisation - TARIFS.entree.strategie : TARIFS.entree.organisation;
  }
  /* Consultation : déduite une seule fois d'un forfait engagé dans les trente jours, lorsqu'elle le prépare directement. */
  function apresConsultation(prixForfait, joursDepuisConsultation, prepareLaMission) {
    var imputable = prepareLaMission && joursDepuisConsultation <= TARIFS.consultation.deductionJours;
    return imputable ? Math.max(0, prixForfait - TARIFS.consultation.prix) : prixForfait;
  }

  /* Valeurs nommées, utilisées par les pages : data-p="clé" dans le texte, {clé} dans les chaînes du rapport. */
  function valeurs() {
    return {
      c: TARIFS.consultation.prix,
      q: TARIFS.qualification.aPartirDe,
      dd: TARIFS.distribution.diagnostic,
      dm: TARIFS.distribution.miseEnRegle,
      dmc: complementMiseEnRegle(true),
      cc: TARIFS.contrats.revueCiblee,
      ca: TARIFS.contrats.revueApprofondie,
      es: TARIFS.entree.strategie,
      eo: TARIFS.entree.organisation,
      eoc: complementOrganisation(true),
      s1: palier("regulier").prix,
      s2: palier("echeances").prix
    };
  }

  g.CONCORDANCE_REGLES = {
    TARIFS: TARIFS, palier: palier, valeurs: valeurs,
    complementMiseEnRegle: complementMiseEnRegle, complementOrganisation: complementOrganisation,
    apresConsultation: apresConsultation
  };
})(typeof window !== "undefined" ? window : this);
