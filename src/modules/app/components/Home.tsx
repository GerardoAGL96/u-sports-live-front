import React, { useEffect } from 'react';
import { Link as BoostLink, Column, Row } from '@8base/boost';
import { useGamesFeed } from '../../game/game-hooks';
import { onError } from '../../../shared/mixins';
import { SportsSidebar } from '../../sport/components/SportsSidebar';
import { GamesSidebar } from '../../game/components/GamesSidebar';
import { GamePost } from '../../game/components/GamePost';
import Media from 'react-media';

function Home () {
  const { count, items, next, loading, error } = useGamesFeed();;

  useEffect(() => {
    if (error) {
      onError(error);
    }
  }, [error]);

  const content = items.map(game => (
    <GamePost key={game.id} game={game}/>
  ));

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className=".d-none .d-md-block col-md-3">
          <Media query="(min-width: 768px)">
            <Column stretch>
              <SportsSidebar />
            </Column>
          </Media>
        </div>
        <div className="col-xs-12 col-md-6">
          <Column stretch gap="lg">
            {content}
            {(!loading && items.length < count) &&
              <Row stretch alignItems="center" justifyContent="center">
                <BoostLink onClick={next}>
                  Cargar más
                </BoostLink>
              </Row>
            }
          </Column>
        </div>
        <div className=".d-none .d-md-block col-md-3">
          <Media query="(min-width: 768px)">
            <Column stretch>
              <GamesSidebar />
            </Column>
          </Media>
        </div>
      </div>
    </div>
  );
}

export default Home;