import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    categories=['business','entertainment','general','health','science','sports','technology'];
    constructor(private router:Router){
    }
    handleQuery(x:string){
      let url='/query/'+x;
      this.router.navigateByUrl(url);
      console.log(x)
    }
}
