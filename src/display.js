import { titleList, priorityList, taskList } from "./card";


const colors = [
    '#4AF4D9', '#30DECA', '#A3D6C8', '#A3F8E2', '#36D4CE',
    '#D44354', '#E5ABD9', '#87F78A', '#F1A6D2', '#ECB2CC',
    '#E2385A', '#AEF9FC', '#95FBA0', '#48D1C6', '#BAD7FF',
    '#D83254', '#4AF0C3', '#FABBD3', '#F23E50', '#9CF2FF',
    '#98E8BA', '#A1DCCA', '#DE3362', '#A2F395', '#FDFFD9',
    '#E58ED8', '#9AEF91', '#7786E6', '#ED97DE', '#CBBDFF',
    '#A8EEC0', '#D5A3CD', '#DF94CD', '#91E59A', '#AFDCFB',
    '#DBACE0', '#AAD9C3', '#6A93DD', '#8FDDA4', '#8BD7AB',
    '#3BDBE1', '#CDD5FF', '#A3FFFE', '#B1F6FD', '#FFFACD', 
    '#EBBECB', '#97F498', '#CCA9E5', '#D8C1EB', '#FFFFD4',
    '#FFF0DD', '#EBB7CD', '#FFBCC5', '#C1C7FF', '#F7B5D3',
    '#F4ABC2', '#CEA4EB', '#E13261', '#FFF5DE', '#8CF5C6'
];


export default function displayList(){
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const titleT = titleList();
    const priorityT = priorityList();
    const taskT = taskList();
    h1.textContent = titleT;
    h3.textContent = priorityT;
    h2.textContent = taskT;

    const wrap = document.createElement("div");
    wrap.className = "card-wrap";
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    editButton.addEventListener("click", () => editButtonHandler(wrap, h1,h3,h2,editButton));
    deleteButton.addEventListener("click", deleteButtonHandler);

    let i = Math.floor(Math.random() * 50);
    wrap.style.background = colors[i];
    wrap.appendChild(h1);
    wrap.appendChild(h3);
    wrap.appendChild(h2);
    wrap.appendChild(editButton);
    wrap.appendChild(deleteButton);
    const listContainer = document.getElementById('list-container');

    listContainer.appendChild(wrap);

}


function editButtonHandler(wrap , titleEle, titlePriority, titleTask,editButton){
  if(editButton.textContent == 'Edit'){
    const eleTitle = document.createElement("input");
    eleTitle.type = "text";
    eleTitle.value = titleEle.textContent;
    eleTitle.style.marginBottom = '10px';
    eleTitle.style.width = '90%';
    eleTitle.style.padding = '5px';
    eleTitle.style.borderRadius = '5px';

    const taskEle = document.createElement("textarea");
    taskEle.value = titleTask.textContent;
    


    const priority = document.createElement("select");
    ["priorityHigh","prioritymedium", "priorityLow"].forEach((optionPriority) =>{
        const options = document.createElement("option");
        options.textContent = optionPriority;
        options.value =  optionPriority;
        options.selected = optionPriority === titlePriority.textContent;
        priority.appendChild(options);

    })

    wrap.replaceChild(eleTitle, titleEle);
    wrap.replaceChild(priority , titlePriority);
    wrap.replaceChild(taskEle , titleTask)

    editButton.textContent = "Save";

  }
  else{
        const inputTitle = wrap.querySelector("input");
        const inputPriority = wrap.querySelector("select");
        const inputTask = wrap.querySelector("textarea");

        const newTitle = document.createElement("h1");
        newTitle.textContent = inputTitle.value;

        const newPriority = document.createElement("h3");
        newPriority.textContent = inputPriority.value;

        const newTask = document.createElement("h2");
        newTask.textContent = inputTask.value;

        if (wrap.contains(inputTitle)) {
            wrap.replaceChild(newTitle, inputTitle);
        }
        if (wrap.contains(inputPriority)) {
            wrap.replaceChild(newPriority, inputPriority);
        }
        if (wrap.contains(inputTask)) {
            wrap.replaceChild(newTask, inputTask);
        }

        editButton.textContent = "Edit";
  }
}

function deleteButtonHandler(e){
    const  card = e.target.closest('.card-wrap');
    if(card){
        card.remove();
    }
}