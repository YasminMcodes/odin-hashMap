export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null);
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }
    set(key, value) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [{ key, value }];
            this.size++;
        } else {
            const bucket = this.buckets[index];

            const existing = bucket.find(item => item.key === key);

            if (existing) {
                existing.value = value;
            } else {
                bucket.push({ key, value });
                this.size++;
            }
        }
        if(this.size > this.capacity * this.loadFactor){
            const oldBuckets = this.buckets;
            this.capacity *= 2;
            this.buckets = new Array(this.capacity).fill(null);
            this.size = 0;

            for (let bucket of oldBuckets) {
                if(bucket) {
                    for (let item of bucket) {
                        this.set(item.key, item.value);
                    }
                }
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket) return null;

        for (let item of bucket) {
            if (item.key === key) {
                return item.value;
            }
        }
        return null;

    }

    has(key){
        let index = this.hash(key);
        const bucket = this.buckets[index];

        if(!bucket) return false;

        for(let item of bucket) {
            if(item.key === key ) {
                return true;
            }
        }
        return false;
    }
    remove(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];
        if(!bucket) return false;
        for(let i = 0; i<bucket.length; i++) {
            if(bucket[i].key === key) {
                bucket.splice(i,1);
                this.size--;
                return true;
            }
        }
        return false;
    }
    length() {
        return this.size;
    }
    clear() {
        this.capacity = 16;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null)
    }
    keys() {
        let keyArray = [];
        for(let bucket of this.buckets) {
            if(!bucket) continue;

            for(let item of bucket) {
                keyArray.push(item.key)
            }
        }
        return keyArray;
    }
    values() {
        let valuesArray = [];
        for(let bucket of this.buckets) {
            if(!bucket) continue;

            for(let item of bucket) {
                valuesArray.push(item.value);
            }
        }
        return valuesArray;

    }
    entries(){
        let bigArray = []
        for(let bucket of this.buckets) {
            if(!bucket ) continue;

            for(let item of bucket) {
                const innerArray = [];
                innerArray.push(item.key, item.value)
                bigArray.push(innerArray);
            }
        }
        return bigArray;
    }
}