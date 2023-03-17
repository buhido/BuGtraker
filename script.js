// получаем все ячейки таблицы
const cells = document.querySelectorAll(".content .item");

// для каждой ячейки изменяем стиль в соответствии с ее текстовым содержимым
cells.forEach((cell) => {
  const text = cell.textContent.trim();
  if (text === "In progress") {
    cell.style.backgroundColor = "#FFD600",
    cell.style.color = "#232323";
  } else if (text === "Rejected") {
    cell.style.backgroundColor = "#ED4848",
    cell.style.color = "#FFFFFF";
  } else if (text === "Solved") {
    cell.style.backgroundColor = "#32A143",
    cell.style.color = "#FFFFFF";
  } 
});
