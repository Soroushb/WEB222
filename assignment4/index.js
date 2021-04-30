(function() {
  /**
   * Helper object for working with countries data and extracting information.
   * See countries-data.js for format of the countries data set.
   */
  let countries = {
    /**
     * Store all countries from countries-data.js on `countries.all` for convenience.
     */
    all: window.countriesData,
    /**
     * Return an array of all countries, with the Name Object replaced by the
     * appropriate translation, or English if not specified (or unknown).  For
     * example, when language="English", you would process the record for Canada into:
     *
     * {
     *     code: "CA",
     *     continent: "Americas",
     *     areaInKm2: 9984670,
     *     population: 36624199,
     *     capital: "Ottawa",
     *     name: "Canada"
     * }
     *
     * Supported languages include:
     *
     * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
     *
     * Uses `countries.all` as the underlying array of countries to be processed.
     *
     * HINT: make sure you don't overwrite the original name object.
     */

    getByLanguage: function(language) {
      var countryLanguage;
      var array = [];
      countries.all.forEach(function(country) {
        if (language === 'Arabic') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.Arabic
          };
        } else if (language === 'English') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.English
          };
        } else if (language === 'Chinese') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.Chinese
          };
        } else if (language === 'French') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.French
          };
        } else if (language === 'Hindi') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.Hindi
          };
        } else if (language === 'Korean') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.Korean
          };
        } else if (language === 'Japanese') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.Japanese
          };
        } else if (language === 'Russian') {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.Russian
          };
        } else {
          countryLanguage = {
            code: country.code,
            continent: country.continent,
            areaInKm2: country.areaInKm2,
            population: country.population,
            capital: country.capital,
            name: country.name.English
          };
        }
        array.push(countryLanguage);
      });
      return array;
    },

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */
    getByPopulation: function(minPopulation, maxPopulation) {
      let country = [];
      for (let x of this.getByLanguage('English')) {
        if (maxPopulation != null) {
          if (x.population > minPopulation && x.population <= maxPopulation) {
            country.push(x);
          }
        } else {
          if (x.population > minPopulation) {
            country.push(x);
          }
        }
      }
      return country;
    },

    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function(continent, minArea) {
      let country = [];
      for (let x of this.getByLanguage('English')) {
        if (x.continent === continent && x.areaInKm2 >= minArea) {
          country.push(x);
        }
      }
      return country;
    }
  };

  /**
   * Helper functions for building table elements.
   */
  let tableHelper = {
    /**
     * Clears (any) existing rows from the #table-rows table body
     */
    clearTable: function() {
      var tableRow = document.querySelector('#table-rows');
      tableRow.innerHTML = '';
    },

    /**
     * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img>
     * element with its `src` property set the appropriate flag image URL
     * for this code, e.g., src="flags/ca.png" for Canada.
     */
    countryCodeToFlagImg: function(countryCode) {
      var image = document.createElement('img');
      image.src = 'flags/' + countryCode.toLowerCase() + '.png';
      image.width = 30;
      return image;
    },

    /**
     * Takes a single `country` object and converts it to a <tr> with <td>
     * child elements for every column in the row.  The row should match the
     * expected format of the table (i.e., flag, code, country, continent, etc).
     * Return the new <tr>...</tr> row.
     *
     * Use the DOM methods document.createElement(), element.appendChild(), etc
     * to create your <tr> row.
     */
    countryToRow: function(country) {
      let row = document.createElement('tr');
      let flagTd = document.createElement('td');
      flagTd = tableHelper.countryCodeToFlagImg(country.code);
      row.appendChild(flagTd);
      let codeTd = document.createElement('td');
      codeTd.innerHTML = country.code;
      row.appendChild(codeTd);
      let nameTd = document.createElement('td');
      nameTd.innerHTML = country.name;
      row.appendChild(nameTd);
      let continentTd = document.createElement('td');
      continentTd.innerHTML = country.continent;
      row.appendChild(continentTd);
      let areaTd = document.createElement('td');
      areaTd.innerHTML = country.areaInKm2;
      row.appendChild(areaTd);
      let populationTd = document.createElement('td');
      populationTd.innerHTML = country.population;
      row.appendChild(populationTd);
      let capitalTd = document.createElement('td');
      capitalTd.innerHTML = country.capital;
      row.appendChild(capitalTd);
      return row;
    },

    /**
     * Takes an array of `country` Objects named `countries`, and passes each
     * `country` in the array  to `tableHelper.countryToRow()`.  The resulting
     * rows are then appended to the #table-rows table body element.  Make sure
     * you use `tableHelper.clear()` to remove any existing rows before you do this.
     */
    countriesToTable: function(countries) {
      tableHelper.clearTable();
      let length = countries.length;
      for (var i = 0; i < length; i++) {
        let countryRow = tableHelper.countryToRow(countries[i]);
        let table = document.querySelector('#table-rows');
        table.appendChild(countryRow);
      }
    }
  };

  /**
   * Register click handlers for every menu item in the page.  Use the `countries`
   * and `tableHelper` Objects, and their associated methods, to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked.
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it. For example: "List of Countries
   * and Dependencies - Population between 1 and 2 million" or "List of Countries
   * and Dependencies - All countries in Asia" etc.
   */
  function setupMenuHandlers() {
    document.querySelector('.center').innerHTML = '&copy; 2020 Student Soroush Bahrami';

    document.querySelector('#menu_english').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('English'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - English Names';
    });
    document.querySelector('#menu_arabic').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('Arabic'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Arabic Names';
    });
    document.querySelector('#menu_chinese').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('Chinese'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Chinese Names';
    });
    document.querySelector('#menu_french').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('French'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - French Names';
    });
    document.querySelector('#menu_hindi').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('Hindi'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Hindi Names';
    });
    document.querySelector('#menu_korean').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('Korean'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Korean Names';
    });
    document.querySelector('#menu_japanese').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('Japanese'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Japanese Names';
    });
    document.querySelector('#menu_russian').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByLanguage('Russian'));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Russian Names';
    });

    document.querySelector('#menu_population_100_000_000m').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByPopulation(100000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Population Above 100,000,000m';
    });
    document.querySelector('#menu_population_1m_2m').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByPopulation(1000000, 2000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Population between 1 and 2 million';
    });
    document.querySelector('#menu_americas_1mkm').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Americas', 1000000));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - Area Greater than 1 million square KM in Americas';
    });
    document.querySelector('#menu_asia_all').addEventListener('click', function() {
      tableHelper.countriesToTable(countries.getByAreaAndContinent('Asia', 0));
      document.querySelector('#subtitle').innerHTML =
        'List of Countries and Dependencies - All countries in Asia';
    });
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();
