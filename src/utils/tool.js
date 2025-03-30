import fs from "fs";
import path from "path";

const configPath = path.resolve("config.json");

// 获取待测试文件路径
export function getSourcePath() {
    if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
        return path.resolve(config.sourcePath);
    }
    throw new Error("Config file not found. Please provide a valid sourcePath.");
}

// 获取输出文件路径
export function getOutputPath() {
    if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
        return path.resolve(config.outputPath);
    }
    throw new Error("Config file not found. Please provide a valid outputPath.");
}