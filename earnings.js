const tasaMp = 1;
const precioEntrada = 800;
const bandasPorSemana = 32;
const invitadosPorBanda = 20;
const IVA = 0.2123;
const semanasDelMes = 4;
const totalEntradas =
  bandasPorSemana * semanasDelMes * invitadosPorBanda * precioEntrada;

const a = [
  {
    comisionMp: 0.0639,
    dias: 0,
    yo: totalEntradas * 0.0091 * (1 - IVA),
    en10: totalEntradas * 0.0091 * (1 + (tasaMp / 365) * 10) * (1 - IVA),
    en18: totalEntradas * 0.0091 * (1 + (tasaMp / 365) * 18) * (1 - IVA),
    en35: totalEntradas * 0.0091 * (1 + (tasaMp / 365) * 35) * (1 - IVA),
  }, // 0.0091
  {
    comisionMp: 0.0429,
    dias: 10,
    yo: totalEntradas * 0.0301 * (1 - IVA),
    en18: totalEntradas * 0.0301 * (1 + (tasaMp / 365) * 8) * (1 - IVA),
    en35: totalEntradas * 0.0301 * (1 + (tasaMp / 365) * 25) * (1 - IVA),
  }, // 0.0301
  {
    comisionMp: 0.0339,
    dias: 18,
    yo: totalEntradas * 0.0391 * (1 - IVA),
    en35: totalEntradas * 0.0391 * (1 + (tasaMp / 365) * 17) * (1 - IVA),
  }, // 0.0391
  {
    comisionMp: 0.0179,
    dias: 35,
    yo: totalEntradas * 0.0551 * (1 - IVA),
  }, // 0.0551
];
