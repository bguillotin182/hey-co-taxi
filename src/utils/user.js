import store from '../store';
import { BehaviorSubject, range, concat, interval, fromEvent, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, mergeMap, take } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchUser, fetchUserFulfilled, changeMouseClickPositionXY, cubeRotation } from '../actions';
import ACTION_TYPE from '../constants';
import * as THREE from 'three';

export const rangeGet = (start, end) => {
    range(start, end)
      .pipe(filter(x => x % 2 === 1), map(x => x + x))
      .subscribe(x => console.log(x));
}

export const testObservable = () => {
    // const formInput$ = new BehaviorSubject('foo');
    // formInput$.subscribe(x => console.log(x))
    // formInput$.next('toto');
    // formInput$.next('fifi');

    const timer = interval(1000).pipe(take(2));
    const sequence = range(1, 10);

//    combineLatest(timer, sequence).subscribe(x => console.log(x));
    forkJoin(timer, sequence).subscribe(x => console.log(x));
    concat(timer, sequence).subscribe(x => console.log(x));
    // const observables = [1, 5, 10].map(
    //     n => of(n).pipe(delay(n * 1000), startWith(0))
    // );
    // combineLatest(observables).subscribe(x => console.log(x));

    var clicks = fromEvent(document, 'click');
    clicks.subscribe(x => {
        const {clientX, clientY } = x;
        const { innerWidth, innerHeight } = window;
        
        let moveX;
        let moveY; 
        moveX = (clientX >= (innerWidth / 2)) ? 0.1 : -0.1;
        moveY = (clientY >= (innerHeight /2)) ? -0.1 : 0.1;

        const cubeRotationCoordinate = store.getState().cubeRotation;;
        

        store.dispatch(cubeRotation(new THREE.Euler(
            cubeRotationCoordinate.x + moveX,
            cubeRotationCoordinate.y + moveY,
            0
          ),));

        store.dispatch(changeMouseClickPositionXY(clientX, clientY))
    });
    
}

export const userGet = () => {
    store.dispatch(fetchUser('redux-observable'));
}

export const fetchUserEpic = action$ => action$.pipe(
    ofType(ACTION_TYPE.FETCH_USER),
    mergeMap(action =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map(response => fetchUserFulfilled(response))
        )
    )
);
