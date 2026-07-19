import chalk from 'chalk';

const PREFIX = chalk.cyan('[ctx]');

export const logger = {
  info: (...args: unknown[]) => console.log(PREFIX, chalk.blue('ℹ'), ...args),
  success: (...args: unknown[]) => console.log(PREFIX, chalk.green('✔'), ...args),
  warn: (...args: unknown[]) => console.log(PREFIX, chalk.yellow('⚠'), ...args),
  error: (...args: unknown[]) => console.error(PREFIX, chalk.red('✖'), ...args),
  debug: (...args: unknown[]) => {
    if (process.env.DEBUG) console.log(PREFIX, chalk.gray('🐛'), ...args);
  },
  raw: (...args: unknown[]) => console.log(...args),
  section: (title: string) => {
    console.log('');
    console.log(chalk.bold.cyan(` ┌─ ${title}`));
    console.log(chalk.cyan(' └' + '─'.repeat(Math.max(0, 50 - title.length))));
  },
};
