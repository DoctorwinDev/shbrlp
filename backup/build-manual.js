const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando build manual do Next.js...');

try {
  // Verificar se o Next.js está instalado
  const nextPath = path.join(__dirname, 'node_modules', 'next');
  if (!fs.existsSync(nextPath)) {
    console.error('❌ Next.js não encontrado. Instalando...');
    execSync('npm install next@14.0.4', { stdio: 'inherit' });
  }

  // Tentar executar o build usando node diretamente
  const nextBinPath = path.join(nextPath, 'dist', 'bin', 'next');
  if (fs.existsSync(nextBinPath)) {
    console.log('✅ Executando build...');
    execSync(`node ${nextBinPath} build`, { stdio: 'inherit' });
  } else {
    console.log('⚠️  Executável do Next.js não encontrado, tentando npx...');
    execSync('npx next@14.0.4 build', { stdio: 'inherit' });
  }

  console.log('🎉 Build concluído com sucesso!');
} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  
  // Tentar build alternativo
  console.log('🔄 Tentando build alternativo...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('🎉 Build alternativo concluído!');
  } catch (altError) {
    console.error('❌ Build alternativo falhou:', altError.message);
    process.exit(1);
  }
} 