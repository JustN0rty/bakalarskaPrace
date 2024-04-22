/*--------------------- Dropdown u topNav -----------------------*/

const dropdownBtn = document.querySelectorAll('.dropbtn');  
const dropdownBox = document.querySelectorAll('.dropdown-content'); 

dropdownBtn.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        dropdownBox.forEach(box => {
            box.style.display = 'flex';
        });
    });
});

dropdownBox.forEach(box => {
    box.addEventListener('mouseleave', () => {
        dropdownBox.forEach(box => {
            box.style.display = 'none';
        });
    });
});

/*--------------------- Dropdown u topNav -----------------------*/

/*---------------- Zobrazení podkategorií rubrik ----------------*/

const rightDownLinks = document.querySelectorAll('.rightDown a');
const navDownItems = document.querySelectorAll('.navDown');
const navUp = document.querySelector('.navUp');
let defaultNavIndex;

rightDownLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        removeAktualniClass();
        const targetIndex = Array.from(rightDownLinks).indexOf(link);
        navDownItems[targetIndex].classList.add('aktualni');
    });
});

const rightDown = document.querySelector('.rightDown');
const navDown = document.querySelector('.navDown');

navDownItems.forEach((item, index) => {
    if (item.classList.contains('aktualni')) {
        defaultNavIndex = index;
    }
});

rightDown.addEventListener('mouseleave', function(event) {
    if (!isMouseOverNavDown(event) && !isMouseOverNavUp(event)) {
        removeAktualniClass();
        navDownItems[defaultNavIndex].classList.add('aktualni');
    }
});

navDown.addEventListener('mouseleave', function(event) {
    if (!isMouseOverRightDown(event) && !isMouseOverNavUp(event)) {
        removeAktualniClass();
        navDownItems[defaultNavIndex].classList.add('aktualni');
    }
});

navUp.addEventListener('mouseleave', function(event) {
    if (!isMouseOverRightDown(event) && !isMouseOverNavDown(event)) {
        removeAktualniClass();
        navDownItems[defaultNavIndex].classList.add('aktualni');
    }
});

function isMouseOverNavDown(event) {
    return event.relatedTarget.closest('.navDown') !== null;
}

function isMouseOverRightDown(event) {
    return event.relatedTarget.closest('.rightDown') !== null;
}

function isMouseOverNavUp(event) {
    return event.relatedTarget === navUp;
}

function removeAktualniClass() {
    navDownItems.forEach(item => {
        item.classList.remove('aktualni');
    });
}

/*---------------- Zobrazení podkategorií rubrik ----------------*/

/*------------------- Tlačítko pro resp. nav --------------------*/

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".fa-bars");
    const menu = document.querySelector(".rightDown");

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("respNav");
        if (menu.classList.contains("respNav")) {
            menuBtn.classList.replace("fa-bars", "fa-times");
        } else {
            menuBtn.classList.replace("fa-times", "fa-bars");
        }
    });
});

/*------------------- Tlačítko pro resp. nav --------------------*/

