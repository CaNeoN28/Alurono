import itens from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasaImg from 'assets/nossa_casa.png';

export default function Inicio() {
	let itensSelecionados = [...itens];
	itensSelecionados = itensSelecionados.sort(() => 0.5 - Math.random()).splice(0, 3);

	return (
		<section>
			<h3 className={stylesTema.titulo}>
				Recomendações do Chef
			</h3>
			<div className={styles.recomendados}>
				{itensSelecionados.map(item => (
					<div key={item.id} className={styles.recinebdado}>
						<div className={styles.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recomendado__botao}>
							Saber mais
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTema.titulo}>Nossa Casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasaImg} alt="Nossa Casa" />
				<div className={styles.nossaCasa__endereco}>
					Av 514, Nº 3700 <br /> <br /> Maranguape, CE
				</div>
			</div>
		</section>
	);
}