import type { Rank, RankType, PlayerColor } from 'csdm/common/types/counter-strike';

export type Player = {
  id: string;
  matchChecksum: string;
  steamId: string;
  name: string;
  killCount: number;
  deathCount: number;
  assistCount: number;
  damageHealth: number;
  damageArmor: number;
  averageDamagePerRound: number;
  averageKillPerRound: number;
  averageDeathPerRound: number;
  utilityDamagePerRound: number;
  headshotCount: number;
  headshotPercentage: number;
  mvpCount: number;
  firstKillCount: number;
  firstDeathCount: number;
  rankType: RankType;
  rank: Rank;
  oldRank: Rank;
  winsCount: number;
  vsOneCount: number;
  vsTwoCount: number;
  vsThreeCount: number;
  vsFourCount: number;
  vsFiveCount: number;
  vsOneLostCount: number;
  vsTwoLostCount: number;
  vsThreeLostCount: number;
  vsFourLostCount: number;
  vsFiveLostCount: number;
  vsOneWonCount: number;
  vsTwoWonCount: number;
  vsThreeWonCount: number;
  vsFourWonCount: number;
  vsFiveWonCount: number;
  bombPlantedCount: number;
  bombDefusedCount: number;
  killDeathRatio: number;
  score: number;
  teamName: string;
  kast: number;
  utilityDamage: number;
  tradeKillCount: number;
  tradeDeathCount: number;
  firstTradeKillCount: number;
  firstTradeDeathCount: number;
  oneKillCount: number;
  twoKillCount: number;
  threeKillCount: number;
  fourKillCount: number;
  fiveKillCount: number;
  collateralKillCount: number;
  wallbangKillCount: number;
  noScopeKillCount: number;
  avatar: string | null;
  hostageRescuedCount: number;
  hltvRating: number;
  hltvRating2: number;
  lastBanDate: string | null;
  crosshairShareCode: string | null;
  color: PlayerColor;
  tagIds: string[];
};
