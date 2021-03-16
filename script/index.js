'use strict';

import generateHeader from './generate_header.js';
import generateCatalog from './generate_catalog.js';
import generateFooter from './generate_footer.js';
import generateGoodsPage from './generate_goods_page.js';
import {loadData} from './load_data.js';


generateHeader();
generateFooter();
generateCatalog();
generateGoodsPage();
loadData();