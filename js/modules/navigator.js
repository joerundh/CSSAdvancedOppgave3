export function Navigator() {
    const sections = document.getElementsByTagName("section");
    const nav = document.getElementsByTagName("nav")[0];
    const title = document.getElementById("title");

    const navButton = document.getElementById("nav-button");
    let navOpen = false;

    /*
    Function to open section
    */
    
    this.openSection = function(index) {
        for (let section of sections) {
            section.style.display = "none";
        }
        sections[index].style.display = "flex";
        title.textContent = `${sections[index].getAttribute("data-title") || "" }`;
    }

    /*
    Functions to open and close the nav list and change the nav button icon
    */

    function openNav() {
        nav.style.transform = "scaleY(1)";
        navButton.style.backgroundImage = `url("./css/images/close-icon.png")`;
        navOpen = true;
    }

    function closeNav() {
        nav.style.transform = "scaleY(0)";
        navButton.style.backgroundImage = `url("./css/images/menu-icon.png")`;
        navOpen = false;
    }

    /*
    Add links to navbox
    */

    Array.from(sections).forEach((section, index) => {
        const title = `${section.getAttribute("data-nav-label") || section.getAttribute("data-title")}`;

        const navListItem = document.createElement("li");

        const navLink = document.createElement("a");
        navLink.href = "#";
        navLink.addEventListener("click", event => {
            if (event.button === 0) {
                event.stopPropagation();
                this.openSection(parseInt(index));
                closeNav();
            }
        });
        navLink.title = `Go to ${title}`;
        navLink.textContent = `${title}`;
        navListItem.append(navLink);

        nav.children[0].append(navListItem);
    });

    /*
    Event listeners
    */

    navButton.addEventListener("click", event => {
        event.stopPropagation();
        if (navOpen) {
            closeNav();
        } else {
            openNav();
        }
    });

    window.addEventListener("click", event => {
        if (navOpen) {
            closeNav();
        }
    });

    /*
    Position the nav
    */
    function placeNav() {
        const headerRect = document.getElementsByTagName("header")[0].getBoundingClientRect();
        nav.style.right = `${headerRect.right - headerRect.width}px`;
        nav.style.top = `${headerRect.top + headerRect.height}px`;
    }

    window.addEventListener("resize", () => {
        placeNav();
    });

    placeNav();
}