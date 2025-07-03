/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Configurazione Dati e Opzioni per Grafici Chart.js
 * Versione 1.1 - DATI BLUE MARLIN AGGIORNATI
 */

// ======================================
// FUNZIONI PER RECUPERARE I DATI SPECIFICI
// ======================================

// --- Dati per Dashboard Esecutiva (dashboard.html) ---
function getTrendRicaviEbitdaData_Dashboard() {
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             {
                 label: "Ricavi (€)",
                 data: [1263072, 1227410, 1223477], // Valori assoluti
                 borderColor: 'rgb(25, 25, 112)',
                 backgroundColor: 'rgba(25, 25, 112, 0.1)',
                 type: 'line', tension: 0.1, yAxisID: 'y', fill: true, pointRadius: 3,
             },
             {
                 label: "EBITDA (€)",
                 data: [92687, 52926, 63543], // EBITDA rettificato
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.7)',
                 type: 'bar', yAxisID: 'y', barPercentage: 0.6, categoryPercentage: 0.7
             },
              {
                  label: "EBITDA Margin (%)",
                  data: [7.3, 4.3, 5.2], // Percentuale rettificata
                  borderColor: 'rgb(217, 140, 0)',
                  backgroundColor: 'transparent',
                  type: 'line', tension: 0.1, yAxisID: 'y1', fill: false, borderDash: [5, 5], pointRadius: 3
              }
        ]
    };
}

function getTrendPfnEbitdaData_Dashboard() {
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             {
                 label: "PFN/EBITDA",
                 data: [12.48, 19.94, 17.96], // Valori rettificati
                 borderColor: 'rgb(214, 34, 70)',
                 backgroundColor: 'rgba(214, 34, 70, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(214, 34, 70)'
             },
              {
                 label: 'Soglia Attenzione (<3.5x)',
                 data: [3.5, 3.5, 3.5], // Linea target
                 borderColor: 'rgb(255, 193, 7)',
                 borderDash: [5, 5], fill: false, pointRadius: 0, borderWidth: 2,
             }
         ]
     };
}

// --- Dati per Report Dettagliati (report/parteX_*.html) ---

// Dati Parte 1
function getMainMetricsData() {
     return {
         labels: ["2022", "2023", "2024"], 
         datasets: [
             { label: "Ricavi (€000)", data: [1263, 1227, 1223], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "EBITDA (€000)", data: [93, 53, 64], backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Patrimonio Netto (€000)", data: [337, 351, 235], backgroundColor: "rgba(217, 140, 0, 0.7)" }
         ]
     };
}
function getCurrentAssetsLiabilitiesData() {
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "Attivo Corrente", data: [1120042, 1134570], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "Passivo Corrente", data: [562861, 517493], backgroundColor: "rgba(214, 34, 70, 0.7)" },
             { label: "Capitale Circolante Netto", data: [557181, 617077], backgroundColor: "rgba(77, 140, 87, 0.7)" }
         ]
     };
}

// Dati Parte 2
function getEconomicTrendData() {
    const dataAbs = getTrendRicaviEbitdaData_Dashboard();
    dataAbs.datasets[0].data = dataAbs.datasets[0].data.map(v => v ? v / 1000 : null); // Ricavi in K
    dataAbs.datasets[1].data = dataAbs.datasets[1].data.map(v => v ? v / 1000 : null); // EBITDA in K
    dataAbs.datasets[0].label = "Ricavi (€000)";
    dataAbs.datasets[1].label = "EBITDA (€000)";
    return dataAbs;
}
function getMarginalityData() {
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
            { label: "Valore Aggiunto %", data: [35.4, 38.6, 40.7], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Margine di Contribuzione %", data: [21.9, 20.8, 25.4], borderColor: "rgba(42, 58, 128, 1)", fill: false },
            { label: "EBITDA %", data: [7.3, 4.3, 5.2], borderColor: "rgba(77, 140, 87, 1)", fill: false },
            { label: "EBIT %", data: [4.6, 1.6, -5.5], borderColor: "rgba(217, 140, 0, 1)", fill: false }
         ]
     };
}
function getProfitabilityIndicesData() {
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "ROE %", data: [0.20, 3.82, -49.17], borderColor: "rgba(25, 25, 112, 1)", backgroundColor: "rgba(25, 25, 112, 0.2)", fill: true},
            { label: "ROI %", data: [3.85, 1.40, -4.08], borderColor: "rgba(77, 140, 87, 1)", backgroundColor: "rgba(77, 140, 87, 0.2)", fill: true},
            { label: "ROS %", data: [4.6, 1.6, -5.5], borderColor: "rgba(217, 140, 0, 1)", backgroundColor: "rgba(217, 140, 0, 0.2)", fill: true}
        ]
    };
}
function getLeverageData() {
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "ROI (%)", data: [1.40, -4.08], backgroundColor: "rgba(25, 25, 112, 0.7)"},
             { label: "ROE (%)", data: [3.82, -49.17], backgroundColor: "rgba(77, 140, 87, 0.7)"},
             { label: "Costo medio del debito (%)", data: [5.49, 4.25], backgroundColor: "rgba(214, 34, 70, 0.7)"}
         ]
     };
}
function getBenchmarkRadarData() {
    return {
        labels: ["Crescita Ricavi", "EBITDA Margin", "ROI", "Turnover", "Costo Personale (inv)", "PFN/EBITDA (inv)", "D/E (inv)"],
        datasets: [
            {
                label: "Blue Marlin",
                data: [40, 52, 0, 38, 87, 17, 41], // Normalizzati rispetto al benchmark
                backgroundColor: "rgba(25, 25, 112, 0.3)", borderColor: "rgba(25, 25, 112, 1)", borderWidth: 2, pointBackgroundColor: "rgba(25, 25, 112, 1)"
            },
            {
                label: "Media Settore", // Base 100
                data: [100, 100, 100, 100, 100, 100, 100],
                backgroundColor: "rgba(217, 140, 0, 0.3)", borderColor: "rgba(217, 140, 0, 1)", borderWidth: 2, pointBackgroundColor: "rgba(217, 140, 0, 1)"
            }
        ]
    };
}

