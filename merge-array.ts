function mergeSortedCollection(collection1:number[],collection2:number[]): number[] {
  
  const mergedArray:number[] = [];

  let collectionSize:number = collection2.length;
  
  let i:number = 0;
  let j:number = 0;

  while(collectionSize > i) {
    if (j >= collection1.length) {
      mergedArray.push(...collection2.slice(i))
      break;
    } else if (collection2[i] <= collection1[j]) {
      mergedArray.push(collection2[i++]);
    } else {
      mergedArray.push(collection1[j++]);
    }
  }

  if ( j < collection1.length) {
    mergedArray.push(...collection1.slice(j));
  }

  return mergedArray;
}

export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
  
  let mergedArray:number[] = mergeSortedCollection(mergeSortedCollection(collection1.reverse(), collection2), collection3);

  return mergedArray;
}

if (require.main === module) {
  const collection1 = process.argv[2]?.split(',').map(Number) || [];
  const collection2 = process.argv[3]?.split(',').map(Number) || [];
  const collection3 = process.argv[4]?.split(',').map(Number) || [];

  if (collection1.length === 0 || collection2.length === 0 || collection3.length === 0) {
    console.error('Please provide valid input arrays.');
    process.exit(1);
  }

  if (!Array.isArray(collection1) || !Array.isArray(collection2) || !Array.isArray(collection3)) {
    console.error('All parameters must be arrays.');
    process.exit(1);
  }

  if (collection1.some(isNaN) || collection2.some(isNaN) || collection3.some(isNaN)) {
    console.error('All collections must contain valid numbers.');
    process.exit(1);
  }

  const mergedArray = merge(collection1, collection2, collection3);

  console.log('Merged Array:', mergedArray);
}