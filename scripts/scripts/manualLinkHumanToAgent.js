const { execSync } = require('child_process');

const args = process.argv.slice(2);
const challengeIndex = args.indexOf('--challenge');

if (challengeIndex === -1 || !args[challengeIndex + 1]) {
  console.error("❌ Missing --challenge argument");
  process.exit(1);
}

const challenge = args[challengeIndex + 1];

try {
  console.log("🔗 Linking human to agent...");
  execSync(`npx clawhub@latest link-human --challenge '${challenge}'`, {
    stdio: "inherit",
  });
  console.log("✅ Successfully linked!");
} catch (error) {
  console.error("❌ Error linking human to agent:", error);
  process.exit(1);
}