// Dati Parte 3
function getAssetsData() {
    const originalData = [724718, 371, 189538, 305655, 346482, 69964];
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Immob. Materiali", "Immob. Finanziarie", "Immob. Immateriali", "Magazzino", "Crediti Comm.", "Liquidità"],
        _originalData: originalData, // Valori originali per tooltip
        datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4a69bd", "#F44336", "#FFC107", "#4CAF50", "#6c757d"] // Palette definita
         } ]
    };
}
function getLiabilitiesData() {
    const originalData = [235107, 872022, 339358, 328417, 189076]; // PN, Debt MLT, Debt BT, Debt Forn, Altri Debt
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT", "Debiti Comm.", "Altri Debiti"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd", "#6c757d"] // Palette coerente
        } ]
     };
}
function getInvestmentsStructureData() {
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             { label: "Immobilizzazioni", data: [980379, 939646, 914627], backgroundColor: "rgba(25, 25, 112, 0.7)", stack: "Stack 0" },
             { label: "Crediti commerciali", data: [341700, 287930, 346482], backgroundColor: "rgba(77, 140, 87, 0.7)", stack: "Stack 0" },
             { label: "Rimanenze", data: [439126, 469501, 305655], backgroundColor: "rgba(217, 140, 0, 0.7)", stack: "Stack 0" },
             { label: "Liquidità", data: [7121, 9627, 69964], backgroundColor: "rgba(79, 109, 122, 0.7)", stack: "Stack 0" }
        ]
    };
}
function getEquityCompositionData() {
    const originalData = [50000, 258000, -115610, 42717];
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Capitale Sociale", "Riserve", "Utile Esercizio", "Utili a Nuovo"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd"]
        } ]
     };
}
function getFinancialDebtSourcesData() {
    const originalData = [235107, 872022, 339358]; // PN, Debt MLT, Debt BT
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT"],
        _originalData: originalData,
        datasets: [{
            data: originalData.map(v => total > 0 ? (v / total) * 100 : 0), // Dati %
            backgroundColor: ["#191970", "#4CAF50", "#FFC107"]
        }]
    };
}
function getPfnTrendData() {
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Debiti Finanziari Tot.", data: [1163726, 1065080, 1211380], type: "bar", backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
             { label: "Liquidità", data: [7121, 9627, 69964], type: "bar", backgroundColor: "rgba(77, 140, 87, 0.7)", yAxisID: 'y'},
             { label: "PFN", data: [1156605, 1055453, 1141416], type: "line", borderColor: "rgba(25, 25, 112, 1)", fill: false, yAxisID: 'y' }
         ]
     };
}

