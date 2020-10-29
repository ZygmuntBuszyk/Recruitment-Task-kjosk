# Foudation Management Application
Strona/Aplikacja zarzadzajaca fundacjami i kategoriami fundacji, korzystajaca z otwartego Api udostepnionego przez firme Kjosk.

## Tresc Zadania
Zaimplementować w dowolnym języku (mile widziane vue.js) stronę zarządzania fundacjami i kategoriami fundacji, podłączyć się do api https://kjosk-sample-api.azurewebsites.net/swagger/index.html
Kod aplikacji udostępnić na githubie (publiczne repozytorium kodu), opublikować stronę w internecie.
Na stronie powinno się znaleźć - dodawanie/edycja/podgląd/lista/usuwanie fundacji i kategorii fundacji. 
Kategoria fundacji 
    nazwa - min 3 max 128 znaków, pole unikalne, 
    krótki opis wymagane, max 512 znaków,
Fundacja 
    nazwa - min 3 max 128 znaków, pole unikalne, 
    krótki opis wymagane, max 512 znaków, 
    opis html,
    kategoria fundacji - wymagane,
    znacznik czy fundacja globalna)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
