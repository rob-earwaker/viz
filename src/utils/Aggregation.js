const aggregation = {
    min: 'min',
    minAbs: 'minAbs',
    max: 'max',
    maxAbs: 'maxAbs',
    mean: 'mean',
    allValues: () => ['min', 'minAbs', 'max', 'maxAbs', 'mean']
};

export default aggregation;