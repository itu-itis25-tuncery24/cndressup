/* ============================================
   CANAN DRESS-UP GAME — SCRIPT
   ============================================ */

// ──────────────────────────────────────────────
// CONFIGURATION
// Canva'dan export ettiğin dosyaları assets/ klasörüne koy.
// Her PNG 1024×1536 px, transparent background olmalı.
//
// Eğer bir kıyafet biraz kayıyorsa offsetX / offsetY / scale ile
// ince ayar yapabilirsin.
// ──────────────────────────────────────────────

const ASSETS = "assets/";

// Karakter gövdesi — 4 versiyon
// Üst/alt giyili olup olmadığına göre otomatik değişir
const BODY_VARIANTS = {
    full:        ASSETS + "body_full.png",        // ikisi de uzun (hiçbir şey giyili değil)
    top_long:    ASSETS + "body_top_long.png",    // sadece üst uzun (alt giyili)
    bottom_long: ASSETS + "body_bottom_long.png", // sadece alt uzun (üst giyili)
    short:       ASSETS + "body_short.png"         // ikisi de kısa (ikisi de giyili)
};

// Kıyafet kategorileri
const CATEGORIES = {

    top: {
        label: "Üst",
        layer: "layer-top",
        items: [
            { name: "Çiçekli Bebe Yaka", file: "top01.png", thumb: "top01_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Hardal Sarısı Üst", file: "top02.png", thumb: "top02_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Pembe Fitilli Kazak", file: "top03.png", thumb: "top03_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Lacivert Dantel Yaka", file: "top04.png", thumb: "top04_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Açık Mavi Gömlek", file: "top05.png", thumb: "top05_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Kırmızı Pötikare", file: "top06.png", thumb: "top06_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Lavanta Balon Kol", file: "top07.png", thumb: "top07_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Nane Yeşili Üst", file: "top08.png", thumb: "top08_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Zümrüt V Yaka", file: "top09.png", thumb: "top09_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Bej Kruvaze Bluz", file: "top10.png", thumb: "top10_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Pembe Çizgili Gömlek", file: "top11.png", thumb: "top11_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Yeşil Fitilli V Yaka Bluz", file: "top12.png", thumb: "top12_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Siyah Tişört", file: "top13.png", thumb: "top13_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Beyaz Tişört", file: "top14.png", thumb: "top14_thumb.png", offsetX: 0, offsetY: 0, scale: 1 }
        ]
    },
    bottom: {
        label: "Alt",
        layer: "layer-bottom",
        items: [
            { name: "Mavi Düz Jean", file: "bottom01.png", thumb: "bottom01_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Açık Yıkama Jean", file: "bottom02.png", thumb: "bottom02_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Siyah Kumaş Pantolon", file: "bottom03.png", thumb: "bottom03_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Bej Palazzo Pantolon", file: "bottom04.png", thumb: "bottom04_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Lacivert Pliseli Etek", file: "bottom05.png", thumb: "bottom05_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Kot Mini Etek", file: "bottom06.png", thumb: "bottom06_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Pembe Çiçekli Etek", file: "bottom07.png", thumb: "bottom07_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Haki Kargo Pantolon", file: "bottom08.png", thumb: "bottom08_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Kırmızı Ekoseli Etek", file: "bottom09.png", thumb: "bottom09_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Beyaz Keten Pantolon", file: "bottom10.png", thumb: "bottom10_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Bej Düğmeli Etek", file: "bottom11.png", thumb: "bottom11_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Beyaz Tenis Eteği", file: "bottom12.png", thumb: "bottom12_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Siyah Simli Pileli Etek", file: "bottom13.png", thumb: "bottom13_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Ekstra Uzun Beyaz Etek", file: "bottom14.png", thumb: "bottom14_thumb.png", offsetX: 0, offsetY: 0, scale: 1 }
        ]
    },
    belt: {
        label: "Kemer",
        layer: "layer-belt",
        items: [
            { name: "Siyah Deri Kemer", file: "belt01.png", thumb: "belt01_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Kahverengi Deri Kemer", file: "belt02.png", thumb: "belt02_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Beyaz Kemer", file: "belt03.png", thumb: "belt03_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Altın Yıldızlı Büyük Kemer", file: "belt04.png", thumb: "belt04_thumb.png", offsetX: 0, offsetY: 0, scale: 1 }
        ]
    },
    shoes: {
        label: "Ayakkabı",
        layer: "layer-shoes",
        items: [
            { name: "Beyaz Sneaker", file: "shoes01.png", thumb: "shoes01_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Pembe Chunky Sneaker", file: "shoes02.png", thumb: "shoes02_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Bordo Topuklu", file: "shoes03.png", thumb: "shoes03_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Bej Blok Topuklu", file: "shoes04.png", thumb: "shoes04_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Siyah Diz Üstü Çizme", file: "shoes05.png", thumb: "shoes05_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Kahverengi Süet Bot", file: "shoes06.png", thumb: "shoes06_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Pembe Mary Jane Babet", file: "shoes07.png", thumb: "shoes07_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Kırmızı Retro Topuklu", file: "shoes08.png", thumb: "shoes08_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Krem Platform Bot", file: "shoes09.png", thumb: "shoes09_thumb.png", offsetX: 0, offsetY: 0, scale: 1 },
            { name: "Altın Bantlı Sandalet", file: "shoes10.png", thumb: "shoes10_thumb.png", offsetX: 0, offsetY: 0, scale: 1 }
        ]
    },
    necklace: {
        label: "Kolye",
        layer: "layer-necklace",
        items: [
            { name: "Mavi Kelebek Kolye", file: "necklace01.png", thumb: "necklace01_thumb.png" },
            { name: "Zarif Kuğu Kolye", file: "necklace02.png", thumb: "necklace02_thumb.png" },
            { name: "Nilüfer Çiçeği Kolye", file: "necklace03.png", thumb: "necklace03_thumb.png" },
            { name: "Tek Kutup Yıldızı Kolye", file: "necklace04.png", thumb: "necklace04_thumb.png" },
            { name: "Çok Yıldızlı Şans Kolye", file: "necklace05.png", thumb: "necklace05_thumb.png" },
            { name: "Papatya Çiçek Kolye", file: "necklace06.png", thumb: "necklace06_thumb.png" },
            { name: "Hilal & İnci Kolye", file: "necklace07.png", thumb: "necklace07_thumb.png" },
            { name: "Romantik Kalp Kolye", file: "necklace08.png", thumb: "necklace08_thumb.png" },
            { name: "Kiraz Çiçeği Kolye", file: "necklace09.png", thumb: "necklace09_thumb.png" },
            { name: "Güneş Işıltısı Kolye", file: "necklace10.png", thumb: "necklace10_thumb.png" }
        ]
    },
    bracelet: {
        label: "Bileklik",
        items: [
            { name: "Mavi Kelebek Bileklik", file_left: "bracelet01_left.png", file_right: "bracelet01_right.png", thumb: "bracelet01_thumb.png" },
            { name: "Zarif Kuğu Bileklik", file_left: "bracelet02_left.png", file_right: "bracelet02_right.png", thumb: "bracelet02_thumb.png" },
            { name: "Nilüfer Çiçeği Bileklik", file_left: "bracelet03_left.png", file_right: "bracelet03_right.png", thumb: "bracelet03_thumb.png" },
            { name: "Tek Kutup Yıldızı Bileklik", file_left: "bracelet04_left.png", file_right: "bracelet04_right.png", thumb: "bracelet04_thumb.png" },
            { name: "Çok Yıldızlı Şans Bileklik", file_left: "bracelet05_left.png", file_right: "bracelet05_right.png", thumb: "bracelet05_thumb.png" },
            { name: "Papatya Çiçek Bileklik", file_left: "bracelet06_left.png", file_right: "bracelet06_right.png", thumb: "bracelet06_thumb.png" },
            { name: "Hilal & İnci Bileklik", file_left: "bracelet07_left.png", file_right: "bracelet07_right.png", thumb: "bracelet07_thumb.png" },
            { name: "Romantik Kalp Bileklik", file_left: "bracelet08_left.png", file_right: "bracelet08_right.png", thumb: "bracelet08_thumb.png" },
            { name: "Kiraz Çiçeği Bileklik", file_left: "bracelet09_left.png", file_right: "bracelet09_right.png", thumb: "bracelet09_thumb.png" },
            { name: "Güneş Işıltısı Bileklik", file_left: "bracelet10_left.png", file_right: "bracelet10_right.png", thumb: "bracelet10_thumb.png" }
        ]
    }
};

