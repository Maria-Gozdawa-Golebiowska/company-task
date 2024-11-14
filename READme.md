# Aplikacja do generowania HTML z artykułów

Aplikacja przekształca artykuły zapisane w pliku tekstowym za pomocą IA na kod HTML, dodając odpowiednie tagi HTML oraz placeholdery dla obrazków. Obrazki są reprezentowane przez placeholdery w tagu `<img>`, z dokładnymi opisami, które mogą być użyte do generowania grafik. Pod obrazkami umieszczane są podpisy w tagu `<figcaption>`.

## Wymagania 

- Node.js w wersji 14.x lub wyższej
- NPM (lub Yarn)
- Plik z artykułem w formacie tekstowym (`artykul.txt`)
- Pakiety Node.js: `dotenv`, `axios`, `atob`

## Instalacja

### 1. Klonowanie repozytorium

Aby sklonować repozytorium, uruchom poniższą komendę w terminalu:

git clone https://github.com/Maria-Gozdawa-Golebiowska/oxido
cd oxido

## Instalacja zaleznosci

W głównym katalogu projektu zainstaluj wymagane pakiety, uruchamiając:

npm init -y 
npm install dotenv axios atob

## Przygotowanie pliku artykułu
Aplikacja wymaga pliku z artykułem, który ma zostać przetworzony na HTML. 
Plik artykułu powinien być zapisany jako artykul.txt w tym samym katalogu co skrypt aplikacji.

### 2. Uruchomienie 

node app.js

# Struktura plików 
artykul.txt: Plik wejściowy zawierający artykuł w formacie tekstowym.
artykul.html: Plik wynikowy, zawierający przekształcony artykuł w formacie HTML.
.env: Plik zawierający zakodowany klucz API OpenAI w formacie base64.
app.js: Skrypt Node.js do przetwarzania artykułu i generowania HTML.
