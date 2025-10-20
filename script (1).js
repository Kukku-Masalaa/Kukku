const links = {
  '50gm': {
    amazon: 'https://amzn.in/d/fkg0i8F',
    meesho: 'https://www.meesho.com/s/p/9towc8?utm_source=s_wb',
    flipkart: 'https://www.flipkart.com/product/50gm',
    jiomart: 'https://www.jiomart.com/product/50gm',
    snapdeal: 'https://www.snapdeal.com/product/50gm'
  },
  '100gm': {
    amazon: 'https://amzn.in/d/fkg0i8F',
    meesho: 'https://www.meesho.com/s/p/9towc8?utm_source=s_wb',
    flipkart: 'https://www.flipkart.com/product/100gm',
    jiomart: 'https://www.jiomart.com/product/100gm',
    snapdeal: 'https://www.snapdeal.com/product/100gm'
  },
  '150gm': {
    amazon: 'https://amzn.in/d/fkg0i8F',
    meesho: 'https://www.meesho.com/s/p/9towc8?utm_source=s_wb',
    flipkart: 'https://www.flipkart.com/product/150gm',
    jiomart: 'https://www.jiomart.com/product/150gm',
    snapdeal: 'https://www.snapdeal.com/product/150gm'
  },
  '250gm': {
    amazon: 'https://amzn.in/d/fkg0i8F',
    meesho: 'https://www.meesho.com/s/p/9towc8?utm_source=s_wb',
    flipkart: 'https://www.flipkart.com/product/250gm',
    jiomart: 'https://www.jiomart.com/product/250gm',
    snapdeal: 'https://www.snapdeal.com/product/250gm'
  }
};

let selectedWeight = null;

function updateSelection(radio) {
  selectedWeight = radio.value;
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  radio.closest('label').classList.add('selected');
  document.querySelectorAll('.platform-button').forEach(btn => {
    btn.classList.remove('disabled');
    btn.disabled = false;
  });
}

function openPlatformLink(platform) {
  if (selectedWeight && links[selectedWeight][platform]) {
    window.open(links[selectedWeight][platform], '_blank');
  }
}