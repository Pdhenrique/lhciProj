module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080/'],
      numberOfRuns: 1
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci_reports'
    }
  }
};