// Common
import iconCarpentryMastery from "../images/icon-common/carpentry-mastery.png";
import iconCoinage from "../images/icon-common/coinage.png";
import iconColonization from "../images/icon-common/colonization.png";
import iconDefensiveStrategy from "../images/icon-common/defensive-strategy.png";
import iconEradication from "../images/icon-common/eradication.png";
import iconErudition from "../images/icon-common/erudition.png";
import iconFeelingSafe from "../images/icon-common/feeling-safe.png";
import iconFurCoats from "../images/icon-common/fur-coats.png";
import iconHearthstone from "../images/icon-common/hearthstone.png";
import iconLegendaryHeroes from "../images/icon-common/legendary-heroes.png";
import iconMedicine from "../images/icon-common/medicine.png";
import iconMilitaryStrategy from "../images/icon-common/military-strategy.png";
import iconMiningEfficiency from "../images/icon-common/mining-efficiency.png";
import iconMonsterSlayer from "../images/icon-common/monster-slayer.png";
import iconNegotiation from "../images/icon-common/negotiation.png";
import iconRecruitment from "../images/icon-common/recruitment.png";
import iconSharpAxes from "../images/icon-common/sharp-axes.png";
import iconShinyHappyPeople from "../images/icon-common/shiny-happy-people.png";
import iconShipbuilding from "../images/icon-common/shipbuilding.png";
import iconTradingCaravan from "../images/icon-common/trading-caravan.png";
import iconWeaponsmith from "../images/icon-common/weaponsmith.png";

// Stag
import iconFoodPreservation from "../images/icon-stag/food-preservation.png";
import iconGloryOfTheClan from "../images/icon-stag/glory-of-the-clan.png";
import iconHeroEmblem from "../images/icon-stag/hero-emblem.png";
import iconTheValueOfGreatDeeds from "../images/icon-stag/the-value-of-great-deeds.png";
import iconYoungAndProud from "../images/icon-stag/young-and-proud.png";

// Goat
import iconSpareTools from "../images/icon-goat/spare-tools.png";
import iconAmenities from "../images/icon-goat/amenities.png";
import iconIndustrious from "../images/icon-goat/industrious.png";
import iconBarricades from "../images/icon-goat/barricades.png";
import iconFoodTrade from "../images/icon-goat/food-trade.png";

// Blessings
import iconFreyasBlessing from "../images/icon-common/blessing-baldr.png";
import iconBaldrsBlessing from "../images/icon-common/blessing-freya.png";
import iconJordsBlessing from "../images/icon-common/blessing-jord.png";

export default function iconResolver(name) {
  switch (name) {
    // Common
    case "Carpentry Mastery":
      return iconCarpentryMastery;
    case "Coinage":
      return iconCoinage;
    case "Colonization":
      return iconColonization;
    case "Defensive Strategy":
      return iconDefensiveStrategy;
    case "Eradication":
      return iconEradication;
    case "Erudition":
      return iconErudition;
    case "Feeling Safe":
      return iconFeelingSafe;
    case "Fur Coats":
      return iconFurCoats;
    case "Hearthstone":
      return iconHearthstone;
    case "Legendary Heroes":
      return iconLegendaryHeroes;
    case "Medicine":
      return iconMedicine;
    case "Military Strategy":
      return iconMilitaryStrategy;
    case "Mining Efficiency":
      return iconMiningEfficiency;
    case "Monster Slayer":
      return iconMonsterSlayer;
    case "Negotiation":
      return iconNegotiation;
    case "Recruitment":
      return iconRecruitment;
    case "Sharp Axes":
      return iconSharpAxes;
    case "Shiny Happy People":
      return iconShinyHappyPeople;
    case "Shipbuilding":
      return iconShipbuilding;
    case "Trading Caravan":
      return iconTradingCaravan;
    case "Weaponsmith":
      return iconWeaponsmith;

    // Stag
    case "Food Preservation":
      return iconFoodPreservation;
    case "Glory Of The Clan":
      return iconGloryOfTheClan;
    case "Hero Emblem":
      return iconHeroEmblem;
    case "The Value Of Great Deeds":
      return iconTheValueOfGreatDeeds;
    case "Young And Proud":
      return iconYoungAndProud;

    // Goat
    case "Spare Tools":
      return iconSpareTools;
    case "Amenities":
      return iconAmenities;
    case "Industrious":
      return iconIndustrious;
    case "Barricades":
      return iconBarricades;
    case "Food Trade":
      return iconFoodTrade;

    // Blessings
    case "Freya's Blessing":
      return iconFreyasBlessing;
    case "Baldr's Blessing":
      return iconBaldrsBlessing;
    case "Jord's Blessing":
      return iconJordsBlessing;
    default:
      return null;
  }
}
