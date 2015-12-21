import {expect} from 'chai';
import {List, Map} from 'immutable';

describe ('immutability', () => {
    describe('a tree', () => {
        function addMovie(currentState, movie) {
//            return currentState.set(
//                'movies',
//                currentState.get('movies').push(movie)
//            );
              return currentState.update('movies', movies => movies.push(movie));
        }

        it('is immutable tree', () => {
            let state = Map({
                'movies': List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            });
            let nextState = addMovie(state, 'Sunshine');
            
            expect(nextState).to.equal(Map({           
                'movies': List.of(
                    'Trainspotting',
                    '28 Days Later', 
                    'Sunshine'
                )
            }));

            expect(state).to.equal(Map({           
                'movies': List.of(
                    'Trainspotting',
                    '28 Days Later' 
                )
            }));
        });
    });

    describe('a list', () => {
        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable list', () => {
            let state = List.of('Trainspotting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(List.of(
                    'Trainspotting', 
                    '28 Days Later',
                    'Sunshine'
            ));
            expect(state).to.equal(List.of(
                    'Trainspotting', 
                    '28 Days Later' 
            ));
        });
    });
});
