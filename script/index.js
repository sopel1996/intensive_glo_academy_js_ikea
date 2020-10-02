'use strict';

import generateHeader from './generate_header.js';
import generateCatalog from './generate_catalog.js';
import generateFooter from './generate_footer.js';
import generateSubCatalog from './generate_subcatalog.js';
import {catalog} from './catalog.js';
import {loadData} from './load_data.js';


generateHeader();
generateCatalog();
generateFooter();
generateSubCatalog();
catalog();
loadData();