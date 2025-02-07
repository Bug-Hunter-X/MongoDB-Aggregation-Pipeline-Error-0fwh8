# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error encountered when using MongoDB aggregation pipelines. The incorrect pipeline leads to unexpected results, highlighting the importance of carefully constructing aggregation stages.

## Description
The provided `bug.js` file contains an aggregation pipeline that attempts to count the occurrences of users with a specific status.  However, the pipeline contains a logical flaw, resulting in an inaccurate count.

## Solution
The `bugSolution.js` file provides the corrected aggregation pipeline. The solution addresses the error in the original pipeline, ensuring accurate aggregation results.