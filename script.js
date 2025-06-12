document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('solutions-btn');
    const dropdown = document.getElementById('solutions-dropdown');

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('show');
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});

// --- Client Logo Carousel Logic ---

// List all subfolders and image filenames from your client-logo folder
const clientLogoFolders = [
  'assets/HTML Photos/home-images/Client logo/Education',
  'assets/HTML Photos/home-images/Client logo/Enterprise',
  'assets/HTML Photos/home-images/Client logo/Hospitals',
  'assets/HTML Photos/home-images/Client logo/Hotel',
  'assets/HTML Photos/home-images/Client logo/ISP',
  'assets/HTML Photos/home-images/Client logo/Public wifi',
  // Add more folders as needed
];

// List all image filenames for each folder (update with your actual files)
const clientLogoImages = [
  ['image 2312.png', 'image 2313.png','image 2314.png','image 2315.png','image 2316.png','image 2317.png'], // folder1
  ['image 2323.png','image 2324.png','image 2325.png','image 2326.png','image 2327.png'],              // folder2
  ['image 2318.png', 'image 2319.png','image 2320.png','image 2321.png','image 2322.png'],
    ['image 2304.png', 'image 2305.png','image 2306.png','image 2307.png','image 2308.png','image 2309.png'],
    ['image 2296.png', 'image 2297.png','image 2298.png','image 2299.png','image 2301.png','image 2303.png'],
     ['image 2310.png', 'image 2311.png'],
     // folder4
   // folder3
  // Add more arrays as needed
];

// Flatten all image paths into one array
const logoFiles = [];
clientLogoFolders.forEach((folder, idx) => {
  clientLogoImages[idx].forEach(filename => {
    logoFiles.push(`${folder}/${filename}`);
  });
});

const carousel = document.getElementById('client-carousel');
let startIdx = 0;
const visibleCount = 4; // Number of logos visible at once

function renderCarousel() {
  if (!carousel) return;
  carousel.innerHTML = '';
  for (let i = 0; i < visibleCount; i++) {
    const idx = (startIdx + i) % logoFiles.length;
    const img = document.createElement('img');
    img.src = logoFiles[idx];
    img.alt = 'Client Logo';
    carousel.appendChild(img);
  }
}

// Auto-looping carousel (no buttons)
function startAutoCarousel() {
  setInterval(() => {
    startIdx = (startIdx + 1) % logoFiles.length;
    renderCarousel();
  }, 500); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  renderCarousel();
  startAutoCarousel();
});

// --- 3rd Party Logo Carousel Logic ---

// List all image filenames from your 3rd party logo folder
const thirdPartyLogoFolder = 'assets/HTML Photos/home-images/3rd party logo/compresspng (1)/';
const thirdPartyLogoImages = [
  'Frame 48096573.png',
  'Frame 48096574.png',
  'Frame 48096575.png',
  'Frame 48096576.png',
  'Frame 48096577-min.png',
  'Frame 48096578-min.png',
  'Frame 48096579.png',
  'Frame 48096581-min.png',
  'Frame 48096582-min.png',
  'Frame 48096583.png',
  'Frame 48096584.png',
  'Frame 48096585-min.png',
  'Frame 48096586-min.png',
  'Frame 48096587.png',
  'Frame 48096588-min.png',
  'Frame 48096589-min.png',
  'Frame 48096590.png',
  'Frame 48096592-min.png',
  'Frame 48096593.png',
  'Frame 48096594-min.png',
  'Frame 48096594.png',
  'Frame 48096595.png',
  // Add all your 3rd party logo filenames here
];

const thirdPartyLogoFiles = thirdPartyLogoImages.map(filename => `${thirdPartyLogoFolder}${filename}`);

const thirdPartyCarousel = document.getElementById('third-party-carousel');
let thirdPartyStartIdx = 0;
const thirdPartyVisibleCount = 6; // Number of logos visible at once

function renderThirdPartyCarousel() {
  if (!thirdPartyCarousel) return;
  thirdPartyCarousel.innerHTML = '';
  for (let i = 0; i < thirdPartyVisibleCount; i++) {
    const idx = (thirdPartyStartIdx + i) % thirdPartyLogoFiles.length;
    const img = document.createElement('img');
    img.src = thirdPartyLogoFiles[idx];
    img.alt = '3rd Party Logo';
    thirdPartyCarousel.appendChild(img);
  }
}

// Auto-looping carousel (no buttons), same as client logo carousel
function startThirdPartyAutoCarousel() {
  setInterval(() => {
    thirdPartyStartIdx = (thirdPartyStartIdx + 1) % thirdPartyLogoFiles.length;
    renderThirdPartyCarousel();
  }, 500); // Change image every 0.5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  renderThirdPartyCarousel();
  startThirdPartyAutoCarousel();
});