// ──────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────

let currentCategory = "top";
let selectedItems = {
    top: null,
    bottom: null,
    belt: null,
    shoes: null,
    necklace: null,
    bracelet_left: null,
    bracelet_right: null
};
let activeWrist = "left"; // "left", "right", "both"
let scrollIndex = {
    top: 0,
    bottom: 0,
    belt: 0,
    shoes: 0,
    necklace: 0,
    bracelet: 0
};

// ──────────────────────────────────────────────
// DOM REFS
// ──────────────────────────────────────────────

const introScreen      = document.getElementById("intro-screen");
const gameScreen       = document.getElementById("game-screen");
const finalScreen      = document.getElementById("final-screen");

const btnStart         = document.getElementById("btn-start");
const btnReset         = document.getElementById("btn-reset");
const btnFinish        = document.getElementById("btn-finish");
const btnReplay        = document.getElementById("btn-replay");
const btnPrev          = document.getElementById("btn-prev");
const btnNext          = document.getElementById("btn-next");
const btnRemove        = document.getElementById("btn-remove");

const carousel         = document.getElementById("item-carousel");
const dotsContainer    = document.getElementById("item-dots");
const catTabs          = document.querySelectorAll(".cat-tab");
const wristSubselector = document.getElementById("wrist-subselector");
const wristBtns        = document.querySelectorAll(".wrist-btn");

