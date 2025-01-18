import displayList from "./display";
export default function card(){
    const addButton = document.getElementById('AddButton');
    let form = null;
    let addActive = false;
    


    addButton.addEventListener('click', function newCard() {
        addActive = !addActive;

        if(!form){
            form = document.createElement('form');
            form.className = 'form-pop';
            form.style.display = 'none';

            const title = document.createElement('input');
            title.type = 'text';
            title.name = 'Title';
            title.id = 'titleName';
            title.placeholder = 'Title';
            title.style.marginBottom = '10px';
            title.style.width = '90%';
            title.style.padding = '5px';
            title.style.borderRadius = '5px';

            var priorityContainer = [
                {name: 'priorityHigh' , label: "High priority"},
                {name: 'priorityMedium' , label: "Meduim priority"},
                {name: 'priorityLow' , label: "Low priority"}

            ];
            const priorityWrap = document.createElement('div');
            priorityWrap.style.marginBottom = '10px';

            priorityContainer.forEach((item)=>{
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'priorityradio';
                radio.value = item.name;
                radio.id = 'priorityName';
                
                
                const radioLabel = document.createElement("label");
                radioLabel.textContent = item.label;
                radioLabel.style.marginBottom = '10px';
                radioLabel.style.marginLeft = '5px'; 
                radioLabel.style.marginRight = '15px';
                radioLabel.style.width = '80%';

                const priorityGroup = document.createElement('div'); 
                priorityGroup.style.display = 'inline-block';
                priorityGroup.style.marginRight = '10px';


                priorityGroup.appendChild(radio);
                priorityGroup.appendChild(radioLabel);
                priorityWrap.appendChild(priorityGroup);

            })


            var task = document.createElement('Textarea');
            task.name = 'task';
            task.id = 'taskId';
            task.placeholder = "Enter the task";
            task.style.width = '90%';
            task.style.height = '100px';
            task.style.marginBottom = '10px';
            task.style.borderRadius = '5px';

            const buttonSubmit = document.createElement('button');
            buttonSubmit.textContent = "Submit";
            buttonSubmit.style.marginLeft = '25%';
            buttonSubmit.style.display = 'block';
            buttonSubmit.style.width = '45%';
            buttonSubmit.style.borderRadius = '20px';
            buttonSubmit.addEventListener('click', (e) =>{
                e.preventDefault();
                displayList();
            });
            


            form.appendChild(title);
            form.appendChild(priorityWrap);
            form.appendChild(task);
            form.appendChild(buttonSubmit);
            

            
            const card = document.getElementById('task-container') || document.body;

            card.appendChild(form);
        }
        if (addActive){
            addButton.textContent = 'close form';
            form.style.display = 'block';
        }else{
            addButton.textContent = 'add list';
            form.style.display = 'none';
        }
            

            


    });

}


export function titleList(){
    const titleText = document.getElementById('titleName');
    return titleText ? titleText.value : null;
}

export function priorityList(){
    const priorityText = document.querySelector('input[name="priorityradio"]:checked')
    return priorityText ? priorityText.value : null;
}

export function taskList(){
    const taskText = document.getElementById('taskId');
    return taskText ? taskText.value : null;
}