console.log("Website Loaded Successfully");
const lostForm = document.getElementById("lostForm");

if (lostForm) {

    lostForm.addEventListener("submit", function(e){

        e.preventDefault();

        const lostItem = {

            itemName: document.getElementById("itemName").value,

            description: document.getElementById("description").value,

            location: document.getElementById("location").value,

            date: document.getElementById("date").value,

            owner: document.getElementById("owner").value,

            phone: document.getElementById("phone").value

        };

        let items = JSON.parse(localStorage.getItem("lostItems")) || [];

        items.push(lostItem);

        localStorage.setItem("lostItems", JSON.stringify(items));

        alert("Lost Item Submitted Successfully!");

        lostForm.reset();

    });

}
// ===============================
// Report Found Item
// ===============================

const foundForm = document.getElementById("foundForm");

if (foundForm) {

    foundForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const foundItem = {

            itemName: document.getElementById("foundItemName").value,

            description: document.getElementById("foundDescription").value,

            location: document.getElementById("foundLocation").value,

            date: document.getElementById("foundDate").value,

            finder: document.getElementById("finderName").value,

            phone: document.getElementById("finderPhone").value

        };

        let foundItems =
            JSON.parse(localStorage.getItem("foundItems")) || [];

        foundItems.push(foundItem);

        localStorage.setItem(
            "foundItems",
            JSON.stringify(foundItems)
        );

        alert("Found Item Submitted Successfully!");

        foundForm.reset();

    });

}
// ===============================
// Search Item
// ===============================

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener("click", function () {

        const searchName = document
            .getElementById("searchName")
            .value
            .trim()
            .toLowerCase();

        const foundItems =
            JSON.parse(localStorage.getItem("foundItems")) || [];

        const result = document.getElementById("result");

        let match = foundItems.find(item =>
            item.itemName.toLowerCase() === searchName
        );

        if (match) {

            result.style.display = "block";

            result.innerHTML = `
                <h2>✅ Item Found</h2>

                <p><strong>Item:</strong> ${match.itemName}</p>

                <p><strong>Description:</strong> ${match.description}</p>

                <p><strong>Location:</strong> ${match.location}</p>

                <p><strong>Finder:</strong> ${match.finder}</p>

                <p><strong>Phone:</strong> ${match.phone}</p>
            `;

        }

        else {

            result.style.display = "block";

            result.innerHTML = `
                <h2 style="color:red;">❌ No Matching Item Found</h2>
            `;

        }

    });

}
const lostCount = document.getElementById("lostCount");
const foundCount = document.getElementById("foundCount");
const lostList = document.getElementById("lostList");
const foundList = document.getElementById("foundList");

if (lostCount && foundCount) {

    const lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];

    const foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

    lostCount.textContent = lostItems.length;

    foundCount.textContent = foundItems.length;

    lostItems.forEach(function(item){

        lostList.innerHTML += `
            <div class="item">
                <h3>${item.itemName}</h3>
                <p>${item.description}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Owner:</strong> ${item.owner}</p>
            </div>
        `;

    });

    foundItems.forEach(function(item){

        foundList.innerHTML += `
            <div class="item">
                <h3>${item.itemName}</h3>
                <p>${item.description}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Finder:</strong> ${item.finder}</p>
            </div>
        `;

    });

}
