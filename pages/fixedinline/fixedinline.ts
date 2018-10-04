import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
    templateUrl:"fixedinline.html"
})
export class FixedPage{
    form;
    constructor(public alertCtrl: AlertController){
        this.form = new FormGroup({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        });
    }
    processForm() {
        let alert = this.alertCtrl.create({
          title: "Login Succesful",
          message: "Signed In",
          buttons: [{
            text: 'Ok',
          }]
        });
        let alert_alert = this.alertCtrl.create({
            title: "Login Unsuccesful",
            message: "Incorrect username or password",
            buttons: [{
              text: 'Ok',
            }]
          });
    
        if (this.form.status === 'VALID') {
          alert.present()
        }
        else{
            alert_alert.present()
        }
      }
    
    }