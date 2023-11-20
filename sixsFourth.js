function vacation(groupOfPeople, Group, dayOfWeek) {
    let price = 0;
    if (Group == 'Students') {
        switch (dayOfWeek) {
            case 'Friday':
                price = groupOfPeople * 8.45;
                break;
            case 'Saturday':
                price = groupOfPeople * 9.80;
                break;
            case 'Sunday':
                price = groupOfPeople * 10.46;
                break;
        }
        if (groupOfPeople >= 30){
            price *= 0.85;
        }
    }

    if (Group == 'Business') {
        switch (dayOfWeek) {
            case 'Friday':
                price = groupOfPeople * 10.9;
                break;
            case 'Saturday':
                price = groupOfPeople * 15.60;
                break;
            case 'Sunday':
                price = groupOfPeople * 16;
                break;
        }
        if (groupOfPeople >= 100){
            price *=  0.9;
        }
    }
                if (Group == 'Regular') {
                    switch (dayOfWeek) {
                        case 'Friday':
                            price = groupOfPeople * 15;
                            break;
                        case 'Saturday':
                            price = groupOfPeople * 20;
                            break;
                        case 'Sunday':
                            price = groupOfPeople * 22.5;
                            break;
                    }
                    if(groupOfPeople >= 10 && groupOfPeople <= 20){
                        price *=  0.95;
                    }

                    
                }

                console.log(`Total price: ${price.toFixed(2)}`);
        }
    


vacation(30,

    "Students",

    "Sunday");