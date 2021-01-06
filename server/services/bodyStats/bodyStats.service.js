const statusCodes = require('http-status');
const BodyStat = require('../../models/bodyStats');
const BodyParts = require('./bodyParts');

async function getBodyParts() {
    return {
        code: statusCodes.OK,
        parts: BodyParts,
    };
}

function toKG(value) {
    return (value / 2.205).toFixed(1);
}

function toCM(value) {
    return value * 2.54;
}

function convertUnits(stats) {
    return stats.map((stat) => {
        if (stat.unit === 'lb') {
            return {
                ...stat,
                value: toKG(stat.value),
                unit: 'kg',
                conversion: 'lb',
            };
        }
        if (stat.unit === 'inch') {
            return {
                ...stat,
                value: toCM(stat.value),
                unit: 'cm',
                conversion: 'inch',
            };
        }

        return stat;
    });
}

async function addStats(body) {
    const { user, date, stats } = body;
    // convert units
    const convertedStats = convertUnits(stats);

    const result = await BodyStat.updateOne(
        { user, date: new Date(date) },
        { $set: { stats: convertedStats } },
        { upsert: true }
    );

    return {
        code: statusCodes.OK,
        stats: result,
    };
}

function parseQuery(query) {
    // const inputQuery = { ...query };
    // const fields = ['group', 'sort', 'startDate', 'endDate', 'part'];
    // fields.forEach((field) => delete inputQuery[field]);

    const parsedQuery = {};
    Object.keys(query).forEach((key) => {
        if (key.includes('date')) {
            parsedQuery[key] = new Date(query[key]);
        } else {
            parsedQuery[key] = query[key];
        }
    });

    return parsedQuery;
}

function parseDates(query) {
    const parsedQuery = {};
    Object.keys(query).forEach((key) => {
        if (key.toLowerCase().includes('date')) {
            parsedQuery[key] = new Date(query[key]);
        } else {
            parsedQuery[key] = query[key];
        }
    });
    return parsedQuery;
}

function removeFields(query) {
    const inputQuery = { ...query };
    const fields = ['group', 'sort', 'startDate', 'endDate', 'part'];
    fields.forEach((field) => delete inputQuery[field]);
    return inputQuery;
}

const Groups = {
    month: { $month: '$date' },
    year: { $year: '$date' },
};

function projectQuery(query) {
    const $project = {
        user: '$user',
        date: '$date',
        id: '$stats.id',
        name: '$stats.name',
        value: '$stats.value',
        unit: '$stats.unit',
        conversion: '$stats.conversion',
    };
    if (query.group) $project[group] = Groups[group];
}

function createPartQuery(query) {
    const { part, group } = query;
    const unwind = { $unwind: '$stats' };
    const partQuery = { $match: { 'stats.id': part } };
    const $project = {
        user: '$user',
        date: '$date',
        id: '$stats.id',
        name: '$stats.name',
        value: '$stats.value',
        unit: '$stats.unit',
        conversion: '$stats.conversion',
    };
    $project[group] = Groups[group];
    const $group = {
        id: { $first: '$id' },
        name: { $first: '$name' },
        value: { $sum: '$value' },
        unit: { $first: '$unit' },
        conversion: { $first: '$conversion' },
    };
    $group['_id'] = `$${query.group}`;
    $group[group] = { $first: `$${query.group}` };
    return [unwind, partQuery, { $project }, { $group }];
}

function createDatesQuery(query) {
    const { startDate, endDate } = query;
    const rangeQuery = {
        $match: {
            date: { $gte: startDate, $lte: endDate },
        },
    };
    return rangeQuery;
}

async function getStats(params) {
    const query = parseDates(params);
    const parsedQuery = removeFields(query);

    let statsQuery = [{ $match: parsedQuery }];

    if (query.startDate && query.endDate) {
        const datesQuery = createDatesQuery(query);
        statsQuery.push(datesQuery)
    }

    if (query.part && query.group) {
        const partQuery = createPartQuery(query);
        statsQuery = [...statsQuery, ...partQuery];
    }

    const result = await BodyStat.aggregate(statsQuery);

    return {
        code: statusCodes.OK,
        stats: result,
    };
}

module.exports = {
    getBodyParts,
    addStats,
    getStats,
};
