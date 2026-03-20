const PptxGenJS = require('pptxgenjs');
const fs = require('fs');

// 创建 PPT
let pptx = new PptxGenJS();

// 设置 PPT 属性
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'EdgeClaw 深度研究报告';
pptx.author = '帆秘书 AI 工作室';
pptx.company = '帆秘书 AI 工作室';

// 主题色
const colors = {
    primary: '1E3A8A',    // 深蓝色
    secondary: '3B82F6',  // 浅蓝色
    accent: 'F59E0B',     // 橙色
    success: '10B981',    // 绿色
    text: '333333',
    light: 'F9FAFB'
};

// ========== 第 1 页：封面 ==========
let slide1 = pptx.addSlide();
slide1.background = { color: 'F0F9FF' };
slide1.addText('EdgeClaw 深度研究报告', {
    x: 1, y: 2.5, w: '80%', h: 1,
    fontSize: 44, color: colors.primary, bold: true, align: 'center'
});
slide1.addText('—— 对省级水利勘测设计院的指导意义', {
    x: 1, y: 3.5, w: '80%', h: 0.6,
    fontSize: 24, color: '666666', align: 'center'
});
slide1.addText('编制单位：帆秘书 AI 工作室\n编制时间：2026 年 3 月 19 日\n版本号：V1.0', {
    x: 1, y: 5, w: '80%', h: 1,
    fontSize: 16, color: '999999', align: 'center', lineSpacing: 30
});

