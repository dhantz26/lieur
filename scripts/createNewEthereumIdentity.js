const { execSync } = require('child_process');

try {
  console.log("🚀 Creating new Ethereum identity...");
  execSync("npx clawhub@latest create-identity", { stdio: "inherit" });
  console.log("✅ Identity created successfully!");
} catch (error) {
  console.error("❌ Error creating identity:", error);
  process.exit(1);
}
