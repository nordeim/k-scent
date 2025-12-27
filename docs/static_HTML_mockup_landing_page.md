     1	# index.html
     2	```html
     3	<!DOCTYPE html>
     4	<html lang="en" class="no-js">
     5	<head>
     6	  <meta charset="UTF-8">
     7	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
     8	  <meta name="description" content="Aromatherapy elevated to artisanal alchemy. Handcrafted botanical essences from our atelier, where ancient wisdom meets modern sensibility.">
     9	  
    10	  <!-- Open Graph -->
    11	  <meta property="og:type" content="website">
    12	  <meta property="og:title" content="Atelier Arôme | Artisanal Alchemy for the Senses">
    13	  <meta property="og:description" content="Where botanical science becomes sensory poetry. Experience our handcrafted aromatic compounds.">
    14	  <meta property="og:image" content="/social-preview.jpg">
    15	  
    16	  <title>Atelier Arôme | Artisanal Alchemy for the Senses</title>
    17	  
    18	  <!-- Google Fonts - Luxurious Renaissance Pairing -->
    19	  <link rel="preconnect" href="https://fonts.googleapis.com">
    20	  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    21	  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    22	  
    23	  <!-- Styles -->
    24	  <link rel="stylesheet" href="styles.css">
    25	  
    26	  <!-- Favicon - Alchemical Symbol -->
    27	  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 20 L80 50 L50 80 L20 50 Z' fill='%23C9A769' stroke='%232A2D26' stroke-width='2'/><circle cx='50' cy='50' r='15' fill='%232A2D26'/></svg>">
    28	  
    29	  <!-- Theme Color -->
    30	  <meta name="theme-color" content="#2A2D26">
    31	  
    32	  <!-- Modern CSS Features Detection -->
    33	  <script>
    34	    document.documentElement.classList.remove('no-js');
    35	    document.documentElement.classList.add('js');
    36	  </script>
    37	</head>
    38	<body>
    39	  <!-- ARIA Live Regions for Dynamic Content -->
    40	  <div id="a11y-announcer" class="visually-hidden" aria-live="polite" aria-atomic="true" role="status"></div>
    41	  <div id="cart-live-region" class="visually-hidden" aria-live="polite" aria-atomic="true" role="status"></div>
    42	  
    43	  <!-- Parchment Texture Overlay -->
    44	  <div class="texture-overlay" aria-hidden="true"></div>
    45	  
    46	  <!-- Gold Leaf Accents -->
    47	  <div class="gold-leaf gold-leaf--1" aria-hidden="true"></div>
    48	  <div class="gold-leaf gold-leaf--2" aria-hidden="true"></div>
    49	  <div class="gold-leaf gold-leaf--3" aria-hidden="true"></div>
    50	  
    51	  <!-- Skip Navigation -->
    52	  <a href="#main-content" class="skip-link">Skip to main content</a>
    53	  
    54	  <!-- Atelier Hours Banner -->
    55	  <div class="atelier-banner" role="banner">
    56	    <div class="atelier-banner__container">
    57	      <span class="atelier-banner__icon" aria-hidden="true">✷</span>
    58	      <span class="atelier-banner__text">The Atelier is Open</span>
    59	      <span class="atelier-banner__subtext">Current Batch: <em>N° 724 • Lavandula × intermedia</em></span>
    60	      <span class="atelier-banner__icon" aria-hidden="true">✷</span>
    61	    </div>
    62	  </div>
    63	  
    64	  <!-- Header - Atelier Studio -->
    65	  <header class="header" id="header">
    66	    <div class="header__container">
    67	      <!-- Atelier Seal -->
    68	      <a href="#hero" class="header__seal" aria-label="Atelier Arôme - Home">
    69	        <div class="header__seal-inner">
    70	          <svg class="header__seal-svg" viewBox="0 0 100 100" aria-hidden="true">
    71	            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2"/>
    72	            <path d="M50 20 Q70 30 80 50 Q70 70 50 80 Q30 70 20 50 Q30 30 50 20 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
    73	            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1"/>
    74	            <path d="M50 35 L50 65 M35 50 L65 50" stroke="currentColor" stroke-width="1.5"/>
    75	          </svg>
    76	          <div class="header__seal-text">
    77	            <span class="header__seal-name">Atelier</span>
    78	            <span class="header__seal-name">Arôme</span>
    79	          </div>
    80	        </div>
    81	        <span class="header__seal-tagline">Est. 2024</span>
    82	      </a>
    83	      
    84	      <!-- Navigation - Atelier Sections -->
    85	      <nav class="header__nav" aria-label="Atelier navigation">
    86	        <ul class="header__nav-list">
    87	          <li class="header__nav-item">
    88	            <a href="#compounds" class="header__nav-link">
    89	              <span class="header__nav-number">— I —</span>
    90	              <span class="header__nav-label">Compendium</span>
    91	            </a>
    92	          </li>
    93	          <li class="header__nav-item">
    94	            <a href="#process" class="header__nav-link">
    95	              <span class="header__nav-number">— II —</span>
    96	              <span class="header__nav-label">Alchemy</span>
    97	            </a>
    98	          </li>
    99	          <li class="header__nav-item">
   100	            <a href="#atelier" class="header__nav-link">
   101	              <span class="header__nav-number">— III —</span>
   102	              <span class="header__nav-label">The Atelier</span>
   103	            </a>
   104	          </li>
   105	          <li class="header__nav-item">
   106	            <a href="#manuscript" class="header__nav-link">
   107	              <span class="header__nav-number">— IV —</span>
   108	              <span class="header__nav-label">Manuscript</span>
   109	            </a>
   110	          </li>
   111	        </ul>
   112	      </nav>
   113	      
   114	      <!-- Atelier Tools -->
   115	      <div class="header__tools">
   116	        <button class="header__tool" aria-label="Search the compendium" data-tooltip="Magnifying Glass">
   117	          <svg class="header__tool-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   118	            <circle cx="11" cy="11" r="8"/>
   119	            <path d="M21 21l-4.35-4.35"/>
   120	          </svg>
   121	        </button>
   122	        
   123	        <button class="header__tool" id="cartButton" aria-label="Collection Vial" data-count="0" data-tooltip="Vial">
   124	          <svg class="header__tool-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   125	            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
   126	            <path d="M3 6h18"/>
   127	            <path d="M16 10a4 4 0 01-8 0"/>
   128	          </svg>
   129	        </button>
   130	        
   131	        <!-- Mobile Menu Toggle - Quill Pen -->
   132	        <button class="header__menu-toggle" id="menuToggle" aria-label="Open atelier menu" aria-expanded="false" data-tooltip="Menu">
   133	          <span class="header__menu-quill"></span>
   134	        </button>
   135	      </div>
   136	    </div>
   137	    
   138	    <!-- Mobile Navigation - Manuscript Pages -->
   139	    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation" aria-hidden="true">
   140	      <div class="mobile-nav__container">
   141	        <div class="mobile-nav__header">
   142	          <div class="mobile-nav__seal" aria-hidden="true"></div>
   143	          <span class="mobile-nav__title">Atelier Folio</span>
   144	        </div>
   145	        
   146	        <ul class="mobile-nav__list">
   147	          <li class="mobile-nav__item">
   148	            <a href="#compounds" class="mobile-nav__link">
   149	              <span class="mobile-nav__ornament">❖</span>
   150	              <span class="mobile-nav__label">Compendium</span>
   151	              <span class="mobile-nav__page">Folio I</span>
   152	            </a>
   153	          </li>
   154	          <li class="mobile-nav__item">
   155	            <a href="#process" class="mobile-nav__link">
   156	              <span class="mobile-nav__ornament">❖</span>
   157	              <span class="mobile-nav__label">Alchemy</span>
   158	              <span class="mobile-nav__page">Folio II</span>
   159	            </a>
   160	          </li>
   161	          <li class="mobile-nav__item">
   162	            <a href="#atelier" class="mobile-nav__link">
   163	              <span class="mobile-nav__ornament">❖</span>
   164	              <span class="mobile-nav__label">The Atelier</span>
   165	              <span class="mobile-nav__page">Folio III</span>
   166	            </a>
   167	          </li>
   168	          <li class="mobile-nav__item">
   169	            <a href="#manuscript" class="mobile-nav__link">
   170	              <span class="mobile-nav__ornament">❖</span>
   171	              <span class="mobile-nav__label">Manuscript</span>
   172	              <span class="mobile-nav__page">Folio IV</span>
   173	            </a>
   174	          </li>
   175	        </ul>
   176	        
   177	        <div class="mobile-nav__colophon">
   178	          <span class="mobile-nav__colophon-text">Atelier Arôme</span>
   179	          <span class="mobile-nav__colophon-year">Anno MMXXIV</span>
   180	        </div>
   181	      </div>
   182	    </nav>
   183	  </header>
   184	  
   185	  <!-- Main Content -->
   186	  <main id="main-content">
   187	    
   188	    <!-- Hero Section - Illuminated Manuscript -->
   189	    <section class="hero" id="hero">
   190	      <!-- Hand-drawn Border -->
   191	      <div class="hero__border" aria-hidden="true">
   192	        <div class="hero__border-corner hero__border-corner--tl"></div>
   193	        <div class="hero__border-corner hero__border-corner--tr"></div>
   194	        <div class="hero__border-corner hero__border-corner--bl"></div>
   195	        <div class="hero__border-corner hero__border-corner--br"></div>
   196	      </div>
   197	      
   198	      <!-- Watermark Illustration -->
   199	      <div class="hero__watermark" aria-hidden="true">
   200	        <svg class="hero__watermark-svg" viewBox="0 0 400 400">
   201	          <path d="M200 100 Q300 150 300 250 Q250 350 200 350 Q150 350 100 250 Q100 150 200 100 Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.1"/>
   202	          <path d="M200 120 Q280 160 280 240 Q240 320 200 320 Q160 320 120 240 Q120 160 200 120 Z" fill="none" stroke="currentColor" stroke-width="1" opacity="0.08"/>
   203	        </svg>
   204	      </div>
   205	      
   206	      <div class="hero__container">
   207	        <!-- Illuminated Initial -->
   208	        <div class="hero__initial" aria-hidden="true">
   209	          <span class="hero__initial-letter">A</span>
   210	          <div class="hero__initial-flourish"></div>
   211	        </div>
   212	        
   213	        <div class="hero__content">
   214	          <!-- Calligraphic Title -->
   215	          <h1 class="hero__title">
   216	            <span class="hero__title-line hero__title-line--1">
   217	              <span class="hero__title-word">The</span>
   218	              <span class="hero__title-word">Art</span>
   219	            </span>
   220	            <span class="hero__title-line hero__title-line--2">
   221	              <span class="hero__title-word">of</span>
   222	              <span class="hero__title-word hero__title-word--emph">Scent</span>
   223	            </span>
   224	            <span class="hero__title-line hero__title-line--3">
   225	              <span class="hero__title-word">as</span>
   226	              <span class="hero__title-word">Alchemy</span>
   227	            </span>
   228	          </h1>
   229	          
   230	          <!-- Subtitle with Flourish -->
   231	          <div class="hero__subtitle">
   232	            <div class="hero__subtitle-flourish hero__subtitle-flourish--left"></div>
   233	            <span class="hero__subtitle-text">Where Botany Becomes Poetry</span>
   234	            <div class="hero__subtitle-flourish hero__subtitle-flourish--right"></div>
   235	          </div>
   236	          
   237	          <!-- Manuscript Excerpt -->
   238	          <div class="hero__excerpt">
   239	            <p class="hero__excerpt-text">
   240	              Within our atelier, time slows to the rhythm of distillation. Each botanical is treated as a verse in nature's manuscript, its essence carefully extracted and preserved. Our practice honors the ancient alchemical tradition—transforming raw botanical matter into olfactory gold through patience, precision, and profound respect for the natural world.
   241	            </p>
   242	            <div class="hero__excerpt-rule"></div>
   243	            <cite class="hero__excerpt-citation">— Master Perfumer's Journal</cite>
   244	          </div>
   245	          
   246	          <!-- Atelier Actions -->
   247	          <div class="hero__actions">
   248	            <a href="#compounds" class="btn btn--primary" data-hover-text="Explore the Compendium">
   249	              <span class="btn__text">Enter the Atelier</span>
   250	              <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   251	                <path d="M5 12h14M12 5l7 7-7 7"/>
   252	              </svg>
   253	            </a>
   254	            <a href="#process" class="btn btn--secondary" data-hover-text="Witness the Alchemy">
   255	              <span class="btn__text">Our Alchemy</span>
   256	              <span class="btn__ornament">❧</span>
   257	            </a>
   258	          </div>
   259	          
   260	          <!-- Atelier Credentials -->
   261	          <div class="hero__credentials">
   262	            <div class="hero__credential">
   263	              <span class="hero__credential-number">72</span>
   264	              <span class="hero__credential-label">Hour Distillation</span>
   265	            </div>
   266	            <div class="hero__credential">
   267	              <span class="hero__credential-number">∞</span>
   268	              <span class="hero__credential-label">Patience</span>
   269	            </div>
   270	            <div class="hero__credential">
   271	              <span class="hero__credential-number">100%</span>
   272	              <span class="hero__credential-label">Artisanal</span>
   273	            </div>
   274	          </div>
   275	        </div>
   276	        
   277	        <!-- Hero Visual - Hand-blown Vessel -->
   278	        <div class="hero__visual">
   279	          <div class="hero__vessel-container">
   280	            <!-- Vessel -->
   281	            <div class="hero__vessel">
   282	              <div class="hero__vessel-neck"></div>
   283	              <div class="hero__vessel-body">
   284	                <div class="hero__vessel-liquid">
   285	                  <div class="vessel__meniscus"></div>
   286	                  <div class="vessel__reflection"></div>
   287	                </div>
   288	                <div class="hero__vessel-label">
   289	                  <span class="vessel-label__n">N°</span>
   290	                  <span class="vessel-label__number">724</span>
   291	                </div>
   292	              </div>
   293	              <div class="hero__vessel-base"></div>
   294	            </div>
   295	            
   296	            <!-- Vessel Stand -->
   297	            <div class="hero__vessel-stand"></div>
   298	            
   299	            <!-- Botanical Specimens -->
   300	            <div class="hero__botanicals">
   301	              <div class="hero__botanical hero__botanical--lavender">
   302	                <div class="botanical__stem"></div>
   303	                <div class="botanical__blossom"></div>
   304	              </div>
   305	              <div class="hero__botanical hero__botanical--rose">
   306	                <div class="botanical__stem"></div>
   307	                <div class="botanical__petals"></div>
   308	              </div>
   309	              <div class="hero__botanical hero__botanical--eucalyptus">
   310	                <div class="botanical__stem"></div>
   311	                <div class="botanical__leaves"></div>
   312	              </div>
   313	            </div>
   314	          </div>
   315	          
   316	          <!-- Alchemical Symbol -->
   317	          <div class="hero__symbol" aria-hidden="true">
   318	            <svg class="hero__symbol-svg" viewBox="0 0 100 100">
   319	              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="1,2"/>
   320	              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" stroke-width="2"/>
   321	              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
   322	            </svg>
   323	          </div>
   324	        </div>
   325	      </div>
   326	      
   327	      <!-- Scroll Indicator - Quill -->
   328	      <div class="hero__scroll-indicator">
   329	        <div class="scroll-indicator__quill">
   330	          <div class="quill__nib"></div>
   331	          <div class="quill__shaft"></div>
   332	          <div class="quill__feather"></div>
   333	        </div>
   334	        <span class="scroll-indicator__label">Continue Reading</span>
   335	      </div>
   336	    </section>
   337	    
   338	    <!-- Compounds Section - Botanical Compendium -->
   339	    <section class="compendium" id="compounds">
   340	      <!-- Section Border -->
   341	      <div class="section-border" aria-hidden="true">
   342	        <span class="section-border__ornament">❦</span>
   343	      </div>
   344	      
   345	      <div class="compendium__container">
   346	        <!-- Compendium Header -->
   347	        <div class="compendium__header">
   348	          <span class="section-label">First Folio</span>
   349	          <h2 class="section-title">
   350	            <span class="section-title__line">The Botanical</span>
   351	            <span class="section-title__line section-title__line--emph">Compendium</span>
   352	          </h2>
   353	          <div class="compendium__rule"></div>
   354	          <p class="section-description">
   355	            A curated collection of botanical essences, each documented with the care of an illuminated manuscript. These are not merely scents, but captured moments of nature's poetry.
   356	          </p>
   357	        </div>
   358	        
   359	        <!-- Botanical Filter - Renaissance Style -->
   360	        <div class="compendium__filters">
   361	          <div class="compendium__filter-group">
   362	            <div class="compendium__filter-label">Filter by Humour:</div>
   363	            <div class="compendium__filter-buttons">
   364	              <button class="compendium__filter" data-filter="all" aria-pressed="true">
   365	                <span class="compendium__filter-text">All Essences</span>
   366	                <span class="compendium__filter-ornament">✦</span>
   367	              </button>
   368	              <button class="compendium__filter" data-filter="calming">
   369	                <span class="compendium__filter-text">Calming</span>
   370	                <span class="compendium__filter-icon">☾</span>
   371	              </button>
   372	              <button class="compendium__filter" data-filter="uplifting">
   373	                <span class="compendium__filter-text">Uplifting</span>
   374	                <span class="compendium__filter-icon">☀</span>
   375	              </button>
   376	              <button class="compendium__filter" data-filter="grounding">
   377	                <span class="compendium__filter-text">Grounding</span>
   378	                <span class="compendium__filter-icon">♁</span>
   379	              </button>
   380	              <button class="compendium__filter" data-filter="clarifying">
   381	                <span class="compendium__filter-text">Clarifying</span>
   382	                <span class="compendium__filter-icon">☁</span>
   383	              </button>
   384	            </div>
   385	          </div>
   386	          
   387	          <!-- Manuscript Sort -->
   388	          <div class="compendium__sort">
   389	            <select class="compendium__sort-select" aria-label="Sort compendium">
   390	              <option value="folio">Folio Order</option>
   391	              <option value="humour">By Humour</option>
   392	              <option value="rarity">By Rarity</option>
   393	              <option value="season">By Season</option>
   394	            </select>
   395	            <div class="compendium__sort-ornament"></div>
   396	          </div>
   397	        </div>
   398	        
   399	        <!-- Botanical Cards - Illuminated Style -->
   400	        <div class="compendium__grid">
   401	          <!-- Essence 1 - Featured -->
   402	          <article class="essence-card essence-card--featured" data-humour="calming" data-rarity="rare" data-season="spring">
   403	            <div class="essence-card__illumination">
   404	              <!-- Hand-drawn Botanical Illustration -->
   405	              <div class="essence-card__illustration">
   406	                <svg class="essence-card__botanical-svg" viewBox="0 0 200 200" aria-hidden="true">
   407	                  <!-- Lavender stem and flowers -->
   408	                  <path d="M100 180 L100 80" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
   409	                  <g transform="translate(100 60)">
   410	                    <circle cx="0" cy="0" r="8" fill="currentColor" opacity="0.6"/>
   411	                    <circle cx="15" cy="-10" r="6" fill="currentColor" opacity="0.5"/>
   412	                    <circle cx="-15" cy="-10" r="6" fill="currentColor" opacity="0.5"/>
   413	                    <circle cx="0" cy="-20" r="5" fill="currentColor" opacity="0.4"/>
   414	                  </g>
   415	                </svg>
   416	              </div>
   417	              
   418	              <!-- Gold Leaf Number -->
   419	              <div class="essence-card__folio">
   420	                <span class="essence-card__folio-number">I</span>
   421	              </div>
   422	              
   423	              <!-- Rarity Badge -->
   424	              <div class="essence-card__badge" aria-label="Rare essence">
   425	                <span class="essence-card__badge-text">Rare</span>
   426	                <div class="essence-card__badge-ornament"></div>
   427	              </div>
   428	            </div>
   429	            
   430	            <div class="essence-card__content">
   431	              <!-- Latin Name with Calligraphy -->
   432	              <div class="essence-card__latin">
   433	                <span class="essence-card__latin-name">Lavandula × intermedia</span>
   434	                <div class="essence-card__latin-rule"></div>
   435	              </div>
   436	              
   437	              <!-- Common Name -->
   438	              <h3 class="essence-card__title">Provence Lavender</h3>
   439	              
   440	              <!-- Humour Symbol -->
   441	              <div class="essence-card__humour">
   442	                <span class="essence-card__humour-icon" aria-label="Calming essence">☾</span>
   443	                <span class="essence-card__humour-label">Calming</span>
   444	              </div>
   445	              
   446	              <!-- Description -->
   447	              <p class="essence-card__description">
   448	                Harvested at dawn in the Provençal hills, this lavender possesses a sweetness found only in blossoms kissed by the morning's first light. Its effect is one of profound calm, like the silence between breaths.
   449	              </p>
   450	              
   451	              <!-- Season & Notes -->
   452	              <div class="essence-card__notes">
   453	                <div class="essence-card__note">
   454	                  <span class="essence-card__note-label">Season</span>
   455	                  <span class="essence-card__note-value">Early Summer</span>
   456	                </div>
   457	                <div class="essence-card__note">
   458	                  <span class="essence-card__note-label">Notes</span>
   459	                  <span class="essence-card__note-value">Floral • Herbaceous • Sweet</span>
   460	                </div>
   461	                <div class="essence-card__note">
   462	                  <span class="essence-card__note-label">Extraction</span>
   463	                  <span class="essence-card__note-value">Steam Distillation</span>
   464	                </div>
   465	              </div>
   466	              
   467	              <!-- Footer with Price and Action -->
   468	              <div class="essence-card__footer">
   469	                <div class="essence-card__pricing">
   470	                  <span class="essence-card__price">$42</span>
   471	                  <span class="essence-card__measure">per 5ml phial</span>
   472	                </div>
   473	                <button class="essence-card__action" aria-label="Add Provence Lavender to collection">
   474	                  <svg class="essence-card__action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   475	                    <path d="M12 5v14M5 12h14"/>
   476	                  </svg>
   477	                  <span class="essence-card__action-text">To Vial</span>
   478	                </button>
   479	              </div>
   480	            </div>
   481	          </article>
   482	          
   483	          <!-- Additional essence cards would follow similar structure -->
   484	          <!-- Essence 2 -->
   485	          <article class="essence-card" data-humour="clarifying" data-rarity="common" data-season="autumn">
   486	            <div class="essence-card__illumination">
   487	              <div class="essence-card__illustration">
   488	                <!-- Eucalyptus illustration -->
   489	              </div>
   490	              <div class="essence-card__folio">
   491	                <span class="essence-card__folio-number">II</span>
   492	              </div>
   493	            </div>
   494	            
   495	            <div class="essence-card__content">
   496	              <div class="essence-card__latin">
   497	                <span class="essence-card__latin-name">Eucalyptus globulus</span>
   498	                <div class="essence-card__latin-rule"></div>
   499	              </div>
   500	              <h3 class="essence-card__title">Tasmanian Eucalyptus</h3>
   501	              <div class="essence-card__humour">
   502	                <span class="essence-card__humour-icon" aria-label="Clarifying essence">☁</span>
   503	                <span class="essence-card__humour-label">Clarifying</span>
   504	              </div>
   505	              <p class="essence-card__description">
   506	                The crisp, clean scent of Tasmania's ancient forests. This essence clears the mind as morning mist clears from mountain valleys.
   507	              </p>
   508	              <div class="essence-card__notes">
   509	                <div class="essence-card__note">
   510	                  <span class="essence-card__note-label">Season</span>
   511	                  <span class="essence-card__note-value">Autumn</span>
   512	                </div>
   513	                <div class="essence-card__note">
   514	                  <span class="essence-card__note-label">Notes</span>
   515	                  <span class="essence-card__note-value">Camphorous • Fresh • Clean</span>
   516	                </div>
   517	              </div>
   518	              <div class="essence-card__footer">
   519	                <div class="essence-card__pricing">
   520	                  <span class="essence-card__price">$36</span>
   521	                  <span class="essence-card__measure">per 5ml phial</span>
   522	                </div>
   523	                <button class="essence-card__action" aria-label="Add Tasmanian Eucalyptus to collection">
   524	                  <svg class="essence-card__action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   525	                    <path d="M12 5v14M5 12h14"/>
   526	                  </svg>
   527	                  <span class="essence-card__action-text">To Vial</span>
   528	                </button>
   529	              </div>
   530	            </div>
   531	          </article>
   532	          
   533	          <!-- Essence 3 -->
   534	          <article class="essence-card" data-humour="uplifting" data-rarity="limited" data-season="spring">
   535	            <div class="essence-card__illumination">
   536	              <div class="essence-card__illustration">
   537	                <!-- Bergamot illustration -->
   538	              </div>
   539	              <div class="essence-card__folio">
   540	                <span class="essence-card__folio-number">III</span>
   541	              </div>
   542	              <div class="essence-card__badge" aria-label="Limited edition">
   543	                <span class="essence-card__badge-text">Limited</span>
   544	              </div>
   545	            </div>
   546	            
   547	            <div class="essence-card__content">
   548	              <div class="essence-card__latin">
   549	                <span class="essence-card__latin-name">Citrus bergamia</span>
   550	                <div class="essence-card__latin-rule"></div>
   551	              </div>
   552	              <h3 class="essence-card__title">Calabrian Bergamot</h3>
   553	              <div class="essence-card__humour">
   554	                <span class="essence-card__humour-icon" aria-label="Uplifting essence">☀</span>
   555	                <span class="essence-card__humour-label">Uplifting</span>
   556	              </div>
   557	              <p class="essence-card__description">
   558	                From Italy's sun-drenched Calabrian coast, this essence captures the joyful brightness of citrus groves at harvest. A note of pure sunlight.
   559	              </p>
   560	              <div class="essence-card__notes">
   561	                <div class="essence-card__note">
   562	                  <span class="essence-card__note-label">Season</span>
   563	                  <span class="essence-card__note-value">Late Winter</span>
   564	                </div>
   565	                <div class="essence-card__note">
   566	                  <span class="essence-card__note-label">Notes</span>
   567	                  <span class="essence-card__note-value">Citrus • Bright • Spicy</span>
   568	                </div>
   569	              </div>
   570	              <div class="essence-card__footer">
   571	                <div class="essence-card__pricing">
   572	                  <span class="essence-card__price">$48</span>
   573	                  <span class="essence-card__measure">per 5ml phial</span>
   574	                </div>
   575	                <button class="essence-card__action" aria-label="Add Calabrian Bergamot to collection">
   576	                  <svg class="essence-card__action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   577	                    <path d="M12 5v14M5 12h14"/>
   578	                  </svg>
   579	                  <span class="essence-card__action-text">To Vial</span>
   580	                </button>
   581	              </div>
   582	            </div>
   583	          </article>
   584	          
   585	          <!-- Additional cards... -->
   586	        </div>
   587	        
   588	        <!-- Compendium Footer -->
   589	        <div class="compendium__footer">
   590	          <div class="compendium__counter">
   591	            <span class="compendium__counter-current">3</span>
   592	            <span class="compendium__counter-separator">of</span>
   593	            <span class="compendium__counter-total">12</span>
   594	            <span class="compendium__counter-label">Essences Documented</span>
   595	          </div>
   596	          <button class="btn btn--outline" id="loadMoreEssences">
   597	            <span class="btn__text">Continue Reading</span>
   598	            <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   599	              <path d="M5 12h14M12 5l7 7-7 7"/>
   600	            </svg>
   601	          </button>
   602	        </div>
   603	      </div>
   604	    </section>
   605	    
   606	    <!-- Process Section - The Alchemy -->
   607	    <section class="alchemy" id="process">
   608	      <!-- Watermark -->
   609	      <div class="alchemy__watermark" aria-hidden="true">
   610	        <span class="alchemy__watermark-text">Ars Magna</span>
   611	      </div>
   612	      
   613	      <div class="alchemy__container">
   614	        <div class="alchemy__header">
   615	          <span class="section-label">Second Folio</span>
   616	          <h2 class="section-title">
   617	            <span class="section-title__line">The Art of</span>
   618	            <span class="section-title__line section-title__line--emph">Alchemical Transformation</span>
   619	          </h2>
   620	          <div class="alchemy__rule"></div>
   621	          <p class="section-description">
   622	            Our practice follows the ancient alchemical principle: solve et coagula. To dissolve and reconstitute. To transform base botanical matter into olfactory gold through time, heat, and intention.
   623	          </p>
   624	        </div>
   625	        
   626	        <!-- Alchemical Process Steps -->
   627	        <div class="alchemy__process">
   628	          <!-- Step 1 -->
   629	          <article class="alchemy-step">
   630	            <div class="alchemy-step__number">
   631	              <span class="alchemy-step__roman">I</span>
   632	            </div>
   633	            <div class="alchemy-step__content">
   634	              <h3 class="alchemy-step__title">Nigredo • The Blackening</h3>
   635	              <p class="alchemy-step__description">
   636	                The raw botanical material undergoes its initial transformation through careful drying and preparation. This stage represents the dissolution of the material's original form, a necessary darkness before illumination.
   637	              </p>
   638	              <div class="alchemy-step__details">
   639	                <div class="alchemy-step__detail">
   640	                  <span class="alchemy-step__detail-label">Duration</span>
   641	                  <span class="alchemy-step__detail-value">7-14 Days</span>
   642	                </div>
   643	                <div class="alchemy-step__detail">
   644	                  <span class="alchemy-step__detail-label">Temperature</span>
   645	                  <span class="alchemy-step__detail-value">Ambient</span>
   646	                </div>
   647	              </div>
   648	            </div>
   649	            <div class="alchemy-step__symbol" aria-hidden="true">♁</div>
   650	          </article>
   651	          
   652	          <!-- Step 2 -->
   653	          <article class="alchemy-step">
   654	            <div class="alchemy-step__number">
   655	              <span class="alchemy-step__roman">II</span>
   656	            </div>
   657	            <div class="alchemy-step__content">
   658	              <h3 class="alchemy-step__title">Albedo • The Whitening</h3>
   659	              <p class="alchemy-step__description">
   660	                Through gentle steam distillation at precisely 40°C, the volatile aromatic compounds are released. This careful extraction preserves the most delicate notes that higher temperatures would destroy.
   661	              </p>
   662	              <div class="alchemy-step__details">
   663	                <div class="alchemy-step__detail">
   664	                  <span class="alchemy-step__detail-label">Duration</span>
   665	                  <span class="alchemy-step__detail-value">72 Hours</span>
   666	                </div>
   667	                <div class="alchemy-step__detail">
   668	                  <span class="alchemy-step__detail-label">Temperature</span>
   669	                  <span class="alchemy-step__detail-value">40°C ±0.1</span>
   670	                </div>
   671	              </div>
   672	            </div>
   673	            <div class="alchemy-step__symbol" aria-hidden="true">☁</div>
   674	          </article>
   675	          
   676	          <!-- Step 3 -->
   677	          <article class="alchemy-step">
   678	            <div class="alchemy-step__number">
   679	              <span class="alchemy-step__roman">III</span>
   680	            </div>
   681	            <div class="alchemy-step__content">
   682	              <h3 class="alchemy-step__title">Citrinitas • The Yellowing</h3>
   683	              <p class="alchemy-step__description">
   684	                The separated essential oil undergoes a period of maturation in hand-blown glass vessels. During this stage, the aromatic profile deepens and complexifies, much like wine aging in oak barrels.
   685	              </p>
   686	              <div class="alchemy-step__details">
   687	                <div class="alchemy-step__detail">
   688	                  <span class="alchemy-step__detail-label">Duration</span>
   689	                  <span class="alchemy-step__detail-value">30-90 Days</span>
   690	                </div>
   691	                <div class="alchemy-step__detail">
   692	                  <span class="alchemy-step__detail-label">Vessel</span>
   693	                  <span class="alchemy-step__detail-value">Hand-blown Glass</span>
   694	                </div>
   695	              </div>
   696	            </div>
   697	            <div class="alchemy-step__symbol" aria-hidden="true">☀</div>
   698	          </article>
   699	          
   700	          <!-- Step 4 -->
   701	          <article class="alchemy-step">
   702	            <div class="alchemy-step__number">
   703	              <span class="alchemy-step__roman">IV</span>
   704	            </div>
   705	            <div class="alchemy-step__content">
   706	              <h3 class="alchemy-step__title">Rubedo • The Reddening</h3>
   707	              <p class="alchemy-step__description">
   708	                The final essence is evaluated, filtered, and bottled by hand. Each phial receives our wax seal, marking the completion of the transformation from raw botanical to perfected essence.
   709	              </p>
   710	              <div class="alchemy-step__details">
   711	                <div class="alchemy-step__detail">
   712	                  <span class="alchemy-step__detail-label">Process</span>
   713	                  <span class="alchemy-step__detail-value">Hand-bottling</span>
   714	                </div>
   715	                <div class="alchemy-step__detail">
   716	                  <span class="alchemy-step__detail-label">Seal</span>
   717	                  <span class="alchemy-step__detail-value">Beeswax</span>
   718	                </div>
   719	              </div>
   720	            </div>
   721	            <div class="alchemy-step__symbol" aria-hidden="true">❤</div>
   722	          </article>
   723	        </div>
   724	        
   725	        <!-- Alchemical Apparatus -->
   726	        <div class="alchemy__apparatus">
   727	          <div class="apparatus__item apparatus__item--still">
   728	            <div class="apparatus__illustration"></div>
   729	            <div class="apparatus__caption">Copper Alembic Still</div>
   730	          </div>
   731	          <div class="apparatus__item apparatus__item--vessel">
   732	            <div class="apparatus__illustration"></div>
   733	            <div class="apparatus__caption">Maturation Vessels</div>
   734	          </div>
   735	          <div class="apparatus__item apparatus__item--tools">
   736	            <div class="apparatus__illustration"></div>
   737	            <div class="apparatus__caption">Alchemist's Tools</div>
   738	          </div>
   739	        </div>
   740	      </div>
   741	    </section>
   742	    
   743	    <!-- Testimonials - Patron's Manuscript -->
   744	    <section class="manuscript" id="manuscript">
   745	      <!-- Aged Paper Background -->
   746	      <div class="manuscript__paper" aria-hidden="true">
   747	        <div class="manuscript__stain manuscript__stain--1"></div>
   748	        <div class="manuscript__stain manuscript__stain--2"></div>
   749	        <div class="manuscript__watermark"></div>
   750	      </div>
   751	      
   752	      <div class="manuscript__container">
   753	        <div class="manuscript__header">
   754	          <span class="section-label">Fourth Folio</span>
   755	          <h2 class="section-title">
   756	            <span class="section-title__line">Patron's</span>
   757	            <span class="section-title__line section-title__line--emph">Manuscript</span>
   758	          </h2>
   759	          <div class="manuscript__rule"></div>
   760	          <p class="section-description">
   761	            Words from those who have experienced our alchemical transformations. These testimonials are preserved as illuminated entries in our patron's manuscript.
   762	          </p>
   763	        </div>
   764	        
   765	        <!-- Testimonial Entries -->
   766	        <div class="manuscript__entries">
   767	          <!-- Entry 1 - Illuminated -->
   768	          <article class="manuscript-entry manuscript-entry--illuminated">
   769	            <div class="manuscript-entry__border">
   770	              <div class="manuscript-entry__corner manuscript-entry__corner--tl"></div>
   771	              <div class="manuscript-entry__corner manuscript-entry__corner--tr"></div>
   772	              <div class="manuscript-entry__corner manuscript-entry__corner--bl"></div>
   773	              <div class="manuscript-entry__corner manuscript-entry__corner--br"></div>
   774	            </div>
   775	            
   776	            <div class="manuscript-entry__content">
   777	              <!-- Illuminated Initial -->
   778	              <div class="manuscript-entry__initial">T</div>
   779	              
   780	              <blockquote class="manuscript-entry__quote">
   781	                <p>
   782	                  The Provence Lavender has transformed my evening ritual into a sacred practice. Its scent is not merely pleasant—it is profound, layered, and seems to hold within it the very quiet of the Provençal hills at dusk. This is not aromatherapy; it is time travel for the senses.
   783	                </p>
   784	              </blockquote>
   785	              
   786	              <div class="manuscript-entry__attribution">
   787	                <div class="manuscript-entry__author">
   788	                  <cite class="manuscript-entry__name">Isabelle Moreau</cite>
   789	                  <span class="manuscript-entry__title">Writer & Historian, Paris</span>
   790	                </div>
   791	                <div class="manuscript-entry__seal">
   792	                  <span class="manuscript-entry__seal-text">Verified Patron</span>
   793	                </div>
   794	              </div>
   795	              
   796	              <div class="manuscript-entry__folio">
   797	                <span class="manuscript-entry__folio-number">Folio VII, Entry 12</span>
   798	              </div>
   799	            </div>
   800	          </article>
   801	          
   802	          <!-- Entry 2 -->
   803	          <article class="manuscript-entry">
   804	            <div class="manuscript-entry__content">
   805	              <blockquote class="manuscript-entry__quote">
   806	                <p>
   807	                  As a chef, I understand transformation. What Atelier Arôme achieves with botanicals is culinary artistry for the soul. The Calabrian Bergamot is sunshine captured—it brightens not just a room, but one's very disposition.
   808	                </p>
   809	              </blockquote>
   810	              <div class="manuscript-entry__attribution">
   811	                <div class="manuscript-entry__author">
   812	                  <cite class="manuscript-entry__name">Marco Ferrara</cite>
   813	                  <span class="manuscript-entry__title">Michelin-starred Chef, Florence</span>
   814	                </div>
   815	              </div>
   816	            </div>
   817	          </article>
   818	          
   819	          <!-- Entry 3 -->
   820	          <article class="manuscript-entry">
   821	            <div class="manuscript-entry__content">
   822	              <blockquote class="manuscript-entry__quote">
   823	                <p>
   824	                  The attention to detail is evident in every aspect. From the wax seal on the phial to the complexity of the scent itself—this is craftsmanship of the highest order. Each essence tells a story.
   825	                </p>
   826	              </blockquote>
   827	              <div class="manuscript-entry__attribution">
   828	                <div class="manuscript-entry__author">
   829	                  <cite class="manuscript-entry__name">Dr. Evelyn Reed</cite>
   830	                  <span class="manuscript-entry__title">Botanical Researcher, Oxford</span>
   831	                </div>
   832	              </div>
   833	            </div>
   834	          </article>
   835	        </div>
   836	        
   837	        <!-- Manuscript Navigation -->
   838	        <div class="manuscript__navigation">
   839	          <button class="manuscript__nav-button" aria-label="Previous entry">
   840	            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   841	              <path d="M15 18l-6-6 6-6"/>
   842	            </svg>
   843	          </button>
   844	          <div class="manuscript__pagination">
   845	            <span class="manuscript__page-current">1</span>
   846	            <span class="manuscript__page-separator">/</span>
   847	            <span class="manuscript__page-total">7</span>
   848	          </div>
   849	          <button class="manuscript__nav-button" aria-label="Next entry">
   850	            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   851	              <path d="M9 18l6-6-6-6"/>
   852	            </svg>
   853	          </button>
   854	        </div>
   855	      </div>
   856	    </section>
   857	    
   858	    <!-- Newsletter - Correspondence -->
   859	    <section class="correspondence" id="correspondence">
   860	      <!-- Wax Seal Background -->
   861	      <div class="correspondence__seal" aria-hidden="true">
   862	        <div class="correspondence__seal-ring"></div>
   863	        <div class="correspondence__seal-center"></div>
   864	      </div>
   865	      
   866	      <div class="correspondence__container">
   867	        <div class="correspondence__content">
   868	          <span class="section-label section-label--light">Correspondence</span>
   869	          <h2 class="correspondence__title">
   870	            <span class="correspondence__title-line">Receive Our</span>
   871	            <span class="correspondence__title-line correspondence__title-line--emph">Quarterly Folio</span>
   872	          </h2>
   873	          
   874	          <div class="correspondence__rule"></div>
   875	          
   876	          <p class="correspondence__description">
   877	            Each season, we dispatch a handwritten folio detailing new discoveries, alchemical notes, and insights from the atelier. Join our correspondence to receive these missives directly.
   878	          </p>
   879	          
   880	          <form class="correspondence__form" id="correspondenceForm">
   881	            <div class="correspondence__field">
   882	              <label for="correspondenceName" class="visually-hidden">Your name</label>
   883	              <input 
   884	                type="text" 
   885	                id="correspondenceName" 
   886	                class="correspondence__input" 
   887	                placeholder="Your name"
   888	                required
   889	              >
   890	              <div class="correspondence__field-ornament"></div>
   891	            </div>
   892	            
   893	            <div class="correspondence__field">
   894	              <label for="correspondenceEmail" class="visually-hidden">Your email</label>
   895	              <input 
   896	                type="email" 
   897	                id="correspondenceEmail" 
   898	                class="correspondence__input" 
   899	                placeholder="Your email address"
   900	                required
   901	              >
   902	              <div class="correspondence__field-ornament"></div>
   903	            </div>
   904	            
   905	            <div class="correspondence__consent">
   906	              <input type="checkbox" id="correspondenceConsent" class="correspondence__checkbox" required>
   907	              <label for="correspondenceConsent" class="correspondence__consent-label">
   908	                I wish to receive the quarterly folio and occasional atelier updates. I understand I may withdraw my consent at any time.
   909	              </label>
   910	            </div>
   911	            
   912	            <button type="submit" class="correspondence__submit">
   913	              <span class="correspondence__submit-text">Subscribe to Correspondence</span>
   914	              <svg class="correspondence__submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   915	                <path d="M22 2L11 13"/>
   916	                <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
   917	              </svg>
   918	            </button>
   919	          </form>
   920	        </div>
   921	        
   922	        <!-- Correspondence Visual -->
   923	        <div class="correspondence__visual" aria-hidden="true">
   924	          <div class="correspondence__envelope">
   925	            <div class="envelope__flap"></div>
   926	            <div class="envelope__body"></div>
   927	            <div class="envelope__wax-seal">
   928	              <div class="wax-seal__ring"></div>
   929	              <div class="wax-seal__initial">A</div>
   930	            </div>
   931	          </div>
   932	          
   933	          <div class="correspondence__quill">
   934	            <div class="quill__feather"></div>
   935	            <div class="quill__shaft"></div>
   936	            <div class="quill__nib"></div>
   937	          </div>
   938	        </div>
   939	      </div>
   940	    </section>
   941	  </main>
   942	  
   943	  <!-- Footer - Colophon -->
   944	  <footer class="colophon">
   945	    <div class="colophon__container">
   946	      <!-- Atelier Information -->
   947	      <div class="colophon__atelier">
   948	        <a href="#hero" class="colophon__seal">
   949	          <div class="colophon__seal-graphic"></div>
   950	          <span class="colophon__atelier-name">Atelier Arôme</span>
   951	        </a>
   952	        <address class="colophon__address">
   953	          <p>Rue des Alchimistes, 7</p>
   954	          <p>Provence-Alpes-Côte d'Azur</p>
   955	          <p>France</p>
   956	        </address>
   957	        <div class="colophon__hours">
   958	          <p>The Atelier is open by appointment only</p>
   959	          <p>Correspondence welcome at all hours</p>
   960	        </div>
   961	      </div>
   962	      
   963	      <!-- Navigation -->
   964	      <div class="colophon__navigation">
   965	        <h3 class="colophon__heading">The Folios</h3>
   966	        <ul class="colophon__list">
   967	          <li><a href="#compounds" class="colophon__link">Compendium</a></li>
   968	          <li><a href="#process" class="colophon__link">Alchemy</a></li>
   969	          <li><a href="#atelier" class="colophon__link">The Atelier</a></li>
   970	          <li><a href="#manuscript" class="colophon__link">Manuscript</a></li>
   971	        </ul>
   972	      </div>
   973	      
   974	      <!-- Correspondence -->
   975	      <div class="colophon__correspondence">
   976	        <h3 class="colophon__heading">Correspondence</h3>
   977	        <ul class="colophon__list">
   978	          <li>
   979	            <svg class="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   980	              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
   981	              <polyline points="22,6 12,13 2,6"/>
   982	            </svg>
   983	            <a href="mailto:correspondence@atelierarome.com">correspondence@atelierarome.com</a>
   984	          </li>
   985	          <li>
   986	            <svg class="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   987	              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
   988	              <circle cx="12" cy="10" r="3"/>
   989	            </svg>
   990	            <span>Provence, France</span>
   991	          </li>
   992	        </ul>
   993	        
   994	        <!-- Social Correspondence -->
   995	        <div class="colophon__social">
   996	          <a href="#" class="colophon__social-link" aria-label="Instagram correspondence">
   997	            <svg class="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
   998	              <rect x="2" y="2" width="20" height="20" rx="5"/>
   999	              <circle cx="12" cy="12" r="4"/>
  1000	              <circle cx="18" cy="6" r="1" fill="currentColor"/>
