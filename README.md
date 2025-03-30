# ai-test-generator

ai-test-generator is an automation tool that utilizes AI models (OpenAI) to generate unit tests for frontend projects. With minimal configuration, you can quickly create efficient unit tests to enhance your development workflow.

# Features
Automatically generate unit tests for frontend projects.
Leverages OpenAI’s large models for intelligent test generation.
Easy to use with simple configuration.

# Installation
To set up the ai-test-generator tool, you need to install the necessary dependencies in your project directory using npm:

```
npm install
``` 
This command will install all the required packages listed in your package.json file.

# Configuration
Before running the tool, create and configure a config.json file in the root directory of your project. Here is an example configuration:
``` javascript

{
  "sourcePath": "src/components", // Path to the source files to be tested
  "outputPath": "tests"           // Path where the generated unit tests will be output
}
``` 

- sourcePath: The path to the source files for which unit tests need to be generated.
- outputPath: The path where the automatically generated unit test files will be placed.

# Usage
Once configured, run the following command to generate unit tests:
``` 
npm run start
``` 

# Contribution
We welcome issues and pull requests to help improve ai-test-generator.

# License
This project is licensed under the MIT License.