// ========== 第 2 页：执行摘要 ==========
let slide2 = pptx.addSlide();
slide2.addText('执行摘要', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

// 核心结论
slide2.addText('核心结论：', {
    x: 0.5, y: 1.2, w: 4, h: 0.4,
    fontSize: 18, color: colors.text, bold: true
});
let conclusions = [
    '✅ 端云协同是水利 AI 必然选择',
    '✅ 5 年节省 3100 万成本',
    '✅ 投资回收期 6 个月',
    '✅ 效率提升 6-18 倍'
];
slide2.addText(conclusions.join('\n'), {
    x: 0.5, y: 1.7, w: 5, h: 2,
    fontSize: 16, color: colors.text, lineSpacing: 25
});

// 三大核心价值
slide2.addText('三大核心价值：', {
    x: 5.5, y: 1.2, w: 4, h: 0.4,
    fontSize: 18, color: colors.text, bold: true
});
let values = [
    '🔒 安全可控\n涉密数据 100% 本地处理',
    '💰 成本优化\nToken 成本降低 98%',
    '🚀 能力提升\n云端大模型兜底'
];
slide2.addText(values.join('\n\n'), {
    x: 5.5, y: 1.7, w: 4, h: 2.5,
    fontSize: 14, color: colors.text, lineSpacing: 20
});

// ========== 第 3 页：技术架构 ==========
let slide3 = pptx.addSlide();
slide3.addText('EdgeClaw 技术架构', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

// 架构图
let archText = `用户任务 → 隐私路由 (GuardAgent) → 智能分流
                   │
         ┌─────────┼─────────┐
         ▼         ▼         ▼
      S1 公开   S2 敏感   S3 绝密
      云端模型   脱敏上云   本地处理
      (最强能力) (平衡方案)  (绝对安全)

本地引擎：MiniCPM 系列
- 文本清洗、格式转换、信息抽取
- 零 Token 消耗、断网可用

双轨记忆机制：
- 云端：只能看到脱敏后的对话历史
- 本地：完整记忆 (含敏感信息)`;

slide3.addText(archText, {
    x: 0.5, y: 1.2, w: '90%', h: 4,
    fontSize: 14, color: colors.text, fontFace: 'Courier New',
    fill: { color: 'F5F5F5' }, valign: 'top'
});

// ========== 第 4 页：隐私路由协议 ==========
let slide4 = pptx.addSlide();
slide4.addText('隐私路由协议（S1/S2/S3）', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

// 表格
let tableData = [
    ['等级', '数据类型', '处理方式', '水利场景示例'],
    ['S1 公开', '不涉及隐私', '直接调用云端', '气象预报、规范检索'],
    ['S2 敏感', '需保护但非绝密', '自动脱敏上云', '项目名称→代号'],
    ['S3 绝密', '核心商业/国家机密', '强制本地处理', '大坝参数、涉密工程']
];

slide4.addTable(tableData, {
    x: 0.5, y: 1.2, w: '90%', h: 3,
    fontSize: 14, color: colors.text,
    fill: { color: 'FFFFFF' },
    border: { pt: 1, color: 'CCCCCC' },
    colW: [1.5, 2.5, 2.5, 3]
});

// ========== 第 5 页：性能对比 ==========
let slide5 = pptx.addSlide();
slide5.addText('性能与成本对比', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

let compareData = [
    ['指标', '纯云端', 'EdgeClaw', '改善'],
    ['Token 成本', '100% 上云', '2% 上云', '↓98%'],
    ['响应速度', '依赖网络', '本地即时', '↑5-10 倍'],
    ['断网可用', '❌ 不可用', '✅ 可用', '100% 可用'],
    ['数据泄露风险', '高', '极低', '↓95%+'],
    ['复杂任务能力', '强', '强 (云端兜底)', '持平']
];

slide5.addTable(compareData, {
    x: 0.5, y: 1.2, w: '90%', h: 3.5,
    fontSize: 14, color: colors.text,
    fill: { color: 'FFFFFF' },
    border: { pt: 1, color: 'CCCCCC' }
});

// ========== 第 6 页：应用场景 ==========
let slide6 = pptx.addSlide();
slide6.addText('应用场景与效率提升', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

let scenarios = [
    '📝 勘测报告智能编写\n3-5 天 → 0.5 天\n效率提升 6-10 倍',
    '🏗️ 大坝安全监测预警\n30 分钟 → 1 分钟\n效率提升 30 倍',
    '📐 设计图纸智能校审\n2-3 天 → 2 小时\n效率提升 12-18 倍',
    '📁 项目文档智能管理\n30 分钟 → 30 秒\n效率提升 60 倍'
];

for (let i = 0; i < 4; i++) {
    let col = (i % 2) * 4.5;
    let row = 1.2 + Math.floor(i / 2) * 2;
    slide6.addText(scenarios[i], {
        x: col + 0.5, y: row, w: 4, h: 1.8,
        fontSize: 14, color: colors.text,
        fill: { color: i < 2 ? 'EFF6FF' : 'FEF3C7' },
        valign: 'middle', align: 'center'
    });
}

// ========== 第 7 页：成本效益 ==========
let slide7 = pptx.addSlide();
slide7.addText('成本效益分析', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

let costData = [
    ['方案', '初期投入', '年运营成本', '5 年 TCO'],
    ['纯本地 AI', '500 万', '100 万', '1000 万'],
    ['纯云端 AI', '50 万', '800 万', '4050 万'],
    ['EdgeClaw', '200 万', '150 万', '950 万']
];

slide7.addTable(costData, {
    x: 0.5, y: 1.2, w: '90%', h: 2,
    fontSize: 16, color: colors.text,
    fill: { color: 'FFFFFF' },
    border: { pt: 1, color: 'CCCCCC' }
});

slide7.addText('5 年节省 3100 万！', {
    x: 0.5, y: 3.5, w: '90%', h: 0.8,
    fontSize: 36, color: 'DC2626', bold: true, align: 'center',
    fill: { color: 'FEF3C7' }
});

slide7.addText('投资回收期：6 个月', {
    x: 0.5, y: 4.5, w: '90%', h: 0.6,
    fontSize: 24, color: colors.success, bold: true, align: 'center'
});

// ========== 第 8 页：实施路径 ==========
let slide8 = pptx.addSlide();
slide8.addText('实施路径 - 三阶段规划', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

let phases = [
    '第一阶段（1-3 月）\n试点验证\n• 环境搭建\n• 数据分级\n• 场景试点\n• 效果评估',
    '第二阶段（4-9 月）\n规模推广\n• 能力扩展\n• 模型优化\n• 流程重构\n• 人员培训',
    '第三阶段（10-18 月）\n生态构建\n• 知识沉淀\n• 标准制定\n• 生态合作\n• 输出能力'
];

for (let i = 0; i < 3; i++) {
    slide8.addText(phases[i], {
        x: 0.5 + i * 3, y: 1.2, w: 2.8, h: 3.5,
        fontSize: 14, color: colors.text,
        fill: { color: i === 0 ? 'DBEAFE' : i === 1 ? 'D1FAE5' : 'FEF3C7' },
        valign: 'top'
    });
}

// ========== 第 9 页：风险与应对 ==========
let slide9 = pptx.addSlide();
slide9.addText('风险与应对', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

let riskData = [
    ['风险', '应对措施'],
    ['技术风险\n本地模型能力不足', '选择 MiniCPM 等成熟模型，云端兜底'],
    ['安全风险\n脱敏不彻底', '多层脱敏 + 人工审核 + 审计日志'],
    ['合规风险\n不符合保密要求', '等保 2.0 认证 + 保密局备案'],
    ['人才风险\n缺乏 AI 人才', '外部引进 + 内部培训 + 厂商支持'],
    ['成本风险\n初期投入大', '分阶段实施 + 申请数字化专项资金']
];

slide9.addTable(riskData, {
    x: 0.5, y: 1.2, w: '90%', h: 3.5,
    fontSize: 13, color: colors.text,
    fill: { color: 'FFFFFF' },
    border: { pt: 1, color: 'CCCCCC' },
    colW: [3, 6]
});

// ========== 第 10 页：核心结论 ==========
let slide10 = pptx.addSlide();
slide10.addText('核心结论与建议', {
    x: 0.5, y: 0.3, w: '90%', h: 0.6,
    fontSize: 32, color: colors.primary, bold: true
});

slide10.addText('三大核心价值：', {
    x: 0.5, y: 1.2, w: 4, h: 0.4,
    fontSize: 18, color: colors.text, bold: true
});

let coreValues = [
    '🔒 安全可控\n涉密数据 100% 本地处理\n符合等保 2.0、保密法',
    '💰 成本优化\n98% 任务本地完成\nToken 成本降低 98%',
    '🚀 能力提升\n云端大模型兜底\n复杂任务能力不打折'
];

for (let i = 0; i < 3; i++) {
    slide10.addText(coreValues[i], {
        x: 0.5 + i * 3, y: 1.7, w: 2.8, h: 2.5,
        fontSize: 14, color: colors.text,
        fill: { color: 'EFF6FF' },
        valign: 'top', align: 'center'
    });
}

// 核心建议
slide10.addText('核心建议：', {
    x: 0.5, y: 4.5, w: 2, h: 0.4,
    fontSize: 18, color: 'DC2626', bold: true
});

slide10.addText('不要等、不要看、不要犹豫\n端云协同是水利 AI 的必然选择\n早部署早受益，6 个月收回投资\n错过这波，可能落后 3-5 年', {
    x: 0.5, y: 5, w: 9, h: 1,
    fontSize: 16, color: 'DC2626', bold: true, align: 'center', lineSpacing: 22
});

// ========== 第 11 页：封底 ==========
let slide11 = pptx.addSlide();
slide11.background = { color: 'F0F9FF' };
slide11.addText('谢谢聆听！', {
    x: 1, y: 2, w: '80%', h: 1,
    fontSize: 44, color: colors.primary, bold: true, align: 'center'
});
slide11.addText('EdgeClaw 深度研究报告\n\n编制单位：帆秘书 AI 工作室\n日期：2026 年 3 月 19 日\n版本：V1.0\n\n联系方式：飞书私信', {
    x: 1, y: 3.5, w: '80%', h: 2,
    fontSize: 16, color: '666666', align: 'center', lineSpacing: 25
});

// 保存 PPT
pptx.writeFile({ fileName: 'EdgeClaw 深度研究报告_对省级水利勘测设计院的指导意义.pptx' })
    .then(fileName => {
        console.log('PPT 生成成功:', fileName);
    })
    .catch(err => {
        console.error('PPT 生成失败:', err);
    });
