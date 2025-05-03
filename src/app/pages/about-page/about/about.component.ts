import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  jogadorSelecionado = '';
  jogadores = [
    { nome: 'FalleN', equipe: 'CS2' },
    { nome: 'chelo', equipe: 'CS2' },
    { nome: 'KSCERATO', equipe: 'CS2' },
    { nome: 'yuurih', equipe: 'CS2' },
    { nome: 'skullz', equipe: 'CS2' },
    { nome: 'Yan "yanxnz"', equipe: 'Rocket League' },
    { nome: 'Caio "CaioTG1"', equipe: 'Rocket League' },
    { nome: 'Guigo', equipe: 'LoL' },
    { nome: 'Tatu', equipe: 'LoL' },
    { nome: 'mwzera', equipe: 'Valorant' },
    { nome: 'qck', equipe: 'Valorant' },
    { nome: 'R4re', equipe: 'Rainbow Six' },
    { nome: 'LENDA', equipe: 'Rainbow Six' },
    { nome: 'HisWattson', equipe: 'Apex Legends' },
    { nome: 'Xenial', equipe: 'Apex Legends' },
  ];
  
}
