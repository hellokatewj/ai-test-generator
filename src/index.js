import fs from "fs";
import { generateFunctionTest } from "./testGen.js";
import {getSourcePath, getOutputPath} from './utils/tool.js'
import path from "path";


async function generateTests(filePath, outputPath, componentCode) {
    let fileName = path.basename(filePath);
    let ext = path.extname(filePath);
    if (!ext) {
        fileName += ".js";
        ext = ".js";
    }
    const testFilePath = path.join(outputPath, fileName.replace(ext, ".test.ts"));
    console.log(testFilePath);
    // 生成测试代码
    const testCode = await generateFunctionTest(componentCode);
    // 创建目录（如果不存在）并确认可以递归创建
    fs.mkdirSync(outputPath, { recursive: true });
    // 写入文件
    fs.writeFileSync(testFilePath, testCode);
    console.log(`✅ 测试文件已生成：${testFilePath}`);
}

function handleFile(filePath, outputPath) {
    const componentCode = fs.readFileSync(filePath, "utf-8");
    generateTests(filePath, outputPath, componentCode);
}

function handleFolder(folderPath, outputPath) {
    const files = fs.readdirSync(folderPath);
    let componentCode = "";
    files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        const fileCode = fs.readFileSync(filePath, "utf-8");
        componentCode += '文件路径:' + filePath + '\n';
        componentCode += '文件代码:' + fileCode + '\n';
    });
    generateTests(folderPath, outputPath, componentCode);

}

function main() {
    const sourcePath = getSourcePath();  // 这里可以是单个文件 "./src/index.js" 或文件夹 "./src"
    const outputPath = getOutputPath();  // 生成的测试文件放在 output 目录
    if (fs.existsSync(sourcePath) && fs.statSync(sourcePath).isFile()) {
        // 处理单个文件
        handleFile(sourcePath, outputPath);
    } else if (fs.existsSync(sourcePath) && fs.statSync(sourcePath).isDirectory()) {
        // 处理整个文件夹
        handleFolder(sourcePath, outputPath);
    } else {
        console.error(`❌ 无效路径: ${sourcePath}`);
    }
}

main();