const layerNecklace      = document.getElementById("layer-necklace");
const layerBraceletLeft  = document.getElementById("layer-bracelet-left");
const layerBraceletRight = document.getElementById("layer-bracelet-right");

// ──────────────────────────────────────────────
// WRIST SUBSELECTOR HANDLER
// ──────────────────────────────────────────────

wristBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        wristBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeWrist = btn.dataset.wrist;
        updateCarouselSelection();
    });
});

// ──────────────────────────────────────────────
// SCREEN TRANSITIONS
// ──────────────────────────────────────────────

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

// ──────────────────────────────────────────────
// INTRO → GAME
// ──────────────────────────────────────────────

btnStart.addEventListener("click", () => {
    showScreen(gameScreen);
    updateBody();
    renderCategory(currentCategory);
});

// ──────────────────────────────────────────────
// SMART BODY SYSTEM
// Üst/alt giyili durumuna göre body otomatik değişir
// ──────────────────────────────────────────────

function updateBody() {
    const bodyLayer = document.getElementById("layer-body");
    const hasTop = selectedItems.top !== null;
    const hasBottom = selectedItems.bottom !== null;

    let variant;
    if (hasTop && hasBottom) {
        variant = BODY_VARIANTS.short;        // ikisi de giyili → kısa body
    } else if (hasTop) {
        variant = BODY_VARIANTS.bottom_long;  // sadece üst giyili → alt uzun
    } else if (hasBottom) {
        variant = BODY_VARIANTS.top_long;     // sadece alt giyili → üst uzun
    } else {
        variant = BODY_VARIANTS.full;         // hiçbiri giyili değil → full
    }

    bodyLayer.src = variant;
    bodyLayer.style.display = "block";

    bodyLayer.onerror = () => {
        bodyLayer.style.display = "none";
        console.warn("Body görseli bulunamadı: " + variant);
    };
}

// ──────────────────────────────────────────────
// HELPER: IS ITEM SELECTED
// ──────────────────────────────────────────────

function isItemSelected(catKey, index) {
    if (catKey === "bracelet") {
        if (activeWrist === "left") return selectedItems.bracelet_left === index;
        if (activeWrist === "right") return selectedItems.bracelet_right === index;
        if (activeWrist === "both") return selectedItems.bracelet_left === index && selectedItems.bracelet_right === index;
    }
    return selectedItems[catKey] === index;
}

