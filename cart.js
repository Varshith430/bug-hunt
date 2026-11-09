// cart.js - checkout helpers for our online shop

function getTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  return total;
}

function applyDiscount(total, percent) {
  return total - total * percent;
}

async function saveOrder(db, userId, total) {
  const sql = "INSERT INTO orders (user_id, total) VALUES ('" + userId + "', " + total + ")";
  return db.query(sql);
}

module.exports = { getTotal, applyDiscount, saveOrder };
