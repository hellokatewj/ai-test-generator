import { getAIResponse } from './utils/aiClient.js';

export async function generateFunctionTest(functionCode) {
    const prompt = `
    下面是JavaScript函数或者react组件的文件代码：
    ${functionCode}

    请为以上代码生成 Jest 测试用例，要求：
    - 测试多个输入情况
    - 覆盖边界情况
    - 以 TypeScript 格式返回
    - 仅返回测试用例代码，不要包含任何其他内容，不要以markdown格式输出

    `;
    return getAIResponse(prompt);
}