// ──────────────────────────────────────────────
// UPDATE SELECTION HIGHLIGHTS
// ──────────────────────────────────────────────

function updateCarouselSelection() {
    const cards = carousel.querySelectorAll(".item-card");
    cards.forEach((card, i) => {
        card.classList.toggle("selected", isItemSelected(currentCategory, i));
    });

    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", isItemSelected(currentCategory, i));
    });
}

// ──────────────────────────────────────────────
// RENDER CATEGORY ITEMS
// ──────────────────────────────────────────────

function renderCategory(catKey) {
    currentCategory = catKey;
    const cat = CATEGORIES[catKey];

    // Show/hide wrist selector
    if (wristSubselector) {
        wristSubselector.style.display = (catKey === "bracelet") ? "flex" : "none";
    }

    // Update tabs
    catTabs.forEach(tab => {
        tab.classList.toggle("active", tab.dataset.category === catKey);
    });

    // Build carousel
    carousel.innerHTML = "";
    cat.items.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "item-card";
        if (isItemSelected(catKey, index)) card.classList.add("selected");

        // Try to show thumbnail
        const img = document.createElement("img");
        img.src = ASSETS + (item.thumb || item.file);
        img.alt = item.name;
        img.loading = "lazy";

        // If image fails, show placeholder text
        img.onerror = () => {
            img.style.display = "none";
            const placeholder = document.createElement("span");
            placeholder.className = "item-placeholder";
            placeholder.textContent = index + 1;
            card.appendChild(placeholder);
        };

        card.appendChild(img);

        card.addEventListener("click", () => {
            selectItem(catKey, index);
        });

        carousel.appendChild(card);
    });

    // Build dots
    renderDots(catKey);

    // Scroll to remembered position
    const scrollPos = scrollIndex[catKey] || 0;
    carousel.scrollLeft = scrollPos;
}

function renderDots(catKey) {
    const cat = CATEGORIES[catKey];
    dotsContainer.innerHTML = "";

    cat.items.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.className = "dot";
        if (isItemSelected(catKey, index)) dot.classList.add("active");

        dot.addEventListener("click", () => {
            selectItem(catKey, index);
            const cards = carousel.querySelectorAll(".item-card");
            if (cards[index]) {
                cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        });

        dotsContainer.appendChild(dot);
    });
}

// ──────────────────────────────────────────────
// SELECT / APPLY ITEM
// ──────────────────────────────────────────────

function selectItem(catKey, index) {
    const cat = CATEGORIES[catKey];
    const item = cat.items[index];

    if (catKey === "bracelet") {
        if (activeWrist === "left") {
            if (selectedItems.bracelet_left === index) {
                selectedItems.bracelet_left = null;
                layerBraceletLeft.style.display = "none";
                layerBraceletLeft.src = "";
            } else {
                selectedItems.bracelet_left = index;
                layerBraceletLeft.src = ASSETS + item.file_left;
                layerBraceletLeft.style.display = "block";
            }
        } else if (activeWrist === "right") {
            if (selectedItems.bracelet_right === index) {
                selectedItems.bracelet_right = null;
                layerBraceletRight.style.display = "none";
                layerBraceletRight.src = "";
            } else {
                selectedItems.bracelet_right = index;
                layerBraceletRight.src = ASSETS + item.file_right;
                layerBraceletRight.style.display = "block";
            }
        } else if (activeWrist === "both") {
            if (selectedItems.bracelet_left === index && selectedItems.bracelet_right === index) {
                selectedItems.bracelet_left = null;
                selectedItems.bracelet_right = null;
                layerBraceletLeft.style.display = "none";
                layerBraceletRight.style.display = "none";
                layerBraceletLeft.src = "";
                layerBraceletRight.src = "";
            } else {
                selectedItems.bracelet_left = index;
                selectedItems.bracelet_right = index;
                layerBraceletLeft.src = ASSETS + item.file_left;
                layerBraceletRight.src = ASSETS + item.file_right;
                layerBraceletLeft.style.display = "block";
                layerBraceletRight.style.display = "block";
            }
        }
    } else {
        const layer = document.getElementById(cat.layer);
        if (selectedItems[catKey] === index) {
            selectedItems[catKey] = null;
            layer.style.display = "none";
            layer.src = "";
        } else {
            selectedItems[catKey] = index;
            layer.src = ASSETS + item.file;
            layer.style.display = "block";

            let transformParts = ["translate(-50%, -50%)"];
            if (item.offsetX || item.offsetY) {
                const xVal = typeof item.offsetX === 'string' ? item.offsetX : (item.offsetX || 0) + 'px';
                const yVal = typeof item.offsetY === 'string' ? item.offsetY : (item.offsetY || 0) + 'px';
                transformParts[0] = `translate(calc(-50% + ${xVal}), calc(-50% + ${yVal}))`;
            }
            if (item.scale && item.scale !== 1) {
                transformParts.push(`scale(${item.scale})`);
            }
            layer.style.transform = transformParts.join(" ");

            layer.onerror = () => {
                layer.style.display = "none";
                console.warn(`${item.file} bulunamadı.`);
            };
        }

        if (catKey === "top" || catKey === "bottom") {
            updateBody();
        }
    }

    updateCarouselSelection();
}

