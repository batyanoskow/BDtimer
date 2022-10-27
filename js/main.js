$(document).ready(function(){
    $(".form__date").on("input" , function(){
        $(".form__message").text("");
    })
    $(".form__submit").click(function(){
        let inputValue = $(".form__date").val();
        if(inputValue == "")
        {
            $(".form__message").text("Вкажіть дату!");
        }
        else {
            let date = new Date($(".form__date").val());
            let year = parseInt(date.getFullYear());
            let month = parseInt(date.getMonth() + 1);
            let day = parseInt(date.getDate());
            let today = new Date();
            today.setHours(0,0,0,0);
            let nextDate = new Date([today.getFullYear(),month,day].join(',')); 
            if (nextDate < today) nextDate.setFullYear(today.getFullYear()+1);      
            msPerDay = 24*60*60*1000; 
            daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
            $(".form__message").text(`До вашого дня народжнення залишилось ${daysLeft} днів`)
            $(".form__message").css("color","lightgreen");
        }
    })
})

