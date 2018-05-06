import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamForm = new FormGroup({
      teamName : new FormControl("Team A",Validators.required),
      players: new FormArray([new FormControl('Player 1')])
    }
  );

  constructor() { }

  ngOnInit() {
  }

  createTeam(){
    console.log(this.teamForm);
    console.log(this.teamForm.value);
    console.log(this.teamForm.get('teamName').valid);
    console.log(this.teamForm.get('players').value);
    for(let p of this.teamForm.get('players').value){
      console.log(p);
    }
  }

  addNewPlayer(){
    let newPlayer = new FormControl('');
    (<FormArray>this.teamForm.get('players')).push(newPlayer);
  }

}
