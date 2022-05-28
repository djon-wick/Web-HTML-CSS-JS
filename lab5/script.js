function shadow_open_close(idbox, iddiv) 
{
    if (document.getElementById(idbox).checked)
        document.getElementById(iddiv).style.display = "block"
    else 
		document.getElementById(iddiv).style.display = "none"
}

function on_size_changed() 
{
    sizepx = document.getElementById('size').value + "px"
    document.getElementById('example').style.fontSize = sizepx
    document.getElementById('modal-body').style.fontSize = sizepx
}

function on_close() 
{
    document.getElementById('modal').style.display = 'none'
}

function on_color_changed() 
{
    color = document.getElementById('color').value
    document.getElementById('example').style.color = color
    document.getElementById('modal-body').style.color = color
}

let submit = document.querySelector('#submit');
submit.onclick = (event) => 
{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let homepage = document.getElementById('homepage').value;
    let date = document.getElementById('date').value;
	
    // Check on input name
    let name_bool = name.length > 0;
	
    // Check current email
    let email_bool = false;
    if ((index_dog = email.indexOf("@")) != -1)
    {
        index_first_dot = email.indexOf('.', index_dog);
        index_last_dot = email.lastIndexOf('.');
        email_bool = index_first_dot == index_last_dot && index_last_dot != index_dog + 1 && 
                    email.length != index_last_dot + 1;
    }
	
    //check current homepage
    let hamepage_bool = false;
    let homepage_array = homepage.split(".");
    if ((amount_dot_homepage = homepage_array.length) >= 1 )
	{
        hamepage_bool = homepage_array[0] === "www";
        let prev_dot = homepage.indexOf('.');
        for(let i = 1; i < homepage_array.length; i++)
		{
            let next_dot = homepage.indexOf('.', prev_dot+1);
            if (next_dot == prev_dot + 1) hamepage_bool = false;
            prev_dot = next_dot;
        }
    }
	
    //check current date
    let date_array = date.split('-');
    let date_bool = false;
    if(date_array.length == 3)
	{
        console.log(date_array[2])
        date_bool = date_array[0].length <=4 && date_array[2].length <= 2 && date_array[1].length <=2;
    }
    
    if(name_bool && email_bool && hamepage_bool && date_bool)
	{
        let activities = "Мои интересы:"
        if(document.getElementById("musicbox").checked)
            activities += " " + document.querySelector('input[name="music"]:checked').value + ",";
        if(document.getElementById("bookbox").checked)
            activities += " " + document.querySelector('input[name="book"]:checked').value + ",";
        document.getElementById("modal-body").innerHTML = name + "<br>" +
                                                        email + "<br>" +
                                                        homepage + "<br>" +
                                                        date + "<br>" + 
                                                        activities;
        
		
		
		document.getElementById('abra').style.display = 'block';
        document.getElementById('modal').style.display = 'block';
    }
    else
	{
        let err_msg = ""
            if(!name_bool) 
				err_msg += "Введите имя\n";
        if(!email_bool) 
			err_msg += "Проверьте корректность вашей электронной почты(Email)\n";
        if(!hamepage_bool) 
			err_msg += "Проверьте корректность вашей домашней страницы\n";
        if(!date_bool) 
			err_msg += "Проверьте корректность вашей даты рождения\n";
        err_msg.slice(0, -1);
        alert(err_msg)
    }
}