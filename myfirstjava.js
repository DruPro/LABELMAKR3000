//TEST BRANCH
//ELEMENT REFERENCE DECLARATION //ELEMENT REFERENCE DECLARATION //ELEMENT REFERENCE DECLARATION //ELEMENT REFERENCE DECLARATION

//Input Elements
//servings input
const servings_amount_input = document.getElementById("servings_amount_input");
const serving_size_amount_input = document.getElementById("serving_size_amount_input");
const serving_size_metric_input = document.getElementById("serving_size_metric_input");
const serving_size_metric_conversion_input = document.getElementById("serving_size_metric_conversion_input");

//calories input
const calories_input = document.getElementById("calories_input");

//dailyvalue input
const totaL_fat_input = document.getElementById("totaL_fat_input");
const saturated_fat_input = document.getElementById("saturated_fat_input");
const trans_fat_input = document.getElementById("trans_fat_input");
const cholesterol_input = document.getElementById("cholesterol_input");
const sodium_input = document.getElementById("sodium_input");
const total_carbohydrates_input = document.getElementById("total_carbohydrates_input");
const dietary_fiber_input = document.getElementById("dietary_fiber_input");
const total_sugars_input = document.getElementById("total_sugars_input");
const total_added_sugars_input = document.getElementById("total_added_sugars_input");
const protein_input = document.getElementById("protein_input");

const daily_value_inputs = [totaL_fat_input,                           
                            saturated_fat_input,
                            trans_fat_input,
                            cholesterol_input,
                            sodium_input,
                            total_carbohydrates_input
                            ,dietary_fiber_input,
                            total_sugars_input,
                            total_added_sugars_input,
                            protein_input]


//Metric Unit Input
const totaL_fat_metric_input = document.getElementById("totaL_fat_metric_input");
const saturated_fat_metric_input = document.getElementById("saturated_fat_metric_input");
const trans_fat_metric_input = document.getElementById("trans_fat_metric_input");
const cholesterol_metric_input = document.getElementById("cholesterol_metric_input")
const sodium_metric_input = document.getElementById("sodium_metric_input");
const total_carbohydrates_metric_input = document.getElementById("total_carbohydrates_metric_input");
const dietary_fiber_metric_input = document.getElementById("dietary_fiber_metric_input");
const total_sugars_metric_input = document.getElementById("total_sugars_metric_input");
const total_added_sugars_metric_input = document.getElementById("total_added_sugars_metric_input");
const protein_metric_input = document.getElementById("protein_metric_input");

const daily_value_metric_inputs = [totaL_fat_metric_input,
                                    saturated_fat_metric_input,
                                    trans_fat_metric_input,
                                    cholesterol_metric_input,
                                    sodium_metric_input,
                                    total_carbohydrates_metric_input,
                                    dietary_fiber_metric_input,
                                    total_sugars_metric_input,
                                    total_added_sugars_metric_input,
                                    protein_metric_input]



const totaL_fat_percentage_input = document.getElementById("totaL_fat_percentage_input");
const saturated_fat_percentage_input = document.getElementById("saturated_fat_percentage_input");
const trans_fat_percentage_input = document.getElementById("trans_fat_percentage_input");
const cholesterol_percentage_input = document.getElementById("cholesterol_percentage_input")
const sodium_percentage_input = document.getElementById("sodium_percentage_input");
const total_carbohydrates_percentage_input = document.getElementById("total_carbohydrates_percentage_input");
const dietary_fiber_percentage_input = document.getElementById("dietary_fiber_percentage_input");
const total_added_sugars_percentage_input = document.getElementById("total_added_sugars_percentage_input");

const daily_value_percentage_inputs = [totaL_fat_percentage_input,
                                        saturated_fat_percentage_input,
                                        trans_fat_percentage_input,
                                        cholesterol_percentage_input,
                                        sodium_percentage_input,
                                        total_carbohydrates_percentage_input,
                                        dietary_fiber_percentage_input,
                                        total_added_sugars_percentage_input
]

//Nutrients Input
const nutrient_input = document.getElementById("nutrient_input")                                    
const nutrient_amount_input = document.getElementById("nutrient_amount_input")                                      
const nutrient_metric_input = document.getElementById("nutrient_metric_input")                                 
const nutrient_daily_value_percentage_input = document.getElementById("nutrient_daily_value_percentage_input")


//Footnote input
const foot_note_text_input = document.getElementById("foot_note_text_input")
                    

//Output Elements //Output Elements //Output Elements //Output Elements //Output Elements //Output Elements

//serving size section
const servings_amount_output = document.getElementById("servings_amount_output");
const serving_size_amount_output = document.getElementById("serving_size_amount_output");
const serving_size_metric_output = document.getElementById("serving_size_metric_output");
const serving_size_metric_conversion_output = document.getElementById("serving_size_metric_conversion_output");

