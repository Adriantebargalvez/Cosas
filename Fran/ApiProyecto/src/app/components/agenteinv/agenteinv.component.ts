import {Component, OnInit} from '@angular/core';
import {Agent} from "../../common/agents";
import {AgentsService} from "../../services/agents.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-agenteinv',
  templateUrl: './agenteinv.component.html',
  styleUrls: ['./agenteinv.component.css']
})
export class AgenteinvComponent implements OnInit{
agent!: Agent;
constructor(private agentService:AgentsService,private activatesRouter:ActivatedRoute) {
}

  ngOnInit(): void {
  this.loadAgent();
  }
private loadAgent(){
  const uuid=this.activatesRouter.snapshot.params['uuid'];

  this.agentService.getAgent(uuid).subscribe(
    {next: value => {
        this.agent = value.data;
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log("Complete")
      }}
  )
}
}
