import React from 'react';
import './style.css';

const AnimalDetail = (props) => {

    return(
    <>

	
        <div className="detail">
			<div className="detail__obsah">

				<div className="detail__hlavicka">
					<img className="detail__foto" src={props.detail.foto} alt={props.detail.nazevLatinsky} />
					<div className="detail__titulek">
						<h2 className="detail__nazev"><span>{props.detail.nazev}</span></h2>
						<div className="detail__latinsky"><span>{props.detail.nazevLatinsky}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__popis">
						{props.detail.popis}
					</p>

					<div className="detail__udaje">
						<div className="detail__udaj">
							<h3>Domovina</h3>
							<p>{props.detail.domovina}</p>
						</div>
						<div className="detail__udaj">
							<h3>Biotop</h3>
							<p>{props.detail.biotop}</p>
						</div>
						<div className="detail__udaj">
							<h3>Potrava</h3>
							<p>{props.detail.potrava}</p>
						</div>
						<div className="detail__udaj">
							<h3>Velikost</h3>
							<p>{props.detail.velikost}</p>
						</div>
					</div>
				</div>

			</div>
		</div>
    </>
    );

}

export default AnimalDetail;