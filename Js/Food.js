class Food{
    constructor(){
        this.image= loadImage("images/milk1.png");
        this.foodStock;
        this.lastFeed;
    }

    updateFoodStock(foodStock){
        database.ref('/').set({
            foodStock : foodStock
        })
    }

    readFoodStock(){

        database.ref('foodStock').on("value",(data)=>{
            
             this.foodStock = data.val();
             console.log(this.foodStock)
        })

    }

    deductFood(){
        this.foodStock--;
        database.ref('/').update({
            foodStock:this.foodStock,
            lastFedTime:hour()
        })
        image(this.image,490,250,50,80);
        
    }

    addFoods(){
        this.foodStock++;
        database.ref('/').update({
            foodStock:this.foodStock
        })
    }
    getLastFedTime(){
        var feedTimeRef= database.ref('lastFedTime');
        // console.log(feedTimeRef)
        feedTimeRef.on("value",(data)=>{
            this.lastFeed= data.val();
            console.log(data.val())
        })
    }

    garden(){
        background(garden,550,500);
    }

    bedroom(){
        background(bedroom,550,500);
    }

    washroom(){
        background(washroom,550,500);
    }
    display(){

        var x= 30;
        var y=30;
        if(this.foodStock!=null &&this.lastFeed!=null){
            for(var i=0;i<this.foodStock;i++){
            if(i%10===0){
                x=30;
                y=y+100;
            }
            image(this.image,x,y,50,80);
            x=x+50;
            }

         }

    }
}