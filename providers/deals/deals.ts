import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { a } from '@angular/core/src/render3';


@Injectable()
export class DealsProvider {
restaurants=[
  {
    resid:0,
    img:"../assets/imgs/kfc.png"},
  {resid:1,
   img:"../assets/imgs/bambou.png"},

  {resid:2,
    img:"../assets/imgs/14thstreet.png"},
    
  {resid:3,
    img:"../assets/imgs/chinatown.png"},
  
    {resid:4,
      img:"../assets/imgs/s1.png"}
      
]

r_deals=[

  {
    resid:0,
    img:"../assets/imgs/kfc5.jpg",
    image:"../assets/imgs/kfc_6.jpg",
    price:"Price: 200Rs",
    quantity:"select quantity",
    desc:"Onion Chicken Blast",
    price1:"Price: 250Rs",
    quantity1:"select quantity",
    desc1:" Chicken & Veg Burger"
  },
  {resid:1,
    img:"../assets/imgs/p10.jpg",
    image:"../assets/imgs/p12.jpg",
    price:"Price: 350Rs",
    quantity:"select quantity",
    desc:"Spicy Noodles ",
    price1:"Price: 300Rs",
    quantity1:"select quantity",
    desc1:"Creamy Chicken Korma"
    
  },

  {resid:2,
    img:"../assets/imgs/p21.jpg",
    image:"../assets/imgs/p9.jpg",
    price:"Price: 400Rs",
    quantity:"select quantity",
    desc:"Veg & Noodles",
    price1:"Price: 350Rs",
    quantity1:"select quantity",
    desc1:" Chicken Lasagne"
  },
  
  
    {resid:3,
    img:"../assets/imgs/p20.jpg",
    image:"../assets/imgs/t4.jpg",
    price:"Price: 450Rs",
    quantity:"Select quantityt",
    desc:"Steamed food with cream",
    price1:"Price: 350Rs",
    quantity1:"Select quantity",
    desc1:"Pancake with kiwi topping"
  },
  {resid:4,
   img:"../assets/imgs/y2.jpg",
   image:"../assets/imgs/y1.jpg",
   price:"Pice: 200Rs",
   quantity:"select quantity",
   desc:" Chicken Biryani",
   price1:"Price: 340Rs",
   quantity1:"select quantity",
   desc1:"Mutton Biryani"
  }
  ]


  get_deals(dealid:number) :any
  {

for(let d of this.r_deals)
  {
  if (d.resid==dealid)
  {return d;

}
else  null;
}
}

get_respective_deals(id:number)
{
  let r_dealsArray=[];
  for(let  a of this.r_deals)
  {
    if(a.resid==id)
    {
     r_dealsArray.push(a)
    }
  }
return r_dealsArray;
}


 constructor() {} 

}
