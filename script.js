/**
 * Tree Escape Living - Bespoke Furniture Boutique & Atelier
 * Interactive Client-Side Engine
 */

// 1. BESPOKE COMMISSIONS & SIGNATURES DATA
const COMMISSIONS = [
  {
    id: 'p1',
    title: 'The Bower Bespoke Living Suite',
    category: 'living',
    categoryLabel: 'Living Room • Made-to-Measure Seating',
    badge: 'Custom Commission',
    baseDimensions: 'W 214 × D 92 × H 84 cm (Tailored to your space)',
    timber: 'Grade-A Seasoned Burma Teak, Hand-Hewn Mortise Joinery',
    startingEstimate: 44900,
    rating: 5.0,
    residenceRef: 'Commissioned for a Villa in Sarjapur Road',
    description: 'Sculptural solid teak frame with floating armrests and deep-sprung down-blend cushions. Upholstered in spill-shielded Belgian linen. Every proportion can be lengthened, deepened, or configured into an L-sectional.',
    defaultTimber: 'honey-teak',
    timbers: [
      { id: 'honey-teak', name: 'Burma Teak', colorClass: 'swatch-honey', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
      { id: 'warm-walnut', name: 'Dark Walnut Stain', colorClass: 'swatch-walnut', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
      { id: 'natural-ash', name: 'Natural White Oak', colorClass: 'swatch-ash', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'p2',
    title: 'Solace Woven Cane Bedstead',
    category: 'bedroom',
    categoryLabel: 'Bedroom Sanctuary • Artisan Cane',
    badge: 'Atelier Signature',
    baseDimensions: 'Custom King / Queen / Cal-King Proportions',
    timber: 'Seasoned Indian Sheesham with Hand-Woven Natural Rattan',
    startingEstimate: 39500,
    rating: 5.0,
    residenceRef: 'Commissioned for Prestige Lakeside, Varthur',
    description: 'An airy architectural headboard hand-woven in natural cane webbing. The heavy solid Sheesham frame is dovetailed by hand to eliminate creaking and ensure generational stability.',
    defaultTimber: 'honey-teak',
    timbers: [
      { id: 'honey-teak', name: 'Warm Sheesham', colorClass: 'swatch-honey', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' },
      { id: 'warm-walnut', name: 'Smoked Walnut', colorClass: 'swatch-walnut', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'p3',
    title: 'Grove Fluted Pedestal Dining Table',
    category: 'dining',
    categoryLabel: 'Dining Centerpiece • Solid Timber',
    badge: 'Architectural Commission',
    baseDimensions: 'Ø 120 cm to Ø 160 cm, or Rectangular up to 10 ft',
    timber: '100% Solid Kiln-Seasoned Teak with Food-Safe Organic Wax',
    startingEstimate: 29800,
    rating: 4.9,
    residenceRef: 'Commissioned for an Indiranagar Penthouse',
    description: 'A monolithic circular solid teak table resting upon an architectural fluted tambour pedestal base. Provides generous legroom without intrusive corner legs. Finished in matte organic wax.',
    defaultTimber: 'honey-teak',
    timbers: [
      { id: 'honey-teak', name: 'Golden Teak', colorClass: 'swatch-honey', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80' },
      { id: 'natural-ash', name: 'Raw Sand Oak', colorClass: 'swatch-ash', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'p4',
    title: 'Nila Sculptural Occasional Armchair',
    category: 'living',
    categoryLabel: 'Living Room • Sculptural Chair',
    badge: 'Atelier Signature',
    baseDimensions: 'W 76 × D 80 × H 82 cm',
    timber: 'American White Oak or Burma Teak with Textured Bouclé',
    startingEstimate: 17800,
    rating: 4.9,
    residenceRef: 'Commissioned for HSR Layout Residence',
    description: 'Continuous steam-bent solid wood arms that cradle the human posture. Available in natural bouclé, terracotta velvet, or saddle leather.',
    defaultTimber: 'warm-walnut',
    timbers: [
      { id: 'warm-walnut', name: 'Dark Roast Walnut', colorClass: 'swatch-walnut', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80' },
      { id: 'natural-ash', name: 'Natural White Oak', colorClass: 'swatch-ash', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'p5',
    title: 'Malabar Executive Solid Wood Study Desk',
    category: 'study',
    categoryLabel: 'Executive Study • Custom Joinery',
    badge: 'Custom Commission',
    baseDimensions: 'W 140 × D 65 × H 76 cm (Custom widths available)',
    timber: 'Solid Seasoned Sheesham with Hidden Conduit Routing',
    startingEstimate: 24500,
    rating: 5.0,
    residenceRef: 'Commissioned for a Koramangala Home Office',
    description: 'Crafted for focused work and tactile calm. Features concealed cable channels, chamfered edge profiles, and solid wood dovetailed drawers.',
    defaultTimber: 'honey-teak',
    timbers: [
      { id: 'honey-teak', name: 'Honey Sheesham', colorClass: 'swatch-honey', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80' },
      { id: 'warm-walnut', name: 'Espresso Walnut', colorClass: 'swatch-walnut', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'p6',
    title: 'Nilgiri Low-Slung Fluted Coffee Table',
    category: 'living',
    categoryLabel: 'Living • Centerpiece',
    badge: 'Custom Commission',
    baseDimensions: 'Ø 85 × H 38 cm (Or Oval up to 5 ft)',
    timber: 'Solid Kiln-Dried Teak with Vertical Tambour Fluting',
    startingEstimate: 18500,
    rating: 4.9,
    residenceRef: 'Commissioned for Whitefield Penthouse',
    description: 'A grounding, sculptural low-table that serves as the visual anchor of the living pavilion. Satin matte protective topcoat resistant to hot cups and spills.',
    defaultTimber: 'honey-teak',
    timbers: [
      { id: 'honey-teak', name: 'Golden Teak', colorClass: 'swatch-honey', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80' },
      { id: 'smoked', name: 'Smoked Teak', colorClass: 'swatch-smoked', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'p7',
    title: 'Hampi Fluted Credenza & Open Bookshelf',
    category: 'study',
    categoryLabel: 'Architectural Cabinetry',
    badge: 'Bespoke Commission',
    baseDimensions: 'W 110 × D 42 × H 180 cm (Tailored to wall height)',
    timber: 'Solid Burma Teak with Hand-Turned Brass Hardware',
    startingEstimate: 38900,
    rating: 5.0,
    residenceRef: 'Commissioned for an Architect Residence in Bellandur',
    description: 'Seamlessly combines concealed tambour storage for electronics below with open display shelves for art objects and books above.',
    defaultTimber: 'honey-teak',
    timbers: [
      { id: 'honey-teak', name: 'Natural Teak', colorClass: 'swatch-honey', img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80' },
      { id: 'warm-walnut', name: 'Dark Walnut', colorClass: 'swatch-walnut', img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80' }
    ]
  },
  {
    id: 'p8',
    title: 'Veda Sculptural Dining Chairs (Pair)',
    category: 'dining',
    categoryLabel: 'Dining • Ergonomic Seating',
    badge: 'Atelier Signature',
    baseDimensions: 'W 52 × D 54 × H 78 cm',
    timber: 'Steam-Bent Solid Sheesham with Contoured Seat',
    startingEstimate: 16900,
    rating: 4.9,
    residenceRef: 'Commissioned for Sarjapur Row House',
    description: 'Smooth, organic curvature shaped through steam-bending. Designed specifically to support hours of comfortable conversation during unhurried dinners.',
    defaultTimber: 'honey-teak',
    timbers: [
      { id: 'honey-teak', name: 'Honey Sheesham', colorClass: 'swatch-honey', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80' },
      { id: 'warm-walnut', name: 'Dark Walnut', colorClass: 'swatch-walnut', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80' }
    ]
  }
];

// Helper formatting
const fmtINR = (val) => '₹' + Number(val).toLocaleString('en-IN');

// 2. INTERACTIVE BESPOKE COST CALCULATOR
class CostCalculator {
  constructor() {
    this.basePrice = 42000;
    this.typeName = 'Living Room Sofa';
    this.scaleMult = 1.0;
    this.scaleDesc = 'Standard Scale (7 ft / 6-Seater)';
    this.timberMult = 1.2;
    this.timberName = 'Grade-A Burma Teak';
  }

  init() {
    this.setupListeners();
    this.calculate();
  }

  setupListeners() {
    // 1. Furniture Type
    document.querySelectorAll('#calcTypeGroup .calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#calcTypeGroup .calc-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.basePrice = Number(btn.getAttribute('data-base'));
        this.typeName = btn.textContent.trim();
        this.calculate();
      });
    });

    // 2. Scale / Dimensions
    document.querySelectorAll('#calcScaleGroup .calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#calcScaleGroup .calc-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.scaleMult = Number(btn.getAttribute('data-scale-mult'));
        this.scaleDesc = btn.getAttribute('data-scale-desc');
        this.calculate();
      });
    });

    // 3. Timber Species
    document.querySelectorAll('#calcTimberGroup .calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#calcTimberGroup .calc-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.timberMult = Number(btn.getAttribute('data-timber-mult'));
        this.timberName = btn.getAttribute('data-timber-name');
        this.calculate();
      });
    });

    // WhatsApp Lock Button
    document.getElementById('btnLockEstimateWhatsapp')?.addEventListener('click', () => {
      const min = Math.round(this.basePrice * this.scaleMult * this.timberMult * 0.95);
      const max = Math.round(min * 1.15);
      const msg = `Hi Tree Escape Living! I configured a bespoke estimate on your website:\n\n• Piece: ${this.typeName}\n• Timber: ${this.timberName}\n• Scale: ${this.scaleDesc}\n• Estimated Range: ${fmtINR(min)} – ${fmtINR(max)}\n\nI would like to discuss room measurements and lock in this specification.`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  calculate() {
    const min = Math.round(this.basePrice * this.scaleMult * this.timberMult * 0.95);
    const max = Math.round(min * 1.15);

    const priceEl = document.getElementById('calcPriceRange');
    const summaryEl = document.getElementById('calcSummaryText');

    if (priceEl) priceEl.textContent = `${fmtINR(min)} – ${fmtINR(max)}`;
    if (summaryEl) {
      summaryEl.innerHTML = `<strong>${this.typeName}</strong> in <strong>${this.timberName}</strong> • ${this.scaleDesc}. Includes personal white-glove Bengaluru delivery, in-room leveling &amp; 10-year warranty.`;
    }
  }
}

// 3. PROJECT MOODBOARD MANAGER
class MoodboardManager {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('tel_moodboard') || '[]');
  }

  save() {
    localStorage.setItem('tel_moodboard', JSON.stringify(this.items));
    this.render();
  }

  addItem(commissionId, timberId = null) {
    const item = COMMISSIONS.find(c => c.id === commissionId);
    if (!item) return;

    const timber = timberId || item.defaultTimber;
    const existing = this.items.find(i => i.id === commissionId && i.timber === timber);

    if (existing) {
      showToast(`"${item.title}" is already in your Project Moodboard`);
    } else {
      const timberObj = item.timbers.find(t => t.id === timber) || item.timbers[0];
      this.items.push({
        id: item.id,
        title: item.title,
        timber: timber,
        timberName: timberObj.name,
        img: timberObj.img,
        estimate: item.startingEstimate
      });
      showToast(`Added "${item.title}" to Project Moodboard ✦`);
    }

    this.save();
    this.openDrawer();
  }

  removeItem(commissionId, timber) {
    this.items = this.items.filter(i => !(i.id === commissionId && i.timber === timber));
    this.save();
  }

  openDrawer() {
    document.getElementById('moodboardDrawer')?.classList.add('active');
    document.getElementById('drawerOverlay')?.classList.add('active');
  }

  closeDrawer() {
    document.getElementById('moodboardDrawer')?.classList.remove('active');
    document.getElementById('drawerOverlay')?.classList.remove('active');
  }

  render() {
    const countEl = document.getElementById('moodboardCount');
    if (countEl) countEl.textContent = this.items.length;

    const listEl = document.getElementById('moodboardItemsList');
    if (!listEl) return;

    if (this.items.length === 0) {
      listEl.innerHTML = `
        <div class="empty-cart-view">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          <h4>Your moodboard is empty</h4>
          <p>Explore our bespoke commissions and add pieces you would like to customize for your residence.</p>
          <a href="#commissions" class="btn btn-primary btn-block" style="margin-top: 16px;" onclick="moodboardManager.closeDrawer()">Explore Bespoke Works</a>
        </div>
      `;
    } else {
      listEl.innerHTML = this.items.map(item => `
        <div class="cart-item-card">
          <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
          <div class="cart-item-details">
            <h5>${item.title}</h5>
            <div class="cart-item-finish">Timber: <strong>${item.timberName}</strong></div>
            <div class="cart-item-bottom">
              <span style="font-size: 12px; font-weight: 600; color: var(--moss);">Est. from ${fmtINR(item.estimate)}</span>
              <button class="btn-remove-moodboard" onclick="moodboardManager.removeItem('${item.id}', '${item.timber}')">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  sendToWhatsApp() {
    if (this.items.length === 0) {
      alert('Your moodboard is currently empty. Explore our bespoke works and add pieces you love!');
      return;
    }
    let msg = `Hi Tree Escape Living! I visited your boutique atelier website and curated this Project Moodboard for my home:\n\n`;
    this.items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.title} (Timber: ${item.timberName})\n`;
    });
    msg += `\nI would like to discuss custom room dimensions, timber samples, and schedule a consultation at your Yamare studio or in my home.`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
}

// 4. COMMISSIONS GALLERY & TIMBER SELECTOR ENGINE
class CommissionManager {
  constructor() {
    this.currentCategory = 'all';
    this.selectedTimbers = {};
  }

  init() {
    COMMISSIONS.forEach(c => {
      this.selectedTimbers[c.id] = c.defaultTimber;
    });
    this.renderCommissions();
    this.setupFilters();
  }

  filterCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('#commissionFilterGroup .filter-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-filter') === cat);
    });
    this.renderCommissions();
  }

  setupFilters() {
    document.querySelectorAll('#commissionFilterGroup .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterCategory(btn.getAttribute('data-filter'));
      });
    });
  }

  setTimber(commissionId, timberId) {
    this.selectedTimbers[commissionId] = timberId;
    const card = document.getElementById(`commission-${commissionId}`);
    if (!card) return;

    const commission = COMMISSIONS.find(c => c.id === commissionId);
    const timberObj = commission.timbers.find(t => t.id === timberId);
    if (!timberObj) return;

    // Update image
    const imgEl = card.querySelector('.commission-img');
    if (imgEl) imgEl.src = timberObj.img;

    // Update swatch active state
    card.querySelectorAll('.swatch-btn').forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-timber') === timberId);
    });

    // Update label
    const labelEl = card.querySelector('.swatch-label');
    if (labelEl) labelEl.textContent = timberObj.name;
  }

  renderCommissions() {
    const grid = document.getElementById('commissionsGrid');
    if (!grid) return;

    const filtered = this.currentCategory === 'all'
      ? COMMISSIONS
      : COMMISSIONS.filter(c => c.category === this.currentCategory);

    grid.innerHTML = filtered.map(c => {
      const activeTimberId = this.selectedTimbers[c.id] || c.defaultTimber;
      const activeTimber = c.timbers.find(t => t.id === activeTimberId) || c.timbers[0];

      return `
        <article class="commission-card" id="commission-${c.id}">
          <div class="commission-card-top">
            <span class="commission-badge">${c.badge}</span>
            <button class="commission-moodboard-btn" onclick="moodboardManager.addItem('${c.id}', commissionManager.selectedTimbers['${c.id}'])" title="Add to Project Moodboard" aria-label="Add to Project Moodboard">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <img src="${activeTimber.img}" alt="${c.title}" class="commission-img" loading="lazy" />
            <button class="commission-quick-btn" onclick="commissionManager.openInquiryFor('${c.id}')">View Customization Details &amp; Dimensions</button>
          </div>

          <div class="commission-card-body">
            <!-- Timber Swatches -->
            <div class="timber-swatches-bar">
              ${c.timbers.map(t => `
                <button 
                  class="swatch-btn ${t.colorClass} ${t.id === activeTimberId ? 'active' : ''}" 
                  data-timber="${t.id}" 
                  onclick="commissionManager.setTimber('${c.id}', '${t.id}')"
                  title="${t.name}"
                  aria-label="${t.name}"
                ></button>
              `).join('')}
              <span class="swatch-label">${activeTimber.name}</span>
            </div>

            <span class="commission-category">${c.categoryLabel}</span>
            <h3 class="commission-title">${c.title}</h3>
            <p class="commission-dimensions">${c.baseDimensions}</p>

            <div class="commission-pricing">
              <span class="price-estimate-label">Bespoke Estimate</span>
              <span class="estimate-price">Starting from ${fmtINR(c.startingEstimate)}</span>
            </div>

            <div class="commission-actions-footer">
              <button 
                class="btn-commission" 
                onclick="commissionManager.openInquiryFor('${c.id}')"
              >
                Commission Similar ✎
              </button>
              <button 
                class="btn-add-moodboard" 
                onclick="moodboardManager.addItem('${c.id}', commissionManager.selectedTimbers['${c.id}'])"
                title="Add to Project Moodboard"
              >
                + Moodboard
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  openInquiryFor(commissionId) {
    const c = COMMISSIONS.find(item => item.id === commissionId);
    if (!c) return;

    const modal = document.getElementById('commissionModal');
    const content = document.getElementById('commissionModalContent');
    if (!modal || !content) return;

    const activeTimber = c.timbers.find(t => t.id === this.selectedTimbers[c.id]) || c.timbers[0];

    content.innerHTML = `
      <div class="p-modal-media">
        <img src="${activeTimber.img}" alt="${c.title}" class="p-modal-img" id="commissionModalImg" />
      </div>
      <div class="p-modal-info">
        <span class="commission-category">${c.categoryLabel}</span>
        <h2>${c.title}</h2>
        <div style="margin-bottom: 12px;">
          <span style="font-size: 11px; text-transform: uppercase; color: #667568; letter-spacing: 0.08em; display: block;">Starting Bespoke Estimate:</span>
          <span style="font-size: 24px; font-weight: 700; color: var(--ink);">${fmtINR(c.startingEstimate)}</span>
          <small style="display: block; color: #78877b; font-size: 11.5px; margin-top: 2px;">(Exact quote varies based on custom room dimensions &amp; timber selection)</small>
        </div>
        <p style="font-size: 13.5px; color: #556257; margin-bottom: 16px; line-height: 1.6;">${c.description}</p>
        
        <div class="p-modal-specs">
          <div><strong>Base Scale:</strong><br />${c.baseDimensions}</div>
          <div><strong>Timber &amp; Joinery:</strong><br />${c.timber}</div>
          <div><strong>Atelier Warranty:</strong><br />10-Year Structural &amp; Termite Assurance</div>
          <div><strong>White-Glove Service:</strong><br />Bengaluru Room Delivery &amp; Leveling</div>
        </div>

        <div style="margin-bottom: 20px;">
          <label style="font-size: 11.5px; font-weight: 600; text-transform: uppercase; color: #555; display: block; margin-bottom: 8px;">Selected Timber Species:</label>
          <div style="display: flex; gap: 10px;">
            ${c.timbers.map(t => `
              <button 
                class="btn btn-secondary" 
                style="padding: 6px 14px; font-size: 12px;" 
                onclick="document.getElementById('commissionModalImg').src='${t.img}'; commissionManager.setTimber('${c.id}', '${t.id}');"
              >
                ${t.name}
              </button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: auto;">
          <a 
            href="https://wa.me/919876543210?text=Hi%20Tree%20Escape%20Living!%20I%20would%20like%20to%20commission%20a%20custom-made%20piece%20based%20on%20${encodeURIComponent(c.title)}.%20Please%20let%20me%20know%20how%20we%20can%20customize%20dimensions%20for%20my%20room." 
            target="_blank" 
            class="btn btn-whatsapp" 
            style="flex: 1;"
          >
            Discuss Custom Sizing on WhatsApp
          </a>
          <button 
            class="btn btn-secondary" 
            style="padding: 10px 16px;" 
            onclick="moodboardManager.addItem('${c.id}'); dialogManager.closeModals();"
          >
            + Moodboard
          </button>
        </div>
      </div>
    `;

    modal.classList.add('active');
  }

  searchQuery(q) {
    document.getElementById('liveSearchInput').value = q;
    this.executeSearch(q);
  }

  executeSearch(term) {
    const grid = document.getElementById('searchResultsGrid');
    if (!grid) return;

    if (!term || term.trim().length === 0) {
      grid.innerHTML = '<p style="grid-column: 1/-1; color: #777;">Search commissions by timber (Teak, Sheesham, Oak) or room type...</p>';
      return;
    }

    const clean = term.toLowerCase().trim();
    const results = COMMISSIONS.filter(c => 
      c.title.toLowerCase().includes(clean) ||
      c.category.toLowerCase().includes(clean) ||
      c.timber.toLowerCase().includes(clean)
    );

    if (results.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; color: #777;">No commissions found matching "${term}". Try "sofa", "dining", or "teak".</p>`;
      return;
    }

    grid.innerHTML = results.map(c => `
      <div class="commission-card">
        <div class="commission-card-top" style="height: 180px;">
          <img src="${c.timbers[0].img}" alt="${c.title}" class="commission-img" />
        </div>
        <div class="commission-card-body">
          <h4 style="font-family: var(--font-serif); font-size: 15px; margin-bottom: 4px;">${c.title}</h4>
          <p style="font-weight: 700; font-size: 13.5px; margin-bottom: 8px;">Est. from ${fmtINR(c.startingEstimate)}</p>
          <button class="btn btn-primary btn-block" style="padding: 8px; font-size: 12px;" onclick="commissionManager.openInquiryFor('${c.id}'); dialogManager.closeModals();">Commission Similar</button>
        </div>
      </div>
    `).join('');
  }
}

// 5. DIALOG & MODAL CONTROLLER (With Dual-Tab Appointments)
class DialogManager {
  openWorkshopModal(type = 'studio') {
    this.switchAppointmentTab(type);
    document.getElementById('workshopModal')?.classList.add('active');
  }

  switchAppointmentTab(type) {
    const studioBtn = document.getElementById('tabStudioBtn');
    const homeBtn = document.getElementById('tabHomeBtn');
    const studioContent = document.getElementById('tabStudioContent');
    const homeContent = document.getElementById('tabHomeContent');
    const addressGroup = document.getElementById('wvAddressGroup');
    const hiddenType = document.getElementById('wvType');

    if (type === 'studio') {
      studioBtn?.classList.add('active');
      homeBtn?.classList.remove('active');
      if (studioContent) studioContent.style.display = 'block';
      if (homeContent) homeContent.style.display = 'none';
      if (addressGroup) addressGroup.style.display = 'none';
      if (hiddenType) hiddenType.value = 'studio';
      document.getElementById('btnSubmitAppointment').textContent = 'Confirm Studio Visit Appointment ↗';
    } else {
      homeBtn?.classList.add('active');
      studioBtn?.classList.remove('active');
      if (homeContent) homeContent.style.display = 'block';
      if (studioContent) studioContent.style.display = 'none';
      if (addressGroup) addressGroup.style.display = 'block';
      if (hiddenType) hiddenType.value = 'home';
      document.getElementById('btnSubmitAppointment').textContent = 'Book In-Home Laser Measurement Visit ↗';
    }
  }

  openTradeModal() {
    document.getElementById('tradeModal')?.classList.add('active');
  }

  openSearch() {
    const overlay = document.getElementById('searchOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.getElementById('liveSearchInput')?.focus();
      commissionManager.executeSearch('');
    }
  }

  closeMoodboard() {
    moodboardManager.closeDrawer();
  }

  closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    document.getElementById('searchOverlay')?.classList.remove('active');
  }
}

// 6. TOAST NOTIFICATIONS
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>✦</span> ${msg}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// 7. INITIALIZATION
const moodboardManager = new MoodboardManager();
const commissionManager = new CommissionManager();
const costCalculator = new CostCalculator();
const dialogManager = new DialogManager();

document.addEventListener('DOMContentLoaded', () => {
  commissionManager.init();
  costCalculator.init();
  moodboardManager.render();

  // Moodboard Drawer Trigger
  document.getElementById('moodboardTrigger')?.addEventListener('click', () => moodboardManager.openDrawer());
  document.getElementById('closeMoodboard')?.addEventListener('click', () => moodboardManager.closeDrawer());
  document.getElementById('drawerOverlay')?.addEventListener('click', () => moodboardManager.closeDrawer());
  document.getElementById('btnSendMoodboardWhatsapp')?.addEventListener('click', () => moodboardManager.sendToWhatsApp());

  // Search
  document.getElementById('searchTrigger')?.addEventListener('click', () => dialogManager.openSearch());
  document.getElementById('closeSearch')?.addEventListener('click', () => dialogManager.closeModals());
  document.getElementById('liveSearchInput')?.addEventListener('input', (e) => {
    commissionManager.executeSearch(e.target.value);
  });

  // Workshop & Trade Modals
  document.getElementById('openWorkshopVisitModal')?.addEventListener('click', () => dialogManager.openWorkshopModal('studio'));
  document.getElementById('closeWorkshopModal')?.addEventListener('click', () => dialogManager.closeModals());
  document.getElementById('closeCommissionModal')?.addEventListener('click', () => dialogManager.closeModals());
  document.getElementById('closeTradeModal')?.addEventListener('click', () => dialogManager.closeModals());

  // FAQ Accordion Toggle
  document.querySelectorAll('#faqAccordion .faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('#faqAccordion .faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Appointment Form
  document.getElementById('workshopVisitForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('wvType').value;
    const name = document.getElementById('wvName').value;
    const phone = document.getElementById('wvPhone').value;
    const address = document.getElementById('wvAddress').value || 'Studio Visit';
    
    if (type === 'home') {
      alert(`Thank you, ${name}! Your Complimentary In-Home Laser Measurement Visit has been scheduled for ${address}. Our principal design carpenter will reach out on WhatsApp (${phone}) to confirm the arrival window.`);
    } else {
      alert(`Thank you, ${name}! Your private studio consultation at our Yamare atelier has been booked. Our master design artisan will reach out on WhatsApp (${phone}) with directions.`);
    }
    dialogManager.closeModals();
  });

  // Trade Registration Form
  document.getElementById('tradeRegistrationForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('trName').value;
    const phone = document.getElementById('trPhone').value;
    alert(`Thank you, ${name}! Welcome to the Tree Escape Living Trade Network. Our Trade Concierge will reach out on WhatsApp (${phone}) with our 3D CAD library access and trade pricing tier.`);
    dialogManager.closeModals();
  });

  // Bespoke Concierge Form
  const bespokeForm = document.getElementById('bespokeForm');
  if (bespokeForm) {
    const getBespokeData = () => {
      const name = document.getElementById('bfName').value || 'Client';
      const phone = document.getElementById('bfPhone').value || 'Not provided';
      const category = document.getElementById('bfCategory').value;
      const wood = document.getElementById('bfWood').value;
      const dims = document.getElementById('bfDimensions').value || 'Custom space dimensions';
      const loc = document.getElementById('bfLocation').value || 'Bengaluru';
      const notes = document.getElementById('bfNotes').value || 'None';
      return { name, phone, category, wood, dims, loc, notes };
    };

    document.getElementById('btnWhatsappEstimate')?.addEventListener('click', () => {
      const d = getBespokeData();
      const msg = `Hi Tree Escape Living! I would like to commission a bespoke piece for my home:\n\n• Name: ${d.name}\n• Phone: ${d.phone}\n• Piece: ${d.category}\n• Timber: ${d.wood}\n• Dimensions: ${d.dims}\n• Neighborhood: ${d.loc}\n• Design Notes: ${d.notes}\n\nPlease let me know when we can discuss sketches and timber options.`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    });

    bespokeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = getBespokeData();
      const fb = document.getElementById('bespokeFeedback');
      if (fb) {
        fb.style.display = 'block';
        fb.style.background = '#eef4ec';
        fb.style.color = 'var(--moss)';
        fb.innerHTML = `✓ Thank you <strong>${d.name}</strong>! Your bespoke commission brief for <strong>${d.category} in ${d.wood}</strong> has been received by our Yamare studio. Our principal design carpenter will prepare 3D sketches and contact you at <strong>${d.phone}</strong> within 24 hours.`;
      }
      bespokeForm.reset();
    });
  }

  // Mobile Menu Toggle
  document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.getElementById('mainNav')?.classList.toggle('active');
  });

  // Modal backdrop click to close
  document.querySelectorAll('.modal-backdrop').forEach(mb => {
    mb.addEventListener('click', (e) => {
      if (e.target === mb) dialogManager.closeModals();
    });
  });

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dialogManager.closeModals();
      moodboardManager.closeDrawer();
    }
  });
});
