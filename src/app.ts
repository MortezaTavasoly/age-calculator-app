const dayInp = document.querySelector(".day") as HTMLInputElement;
const monthInp = document.querySelector(".month") as HTMLInputElement;
const yearInp = document.querySelector(".year") as HTMLInputElement;
const dayOut = document.querySelector(".days span") as HTMLSpanElement;
const monthOut = document.querySelector(".months span") as HTMLSpanElement;
const yearOut = document.querySelector(".years span") as HTMLSpanElement;
const button = document.querySelector(".arrow") as HTMLImageElement;
const error = document.querySelectorAll(".error")!;

const date = new Date();
let day: number = date.getDate();
let month: number = 1 + date.getMonth();
let year: number = date.getFullYear();

const months: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const validation = (): void => {
  // day validation
  if (dayInp.value === "") {
    const errorText = error[0];
    errorText.innerHTML = `This field is required`;
  } else {
    if (+dayInp.value > months[+monthInp.value + -1]) {
      const errorText = error[0];
      errorText.innerHTML = `Must be a valid day`;
    } else {
      const errorText = error[0];
      errorText.innerHTML = ``;
    }
  }
  //   month validation
  if (monthInp.value === "") {
    const errorText = error[1];
    errorText.innerHTML = `This field is required`;
  } else {
    if (+monthInp.value > 12) {
      const errorText = error[1];
      errorText.innerHTML = `Must be a valid month`;
    } else {
      const errorText = error[1];
      errorText.innerHTML = ``;
    }
  }
  //   year validation
  if (yearInp.value === "") {
    const errorText = error[2];
    errorText.innerHTML = `This field is required`;
  } else {
    if (+yearInp.value > year) {
      const errorText = error[2];
      errorText.innerHTML = `Must be in past`;
    } else {
      const errorText = error[2];
      errorText.innerHTML = ``;
    }
  }
  if (
    error[0].textContent === "" &&
    error[1].textContent === "" &&
    error[2].textContent === ""
  ) {
    calculate(true);
  } else {
    calculate(false);
  }
};

const calculate = (e: boolean): void => {
  if (e === true) {
    const myDate = new Date(
      `${+monthInp.value}-${+dayInp.value}-${+yearInp.value}`
    );
    if (+date > +myDate) {
      if (+dayInp.value > day) {
        day += months[+monthInp.value - 1];
        month -= 1;
      }
      if (+monthInp.value > month) {
        month += 12;
        year -= 1;
      }

      const d: number = day - +dayInp.value;
      const m: number = month - +monthInp.value;
      const y: number = year - +yearInp.value;

      dayOut.textContent = `${d}`;
      monthOut.textContent = `${m}`;
      yearOut.textContent = `${y}`;
    } else {
      const errorText = error[0];
      errorText.innerHTML = `Must be a valid date`;
    }
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  validation();
});
