module.exports = {
  ci: {
    collect: {
      url: ['https://pdhenrique.github.io/lhciProj/build'],
      numberOfRuns: 1
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci_reports'
    }
  }
};