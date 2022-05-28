analys = {
	0:"Школьная программа не усвоена!", 
	1:"Результат ниже среднего", 
	2:"В чём-то вы попали",
	3:"Школьная программа усвоена", 
	4:"А вы ничего", 
	5:"Поздравляю! Школьный материал не забыт и даже больше"
	}

function count(array, value)
{
    amount = 0;
    array.forEach(val =>
	{
        if(val === value) amount++;
    });
	
    return amount;
}

function on_finish_clicked()
{
    checked_answers = [false, false, false, false, false];
    answers1 = document.getElementsByName("q1")
    answers1.forEach(element => 
	{
        if(element.value === "true" && element.checked)
            checked_answers[0] = true;
    });
	
    answers2 = document.getElementsByName("q2")
    amount = 0;
    activated = 0;
    answers2.forEach(element =>
	{
        if(element.checked && element.value === "true")
            amount++;
		
        activated += element.checked ? 1 : 0;
    });
	
    checked_answers[1] = amount == 2 && 2 == activated;
    checked_answers[2] = document.getElementById("q3").value.toLowerCase() == ""
    checked_answers[3] = document.getElementById("q4").value == "140"
	
    answers5 = document.getElementsByName("q5")
    amount = 0
    answers5.forEach(element => 
	{
        if(element.value === 'true')
            amount++
    });
	
    checked_answers[4] = amount === 3;
    alert("Ваш итоговый бал " + count(checked_answers, true) + "/5\n" + analys[count(checked_answers, true)]);
}
