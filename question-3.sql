-- 3. Customers Credit Limit

select
    id,
    name
from customer
where
    country = 'USA'
    and credits > 100000
order by
    id asc
;