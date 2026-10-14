// Find the HTML elements used by the program.
const nameInput = document.getElementById("dog-name");
const breedInput = document.getElementById("dog-breed");
const adoptButton = document.getElementById("adopt-button");
const formMessage = document.getElementById("form-message");

const petArea = document.getElementById("pet-area");
const petName = document.getElementById("pet-name");
const petDetails = document.getElementById("pet-details");
const petDay = document.getElementById("pet-day");
const petStage = document.getElementById("pet-stage");
const happinessValue = document.getElementById("happiness-value");
const happinessBar = document.getElementById("happiness-bar");
const petMessage = document.getElementById("pet-message");

const feedButton = document.getElementById("feed-button");
const playButton = document.getElementById("play-button");
const nextDayButton = document.getElementById("next-day-button");
const startOverButton = document.getElementById("start-over-button");

// Save the pet's progress in this browser.
const STORAGE_KEY = "virtualDogParkPetV1";

let pet = null;

// Decide the dog's growth stage from its age.
function getStage(day) {
    if (day === 1) {
        return "Puppy";
    } else if (day <= 3) {
        return "Young Dog";
    } else {
        return "Adult Dog";
    }
}

// Update the information shown on the page.
function updatePetDisplay() {
    if (pet === null) {
        petArea.hidden = true;
        adoptButton.hidden = false;
        return;
    }

    petArea.hidden = false;
    adoptButton.hidden = true;

    petName.textContent = "🐶 " + pet.name;
    petDetails.textContent = "Breed: " + pet.breed;
    petDay.textContent = "Day: " + pet.day;
    petStage.textContent = "Growth stage: " + getStage(pet.day);
    happinessValue.textContent = pet.happiness;
    happinessBar.value = pet.happiness;
}

// Save the pet's current progress.
function savePet() {
    if (pet !== null) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pet));
    }
}

// Adopt a dog.
adoptButton.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name.length === 0) {
        formMessage.textContent = "Please enter your dog's name.";
        return;
    }

    if (name.length > 20) {
        formMessage.textContent = "The name must be 20 characters or fewer.";
        return;
    }

    pet = {
        name: name,
        breed: breedInput.value,
        day: 1,
        happiness: 50
    };

    formMessage.textContent = "";
    petMessage.textContent = "Welcome home, " + pet.name + "!";
    savePet();
    updatePetDisplay();
});

// Feed the dog and increase happiness.
feedButton.addEventListener("click", function () {
    pet.happiness = Math.min(100, pet.happiness + 10);
    petMessage.textContent = pet.name + " enjoyed the food!";
    savePet();
    updatePetDisplay();
});

// Play with the dog and increase happiness.
playButton.addEventListener("click", function () {
    pet.happiness = Math.min(100, pet.happiness + 10);
    petMessage.textContent = pet.name + " had fun playing!";
    savePet();
    updatePetDisplay();
});

// Move to the next day.
nextDayButton.addEventListener("click", function () {
    pet.day += 1;
    pet.happiness = Math.max(0, pet.happiness - 5);
    petMessage.textContent = "A new day begins for " + pet.name + "!";
    savePet();
    updatePetDisplay();
});

// Start over only when the user confirms.
startOverButton.addEventListener("click", function () {
    const confirmed = window.confirm(
        "Are you sure you want to start over? Your saved pet will be removed."
    );

    if (confirmed) {
        pet = null;
        localStorage.removeItem(STORAGE_KEY);
        nameInput.value = "";
        formMessage.textContent = "";
        petMessage.textContent = "";
        updatePetDisplay();
    }
});

// Restore saved progress when the page opens.
function loadPet() {
    const savedPet = localStorage.getItem(STORAGE_KEY);

    if (savedPet !== null) {
        try {
            const loadedPet = JSON.parse(savedPet);

            if (
                typeof loadedPet.name === "string" &&
                loadedPet.name.trim().length > 0 &&
                loadedPet.name.length <= 20 &&
                ["Beagle", "Golden Retriever", "Poodle"].includes(loadedPet.breed) &&
                Number.isInteger(loadedPet.day) &&
                loadedPet.day >= 1 &&
                Number.isFinite(loadedPet.happiness) &&
                loadedPet.happiness >= 0 &&
                loadedPet.happiness <= 100
            ) {
                pet = loadedPet;
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        } catch (error) {
            localStorage.removeItem(STORAGE_KEY);
        }
    }

    updatePetDisplay();
}

loadPet();