//calories section
const calories_output = document.getElementById("calories_output");

//%daily value outputs
const totaL_fat_output = document.getElementById("totaL_fat_output");
const saturated_fat_output = document.getElementById("saturated_fat_output");
const trans_fat_output = document.getElementById("trans_fat_output");
const cholesterol_output = document.getElementById("cholesterol_output")
const sodium_output = document.getElementById("sodium_output");
const total_carbohydrates_output = document.getElementById("total_carbohydrates_output");
const dietary_fiber_output = document.getElementById("dietary_fiber_output");
const total_sugars_output = document.getElementById("total_sugars_output");
const total_added_sugars_output = document.getElementById("total_added_sugars_output");
const protein_output = document.getElementById("protein_output");


//daily value output array
const daily_value_outputs = [totaL_fat_output,
                            saturated_fat_output,
                            trans_fat_output,
                            cholesterol_output,
                            sodium_output,
                            total_carbohydrates_output
                            ,dietary_fiber_output,
                            total_sugars_output,
                            total_added_sugars_output,
                            protein_output];


//daily percentages outputs
const totaL_fat_percentage_output = document.getElementById("totaL_fat_percentage_output");
const saturated_fat_percentage_output = document.getElementById("saturated_fat_percentage_output");
const trans_fat_percentage_output = document.getElementById("trans_fat_percentage_output");
const cholesterol_percentage_output = document.getElementById("cholesterol_percentage_output")
const sodium_percentage_output = document.getElementById("sodium_percentage_output");
const total_carbohydrates_percentage_output = document.getElementById("total_carbohydrates_percentage_output");
const dietary_fiber_percentage_output = document.getElementById("dietary_fiber_percentage_output");
const total_added_sugars_percentage_output = document.getElementById("total_added_sugars_percentage_output");

const daily_value_percentage_outputs = [totaL_fat_percentage_output,
                                        saturated_fat_percentage_output,
                                        trans_fat_percentage_output,
                                        cholesterol_percentage_output,
                                        sodium_percentage_output,
                                        total_carbohydrates_percentage_output,
                                        dietary_fiber_percentage_output,
                                        total_added_sugars_percentage_output
]


//Nutrients Output
const nutrient_section = document.getElementById("nutrient_section")

//Footnote output
const foot_note_text_output = document.getElementById("foot_note_text_output")

// FUNCTIONALITY \/ // FUNCTIONALITY \/ // FUNCTIONALITY \/// FUNCTIONALITY \/ // FUNCTIONALITY \/ // FUNCTIONALITY \/ // FUNCTIONALITY \/

document.getElementById("generate_button").addEventListener("click", ()=>
    {   
        serving_size_setup();
        calories_setup();
        daily_value_setup();
        
        nutrients_pre_setup();
        nutrients_setup();
        footnote_setup();
    }
    
)


document.getElementById("add_nutrition_button").addEventListener("click", () =>
    {
        function add_temp_nutrition_icon()
        {
            const button_container = document.getElementById("temp_nutrition_container");
            const new_icon = document.createElement('button');

            set_icon_properties(new_icon);
            set_icon_event_listener(button_container,new_icon)
            attach_child(button_container,new_icon);
        }

        add_temp_nutrition_icon();
    }


)

function footnote_setup()
{
    foot_note_text_output.innerHTML = foot_note_text_input.value;
}

function nutrients_pre_setup()
    {
        const temp_nutrition_container = document.getElementById("temp_nutrition_container");
        const label_nutrient_container = document.getElementById("label_nutrient_container");

        //Has Children? Delete All!
        //if has temp nutrion container has zero children break

        if (label_nutrient_container.childElementCount === 0)
        {   
            return;
        }
        else
        {
            console.log("that label container has  " + label_nutrient_container.childElementCount + " remaining child elements")
            for (let index = 0; index < label_nutrient_container.childElementCount; index++) 
                {
                    let deleted_element = label_nutrient_container.children[index];
                    deleted_element.remove();
                    index--
                    
                }
        }
        

    }

