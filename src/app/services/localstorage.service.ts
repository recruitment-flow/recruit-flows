import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  get size(): Observable<number> {
    return of(localStorage.length);
  }
  constructor() { }

  getItem(key: string) {
    const unparsedData = localStorage.getItem(`${key}`);
    let parsedData = null;
    if (unparsedData != null) {
      try {
        parsedData = JSON.parse(unparsedData);
      } catch (error) {
        return throwError(new Error(`Invalid data in localStorage.`));
      }
    }
    return parsedData;
  }

  setItem(key: string, data: any) {
    /* Storing undefined in localStorage would then throw when getting and parsing the value */
    if (data !== undefined) {
      localStorage.setItem(`${key}`, JSON.stringify(data));
    }
    return true;
  }
  /**
   * Deletes an item in local storage
   * @param key The item's key
   */
  removeItem(key: string) {
    localStorage.removeItem(`${key}`);
  }
  /**
   * Deletes all items from local storage
   * @returns An RxJS Observable to wait the end of the operation
   */
  clear(): Observable<boolean> {
    localStorage.clear();
    return of(true);
  }

  keys(): Observable<string[]> {
    const keys: string[] = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      keys.push(this.getKey(index) as string);
    }
    return of(keys);
  }

  protected getKey(index: number): string | null {
    const prefixedKey = localStorage.key(index);
    if (prefixedKey !== null) {
      return prefixedKey;
    }
    return null;
  }

  has(key: string) {
    for (let index = 0; index < localStorage.length; index += 1) {
      if (key === this.getKey(index)) {
        return true;
      }
    }
    return false;
  }

  checkIfTokenIsExpired(authToken:any) {
    const expiry = (JSON.parse(atob(authToken.split('.')[1]))).exp;
    return ((Math.floor((new Date()).getTime() / 1000)) >= expiry);
  }
}

