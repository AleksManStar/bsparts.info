let currentLanguage = 'en'; // По умолчанию английский

function loadLanguage(lang) {
    fetch(`${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки файла: ${lang}.json`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`Данные для языка ${lang}:`, data); // Проверка данных
            document.getElementById('headerTitle').innerText = data.headerTitle;
            document.getElementById('howToOrderTitle').innerText = data.howToOrder;
            document.getElementById('step1').innerText = data.step1;
            document.getElementById('footerContacts').innerText = data.footerContacts;
            document.getElementById('copyright').innerText = data.copyright;
        })
        .catch(error => console.error('Ошибка:', error)); // Ловим ошибки
}

document.getElementById('langEn').addEventListener('click', () => {
    console.log('Переключение на английский'); // Проверка нажатия кнопки
    currentLanguage = 'en';
    loadLanguage(currentLanguage);
});

document.getElementById('langRu').addEventListener('click', () => {
    console.log('Переключение на русский'); // Проверка нажатия кнопки
    currentLanguage = 'ru';
    loadLanguage(currentLanguage);
});

// Загружаем язык по умолчанию при загрузке страницы
loadLanguage(currentLanguage);
