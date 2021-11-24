import React from 'react';
import './style.css';

const AnimalDetail = (props) => {

    return(
    <>
	{console.log(props)}
        <div className="detail" >
			<div className="detail__obsah">

				<div className="detail__hlavicka">
					<img className="detail__foto" src={props.foto} alt={props.nazevLatinsky} />
					<div className="detail__titulek">
						<h2 className="detail__nazev"><span>{props.nazev}</span></h2>
						<div className="detail__latinsky"><span>{props.nazevLatinsky}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__popis">
						{props.popis}
					</p>

					<div className="detail__udaje">
						<div className="detail__udaj">
							<h3>Domovina</h3>
							<p>{props.domovina}</p>
						</div>
						<div className="detail__udaj">
							<h3>Biotop</h3>
							<p>{props.biotop}</p>
						</div>
						<div className="detail__udaj">
							<h3>Potrava</h3>
							<p>{props.potrava}</p>
						</div>
						<div className="detail__udaj">
							<h3>Velikost</h3>
							<p>{props.velikost}</p>
						</div>
					</div>
				</div>

			</div>
		</div>
    </>
    );

}

export default AnimalDetail;