// ──────────────────────────────────────────────
// REMOVE CURRENT CATEGORY ITEM
// ──────────────────────────────────────────────

btnRemove.addEventListener("click", () => {
    if (currentCategory === "bracelet") {
        if (activeWrist === "left") {
            selectedItems.bracelet_left = null;
            layerBraceletLeft.style.display = "none";
            layerBraceletLeft.src = "";
        } else if (activeWrist === "right") {
            selectedItems.bracelet_right = null;
            layerBraceletRight.style.display = "none";
            layerBraceletRight.src = "";
        } else {
            selectedItems.bracelet_left = null;
            selectedItems.bracelet_right = null;
            layerBraceletLeft.style.display = "none";
            layerBraceletRight.style.display = "none";
            layerBraceletLeft.src = "";
            layerBraceletRight.src = "";
        }
    } else {
        const cat = CATEGORIES[currentCategory];
        const layer = document.getElementById(cat.layer);
        selectedItems[currentCategory] = null;
        if (layer) {
            layer.style.display = "none";
            layer.src = "";
        }
        if (currentCategory === "top" || currentCategory === "bottom") {
            updateBody();
        }
    }

    updateCarouselSelection();
});

// ──────────────────────────────────────────────
// CAROUSEL NAVIGATION
// ──────────────────────────────────────────────

btnPrev.addEventListener("click", () => {
    carousel.scrollBy({ left: -160, behavior: "smooth" });
    setTimeout(() => { scrollIndex[currentCategory] = carousel.scrollLeft; }, 350);
});

btnNext.addEventListener("click", () => {
    carousel.scrollBy({ left: 160, behavior: "smooth" });
    setTimeout(() => { scrollIndex[currentCategory] = carousel.scrollLeft; }, 350);
});

// Remember scroll position on manual scroll
carousel.addEventListener("scroll", () => {
    scrollIndex[currentCategory] = carousel.scrollLeft;
});

// ──────────────────────────────────────────────
// CATEGORY TABS
// ──────────────────────────────────────────────

catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        renderCategory(tab.dataset.category);
    });
});

// ──────────────────────────────────────────────
// RESET ALL
// ──────────────────────────────────────────────

btnReset.addEventListener("click", () => {
    selectedItems = {
        top: null,
        bottom: null,
        belt: null,
        shoes: null,
        necklace: null,
        bracelet_left: null,
        bracelet_right: null
    };
    Object.keys(scrollIndex).forEach(k => scrollIndex[k] = 0);

    const layersToReset = [
        "layer-top", "layer-bottom", "layer-belt", "layer-shoes",
        "layer-necklace", "layer-bracelet-left", "layer-bracelet-right"
    ];
    layersToReset.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = "none";
            el.src = "";
        }
    });

    updateBody();
    renderCategory(currentCategory);
});

