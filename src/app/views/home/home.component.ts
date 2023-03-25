import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  longText = `<p>Bem-vindo ao <strong>Egger Library</strong>, o seu destino para uma ampla seleção de livros de diferentes gêneros. Aqui na Egger Library, acreditamos que a leitura é uma das atividades mais valiosas que uma pessoa pode desfrutar. É por isso que nos dedicamos a fornecer um espaço aconchegante e tranquilo para aqueles que amam mergulhar em boas histórias e adquirir novos conhecimentos.</p>
<p>Nossa biblioteca oferece uma vasta coleção de livros, desde clássicos literários até os mais recentes best-sellers. Com nossas prateleiras repletas de opções de gêneros variados, incluindo ficção, não ficção, história, biografia, romance, aventura, fantasia e muito mais, temos certeza de que você encontrará o livro perfeito para cada ocasião.</p>
<p>Na Egger Library, também entendemos a importância da tecnologia no mundo moderno, e é por isso que temos um grande acervo de livros digitais, acessíveis a partir de qualquer dispositivo. Além disso, nosso sistema de empréstimo é fácil e acessível, para que você possa levar para casa seus livros favoritos e apreciá-los no conforto da sua casa.</p>
<p>Estamos ansiosos para recebê-lo na Egger Library e ajudá-lo a encontrar o livro perfeito para se envolver e se divertir. Visite-nos e comece a explorar o maravilhoso mundo da leitura hoje mesmo!</p>
`;

  constructor() { }

  ngOnInit() {
     
  } 
}
