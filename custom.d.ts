/**
 * Created by Code1912 on 2016/9/19.
 */
interface IThenable<R> {
    then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>): IThenable<U>;
    then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void): IThenable<U>;
}

interface IPromise<R> extends IThenable<R> {
    then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => U | IThenable<U>): IPromise<U>;
    then<U>(onFulfilled?: (value: R) => U | IThenable<U>, onRejected?: (error: any) => void): IPromise<U>;
    catch<U>(onRejected?: (error: any) => U | IThenable<U>): IPromise<U>;
}