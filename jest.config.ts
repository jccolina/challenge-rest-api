import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  globalSetup: "./hooks/jestGlobalSetup.ts",
  reporters: ["default", "jest-allure", 
	["./node_modules/jest-html-reporter", {
		"pageTitle": "Football REST API Test Report",
    "outputPath": "./report-html/api-test-report.html",
    "includeFailureMsg": true,
    "includeConsoleLog": true,
	}]],
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ["jest-allure/dist/setup"],
}
export default config