// Dati Parte 4
function getDebtSustainabilityData() {
     return {
         labels: ["PFN/EBITDA (inv)", "D/E (inv)", "DSCR", "Oneri Fin./Ricavi (inv)", "Cash Flow Op./Ricavi", "Leanus Score"], // Invertiti D/E e OF/Ricavi
         datasets: [
             { label: "Blue Marlin", data: [6, 41, 0, 25, 0, 28], backgroundColor: "rgba(25, 25, 112, 0.2)", borderColor: "rgba(25, 25, 112, 1)" }, // Valori normalizzati
             { label: "Target/Benchmark", data: [33, 50, 100, 67, 50, 75], backgroundColor: "rgba(77, 140, 87, 0.2)", borderColor: "rgba(77, 140, 87, 1)" }
         ]
     };
}
function getDebtCostData() {
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "EBITDA (€000)", data: [93, 53, 64], type: "bar", yAxisID: "y", backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Capacità Teorica Indeb. (3x EBITDA, €000)", data: [279, 159, 192], type: "line", yAxisID: "y", borderColor: "rgba(25, 25, 112, 1)", fill: false },
             { label: "PFN Attuale (€000)", data: [1157, 1055, 1141], type: "line", yAxisID: "y", borderColor: "rgba(214, 34, 70, 1)", fill: false, borderDash: [5, 5] }
         ]
     };
}

// Dati Parte 5
function getWorkingCapitalCycleData() {
    return {
        labels: ["Crediti Clienti (DSO)", "Magazzino (DIO)", "Debiti Fornitori (DPO)", "Ciclo Circolante"],
        datasets: [
            { label: "Blue Marlin (Giorni)", data: [120, 292, 130, 282], backgroundColor: "rgba(25, 25, 112, 0.7)" },
            { label: "Benchmark Settore (Giorni)", data: [60, 60, 60, 60], backgroundColor: "rgba(77, 140, 87, 0.7)" }
        ]
    };
}
function getCashFlowWaterfallData() {
    return {
         labels: ["EBITDA", "Imposte", "+Δ Circ.", "=CF Op.", "-Invest.", "=FCF", "+Δ Debt", "-Divid.", "=Δ Cassa"],
         datasets: [{
             data: [63543, -64, -149975, -85496, -470, -85966, 146303, 0, 60337],
             backgroundColor: [ // Colori significativi
                 '#4CAF50', // EBITDA
                 '#F44336', // Imposte (-)
                 '#F44336', // Delta Circ. (-) - Negativo
                 '#F44336', // CF Op (-) - Negativo
                 '#F44336', // Investimenti (-)
                 '#F44336', // FCF (-) - Negativo
                 '#4CAF50', // Delta Debt (+) - Positivo
                 '#4CAF50', // Dividendi (0) - Neutro
                 '#4CAF50'  // Delta Cassa (+) - Positivo
             ]
         }]
     };
}
function getCashFlowTrendData() {
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Cash Flow Operativo", data: [-89296, 93707, -85496], borderColor: "rgba(77, 140, 87, 1)", fill: true, backgroundColor: "rgba(77, 140, 87, 0.1)"},
            { label: "Cash Flow Investimenti", data: [-14748, 7451, -470], borderColor: "rgba(214, 34, 70, 1)", fill: true, backgroundColor: "rgba(214, 34, 70, 0.1)" },
            { label: "Variazione Netta di Cassa", data: [-20605, 2506, 60337], borderColor: "rgba(25, 25, 112, 1)", fill: true, backgroundColor: "rgba(25, 25, 112, 0.1)" }
        ]
    };
}
function getCashFlowProjectionData() {
    return {
        labels: ["2024", "2025E", "2026E", "2027E", "2028E"],
        datasets: [
            { label: "Cash Flow Operativo", data: [-85496, 344602, 309478, 294258, 269671], type: 'bar', backgroundColor: "rgba(79, 109, 122, 0.7)", yAxisID: 'y' },
            { label: "Variazione Debiti Fin.", data: [146303, -7865, -217399, -112687, -182810], type: 'bar', backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
            { label: "Liquidità Finale", data: [69964, 406701, 498780, 680351, 767212], type: 'line', borderColor: "rgba(77, 140, 87, 1)", fill: false, yAxisID: 'y1' }
        ]
    };
}

// Dati Parte 6
function getZscoreData() {
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Z-Score", data: [null, null, 1.50], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Soglia Sicurezza", data: [2.99, 2.99, 2.99], borderColor: "rgba(77, 140, 87, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 },
            { label: "Soglia Rischio", data: [1.81, 1.81, 1.81], borderColor: "rgba(214, 34, 70, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 }
        ]
    };
}
function getRiskIndicatorsData() {
    return {
        labels: ["ROI", "ROS", "D/E (inv)", "Cop. Immob.", "DSO (inv)", "DPO (inv)"], // Giorni invertiti
        datasets: [{
             label: "Blue Marlin",
             data: [0, 0, 41, 26, 50, 46], // Normalizzati
             backgroundColor: "rgba(136, 141, 194, 0.5)", borderColor: "rgba(97, 103, 173, 1)", borderWidth: 2
            }, {
             label: "Target/Benchmark",
             data: [100, 100, 50, 100, 67, 67], // Benchmark normalizzato
             backgroundColor: "rgba(145, 190, 145, 0.4)", borderColor: "rgba(103, 167, 103, 1)", borderWidth: 2
        }]
    };
}
function getSensitivityData() {
     return {
         labels: ["Ricavi", "Costi Fissi", "Crediti Clienti (gg)", "Debiti Fornitori (gg)"],
         datasets: [{
             label: "Variazione Critica",
             data: [-41.14, 85.10, 21, -27], // Valori da analisi sensitività
             backgroundColor: ["#F44336", "#4CAF50", "#F44336", "#F44336"] // Colori per impatto
         }]
     };
}


