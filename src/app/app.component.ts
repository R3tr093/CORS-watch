import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'watch';

  step : number = 1;
  step2 : number = 1;
  step3 : number = 1;
  step4 : number = 1;

  isready : boolean = false;

  constructor() {
    
    
    
  }

  follow(){
 
    let step = this.step;

    if(step === 1)
    {
      document.getElementById('sign').style.display = "block";
      document.getElementById('sign').classList.add('zoomIn');
    } 

    if(step === 2)
    {
      document.getElementById('use').style.display = "block";
      document.getElementById('use').classList.add('zoomIn');
    } 

    if(step === 3)
    {
      document.getElementById('exam').style.display = "block";
      document.getElementById('exam').classList.add('zoomIn');
    } 

    if(step === 4)
    {
      document.getElementById('under').style.display = "block";
      document.getElementById('under').classList.add('zoomIn');
    } 

    if(step === 5)
    {
      document.getElementById('under').style.display = "block";
      document.getElementById('under').classList.add('zoomIn');
    } 

    if(this.step === 6)
    {
      document.getElementById('init').classList.add('slideOutLeft');

      setTimeout(()=>{
        document.getElementById('R1').style.display = "block";
        document.getElementById('init').style.display = "none";

        document.getElementById('R1').classList.add('slideInRight')

      },1000)
    }

    this.step = this.step +  1;

  }

  signStep(){


    if(this.isready)
    {
      document.getElementById('R1').classList.add('slideOutLeft');

      setTimeout(()=>{
        document.getElementById('R2').style.display = "block";
        document.getElementById('R1').style.display = "none";

        document.getElementById('R2').classList.add('slideInRight')

      },1000)
    }

    if(!this.isready)
    {
      document.getElementById('sub1').style.display ="block";
      document.getElementById('sub2').style.display ="block";
      document.getElementById('cat').style.display ="none";
  
      document.getElementById('sub1').classList.add('slideInLeft');
      document.getElementById('sub2').classList.add('slideInRight');

      this.isready = true;
    }



  }

  follow2(){

    console.log(this.step2)

    if(this.step2 === 1)
    {
      document.getElementById('R21').style.display = "block";
      document.getElementById('R21').classList.add('slideInLeft');
    }

    if(this.step2 === 2)
    {
      document.getElementById('R22').style.display = "block";
      document.getElementById('R22').classList.add('slideInRight');
    }

    if(this.step2 === 3)
    {
      document.getElementById('R23').style.display = "block";
      document.getElementById('R23').classList.add('slideInLeft');
    }

    if(this.step2 === 4)
    {
      document.getElementById('R24').style.display = "block";
      document.getElementById('R24').classList.add('slideInRight');
    }

    if(this.step2 === 5)
    {
      document.getElementById('R2').style.display = "none";
      document.getElementById('R3').style.display = "block";
      document.getElementById('R3').classList.add('slideInDown');
    }

    this.step2++;

  }


  follow3(){


    if(this.step3 === 1)
    {
      document.getElementById('hide1').style.display = "block";
      document.getElementById('hide1').classList.add('zoomIn');
    }


    if(this.step3 === 2)
    {
      
      document.getElementById('part1').style.display = "none";
      document.getElementById('hide2').style.display = "block";
      document.getElementById('hide2').classList.add('zoomIn');
    }


    if(this.step3 === 3)
    {
      document.getElementById('R3').style.display = "none";
      document.getElementById('R4').style.display = "block";
      document.getElementById('R4').classList.add('slideInUp');
    }

    this.step3++;

   


  }

  follow4(){


    if(this.step4 === 1)
    {
      document.getElementById('part3').classList.add('slideOutDown')

      setTimeout(() => {

        document.getElementById('part4').style.display = " block ";
        document.getElementById('part4').classList.add('slideInUp');
        
      }, 2000);
    }

    if(this.step4 === 2)
    {
      document.getElementById('part4').classList.add('slideOutDown');
      document.getElementById('R3H4').style.display = "none";

      setTimeout(()=>{
        document.getElementById('part5').style.display = " block ";
        document.getElementById('part5').classList.add('zoomIn');
      },1500)
    }

    this.step4++;
  }

}


