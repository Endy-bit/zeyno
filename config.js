const file = fileURLToPath(import.meta.url);
watchFile(file, { persistent: true }, () => {
  unwatchFile(file);
  console.log(chalk.redBright("🔄 Config aggiornato: 'config.js'"));
});