/*------------- Zobrazení podkategorií v resp nav ---------------*/

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 1350) {
        const sectionsData = {
            poznavamPrirodu: ['Jak se chovat v přírodě', 'Mapujte s BioLogem', 'Domy přírody a informační střediska'],
            potrebujiVyridit: ['Potřebuji povolení nebo stanovisko', 'Další životní situace', 'Chci získat dotaci'],
            chranimePriroduAKrajinu: ['Ochrana území', 'Ochrana druhů', 'Ochrana dřevin', 'Ochrana neživé přírody', 'Ochrana krajiny', 'Invazivní druhy', 'Mezinárodní ochrana přírody', 'CITES'],
            pecujemeOPriroduAKrajinu: ['Plánujeme péči', 'Provádíme péči', 'Metodická podpora', 'Financování péče', 'Vyhodnocujeme péči'],
            dokumentujemePrirodu: ['Poskytování dat', 'Ústřední seznam ochrany přírody', 'Mapová galerie', 'Nálezová databáze ochrany přírody', 'Jednotná evidence speleologických objektů'],
            oNas: ['Kontakty', 'Úřední deska', 'Aktuality, akce, média', 'Organizační struktura', 'Volná místa', 'Povinně zveřejňované', 'Partněři', 'Publikace, výstavy, konference'],
            poznejteCHKO: ['Tipy na výlety', 'Co tu kvete?', 'Jak se chovat v přírodě', 'Upozornění pro návštěvníky', 'Teplický okruh', 'Skrytou kamerou'],
            charakteristikaCHKO: ['Horniny a reliéf', 'Vodstvo', 'Rostliny', 'Živočichové', 'Lesy'],
            ochranaPrirody: ['Zonace CHKO', 'Maloplošná zvláště chráněná území', 'Památné stromy', 'Péče o přírodu', 'Krajinný ráz a výstavba', 'Cestovní ruch'],
            aktulalityAAkce: ['Všechny aktuality', 'Všechny akce'],
            kontakt: ['Správa CHKO Broumovsko', 'Agentura ochrany přírody a krajiny ČR Regionální pracoviště Východní Čechy'],
        };

        let activeLink = null;

        function showActiveLinkCategory() {
            const activeLinkElement = document.querySelector('.rightDown a.aktivni');
            if (activeLinkElement) {
                const sectionName = activeLinkElement.dataset.section;
                const additionalLinksContainer = document.getElementById(sectionName);
                if (additionalLinksContainer) {
                    renderAdditionalLinks(sectionName);
                    additionalLinksContainer.style.display = 'flex';
                    activeLink = additionalLinksContainer;
                }
            }
        }

        showActiveLinkCategory();

        document.querySelectorAll('.rightDown a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const sectionName = event.target.dataset.section;
                const additionalLinksContainer = document.getElementById(sectionName);
                
                if (activeLink && activeLink !== additionalLinksContainer) {
                    activeLink.style.display = 'none';
                }

                if (additionalLinksContainer.style.display === 'none' || additionalLinksContainer.style.display === '') {
                    additionalLinksContainer.style.display = 'flex';
                    renderAdditionalLinks(sectionName);
                    activeLink = additionalLinksContainer;
                } else {
                    additionalLinksContainer.style.display = 'none';
                    activeLink = null;
                }
            });
        });

        function renderAdditionalLinks(sectionName) {
            const additionalLinksContainer = document.getElementById(sectionName);
            const linksData = sectionsData[sectionName];
            additionalLinksContainer.innerHTML = '';

            linksData.forEach(linkText => {
                const link = document.createElement('a');
                const sanitizedLinkText = sanitizeString(linkText);
                const uniqueUrl = `file:///C:/Users/jbart/OneDrive%20-%20Univerzita%20Hradec%20Králové/Dokumenty/Škola/Vysoká/Bakalářka/Prototyp/${sectionName}.html`;
                /*--- const uniqueUrl = `https://nature.cz/${sectionName}/${sanitizedLinkText}`; ---*/
                link.href = uniqueUrl;
                link.textContent = linkText;
                additionalLinksContainer.appendChild(link);
            });
        }

        function sanitizeString(input) {
            return input.toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .replace(/[^a-z0-9]+/g, '-');
        }
    }
});

/*------------- Zobrazení podkategorií v resp nav ---------------*/

/*--------------- Zobrazení topNav v resp nav ------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const topNav = document.querySelector('.topNav');
    const rightDown = document.querySelector('.rightDown');
    const menuBtn = document.querySelector('.menu-btn');
    const navUp = document.querySelector('.navUp');
    let contentAdded = false;

    function appendTopNavToRightDown() {
        if (window.innerWidth <= 800 && !contentAdded) {
            const clonedTopNav = topNav.cloneNode(true);
            const clonedDropdownContent = clonedTopNav.querySelector('.dropdown-content');
            const clonedDropdownBtn = clonedTopNav.querySelector('.dropbtn');

            clonedDropdownContent.style.display = 'none';
            clonedDropdownContent.id = "dropdownContent";
            clonedDropdownBtn.id = "dropdownBtn";

            rightDown.appendChild(clonedTopNav);
            contentAdded = true;

            clonedDropdownBtn.addEventListener('click', function() {
                if (clonedDropdownContent.style.display === 'none') {
                    clonedDropdownContent.style.display = 'flex';
                } else {
                    clonedDropdownContent.style.display = 'none';
                }
            });

            document.addEventListener('click', function(event) {
                if (!event.target.matches('#dropdownBtn') && !event.target.closest('#dropdownContent')) {
                    clonedDropdownContent.style.display = 'none';
                }
            });
        }
    }

    appendTopNavToRightDown();

    window.addEventListener('resize', function() {
        appendTopNavToRightDown();
    });

    menuBtn.addEventListener('click', function() {
        appendTopNavToRightDown();
    });

    navUp.querySelector('.left a').addEventListener('click', function() {
        appendTopNavToRightDown();
    });
});

/*--------------- Zobrazení topNav v resp nav ------------------*/

/*------------ Zobrazení vyhledávání v resp nav-----------------*/

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.vyhledavani');
    const searchIcon = document.querySelector('.fa-magnifying-glass');

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Vyhledat';

    searchButton.style.display = 'none';

    searchInput.after(searchButton);

    function toggleRespAktivni() {
        if (window.innerWidth <= 650) {
            searchInput.classList.toggle('respAktivni');
            searchButton.style.display = searchInput.classList.contains('respAktivni') ? 'block' : 'none';
        }
    }

    searchIcon.addEventListener('click', toggleRespAktivni);
    searchButton.addEventListener('click', toggleRespAktivni);
});

/*------------ Zobrazení vyhledávání v resp nav-----------------*/