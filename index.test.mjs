import { exec } from 'child_process';
import assert from 'assert';

const stdout = await new Promise((resolve, reject) => {
  exec('npx eslint ./example.js --format json', (_, stdout, stderr) => {
    if (stderr) {
      reject(new Error(`Had stderr output:\n${stderr}`));
    } else {
      resolve(stdout);
    }
  });
});

const output = JSON.parse(stdout);
const { messages } = output[0];
const [first, second, third, fourth] = messages;

assert(output.length === 1);
assert(messages.length === 4);
assert(first.ruleId === '@sanity/i18n/no-i18next-import');
assert(second.ruleId === 'i18next/no-literal-string');
assert(third.ruleId === '@sanity/i18n/no-attribute-string-literals');
assert(fourth.ruleId === '@sanity/i18n/no-attribute-template-literals');
