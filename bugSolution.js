```javascript
//Corrected aggregation pipeline
db.collection.aggregate([
  {
    $match: { status: "A" }
  },
  {
    $group: {
      _id: "$userId",
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      userId: "$_id",
      count: 1
    }
  }
])
```