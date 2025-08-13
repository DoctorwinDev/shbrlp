// Teste de Responsividade para ShakiraBR
// Este script testa diferentes breakpoints e identifica problemas de layout

const breakpoints = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
  large: { width: 1920, height: 1080 }
};

const sections = [
  'hero',
  'security',
  'privacy', 
  'telegram',
  'onlyfans',
  'videochamada',
  'depoimentos',
  'galeria',
  'faq',
  'cta'
];

console.log('🔍 Iniciando teste de responsividade...');

// Função para verificar se uma seção está visível
function checkSectionVisibility(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.warn(`⚠️ Seção ${sectionId} não encontrada`);
    return false;
  }
  
  const rect = section.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
  return {
    exists: true,
    visible: isVisible,
    height: rect.height,
    width: rect.width,
    top: rect.top,
    bottom: rect.bottom
  };
}

// Função para verificar overflow horizontal
function checkHorizontalOverflow() {
  const body = document.body;
  const html = document.documentElement;
  
  const bodyOverflow = body.scrollWidth > body.clientWidth;
  const htmlOverflow = html.scrollWidth > html.clientWidth;
  
  return {
    bodyOverflow,
    htmlOverflow,
    bodyScrollWidth: body.scrollWidth,
    bodyClientWidth: body.clientWidth,
    htmlScrollWidth: html.scrollWidth,
    htmlClientWidth: html.clientWidth
  };
}

// Função para verificar elementos quebrados
function checkBrokenElements() {
  const issues = [];
  
  // Verificar imagens quebradas
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.complete || img.naturalWidth === 0) {
      issues.push(`Imagem quebrada: ${img.src || `img[${index}]`}`);
    }
  });
  
  // Verificar elementos com overflow
  const elements = document.querySelectorAll('*');
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement?.getBoundingClientRect();
    
    if (parentRect && (rect.right > parentRect.right || rect.left < parentRect.left)) {
      issues.push(`Overflow detectado: ${el.tagName}${el.className ? '.' + el.className.split(' ')[0] : ''}`);
    }
  });
  
  return issues;
}

// Função principal de teste
function runResponsiveTest() {
  console.log('📱 Testando responsividade...');
  
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  
  console.log(`📐 Viewport atual: ${viewport.width}x${viewport.height}`);
  
  // Verificar overflow horizontal
  const overflow = checkHorizontalOverflow();
  if (overflow.bodyOverflow || overflow.htmlOverflow) {
    console.error('❌ OVERFLOW HORIZONTAL DETECTADO!');
    console.log('Detalhes do overflow:', overflow);
  } else {
    console.log('✅ Sem overflow horizontal');
  }
  
  // Verificar seções
  console.log('\n📋 Verificando seções:');
  sections.forEach(sectionId => {
    const status = checkSectionVisibility(sectionId);
    if (status.exists) {
      console.log(`${status.visible ? '✅' : '⚠️'} ${sectionId}: ${status.height}px de altura`);
    }
  });
  
  // Verificar elementos quebrados
  const brokenElements = checkBrokenElements();
  if (brokenElements.length > 0) {
    console.error('\n❌ Elementos com problemas:');
    brokenElements.forEach(issue => console.log(`  - ${issue}`));
  } else {
    console.log('\n✅ Nenhum elemento quebrado detectado');
  }
  
  // Verificar CSS responsivo
  const mediaQueries = [
    { name: 'Mobile', query: '(max-width: 767px)' },
    { name: 'Tablet', query: '(min-width: 768px) and (max-width: 1023px)' },
    { name: 'Desktop', query: '(min-width: 1024px)' }
  ];
  
  console.log('\n📱 Media Queries ativas:');
  mediaQueries.forEach(mq => {
    const isActive = window.matchMedia(mq.query).matches;
    console.log(`${isActive ? '✅' : '❌'} ${mq.name}: ${mq.query}`);
  });
}

// Executar teste quando a página carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runResponsiveTest);
} else {
  runResponsiveTest();
}

// Executar teste quando a janela for redimensionada
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(runResponsiveTest, 250);
});

// Exportar funções para uso externo
window.responsiveTest = {
  run: runResponsiveTest,
  checkSectionVisibility,
  checkHorizontalOverflow,
  checkBrokenElements
};

console.log('🚀 Teste de responsividade carregado. Use window.responsiveTest.run() para executar manualmente.');
