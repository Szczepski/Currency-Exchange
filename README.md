# Currency-Exchange
Jest to strona, która pokazuje aktualne kursy kupna i sprzedaży walut.
W aplikacji można zasymulować przeliczenie i określić potrzebny wkład finansowy do zakupu konkretnej waluty.

Komunikacja z api Narodowego Banku Polskiego odbywa się za pomocą zapytania ajax.
Pobrane dane (response) są przeszukiwane za pomocą funkcji map, po czym są wstrzykiwane za pomocą jQuery do tabeli.
Do każdej waluty zostaje przypisana grafika flagi kraju, który reprezentuje.

Tabele kursów uzupełnia prosty przelicznik walut (still in progress), gdzie obecnie można przeliczyć PLNy na inne waluty.

### Technologie
* HTML 5
* CSS
* Sass
* gulp
* Bootstrap (which is to be replaced normal css)
* JavaScript - jQuery

<!-- https://szczepski.github.io/Currency-Exchange/

#### za pierwszym razem zezwól przeglądarce wczytać skrypty (w chrome -> pasek adresu, po prawej na końcu).
 -->
