import {Component, OnInit} from '@angular/core';
import {Agent} from "../../common/agents";
import {AgentsService} from "../../services/agents.service";

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit{
agentes: Agent[]=[];


constructor(private agentsService:AgentsService) {

}

  ngOnInit(): void {
  this.cargarAgentes();
  }

  private cargarAgentes() {
    this.agentsService.getAgents().subscribe(
      {
        next: value => {
          this.agentes = value.data;
        },
        error: err => {
          console.log(err)
        },
        complete: () => {
          console.log("Complete")
        }
      }

    )
  }
}