// ======================================
// OPZIONI COMUNI PER I GRAFICI
// ======================================
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { weight: 'bold', size: 13 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 4,
            displayColors: true,
            boxPadding: 4,
            callbacks: { // Callback di default migliorato
                 label: function(context) {
                     let label = context.dataset.label || context.label || '';
                     if (label) label += ': ';
                     let value = context.parsed.y;
                      if (value === null || value === undefined) value = context.parsed.r; // Per radar

                     if (value !== null && value !== undefined) {
                         const axisID = context.dataset.yAxisID;
                         const labelText = context.label;
                         const datasetLabel = context.dataset.label || '';

                          if (datasetLabel.includes('%') || (axisID === 'y1' && context.chart.options.scales?.y1?.title?.text.includes('%'))) {
                             label += formatPercentage(value);
                          } else if (datasetLabel.includes('(gg)') || labelText?.includes('(gg)')) {
                             label += value.toFixed(0) + ' gg';
                          } else if (datasetLabel.includes('(x)') || labelText?.includes('(x)') || datasetLabel.includes('PFN/EBITDA') || datasetLabel.includes('D/E') || datasetLabel.includes('Z-Score')) {
                             label += value.toFixed(2) + (datasetLabel.includes('Z-Score') ? '' : 'x');
                          } else if (datasetLabel.includes('Score') && !datasetLabel.includes('Z-Score')) {
                              label += value.toFixed(2);
                          } else if (datasetLabel.includes('Variazione Critica')) { // Per grafico sensitività
                               label += value.toFixed(2) + (labelText.includes('(gg)') ? ' gg' : '%');
                          }
                          else if (Math.abs(value) >= 1000000) {
                             label += formatCurrency(value / 1000000, 2) + ' M';
                         } else if (Math.abs(value) >= 1000) {
                             label += formatCurrency(value / 1000, 0) + ' K';
                         } else {
                              label += formatCurrency(value, (Math.abs(value) < 10 && value !== 0 ? 2 : 0));
                         }
                     } else {
                         label += 'N/D';
                     }
                     return label;
                 }
             }
        }
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { font: { size: 11 } }
        },
        y: {
            grid: { color: '#e0e0e0', borderDash: [2, 3] },
            ticks: { font: { size: 11 } }
        }
    },
    animation: { duration: 400 }
};

// Opzioni specifiche per grafici a torta/ciambella
const pieChartOptions = {
    ...commonChartOptions,
    cutout: '0%',
     plugins: {
         ...commonChartOptions.plugins,
        tooltip: {
             ...commonChartOptions.plugins.tooltip,
            callbacks: { // Callback specifico per Torta/Ciambella
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0; // Usa valore raw (percentuale)
                    const originalValue = context.dataset._originalData ? context.dataset._originalData[context.dataIndex] : value;
                    const percentage = formatPercentage(value); // Formatta la percentuale
                    return `${label}: ${formatCurrency(originalValue)} (${percentage})`;
                }
            }
        }
     }
};
const doughnutChartOptions = { ...pieChartOptions, cutout: '50%' };

// Opzioni specifiche per grafici radar
const radarChartOptions = {
     ...commonChartOptions,
      scales: {
         r: {
             angleLines: { color: '#e0e0e0' },
             grid: { color: '#e0e0e0' },
             pointLabels: { font: { size: 10 } },
             ticks: {
                 backdropColor: 'rgba(255, 255, 255, 0.75)',
                 font: { size: 9 },
                 maxTicksLimit: 5,
             },
             suggestedMin: 0,
         }
      },
      plugins: {
          ...commonChartOptions.plugins,
          tooltip: {
              ...commonChartOptions.plugins.tooltip,
               callbacks: {
                   label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) label += ': ';
                       if (context.parsed.r !== null) {
                          label += context.parsed.r.toFixed(1); // Valore asse radiale
                       }
                       return label;
                   }
               }
          }
      }
};

console.log("charts_config.js caricato e pronto.");