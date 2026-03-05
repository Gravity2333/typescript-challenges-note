const fs = require('fs');
const path = require('path');

/**
 * 递归扫描目录
 */
function scanDir(dir, basePath = '') {
  // 仅在根层级时指定扫描 src
  const targetDir = basePath === '' ? path.join(dir, 'src') : dir;
  
  if (!fs.existsSync(targetDir)) {
    console.error(`错误: 找不到目录 ${targetDir}`);
    return [];
  }

  const items = fs.readdirSync(targetDir, { withFileTypes: true });
  const result = [];

  // 排序：目录在前，文件在后
  items.sort((a, b) => (b.isDirectory() - a.isDirectory()));

  items.forEach(item => {
    if (item.name.startsWith('.') || item.name === 'node_modules') return;

    const fullPath = path.join(targetDir, item.name);
    // 链接路径始终保留 src/ 前缀，确保在根目录的 md 中能点开
    const relativePath = path.join(basePath || 'src', item.name);

    if (item.isDirectory()) {
      const children = scanDir(fullPath, relativePath);
      if (children.length > 0) {
        result.push({ name: item.name, path: relativePath, children });
      }
    } else {
      if (item.name.endsWith('.ts') || item.name.endsWith('.tsx') || item.name.endsWith('.md')) {
        result.push({ name: item.name, path: relativePath });
      }
    }
  });

  return result;
}

/**
 * 美化 Markdown 生成
 */
function generateMarkdown(list, level = 0) {
  let md = '';
  const indent = '  '.repeat(level);
  
  list.forEach(item => {
    if (item.children) {
      // 目录使用文件夹图标
      md += `${indent}- 📂 **${item.name}**\n`;
      md += generateMarkdown(item.children, level + 1);
    } else {
      // 文件使用文件图标，并处理 URL 编码
      const urlPath = item.path.split(path.sep).join('/');
      md += `${indent}- 📄 [${item.name}](${encodeURI(urlPath)})\n`;
    }
  });
  return md;
}

// --- 执行脚本 ---

const outputFileName = 'README_Directory.md'; // 输出到当前根目录
const header = `# 🧩 Type Challenge 刷题笔记\n\n> 自动生成于：${new Date().toLocaleString()}\n\n---\n\n`;

const dirTree = scanDir('.');
const markdownContent = header + generateMarkdown(dirTree);

fs.writeFileSync(path.join(__dirname, outputFileName), markdownContent, 'utf-8');

console.log(`✅ 成功！目录已生成至: ${outputFileName}`);