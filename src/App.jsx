import logo from './assets/postgresSQL.png'
import './App.css'

export default function App () {

  return (
    <>
      <main>
        <header>
          <img className='logo' src={logo} alt="" />
          </header>
        <nav>
          <ul>
            <li><a href="#oque">O que é</a></li>
            <li><a href="#empregadores">Empregadores</a></li>
            <li><a href="#onde">Onde é usado</a></li>
            <li><a href="#pqserve">Pra que Serve</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#vermais">Ver mais</a></li>
          </ul>
        </nav>
        <section>

            <article id="oque" className='card pequeno'>
              <h1 >O QUE É</h1>
              <p>O PostgreSQL é um banco de dados relacional de 
                código aberto, usado para armazenar e consultar dados 
                estruturados.</p>
            </article>
            <article id="empregadores" className='card pequeno'>
              <h1>Empregadores</h1>
              <p>• Netflix <br />• Uber <br />• Reddit 
              <br />• Spotify </p>
            </article>
            <article id="onde" className='card grande'>
              <h1>ONDE É USADO</h1>
              <p>É usado em aplicações que exigem alta performance, 
                conformidade ACID e manipulação de volumes complexos 
                de dados. É ideal para e-commerce, sistemas financeiros,
                análise de dados (BI), aplicações geoespaciais 
                (com PostGIS) e IA/machine learning.</p>
            </article>
            <article id="pqserve" className='card grande'>
              <h1>PRA QUE SERVE</h1>
              <p>Ele é utilizado para armazenar, gerenciar e recuperar
                 dados com alta segurança e integridade. Ele serve como
                  o repositório principal para aplicações web, análise 
                  de dados complexos, sistemas geoespaciais e IA, sendo 
                  robusto o suficiente para lidar com grandes volumes de 
                  dados.</p>
            </article>

            <article id="diferenciais" className='card full'>
              <h1>DIFERENCIAIS</h1>
              <div className='pfull'>
              <p className='pfullum'>A principal diferença do PostgreSQL em relação a 
                outros bancos de dados está em sua robustez, extensibilidade e 
                conformidade com padrões SQL. </p>
                <p className='pfulldois'>•Modelo Relacional e Funcionalidades Avançadas <br />
                  •Extensibilidade e Personalização <br />
                  •Licenciamento <br />
                  •Escalabilidade e Desempenho</p></div>
            </article>
        </section>
        <footer>
          <p>Funciona mobile</p>
          <a id='vermais' href="https://www.postgresql.org/"  target="_blank" rel="noopener noreferrer">
            <button type="button">Ver mais</button>
          </a>
        </footer>
      </main>
    </>
  )

  
}


