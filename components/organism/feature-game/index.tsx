import React, { useCallback, useEffect, useState } from 'react'
import GameItem from '../../molecules/game-item'
import { getFeaturedGame } from '../../../services/player';

export default function FeatureGame() {
  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data)
  }, [getFeaturedGame])

  useEffect(() => {
    getFeatureGameList()
  }, []);
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up">
          {gameList.map((item) => (
            <GameItem key={item._id} thumbnail={`https://tokogames.herokuapp.com/uploads/${item.thumbnail}`} title={item.name} category={item.category.name} />
          ))}
          {/* <GameItem thumbnail="/img/Thumbnail-2.png" title="Call of Duty: Modern" category="Mobile" />
          <GameItem thumbnail="/img/Thumbnail-3.png" title="Mobile Legends" category="Mobile" />
          <GameItem thumbnail="/img/Thumbnail-4.png" title="Clash of Clans" category="Mobile" />
          <GameItem thumbnail="/img/Thumbnail-5.png" title="Valorant" category="Desktop" /> */}
        </div>
      </div>
    </section>
  )
}