// ──────────────────────────────────────────────
// FINISH → FINAL SCREEN
// ──────────────────────────────────────────────

btnFinish.addEventListener("click", () => {
    showScreen(finalScreen);
    playFinalSequence();
});

function playFinalSequence() {
    const msg1 = document.getElementById("final-msg-1");
    const msg2 = document.getElementById("final-msg-2");
    const msg3 = document.getElementById("final-msg-3");

    // Reset
    [msg1, msg2, msg3, btnReplay].forEach(el => {
        el.classList.remove("msg-visible");
        el.classList.add("msg-hidden");
    });

    // Sequence
    setTimeout(() => {
        msg1.classList.remove("msg-hidden");
        msg1.classList.add("msg-visible");
    }, 800);

    setTimeout(() => {
        msg2.classList.remove("msg-hidden");
        msg2.classList.add("msg-visible");
    }, 3000);

    setTimeout(() => {
        msg3.classList.remove("msg-hidden");
        msg3.classList.add("msg-visible");
    }, 5500);

    setTimeout(() => {
        btnReplay.classList.remove("msg-hidden");
        btnReplay.classList.add("msg-visible");
    }, 7500);
}

// ──────────────────────────────────────────────
// REPLAY
// ──────────────────────────────────────────────

btnReplay.addEventListener("click", () => {
    btnReset.click();
    currentCategory = "top";
    showScreen(gameScreen);
});

// ──────────────────────────────────────────────
// SWIPE SUPPORT (Mobile)
// ──────────────────────────────────────────────

let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50;

const charStage = document.querySelector(".character-stage");

charStage.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

charStage.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const diff = touchStartX - touchEndX;
    const catKeys = Object.keys(CATEGORIES);
    const currentIdx = catKeys.indexOf(currentCategory);

    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0 && currentIdx < catKeys.length - 1) {
        // Swipe left → next category
        renderCategory(catKeys[currentIdx + 1]);
    } else if (diff < 0 && currentIdx > 0) {
        // Swipe right → prev category
        renderCategory(catKeys[currentIdx - 1]);
    }
}

// ──────────────────────────────────────────────
// KEYBOARD SUPPORT
// ──────────────────────────────────────────────

document.addEventListener("keydown", (e) => {
    if (!gameScreen.classList.contains("active")) return;

    const catKeys = Object.keys(CATEGORIES);
    const catIdx = catKeys.indexOf(currentCategory);
    const cat = CATEGORIES[currentCategory];
    let currentItemIdx = (currentCategory === "bracelet")
        ? (activeWrist === "right" ? selectedItems.bracelet_right : selectedItems.bracelet_left)
        : selectedItems[currentCategory];

    switch (e.key) {
        case "ArrowLeft":
            if (currentItemIdx !== null && currentItemIdx > 0) {
                selectItem(currentCategory, currentItemIdx - 1);
            } else if (currentItemIdx === null) {
                selectItem(currentCategory, 0);
            }
            break;

        case "ArrowRight":
            if (currentItemIdx !== null && currentItemIdx < cat.items.length - 1) {
                selectItem(currentCategory, currentItemIdx + 1);
            } else if (currentItemIdx === null) {
                selectItem(currentCategory, 0);
            }
            break;

        case "ArrowUp":
            e.preventDefault();
            if (catIdx > 0) renderCategory(catKeys[catIdx - 1]);
            break;

        case "ArrowDown":
            e.preventDefault();
            if (catIdx < catKeys.length - 1) renderCategory(catKeys[catIdx + 1]);
            break;

        case "Delete":
        case "Backspace":
            btnRemove.click();
            break;

        case "Enter":
            btnFinish.click();
            break;
    }
});

// ──────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────

// Preload body variants
Object.values(BODY_VARIANTS).forEach(src => {
    const img = new Image();
    img.src = src;
});

console.log("🌸 Canan Dress-Up Game yüklendi!");
console.log("📁 assets/ klasörüne görselleri eklemeyi unutma.");
console.log("📐 Tüm PNG'ler 1024×1536 px olmalı.");
