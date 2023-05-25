module.exports = {
  ci: {
    collect: {
      url: ['https://pdhenrique.github.io/lhciProj/build'],
      numberOfRuns: 1
    },
    upload: {
      target: 'temporary-public-storage',
      outputDir: './lhci_reports'
    }
  }
};