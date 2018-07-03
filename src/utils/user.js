import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { BehaviorSubject, Observable, Subject, ReplaySubject, range, concat, interval, of, from, combineLatest, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { filter, map, mergeMap, delay, take, startWith  } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchUser, fetchUserFulfilled, connectUser } from '../actions';

export const rangeGet = (start, end) => {
    range(start, end)
      .pipe(filter(x => x % 2 === 1), map(x => x + x))
      .subscribe(x => console.log(x));
}

export const testObservable = () => {
    const formInput$ = new BehaviorSubject('foo');
    formInput$.subscribe(x => console.log(x))

    formInput$.next('toto');
    formInput$.next('fifi');

    const timer = interval(1000).pipe(take(5));
    const sequence = range(1, 10);

    // combineLatest(timer, sequence).subscribe(x => console.log(x));
    // concat(timer, sequence).subscribe(x => console.log(x));

    const observables = [1, 5, 10].map(
        n => of(n).pipe(delay(n * 1000), startWith(0))
    );

    combineLatest(observables).subscribe(x => console.log(x));


    var clicks = fromEvent(document, 'click');
    clicks.subscribe(x => console.log(x));

}

export const reduceWinner = () => {
    const winnerResult = ["tim", "tom", "tom", "toto", "dudu", "fifi"];

    return winnerResult.reduce((acc, value) => {
        let existingCandidate = acc.find(x => x.hasOwnProperty(value));
        if (!acc || existingCandidate) {
            existingCandidate[value]++;
        } else {
            acc.push({ [value] : 1 });
        }
        return acc;
    }, [])
    .reduce((acc, current) => {
        return (current[Object.keys(current)] > acc[Object.keys(acc)]) ? current : acc;
    });
}

export const userGet = () => {
    store.dispatch(fetchUser('redux-observable'));
}

export const fetchUserEpic = action$ => action$.pipe(
    ofType('FETCH_USER'),
    mergeMap(action =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map(response => fetchUserFulfilled(response))
        )
    )
);
