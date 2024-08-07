// קבוצה ראשונה
const btn = document.getElementById('btn');
const clearBtn = document.getElementById('clearBtn');
let result = document.getElementById('result');

// פונקציה להכנסת נתונים חדשים עבור קבוצה ראשונה
function inputResult() {
    let textInput = document.getElementById('textInput');
    const myObject = {
        text: textInput.value,
        isDone: false,
    };
    if (textInput.value.trim() !== "") {
        let getData = JSON.parse(localStorage.getItem('listData')) || [];
        getData.push(myObject);
        localStorage.setItem('listData', JSON.stringify(getData));
        loadResult();
    }
    textInput.value = "";
}

// פונקציה לטעינה ושחזור נתונים עבור קבוצה ראשונה
function loadResult() {
    let getData = JSON.parse(localStorage.getItem('listData')) || [];
    result.innerHTML = '';
    getData.forEach((item, index) => {
        const flexElement = document.createElement('div');
        flexElement.id = `item-${index}`;
        const checkIf = document.createElement('input');
        checkIf.type = 'checkbox';
        const textAside = document.createElement('span');

        flexElement.appendChild(checkIf);
        flexElement.appendChild(textAside);
        result.appendChild(flexElement);
        textAside.innerText = item.text;
        checkIf.checked = item.isDone;
        textAside.style.textDecoration = item.isDone ? 'line-through' : 'none';

        // פונקציה למחיקת פריט
        const trashIcon = document.createElement('i');
        trashIcon.className = "fa";
        trashIcon.innerHTML = "&#xf014";
        flexElement.appendChild(trashIcon);
        trashIcon.style.marginRight = "20px";

        trashIcon.addEventListener('click', () => {
            const indexToDelete = getData.findIndex(deletedItem => deletedItem.text === item.text);
            if (indexToDelete !== -1) {
                // הסרת הפריט מהמערך
                getData.splice(indexToDelete, 1);
                // עדכון Local Storage
                localStorage.setItem('listData', JSON.stringify(getData));
                // הסרת הפריט מה-DOM
                result.removeChild(document.getElementById(`item-${index}`));
            }
        });

        checkIf.addEventListener('change', () => {
            item.isDone = checkIf.checked;
            textAside.style.textDecoration = item.isDone ? 'line-through' : 'none';

            let updatedData = JSON.parse(localStorage.getItem('listData')) || [];
            updatedData = updatedData.map(newItems => newItems.text === item.text ? item : newItems);
            localStorage.setItem('listData', JSON.stringify(updatedData));
        });
    });
}

// פונקציה למחיקת נתונים עבור קבוצה ראשונה
function earseBtn() {
    localStorage.removeItem('listData');
    result.innerHTML = '';
}

// קריאות לפונקציות עבור קבוצה ראשונה
btn.addEventListener('click', inputResult);
clearBtn.addEventListener('click', earseBtn);
loadResult();

// קבוצה שניה
const btn1 = document.getElementById('btn1');
const clearBtn1 = document.getElementById('clearBtn1');
let result1 = document.getElementById('result1');

// פונקציה להכנסת נתונים חדשים עבור קבוצה שניה
function inputResult1() {
    let textInput1 = document.getElementById('textInput1');
    const myObject1 = {
        text: textInput1.value,
        isDone: false,
    };
    if (textInput1.value.trim() !== "") {
        let getData1 = JSON.parse(localStorage.getItem('listData1')) || [];
        getData1.push(myObject1);
        localStorage.setItem('listData1', JSON.stringify(getData1));
        loadResult1();
    }
    textInput1.value = "";
}

// פונקציה לטעינה ושחזור נתונים עבור קבוצה שניה
function loadResult1() {
    let getData1 = JSON.parse(localStorage.getItem('listData1')) || [];
    result1.innerHTML = '';
    getData1.forEach((item, index) => {
        const flexElement1 = document.createElement('div');
        flexElement1.id = `item1-${index}`;
        const checkIf1 = document.createElement('input');
        checkIf1.type = 'checkbox';
        const textAside1 = document.createElement('span');

        flexElement1.appendChild(checkIf1);
        flexElement1.appendChild(textAside1);
        result1.appendChild(flexElement1);
        textAside1.innerText = item.text;
        checkIf1.checked = item.isDone;
        textAside1.style.textDecoration = item.isDone ? 'line-through' : 'none';

        // פונקציה למחיקת פריט עבור קבוצה שניה
        const trashIcon1 = document.createElement('i');
        trashIcon1.className = "fa";
        trashIcon1.innerHTML = "&#xf014";
        trashIcon1.style.marginRight = "20px";

        flexElement1.appendChild(trashIcon1);

        trashIcon1.addEventListener('click', () => {
            const indexToDelete1 = getData1.findIndex(deletedItem => deletedItem.text === item.text);
            if (indexToDelete1 !== -1) {
                // הסרת הפריט מהמערך
                getData1.splice(indexToDelete1, 1);
                // עדכון Local Storage
                localStorage.setItem('listData1', JSON.stringify(getData1));
                // הסרת הפריט מה-DOM
                result1.removeChild(document.getElementById(`item1-${index}`));
            }
        });

        checkIf1.addEventListener('change', () => {
            item.isDone = checkIf1.checked;
            textAside1.style.textDecoration = item.isDone ? 'line-through' : 'none';

            let updatedData1 = JSON.parse(localStorage.getItem('listData1')) || [];
            updatedData1 = updatedData1.map(newItems => newItems.text === item.text ? item : newItems);
            localStorage.setItem('listData1', JSON.stringify(updatedData1));
        });
    });
}

// פונקציה למחיקת נתונים עבור קבוצה שניה
function earseBtn1() {
    localStorage.removeItem('listData1');
    result1.innerHTML = '';
}

// קריאות לפונקציות עבור קבוצה שניה
btn1.addEventListener('click', inputResult1);
clearBtn1.addEventListener('click', earseBtn1);
loadResult1();
