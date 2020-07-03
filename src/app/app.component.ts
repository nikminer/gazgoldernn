import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  modal:HTMLElement;

  showModal(){
    this.modal.style.display="flex";
    this.modal.style.opacity="1";
  }
  closeModal(){
    this.modal.style.display="none";
    this.modal.style.opacity="0";
  }

  ngOnInit(){
    window.addEventListener("scroll", this.scrollindicator)
    this.modal=document.getElementById("modal");
  }

  scrollindicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  }
  
  submit(){
    
    
    let body ="name="+this.myForm.value['Username']+"&phone="+this.myForm.value['Userphone'];
    
    return this.http.post('https://www.gazgoldernn.ru/send_messages.php', body, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')} )
    .subscribe(status=> {
      if (status==1){
        alert("Звонок заказан, в ближайщее время с вами свяжутся")
        window.location.reload();
      }else{
        alert("Что-то пошло не так и звонок не заказался")
      }
    },
    (error) => {
      this.myForm.controls['Username'].setErrors(error.error.name)
      this.myForm.controls['Userphone'].setErrors(error.error.phone)
    })
  }


  myForm : FormGroup = new FormGroup({  
    "Username": new FormControl("",Validators.required),
    "Userphone": new FormControl("", Validators.pattern("[+]{1}[0-9]{11}")),
  });


}