function nutrients_setup()
    {

        //Get Nutrient Container


        const temp_nutrition_container = document.getElementById("temp_nutrition_container");
        const label_nutrient_container = document.getElementById("label_nutrient_container");
        
        if (temp_nutrition_container.childElementCount === 0) {
            return
        }

        var new_nutrition_section = document.createElement('div');
        new_nutrition_section.id = "label_nutrient_section";
        label_nutrient_container.appendChild(new_nutrition_section);



   
        item_placer();

        function update_nutrition_section()
        {
            new_nutrition_section = document.createElement('div');
            new_nutrition_section.id = "label_nutrient_section";
            label_nutrient_container.appendChild(new_nutrition_section);
        }
        




        function item_placer()
        {
            console.log("there is " + temp_nutrition_container.childElementCount + " elements in temporary container  ")
            for (let index = 0; index < temp_nutrition_container.childElementCount; index++) 
            {
                const nutrient_text = temp_nutrition_container.children[index].innerHTML;
                
               

                switch (new_nutrition_section.childElementCount) 
                {
                    case 0:

                        let first_text_element = document.createElement("span");
                        first_text_element.innerHTML = nutrient_text;
                        first_text_element.id = "nutrient_left_side"
                        new_nutrition_section.appendChild(first_text_element);

                        console.log(new_nutrition_section.childElementCount)
                        break;
                    case 1:

                        let label_center_dot = document.createElement("div");
                        label_center_dot.id = "label_center_dot"
                        new_nutrition_section.appendChild(label_center_dot);

                        console.log(new_nutrition_section.childElementCount)

                        let final_text_element = document.createElement("span");
                        final_text_element.innerHTML = nutrient_text;
                        final_text_element.id = "nutrient_right_side"
                        new_nutrition_section.appendChild(final_text_element);

                        console.log(new_nutrition_section.childElementCount)
                        break;

                    case 3:
                        update_nutrition_section()
                        
                        let updated_text_element = document.createElement("span");
                        updated_text_element.innerHTML = nutrient_text;
                        updated_text_element.id = "nutrient_left_side";
                        new_nutrition_section.appendChild(updated_text_element);
                    break;
                
                    default:
                        break;

                }

            } 
            }

        //Get Nutrient Container
        //Create New Section
        //Fill With Three Items if possible //How will I   //if children === 3 make a new one
        //If more than 2 add a new section
    
    }



function  set_icon_event_listener(P_Element,C_Element)
{
        if(is_only_child(P_Element)){
            C_Element.addEventListener('click',on_temp_icon_click);
            return
        }
        else
        {
            return
        }
            
}

function on_temp_icon_click()
{
    const button_container = document.getElementById("temp_nutrition_container");
    const child = button_container.firstElementChild;

    if (button_container.childElementCount === 1) {
        child.removeEventListener('click',on_temp_icon_click);
        child.remove();
        return
    }
    else
    {
        child.removeEventListener('click',on_temp_icon_click);
        child.remove();
        button_container.firstElementChild.addEventListener('click',on_temp_icon_click);
        button_container.firstElementChild.style.background = "red";
    }

}

function  is_only_child(P_Element)
{
        if(P_Element.childElementCount === 0){
            return true;
        }
        else {return false}
            
}

function set_icon_properties(Element)
{
    Element.setAttribute("id","temp_nutrient_icon");
    Element.innerHTML = nutrient_input.value + " " + nutrient_amount_input.value + nutrient_metric_input.value +" "+ nutrient_daily_value_percentage_input.value + "%"  
}   

function attach_child(P_Element,C_Element)
{
    P_Element.appendChild(C_Element)
    if(P_Element.childElementCount === 1)
        {
            C_Element.style.background = "red";
            return;
        }
    else{return}
}

function input_value_is_empty(Element)
{
    if (Element.value === "")
        {
            return true;
        }
        else {return false;}
       
}



function serving_size_setup()
{
    servings_amount_output.innerHTML = servings_amount_input.value + " " ;
    serving_size_amount_output.innerHTML = serving_size_amount_input.value + " " ;
    serving_size_metric_output.innerHTML = serving_size_metric_input.value + " ";
    
    if (input_value_is_empty(serving_size_metric_conversion_input))
    {
        serving_size_metric_conversion_output.innerHTML = "";
    }
    else 
    {
        serving_size_metric_conversion_output.innerHTML = "(" + serving_size_metric_conversion_input.value + "g)"; // + metric input string
    }

    
}

function calories_setup()
{
    if (input_value_is_empty(calories_input)) 
      {
         calories_output.innerHTML = "#"; 
      }
    else
      {
         calories_output.innerHTML = "" + calories_input.value;    
      }

}


function daily_value_setup()
{
    for (let index = 0; index < daily_value_inputs.length; index++) {
        const current_input = daily_value_inputs[index];
        
        if (input_value_is_empty(current_input))
        {
            daily_value_inputs[index].innerHTML = "0g"
        }
        else
        {
            daily_value_outputs[index].innerHTML = current_input.value + daily_value_metric_inputs[index].value
        }
    }

    for (let index = 0; index < daily_value_percentage_inputs.length; index++) {
        const current_input = daily_value_percentage_inputs[index];
        
        if (input_value_is_empty(current_input))
        {
            daily_value_percentage_outputs[index].innerHTML = "0%"
        }
        else
        {
            daily_value_percentage_outputs[index].innerHTML = current_input.value + "%"
        }
    }
}
